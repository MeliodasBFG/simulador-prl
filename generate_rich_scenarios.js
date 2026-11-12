const fs = require('fs');
const path = require('path');

// ============================================================================
// GENERADOR DE ESCENARIOS DE ALTA DEFINICIÓN REALISTAS (PRL CLASSROOM LIVE)
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
    <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="25%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="75%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="o2Body" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="35%" stop-color="#ffffff"/>
      <stop offset="85%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="o2Shoulder" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="40%" stop-color="#22c55e"/>
      <stop offset="80%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
    <filter id="hospShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="6" stdDeviation="5" flood-color="#042f2e" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#hospWallGrad)"/>
  <g stroke="#99f6e4" stroke-width="1" opacity="0.35">
    <line x1="0" y1="30" x2="1000" y2="30"/>
    <line x1="0" y1="65" x2="1000" y2="65"/>
    <line x1="100" y1="0" x2="100" y2="65"/><line x1="300" y1="0" x2="300" y2="65"/><line x1="500" y1="0" x2="500" y2="65"/><line x1="700" y1="0" x2="700" y2="65"/><line x1="900" y1="0" x2="900" y2="65"/>
  </g>
  <rect x="150" y="20" width="160" height="25" rx="3" fill="#ffffff" opacity="0.95"/>
  <rect x="600" y="20" width="160" height="25" rx="3" fill="#ffffff" opacity="0.95"/>
  <polygon points="130,45 330,45 420,340 40,340" fill="#ffffff" opacity="0.04"/>
  <polygon points="580,45 780,45 870,340 490,340" fill="#ffffff" opacity="0.04"/>

  <!-- Pasamanos de madera sanitaria -->
  <rect x="0" y="245" width="1000" height="14" fill="#d97706" rx="3"/>
  <rect x="0" y="246" width="1000" height="4" fill="#fbbf24"/>
  <rect x="80" y="259" width="10" height="16" fill="url(#chromeGrad)"/><rect x="350" y="259" width="10" height="16" fill="url(#chromeGrad)"/><rect x="650" y="259" width="10" height="16" fill="url(#chromeGrad)"/><rect x="880" y="259" width="10" height="16" fill="url(#chromeGrad)"/>

  <!-- Cabecero de gases medicinales -->
  <g transform="translate(420, 120)" filter="url(#hospShadow)">
    <rect width="260" height="42" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="40" cy="21" r="11" fill="#ffffff" stroke="#0284c7" stroke-width="3"/><text x="40" y="24" font-size="7" font-weight="black" fill="#0284c7" text-anchor="middle">O2</text>
    <circle cx="85" cy="21" r="11" fill="#ffffff" stroke="#eab308" stroke-width="3"/><text x="85" y="24" font-size="7" font-weight="black" fill="#eab308" text-anchor="middle">VAC</text>
    <circle cx="130" cy="21" r="11" fill="#ffffff" stroke="#10b981" stroke-width="3"/><text x="130" y="24" font-size="7" font-weight="black" fill="#10b981" text-anchor="middle">AIRE</text>
    <rect x="170" y="12" width="22" height="18" rx="2" fill="#22c55e"/><rect x="200" y="12" width="22" height="18" rx="2" fill="#22c55e"/><rect x="230" y="14" width="14" height="14" rx="2" fill="#ef4444"/>
  </g>

  <!-- Suelo de vinilo con reflejos -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#hospFloorGrad)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f766e"/>
  <g stroke="#ffffff" stroke-width="1.5" opacity="0.35">
    <line x1="0" y1="410" x2="1000" y2="410"/><line x1="0" y1="495" x2="1000" y2="495"/>
    <line x1="200" y1="340" x2="50" y2="600"/><line x1="480" y1="340" x2="380" y2="600"/><line x1="750" y1="340" x2="720" y2="600"/>
  </g>

  <!-- PELIGRO 1: AGUJA DESTAPADA CON SANGRE EN MESA AUXILIAR MAYO -->
  <g id="danger-aguja" transform="translate(120, 310)" class="cursor-pointer" filter="url(#hospShadow)">
    <rect x="65" y="110" width="12" height="110" fill="url(#chromeGrad)"/>
    <rect x="25" y="215" width="90" height="10" rx="3" fill="#475569"/>
    <circle cx="35" cy="226" r="6" fill="#0f172a"/><circle cx="105" cy="226" r="6" fill="#0f172a"/>
    <rect x="0" y="95" width="150" height="18" rx="4" fill="url(#chromeGrad)" stroke="#475569" stroke-width="1.5"/>
    <path d="M20 96 C40 90, 90 90, 110 96 C105 108, 30 108, 20 96 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
    <g transform="translate(35, 88) rotate(-8)">
      <rect x="15" y="0" width="55" height="12" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" opacity="0.9"/>
      <line x1="25" y1="0" x2="25" y2="6" stroke="#0284c7" stroke-width="1"/><line x1="35" y1="0" x2="35" y2="8" stroke="#0284c7" stroke-width="1"/><line x1="45" y1="0" x2="45" y2="6" stroke="#0284c7" stroke-width="1"/>
      <rect x="17" y="2" width="22" height="8" rx="1" fill="#dc2626" opacity="0.85"/>
      <rect x="68" y="3" width="22" height="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/><rect x="88" y="0" width="4" height="12" fill="#64748b"/>
      <polygon points="15,2 8,4 8,8 15,10" fill="#0284c7"/>
      <line x1="8" y1="6" x2="-22" y2="6" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="-22,6 -18,4 -18,8" fill="#cbd5e1"/>
      <circle cx="-23" cy="7" r="2.5" fill="#ef4444"/>
    </g>
    <circle cx="125" cy="98" r="7" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="124" cy="97" r="4" fill="#dc2626" opacity="0.8"/>
  </g>

  <!-- PELIGRO 2: BOTELLA DE OXÍGENO SIN CADENA INCLINADA -->
  <g id="danger-oxigeno" transform="translate(800, 130)" class="cursor-pointer" filter="url(#hospShadow)">
    <rect x="-8" y="180" width="14" height="24" rx="2" fill="#334155" stroke="#0f172a"/>
    <path d="M2 195 Q-15 230 4 270 Q-10 300 2 330" fill="none" stroke="#94a3b8" stroke-width="5" stroke-dasharray="8,4" stroke-linecap="round"/>
    <g transform="rotate(7, 45, 410)">
      <rect x="15" y="90" width="65" height="320" rx="20" fill="url(#o2Body)" stroke="#94a3b8" stroke-width="2.5"/>
      <path d="M15 130 Q15 65 47 65 Q80 65 80 130 Z" fill="url(#o2Shoulder)" stroke="#166534" stroke-width="2"/>
      <rect x="42" y="45" width="12" height="22" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
      <g transform="translate(34, 18)">
        <circle cx="14" cy="14" r="14" fill="#ffffff" stroke="#475569" stroke-width="2"/>
        <line x1="14" y1="14" x2="20" y2="8" stroke="#ef4444" stroke-width="2"/>
        <circle cx="34" cy="20" r="10" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
        <line x1="34" y1="20" x2="38" y2="16" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="5" y="-12" width="8" height="20" rx="2" fill="#e0f2fe" stroke="#64748b" stroke-width="1"/>
      </g>
      <g transform="translate(50, 240) rotate(-90)">
        <text x="0" y="4" font-size="12" font-weight="black" fill="#047857" letter-spacing="4">OXÍGENO MEDICINAL</text>
        <text x="0" y="16" font-size="8" font-weight="bold" fill="#64748b">UN 1072 · GAS COMPRIMIDO 200 BAR</text>
      </g>
      <polygon points="48,150 58,162 48,174 38,162" fill="#eab308" stroke="#ca8a04"/>
      <ellipse cx="47.5" cy="405" rx="32" ry="8" fill="#475569"/>
    </g>
  </g>

  <!-- PELIGRO 4: CAMILLA HOSPITALARIA CON RUEDAS SIN FRENO Y BARANDILLA BAJADA -->
  <g id="danger-camilla" transform="translate(480, 290)" class="cursor-pointer" filter="url(#hospShadow)">
    <rect x="15" y="110" width="220" height="12" rx="4" fill="url(#chromeGrad)" stroke="#475569" stroke-width="1.5"/>
    <rect x="40" y="122" width="16" height="55" fill="url(#chromeGrad)"/><rect x="180" y="122" width="16" height="55" fill="url(#chromeGrad)"/>
    <rect x="25" y="172" width="195" height="10" rx="3" fill="#334155"/>
    <g transform="translate(25, 82)">
      <rect width="180" height="6" rx="2" fill="url(#chromeGrad)"/>
      <line x1="30" y1="6" x2="30" y2="30" stroke="#94a3b8" stroke-width="3"/><line x1="80" y1="6" x2="80" y2="30" stroke="#94a3b8" stroke-width="3"/><line x1="130" y1="6" x2="130" y2="30" stroke="#94a3b8" stroke-width="3"/>
    </g>
    <rect x="10" y="55" width="230" height="28" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <path d="M12 56 Q125 60 238 56 L238 68 Q125 72 12 68 Z" fill="#38bdf8" opacity="0.4"/>
    <rect x="195" y="50" width="40" height="16" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <g transform="translate(225, -20)">
      <line x1="0" y1="0" x2="0" y2="100" stroke="url(#chromeGrad)" stroke-width="4"/>
      <rect x="-14" y="6" width="18" height="30" rx="4" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5" opacity="0.85"/>
      <line x1="-5" y1="36" x2="-5" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
    </g>
    <g transform="translate(38, 178)">
      <circle cx="12" cy="16" r="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/><circle cx="12" cy="16" r="5" fill="url(#chromeGrad)"/>
      <rect x="18" y="4" width="16" height="5" rx="1.5" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
    </g>
    <g transform="translate(185, 178)">
      <circle cx="12" cy="16" r="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/><circle cx="12" cy="16" r="5" fill="url(#chromeGrad)"/>
      <rect x="18" y="4" width="16" height="5" rx="1.5" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
    </g>
    <path d="M-15 125 L-35 125 M-25 118 L-35 125 L-25 132" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
  </g>

  <!-- PELIGRO 3: BOLSA DE RESIDUOS BIOLÓGICOS ROTA Y DERRAMADA -->
  <g id="danger-residuos" transform="translate(360, 420)" class="cursor-pointer" filter="url(#hospShadow)">
    <path d="M20 70 C50 55, 110 50, 160 65 C200 78, 190 115, 140 125 C80 135, 30 120, 10 95 Z" fill="#991b1b" opacity="0.75"/>
    <path d="M40 76 C70 65, 120 62, 145 74 C175 85, 160 110, 125 116 C75 122, 40 110, 28 94 Z" fill="#b91c1c" opacity="0.85"/>
    <g transform="translate(45, 25)">
      <path d="M25 55 C10 40, 20 15, 45 10 C65 6, 85 10, 100 25 C115 42, 125 70, 95 80 C60 90, 35 85, 25 55 Z" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      <path d="M40 20 Q55 35 45 65 Q70 45 90 60" fill="none" stroke="#eab308" stroke-width="3"/>
      <path d="M40 10 L30 -5 M45 10 L50 -8" stroke="#ca8a04" stroke-width="3" stroke-linecap="round"/>
      <g transform="translate(60, 42) scale(0.65)">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#000000" stroke-width="2.5"/>
        <circle cx="8" cy="8" r="6" fill="none" stroke="#000000" stroke-width="2"/><circle cx="16" cy="8" r="6" fill="none" stroke="#000000" stroke-width="2"/>
        <circle cx="12" cy="16" r="6" fill="none" stroke="#000000" stroke-width="2"/><circle cx="12" cy="12" r="2.5" fill="#000000"/>
      </g>
      <ellipse cx="85" cy="82" rx="10" ry="5" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
      <path d="M92 78 Q105 82 108 92 Q100 95 90 85" fill="#38bdf8" opacity="0.9"/>
    </g>
  </g>

  <!-- PELIGRO 5: ENFERMERO EN SOBREESFUERZO LUMBAR -->
  <g id="danger-ergonomia" transform="translate(290, 200)" class="cursor-pointer" filter="url(#hospShadow)">
    <rect x="52" y="160" width="16" height="120" rx="5" fill="#0f766e" stroke="#115e59" stroke-width="2"/>
    <rect x="75" y="160" width="16" height="120" rx="5" fill="#0d9488" stroke="#115e59" stroke-width="2"/>
    <ellipse cx="56" cy="278" rx="14" ry="7" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
    <ellipse cx="82" cy="278" rx="14" ry="7" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
    <g transform="translate(30, 75) rotate(-35)">
      <rect x="0" y="0" width="75" height="42" rx="10" fill="#14b8a6" stroke="#0f766e" stroke-width="2.5"/>
      <polygon points="60,10 75,20 60,30" fill="#ccfbf1"/>
      <path d="M15 28 L-15 75 L-30 65" fill="none" stroke="#14b8a6" stroke-width="14" stroke-linecap="round"/>
      <circle cx="-32" cy="64" r="8" fill="#38bdf8"/>
      <path d="M-8 -5 L-18 -15 M-2 -8 L-5 -22 M5 -4 L10 -16" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
      <circle cx="-4" cy="-5" r="4" fill="#ef4444"/>
    </g>
    <g transform="translate(10, 95)">
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
    <linearGradient id="woodDesk" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="40%" stop-color="#b45309"/>
      <stop offset="80%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>
    <linearGradient id="coffeeGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#451a03"/>
      <stop offset="50%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#270e02"/>
    </linearGradient>
    <filter id="ofiShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-color="#020617" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#ofiWall)"/>
  <g transform="translate(340, 30)">
    <rect width="320" height="180" rx="4" fill="#0284c7" opacity="0.25"/>
    <rect width="320" height="180" rx="4" fill="none" stroke="#64748b" stroke-width="6"/>
    <line x1="160" y1="0" x2="160" y2="180" stroke="#64748b" stroke-width="4"/>
    <line x1="0" y1="90" x2="320" y2="90" stroke="#64748b" stroke-width="4"/>
    <rect x="25" y="60" width="45" height="120" fill="#0f172a" opacity="0.5"/>
    <rect x="80" y="35" width="55" height="145" fill="#0f172a" opacity="0.6"/>
    <rect x="180" y="50" width="60" height="130" fill="#0f172a" opacity="0.5"/>
  </g>

  <rect x="0" y="340" width="1000" height="260" fill="url(#ofiFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <g stroke="#1e293b" stroke-width="1.5" opacity="0.6">
    <line x1="0" y1="410" x2="1000" y2="410"/><line x1="0" y1="490" x2="1000" y2="490"/>
    <line x1="180" y1="340" x2="50" y2="600"/><line x1="420" y1="340" x2="320" y2="600"/><line x1="680" y1="340" x2="680" y2="600"/>
  </g>

  <!-- Puesto 1 -->
  <g transform="translate(60, 310)" filter="url(#ofiShadow)">
    <rect x="0" y="40" width="250" height="18" rx="4" fill="url(#woodDesk)"/>
    <rect x="15" y="58" width="12" height="130" fill="#334155"/><rect x="225" y="58" width="12" height="130" fill="#334155"/>
    <rect x="80" y="-45" width="95" height="65" rx="4" fill="#0f172a" stroke="#475569" stroke-width="2"/>
    <rect x="84" y="-41" width="87" height="57" fill="#0284c7"/>
    <rect x="122" y="20" width="12" height="20" fill="#475569"/>
    <ellipse cx="128" cy="40" rx="22" ry="4" fill="#334155"/>
    <rect x="85" y="44" width="60" height="8" rx="2" fill="#1e293b"/><ellipse cx="160" cy="48" rx="6" ry="4" fill="#1e293b"/>
  </g>

  <!-- PELIGRO 1: CABLES SUELTOS EN PASILLO -->
  <g id="danger-cables" class="cursor-pointer" filter="url(#ofiShadow)">
    <path d="M340 480 C 400 450, 440 550, 500 475 S 580 540, 650 480" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
    <path d="M340 505 C 380 530, 430 440, 490 530 S 560 460, 650 515" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <path d="M350 470 C 410 540, 470 460, 530 540 S 590 470, 640 530" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="495" cy="490" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(-25, 495, 490)"/>
    <path d="M485 470 Q500 445 515 470" fill="none" stroke="#f59e0b" stroke-width="7"/>
  </g>

  <!-- PELIGRO 2: TAZA DE CAFÉ DERRAMADA JUNTO A REGLETA -->
  <g id="danger-cafe" transform="translate(115, 360)" class="cursor-pointer" filter="url(#ofiShadow)">
    <g transform="translate(30, 50)">
      <rect width="85" height="26" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="16" cy="13" r="6" fill="#cbd5e1"/><circle cx="36" cy="13" r="6" fill="#cbd5e1"/><circle cx="56" cy="13" r="6" fill="#cbd5e1"/>
      <circle cx="5" cy="13" r="2.5" fill="#ef4444"/>
    </g>
    <g transform="translate(0, 36) rotate(65)">
      <rect width="24" height="30" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <path d="M24 6 Q34 15 24 24" fill="none" stroke="#dc2626" stroke-width="3"/>
    </g>
    <path d="M22 60 Q45 50 68 58 Q95 52 115 65 Q98 78 68 75 Q32 78 22 60 Z" fill="url(#coffeeGrad)" opacity="0.95"/>
    <path d="M72 45 L76 36 L82 42 L88 30 L84 46 Z" fill="#facc15" stroke="#eab308" stroke-width="1.5"/>
  </g>

  <!-- PELIGRO 3: EXTINTOR BLOQUEADO POR CAJAS -->
  <g id="danger-extintor" class="cursor-pointer" filter="url(#ofiShadow)">
    <g transform="translate(845, 160)">
      <rect x="-8" y="-40" width="65" height="28" rx="3" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
      <text x="24" y="-22" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">EXTINTOR</text>
      <rect x="5" y="0" width="42" height="105" rx="15" fill="#dc2626" stroke="#991b1b" stroke-width="2.5"/>
      <circle cx="26" cy="-16" r="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5"/>
      <path d="M34 -6 Q48 0 46 50 L42 75" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
    </g>
    <g transform="translate(805, 230)">
      <rect x="12" y="0" width="105" height="55" rx="3" fill="#d97706" stroke="#b45309" stroke-width="2"/>
      <rect x="4" y="50" width="118" height="60" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="-8" y="105" width="130" height="65" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="-15" y="165" width="145" height="70" rx="3" fill="#92400e" stroke="#78350f" stroke-width="2"/>
    </g>
  </g>

  <!-- PELIGRO 4: ARCHIVADOR VOLCANDO -->
  <g id="danger-archivador" transform="translate(250, 135) rotate(9, 50, 160)" filter="url(#ofiShadow)" class="cursor-pointer">
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

  <!-- PELIGRO 5: ERGONOMÍA DEFICIENTE -->
  <g id="danger-ergonomia" class="cursor-pointer" filter="url(#ofiShadow)">
    <g transform="translate(640, 310)">
      <rect x="0" y="40" width="165" height="18" rx="4" fill="url(#woodDesk)"/>
      <rect x="15" y="58" width="12" height="130" fill="#334155"/><rect x="140" y="58" width="12" height="130" fill="#334155"/>
      <rect x="40" y="22" width="60" height="38" rx="2" fill="#0f172a" transform="rotate(-15, 70, 40)"/>
      <rect x="42" y="24" width="56" height="34" fill="#38bdf8" transform="rotate(-15, 70, 40)"/>
    </g>
    <g transform="translate(685, 305)">
      <rect x="5" y="-30" width="42" height="60" rx="8" fill="#1e293b" stroke="#0f172a" stroke-width="2.5" transform="rotate(24, 25, 20)"/>
      <ellipse cx="25" cy="40" rx="28" ry="12" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
      <rect x="22" y="52" width="6" height="35" fill="#475569"/>
      <circle cx="5" cy="90" r="4.5" fill="#0f172a"/><circle cx="45" cy="90" r="4.5" fill="#0f172a"/><circle cx="62" cy="92" r="5" fill="#ef4444"/>
    </g>
  </g>
</svg>
`;

// 3. OBRA DE CONSTRUCCIÓN
const svgObra = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="skyObra" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#f0f9ff"/>
    </linearGradient>
    <linearGradient id="groundObra" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="40%" stop-color="#92400e"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
    <filter id="shadowObra">
      <feDropShadow dx="3" dy="6" stdDeviation="4" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="380" fill="url(#skyObra)"/>
  <g fill="#94a3b8" stroke="#475569" stroke-width="2">
    <rect x="0" y="140" width="600" height="24"/>
    <rect x="60" y="164" width="35" height="150"/><rect x="250" y="164" width="35" height="150"/><rect x="450" y="164" width="35" height="150"/>
    <line x1="70" y1="140" x2="70" y2="110" stroke="#b45309" stroke-width="4"/><line x1="85" y1="140" x2="85" y2="115" stroke="#b45309" stroke-width="4"/>
    <line x1="260" y1="140" x2="260" y2="110" stroke="#b45309" stroke-width="4"/><line x1="275" y1="140" x2="275" y2="115" stroke="#b45309" stroke-width="4"/>
  </g>

  <g transform="translate(680, 20)">
    <rect x="40" y="60" width="18" height="300" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <rect x="-350" y="60" width="450" height="14" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <rect x="-200" y="74" width="22" height="12" fill="#0f172a"/>
    <line x1="-189" y1="86" x2="-189" y2="240" stroke="#0f172a" stroke-width="3"/>
    <polygon points="-210,240 -168,240 -178,280 -200,280" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
  </g>

  <rect x="0" y="380" width="1000" height="220" fill="url(#groundObra)"/>

  <!-- PELIGRO 1: PEÓN SIN CASCO BAJO LA CARGA -->
  <g id="danger-sin-casco" transform="translate(460, 290)" class="cursor-pointer" filter="url(#shadowObra)">
    <rect x="18" y="110" width="14" height="95" fill="#1e3a8a"/><rect x="36" y="110" width="14" height="95" fill="#1e40af"/>
    <rect x="14" y="195" width="20" height="12" rx="3" fill="#78350f"/><rect x="34" y="195" width="20" height="12" rx="3" fill="#78350f"/>
    <rect x="12" y="45" width="44" height="68" rx="6" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
    <rect x="12" y="65" width="44" height="10" fill="#e2e8f0"/>
    <path d="M12 55 L-4 35 L4 28" fill="none" stroke="#facc15" stroke-width="10" stroke-linecap="round"/>
    <rect x="-6" y="24" width="8" height="15" rx="2" fill="#0f172a"/>
    <circle cx="34" cy="22" r="16" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <path d="M20 18 Q34 6 48 18" fill="#451a03"/>
  </g>

  <!-- PELIGRO 2: ANDAMIO SIN BARANDILLAS -->
  <g id="danger-andamio" transform="translate(80, 130)" class="cursor-pointer" filter="url(#shadowObra)">
    <line x1="20" y1="0" x2="20" y2="250" stroke="#facc15" stroke-width="8"/><line x1="220" y1="0" x2="220" y2="250" stroke="#facc15" stroke-width="8"/>
    <rect x="10" y="80" width="220" height="16" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
    <line x1="20" y1="80" x2="220" y2="250" stroke="#ca8a04" stroke-width="4"/><line x1="220" y1="80" x2="20" y2="250" stroke="#ca8a04" stroke-width="4"/>
    <g transform="translate(140, 10)">
      <circle cx="15" cy="15" r="12" fill="#fed7aa"/><rect x="5" y="27" width="20" height="42" fill="#f97316"/>
    </g>
  </g>

  <!-- PELIGRO 3: ZANJA SIN ENTIBAR -->
  <g id="danger-zanja" transform="translate(680, 360)" class="cursor-pointer">
    <polygon points="0,20 300,20 280,220 30,220" fill="#291307" stroke="#0f172a" stroke-width="3"/>
    <path d="M-10 18 Q40 25 80 18 Q140 28 200 18" fill="none" stroke="#ef4444" stroke-width="3"/>
    <circle cx="90" cy="80" r="12" fill="#451a03"/><circle cx="140" cy="120" r="18" fill="#451a03"/>
  </g>

  <!-- PELIGRO 4: CUADRO ELÉCTRICO EN CHARCO -->
  <g id="danger-cuadro" transform="translate(780, 200)" class="cursor-pointer" filter="url(#shadowObra)">
    <rect width="90" height="110" rx="4" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
    <rect x="8" y="10" width="74" height="90" fill="#0f172a"/><rect x="18" y="25" width="54" height="20" fill="#ffffff"/>
    <path d="M45 52 L38 68 L48 68 L40 85" stroke="#facc15" stroke-width="3" fill="none"/>
    <path d="M35 110 Q20 150 40 180" fill="none" stroke="#ef4444" stroke-width="4"/><path d="M55 110 Q70 140 50 180" fill="none" stroke="#3b82f6" stroke-width="4"/>
    <ellipse cx="50" cy="180" rx="45" ry="16" fill="#38bdf8" opacity="0.6"/>
  </g>

  <!-- PELIGRO 5: ESCALERA SOBRE BIDONES -->
  <g id="danger-escalera" transform="translate(320, 220)" class="cursor-pointer" filter="url(#shadowObra)">
    <rect x="10" y="110" width="65" height="75" rx="5" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <ellipse cx="42.5" cy="110" rx="32.5" ry="8" fill="#38bdf8"/>
    <g transform="rotate(18, 42, 110)">
      <line x1="20" y1="-80" x2="20" y2="120" stroke="#e2e8f0" stroke-width="5"/><line x1="50" y1="-80" x2="50" y2="120" stroke="#e2e8f0" stroke-width="5"/>
      <line x1="20" y1="-60" x2="50" y2="-60" stroke="#94a3b8" stroke-width="4"/><line x1="20" y1="-20" x2="50" y2="-20" stroke="#94a3b8" stroke-width="4"/><line x1="20" y1="20" x2="50" y2="20" stroke="#94a3b8" stroke-width="4"/><line x1="20" y1="60" x2="50" y2="60" stroke="#94a3b8" stroke-width="4"/>
    </g>
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
    <linearGradient id="forkliftYellow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#facc15"/><stop offset="50%" stop-color="#eab308"/><stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
    <linearGradient id="oilSpill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#09090b"/><stop offset="45%" stop-color="#18181b"/><stop offset="70%" stop-color="#27272a"/><stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <filter id="almShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="4" dy="6" stdDeviation="5" flood-color="#020617" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Pared industrial con cerchas metálicas -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#almWall)"/>
  <g stroke="#334155" stroke-width="2" opacity="0.4">
    <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="120" x2="1000" y2="120"/>
    <line x1="200" y1="0" x2="200" y2="340"/><line x1="500" y1="0" x2="500" y2="340"/><line x1="800" y1="0" x2="800" y2="340"/>
  </g>

  <!-- Suelo de hormigón pulido con señalización vial -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#almFloor)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <!-- Líneas de pasillo peatonal de seguridad amarillas -->
  <line x1="0" y1="520" x2="1000" y2="520" stroke="#eab308" stroke-width="8" stroke-dasharray="25,15"/>

  <!-- Estanterías industriales tipo Mecalux (Azul y Naranja) -->
  <g stroke="#0284c7" stroke-width="8" opacity="0.95">
    <line x1="180" y1="60" x2="180" y2="380"/><line x1="380" y1="60" x2="380" y2="380"/>
  </g>
  <rect x="175" y="110" width="210" height="12" fill="#ea580c"/>
  <rect x="175" y="210" width="210" height="12" fill="#ea580c"/>
  <rect x="175" y="310" width="210" height="12" fill="#ea580c"/>

  <!-- PELIGRO 1: PALET DEFORMADO E INESTABLE EN ALTURA -->
  <g id="danger-palet" transform="translate(180, 60)" class="cursor-pointer" filter="url(#almShadow)">
    <g transform="rotate(14, 100, 50)">
      <rect x="10" y="38" width="170" height="14" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="20" y="-10" width="70" height="50" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="95" y="-15" width="75" height="55" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <path d="M15 -5 Q50 -25 165 -10" fill="none" stroke="#e0f2fe" stroke-width="4" opacity="0.7"/> <!-- Plástico roto -->
    </g>
  </g>

  <!-- PELIGRO 2: GRAN DERRAME DE ACEITE LUBRICANTE EN PASILLO -->
  <g id="danger-aceite" transform="translate(390, 420)" class="cursor-pointer" filter="url(#almShadow)">
    <path d="M10 50 C40 20, 140 15, 210 40 C280 65, 260 110, 190 120 C110 130, 30 110, 5 80 Z" fill="url(#oilSpill)" stroke="#09090b" stroke-width="2"/>
    <path d="M40 55 C70 35, 150 32, 190 52 C230 70, 215 100, 165 106 C105 112, 55 98, 35 78 Z" fill="#18181b" opacity="0.9"/>
    <!-- Brillos irisados en el aceite -->
    <path d="M70 48 Q110 40 140 55" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.6"/>
    <path d="M90 70 Q130 65 160 80" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.5"/>
    <!-- Rodadas de carretilla pasando por encima -->
    <line x1="30" y1="20" x2="220" y2="130" stroke="#000000" stroke-width="6" stroke-dasharray="10,5" opacity="0.6"/>
  </g>

  <!-- PELIGRO 3: CARRETILLA CON HORQUILLAS ELEVADAS Y LLAVE PUESTA -->
  <g id="danger-carretilla" transform="translate(640, 240)" class="cursor-pointer" filter="url(#almShadow)">
    <!-- Cuerpo de carretilla amarilla -->
    <rect x="50" y="110" width="160" height="90" rx="15" fill="url(#forkliftYellow)" stroke="#ca8a04" stroke-width="3"/>
    <rect x="180" y="80" width="45" height="120" rx="6" fill="#0f172a"/>
    <!-- Cabina y jaula antivuelco ROPS/FOPS -->
    <rect x="90" y="30" width="80" height="90" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/>
    <circle cx="120" cy="70" r="14" fill="none" stroke="#0f172a" stroke-width="4"/> <!-- Volante -->
    <!-- LLAVE ROJA PUESTA EN EL CONTACTO SIN CONDUCTOR -->
    <circle cx="140" cy="85" r="4" fill="#ef4444"/><rect x="140" y="85" width="8" height="3" fill="#ef4444"/>
    <!-- Mástil vertical y HORQUILLAS ELEVADAS EN VACÍO A 1.6M (PELIGRO DE EMPALAMIENTO) -->
    <rect x="220" y="-30" width="14" height="230" fill="#334155"/>
    <rect x="230" y="40" width="100" height="12" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/> <!-- Horquilla alta -->
    <rect x="230" y="52" width="100" height="12" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <!-- Ruedas negras macizas -->
    <circle cx="85" cy="200" r="26" fill="#0f172a" stroke="#334155" stroke-width="4"/>
    <circle cx="190" cy="200" r="24" fill="#0f172a" stroke="#334155" stroke-width="4"/>
  </g>

  <!-- PELIGRO 4: SALIDA DE EMERGENCIA BLOQUEADA POR PALETS -->
  <g id="danger-salida" transform="translate(20, 200)" class="cursor-pointer" filter="url(#almShadow)">
    <!-- Puerta de emergencia verde con barra antipánico -->
    <rect width="110" height="180" rx="4" fill="#15803d" stroke="#166534" stroke-width="3"/>
    <rect x="15" y="90" width="80" height="10" rx="3" fill="#e2e8f0"/>
    <rect x="30" y="-35" width="60" height="24" rx="3" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
    <text x="60" y="-18" font-size="10" font-weight="black" fill="#ffffff" text-anchor="middle">SALIDA</text>
    <!-- Palets de madera apilados bloqueando físicamente la apertura -->
    <g transform="translate(10, 70)">
      <rect x="0" y="0" width="95" height="24" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="0" y="26" width="95" height="24" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <rect x="0" y="52" width="95" height="24" rx="2" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      <rect x="0" y="78" width="95" height="24" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2"/>
    </g>
  </g>

  <!-- PELIGRO 5: OPERARIO CARGANDO 40KG CON ESPALDA DOBLADA -->
  <g id="danger-espalda" transform="translate(480, 270)" class="cursor-pointer" filter="url(#almShadow)">
    <rect x="30" y="110" width="14" height="85" fill="#1e3a8a"/>
    <rect x="48" y="110" width="14" height="85" fill="#1e3a8a"/>
    <g transform="translate(10, 60) rotate(-40)">
      <rect width="60" height="34" rx="6" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      <path d="M10 20 L-10 60 L10 60" fill="none" stroke="#facc15" stroke-width="10"/>
      <!-- Caja pesada de 40 kg sin medios mecánicos -->
      <rect x="-35" y="45" width="65" height="50" rx="3" fill="#78350f" stroke="#451a03" stroke-width="2"/>
      <text x="-2" y="75" font-size="12" font-weight="black" fill="#fde047" text-anchor="middle">40 kg</text>
      <!-- Rayos rojos de lesión lumbar -->
      <path d="M-8 -6 L-16 -16 M-2 -8 L-5 -20" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
    </g>
    <circle cx="2" cy="70" r="14" fill="#fed7aa"/>
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
    <filter id="labShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Pared alicatada de laboratorio -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#labWall)"/>
  <g stroke="#334155" stroke-width="1" opacity="0.35">
    <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="120" x2="1000" y2="120"/><line x1="0" y1="180" x2="1000" y2="180"/><line x1="0" y1="240" x2="1000" y2="240"/>
  </g>
  <rect x="0" y="340" width="1000" height="260" fill="url(#labFloor)"/>

  <!-- Encimera fenólica de laboratorio con fregadero -->
  <g transform="translate(180, 310)" filter="url(#labShadow)">
    <rect x="0" y="40" width="600" height="20" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="15" y="60" width="570" height="130" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  </g>

  <!-- PELIGRO 1: CAMPANA EXTRACTORA CON GUILLOTINA 100% ABIERTA Y VAPORES TÓXICOS -->
  <g id="danger-campana" transform="translate(220, 100)" class="cursor-pointer" filter="url(#labShadow)">
    <rect width="180" height="230" rx="4" fill="#475569" stroke="#1e293b" stroke-width="3"/>
    <rect x="15" y="15" width="150" height="170" fill="#0f172a"/>
    <!-- Guillotina de cristal subida al máximo en vez del límite de 30 cm -->
    <rect x="15" y="15" width="150" height="35" fill="#38bdf8" opacity="0.35" stroke="#94a3b8" stroke-width="2"/>
    <!-- Vaso de precipitados con vapor púrpura tóxico saliendo hacia el aula -->
    <rect x="75" y="130" width="30" height="42" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="90" cy="130" rx="15" ry="4" fill="#a855f7" opacity="0.8"/>
    <!-- Nube de vapores escapando fuera de la campana -->
    <path d="M90 125 Q70 90 85 60 Q100 20 135 15 Q175 10 205 45" fill="none" stroke="#a855f7" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
    <!-- Piloto rojo de alarma de caudal de aire en fallo -->
    <circle cx="150" cy="30" r="4" fill="#ef4444"/>
  </g>

  <!-- PELIGRO 2: ARMARIO DE SEGURIDAD CON PRODUCTOS QUÍMICOS INCOMPATIBLES JUNTOS -->
  <g id="danger-incompatibles" transform="translate(760, 110)" class="cursor-pointer" filter="url(#labShadow)">
    <rect width="160" height="240" rx="4" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
    <line x1="80" y1="0" x2="80" y2="240" stroke="#ca8a04" stroke-width="2"/>
    <!-- Estantes con botellas de Ácido Nítrico y Disolventes orgánicos juntos -->
    <rect x="15" y="40" width="130" height="6" fill="#ca8a04"/>
    <rect x="15" y="120" width="130" height="6" fill="#ca8a04"/>
    <!-- Botellas de ácido (corrosivo) e inflamable sin cubeto de retención -->
    <rect x="25" y="12" width="22" height="28" rx="2" fill="#ef4444"/>
    <rect x="55" y="12" width="22" height="28" rx="2" fill="#eab308"/>
    <rect x="90" y="12" width="22" height="28" rx="2" fill="#ef4444"/>
  </g>

  <!-- PELIGRO 3: DUCHA Y LAVAOJOS BLOQUEADOS POR CARRO DE MATERIAL -->
  <g id="danger-ducha" transform="translate(20, 120)" class="cursor-pointer" filter="url(#labShadow)">
    <rect x="30" y="0" width="10" height="150" fill="#22c55e"/>
    <ellipse cx="35" cy="15" rx="25" ry="10" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
    <circle cx="35" cy="50" r="14" fill="#22c55e"/> <!-- Tirador triangular de emergencia -->
    <!-- Carro metálico con cajas bloqueando el paso a la ducha -->
    <g transform="translate(0, 120)">
      <rect width="80" height="85" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <circle cx="15" cy="90" r="8" fill="#0f172a"/><circle cx="65" cy="90" r="8" fill="#0f172a"/>
    </g>
  </g>

  <!-- PELIGRO 4: MATRAZ ROTO CON DERRAME QUÍMICO EN ENCIMERA -->
  <g id="danger-derrame" transform="translate(460, 310)" class="cursor-pointer">
    <path d="M10 38 Q40 25 80 35 Q130 30 150 45 Q120 58 70 55 Q20 58 10 38 Z" fill="#22c55e" opacity="0.85"/>
    <path d="M50 30 L65 10 L75 10 L90 30 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5" transform="rotate(45, 70, 25)"/>
    <circle cx="45" cy="38" r="3" fill="#ffffff" opacity="0.9"/>
  </g>

  <!-- PELIGRO 5: PIPETEO BUCAL SIN EPI -->
  <g id="danger-pipeteo" transform="translate(580, 210)" class="cursor-pointer" filter="url(#labShadow)">
    <circle cx="35" cy="25" r="16" fill="#fed7aa"/>
    <rect x="20" y="45" width="40" height="80" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Pipeta de cristal en la boca -->
    <line x1="30" y1="28" x2="0" y2="70" stroke="#38bdf8" stroke-width="3"/>
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
    <linearGradient id="inox" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#94a3b8"/><stop offset="30%" stop-color="#f8fafc"/><stop offset="70%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <filter id="cocShadow">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="320" fill="url(#cocWall)"/>
  <rect x="0" y="320" width="1000" height="280" fill="url(#cocFloor)"/>
  <g stroke="#450a0a" stroke-width="2" opacity="0.4">
    <line x1="0" y1="400" x2="1000" y2="400"/><line x1="0" y1="490" x2="1000" y2="490"/>
    <line x1="200" y1="320" x2="80" y2="600"/><line x1="500" y1="320" x2="450" y2="600"/><line x1="800" y1="320" x2="820" y2="600"/>
  </g>

  <!-- Campana extractora industrial -->
  <g transform="translate(380, 40)" filter="url(#cocShadow)">
    <polygon points="0,90 320,90 280,0 40,0" fill="url(#inox)" stroke="#475569" stroke-width="2"/>
    <!-- PELIGRO 3: GRASA CHORREANDO DE LOS FILTROS HACIA LOS FOGONES -->
    <path d="M60 90 Q65 125 60 145" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M160 90 Q165 130 160 155" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M260 90 Q265 120 260 140" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Fogones y freidora industrial -->
  <g transform="translate(380, 230)" filter="url(#cocShadow)">
    <rect width="320" height="120" rx="4" fill="url(#inox)" stroke="#475569" stroke-width="2"/>
    <circle cx="70" cy="20" r="28" fill="#1e293b"/>
    <circle cx="70" cy="20" r="14" fill="#0284c7" opacity="0.8"/> <!-- Llama de gas -->
    <circle cx="160" cy="20" r="28" fill="#1e293b"/>
    <rect x="230" y="8" width="70" height="45" rx="3" fill="#eab308" opacity="0.85"/> <!-- Freidora burbujeando -->
  </g>

  <!-- PELIGRO 1: CORTAFIAMBRES CON DISCO EXPUESTO EN MARCHA -->
  <g id="danger-cortafiambres" transform="translate(160, 270)" class="cursor-pointer" filter="url(#cocShadow)">
    <rect x="0" y="40" width="160" height="15" fill="url(#inox)"/>
    <rect x="30" y="0" width="85" height="42" rx="4" fill="url(#inox)" stroke="#475569" stroke-width="1.5"/>
    <!-- Disco de acero sin carcasa de seguridad -->
    <circle cx="115" cy="15" r="28" fill="#f8fafc" stroke="#dc2626" stroke-width="3"/>
    <circle cx="115" cy="15" r="6" fill="#475569"/>
  </g>

  <!-- PELIGRO 2: CHARCO DE GRASA Y AGUA FRENTE A FREIDORA -->
  <g id="danger-grasa" transform="translate(420, 420)" class="cursor-pointer">
    <path d="M20 50 C60 25, 180 20, 230 45 C270 70, 240 105, 180 115 C100 125, 20 100, 10 70 Z" fill="#eab308" opacity="0.75" stroke="#ca8a04"/>
  </g>

  <!-- PELIGRO 4: ENCHUFE TRIFÁSICO EN CONTACTO CON AGUA -->
  <g id="danger-enchufe" transform="translate(770, 360)" class="cursor-pointer" filter="url(#cocShadow)">
    <rect width="80" height="24" rx="4" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
    <path d="M40 24 Q30 80 50 110" fill="none" stroke="#0f172a" stroke-width="5"/>
    <ellipse cx="50" cy="115" rx="35" ry="15" fill="#38bdf8" opacity="0.6"/>
  </g>

  <!-- PELIGRO 5: TABLAS DE MADERA CONTAMINADAS -->
  <g id="danger-tablas" transform="translate(680, 280)" class="cursor-pointer" filter="url(#cocShadow)">
    <rect width="85" height="14" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
    <circle cx="30" cy="4" r="5" fill="#ef4444"/> <!-- Carne cruda -->
    <circle cx="60" cy="4" r="5" fill="#22c55e"/> <!-- Verdura en la misma tabla -->
  </g>
</svg>
`;

// 7. TALLER MECÁNICO E INDUSTRIAL
const svgTaller = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="talWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="talFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="talShadow">
      <feDropShadow dx="3" dy="6" stdDeviation="5" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#talWall)"/>
  <rect x="0" y="340" width="1000" height="260" fill="url(#talFloor)"/>

  <!-- PELIGRO 2: PUENTE ELEVADOR CON COCHE SIN TRINQUETE DE SEGURIDAD -->
  <g id="danger-elevador" transform="translate(420, 110)" class="cursor-pointer" filter="url(#talShadow)">
    <!-- Columnas azules del elevador de 2 postes -->
    <rect x="0" y="0" width="22" height="350" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="260" y="0" width="22" height="350" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <!-- Coche elevado a 1.8m -->
    <g transform="translate(10, 40)">
      <path d="M20 70 Q50 30 110 25 Q180 20 230 70 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <rect x="10" y="70" width="240" height="35" rx="6" fill="#ef4444"/>
      <circle cx="50" cy="105" r="22" fill="#0f172a"/><circle cx="210" cy="105" r="22" fill="#0f172a"/>
    </g>
    <!-- Brazos de elevación sin el pasador de bloqueo mecánico echado -->
    <line x1="20" y1="175" x2="260" y2="175" stroke="#facc15" stroke-width="10"/>
  </g>

  <!-- PELIGRO 1: AMOLADORA (RADIAL) SIN PROTECTOR DE DISCO -->
  <g id="danger-radial" transform="translate(180, 310)" class="cursor-pointer" filter="url(#talShadow)">
    <rect width="180" height="20" rx="3" fill="#64748b"/>
    <g transform="translate(40, -15)">
      <rect x="0" y="0" width="70" height="24" rx="4" fill="#0284c7"/>
      <!-- Disco abrasivo completamente descubierto sin carcasa -->
      <circle cx="85" cy="12" r="24" fill="#334155" stroke="#ef4444" stroke-width="2"/>
    </g>
  </g>

  <!-- PELIGRO 3: BOTELLAS DE OXICORTE SIN VÁLVULA ANTIRRETROCESO -->
  <g id="danger-oxicorte" transform="translate(800, 180)" class="cursor-pointer" filter="url(#talShadow)">
    <rect x="10" y="60" width="30" height="180" rx="10" fill="#0284c7"/> <!-- Oxígeno -->
    <rect x="45" y="80" width="35" height="160" rx="10" fill="#b91c1c"/> <!-- Acetileno -->
    <path d="M25 60 Q10 20 60 40" fill="none" stroke="#ef4444" stroke-width="4"/> <!-- Manguera agrietada -->
  </g>

  <!-- PELIGRO 4: FOSO DE INSPECCIÓN ABIERTO SIN VALLA -->
  <g id="danger-foso" transform="translate(80, 440)" class="cursor-pointer">
    <polygon points="0,0 280,0 260,120 20,120" fill="#09090b" stroke="#facc15" stroke-width="4" stroke-dasharray="15,10"/>
  </g>

  <!-- PELIGRO 5: CUBA DE DESENGRASE ABIERTA -->
  <g id="danger-cuba" transform="translate(20, 260)" class="cursor-pointer" filter="url(#talShadow)">
    <rect width="90" height="80" rx="4" fill="#475569" stroke="#1e293b" stroke-width="2"/>
    <ellipse cx="45" cy="10" rx="40" ry="10" fill="#0284c7" opacity="0.8"/>
  </g>
</svg>
`;

// 8. TRABAJOS EN CUBIERTAS Y ALTURAS
const svgAlturas = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="skyAlt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/><stop offset="50%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="tilesRoof" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c2410c"/><stop offset="50%" stop-color="#ea580c"/><stop offset="100%" stop-color="#9a3412"/>
    </linearGradient>
    <filter id="altShadow">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="600" fill="url(#skyAlt)"/>
  
  <!-- Cubierta inclinada de teja cerámica -->
  <polygon points="0,320 1000,180 1000,600 0,600" fill="url(#tilesRoof)"/>
  <g stroke="#7c2d12" stroke-width="2" opacity="0.5">
    <line x1="0" y1="360" x2="1000" y2="220"/><line x1="0" y1="410" x2="1000" y2="270"/>
    <line x1="0" y1="460" x2="1000" y2="320"/><line x1="0" y1="510" x2="1000" y2="370"/>
  </g>

  <!-- PELIGRO 3: LÍNEA DE VIDA ATADA A CHIMENEA PRECARIA -->
  <g id="danger-chimenea" transform="translate(630, 90)" class="cursor-pointer" filter="url(#altShadow)">
    <rect width="90" height="130" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
    <!-- Grietas profundas en el ladrillo -->
    <path d="M20 20 L40 50 L30 80 M60 40 L75 70" stroke="#000000" stroke-width="2.5" fill="none"/>
    <!-- Cuerda amarrada a la chimenea que no resistirá un impacto de 12 kN -->
    <ellipse cx="45" cy="70" rx="50" ry="12" fill="none" stroke="#facc15" stroke-width="6"/>
  </g>

  <!-- PELIGRO 1: LUCERNARIO FRÁGIL SIN RED ANTICAÍDAS -->
  <g id="danger-lucernario" transform="translate(380, 240)" class="cursor-pointer" filter="url(#altShadow)">
    <polygon points="0,60 160,35 180,110 20,135" fill="#38bdf8" opacity="0.5" stroke="#0284c7" stroke-width="3"/>
    <path d="M40 80 L70 95 L95 85" stroke="#ef4444" stroke-width="3" fill="none"/> <!-- Plástico quebrado -->
  </g>

  <!-- PELIGRO 2: TRABAJADOR AL BORDE DEL VACÍO SIN ARNÉS CONECTADO -->
  <g id="danger-vacio" transform="translate(800, 240)" class="cursor-pointer" filter="url(#altShadow)">
    <circle cx="25" cy="20" r="14" fill="#fed7aa"/>
    <rect x="10" y="34" width="30" height="60" rx="4" fill="#ea580c"/>
    <!-- Al borde justo de la caída libre de 12 metros -->
    <line x1="60" y1="0" x2="60" y2="150" stroke="#ef4444" stroke-width="3" stroke-dasharray="6,4"/>
  </g>

  <!-- PELIGRO 4: ESCALERA QUE NO SOBREPASA 1 METRO -->
  <g id="danger-escalera-altura" transform="translate(40, 290)" class="cursor-pointer" filter="url(#altShadow)">
    <line x1="20" y1="20" x2="20" y2="280" stroke="#94a3b8" stroke-width="6"/>
    <line x1="50" y1="20" x2="50" y2="280" stroke="#94a3b8" stroke-width="6"/>
    <line x1="20" y1="50" x2="50" y2="50" stroke="#cbd5e1" stroke-width="4"/>
    <line x1="20" y1="90" x2="50" y2="90" stroke="#cbd5e1" stroke-width="4"/>
  </g>
</svg>
`;

// Exportar base de datos con los 8 escenarios enriquecidos
const allScenarios = [
  {
    id: 'oficina',
    name: 'Oficina y Despachos',
    subtitle: 'Administración y Gestión Corporativa',
    description: 'Espacio de trabajo administrativo común con equipos ofimáticos, zonas de tránsito, archivadores y medios de protección.',
    badgeColor: 'sky',
    icon: 'briefcase',
    timeLimit: 90,
    svgContent: svgOficina.trim(),
    hazards: [
      {
        id: 'oficina-cables',
        name: 'Cables sueltos cruzando zona de paso',
        category: 'Orden y Limpieza',
        severity: 'Grave',
        rect: { left: 35, top: 72, width: 28, height: 22 },
        description: 'Múltiples cables de alimentación y red cruzando libremente el suelo en el pasillo principal entre mesas sin protección ni pasacables homologado.',
        consequences: 'Tropiezos, caídas al mismo nivel con contusiones o fracturas óseas, y desconexiones bruscas de equipos.',
        regulation: 'RD 486/1997 sobre disposiciones mínimas de seguridad en los lugares de trabajo (Anexo I). Los pasillos deben permanecer expeditos y limpios.',
        prevention: 'Canalizar el cableado mediante pasacables de suelo homologados biselados o cajas empotradas en suelo técnico.'
      },
      {
        id: 'oficina-cafe',
        name: 'Líquido derramado junto a regleta eléctrica',
        category: 'Riesgo Eléctrico',
        severity: 'Muy Grave',
        rect: { left: 12, top: 60, width: 18, height: 24 },
        description: 'Taza de café derramada en el suelo fluyendo directamente hacia una regleta con enchufes conectados bajo la mesa.',
        consequences: 'Electrocución por contacto indirecto, cortocircuito e ignición de fuego en la moqueta.',
        regulation: 'RD 614/2001 sobre protección frente al riesgo eléctrico y RD 486/1997.',
        prevention: 'Prohibir recipientes de líquidos sobre regletas y elevar las tomas a bandejas pasacables bajo tablero.'
      },
      {
        id: 'oficina-extintor',
        name: 'Extintor bloqueado por cajas de archivo',
        category: 'Protección contra Incendios',
        severity: 'Muy Grave',
        rect: { left: 80, top: 25, width: 17, height: 48 },
        description: 'Pila de cajas de cartón apiladas frente al extintor mural impidiendo su acceso inmediato en caso de conato de incendio.',
        consequences: 'Retraso crítico en la extinción de un fuego incipiente, propagación incontrolada y atrapamiento por humo.',
        regulation: 'RD 513/2017 (RIPCI) y RD 486/1997. Los medios de protección contra incendios deben estar permanentemente despejados y señalizados.',
        prevention: 'Mantener un perímetro libre de obstáculos de al menos 1 metro alrededor de todos los extintores y BIEs.'
      },
      {
        id: 'oficina-archivador',
        name: 'Archivador venciendo con cajones abiertos',
        category: 'Equipos de Trabajo',
        severity: 'Grave',
        rect: { left: 24, top: 22, width: 14, height: 35 },
        description: 'Archivador metálico con varios cajones superiores extraídos a la vez, desplazando el centro de gravedad e inclinándose hacia adelante sin anclaje a pared.',
        consequences: 'Vuelco del armario sobre el trabajador, provocando traumatismos severos por aplastamiento.',
        regulation: 'RD 486/1997 y NTP 481 del INSST sobre orden y limpieza.',
        prevention: 'Fijar archivadores altos a pared e instalar sistemas de bloqueo que impidan abrir más de un cajón simultáneamente.'
      },
      {
        id: 'oficina-ergonomia',
        name: 'Puesto con pantalla deslumbrante y silla rota',
        category: 'Ergonomía y PVD',
        severity: 'Leve',
        rect: { left: 64, top: 40, width: 17, height: 32 },
        description: 'Puesto de ordenador portátil bajo sin elevador ni teclado auxiliar, expuesto a deslumbramiento directo de ventana y con silla inestable de rueda rota.',
        consequences: 'Trastornos musculoesqueléticos cervicales y dorsolumbares, fatiga visual severa.',
        regulation: 'RD 488/1997 sobre trabajo con equipos que incluyen pantallas de visualización (PVD).',
        prevention: 'Disponer de soporte elevador de portátil con teclado/ratón independiente y sustitución por silla ergonómica de 5 ruedas ajustable.'
      }
    ]
  },
  {
    id: 'obra',
    name: 'Obra de Construcción',
    subtitle: 'Edificación y Obra Civil',
    description: 'Entorno de obra con maquinaria pesada, trabajos en altura, excavaciones y cuadros eléctricos temporales.',
    badgeColor: 'amber',
    icon: 'hard-hat',
    timeLimit: 90,
    svgContent: svgObra.trim(),
    hazards: [
      {
        id: 'obra-sin-casco',
        name: 'Operario sin casco bajo carga suspendida',
        category: 'EPIs y Cargas Suspendidas',
        severity: 'Muy Grave',
        rect: { left: 45, top: 48, width: 14, height: 35 },
        description: 'Peón caminando distraído por teléfono sin casco de seguridad bajo el radio de acción de la grúa con cubilote de hormigón en suspensión.',
        consequences: 'Muerte instantánea o traumatismo craneoencefálico irreversible por desprendimiento de carga.',
        regulation: 'RD 1627/1997 (Seguridad en obras de construcción) y RD 773/1997 (EPIs). Prohibido transitar bajo cargas suspendidas; uso obligatorio de casco.',
        prevention: 'Delimitar el radio de la pluma de grúa y prohibir el acceso sin casco homologado EN 397.'
      },
      {
        id: 'obra-andamio',
        name: 'Andamio a 4m sin barandillas perimetrales',
        category: 'Caídas en Altura',
        severity: 'Muy Grave',
        rect: { left: 8, top: 22, width: 26, height: 42 },
        description: 'Plataforma de andamio tubular carente de barandilla superior de 1 m, listón intermedio y rodapié.',
        consequences: 'Caída a distinto nivel con resultado mortal o lesiones medulares permanentes.',
        regulation: 'RD 2177/2004 sobre trabajos temporales en altura y RD 1627/1997.',
        prevention: 'Montar barandillas completas homologadas antes de acceder a la plataforma y utilizar arnés anticaídas conectado a línea de vida.'
      },
      {
        id: 'obra-zanja',
        name: 'Zanja profunda sin entibar ni señalizar',
        category: 'Movimiento de Tierras',
        severity: 'Muy Grave',
        rect: { left: 68, top: 60, width: 30, height: 35 },
        description: 'Excavación de más de 2 metros de profundidad en terreno inestable sin entibación ni valla perimetral.',
        consequences: 'Sepultamiento por desprendimiento de tierras con asfixia mecánica.',
        regulation: 'RD 1627/1997 (Anexo IV, Parte C). Toda zanja de más de 1.30 m debe entibarse o tener talud adecuado.',
        prevention: 'Colocar cajones de entibación prefabricados y vallar el perímetro a 1 metro del borde.'
      },
      {
        id: 'obra-cuadro',
        name: 'Cuadro eléctrico provisional en charco de lluvia',
        category: 'Riesgo Eléctrico',
        severity: 'Muy Grave',
        rect: { left: 78, top: 32, width: 16, height: 28 },
        description: 'Cuadro de distribución eléctrica abierto con cables pelados apoyado directamente en charco de agua de lluvia.',
        consequences: 'Electrocución por tensión de contacto de 400V en intemperie.',
        regulation: 'Reglamento Electrotécnico de Baja Tensión (ITC-BT-33) y RD 614/2001.',
        prevention: 'Instalar cuadros con grado de protección IP65 elevados del suelo con diferenciales de alta sensibilidad de 30 mA.'
      },
      {
        id: 'obra-escalera',
        name: 'Escalera apoyada sobre bidones inestables',
        category: 'Medios de Acceso',
        severity: 'Grave',
        rect: { left: 32, top: 36, width: 14, height: 38 },
        description: 'Escalera de mano apoyada sobre la tapa metálica aceitosa de bidones vacíos para alcanzar un pilar.',
        consequences: 'Deslizamiento de la base y caída del trabajador.',
        regulation: 'RD 2177/2004. Las escaleras deben asentarse sobre superficies planas, sólidas y estables.',
        prevention: 'Utilizar andamios de borriquetas o plataformas elevadoras móviles de personal (PEMP).'
      }
    ]
  },
  {
    id: 'almacen',
    name: 'Almacén Logístico',
    subtitle: 'Almacenamiento y Manutención',
    description: 'Nave logística de alta rotación con carretillas elevadoras, estanterías pesadas y pasillos de tránsito.',
    badgeColor: 'emerald',
    icon: 'archive',
    timeLimit: 90,
    svgContent: svgAlmacen.trim(),
    hazards: [
      {
        id: 'almacen-palet',
        name: 'Palet deformado y escorado en altura',
        category: 'Almacenamiento en Estanterías',
        severity: 'Muy Grave',
        rect: { left: 18, top: 12, width: 22, height: 26 },
        description: 'Palet de madera con tacos fisurados y carga deformada a 5 metros de altura inclinado hacia el pasillo.',
        consequences: 'Caída de palet de 800 kg sobre operarios que transiten por debajo.',
        regulation: 'Norma UNE-EN 15635 (Inspección de estanterías) y RD 1215/1997.',
        prevention: 'Rechazar palets en mal estado y disponer de topes traseros y mallas anticaídas en bastidores.'
      },
      {
        id: 'almacen-aceite',
        name: 'Derrame de aceite hidráulico en pasillo',
        category: 'Orden y Limpieza',
        severity: 'Grave',
        rect: { left: 39, top: 70, width: 26, height: 22 },
        description: 'Charco extenso de aceite en zona de cruce de peatones y carretillas sin delimitar ni recoger.',
        consequences: 'Resbalones con caída y pérdida de frenada de carretillas.',
        regulation: 'RD 486/1997 sobre lugares de trabajo.',
        prevention: 'Aplicar sepiolita/absorbente granulado de inmediato y señalizar con cono de advertencia.'
      },
      {
        id: 'almacen-carretilla',
        name: 'Carretilla con horquillas altas y llave puesta',
        category: 'Maquinaria de Manutención',
        severity: 'Muy Grave',
        rect: { left: 64, top: 40, width: 28, height: 38 },
        description: 'Carretilla elevadora parada con las horquillas levantadas a 1.6 m sin conductor y con la llave en el contacto.',
        consequences: 'Empalamiento frontal a la altura del tórax de peatones y uso por personal no autorizado.',
        regulation: 'RD 1215/1997 y NTP 714 del INSST sobre carretillas automotoras.',
        prevention: 'Bajar las horquillas a ras de suelo al estacionar y retirar siempre la llave de arranque.'
      },
      {
        id: 'almacen-salida',
        name: 'Puerta de emergencia bloqueada por palets',
        category: 'Evacuación y Emergencias',
        severity: 'Muy Grave',
        rect: { left: 2, top: 35, width: 14, height: 48 },
        description: 'Salida de emergencia señalizada obstaculizada por pilas de palets vacíos.',
        consequences: 'Imposibilidad de evacuar la nave en caso de incendio o derrame tóxico.',
        regulation: 'RD 486/1997 y Código Técnico de la Edificación (DB-SI).',
        prevention: 'Pintar zona cebreada en suelo de prohibido el depósito frente a toda vía de evacuación.'
      },
      {
        id: 'almacen-espalda',
        name: 'Levantamiento de 40 kg sin flexión de piernas',
        category: 'Manipulación Manual de Cargas',
        severity: 'Grave',
        rect: { left: 48, top: 46, width: 14, height: 32 },
        description: 'Operario levantando una caja de 40 kg doblando la cintura con piernas rectas y carga alejada del cuerpo.',
        consequences: 'Hernia discal lumbar aguda, lumbalgia incapacitante.',
        regulation: 'RD 487/1997 sobre manipulación manual de cargas. Límite general máximo de 25 kg para hombres (15 kg para mujeres/jóvenes).',
        prevention: 'Fraccionar la carga o utilizar transpaletas y carros de transporte hidráulicos.'
      }
    ]
  },
  {
    id: 'laboratorio',
    name: 'Laboratorio Químico y Biológico',
    subtitle: 'Ensayos y Análisis de Riesgo Químico',
    description: 'Laboratorio de control y análisis con reactivos peligrosos, campana extractora y material biológico.',
    badgeColor: 'purple',
    icon: 'flask',
    timeLimit: 90,
    svgContent: svgLaboratorio.trim(),
    hazards: [
      {
        id: 'lab-campana',
        name: 'Campana extractora abierta emitiendo vapores',
        category: 'Riesgo Químico',
        severity: 'Muy Grave',
        rect: { left: 22, top: 18, width: 20, height: 36 },
        description: 'Guillotina de campana levantada al máximo con reacción química emitiendo vapores tóxicos hacia el operador.',
        consequences: 'Intoxicación aguda por inhalación de gases irritantes o asfixiantes.',
        regulation: 'RD 374/2001 sobre protección contra agentes químicos y NTP 672.',
        prevention: 'Trabajar con la guillotina al nivel de seguridad marcado (máximo 30-40 cm) y verificar el anemómetro.'
      },
      {
        id: 'lab-incompatibles',
        name: 'Ácido nítrico y disolventes almacenados juntos',
        category: 'Almacenamiento Químico',
        severity: 'Muy Grave',
        rect: { left: 76, top: 18, width: 18, height: 40 },
        description: 'Reactivos oxidantes fuertes y disolventes inflamables almacenados juntos en el mismo estante sin cubetos.',
        consequences: 'Reacción exotérmica violenta, explosión e incendio químico incontrolado.',
        regulation: 'RD 656/2017 (Reglamento de almacenamiento de productos químicos - APQ).',
        prevention: 'Segregar químicamente los productos incompatibles en armarios de seguridad independientes RF-90.'
      },
      {
        id: 'lab-ducha',
        name: 'Ducha de emergencia bloqueada por carro',
        category: 'Primeros Auxilios',
        severity: 'Grave',
        rect: { left: 2, top: 20, width: 16, height: 50 },
        description: 'Carro de laboratorio aparcado bajo la ducha de emergencia y lavaojos impidiendo su acceso rápido.',
        consequences: 'Agravamiento severo de quemaduras químicas por demora en la descontaminación cutánea/ocular.',
        regulation: 'Norma UNE-EN 15154 y NTP 500 del INSST.',
        prevention: 'Mantener despejado permanentemente el espacio de acceso a la ducha en un radio de 1 metro.'
      },
      {
        id: 'lab-derrame',
        name: 'Matraz roto con ácido corrosivo en encimera',
        category: 'Riesgo Químico',
        severity: 'Grave',
        rect: { left: 46, top: 52, width: 18, height: 24 },
        description: 'Rotura de matraz con derrame de ácido sin neutralizar ni recoger sobre la encimera.',
        consequences: 'Cortes en manos contaminados con químicos y quemaduras por salpicadura.',
        regulation: 'RD 374/2001 sobre agentes químicos.',
        prevention: 'Neutralizar inmediatamente con absorbente específico y retirar vidrios con pinzas.'
      },
      {
        id: 'lab-pipeteo',
        name: 'Pipeteo bucal sin equipo de protección',
        category: 'Buenas Prácticas de Laboratorio',
        severity: 'Muy Grave',
        rect: { left: 58, top: 35, width: 16, height: 32 },
        description: 'Investigador aspirando reactivo líquido directamente con la boca a través de una pipeta de vidrio.',
        consequences: 'Ingestión accidental de sustancias corrosivas, cancerígenas o mutágenas.',
        regulation: 'RD 374/2001 y RD 664/1997. Prohibición expresa y absoluta del pipeteo con la boca.',
        prevention: 'Utilizar exclusivamente propipetas automáticas, peras de goma de tres vías o micropipetas.'
      }
    ]
  },
  {
    id: 'cocina',
    name: 'Cocina Industrial',
    subtitle: 'Hostelería y Restauración Colectiva',
    description: 'Cocina profesional con fogones de gas, freidoras, maquinaria de corte y suelo húmedo.',
    badgeColor: 'amber',
    icon: 'fire',
    timeLimit: 90,
    svgContent: svgCocina.trim(),
    hazards: [
      {
        id: 'cocina-cortafiambres',
        name: 'Cortafiambres con cuchilla expuesta sin protector',
        category: 'Equipos de Trabajo',
        severity: 'Muy Grave',
        rect: { left: 16, top: 45, width: 18, height: 25 },
        description: 'Máquina cortadora en funcionamiento con la cuchilla circular girando sin resguardo ni empujador.',
        consequences: 'Amputación traumática de falanges de los dedos por atrapamiento y corte severo.',
        regulation: 'RD 1215/1997 sobre seguridad en equipos de trabajo.',
        prevention: 'Utilizar siempre el carro de empuje y guante de malla metálica anticorte homologado EN 1082.'
      },
      {
        id: 'cocina-grasa',
        name: 'Charco de aceite y grasa en suelo resbaladizo',
        category: 'Caídas al Mismo Nivel',
        severity: 'Grave',
        rect: { left: 42, top: 70, width: 24, height: 22 },
        description: 'Suelo de baldosas cubierto de película de aceite caliente frente a la freidora sin calzado antideslizante.',
        consequences: 'Caída al mismo nivel con fractura y posible contacto de manos con el aceite hirviendo.',
        regulation: 'RD 486/1997 sobre lugares de trabajo.',
        prevention: 'Limpieza inmediata con desengrasante y uso obligatorio de calzado de seguridad con suela SRC antideslizante.'
      },
      {
        id: 'cocina-campana',
        name: 'Filtros de campana saturados de grasa goteando',
        category: 'Riesgo de Incendio',
        severity: 'Muy Grave',
        rect: { left: 38, top: 10, width: 35, height: 26 },
        description: 'Filtros de extracción saturados de grasa combustible goteando directamente sobre los quemadores de gas activos.',
        consequences: 'Inflamación súbita del conducto de extracción con incendio generalizado de cocina.',
        regulation: 'Código Técnico de la Edificación (DB-SI) y RD 513/2017.',
        prevention: 'Limpieza y desengrase periódico reglamentario de filtros y conductos.'
      },
      {
        id: 'cocina-enchufe',
        name: 'Enchufe trifásico en contacto con agua',
        category: 'Riesgo Eléctrico',
        severity: 'Muy Grave',
        rect: { left: 77, top: 58, width: 16, height: 25 },
        description: 'Toma eléctrica industrial de 400V sumergida en charco de baldeo de suelo junto al fregadero.',
        consequences: 'Electrocución de operarios descalzos o con calzado húmedo.',
        regulation: 'Reglamento Electrotécnico de Baja Tensión y RD 614/2001.',
        prevention: 'Instalar tomas estancas IP67 a una altura mínima de 1.5 metros del suelo en zonas húmedas.'
      },
      {
        id: 'cocina-tablas',
        name: 'Contaminación cruzada en tabla de madera',
        category: 'Higiene y Salud Pública',
        severity: 'Leve',
        rect: { left: 68, top: 48, width: 15, height: 20 },
        description: 'Uso de tabla de madera porosa cortando pollo crudo y ensalada simultáneamente.',
        consequences: 'Intoxicación alimentaria grave por Salmonella o Campylobacter.',
        regulation: 'Reglamento CE 852/2004 relativo a la higiene de los productos alimenticios.',
        prevention: 'Prohibir tablas de madera; utilizar tablas de polietileno de colores según alimento (rojo: carne, verde: verdura).'
      }
    ]
  },
  {
    id: 'hospital',
    name: 'Hospital y Urgencias',
    subtitle: 'Atención Sanitaria y Hospitalización',
    description: 'Área clínica de urgencias con pacientes encamados, gases medicinales y residuos biosanitarios.',
    badgeColor: 'sky',
    icon: 'heart-pulse',
    timeLimit: 90,
    svgContent: svgHospital.trim(),
    hazards: [
      {
        id: 'hosp-aguja',
        name: 'Aguja hipodérmica usada abandonada sin encapuchar',
        category: 'Riesgo Biológico',
        severity: 'Muy Grave',
        rect: { left: 12, top: 50, width: 18, height: 26 },
        description: 'Aguja de punción venosa con restos de sangre sobre batea en mesa auxiliar sin contenedor de punzantes.',
        consequences: 'Inoculación accidental de patógenos de transmisión hemática (VIH, Hepatitis B, Hepatitis C) por pinchazo.',
        regulation: 'Orden ESS/1451/2013 y RD 664/1997 sobre protección frente a agentes biológicos. Prohibición estricta de reencapuchar.',
        prevention: 'Utilizar exclusivamente material punzante con mecanismo pasivo de bioseguridad y desechar en contenedor rígido de inmediato.'
      },
      {
        id: 'hosp-oxigeno',
        name: 'Botella de oxígeno medicinal sin cadena antivuelco',
        category: 'Equipos a Presión',
        severity: 'Muy Grave',
        rect: { left: 78, top: 20, width: 15, height: 50 },
        description: 'Botella de oxígeno a 200 bar de presión de pie sin cadena de sujeción mural con cadena rota colgando.',
        consequences: 'Caída de la botella, cizallamiento del manorreductor y conversión del cilindro en un proyectil de alta velocidad.',
        regulation: 'RD 2060/2008 (Reglamento de equipos a presión, ITC-EP-6) y NTP 368 del INSST.',
        prevention: 'Fijar sólidamente a pared con doble cadena metálica tensa o trasladar en carros con abrazadera.'
      },
      {
        id: 'hosp-residuos',
        name: 'Bolsa de residuos biosanitarios rota en el suelo',
        category: 'Residuos Sanitarios',
        severity: 'Muy Grave',
        rect: { left: 36, top: 68, width: 22, height: 26 },
        description: 'Bolsa amarilla de residuos infecciosos Grupo III desgarrada en el suelo con líquido hemático rezumando.',
        consequences: 'Contaminación biológica ambiental y contacto dérmico con fluidos infecciosos.',
        regulation: 'Normativa autonómica de gestión de residuos sanitarios y RD 664/1997.',
        prevention: 'Utilizar bolsas de galga homologada resistentes al desgarro y cubetas de transporte rígidas.'
      },
      {
        id: 'hosp-camilla',
        name: 'Camilla con freno desactivado y barandilla bajada',
        category: 'Seguridad del Paciente y Transporte',
        severity: 'Grave',
        rect: { left: 48, top: 46, width: 26, height: 28 },
        description: 'Camilla hospitalaria en zona de tránsito con los pedales de freno rojos levantados (libres) y barandillas bajadas.',
        consequences: 'Desplazamiento involuntario en rampa y precipitación del paciente al suelo.',
        regulation: 'RD 1215/1997 sobre equipos de trabajo y protocolos de seguridad del paciente del SNS.',
        prevention: 'Bloquear siempre los frenos de las ruedas en reposo y subir las barandillas de protección lateral.'
      },
      {
        id: 'hosp-ergonomia',
        name: 'Celador en sobreesfuerzo lumbar movilizando paciente',
        category: 'Ergonomía Sanitaria',
        severity: 'Grave',
        rect: { left: 28, top: 32, width: 18, height: 36 },
        description: 'Trabajador doblando la espalda en ángulo de 90° sin flexionar rodillas realizando movilización manual solo.',
        consequences: 'Lumbalgia aguda, protusión discal lumbar y bajas laborales prolongadas.',
        regulation: 'RD 487/1997 sobre manipulación manual de cargas y Guía Técnica del INSST.',
        prevention: 'Utilizar grúas mecánicas de transferencia de pacientes, sábanas deslizantes y trabajar en parejas.'
      }
    ]
  },
  {
    id: 'taller',
    name: 'Taller Mecánico e Industrial',
    subtitle: 'Mantenimiento y Reparación de Vehículos',
    description: 'Taller de automoción con elevadores hidráulicos, herramientas rotativas, oxicorte y fosos.',
    badgeColor: 'sky',
    icon: 'wrench',
    timeLimit: 90,
    svgContent: svgTaller.trim(),
    hazards: [
      {
        id: 'taller-elevador',
        name: 'Coche elevado sin seguro mecánico enclavado',
        category: 'Aparatos de Elevación',
        severity: 'Muy Grave',
        rect: { left: 42, top: 18, width: 32, height: 52 },
        description: 'Vehículo sobre puente de 2 columnas suspendido solo por presión hidráulica sin el trinquete mecánico bloqueado.',
        consequences: 'Aplastamiento mortal por descenso intempestivo del vehículo por fallo de un manguito hidráulico.',
        regulation: 'Norma UNE-EN 1493 (Elevadores de vehículos) y RD 1215/1997.',
        prevention: 'Bajar siempre el elevador hasta apoyar mecánicamente en los trinquetes de seguridad antes de trabajar debajo.'
      },
      {
        id: 'taller-radial',
        name: 'Amoladora angular en marcha sin carcasa protectora',
        category: 'Herramientas Mecánicas',
        severity: 'Muy Grave',
        rect: { left: 18, top: 48, width: 18, height: 22 },
        description: 'Radial sobre banco con el protector de disco de 230 mm retirado.',
        consequences: 'Impacto de fragmentos del disco roto a 80 m/s en cara y cuello, y cortes severos.',
        regulation: 'RD 1215/1997 y NTP 86 del INSST.',
        prevention: 'Prohibir terminantemente el desmontaje de la carcasa protectora de disco y usar pantalla facial homologada.'
      },
      {
        id: 'taller-oxicorte',
        name: 'Equipo de oxicorte sin válvulas antirretroceso',
        category: 'Trabajos en Caliente',
        severity: 'Muy Grave',
        rect: { left: 80, top: 25, width: 16, height: 45 },
        description: 'Carro de botellas de oxígeno y acetileno con mangueras agrietadas y sin apagallamas de seguridad.',
        consequences: 'Retroceso de la llama hacia el interior de la botella de acetileno provocando una explosión demoledora.',
        regulation: 'RD 2060/2008 y NTP 495 sobre soldadura oxiacetilénica.',
        prevention: 'Instalar válvulas antirretroceso en soplete y manómetros, y sustituir mangueras caducadas.'
      },
      {
        id: 'taller-foso',
        name: 'Foso de inspección abierto sin barandilla perimetral',
        category: 'Caídas a Distinto Nivel',
        severity: 'Grave',
        rect: { left: 8, top: 72, width: 35, height: 24 },
        description: 'Foso de reparación de camiones de 1.6 m de profundidad abierto en zona de paso con iluminación deficiente.',
        consequences: 'Caída de operarios al fondo del foso con fracturas múltiples.',
        regulation: 'RD 486/1997 sobre lugares de trabajo.',
        prevention: 'Cubrir el foso con tablones resistentes o instalar barandillas y cadenas perimetrales retráctiles cuando no haya vehículo.'
      },
      {
        id: 'taller-cuba',
        name: 'Cuba de desengrase con disolventes sin aspiración',
        category: 'Riesgo Químico e Incendio',
        severity: 'Grave',
        rect: { left: 2, top: 42, width: 16, height: 28 },
        description: 'Depósito de limpieza de piezas con disolventes volátiles abierto sin extracción localizada ni tapa cerrada.',
        consequences: 'Inhalación crónica de vapores de hidrocarburos e ignición de atmósfera inflamable.',
        regulation: 'RD 374/2001 y RD 1215/1997.',
        prevention: 'Disponer de cubas con tapa de cierre automático con fusible térmico y campana de extracción forzada.'
      }
    ]
  },
  {
    id: 'alturas',
    name: 'Cubiertas y Tejados',
    subtitle: 'Trabajos Verticales y Rehabilitación',
    description: 'Cubierta inclinada de teja con claraboyas frágiles, chimeneas y riesgo de caída en altura.',
    badgeColor: 'amber',
    icon: 'mountain',
    timeLimit: 90,
    svgContent: svgAlturas.trim(),
    hazards: [
      {
        id: 'alturas-lucernario',
        name: 'Lucernario de plástico frágil sin red de protección',
        category: 'Superficies Frágiles',
        severity: 'Muy Grave',
        rect: { left: 38, top: 38, width: 22, height: 25 },
        description: 'Claraboya de policarbonato translúcido envejecido sin reja ni malla metálica de resistencia en cubierta.',
        consequences: 'Rotura inmediata de la placa bajo el peso del trabajador y precipitación al vacío de 8 metros.',
        regulation: 'RD 2177/2004 y RD 1627/1997. Las superficies no transitables deben protegerse con redes o pasarelas.',
        prevention: 'Instalar redes bajo cubierta antes de pisar el tejado y pasarelas de reparto de carga de madera.'
      },
      {
        id: 'alturas-vacio',
        name: 'Trabajador en el alero sin línea de vida ni arnés',
        category: 'Caídas en Altura',
        severity: 'Muy Grave',
        rect: { left: 78, top: 42, width: 18, height: 35 },
        description: 'Operario arrodillado en el borde del tejado a 12 metros de altura sin arnés anticaídas ni barandilla.',
        consequences: 'Caída vertical al vacío con resultado de muerte instantánea.',
        regulation: 'RD 2177/2004 sobre trabajos en altura. Obligación de protección colectiva o individual a partir de 2 metros.',
        prevention: 'Instalar redes de seguridad perimetrales de horca tipo V o línea de vida con arnés anticaídas EN 361.'
      },
      {
        id: 'alturas-chimenea',
        name: 'Línea de vida atada a chimenea antigua agrietada',
        category: 'Puntos de Anclaje',
        severity: 'Muy Grave',
        rect: { left: 63, top: 15, width: 15, height: 32 },
        description: 'Cuerda amarrada al tiro de una chimenea de ladrillo con grietas profundas como falso anclaje.',
        consequences: 'Colapso de la chimenea al recibir el impacto de una caída, arrastrando al operario.',
        regulation: 'Norma UNE-EN 795 sobre dispositivos de anclaje. Resistencia estática mínima requerida de 12 kN.',
        prevention: 'Prohibir el anclaje a elementos de fábrica de ladrillo; taladrar anclajes químicos en vigas maestras.'
      },
      {
        id: 'alturas-escalera',
        name: 'Escalera de acceso que no sobrepasa 1 metro',
        category: 'Acceso a Cubiertas',
        severity: 'Grave',
        rect: { left: 4, top: 50, width: 14, height: 42 },
        description: 'Escalera de mano que finaliza a ras del alero sin sobrepasar la altura reglamentaria ni estar amarrada.',
        consequences: 'Deslizamiento lateral de la escalera o caída durante la transición al tejado.',
        regulation: 'RD 2177/2004. Las escaleras deben sobrepasar al menos 1 metro por encima del plano de desembarco.',
        prevention: 'Utilizar escaleras con prolongación de 1 metro y fijar firmemente la cabeza con abrazadera.'
      }
    ]
  }
];

const outputContent = `/**
 * BANCO DE DATOS DE ESCENARIOS Y PELIGROS DE PRL - 8 ESCENARIOS REALISTAS MULTIPLATAFORMA
 * Generado con arte vectorial de alta definición, iluminación ambiental y sin textos spoiler.
 */
window.PRL_SCENARIOS = ${JSON.stringify(allScenarios, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'scenarios.js'), outputContent, 'utf-8');
console.log('✅ Generated 8 highly realistic scenarios in js/scenarios.js!');
