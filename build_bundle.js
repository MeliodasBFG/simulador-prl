const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// 1. Ejecutar generador de escenarios realistas
require('./generate_rich_scenarios.js');

// 2. Leer archivos de soporte
const styleCss = fs.readFileSync(path.join(rootDir, 'css', 'style.css'), 'utf-8');
const audioJs = fs.readFileSync(path.join(rootDir, 'js', 'audio.js'), 'utf-8');
const scenariosJs = fs.readFileSync(path.join(rootDir, 'js', 'scenarios.js'), 'utf-8');
const networkJs = fs.readFileSync(path.join(rootDir, 'js', 'network.js'), 'utf-8');
const appJs = fs.readFileSync(path.join(rootDir, 'js', 'app.js'), 'utf-8');
let html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');

// 3. Estilo inline
if (html.includes('<style id="prl-custom-style">')) {
  html = html.replace(
    /<style id="prl-custom-style">[\s\S]*?<\/style>/i,
    `<style id="prl-custom-style">\n${styleCss}\n</style>`
  );
} else {
  html = html.replace(/<link\s+rel="stylesheet"\s+href="css\/style\.css"[^>]*>/i, `<style id="prl-custom-style">\n${styleCss}\n</style>`);
}

// 4. Bloque bundle
const bundleMarker = '<!-- ==========================================\n       PRL APPLICATION BUNDLE (100% STANDALONE)\n       ========================================== -->';

const bundleJs = `  ${bundleMarker}
  <script id="prl-bundle-audio">
${audioJs}
  </script>
  <script id="prl-bundle-scenarios">
${scenariosJs}
  </script>
  <script id="prl-bundle-network">
${networkJs}
  </script>
  <script id="prl-bundle-app">
${appJs}
  </script>
`;

if (html.includes(bundleMarker)) {
  // Reemplazar bundle existente hasta antes de </body>
  const preBundle = html.split(bundleMarker)[0];
  html = `${preBundle}${bundleJs}\n</body>\n</html>`;
} else if (/<!-- Scripts de la Aplicación -->[\s\S]*?<script src="js\/app\.js"><\/script>/i.test(html)) {
  html = html.replace(/<!-- Scripts de la Aplicación -->[\s\S]*?<script src="js\/app\.js"><\/script>/i, bundleJs);
} else {
  html = html.replace('</body>', `${bundleJs}\n</body>`);
}

// 5. Guardar en raíz y en public/
fs.writeFileSync(path.join(rootDir, 'index.html'), html, 'utf-8');
console.log('✅ Generated standalone index.html (size: ' + (html.length / 1024).toFixed(1) + ' KB)');

const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'index.html'), html, 'utf-8');
console.log('✅ Synchronized public/index.html');
