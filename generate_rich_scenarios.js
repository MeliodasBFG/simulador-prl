const fs = require('fs');
const path = require('path');

// ============================================================================
// GENERADOR DE ESCENARIOS DE ALTA DEFINICIÓN REALISTAS (PRL CLASSROOM LIVE)
// 8 Escenarios x 12 Elementos Concretos (Peligros reales + Elementos seguros)
// Cada uno de los 12 elementos está dibujado explícitamente en su coordenada.
// Cero atributos SVG frágiles (sin filter="url(#...)") para máxima compatibilidad.
// ============================================================================

// 1. HOSPITAL Y URGENCIAS CLÍNICAS
const svgHospital = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="hospWallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f0fdfa"/>
      <stop offset="55%" stop-color="#ccfbf1"/>
      <stop offset="56%" stop-color="#0d9488"/>
      <stop offset="60%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#115e59"/>
    </linearGradient>
    <linearGradient id="hospFloorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="15%" stop-color="#f8fafc"/>
      <stop offset="45%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="hospChrome" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="25%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="75%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="hospO2Body" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="35%" stop-color="#ffffff"/>
      <stop offset="85%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="hospO2Shoulder" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="40%" stop-color="#22c55e"/>
      <stop offset="80%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  </defs>

  <!-- Pared y rejilla limpia -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#hospWallGrad)"/>
  <g stroke="#99f6e4" stroke-width="1" opacity="0.35">
    <line x1="0" y1="30" x2="1000" y2="30"/>
    <line x1="0" y1="65" x2="1000" y2="65"/>
    <line x1="100" y1="0" x2="100" y2="65"/><line x1="300" y1="0" x2="300" y2="65"/><line x1="500" y1="0" x2="500" y2="65"/><line x1="700" y1="0" x2="700" y2="65"/><line x1="900" y1="0" x2="900" y2="65"/>
  </g>

  <!-- ITEM 9 (SEGURO): Luminaria LED estanca empotrada -->
  <g id="hosp-led" transform="translate(90, 18)">
    <rect width="190" height="28" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
    <rect x="6" y="4" width="178" height="20" rx="2" fill="#ffffff"/>
    <polygon points="6,24 184,24 235,125 -45,125" fill="#ffffff" opacity="0.08"/>
  </g>
  <rect x="620" y="18" width="150" height="26" rx="4" fill="#ffffff" opacity="0.9"/>

  <!-- ITEM 2 (SEGURO): Pasamanos continuo de pared -->
  <rect x="0" y="232" width="1000" height="16" fill="#d97706" rx="3" stroke="#b45309" stroke-width="1"/>
  <rect x="0" y="234" width="1000" height="4" fill="#fbbf24"/>
  <rect x="70" y="248" width="10" height="18" fill="url(#hospChrome)"/>
  <rect x="240" y="248" width="10" height="18" fill="url(#hospChrome)"/>
  <rect x="440" y="248" width="10" height="18" fill="url(#hospChrome)"/>
  <rect x="740" y="248" width="10" height="18" fill="url(#hospChrome)"/>

  <!-- ITEM 5 (SEGURO): Panel de cabecero de gases medicinales -->
  <g transform="translate(385, 76)">
    <rect width="265" height="44" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="40" cy="22" r="12" fill="#ffffff" stroke="#0284c7" stroke-width="3"/><text x="40" y="25" font-size="8" font-weight="bold" fill="#0284c7" text-anchor="middle">O2</text>
    <circle cx="85" cy="22" r="12" fill="#ffffff" stroke="#eab308" stroke-width="3"/><text x="85" y="25" font-size="7" font-weight="bold" fill="#b45309" text-anchor="middle">VAC</text>
    <circle cx="130" cy="22" r="12" fill="#ffffff" stroke="#10b981" stroke-width="3"/><text x="130" y="25" font-size="7" font-weight="bold" fill="#047857" text-anchor="middle">AIRE</text>
    <rect x="170" y="13" width="22" height="18" rx="2" fill="#22c55e"/><rect x="200" y="13" width="22" height="18" rx="2" fill="#22c55e"/><rect x="232" y="15" width="14" height="14" rx="2" fill="#ef4444"/>
  </g>

  <!-- Suelo vinílico conductivo continuo -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#hospFloorGrad)"/>
  <rect x="0" y="334" width="1000" height="10" fill="#0f766e"/>
  <g stroke="#ffffff" stroke-width="1.5" opacity="0.4">
    <line x1="0" y1="410" x2="1000" y2="410"/><line x1="0" y1="495" x2="1000" y2="495"/>
    <line x1="200" y1="340" x2="50" y2="600"/><line x1="480" y1="340" x2="380" y2="600"/><line x1="750" y1="340" x2="720" y2="600"/>
  </g>
  <!-- Brillo suelo conductivo derecha (ITEM 11) -->
  <ellipse cx="860" cy="545" rx="90" ry="18" fill="#ffffff" opacity="0.28"/>

  <!-- ITEM 10 (SEGURO): Enchufes schuko grado médico verdes en pared derecha -->
  <g transform="translate(895, 250)">
    <rect width="74" height="36" rx="4" fill="#16a34a" stroke="#14532d" stroke-width="2"/>
    <circle cx="22" cy="18" r="10" fill="#ecfdf5" stroke="#15803d" stroke-width="1.5"/>
    <circle cx="18" cy="18" r="2" fill="#0f172a"/><circle cx="26" cy="18" r="2" fill="#0f172a"/>
    <circle cx="52" cy="18" r="10" fill="#ecfdf5" stroke="#15803d" stroke-width="1.5"/>
    <circle cx="48" cy="18" r="2" fill="#0f172a"/><circle cx="56" cy="18" r="2" fill="#0f172a"/>
    <path d="M52 28 Q56 75 45 110" fill="none" stroke="#1e293b" stroke-width="3"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Aguja hipodérmica usada en batea sobre mesa mayo -->
  <g id="danger-aguja" transform="translate(75, 345)">
    <rect x="65" y="100" width="12" height="100" fill="url(#hospChrome)"/>
    <rect x="25" y="195" width="95" height="10" rx="3" fill="#475569"/>
    <circle cx="35" cy="206" r="6" fill="#0f172a"/><circle cx="110" cy="206" r="6" fill="#0f172a"/>
    <rect x="0" y="85" width="155" height="18" rx="4" fill="url(#hospChrome)" stroke="#475569" stroke-width="1.5"/>
    <path d="M18 86 C40 80, 95 80, 118 86 C112 98, 28 98, 18 86 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
    <g transform="translate(36, 76) rotate(-8)">
      <rect x="18" y="0" width="58" height="13" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" opacity="0.92"/>
      <rect x="20" y="2.5" width="24" height="8" rx="1" fill="#dc2626" opacity="0.88"/>
      <rect x="74" y="3" width="24" height="7" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/><rect x="96" y="0" width="4" height="13" fill="#64748b"/>
      <polygon points="18,2 10,4.5 10,8.5 18,11" fill="#0284c7"/>
      <line x1="10" y1="6.5" x2="-24" y2="6.5" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="-25" cy="7.5" r="3" fill="#ef4444"/>
    </g>
    <circle cx="132" cy="88" r="7" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="131" cy="87" r="4" fill="#dc2626" opacity="0.85"/>
  </g>

  <!-- ITEM 1 (PELIGRO): Botella de Oxígeno sin cadena antivuelco -->
  <g id="danger-oxigeno" transform="translate(795, 130)">
    <rect x="-10" y="175" width="14" height="24" rx="2" fill="#334155" stroke="#0f172a"/>
    <path d="M2 190 Q-16 225 4 265 Q-12 295 2 325" fill="none" stroke="#94a3b8" stroke-width="5" stroke-dasharray="8,4" stroke-linecap="round"/>
    <g transform="rotate(6, 45, 390)">
      <rect x="15" y="85" width="64" height="310" rx="20" fill="url(#hospO2Body)" stroke="#94a3b8" stroke-width="2.5"/>
      <path d="M15 125 Q15 60 47 60 Q79 60 79 125 Z" fill="url(#hospO2Shoulder)" stroke="#166534" stroke-width="2"/>
      <rect x="42" y="40" width="12" height="22" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
      <g transform="translate(34, 15)">
        <circle cx="14" cy="14" r="14" fill="#ffffff" stroke="#475569" stroke-width="2"/>
        <line x1="14" y1="14" x2="20" y2="8" stroke="#ef4444" stroke-width="2"/>
        <circle cx="34" cy="20" r="10" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
      </g>
      <g transform="translate(50, 235) rotate(-90)">
        <text x="0" y="4" font-size="11" font-weight="bold" fill="#047857" letter-spacing="3">OXÍGENO MEDICINAL</text>
      </g>
      <polygon points="48,145 58,157 48,169 38,157" fill="#eab308" stroke="#ca8a04"/>
      <ellipse cx="47" cy="392" rx="32" ry="8" fill="#475569"/>
    </g>
  </g>

  <!-- ITEM 4 (PELIGRO) + ITEM 7 (SEGURO GOTERO IV) + ITEM 12 (PEDAL FRENO LEVANTADO) -->
  <g id="danger-camilla" transform="translate(485, 290)">
    <rect x="15" y="105" width="215" height="12" rx="4" fill="url(#hospChrome)" stroke="#475569" stroke-width="1.5"/>
    <rect x="40" y="117" width="16" height="55" fill="url(#hospChrome)"/><rect x="180" y="117" width="16" height="55" fill="url(#hospChrome)"/>
    <rect x="25" y="167" width="190" height="10" rx="3" fill="#334155"/>
    <!-- Barandilla lateral bajada -->
    <g transform="translate(25, 78)">
      <rect width="175" height="6" rx="2" fill="url(#hospChrome)"/>
      <line x1="30" y1="6" x2="30" y2="28" stroke="#94a3b8" stroke-width="3"/><line x1="80" y1="6" x2="80" y2="28" stroke="#94a3b8" stroke-width="3"/><line x1="130" y1="6" x2="130" y2="28" stroke="#94a3b8" stroke-width="3"/>
    </g>
    <rect x="10" y="50" width="225" height="28" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="190" y="45" width="40" height="16" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- ITEM 7 (SEGURO): Soporte de gotero IV -->
    <g transform="translate(215, -100)">
      <line x1="0" y1="0" x2="0" y2="160" stroke="url(#hospChrome)" stroke-width="5"/>
      <line x1="-18" y1="0" x2="18" y2="0" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
      <rect x="-20" y="8" width="22" height="36" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <rect x="-16" y="16" width="14" height="16" fill="#38bdf8" opacity="0.5"/>
      <line x1="-9" y1="44" x2="-9" y2="135" stroke="#94a3b8" stroke-width="2"/>
    </g>
    <!-- ITEM 12 (PELIGRO): Pedal rojo de freno levantado (no trabado) -->
    <g transform="translate(38, 174)">
      <circle cx="12" cy="16" r="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/><circle cx="12" cy="16" r="5" fill="url(#hospChrome)"/>
      <rect x="18" y="-2" width="18" height="6" rx="2" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" transform="rotate(-18, 18, 2)"/>
    </g>
    <g transform="translate(182, 174)">
      <circle cx="12" cy="16" r="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/><circle cx="12" cy="16" r="5" fill="url(#hospChrome)"/>
      <rect x="18" y="-2" width="18" height="6" rx="2" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" transform="rotate(-18, 18, 2)"/>
    </g>
    <path d="M-15 120 L-35 120 M-25 113 L-35 120 L-25 127" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- ITEM 6 (PELIGRO): Bolsa de residuos biosanitarios rota -->
  <g id="danger-residuos" transform="translate(340, 445)">
    <path d="M18 60 C48 45, 108 40, 158 55 C195 68, 185 105, 138 115 C78 125, 28 110, 10 85 Z" fill="#991b1b" opacity="0.8"/>
    <g transform="translate(45, 15)">
      <path d="M25 55 C10 40, 20 15, 45 10 C65 6, 85 10, 100 25 C115 42, 125 70, 95 80 C60 90, 35 85, 25 55 Z" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      <g transform="translate(56, 36) scale(0.75)">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#000000" stroke-width="2.5"/>
        <circle cx="8" cy="8" r="6" fill="none" stroke="#000000" stroke-width="2"/><circle cx="16" cy="8" r="6" fill="none" stroke="#000000" stroke-width="2"/>
        <circle cx="12" cy="16" r="6" fill="none" stroke="#000000" stroke-width="2"/><circle cx="12" cy="12" r="2.5" fill="#000000"/>
      </g>
    </g>
  </g>

  <!-- ITEM 8 (PELIGRO): Celador en sobreesfuerzo lumbar -->
  <g id="danger-ergonomia" transform="translate(275, 205)">
    <rect x="52" y="155" width="16" height="115" rx="5" fill="#0f766e" stroke="#115e59" stroke-width="2"/>
    <rect x="75" y="155" width="16" height="115" rx="5" fill="#0d9488" stroke="#115e59" stroke-width="2"/>
    <ellipse cx="56" cy="270" rx="14" ry="7" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
    <ellipse cx="82" cy="270" rx="14" ry="7" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
    <g transform="translate(30, 72) rotate(-35)">
      <rect x="0" y="0" width="75" height="42" rx="10" fill="#14b8a6" stroke="#0f766e" stroke-width="2.5"/>
      <path d="M15 28 L-15 75 L-30 65" fill="none" stroke="#14b8a6" stroke-width="14" stroke-linecap="round"/>
      <circle cx="-32" cy="64" r="8" fill="#38bdf8"/>
      <path d="M-8 -5 L-18 -15 M-2 -8 L-5 -22 M5 -4 L10 -16" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
      <circle cx="-4" cy="-5" r="4" fill="#ef4444"/>
    </g>
    <g transform="translate(10, 92)">
      <circle cx="15" cy="15" r="18" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <path d="M0 12 C0 -4, 30 -4, 32 12 Z" fill="#78350f"/>
      <rect x="2" y="16" width="18" height="15" rx="3" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
    </g>
  </g>
</svg>
`;

// 2. OFICINA Y DESPACHOS CORPORATIVOS
const svgOficina = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="ofiWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="60%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="ofiFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="30%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="ofiWoodDesk" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="40%" stop-color="#b45309"/>
      <stop offset="80%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>
    <linearGradient id="ofiCoffeeGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#451a03"/>
      <stop offset="50%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#270e02"/>
    </linearGradient>
  </defs>

  <!-- Pared y suelo moqueta técnica (ITEM 9) -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#ofiWall)"/>
  <rect x="0" y="340" width="1000" height="260" fill="url(#ofiFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <g stroke="#1e293b" stroke-width="1.5" opacity="0.65">
    <line x1="0" y1="410" x2="1000" y2="410"/><line x1="0" y1="490" x2="1000" y2="490"/>
    <line x1="180" y1="340" x2="50" y2="600"/><line x1="420" y1="340" x2="320" y2="600"/><line x1="680" y1="340" x2="680" y2="600"/><line x1="880" y1="340" x2="940" y2="600"/>
  </g>

  <!-- ITEM 7 (SEGURO): Ventanal exterior con persiana veneciana -->
  <g transform="translate(360, 28)">
    <rect width="300" height="175" rx="4" fill="#38bdf8" opacity="0.22"/>
    <rect width="300" height="175" rx="4" fill="none" stroke="#64748b" stroke-width="6"/>
    <rect x="25" y="55" width="45" height="120" fill="#0f172a" opacity="0.45"/>
    <rect x="85" y="35" width="55" height="140" fill="#0f172a" opacity="0.55"/>
    <rect x="180" y="50" width="60" height="125" fill="#0f172a" opacity="0.45"/>
    <!-- Lamas de persiana veneciana -->
    <g stroke="#cbd5e1" stroke-width="3" opacity="0.85">
      <line x1="6" y1="14" x2="294" y2="14"/><line x1="6" y1="24" x2="294" y2="24"/>
      <line x1="6" y1="34" x2="294" y2="34"/><line x1="6" y1="44" x2="294" y2="44"/>
      <line x1="6" y1="54" x2="294" y2="54"/>
    </g>
    <line x1="150" y1="0" x2="150" y2="175" stroke="#64748b" stroke-width="4"/>
    <line x1="0" y1="90" x2="300" y2="90" stroke="#64748b" stroke-width="4"/>
  </g>

  <!-- ITEM 2 (PELIGRO): Archivador venciendo con cajones abiertos -->
  <g id="danger-archivador" transform="translate(230, 145) rotate(8, 50, 160)">
    <rect width="90" height="185" rx="3" fill="#64748b" stroke="#334155" stroke-width="3"/>
    <g transform="translate(-32, 12)">
      <rect width="118" height="36" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <rect x="40" y="14" width="34" height="6" rx="2" fill="#334155"/>
      <path d="M10 8 L30 2 L55 8 Z" fill="#f59e0b"/>
    </g>
    <g transform="translate(-26, 56)"><rect width="112" height="36" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/></g>
    <g transform="translate(-18, 100)"><rect width="104" height="36" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/></g>
    <g transform="translate(4, 144)"><rect width="82" height="34" rx="2" fill="#475569"/></g>
  </g>

  <!-- ITEM 5 (SEGURO): Puesto informático ergonómico con monitor curvo -->
  <g transform="translate(65, 310)">
    <rect x="0" y="40" width="250" height="18" rx="4" fill="url(#ofiWoodDesk)"/>
    <rect x="15" y="58" width="12" height="130" fill="#334155"/><rect x="225" y="58" width="12" height="130" fill="#334155"/>
    <path d="M68 -48 Q125 -40 182 -48 L182 18 Q125 24 68 18 Z" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
    <path d="M73 -43 Q125 -36 177 -43 L177 13 Q125 19 73 13 Z" fill="#0284c7"/>
    <rect x="119" y="18" width="12" height="22" fill="#475569"/>
    <ellipse cx="125" cy="40" rx="22" ry="4" fill="#334155"/>
    <rect x="85" y="44" width="60" height="8" rx="2" fill="#1e293b"/><ellipse cx="160" cy="48" rx="6" ry="4" fill="#1e293b"/>
  </g>

  <!-- ITEM 8 (SEGURO): Papelera metálica de oficina bajo extremo izquierdo mesa -->
  <g transform="translate(32, 430)">
    <polygon points="4,0 44,0 38,58 10,58" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <line x1="12" y1="10" x2="15" y2="50" stroke="#475569" stroke-width="1.5"/>
    <line x1="24" y1="10" x2="24" y2="50" stroke="#475569" stroke-width="1.5"/>
    <line x1="36" y1="10" x2="33" y2="50" stroke="#475569" stroke-width="1.5"/>
    <circle cx="24" cy="-2" r="7" fill="#f8fafc" stroke="#cbd5e1"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Taza de café derramada en regleta -->
  <g id="danger-cafe" transform="translate(105, 368)">
    <g transform="translate(26, 48)">
      <rect width="84" height="24" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="16" cy="12" r="5" fill="#cbd5e1"/><circle cx="36" cy="12" r="5" fill="#cbd5e1"/><circle cx="56" cy="12" r="5" fill="#cbd5e1"/>
      <circle cx="5" cy="12" r="2.5" fill="#ef4444"/>
    </g>
    <g transform="translate(0, 34) rotate(65)">
      <rect width="22" height="28" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <path d="M22 6 Q32 14 22 22" fill="none" stroke="#dc2626" stroke-width="3"/>
    </g>
    <path d="M20 56 Q45 48 68 56 Q95 50 112 63 Q95 75 68 72 Q32 75 20 56 Z" fill="url(#ofiCoffeeGrad)" opacity="0.95"/>
    <path d="M72 42 L76 34 L82 40 L88 28 L84 44 Z" fill="#facc15" stroke="#eab308" stroke-width="1.5"/>
  </g>

  <!-- ITEM 12 (PELIGRO): Regleta eléctrica sobrecargada en suelo derecha mesa 1 -->
  <g transform="translate(230, 480)">
    <rect width="74" height="22" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <rect x="8" y="-12" width="14" height="14" rx="2" fill="#0f172a"/>
    <rect x="24" y="-16" width="16" height="18" rx="2" fill="#f59e0b" stroke="#b45309"/>
    <rect x="44" y="-12" width="14" height="14" rx="2" fill="#ef4444"/>
    <circle cx="66" cy="11" r="4" fill="#ef4444"/>
    <path d="M32 -18 L28 -28 L36 -24 L42 -34" fill="none" stroke="#facc15" stroke-width="2.5"/>
  </g>

  <!-- ITEM 1 (PELIGRO): Cables sueltos cruzando pasillo -->
  <g id="danger-cables">
    <path d="M345 485 C 405 455, 445 555, 505 480 S 585 545, 650 485" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
    <path d="M345 510 C 385 535, 435 445, 495 535 S 565 465, 650 520" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <path d="M355 475 C 415 545, 475 465, 535 545 S 595 475, 645 535" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="495" cy="495" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(-25, 495, 495)"/>
  </g>

  <!-- ITEM 10 (PELIGRO PORTÁTIL BAJO) + ITEM 6 (SILLA ROTA) -->
  <g id="danger-ergonomia">
    <g transform="translate(565, 310)">
      <rect x="0" y="40" width="185" height="18" rx="4" fill="url(#ofiWoodDesk)"/>
      <rect x="15" y="58" width="12" height="130" fill="#334155"/><rect x="158" y="58" width="12" height="130" fill="#334155"/>
      <!-- Portátil plano muy bajo sobre mesa -->
      <rect x="28" y="34" width="66" height="6" rx="1" fill="#475569"/>
      <polygon points="32,34 88,34 78,2 22,2" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
      <polygon points="35,31 84,31 76,6 27,6" fill="#38bdf8"/>
    </g>
    <!-- Silla rota inclinada y rueda desprendida -->
    <g transform="translate(655, 305)">
      <rect x="5" y="-28" width="42" height="58" rx="8" fill="#1e293b" stroke="#0f172a" stroke-width="2.5" transform="rotate(24, 25, 20)"/>
      <ellipse cx="25" cy="40" rx="28" ry="12" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
      <rect x="22" y="52" width="6" height="35" fill="#475569"/>
      <circle cx="5" cy="90" r="4.5" fill="#0f172a"/><circle cx="45" cy="90" r="4.5" fill="#0f172a"/><circle cx="64" cy="92" r="5.5" fill="#ef4444"/>
    </g>
  </g>

  <!-- ITEM 4 (PELIGRO): Extintor bloqueado por cajas (derecha) -->
  <g id="danger-extintor">
    <g transform="translate(808, 155)">
      <rect x="-8" y="-38" width="65" height="26" rx="3" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
      <text x="24" y="-21" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">EXTINTOR</text>
      <rect x="5" y="0" width="42" height="100" rx="15" fill="#dc2626" stroke="#991b1b" stroke-width="2.5"/>
      <circle cx="26" cy="-16" r="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5"/>
      <path d="M34 -6 Q48 0 46 50 L42 75" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
    </g>
    <g transform="translate(772, 225)">
      <rect x="10" y="0" width="95" height="52" rx="3" fill="#d97706" stroke="#b45309" stroke-width="2"/>
      <rect x="4" y="50" width="106" height="58" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="-4" y="106" width="116" height="62" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="-10" y="166" width="128" height="68" rx="3" fill="#92400e" stroke="#78350f" stroke-width="2"/>
    </g>
  </g>

  <!-- ITEM 11 (SEGURO): Planta natural decorativa (extremo derecho suelo) -->
  <g transform="translate(918, 340)">
    <polygon points="8,75 46,75 40,125 14,125" fill="#b45309" stroke="#78350f" stroke-width="2"/>
    <rect x="5" y="68" width="44" height="10" rx="2" fill="#d97706"/>
    <path d="M27 70 Q10 35 4 20 Q20 30 27 55" fill="#16a34a" stroke="#15803d" stroke-width="1.5"/>
    <path d="M27 70 Q44 35 52 18 Q36 28 27 55" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
    <path d="M27 65 Q27 25 27 2 Q34 25 27 60" fill="#15803d" stroke="#14532d" stroke-width="1.5"/>
    <ellipse cx="14" cy="45" rx="12" ry="6" fill="#22c55e" transform="rotate(-25, 14, 45)"/>
    <ellipse cx="40" cy="45" rx="12" ry="6" fill="#16a34a" transform="rotate(25, 40, 45)"/>
  </g>
</svg>
`;

// 3. OBRA DE CONSTRUCCIÓN
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

  <!-- ITEM 9 (SEGURO): Estructura de forjado y pilares de hormigón fraguados -->
  <g fill="#94a3b8" stroke="#475569" stroke-width="2">
    <rect x="0" y="140" width="600" height="24"/>
    <rect x="60" y="164" width="35" height="216"/>
    <rect x="260" y="164" width="38" height="216"/>
    <rect x="460" y="164" width="35" height="216"/>
  </g>

  <!-- ITEM 10 (SEGURO TOP-RIGHT) + ITEM 2 (PELIGRO CUBILOTE SUSPENDIDO) -->
  <g transform="translate(680, 20)">
    <!-- Torre grúa arriostrada -->
    <rect x="40" y="60" width="22" height="340" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <line x1="40" y1="100" x2="62" y2="140" stroke="#ca8a04" stroke-width="2"/>
    <line x1="40" y1="180" x2="62" y2="220" stroke="#ca8a04" stroke-width="2"/>
    <line x1="-180" y1="200" x2="40" y2="200" stroke="#475569" stroke-width="6"/> <!-- Arriostramiento a edificio -->
    <rect x="-350" y="60" width="450" height="14" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <rect x="-200" y="74" width="24" height="14" fill="#0f172a"/>
    <line x1="-188" y1="88" x2="-188" y2="195" stroke="#0f172a" stroke-width="3"/>
    <polygon points="-212,195 -164,195 -174,238 -202,238" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
  </g>

  <!-- ITEM 12 (SEGURO): Señalización obligatoria de casco en poste derecha -->
  <g transform="translate(895, 105)">
    <rect x="28" y="65" width="8" height="180" fill="#64748b"/>
    <rect x="0" y="0" width="64" height="68" rx="6" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <circle cx="32" cy="28" r="21" fill="#0284c7"/>
    <path d="M18 32 Q32 14 46 32 Z" fill="#ffffff"/>
    <rect x="16" y="31" width="32" height="4" rx="2" fill="#ffffff"/>
    <text x="32" y="60" font-size="7" font-weight="bold" fill="#0f172a" text-anchor="middle">USO CASCO</text>
  </g>

  <rect x="0" y="380" width="1000" height="220" fill="url(#obraGround)"/>

  <!-- ITEM 3 (PELIGRO): Andamio a 4m sin barandillas -->
  <g id="danger-andamio" transform="translate(55, 130)">
    <line x1="20" y1="0" x2="20" y2="250" stroke="#facc15" stroke-width="8"/><line x1="200" y1="0" x2="200" y2="250" stroke="#facc15" stroke-width="8"/>
    <rect x="10" y="80" width="200" height="16" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
    <line x1="20" y1="80" x2="200" y2="250" stroke="#ca8a04" stroke-width="4"/><line x1="200" y1="80" x2="20" y2="250" stroke="#ca8a04" stroke-width="4"/>
    <g transform="translate(120, 12)">
      <circle cx="15" cy="15" r="12" fill="#fed7aa"/><rect x="5" y="27" width="20" height="40" fill="#f97316"/>
    </g>
  </g>

  <!-- ITEM 11 (PELIGRO): Redondos de acero corrugado salientes sin setas en zapata -->
  <g transform="translate(45, 420)">
    <rect x="0" y="55" width="120" height="35" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <line x1="18" y1="55" x2="18" y2="-10" stroke="#78350f" stroke-width="5"/>
    <line x1="42" y1="55" x2="42" y2="-16" stroke="#92400e" stroke-width="5"/>
    <line x1="68" y1="55" x2="68" y2="-8" stroke="#78350f" stroke-width="5"/>
    <line x1="95" y1="55" x2="95" y2="-14" stroke="#92400e" stroke-width="5"/>
    <circle cx="18" cy="-10" r="3" fill="#ef4444"/><circle cx="42" cy="-16" r="3" fill="#ef4444"/>
  </g>

  <!-- ITEM 6 (PELIGRO): Escalera apoyada sobre bidones inestables -->
  <g id="danger-escalera" transform="translate(310, 220)">
    <rect x="10" y="105" width="65" height="75" rx="5" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <ellipse cx="42.5" cy="105" rx="32.5" ry="8" fill="#38bdf8"/>
    <g transform="rotate(18, 42, 105)">
      <line x1="20" y1="-65" x2="20" y2="120" stroke="#e2e8f0" stroke-width="5"/><line x1="50" y1="-65" x2="50" y2="120" stroke="#e2e8f0" stroke-width="5"/>
      <line x1="20" y1="-45" x2="50" y2="-45" stroke="#94a3b8" stroke-width="4"/><line x1="20" y1="-10" x2="50" y2="-10" stroke="#94a3b8" stroke-width="4"/><line x1="20" y1="25" x2="50" y2="25" stroke="#94a3b8" stroke-width="4"/><line x1="20" y1="60" x2="50" y2="60" stroke="#94a3b8" stroke-width="4"/>
    </g>
  </g>

  <!-- ITEM 1 (PEÓN SIN CASCO) + ITEM 7 (CHALECO REFLECTANTE) + ITEM 8 (BOTAS S3) -->
  <g id="danger-sin-casco" transform="translate(460, 290)">
    <rect x="18" y="110" width="14" height="95" fill="#1e3a8a"/><rect x="36" y="110" width="14" height="95" fill="#1e40af"/>
    <!-- Botas seguridad S3 (ITEM 8) -->
    <rect x="12" y="195" width="22" height="14" rx="4" fill="#451a03" stroke="#0f172a" stroke-width="1.5"/>
    <rect x="12" y="198" width="8" height="10" rx="2" fill="#94a3b8"/> <!-- Puntera acero -->
    <rect x="34" y="195" width="22" height="14" rx="4" fill="#451a03" stroke="#0f172a" stroke-width="1.5"/>
    <rect x="48" y="198" width="8" height="10" rx="2" fill="#94a3b8"/>
    <!-- Chaleco reflectante (ITEM 7) -->
    <rect x="12" y="45" width="44" height="68" rx="6" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <rect x="12" y="65" width="44" height="10" fill="#ffffff" opacity="0.9"/>
    <rect x="12" y="84" width="44" height="8" fill="#ffffff" opacity="0.9"/>
    <!-- Teléfono distraído, SIN casco -->
    <path d="M12 55 L-4 35 L4 28" fill="none" stroke="#facc15" stroke-width="10" stroke-linecap="round"/>
    <rect x="-6" y="24" width="8" height="15" rx="2" fill="#0f172a"/>
    <circle cx="34" cy="22" r="16" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <path d="M20 18 Q34 6 48 18" fill="#451a03"/>
  </g>

  <!-- ITEM 5 (PELIGRO): Cuadro eléctrico en charco de lluvia -->
  <g id="danger-cuadro" transform="translate(775, 200)">
    <rect width="88" height="108" rx="4" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
    <rect x="8" y="10" width="72" height="88" fill="#0f172a"/><rect x="18" y="24" width="52" height="20" fill="#ffffff"/>
    <path d="M44 50 L37 66 L47 66 L39 83" stroke="#facc15" stroke-width="3" fill="none"/>
    <path d="M35 108 Q20 148 40 176" fill="none" stroke="#ef4444" stroke-width="4"/><path d="M55 108 Q70 138 50 176" fill="none" stroke="#3b82f6" stroke-width="4"/>
    <ellipse cx="48" cy="176" rx="44" ry="15" fill="#38bdf8" opacity="0.7"/>
  </g>

  <!-- ITEM 4 (PELIGRO): Zanja de excavación sin entibar -->
  <g id="danger-zanja" transform="translate(680, 395)">
    <polygon points="0,15 300,15 280,190 30,190" fill="#291307" stroke="#0f172a" stroke-width="3"/>
    <path d="M-10 13 Q40 20 80 13 Q140 23 200 13" fill="none" stroke="#ef4444" stroke-width="3"/>
    <circle cx="90" cy="75" r="12" fill="#451a03"/><circle cx="150" cy="115" r="18" fill="#451a03"/>
  </g>
</svg>
`;

// 4. ALMACÉN LOGÍSTICO Y DISTRIBUCIÓN
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
      <stop offset="0%" stop-color="#09090b"/><stop offset="45%" stop-color="#18181b"/><stop offset="70%" stop-color="#27272a"/><stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#almWall)"/>
  <g stroke="#334155" stroke-width="2" opacity="0.4">
    <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="120" x2="1000" y2="120"/>
    <line x1="200" y1="0" x2="200" y2="340"/><line x1="500" y1="0" x2="500" y2="340"/><line x1="800" y1="0" x2="800" y2="340"/>
  </g>

  <!-- ITEM 10 (SEGURO): Campanas LED de alumbrado industrial suspendidas en techo -->
  <g transform="translate(500, 0)">
    <line x1="30" y1="0" x2="30" y2="40" stroke="#94a3b8" stroke-width="3"/>
    <polygon points="8,62 52,62 42,40 18,40" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
    <ellipse cx="30" cy="64" rx="18" ry="4" fill="#fef08a"/>
    <polygon points="8,66 52,66 110,220 -50,220" fill="#fef08a" opacity="0.06"/>
  </g>

  <!-- Suelo hormigón y ITEM 6 (Línea amarilla pasillo peatonal) -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#almFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <line x1="0" y1="535" x2="1000" y2="535" stroke="#eab308" stroke-width="9" stroke-dasharray="28,14"/>

  <!-- ITEM 7 (SEGURO): Bastidores Mecalux azules con placas de anclaje al suelo -->
  <g stroke="#0284c7" stroke-width="9">
    <line x1="185" y1="65" x2="185" y2="380"/><line x1="385" y1="65" x2="385" y2="380"/>
  </g>
  <rect x="172" y="376" width="26" height="8" fill="#94a3b8"/><rect x="372" y="376" width="26" height="8" fill="#94a3b8"/>
  <rect x="180" y="110" width="210" height="12" fill="#ea580c"/>
  <rect x="180" y="210" width="210" height="12" fill="#ea580c"/>
  <rect x="180" y="310" width="210" height="12" fill="#ea580c"/>

  <!-- ITEM 1 (PELIGRO): Palet deformado y ladeado en altura -->
  <g id="danger-palet" transform="translate(185, 60)">
    <g transform="rotate(13, 100, 50)">
      <rect x="10" y="38" width="170" height="14" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="20" y="-10" width="70" height="50" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="95" y="-15" width="75" height="55" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <path d="M15 -5 Q50 -25 165 -10" fill="none" stroke="#e0f2fe" stroke-width="4" opacity="0.75"/>
    </g>
  </g>

  <!-- ITEM 2 (PELIGRO): Charco de aceite en pasillo de paso -->
  <g id="danger-aceite" transform="translate(385, 420)">
    <path d="M10 48 C40 18, 140 15, 205 38 C265 62, 245 102, 180 112 C100 122, 25 102, 5 74 Z" fill="url(#almOilSpill)" stroke="#09090b" stroke-width="2"/>
    <path d="M70 46 Q110 38 140 53" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.65"/>
    <path d="M90 68 Q130 63 160 78" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.55"/>
  </g>

  <!-- ITEM 3 (CARRETILLA HORQUILLAS ALTAS + LLAVE) & ITEM 8 (JAULA ROPS/FOPS) -->
  <g id="danger-carretilla" transform="translate(645, 240)">
    <rect x="45" y="110" width="155" height="88" rx="15" fill="url(#almForkliftYellow)" stroke="#ca8a04" stroke-width="3"/>
    <rect x="175" y="80" width="44" height="118" rx="6" fill="#0f172a"/>
    <rect x="85" y="25" width="84" height="90" rx="4" fill="none" stroke="#0f172a" stroke-width="7"/> <!-- Jaula ROPS/FOPS -->
    <circle cx="115" cy="70" r="14" fill="none" stroke="#0f172a" stroke-width="4"/>
    <circle cx="136" cy="85" r="4.5" fill="#ef4444"/><rect x="136" y="85" width="9" height="3.5" fill="#ef4444"/> <!-- Llave puesta -->
    <rect x="215" y="-30" width="14" height="225" fill="#334155"/>
    <rect x="225" y="38" width="98" height="12" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <rect x="225" y="50" width="98" height="12" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <circle cx="80" cy="198" r="25" fill="#0f172a" stroke="#334155" stroke-width="4"/>
    <circle cx="185" cy="198" r="23" fill="#0f172a" stroke="#334155" stroke-width="4"/>
  </g>

  <!-- ITEM 4 (PUERTA EMERGENCIA BLOQUEADA) + ITEM 9 (SEÑAL LUMINISCENTE VERDE SALIDA) -->
  <g id="danger-salida" transform="translate(22, 195)">
    <rect width="108" height="185" rx="4" fill="#15803d" stroke="#166534" stroke-width="3"/>
    <rect x="15" y="90" width="78" height="10" rx="3" fill="#e2e8f0"/>
    <!-- Señal luminiscente arriba -->
    <rect x="18" y="-42" width="72" height="26" rx="3" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
    <text x="54" y="-25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">SALIDA ➔</text>
    <g transform="translate(8, 72)">
      <rect x="0" y="0" width="92" height="24" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="0" y="26" width="92" height="24" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="0" y="52" width="92" height="24" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="0" y="78" width="92" height="24" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2"/>
    </g>
  </g>

  <!-- ITEM 5 (OPERARIO ESPALDA) + ITEM 12 (CAJA 40 KG) + ITEM 11 (CALZADO SEGURIDAD) -->
  <g id="danger-espalda" transform="translate(495, 255)">
    <rect x="30" y="108" width="14" height="82" fill="#1e3a8a"/>
    <rect x="48" y="108" width="14" height="82" fill="#1e3a8a"/>
    <!-- Calzado seguridad S3 (ITEM 11) -->
    <rect x="24" y="186" width="22" height="12" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <rect x="46" y="186" width="22" height="12" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
    <g transform="translate(10, 58) rotate(-40)">
      <rect width="60" height="34" rx="6" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      <path d="M10 20 L-10 60 L10 60" fill="none" stroke="#facc15" stroke-width="10"/>
      <rect x="-35" y="45" width="65" height="50" rx="3" fill="#78350f" stroke="#451a03" stroke-width="2"/>
      <text x="-2" y="75" font-size="12" font-weight="bold" fill="#fde047" text-anchor="middle">40 kg</text>
      <path d="M-8 -6 L-16 -16 M-2 -8 L-5 -20" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
    </g>
    <circle cx="2" cy="68" r="14" fill="#fed7aa"/>
  </g>
</svg>
`;

// 5. LABORATORIO QUÍMICO Y BIOLÓGICO
const svgLaboratorio = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="labWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="labFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#labWall)"/>
  <g stroke="#334155" stroke-width="1" opacity="0.35">
    <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="120" x2="1000" y2="120"/><line x1="0" y1="180" x2="1000" y2="180"/><line x1="0" y1="240" x2="1000" y2="240"/>
  </g>

  <!-- Suelo epoxi continuo sin juntas (ITEM 10) -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#labFloor)"/>
  <rect x="0" y="335" width="1000" height="10" fill="#1e293b"/> <!-- Zócalo media caña sanitaria -->

  <!-- Encimera fenólica (ITEM 7) + Fregadero con grifo cisne (ITEM 8) -->
  <g transform="translate(175, 315)">
    <rect x="0" y="40" width="560" height="20" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="15" y="60" width="530" height="130" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <!-- Fregadero con grifo de cuello de cisne (ITEM 8) a la derecha de la encimera -->
    <g transform="translate(470, 5)">
      <path d="M22 35 L22 10 Q22 -8 40 -8 Q52 -8 52 8" fill="none" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
      <rect x="0" y="35" width="66" height="8" rx="2" fill="#64748b"/>
      <rect x="6" y="43" width="54" height="28" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
    </g>
  </g>

  <!-- ITEM 1 (GUILLOTINA ABIERTA) + ITEM 11 (VAPORES TÓXICOS ESCAPANDO) -->
  <g id="danger-campana" transform="translate(215, 105)">
    <rect width="180" height="230" rx="4" fill="#475569" stroke="#1e293b" stroke-width="3"/>
    <rect x="15" y="15" width="150" height="170" fill="#0f172a"/>
    <rect x="15" y="15" width="150" height="32" fill="#38bdf8" opacity="0.35" stroke="#94a3b8" stroke-width="2"/>
    <rect x="75" y="130" width="30" height="42" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="90" cy="130" rx="15" ry="4" fill="#a855f7" opacity="0.8"/>
    <path d="M90 125 Q70 90 85 55 Q100 10 135 -10 Q175 -15 205 20" fill="none" stroke="#c084fc" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
    <circle cx="150" cy="30" r="5" fill="#ef4444"/>
  </g>

  <!-- ITEM 2 (ARMARIO INCOMPATIBLES) + ITEM 9 (ETIQUETAS CLP EN FRASCOS) -->
  <g id="danger-incompatibles" transform="translate(765, 110)">
    <rect width="160" height="240" rx="4" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
    <line x1="80" y1="0" x2="80" y2="240" stroke="#ca8a04" stroke-width="2"/>
    <rect x="15" y="52" width="130" height="6" fill="#ca8a04"/>
    <rect x="15" y="138" width="130" height="6" fill="#ca8a04"/>
    <!-- Frascos con etiquetas CLP rombo rojo visibles -->
    <g transform="translate(22, 16)">
      <rect width="26" height="36" rx="3" fill="#dc2626"/>
      <rect x="4" y="10" width="18" height="16" fill="#ffffff"/>
      <polygon points="13,12 18,18 13,24 8,18" fill="none" stroke="#ef4444" stroke-width="1.8"/>
    </g>
    <g transform="translate(58, 16)">
      <rect width="26" height="36" rx="3" fill="#eab308" stroke="#854d0e"/>
      <rect x="4" y="10" width="18" height="16" fill="#ffffff"/>
      <polygon points="13,12 18,18 13,24 8,18" fill="none" stroke="#ef4444" stroke-width="1.8"/>
    </g>
    <g transform="translate(96, 16)">
      <rect width="26" height="36" rx="3" fill="#dc2626"/>
      <rect x="4" y="10" width="18" height="16" fill="#ffffff"/>
      <polygon points="13,12 18,18 13,24 8,18" fill="none" stroke="#ef4444" stroke-width="1.8"/>
    </g>
  </g>

  <!-- ITEM 3 (DUCHA BLOQUEADA POR CARRO) + ITEM 12 (TIRADOR TRIANGULAR DE EMERGENCIA) -->
  <g id="danger-ducha" transform="translate(28, 110)">
    <rect x="30" y="0" width="10" height="150" fill="#22c55e"/>
    <ellipse cx="35" cy="15" rx="25" ry="10" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
    <!-- Tirador triangular rígido visible -->
    <line x1="65" y1="25" x2="65" y2="85" stroke="#cbd5e1" stroke-width="3"/>
    <polygon points="65,85 52,110 78,110" fill="none" stroke="#facc15" stroke-width="4" stroke-linejoin="round"/>
    <!-- Carro metálico bloqueando debajo -->
    <g transform="translate(0, 128)">
      <rect width="84" height="86" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <circle cx="15" cy="92" r="8" fill="#0f172a"/><circle cx="68" cy="92" r="8" fill="#0f172a"/>
    </g>
  </g>

  <!-- ITEM 4 (MATRAZ ROTO CON ÁCIDO EN ENCIMERA) -->
  <g id="danger-derrame" transform="translate(430, 315)">
    <path d="M10 38 Q40 25 80 35 Q130 30 150 45 Q120 58 70 55 Q20 58 10 38 Z" fill="#22c55e" opacity="0.88"/>
    <path d="M50 30 L65 10 L75 10 L90 30 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5" transform="rotate(45, 70, 25)"/>
    <circle cx="45" cy="38" r="3" fill="#ffffff"/>
  </g>

  <!-- ITEM 5 (PIPETEO BUCAL) + ITEM 6 (BATA BLANCA ALGODÓN) -->
  <g id="danger-pipeteo" transform="translate(555, 215)">
    <circle cx="35" cy="25" r="16" fill="#fed7aa"/>
    <rect x="16" y="45" width="42" height="88" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="37" y1="45" x2="37" y2="133" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="42" cy="65" r="2" fill="#475569"/><circle cx="42" cy="85" r="2" fill="#475569"/>
    <line x1="28" y1="28" x2="-4" y2="75" stroke="#38bdf8" stroke-width="3.5"/>
  </g>
</svg>
`;

// 6. COCINA INDUSTRIAL Y RESTAURACIÓN
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
  <rect x="0" y="320" width="1000" height="280" fill="url(#cocFloor)"/>
  <g stroke="#450a0a" stroke-width="2" opacity="0.4">
    <line x1="0" y1="400" x2="1000" y2="400"/><line x1="0" y1="490" x2="1000" y2="490"/>
    <line x1="200" y1="320" x2="80" y2="600"/><line x1="500" y1="320" x2="450" y2="600"/><line x1="800" y1="320" x2="820" y2="600"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Campana extractora industrial con filtros goteando grasa -->
  <g transform="translate(360, 35)">
    <polygon points="0,90 320,90 280,0 40,0" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
    <path d="M60 90 Q65 125 60 145" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M160 90 Q165 130 160 155" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M260 90 Q265 120 260 140" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" fill="none"/>
  </g>

  <!-- ITEM 10 (SEGURO): Cocinero con uniforme de algodón ignífugo -->
  <g transform="translate(555, 130)">
    <rect x="16" y="42" width="44" height="65" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="32" cy="58" r="2" fill="#0f172a"/><circle cx="32" cy="72" r="2" fill="#0f172a"/>
    <circle cx="44" cy="58" r="2" fill="#0f172a"/><circle cx="44" cy="72" r="2" fill="#0f172a"/>
    <circle cx="38" cy="24" r="14" fill="#fed7aa"/>
    <rect x="24" y="-8" width="28" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  </g>

  <!-- ITEM 7 (FOGONES GAS) + ITEM 11 (FREIDORA TERMOSTATO) -->
  <g transform="translate(360, 230)">
    <rect width="320" height="120" rx="4" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
    <circle cx="65" cy="24" r="26" fill="#1e293b"/><circle cx="65" cy="24" r="13" fill="#0284c7" opacity="0.85"/>
    <circle cx="145" cy="24" r="26" fill="#1e293b"/><circle cx="145" cy="24" r="12" fill="#0284c7" opacity="0.85"/>
    <!-- Freidora derecha con termostato 210°C -->
    <rect x="225" y="10" width="76" height="48" rx="3" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    <circle cx="263" cy="82" r="10" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>
    <text x="263" y="103" font-size="8" font-weight="bold" fill="#0f172a" text-anchor="middle">MAX 210°C</text>
  </g>

  <!-- ITEM 6 (SEGURO MESA INOX) + ITEM 1 (CORTAFIAMBRES) + ITEM 12 (CUCHILLA DISCO SIN RESGUARDO) -->
  <g transform="translate(80, 295)">
    <rect x="0" y="38" width="240" height="16" fill="url(#cocInox)" stroke="#475569" stroke-width="1.5"/>
    <rect x="12" y="54" width="12" height="115" fill="#94a3b8"/><rect x="216" y="54" width="12" height="115" fill="#94a3b8"/>
    <g transform="translate(65, -35)">
      <rect x="10" y="12" width="90" height="50" rx="4" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
      <circle cx="105" cy="30" r="30" fill="#f8fafc" stroke="#dc2626" stroke-width="3.5"/>
      <circle cx="105" cy="30" r="6" fill="#475569"/>
    </g>
  </g>

  <!-- ITEM 9 (SEGURO): Sumidero sifónico con rejilla inox en suelo -->
  <g transform="translate(215, 495)">
    <rect width="68" height="32" rx="3" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
    <line x1="10" y1="6" x2="10" y2="26" stroke="#1e293b" stroke-width="3"/>
    <line x1="22" y1="6" x2="22" y2="26" stroke="#1e293b" stroke-width="3"/>
    <line x1="34" y1="6" x2="34" y2="26" stroke="#1e293b" stroke-width="3"/>
    <line x1="46" y1="6" x2="46" y2="26" stroke="#1e293b" stroke-width="3"/>
    <line x1="58" y1="6" x2="58" y2="26" stroke="#1e293b" stroke-width="3"/>
  </g>

  <!-- ITEM 2 (PELIGRO): Charco de aceite y grasa en suelo frente a freidora -->
  <g id="danger-grasa" transform="translate(410, 425)">
    <path d="M20 48 C60 22, 180 18, 230 44 C270 68, 240 102, 180 112 C100 122, 20 96, 10 68 Z" fill="#eab308" opacity="0.8" stroke="#ca8a04" stroke-width="2"/>
  </g>

  <!-- ITEM 8 (GRIFO MUELLE COMPENSADOR) + ITEM 5 (TABLA POLLO/ENSALADA) + ITEM 4 (ENCHUFE 400V EN AGUA) -->
  <g transform="translate(705, 225)">
    <rect x="0" y="62" width="230" height="75" fill="url(#cocInox)" stroke="#475569" stroke-width="2"/>
    <!-- Grifo ducha con muelle compensador -->
    <path d="M165 62 L165 -22 Q165 -42 135 -42 L120 -25" fill="none" stroke="#e2e8f0" stroke-width="6" stroke-linecap="round"/>
    <path d="M160 15 L170 20 L160 25 L170 30 L160 35" fill="none" stroke="#475569" stroke-width="3"/>
    <!-- Tabla de madera contaminada (ITEM 5) -->
    <g transform="translate(12, 46)">
      <rect width="88" height="14" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
      <ellipse cx="26" cy="2" rx="12" ry="6" fill="#fda4af" stroke="#e11d48"/> <!-- Pollo crudo -->
      <circle cx="64" cy="2" r="7" fill="#22c55e"/> <!-- Ensalada -->
    </g>
    <!-- Enchufe trifásico 400V caído en charco de baldeo (ITEM 4) -->
    <g transform="translate(95, 165)">
      <rect width="75" height="26" rx="4" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      <path d="M38 26 Q30 70 50 96" fill="none" stroke="#0f172a" stroke-width="5"/>
      <ellipse cx="52" cy="100" rx="42" ry="15" fill="#38bdf8" opacity="0.72"/>
    </g>
  </g>
</svg>
`;

// 7. TALLER MECÁNICO E INDUSTRIAL (COMPLETAMENTE REDISEÑADO CON TODOS LOS 12 ITEMS)
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

  <!-- Pared y suelo epoxi antideslizante (ITEM 10) -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#talWall)"/>
  <g stroke="#334155" stroke-width="1" opacity="0.35">
    <line x1="0" y1="80" x2="1000" y2="80"/><line x1="0" y1="160" x2="1000" y2="160"/>
    <line x1="250" y1="0" x2="250" y2="340"/><line x1="750" y1="0" x2="750" y2="340"/>
  </g>
  <rect x="0" y="340" width="1000" height="260" fill="url(#talFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>

  <!-- ITEM 8 (SEGURO): Enrollador automático de manguera neumática en techo derecha -->
  <g transform="translate(835, 25)">
    <rect x="20" y="0" width="36" height="12" fill="#64748b"/>
    <circle cx="38" cy="40" r="28" fill="#0284c7" stroke="#e2e8f0" stroke-width="3"/>
    <circle cx="38" cy="40" r="14" fill="#facc15"/>
    <path d="M56 54 Q75 95 62 125" fill="none" stroke="#eab308" stroke-width="5" stroke-linecap="round"/>
  </g>

  <!-- ITEM 5 (PELIGRO): Cuba de desengrase abierta sin extracción a la izquierda -->
  <g id="danger-cuba" transform="translate(28, 210)">
    <rect width="105" height="90" rx="4" fill="#475569" stroke="#1e293b" stroke-width="3"/>
    <ellipse cx="52" cy="14" rx="44" ry="12" fill="#0284c7" opacity="0.88"/>
    <path d="M35 8 Q25 -18 42 -32 M65 8 Q78 -16 58 -30" fill="none" stroke="#38bdf8" stroke-width="3" opacity="0.8"/>
    <rect x="14" y="90" width="10" height="45" fill="#334155"/><rect x="82" y="90" width="10" height="45" fill="#334155"/>
  </g>

  <!-- ITEM 9 (SEGURO): Carro de herramientas rojo con cajones bloqueables (izquierda primer plano) -->
  <g transform="translate(26, 375)">
    <rect width="112" height="120" rx="4" fill="#dc2626" stroke="#7f1d1d" stroke-width="2.5"/>
    <rect x="8" y="10" width="96" height="16" rx="2" fill="#ef4444" stroke="#991b1b"/>
    <rect x="8" y="32" width="96" height="16" rx="2" fill="#ef4444" stroke="#991b1b"/>
    <rect x="8" y="54" width="96" height="22" rx="2" fill="#ef4444" stroke="#991b1b"/>
    <rect x="8" y="82" width="96" height="28" rx="2" fill="#ef4444" stroke="#991b1b"/>
    <circle cx="100" cy="6" r="3" fill="#facc15"/> <!-- Cerradura bloqueo -->
    <circle cx="20" cy="126" r="10" fill="#0f172a"/><circle cx="92" cy="126" r="10" fill="#0f172a"/>
  </g>

  <!-- ITEM 7 (BANCO TRABAJO CON TORNILLO) + ITEM 2 (RADIAL SIN PROTECTOR) + ITEM 12 (DISCO FISURADO) -->
  <g id="danger-radial" transform="translate(175, 315)">
    <rect width="205" height="18" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <rect x="12" y="18" width="14" height="120" fill="#475569"/><rect x="180" y="18" width="14" height="120" fill="#475569"/>
    <!-- Tornillo de banco metálico (ITEM 7) -->
    <g transform="translate(18, -28)">
      <rect x="0" y="16" width="38" height="12" fill="#0284c7" stroke="#0369a1"/>
      <rect x="6" y="0" width="14" height="18" fill="#1e293b"/>
      <line x1="20" y1="8" x2="48" y2="8" stroke="#cbd5e1" stroke-width="3"/>
    </g>
    <!-- Amoladora sin protector + disco con fisura -->
    <g transform="translate(75, -24)">
      <rect x="0" y="6" width="70" height="22" rx="4" fill="#0284c7"/>
      <circle cx="88" cy="16" r="24" fill="#334155" stroke="#ef4444" stroke-width="2.5"/>
      <path d="M88 16 L104 2 L108 8" fill="none" stroke="#facc15" stroke-width="2.5"/> <!-- Grieta en el borde del disco -->
    </g>
  </g>

  <!-- ITEM 1 (COCHE ELEVADO SIN SEGURO) + ITEM 6 (COLUMNAS ANCLADAS) + ITEM 11 (BRAZO CON GOMA APOYO) -->
  <g id="danger-elevador" transform="translate(415, 110)">
    <!-- Columnas azules ancladas con pernos al suelo (ITEM 6) -->
    <rect x="0" y="0" width="24" height="340" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="-8" y="336" width="40" height="10" fill="#94a3b8"/>
    <rect x="260" y="0" width="24" height="340" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="252" y="336" width="40" height="10" fill="#94a3b8"/>
    <!-- Coche rojo elevado -->
    <g transform="translate(12, 36)">
      <path d="M20 70 Q50 30 110 25 Q180 20 230 70 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <rect x="10" y="70" width="240" height="35" rx="6" fill="#ef4444"/>
      <circle cx="50" cy="105" r="22" fill="#0f172a"/><circle cx="210" cy="105" r="22" fill="#0f172a"/>
    </g>
    <!-- Brazos amarillos y tacos de goma negra de apoyo (ITEM 11) -->
    <line x1="20" y1="165" x2="260" y2="165" stroke="#facc15" stroke-width="10"/>
    <rect x="42" y="148" width="24" height="12" rx="2" fill="#0f172a" stroke="#64748b"/>
    <rect x="218" y="148" width="24" height="12" rx="2" fill="#0f172a" stroke="#64748b"/>
  </g>

  <!-- ITEM 3 (PELIGRO): Botellas de oxicorte con manguera agrietada derecha -->
  <g id="danger-oxicorte" transform="translate(795, 185)">
    <rect x="0" y="210" width="95" height="12" fill="#475569"/>
    <rect x="10" y="55" width="32" height="165" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="48" y="75" width="36" height="145" rx="10" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
    <circle cx="26" cy="48" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="66" cy="68" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M26 42 Q12 10 66 36 Q95 60 88 120" fill="none" stroke="#ef4444" stroke-width="4.5"/>
    <rect x="48" y="22" width="12" height="8" fill="#0f172a"/> <!-- Cinta aislante reparando manguera -->
  </g>

  <!-- ITEM 4 (PELIGRO): Foso de inspección abierto sin barandilla (centro abajo) -->
  <g id="danger-foso" transform="translate(415, 465)">
    <polygon points="0,0 280,0 255,105 25,105" fill="#09090b" stroke="#facc15" stroke-width="4" stroke-dasharray="16,10"/>
  </g>
</svg>
`;

// 8. CUBIERTAS Y TRABAJOS EN ALTURA (COMPLETAMENTE REDISEÑADO CON PERSPECTIVA Y 12 ITEMS CLAROS)
const svgAlturas = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="altSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/><stop offset="55%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="altRoof" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c2410c"/><stop offset="50%" stop-color="#ea580c"/><stop offset="100%" stop-color="#9a3412"/>
    </linearGradient>
  </defs>

  <!-- Cielo y vacío exterior derecha/abajo -->
  <rect x="0" y="0" width="1000" height="600" fill="url(#altSky)"/>
  <!-- Fachada del edificio de 12 metros bajo el alero -->
  <polygon points="0,420 880,420 880,600 0,600" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
  <!-- Caída libre a la calle derecha -->
  <rect x="880" y="420" width="120" height="180" fill="#334155" opacity="0.35"/>

  <!-- Tejado de tejas inclinadas (de y=125 cumbrera a y=410 alero) -->
  <polygon points="40,125 875,125 895,410 15,410" fill="url(#altRoof)" stroke="#7c2d12" stroke-width="2"/>

  <!-- ITEM 5 (SEGURO): Hiladas de tejas cerámicas fijadas -->
  <g stroke="#7c2d12" stroke-width="2" opacity="0.65">
    <line x1="36" y1="185" x2="879" y2="185"/>
    <line x1="32" y1="245" x2="884" y2="245"/>
    <line x1="28" y1="305" x2="889" y2="305"/>
    <line x1="22" y1="365" x2="893" y2="365"/>
  </g>

  <!-- ITEM 10 (SEGURO): Línea de cumbrera ventilada superior -->
  <g transform="translate(36, 108)">
    <rect width="844" height="22" rx="6" fill="#7c2d12" stroke="#451a03" stroke-width="2"/>
    <rect x="6" y="4" width="832" height="6" fill="#c2410c"/>
  </g>

  <!-- ITEM 7 (SEGURO): Peto perimetral de ladrillo en borde derecho -->
  <g transform="translate(868, 120)">
    <polygon points="0,0 32,0 52,290 18,290" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
    <rect x="-2" y="-6" width="36" height="10" rx="2" fill="#cbd5e1"/>
  </g>

  <!-- ITEM 6 (SEGURO): Canalón metálico de recogida de aguas pluviales en el alero -->
  <g transform="translate(12, 404)">
    <rect width="890" height="14" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    <rect x="140" y="14" width="12" height="182" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/> <!-- Bajante -->
  </g>

  <!-- ITEM 3 (CUERDA AMARRADA) + ITEM 12 (GRIETAS PROFUNDAS CHIMENEA) -->
  <g id="danger-chimenea" transform="translate(595, 65)">
    <rect width="92" height="125" fill="#991b1b" stroke="#7f1d1d" stroke-width="2.5"/>
    <rect x="-6" y="-8" width="104" height="12" fill="#475569"/>
    <!-- Grietas profundas en ladrillo (ITEM 12) -->
    <path d="M55 18 L72 48 L60 82 M20 35 L35 60" stroke="#0f172a" stroke-width="3" fill="none"/>
    <!-- Cuerda amarilla de falsa línea de vida atada al tiro (ITEM 3) -->
    <ellipse cx="46" cy="70" rx="50" ry="11" fill="none" stroke="#facc15" stroke-width="6"/>
    <path d="M-4 72 Q-80 120 -130 165" fill="none" stroke="#facc15" stroke-width="3.5" stroke-dasharray="6,3"/>
  </g>

  <!-- ITEM 1 (PELIGRO): Lucernario de plástico frágil sin red anticaídas -->
  <g id="danger-lucernario" transform="translate(340, 215)">
    <polygon points="15,0 165,0 185,95 0,95" fill="#38bdf8" opacity="0.6" stroke="#0284c7" stroke-width="3"/>
    <path d="M45 35 L78 58 L112 42" stroke="#ef4444" stroke-width="3.5" fill="none"/>
  </g>

  <!-- ITEM 11 (PELIGRO): Herramientas sueltas (taladro y martillo) en la pendiente de teja -->
  <g transform="translate(235, 315)">
    <!-- Taladro a batería amarillo -->
    <rect x="0" y="10" width="44" height="14" rx="2" fill="#facc15" stroke="#854d0e" stroke-width="1.5"/>
    <rect x="14" y="24" width="10" height="18" rx="1" fill="#0f172a"/>
    <rect x="44" y="14" width="16" height="5" fill="#94a3b8"/>
    <!-- Martillo suelto -->
    <g transform="translate(65, 16) rotate(28)">
      <rect x="0" y="6" width="38" height="6" rx="1" fill="#b45309"/>
      <rect x="30" y="0" width="10" height="18" rx="2" fill="#475569"/>
    </g>
  </g>

  <!-- ITEM 4 (PELIGRO): Escalera que NO sobrepasa 1m el alero -->
  <g id="danger-escalera-altura" transform="translate(45, 398)">
    <line x1="16" y1="6" x2="16" y2="195" stroke="#e2e8f0" stroke-width="6"/>
    <line x1="50" y1="6" x2="50" y2="195" stroke="#e2e8f0" stroke-width="6"/>
    <line x1="16" y1="28" x2="50" y2="28" stroke="#94a3b8" stroke-width="4"/>
    <line x1="16" y1="62" x2="50" y2="62" stroke="#94a3b8" stroke-width="4"/>
    <line x1="16" y1="96" x2="50" y2="96" stroke="#94a3b8" stroke-width="4"/>
    <line x1="16" y1="130" x2="50" y2="130" stroke="#94a3b8" stroke-width="4"/>
    <line x1="16" y1="164" x2="50" y2="164" stroke="#94a3b8" stroke-width="4"/>
  </g>

  <!-- ITEM 2 (OPERARIO EN ALERO SIN ARNÉS) + ITEM 8 (CASCO CON BARBOQUEJO) + ITEM 9 (BOTAS DE TEJADOR) -->
  <g id="danger-vacio" transform="translate(765, 255)">
    <!-- Piernas y botas de tejador (ITEM 9) -->
    <rect x="18" y="88" width="12" height="36" fill="#1e3a8a"/>
    <rect x="36" y="88" width="12" height="36" fill="#1e40af"/>
    <rect x="14" y="122" width="20" height="11" rx="3" fill="#0f172a" stroke="#facc15" stroke-width="1"/>
    <rect x="34" y="122" width="20" height="11" rx="3" fill="#0f172a" stroke="#facc15" stroke-width="1"/>
    <!-- Chaqueta naranja sin arnés -->
    <rect x="14" y="34" width="38" height="56" rx="5" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
    <!-- Cabeza y casco amarillo con barboquejo negro visible (ITEM 8) -->
    <circle cx="33" cy="18" r="14" fill="#fed7aa" stroke="#ea580c" stroke-width="1"/>
    <path d="M18 14 Q33 -4 48 14 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M22 14 Q33 34 44 14" fill="none" stroke="#0f172a" stroke-width="2"/> <!-- Barboquejo -->
    <!-- Línea discontinua roja de peligro de caída al vacío -->
    <line x1="88" y1="-20" x2="88" y2="195" stroke="#ef4444" stroke-width="3.5" stroke-dasharray="7,5"/>
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
