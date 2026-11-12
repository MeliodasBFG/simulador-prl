/**
 * BANCO DE DATOS DE ESCENARIOS Y PELIGROS DE PRL - 8 ESCENARIOS MULTIPLATAFORMA
 * Generado de forma autónoma con geometrías vectoriales SVG integradas y normativas oficiales.
 */
window.PRL_SCENARIOS = [
  {
    "id": "oficina",
    "name": "Oficina y Despachos",
    "subtitle": "Administración y Gestión Corporativa",
    "description": "Espacio de trabajo administrativo común con equipos ofimáticos, zonas de tránsito, archivadores y medios de protección.",
    "badgeColor": "sky",
    "icon": "briefcase",
    "timeLimit": 90,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"wallGradOfi\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n    <linearGradient id=\"floorGradOfi\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"deskGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#cbd5e1\"/>\n    </linearGradient>\n    <linearGradient id=\"spillGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#5a2e12\"/>\n      <stop offset=\"100%\" stop-color=\"#2c1407\"/>\n    </linearGradient>\n    <filter id=\"shadowOfi\" x=\"-10%\" y=\"-10%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"2\" dy=\"4\" stdDeviation=\"4\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <!-- Pared de Fondo -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#wallGradOfi)\"/>\n  \n  <!-- Ventana con vistas al exterior -->\n  <g transform=\"translate(420, 40)\">\n    <rect width=\"160\" height=\"130\" rx=\"4\" fill=\"#60a5fa\" opacity=\"0.3\"/>\n    <rect width=\"160\" height=\"130\" rx=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"6\"/>\n    <line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"65\" x2=\"160\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <!-- Nubes/sol exterior -->\n    <circle cx=\"120\" cy=\"40\" r=\"18\" fill=\"#fef08a\" opacity=\"0.8\"/>\n  </g>\n\n  <!-- Cartel PRL en pared -->\n  <g transform=\"translate(640, 50)\" filter=\"url(#shadowOfi)\">\n    <rect width=\"130\" height=\"85\" rx=\"4\" fill=\"#ffffff\"/>\n    <rect width=\"130\" height=\"22\" rx=\"4\" fill=\"#0284c7\"/>\n    <text x=\"65\" y=\"16\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">POLÍTICA DE PRL</text>\n    <text x=\"65\" y=\"44\" fill=\"#0f172a\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">¡LA SEGURIDAD</text>\n    <text x=\"65\" y=\"58\" fill=\"#0f172a\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">ES COSA DE TODOS!</text>\n    <path d=\"M65 64 L75 80 L55 80 Z\" fill=\"#10b981\"/>\n  </g>\n\n  <!-- Pizarra blanca en pared izquierda -->\n  <g transform=\"translate(70, 50)\" filter=\"url(#shadowOfi)\">\n    <rect width=\"130\" height=\"90\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n    <text x=\"12\" y=\"24\" fill=\"#475569\" font-size=\"10\" font-weight=\"bold\">PLAN TRIMESTRAL</text>\n    <line x1=\"12\" y1=\"36\" x2=\"100\" y2=\"36\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"12\" y1=\"48\" x2=\"80\" y2=\"48\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"12\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#cbd5e1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Suelo de la oficina con zócalo -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#floorGradOfi)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <!-- Líneas de baldosas en perspectiva -->\n  <g stroke=\"#334155\" stroke-width=\"1.5\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"340\" x2=\"1000\" y2=\"340\"/>\n    <line x1=\"0\" y1=\"410\" x2=\"1000\" y2=\"410\"/>\n    <line x1=\"0\" y1=\"490\" x2=\"1000\" y2=\"490\"/>\n    <line x1=\"0\" y1=\"580\" x2=\"1000\" y2=\"580\"/>\n    <line x1=\"150\" y1=\"340\" x2=\"0\" y2=\"600\"/>\n    <line x1=\"350\" y1=\"340\" x2=\"200\" y2=\"600\"/>\n    <line x1=\"550\" y1=\"340\" x2=\"480\" y2=\"600\"/>\n    <line x1=\"750\" y1=\"340\" x2=\"780\" y2=\"600\"/>\n    <line x1=\"900\" y1=\"340\" x2=\"1000\" y2=\"550\"/>\n  </g>\n\n  <!-- PELIGRO 4: Archivador metálico volcando (x: 240 to 350, y: 140 to 320) -->\n  <g id=\"danger-archivador\" transform=\"translate(250, 140) rotate(8, 50, 160)\" filter=\"url(#shadowOfi)\" class=\"cursor-pointer\">\n    <!-- Cuerpo del archivador inclinado hacia adelante -->\n    <rect width=\"85\" height=\"175\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Cajones abiertos al límite sobresaliendo -->\n    <g transform=\"translate(-25, 12)\">\n      <rect width=\"105\" height=\"34\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"35\" y=\"12\" width=\"30\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n      <!-- Carpetas desbordando -->\n      <path d=\"M10 8 L30 2 L50 8 Z\" fill=\"#f59e0b\"/>\n      <path d=\"M45 8 L65 3 L85 8 Z\" fill=\"#ef4444\"/>\n    </g>\n    <g transform=\"translate(-22, 54)\">\n      <rect width=\"102\" height=\"34\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"35\" y=\"12\" width=\"30\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n    </g>\n    <g transform=\"translate(-16, 96)\">\n      <rect width=\"96\" height=\"34\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"35\" y=\"12\" width=\"30\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n    </g>\n    <!-- Cajón inferior cerrado -->\n    <g transform=\"translate(4, 138)\">\n      <rect width=\"77\" height=\"32\" rx=\"2\" fill=\"#475569\"/>\n      <rect x=\"25\" y=\"10\" width=\"26\" height=\"5\" rx=\"2\" fill=\"#1e293b\"/>\n    </g>\n    <!-- Alerta visual sutil -->\n    <circle cx=\"-10\" cy=\"18\" r=\"7\" fill=\"#ef4444\" opacity=\"0.8\"/>\n    <text x=\"-10\" y=\"22\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n  </g>\n\n  <!-- PELIGRO 3: Extintor bloqueado por cajas de archivo (x: 790 to 940, y: 160 to 420) -->\n  <g id=\"danger-extintor\" class=\"cursor-pointer\">\n    <!-- Soporte y Extintor mural (Fondo) -->\n    <g transform=\"translate(835, 170)\">\n      <!-- Señal fotoluminiscente EXTINTOR -->\n      <rect x=\"-5\" y=\"-35\" width=\"60\" height=\"26\" rx=\"3\" fill=\"#dc2626\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"25\" y=\"-18\" fill=\"#ffffff\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">EXTINTOR</text>\n      <!-- Cilindro rojo -->\n      <rect x=\"5\" y=\"0\" width=\"40\" height=\"95\" rx=\"14\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <!-- Manómetro y boquilla -->\n      <rect x=\"18\" y=\"-12\" width=\"14\" height=\"12\" fill=\"#64748b\"/>\n      <circle cx=\"25\" cy=\"-16\" r=\"6\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n      <path d=\"M32 -8 Q45 -5 45 40 L40 60\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <rect x=\"10\" y=\"30\" width=\"30\" height=\"25\" fill=\"#ffffff\" opacity=\"0.9\"/>\n      <text x=\"25\" y=\"46\" fill=\"#dc2626\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">ABC</text>\n    </g>\n\n    <!-- Pila de cajas bloqueando el extintor por delante -->\n    <g transform=\"translate(800, 220)\" filter=\"url(#shadowOfi)\">\n      <!-- Caja superior inestable -->\n      <g transform=\"translate(8, 0) rotate(-6)\">\n        <rect width=\"105\" height=\"55\" rx=\"3\" fill=\"#d97706\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <line x1=\"0\" y1=\"27\" x2=\"105\" y2=\"27\" stroke=\"#92400e\" stroke-width=\"2\"/>\n        <rect x=\"15\" y=\"10\" width=\"45\" height=\"18\" fill=\"#fef3c7\"/>\n        <text x=\"37\" y=\"22\" fill=\"#92400e\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">FACTURAS</text>\n      </g>\n      <!-- Caja intermedia 1 -->\n      <g transform=\"translate(0, 50)\">\n        <rect width=\"118\" height=\"60\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n        <line x1=\"0\" y1=\"30\" x2=\"118\" y2=\"30\" stroke=\"#78350f\" stroke-width=\"2\"/>\n        <rect x=\"25\" y=\"12\" width=\"55\" height=\"18\" fill=\"#fef3c7\"/>\n        <text x=\"52\" y=\"24\" fill=\"#78350f\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">ARCHIVOS 2021</text>\n      </g>\n      <!-- Caja intermedia 2 -->\n      <g transform=\"translate(-10, 105)\">\n        <rect width=\"130\" height=\"65\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n        <line x1=\"0\" y1=\"32\" x2=\"130\" y2=\"32\" stroke=\"#92400e\" stroke-width=\"2\"/>\n        <rect x=\"30\" y=\"12\" width=\"65\" height=\"18\" fill=\"#fef3c7\"/>\n        <text x=\"62\" y=\"24\" fill=\"#92400e\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">EXPEDIENTES</text>\n      </g>\n      <!-- Caja base en el suelo -->\n      <g transform=\"translate(-15, 165)\">\n        <rect width=\"145\" height=\"70\" rx=\"3\" fill=\"#92400e\" stroke=\"#78350f\" stroke-width=\"2\"/>\n        <text x=\"72\" y=\"38\" fill=\"#fef3c7\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PAPEL TRITURAR</text>\n      </g>\n    </g>\n  </g>\n\n  <!-- PUESTO DE TRABAJO 1 (IZQUIERDA) -->\n  <g transform=\"translate(60, 320)\" filter=\"url(#shadowOfi)\">\n    <!-- Mesa -->\n    <rect x=\"0\" y=\"40\" width=\"240\" height=\"16\" rx=\"3\" fill=\"url(#deskGrad)\"/>\n    <!-- Patas metálicas -->\n    <rect x=\"15\" y=\"56\" width=\"12\" height=\"120\" fill=\"#475569\"/>\n    <rect x=\"215\" y=\"56\" width=\"12\" height=\"120\" fill=\"#475569\"/>\n    \n    <!-- Monitor principal -->\n    <rect x=\"80\" y=\"-45\" width=\"85\" height=\"60\" rx=\"3\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"84\" y=\"-41\" width=\"77\" height=\"52\" fill=\"#0284c7\"/>\n    <rect x=\"115\" y=\"15\" width=\"15\" height=\"25\" fill=\"#475569\"/>\n    <rect x=\"100\" y=\"38\" width=\"45\" height=\"4\" rx=\"2\" fill=\"#334155\"/>\n\n    <!-- Teclado y ratón -->\n    <rect x=\"85\" y=\"43\" width=\"55\" height=\"8\" rx=\"2\" fill=\"#334155\"/>\n    <ellipse cx=\"155\" cy=\"47\" rx=\"5\" ry=\"4\" fill=\"#334155\"/>\n\n    <!-- Torre PC bajo mesa -->\n    <rect x=\"35\" y=\"70\" width=\"35\" height=\"75\" rx=\"3\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- PELIGRO 2: Taza de café derramada junto a regleta eléctrica (x: 110 to 240, y: 360 to 470) -->\n  <g id=\"danger-cafe\" transform=\"translate(115, 365)\" class=\"cursor-pointer\" filter=\"url(#shadowOfi)\">\n    <!-- Regleta eléctrica blanca en el suelo/bajo mesa -->\n    <g transform=\"translate(30, 48)\">\n      <rect width=\"80\" height=\"24\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <!-- 4 tomas de corriente -->\n      <circle cx=\"16\" cy=\"12\" r=\"6\" fill=\"#cbd5e1\"/>\n      <circle cx=\"34\" cy=\"12\" r=\"6\" fill=\"#cbd5e1\"/>\n      <circle cx=\"52\" cy=\"12\" r=\"6\" fill=\"#cbd5e1\"/>\n      <circle cx=\"70\" cy=\"12\" r=\"6\" fill=\"#cbd5e1\"/>\n      <!-- Clavijas conectadas -->\n      <rect x=\"11\" y=\"6\" width=\"10\" height=\"12\" rx=\"2\" fill=\"#0f172a\"/>\n      <rect x=\"29\" y=\"6\" width=\"10\" height=\"12\" rx=\"2\" fill=\"#475569\"/>\n      <!-- Indicador luminoso de encendido -->\n      <circle cx=\"4\" cy=\"12\" r=\"2.5\" fill=\"#ef4444\"/>\n    </g>\n\n    <!-- Taza de café volcada -->\n    <g transform=\"translate(0, 36) rotate(65)\">\n      <rect width=\"22\" height=\"28\" rx=\"3\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"1.5\"/>\n      <path d=\"M22 6 Q30 14 22 22\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n    </g>\n\n    <!-- Charco de café líquido fluyendo directamente hacia la regleta -->\n    <path d=\"M25 58 Q45 50 65 58 Q95 55 110 65 Q95 76 65 74 Q35 76 25 58 Z\" fill=\"url(#spillGrad)\" opacity=\"0.9\"/>\n    \n    <!-- Chispas eléctricas amarillas sobre los enchufes -->\n    <path d=\"M72 45 L76 38 L82 42 L88 32 L84 46 Z\" fill=\"#eab308\" stroke=\"#ca8a04\" stroke-width=\"1\"/>\n    <path d=\"M95 48 L100 40 L106 45 Z\" fill=\"#eab308\"/>\n    <circle cx=\"85\" cy=\"40\" r=\"3\" fill=\"#fef08a\" opacity=\"0.8\"/>\n  </g>\n\n  <!-- PUESTO DE TRABAJO 2 Y PELIGRO 5: Ergonomía deficiente (x: 630 to 770, y: 240 to 400) -->\n  <g id=\"danger-ergonomia\" class=\"cursor-pointer\" filter=\"url(#shadowOfi)\">\n    <!-- Mesa derecha -->\n    <g transform=\"translate(630, 320)\">\n      <rect x=\"0\" y=\"40\" width=\"160\" height=\"16\" rx=\"3\" fill=\"url(#deskGrad)\"/>\n      <rect x=\"15\" y=\"56\" width=\"12\" height=\"120\" fill=\"#475569\"/>\n      <rect x=\"135\" y=\"56\" width=\"12\" height=\"120\" fill=\"#475569\"/>\n      <!-- Portátil abierto en ángulo incómodo y bajo -->\n      <rect x=\"35\" y=\"20\" width=\"55\" height=\"35\" rx=\"2\" fill=\"#0f172a\" transform=\"rotate(-15, 60, 35)\"/>\n      <rect x=\"37\" y=\"22\" width=\"51\" height=\"30\" fill=\"#38bdf8\" transform=\"rotate(-15, 60, 35)\"/>\n      <rect x=\"30\" y=\"44\" width=\"65\" height=\"8\" rx=\"2\" fill=\"#475569\"/>\n      \n      <!-- Flechas de reflejo/deslumbramiento de ventana a pantalla -->\n      <path d=\"M-40 -40 L25 15\" stroke=\"#fef08a\" stroke-width=\"3\" stroke-dasharray=\"4\" marker-end=\"url(#arrow)\"/>\n      <text x=\"-5\" y=\"-10\" fill=\"#fef08a\" font-size=\"8\" font-weight=\"bold\">DESLUMBRAMIENTO</text>\n    </g>\n\n    <!-- Silla de oficina rota y desajustada -->\n    <g transform=\"translate(670, 310)\">\n      <!-- Respaldo inclinado hacia atrás en ángulo lesivo -->\n      <rect x=\"5\" y=\"-30\" width=\"40\" height=\"55\" rx=\"8\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"2\" transform=\"rotate(22, 25, 20)\"/>\n      <!-- Asiento hundido -->\n      <ellipse cx=\"25\" cy=\"38\" rx=\"26\" ry=\"12\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n      <!-- Reposabrazos roto (uno ausente, uno caído) -->\n      <path d=\"M-2 18 L-2 36 L10 36\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <!-- Pistón y base -->\n      <rect x=\"22\" y=\"48\" width=\"6\" height=\"35\" fill=\"#475569\"/>\n      <!-- Ruedas (una desprendida) -->\n      <path d=\"M5 83 L45 83\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <circle cx=\"5\" cy=\"86\" r=\"4\" fill=\"#0f172a\"/>\n      <circle cx=\"45\" cy=\"86\" r=\"4\" fill=\"#0f172a\"/>\n      <!-- Rueda rota en suelo -->\n      <circle cx=\"60\" cy=\"87\" r=\"4\" fill=\"#ef4444\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 1: Cables cruzados en el pasillo principal (x: 360 to 620, y: 450 to 560) -->\n  <g id=\"danger-cables\" class=\"cursor-pointer\" filter=\"url(#shadowOfi)\">\n    <!-- Serpentín desordenado de cables sin pasacables homologado -->\n    <path d=\"M350 490 C 400 460, 440 550, 490 480 S 560 540, 630 485\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <path d=\"M350 515 C 390 535, 430 460, 485 530 S 550 470, 630 510\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <path d=\"M365 480 C 420 545, 465 475, 520 535 S 580 490, 620 530\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <path d=\"M380 530 C 430 490, 490 560, 540 500 S 600 520, 630 495\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    \n    <!-- Lazo elevado donde se tropieza un zapato -->\n    <ellipse cx=\"490\" cy=\"495\" rx=\"14\" ry=\"18\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\" transform=\"rotate(-20, 490, 495)\"/>\n    <path d=\"M480 480 Q495 460 510 480\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"6\"/>\n\n    <!-- Silueta de peligro de tropiezo -->\n    <g transform=\"translate(470, 440)\">\n      <polygon points=\"20,0 40,34 0,34\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <text x=\"20\" y=\"27\" fill=\"#000000\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "oficina-cables",
        "name": "Cables sueltos cruzando zona de paso",
        "category": "Orden y Limpieza",
        "severity": "Grave",
        "rect": {
          "left": 35,
          "top": 74,
          "width": 28,
          "height": 20
        },
        "description": "Múltiples cables de alimentación y red cruzando libremente el suelo en el pasillo principal entre mesas sin protección ni fijación, formando bucles y elevaciones.",
        "consequences": "Tropiezos, caídas al mismo nivel con contusiones o fracturas óseas, y desconexiones bruscas de equipos con daños materiales.",
        "regulation": "Real Decreto 486/1997, de 14 de abril, sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo (Anexo I, Apartado 3: \"Las zonas de paso y pasillos deberán permanecer expeditos y los suelos limpios de obstáculos que puedan provocar caídas o tropiezos\").",
        "prevention": "Canalizar el cableado mediante pasacables de suelo homologados de goma biselada, canaletas perimetrales o cajas de conexiones empotradas en suelo técnico."
      },
      {
        "id": "oficina-cafe",
        "name": "Líquidos derramados junto a regleta eléctrica",
        "category": "Riesgo Eléctrico",
        "severity": "Muy Grave",
        "rect": {
          "left": 11,
          "top": 58,
          "width": 15,
          "height": 19
        },
        "description": "Taza de café volcada cuyo líquido discurre directamente hacia una regleta multitoma con múltiples clavijas conectadas bajo tensión.",
        "consequences": "Cortocircuito, riesgo de electrocución por contacto indirecto a través del líquido conductor e ignición/conato de incendio eléctrico.",
        "regulation": "Real Decreto 614/2001, de 8 de junio, sobre protección frente al riesgo eléctrico (Disposiciones generales) y RD 486/1997. Prohibición estricta de manipular o derramar líquidos en proximidades inmediatas de elementos energizados.",
        "prevention": "Separar taxativamente los recipientes de bebidas de las tomas eléctricas, elevar las regletas en bandejas suspendidas bajo el tablero de la mesa y emplear vasos con tapa hermética."
      },
      {
        "id": "oficina-extintor",
        "name": "Extintor de incendios bloqueado por cajas",
        "category": "Protección contra Incendios",
        "severity": "Muy Grave",
        "rect": {
          "left": 78,
          "top": 25,
          "width": 17,
          "height": 45
        },
        "description": "Pila de cuatro cajas de archivo pesadas acumuladas directamente delante del extintor hídrico/ABC mural, ocultando su visibilidad y bloqueando su retirada.",
        "consequences": "Imposibilidad de intervenir con rapidez ante un amago de fuego, propagación descontrolada de las llamas y riesgo de asfixia o atrapamiento del personal.",
        "regulation": "Real Decreto 513/2017 (Reglamento de instalaciones de protección contra incendios, RIPCI) y RD 486/1997 (Anexo I, Apartado 10). \"Los medios manuales de extinción deben estar permanentemente señalizados, accesibles y libres de obstáculos en un perímetro de 1 metro\".",
        "prevention": "Despejar de inmediato el frente del extintor, delimitar una zona de seguridad en el suelo con franjas amarillas y negras de prohibición de depósito de material."
      },
      {
        "id": "oficina-archivador",
        "name": "Archivador inestable con cajones abiertos (Riesgo de vuelco)",
        "category": "Seguridad en el Trabajo",
        "severity": "Grave",
        "rect": {
          "left": 23,
          "top": 21,
          "width": 13,
          "height": 32
        },
        "description": "Mueble archivador metálico con los tres cajones superiores extraídos simultáneamente al máximo, desplazando el centro de gravedad e iniciando el vuelco hacia adelante.",
        "consequences": "Aplastamiento por caída del mueble sobre el trabajador, contusiones torácicas o craneales y atrapamiento de miembros inferiores.",
        "regulation": "Ley 31/1995 de Prevención de Riesgos Laborales (Art. 15: Principios de la acción preventiva) y Guía Técnica del INSST sobre lugares de trabajo.",
        "prevention": "Anclar sólidamente los muebles altos y archivadores a la pared, utilizar muebles con sistema antivuelco que impida la apertura de más de un cajón a la vez y colocar los documentos más pesados en los cajones inferiores."
      },
      {
        "id": "oficina-ergonomia",
        "name": "Ergonomía deficiente y deslumbramiento visual",
        "category": "Ergonomía y Psicosociología",
        "severity": "Leve",
        "rect": {
          "left": 63,
          "top": 38,
          "width": 15,
          "height": 28
        },
        "description": "Silla con mecanismo lumbar roto y rueda desprendida forzando una postura asimétrica, sumada a pantalla situada frente a ventana con reflejos directos.",
        "consequences": "Trastornos musculoesqueléticos crónicos (cervicalgias, lumbalgias), fatiga visual, cefaleas e incremento de la tasa de bajas laborales.",
        "regulation": "Real Decreto 488/1997, de 14 de abril, sobre disposiciones mínimas de seguridad y salud relativas al trabajo con equipos que incluyen pantallas de visualización (PVD).",
        "prevention": "Sustituir la silla por un modelo ergonómico regulable de 5 radios (norma UNE-EN 1335), colocar la pantalla perpendicular a las ventanas y equipar estores o persianas regulables."
      }
    ]
  },
  {
    "id": "obra",
    "name": "Obra de Construcción",
    "subtitle": "Edificación y Obra Civil",
    "description": "Entorno de obra activa con grúa torre, excavación de zanjas, andamios tubulares y distribución provisional de energía eléctrica.",
    "badgeColor": "amber",
    "icon": "hard-hat",
    "timeLimit": 90,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"skyGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#38bdf8\"/>\n      <stop offset=\"60%\" stop-color=\"#bae6fd\"/>\n      <stop offset=\"100%\" stop-color=\"#e0f2fe\"/>\n    </linearGradient>\n    <linearGradient id=\"dirtGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"40%\" stop-color=\"#451a03\"/>\n      <stop offset=\"100%\" stop-color=\"#271002\"/>\n    </linearGradient>\n    <linearGradient id=\"concreteGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"50%\" stop-color=\"#cbd5e1\"/>\n      <stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n    <filter id=\"shadowObra\">\n      <feDropShadow dx=\"2\" dy=\"5\" stdDeviation=\"4\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n\n  <!-- Cielo de obra -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"420\" fill=\"url(#skyGrad)\"/>\n\n  <!-- Estructura del edificio en construcción (Hormigón y forjados) -->\n  <g transform=\"translate(180, 80)\">\n    <!-- Pilares de hormigón armado -->\n    <rect x=\"0\" y=\"0\" width=\"30\" height=\"340\" fill=\"url(#concreteGrad)\"/>\n    <rect x=\"180\" y=\"0\" width=\"30\" height=\"340\" fill=\"url(#concreteGrad)\"/>\n    <rect x=\"360\" y=\"0\" width=\"30\" height=\"340\" fill=\"url(#concreteGrad)\"/>\n    <!-- Forjados/losas -->\n    <rect x=\"-20\" y=\"40\" width=\"430\" height=\"24\" fill=\"#64748b\"/>\n    <rect x=\"-20\" y=\"160\" width=\"430\" height=\"24\" fill=\"#64748b\"/>\n    <rect x=\"-20\" y=\"280\" width=\"430\" height=\"24\" fill=\"#64748b\"/>\n    <!-- Mallazo y ferralla saliente (armadura de espera) -->\n    <path d=\"M5 -15 L5 0 M15 -20 L15 0 M25 -15 L25 0\" stroke=\"#f59e0b\" stroke-width=\"4\"/>\n    <path d=\"M185 -20 L185 0 M195 -15 L195 0 M205 -20 L205 0\" stroke=\"#f59e0b\" stroke-width=\"4\"/>\n    <path d=\"M365 -15 L365 0 M375 -20 L375 0 M385 -15 L385 0\" stroke=\"#f59e0b\" stroke-width=\"4\"/>\n    <!-- Pared de ladrillo a medio levantar -->\n    <g fill=\"#ea580c\" stroke=\"#9a3412\" stroke-width=\"1\">\n      <rect x=\"30\" y=\"184\" width=\"35\" height=\"18\"/>\n      <rect x=\"65\" y=\"184\" width=\"35\" height=\"18\"/>\n      <rect x=\"100\" y=\"184\" width=\"35\" height=\"18\"/>\n      <rect x=\"135\" y=\"184\" width=\"45\" height=\"18\"/>\n      <rect x=\"30\" y=\"202\" width=\"45\" height=\"18\"/>\n      <rect x=\"75\" y=\"202\" width=\"35\" height=\"18\"/>\n      <rect x=\"110\" y=\"202\" width=\"35\" height=\"18\"/>\n      <rect x=\"145\" y=\"202\" width=\"35\" height=\"18\"/>\n    </g>\n  </g>\n\n  <!-- Grúa torre en la parte superior -->\n  <g transform=\"translate(350, 15)\">\n    <!-- Mástil vertical superior -->\n    <rect x=\"230\" y=\"0\" width=\"22\" height=\"100\" fill=\"#eab308\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n    <!-- Celosía metálica -->\n    <path d=\"M230 10 L252 30 M252 10 L230 30 M230 30 L252 50 M252 30 L230 50\" stroke=\"#a16207\" stroke-width=\"2\"/>\n    <!-- Pluma horizontal -->\n    <rect x=\"-180\" y=\"20\" width=\"550\" height=\"18\" fill=\"#eab308\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n    <path d=\"M-180 20 L370 20\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <!-- Carro de la grúa y cable -->\n    <rect x=\"130\" y=\"38\" width=\"28\" height=\"14\" fill=\"#0f172a\"/>\n    <line x1=\"144\" y1=\"52\" x2=\"144\" y2=\"230\" stroke=\"#334155\" stroke-width=\"3\"/>\n    <!-- Gancho con polea -->\n    <circle cx=\"144\" cy=\"235\" r=\"7\" fill=\"#64748b\"/>\n    <path d=\"M144 242 Q144 258 152 258 Q160 258 160 250\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n    \n    <!-- Carga suspendida pesada (Vigas de acero oscilando sobre la zona) -->\n    <g transform=\"translate(90, 255)\" filter=\"url(#shadowObra)\">\n      <rect width=\"110\" height=\"26\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n      <line x1=\"0\" y1=\"13\" x2=\"110\" y2=\"13\" stroke=\"#1e40af\" stroke-width=\"4\"/>\n      <!-- Eslingas textiles de amarre -->\n      <line x1=\"54\" y1=\"-10\" x2=\"15\" y2=\"0\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n      <line x1=\"54\" y1=\"-10\" x2=\"95\" y2=\"0\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 2: Andamio sin barandilla perimetral ni rodapié (x: 60 to 250, y: 100 to 270) -->\n  <g id=\"danger-andamio\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <!-- Estructura tubular del andamio -->\n    <g stroke=\"#64748b\" stroke-width=\"4\">\n      <line x1=\"70\" y1=\"80\" x2=\"70\" y2=\"440\"/>\n      <line x1=\"230\" y1=\"80\" x2=\"230\" y2=\"440\"/>\n      <!-- Crucetas de San Andrés -->\n      <line x1=\"70\" y1=\"240\" x2=\"230\" y2=\"380\" stroke-width=\"2.5\"/>\n      <line x1=\"230\" y1=\"240\" x2=\"70\" y2=\"380\" stroke-width=\"2.5\"/>\n      <line x1=\"70\" y1=\"100\" x2=\"230\" y2=\"240\" stroke-width=\"2.5\"/>\n      <line x1=\"230\" y1=\"100\" x2=\"70\" y2=\"240\" stroke-width=\"2.5\"/>\n    </g>\n    <!-- Plataforma de trabajo de tablones de madera en altura -->\n    <rect x=\"60\" y=\"215\" width=\"180\" height=\"16\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n    \n    <!-- Trabajador en el andamio al borde del abismo (sin barandilla) -->\n    <g transform=\"translate(130, 130)\">\n      <!-- Cuerpo operario -->\n      <circle cx=\"20\" cy=\"15\" r=\"11\" fill=\"#fed7aa\"/>\n      <path d=\"M10 8 Q20 2 30 8 L32 15 L8 15 Z\" fill=\"#ffffff\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <!-- Casco blanco -->\n      <rect x=\"10\" y=\"27\" width=\"20\" height=\"35\" rx=\"3\" fill=\"#ea580c\"/> <!-- Chaleco naranja -->\n      <line x1=\"10\" y1=\"38\" x2=\"-2\" y2=\"52\" stroke=\"#ea580c\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <line x1=\"30\" y1=\"38\" x2=\"42\" y2=\"52\" stroke=\"#ea580c\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <rect x=\"12\" y=\"62\" width=\"7\" height=\"25\" fill=\"#1e293b\"/> <!-- Pantalón -->\n      <rect x=\"21\" y=\"62\" width=\"7\" height=\"25\" fill=\"#1e293b\"/>\n      <!-- Paleta y ladrillo en mano -->\n      <rect x=\"42\" y=\"48\" width=\"14\" height=\"8\" fill=\"#c2410c\"/>\n    </g>\n\n    <!-- AUSENCIA CLARA DE BARANDILLAS: Señales de advertencia punteadas en el vacío -->\n    <line x1=\"60\" y1=\"165\" x2=\"240\" y2=\"165\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"6 6\"/>\n    <text x=\"150\" y=\"160\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">SIN BARANDILLA (90cm)</text>\n    <rect x=\"60\" y=\"208\" width=\"180\" height=\"7\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n    <text x=\"150\" y=\"204\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">SIN RODAPIÉ (15cm)</text>\n  </g>\n\n  <!-- PELIGRO 5: Escalera de mano apoyada sobre bidones inestables (x: 640 to 760, y: 210 to 420) -->\n  <g id=\"danger-escalera\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <!-- Bidones de 200L oxidados y abollados como base precaria -->\n    <g transform=\"translate(650, 360)\">\n      <rect x=\"0\" y=\"0\" width=\"45\" height=\"60\" rx=\"4\" fill=\"#b91c1c\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n      <line x1=\"0\" y1=\"20\" x2=\"45\" y2=\"20\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n      <line x1=\"0\" y1=\"40\" x2=\"45\" y2=\"40\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n      <!-- Abolladura en bidón -->\n      <path d=\"M45 25 Q35 30 45 35\" fill=\"#7f1d1d\"/>\n\n      <rect x=\"45\" y=\"5\" width=\"45\" height=\"55\" rx=\"4\" fill=\"#1e40af\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n      <line x1=\"45\" y1=\"22\" x2=\"90\" y2=\"22\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n      <line x1=\"45\" y1=\"40\" x2=\"90\" y2=\"40\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n    </g>\n\n    <!-- Escalera de mano inclinada apoyada sobre la tapa de los bidones -->\n    <g transform=\"translate(680, 200) rotate(14)\">\n      <!-- Largueros -->\n      <rect x=\"0\" y=\"0\" width=\"6\" height=\"185\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <rect x=\"36\" y=\"0\" width=\"6\" height=\"185\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <!-- Peldaños -->\n      <line x1=\"6\" y1=\"25\" x2=\"36\" y2=\"25\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"55\" x2=\"36\" y2=\"55\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"85\" x2=\"36\" y2=\"85\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"115\" x2=\"36\" y2=\"115\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"145\" x2=\"36\" y2=\"145\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"175\" x2=\"36\" y2=\"175\" stroke=\"#475569\" stroke-width=\"4\"/>\n    </g>\n    <!-- Advertencia de apoyo precario -->\n    <circle cx=\"695\" cy=\"355\" r=\"9\" fill=\"#ef4444\"/>\n    <text x=\"695\" y=\"360\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n  </g>\n\n  <!-- Suelo de tierra y barro de la obra -->\n  <rect x=\"0\" y=\"420\" width=\"1000\" height=\"180\" fill=\"url(#dirtGrad)\"/>\n  \n  <!-- Montículos de grava y tierra -->\n  <path d=\"M0 450 Q80 410 160 450 Q240 430 320 460 L320 600 L0 600 Z\" fill=\"#592507\"/>\n  <path d=\"M680 460 Q780 430 890 470 Q950 440 1000 460 L1000 600 L680 600 Z\" fill=\"#592507\"/>\n\n  <!-- PELIGRO 1: Operario SIN casco bajo la carga suspendida de la grúa (x: 440 to 580, y: 310 to 490) -->\n  <g id=\"danger-casco\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <!-- Proyección vertical de caída desde la grúa -->\n    <line x1=\"495\" y1=\"280\" x2=\"495\" y2=\"350\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/>\n    \n    <!-- Trabajador distraído con el móvil sin casco -->\n    <g transform=\"translate(470, 315)\">\n      <!-- Cabeza con pelo (SIN CASCO PROTECTOR) -->\n      <circle cx=\"25\" cy=\"22\" r=\"14\" fill=\"#fed7aa\"/>\n      <!-- Cabello castaño claro visible -->\n      <path d=\"M12 18 Q25 6 38 18 Q35 12 25 12 Q15 12 12 18 Z\" fill=\"#78350f\"/>\n      \n      <!-- Cuerpo con chaleco reflectante -->\n      <rect x=\"12\" y=\"36\" width=\"26\" height=\"46\" rx=\"4\" fill=\"#0284c7\"/> <!-- Camisa azul -->\n      <rect x=\"14\" y=\"40\" width=\"22\" height=\"38\" rx=\"2\" fill=\"#eab308\"/> <!-- Chaleco alta visibilidad -->\n      <rect x=\"14\" y=\"52\" width=\"22\" height=\"6\" fill=\"#f8fafc\"/> <!-- Banda reflectante -->\n      \n      <!-- Brazos sosteniendo teléfono móvil -->\n      <line x1=\"12\" y1=\"46\" x2=\"3\" y2=\"60\" stroke=\"#0284c7\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <line x1=\"3\" y1=\"60\" x2=\"16\" y2=\"62\" stroke=\"#0284c7\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <rect x=\"16\" y=\"55\" width=\"10\" height=\"15\" rx=\"2\" fill=\"#0f172a\" stroke=\"#ffffff\" stroke-width=\"1\"/>\n      \n      <!-- Piernas y botas de seguridad -->\n      <rect x=\"15\" y=\"82\" width=\"8\" height=\"42\" fill=\"#334155\"/>\n      <rect x=\"27\" y=\"82\" width=\"8\" height=\"42\" fill=\"#334155\"/>\n      <rect x=\"12\" y=\"122\" width=\"13\" height=\"10\" rx=\"3\" fill=\"#78350f\"/>\n      <rect x=\"27\" y=\"122\" width=\"13\" height=\"10\" rx=\"3\" fill=\"#78350f\"/>\n\n      <!-- Cartel de advertencia \"¡SIN CASCO!\" -->\n      <g transform=\"translate(45, 10)\">\n        <polygon points=\"15,0 30,26 0,26\" fill=\"#ef4444\"/>\n        <text x=\"15\" y=\"21\" fill=\"#ffffff\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n      </g>\n    </g>\n  </g>\n\n  <!-- PELIGRO 3: Zanja profunda sin señalizar, sin vallar y sin entibar (x: 260 to 530, y: 470 to 590) -->\n  <g id=\"danger-zanja\" class=\"cursor-pointer\">\n    <!-- Hueco de excavación oscuro -->\n    <path d=\"M260 480 L520 475 L500 585 L280 585 Z\" fill=\"#1c0a00\" stroke=\"#78350f\" stroke-width=\"3\"/>\n    <!-- Grietas de desprendimiento de talud -->\n    <path d=\"M250 495 L275 510 L265 535 M510 490 L485 520 L495 550\" stroke=\"#b45309\" stroke-width=\"3\"/>\n    <!-- Rocas y escombros en el fondo de la zanja -->\n    <ellipse cx=\"340\" cy=\"540\" rx=\"25\" ry=\"12\" fill=\"#451a03\"/>\n    <ellipse cx=\"420\" cy=\"550\" rx=\"35\" ry=\"15\" fill=\"#2e1002\"/>\n    <ellipse cx=\"480\" cy=\"530\" rx=\"18\" ry=\"10\" fill=\"#451a03\"/>\n    <!-- Borde sin vallado ni entibación -->\n    <line x1=\"250\" y1=\"475\" x2=\"530\" y2=\"470\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n    <text x=\"390\" y=\"465\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">ZANJA 2M: SIN VALLA NI ENTIBACIÓN</text>\n  </g>\n\n  <!-- PELIGRO 4: Cuadro eléctrico provisional en charco de agua (x: 780 to 930, y: 390 to 550) -->\n  <g id=\"danger-cuadro\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <!-- Gran charco de agua de lluvia en el suelo -->\n    <ellipse cx=\"855\" cy=\"510\" rx=\"65\" ry=\"24\" fill=\"#38bdf8\" opacity=\"0.6\"/>\n    <ellipse cx=\"855\" cy=\"510\" rx=\"50\" ry=\"16\" fill=\"#0284c7\" opacity=\"0.7\"/>\n\n    <!-- Soporte metálico del cuadro metido en el agua -->\n    <line x1=\"820\" y1=\"460\" x2=\"820\" y2=\"515\" stroke=\"#475569\" stroke-width=\"5\"/>\n    <line x1=\"885\" y1=\"460\" x2=\"885\" y2=\"515\" stroke=\"#475569\" stroke-width=\"5\"/>\n\n    <!-- Caja de distribución eléctrica de obra (puerta abierta de par en par) -->\n    <g transform=\"translate(805, 390)\">\n      <!-- Cuerpo del cuadro -->\n      <rect width=\"90\" height=\"75\" rx=\"3\" fill=\"#eab308\" stroke=\"#a16207\" stroke-width=\"2\"/>\n      <!-- Puerta colgando abierta a la izquierda -->\n      <rect x=\"-40\" y=\"4\" width=\"40\" height=\"70\" rx=\"2\" fill=\"#ca8a04\" stroke=\"#854d0e\" stroke-width=\"2\" transform=\"rotate(-15, 0, 4)\"/>\n      \n      <!-- Interior con magnetotérmicos y bornes pelados -->\n      <rect x=\"8\" y=\"8\" width=\"74\" height=\"58\" rx=\"2\" fill=\"#0f172a\"/>\n      <!-- Magnetotérmicos -->\n      <rect x=\"15\" y=\"14\" width=\"18\" height=\"24\" fill=\"#e2e8f0\"/>\n      <rect x=\"36\" y=\"14\" width=\"18\" height=\"24\" fill=\"#e2e8f0\"/>\n      <rect x=\"57\" y=\"14\" width=\"18\" height=\"24\" fill=\"#e2e8f0\"/>\n      \n      <!-- Cables expuestos colgando hacia el charco -->\n      <path d=\"M24 38 Q24 75 40 115\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n      <path d=\"M45 38 Q60 85 50 120\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/>\n      <path d=\"M66 38 Q85 80 75 118\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"3\"/>\n      \n      <!-- Rayos y chispas de electrocución en el agua -->\n      <path d=\"M40 100 L46 92 L52 98 L58 88 L54 105 Z\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n      <circle cx=\"50\" cy=\"118\" r=\"4\" fill=\"#fef08a\"/>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "obra-casco",
        "name": "Trabajador sin casco bajo carga suspendida",
        "category": "Equipos de Protección Individual (EPIs)",
        "severity": "Muy Grave",
        "rect": {
          "left": 43,
          "top": 48,
          "width": 16,
          "height": 33
        },
        "description": "Operario caminando distraído con el teléfono móvil dentro del radio de giro de la grúa torre y directamente bajo la vertical de vigas de acero suspendidas, careciendo de casco de protección.",
        "consequences": "Muerte instantánea o traumatismo craneoencefálico irreversible por desprendimiento accidental de la carga o fallo del aparejo de izado.",
        "regulation": "Real Decreto 1627/1997 (Seguridad y salud en obras de construcción), RD 773/1997 (EPIs) y RD 1215/1997 (Equipos de elevación). Queda terminantemente prohibido el paso o permanencia de personas bajo cargas suspendidas.",
        "prevention": "Uso obligatorio y permanente de casco de seguridad homologado (UNE-EN 397), balizamiento del área de izado e intercomunicación de seguridad entre el operador de grúa y el señalista en tierra."
      },
      {
        "id": "obra-andamio",
        "name": "Andamio en altura sin barandilla perimetral ni rodapié",
        "category": "Trabajos en Altura",
        "severity": "Muy Grave",
        "rect": {
          "left": 5,
          "top": 15,
          "width": 21,
          "height": 30
        },
        "description": "Plataforma de trabajo de andamio situada a 3,5 metros de cota sin sistema de protección perimetral: ausencia total de barandilla superior (90 cm), listón intermedio y rodapié.",
        "consequences": "Caída de personas a distinto nivel con consecuencias mortales o tetraplejia, y caída de herramientas o ladrillos sobre trabajadores en cotas inferiores.",
        "regulation": "Real Decreto 2177/2004, de 12 de noviembre, sobre trabajos temporales en altura y RD 1627/1997 (Anexo IV, Parte C). Las plataformas situadas a más de 2 metros deben contar con barandilla rígida resistente de al menos 90 cm, protección intermedia y rodapié de 15 cm.",
        "prevention": "Montaje preceptivo de barandillas normalizadas completas antes de autorizar el acceso y utilización de arnés anticaídas amarrado a línea de vida durante las labores de montaje/desmontaje."
      },
      {
        "id": "obra-zanja",
        "name": "Zanja profunda sin señalizar, sin vallar y sin entibar",
        "category": "Excavaciones y Vaciados",
        "severity": "Muy Grave",
        "rect": {
          "left": 25,
          "top": 76,
          "width": 29,
          "height": 22
        },
        "description": "Excavación de más de 2 metros de profundidad con paredes verticales en tierra inestable, sin entibación ni bermas de seguridad, careciendo de vallas de cierre perimetral.",
        "consequences": "Sepultamiento y asfixia por derrumbe repentino de tierras o caída de trabajadores que circulen por el perímetro.",
        "regulation": "Real Decreto 1627/1997, Anexo IV, Parte C, Apartado 10 (Excavaciones). Toda zanja con profundidad superior a 1,30 metros debe disponer de entibación o talud adecuado y barandilla perimetral rígida a 1 metro de distancia del borde.",
        "prevention": "Instalar cajones de entibación modular metálica antes de penetrar en la excavación y vallado rígido señalizado con balizas luminosas en el perímetro exterior."
      },
      {
        "id": "obra-cuadro",
        "name": "Cuadro eléctrico provisional abierto en charco de agua",
        "category": "Riesgo Eléctrico",
        "severity": "Muy Grave",
        "rect": {
          "left": 77,
          "top": 62,
          "width": 17,
          "height": 29
        },
        "description": "Cuadro de distribución provisional de obra con la puerta abierta de par en par, cableado pelado expuesto y patas sumergidas en un gran charco de agua de lluvia.",
        "consequences": "Electrocución por contacto directo o indirecto, arco eléctrico explosivo y derivaciones de corriente a través del agua circundante.",
        "regulation": "Real Decreto 614/2001 e Instrucción Técnica Complementaria ITC-BT-33 del Reglamento Electrotécnico para Baja Tensión (Instalaciones provisionales y temporales de obras).",
        "prevention": "Emplear armarios con índice de estanqueidad mínimo IP44 (IP55 en intemperie), mantener puertas cerradas con llave, elevar el cuadro fuera de zonas inundables e instalar interruptores diferenciales de alta sensibilidad (30 mA)."
      },
      {
        "id": "obra-escalera",
        "name": "Escalera de mano asentada sobre bidones inestables",
        "category": "Trabajos en Altura",
        "severity": "Grave",
        "rect": {
          "left": 63,
          "top": 33,
          "width": 14,
          "height": 36
        },
        "description": "Escalera de mano apoyada sobre la superficie deformada de dos bidones de aceite en lugar de asentar sobre base firme y plana.",
        "consequences": "Deslizamiento, vuelco y caída a distinto nivel con traumatismos graves en extremidades y columna.",
        "regulation": "Real Decreto 2177/2004 (Anexo). \"Las escaleras de mano se colocarán de manera que su estabilidad durante su utilización esté asegurada, disponiendo de zapatas antideslizantes sobre suelos horizontales y rígidos\".",
        "prevention": "Prohibir taxativamente cualquier calzo o suplemento precario; apoyar la escalera en terreno compactado y nivelado o sustituirla por una torre móvil de trabajo con estabilizadores."
      }
    ]
  },
  {
    "id": "almacen",
    "name": "Almacén Logístico",
    "subtitle": "Distribución y Manipulación de Cargas",
    "description": "Nave logística con estanterías industriales de paletización, tráfico de carretillas elevadoras, manipulación manual y vías de evacuación.",
    "badgeColor": "emerald",
    "icon": "truck",
    "timeLimit": 90,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"wallWhGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n    <linearGradient id=\"whFloorGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"50%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"oilGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1c1917\"/>\n      <stop offset=\"50%\" stop-color=\"#292524\"/>\n      <stop offset=\"100%\" stop-color=\"#0c0a09\"/>\n    </linearGradient>\n    <filter id=\"shadowWh\">\n      <feDropShadow dx=\"3\" dy=\"5\" stdDeviation=\"4\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n\n  <!-- Pared industrial metálica con cerchas -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"320\" fill=\"url(#wallWhGrad)\"/>\n  \n  <!-- Cerchas metálicas de la cubierta -->\n  <g stroke=\"#475569\" stroke-width=\"3\" opacity=\"0.6\">\n    <line x1=\"0\" y1=\"30\" x2=\"1000\" y2=\"30\"/>\n    <line x1=\"0\" y1=\"65\" x2=\"1000\" y2=\"65\"/>\n    <!-- Triangulación -->\n    <path d=\"M0 30 L50 65 L100 30 L150 65 L200 30 L250 65 L300 30 L350 65 L400 30 L450 65 L500 30 L550 65 L600 30 L650 65 L700 30 L750 65 L800 30 L850 65 L900 30 L950 65 L1000 30\"/>\n    <!-- Campanas industriales LED -->\n    <g fill=\"#94a3b8\" stroke=\"#334155\">\n      <polygon points=\"240,65 260,85 220,85\"/>\n      <polygon points=\"500,65 520,85 480,85\"/>\n      <polygon points=\"760,65 780,85 740,85\"/>\n    </g>\n    <!-- Conos de luz suave -->\n    <polygon points=\"240,85 140,320 340,320\" fill=\"#fef08a\" opacity=\"0.05\"/>\n    <polygon points=\"500,85 400,320 600,320\" fill=\"#fef08a\" opacity=\"0.05\"/>\n    <polygon points=\"760,85 660,320 860,320\" fill=\"#fef08a\" opacity=\"0.05\"/>\n  </g>\n\n  <!-- Suelo de hormigón pulido industrial -->\n  <rect x=\"0\" y=\"320\" width=\"1000\" height=\"280\" fill=\"url(#whFloorGrad)\"/>\n  <rect x=\"0\" y=\"318\" width=\"1000\" height=\"4\" fill=\"#0f172a\"/>\n\n  <!-- Líneas viales amarillas de tránsito en el suelo -->\n  <g stroke=\"#eab308\" stroke-width=\"4\" opacity=\"0.8\">\n    <line x1=\"280\" y1=\"320\" x2=\"210\" y2=\"600\"/>\n    <line x1=\"560\" y1=\"320\" x2=\"520\" y2=\"600\" stroke-dasharray=\"14 10\"/>\n    <line x1=\"820\" y1=\"320\" x2=\"860\" y2=\"600\"/>\n  </g>\n\n  <!-- PELIGRO 4: Salida de emergencia bloqueada por europalets (x: 790 to 940, y: 150 to 390) -->\n  <g id=\"danger-salida\" class=\"cursor-pointer\" filter=\"url(#shadowWh)\">\n    <!-- Puerta de emergencia verde con barra antipánico -->\n    <g transform=\"translate(810, 160)\">\n      <!-- Señal lumínica Salida de Emergencia -->\n      <rect x=\"10\" y=\"-35\" width=\"85\" height=\"28\" rx=\"3\" fill=\"#16a34a\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"52\" y=\"-17\" fill=\"#ffffff\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">SALIDA EMERGENCIA</text>\n      \n      <!-- Marco y doble hoja de puerta -->\n      <rect width=\"105\" height=\"170\" fill=\"#15803d\" stroke=\"#14532d\" stroke-width=\"3\"/>\n      <line x1=\"52\" y1=\"0\" x2=\"52\" y2=\"170\" stroke=\"#14532d\" stroke-width=\"2\"/>\n      <!-- Barras antipánico rojas horizontales -->\n      <rect x=\"8\" y=\"90\" width=\"38\" height=\"8\" rx=\"2\" fill=\"#ef4444\"/>\n      <rect x=\"60\" y=\"90\" width=\"38\" height=\"8\" rx=\"2\" fill=\"#ef4444\"/>\n    </g>\n\n    <!-- Torre de 6 palets de madera apilados bloqueando totalmente la puerta -->\n    <g transform=\"translate(800, 220)\">\n      <!-- Palet 1 -->\n      <g transform=\"translate(0, 0)\">\n        <rect width=\"125\" height=\"18\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n        <line x1=\"15\" y1=\"0\" x2=\"15\" y2=\"18\" stroke=\"#78350f\" stroke-width=\"4\"/>\n        <line x1=\"62\" y1=\"0\" x2=\"62\" y2=\"18\" stroke=\"#78350f\" stroke-width=\"4\"/>\n        <line x1=\"110\" y1=\"0\" x2=\"110\" y2=\"18\" stroke=\"#78350f\" stroke-width=\"4\"/>\n      </g>\n      <!-- Palet 2 -->\n      <g transform=\"translate(2, 20)\">\n        <rect width=\"125\" height=\"18\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n        <line x1=\"15\" y1=\"0\" x2=\"15\" y2=\"18\" stroke=\"#451a03\" stroke-width=\"4\"/>\n        <line x1=\"62\" y1=\"0\" x2=\"62\" y2=\"18\" stroke=\"#451a03\" stroke-width=\"4\"/>\n        <line x1=\"110\" y1=\"0\" x2=\"110\" y2=\"18\" stroke=\"#451a03\" stroke-width=\"4\"/>\n      </g>\n      <!-- Palet 3 -->\n      <g transform=\"translate(-3, 40)\">\n        <rect width=\"125\" height=\"18\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n        <line x1=\"15\" y1=\"0\" x2=\"15\" y2=\"18\" stroke=\"#78350f\" stroke-width=\"4\"/>\n        <line x1=\"62\" y1=\"0\" x2=\"62\" y2=\"18\" stroke=\"#78350f\" stroke-width=\"4\"/>\n        <line x1=\"110\" y1=\"0\" x2=\"110\" y2=\"18\" stroke=\"#78350f\" stroke-width=\"4\"/>\n      </g>\n      <!-- Palet 4 -->\n      <g transform=\"translate(1, 60)\">\n        <rect width=\"125\" height=\"18\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      </g>\n      <!-- Palet 5 -->\n      <g transform=\"translate(-2, 80)\">\n        <rect width=\"125\" height=\"18\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      </g>\n      <!-- Palet 6 (base en suelo) -->\n      <g transform=\"translate(0, 100)\">\n        <rect width=\"125\" height=\"20\" fill=\"#92400e\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      </g>\n\n      <!-- Cartel de bloqueo prohibido -->\n      <g transform=\"translate(45, -25)\">\n        <circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n        <line x1=\"6\" y1=\"6\" x2=\"30\" y2=\"30\" stroke=\"#ffffff\" stroke-width=\"4\"/>\n      </g>\n    </g>\n  </g>\n\n  <!-- ESTANTERÍA INDUSTRIAL DE PALETIZACIÓN (IZQUIERDA) -->\n  <g transform=\"translate(60, 50)\" filter=\"url(#shadowWh)\">\n    <!-- Puntales verticales azules con perforaciones -->\n    <rect x=\"0\" y=\"0\" width=\"16\" height=\"420\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"220\" y=\"0\" width=\"16\" height=\"420\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    \n    <!-- Largueros horizontales naranja alta resistencia -->\n    <rect x=\"0\" y=\"120\" width=\"236\" height=\"18\" rx=\"2\" fill=\"#ea580c\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n    <rect x=\"0\" y=\"240\" width=\"236\" height=\"18\" rx=\"2\" fill=\"#ea580c\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n    <rect x=\"0\" y=\"360\" width=\"236\" height=\"18\" rx=\"2\" fill=\"#ea580c\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n\n    <!-- Nivel 2 (Intermedio - Carga correcta estibada) -->\n    <g transform=\"translate(20, 145)\">\n      <rect width=\"195\" height=\"92\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <line x1=\"97\" y1=\"0\" x2=\"97\" y2=\"92\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <!-- Film transparente retractilado -->\n      <rect width=\"195\" height=\"92\" fill=\"#38bdf8\" opacity=\"0.15\"/>\n      <text x=\"97\" y=\"50\" fill=\"#fef3c7\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">CORRECTO</text>\n    </g>\n\n    <!-- Nivel 1 (Inferior - Palet con bidones) -->\n    <g transform=\"translate(25, 265)\">\n      <rect width=\"90\" height=\"92\" fill=\"#1e40af\" rx=\"4\"/>\n      <rect width=\"85\" height=\"92\" x=\"95\" fill=\"#1e40af\" rx=\"4\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 1: Carga mal apilada e inestable en altura (x: 80 to 280, y: 70 to 230) -->\n  <g id=\"danger-palet\" transform=\"translate(75, 55)\" class=\"cursor-pointer\" filter=\"url(#shadowWh)\">\n    <!-- Palet roto inclinado en nivel superior -->\n    <g transform=\"translate(15, 20) rotate(16, 100, 65)\">\n      <!-- Tablones del palet crujidos -->\n      <rect width=\"180\" height=\"18\" fill=\"#d97706\" stroke=\"#b45309\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"2\" x2=\"88\" y2=\"16\" stroke=\"#451a03\" stroke-width=\"3\"/> <!-- Grieta rotura -->\n      \n      <!-- Cajas de cartón abombadas y a punto de caer hacia el pasillo -->\n      <g transform=\"translate(10, -55)\">\n        <rect width=\"75\" height=\"55\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n        <text x=\"37\" y=\"32\" fill=\"#451a03\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">FRÁGIL</text>\n      </g>\n      <g transform=\"translate(85, -62) rotate(12)\">\n        <rect width=\"78\" height=\"60\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n        <!-- Cinta rota deshilachada -->\n        <path d=\"M0 30 Q40 20 78 30\" stroke=\"#f87171\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n      </g>\n      <!-- Caja superior desprendiéndose en el aire -->\n      <g transform=\"translate(130, -100) rotate(35)\">\n        <rect width=\"60\" height=\"48\" rx=\"2\" fill=\"#ea580c\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n        <text x=\"30\" y=\"28\" fill=\"#ffffff\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">50 KG</text>\n      </g>\n    </g>\n    \n    <!-- Icono de advertencia de caída de objetos -->\n    <g transform=\"translate(200, 10)\">\n      <polygon points=\"16,0 32,28 0,28\" fill=\"#ef4444\"/>\n      <text x=\"16\" y=\"23\" fill=\"#ffffff\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    </g>\n  </g>\n\n  <!-- PELIGRO 3: Carretilla elevadora con horquillas altas en reposo y llave puesta (x: 560 to 770, y: 310 to 520) -->\n  <g id=\"danger-carretilla\" transform=\"translate(560, 310)\" class=\"cursor-pointer\" filter=\"url(#shadowWh)\">\n    <!-- Chasis principal de la carretilla amarilla -->\n    <g transform=\"translate(20, 80)\">\n      <!-- Cuerpo contrapeso trasero -->\n      <rect x=\"0\" y=\"40\" width=\"115\" height=\"65\" rx=\"12\" fill=\"#eab308\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"70\" width=\"35\" height=\"35\" fill=\"#0f172a\"/> <!-- Contrapeso hierro fundido -->\n      \n      <!-- Cabina de protección antivuelco (ROPS/FOPS) -->\n      <path d=\"M25 40 L45 -25 L105 -25 L115 40\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <line x1=\"45\" y1=\"-25\" x2=\"105\" y2=\"-25\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <line x1=\"75\" y1=\"-25\" x2=\"75\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n\n      <!-- Asiento vacío (conductor ausente) -->\n      <rect x=\"50\" y=\"15\" width=\"30\" height=\"25\" rx=\"4\" fill=\"#1e293b\"/>\n      <rect x=\"44\" y=\"5\" width=\"8\" height=\"35\" rx=\"3\" fill=\"#1e293b\"/>\n      <!-- Volante con llave en el contacto colgando -->\n      <line x1=\"88\" y1=\"15\" x2=\"98\" y2=\"10\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <circle cx=\"98\" cy=\"8\" r=\"7\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n      <!-- LLAVE PUESTA -->\n      <path d=\"M96 22 L100 28 M100 28 L104 28\" stroke=\"#facc15\" stroke-width=\"3\"/>\n      <circle cx=\"96\" cy=\"22\" r=\"3\" fill=\"#eab308\"/>\n\n      <!-- Ruedas industriales macizas -->\n      <circle cx=\"28\" cy=\"105\" r=\"24\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <circle cx=\"28\" cy=\"105\" r=\"10\" fill=\"#94a3b8\"/>\n      <circle cx=\"115\" cy=\"105\" r=\"20\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <circle cx=\"115\" cy=\"105\" r=\"8\" fill=\"#94a3b8\"/>\n    </g>\n\n    <!-- Mástil y HORQUILLAS ELEVADAS EN REPOSO A 1.8 METROS (GRAVE RIESGO) -->\n    <g transform=\"translate(135, 10)\">\n      <!-- Mástil vertical doble -->\n      <rect x=\"0\" y=\"10\" width=\"10\" height=\"175\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <rect x=\"14\" y=\"10\" width=\"10\" height=\"175\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <!-- Cadenas de elevación -->\n      <line x1=\"5\" y1=\"10\" x2=\"5\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-dasharray=\"3 2\"/>\n\n      <!-- Tablero portahorquillas y HORQUILLAS ELEVADAS ARRIBA -->\n      <g transform=\"translate(24, 25)\">\n        <rect width=\"12\" height=\"45\" fill=\"#0f172a\"/>\n        <!-- Puntas de las horquillas de acero en voladizo (altura mortal de cabeza/pecho) -->\n        <path d=\"M12 35 L75 35 L75 42 L12 42 Z\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n        <path d=\"M12 10 L75 10 L75 17 L12 17 Z\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n        <!-- Puntas afiladas rojas de advertencia -->\n        <polygon points=\"75,35 85,38.5 75,42\" fill=\"#ef4444\"/>\n        <polygon points=\"75,10 85,13.5 75,17\" fill=\"#ef4444\"/>\n      </g>\n    </g>\n\n    <!-- Rótulo de peligro horquillas altas -->\n    <g transform=\"translate(140, 0)\">\n      <rect width=\"85\" height=\"22\" rx=\"3\" fill=\"#ef4444\"/>\n      <text x=\"42\" y=\"15\" fill=\"#ffffff\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">HORQUILLAS ALTAS</text>\n    </g>\n  </g>\n\n  <!-- PELIGRO 2: Gran derrame de aceite en el pasillo (x: 370 to 570, y: 460 to 565) -->\n  <g id=\"danger-aceite\" class=\"cursor-pointer\" filter=\"url(#shadowWh)\">\n    <!-- Charco de fluido oscuro y resbaladizo -->\n    <path d=\"M370 510 C390 470, 470 460, 520 480 C570 500, 560 550, 500 560 C440 570, 390 560, 370 510 Z\" fill=\"url(#oilGrad)\"/>\n    <!-- Brillo del aceite bajo las luces -->\n    <ellipse cx=\"450\" cy=\"505\" rx=\"45\" ry=\"14\" fill=\"#ffffff\" opacity=\"0.15\" transform=\"rotate(-10, 450, 505)\"/>\n    <ellipse cx=\"490\" cy=\"525\" rx=\"30\" ry=\"8\" fill=\"#ffffff\" opacity=\"0.1\" transform=\"rotate(5, 490, 525)\"/>\n    \n    <!-- Huella de neumático resbalando -->\n    <path d=\"M410 495 Q450 515 480 500\" stroke=\"#f59e0b\" stroke-width=\"4\" stroke-dasharray=\"5 3\"/>\n\n    <!-- Icono de resbalón -->\n    <g transform=\"translate(450, 475)\">\n      <polygon points=\"16,0 32,28 0,28\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n      <text x=\"16\" y=\"22\" fill=\"#000000\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    </g>\n  </g>\n\n  <!-- PELIGRO 5: Manipulación manual de carga y sobreesfuerzo lumbar (x: 190 to 340, y: 340 to 530) -->\n  <g id=\"danger-sobreesfuerzo\" class=\"cursor-pointer\" filter=\"url(#shadowWh)\">\n    <g transform=\"translate(200, 350)\">\n      <!-- Trabajador doblando la espalda a 90 grados con piernas rectas -->\n      <!-- Piernas rectas bloqueadas (técnica errónea y lesiva) -->\n      <rect x=\"25\" y=\"80\" width=\"12\" height=\"70\" fill=\"#1e293b\"/>\n      <rect x=\"45\" y=\"80\" width=\"12\" height=\"70\" fill=\"#1e293b\"/>\n      <!-- Botas de seguridad -->\n      <rect x=\"22\" y=\"145\" width=\"18\" height=\"12\" rx=\"3\" fill=\"#78350f\"/>\n      <rect x=\"45\" y=\"145\" width=\"18\" height=\"12\" rx=\"3\" fill=\"#78350f\"/>\n\n      <!-- Espalda completamente curvada horizontalmente -->\n      <path d=\"M40 85 Q65 60 95 65\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"20\" stroke-linecap=\"round\"/>\n      \n      <!-- Cabeza haciendo fuerza con el cuello tenso -->\n      <circle cx=\"115\" cy=\"55\" r=\"14\" fill=\"#fed7aa\"/>\n      <path d=\"M102 52 Q115 42 128 52\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <!-- Casco amarillo -->\n      <!-- Expresión de dolor/esfuerzo -->\n      <line x1=\"120\" y1=\"56\" x2=\"124\" y2=\"58\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      \n      <!-- Brazos estirados hacia la caja pesada -->\n      <path d=\"M85 70 L95 110\" stroke=\"#ea580c\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n\n      <!-- Rayos rojos de dolor lumbar en las vértebras L5-S1 -->\n      <g transform=\"translate(45, 45)\">\n        <path d=\"M0 10 L-8 0 L-2 15 L-12 12 L0 25\" fill=\"#ef4444\"/>\n        <circle cx=\"5\" cy=\"20\" r=\"6\" fill=\"#ef4444\" opacity=\"0.8\"/>\n      </g>\n\n      <!-- Caja enorme y pesada de 40 kg en el suelo -->\n      <g transform=\"translate(70, 95)\">\n        <rect width=\"65\" height=\"55\" rx=\"3\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/>\n        <line x1=\"0\" y1=\"27\" x2=\"65\" y2=\"27\" stroke=\"#451a03\" stroke-width=\"2\"/>\n        <text x=\"32\" y=\"22\" fill=\"#fef08a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PESO: 40 KG</text>\n        <text x=\"32\" y=\"44\" fill=\"#ffffff\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">SIN AYUDA</text>\n      </g>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "almacen-palet",
        "name": "Palet superior deformado y carga inestable en altura",
        "category": "Almacenamiento y Estanterías",
        "severity": "Muy Grave",
        "rect": {
          "left": 7,
          "top": 11,
          "width": 23,
          "height": 29
        },
        "description": "Palet con traviesas de madera rotas situado a gran altura (Nivel 3), con cajas desalineadas, flejes rotos y bultos asomando peligrosamente sobre el pasillo de paso.",
        "consequences": "Aplastamiento letal de carretilleros o peatones por caída libre de bultos pesados desde gran altura.",
        "regulation": "Norma UNE-EN 15635 (Almacenaje en estanterías metálicas: Uso y mantenimiento del equipo) y Real Decreto 1215/1997. Obligación de inspecciones técnicas periódicas y retirada inmediata de unidades de carga inestables.",
        "prevention": "Rechazar palets deteriorados, asegurar la carga mediante enfardado completo con film extensible o flejado cruzado, e instalar mallas dorsales anticaída en las estanterías colindantes con vías de paso."
      },
      {
        "id": "almacen-aceite",
        "name": "Derrame de aceite hidráulico en pasillo de circulación",
        "category": "Orden y Limpieza",
        "severity": "Grave",
        "rect": {
          "left": 36,
          "top": 75,
          "width": 22,
          "height": 19
        },
        "description": "Gran mancha de fluido oleoso resbaladizo en mitad del pasillo mixto de carretillas y operarios, sin acotar ni señalizar.",
        "consequences": "Pérdida de tracción y vuelco de carretillas elevadoras en frenadas, atropellos a transeúntes y resbalones con caídas de peatones.",
        "regulation": "Real Decreto 486/1997, Anexo I, Apartado 3. Los suelos de los lugares de trabajo deberán estar exentos de sustancias grasas o resbaladizas y limpiarse inmediatamente ante cualquier vertido.",
        "prevention": "Protocolo inmediato de actuación ante derrames: balizar la zona con conos de advertencia, verter sepiolita o absorbente mineral neutralizante y retirar los residuos a contenedor autorizado."
      },
      {
        "id": "almacen-carretilla",
        "name": "Carretilla con horquillas elevadas y llave en contacto",
        "category": "Equipos de Trabajo",
        "severity": "Muy Grave",
        "rect": {
          "left": 55,
          "top": 51,
          "width": 23,
          "height": 35
        },
        "description": "Carretilla elevadora estacionada en mitad del pasillo con el conductor ausente, las horquillas izadas a 1,8 metros de altura y la llave de arranque puesta en el contacto.",
        "consequences": "Empalamiento de transeúntes contra las horquillas elevadas a la altura de la cabeza, pérdida de estabilidad de la máquina y uso no autorizado por personal no cualificado.",
        "regulation": "Real Decreto 1215/1997 (Equipos de trabajo automotores) y NTP 715 del INSST. Al estacionar una carretilla, es preceptivo descender las horquillas completamente al nivel del suelo, aplicar el freno de estacionamiento y retirar la llave de contacto.",
        "prevention": "Instrucción operativa obligatoria a operadores de carretillas: estacionar exclusivamente en zonas habilitadas, descender horquillas a ras de suelo y retirar siempre la llave de arranque."
      },
      {
        "id": "almacen-salida",
        "name": "Salida de emergencia bloqueada por europalets",
        "category": "Vías y Salidas de Evacuación",
        "severity": "Muy Grave",
        "rect": {
          "left": 78,
          "top": 24,
          "width": 17,
          "height": 42
        },
        "description": "Pila de 6 europalets de madera depositados directamente frente a las hojas de la puerta de emergencia y sobre la barra antipánico.",
        "consequences": "Imposibilidad de evacuación del personal en caso de incendio o escape químico, provocando situaciones de pánico colectivo y víctimas por asfixia.",
        "regulation": "Real Decreto 486/1997, Anexo I, Apartado 10 (Vías y salidas de evacuación) y Código Técnico de la Edificación (DB-SI). Las salidas de emergencia deberán permanecer expeditas y libres de todo obstáculo en todo momento.",
        "prevention": "Prohibición absoluta y vigilada de acopio en vías de evacuación, señalización en el suelo con franjas diagonales amarillas/negras de \"Zona despejada obligatoria\" y auditorías de seguridad diarias."
      },
      {
        "id": "almacen-sobreesfuerzo",
        "name": "Manipulación manual de carga pesada con técnica incorrecta",
        "category": "Ergonomía",
        "severity": "Grave",
        "rect": {
          "left": 18,
          "top": 55,
          "width": 17,
          "height": 34
        },
        "description": "Operario levantando individualmente una caja de 40 kg con las piernas estiradas y curvando bruscamente la columna vertebral a 90 grados.",
        "consequences": "Hernias discales lumbares, lumbalgias agudas incapacitantes, roturas musculares y bajas de larga duración.",
        "regulation": "Real Decreto 487/1997, de 14 de abril, sobre disposiciones mínimas de seguridad y salud relativas a la manipulación manual de cargas. Límite máximo general recomendado: 25 kg en condiciones ideales (15 kg para mayor protección). Cargas superiores exigen medios mecánicos o manipulación en equipo.",
        "prevention": "Suministrar y utilizar medios auxiliares de transporte mecánico (traspalés, carretillas de mano o mesas elevadoras) y adiestrar a la plantilla en la técnica ergonómica de levantamiento (flexionar rodillas, espalda recta y carga pegada al cuerpo)."
      }
    ]
  },
  {
    "id": "laboratorio",
    "name": "Laboratorio Químico y Biológico",
    "subtitle": "Investigación, Análisis y Control de Calidad",
    "description": "Instalación de ensayo químico y microbiológico con reactivos peligrosos, campana extractora, duchas de emergencia y mecheros Bunsen.",
    "badgeColor": "purple",
    "icon": "flask",
    "timeLimit": 120,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"labWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f172a\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"labFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n    <filter id=\"shadowLab\">\n      <feDropShadow dx=\"2\" dy=\"4\" stdDeviation=\"3\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <!-- Pared con azulejos de laboratorio -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#labWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"1\" opacity=\"0.3\">\n    <line x1=\"0\" y1=\"60\" x2=\"1000\" y2=\"60\"/>\n    <line x1=\"0\" y1=\"120\" x2=\"1000\" y2=\"120\"/>\n    <line x1=\"0\" y1=\"180\" x2=\"1000\" y2=\"180\"/>\n    <line x1=\"0\" y1=\"240\" x2=\"1000\" y2=\"240\"/>\n    <line x1=\"0\" y1=\"300\" x2=\"1000\" y2=\"300\"/>\n  </g>\n\n  <!-- Suelo epoxi liso -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#labFloor)\"/>\n\n  <!-- PELIGRO 5: Campana de gases apagada con guillotina levantada (x: 220 to 390, y: 110 to 310) -->\n  <g id=\"danger-campana\" transform=\"translate(220, 110)\" class=\"cursor-pointer\" filter=\"url(#shadowLab)\">\n    <rect width=\"170\" height=\"200\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"3\" rx=\"4\"/>\n    <rect x=\"15\" y=\"15\" width=\"140\" height=\"150\" fill=\"#0f172a\"/>\n    <!-- Guillotina de cristal subida al máximo (PELIGRO) -->\n    <rect x=\"15\" y=\"15\" width=\"140\" height=\"30\" fill=\"#38bdf8\" opacity=\"0.3\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <text x=\"85\" y=\"34\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">GUILLOTINA 100% ABIERTA</text>\n    <!-- Vaso humeando dentro sin extracción -->\n    <rect x=\"70\" y=\"110\" width=\"30\" height=\"40\" fill=\"#cbd5e1\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"85\" cy=\"110\" rx=\"15\" ry=\"4\" fill=\"#a855f7\" opacity=\"0.7\"/>\n    <!-- Vapores tóxicos saliendo de la campana -->\n    <path d=\"M85 105 Q70 80 80 50 Q90 20 120 10 Q160 5 190 40\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\"0.8\"/>\n    <path d=\"M85 105 Q100 80 95 60 Q90 30 140 25\" fill=\"none\" stroke=\"#c084fc\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.8\"/>\n    <!-- Panel de control: MOTOR OFF en rojo -->\n    <rect x=\"15\" y=\"170\" width=\"140\" height=\"25\" fill=\"#334155\"/>\n    <circle cx=\"35\" cy=\"182\" r=\"5\" fill=\"#ef4444\"/>\n    <text x=\"50\" y=\"186\" fill=\"#f87171\" font-size=\"9\" font-weight=\"bold\">EXTRACCIÓN: APAGADA</text>\n  </g>\n\n  <!-- PELIGRO 3: Ducha de emergencia y lavaojos bloqueado (x: 800 to 950, y: 120 to 380) -->\n  <g id=\"danger-ducha\" class=\"cursor-pointer\" filter=\"url(#shadowLab)\">\n    <!-- Tubería y cabezal de ducha de emergencia -->\n    <g transform=\"translate(840, 100)\">\n      <!-- Señal verde DUCHA Y LAVAOJOS -->\n      <rect x=\"-20\" y=\"-30\" width=\"75\" height=\"26\" fill=\"#16a34a\" stroke=\"#ffffff\" stroke-width=\"2\" rx=\"3\"/>\n      <text x=\"17\" y=\"-13\" fill=\"#ffffff\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">DUCHA / LAVAOJOS</text>\n      <!-- Tubería amarilla -->\n      <line x1=\"17\" y1=\"0\" x2=\"17\" y2=\"180\" stroke=\"#eab308\" stroke-width=\"6\"/>\n      <!-- Cono de la ducha -->\n      <polygon points=\"17,30 -5,60 40,60\" fill=\"#16a34a\"/>\n      <!-- Pila del lavaojos -->\n      <ellipse cx=\"17\" cy=\"140\" rx=\"30\" ry=\"12\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <circle cx=\"6\" cy=\"138\" r=\"4\" fill=\"#38bdf8\"/>\n      <circle cx=\"28\" cy=\"138\" r=\"4\" fill=\"#38bdf8\"/>\n    </g>\n\n    <!-- Pila de cajas bloqueando el acceso a la ducha -->\n    <g transform=\"translate(800, 240)\">\n      <rect x=\"0\" y=\"20\" width=\"105\" height=\"55\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\" rx=\"2\"/>\n      <text x=\"52\" y=\"50\" fill=\"#fef3c7\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">PIPETAS VIDRIO</text>\n      <rect x=\"15\" y=\"-30\" width=\"85\" height=\"52\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\" rx=\"2\" transform=\"rotate(-6)\"/>\n      <text x=\"55\" y=\"0\" fill=\"#fef3c7\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">REACTIVOS</text>\n      <rect x=\"-10\" y=\"70\" width=\"125\" height=\"60\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\" rx=\"2\"/>\n      <!-- Símbolo de bloqueo -->\n      <circle cx=\"50\" cy=\"100\" r=\"14\" fill=\"#ef4444\"/>\n      <text x=\"50\" y=\"105\" fill=\"#ffffff\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    </g>\n  </g>\n\n  <!-- Poyo/Encimera principal del laboratorio -->\n  <rect x=\"0\" y=\"340\" width=\"800\" height=\"25\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  <rect x=\"0\" y=\"365\" width=\"800\" height=\"180\" fill=\"#cbd5e1\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n\n  <!-- PELIGRO 1: Botellas de químicos sin etiquetar y abiertas (x: 100 to 240, y: 340 to 470) -->\n  <g id=\"danger-quimicos\" transform=\"translate(105, 335)\" class=\"cursor-pointer\" filter=\"url(#shadowLab)\">\n    <!-- Frasco con líquido verde sin etiqueta y tapón abierto -->\n    <rect x=\"10\" y=\"-35\" width=\"40\" height=\"60\" rx=\"5\" fill=\"#86efac\" stroke=\"#16a34a\" stroke-width=\"2\" opacity=\"0.85\"/>\n    <rect x=\"22\" y=\"-45\" width=\"16\" height=\"12\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Tapón tirado al lado -->\n    <circle cx=\"65\" cy=\"18\" r=\"8\" fill=\"#ef4444\"/>\n    <!-- Derrame de ácido corrosivo carcomiendo la mesa -->\n    <path d=\"M40 20 Q70 15 90 22 Q120 18 135 25 Q110 32 60 30 Z\" fill=\"#22c55e\" opacity=\"0.7\"/>\n    <!-- Burbujas y humos de reacción ácida -->\n    <circle cx=\"80\" cy=\"18\" r=\"3\" fill=\"#ffffff\"/>\n    <circle cx=\"100\" cy=\"22\" r=\"2\" fill=\"#ffffff\"/>\n    <path d=\"M80 15 Q75 5 80 -5 M105 18 Q115 8 110 -2\" stroke=\"#22c55e\" stroke-width=\"2\" fill=\"none\"/>\n    <text x=\"30\" y=\"-12\" fill=\"#ef4444\" font-size=\"14\" font-weight=\"bold\">?</text>\n    <text x=\"75\" y=\"42\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\">SIN ETIQUETA / CLP</text>\n  </g>\n\n  <!-- PELIGRO 2: Mechero Bunsen junto a botella de etanol (x: 360 to 510, y: 310 to 460) -->\n  <g id=\"danger-bunsen\" transform=\"translate(365, 310)\" class=\"cursor-pointer\" filter=\"url(#shadowLab)\">\n    <!-- Mechero Bunsen encendido -->\n    <rect x=\"20\" y=\"45\" width=\"25\" height=\"8\" rx=\"2\" fill=\"#0f172a\"/>\n    <line x1=\"32\" y1=\"45\" x2=\"32\" y2=\"15\" stroke=\"#64748b\" stroke-width=\"6\"/>\n    <!-- Llama viva desatendida -->\n    <path d=\"M32 15 Q25 0 32 -15 Q40 0 32 15 Z\" fill=\"#38bdf8\"/>\n    <path d=\"M32 12 Q28 0 32 -8 Q36 0 32 12 Z\" fill=\"#facc15\"/>\n\n    <!-- Botella de Etanol al 96% justo pegada al fuego -->\n    <g transform=\"translate(70, 0)\">\n      <rect width=\"45\" height=\"65\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <rect x=\"12\" y=\"-10\" width=\"20\" height=\"12\" fill=\"#dc2626\" rx=\"2\"/>\n      <!-- Pictograma de líquido inflamable -->\n      <polygon points=\"22,15 36,28 8,28\" fill=\"#ef4444\"/>\n      <text x=\"22\" y=\"27\" fill=\"#ffffff\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">🔥</text>\n      <text x=\"22\" y=\"42\" fill=\"#dc2626\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">ETANOL 96%</text>\n      <text x=\"22\" y=\"55\" fill=\"#7f1d1d\" font-size=\"7\" font-weight=\"bold\" text-anchor=\"middle\">INFLAMABLE</text>\n    </g>\n    <!-- Advertencia de riesgo de explosión -->\n    <line x1=\"45\" y1=\"5\" x2=\"65\" y2=\"10\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n    <text x=\"55\" y=\"-5\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\">¡FUEGO!</text>\n  </g>\n\n  <!-- PELIGRO 4: Investigador pipeteando con la boca sin guantes ni gafas (x: 560 to 700, y: 230 to 420) -->\n  <g id=\"danger-pipeta\" transform=\"translate(565, 230)\" class=\"cursor-pointer\" filter=\"url(#shadowLab)\">\n    <!-- Cabeza -->\n    <circle cx=\"35\" cy=\"25\" r=\"18\" fill=\"#fed7aa\"/>\n    <path d=\"M20 18 Q35 8 50 18 Q45 12 35 12 Z\" fill=\"#451a03\"/> <!-- Pelo -->\n    <!-- Ojos expuestos (SIN GAFAS) -->\n    <circle cx=\"28\" cy=\"24\" r=\"2.5\" fill=\"#0f172a\"/>\n    <circle cx=\"42\" cy=\"24\" r=\"2.5\" fill=\"#0f172a\"/>\n    <!-- Pipeta de vidrio en la boca (PRÁCTICA PROHIBIDA) -->\n    <line x1=\"35\" y1=\"36\" x2=\"20\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"4\"/>\n    <line x1=\"20\" y1=\"90\" x2=\"15\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"4\"/>\n    <circle cx=\"35\" cy=\"36\" r=\"3\" fill=\"#dc2626\"/>\n\n    <!-- Cuerpo con bata -->\n    <rect x=\"15\" y=\"45\" width=\"40\" height=\"85\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"2\" rx=\"4\"/>\n    <!-- Manos al descubierto (SIN GUANTES DE NITRILO) -->\n    <circle cx=\"12\" cy=\"95\" r=\"7\" fill=\"#fed7aa\"/>\n    <circle cx=\"58\" cy=\"95\" r=\"7\" fill=\"#fed7aa\"/>\n    \n    <!-- Aviso de riesgo biológico/químico -->\n    <g transform=\"translate(65, 10)\">\n      <polygon points=\"15,0 30,26 0,26\" fill=\"#ef4444\"/>\n      <text x=\"15\" y=\"21\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n      <text x=\"15\" y=\"38\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">PIPETEO ORAL</text>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "lab-quimicos",
        "name": "Reactivos químicos sin etiquetar y tapón abierto",
        "category": "Riesgo Químico",
        "severity": "Muy Grave",
        "rect": {
          "left": 10,
          "top": 56,
          "width": 14,
          "height": 22
        },
        "description": "Frascos de disolventes y ácidos agresivos colocados sobre la encimera sin etiqueta de identificación, sin pictogramas CLP y con tapón retirado provocando vertidos corrosivos.",
        "consequences": "Quemaduras químicas cutáneas y oculares, intoxicación por inhalación de vapores tóxicos y riesgo de reacciones cruzadas violentas.",
        "regulation": "Real Decreto 374/2001 sobre la protección de la salud y seguridad de los trabajadores contra los riesgos relacionados con los agentes químicos y Reglamento (CE) 1272/2008 (CLP). Todo recipiente debe estar inequívocamente identificado con su ficha de datos de seguridad.",
        "prevention": "Etiquetar de forma inmediata con nombre, pictogramas de peligro y frases H/P; trasvasar en bandejas de retención estancas y cerrar herméticamente tras cada uso."
      },
      {
        "id": "lab-bunsen",
        "name": "Mechero Bunsen encendido junto a disolvente inflamable",
        "category": "Incendios y Explosiones",
        "severity": "Muy Grave",
        "rect": {
          "left": 36,
          "top": 52,
          "width": 15,
          "height": 25
        },
        "description": "Mechero de gas con llama abierta desatendido situado a escasos centímetros de una botella de etanol al 96% altamente volátil e inflamable.",
        "consequences": "Deflagración repentina, llamarada expansiva y conato de incendio en el laboratorio con riesgo de quemaduras de segundo y tercer grado.",
        "regulation": "Real Decreto 374/2001 y RD 486/1997. Prohibición expresa de aproximar fuentes de ignición o focos térmicos abiertos a sustancias con punto de inflamación bajo.",
        "prevention": "Mantener distancias de seguridad mínimas de al menos 1,5 metros entre mecheros y disolventes, sustituir la llama abierta por mantas calefactoras eléctricas y almacenar inflamables en armarios protegidos RF90."
      },
      {
        "id": "lab-ducha",
        "name": "Ducha de emergencia y lavaojos bloqueado por cajas",
        "category": "Primeros Auxilios y Emergencias",
        "severity": "Muy Grave",
        "rect": {
          "left": 80,
          "top": 20,
          "width": 15,
          "height": 44
        },
        "description": "Pila de tres cajas pesadas de vidrio y reactivos apiladas justo bajo la ducha de emergencia y obstruyendo la maneta del lavaojos.",
        "consequences": "Imposibilidad de descontaminación inmediata ante una salpicadura ocular o corporal de ácido, provocando lesiones cáusticas irreversibles o ceguera.",
        "regulation": "Real Decreto 486/1997 y NTP 500 del INSST (Duchas y lavaojos de emergencia). Las instalaciones de socorro deben estar permanentemente despejadas y accesibles en menos de 10 segundos desde cualquier punto del laboratorio.",
        "prevention": "Despejar de inmediato el perímetro de 1 metro alrededor de la ducha, pintar franjas amarillas en el suelo y realizar pruebas hidráulicas de caudal semanales."
      },
      {
        "id": "lab-pipeta",
        "name": "Pipeteo con la boca sin guantes ni gafas de seguridad",
        "category": "Buenas Prácticas de Laboratorio",
        "severity": "Muy Grave",
        "rect": {
          "left": 56,
          "top": 38,
          "width": 14,
          "height": 32
        },
        "description": "Técnico aspirando líquidos químicos con la boca directamente sobre una pipeta de vidrio, careciendo además de gafas antisalpicaduras y guantes de nitrilo.",
        "consequences": "Ingestión accidental de tóxicos o patógenos, quemaduras mucosas en faringe y estómago, y contaminación transdérmica.",
        "regulation": "Real Decreto 664/1997 sobre agentes biológicos, RD 374/2001 y RD 773/1997 (EPIs). El pipeteo con la boca está taxativamente prohibido en toda instalación química o biomédica.",
        "prevention": "Obligatoriedad estricta de utilizar peras de goma, micropipetas automáticas o pipeteadores eléctricos, junto con gafas de montura integral (UNE-EN 166)."
      },
      {
        "id": "lab-campana",
        "name": "Campana extractora de gases apagada con guillotina arriba",
        "category": "Protección Colectiva",
        "severity": "Grave",
        "rect": {
          "left": 22,
          "top": 18,
          "width": 17,
          "height": 34
        },
        "description": "Vitrina de extracción con la pantalla de cristal levantada al 100% y el motor de aspiración desconectado mientras se evapora un reactivo corrosivo en su interior.",
        "consequences": "Dispersión de contaminantes químicos en la atmósfera respirable de la sala, con exposición crónica o aguda del personal.",
        "regulation": "Norma UNE-EN 14175 y Real Decreto 374/2001. Las campanas deben mantener una velocidad de captación mínima de 0,5 m/s y trabajar con la guillotina a una altura máxima de 40 cm.",
        "prevention": "Trabajar siempre con el extractor activado, mantener la guillotina bajada a la marca de seguridad e incorporar un anemómetro con alarma sonora de bajo caudal."
      }
    ]
  },
  {
    "id": "cocina",
    "name": "Cocina Industrial y Hostelería",
    "subtitle": "Restauración Colectiva y Elaboración de Alimentos",
    "description": "Cocina profesional de gran volumen con freidoras industriales, fuegos abiertos, superficies cortantes, aceites a alta temperatura y riesgos de resbalón.",
    "badgeColor": "rose",
    "icon": "utensils",
    "timeLimit": 120,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"cookWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n    <linearGradient id=\"steelGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"50%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n    <filter id=\"shadowCook\">\n      <feDropShadow dx=\"2\" dy=\"4\" stdDeviation=\"3\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <!-- Pared de acero y azulejo blanco -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"320\" fill=\"url(#cookWall)\"/>\n  \n  <!-- Suelo de gres cerámico de cocina -->\n  <rect x=\"0\" y=\"320\" width=\"1000\" height=\"280\" fill=\"#78350f\"/>\n  <g stroke=\"#92400e\" stroke-width=\"2\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"380\" x2=\"1000\" y2=\"380\"/>\n    <line x1=\"0\" y1=\"460\" x2=\"1000\" y2=\"460\"/>\n    <line x1=\"0\" y1=\"540\" x2=\"1000\" y2=\"540\"/>\n    <line x1=\"200\" y1=\"320\" x2=\"100\" y2=\"600\"/>\n    <line x1=\"400\" y1=\"320\" x2=\"350\" y2=\"600\"/>\n    <line x1=\"600\" y1=\"320\" x2=\"600\" y2=\"600\"/>\n    <line x1=\"800\" y1=\"320\" x2=\"850\" y2=\"600\"/>\n  </g>\n\n  <!-- PELIGRO 5: Campana extractora saturada de grasa con goteo (x: 520 to 760, y: 70 to 220) -->\n  <g id=\"danger-campana-cocina\" transform=\"translate(520, 70)\" class=\"cursor-pointer\" filter=\"url(#shadowCook)\">\n    <!-- Cuerpo de campana de acero inoxidable -->\n    <polygon points=\"0,70 40,0 200,0 240,70\" fill=\"url(#steelGrad)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect y=\"70\" width=\"240\" height=\"30\" fill=\"#475569\"/>\n    <!-- Filtros de lamas engrasados en amarillo oscuro -->\n    <rect x=\"20\" y=\"75\" width=\"60\" height=\"20\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n    <rect x=\"90\" y=\"75\" width=\"60\" height=\"20\" fill=\"#854d0e\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n    <rect x=\"160\" y=\"75\" width=\"60\" height=\"20\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n    <!-- Gotas de grasa colgando y cayendo hacia los fogones -->\n    <circle cx=\"50\" cy=\"102\" r=\"3.5\" fill=\"#78350f\"/>\n    <circle cx=\"120\" cy=\"105\" r=\"4\" fill=\"#78350f\"/>\n    <path d=\"M120 108 L120 140\" stroke=\"#78350f\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n    <text x=\"120\" y=\"45\" fill=\"#facc15\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">FILTROS SATURADOS DE GRASA</text>\n  </g>\n\n  <!-- PELIGRO 4: Llave de corte de gas y extintor bloqueados por ollas (x: 810 to 970, y: 130 to 380) -->\n  <g id=\"danger-gas-cocina\" class=\"cursor-pointer\" filter=\"url(#shadowCook)\">\n    <g transform=\"translate(850, 140)\">\n      <!-- Válvula amarilla de corte de gas -->\n      <circle cx=\"20\" cy=\"20\" r=\"18\" fill=\"#eab308\" stroke=\"#a16207\" stroke-width=\"2\"/>\n      <rect x=\"16\" y=\"0\" width=\"8\" height=\"40\" fill=\"#dc2626\" rx=\"2\"/>\n      <text x=\"20\" y=\"-8\" fill=\"#eab308\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">CORTE GAS</text>\n      <!-- Extintor clase F (para aceites) -->\n      <rect x=\"5\" y=\"55\" width=\"30\" height=\"70\" rx=\"10\" fill=\"#dc2626\"/>\n      <text x=\"20\" y=\"95\" fill=\"#ffffff\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">CLASE F</text>\n    </g>\n    <!-- Pilas de cacerolas gigantes y ollas tapando todo -->\n    <g transform=\"translate(820, 230)\">\n      <ellipse cx=\"60\" cy=\"20\" rx=\"55\" ry=\"16\" fill=\"url(#steelGrad)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"5\" y=\"20\" width=\"110\" height=\"35\" fill=\"url(#steelGrad)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <ellipse cx=\"60\" cy=\"55\" rx=\"55\" ry=\"16\" fill=\"#64748b\"/>\n      \n      <ellipse cx=\"65\" cy=\"65\" rx=\"50\" ry=\"14\" fill=\"url(#steelGrad)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"15\" y=\"65\" width=\"100\" height=\"35\" fill=\"url(#steelGrad)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <ellipse cx=\"65\" cy=\"100\" rx=\"50\" ry=\"14\" fill=\"#64748b\"/>\n\n      <circle cx=\"65\" cy=\"50\" r=\"14\" fill=\"#ef4444\"/>\n      <text x=\"65\" y=\"55\" fill=\"#ffffff\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    </g>\n  </g>\n\n  <!-- Bloque de cocina industrial de acero -->\n  <g transform=\"translate(500, 280)\" filter=\"url(#shadowCook)\">\n    <rect width=\"280\" height=\"150\" fill=\"url(#steelGrad)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Fogones encendidos -->\n    <circle cx=\"60\" cy=\"25\" r=\"28\" fill=\"#1e293b\"/>\n    <circle cx=\"180\" cy=\"25\" r=\"28\" fill=\"#1e293b\"/>\n    <circle cx=\"60\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-dasharray=\"4\"/>\n    <circle cx=\"180\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-dasharray=\"4\"/>\n  </g>\n\n  <!-- PELIGRO 3: Sartén con aceite hirviendo con mango sobresaliendo al pasillo (x: 580 to 730, y: 300 to 430) -->\n  <g id=\"danger-sarten\" transform=\"translate(580, 300)\" class=\"cursor-pointer\" filter=\"url(#shadowCook)\">\n    <!-- Sartén al fuego -->\n    <circle cx=\"50\" cy=\"30\" r=\"32\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"30\" r=\"26\" fill=\"#a16207\" opacity=\"0.8\"/>\n    <!-- Humo denso de aceite sobrecalentado a 250ºC -->\n    <path d=\"M45 15 Q35 -5 45 -25 M55 18 Q65 0 55 -20\" stroke=\"#fef08a\" stroke-width=\"3\" fill=\"none\" opacity=\"0.8\"/>\n    <!-- MANGO SOBRESALIENDO TOTALMENTE HACIA EL PASILLO -->\n    <rect x=\"75\" y=\"24\" width=\"65\" height=\"12\" rx=\"4\" fill=\"#0f172a\" stroke=\"#ef4444\" stroke-width=\"2\" transform=\"rotate(18, 75, 24)\"/>\n    <text x=\"120\" y=\"10\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\">MANGO AL PASO</text>\n  </g>\n\n  <!-- Mesa de preparación izquierda -->\n  <g transform=\"translate(50, 320)\" filter=\"url(#shadowCook)\">\n    <rect width=\"250\" height=\"18\" fill=\"url(#steelGrad)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"20\" y=\"18\" width=\"15\" height=\"140\" fill=\"#64748b\"/>\n    <rect x=\"215\" y=\"18\" width=\"15\" height=\"140\" fill=\"#64748b\"/>\n    <!-- Tabla de cortar -->\n    <rect x=\"40\" y=\"-12\" width=\"100\" height=\"12\" rx=\"2\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- PELIGRO 2: Cuchillo de chef afilado sobresaliendo en el borde (x: 120 to 280, y: 350 to 460) -->\n  <g id=\"danger-cuchillo\" transform=\"translate(130, 335)\" class=\"cursor-pointer\" filter=\"url(#shadowCook)\">\n    <!-- Hoja afilada de 25 cm apuntando hacia el exterior -->\n    <path d=\"M40 0 L115 15 L40 18 Z\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <!-- Mango negro del cuchillo -->\n    <rect x=\"0\" y=\"2\" width=\"40\" height=\"14\" rx=\"3\" fill=\"#0f172a\"/>\n    <!-- Brillo en filo cortante -->\n    <line x1=\"40\" y1=\"18\" x2=\"115\" y2=\"15\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n    <circle cx=\"120\" cy=\"15\" r=\"8\" fill=\"#ef4444\"/>\n    <text x=\"120\" y=\"19\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    <text x=\"75\" y=\"38\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\">HOJA VOLADA AL AIRE</text>\n  </g>\n\n  <!-- PELIGRO 1: Charco de grasa y agua resbaladizo en suelo frente a freidora (x: 350 to 570, y: 430 to 550) -->\n  <g id=\"danger-grasa-suelo\" class=\"cursor-pointer\" filter=\"url(#shadowCook)\">\n    <path d=\"M360 480 C400 440, 480 430, 530 460 C580 490, 560 540, 500 550 C440 560, 380 540, 360 480 Z\" fill=\"#ca8a04\" opacity=\"0.75\"/>\n    <ellipse cx=\"450\" cy=\"490\" rx=\"55\" ry=\"18\" fill=\"#fef08a\" opacity=\"0.3\"/>\n    <g transform=\"translate(440, 470)\">\n      <polygon points=\"16,0 32,28 0,28\" fill=\"#ef4444\"/>\n      <text x=\"16\" y=\"22\" fill=\"#ffffff\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n      <text x=\"16\" y=\"42\" fill=\"#fef08a\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">SUELO GRASIENTO</text>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "cocina-grasa",
        "name": "Suelo resbaladizo con grasa y agua sin señalizar",
        "category": "Orden y Limpieza",
        "severity": "Grave",
        "rect": {
          "left": 35,
          "top": 72,
          "width": 22,
          "height": 20
        },
        "description": "Gran acumulación de aceite vegetal y agua de baldeo en el pasillo principal entre fogones sin pavimento antideslizante ni señalización.",
        "consequences": "Caídas al mismo nivel, resbalones con vertido de recipientes calientes sobre el cuerpo y traumatismos craneales.",
        "regulation": "Real Decreto 486/1997, Anexo I, Apartado 3 (Pavimentos de locales de trabajo). Los suelos deben ser regulares, no resbaladizos y disponer de drenaje adecuado en zonas húmedas.",
        "prevention": "Limpieza periódica en seco y desengrasado con detergente enzimático, colocación de alfombrillas de caucho ranuradas drenantes y uso obligatorio de calzado de seguridad con suela antideslizante certificada SRC."
      },
      {
        "id": "cocina-cuchillo",
        "name": "Cuchillo de chef volado sobre el borde del pasillo",
        "category": "Herramientas Manuales",
        "severity": "Grave",
        "rect": {
          "left": 12,
          "top": 58,
          "width": 16,
          "height": 18
        },
        "description": "Cuchillo cebollero de filo vivo de 25 cm dejado sobre la mesa de trabajo con la hoja orientada y sobresaliendo hacia la zona de tránsito del personal.",
        "consequences": "Heridas incisas profundas, cortes en extremidades por roce involuntario y laceraciones en tendones.",
        "regulation": "Real Decreto 1215/1997 sobre equipos de trabajo y NTP 398 del INSST. Las herramientas manuales cortantes deben depositarse de forma segura sobre soportes específicos.",
        "prevention": "Guardar los cuchillos en tacomas imantados de pared, utilizar fundas rígidas de protección y nunca dejarlos con el filo asomando fuera de la encimera."
      },
      {
        "id": "cocina-sarten",
        "name": "Sartén caliente con mango orientado hacia el exterior",
        "category": "Quemaduras y Superficies Calientes",
        "severity": "Muy Grave",
        "rect": {
          "left": 58,
          "top": 50,
          "width": 15,
          "height": 22
        },
        "description": "Sartén con aceite a más de 180°C colocada en el quemador exterior con el mango largo invadiendo la zona de paso de cocineros y ayudantes.",
        "consequences": "Vuelco accidental del recipiente sobre el cuerpo al ser enganchado al pasar, ocasionando quemaduras graves por escaldamiento térmico.",
        "regulation": "Real Decreto 486/1997 y Guía Técnica de Hostelería del INSST. Los recipientes de cocción deben posicionarse con los asideros hacia el interior de la placa de cocción.",
        "prevention": "Colocar obligatoriamente los mangos orientados hacia el interior del bloque de cocción y utilizar manoplas ignífugas térmicas para su manipulación."
      },
      {
        "id": "cocina-gas",
        "name": "Válvula de gas y extintor bloqueados por menaje",
        "category": "Seguridad contra Incendios",
        "severity": "Muy Grave",
        "rect": {
          "left": 81,
          "top": 22,
          "width": 16,
          "height": 42
        },
        "description": "Llave de corte rápido de gas propano/natural y extintor de eficacia F (grasas) ocultos y bloqueados por pilas de ollas de acero inoxidable.",
        "consequences": "Imposibilidad de cortar el suministro de combustible ante una fuga o extinguir un fuego de grasas, propagando el incendio a toda la instalación.",
        "regulation": "Real Decreto 513/2017 (Reglamento de instalaciones de protección contra incendios) y Código Técnico de la Edificación (DB-SI). Los pulsadores de corte de gas y extintores deben estar visibles y libres de obstáculos.",
        "prevention": "Establecer una zona perimetral pintada de prohibición de depósito en torno a las llaves de gas y dotar a la cocina de sistema automático de extinción bajo campana."
      },
      {
        "id": "cocina-campana",
        "name": "Filtros de campana saturados de grasa con riesgo de incendio",
        "category": "Riesgo de Incendio",
        "severity": "Grave",
        "rect": {
          "left": 52,
          "top": 12,
          "width": 24,
          "height": 25
        },
        "description": "Filtros de lamas de la campana extractora completamente cubiertos de grasa requemada goteando directamente sobre los fuegos de cocción.",
        "consequences": "Ignición espontánea de los vapores grasos, inflamación del conducto de extracción y propagación fulgurante del fuego por el tiro de humos.",
        "regulation": "Código Técnico de la Edificación (DB-SI 1, Sección 2) y Ordenanzas Municipales de Prevención de Incendios. Las campanas deben limpiarse con periodicidad mínima mensual.",
        "prevention": "Limpieza e inmersión semanal de los filtros en baño desengrasante cáustico y revisión anual de conductos por empresa mantenedora autorizada."
      }
    ]
  },
  {
    "id": "hospital",
    "name": "Hospital y Centro Sanitario",
    "subtitle": "Atención Médica, Urgencias y Hospitalización",
    "description": "Entorno asistencial con presencia de material cortopunzante biopeligroso, gases medicinales comprimidos, movilización de pacientes y equipos rodantes.",
    "badgeColor": "teal",
    "icon": "activity",
    "timeLimit": 120,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"hospWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f766e\"/>\n      <stop offset=\"100%\" stop-color=\"#115e59\"/>\n    </linearGradient>\n    <linearGradient id=\"hospFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#ccfbf1\"/>\n      <stop offset=\"100%\" stop-color=\"#99f6e4\"/>\n    </linearGradient>\n    <filter id=\"shadowHosp\">\n      <feDropShadow dx=\"2\" dy=\"4\" stdDeviation=\"3\" flood-opacity=\"0.3\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"320\" fill=\"url(#hospWall)\"/>\n  <rect x=\"0\" y=\"320\" width=\"1000\" height=\"280\" fill=\"url(#hospFloor)\"/>\n  \n  <!-- Pasamanos hospitalario en pared -->\n  <line x1=\"0\" y1=\"260\" x2=\"1000\" y2=\"260\" stroke=\"#f59e0b\" stroke-width=\"8\"/>\n  <line x1=\"0\" y1=\"264\" x2=\"1000\" y2=\"264\" stroke=\"#d97706\" stroke-width=\"2\"/>\n\n  <!-- PELIGRO 2: Botellas de oxígeno medicinal sin cadena de anclaje (x: 780 to 930, y: 150 to 400) -->\n  <g id=\"danger-oxigeno\" transform=\"translate(800, 150)\" class=\"cursor-pointer\" filter=\"url(#shadowHosp)\">\n    <!-- Botella de O2 medicinal blanca y verde, alta (200 bar de presión) -->\n    <rect x=\"20\" y=\"30\" width=\"35\" height=\"180\" rx=\"14\" fill=\"#ffffff\" stroke=\"#047857\" stroke-width=\"3\"/>\n    <rect x=\"20\" y=\"30\" width=\"35\" height=\"40\" rx=\"10\" fill=\"#ffffff\"/>\n    <rect x=\"28\" y=\"10\" width=\"18\" height=\"20\" fill=\"#94a3b8\"/>\n    <!-- Manómetro de presión con aguja en rojo -->\n    <circle cx=\"37\" cy=\"12\" r=\"9\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <text x=\"37\" y=\"110\" fill=\"#047857\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90, 37, 110)\" text-anchor=\"middle\">O2 MEDICINAL</text>\n\n    <!-- AUSENCIA TOTAL DE CADENA DE FIJACIÓN -->\n    <line x1=\"-10\" y1=\"120\" x2=\"90\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n    <text x=\"40\" y=\"235\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">SIN CADENA ANTIVUELCO</text>\n    <!-- Botella inclinándose hacia el suelo -->\n    <polygon points=\"55,80 70,70 70,90\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- Cama hospitalaria / Camilla -->\n  <!-- PELIGRO 4: Camilla con frenos desbloqueados en rampa (x: 560 to 780, y: 280 to 470) -->\n  <g id=\"danger-camilla\" transform=\"translate(560, 280)\" class=\"cursor-pointer\" filter=\"url(#shadowHosp)\">\n    <!-- Estructura de la cama -->\n    <rect x=\"0\" y=\"50\" width=\"190\" height=\"22\" rx=\"4\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <!-- Colchón sanitario azul -->\n    <rect x=\"5\" y=\"25\" width=\"180\" height=\"25\" rx=\"3\" fill=\"#0284c7\"/>\n    <!-- Almohada -->\n    <rect x=\"150\" y=\"15\" width=\"32\" height=\"15\" rx=\"3\" fill=\"#f8fafc\"/>\n    <!-- Ruedas SIN FRENO ACCIONADO (Pedal en posición libre roja) -->\n    <g transform=\"translate(25, 72)\">\n      <circle cx=\"10\" cy=\"20\" r=\"14\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"3\"/>\n      <!-- Pedal de freno levantado (libre) -->\n      <line x1=\"10\" y1=\"8\" x2=\"24\" y2=\"4\" stroke=\"#ef4444\" stroke-width=\"4\"/>\n      <text x=\"10\" y=\"48\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">FRENO OFF</text>\n    </g>\n    <g transform=\"translate(145, 72)\">\n      <circle cx=\"10\" cy=\"20\" r=\"14\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"3\"/>\n      <line x1=\"10\" y1=\"8\" x2=\"24\" y2=\"4\" stroke=\"#ef4444\" stroke-width=\"4\"/>\n    </g>\n    <!-- Flechas de movimiento accidental por pendiente -->\n    <path d=\"M-15 60 L-35 60\" stroke=\"#ef4444\" stroke-width=\"4\" marker-end=\"url(#arrow)\"/>\n    <text x=\"80\" y=\"15\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\">DESPLAZAMIENTO ACCIDENTAL</text>\n  </g>\n\n  <!-- Mesa auxiliar clínica izquierda -->\n  <g transform=\"translate(100, 320)\" filter=\"url(#shadowHosp)\">\n    <rect width=\"180\" height=\"15\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\" rx=\"2\"/>\n    <rect x=\"15\" y=\"15\" width=\"10\" height=\"130\" fill=\"#cbd5e1\"/>\n    <rect x=\"155\" y=\"15\" width=\"10\" height=\"130\" fill=\"#cbd5e1\"/>\n  </g>\n\n  <!-- PELIGRO 1: Aguja hipodérmica usada sin capuchón (x: 140 to 280, y: 330 to 440) -->\n  <g id=\"danger-aguja\" transform=\"translate(150, 335)\" class=\"cursor-pointer\" filter=\"url(#shadowHosp)\">\n    <!-- Batea metálica -->\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"24\" rx=\"4\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <!-- Jeringa con aguja descubierta con gota de sangre -->\n    <rect x=\"15\" y=\"6\" width=\"40\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.6\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n    <!-- Émbolo -->\n    <line x1=\"15\" y1=\"11\" x2=\"0\" y2=\"11\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <!-- Aguja de acero afilada al aire -->\n    <line x1=\"55\" y1=\"11\" x2=\"85\" y2=\"11\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <!-- Gota de sangre roja en la punta (RIESGO BIOLÓGICO) -->\n    <circle cx=\"87\" cy=\"11\" r=\"3\" fill=\"#dc2626\"/>\n    <!-- Símbolo de riesgo biológico -->\n    <circle cx=\"105\" cy=\"11\" r=\"10\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n    <text x=\"105\" y=\"15\" fill=\"#000000\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">☣</text>\n    <text x=\"50\" y=\"38\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\">AGUJA DESTAPADA</text>\n  </g>\n\n  <!-- PELIGRO 3: Bolsa de residuos biosanitarios infecciosos rota en el pasillo (x: 380 to 580, y: 440 to 560) -->\n  <g id=\"danger-residuos\" transform=\"translate(390, 440)\" class=\"cursor-pointer\" filter=\"url(#shadowHosp)\">\n    <!-- Bolsa amarilla de residuos Grupo III desgarrada en suelo -->\n    <path d=\"M20 60 C10 30, 40 10, 80 15 C120 10, 140 40, 130 70 C110 90, 40 85, 20 60 Z\" fill=\"#eab308\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <!-- Rotura con gasas manchadas y apósitos saliendo -->\n    <path d=\"M70 40 L90 55 L75 70\" stroke=\"#dc2626\" stroke-width=\"3\" fill=\"none\"/>\n    <ellipse cx=\"105\" cy=\"65\" rx=\"14\" ry=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n    <circle cx=\"105\" cy=\"65\" r=\"4\" fill=\"#dc2626\"/>\n    <text x=\"80\" y=\"35\" fill=\"#000000\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">☣</text>\n    <text x=\"80\" y=\"100\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">RESIDUOS GRUPO III</text>\n  </g>\n\n  <!-- PELIGRO 5: Celador empujando con flexión lumbar lesiva (x: 240 to 390, y: 240 to 430) -->\n  <g id=\"danger-ergonomia-hosp\" transform=\"translate(250, 240)\" class=\"cursor-pointer\" filter=\"url(#shadowHosp)\">\n    <!-- Celador curvando espalda bruscamente -->\n    <circle cx=\"35\" cy=\"30\" r=\"14\" fill=\"#fed7aa\"/>\n    <path d=\"M40 45 Q75 40 95 65\" stroke=\"#0d9488\" stroke-width=\"18\" fill=\"none\" stroke-linecap=\"round\"/>\n    <!-- Rayos de dolor lumbar en L4-L5 -->\n    <path d=\"M55 45 L50 35 L60 40 L55 30\" stroke=\"#ef4444\" stroke-width=\"3\" fill=\"none\"/>\n    <rect x=\"25\" y=\"70\" width=\"8\" height=\"50\" fill=\"#134e4a\"/>\n    <rect x=\"42\" y=\"70\" width=\"8\" height=\"50\" fill=\"#134e4a\"/>\n    <text x=\"60\" y=\"20\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\">SOBREESFUERZO</text>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "hosp-aguja",
        "name": "Aguja hipodérmica usada abandonada sin encapuchar",
        "category": "Riesgo Biológico",
        "severity": "Muy Grave",
        "rect": {
          "left": 14,
          "top": 56,
          "width": 14,
          "height": 18
        },
        "description": "Aguja de punción venosa con restos hemáticos sobre una batea en la mesa auxiliar, careciendo de dispositivo de bioseguridad y sin desechar en contenedor rígido.",
        "consequences": "Inoculación accidental de patógenos de transmisión hemática (VIH, Hepatitis B, Hepatitis C) por pinchazo percutáneo.",
        "regulation": "Orden ESS/1451/2013 y Real Decreto 664/1997 sobre la protección de los trabajadores contra los riesgos relacionados con la exposición a agentes biológicos. Prohibición estricta de reencapuchar agujas manualmente.",
        "prevention": "Utilizar exclusivamente material punzante con mecanismo de seguridad pasivo retráctil y depositar inmediatamente en contenedor rígido amarillo homologado sin manipulaciones intermedias."
      },
      {
        "id": "hosp-oxigeno",
        "name": "Botellas de oxígeno medicinal libres sin cadena de amarre",
        "category": "Equipos a Presión",
        "severity": "Muy Grave",
        "rect": {
          "left": 78,
          "top": 25,
          "width": 15,
          "height": 42
        },
        "description": "Botella de oxígeno a 200 bar de presión situada de pie sin cadena de sujeción mural ni carro de transporte adaptado en zona de paso.",
        "consequences": "Caída de la botella, cizallamiento violento de la tulipa/manorreductor y conversión del cilindro en un proyectil descontrolado con riesgo de explosión.",
        "regulation": "Real Decreto 2060/2008 (Reglamento de equipos a presión, ITC-EP-6) y NTP 368 del INSST. Las botellas deben amarrarse permanentemente en posición vertical mediante cadenas metálicas.",
        "prevention": "Fijar sólidamente a la pared con doble cadena o trasladar en carros portabotellas tubulares con abrazadera de seguridad."
      },
      {
        "id": "hosp-residuos",
        "name": "Bolsa de residuos biosanitarios infecciosos rota en suelo",
        "category": "Gestión de Residuos Sanitarios",
        "severity": "Muy Grave",
        "rect": {
          "left": 38,
          "top": 74,
          "width": 20,
          "height": 19
        },
        "description": "Bolsa amarilla de residuos biosanitarios especiales (Grupo III) rota y con vertido de apósitos y gasas con exudados en mitad del pasillo clínico.",
        "consequences": "Diseminación de microorganismos multirresistentes, infecciones nosocomiales en personal sanitario y caídas por pisada de fluidos biológicos.",
        "regulation": "Real Decreto 664/1997 y normativas autonómicas de gestión de residuos biosanitarios. Los residuos del Grupo III deben almacenarse en recipientes rígidos o bolsas de galga reforzada estancas.",
        "prevention": "Acotar la zona de inmediato, recoger con kit de vertidos biológicos utilizando virucidas homologados y desechar en contenedor rígido de bioseguridad."
      },
      {
        "id": "hosp-camilla",
        "name": "Camilla con frenos desbloqueados en zona de pendiente",
        "category": "Equipos de Trabajo",
        "severity": "Grave",
        "rect": {
          "left": 56,
          "top": 46,
          "width": 22,
          "height": 32
        },
        "description": "Camilla de transporte de pacientes detenida en una rampa con los pedales de freno en posición libre, sin operario a su cargo.",
        "consequences": "Desplazamiento involuntario por gravedad, colisión contra paredes o caída del paciente con fracturas y contusiones graves.",
        "regulation": "Real Decreto 1215/1997 sobre utilización de equipos de trabajo y directivas de seguridad clínica del paciente.",
        "prevention": "Accionar de forma sistemática el freno centralizado en las cuatro ruedas cada vez que se detenga la camilla y utilizar barandillas laterales elevadas."
      },
      {
        "id": "hosp-ergonomia",
        "name": "Movilización de paciente con flexión lumbar lesiva",
        "category": "Ergonomía Sanitaria",
        "severity": "Grave",
        "rect": {
          "left": 24,
          "top": 40,
          "width": 15,
          "height": 32
        },
        "description": "Celador empujando y traccionando de espaldas con las rodillas bloqueadas y forzando la curvatura de la columna sin ayuda de medios mecánicos.",
        "consequences": "Lumbalgias mecánicas agudas, protrusiones y hernias discales incapacitantes.",
        "regulation": "Real Decreto 487/1997 sobre manipulación manual de cargas y Guía Técnica del INSST para el sector sanitario.",
        "prevention": "Emplear transferidores de rodillos, grúas hospitalarias de bipedestación o movilización y aplicar principios de higiene postural (espalda recta, piernas flexionadas)."
      }
    ]
  },
  {
    "id": "taller",
    "name": "Taller Mecánico de Automoción",
    "subtitle": "Mantenimiento y Reparación de Vehículos a Motor",
    "description": "Taller de reparación mecánica con elevadores de vehículos, fosos de inspección, maquinaria rotativa de esmerilado y sistemas neumáticos a presión.",
    "badgeColor": "blue",
    "icon": "wrench",
    "timeLimit": 120,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"tallerWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n    <linearGradient id=\"tallerFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <filter id=\"shadowTaller\">\n      <feDropShadow dx=\"3\" dy=\"5\" stdDeviation=\"4\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#tallerWall)\"/>\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#tallerFloor)\"/>\n\n  <!-- PELIGRO 4: Torre de neumáticos de 4m inestable a punto de caer (x: 790 to 950, y: 120 to 390) -->\n  <g id=\"danger-neumaticos\" transform=\"translate(800, 110)\" class=\"cursor-pointer\" filter=\"url(#shadowTaller)\">\n    <!-- 8 neumáticos apilados en equilibrio precario e inclinados -->\n    <g transform=\"rotate(8, 70, 240)\">\n      <ellipse cx=\"60\" cy=\"40\" rx=\"45\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <ellipse cx=\"60\" cy=\"70\" rx=\"46\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <ellipse cx=\"60\" cy=\"100\" rx=\"47\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <ellipse cx=\"60\" cy=\"130\" rx=\"48\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <ellipse cx=\"60\" cy=\"160\" rx=\"49\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <ellipse cx=\"60\" cy=\"190\" rx=\"50\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <ellipse cx=\"60\" cy=\"220\" rx=\"50\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"3\"/>\n    </g>\n    <!-- Advertencia de vuelco -->\n    <polygon points=\"10,80 30,80 20,60\" fill=\"#ef4444\"/>\n    <text x=\"60\" y=\"20\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">APILAMIENTO 4M INESTABLE</text>\n  </g>\n\n  <!-- PELIGRO 1: Coche en elevador hidráulico sin bloqueo mecánico (x: 360 to 640, y: 110 to 340) -->\n  <g id=\"danger-elevador\" transform=\"translate(360, 100)\" class=\"cursor-pointer\" filter=\"url(#shadowTaller)\">\n    <!-- Columnas del elevador hidráulico -->\n    <rect x=\"0\" y=\"0\" width=\"22\" height=\"340\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"250\" y=\"0\" width=\"22\" height=\"340\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    \n    <!-- Brazos telescópicos a 1.8 metros del suelo -->\n    <line x1=\"22\" y1=\"170\" x2=\"100\" y2=\"170\" stroke=\"#eab308\" stroke-width=\"8\"/>\n    <line x1=\"250\" y1=\"170\" x2=\"172\" y2=\"170\" stroke=\"#eab308\" stroke-width=\"8\"/>\n\n    <!-- Silueta del coche elevado -->\n    <g transform=\"translate(45, 80)\">\n      <rect width=\"180\" height=\"60\" rx=\"15\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <polygon points=\"35,0 60,-35 125,-35 150,0\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <polygon points=\"45,-2 65,-30 120,-30 140,-2\" fill=\"#38bdf8\" opacity=\"0.6\"/>\n      <!-- Ruedas -->\n      <circle cx=\"40\" cy=\"60\" r=\"18\" fill=\"#0f172a\"/>\n      <circle cx=\"140\" cy=\"60\" r=\"18\" fill=\"#0f172a\"/>\n    </g>\n\n    <!-- TRINQUETE DE SEGURIDAD DESENCLAVADO (PELIGRO DE CAÍDA BRUSCA) -->\n    <g transform=\"translate(0, 160)\">\n      <rect x=\"-35\" y=\"-10\" width=\"30\" height=\"25\" fill=\"#ef4444\" rx=\"3\"/>\n      <text x=\"-20\" y=\"6\" fill=\"#ffffff\" font-size=\"7\" font-weight=\"bold\" text-anchor=\"middle\">SIN SEGURO</text>\n    </g>\n    <text x=\"135\" y=\"40\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">TRINQUETE MECÁNICO DESACTIVADO</text>\n  </g>\n\n  <!-- PELIGRO 3: Operario esmerilando sin pantalla facial ni gafas (x: 100 to 250, y: 270 to 460) -->\n  <g id=\"danger-esmeril\" transform=\"translate(110, 270)\" class=\"cursor-pointer\" filter=\"url(#shadowTaller)\">\n    <!-- Banco de trabajo con amoladora -->\n    <rect x=\"0\" y=\"90\" width=\"100\" height=\"15\" fill=\"#475569\"/>\n    <circle cx=\"70\" cy=\"75\" r=\"16\" fill=\"#64748b\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n    <!-- Chispas incandescentes hacia la cara del operario -->\n    <path d=\"M70 70 L25 35 M70 65 L15 25 M70 60 L30 15\" stroke=\"#facc15\" stroke-width=\"2\"/>\n    <circle cx=\"20\" cy=\"30\" r=\"3\" fill=\"#fef08a\"/>\n\n    <!-- Operario con cara descubierta (SIN PROTECCIÓN OCULAR) -->\n    <circle cx=\"15\" cy=\"20\" r=\"14\" fill=\"#fed7aa\"/>\n    <circle cx=\"18\" cy=\"20\" r=\"2.5\" fill=\"#ef4444\"/> <!-- Ojo irritado expuesto -->\n    <text x=\"45\" y=\"-5\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\">SIN GAFAS / PANTALLA</text>\n  </g>\n\n  <!-- PELIGRO 2: Foso de mantenimiento abierto en el suelo (x: 250 to 530, y: 460 to 580) -->\n  <g id=\"danger-foso\" class=\"cursor-pointer\">\n    <!-- Hueco profundo en el suelo del taller sin barandillas ni cadenas -->\n    <rect x=\"250\" y=\"460\" width=\"280\" height=\"120\" fill=\"#090d16\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n    <text x=\"390\" y=\"525\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">FOSO ABIERTO SIN BARRERAS</text>\n    <line x1=\"250\" y1=\"460\" x2=\"530\" y2=\"580\" stroke=\"#ef4444\" stroke-width=\"2\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- PELIGRO 5: Manguera neumática con fuga y manómetro roto (x: 640 to 780, y: 370 to 520) -->\n  <g id=\"danger-compresor\" transform=\"translate(650, 370)\" class=\"cursor-pointer\" filter=\"url(#shadowTaller)\">\n    <rect width=\"60\" height=\"90\" rx=\"10\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <!-- Manómetro reventado con cristal roto -->\n    <circle cx=\"30\" cy=\"25\" r=\"14\" fill=\"#ffffff\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n    <line x1=\"22\" y1=\"18\" x2=\"38\" y2=\"32\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    <!-- Manguera serpenteando con rotura soplando aire a alta presión -->\n    <path d=\"M50 70 Q90 60 80 100 Q70 140 110 130\" stroke=\"#f59e0b\" stroke-width=\"8\" fill=\"none\"/>\n    <!-- Chorro soplante de aire a presión con partículas -->\n    <path d=\"M80 100 L120 90 M80 100 L125 105 M80 100 L115 118\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n    <text x=\"60\" y=\"150\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\">FUGA NEUMÁTICA 8 BAR</text>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "taller-elevador",
        "name": "Vehículo en elevador con trinquete de seguridad libre",
        "category": "Equipos de Elevación",
        "severity": "Muy Grave",
        "rect": {
          "left": 36,
          "top": 18,
          "width": 28,
          "height": 38
        },
        "description": "Automóvil de 1.800 kg elevado a 1,8 metros sostenido únicamente por la presión hidráulica de los pistones sin accionar el enclavamiento mecánico de seguridad.",
        "consequences": "Aplastamiento letal del mecánico por caída fulminante del vehículo ante un fallo de latiguillo o pérdida de presión hidráulica.",
        "regulation": "Norma UNE-EN 1493 (Elevadores de vehículos) y Real Decreto 1215/1997. Es preceptivo apoyar la carga sobre los trinquetes mecánicos de bloqueo antes de posicionarse bajo el vehículo.",
        "prevention": "Bajar siempre el elevador hasta encajar en el diente del trinquete de seguridad y prohibir la permanencia bajo el coche sin bloqueo verificado."
      },
      {
        "id": "taller-foso",
        "name": "Foso de inspección abierto sin barandillas perimetrales",
        "category": "Caídas a Distinto Nivel",
        "severity": "Muy Grave",
        "rect": {
          "left": 25,
          "top": 76,
          "width": 28,
          "height": 21
        },
        "description": "Abertura en el pavimento de 1,60 metros de profundidad sin cubrir con pasarelas, sin cadena de delimitación y sin zócalo perimetral.",
        "consequences": "Caída de trabajadores o clientes al fondo del foso sufriendo traumatismos craneoencefálicos o fracturas múltiples.",
        "regulation": "Real Decreto 486/1997, Anexo I, Apartado 3 (Aberturas en suelos). Los fosos de reparación deben disponer de barandillas móviles, cadenas o cubiertas seccionales cuando no estén en uso.",
        "prevention": "Cubrir el foso con lamas de cierre rígido enrollables o colocar barandillas tubulares desmontables de 90 cm de altura mientras no se trabaje en él."
      },
      {
        "id": "taller-esmeril",
        "name": "Mecánico esmerilando sin pantalla facial ni gafas",
        "category": "Protección Ocular",
        "severity": "Muy Grave",
        "rect": {
          "left": 10,
          "top": 45,
          "width": 15,
          "height": 32
        },
        "description": "Operario desbastando una pieza metálica en la amoladora de banco con chispas incandescentes proyectadas directamente hacia su rostro sin protección.",
        "consequences": "Incrustación de partículas metálicas candentes en la córnea, pérdida de visión ocular o quemaduras faciales.",
        "regulation": "Real Decreto 773/1997 sobre equipos de protección individual y RD 1215/1997 (Pantallas transparentes de protección en máquinas rotativas).",
        "prevention": "Uso obligatorio e inexcusable de pantalla facial integral abatible (UNE-EN 166) y regulación del deflector transparente de la propia amoladora a menos de 2 mm de la muela."
      },
      {
        "id": "taller-neumaticos",
        "name": "Torre de neumáticos de 4 metros inestable en pasillo",
        "category": "Almacenamiento y Cargas",
        "severity": "Grave",
        "rect": {
          "left": 79,
          "top": 20,
          "width": 16,
          "height": 45
        },
        "description": "Columna de 8 neumáticos de camión apilados verticalmente a 4 metros de altura con inclinación hacia el pasillo de tránsito sin jaula ni estantería.",
        "consequences": "Desmoronamiento de la columna sobre trabajadores en tránsito con traumatismos por aplastamiento.",
        "regulation": "Real Decreto 486/1997 y Ley 31/1995 de PRL. El apilamiento de materiales debe garantizar su rigidez y estabilidad frente a oscilaciones mecánicas.",
        "prevention": "Almacenar los neumáticos en estanterías metálicas paletizadas homologadas o racks portaneumáticos limitando la altura de estiba libre a 1,5 metros."
      },
      {
        "id": "taller-compresor",
        "name": "Manguera neumática con rotura y manómetro dañado",
        "category": "Equipos a Presión",
        "severity": "Grave",
        "rect": {
          "left": 64,
          "top": 62,
          "width": 15,
          "height": 25
        },
        "description": "Línea de aire comprimido a 8 bares con fisura expulsando chorro violento de aire y partículas junto a un calderín con manómetro agrietado.",
        "consequences": "Efecto látigo descontrolado de la manguera provocando contusiones, proyección de esquirlas a gran velocidad y sordera por ruido súbito.",
        "regulation": "Real Decreto 2060/2008 (Equipos a presión) y RD 1215/1997. Las conducciones flexibles deben someterse a revisiones periódicas y contar con válvulas de corte por exceso de caudal.",
        "prevention": "Incorporar cables de retención antisangrado (whipcheck) en acoples rápidos y sustituir de inmediato mangueras desgastadas o agrietadas."
      }
    ]
  },
  {
    "id": "alturas",
    "name": "Trabajos en Alturas y Cubiertas",
    "subtitle": "Rehabilitación de Tejas, Aleros y Estructuras",
    "description": "Intervención en cubierta inclinada a 12 metros de altura con lucernarios de plástico frágil, aleros sin red perimetral y chimeneas antiguas.",
    "badgeColor": "sky",
    "icon": "shield",
    "timeLimit": 120,
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"skyAlturas\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\"/>\n      <stop offset=\"70%\" stop-color=\"#38bdf8\"/>\n      <stop offset=\"100%\" stop-color=\"#bae6fd\"/>\n    </linearGradient>\n    <linearGradient id=\"roofGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#ea580c\"/>\n      <stop offset=\"100%\" stop-color=\"#9a3412\"/>\n    </linearGradient>\n    <filter id=\"shadowAlturas\">\n      <feDropShadow dx=\"2\" dy=\"5\" stdDeviation=\"4\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"600\" fill=\"url(#skyAlturas)\"/>\n\n  <!-- Nubes en el cielo a gran altura -->\n  <ellipse cx=\"200\" cy=\"80\" rx=\"70\" ry=\"20\" fill=\"#ffffff\" opacity=\"0.6\"/>\n  <ellipse cx=\"750\" cy=\"100\" rx=\"90\" ry=\"25\" fill=\"#ffffff\" opacity=\"0.5\"/>\n\n  <!-- Cubierta / Tejado inclinado a 30 grados (Cota de 12 metros) -->\n  <polygon points=\"100,220 900,220 980,550 50,550\" fill=\"url(#roofGrad)\" stroke=\"#7c2d12\" stroke-width=\"3\"/>\n  \n  <!-- Tejas curvas -->\n  <g stroke=\"#7c2d12\" stroke-width=\"2\" opacity=\"0.4\">\n    <line x1=\"200\" y1=\"220\" x2=\"180\" y2=\"550\"/>\n    <line x1=\"350\" y1=\"220\" x2=\"340\" y2=\"550\"/>\n    <line x1=\"500\" y1=\"220\" x2=\"500\" y2=\"550\"/>\n    <line x1=\"650\" y1=\"220\" x2=\"660\" y2=\"550\"/>\n    <line x1=\"800\" y1=\"220\" x2=\"820\" y2=\"550\"/>\n  </g>\n\n  <!-- PELIGRO 4: Línea de anclaje provisional atada a una chimenea precaria (x: 650 to 790, y: 110 to 290) -->\n  <g id=\"danger-chimenea\" transform=\"translate(650, 110)\" class=\"cursor-pointer\" filter=\"url(#shadowAlturas)\">\n    <!-- Chimenea de ladrillo vieja y agrietada -->\n    <rect width=\"70\" height=\"110\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    <!-- Grietas estructurales en chimenea -->\n    <path d=\"M15 20 L35 45 L25 75 M45 30 L60 60\" stroke=\"#451a03\" stroke-width=\"2.5\"/>\n    <!-- Cuerda amarrada al cuello de la chimenea (ANCLAJE NO HOMOLOGADO) -->\n    <rect x=\"-5\" y=\"45\" width=\"80\" height=\"10\" rx=\"3\" fill=\"#eab308\" stroke=\"#a16207\" stroke-width=\"2\"/>\n    <line x1=\"0\" y1=\"50\" x2=\"-140\" y2=\"150\" stroke=\"#eab308\" stroke-width=\"4\"/>\n    <circle cx=\"35\" cy=\"50\" r=\"10\" fill=\"#ef4444\"/>\n    <text x=\"35\" y=\"54\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    <text x=\"35\" y=\"130\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">CHIMENEA: NO HOMOLOGADA</text>\n  </g>\n\n  <!-- PELIGRO 2: Claraboya frágil de plástico sin red inferior (x: 160 to 340, y: 250 to 390) -->\n  <g id=\"danger-claraboya\" transform=\"translate(170, 260)\" class=\"cursor-pointer\" filter=\"url(#shadowAlturas)\">\n    <!-- Domo traslúcido de policarbonato envejecido -->\n    <polygon points=\"0,50 30,0 150,0 180,50\" fill=\"#38bdf8\" opacity=\"0.5\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n    <!-- Grieta en el plástico por donde alguien puede quebrar y caer 10m al vacío -->\n    <path d=\"M50 20 L80 35 L120 15\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n    <circle cx=\"85\" cy=\"25\" r=\"12\" fill=\"#ef4444\"/>\n    <text x=\"85\" y=\"30\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n    <text x=\"90\" y=\"70\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">SUPERFICIE FRÁGIL SIN RED</text>\n  </g>\n\n  <!-- PELIGRO 1: Operario en cubierta inclinada SIN ARNÉS ANTICAÍDAS (x: 450 to 610, y: 230 to 430) -->\n  <g id=\"danger-arnes\" transform=\"translate(460, 230)\" class=\"cursor-pointer\" filter=\"url(#shadowAlturas)\">\n    <!-- Operario agachado reparando tejas sin ningún arnés ni línea de vida -->\n    <circle cx=\"30\" cy=\"25\" r=\"15\" fill=\"#fed7aa\"/>\n    <path d=\"M18 20 Q30 10 42 20\" fill=\"#facc15\"/> <!-- Casco -->\n    <!-- Torso sin chaleco anticaídas (sin arnés) -->\n    <rect x=\"15\" y=\"40\" width=\"30\" height=\"45\" rx=\"4\" fill=\"#0284c7\"/>\n    <!-- Piernas sobre las tejas resbaladizas -->\n    <rect x=\"10\" y=\"85\" width=\"12\" height=\"40\" fill=\"#1e293b\"/>\n    <rect x=\"35\" y=\"85\" width=\"12\" height=\"40\" fill=\"#1e293b\"/>\n    <!-- Señal SIN ARNÉS -->\n    <g transform=\"translate(55, 10)\">\n      <polygon points=\"15,0 30,26 0,26\" fill=\"#ef4444\"/>\n      <text x=\"15\" y=\"21\" fill=\"#ffffff\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">!</text>\n      <text x=\"15\" y=\"40\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">SIN LÍNEA DE VIDA</text>\n    </g>\n  </g>\n\n  <!-- PELIGRO 3: Borde de cubierta sin barandilla perimetral ni red (x: 740 to 970, y: 290 to 440) -->\n  <g id=\"danger-borde-cubierta\" class=\"cursor-pointer\">\n    <line x1=\"750\" y1=\"360\" x2=\"980\" y2=\"550\" stroke=\"#ef4444\" stroke-width=\"4\" stroke-dasharray=\"8 6\"/>\n    <text x=\"860\" y=\"440\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(38, 860, 440)\" text-anchor=\"middle\">\n      SIN BARANDILLA (12M AL VACÍO)\n    </text>\n  </g>\n\n  <!-- PELIGRO 5: Escalera de mano sin sobrepasar 1m ni estar atada en cabeza (x: 50 to 170, y: 310 to 540) -->\n  <g id=\"danger-escalera-alturas\" transform=\"translate(60, 310)\" class=\"cursor-pointer\" filter=\"url(#shadowAlturas)\">\n    <g transform=\"rotate(18, 20, 100)\">\n      <rect x=\"0\" y=\"0\" width=\"6\" height=\"220\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      <rect x=\"40\" y=\"0\" width=\"6\" height=\"220\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      <line x1=\"6\" y1=\"30\" x2=\"40\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"70\" x2=\"40\" y2=\"70\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"110\" x2=\"40\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"150\" x2=\"40\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <line x1=\"6\" y1=\"190\" x2=\"40\" y2=\"190\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n    </g>\n    <!-- La parte superior no sobrepasa 1 metro del desembarco -->\n    <text x=\"30\" y=\"240\" fill=\"#ef4444\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">NO SOBREPASA 1M</text>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "alturas-arnes",
        "name": "Operario en cubierta inclinada sin arnés ni línea de vida",
        "category": "Caídas de Altura",
        "severity": "Muy Grave",
        "rect": {
          "left": 45,
          "top": 38,
          "width": 16,
          "height": 34
        },
        "description": "Trabajador reparando tejas sobre una pendiente del 30% a 12 metros de altura sin arnés anticaídas conectado a un punto de anclaje estructural.",
        "consequences": "Muerte por caída libre al vacío o secuelas de paraplejia/politraumatismo grave.",
        "regulation": "Real Decreto 2177/2004, de 12 de noviembre (Trabajos temporales en altura) y RD 1627/1997. En trabajos a más de 2 metros es preceptivo el empleo de dispositivos anticaídas certificados (UNE-EN 361) si no existen protecciones colectivas.",
        "prevention": "Instalar previamente una línea de vida horizontal certificada (UNE-EN 795) y amarrar el arnés con absorbedor de energía y dispositivo retráctil."
      },
      {
        "id": "alturas-claraboya",
        "name": "Claraboya translúcida frágil sin red inferior de seguridad",
        "category": "Cubiertas Frágiles",
        "severity": "Muy Grave",
        "rect": {
          "left": 16,
          "top": 42,
          "width": 18,
          "height": 24
        },
        "description": "Lucernario de plástico traslúcido agrietado por la radiación UV en el plano del tejado, sin red de seguridad bajo el hueco ni pasarelas de reparto de carga.",
        "consequences": "Ruptura repentina del plástico al pisar sobre él y precipitación del operario hacia el interior de la nave desde 10 metros de cota.",
        "regulation": "Real Decreto 2177/2004 y NTP 1032 del INSST. Se prohíbe taxativamente pisar o apoyarse sobre placas traslúcidas o cubiertas frágiles sin pasarelas de madera o redes de seguridad (UNE-EN 1263).",
        "prevention": "Montar redes bajo cubierta antes de acceder al tejado, delimitar la zona de claraboyas con mallazo metálico rígido y transitar exclusivamente sobre tablones de reparto."
      },
      {
        "id": "alturas-borde",
        "name": "Alero y borde de cubierta sin barandilla perimetral",
        "category": "Protección Colectiva",
        "severity": "Muy Grave",
        "rect": {
          "left": 74,
          "top": 48,
          "width": 23,
          "height": 25
        },
        "description": "Perímetro exterior del tejado sin ningún sistema de protección de borde: ausencia de barandillas rígidas provisionales y sin redes tipo horca.",
        "consequences": "Deslizamiento incontrolado del trabajador por la pendiente del tejado y caída al vacío sin retención física.",
        "regulation": "Real Decreto 1627/1997 (Anexo IV) y RD 2177/2004. Primacía obligatoria de la protección colectiva frente a la individual. El borde debe contar con barandilla resistente a 1 metro de altura, rodapié de 15 cm y protección intermedia.",
        "prevention": "Instalar sistema provisional de protección de borde (UNE-EN 13374 clase C para pendientes de cubierta) o redes de seguridad perimetrales."
      },
      {
        "id": "alturas-chimenea",
        "name": "Línea de vida provisional atada a chimenea precaria",
        "category": "Puntos de Anclaje",
        "severity": "Muy Grave",
        "rect": {
          "left": 65,
          "top": 18,
          "width": 14,
          "height": 30
        },
        "description": "Cuerda de seguridad amarrada al tiro de una chimenea de ladrillo antiguo con grietas profundas, utilizada como punto de anclaje para frenar una posible caída.",
        "consequences": "Colapso y desprendimiento total de la chimenea al recibir el impacto dinámico de una caída (600 kg de fuerza), arrastrando al operario al vacío.",
        "regulation": "Norma UNE-EN 795 (Dispositivos de anclaje). Todo punto de anclaje debe resistir una carga estática mínima de 12 kN y estar certificado por técnico competente en hormigón o estructura metálica.",
        "prevention": "Prohibir terminantemente el uso de elementos de albañilería como anclaje; taladrar con anclajes químicos en vigas maestras o forjados estructurales ensayados."
      },
      {
        "id": "alturas-escalera",
        "name": "Escalera de acceso sin sobrepasar 1 metro ni estar sujeta",
        "category": "Acceso a Cubiertas",
        "severity": "Grave",
        "rect": {
          "left": 5,
          "top": 52,
          "width": 12,
          "height": 38
        },
        "description": "Escalera de mano apoyada sobre el alero que finaliza a ras de la cubierta sin sobrepasar la altura reglamentaria y sin atadura en cabeza.",
        "consequences": "Deslizamiento lateral de la escalera o pérdida de equilibrio durante el momento crítico de desembarco del trabajador hacia el tejado.",
        "regulation": "Real Decreto 2177/2004 (Anexo). Los largueros de las escaleras de mano utilizadas para acceso deben sobrepasar al menos 1 metro por encima del plano de desembarco y fijarse en su parte superior.",
        "prevention": "Utilizar escaleras con prolongación telescópica superior de 1 metro y amarrar firmemente la cabeza de la escalera a un cáncamo fijo con abrazadera de seguridad."
      }
    ]
  }
];
