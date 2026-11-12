const fs = require('fs');
const path = require('path');

// SVG 1: OFICINA CORPORATIVA
const svgOficina = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="wallGradOfi" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="floorGradOfi" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="spillGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5a2e12"/>
      <stop offset="100%" stop-color="#2c1407"/>
    </linearGradient>
    <filter id="shadowOfi" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Pared de Fondo -->
  <rect x="0" y="0" width="1000" height="340" fill="url(#wallGradOfi)"/>
  
  <!-- Ventana con vistas al exterior -->
  <g transform="translate(420, 40)">
    <rect width="160" height="130" rx="4" fill="#60a5fa" opacity="0.3"/>
    <rect width="160" height="130" rx="4" fill="none" stroke="#94a3b8" stroke-width="6"/>
    <line x1="80" y1="0" x2="80" y2="130" stroke="#94a3b8" stroke-width="4"/>
    <line x1="0" y1="65" x2="160" y2="65" stroke="#94a3b8" stroke-width="4"/>
    <!-- Nubes/sol exterior -->
    <circle cx="120" cy="40" r="18" fill="#fef08a" opacity="0.8"/>
  </g>

  <!-- Cartel PRL en pared -->
  <g transform="translate(640, 50)" filter="url(#shadowOfi)">
    <rect width="130" height="85" rx="4" fill="#ffffff"/>
    <rect width="130" height="22" rx="4" fill="#0284c7"/>
    <text x="65" y="16" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">POLÍTICA DE PRL</text>
    <text x="65" y="44" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">¡LA SEGURIDAD</text>
    <text x="65" y="58" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">ES COSA DE TODOS!</text>
    <path d="M65 64 L75 80 L55 80 Z" fill="#10b981"/>
  </g>

  <!-- Pizarra blanca en pared izquierda -->
  <g transform="translate(70, 50)" filter="url(#shadowOfi)">
    <rect width="130" height="90" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
    <text x="12" y="24" fill="#475569" font-size="10" font-weight="bold">PLAN TRIMESTRAL</text>
    <line x1="12" y1="36" x2="100" y2="36" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
    <line x1="12" y1="48" x2="80" y2="48" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
    <line x1="12" y1="60" x2="110" y2="60" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- Suelo de la oficina con zócalo -->
  <rect x="0" y="340" width="1000" height="260" fill="url(#floorGradOfi)"/>
  <rect x="0" y="336" width="1000" height="8" fill="#0f172a"/>
  <!-- Líneas de baldosas en perspectiva -->
  <g stroke="#334155" stroke-width="1.5" opacity="0.4">
    <line x1="0" y1="340" x2="1000" y2="340"/>
    <line x1="0" y1="410" x2="1000" y2="410"/>
    <line x1="0" y1="490" x2="1000" y2="490"/>
    <line x1="0" y1="580" x2="1000" y2="580"/>
    <line x1="150" y1="340" x2="0" y2="600"/>
    <line x1="350" y1="340" x2="200" y2="600"/>
    <line x1="550" y1="340" x2="480" y2="600"/>
    <line x1="750" y1="340" x2="780" y2="600"/>
    <line x1="900" y1="340" x2="1000" y2="550"/>
  </g>

  <!-- PELIGRO 4: Archivador metálico volcando (x: 240 to 350, y: 140 to 320) -->
  <g id="danger-archivador" transform="translate(250, 140) rotate(8, 50, 160)" filter="url(#shadowOfi)" class="cursor-pointer">
    <!-- Cuerpo del archivador inclinado hacia adelante -->
    <rect width="85" height="175" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <!-- Cajones abiertos al límite sobresaliendo -->
    <g transform="translate(-25, 12)">
      <rect width="105" height="34" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <rect x="35" y="12" width="30" height="6" rx="2" fill="#334155"/>
      <!-- Carpetas desbordando -->
      <path d="M10 8 L30 2 L50 8 Z" fill="#f59e0b"/>
      <path d="M45 8 L65 3 L85 8 Z" fill="#ef4444"/>
    </g>
    <g transform="translate(-22, 54)">
      <rect width="102" height="34" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <rect x="35" y="12" width="30" height="6" rx="2" fill="#334155"/>
    </g>
    <g transform="translate(-16, 96)">
      <rect width="96" height="34" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <rect x="35" y="12" width="30" height="6" rx="2" fill="#334155"/>
    </g>
    <!-- Cajón inferior cerrado -->
    <g transform="translate(4, 138)">
      <rect width="77" height="32" rx="2" fill="#475569"/>
      <rect x="25" y="10" width="26" height="5" rx="2" fill="#1e293b"/>
    </g>
    <!-- Alerta visual sutil -->
    <circle cx="-10" cy="18" r="7" fill="#ef4444" opacity="0.8"/>
    <text x="-10" y="22" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">!</text>
  </g>

  <!-- PELIGRO 3: Extintor bloqueado por cajas de archivo (x: 790 to 940, y: 160 to 420) -->
  <g id="danger-extintor" class="cursor-pointer">
    <!-- Soporte y Extintor mural (Fondo) -->
    <g transform="translate(835, 170)">
      <!-- Señal fotoluminiscente EXTINTOR -->
      <rect x="-5" y="-35" width="60" height="26" rx="3" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
      <text x="25" y="-18" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">EXTINTOR</text>
      <!-- Cilindro rojo -->
      <rect x="5" y="0" width="40" height="95" rx="14" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <!-- Manómetro y boquilla -->
      <rect x="18" y="-12" width="14" height="12" fill="#64748b"/>
      <circle cx="25" cy="-16" r="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5"/>
      <path d="M32 -8 Q45 -5 45 40 L40 60" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <rect x="10" y="30" width="30" height="25" fill="#ffffff" opacity="0.9"/>
      <text x="25" y="46" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">ABC</text>
    </g>

    <!-- Pila de cajas bloqueando el extintor por delante -->
    <g transform="translate(800, 220)" filter="url(#shadowOfi)">
      <!-- Caja superior inestable -->
      <g transform="translate(8, 0) rotate(-6)">
        <rect width="105" height="55" rx="3" fill="#d97706" stroke="#b45309" stroke-width="2"/>
        <line x1="0" y1="27" x2="105" y2="27" stroke="#92400e" stroke-width="2"/>
        <rect x="15" y="10" width="45" height="18" fill="#fef3c7"/>
        <text x="37" y="22" fill="#92400e" font-size="8" font-weight="bold" text-anchor="middle">FACTURAS</text>
      </g>
      <!-- Caja intermedia 1 -->
      <g transform="translate(0, 50)">
        <rect width="118" height="60" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <line x1="0" y1="30" x2="118" y2="30" stroke="#78350f" stroke-width="2"/>
        <rect x="25" y="12" width="55" height="18" fill="#fef3c7"/>
        <text x="52" y="24" fill="#78350f" font-size="8" font-weight="bold" text-anchor="middle">ARCHIVOS 2021</text>
      </g>
      <!-- Caja intermedia 2 -->
      <g transform="translate(-10, 105)">
        <rect width="130" height="65" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
        <line x1="0" y1="32" x2="130" y2="32" stroke="#92400e" stroke-width="2"/>
        <rect x="30" y="12" width="65" height="18" fill="#fef3c7"/>
        <text x="62" y="24" fill="#92400e" font-size="8" font-weight="bold" text-anchor="middle">EXPEDIENTES</text>
      </g>
      <!-- Caja base en el suelo -->
      <g transform="translate(-15, 165)">
        <rect width="145" height="70" rx="3" fill="#92400e" stroke="#78350f" stroke-width="2"/>
        <text x="72" y="38" fill="#fef3c7" font-size="10" font-weight="bold" text-anchor="middle">PAPEL TRITURAR</text>
      </g>
    </g>
  </g>

  <!-- PUESTO DE TRABAJO 1 (IZQUIERDA) -->
  <g transform="translate(60, 320)" filter="url(#shadowOfi)">
    <!-- Mesa -->
    <rect x="0" y="40" width="240" height="16" rx="3" fill="url(#deskGrad)"/>
    <!-- Patas metálicas -->
    <rect x="15" y="56" width="12" height="120" fill="#475569"/>
    <rect x="215" y="56" width="12" height="120" fill="#475569"/>
    
    <!-- Monitor principal -->
    <rect x="80" y="-45" width="85" height="60" rx="3" fill="#0f172a" stroke="#475569" stroke-width="2"/>
    <rect x="84" y="-41" width="77" height="52" fill="#0284c7"/>
    <rect x="115" y="15" width="15" height="25" fill="#475569"/>
    <rect x="100" y="38" width="45" height="4" rx="2" fill="#334155"/>

    <!-- Teclado y ratón -->
    <rect x="85" y="43" width="55" height="8" rx="2" fill="#334155"/>
    <ellipse cx="155" cy="47" rx="5" ry="4" fill="#334155"/>

    <!-- Torre PC bajo mesa -->
    <rect x="35" y="70" width="35" height="75" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  </g>

  <!-- PELIGRO 2: Taza de café derramada junto a regleta eléctrica (x: 110 to 240, y: 360 to 470) -->
  <g id="danger-cafe" transform="translate(115, 365)" class="cursor-pointer" filter="url(#shadowOfi)">
    <!-- Regleta eléctrica blanca en el suelo/bajo mesa -->
    <g transform="translate(30, 48)">
      <rect width="80" height="24" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- 4 tomas de corriente -->
      <circle cx="16" cy="12" r="6" fill="#cbd5e1"/>
      <circle cx="34" cy="12" r="6" fill="#cbd5e1"/>
      <circle cx="52" cy="12" r="6" fill="#cbd5e1"/>
      <circle cx="70" cy="12" r="6" fill="#cbd5e1"/>
      <!-- Clavijas conectadas -->
      <rect x="11" y="6" width="10" height="12" rx="2" fill="#0f172a"/>
      <rect x="29" y="6" width="10" height="12" rx="2" fill="#475569"/>
      <!-- Indicador luminoso de encendido -->
      <circle cx="4" cy="12" r="2.5" fill="#ef4444"/>
    </g>

    <!-- Taza de café volcada -->
    <g transform="translate(0, 36) rotate(65)">
      <rect width="22" height="28" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
      <path d="M22 6 Q30 14 22 22" fill="none" stroke="#dc2626" stroke-width="3"/>
    </g>

    <!-- Charco de café líquido fluyendo directamente hacia la regleta -->
    <path d="M25 58 Q45 50 65 58 Q95 55 110 65 Q95 76 65 74 Q35 76 25 58 Z" fill="url(#spillGrad)" opacity="0.9"/>
    
    <!-- Chispas eléctricas amarillas sobre los enchufes -->
    <path d="M72 45 L76 38 L82 42 L88 32 L84 46 Z" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
    <path d="M95 48 L100 40 L106 45 Z" fill="#eab308"/>
    <circle cx="85" cy="40" r="3" fill="#fef08a" opacity="0.8"/>
  </g>

  <!-- PUESTO DE TRABAJO 2 Y PELIGRO 5: Ergonomía deficiente (x: 630 to 770, y: 240 to 400) -->
  <g id="danger-ergonomia" class="cursor-pointer" filter="url(#shadowOfi)">
    <!-- Mesa derecha -->
    <g transform="translate(630, 320)">
      <rect x="0" y="40" width="160" height="16" rx="3" fill="url(#deskGrad)"/>
      <rect x="15" y="56" width="12" height="120" fill="#475569"/>
      <rect x="135" y="56" width="12" height="120" fill="#475569"/>
      <!-- Portátil abierto en ángulo incómodo y bajo -->
      <rect x="35" y="20" width="55" height="35" rx="2" fill="#0f172a" transform="rotate(-15, 60, 35)"/>
      <rect x="37" y="22" width="51" height="30" fill="#38bdf8" transform="rotate(-15, 60, 35)"/>
      <rect x="30" y="44" width="65" height="8" rx="2" fill="#475569"/>
      
      <!-- Flechas de reflejo/deslumbramiento de ventana a pantalla -->
      <path d="M-40 -40 L25 15" stroke="#fef08a" stroke-width="3" stroke-dasharray="4" marker-end="url(#arrow)"/>
      <text x="-5" y="-10" fill="#fef08a" font-size="8" font-weight="bold">DESLUMBRAMIENTO</text>
    </g>

    <!-- Silla de oficina rota y desajustada -->
    <g transform="translate(670, 310)">
      <!-- Respaldo inclinado hacia atrás en ángulo lesivo -->
      <rect x="5" y="-30" width="40" height="55" rx="8" fill="#1e293b" stroke="#0f172a" stroke-width="2" transform="rotate(22, 25, 20)"/>
      <!-- Asiento hundido -->
      <ellipse cx="25" cy="38" rx="26" ry="12" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- Reposabrazos roto (uno ausente, uno caído) -->
      <path d="M-2 18 L-2 36 L10 36" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
      <!-- Pistón y base -->
      <rect x="22" y="48" width="6" height="35" fill="#475569"/>
      <!-- Ruedas (una desprendida) -->
      <path d="M5 83 L45 83" stroke="#334155" stroke-width="4"/>
      <circle cx="5" cy="86" r="4" fill="#0f172a"/>
      <circle cx="45" cy="86" r="4" fill="#0f172a"/>
      <!-- Rueda rota en suelo -->
      <circle cx="60" cy="87" r="4" fill="#ef4444"/>
    </g>
  </g>

  <!-- PELIGRO 1: Cables cruzados en el pasillo principal (x: 360 to 620, y: 450 to 560) -->
  <g id="danger-cables" class="cursor-pointer" filter="url(#shadowOfi)">
    <!-- Serpentín desordenado de cables sin pasacables homologado -->
    <path d="M350 490 C 400 460, 440 550, 490 480 S 560 540, 630 485" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
    <path d="M350 515 C 390 535, 430 460, 485 530 S 550 470, 630 510" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <path d="M365 480 C 420 545, 465 475, 520 535 S 580 490, 620 530" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
    <path d="M380 530 C 430 490, 490 560, 540 500 S 600 520, 630 495" fill="none" stroke="#3b82f6" stroke-width="5" stroke-linecap="round"/>
    
    <!-- Lazo elevado donde se tropieza un zapato -->
    <ellipse cx="490" cy="495" rx="14" ry="18" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-20, 490, 495)"/>
    <path d="M480 480 Q495 460 510 480" fill="none" stroke="#f59e0b" stroke-width="6"/>

    <!-- Silueta de peligro de tropiezo -->
    <g transform="translate(470, 440)">
      <polygon points="20,0 40,34 0,34" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
      <text x="20" y="27" fill="#000000" font-size="20" font-weight="bold" text-anchor="middle">!</text>
    </g>
  </g>
</svg>
`;

// SVG 2: OBRA DE CONSTRUCCIÓN
const svgObra = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#e0f2fe"/>
    </linearGradient>
    <linearGradient id="dirtGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="40%" stop-color="#451a03"/>
      <stop offset="100%" stop-color="#271002"/>
    </linearGradient>
    <linearGradient id="concreteGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <filter id="shadowObra">
      <feDropShadow dx="2" dy="5" stdDeviation="4" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Cielo de obra -->
  <rect x="0" y="0" width="1000" height="420" fill="url(#skyGrad)"/>

  <!-- Estructura del edificio en construcción (Hormigón y forjados) -->
  <g transform="translate(180, 80)">
    <!-- Pilares de hormigón armado -->
    <rect x="0" y="0" width="30" height="340" fill="url(#concreteGrad)"/>
    <rect x="180" y="0" width="30" height="340" fill="url(#concreteGrad)"/>
    <rect x="360" y="0" width="30" height="340" fill="url(#concreteGrad)"/>
    <!-- Forjados/losas -->
    <rect x="-20" y="40" width="430" height="24" fill="#64748b"/>
    <rect x="-20" y="160" width="430" height="24" fill="#64748b"/>
    <rect x="-20" y="280" width="430" height="24" fill="#64748b"/>
    <!-- Mallazo y ferralla saliente (armadura de espera) -->
    <path d="M5 -15 L5 0 M15 -20 L15 0 M25 -15 L25 0" stroke="#f59e0b" stroke-width="4"/>
    <path d="M185 -20 L185 0 M195 -15 L195 0 M205 -20 L205 0" stroke="#f59e0b" stroke-width="4"/>
    <path d="M365 -15 L365 0 M375 -20 L375 0 M385 -15 L385 0" stroke="#f59e0b" stroke-width="4"/>
    <!-- Pared de ladrillo a medio levantar -->
    <g fill="#ea580c" stroke="#9a3412" stroke-width="1">
      <rect x="30" y="184" width="35" height="18"/>
      <rect x="65" y="184" width="35" height="18"/>
      <rect x="100" y="184" width="35" height="18"/>
      <rect x="135" y="184" width="45" height="18"/>
      <rect x="30" y="202" width="45" height="18"/>
      <rect x="75" y="202" width="35" height="18"/>
      <rect x="110" y="202" width="35" height="18"/>
      <rect x="145" y="202" width="35" height="18"/>
    </g>
  </g>

  <!-- Grúa torre en la parte superior -->
  <g transform="translate(350, 15)">
    <!-- Mástil vertical superior -->
    <rect x="230" y="0" width="22" height="100" fill="#eab308" stroke="#ca8a04" stroke-width="1.5"/>
    <!-- Celosía metálica -->
    <path d="M230 10 L252 30 M252 10 L230 30 M230 30 L252 50 M252 30 L230 50" stroke="#a16207" stroke-width="2"/>
    <!-- Pluma horizontal -->
    <rect x="-180" y="20" width="550" height="18" fill="#eab308" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M-180 20 L370 20" stroke="#ca8a04" stroke-width="2"/>
    <!-- Carro de la grúa y cable -->
    <rect x="130" y="38" width="28" height="14" fill="#0f172a"/>
    <line x1="144" y1="52" x2="144" y2="230" stroke="#334155" stroke-width="3"/>
    <!-- Gancho con polea -->
    <circle cx="144" cy="235" r="7" fill="#64748b"/>
    <path d="M144 242 Q144 258 152 258 Q160 258 160 250" fill="none" stroke="#0f172a" stroke-width="4"/>
    
    <!-- Carga suspendida pesada (Vigas de acero oscilando sobre la zona) -->
    <g transform="translate(90, 255)" filter="url(#shadowObra)">
      <rect width="110" height="26" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <line x1="0" y1="13" x2="110" y2="13" stroke="#1e40af" stroke-width="4"/>
      <!-- Eslingas textiles de amarre -->
      <line x1="54" y1="-10" x2="15" y2="0" stroke="#f59e0b" stroke-width="3"/>
      <line x1="54" y1="-10" x2="95" y2="0" stroke="#f59e0b" stroke-width="3"/>
    </g>
  </g>

  <!-- PELIGRO 2: Andamio sin barandilla perimetral ni rodapié (x: 60 to 250, y: 100 to 270) -->
  <g id="danger-andamio" class="cursor-pointer" filter="url(#shadowObra)">
    <!-- Estructura tubular del andamio -->
    <g stroke="#64748b" stroke-width="4">
      <line x1="70" y1="80" x2="70" y2="440"/>
      <line x1="230" y1="80" x2="230" y2="440"/>
      <!-- Crucetas de San Andrés -->
      <line x1="70" y1="240" x2="230" y2="380" stroke-width="2.5"/>
      <line x1="230" y1="240" x2="70" y2="380" stroke-width="2.5"/>
      <line x1="70" y1="100" x2="230" y2="240" stroke-width="2.5"/>
      <line x1="230" y1="100" x2="70" y2="240" stroke-width="2.5"/>
    </g>
    <!-- Plataforma de trabajo de tablones de madera en altura -->
    <rect x="60" y="215" width="180" height="16" fill="#d97706" stroke="#92400e" stroke-width="2"/>
    
    <!-- Trabajador en el andamio al borde del abismo (sin barandilla) -->
    <g transform="translate(130, 130)">
      <!-- Cuerpo operario -->
      <circle cx="20" cy="15" r="11" fill="#fed7aa"/>
      <path d="M10 8 Q20 2 30 8 L32 15 L8 15 Z" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/> <!-- Casco blanco -->
      <rect x="10" y="27" width="20" height="35" rx="3" fill="#ea580c"/> <!-- Chaleco naranja -->
      <line x1="10" y1="38" x2="-2" y2="52" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
      <line x1="30" y1="38" x2="42" y2="52" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
      <rect x="12" y="62" width="7" height="25" fill="#1e293b"/> <!-- Pantalón -->
      <rect x="21" y="62" width="7" height="25" fill="#1e293b"/>
      <!-- Paleta y ladrillo en mano -->
      <rect x="42" y="48" width="14" height="8" fill="#c2410c"/>
    </g>

    <!-- AUSENCIA CLARA DE BARANDILLAS: Señales de advertencia punteadas en el vacío -->
    <line x1="60" y1="165" x2="240" y2="165" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 6"/>
    <text x="150" y="160" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">SIN BARANDILLA (90cm)</text>
    <rect x="60" y="208" width="180" height="7" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
    <text x="150" y="204" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">SIN RODAPIÉ (15cm)</text>
  </g>

  <!-- PELIGRO 5: Escalera de mano apoyada sobre bidones inestables (x: 640 to 760, y: 210 to 420) -->
  <g id="danger-escalera" class="cursor-pointer" filter="url(#shadowObra)">
    <!-- Bidones de 200L oxidados y abollados como base precaria -->
    <g transform="translate(650, 360)">
      <rect x="0" y="0" width="45" height="60" rx="4" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
      <line x1="0" y1="20" x2="45" y2="20" stroke="#7f1d1d" stroke-width="2"/>
      <line x1="0" y1="40" x2="45" y2="40" stroke="#7f1d1d" stroke-width="2"/>
      <!-- Abolladura en bidón -->
      <path d="M45 25 Q35 30 45 35" fill="#7f1d1d"/>

      <rect x="45" y="5" width="45" height="55" rx="4" fill="#1e40af" stroke="#1e3a8a" stroke-width="2"/>
      <line x1="45" y1="22" x2="90" y2="22" stroke="#1e3a8a" stroke-width="2"/>
      <line x1="45" y1="40" x2="90" y2="40" stroke="#1e3a8a" stroke-width="2"/>
    </g>

    <!-- Escalera de mano inclinada apoyada sobre la tapa de los bidones -->
    <g transform="translate(680, 200) rotate(14)">
      <!-- Largueros -->
      <rect x="0" y="0" width="6" height="185" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
      <rect x="36" y="0" width="6" height="185" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
      <!-- Peldaños -->
      <line x1="6" y1="25" x2="36" y2="25" stroke="#475569" stroke-width="4"/>
      <line x1="6" y1="55" x2="36" y2="55" stroke="#475569" stroke-width="4"/>
      <line x1="6" y1="85" x2="36" y2="85" stroke="#475569" stroke-width="4"/>
      <line x1="6" y1="115" x2="36" y2="115" stroke="#475569" stroke-width="4"/>
      <line x1="6" y1="145" x2="36" y2="145" stroke="#475569" stroke-width="4"/>
      <line x1="6" y1="175" x2="36" y2="175" stroke="#475569" stroke-width="4"/>
    </g>
    <!-- Advertencia de apoyo precario -->
    <circle cx="695" cy="355" r="9" fill="#ef4444"/>
    <text x="695" y="360" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">!</text>
  </g>

  <!-- Suelo de tierra y barro de la obra -->
  <rect x="0" y="420" width="1000" height="180" fill="url(#dirtGrad)"/>
  
  <!-- Montículos de grava y tierra -->
  <path d="M0 450 Q80 410 160 450 Q240 430 320 460 L320 600 L0 600 Z" fill="#592507"/>
  <path d="M680 460 Q780 430 890 470 Q950 440 1000 460 L1000 600 L680 600 Z" fill="#592507"/>

  <!-- PELIGRO 1: Operario SIN casco bajo la carga suspendida de la grúa (x: 440 to 580, y: 310 to 490) -->
  <g id="danger-casco" class="cursor-pointer" filter="url(#shadowObra)">
    <!-- Proyección vertical de caída desde la grúa -->
    <line x1="495" y1="280" x2="495" y2="350" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
    
    <!-- Trabajador distraído con el móvil sin casco -->
    <g transform="translate(470, 315)">
      <!-- Cabeza con pelo (SIN CASCO PROTECTOR) -->
      <circle cx="25" cy="22" r="14" fill="#fed7aa"/>
      <!-- Cabello castaño claro visible -->
      <path d="M12 18 Q25 6 38 18 Q35 12 25 12 Q15 12 12 18 Z" fill="#78350f"/>
      
      <!-- Cuerpo con chaleco reflectante -->
      <rect x="12" y="36" width="26" height="46" rx="4" fill="#0284c7"/> <!-- Camisa azul -->
      <rect x="14" y="40" width="22" height="38" rx="2" fill="#eab308"/> <!-- Chaleco alta visibilidad -->
      <rect x="14" y="52" width="22" height="6" fill="#f8fafc"/> <!-- Banda reflectante -->
      
      <!-- Brazos sosteniendo teléfono móvil -->
      <line x1="12" y1="46" x2="3" y2="60" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
      <line x1="3" y1="60" x2="16" y2="62" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
      <rect x="16" y="55" width="10" height="15" rx="2" fill="#0f172a" stroke="#ffffff" stroke-width="1"/>
      
      <!-- Piernas y botas de seguridad -->
      <rect x="15" y="82" width="8" height="42" fill="#334155"/>
      <rect x="27" y="82" width="8" height="42" fill="#334155"/>
      <rect x="12" y="122" width="13" height="10" rx="3" fill="#78350f"/>
      <rect x="27" y="122" width="13" height="10" rx="3" fill="#78350f"/>

      <!-- Cartel de advertencia "¡SIN CASCO!" -->
      <g transform="translate(45, 10)">
        <polygon points="15,0 30,26 0,26" fill="#ef4444"/>
        <text x="15" y="21" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">!</text>
      </g>
    </g>
  </g>

  <!-- PELIGRO 3: Zanja profunda sin señalizar, sin vallar y sin entibar (x: 260 to 530, y: 470 to 590) -->
  <g id="danger-zanja" class="cursor-pointer">
    <!-- Hueco de excavación oscuro -->
    <path d="M260 480 L520 475 L500 585 L280 585 Z" fill="#1c0a00" stroke="#78350f" stroke-width="3"/>
    <!-- Grietas de desprendimiento de talud -->
    <path d="M250 495 L275 510 L265 535 M510 490 L485 520 L495 550" stroke="#b45309" stroke-width="3"/>
    <!-- Rocas y escombros en el fondo de la zanja -->
    <ellipse cx="340" cy="540" rx="25" ry="12" fill="#451a03"/>
    <ellipse cx="420" cy="550" rx="35" ry="15" fill="#2e1002"/>
    <ellipse cx="480" cy="530" rx="18" ry="10" fill="#451a03"/>
    <!-- Borde sin vallado ni entibación -->
    <line x1="250" y1="475" x2="530" y2="470" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6"/>
    <text x="390" y="465" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">ZANJA 2M: SIN VALLA NI ENTIBACIÓN</text>
  </g>

  <!-- PELIGRO 4: Cuadro eléctrico provisional en charco de agua (x: 780 to 930, y: 390 to 550) -->
  <g id="danger-cuadro" class="cursor-pointer" filter="url(#shadowObra)">
    <!-- Gran charco de agua de lluvia en el suelo -->
    <ellipse cx="855" cy="510" rx="65" ry="24" fill="#38bdf8" opacity="0.6"/>
    <ellipse cx="855" cy="510" rx="50" ry="16" fill="#0284c7" opacity="0.7"/>

    <!-- Soporte metálico del cuadro metido en el agua -->
    <line x1="820" y1="460" x2="820" y2="515" stroke="#475569" stroke-width="5"/>
    <line x1="885" y1="460" x2="885" y2="515" stroke="#475569" stroke-width="5"/>

    <!-- Caja de distribución eléctrica de obra (puerta abierta de par en par) -->
    <g transform="translate(805, 390)">
      <!-- Cuerpo del cuadro -->
      <rect width="90" height="75" rx="3" fill="#eab308" stroke="#a16207" stroke-width="2"/>
      <!-- Puerta colgando abierta a la izquierda -->
      <rect x="-40" y="4" width="40" height="70" rx="2" fill="#ca8a04" stroke="#854d0e" stroke-width="2" transform="rotate(-15, 0, 4)"/>
      
      <!-- Interior con magnetotérmicos y bornes pelados -->
      <rect x="8" y="8" width="74" height="58" rx="2" fill="#0f172a"/>
      <!-- Magnetotérmicos -->
      <rect x="15" y="14" width="18" height="24" fill="#e2e8f0"/>
      <rect x="36" y="14" width="18" height="24" fill="#e2e8f0"/>
      <rect x="57" y="14" width="18" height="24" fill="#e2e8f0"/>
      
      <!-- Cables expuestos colgando hacia el charco -->
      <path d="M24 38 Q24 75 40 115" fill="none" stroke="#ef4444" stroke-width="3"/>
      <path d="M45 38 Q60 85 50 120" fill="none" stroke="#3b82f6" stroke-width="3"/>
      <path d="M66 38 Q85 80 75 118" fill="none" stroke="#22c55e" stroke-width="3"/>
      
      <!-- Rayos y chispas de electrocución en el agua -->
      <path d="M40 100 L46 92 L52 98 L58 88 L54 105 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="50" cy="118" r="4" fill="#fef08a"/>
    </g>
  </g>
</svg>
`;

// SVG 3: ALMACÉN LOGÍSTICO
const svgAlmacen = `
<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="w-full h-full select-none">
  <defs>
    <linearGradient id="wallWhGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="whFloorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="oilGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="50%" stop-color="#292524"/>
      <stop offset="100%" stop-color="#0c0a09"/>
    </linearGradient>
    <filter id="shadowWh">
      <feDropShadow dx="3" dy="5" stdDeviation="4" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Pared industrial metálica con cerchas -->
  <rect x="0" y="0" width="1000" height="320" fill="url(#wallWhGrad)"/>
  
  <!-- Cerchas metálicas de la cubierta -->
  <g stroke="#475569" stroke-width="3" opacity="0.6">
    <line x1="0" y1="30" x2="1000" y2="30"/>
    <line x1="0" y1="65" x2="1000" y2="65"/>
    <!-- Triangulación -->
    <path d="M0 30 L50 65 L100 30 L150 65 L200 30 L250 65 L300 30 L350 65 L400 30 L450 65 L500 30 L550 65 L600 30 L650 65 L700 30 L750 65 L800 30 L850 65 L900 30 L950 65 L1000 30"/>
    <!-- Campanas industriales LED -->
    <g fill="#94a3b8" stroke="#334155">
      <polygon points="240,65 260,85 220,85"/>
      <polygon points="500,65 520,85 480,85"/>
      <polygon points="760,65 780,85 740,85"/>
    </g>
    <!-- Conos de luz suave -->
    <polygon points="240,85 140,320 340,320" fill="#fef08a" opacity="0.05"/>
    <polygon points="500,85 400,320 600,320" fill="#fef08a" opacity="0.05"/>
    <polygon points="760,85 660,320 860,320" fill="#fef08a" opacity="0.05"/>
  </g>

  <!-- Suelo de hormigón pulido industrial -->
  <rect x="0" y="320" width="1000" height="280" fill="url(#whFloorGrad)"/>
  <rect x="0" y="318" width="1000" height="4" fill="#0f172a"/>

  <!-- Líneas viales amarillas de tránsito en el suelo -->
  <g stroke="#eab308" stroke-width="4" opacity="0.8">
    <line x1="280" y1="320" x2="210" y2="600"/>
    <line x1="560" y1="320" x2="520" y2="600" stroke-dasharray="14 10"/>
    <line x1="820" y1="320" x2="860" y2="600"/>
  </g>

  <!-- PELIGRO 4: Salida de emergencia bloqueada por europalets (x: 790 to 940, y: 150 to 390) -->
  <g id="danger-salida" class="cursor-pointer" filter="url(#shadowWh)">
    <!-- Puerta de emergencia verde con barra antipánico -->
    <g transform="translate(810, 160)">
      <!-- Señal lumínica Salida de Emergencia -->
      <rect x="10" y="-35" width="85" height="28" rx="3" fill="#16a34a" stroke="#ffffff" stroke-width="2"/>
      <text x="52" y="-17" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">SALIDA EMERGENCIA</text>
      
      <!-- Marco y doble hoja de puerta -->
      <rect width="105" height="170" fill="#15803d" stroke="#14532d" stroke-width="3"/>
      <line x1="52" y1="0" x2="52" y2="170" stroke="#14532d" stroke-width="2"/>
      <!-- Barras antipánico rojas horizontales -->
      <rect x="8" y="90" width="38" height="8" rx="2" fill="#ef4444"/>
      <rect x="60" y="90" width="38" height="8" rx="2" fill="#ef4444"/>
    </g>

    <!-- Torre de 6 palets de madera apilados bloqueando totalmente la puerta -->
    <g transform="translate(800, 220)">
      <!-- Palet 1 -->
      <g transform="translate(0, 0)">
        <rect width="125" height="18" fill="#d97706" stroke="#92400e" stroke-width="2"/>
        <line x1="15" y1="0" x2="15" y2="18" stroke="#78350f" stroke-width="4"/>
        <line x1="62" y1="0" x2="62" y2="18" stroke="#78350f" stroke-width="4"/>
        <line x1="110" y1="0" x2="110" y2="18" stroke="#78350f" stroke-width="4"/>
      </g>
      <!-- Palet 2 -->
      <g transform="translate(2, 20)">
        <rect width="125" height="18" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <line x1="15" y1="0" x2="15" y2="18" stroke="#451a03" stroke-width="4"/>
        <line x1="62" y1="0" x2="62" y2="18" stroke="#451a03" stroke-width="4"/>
        <line x1="110" y1="0" x2="110" y2="18" stroke="#451a03" stroke-width="4"/>
      </g>
      <!-- Palet 3 -->
      <g transform="translate(-3, 40)">
        <rect width="125" height="18" fill="#d97706" stroke="#92400e" stroke-width="2"/>
        <line x1="15" y1="0" x2="15" y2="18" stroke="#78350f" stroke-width="4"/>
        <line x1="62" y1="0" x2="62" y2="18" stroke="#78350f" stroke-width="4"/>
        <line x1="110" y1="0" x2="110" y2="18" stroke="#78350f" stroke-width="4"/>
      </g>
      <!-- Palet 4 -->
      <g transform="translate(1, 60)">
        <rect width="125" height="18" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      </g>
      <!-- Palet 5 -->
      <g transform="translate(-2, 80)">
        <rect width="125" height="18" fill="#d97706" stroke="#92400e" stroke-width="2"/>
      </g>
      <!-- Palet 6 (base en suelo) -->
      <g transform="translate(0, 100)">
        <rect width="125" height="20" fill="#92400e" stroke="#78350f" stroke-width="2"/>
      </g>

      <!-- Cartel de bloqueo prohibido -->
      <g transform="translate(45, -25)">
        <circle cx="18" cy="18" r="18" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
        <line x1="6" y1="6" x2="30" y2="30" stroke="#ffffff" stroke-width="4"/>
      </g>
    </g>
  </g>

  <!-- ESTANTERÍA INDUSTRIAL DE PALETIZACIÓN (IZQUIERDA) -->
  <g transform="translate(60, 50)" filter="url(#shadowWh)">
    <!-- Puntales verticales azules con perforaciones -->
    <rect x="0" y="0" width="16" height="420" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <rect x="220" y="0" width="16" height="420" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    
    <!-- Largueros horizontales naranja alta resistencia -->
    <rect x="0" y="120" width="236" height="18" rx="2" fill="#ea580c" stroke="#c2410c" stroke-width="2"/>
    <rect x="0" y="240" width="236" height="18" rx="2" fill="#ea580c" stroke="#c2410c" stroke-width="2"/>
    <rect x="0" y="360" width="236" height="18" rx="2" fill="#ea580c" stroke="#c2410c" stroke-width="2"/>

    <!-- Nivel 2 (Intermedio - Carga correcta estibada) -->
    <g transform="translate(20, 145)">
      <rect width="195" height="92" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <line x1="97" y1="0" x2="97" y2="92" stroke="#78350f" stroke-width="2"/>
      <!-- Film transparente retractilado -->
      <rect width="195" height="92" fill="#38bdf8" opacity="0.15"/>
      <text x="97" y="50" fill="#fef3c7" font-size="12" font-weight="bold" text-anchor="middle">CORRECTO</text>
    </g>

    <!-- Nivel 1 (Inferior - Palet con bidones) -->
    <g transform="translate(25, 265)">
      <rect width="90" height="92" fill="#1e40af" rx="4"/>
      <rect width="85" height="92" x="95" fill="#1e40af" rx="4"/>
    </g>
  </g>

  <!-- PELIGRO 1: Carga mal apilada e inestable en altura (x: 80 to 280, y: 70 to 230) -->
  <g id="danger-palet" transform="translate(75, 55)" class="cursor-pointer" filter="url(#shadowWh)">
    <!-- Palet roto inclinado en nivel superior -->
    <g transform="translate(15, 20) rotate(16, 100, 65)">
      <!-- Tablones del palet crujidos -->
      <rect width="180" height="18" fill="#d97706" stroke="#b45309" stroke-width="2"/>
      <line x1="80" y1="2" x2="88" y2="16" stroke="#451a03" stroke-width="3"/> <!-- Grieta rotura -->
      
      <!-- Cajas de cartón abombadas y a punto de caer hacia el pasillo -->
      <g transform="translate(10, -55)">
        <rect width="75" height="55" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
        <text x="37" y="32" fill="#451a03" font-size="9" font-weight="bold" text-anchor="middle">FRÁGIL</text>
      </g>
      <g transform="translate(85, -62) rotate(12)">
        <rect width="78" height="60" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <!-- Cinta rota deshilachada -->
        <path d="M0 30 Q40 20 78 30" stroke="#f87171" stroke-width="3" stroke-dasharray="6 4"/>
      </g>
      <!-- Caja superior desprendiéndose en el aire -->
      <g transform="translate(130, -100) rotate(35)">
        <rect width="60" height="48" rx="2" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
        <text x="30" y="28" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">50 KG</text>
      </g>
    </g>
    
    <!-- Icono de advertencia de caída de objetos -->
    <g transform="translate(200, 10)">
      <polygon points="16,0 32,28 0,28" fill="#ef4444"/>
      <text x="16" y="23" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">!</text>
    </g>
  </g>

  <!-- PELIGRO 3: Carretilla elevadora con horquillas altas en reposo y llave puesta (x: 560 to 770, y: 310 to 520) -->
  <g id="danger-carretilla" transform="translate(560, 310)" class="cursor-pointer" filter="url(#shadowWh)">
    <!-- Chasis principal de la carretilla amarilla -->
    <g transform="translate(20, 80)">
      <!-- Cuerpo contrapeso trasero -->
      <rect x="0" y="40" width="115" height="65" rx="12" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
      <rect x="0" y="70" width="35" height="35" fill="#0f172a"/> <!-- Contrapeso hierro fundido -->
      
      <!-- Cabina de protección antivuelco (ROPS/FOPS) -->
      <path d="M25 40 L45 -25 L105 -25 L115 40" fill="none" stroke="#0f172a" stroke-width="6"/>
      <line x1="45" y1="-25" x2="105" y2="-25" stroke="#0f172a" stroke-width="6"/>
      <line x1="75" y1="-25" x2="75" y2="40" stroke="#0f172a" stroke-width="4"/>

      <!-- Asiento vacío (conductor ausente) -->
      <rect x="50" y="15" width="30" height="25" rx="4" fill="#1e293b"/>
      <rect x="44" y="5" width="8" height="35" rx="3" fill="#1e293b"/>
      <!-- Volante con llave en el contacto colgando -->
      <line x1="88" y1="15" x2="98" y2="10" stroke="#334155" stroke-width="4"/>
      <circle cx="98" cy="8" r="7" fill="none" stroke="#0f172a" stroke-width="3"/>
      <!-- LLAVE PUESTA -->
      <path d="M96 22 L100 28 M100 28 L104 28" stroke="#facc15" stroke-width="3"/>
      <circle cx="96" cy="22" r="3" fill="#eab308"/>

      <!-- Ruedas industriales macizas -->
      <circle cx="28" cy="105" r="24" fill="#0f172a" stroke="#334155" stroke-width="4"/>
      <circle cx="28" cy="105" r="10" fill="#94a3b8"/>
      <circle cx="115" cy="105" r="20" fill="#0f172a" stroke="#334155" stroke-width="4"/>
      <circle cx="115" cy="105" r="8" fill="#94a3b8"/>
    </g>

    <!-- Mástil y HORQUILLAS ELEVADAS EN REPOSO A 1.8 METROS (GRAVE RIESGO) -->
    <g transform="translate(135, 10)">
      <!-- Mástil vertical doble -->
      <rect x="0" y="10" width="10" height="175" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
      <rect x="14" y="10" width="10" height="175" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
      <!-- Cadenas de elevación -->
      <line x1="5" y1="10" x2="5" y2="100" stroke="#94a3b8" stroke-width="3" stroke-dasharray="3 2"/>

      <!-- Tablero portahorquillas y HORQUILLAS ELEVADAS ARRIBA -->
      <g transform="translate(24, 25)">
        <rect width="12" height="45" fill="#0f172a"/>
        <!-- Puntas de las horquillas de acero en voladizo (altura mortal de cabeza/pecho) -->
        <path d="M12 35 L75 35 L75 42 L12 42 Z" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
        <path d="M12 10 L75 10 L75 17 L12 17 Z" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
        <!-- Puntas afiladas rojas de advertencia -->
        <polygon points="75,35 85,38.5 75,42" fill="#ef4444"/>
        <polygon points="75,10 85,13.5 75,17" fill="#ef4444"/>
      </g>
    </g>

    <!-- Rótulo de peligro horquillas altas -->
    <g transform="translate(140, 0)">
      <rect width="85" height="22" rx="3" fill="#ef4444"/>
      <text x="42" y="15" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">HORQUILLAS ALTAS</text>
    </g>
  </g>

  <!-- PELIGRO 2: Gran derrame de aceite en el pasillo (x: 370 to 570, y: 460 to 565) -->
  <g id="danger-aceite" class="cursor-pointer" filter="url(#shadowWh)">
    <!-- Charco de fluido oscuro y resbaladizo -->
    <path d="M370 510 C390 470, 470 460, 520 480 C570 500, 560 550, 500 560 C440 570, 390 560, 370 510 Z" fill="url(#oilGrad)"/>
    <!-- Brillo del aceite bajo las luces -->
    <ellipse cx="450" cy="505" rx="45" ry="14" fill="#ffffff" opacity="0.15" transform="rotate(-10, 450, 505)"/>
    <ellipse cx="490" cy="525" rx="30" ry="8" fill="#ffffff" opacity="0.1" transform="rotate(5, 490, 525)"/>
    
    <!-- Huella de neumático resbalando -->
    <path d="M410 495 Q450 515 480 500" stroke="#f59e0b" stroke-width="4" stroke-dasharray="5 3"/>

    <!-- Icono de resbalón -->
    <g transform="translate(450, 475)">
      <polygon points="16,0 32,28 0,28" fill="#f59e0b" stroke="#78350f" stroke-width="1.5"/>
      <text x="16" y="22" fill="#000000" font-size="16" font-weight="bold" text-anchor="middle">!</text>
    </g>
  </g>

  <!-- PELIGRO 5: Manipulación manual de carga y sobreesfuerzo lumbar (x: 190 to 340, y: 340 to 530) -->
  <g id="danger-sobreesfuerzo" class="cursor-pointer" filter="url(#shadowWh)">
    <g transform="translate(200, 350)">
      <!-- Trabajador doblando la espalda a 90 grados con piernas rectas -->
      <!-- Piernas rectas bloqueadas (técnica errónea y lesiva) -->
      <rect x="25" y="80" width="12" height="70" fill="#1e293b"/>
      <rect x="45" y="80" width="12" height="70" fill="#1e293b"/>
      <!-- Botas de seguridad -->
      <rect x="22" y="145" width="18" height="12" rx="3" fill="#78350f"/>
      <rect x="45" y="145" width="18" height="12" rx="3" fill="#78350f"/>

      <!-- Espalda completamente curvada horizontalmente -->
      <path d="M40 85 Q65 60 95 65" fill="none" stroke="#ea580c" stroke-width="20" stroke-linecap="round"/>
      
      <!-- Cabeza haciendo fuerza con el cuello tenso -->
      <circle cx="115" cy="55" r="14" fill="#fed7aa"/>
      <path d="M102 52 Q115 42 128 52" fill="#facc15" stroke="#ca8a04" stroke-width="2"/> <!-- Casco amarillo -->
      <!-- Expresión de dolor/esfuerzo -->
      <line x1="120" y1="56" x2="124" y2="58" stroke="#78350f" stroke-width="2"/>
      
      <!-- Brazos estirados hacia la caja pesada -->
      <path d="M85 70 L95 110" stroke="#ea580c" stroke-width="7" stroke-linecap="round"/>

      <!-- Rayos rojos de dolor lumbar en las vértebras L5-S1 -->
      <g transform="translate(45, 45)">
        <path d="M0 10 L-8 0 L-2 15 L-12 12 L0 25" fill="#ef4444"/>
        <circle cx="5" cy="20" r="6" fill="#ef4444" opacity="0.8"/>
      </g>

      <!-- Caja enorme y pesada de 40 kg en el suelo -->
      <g transform="translate(70, 95)">
        <rect width="65" height="55" rx="3" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <line x1="0" y1="27" x2="65" y2="27" stroke="#451a03" stroke-width="2"/>
        <text x="32" y="22" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">PESO: 40 KG</text>
        <text x="32" y="44" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">SIN AYUDA</text>
      </g>
    </g>
  </g>
</svg>
`;

// ESTRUCTURA COMPLETA DE ESCENARIOS Y RIESGOS PRL
const scenariosData = [
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
        rect: { left: 35, top: 74, width: 28, height: 20 },
        description: 'Múltiples cables de alimentación y red cruzando libremente el suelo en el pasillo principal entre mesas sin protección ni fijación, formando bucles y elevaciones.',
        consequences: 'Tropiezos, caídas al mismo nivel con contusiones o fracturas óseas, y desconexiones bruscas de equipos con daños materiales.',
        regulation: 'Real Decreto 486/1997, de 14 de abril, sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo (Anexo I, Apartado 3: "Las zonas de paso y pasillos deberán permanecer expeditos y los suelos limpios de obstáculos que puedan provocar caídas o tropiezos").',
        prevention: 'Canalizar el cableado mediante pasacables de suelo homologados de goma biselada, canaletas perimetrales o cajas de conexiones empotradas en suelo técnico.'
      },
      {
        id: 'oficina-cafe',
        name: 'Líquidos derramados junto a regleta eléctrica',
        category: 'Riesgo Eléctrico',
        severity: 'Muy Grave',
        rect: { left: 11, top: 58, width: 15, height: 19 },
        description: 'Taza de café volcada cuyo líquido discurre directamente hacia una regleta multitoma con múltiples clavijas conectadas bajo tensión.',
        consequences: 'Cortocircuito, riesgo de electrocución por contacto indirecto a través del líquido conductor e ignición/conato de incendio eléctrico.',
        regulation: 'Real Decreto 614/2001, de 8 de junio, sobre protección frente al riesgo eléctrico (Disposiciones generales) y RD 486/1997. Prohibición estricta de manipular o derramar líquidos en proximidades inmediatas de elementos energizados.',
        prevention: 'Separar taxativamente los recipientes de bebidas de las tomas eléctricas, elevar las regletas en bandejas suspendidas bajo el tablero de la mesa y emplear vasos con tapa hermética.'
      },
      {
        id: 'oficina-extintor',
        name: 'Extintor de incendios bloqueado por cajas',
        category: 'Protección contra Incendios',
        severity: 'Muy Grave',
        rect: { left: 78, top: 25, width: 17, height: 45 },
        description: 'Pila de cuatro cajas de archivo pesadas acumuladas directamente delante del extintor hídrico/ABC mural, ocultando su visibilidad y bloqueando su retirada.',
        consequences: 'Imposibilidad de intervenir con rapidez ante un amago de fuego, propagación descontrolada de las llamas y riesgo de asfixia o atrapamiento del personal.',
        regulation: 'Real Decreto 513/2017 (Reglamento de instalaciones de protección contra incendios, RIPCI) y RD 486/1997 (Anexo I, Apartado 10). "Los medios manuales de extinción deben estar permanentemente señalizados, accesibles y libres de obstáculos en un perímetro de 1 metro".',
        prevention: 'Despejar de inmediato el frente del extintor, delimitar una zona de seguridad en el suelo con franjas amarillas y negras de prohibición de depósito de material.'
      },
      {
        id: 'oficina-archivador',
        name: 'Archivador inestable con cajones abiertos (Riesgo de vuelco)',
        category: 'Seguridad en el Trabajo',
        severity: 'Grave',
        rect: { left: 23, top: 21, width: 13, height: 32 },
        description: 'Mueble archivador metálico con los tres cajones superiores extraídos simultáneamente al máximo, desplazando el centro de gravedad e iniciando el vuelco hacia adelante.',
        consequences: 'Aplastamiento por caída del mueble sobre el trabajador, contusiones torácicas o craneales y atrapamiento de miembros inferiores.',
        regulation: 'Ley 31/1995 de Prevención de Riesgos Laborales (Art. 15: Principios de la acción preventiva) y Guía Técnica del INSST sobre lugares de trabajo.',
        prevention: 'Anclar sólidamente los muebles altos y archivadores a la pared, utilizar muebles con sistema antivuelco que impida la apertura de más de un cajón a la vez y colocar los documentos más pesados en los cajones inferiores.'
      },
      {
        id: 'oficina-ergonomia',
        name: 'Ergonomía deficiente y deslumbramiento visual',
        category: 'Ergonomía y Psicosociología',
        severity: 'Leve',
        rect: { left: 63, top: 38, width: 15, height: 28 },
        description: 'Silla con mecanismo lumbar roto y rueda desprendida forzando una postura asimétrica, sumada a pantalla situada frente a ventana con reflejos directos.',
        consequences: 'Trastornos musculoesqueléticos crónicos (cervicalgias, lumbalgias), fatiga visual, cefaleas e incremento de la tasa de bajas laborales.',
        regulation: 'Real Decreto 488/1997, de 14 de abril, sobre disposiciones mínimas de seguridad y salud relativas al trabajo con equipos que incluyen pantallas de visualización (PVD).',
        prevention: 'Sustituir la silla por un modelo ergonómico regulable de 5 radios (norma UNE-EN 1335), colocar la pantalla perpendicular a las ventanas y equipar estores o persianas regulables.'
      }
    ]
  },
  {
    id: 'obra',
    name: 'Obra de Construcción',
    subtitle: 'Edificación y Obra Civil',
    description: 'Entorno de obra activa con grúa torre, excavación de zanjas, andamios tubulares y distribución provisional de energía eléctrica.',
    badgeColor: 'amber',
    icon: 'hard-hat',
    timeLimit: 90,
    svgContent: svgObra.trim(),
    hazards: [
      {
        id: 'obra-casco',
        name: 'Trabajador sin casco bajo carga suspendida',
        category: 'Equipos de Protección Individual (EPIs)',
        severity: 'Muy Grave',
        rect: { left: 43, top: 48, width: 16, height: 33 },
        description: 'Operario caminando distraído con el teléfono móvil dentro del radio de giro de la grúa torre y directamente bajo la vertical de vigas de acero suspendidas, careciendo de casco de protección.',
        consequences: 'Muerte instantánea o traumatismo craneoencefálico irreversible por desprendimiento accidental de la carga o fallo del aparejo de izado.',
        regulation: 'Real Decreto 1627/1997 (Seguridad y salud en obras de construcción), RD 773/1997 (EPIs) y RD 1215/1997 (Equipos de elevación). Queda terminantemente prohibido el paso o permanencia de personas bajo cargas suspendidas.',
        prevention: 'Uso obligatorio y permanente de casco de seguridad homologado (UNE-EN 397), balizamiento del área de izado e intercomunicación de seguridad entre el operador de grúa y el señalista en tierra.'
      },
      {
        id: 'obra-andamio',
        name: 'Andamio en altura sin barandilla perimetral ni rodapié',
        category: 'Trabajos en Altura',
        severity: 'Muy Grave',
        rect: { left: 5, top: 15, width: 21, height: 30 },
        description: 'Plataforma de trabajo de andamio situada a 3,5 metros de cota sin sistema de protección perimetral: ausencia total de barandilla superior (90 cm), listón intermedio y rodapié.',
        consequences: 'Caída de personas a distinto nivel con consecuencias mortales o tetraplejia, y caída de herramientas o ladrillos sobre trabajadores en cotas inferiores.',
        regulation: 'Real Decreto 2177/2004, de 12 de noviembre, sobre trabajos temporales en altura y RD 1627/1997 (Anexo IV, Parte C). Las plataformas situadas a más de 2 metros deben contar con barandilla rígida resistente de al menos 90 cm, protección intermedia y rodapié de 15 cm.',
        prevention: 'Montaje preceptivo de barandillas normalizadas completas antes de autorizar el acceso y utilización de arnés anticaídas amarrado a línea de vida durante las labores de montaje/desmontaje.'
      },
      {
        id: 'obra-zanja',
        name: 'Zanja profunda sin señalizar, sin vallar y sin entibar',
        category: 'Excavaciones y Vaciados',
        severity: 'Muy Grave',
        rect: { left: 25, top: 76, width: 29, height: 22 },
        description: 'Excavación de más de 2 metros de profundidad con paredes verticales en tierra inestable, sin entibación ni bermas de seguridad, careciendo de vallas de cierre perimetral.',
        consequences: 'Sepultamiento y asfixia por derrumbe repentino de tierras o caída de trabajadores que circulen por el perímetro.',
        regulation: 'Real Decreto 1627/1997, Anexo IV, Parte C, Apartado 10 (Excavaciones). Toda zanja con profundidad superior a 1,30 metros debe disponer de entibación o talud adecuado y barandilla perimetral rígida a 1 metro de distancia del borde.',
        prevention: 'Instalar cajones de entibación modular metálica antes de penetrar en la excavación y vallado rígido señalizado con balizas luminosas en el perímetro exterior.'
      },
      {
        id: 'obra-cuadro',
        name: 'Cuadro eléctrico provisional abierto en charco de agua',
        category: 'Riesgo Eléctrico',
        severity: 'Muy Grave',
        rect: { left: 77, top: 62, width: 17, height: 29 },
        description: 'Cuadro de distribución provisional de obra con la puerta abierta de par en par, cableado pelado expuesto y patas sumergidas en un gran charco de agua de lluvia.',
        consequences: 'Electrocución por contacto directo o indirecto, arco eléctrico explosivo y derivaciones de corriente a través del agua circundante.',
        regulation: 'Real Decreto 614/2001 e Instrucción Técnica Complementaria ITC-BT-33 del Reglamento Electrotécnico para Baja Tensión (Instalaciones provisionales y temporales de obras).',
        prevention: 'Emplear armarios con índice de estanqueidad mínimo IP44 (IP55 en intemperie), mantener puertas cerradas con llave, elevar el cuadro fuera de zonas inundables e instalar interruptores diferenciales de alta sensibilidad (30 mA).'
      },
      {
        id: 'obra-escalera',
        name: 'Escalera de mano asentada sobre bidones inestables',
        category: 'Trabajos en Altura',
        severity: 'Grave',
        rect: { left: 63, top: 33, width: 14, height: 36 },
        description: 'Escalera de mano apoyada sobre la superficie deformada de dos bidones de aceite en lugar de asentar sobre base firme y plana.',
        consequences: 'Deslizamiento, vuelco y caída a distinto nivel con traumatismos graves en extremidades y columna.',
        regulation: 'Real Decreto 2177/2004 (Anexo). "Las escaleras de mano se colocarán de manera que su estabilidad durante su utilización esté asegurada, disponiendo de zapatas antideslizantes sobre suelos horizontales y rígidos".',
        prevention: 'Prohibir taxativamente cualquier calzo o suplemento precario; apoyar la escalera en terreno compactado y nivelado o sustituirla por una torre móvil de trabajo con estabilizadores.'
      }
    ]
  },
  {
    id: 'almacen',
    name: 'Almacén Logístico',
    subtitle: 'Distribución y Manipulación de Cargas',
    description: 'Nave logística con estanterías industriales de paletización, tráfico de carretillas elevadoras, manipulación manual y vías de evacuación.',
    badgeColor: 'emerald',
    icon: 'truck',
    timeLimit: 90,
    svgContent: svgAlmacen.trim(),
    hazards: [
      {
        id: 'almacen-palet',
        name: 'Palet superior deformado y carga inestable en altura',
        category: 'Almacenamiento y Estanterías',
        severity: 'Muy Grave',
        rect: { left: 7, top: 11, width: 23, height: 29 },
        description: 'Palet con traviesas de madera rotas situado a gran altura (Nivel 3), con cajas desalineadas, flejes rotos y bultos asomando peligrosamente sobre el pasillo de paso.',
        consequences: 'Aplastamiento letal de carretilleros o peatones por caída libre de bultos pesados desde gran altura.',
        regulation: 'Norma UNE-EN 15635 (Almacenaje en estanterías metálicas: Uso y mantenimiento del equipo) y Real Decreto 1215/1997. Obligación de inspecciones técnicas periódicas y retirada inmediata de unidades de carga inestables.',
        prevention: 'Rechazar palets deteriorados, asegurar la carga mediante enfardado completo con film extensible o flejado cruzado, e instalar mallas dorsales anticaída en las estanterías colindantes con vías de paso.'
      },
      {
        id: 'almacen-aceite',
        name: 'Derrame de aceite hidráulico en pasillo de circulación',
        category: 'Orden y Limpieza',
        severity: 'Grave',
        rect: { left: 36, top: 75, width: 22, height: 19 },
        description: 'Gran mancha de fluido oleoso resbaladizo en mitad del pasillo mixto de carretillas y operarios, sin acotar ni señalizar.',
        consequences: 'Pérdida de tracción y vuelco de carretillas elevadoras en frenadas, atropellos a transeúntes y resbalones con caídas de peatones.',
        regulation: 'Real Decreto 486/1997, Anexo I, Apartado 3. Los suelos de los lugares de trabajo deberán estar exentos de sustancias grasas o resbaladizas y limpiarse inmediatamente ante cualquier vertido.',
        prevention: 'Protocolo inmediato de actuación ante derrames: balizar la zona con conos de advertencia, verter sepiolita o absorbente mineral neutralizante y retirar los residuos a contenedor autorizado.'
      },
      {
        id: 'almacen-carretilla',
        name: 'Carretilla con horquillas elevadas y llave en contacto',
        category: 'Equipos de Trabajo',
        severity: 'Muy Grave',
        rect: { left: 55, top: 51, width: 23, height: 35 },
        description: 'Carretilla elevadora estacionada en mitad del pasillo con el conductor ausente, las horquillas izadas a 1,8 metros de altura y la llave de arranque puesta en el contacto.',
        consequences: 'Empalamiento de transeúntes contra las horquillas elevadas a la altura de la cabeza, pérdida de estabilidad de la máquina y uso no autorizado por personal no cualificado.',
        regulation: 'Real Decreto 1215/1997 (Equipos de trabajo automotores) y NTP 715 del INSST. Al estacionar una carretilla, es preceptivo descender las horquillas completamente al nivel del suelo, aplicar el freno de estacionamiento y retirar la llave de contacto.',
        prevention: 'Instrucción operativa obligatoria a operadores de carretillas: estacionar exclusivamente en zonas habilitadas, descender horquillas a ras de suelo y retirar siempre la llave de arranque.'
      },
      {
        id: 'almacen-salida',
        name: 'Salida de emergencia bloqueada por europalets',
        category: 'Vías y Salidas de Evacuación',
        severity: 'Muy Grave',
        rect: { left: 78, top: 24, width: 17, height: 42 },
        description: 'Pila de 6 europalets de madera depositados directamente frente a las hojas de la puerta de emergencia y sobre la barra antipánico.',
        consequences: 'Imposibilidad de evacuación del personal en caso de incendio o escape químico, provocando situaciones de pánico colectivo y víctimas por asfixia.',
        regulation: 'Real Decreto 486/1997, Anexo I, Apartado 10 (Vías y salidas de evacuación) y Código Técnico de la Edificación (DB-SI). Las salidas de emergencia deberán permanecer expeditas y libres de todo obstáculo en todo momento.',
        prevention: 'Prohibición absoluta y vigilada de acopio en vías de evacuación, señalización en el suelo con franjas diagonales amarillas/negras de "Zona despejada obligatoria" y auditorías de seguridad diarias.'
      },
      {
        id: 'almacen-sobreesfuerzo',
        name: 'Manipulación manual de carga pesada con técnica incorrecta',
        category: 'Ergonomía',
        severity: 'Grave',
        rect: { left: 18, top: 55, width: 17, height: 34 },
        description: 'Operario levantando individualmente una caja de 40 kg con las piernas estiradas y curvando bruscamente la columna vertebral a 90 grados.',
        consequences: 'Hernias discales lumbares, lumbalgias agudas incapacitantes, roturas musculares y bajas de larga duración.',
        regulation: 'Real Decreto 487/1997, de 14 de abril, sobre disposiciones mínimas de seguridad y salud relativas a la manipulación manual de cargas. Límite máximo general recomendado: 25 kg en condiciones ideales (15 kg para mayor protección). Cargas superiores exigen medios mecánicos o manipulación en equipo.',
        prevention: 'Suministrar y utilizar medios auxiliares de transporte mecánico (traspalés, carretillas de mano o mesas elevadoras) y adiestrar a la plantilla en la técnica ergonómica de levantamiento (flexionar rodillas, espalda recta y carga pegada al cuerpo).'
      }
    ]
  }
];

const fileContent = `/**
 * BANCO DE DATOS DE ESCENARIOS Y PELIGROS DE PRL
 * Generado de forma autónoma con geometrías vectoriales SVG integradas y normativas oficiales.
 */
window.PRL_SCENARIOS = ${JSON.stringify(scenariosData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'scenarios.js'), fileContent, 'utf-8');
console.log('scenarios.js generated successfully!');
