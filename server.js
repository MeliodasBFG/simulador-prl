/**
 * PRL CLASSROOM MULTIPLAYER SERVER (Opcional para red local WiFi / Internet)
 * Servidor HTTP y WebSocket nativo sin dependencias externas.
 * Permite que dispositivos físicos reales (móviles de alumnos) se conecten al Host.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

// 1. Servidor de Archivos Estáticos
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(PUBLIC_DIR, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

// 2. Servidor WebSocket Nativo (Sin dependencias npm)
const clients = new Set();

server.on('upgrade', (req, socket, head) => {
  const key = req.headers['sec-websocket-key'];
  if (!key) {
    socket.destroy();
    return;
  }

  const acceptKey = crypto
    .createHash('sha1')
    .update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
    .digest('base64');

  const headers = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${acceptKey}`
  ];

  socket.write(headers.join('\r\n') + '\r\n\r\n');
  clients.add(socket);

  socket.on('data', (buffer) => {
    const message = decodeWebSocketFrame(buffer);
    if (message) {
      // Reenviar mensaje a todos los demás clientes de la sala
      for (const client of clients) {
        if (client !== socket && client.writable) {
          sendWebSocketFrame(client, message);
        }
      }
    }
  });

  socket.on('close', () => {
    clients.delete(socket);
  });

  socket.on('error', () => {
    clients.delete(socket);
  });
});

function decodeWebSocketFrame(buffer) {
  if (buffer.length < 2) return null;
  const secondByte = buffer[1];
  const isMasked = (secondByte & 0x80) === 0x80;
  let length = secondByte & 0x7f;
  let offset = 2;

  if (length === 126) {
    length = buffer.readUInt16BE(2);
    offset += 2;
  } else if (length === 127) {
    return null;
  }

  let maskKey = null;
  if (isMasked) {
    maskKey = buffer.slice(offset, offset + 4);
    offset += 4;
  }

  const payload = buffer.slice(offset, offset + length);
  if (isMasked) {
    for (let i = 0; i < payload.length; i++) {
      payload[i] ^= maskKey[i % 4];
    }
  }

  return payload.toString('utf-8');
}

function sendWebSocketFrame(socket, message) {
  const payload = Buffer.from(message, 'utf-8');
  const length = payload.length;
  let header;

  if (length <= 125) {
    header = Buffer.from([0x81, length]);
  } else if (length <= 65535) {
    header = Buffer.alloc(4);
    header[0] = 0x81;
    header[1] = 126;
    header.writeUInt16BE(length, 2);
  } else {
    return;
  }

  socket.write(Buffer.concat([header, payload]));
}

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 SERVIDOR MULTIJUGADOR PRL KAHOOT INICIADO EN PUERTO ${PORT}`);
  console.log(`💻 Accede desde este equipo: http://localhost:${PORT}`);
  console.log(`📱 En móviles en la misma red Wi-Fi: http://<tu-ip-local>:${PORT}`);
  console.log(`=======================================================`);
});
