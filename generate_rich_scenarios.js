const fs = require('fs');
const path = require('path');

// ============================================================================
// GENERADOR DE ESCENARIOS 2D REALISTAS DE ALTA DEFINICIÓN (PRL CLASSROOM LIVE)
// 8 Escenarios x 12 Elementos Concretos (Peligros reales + Elementos seguros)
// Modelos 2D con anatomía, perspectiva y ángulos reconocibles a simple vista.
// Sin etiquetas <filter> e IDs SVG únicos por escenario para máxima fiabilidad.
// ============================================================================

// Helpers compartidos para dibujar figuras humanas articuladas y sombras suaves
function svgFloorShadow(cx, cy, rx, ry) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#020617" opacity="0.28"/>`;
}

// ============================================================================
// 1. HOSPITAL Y URGENCIAS CLÍNICAS
// ============================================================================
const svgHospital = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="hospWallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f0fdfa"/>
      <stop offset="54%" stop-color="#ccfbf1"/>
      <stop offset="55%" stop-color="#0d9488"/>
      <stop offset="100%" stop-color="#115e59"/>
    </linearGradient>
    <linearGradient id="hospFloorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="18%" stop-color="#f8fafc"/>
      <stop offset="55%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="hospChrome" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="28%" stop-color="#f8fafc"/>
      <stop offset="55%" stop-color="#94a3b8"/>
      <stop offset="82%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="hospO2Body" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="32%" stop-color="#ffffff"/>
      <stop offset="80%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="hospO2Shoulder" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="40%" stop-color="#22c55e"/>
      <stop offset="85%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  </defs>

  <!-- Pared hospitalaria con zócalo higiénico y juntas -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#hospWallGrad)"/>
  <g stroke="#99f6e4" stroke-width="1" opacity="0.4">
    <line x1="0" y1="30" x2="1000" y2="30"/><line x1="0" y1="68" x2="1000" y2="68"/>
    <line x1="120" y1="0" x2="120" y2="68"/><line x1="340" y1="0" x2="340" y2="68"/><line x1="680" y1="0" x2="680" y2="68"/><line x1="880" y1="0" x2="880" y2="68"/>
  </g>
  <!-- Reloj de pared clínico en fondo superior derecho -->
  <g transform="translate(705, 58)">
    <circle cx="22" cy="22" r="22" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
    <circle cx="22" cy="22" r="2" fill="#0f172a"/>
    <line x1="22" y1="22" x2="22" y2="10" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
    <line x1="22" y1="22" x2="31" y2="25" stroke="#0284c7" stroke-width="1.5" stroke-linecap="round"/>
  </g>

  <!-- ITEM 9 (SEGURO): Luminaria LED estanca empotrada -->
  <g id="hosp-led" transform="translate(90, 16)">
    <rect width="190" height="30" rx="5" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
    <rect x="6" y="4" width="178" height="22" rx="3" fill="#ffffff"/>
    <line x1="12" y1="15" x2="178" y2="15" stroke="#e0f2fe" stroke-width="2"/>
    <polygon points="6,26 184,26 245,140 -55,140" fill="#ffffff" opacity="0.1"/>
  </g>
  <rect x="615" y="16" width="175" height="28" rx="4" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" opacity="0.92"/>

  <!-- ITEM 5 (SEGURO): Panel de cabecero de gases medicinales -->
  <g transform="translate(382, 74)">
    <rect width="268" height="48" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
    <rect x="4" y="4" width="260" height="8" rx="2" fill="#e2e8f0"/>
    <circle cx="40" cy="28" r="13" fill="#ffffff" stroke="#0284c7" stroke-width="3"/><text x="40" y="31" font-size="8" font-weight="bold" fill="#0284c7" text-anchor="middle">O2</text>
    <circle cx="84" cy="28" r="13" fill="#ffffff" stroke="#eab308" stroke-width="3"/><text x="84" y="31" font-size="7" font-weight="bold" fill="#b45309" text-anchor="middle">VAC</text>
    <circle cx="128" cy="28" r="13" fill="#ffffff" stroke="#10b981" stroke-width="3"/><text x="128" y="31" font-size="7" font-weight="bold" fill="#047857" text-anchor="middle">AIRE</text>
    <rect x="166" y="18" width="22" height="18" rx="2" fill="#16a34a" stroke="#14532d" stroke-width="1"/>
    <rect x="196" y="18" width="22" height="18" rx="2" fill="#16a34a" stroke="#14532d" stroke-width="1"/>
    <rect x="228" y="19" width="20" height="16" rx="2" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
    <circle cx="238" cy="27" r="3" fill="#ffffff"/>
  </g>

  <!-- ITEM 2 (SEGURO): Pasamanos continuo de pared con soportes 3D -->
  <rect x="0" y="230" width="1000" height="18" fill="#d97706" stroke="#b45309" stroke-width="1.5"/>
  <rect x="0" y="232" width="1000" height="5" fill="#fbbf24"/>
  <g fill="url(#hospChrome)" stroke="#475569" stroke-width="1">
    <rect x="65" y="248" width="12" height="18" rx="2"/><rect x="215" y="248" width="12" height="18" rx="2"/>
    <rect x="445" y="248" width="12" height="18" rx="2"/><rect x="745" y="248" width="12" height="18" rx="2"/>
  </g>

  <!-- Suelo vinílico conductivo continuo con media caña sanitaria y juntas soldadas (ITEM 11) -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#hospFloorGrad)"/>
  <path d="M0 332 L1000 332 L1000 344 L0 344 Z" fill="#0f766e"/>
  <g stroke="#ffffff" stroke-width="1.5" opacity="0.5">
    <line x1="0" y1="415" x2="1000" y2="415"/><line x1="0" y1="498" x2="1000" y2="498"/>
    <line x1="180" y1="340" x2="40" y2="600"/><line x1="470" y1="340" x2="365" y2="600"/><line x1="760" y1="340" x2="730" y2="600"/>
  </g>
  <!-- Detalle de lámina vinílica continua soldada y banda conductiva en zona derecha (ITEM 11) -->
  <g transform="translate(745, 488)">
    <polygon points="20,10 210,10 225,75 5,75" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" opacity="0.7"/>
    <ellipse cx="115" cy="42" rx="75" ry="16" fill="#ffffff" opacity="0.45"/>
    <line x1="18" y1="62" x2="212" y2="62" stroke="#0d9488" stroke-width="2" stroke-dasharray="6,4" opacity="0.7"/>
  </g>

  <!-- ITEM 10 (SEGURO): Enchufes schuko grado médico verdes con toma de tierra -->
  <g transform="translate(888, 246)">
    <rect width="84" height="42" rx="5" fill="#16a34a" stroke="#14532d" stroke-width="2"/>
    <circle cx="24" cy="21" r="11" fill="#ecfdf5" stroke="#15803d" stroke-width="1.5"/>
    <circle cx="19" cy="21" r="2.2" fill="#0f172a"/><circle cx="29" cy="21" r="2.2" fill="#0f172a"/>
    <line x1="24" y1="10" x2="24" y2="14" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="60" cy="21" r="11" fill="#ecfdf5" stroke="#15803d" stroke-width="1.5"/>
    <circle cx="55" cy="21" r="2.2" fill="#0f172a"/><circle cx="65" cy="21" r="2.2" fill="#0f172a"/>
    <circle cx="42" cy="11" r="2.5" fill="#86efac"/>
    <path d="M60 32 Q64 78 52 115" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Mesa auxiliar mayo con batea y jeringuilla con aguja hipodérmica destapada -->
  <g id="danger-aguja" transform="translate(78, 340)">
    ${svgFloorShadow(78, 206, 62, 10)}
    <rect x="70" y="96" width="12" height="102" fill="url(#hospChrome)" stroke="#475569" stroke-width="1"/>
    <rect x="26" y="192" width="100" height="10" rx="3" fill="#475569"/>
    <circle cx="38" cy="204" r="7" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="114" cy="204" r="7" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <!-- Tablero de acero de mesa mayo -->
    <rect x="0" y="80" width="160" height="18" rx="4" fill="url(#hospChrome)" stroke="#475569" stroke-width="1.5"/>
    <!-- Batea quirúrgica en 3/4 -->
    <path d="M12 80 C34 72, 102 72, 126 80 L118 93 C98 97, 36 97, 18 93 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
    <!-- Jeringuilla graduada grande y clara con aguja expuesta -->
    <g transform="translate(40, 62) rotate(-7)">
      <rect x="20" y="0" width="60" height="16" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" opacity="0.95"/>
      <rect x="22" y="3" width="26" height="10" rx="1" fill="#dc2626" opacity="0.88"/>
      <g stroke="#0369a1" stroke-width="1">
        <line x1="30" y1="0" x2="30" y2="5"/><line x1="42" y1="0" x2="42" y2="5"/><line x1="54" y1="0" x2="54" y2="5"/><line x1="66" y1="0" x2="66" y2="5"/>
      </g>
      <rect x="80" y="4" width="26" height="8" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
      <rect x="105" y="-1" width="5" height="18" rx="1" fill="#475569"/>
      <polygon points="20,3 10,6 10,10 20,13" fill="#0284c7"/>
      <line x1="10" y1="8" x2="-30" y2="8" stroke="#475569" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="-31" cy="10" r="3.5" fill="#dc2626"/>
    </g>
    <!-- Gasa manchada de sangre -->
    <ellipse cx="136" cy="84" rx="11" ry="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <circle cx="135" cy="84" r="4.5" fill="#dc2626" opacity="0.85"/>
  </g>

  <!-- ITEM 8 (PELIGRO): Celador en 3/4 perfil inclinado levantando caja pesada en sobreesfuerzo lumbar -->
  <g id="hosp-danger-ergonomia" transform="translate(268, 224)">
    ${svgFloorShadow(80, 244, 58, 9)}
    <!-- Piernas rectas sin flexionar rodillas y zuecos hospitalarios apoyados en el suelo -->
    <path d="M72 140 L66 232 L82 232 L87 140 Z" fill="#0f766e" stroke="#134e4a" stroke-width="1.5"/>
    <path d="M90 140 L86 232 L102 232 L105 140 Z" fill="#0d9488" stroke="#134e4a" stroke-width="1.5"/>
    <path d="M56 232 Q68 228 84 234 L84 244 L56 244 Z" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
    <path d="M78 232 Q90 228 106 234 L106 244 L78 244 Z" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <!-- Caja pesada en el suelo que intenta levantar con la espalda doblada -->
    <g transform="translate(2, 186)">
      <rect width="54" height="48" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="6" y="6" width="42" height="8" fill="#d97706"/>
      <text x="27" y="34" font-size="10" font-weight="bold" fill="#fef08a" text-anchor="middle">25 kg</text>
    </g>
    <!-- Torso encorvado conectado anatómicamente a la cadera -->
    <path d="M104 142 C108 112, 86 82, 46 80 C34 80, 26 92, 30 105 C42 122, 68 138, 72 144 Z" fill="#14b8a6" stroke="#0f766e" stroke-width="2"/>
    <!-- Brazo derecho articulado bajando hacia la caja con guantes azules -->
    <path d="M46 96 L36 142 L28 184" fill="none" stroke="#0d9488" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="28" cy="186" r="7" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
    <!-- Cuello + Cabeza en perfil mirando hacia la caja con mascarilla quirúrgica -->
    <rect x="20" y="70" width="14" height="16" fill="#fed7aa" transform="rotate(-25, 27, 78)"/>
    <g transform="translate(8, 44)">
      <circle cx="20" cy="20" r="17" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <path d="M4 16 C4 0, 35 -2, 37 14 C30 11, 14 11, 4 16 Z" fill="#451a03"/>
      <circle cx="14" cy="18" r="2" fill="#0f172a"/>
      <path d="M4 21 L22 21 L20 35 Q8 36 4 21 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
    </g>
    <!-- Rayos rojos de dolor lumbar en la curva de la espalda -->
    <path d="M98 76 L112 64 L106 76 L122 68" fill="none" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M84 68 L90 50 M108 92 L125 90" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- ITEM 6 (PELIGRO): Bolsa amarilla de residuos biosanitarios rota derramando sangre y gasas -->
  <g id="danger-residuos" transform="translate(335, 442)">
    <!-- Charco de líquido biosanitario derramado -->
    <path d="M10 66 C45 48, 118 46, 162 62 C192 75, 178 108, 128 116 C72 124, 18 110, 4 86 Z" fill="#991b1b" opacity="0.88"/>
    <path d="M36 70 Q75 62 115 72" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
    <!-- Bolsa amarilla arrugada con cuello anudado -->
    <g transform="translate(46, 8)">
      <path d="M48 16 L40 0 L52 4 L62 -2 L58 16 Z" fill="#eab308" stroke="#a16207" stroke-width="1.5"/>
      <path d="M22 60 C8 42, 18 18, 48 14 C72 12, 92 18, 104 36 C116 54, 118 76, 88 84 C54 92, 32 84, 22 60 Z" fill="#facc15" stroke="#a16207" stroke-width="2"/>
      <!-- Desgarro lateral con tubo roto -->
      <path d="M82 62 L98 54 L94 70 L108 66 L96 78 Z" fill="#7f1d1d"/>
      <rect x="92" y="72" width="22" height="6" rx="2" fill="#e0f2fe" stroke="#dc2626" stroke-width="1" transform="rotate(20, 98, 75)"/>
      <!-- Símbolo Riesgo Biológico -->
      <g transform="translate(52, 36) scale(0.8)">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#0f172a" stroke-width="2.5"/>
        <circle cx="8" cy="8" r="6" fill="none" stroke="#0f172a" stroke-width="2"/>
        <circle cx="16" cy="8" r="6" fill="none" stroke="#0f172a" stroke-width="2"/>
        <circle cx="12" cy="16" r="6" fill="none" stroke="#0f172a" stroke-width="2"/>
        <circle cx="12" cy="12" r="2.5" fill="#0f172a"/>
      </g>
    </g>
  </g>

  <!-- ITEM 4 (CAMILLA SIN FRENOS) + ITEM 7 (GOTERO IV) + ITEM 12 (PEDAL DE FRENO LEVANTADO) -->
  <g id="danger-camilla" transform="translate(485, 290)">
    ${svgFloorShadow(124, 198, 108, 10)}
    <rect x="14" y="106" width="220" height="12" rx="4" fill="url(#hospChrome)" stroke="#475569" stroke-width="1.5"/>
    <rect x="40" y="118" width="16" height="54" fill="url(#hospChrome)" stroke="#64748b" stroke-width="1"/>
    <rect x="184" y="118" width="16" height="54" fill="url(#hospChrome)" stroke="#64748b" stroke-width="1"/>
    <rect x="26" y="166" width="194" height="11" rx="3" fill="#334155"/>
    <!-- Cabecero y piecero de camilla -->
    <rect x="4" y="34" width="10" height="72" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
    <rect x="232" y="28" width="10" height="78" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
    <!-- Colchón azul clínico, almohada y sábana -->
    <rect x="12" y="52" width="222" height="28" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <path d="M18 52 L175 52 L175 66 Q95 72 18 64 Z" fill="#f8fafc" opacity="0.85"/>
    <rect x="188" y="42" width="42" height="16" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- Barandilla lateral bajada (colgando abierta) -->
    <g transform="translate(32, 82)">
      <rect width="176" height="6" rx="2" fill="url(#hospChrome)" stroke="#475569"/>
      <line x1="25" y1="6" x2="25" y2="30" stroke="#94a3b8" stroke-width="3.5"/>
      <line x1="75" y1="6" x2="75" y2="30" stroke="#94a3b8" stroke-width="3.5"/>
      <line x1="125" y1="6" x2="125" y2="30" stroke="#94a3b8" stroke-width="3.5"/>
      <line x1="160" y1="6" x2="160" y2="30" stroke="#94a3b8" stroke-width="3.5"/>
    </g>
    <!-- ITEM 7 (SEGURO): Soporte telescópico de gotero IV con bolsa de suero y cámara de goteo -->
    <g transform="translate(216, -110)">
      <line x1="0" y1="0" x2="0" y2="165" stroke="url(#hospChrome)" stroke-width="5"/>
      <path d="M-20 4 Q-20 -4 -10 -4 L10 -4 Q20 -4 20 4" fill="none" stroke="#475569" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="-22" y="8" width="24" height="40" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <rect x="-18" y="18" width="16" height="20" fill="#38bdf8" opacity="0.55"/>
      <text x="-10" y="30" font-size="6" font-weight="bold" fill="#0369a1" text-anchor="middle">SF</text>
      <rect x="-13" y="48" width="6" height="12" rx="2" fill="#ffffff" stroke="#0284c7"/>
      <path d="M-10 60 Q-16 108 -6 146" fill="none" stroke="#94a3b8" stroke-width="2"/>
    </g>
    <!-- ITEM 12 (PELIGRO): Ruedas con pedal rojo de freno LEVANTADO (sin trabar) -->
    <g transform="translate(38, 174)">
      <circle cx="14" cy="16" r="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
      <circle cx="14" cy="16" r="5" fill="url(#hospChrome)"/>
      <rect x="20" y="-4" width="22" height="7" rx="2" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" transform="rotate(-24, 20, 0)"/>
    </g>
    <g transform="translate(180, 174)">
      <circle cx="14" cy="16" r="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
      <circle cx="14" cy="16" r="5" fill="url(#hospChrome)"/>
      <rect x="20" y="-4" width="22" height="7" rx="2" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" transform="rotate(-24, 20, 0)"/>
    </g>
    <!-- Flechas de desplazamiento accidental -->
    <path d="M-10 120 L-36 120 M-25 112 L-36 120 L-25 128" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- ITEM 1 (PELIGRO): Botella alta de O2 inclinandose con cadena rota -->
  <g id="danger-oxigeno" transform="translate(792, 125)">
    ${svgFloorShadow(48, 398, 42, 10)}
    <!-- Soporte de pared con cadena rota colgando -->
    <rect x="-12" y="175" width="14" height="28" rx="2" fill="#334155" stroke="#0f172a"/>
    <path d="M0 190 Q-18 228 4 268 Q-12 300 0 328" fill="none" stroke="#94a3b8" stroke-width="5" stroke-dasharray="8,5" stroke-linecap="round"/>
    <g transform="rotate(6, 48, 395)">
      <rect x="16" y="88" width="66" height="308" rx="18" fill="url(#hospO2Body)" stroke="#64748b" stroke-width="2.5"/>
      <path d="M16 128 Q16 62 49 62 Q82 62 82 128 Z" fill="url(#hospO2Shoulder)" stroke="#14532d" stroke-width="2"/>
      <!-- Grifo, volante y doble manómetro -->
      <rect x="43" y="40" width="12" height="24" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
      <rect x="33" y="34" width="32" height="7" rx="3" fill="#0f172a"/>
      <g transform="translate(36, 8)">
        <circle cx="14" cy="14" r="14" fill="#ffffff" stroke="#334155" stroke-width="2"/>
        <line x1="14" y1="14" x2="21" y2="7" stroke="#ef4444" stroke-width="2"/>
        <circle cx="36" cy="20" r="10" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
      </g>
      <g transform="translate(52, 238) rotate(-90)">
        <text x="0" y="4" font-size="11" font-weight="bold" fill="#047857" letter-spacing="2.5">OXÍGENO MEDICINAL</text>
      </g>
      <polygon points="49,144 60,157 49,170 38,157" fill="#eab308" stroke="#a16207" stroke-width="1.5"/>
      <ellipse cx="49" cy="393" rx="33" ry="8" fill="#475569"/>
    </g>
  </g>
</svg>
`;

// ============================================================================
// 2. OFICINA Y DESPACHOS CORPORATIVOS
// ============================================================================
const svgOficina = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="ofiWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="65%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="ofiFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="35%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="ofiWoodDesk" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="45%" stop-color="#b45309"/>
      <stop offset="85%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>
    <linearGradient id="ofiCoffeeGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#451a03"/>
      <stop offset="55%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#270e02"/>
    </linearGradient>
  </defs>

  <!-- Pared y moqueta técnica ignífuga en losetas (ITEM 9) -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#ofiWall)"/>
  <rect x="0" y="340" width="1000" height="260" fill="url(#ofiFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <g stroke="#1e293b" stroke-width="1.5" opacity="0.65">
    <line x1="0" y1="405" x2="1000" y2="405"/><line x1="0" y1="485" x2="1000" y2="485"/><line x1="0" y1="560" x2="1000" y2="560"/>
    <line x1="160" y1="340" x2="40" y2="600"/><line x1="420" y1="340" x2="320" y2="600"/><line x1="680" y1="340" x2="680" y2="600"/><line x1="880" y1="340" x2="940" y2="600"/>
  </g>
  <!-- Caja técnica enrasada en moqueta (ITEM 9 derecha) -->
  <g transform="translate(800, 502)">
    <polygon points="10,0 130,0 142,46 0,46" fill="#64748b" opacity="0.35" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="52" y="16" width="38" height="14" rx="2" fill="#334155" stroke="#94a3b8" stroke-width="1"/>
  </g>

  <!-- ITEM 7 (SEGURO): Ventanal exterior con persiana veneciana -->
  <g transform="translate(360, 28)">
    <rect width="300" height="175" rx="4" fill="#38bdf8" opacity="0.25"/>
    <rect width="300" height="175" rx="4" fill="none" stroke="#64748b" stroke-width="6"/>
    <!-- Edificios horizonte -->
    <rect x="25" y="60" width="46" height="112" fill="#0f172a" opacity="0.45"/>
    <rect x="85" y="40" width="55" height="132" fill="#0f172a" opacity="0.55"/>
    <rect x="180" y="55" width="60" height="117" fill="#0f172a" opacity="0.45"/>
    <!-- Lamas de persiana veneciana + varilla -->
    <g stroke="#cbd5e1" stroke-width="3.2" opacity="0.9">
      <line x1="6" y1="14" x2="294" y2="14"/><line x1="6" y1="24" x2="294" y2="24"/>
      <line x1="6" y1="34" x2="294" y2="34"/><line x1="6" y1="44" x2="294" y2="44"/>
      <line x1="6" y1="54" x2="294" y2="54"/>
    </g>
    <line x1="16" y1="8" x2="16" y2="95" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="150" y1="0" x2="150" y2="175" stroke="#64748b" stroke-width="4"/>
    <line x1="0" y1="90" x2="300" y2="90" stroke="#64748b" stroke-width="4"/>
  </g>

  <!-- ITEM 2 (PELIGRO): Archivador metálico venciendo por cajones superiores abiertos -->
  <g id="danger-archivador" transform="translate(228, 146) rotate(9, 45, 175)">
    <rect width="92" height="190" rx="4" fill="#64748b" stroke="#334155" stroke-width="3"/>
    <g transform="translate(-34, 12)">
      <rect width="122" height="36" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <rect x="42" y="14" width="34" height="6" rx="2" fill="#334155"/>
      <polygon points="8,8 26,-6 44,8" fill="#f59e0b"/><polygon points="28,8 52,-4 68,8" fill="#fef08a"/>
    </g>
    <g transform="translate(-26, 56)">
      <rect width="114" height="36" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <rect x="40" y="14" width="34" height="6" rx="2" fill="#334155"/>
    </g>
    <g transform="translate(-16, 100)">
      <rect width="104" height="36" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <rect x="38" y="14" width="34" height="6" rx="2" fill="#334155"/>
    </g>
    <g transform="translate(4, 144)">
      <rect width="84" height="36" rx="2" fill="#475569"/>
      <rect x="28" y="14" width="28" height="6" rx="2" fill="#1e293b"/>
    </g>
  </g>

  <!-- ITEM 5 (SEGURO): Mesa 1 izquierda con puesto informático y monitor curvo -->
  <g transform="translate(62, 310)">
    <rect x="0" y="38" width="248" height="16" rx="4" fill="url(#ofiWoodDesk)" stroke="#78350f" stroke-width="1"/>
    <rect x="14" y="54" width="12" height="135" fill="#334155"/><rect x="222" y="54" width="12" height="135" fill="#334155"/>
    <!-- Monitor panorámico curvo -->
    <path d="M62 -52 Q124 -42 186 -52 L186 18 Q124 26 62 18 Z" fill="#0f172a" stroke="#64748b" stroke-width="2.5"/>
    <path d="M67 -47 Q124 -38 181 -47 L181 13 Q124 20 67 13 Z" fill="#0284c7"/>
    <polyline points="78,-12 96,-26 116,-16 140,-34 166,-22" fill="none" stroke="#bae6fd" stroke-width="2.5"/>
    <rect x="118" y="18" width="12" height="20" fill="#475569"/>
    <ellipse cx="124" cy="38" rx="24" ry="4" fill="#334155"/>
    <rect x="86" y="42" width="60" height="7" rx="2" fill="#1e293b"/><ellipse cx="164" cy="45" rx="7" ry="4" fill="#1e293b"/>
  </g>

  <!-- ITEM 8 (SEGURO): Papelera metálica de rejilla apoyada en suelo junto a mesa izquierda -->
  <g transform="translate(34, 456)">
    ${svgFloorShadow(24, 62, 20, 5)}
    <polygon points="4,0 44,0 38,60 10,60" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <line x1="12" y1="8" x2="15" y2="52" stroke="#475569" stroke-width="1.5"/>
    <line x1="24" y1="8" x2="24" y2="52" stroke="#475569" stroke-width="1.5"/>
    <line x1="36" y1="8" x2="33" y2="52" stroke="#475569" stroke-width="1.5"/>
    <polygon points="14,-2 24,-10 34,-1 24,5" fill="#f8fafc" stroke="#cbd5e1"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Mueble cajonera auxiliar con taza de café derramada sobre regleta -->
  <g id="danger-cafe" transform="translate(106, 384)">
    <!-- Cajonera auxiliar apoyada en suelo (y=44..120 relativa = y=428..504) -->
    <rect x="8" y="46" width="126" height="74" rx="3" fill="#92400e" stroke="#451a03" stroke-width="2"/>
    <rect x="4" y="40" width="134" height="9" rx="2" fill="url(#ofiWoodDesk)" stroke="#78350f"/>
    <rect x="18" y="56" width="106" height="24" rx="2" fill="#b45309" stroke="#78350f"/>
    <rect x="18" y="86" width="106" height="26" rx="2" fill="#b45309" stroke="#78350f"/>
    <!-- Regleta sobre la cajonera -->
    <g transform="translate(42, 22)">
      <rect width="84" height="20" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="20" cy="10" r="5" fill="#cbd5e1"/><circle cx="40" cy="10" r="5" fill="#cbd5e1"/><circle cx="60" cy="10" r="5" fill="#cbd5e1"/>
      <circle cx="8" cy="10" r="2.5" fill="#ef4444"/>
    </g>
    <!-- Taza roja volcada derramando café con chispas -->
    <g transform="translate(14, 10) rotate(68)">
      <rect width="22" height="26" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <path d="M22 6 Q32 13 22 20" fill="none" stroke="#dc2626" stroke-width="3"/>
    </g>
    <path d="M22 36 Q48 30 74 36 Q100 32 118 41 Q96 48 68 45 Q34 48 22 36 Z" fill="url(#ofiCoffeeGrad)"/>
    <path d="M76 18 L80 8 L88 14 L94 0 L88 18 Z" fill="#facc15" stroke="#eab308" stroke-width="1.5"/>
  </g>

  <!-- ITEM 12 (PELIGRO): Regleta eléctrica sobrecargada en cascada en suelo -->
  <g transform="translate(274, 468)">
    ${svgFloorShadow(40, 32, 38, 6)}
    <rect width="80" height="22" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <rect x="8" y="-14" width="16" height="16" rx="2" fill="#0f172a"/>
    <rect x="26" y="-20" width="18" height="22" rx="2" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
    <rect x="46" y="-14" width="16" height="16" rx="2" fill="#ef4444"/>
    <circle cx="70" cy="11" r="4" fill="#ef4444"/>
    <path d="M35 -22 L30 -34 L38 -28 L45 -40" fill="none" stroke="#facc15" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <!-- ITEM 1 (PELIGRO): Cables sueltos cruzando pasillo central -->
  <g id="danger-cables">
    <path d="M370 500 C 425 470, 465 562, 520 495 S 595 552, 665 498" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
    <path d="M375 524 C 415 548, 455 462, 512 544 S 585 480, 662 532" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <path d="M382 488 C 435 552, 488 476, 546 550 S 602 488, 658 544" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="515" cy="512" rx="18" ry="22" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-22, 515, 512)"/>
  </g>

  <!-- ITEM 10 (PELIGRO: TRABAJADOR CON FLEXIÓN CERVICAL ANTE PORTÁTIL BAJO) -->
  <g id="ofi-danger-ergonomia" transform="translate(508, 232)">
    <!-- Mesa 2 -->
    <rect x="28" y="112" width="165" height="16" rx="4" fill="url(#ofiWoodDesk)" stroke="#78350f"/>
    <rect x="40" y="128" width="11" height="122" fill="#334155"/><rect x="172" y="128" width="11" height="122" fill="#334155"/>
    <!-- Portátil plano muy bajo sobre la mesa (x=100..158 relative -> 608..666) -->
    <rect x="96" y="106" width="60" height="6" rx="1" fill="#475569"/>
    <polygon points="104,106 154,106 164,76 114,76" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <polygon points="107,103 151,103 159,80 116,80" fill="#38bdf8"/>
    <!-- Silla intacta del trabajador (izquierda de la mesa) -->
    <g transform="translate(8, 72)">
      <rect x="0" y="0" width="14" height="58" rx="4" fill="#1e293b" stroke="#0f172a"/>
      <rect x="6" y="54" width="42" height="12" rx="4" fill="#1e293b" stroke="#0f172a"/>
      <rect x="24" y="66" width="6" height="40" fill="#475569"/>
      <line x1="10" y1="106" x2="46" y2="106" stroke="#334155" stroke-width="4"/>
      <circle cx="10" cy="112" r="4" fill="#0f172a"/><circle cx="46" cy="112" r="4" fill="#0f172a"/>
    </g>
    <!-- Trabajador sentado con torso inclinado y cuello doblado mirando hacia abajo -->
    <g transform="translate(18, 12)">
      <!-- Piernas y zapatos bajo la mesa -->
      <path d="M22 108 L64 108 L68 158" fill="none" stroke="#1e3a8a" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="72" cy="162" rx="10" ry="5" fill="#0f172a"/>
      <!-- Camisa azul encorvada hacia delante -->
      <path d="M16 106 C14 72, 28 48, 52 46 L68 62 C58 84, 48 104, 34 112 Z" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
      <!-- Brazo hacia el teclado del portátil -->
      <path d="M44 64 L70 92 L94 94" fill="none" stroke="#38bdf8" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="96" cy="94" r="5" fill="#fed7aa"/>
      <!-- Cuello flexionado + Cabeza mirando abajo hacia portátil + Rayos dolor cervical -->
      <rect x="52" y="34" width="12" height="16" fill="#fed7aa" transform="rotate(38, 58, 42)"/>
      <g transform="translate(54, 12) rotate(28, 18, 18)">
        <circle cx="18" cy="18" r="15" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
        <path d="M4 14 C6 0, 32 0, 33 15 C24 10, 12 12, 4 14 Z" fill="#451a03"/>
        <circle cx="24" cy="18" r="2" fill="#0f172a"/>
      </g>
      <path d="M36 30 L28 20 M42 26 L40 12 M28 38 L18 34" stroke="#ef4444" stroke-width="2.8" stroke-linecap="round"/>
    </g>
  </g>

  <!-- ITEM 6 (PELIGRO): Silla ergonómica rota volcada junto al puesto con rueda desprendida -->
  <g transform="translate(686, 330)">
    ${svgFloorShadow(44, 88, 36, 6)}
    <g transform="rotate(20, 42, 65)">
      <rect x="20" y="0" width="40" height="48" rx="8" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
      <rect x="14" y="48" width="52" height="12" rx="4" fill="#334155" stroke="#0f172a" stroke-width="2"/>
      <rect x="37" y="60" width="6" height="24" fill="#475569"/>
      <line x1="16" y1="84" x2="62" y2="84" stroke="#334155" stroke-width="4"/>
      <circle cx="16" cy="88" r="4.5" fill="#0f172a"/>
    </g>
    <!-- Rueda suelta rota destacada en rojo en el suelo -->
    <circle cx="72" cy="88" r="7" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
    <circle cx="72" cy="88" r="2.5" fill="#ffffff"/>
  </g>

  <!-- ITEM 4 (PELIGRO): Extintor bloqueado detrás de pila de cajas de archivo -->
  <g id="danger-extintor">
    <g transform="translate(808, 152)">
      <rect x="-10" y="-40" width="70" height="26" rx="3" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
      <text x="25" y="-23" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">EXTINTOR</text>
      <rect x="4" y="0" width="44" height="104" rx="14" fill="#dc2626" stroke="#991b1b" stroke-width="2.5"/>
      <rect x="12" y="20" width="28" height="24" rx="2" fill="#f8fafc" opacity="0.9"/>
      <circle cx="26" cy="-14" r="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5"/>
      <path d="M34 -6 Q50 4 46 52 L42 78" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
    </g>
    <!-- Cajas de cartón apiladas delante impidiendo el acceso -->
    <g transform="translate(772, 224)">
      ${svgFloorShadow(58, 232, 68, 8)}
      <rect x="12" y="0" width="92" height="52" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <line x1="58" y1="0" x2="58" y2="52" stroke="#92400e" stroke-width="2"/>
      <rect x="6" y="52" width="104" height="58" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="40" y="68" width="36" height="18" fill="#fef3c7" opacity="0.85"/>
      <rect x="0" y="110" width="116" height="60" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="-8" y="170" width="132" height="62" rx="3" fill="#92400e" stroke="#451a03" stroke-width="2"/>
    </g>
  </g>

  <!-- ITEM 11 (SEGURO): Planta natural decorativa en maceta -->
  <g transform="translate(918, 338)">
    ${svgFloorShadow(27, 128, 22, 5)}
    <polygon points="8,76 46,76 40,126 14,126" fill="#b45309" stroke="#78350f" stroke-width="2"/>
    <rect x="5" y="68" width="44" height="10" rx="2" fill="#d97706"/>
    <path d="M27 70 Q10 35 4 20 Q20 30 27 55" fill="#16a34a" stroke="#14532d" stroke-width="1.5"/>
    <path d="M27 70 Q44 35 52 18 Q36 28 27 55" fill="#22c55e" stroke="#14532d" stroke-width="1.5"/>
    <path d="M27 65 Q27 25 27 2 Q34 25 27 60" fill="#15803d" stroke="#14532d" stroke-width="1.5"/>
    <ellipse cx="14" cy="45" rx="12" ry="6" fill="#22c55e" transform="rotate(-25, 14, 45)"/>
    <ellipse cx="40" cy="45" rx="12" ry="6" fill="#16a34a" transform="rotate(25, 40, 45)"/>
  </g>
</svg>
`;

// ============================================================================
// 3. OBRA DE CONSTRUCCIÓN
// ============================================================================
const svgObra = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="obraSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#f0f9ff"/>
    </linearGradient>
    <linearGradient id="obraGround" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="40%" stop-color="#92400e"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1000" height="380" fill="url(#obraSky)"/>
  <ellipse cx="180" cy="70" rx="68" ry="20" fill="#ffffff" opacity="0.6"/>
  <ellipse cx="830" cy="60" rx="85" ry="24" fill="#ffffff" opacity="0.5"/>

  <!-- ITEM 9 (SEGURO): Estructura de forjado y pilares de hormigón fraguados -->
  <g fill="#94a3b8" stroke="#475569" stroke-width="2">
    <rect x="0" y="138" width="600" height="26"/>
    <rect x="60" y="164" width="36" height="216"/>
    <rect x="260" y="164" width="40" height="216"/>
    <rect x="460" y="164" width="36" height="216"/>
  </g>

  <!-- ITEM 10 (TORRE GRÚA ARRIOSTRADA) + ITEM 2 (CUBILOTE SUSPENDIDO) -->
  <g transform="translate(658, 18)">
    <!-- Mástil reticulado amarillo (x=686..710 absoluto -> dentro de obra-10 650..730) -->
    <rect x="28" y="60" width="24" height="344" fill="none" stroke="#ca8a04" stroke-width="4"/>
    <g stroke="#facc15" stroke-width="3">
      <line x1="28" y1="60" x2="28" y2="404"/><line x1="52" y1="60" x2="52" y2="404"/>
      <polyline points="28,80 52,110 28,140 52,170 28,200 52,230 28,260 52,290 28,320 52,350 28,380"/>
    </g>
    <!-- Arriostramiento metálico al edificio -->
    <line x1="-162" y1="200" x2="28" y2="200" stroke="#475569" stroke-width="7"/>
    <!-- Cabina de gruista y pluma horizontal -->
    <rect x="18" y="42" width="32" height="26" rx="2" fill="#0284c7" stroke="#0f172a" stroke-width="2"/>
    <rect x="-320" y="54" width="430" height="14" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <rect x="74" y="42" width="36" height="22" fill="#64748b" stroke="#334155"/>
    <!-- Carro, cable y cubilote de hormigón exactamente en x=505..560 (obra-2) sobre el peón -->
    <rect x="-138" y="68" width="26" height="14" fill="#0f172a"/>
    <line x1="-125" y1="82" x2="-125" y2="188" stroke="#0f172a" stroke-width="3"/>
    <circle cx="-125" cy="186" r="6" fill="#facc15" stroke="#0f172a" stroke-width="2"/>
    <path d="M-125 192 Q-129 200 -122 200" fill="none" stroke="#0f172a" stroke-width="2.5"/>
    <polygon points="-150,200 -100,200 -110,244 -140,244" fill="#f59e0b" stroke="#92400e" stroke-width="2.5"/>
    <ellipse cx="-125" cy="200" rx="22" ry="5" fill="#94a3b8"/>
    <rect x="-132" y="244" width="14" height="7" fill="#334155"/>
  </g>

  <!-- ITEM 12 (SEGURO): Cartel de uso obligatorio de casco -->
  <g transform="translate(895, 102)">
    <rect x="28" y="68" width="8" height="184" fill="#64748b"/>
    <rect x="0" y="0" width="66" height="72" rx="6" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <circle cx="33" cy="28" r="21" fill="#0284c7"/>
    <path d="M18 32 Q33 14 48 32 Z" fill="#ffffff"/>
    <rect x="16" y="31" width="34" height="4" rx="2" fill="#ffffff"/>
    <text x="33" y="63" font-size="7.5" font-weight="bold" fill="#0f172a" text-anchor="middle">USO CASCO</text>
  </g>

  <rect x="0" y="380" width="1000" height="220" fill="url(#obraGround)"/>

  <!-- ITEM 3 (PELIGRO): Andamio tubular a 4m sin barandillas ni rodapié con albañil arriba -->
  <g id="danger-andamio" transform="translate(42, 130)">
    <line x1="20" y1="0" x2="20" y2="250" stroke="#facc15" stroke-width="8"/><line x1="185" y1="0" x2="185" y2="250" stroke="#facc15" stroke-width="8"/>
    <rect x="10" y="245" width="20" height="8" fill="#475569"/><rect x="175" y="245" width="20" height="8" fill="#475569"/>
    <rect x="8" y="88" width="190" height="14" rx="2" fill="#d97706" stroke="#78350f" stroke-width="2"/>
    <line x1="20" y1="102" x2="185" y2="245" stroke="#ca8a04" stroke-width="4"/><line x1="185" y1="102" x2="20" y2="245" stroke="#ca8a04" stroke-width="4"/>
    <!-- Operario articulado trabajando en lo alto sin barandilla de seguridad -->
    <g transform="translate(96, 12)">
      <rect x="14" y="44" width="10" height="32" fill="#1e3a8a"/><rect x="26" y="44" width="10" height="32" fill="#1e40af"/>
      <rect x="10" y="72" width="14" height="6" rx="2" fill="#0f172a"/><rect x="26" y="72" width="14" height="6" rx="2" fill="#0f172a"/>
      <rect x="12" y="18" width="26" height="30" rx="4" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
      <line x1="12" y1="30" x2="38" y2="30" stroke="#f8fafc" stroke-width="3"/>
      <path d="M12 24 L-4 40" stroke="#f97316" stroke-width="7" stroke-linecap="round"/>
      <circle cx="25" cy="10" r="10" fill="#fed7aa"/>
      <path d="M14 8 Q25 -4 36 8 Z" fill="#facc15" stroke="#ca8a04"/>
    </g>
  </g>

  <!-- ITEM 11 (PELIGRO): Redondos de acero corrugado salientes sin setas protectoras -->
  <g transform="translate(46, 420)">
    <rect x="0" y="54" width="126" height="38" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <g stroke="#7c2d12" stroke-width="5.5" stroke-linecap="round">
      <line x1="18" y1="54" x2="18" y2="-10"/><line x1="44" y1="54" x2="44" y2="-16"/>
      <line x1="72" y1="54" x2="72" y2="-8"/><line x1="100" y1="54" x2="100" y2="-14"/>
    </g>
    <circle cx="18" cy="-10" r="3.5" fill="#ef4444"/><circle cx="44" cy="-16" r="3.5" fill="#ef4444"/>
    <circle cx="72" cy="-8" r="3.5" fill="#ef4444"/><circle cx="100" cy="-14" r="3.5" fill="#ef4444"/>
  </g>

  <!-- ITEM 6 (PELIGRO): Escalera apoyada sobre bidones metálicos inestables -->
  <g id="danger-escalera" transform="translate(260, 294)">
    ${svgFloorShadow(58, 122, 48, 8)}
    <!-- Dos bidones metálicos azules abollados -->
    <rect x="18" y="56" width="54" height="64" rx="4" fill="#0284c7" stroke="#0c4a6e" stroke-width="2"/>
    <line x1="18" y1="78" x2="72" y2="78" stroke="#0369a1" stroke-width="2.5"/>
    <line x1="18" y1="100" x2="72" y2="100" stroke="#0369a1" stroke-width="2.5"/>
    <ellipse cx="45" cy="56" rx="27" ry="7" fill="#38bdf8" stroke="#0369a1"/>
    <!-- Escalera de aluminio inclinada encima de los bidones -->
    <g transform="translate(14, 0) rotate(14, 42, 70)">
      <line x1="20" y1="-26" x2="20" y2="76" stroke="#e2e8f0" stroke-width="5"/>
      <line x1="52" y1="-26" x2="52" y2="76" stroke="#e2e8f0" stroke-width="5"/>
      <line x1="20" y1="-10" x2="52" y2="-10" stroke="#94a3b8" stroke-width="4"/>
      <line x1="20" y1="14" x2="52" y2="14" stroke="#94a3b8" stroke-width="4"/>
      <line x1="20" y1="38" x2="52" y2="38" stroke="#94a3b8" stroke-width="4"/>
      <line x1="20" y1="62" x2="52" y2="62" stroke="#94a3b8" stroke-width="4"/>
    </g>
  </g>

  <!-- ITEM 1 (PEÓN SIN CASCO HABLANDO AL MÓVIL) + ITEM 7 (CHALECO) + ITEM 8 (BOTAS S3) -->
  <g id="danger-sin-casco" transform="translate(486, 286)">
    ${svgFloorShadow(44, 218, 36, 7)}
    <!-- Piernas con pantalón de trabajo -->
    <rect x="20" y="120" width="16" height="82" rx="4" fill="#1e3a8a" stroke="#172554" stroke-width="1.5"/>
    <rect x="42" y="120" width="16" height="82" rx="4" fill="#1e40af" stroke="#172554" stroke-width="1.5"/>
    <!-- ITEM 8: Botas de seguridad S3 con puntera metálica visible -->
    <rect x="10" y="198" width="28" height="15" rx="4" fill="#451a03" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M10 202 L20 202 L20 213 L10 213 Z" fill="#94a3b8" stroke="#475569"/>
    <rect x="40" y="198" width="28" height="15" rx="4" fill="#451a03" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M58 202 L68 202 L68 213 L58 213 Z" fill="#94a3b8" stroke="#475569"/>
    <!-- Manga y camisa debajo -->
    <rect x="12" y="54" width="54" height="68" rx="7" fill="#0284c7" stroke="#0369a1"/>
    <!-- ITEM 7: Chaleco reflectante amarillo con bandas 3M -->
    <rect x="14" y="54" width="50" height="66" rx="6" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <rect x="14" y="74" width="50" height="9" fill="#f8fafc"/>
    <rect x="14" y="92" width="50" height="9" fill="#f8fafc"/>
    <!-- Brazo derecho relajado y brazo izquierdo levantado sujetando teléfono en la oreja -->
    <path d="M64 62 L76 92 L70 112" fill="none" stroke="#0284c7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="70" cy="114" r="5" fill="#fed7aa"/>
    <path d="M14 64 L-4 46 L14 28" fill="none" stroke="#0284c7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="10" y="20" width="9" height="18" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="14" cy="29" r="4.5" fill="#fed7aa"/>
    <!-- Cuello y cabeza DESCUBIERTA (sin casco) -->
    <rect x="33" y="42" width="12" height="14" fill="#fed7aa"/>
    <circle cx="39" cy="27" r="16" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <path d="M23 24 C23 8, 55 8, 55 24 C45 17, 31 17, 23 24 Z" fill="#271306"/>
    <circle cx="33" cy="27" r="2" fill="#0f172a"/><circle cx="45" cy="27" r="2" fill="#0f172a"/>
  </g>

  <!-- ITEM 5 (PELIGRO): Cuadro eléctrico de obra en charco de lluvia -->
  <g id="danger-cuadro" transform="translate(776, 200)">
    <rect x="16" y="108" width="8" height="68" fill="#475569"/><rect x="68" y="108" width="8" height="68" fill="#475569"/>
    <rect width="92" height="110" rx="4" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
    <rect x="8" y="10" width="76" height="90" fill="#0f172a"/>
    <rect x="18" y="22" width="56" height="22" rx="2" fill="#f8fafc"/>
    <rect x="24" y="26" width="10" height="14" fill="#ef4444"/><rect x="38" y="26" width="10" height="14" fill="#1e293b"/>
    <path d="M46 52 L39 68 L49 68 L41 86" stroke="#facc15" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
    <path d="M35 110 Q20 150 40 178" fill="none" stroke="#ef4444" stroke-width="4"/><path d="M55 110 Q72 142 52 178" fill="none" stroke="#3b82f6" stroke-width="4"/>
    <ellipse cx="48" cy="178" rx="46" ry="15" fill="#38bdf8" opacity="0.78" stroke="#0284c7" stroke-width="1.5"/>
  </g>

  <!-- ITEM 4 (PELIGRO): Zanja de excavación profunda sin entibación -->
  <g id="danger-zanja" transform="translate(684, 396)">
    <polygon points="0,16 296,16 276,184 28,184" fill="#291307" stroke="#0f172a" stroke-width="3"/>
    <polygon points="28,16 56,16 48,184 28,184" fill="#451a03" opacity="0.8"/>
    <path d="M-6 14 Q45 22 92 14 Q148 24 210 14 Q255 20 296 14" fill="none" stroke="#ef4444" stroke-width="3.5"/>
    <circle cx="96" cy="78" r="13" fill="#451a03"/><circle cx="162" cy="118" r="19" fill="#451a03"/>
  </g>
</svg>
`;

// ============================================================================
// 4. ALMACÉN LOGÍSTICO Y DISTRIBUCIÓN
// ============================================================================
const svgAlmacen = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="almWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="almFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/><stop offset="35%" stop-color="#475569"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="almForkliftYellow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#facc15"/><stop offset="50%" stop-color="#eab308"/><stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
    <linearGradient id="almOilSpill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#09090b"/><stop offset="48%" stop-color="#18181b"/><stop offset="72%" stop-color="#27272a"/><stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#almWall)"/>
  <g stroke="#334155" stroke-width="2" opacity="0.4">
    <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="120" x2="1000" y2="120"/>
    <line x1="200" y1="0" x2="200" y2="340"/><line x1="500" y1="0" x2="500" y2="340"/><line x1="800" y1="0" x2="800" y2="340"/>
  </g>

  <!-- ITEM 10 (SEGURO): Alumbrado industrial LED suspendido -->
  <g transform="translate(500, 0)">
    <line x1="32" y1="0" x2="32" y2="42" stroke="#94a3b8" stroke-width="3.5"/>
    <polygon points="8,64 56,64 44,42 20,42" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
    <ellipse cx="32" cy="66" rx="20" ry="4.5" fill="#fef08a"/>
    <polygon points="8,68 56,68 122,225 -58,225" fill="#fef08a" opacity="0.07"/>
  </g>

  <!-- Suelo hormigón y ITEM 6 (Línea amarilla de pasillo peatonal) -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#almFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <line x1="0" y1="534" x2="1000" y2="534" stroke="#eab308" stroke-width="10" stroke-dasharray="30,14"/>

  <!-- ITEM 7 (SEGURO): Estanterías industriales Mecalux ancladas con placas y pernos -->
  <g stroke="#0284c7" stroke-width="10">
    <line x1="200" y1="80" x2="200" y2="380"/><line x1="395" y1="80" x2="395" y2="380"/>
  </g>
  <g stroke="#38bdf8" stroke-width="2" opacity="0.55">
    <polyline points="200,120 220,165 200,210 220,255 200,300 220,345 200,375"/>
  </g>
  <rect x="184" y="376" width="32" height="9" rx="1" fill="#cbd5e1" stroke="#475569"/>
  <rect x="379" y="376" width="32" height="9" rx="1" fill="#cbd5e1" stroke="#475569"/>
  <rect x="194" y="114" width="208" height="12" fill="#ea580c" stroke="#9a3412"/>
  <rect x="194" y="212" width="208" height="12" fill="#ea580c" stroke="#9a3412"/>
  <rect x="194" y="310" width="208" height="12" fill="#ea580c" stroke="#9a3412"/>

  <!-- Cajas estables en baldas medias -->
  <rect x="220" y="168" width="66" height="44" rx="2" fill="#b45309" stroke="#78350f"/>
  <rect x="295" y="162" width="76" height="50" rx="2" fill="#d97706" stroke="#92400e"/>

  <!-- ITEM 1 (PELIGRO): Palet de madera roto y ladeado en altura (x=245..390, y=48..126) -->
  <g id="danger-palet" transform="translate(232, 54)">
    <g transform="rotate(12, 85, 50)">
      <!-- Euro-palet con tacos -->
      <rect x="6" y="42" width="154" height="7" fill="#d97706" stroke="#78350f" stroke-width="1.5"/>
      <rect x="10" y="49" width="18" height="9" fill="#92400e"/><rect x="74" y="49" width="18" height="9" fill="#92400e"/><rect x="138" y="49" width="18" height="9" fill="#92400e"/>
      <rect x="6" y="58" width="154" height="5" fill="#b45309"/>
      <rect x="14" y="-4" width="64" height="46" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="84" y="-10" width="70" height="52" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <path d="M10 0 Q55 -18 158 -6" fill="none" stroke="#e0f2fe" stroke-width="3.5" stroke-dasharray="14,5" opacity="0.8"/>
    </g>
  </g>

  <!-- ITEM 4 (SALIDA EMERGENCIA BLOQUEADA) + ITEM 9 (SEÑAL LUMINISCENTE SALIDA) -->
  <g id="danger-salida" transform="translate(24, 195)">
    <rect width="112" height="186" rx="4" fill="#15803d" stroke="#14532d" stroke-width="3"/>
    <rect x="68" y="20" width="28" height="52" rx="2" fill="#86efac" opacity="0.35" stroke="#166534"/>
    <rect x="14" y="88" width="84" height="10" rx="3" fill="#e2e8f0" stroke="#64748b"/>
    <!-- ITEM 9: Señal verde SALIDA -->
    <rect x="16" y="-44" width="80" height="28" rx="3" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
    <text x="56" y="-26" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">SALIDA ➔</text>
    <!-- Pila de palets y cajas bloqueando la puerta -->
    <g transform="translate(6, 74)">
      <rect x="0" y="0" width="100" height="26" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="0" y="28" width="100" height="26" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="0" y="56" width="100" height="26" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="0" y="84" width="100" height="26" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2"/>
    </g>
  </g>

  <!-- ITEM 2 (PELIGRO): Charco de aceite viscoso en el pasillo -->
  <g id="danger-aceite" transform="translate(382, 444)">
    <path d="M8 38 C32 14, 108 12, 144 34 C168 50, 148 78, 96 84 C44 90, 12 68, 8 38 Z" fill="url(#almOilSpill)" stroke="#09090b" stroke-width="2"/>
    <path d="M44 36 Q78 30 104 42" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.65"/>
    <path d="M62 56 Q92 52 114 64" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.55"/>
  </g>

  <!-- ITEM 5 (OPERARIO ESPALDA CURVADA) + ITEM 12 (CAJA 40 KG) + ITEM 11 (BOTAS S3) -->
  <g id="danger-espalda" transform="translate(392, 232)">
    ${svgFloorShadow(116, 240, 68, 8)}
    <!-- ITEM 12: Caja pesada de 40 kg en el suelo (x=395..500, y=338..400 -> rel x=4..98, y=106..168) -->
    <g transform="translate(6, 108)">
      <rect width="92" height="58" rx="3" fill="#92400e" stroke="#451a03" stroke-width="2"/>
      <rect x="0" y="22" width="92" height="7" fill="#b45309"/>
      <text x="46" y="42" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle">40 kg</text>
    </g>
    <!-- Piernas rectas sin flexionar y Botas S3 (ITEM 11: x=520..580, y=438..480 -> rel x=128..188, y=206..248) -->
    <path d="M138 148 L134 218 L150 218 L152 148 Z" fill="#1e3a8a" stroke="#172554" stroke-width="1.5"/>
    <path d="M158 148 L156 218 L172 218 L172 148 Z" fill="#1e40af" stroke="#172554" stroke-width="1.5"/>
    <rect x="126" y="216" width="26" height="14" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <rect x="126" y="219" width="9" height="10" rx="2" fill="#94a3b8"/>
    <rect x="152" y="216" width="26" height="14" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <rect x="152" y="219" width="9" height="10" rx="2" fill="#94a3b8"/>
    <!-- Torso doblado peligrosamente hacia delante en chaleco amarillo -->
    <path d="M172 148 C176 112, 152 76, 114 70 C100 68, 92 84, 98 102 C110 124, 134 142, 138 150 Z" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <line x1="114" y1="88" x2="152" y2="120" stroke="#ffffff" stroke-width="6"/>
    <!-- Brazos bajando rectos hacia los laterales de la caja 40 kg -->
    <path d="M114 90 L98 122 L84 140" fill="none" stroke="#0284c7" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="82" cy="142" r="6" fill="#fed7aa" stroke="#ea580c"/>
    <!-- Cuello y cabeza inclinada con gorra de almacén -->
    <rect x="92" y="56" width="12" height="14" fill="#fed7aa" transform="rotate(-25, 98, 63)"/>
    <g transform="translate(72, 32)">
      <circle cx="20" cy="20" r="15" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <path d="M4 16 Q20 2 35 16 Z" fill="#0284c7"/>
      <rect x="-2" y="13" width="16" height="4" rx="2" fill="#0369a1"/>
      <circle cx="14" cy="21" r="2" fill="#0f172a"/>
    </g>
    <!-- Rayos de dolor lumbar en la espalda -->
    <path d="M162 66 L176 52 L170 66 L186 58" fill="none" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M148 60 L152 44 M172 82 L188 78" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- ITEM 3 (CARRETILLA CON HORQUILLAS ALTAS Y LLAVE) & ITEM 8 (JAULA ROPS/FOPS) -->
  <g id="danger-carretilla" transform="translate(648, 240)">
    ${svgFloorShadow(146, 218, 128, 10)}
    <!-- Chasis contrapesado amarillo -->
    <rect x="44" y="112" width="158" height="86" rx="14" fill="url(#almForkliftYellow)" stroke="#a16207" stroke-width="3"/>
    <rect x="175" y="82" width="44" height="116" rx="6" fill="#0f172a"/>
    <!-- Asiento y volante + llave puesta en rojo -->
    <rect x="96" y="76" width="24" height="36" rx="4" fill="#1e293b"/>
    <line x1="158" y1="112" x2="174" y2="72" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="172" cy="70" rx="12" ry="4" fill="none" stroke="#0f172a" stroke-width="4" transform="rotate(-18, 172, 70)"/>
    <circle cx="164" cy="92" r="5" fill="#ef4444"/><rect x="164" y="90" width="11" height="4" fill="#ef4444"/>
    <!-- ITEM 8: Jaula ROPS/FOPS robusta con luz rotativa arriba -->
    <path d="M84 112 L94 26 L168 26 L174 112" fill="none" stroke="#0f172a" stroke-width="7.5" stroke-linejoin="round"/>
    <rect x="90" y="20" width="84" height="8" rx="3" fill="#0f172a"/>
    <rect x="122" y="8" width="12" height="12" rx="3" fill="#f97316" stroke="#c2410c"/>
    <!-- Mástil vertical hidráulico y horquillas PELIGROSAMENTE ALTAS -->
    <rect x="215" y="-24" width="14" height="222" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
    <rect x="225" y="38" width="102" height="11" rx="3" fill="#94a3b8" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="225" y="54" width="102" height="11" rx="3" fill="#94a3b8" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Ruedas industriales macizas -->
    <circle cx="80" cy="198" r="24" fill="#0f172a" stroke="#334155" stroke-width="4"/><circle cx="80" cy="198" r="9" fill="#94a3b8"/>
    <circle cx="186" cy="198" r="22" fill="#0f172a" stroke="#334155" stroke-width="4"/><circle cx="186" cy="198" r="8" fill="#94a3b8"/>
  </g>
</svg>
`;

// ============================================================================
// 5. LABORATORIO QUÍMICO Y BIOLÓGICO
// ============================================================================
const svgLaboratorio = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="labWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="labFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#labWall)"/>
  <g stroke="#334155" stroke-width="1" opacity="0.35">
    <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="120" x2="1000" y2="120"/><line x1="0" y1="180" x2="1000" y2="180"/><line x1="0" y1="240" x2="1000" y2="240"/>
  </g>

  <!-- ITEM 10 (SEGURO): Suelo de resina epoxi continuo sin juntas ni ranuras -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#labFloor)"/>
  <path d="M0 332 L1000 332 L1000 344 Q500 348 0 344 Z" fill="#0d9488"/> <!-- Media caña sanitaria -->
  <g transform="translate(725, 476)">
    <polygon points="15,8 220,8 232,76 5,76" fill="#38bdf8" opacity="0.08" stroke="#38bdf8" stroke-width="1" stroke-dasharray="6,4"/>
    <ellipse cx="118" cy="42" rx="82" ry="18" fill="#ffffff" opacity="0.14"/>
  </g>

  <!-- ITEM 5 (PIPETEO BUCAL) + ITEM 6 (BATA ALGODÓN) -->
  <!-- Dibujado detrás de la encimera para efecto de profundidad 3D realista -->
  <g id="danger-pipeteo" transform="translate(546, 200)">
    <!-- Bata blanca de algodón abotonada con solapas y bolsillo con bolígrafos (ITEM 6) -->
    <path d="M12 104 Q16 86 44 86 Q72 86 76 104 L78 164 L10 164 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <polygon points="34,86 44,104 44,86" fill="#e2e8f0"/><polygon points="54,86 44,104 44,86" fill="#e2e8f0"/>
    <line x1="44" y1="104" x2="44" y2="164" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="48" cy="116" r="2.2" fill="#475569"/><circle cx="48" cy="134" r="2.2" fill="#475569"/>
    <rect x="52" y="114" width="16" height="20" rx="1" fill="#f8fafc" stroke="#cbd5e1"/>
    <line x1="56" y1="108" x2="56" y2="116" stroke="#0284c7" stroke-width="2"/>
    <line x1="61" y1="109" x2="61" y2="116" stroke="#ef4444" stroke-width="2"/>
    <!-- Cuello y perfil facial hacia la izquierda SIN gafas de seguridad -->
    <rect x="38" y="68" width="12" height="20" fill="#fed7aa"/>
    <g transform="translate(22, 34)">
      <circle cx="22" cy="20" r="17" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <path d="M7 16 C8 0, 38 -2, 39 18 C30 12, 16 12, 7 16 Z" fill="#271306"/>
      <circle cx="14" cy="19" r="2" fill="#0f172a"/>
    </g>
    <!-- Brazo derecho sujetando pipeta de vidrio hacia el vaso de precipitados sobre encimera -->
    <path d="M22 106 L2 126 L-12 102" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="-12" cy="100" r="6" fill="#38bdf8" stroke="#0284c7"/>
    <!-- Pipeta graduada metida en la boca aspirando reactivo rojo -->
    <line x1="25" y1="58" x2="-24" y2="132" stroke="#bae6fd" stroke-width="4" stroke-linecap="round"/>
    <line x1="-12" y1="114" x2="-24" y2="132" stroke="#ef4444" stroke-width="2.6"/>
  </g>

  <!-- ITEM 7 (ENCIMERA FENÓLICA NO POROSA) + ITEM 8 (FREGADERO CUELLO DE CISNE) -->
  <g transform="translate(172, 315)">
    <!-- Encimera resistente negra/oscura fenólica arriba + cuerpo mueble -->
    <rect x="0" y="38" width="645" height="20" rx="3" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="4" y="42" width="637" height="5" fill="#334155"/>
    <rect x="14" y="58" width="617" height="132" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <g stroke="#94a3b8" stroke-width="2">
      <line x1="170" y1="58" x2="170" y2="190"/><line x1="340" y1="58" x2="340" y2="190"/><line x1="485" y1="58" x2="485" y2="190"/>
    </g>
    <!-- Vaso de precipitados con reactivo rojo frente al investigador -->
    <g transform="translate(342, 6)">
      <polygon points="4,0 26,0 28,32 2,32" fill="#e0f2fe" opacity="0.85" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="4" y="15" width="22" height="16" fill="#ef4444" opacity="0.85"/>
    </g>
    <!-- ITEM 8 (SEGURO): Fregadero de laboratorio con grifo de cuello de cisne (x=692..776, y=378..450 -> rel x=520..604) -->
    <g transform="translate(520, 0)">
      <path d="M36 38 L36 10 Q36 -10 56 -10 Q70 -10 70 8" fill="none" stroke="#e2e8f0" stroke-width="6" stroke-linecap="round"/>
      <rect x="0" y="38" width="84" height="10" rx="2" fill="#334155"/>
      <rect x="10" y="48" width="64" height="62" rx="4" fill="#475569" stroke="#1e293b" stroke-width="2"/>
      <rect x="26" y="72" width="32" height="24" rx="2" fill="#1e293b"/>
    </g>
  </g>

  <!-- ITEM 1 (CAMPANA GUILLOTINA ABIERTA) + ITEM 11 (VAPORES TÓXICOS ESCAPANDO) -->
  <g id="danger-campana" transform="translate(195, 100)">
    <rect width="194" height="252" rx="4" fill="#475569" stroke="#1e293b" stroke-width="3"/>
    <rect x="16" y="16" width="162" height="186" fill="#0f172a"/>
    <rect x="24" y="16" width="146" height="28" fill="#1e293b"/>
    <!-- Pantalla guillotina transparente totalmente subida -->
    <rect x="16" y="16" width="162" height="34" fill="#38bdf8" opacity="0.38" stroke="#bae6fd" stroke-width="2"/>
    <circle cx="164" cy="30" r="5.5" fill="#ef4444"/> <!-- Alarma flujo baja -->
    <!-- Matraz hirviendo dentro con humos escapando -->
    <rect x="80" y="164" width="34" height="16" rx="2" fill="#334155"/>
    <circle cx="97" cy="148" r="16" fill="#c084fc" opacity="0.7" stroke="#e9d5ff" stroke-width="1.5"/>
    <rect x="92" y="122" width="10" height="16" fill="#e9d5ff" opacity="0.8"/>
    <path d="M97 120 Q76 82 95 48 Q114 14 148 -6 Q186 -12 222 24" fill="none" stroke="#c084fc" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
    <path d="M108 112 Q92 78 112 44 Q134 12 172 22" fill="none" stroke="#e879f9" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
  </g>

  <!-- ITEM 2 (ARMARIO INCOMPATIBLES) + ITEM 9 (ETIQUETAS CLP EN FRASCOS) -->
  <g id="danger-incompatibles" transform="translate(762, 108)">
    <rect width="166" height="244" rx="4" fill="#facc15" stroke="#a16207" stroke-width="3"/>
    <line x1="83" y1="0" x2="83" y2="244" stroke="#a16207" stroke-width="2.5"/>
    <rect x="14" y="58" width="138" height="7" fill="#a16207"/>
    <rect x="14" y="146" width="138" height="7" fill="#a16207"/>
    <!-- Balda superior: ácido y disolvente juntos (ITEM 2) -->
    <g transform="translate(22, 18)">
      <rect width="26" height="40" rx="3" fill="#dc2626" stroke="#7f1d1d"/>
      <rect x="4" y="12" width="18" height="16" fill="#ffffff"/>
      <polygon points="13,14 19,20 13,26 7,20" fill="none" stroke="#ef4444" stroke-width="2"/>
    </g>
    <g transform="translate(66, 18)">
      <rect width="28" height="40" rx="3" fill="#eab308" stroke="#854d0e"/>
      <rect x="5" y="12" width="18" height="16" fill="#ffffff"/>
      <polygon points="14,14 20,20 14,26 8,20" fill="none" stroke="#ef4444" stroke-width="2"/>
    </g>
    <!-- Balda intermedia: Frascos con etiquetas CLP visibles (ITEM 9: y=180..264) -->
    <g transform="translate(26, 98)">
      <rect width="30" height="48" rx="4" fill="#991b1b" stroke="#450a0a"/>
      <rect x="4" y="14" width="22" height="20" fill="#ffffff"/>
      <polygon points="15,17 22,24 15,31 8,24" fill="none" stroke="#ef4444" stroke-width="2"/>
    </g>
    <g transform="translate(76, 98)">
      <rect width="30" height="48" rx="4" fill="#1d4ed8" stroke="#1e3a8a"/>
      <rect x="4" y="14" width="22" height="20" fill="#ffffff"/>
      <polygon points="15,17 22,24 15,31 8,24" fill="none" stroke="#ef4444" stroke-width="2"/>
    </g>
    <g transform="translate(116, 102)">
      <rect width="28" height="44" rx="4" fill="#dc2626" stroke="#7f1d1d"/>
      <rect x="4" y="12" width="20" height="18" fill="#ffffff"/>
      <polygon points="14,14 20,21 14,28 8,21" fill="none" stroke="#ef4444" stroke-width="2"/>
    </g>
  </g>

  <!-- ITEM 3 (DUCHA Y LAVAOJOS BLOQUEADOS POR CARRO) + ITEM 12 (TIRADOR TRIANGULAR) -->
  <g id="danger-ducha" transform="translate(26, 104)">
    <!-- Columna ducha + alcachofa cónica + fuente lavaojos verde EN 15154 -->
    <rect x="34" y="0" width="10" height="234" fill="#22c55e" stroke="#15803d"/>
    <polygon points="12,18 66,18 52,0 26,0" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
    <rect x="44" y="76" width="22" height="8" fill="#16a34a"/>
    <path d="M52 76 Q66 90 80 76 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
    <!-- ITEM 12: Varilla larga y tirador triangular amarillo exactamente en y=288..354 (rel y=184..250) -->
    <line x1="78" y1="36" x2="78" y2="202" stroke="#cbd5e1" stroke-width="3.5"/>
    <polygon points="78,202 62,230 94,230" fill="none" stroke="#facc15" stroke-width="4.5" stroke-linejoin="round"/>
    <!-- Carro metálico con cajas apiladas bloqueando el acceso debajo de la ducha/lavaojos -->
    <g transform="translate(2, 112)">
      <rect x="8" y="-36" width="52" height="36" rx="2" fill="#d97706" stroke="#78350f" stroke-width="1.5"/>
      <rect x="16" y="-58" width="38" height="22" rx="2" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
      <rect width="68" height="106" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <line x1="6" y1="45" x2="62" y2="45" stroke="#475569" stroke-width="2"/>
      <circle cx="14" cy="112" r="8" fill="#0f172a"/><circle cx="54" cy="112" r="8" fill="#0f172a"/>
    </g>
  </g>

  <!-- ITEM 4 (MATRAZ ROTO CON ÁCIDO EN ENCIMERA) -->
  <g id="danger-derrame" transform="translate(396, 314)">
    <path d="M8 38 C34 26, 78 32, 126 30 C148 32, 154 44, 124 46 C76 48, 22 48, 8 38 Z" fill="#22c55e" opacity="0.92" stroke="#15803d"/>
    <polygon points="48,30 66,8 82,12 96,30" fill="#e0f2fe" opacity="0.88" stroke="#38bdf8" stroke-width="1.8" transform="rotate(34, 72, 24)"/>
    <polygon points="104,32 114,22 120,30" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
    <circle cx="38" cy="36" r="3" fill="#ffffff"/><circle cx="88" cy="38" r="2.5" fill="#ffffff"/>
  </g>
</svg>
`;

// ============================================================================
// 6. COCINA INDUSTRIAL Y RESTAURACIÓN
// ============================================================================
const svgCocina = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="cocWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="cocFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#991b1b"/><stop offset="50%" stop-color="#b91c1c"/><stop offset="100%" stop-color="#7f1d1d"/>
    </linearGradient>
    <linearGradient id="cocInox" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#94a3b8"/><stop offset="30%" stop-color="#f8fafc"/><stop offset="70%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1000" height="320" fill="url(#cocWall)"/>
  <!-- Azulejos pared cocina -->
  <g stroke="#cbd5e1" stroke-width="1" opacity="0.35">
    <line x1="0" y1="64" x2="1000" y2="64"/><line x1="0" y1="128" x2="1000" y2="128"/><line x1="0" y1="192" x2="1000" y2="192"/><line x1="0" y1="256" x2="1000" y2="256"/>
  </g>
  <rect x="0" y="320" width="1000" height="280" fill="url(#cocFloor)"/>
  <g stroke="#450a0a" stroke-width="2" opacity="0.45">
    <line x1="0" y1="400" x2="1000" y2="400"/><line x1="0" y1="490" x2="1000" y2="490"/>
    <line x1="180" y1="320" x2="70" y2="600"/><line x1="480" y1="320" x2="430" y2="600"/><line x1="800" y1="320" x2="820" y2="600"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Campana extractora con filtros saturados goteando grasa -->
  <g transform="translate(358, 22)">
    <polygon points="0,84 316,84 278,0 38,0" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
    <rect x="28" y="64" width="260" height="16" rx="2" fill="#475569"/>
    <g stroke="#94a3b8" stroke-width="2">
      <line x1="56" y1="64" x2="56" y2="80"/><line x1="84" y1="64" x2="84" y2="80"/>
      <line x1="112" y1="64" x2="112" y2="80"/><line x1="140" y1="64" x2="140" y2="80"/>
      <line x1="168" y1="64" x2="168" y2="80"/><line x1="196" y1="64" x2="196" y2="80"/>
    </g>
    <!-- Gotas de grasa amarilla cayendo sobre los fogones -->
    <path d="M72 84 Q78 122 72 146" stroke="#eab308" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    <circle cx="72" cy="154" r="4" fill="#ca8a04"/>
    <path d="M132 84 Q138 128 132 158" stroke="#eab308" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    <circle cx="132" cy="166" r="4" fill="#ca8a04"/>
  </g>

  <!-- ITEM 10 (SEGURO): Cocinero con chaquetilla de algodón ignífugo de doble botonadura (x=570..660, y=108..216) -->
  <g transform="translate(566, 108)">
    <!-- Gorro alto de cocinero y rostro expresivo -->
    <path d="M22 22 L18 4 Q44 -6 70 4 L66 22 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="44" cy="36" r="15" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <circle cx="38" cy="35" r="1.8" fill="#0f172a"/><circle cx="50" cy="35" r="1.8" fill="#0f172a"/>
    <path d="M38 42 Q44 45 50 42" fill="none" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
    <!-- Chaquetilla cruzada con doble fila de botones -->
    <path d="M18 54 Q44 48 70 54 L74 114 L14 114 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
    <line x1="36" y1="54" x2="36" y2="114" stroke="#e2e8f0" stroke-width="1.5"/>
    <circle cx="36" cy="68" r="2.5" fill="#0f172a"/><circle cx="36" cy="84" r="2.5" fill="#0f172a"/><circle cx="36" cy="100" r="2.5" fill="#0f172a"/>
    <circle cx="52" cy="68" r="2.5" fill="#0f172a"/><circle cx="52" cy="84" r="2.5" fill="#0f172a"/><circle cx="52" cy="100" r="2.5" fill="#0f172a"/>
    <!-- Brazo izquierdo sujetando cuchara hacia la olla -->
    <path d="M18 68 L2 90 L-8 84" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="-8" cy="84" r="5" fill="#fed7aa"/>
  </g>

  <!-- ITEM 7 (FOGONES GAS CON TERMOPAR) + ITEM 11 (FREIDORA CON TERMOSTATO MAX 210°C) -->
  <g transform="translate(358, 222)">
    <rect width="318" height="148" rx="4" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
    <!-- Olla acero y quemadores con llama azul + sensor termopar dorado -->
    <circle cx="72" cy="24" r="26" fill="#1e293b"/>
    <circle cx="72" cy="24" r="14" fill="#0284c7" opacity="0.9"/>
    <rect x="130" y="-12" width="52" height="32" rx="3" fill="url(#cocInox)" stroke="#475569" stroke-width="1.5"/>
    <circle cx="156" cy="28" r="26" fill="#1e293b"/>
    <circle cx="156" cy="28" r="14" fill="#0284c7" opacity="0.9"/>
    <line x1="176" y1="28" x2="188" y2="28" stroke="#facc15" stroke-width="3"/>
    <!-- Mandos frontales de cocina de gas -->
    <circle cx="60" cy="66" r="8" fill="#0f172a"/><circle cx="105" cy="66" r="8" fill="#0f172a"/><circle cx="150" cy="66" r="8" fill="#0f172a"/>
    <!-- ITEM 11: Freidora derecha (x=570..670, y=300..366 -> rel x=212..312, y=14..144) -->
    <rect x="220" y="14" width="84" height="54" rx="3" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    <rect x="234" y="-8" width="56" height="24" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="262" cy="96" r="11" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="288" cy="96" r="5" fill="#22c55e"/>
    <text x="262" y="122" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">MAX 210°C</text>
  </g>

  <!-- ITEM 6 (SEGURO MESA INOX) + ITEM 1 (CORTAFIAMBRES) + ITEM 12 (CUCHILLA DISCO SIN RESGUARDO) -->
  <g transform="translate(72, 294)">
    ${svgFloorShadow(124, 174, 118, 8)}
    <rect x="0" y="38" width="248" height="18" rx="2" fill="url(#cocInox)" stroke="#475569" stroke-width="1.5"/>
    <rect x="12" y="56" width="12" height="118" fill="#94a3b8" stroke="#475569"/>
    <rect x="224" y="56" width="12" height="118" fill="#94a3b8" stroke="#475569"/>
    <rect x="20" y="128" width="208" height="10" fill="#cbd5e1" stroke="#64748b"/>
    <!-- Cortafiambres profesional con cuchilla circular expuesta en x=200..290, y=246..312 -->
    <g transform="translate(34, -64)">
      <rect x="4" y="64" width="144" height="36" rx="5" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
      <!-- Carro de fiambre abierto sin empujador -->
      <polygon points="16,64 68,64 56,28 8,36" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <rect x="26" y="40" width="34" height="22" rx="4" fill="#fb7185" stroke="#be123c"/>
      <circle cx="24" cy="82" r="5" fill="#22c55e"/><circle cx="42" cy="82" r="5" fill="#ef4444"/>
      <!-- Cuchilla rotatoria sin resguardo (ITEM 12) -->
      <circle cx="144" cy="46" r="34" fill="#f8fafc" stroke="#dc2626" stroke-width="3.5"/>
      <circle cx="144" cy="46" r="24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
      <circle cx="144" cy="46" r="7" fill="#334155"/>
    </g>
  </g>

  <!-- ITEM 9 (SEGURO): Sumidero sifónico con rejilla inox en suelo -->
  <g transform="translate(212, 486)">
    <rect width="74" height="36" rx="4" fill="#94a3b8" stroke="#1e293b" stroke-width="2.5"/>
    <g stroke="#0f172a" stroke-width="3.5" stroke-linecap="round">
      <line x1="12" y1="7" x2="12" y2="29"/><line x1="24" y1="7" x2="24" y2="29"/>
      <line x1="37" y1="7" x2="37" y2="29"/><line x1="50" y1="7" x2="50" y2="29"/>
      <line x1="62" y1="7" x2="62" y2="29"/>
    </g>
  </g>

  <!-- ITEM 2 (PELIGRO): Charco de aceite y grasa frente a la freidora -->
  <g id="danger-grasa" transform="translate(425, 428)">
    <path d="M22 46 C58 20, 174 16, 218 42 C252 64, 224 96, 168 104 C96 112, 22 92, 12 66 Z" fill="#eab308" opacity="0.88" stroke="#a16207" stroke-width="2"/>
    <path d="M68 42 Q120 34 166 48" fill="none" stroke="#fef08a" stroke-width="2.5" opacity="0.7"/>
  </g>

  <!-- ITEM 8 (GRIFO MUELLE COMPENSADOR) + ITEM 5 (TABLA POLLO/ENSALADA) + ITEM 4 (ENCHUFE 400V EN AGUA) -->
  <g transform="translate(708, 222)">
    <rect x="0" y="64" width="236" height="86" rx="3" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
    <rect x="132" y="70" width="90" height="30" rx="2" fill="#334155"/>
    <!-- Grifo ducha con muelle helicoidal y pistola de aclarado (ITEM 8) -->
    <path d="M188 64 L188 -16 Q188 -36 158 -36 L142 -18" fill="none" stroke="#e2e8f0" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M182 14 L194 20 L182 26 L194 32 L182 38" fill="none" stroke="#475569" stroke-width="3"/>
    <rect x="134" y="-20" width="16" height="10" rx="2" fill="#0f172a"/>
    <!-- ITEM 5: Tabla de madera contaminada con pollo crudo rosado + lechuga verde (x=725..825, y=268..318) -->
    <g transform="translate(18, 46)">
      <rect width="92" height="16" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
      <ellipse cx="28" cy="2" rx="14" ry="7" fill="#fda4af" stroke="#e11d48" stroke-width="1.5"/>
      <circle cx="40" cy="4" r="4" fill="#f8fafc"/>
      <circle cx="68" cy="2" r="8" fill="#22c55e" stroke="#15803d"/>
      <circle cx="76" cy="4" r="6" fill="#4ade80"/>
    </g>
    <!-- ITEM 4: Clavija trifásica roja 400V caída en charco de agua jabonosa con chispas -->
    <g transform="translate(88, 178)">
      <ellipse cx="52" cy="96" rx="52" ry="18" fill="#38bdf8" opacity="0.78" stroke="#0284c7" stroke-width="1.5"/>
      <path d="M36 26 Q28 66 52 94" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
      <rect x="12" y="2" width="66" height="28" rx="5" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <rect x="64" y="8" width="18" height="16" rx="2" fill="#f8fafc" stroke="#475569"/>
      <path d="M62 72 L72 60 L66 74 L82 64" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
    </g>
  </g>
</svg>
`;

// ============================================================================
// 7. TALLER MECÁNICO E INDUSTRIAL
// ============================================================================
const svgTaller = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="talWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="talFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>

  <!-- Pared metálica y suelo epoxi antideslizante (ITEM 10) -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#talWall)"/>
  <g stroke="#334155" stroke-width="1" opacity="0.35">
    <line x1="0" y1="80" x2="1000" y2="80"/><line x1="0" y1="160" x2="1000" y2="160"/>
    <line x1="250" y1="0" x2="250" y2="340"/><line x1="750" y1="0" x2="750" y2="340"/>
  </g>
  <rect x="0" y="340" width="1000" height="260" fill="url(#talFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <!-- Textura antideslizante y señal de zona epoxi en tal-10 (740..970, 474..558) -->
  <g transform="translate(745, 480)">
    <line x1="0" y1="68" x2="225" y2="68" stroke="#eab308" stroke-width="4" stroke-dasharray="14,8" opacity="0.7"/>
    <ellipse cx="115" cy="40" rx="85" ry="18" fill="#94a3b8" opacity="0.16"/>
  </g>

  <!-- ITEM 8 (SEGURO): Enrollador automático neumático en techo -->
  <g transform="translate(830, 26)">
    <rect x="20" y="0" width="40" height="12" rx="2" fill="#64748b"/>
    <circle cx="40" cy="42" r="30" fill="#0284c7" stroke="#e2e8f0" stroke-width="3"/>
    <circle cx="40" cy="42" r="14" fill="#facc15" stroke="#ca8a04"/>
    <path d="M58 58 Q80 96 64 132" fill="none" stroke="#eab308" stroke-width="5.5" stroke-linecap="round"/>
    <rect x="59" y="130" width="9" height="14" rx="2" fill="#94a3b8"/>
  </g>

  <!-- ITEM 5 (PELIGRO): Cuba de desengrase abierta con tapa levantada y vapores -->
  <g id="danger-cuba" transform="translate(26, 198)">
    ${svgFloorShadow(55, 142, 48, 7)}
    <polygon points="8,24 98,24 90,0 16,0" fill="#334155" stroke="#0f172a" stroke-width="2"/> <!-- Tapa abierta -->
    <rect y="24" width="106" height="82" rx="4" fill="#475569" stroke="#1e293b" stroke-width="2.5"/>
    <ellipse cx="53" cy="34" rx="44" ry="10" fill="#0284c7" opacity="0.9"/>
    <path d="M36 28 Q26 4 42 -12 M66 28 Q78 6 58 -10" fill="none" stroke="#38bdf8" stroke-width="3" opacity="0.85" stroke-linecap="round"/>
    <rect x="14" y="106" width="10" height="36" fill="#334155"/><rect x="82" y="106" width="10" height="36" fill="#334155"/>
  </g>

  <!-- ITEM 9 (SEGURO): Carro de herramientas rojo bloqueable -->
  <g transform="translate(20, 368)">
    ${svgFloorShadow(58, 126, 56, 7)}
    <rect width="114" height="118" rx="4" fill="#dc2626" stroke="#7f1d1d" stroke-width="2.5"/>
    <path d="M114 14 L126 14 L126 32" fill="none" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
    <rect x="8" y="10" width="98" height="16" rx="2" fill="#ef4444" stroke="#991b1b"/><rect x="42" y="16" width="30" height="4" fill="#e2e8f0"/>
    <rect x="8" y="32" width="98" height="16" rx="2" fill="#ef4444" stroke="#991b1b"/><rect x="42" y="38" width="30" height="4" fill="#e2e8f0"/>
    <rect x="8" y="54" width="98" height="22" rx="2" fill="#ef4444" stroke="#991b1b"/><rect x="42" y="63" width="30" height="4" fill="#e2e8f0"/>
    <rect x="8" y="82" width="98" height="26" rx="2" fill="#ef4444" stroke="#991b1b"/><rect x="42" y="93" width="30" height="4" fill="#e2e8f0"/>
    <circle cx="100" cy="6" r="3.5" fill="#facc15"/>
    <circle cx="20" cy="124" r="10" fill="#0f172a"/><circle cx="94" cy="124" r="10" fill="#0f172a"/>
  </g>

  <!-- ITEM 7 (BANCO DE TRABAJO CON TORNILLO ALINEADO EN 230..380, 402..486) + ITEM 2 (RADIAL) + ITEM 12 (DISCO FISURADO) -->
  <g id="danger-radial" transform="translate(178, 314)">
    ${svgFloorShadow(106, 174, 102, 8)}
    <!-- Encimera superior e inferior metálica del banco de trabajo -->
    <rect width="214" height="18" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <rect x="12" y="18" width="14" height="154" fill="#475569"/><rect x="188" y="18" width="14" height="154" fill="#475569"/>
    <rect x="18" y="102" width="178" height="14" rx="2" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <!-- ITEM 7: Tornillo de banco robusto montado en bandeja/saliente frontal alineado en tal-7 (250..380, 410..486) -->
    <g transform="translate(76, 86)">
      <rect x="0" y="16" width="118" height="14" rx="2" fill="#64748b" stroke="#334155" stroke-width="2"/>
      <rect x="14" y="18" width="58" height="16" rx="2" fill="#0284c7" stroke="#0c4a6e" stroke-width="2"/>
      <rect x="22" y="-2" width="20" height="22" rx="2" fill="#1e293b"/>
      <rect x="48" y="0" width="16" height="20" rx="2" fill="#0369a1"/>
      <line x1="62" y1="10" x2="92" y2="10" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
      <line x1="92" y1="-2" x2="92" y2="24" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    </g>
    <!-- ITEM 2: Amoladora radial eléctrica SIN protector encima del banco -->
    <g transform="translate(22, -32)">
      <path d="M-24 22 Q-10 34 6 20" fill="none" stroke="#0f172a" stroke-width="4"/>
      <rect x="6" y="10" width="68" height="20" rx="5" fill="#0284c7" stroke="#0c4a6e" stroke-width="1.5"/>
      <rect x="68" y="4" width="24" height="26" rx="3" fill="#94a3b8"/>
      <line x1="66" y1="-6" x2="66" y2="12" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
      <circle cx="96" cy="20" r="22" fill="#334155" stroke="#ef4444" stroke-width="2.5"/>
      <circle cx="96" cy="20" r="5" fill="#cbd5e1"/>
    </g>
    <!-- ITEM 12: Disco de corte apoyado al borde derecho con FISURA visible en x=340..420, y=336..384 -->
    <g transform="translate(172, 24)">
      <circle cx="24" cy="24" r="22" fill="#475569" stroke="#ef4444" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="6" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5"/>
      <polyline points="24,18 34,8 30,14 42,6" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
    </g>
  </g>

  <!-- ITEM 1 (COCHE ELEVADO SIN SEGURO) + ITEM 6 (COLUMNAS ANCLADAS) + ITEM 11 (BRAZO CON GOMA APOYO) -->
  <g id="danger-elevador" transform="translate(415, 110)">
    <!-- Columnas azules ancladas con pernos al suelo (x=660..710 para columna derecha) -->
    <rect x="0" y="0" width="24" height="340" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="-8" y="334" width="40" height="10" rx="1" fill="#94a3b8" stroke="#475569"/>
    <rect x="260" y="0" width="24" height="340" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="252" y="334" width="40" height="10" rx="1" fill="#94a3b8" stroke="#475569"/>
    <circle cx="258" cy="336" r="2" fill="#0f172a"/><circle cx="286" cy="336" r="2" fill="#0f172a"/>
    <!-- Coche rojo detallado con ventanillas, faros y llantas de aleación -->
    <g transform="translate(14, 34)">
      <path d="M26 68 L62 24 Q120 18 178 24 L218 68 Z" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
      <!-- Lunas oscuras del coche -->
      <polygon points="44,64 68,30 120,28 120,64" fill="#38bdf8" opacity="0.82"/>
      <polygon points="128,28 172,30 198,64 128,64" fill="#38bdf8" opacity="0.82"/>
      <!-- Carrocería inferior, faro y piloto -->
      <rect x="8" y="66" width="242" height="36" rx="8" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <rect x="236" y="72" width="14" height="10" rx="2" fill="#fef08a"/>
      <rect x="8" y="74" width="12" height="10" rx="2" fill="#f97316"/>
      <!-- Ruedas completas con llantas -->
      <circle cx="52" cy="102" r="22" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <circle cx="52" cy="102" r="11" fill="#cbd5e1"/><circle cx="52" cy="102" r="4" fill="#475569"/>
      <circle cx="206" cy="102" r="22" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <circle cx="206" cy="102" r="11" fill="#cbd5e1"/><circle cx="206" cy="102" r="4" fill="#475569"/>
    </g>
    <!-- Brazos amarillos basculantes y tacos de goma negra bajo chasis (ITEM 11) -->
    <line x1="20" y1="162" x2="262" y2="162" stroke="#facc15" stroke-width="10"/>
    <rect x="46" y="142" width="26" height="15" rx="2" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <rect x="214" y="142" width="26" height="15" rx="2" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <!-- Indicador rojo de trinquete mecánico de seguridad sin enclavar -->
    <path d="M250 175 L250 198 M244 190 L250 198 L256 190" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Carro de botellas de oxicorte con manómetros y manguera agrietada con cinta -->
  <g id="danger-oxicorte" transform="translate(794, 184)">
    ${svgFloorShadow(48, 224, 52, 8)}
    <rect x="-4" y="212" width="102" height="10" rx="2" fill="#475569"/>
    <circle cx="88" cy="214" r="14" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="10" y="54" width="32" height="162" rx="11" fill="#0284c7" stroke="#0c4a6e" stroke-width="2"/>
    <rect x="48" y="72" width="36" height="144" rx="11" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
    <rect x="6" y="130" width="82" height="6" fill="#94a3b8"/> <!-- Cadena carro -->
    <circle cx="26" cy="44" r="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="66" cy="64" r="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M26 36 Q12 6 66 32 Q98 56 88 122" fill="none" stroke="#ef4444" stroke-width="4.5"/>
    <rect x="44" y="16" width="14" height="9" fill="#0f172a"/> <!-- Parche cinta aislante -->
    <path d="M40 8 L34 -2 M52 4 L56 -6" stroke="#facc15" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <!-- ITEM 4 (PELIGRO): Foso de inspección profundo abierto sin barandilla -->
  <g id="danger-foso" transform="translate(415, 464)">
    <polygon points="0,0 280,0 256,108 24,108" fill="#09090b" stroke="#facc15" stroke-width="4" stroke-dasharray="16,10"/>
    <!-- Escalones internos del foso para dar sensación de profundidad real -->
    <g stroke="#334155" stroke-width="2">
      <line x1="20" y1="26" x2="54" y2="26"/><line x1="24" y1="48" x2="58" y2="48"/><line x1="28" y1="70" x2="62" y2="70"/>
    </g>
    <rect x="180" y="34" width="48" height="24" rx="2" fill="#1e293b"/>
  </g>
</svg>
`;

// ============================================================================
// 8. CUBIERTAS Y TRABAJOS EN ALTURA
// ============================================================================
const svgAlturas = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="altSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/><stop offset="55%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="altRoof" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c2410c"/><stop offset="55%" stop-color="#ea580c"/><stop offset="100%" stop-color="#9a3412"/>
    </linearGradient>
  </defs>

  <!-- Cielo exterior y vacío al borde derecho -->
  <rect x="0" y="0" width="1000" height="600" fill="url(#altSky)"/>
  <ellipse cx="220" cy="54" rx="85" ry="22" fill="#ffffff" opacity="0.6"/>
  <rect x="880" y="420" width="120" height="180" fill="#0369a1" opacity="0.35"/>

  <!-- Fachada del edificio de 12 metros con ventana visible -->
  <polygon points="0,420 880,420 880,600 0,600" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
  <g transform="translate(460, 465)">
    <rect width="120" height="82" rx="3" fill="#0f172a" opacity="0.55" stroke="#64748b" stroke-width="3"/>
    <line x1="60" y1="0" x2="60" y2="82" stroke="#94a3b8" stroke-width="3"/>
  </g>

  <!-- Faldón de tejado inclinado (cumbrera y=125 a alero y=410) -->
  <polygon points="40,125 875,125 895,410 15,410" fill="url(#altRoof)" stroke="#7c2d12" stroke-width="2"/>

  <!-- ITEM 5 (SEGURO): Hiladas reales de tejas cerámicas curvas fijadas -->
  <g stroke="#7c2d12" stroke-width="2" fill="none" opacity="0.72">
    <path d="M36,185 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0"/>
    <path d="M32,245 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0"/>
    <path d="M28,305 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0"/>
    <path d="M22,365 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0"/>
  </g>

  <!-- ITEM 10 (SEGURO): Caballete de cumbrera ventilada -->
  <g transform="translate(36, 106)">
    <rect width="844" height="24" rx="7" fill="#7c2d12" stroke="#451a03" stroke-width="2"/>
    <rect x="6" y="4" width="832" height="7" rx="3" fill="#c2410c"/>
  </g>

  <!-- ITEM 7 (SEGURO): Peto perimetral de ladrillo en borde derecho con albardilla -->
  <g transform="translate(868, 120)">
    <polygon points="0,0 34,0 54,290 18,290" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
    <g stroke="#fca5a5" stroke-width="1" opacity="0.45">
      <line x1="4" y1="50" x2="36" y2="50"/><line x1="8" y1="110" x2="42" y2="110"/><line x1="12" y1="170" x2="46" y2="170"/><line x1="15" y1="230" x2="50" y2="230"/>
    </g>
    <rect x="-4" y="-6" width="40" height="10" rx="2" fill="#cbd5e1" stroke="#64748b"/>
  </g>

  <!-- ITEM 6 (SEGURO): Canalón metálico de zinc en el alero y bajante -->
  <g transform="translate(12, 404)">
    <rect width="890" height="14" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <rect x="142" y="14" width="12" height="182" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
    <rect x="139" y="80" width="18" height="6" fill="#475569"/>
  </g>

  <!-- ITEM 3 (CUERDA AMARRADA) + ITEM 12 (GRIETAS PROFUNDAS EN MORTERO DE CHIMENEA) -->
  <g id="danger-chimenea" transform="translate(592, 62)">
    <rect width="94" height="128" fill="#991b1b" stroke="#450a0a" stroke-width="2.5"/>
    <g stroke="#fca5a5" stroke-width="1.2" opacity="0.45">
      <line x1="0" y1="30" x2="94" y2="30"/><line x1="0" y1="60" x2="94" y2="60"/><line x1="0" y1="90" x2="94" y2="90"/>
      <line x1="47" y1="0" x2="47" y2="30"/><line x1="25" y1="30" x2="25" y2="60"/><line x1="70" y1="60" x2="70" y2="90"/>
    </g>
    <rect x="-6" y="-8" width="106" height="12" fill="#475569"/>
    <rect x="18" y="-20" width="14" height="12" fill="#b45309"/><rect x="60" y="-20" width="14" height="12" fill="#b45309"/>
    <!-- Grietas estructurales oscuras destacadas -->
    <polyline points="56,16 74,46 60,76 74,98" stroke="#0f172a" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
    <polyline points="20,38 34,62 24,84" stroke="#0f172a" stroke-width="3" fill="none"/>
    <!-- Lazo de cuerda amarilla amarrado a la chimenea deteriorada -->
    <ellipse cx="47" cy="70" rx="51" ry="12" fill="none" stroke="#facc15" stroke-width="6"/>
    <path d="M-4 72 Q-82 122 -132 168" fill="none" stroke="#facc15" stroke-width="3.5" stroke-dasharray="7,3"/>
  </g>

  <!-- ITEM 1 (PELIGRO): Lucernario de policarbonato frágil sin malla ni pasarela -->
  <g id="danger-lucernario" transform="translate(338, 214)">
    <polygon points="16,0 168,0 188,96 0,96" fill="#38bdf8" opacity="0.65" stroke="#0284c7" stroke-width="3"/>
    <line x1="56" y1="0" x2="48" y2="96" stroke="#bae6fd" stroke-width="2" opacity="0.5"/>
    <line x1="94" y1="0" x2="94" y2="96" stroke="#bae6fd" stroke-width="2" opacity="0.5"/>
    <line x1="132" y1="0" x2="140" y2="96" stroke="#bae6fd" stroke-width="2" opacity="0.5"/>
    <polyline points="42,32 76,58 112,42 134,64" stroke="#ef4444" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ITEM 11 (PELIGRO): Herramientas sueltas deslizándose por el tejado -->
  <g transform="translate(236, 314)">
    <!-- Taladro a batería amarillo -->
    <rect x="0" y="10" width="46" height="14" rx="3" fill="#facc15" stroke="#854d0e" stroke-width="1.5"/>
    <rect x="14" y="24" width="11" height="18" rx="1" fill="#0f172a"/>
    <rect x="46" y="14" width="16" height="5" fill="#94a3b8"/>
    <!-- Martillo de orejas suelto inclinado -->
    <g transform="translate(68, 18) rotate(28)">
      <rect x="0" y="6" width="38" height="6" rx="1" fill="#b45309"/>
      <rect x="30" y="0" width="10" height="18" rx="2" fill="#475569"/>
    </g>
  </g>

  <!-- ITEM 4 (PELIGRO): Escalera que NO sobrepasa 1m el alero -->
  <g id="danger-escalera-altura" transform="translate(46, 398)">
    <line x1="16" y1="6" x2="16" y2="195" stroke="#e2e8f0" stroke-width="6"/>
    <line x1="50" y1="6" x2="50" y2="195" stroke="#e2e8f0" stroke-width="6"/>
    <line x1="16" y1="28" x2="50" y2="28" stroke="#94a3b8" stroke-width="4"/><line x1="16" y1="62" x2="50" y2="62" stroke="#94a3b8" stroke-width="4"/>
    <line x1="16" y1="96" x2="50" y2="96" stroke="#94a3b8" stroke-width="4"/><line x1="16" y1="130" x2="50" y2="130" stroke="#94a3b8" stroke-width="4"/>
    <line x1="16" y1="164" x2="50" y2="164" stroke="#94a3b8" stroke-width="4"/>
    <line x1="4" y1="6" x2="64" y2="6" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,3"/>
  </g>

  <!-- ITEM 2 (OPERARIO EN ALERO SIN ARNÉS) + ITEM 8 (CASCO BARBOQUEJO) + ITEM 9 (BOTAS DE TEJADOR) -->
  <g id="danger-vacio" transform="translate(756, 226)">
    <!-- Línea discontinua roja de peligro de caída al vacío -->
    <line x1="98" y1="6" x2="98" y2="210" stroke="#ef4444" stroke-width="3.5" stroke-dasharray="8,5"/>
    <!-- Rodillas y botas técnicas antideslizantes apoyadas sobre teja del alero (ITEM 9: y=378..416 -> rel y=152..190) -->
    <path d="M24 128 L34 152 L16 174" fill="none" stroke="#1e3a8a" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M44 128 L52 152 L38 174" fill="none" stroke="#1e40af" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Botas de tejador con suela de agarre marcada en amarillo (rel y=168..184 = abs y=394..410 justo encima del canalón!) -->
    <rect x="8" y="166" width="22" height="12" rx="3" fill="#0f172a" stroke="#facc15" stroke-width="1.5"/>
    <rect x="34" y="166" width="22" height="12" rx="3" fill="#0f172a" stroke="#facc15" stroke-width="1.5"/>
    <!-- Torso inclinado sin arnés anticaídas ni línea de vida -->
    <path d="M18 66 L54 66 L52 130 L20 130 Z" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
    <path d="M52 78 L72 96 L64 114" fill="none" stroke="#f97316" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="64" cy="116" r="5" fill="#fed7aa"/>
    <!-- Casco amarillo EN 12492 con barboquejo negro visible (ITEM 8: rel y=10..48 = abs y=236..274) -->
    <rect x="30" y="52" width="12" height="16" fill="#fed7aa"/>
    <circle cx="36" cy="34" r="15" fill="#fed7aa" stroke="#ea580c" stroke-width="1.2"/>
    <circle cx="42" cy="33" r="1.8" fill="#0f172a"/>
    <path d="M19 30 Q36 8 53 30 Z" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <path d="M24 30 L35 48 L48 30" fill="none" stroke="#0f172a" stroke-width="2.2" stroke-linejoin="round"/>
  </g>
</svg>
`;

// Exportar base de datos con los 8 escenarios enriquecidos
const allScenarios = [
  { id: 'hospital', name: 'Hospital y Urgencias', subtitle: 'Atención Sanitaria y Hospitalización', description: 'Área clínica de urgencias con pacientes encamados, gases medicinales y residuos biosanitarios.', badgeColor: 'sky', icon: 'heart-pulse', timeLimit: 90, svgContent: svgHospital.trim(), hazards: [] },
  { id: 'oficina', name: 'Oficina y Despachos', subtitle: 'Administración y Gestión Corporativa', description: 'Espacio de trabajo administrativo común con equipos ofimáticos, zonas de tránsito, archivadores y medios de protección.', badgeColor: 'sky', icon: 'briefcase', timeLimit: 90, svgContent: svgOficina.trim(), hazards: [] },
  { id: 'obra', name: 'Obra de Construcción', subtitle: 'Edificación y Obra Civil', description: 'Entorno de obra con maquinaria pesada, trabajos en altura, excavaciones y cuadros eléctricos temporales.', badgeColor: 'amber', icon: 'hard-hat', timeLimit: 90, svgContent: svgObra.trim(), hazards: [] },
  { id: 'almacen', name: 'Almacén Logístico', subtitle: 'Almacenamiento y Manutención', description: 'Nave logística de alta rotación con carretillas elevadoras, estanterías pesadas y pasillos de tránsito.', badgeColor: 'emerald', icon: 'archive', timeLimit: 90, svgContent: svgAlmacen.trim(), hazards: [] },
  { id: 'laboratorio', name: 'Laboratorio Químico y Biológico', subtitle: 'Ensayos y Análisis de Riesgo Químico', description: 'Laboratorio de control y análisis con reactivos peligrosos, campana extractora y material biológico.', badgeColor: 'purple', icon: 'flask', timeLimit: 90, svgContent: svgLaboratorio.trim(), hazards: [] },
  { id: 'cocina', name: 'Cocina Industrial', subtitle: 'Hostelería y Restauración Colectiva', description: 'Cocina profesional con fogones de gas, freidoras, maquinaria de corte y suelo húmedo.', badgeColor: 'amber', icon: 'fire', timeLimit: 90, svgContent: svgCocina.trim(), hazards: [] },
  { id: 'taller', name: 'Taller Mecánico e Industrial', subtitle: 'Mantenimiento y Reparación de Vehículos', description: 'Taller de automoción con elevadores hidráulicos, herramientas rotativas, oxicorte y fosos.', badgeColor: 'sky', icon: 'wrench', timeLimit: 90, svgContent: svgTaller.trim(), hazards: [] },
  { id: 'alturas', name: 'Cubiertas y Tejados', subtitle: 'Trabajos Verticales y Rehabilitación', description: 'Cubierta inclinada de teja con claraboyas frágiles, chimeneas y riesgo de caída en altura.', badgeColor: 'amber', icon: 'mountain', timeLimit: 90, svgContent: svgAlturas.trim(), hazards: [] }
];

const outputContent = `/**
 * BANCO DE DATOS DE ESCENARIOS Y PELIGROS DE PRL - 8 ESCENARIOS REALISTAS MULTIPLATAFORMA
 * Generado con arte vectorial detallado para todos los objetos interactivos.
 */
window.PRL_SCENARIOS = ${JSON.stringify(allScenarios, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'scenarios.js'), outputContent, 'utf-8');
console.log('✅ Generated 8 rich complete SVG scenarios in js/scenarios.js!');
