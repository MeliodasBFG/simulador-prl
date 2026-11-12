const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// 1. Asegurar que js/scenarios.js está actualizado con los 8 escenarios
require('./build_all_scenarios.js');

// 2. Leer archivos
const styleCss = fs.readFileSync(path.join(rootDir, 'css', 'style.css'), 'utf-8');
const audioJs = fs.readFileSync(path.join(rootDir, 'js', 'audio.js'), 'utf-8');
const scenariosJs = fs.readFileSync(path.join(rootDir, 'js', 'scenarios.js'), 'utf-8');
const networkJs = fs.readFileSync(path.join(rootDir, 'js', 'network.js'), 'utf-8');
const appJs = fs.readFileSync(path.join(rootDir, 'js', 'app.js'), 'utf-8');
let html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');

// 3. Reemplazar <link rel="stylesheet" href="css/style.css"> por estilo inline
const styleTag = `<style id="prl-custom-style">\n${styleCss}\n</style>`;
html = html.replace(/<link\s+rel="stylesheet"\s+href="css\/style\.css"[^>]*>/i, styleTag);

// 4. Agregar inline onclick handlers seguros a los botones clave
html = html.replace(
  'id="btn-create-room"',
  'id="btn-create-room" onclick="if (window.prlApp) window.prlApp.handleCreateRoom();"'
);
html = html.replace(
  'id="btn-join-room"',
  'id="btn-join-room" onclick="if (window.prlApp) window.prlApp.handleJoinRoom();"'
);
html = html.replace(
  'id="btn-cancel-host"',
  'id="btn-cancel-host" onclick="if (window.prlApp) window.prlApp.showScreen(\'role-select\');"'
);
html = html.replace(
  'id="btn-cancel-student"',
  'id="btn-cancel-student" onclick="if (window.prlApp) window.prlApp.showScreen(\'role-select\');"'
);
html = html.replace(
  'id="btn-simulate-bots"',
  'id="btn-simulate-bots" onclick="if (window.prlApp) window.prlApp.simulateClassroomBots();"'
);
html = html.replace(
  'id="btn-start-scenario"',
  'id="btn-start-scenario" onclick="if (window.prlApp) window.prlApp.handleHostStartScenario();"'
);
html = html.replace(
  'id="btn-host-end-scenario"',
  'id="btn-host-end-scenario" onclick="if (window.prlApp) window.prlApp.handleHostEndScenario();"'
);
html = html.replace(
  'id="btn-student-finish"',
  'id="btn-student-finish" onclick="if (window.prlApp) window.prlApp.handleStudentFinish();"'
);
html = html.replace(
  'id="btn-next-scenario"',
  'id="btn-next-scenario" onclick="if (window.prlApp) window.prlApp.handleHostNextScenario();"'
);

// 5. Inyectar todo el JS inline antes de </body> eliminando los scripts externos
const bundleJs = `
  <!-- ==========================================
       PRL APPLICATION BUNDLE (100% STANDALONE)
       ========================================== -->
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

const scriptsRegex = /<!-- Scripts de la Aplicación -->[\s\S]*?<script src="js\/app\.js"><\/script>/i;
if (scriptsRegex.test(html)) {
  html = html.replace(scriptsRegex, bundleJs);
} else {
  html = html.replace('</body>', `${bundleJs}\n</body>`);
}

// 6. Guardar index.html en raíz
fs.writeFileSync(path.join(rootDir, 'index.html'), html, 'utf-8');
console.log('✅ Generated standalone index.html (size: ' + (html.length / 1024).toFixed(1) + ' KB)');

// 7. También replicar en public/ para compatibilidad con cualquier hosting/Vercel
const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'index.html'), html, 'utf-8');
console.log('✅ Synchronized public/index.html');
