const fs = require('fs');
const path = require('path');

// Cargar los 3 primeros SVGs ya creados para mantener consistencia
const existingScenarios = require('./build_scenarios.js');

// Ahora crearemos los 5 SVGs nuevos con la misma calidad y riqueza visual:

// SVG 4: LABORATORIO QUÍMICO Y BIOLÓGICO
const svgLaboratorio = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="labWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="labFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="shadowLab">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Pared con azulejos de laboratorio -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#labWall)"/>
  <g stroke="#334155" stroke-width="1" opacity="0.3">
    <line x1="0" y1="60" x2="1000" y2="60"/>
    <line x1="0" y1="120" x2="1000" y2="120"/>
    <line x1="0" y1="180" x2="1000" y2="180"/>
    <line x1="0" y1="240" x2="1000" y2="240"/>
    <line x1="0" y1="300" x2="1000" y2="300"/>
  </g>

  <!-- Suelo epoxi liso -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#labFloor)"/>

  <!-- PELIGRO 5: Campana de gases apagada con guillotina levantada (x: 220 to 390, y: 110 to 310) -->
  <g id="danger-campana" transform="translate(220, 110)" class="cursor-pointer" filter="url(#shadowLab)">
    <rect width="170" height="200" fill="#475569" stroke="#1e293b" stroke-width="3" rx="4"/>
    <rect x="15" y="15" width="140" height="150" fill="#0f172a"/>
    <!-- Guillotina de cristal subida al máximo (PELIGRO) -->
    <rect x="15" y="15" width="140" height="30" fill="#38bdf8" opacity="0.3" stroke="#94a3b8" stroke-width="2"/>
    <text x="85" y="34" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">GUILLOTINA 100% ABIERTA</text>
    <!-- Vaso humeando dentro sin extracción -->
    <rect x="70" y="110" width="30" height="40" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="85" cy="110" rx="15" ry="4" fill="#a855f7" opacity="0.7"/>
    <!-- Vapores tóxicos saliendo de la campana -->
    <path d="M85 105 Q70 80 80 50 Q90 20 120 10 Q160 5 190 40" fill="none" stroke="#a855f7" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    <path d="M85 105 Q100 80 95 60 Q90 30 140 25" fill="none" stroke="#c084fc" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
    <!-- Panel de control: MOTOR OFF en rojo -->
    <rect x="15" y="170" width="140" height="25" fill="#334155"/>
    <circle cx="35" cy="182" r="5" fill="#ef4444"/>
    <text x="50" y="186" fill="#f87171" font-size="9" font-weight="bold">EXTRACCIÓN: APAGADA</text>
  </g>

  <!-- PELIGRO 3: Ducha de emergencia y lavaojos bloqueado (x: 800 to 950, y: 120 to 380) -->
  <g id="danger-ducha" class="cursor-pointer" filter="url(#shadowLab)">
    <!-- Tubería y cabezal de ducha de emergencia -->
    <g transform="translate(840, 100)">
      <!-- Señal verde DUCHA Y LAVAOJOS -->
      <rect x="-20" y="-30" width="75" height="26" fill="#16a34a" stroke="#ffffff" stroke-width="2" rx="3"/>
      <text x="17" y="-13" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">DUCHA / LAVAOJOS</text>
      <!-- Tubería amarilla -->
      <line x1="17" y1="0" x2="17" y2="180" stroke="#eab308" stroke-width="6"/>
      <!-- Cono de la ducha -->
      <polygon points="17,30 -5,60 40,60" fill="#16a34a"/>
      <!-- Pila del lavaojos -->
      <ellipse cx="17" cy="140" rx="30" ry="12" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <circle cx="6" cy="138" r="4" fill="#38bdf8"/>
      <circle cx="28" cy="138" r="4" fill="#38bdf8"/>
    </g>

    <!-- Pila de cajas bloqueando el acceso a la ducha -->
    <g transform="translate(800, 240)">
      <rect x="0" y="20" width="105" height="55" fill="#b45309" stroke="#78350f" stroke-width="2" rx="2"/>
      <text x="52" y="50" fill="#fef3c7" font-size="9" font-weight="bold" text-anchor="middle">PIPETAS VIDRIO</text>
      <rect x="15" y="-30" width="85" height="52" fill="#d97706" stroke="#92400e" stroke-width="2" rx="2" transform="rotate(-6)"/>
      <text x="55" y="0" fill="#fef3c7" font-size="8" font-weight="bold" text-anchor="middle">REACTIVOS</text>
      <rect x="-10" y="70" width="125" height="60" fill="#78350f" stroke="#451a03" stroke-width="2" rx="2"/>
      <!-- Símbolo de bloqueo -->
      <circle cx="50" cy="100" r="14" fill="#ef4444"/>
      <text x="50" y="105" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">!</text>
    </g>
  </g>

  <!-- Poyo/Encimera principal del laboratorio -->
  <rect x="0" y="340" width="800" height="25" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <rect x="0" y="365" width="800" height="180" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>

  <!-- PELIGRO 1: Botellas de químicos sin etiquetar y abiertas (x: 100 to 240, y: 340 to 470) -->
  <g id="danger-quimicos" transform="translate(105, 335)" class="cursor-pointer" filter="url(#shadowLab)">
    <!-- Frasco con líquido verde sin etiqueta y tapón abierto -->
    <rect x="10" y="-35" width="40" height="60" rx="5" fill="#86efac" stroke="#16a34a" stroke-width="2" opacity="0.85"/>
    <rect x="22" y="-45" width="16" height="12" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
    <!-- Tapón tirado al lado -->
    <circle cx="65" cy="18" r="8" fill="#ef4444"/>
    <!-- Derrame de ácido corrosivo carcomiendo la mesa -->
    <path d="M40 20 Q70 15 90 22 Q120 18 135 25 Q110 32 60 30 Z" fill="#22c55e" opacity="0.7"/>
    <!-- Burbujas y humos de reacción ácida -->
    <circle cx="80" cy="18" r="3" fill="#ffffff"/>
    <circle cx="100" cy="22" r="2" fill="#ffffff"/>
    <path d="M80 15 Q75 5 80 -5 M105 18 Q115 8 110 -2" stroke="#22c55e" stroke-width="2" fill="none"/>
    <text x="30" y="-12" fill="#ef4444" font-size="14" font-weight="bold">?</text>
    <text x="75" y="42" fill="#ef4444" font-size="8" font-weight="bold">SIN ETIQUETA / CLP</text>
  </g>

  <!-- PELIGRO 2: Mechero Bunsen junto a botella de etanol (x: 360 to 510, y: 310 to 460) -->
  <g id="danger-bunsen" transform="translate(365, 310)" class="cursor-pointer" filter="url(#shadowLab)">
    <!-- Mechero Bunsen encendido -->
    <rect x="20" y="45" width="25" height="8" rx="2" fill="#0f172a"/>
    <line x1="32" y1="45" x2="32" y2="15" stroke="#64748b" stroke-width="6"/>
    <!-- Llama viva desatendida -->
    <path d="M32 15 Q25 0 32 -15 Q40 0 32 15 Z" fill="#38bdf8"/>
    <path d="M32 12 Q28 0 32 -8 Q36 0 32 12 Z" fill="#facc15"/>

    <!-- Botella de Etanol al 96% justo pegada al fuego -->
    <g transform="translate(70, 0)">
      <rect width="45" height="65" rx="4" fill="#f8fafc" stroke="#dc2626" stroke-width="2"/>
      <rect x="12" y="-10" width="20" height="12" fill="#dc2626" rx="2"/>
      <!-- Pictograma de líquido inflamable -->
      <polygon points="22,15 36,28 8,28" fill="#ef4444"/>
      <text x="22" y="27" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">🔥</text>
      <text x="22" y="42" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">ETANOL 96%</text>
      <text x="22" y="55" fill="#7f1d1d" font-size="7" font-weight="bold" text-anchor="middle">INFLAMABLE</text>
    </g>
    <!-- Advertencia de riesgo de explosión -->
    <line x1="45" y1="5" x2="65" y2="10" stroke="#ef4444" stroke-width="2" stroke-dasharray="3"/>
    <text x="55" y="-5" fill="#ef4444" font-size="9" font-weight="bold">¡FUEGO!</text>
  </g>

  <!-- PELIGRO 4: Investigador pipeteando con la boca sin guantes ni gafas (x: 560 to 700, y: 230 to 420) -->
  <g id="danger-pipeta" transform="translate(565, 230)" class="cursor-pointer" filter="url(#shadowLab)">
    <!-- Cabeza -->
    <circle cx="35" cy="25" r="18" fill="#fed7aa"/>
    <path d="M20 18 Q35 8 50 18 Q45 12 35 12 Z" fill="#451a03"/> <!-- Pelo -->
    <!-- Ojos expuestos (SIN GAFAS) -->
    <circle cx="28" cy="24" r="2.5" fill="#0f172a"/>
    <circle cx="42" cy="24" r="2.5" fill="#0f172a"/>
    <!-- Pipeta de vidrio en la boca (PRÁCTICA PROHIBIDA) -->
    <line x1="35" y1="36" x2="20" y2="90" stroke="#38bdf8" stroke-width="4"/>
    <line x1="20" y1="90" x2="15" y2="120" stroke="#38bdf8" stroke-width="4"/>
    <circle cx="35" cy="36" r="3" fill="#dc2626"/>

    <!-- Cuerpo con bata -->
    <rect x="15" y="45" width="40" height="85" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="4"/>
    <!-- Manos al descubierto (SIN GUANTES DE NITRILO) -->
    <circle cx="12" cy="95" r="7" fill="#fed7aa"/>
    <circle cx="58" cy="95" r="7" fill="#fed7aa"/>
    
    <!-- Aviso de riesgo biológico/químico -->
    <g transform="translate(65, 10)">
      <polygon points="15,0 30,26 0,26" fill="#ef4444"/>
      <text x="15" y="21" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">!</text>
      <text x="15" y="38" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">PIPETEO ORAL</text>
    </g>
  </g>
</svg>
`;

// SVG 5: COCINA INDUSTRIAL Y HOSTELERÍA
const svgCocina = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="cookWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="steelGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <filter id="shadowCook">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Pared de acero y azulejo blanco -->
  <rect x="0" y="0" width="1000" height="320" fill="url(#cookWall)"/>
  
  <!-- Suelo de gres cerámico de cocina -->
  <rect x="0" y="320" width="1000" height="280" fill="#78350f"/>
  <g stroke="#92400e" stroke-width="2" opacity="0.4">
    <line x1="0" y1="380" x2="1000" y2="380"/>
    <line x1="0" y1="460" x2="1000" y2="460"/>
    <line x1="0" y1="540" x2="1000" y2="540"/>
    <line x1="200" y1="320" x2="100" y2="600"/>
    <line x1="400" y1="320" x2="350" y2="600"/>
    <line x1="600" y1="320" x2="600" y2="600"/>
    <line x1="800" y1="320" x2="850" y2="600"/>
  </g>

  <!-- PELIGRO 5: Campana extractora saturada de grasa con goteo (x: 520 to 760, y: 70 to 220) -->
  <g id="danger-campana-cocina" transform="translate(520, 70)" class="cursor-pointer" filter="url(#shadowCook)">
    <!-- Cuerpo de campana de acero inoxidable -->
    <polygon points="0,70 40,0 200,0 240,70" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
    <rect y="70" width="240" height="30" fill="#475569"/>
    <!-- Filtros de lamas engrasados en amarillo oscuro -->
    <rect x="20" y="75" width="60" height="20" fill="#a16207" stroke="#78350f" stroke-width="1.5"/>
    <rect x="90" y="75" width="60" height="20" fill="#854d0e" stroke="#78350f" stroke-width="1.5"/>
    <rect x="160" y="75" width="60" height="20" fill="#a16207" stroke="#78350f" stroke-width="1.5"/>
    <!-- Gotas de grasa colgando y cayendo hacia los fogones -->
    <circle cx="50" cy="102" r="3.5" fill="#78350f"/>
    <circle cx="120" cy="105" r="4" fill="#78350f"/>
    <path d="M120 108 L120 140" stroke="#78350f" stroke-width="2" stroke-dasharray="3"/>
    <text x="120" y="45" fill="#facc15" font-size="9" font-weight="bold" text-anchor="middle">FILTROS SATURADOS DE GRASA</text>
  </g>

  <!-- PELIGRO 4: Llave de corte de gas y extintor bloqueados por ollas (x: 810 to 970, y: 130 to 380) -->
  <g id="danger-gas-cocina" class="cursor-pointer" filter="url(#shadowCook)">
    <g transform="translate(850, 140)">
      <!-- Válvula amarilla de corte de gas -->
      <circle cx="20" cy="20" r="18" fill="#eab308" stroke="#a16207" stroke-width="2"/>
      <rect x="16" y="0" width="8" height="40" fill="#dc2626" rx="2"/>
      <text x="20" y="-8" fill="#eab308" font-size="8" font-weight="bold" text-anchor="middle">CORTE GAS</text>
      <!-- Extintor clase F (para aceites) -->
      <rect x="5" y="55" width="30" height="70" rx="10" fill="#dc2626"/>
      <text x="20" y="95" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">CLASE F</text>
    </g>
    <!-- Pilas de cacerolas gigantes y ollas tapando todo -->
    <g transform="translate(820, 230)">
      <ellipse cx="60" cy="20" rx="55" ry="16" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
      <rect x="5" y="20" width="110" height="35" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
      <ellipse cx="60" cy="55" rx="55" ry="16" fill="#64748b"/>
      
      <ellipse cx="65" cy="65" rx="50" ry="14" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
      <rect x="15" y="65" width="100" height="35" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
      <ellipse cx="65" cy="100" rx="50" ry="14" fill="#64748b"/>

      <circle cx="65" cy="50" r="14" fill="#ef4444"/>
      <text x="65" y="55" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">!</text>
    </g>
  </g>

  <!-- Bloque de cocina industrial de acero -->
  <g transform="translate(500, 280)" filter="url(#shadowCook)">
    <rect width="280" height="150" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
    <!-- Fogones encendidos -->
    <circle cx="60" cy="25" r="28" fill="#1e293b"/>
    <circle cx="180" cy="25" r="28" fill="#1e293b"/>
    <circle cx="60" cy="25" r="20" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4"/>
    <circle cx="180" cy="25" r="20" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4"/>
  </g>

  <!-- PELIGRO 3: Sartén con aceite hirviendo con mango sobresaliendo al pasillo (x: 580 to 730, y: 300 to 430) -->
  <g id="danger-sarten" transform="translate(580, 300)" class="cursor-pointer" filter="url(#shadowCook)">
    <!-- Sartén al fuego -->
    <circle cx="50" cy="30" r="32" fill="#0f172a" stroke="#475569" stroke-width="2"/>
    <circle cx="50" cy="30" r="26" fill="#a16207" opacity="0.8"/>
    <!-- Humo denso de aceite sobrecalentado a 250ºC -->
    <path d="M45 15 Q35 -5 45 -25 M55 18 Q65 0 55 -20" stroke="#fef08a" stroke-width="3" fill="none" opacity="0.8"/>
    <!-- MANGO SOBRESALIENDO TOTALMENTE HACIA EL PASILLO -->
    <rect x="75" y="24" width="65" height="12" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="2" transform="rotate(18, 75, 24)"/>
    <text x="120" y="10" fill="#ef4444" font-size="9" font-weight="bold">MANGO AL PASO</text>
  </g>

  <!-- Mesa de preparación izquierda -->
  <g transform="translate(50, 320)" filter="url(#shadowCook)">
    <rect width="250" height="18" fill="url(#steelGrad)" stroke="#475569" stroke-width="2"/>
    <rect x="20" y="18" width="15" height="140" fill="#64748b"/>
    <rect x="215" y="18" width="15" height="140" fill="#64748b"/>
    <!-- Tabla de cortar -->
    <rect x="40" y="-12" width="100" height="12" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  </g>

  <!-- PELIGRO 2: Cuchillo de chef afilado sobresaliendo en el borde (x: 120 to 280, y: 350 to 460) -->
  <g id="danger-cuchillo" transform="translate(130, 335)" class="cursor-pointer" filter="url(#shadowCook)">
    <!-- Hoja afilada de 25 cm apuntando hacia el exterior -->
    <path d="M40 0 L115 15 L40 18 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Mango negro del cuchillo -->
    <rect x="0" y="2" width="40" height="14" rx="3" fill="#0f172a"/>
    <!-- Brillo en filo cortante -->
    <line x1="40" y1="18" x2="115" y2="15" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="120" cy="15" r="8" fill="#ef4444"/>
    <text x="120" y="19" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">!</text>
    <text x="75" y="38" fill="#ef4444" font-size="8" font-weight="bold">HOJA VOLADA AL AIRE</text>
  </g>

  <!-- PELIGRO 1: Charco de grasa y agua resbaladizo en suelo frente a freidora (x: 350 to 570, y: 430 to 550) -->
  <g id="danger-grasa-suelo" class="cursor-pointer" filter="url(#shadowCook)">
    <path d="M360 480 C400 440, 480 430, 530 460 C580 490, 560 540, 500 550 C440 560, 380 540, 360 480 Z" fill="#ca8a04" opacity="0.75"/>
    <ellipse cx="450" cy="490" rx="55" ry="18" fill="#fef08a" opacity="0.3"/>
    <g transform="translate(440, 470)">
      <polygon points="16,0 32,28 0,28" fill="#ef4444"/>
      <text x="16" y="22" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">!</text>
      <text x="16" y="42" fill="#fef08a" font-size="9" font-weight="bold" text-anchor="middle">SUELO GRASIENTO</text>
    </g>
  </g>
</svg>
`;

// SVG 6: HOSPITAL Y CENTRO SANITARIO
const svgHospital = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="hospWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#115e59"/>
    </linearGradient>
    <linearGradient id="hospFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ccfbf1"/>
      <stop offset="100%" stop-color="#99f6e4"/>
    </linearGradient>
    <filter id="shadowHosp">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="320" fill="url(#hospWall)"/>
  <rect x="0" y="320" width="1000" height="280" fill="url(#hospFloor)"/>
  
  <!-- Pasamanos hospitalario en pared -->
  <line x1="0" y1="260" x2="1000" y2="260" stroke="#f59e0b" stroke-width="8"/>
  <line x1="0" y1="264" x2="1000" y2="264" stroke="#d97706" stroke-width="2"/>

  <!-- PELIGRO 2: Botellas de oxígeno medicinal sin cadena de anclaje (x: 780 to 930, y: 150 to 400) -->
  <g id="danger-oxigeno" transform="translate(800, 150)" class="cursor-pointer" filter="url(#shadowHosp)">
    <!-- Botella de O2 medicinal blanca y verde, alta (200 bar de presión) -->
    <rect x="20" y="30" width="35" height="180" rx="14" fill="#ffffff" stroke="#047857" stroke-width="3"/>
    <rect x="20" y="30" width="35" height="40" rx="10" fill="#ffffff"/>
    <rect x="28" y="10" width="18" height="20" fill="#94a3b8"/>
    <!-- Manómetro de presión con aguja en rojo -->
    <circle cx="37" cy="12" r="9" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <text x="37" y="110" fill="#047857" font-size="11" font-weight="bold" transform="rotate(-90, 37, 110)" text-anchor="middle">O2 MEDICINAL</text>

    <!-- AUSENCIA TOTAL DE CADENA DE FIJACIÓN -->
    <line x1="-10" y1="120" x2="90" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
    <text x="40" y="235" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">SIN CADENA ANTIVUELCO</text>
    <!-- Botella inclinándose hacia el suelo -->
    <polygon points="55,80 70,70 70,90" fill="#ef4444"/>
  </g>

  <!-- Cama hospitalaria / Camilla -->
  <!-- PELIGRO 4: Camilla con frenos desbloqueados en rampa (x: 560 to 780, y: 280 to 470) -->
  <g id="danger-camilla" transform="translate(560, 280)" class="cursor-pointer" filter="url(#shadowHosp)">
    <!-- Estructura de la cama -->
    <rect x="0" y="50" width="190" height="22" rx="4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <!-- Colchón sanitario azul -->
    <rect x="5" y="25" width="180" height="25" rx="3" fill="#0284c7"/>
    <!-- Almohada -->
    <rect x="150" y="15" width="32" height="15" rx="3" fill="#f8fafc"/>
    <!-- Ruedas SIN FRENO ACCIONADO (Pedal en posición libre roja) -->
    <g transform="translate(25, 72)">
      <circle cx="10" cy="20" r="14" fill="#0f172a" stroke="#64748b" stroke-width="3"/>
      <!-- Pedal de freno levantado (libre) -->
      <line x1="10" y1="8" x2="24" y2="4" stroke="#ef4444" stroke-width="4"/>
      <text x="10" y="48" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">FRENO OFF</text>
    </g>
    <g transform="translate(145, 72)">
      <circle cx="10" cy="20" r="14" fill="#0f172a" stroke="#64748b" stroke-width="3"/>
      <line x1="10" y1="8" x2="24" y2="4" stroke="#ef4444" stroke-width="4"/>
    </g>
    <!-- Flechas de movimiento accidental por pendiente -->
    <path d="M-15 60 L-35 60" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow)"/>
    <text x="80" y="15" fill="#ef4444" font-size="9" font-weight="bold">DESPLAZAMIENTO ACCIDENTAL</text>
  </g>

  <!-- Mesa auxiliar clínica izquierda -->
  <g transform="translate(100, 320)" filter="url(#shadowHosp)">
    <rect width="180" height="15" fill="#ffffff" stroke="#94a3b8" stroke-width="2" rx="2"/>
    <rect x="15" y="15" width="10" height="130" fill="#cbd5e1"/>
    <rect x="155" y="15" width="10" height="130" fill="#cbd5e1"/>
  </g>

  <!-- PELIGRO 1: Aguja hipodérmica usada sin capuchón (x: 140 to 280, y: 330 to 440) -->
  <g id="danger-aguja" transform="translate(150, 335)" class="cursor-pointer" filter="url(#shadowHosp)">
    <!-- Batea metálica -->
    <rect x="0" y="0" width="100" height="24" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
    <!-- Jeringa con aguja descubierta con gota de sangre -->
    <rect x="15" y="6" width="40" height="10" fill="#38bdf8" opacity="0.6" stroke="#0284c7" stroke-width="1"/>
    <!-- Émbolo -->
    <line x1="15" y1="11" x2="0" y2="11" stroke="#475569" stroke-width="3"/>
    <!-- Aguja de acero afilada al aire -->
    <line x1="55" y1="11" x2="85" y2="11" stroke="#94a3b8" stroke-width="2"/>
    <!-- Gota de sangre roja en la punta (RIESGO BIOLÓGICO) -->
    <circle cx="87" cy="11" r="3" fill="#dc2626"/>
    <!-- Símbolo de riesgo biológico -->
    <circle cx="105" cy="11" r="10" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="105" y="15" fill="#000000" font-size="10" font-weight="bold" text-anchor="middle">☣</text>
    <text x="50" y="38" fill="#ef4444" font-size="8" font-weight="bold">AGUJA DESTAPADA</text>
  </g>

  <!-- PELIGRO 3: Bolsa de residuos biosanitarios infecciosos rota en el pasillo (x: 380 to 580, y: 440 to 560) -->
  <g id="danger-residuos" transform="translate(390, 440)" class="cursor-pointer" filter="url(#shadowHosp)">
    <!-- Bolsa amarilla de residuos Grupo III desgarrada en suelo -->
    <path d="M20 60 C10 30, 40 10, 80 15 C120 10, 140 40, 130 70 C110 90, 40 85, 20 60 Z" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    <!-- Rotura con gasas manchadas y apósitos saliendo -->
    <path d="M70 40 L90 55 L75 70" stroke="#dc2626" stroke-width="3" fill="none"/>
    <ellipse cx="105" cy="65" rx="14" ry="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
    <circle cx="105" cy="65" r="4" fill="#dc2626"/>
    <text x="80" y="35" fill="#000000" font-size="14" font-weight="bold" text-anchor="middle">☣</text>
    <text x="80" y="100" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">RESIDUOS GRUPO III</text>
  </g>

  <!-- PELIGRO 5: Celador empujando con flexión lumbar lesiva (x: 240 to 390, y: 240 to 430) -->
  <g id="danger-ergonomia-hosp" transform="translate(250, 240)" class="cursor-pointer" filter="url(#shadowHosp)">
    <!-- Celador curvando espalda bruscamente -->
    <circle cx="35" cy="30" r="14" fill="#fed7aa"/>
    <path d="M40 45 Q75 40 95 65" stroke="#0d9488" stroke-width="18" fill="none" stroke-linecap="round"/>
    <!-- Rayos de dolor lumbar en L4-L5 -->
    <path d="M55 45 L50 35 L60 40 L55 30" stroke="#ef4444" stroke-width="3" fill="none"/>
    <rect x="25" y="70" width="8" height="50" fill="#134e4a"/>
    <rect x="42" y="70" width="8" height="50" fill="#134e4a"/>
    <text x="60" y="20" fill="#ef4444" font-size="8" font-weight="bold">SOBREESFUERZO</text>
  </g>
</svg>
`;

// SVG 7: TALLER MECÁNICO DE AUTOMOCIÓN
const svgTaller = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="tallerWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="tallerFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="shadowTaller">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-opacity="0.5"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="340" fill="url(#tallerWall)"/>
  <rect x="0" y="340" width="1000" height="260" fill="url(#tallerFloor)"/>

  <!-- PELIGRO 4: Torre de neumáticos de 4m inestable a punto de caer (x: 790 to 950, y: 120 to 390) -->
  <g id="danger-neumaticos" transform="translate(800, 110)" class="cursor-pointer" filter="url(#shadowTaller)">
    <!-- 8 neumáticos apilados en equilibrio precario e inclinados -->
    <g transform="rotate(8, 70, 240)">
      <ellipse cx="60" cy="40" rx="45" ry="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <ellipse cx="60" cy="70" rx="46" ry="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <ellipse cx="60" cy="100" rx="47" ry="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <ellipse cx="60" cy="130" rx="48" ry="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <ellipse cx="60" cy="160" rx="49" ry="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <ellipse cx="60" cy="190" rx="50" ry="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <ellipse cx="60" cy="220" rx="50" ry="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
    </g>
    <!-- Advertencia de vuelco -->
    <polygon points="10,80 30,80 20,60" fill="#ef4444"/>
    <text x="60" y="20" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">APILAMIENTO 4M INESTABLE</text>
  </g>

  <!-- PELIGRO 1: Coche en elevador hidráulico sin bloqueo mecánico (x: 360 to 640, y: 110 to 340) -->
  <g id="danger-elevador" transform="translate(360, 100)" class="cursor-pointer" filter="url(#shadowTaller)">
    <!-- Columnas del elevador hidráulico -->
    <rect x="0" y="0" width="22" height="340" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="250" y="0" width="22" height="340" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    
    <!-- Brazos telescópicos a 1.8 metros del suelo -->
    <line x1="22" y1="170" x2="100" y2="170" stroke="#eab308" stroke-width="8"/>
    <line x1="250" y1="170" x2="172" y2="170" stroke="#eab308" stroke-width="8"/>

    <!-- Silueta del coche elevado -->
    <g transform="translate(45, 80)">
      <rect width="180" height="60" rx="15" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <polygon points="35,0 60,-35 125,-35 150,0" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <polygon points="45,-2 65,-30 120,-30 140,-2" fill="#38bdf8" opacity="0.6"/>
      <!-- Ruedas -->
      <circle cx="40" cy="60" r="18" fill="#0f172a"/>
      <circle cx="140" cy="60" r="18" fill="#0f172a"/>
    </g>

    <!-- TRINQUETE DE SEGURIDAD DESENCLAVADO (PELIGRO DE CAÍDA BRUSCA) -->
    <g transform="translate(0, 160)">
      <rect x="-35" y="-10" width="30" height="25" fill="#ef4444" rx="3"/>
      <text x="-20" y="6" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">SIN SEGURO</text>
    </g>
    <text x="135" y="40" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">TRINQUETE MECÁNICO DESACTIVADO</text>
  </g>

  <!-- PELIGRO 3: Operario esmerilando sin pantalla facial ni gafas (x: 100 to 250, y: 270 to 460) -->
  <g id="danger-esmeril" transform="translate(110, 270)" class="cursor-pointer" filter="url(#shadowTaller)">
    <!-- Banco de trabajo con amoladora -->
    <rect x="0" y="90" width="100" height="15" fill="#475569"/>
    <circle cx="70" cy="75" r="16" fill="#64748b" stroke="#0f172a" stroke-width="3"/>
    <!-- Chispas incandescentes hacia la cara del operario -->
    <path d="M70 70 L25 35 M70 65 L15 25 M70 60 L30 15" stroke="#facc15" stroke-width="2"/>
    <circle cx="20" cy="30" r="3" fill="#fef08a"/>

    <!-- Operario con cara descubierta (SIN PROTECCIÓN OCULAR) -->
    <circle cx="15" cy="20" r="14" fill="#fed7aa"/>
    <circle cx="18" cy="20" r="2.5" fill="#ef4444"/> <!-- Ojo irritado expuesto -->
    <text x="45" y="-5" fill="#ef4444" font-size="8" font-weight="bold">SIN GAFAS / PANTALLA</text>
  </g>

  <!-- PELIGRO 2: Foso de mantenimiento abierto en el suelo (x: 250 to 530, y: 460 to 580) -->
  <g id="danger-foso" class="cursor-pointer">
    <!-- Hueco profundo en el suelo del taller sin barandillas ni cadenas -->
    <rect x="250" y="460" width="280" height="120" fill="#090d16" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
    <text x="390" y="525" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">FOSO ABIERTO SIN BARRERAS</text>
    <line x1="250" y1="460" x2="530" y2="580" stroke="#ef4444" stroke-width="2" opacity="0.3"/>
  </g>

  <!-- PELIGRO 5: Manguera neumática con fuga y manómetro roto (x: 640 to 780, y: 370 to 520) -->
  <g id="danger-compresor" transform="translate(650, 370)" class="cursor-pointer" filter="url(#shadowTaller)">
    <rect width="60" height="90" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <!-- Manómetro reventado con cristal roto -->
    <circle cx="30" cy="25" r="14" fill="#ffffff" stroke="#ef4444" stroke-width="3"/>
    <line x1="22" y1="18" x2="38" y2="32" stroke="#ef4444" stroke-width="2"/>
    <!-- Manguera serpenteando con rotura soplando aire a alta presión -->
    <path d="M50 70 Q90 60 80 100 Q70 140 110 130" stroke="#f59e0b" stroke-width="8" fill="none"/>
    <!-- Chorro soplante de aire a presión con partículas -->
    <path d="M80 100 L120 90 M80 100 L125 105 M80 100 L115 118" stroke="#38bdf8" stroke-width="3"/>
    <text x="60" y="150" fill="#ef4444" font-size="8" font-weight="bold">FUGA NEUMÁTICA 8 BAR</text>
  </g>
</svg>
`;

// SVG 8: TRABAJOS EN ALTURAS Y CUBIERTAS
const svgAlturas = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="skyAlturas" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="70%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="roofGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#9a3412"/>
    </linearGradient>
    <filter id="shadowAlturas">
      <feDropShadow dx="2" dy="5" stdDeviation="4" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1000" height="600" fill="url(#skyAlturas)"/>

  <!-- Nubes en el cielo a gran altura -->
  <ellipse cx="200" cy="80" rx="70" ry="20" fill="#ffffff" opacity="0.6"/>
  <ellipse cx="750" cy="100" rx="90" ry="25" fill="#ffffff" opacity="0.5"/>

  <!-- Cubierta / Tejado inclinado a 30 grados (Cota de 12 metros) -->
  <polygon points="100,220 900,220 980,550 50,550" fill="url(#roofGrad)" stroke="#7c2d12" stroke-width="3"/>
  
  <!-- Tejas curvas -->
  <g stroke="#7c2d12" stroke-width="2" opacity="0.4">
    <line x1="200" y1="220" x2="180" y2="550"/>
    <line x1="350" y1="220" x2="340" y2="550"/>
    <line x1="500" y1="220" x2="500" y2="550"/>
    <line x1="650" y1="220" x2="660" y2="550"/>
    <line x1="800" y1="220" x2="820" y2="550"/>
  </g>

  <!-- PELIGRO 4: Línea de anclaje provisional atada a una chimenea precaria (x: 650 to 790, y: 110 to 290) -->
  <g id="danger-chimenea" transform="translate(650, 110)" class="cursor-pointer" filter="url(#shadowAlturas)">
    <!-- Chimenea de ladrillo vieja y agrietada -->
    <rect width="70" height="110" fill="#b45309" stroke="#78350f" stroke-width="2"/>
    <!-- Grietas estructurales en chimenea -->
    <path d="M15 20 L35 45 L25 75 M45 30 L60 60" stroke="#451a03" stroke-width="2.5"/>
    <!-- Cuerda amarrada al cuello de la chimenea (ANCLAJE NO HOMOLOGADO) -->
    <rect x="-5" y="45" width="80" height="10" rx="3" fill="#eab308" stroke="#a16207" stroke-width="2"/>
    <line x1="0" y1="50" x2="-140" y2="150" stroke="#eab308" stroke-width="4"/>
    <circle cx="35" cy="50" r="10" fill="#ef4444"/>
    <text x="35" y="54" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">!</text>
    <text x="35" y="130" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">CHIMENEA: NO HOMOLOGADA</text>
  </g>

  <!-- PELIGRO 2: Claraboya frágil de plástico sin red inferior (x: 160 to 340, y: 250 to 390) -->
  <g id="danger-claraboya" transform="translate(170, 260)" class="cursor-pointer" filter="url(#shadowAlturas)">
    <!-- Domo traslúcido de policarbonato envejecido -->
    <polygon points="0,50 30,0 150,0 180,50" fill="#38bdf8" opacity="0.5" stroke="#0284c7" stroke-width="2"/>
    <!-- Grieta en el plástico por donde alguien puede quebrar y caer 10m al vacío -->
    <path d="M50 20 L80 35 L120 15" stroke="#ef4444" stroke-width="3"/>
    <circle cx="85" cy="25" r="12" fill="#ef4444"/>
    <text x="85" y="30" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">!</text>
    <text x="90" y="70" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">SUPERFICIE FRÁGIL SIN RED</text>
  </g>

  <!-- PELIGRO 1: Operario en cubierta inclinada SIN ARNÉS ANTICAÍDAS (x: 450 to 610, y: 230 to 430) -->
  <g id="danger-arnes" transform="translate(460, 230)" class="cursor-pointer" filter="url(#shadowAlturas)">
    <!-- Operario agachado reparando tejas sin ningún arnés ni línea de vida -->
    <circle cx="30" cy="25" r="15" fill="#fed7aa"/>
    <path d="M18 20 Q30 10 42 20" fill="#facc15"/> <!-- Casco -->
    <!-- Torso sin chaleco anticaídas (sin arnés) -->
    <rect x="15" y="40" width="30" height="45" rx="4" fill="#0284c7"/>
    <!-- Piernas sobre las tejas resbaladizas -->
    <rect x="10" y="85" width="12" height="40" fill="#1e293b"/>
    <rect x="35" y="85" width="12" height="40" fill="#1e293b"/>
    <!-- Señal SIN ARNÉS -->
    <g transform="translate(55, 10)">
      <polygon points="15,0 30,26 0,26" fill="#ef4444"/>
      <text x="15" y="21" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">!</text>
      <text x="15" y="40" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">SIN LÍNEA DE VIDA</text>
    </g>
  </g>

  <!-- PELIGRO 3: Borde de cubierta sin barandilla perimetral ni red (x: 740 to 970, y: 290 to 440) -->
  <g id="danger-borde-cubierta" class="cursor-pointer">
    <line x1="750" y1="360" x2="980" y2="550" stroke="#ef4444" stroke-width="4" stroke-dasharray="8 6"/>
    <text x="860" y="440" fill="#ef4444" font-size="11" font-weight="bold" transform="rotate(38, 860, 440)" text-anchor="middle">
      SIN BARANDILLA (12M AL VACÍO)
    </text>
  </g>

  <!-- PELIGRO 5: Escalera de mano sin sobrepasar 1m ni estar atada en cabeza (x: 50 to 170, y: 310 to 540) -->
  <g id="danger-escalera-alturas" transform="translate(60, 310)" class="cursor-pointer" filter="url(#shadowAlturas)">
    <g transform="rotate(18, 20, 100)">
      <rect x="0" y="0" width="6" height="220" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <rect x="40" y="0" width="6" height="220" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <line x1="6" y1="30" x2="40" y2="30" stroke="#0f172a" stroke-width="4"/>
      <line x1="6" y1="70" x2="40" y2="70" stroke="#0f172a" stroke-width="4"/>
      <line x1="6" y1="110" x2="40" y2="110" stroke="#0f172a" stroke-width="4"/>
      <line x1="6" y1="150" x2="40" y2="150" stroke="#0f172a" stroke-width="4"/>
      <line x1="6" y1="190" x2="40" y2="190" stroke="#0f172a" stroke-width="4"/>
    </g>
    <!-- La parte superior no sobrepasa 1 metro del desembarco -->
    <text x="30" y="240" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">NO SOBREPASA 1M</text>
  </g>
</svg>
`;

console.log('Building full database with 8 scenarios...');

// Leer los 3 escenarios ya existentes del archivo actual
const currentContent = fs.readFileSync(path.join(__dirname, 'js', 'scenarios.js'), 'utf-8');
const match = currentContent.match(/window\.PRL_SCENARIOS\s*=\s*(\[[\s\S]*\]);/);
let currentScenarios = [];
if (match) {
  try {
    currentScenarios = eval(match[1]);
  } catch (e) {
    console.error('Error evaluating current scenarios', e);
  }
}

// Conservar los 3 primeros si existen, o regenerarlos
const baseScenarios = currentScenarios.slice(0, 3);

// Añadir los 5 nuevos escenarios
const newScenarios = [
  {
    id: 'laboratorio',
    name: 'Laboratorio Químico y Biológico',
    subtitle: 'Investigación, Análisis y Control de Calidad',
    description: 'Instalación de ensayo químico y microbiológico con reactivos peligrosos, campana extractora, duchas de emergencia y mecheros Bunsen.',
    badgeColor: 'purple',
    icon: 'flask',
    timeLimit: 120,
    svgContent: svgLaboratorio.trim(),
    hazards: [
      {
        id: 'lab-quimicos',
        name: 'Reactivos químicos sin etiquetar y tapón abierto',
        category: 'Riesgo Químico',
        severity: 'Muy Grave',
        rect: { left: 10, top: 56, width: 14, height: 22 },
        description: 'Frascos de disolventes y ácidos agresivos colocados sobre la encimera sin etiqueta de identificación, sin pictogramas CLP y con tapón retirado provocando vertidos corrosivos.',
        consequences: 'Quemaduras químicas cutáneas y oculares, intoxicación por inhalación de vapores tóxicos y riesgo de reacciones cruzadas violentas.',
        regulation: 'Real Decreto 374/2001 sobre la protección de la salud y seguridad de los trabajadores contra los riesgos relacionados con los agentes químicos y Reglamento (CE) 1272/2008 (CLP). Todo recipiente debe estar inequívocamente identificado con su ficha de datos de seguridad.',
        prevention: 'Etiquetar de forma inmediata con nombre, pictogramas de peligro y frases H/P; trasvasar en bandejas de retención estancas y cerrar herméticamente tras cada uso.'
      },
      {
        id: 'lab-bunsen',
        name: 'Mechero Bunsen encendido junto a disolvente inflamable',
        category: 'Incendios y Explosiones',
        severity: 'Muy Grave',
        rect: { left: 36, top: 52, width: 15, height: 25 },
        description: 'Mechero de gas con llama abierta desatendido situado a escasos centímetros de una botella de etanol al 96% altamente volátil e inflamable.',
        consequences: 'Deflagración repentina, llamarada expansiva y conato de incendio en el laboratorio con riesgo de quemaduras de segundo y tercer grado.',
        regulation: 'Real Decreto 374/2001 y RD 486/1997. Prohibición expresa de aproximar fuentes de ignición o focos térmicos abiertos a sustancias con punto de inflamación bajo.',
        prevention: 'Mantener distancias de seguridad mínimas de al menos 1,5 metros entre mecheros y disolventes, sustituir la llama abierta por mantas calefactoras eléctricas y almacenar inflamables en armarios protegidos RF90.'
      },
      {
        id: 'lab-ducha',
        name: 'Ducha de emergencia y lavaojos bloqueado por cajas',
        category: 'Primeros Auxilios y Emergencias',
        severity: 'Muy Grave',
        rect: { left: 80, top: 20, width: 15, height: 44 },
        description: 'Pila de tres cajas pesadas de vidrio y reactivos apiladas justo bajo la ducha de emergencia y obstruyendo la maneta del lavaojos.',
        consequences: 'Imposibilidad de descontaminación inmediata ante una salpicadura ocular o corporal de ácido, provocando lesiones cáusticas irreversibles o ceguera.',
        regulation: 'Real Decreto 486/1997 y NTP 500 del INSST (Duchas y lavaojos de emergencia). Las instalaciones de socorro deben estar permanentemente despejadas y accesibles en menos de 10 segundos desde cualquier punto del laboratorio.',
        prevention: 'Despejar de inmediato el perímetro de 1 metro alrededor de la ducha, pintar franjas amarillas en el suelo y realizar pruebas hidráulicas de caudal semanales.'
      },
      {
        id: 'lab-pipeta',
        name: 'Pipeteo con la boca sin guantes ni gafas de seguridad',
        category: 'Buenas Prácticas de Laboratorio',
        severity: 'Muy Grave',
        rect: { left: 56, top: 38, width: 14, height: 32 },
        description: 'Técnico aspirando líquidos químicos con la boca directamente sobre una pipeta de vidrio, careciendo además de gafas antisalpicaduras y guantes de nitrilo.',
        consequences: 'Ingestión accidental de tóxicos o patógenos, quemaduras mucosas en faringe y estómago, y contaminación transdérmica.',
        regulation: 'Real Decreto 664/1997 sobre agentes biológicos, RD 374/2001 y RD 773/1997 (EPIs). El pipeteo con la boca está taxativamente prohibido en toda instalación química o biomédica.',
        prevention: 'Obligatoriedad estricta de utilizar peras de goma, micropipetas automáticas o pipeteadores eléctricos, junto con gafas de montura integral (UNE-EN 166).'
      },
      {
        id: 'lab-campana',
        name: 'Campana extractora de gases apagada con guillotina arriba',
        category: 'Protección Colectiva',
        severity: 'Grave',
        rect: { left: 22, top: 18, width: 17, height: 34 },
        description: 'Vitrina de extracción con la pantalla de cristal levantada al 100% y el motor de aspiración desconectado mientras se evapora un reactivo corrosivo en su interior.',
        consequences: 'Dispersión de contaminantes químicos en la atmósfera respirable de la sala, con exposición crónica o aguda del personal.',
        regulation: 'Norma UNE-EN 14175 y Real Decreto 374/2001. Las campanas deben mantener una velocidad de captación mínima de 0,5 m/s y trabajar con la guillotina a una altura máxima de 40 cm.',
        prevention: 'Trabajar siempre con el extractor activado, mantener la guillotina bajada a la marca de seguridad e incorporar un anemómetro con alarma sonora de bajo caudal.'
      }
    ]
  },
  {
    id: 'cocina',
    name: 'Cocina Industrial y Hostelería',
    subtitle: 'Restauración Colectiva y Elaboración de Alimentos',
    description: 'Cocina profesional de gran volumen con freidoras industriales, fuegos abiertos, superficies cortantes, aceites a alta temperatura y riesgos de resbalón.',
    badgeColor: 'rose',
    icon: 'utensils',
    timeLimit: 120,
    svgContent: svgCocina.trim(),
    hazards: [
      {
        id: 'cocina-grasa',
        name: 'Suelo resbaladizo con grasa y agua sin señalizar',
        category: 'Orden y Limpieza',
        severity: 'Grave',
        rect: { left: 35, top: 72, width: 22, height: 20 },
        description: 'Gran acumulación de aceite vegetal y agua de baldeo en el pasillo principal entre fogones sin pavimento antideslizante ni señalización.',
        consequences: 'Caídas al mismo nivel, resbalones con vertido de recipientes calientes sobre el cuerpo y traumatismos craneales.',
        regulation: 'Real Decreto 486/1997, Anexo I, Apartado 3 (Pavimentos de locales de trabajo). Los suelos deben ser regulares, no resbaladizos y disponer de drenaje adecuado en zonas húmedas.',
        prevention: 'Limpieza periódica en seco y desengrasado con detergente enzimático, colocación de alfombrillas de caucho ranuradas drenantes y uso obligatorio de calzado de seguridad con suela antideslizante certificada SRC.'
      },
      {
        id: 'cocina-cuchillo',
        name: 'Cuchillo de chef volado sobre el borde del pasillo',
        category: 'Herramientas Manuales',
        severity: 'Grave',
        rect: { left: 12, top: 58, width: 16, height: 18 },
        description: 'Cuchillo cebollero de filo vivo de 25 cm dejado sobre la mesa de trabajo con la hoja orientada y sobresaliendo hacia la zona de tránsito del personal.',
        consequences: 'Heridas incisas profundas, cortes en extremidades por roce involuntario y laceraciones en tendones.',
        regulation: 'Real Decreto 1215/1997 sobre equipos de trabajo y NTP 398 del INSST. Las herramientas manuales cortantes deben depositarse de forma segura sobre soportes específicos.',
        prevention: 'Guardar los cuchillos en tacomas imantados de pared, utilizar fundas rígidas de protección y nunca dejarlos con el filo asomando fuera de la encimera.'
      },
      {
        id: 'cocina-sarten',
        name: 'Sartén caliente con mango orientado hacia el exterior',
        category: 'Quemaduras y Superficies Calientes',
        severity: 'Muy Grave',
        rect: { left: 58, top: 50, width: 15, height: 22 },
        description: 'Sartén con aceite a más de 180°C colocada en el quemador exterior con el mango largo invadiendo la zona de paso de cocineros y ayudantes.',
        consequences: 'Vuelco accidental del recipiente sobre el cuerpo al ser enganchado al pasar, ocasionando quemaduras graves por escaldamiento térmico.',
        regulation: 'Real Decreto 486/1997 y Guía Técnica de Hostelería del INSST. Los recipientes de cocción deben posicionarse con los asideros hacia el interior de la placa de cocción.',
        prevention: 'Colocar obligatoriamente los mangos orientados hacia el interior del bloque de cocción y utilizar manoplas ignífugas térmicas para su manipulación.'
      },
      {
        id: 'cocina-gas',
        name: 'Válvula de gas y extintor bloqueados por menaje',
        category: 'Seguridad contra Incendios',
        severity: 'Muy Grave',
        rect: { left: 81, top: 22, width: 16, height: 42 },
        description: 'Llave de corte rápido de gas propano/natural y extintor de eficacia F (grasas) ocultos y bloqueados por pilas de ollas de acero inoxidable.',
        consequences: 'Imposibilidad de cortar el suministro de combustible ante una fuga o extinguir un fuego de grasas, propagando el incendio a toda la instalación.',
        regulation: 'Real Decreto 513/2017 (Reglamento de instalaciones de protección contra incendios) y Código Técnico de la Edificación (DB-SI). Los pulsadores de corte de gas y extintores deben estar visibles y libres de obstáculos.',
        prevention: 'Establecer una zona perimetral pintada de prohibición de depósito en torno a las llaves de gas y dotar a la cocina de sistema automático de extinción bajo campana.'
      },
      {
        id: 'cocina-campana',
        name: 'Filtros de campana saturados de grasa con riesgo de incendio',
        category: 'Riesgo de Incendio',
        severity: 'Grave',
        rect: { left: 52, top: 12, width: 24, height: 25 },
        description: 'Filtros de lamas de la campana extractora completamente cubiertos de grasa requemada goteando directamente sobre los fuegos de cocción.',
        consequences: 'Ignición espontánea de los vapores grasos, inflamación del conducto de extracción y propagación fulgurante del fuego por el tiro de humos.',
        regulation: 'Código Técnico de la Edificación (DB-SI 1, Sección 2) y Ordenanzas Municipales de Prevención de Incendios. Las campanas deben limpiarse con periodicidad mínima mensual.',
        prevention: 'Limpieza e inmersión semanal de los filtros en baño desengrasante cáustico y revisión anual de conductos por empresa mantenedora autorizada.'
      }
    ]
  },
  {
    id: 'hospital',
    name: 'Hospital y Centro Sanitario',
    subtitle: 'Atención Médica, Urgencias y Hospitalización',
    description: 'Entorno asistencial con presencia de material cortopunzante biopeligroso, gases medicinales comprimidos, movilización de pacientes y equipos rodantes.',
    badgeColor: 'teal',
    icon: 'activity',
    timeLimit: 120,
    svgContent: svgHospital.trim(),
    hazards: [
      {
        id: 'hosp-aguja',
        name: 'Aguja hipodérmica usada abandonada sin encapuchar',
        category: 'Riesgo Biológico',
        severity: 'Muy Grave',
        rect: { left: 14, top: 56, width: 14, height: 18 },
        description: 'Aguja de punción venosa con restos hemáticos sobre una batea en la mesa auxiliar, careciendo de dispositivo de bioseguridad y sin desechar en contenedor rígido.',
        consequences: 'Inoculación accidental de patógenos de transmisión hemática (VIH, Hepatitis B, Hepatitis C) por pinchazo percutáneo.',
        regulation: 'Orden ESS/1451/2013 y Real Decreto 664/1997 sobre la protección de los trabajadores contra los riesgos relacionados con la exposición a agentes biológicos. Prohibición estricta de reencapuchar agujas manualmente.',
        prevention: 'Utilizar exclusivamente material punzante con mecanismo de seguridad pasivo retráctil y depositar inmediatamente en contenedor rígido amarillo homologado sin manipulaciones intermedias.'
      },
      {
        id: 'hosp-oxigeno',
        name: 'Botellas de oxígeno medicinal libres sin cadena de amarre',
        category: 'Equipos a Presión',
        severity: 'Muy Grave',
        rect: { left: 78, top: 25, width: 15, height: 42 },
        description: 'Botella de oxígeno a 200 bar de presión situada de pie sin cadena de sujeción mural ni carro de transporte adaptado en zona de paso.',
        consequences: 'Caída de la botella, cizallamiento violento de la tulipa/manorreductor y conversión del cilindro en un proyectil descontrolado con riesgo de explosión.',
        regulation: 'Real Decreto 2060/2008 (Reglamento de equipos a presión, ITC-EP-6) y NTP 368 del INSST. Las botellas deben amarrarse permanentemente en posición vertical mediante cadenas metálicas.',
        prevention: 'Fijar sólidamente a la pared con doble cadena o trasladar en carros portabotellas tubulares con abrazadera de seguridad.'
      },
      {
        id: 'hosp-residuos',
        name: 'Bolsa de residuos biosanitarios infecciosos rota en suelo',
        category: 'Gestión de Residuos Sanitarios',
        severity: 'Muy Grave',
        rect: { left: 38, top: 74, width: 20, height: 19 },
        description: 'Bolsa amarilla de residuos biosanitarios especiales (Grupo III) rota y con vertido de apósitos y gasas con exudados en mitad del pasillo clínico.',
        consequences: 'Diseminación de microorganismos multirresistentes, infecciones nosocomiales en personal sanitario y caídas por pisada de fluidos biológicos.',
        regulation: 'Real Decreto 664/1997 y normativas autonómicas de gestión de residuos biosanitarios. Los residuos del Grupo III deben almacenarse en recipientes rígidos o bolsas de galga reforzada estancas.',
        prevention: 'Acotar la zona de inmediato, recoger con kit de vertidos biológicos utilizando virucidas homologados y desechar en contenedor rígido de bioseguridad.'
      },
      {
        id: 'hosp-camilla',
        name: 'Camilla con frenos desbloqueados en zona de pendiente',
        category: 'Equipos de Trabajo',
        severity: 'Grave',
        rect: { left: 56, top: 46, width: 22, height: 32 },
        description: 'Camilla de transporte de pacientes detenida en una rampa con los pedales de freno en posición libre, sin operario a su cargo.',
        consequences: 'Desplazamiento involuntario por gravedad, colisión contra paredes o caída del paciente con fracturas y contusiones graves.',
        regulation: 'Real Decreto 1215/1997 sobre utilización de equipos de trabajo y directivas de seguridad clínica del paciente.',
        prevention: 'Accionar de forma sistemática el freno centralizado en las cuatro ruedas cada vez que se detenga la camilla y utilizar barandillas laterales elevadas.'
      },
      {
        id: 'hosp-ergonomia',
        name: 'Movilización de paciente con flexión lumbar lesiva',
        category: 'Ergonomía Sanitaria',
        severity: 'Grave',
        rect: { left: 24, top: 40, width: 15, height: 32 },
        description: 'Celador empujando y traccionando de espaldas con las rodillas bloqueadas y forzando la curvatura de la columna sin ayuda de medios mecánicos.',
        consequences: 'Lumbalgias mecánicas agudas, protrusiones y hernias discales incapacitantes.',
        regulation: 'Real Decreto 487/1997 sobre manipulación manual de cargas y Guía Técnica del INSST para el sector sanitario.',
        prevention: 'Emplear transferidores de rodillos, grúas hospitalarias de bipedestación o movilización y aplicar principios de higiene postural (espalda recta, piernas flexionadas).'
      }
    ]
  },
  {
    id: 'taller',
    name: 'Taller Mecánico de Automoción',
    subtitle: 'Mantenimiento y Reparación de Vehículos a Motor',
    description: 'Taller de reparación mecánica con elevadores de vehículos, fosos de inspección, maquinaria rotativa de esmerilado y sistemas neumáticos a presión.',
    badgeColor: 'blue',
    icon: 'wrench',
    timeLimit: 120,
    svgContent: svgTaller.trim(),
    hazards: [
      {
        id: 'taller-elevador',
        name: 'Vehículo en elevador con trinquete de seguridad libre',
        category: 'Equipos de Elevación',
        severity: 'Muy Grave',
        rect: { left: 36, top: 18, width: 28, height: 38 },
        description: 'Automóvil de 1.800 kg elevado a 1,8 metros sostenido únicamente por la presión hidráulica de los pistones sin accionar el enclavamiento mecánico de seguridad.',
        consequences: 'Aplastamiento letal del mecánico por caída fulminante del vehículo ante un fallo de latiguillo o pérdida de presión hidráulica.',
        regulation: 'Norma UNE-EN 1493 (Elevadores de vehículos) y Real Decreto 1215/1997. Es preceptivo apoyar la carga sobre los trinquetes mecánicos de bloqueo antes de posicionarse bajo el vehículo.',
        prevention: 'Bajar siempre el elevador hasta encajar en el diente del trinquete de seguridad y prohibir la permanencia bajo el coche sin bloqueo verificado.'
      },
      {
        id: 'taller-foso',
        name: 'Foso de inspección abierto sin barandillas perimetrales',
        category: 'Caídas a Distinto Nivel',
        severity: 'Muy Grave',
        rect: { left: 25, top: 76, width: 28, height: 21 },
        description: 'Abertura en el pavimento de 1,60 metros de profundidad sin cubrir con pasarelas, sin cadena de delimitación y sin zócalo perimetral.',
        consequences: 'Caída de trabajadores o clientes al fondo del foso sufriendo traumatismos craneoencefálicos o fracturas múltiples.',
        regulation: 'Real Decreto 486/1997, Anexo I, Apartado 3 (Aberturas en suelos). Los fosos de reparación deben disponer de barandillas móviles, cadenas o cubiertas seccionales cuando no estén en uso.',
        prevention: 'Cubrir el foso con lamas de cierre rígido enrollables o colocar barandillas tubulares desmontables de 90 cm de altura mientras no se trabaje en él.'
      },
      {
        id: 'taller-esmeril',
        name: 'Mecánico esmerilando sin pantalla facial ni gafas',
        category: 'Protección Ocular',
        severity: 'Muy Grave',
        rect: { left: 10, top: 45, width: 15, height: 32 },
        description: 'Operario desbastando una pieza metálica en la amoladora de banco con chispas incandescentes proyectadas directamente hacia su rostro sin protección.',
        consequences: 'Incrustación de partículas metálicas candentes en la córnea, pérdida de visión ocular o quemaduras faciales.',
        regulation: 'Real Decreto 773/1997 sobre equipos de protección individual y RD 1215/1997 (Pantallas transparentes de protección en máquinas rotativas).',
        prevention: 'Uso obligatorio e inexcusable de pantalla facial integral abatible (UNE-EN 166) y regulación del deflector transparente de la propia amoladora a menos de 2 mm de la muela.'
      },
      {
        id: 'taller-neumaticos',
        name: 'Torre de neumáticos de 4 metros inestable en pasillo',
        category: 'Almacenamiento y Cargas',
        severity: 'Grave',
        rect: { left: 79, top: 20, width: 16, height: 45 },
        description: 'Columna de 8 neumáticos de camión apilados verticalmente a 4 metros de altura con inclinación hacia el pasillo de tránsito sin jaula ni estantería.',
        consequences: 'Desmoronamiento de la columna sobre trabajadores en tránsito con traumatismos por aplastamiento.',
        regulation: 'Real Decreto 486/1997 y Ley 31/1995 de PRL. El apilamiento de materiales debe garantizar su rigidez y estabilidad frente a oscilaciones mecánicas.',
        prevention: 'Almacenar los neumáticos en estanterías metálicas paletizadas homologadas o racks portaneumáticos limitando la altura de estiba libre a 1,5 metros.'
      },
      {
        id: 'taller-compresor',
        name: 'Manguera neumática con rotura y manómetro dañado',
        category: 'Equipos a Presión',
        severity: 'Grave',
        rect: { left: 64, top: 62, width: 15, height: 25 },
        description: 'Línea de aire comprimido a 8 bares con fisura expulsando chorro violento de aire y partículas junto a un calderín con manómetro agrietado.',
        consequences: 'Efecto látigo descontrolado de la manguera provocando contusiones, proyección de esquirlas a gran velocidad y sordera por ruido súbito.',
        regulation: 'Real Decreto 2060/2008 (Equipos a presión) y RD 1215/1997. Las conducciones flexibles deben someterse a revisiones periódicas y contar con válvulas de corte por exceso de caudal.',
        prevention: 'Incorporar cables de retención antisangrado (whipcheck) en acoples rápidos y sustituir de inmediato mangueras desgastadas o agrietadas.'
      }
    ]
  },
  {
    id: 'alturas',
    name: 'Trabajos en Alturas y Cubiertas',
    subtitle: 'Rehabilitación de Tejas, Aleros y Estructuras',
    description: 'Intervención en cubierta inclinada a 12 metros de altura con lucernarios de plástico frágil, aleros sin red perimetral y chimeneas antiguas.',
    badgeColor: 'sky',
    icon: 'shield',
    timeLimit: 120,
    svgContent: svgAlturas.trim(),
    hazards: [
      {
        id: 'alturas-arnes',
        name: 'Operario en cubierta inclinada sin arnés ni línea de vida',
        category: 'Caídas de Altura',
        severity: 'Muy Grave',
        rect: { left: 45, top: 38, width: 16, height: 34 },
        description: 'Trabajador reparando tejas sobre una pendiente del 30% a 12 metros de altura sin arnés anticaídas conectado a un punto de anclaje estructural.',
        consequences: 'Muerte por caída libre al vacío o secuelas de paraplejia/politraumatismo grave.',
        regulation: 'Real Decreto 2177/2004, de 12 de noviembre (Trabajos temporales en altura) y RD 1627/1997. En trabajos a más de 2 metros es preceptivo el empleo de dispositivos anticaídas certificados (UNE-EN 361) si no existen protecciones colectivas.',
        prevention: 'Instalar previamente una línea de vida horizontal certificada (UNE-EN 795) y amarrar el arnés con absorbedor de energía y dispositivo retráctil.'
      },
      {
        id: 'alturas-claraboya',
        name: 'Claraboya translúcida frágil sin red inferior de seguridad',
        category: 'Cubiertas Frágiles',
        severity: 'Muy Grave',
        rect: { left: 16, top: 42, width: 18, height: 24 },
        description: 'Lucernario de plástico traslúcido agrietado por la radiación UV en el plano del tejado, sin red de seguridad bajo el hueco ni pasarelas de reparto de carga.',
        consequences: 'Ruptura repentina del plástico al pisar sobre él y precipitación del operario hacia el interior de la nave desde 10 metros de cota.',
        regulation: 'Real Decreto 2177/2004 y NTP 1032 del INSST. Se prohíbe taxativamente pisar o apoyarse sobre placas traslúcidas o cubiertas frágiles sin pasarelas de madera o redes de seguridad (UNE-EN 1263).',
        prevention: 'Montar redes bajo cubierta antes de acceder al tejado, delimitar la zona de claraboyas con mallazo metálico rígido y transitar exclusivamente sobre tablones de reparto.'
      },
      {
        id: 'alturas-borde',
        name: 'Alero y borde de cubierta sin barandilla perimetral',
        category: 'Protección Colectiva',
        severity: 'Muy Grave',
        rect: { left: 74, top: 48, width: 23, height: 25 },
        description: 'Perímetro exterior del tejado sin ningún sistema de protección de borde: ausencia de barandillas rígidas provisionales y sin redes tipo horca.',
        consequences: 'Deslizamiento incontrolado del trabajador por la pendiente del tejado y caída al vacío sin retención física.',
        regulation: 'Real Decreto 1627/1997 (Anexo IV) y RD 2177/2004. Primacía obligatoria de la protección colectiva frente a la individual. El borde debe contar con barandilla resistente a 1 metro de altura, rodapié de 15 cm y protección intermedia.',
        prevention: 'Instalar sistema provisional de protección de borde (UNE-EN 13374 clase C para pendientes de cubierta) o redes de seguridad perimetrales.'
      },
      {
        id: 'alturas-chimenea',
        name: 'Línea de vida provisional atada a chimenea precaria',
        category: 'Puntos de Anclaje',
        severity: 'Muy Grave',
        rect: { left: 65, top: 18, width: 14, height: 30 },
        description: 'Cuerda de seguridad amarrada al tiro de una chimenea de ladrillo antiguo con grietas profundas, utilizada como punto de anclaje para frenar una posible caída.',
        consequences: 'Colapso y desprendimiento total de la chimenea al recibir el impacto dinámico de una caída (600 kg de fuerza), arrastrando al operario al vacío.',
        regulation: 'Norma UNE-EN 795 (Dispositivos de anclaje). Todo punto de anclaje debe resistir una carga estática mínima de 12 kN y estar certificado por técnico competente en hormigón o estructura metálica.',
        prevention: 'Prohibir terminantemente el uso de elementos de albañilería como anclaje; taladrar con anclajes químicos en vigas maestras o forjados estructurales ensayados.'
      },
      {
        id: 'alturas-escalera',
        name: 'Escalera de acceso sin sobrepasar 1 metro ni estar sujeta',
        category: 'Acceso a Cubiertas',
        severity: 'Grave',
        rect: { left: 5, top: 52, width: 12, height: 38 },
        description: 'Escalera de mano apoyada sobre el alero que finaliza a ras de la cubierta sin sobrepasar la altura reglamentaria y sin atadura en cabeza.',
        consequences: 'Deslizamiento lateral de la escalera o pérdida de equilibrio durante el momento crítico de desembarco del trabajador hacia el tejado.',
        regulation: 'Real Decreto 2177/2004 (Anexo). Los largueros de las escaleras de mano utilizadas para acceso deben sobrepasar al menos 1 metro por encima del plano de desembarco y fijarse en su parte superior.',
        prevention: 'Utilizar escaleras con prolongación telescópica superior de 1 metro y amarrar firmemente la cabeza de la escalera a un cáncamo fijo con abrazadera de seguridad.'
      }
    ]
  }
];

const allScenarios = [...baseScenarios, ...newScenarios];

const outputContent = `/**
 * BANCO DE DATOS DE ESCENARIOS Y PELIGROS DE PRL - 8 ESCENARIOS MULTIPLATAFORMA
 * Generado de forma autónoma con geometrías vectoriales SVG integradas y normativas oficiales.
 */
window.PRL_SCENARIOS = ${JSON.stringify(allScenarios, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'scenarios.js'), outputContent, 'utf-8');
console.log(`Successfully generated js/scenarios.js with ${allScenarios.length} scenarios!`);
