/**
 * BANCO DE DATOS DE ESCENARIOS ESTILO PÓSTER FORMATIVO (PRL CLASSROOM LIVE)
 * 8 Escenarios con 12 Objetos Numerados cada uno (Riesgos Verdaderos + Riesgos Falsos Seguros).
 */
window.PRL_SCENARIOS = [
  {
    "id": "hospital",
    "name": "Hospital y Urgencias",
    "subtitle": "Atención Sanitaria y Hospitalización",
    "description": "Área clínica de urgencias con pacientes, gases medicinales, instrumental punzante y residuos.",
    "badgeColor": "sky",
    "icon": "heart-pulse",
    "timeLimit": 90,
    "items": [
      {
        "id": "hosp-1",
        "num": 1,
        "name": "Botella de Oxígeno medicinal",
        "category": "Equipos a Presión",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 78,
          "top": 15,
          "width": 10,
          "height": 68
        },
        "badgeAlign": "tr",
        "description": "Botella de gas comprimido a 200 bar de pie sin cadena mural de amarre.",
        "consequences": "Vuelco violento, rotura de válvula y proyectil a alta presión descontrolado.",
        "regulation": "Real Decreto 2060/2008 (ITC-EP-6). Fijación vertical obligatoria con cadena.",
        "prevention": "Fijar a pared con doble cadena o trasladar en carro portabotellas con abrazadera."
      },
      {
        "id": "hosp-2",
        "num": 2,
        "name": "Pasamanos continuo de pared",
        "category": "Instalaciones Seguras",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 2,
          "top": 37,
          "width": 22,
          "height": 7
        },
        "badgeAlign": "tl",
        "description": "Pasamanos hospitalario continuo de madera con soportes de acero inoxidable a 90 cm.",
        "consequences": "Ninguna. Proporciona estabilidad y punto de apoyo seguro para el tránsito de pacientes.",
        "regulation": "Cumple el RD 486/1997 sobre lugares de trabajo y normativa de accesibilidad.",
        "prevention": "Elemento seguro de protección pasiva. No constituye ningún riesgo laboral."
      },
      {
        "id": "hosp-3",
        "num": 3,
        "name": "Aguja hipodérmica en batea",
        "category": "Riesgo Biológico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 7,
          "top": 56,
          "width": 17,
          "height": 34
        },
        "badgeAlign": "tl",
        "description": "Aguja de punción usada con restos de sangre abandonada sin capuchón sobre mesa auxiliar.",
        "consequences": "Pinchazo accidental e inoculación de patógenos hemáticos (VIH, Hepatitis B y C).",
        "regulation": "Orden ESS/1451/2013 y RD 664/1997. Prohibición de dejar agujas desnudas sin contenedor.",
        "prevention": "Desechar inmediatamente en contenedor rígido de punzantes sin manipulación intermedia."
      },
      {
        "id": "hosp-4",
        "num": 4,
        "name": "Camilla de traslado sin frenos",
        "category": "Seguridad en Transporte",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 48,
          "top": 49,
          "width": 24,
          "height": 30
        },
        "badgeAlign": "tl",
        "description": "Camilla en zona de paso con pedales de freno levantados (libres) y barandilla bajada.",
        "consequences": "Desplazamiento involuntario por la pendiente y caída del paciente al suelo.",
        "regulation": "RD 1215/1997 sobre equipos de trabajo y protocolos clínicos de seguridad.",
        "prevention": "Enclavar siempre los frenos de ruedas en reposo y subir las barandillas laterales."
      },
      {
        "id": "hosp-5",
        "num": 5,
        "name": "Panel de cabecero de gases medicinales",
        "category": "Instalaciones Técnicas",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 38,
          "top": 6,
          "width": 27,
          "height": 15
        },
        "badgeAlign": "tl",
        "description": "Tomas rápidas DIN normalizadas de O2, Vacío y Aire con marcado CE y código de colores.",
        "consequences": "Ninguna. Suministro seguro y estanco de gases clínicos a baja presión.",
        "regulation": "Cumple norma UNE-EN ISO 7396-1 sobre sistemas de canalización de gases medicinales.",
        "prevention": "Instalación técnica reglamentaria y segura. No constituye ningún riesgo laboral."
      },
      {
        "id": "hosp-6",
        "num": 6,
        "name": "Bolsa de residuos biosanitarios rota",
        "category": "Residuos Peligrosos",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 31,
          "top": 73,
          "width": 18,
          "height": 21
        },
        "badgeAlign": "bl",
        "description": "Bolsa amarilla Grupo III de residuos infecciosos rota con derrame de fluidos en el suelo.",
        "consequences": "Contaminación biológica por contacto y riesgo de resbalón sobre fluidos orgánicos.",
        "regulation": "RD 664/1997 sobre agentes biológicos y legislación autonómica de residuos sanitarios.",
        "prevention": "Utilizar bolsas de galga reforzada y recoger de inmediato con kit de derrames biológicos."
      },
      {
        "id": "hosp-7",
        "num": 7,
        "name": "Soporte de gotero IV en cabecero",
        "category": "Material Sanitario",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 67,
          "top": 27,
          "width": 6,
          "height": 28
        },
        "badgeAlign": "tr",
        "description": "Mástil telescópico con bolsa de suero fisiológico herméticamente cerrada.",
        "consequences": "Ninguna. Material plástico estéril sin bordes cortantes correctamente suspendido.",
        "regulation": "Cumple estándares de producto sanitario con marcado CE.",
        "prevention": "Elemento médico habitual en uso correcto. No constituye ningún peligro."
      },
      {
        "id": "hosp-8",
        "num": 8,
        "name": "Celador en sobreesfuerzo lumbar",
        "category": "Ergonomía Sanitaria",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 27,
          "top": 38,
          "width": 12,
          "height": 40
        },
        "badgeAlign": "tl",
        "description": "Trabajador doblando la columna en 90° levantando carga solo sin flexionar piernas.",
        "consequences": "Lumbalgia aguda, protusión discal y microtraumatismos repetitivos en columna.",
        "regulation": "RD 487/1997 sobre manipulación manual de cargas y Guía Técnica del INSST.",
        "prevention": "Usar grúas de bipedestación o transferencias asistidas y flexionar las rodillas."
      },
      {
        "id": "hosp-9",
        "num": 9,
        "name": "Luminaria LED estanca empotrada",
        "category": "Iluminación Hospitalaria",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 9,
          "top": 3,
          "width": 19,
          "height": 6
        },
        "badgeAlign": "tl",
        "description": "Panel LED en falso techo con difusor opal antideslumbramiento (UGR<19, 500 lux).",
        "consequences": "Ninguna. Proporciona iluminación idónea para tareas de exploración médica.",
        "regulation": "Cumple el RD 486/1997 (Anexo IV sobre iluminación de lugares de trabajo).",
        "prevention": "Instalación de alumbrado reglamentaria. No constituye ningún riesgo laboral."
      },
      {
        "id": "hosp-10",
        "num": 10,
        "name": "Enchufes schuko grado médico verdes",
        "category": "Instalación Eléctrica",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 88,
          "top": 32,
          "width": 10,
          "height": 18
        },
        "badgeAlign": "tr",
        "description": "Bases de enchufe con aislamiento de quirófano protegidas por transformador de aislamiento.",
        "consequences": "Ninguna. Máxima seguridad eléctrica para aparamenta electromédica de soporte vital.",
        "regulation": "Cumple el Reglamento Electrotécnico de Baja Tensión (ITC-BT-38).",
        "prevention": "Sistema de protección eléctrica especial hospitalaria. Elemento seguro."
      },
      {
        "id": "hosp-11",
        "num": 11,
        "name": "Suelo vinílico conductivo limpio",
        "category": "Pavimentos Sanitarios",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 74,
          "top": 81,
          "width": 23,
          "height": 14
        },
        "badgeAlign": "br",
        "description": "Pavimento continuo antibacteriano sin desniveles ni juntas abiertas.",
        "consequences": "Ninguna. Evita acumulación de cargas electrostáticas y facilita la desinfección.",
        "regulation": "Cumple RD 486/1997 sobre suelos lisos, no resbaladizos y de fácil limpieza.",
        "prevention": "Superficie de tránsito adecuada. Elemento seguro."
      },
      {
        "id": "hosp-12",
        "num": 12,
        "name": "Pedal de freno de camilla levantado",
        "category": "Mecanismos de Bloqueo",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 53,
          "top": 70,
          "width": 18,
          "height": 12
        },
        "badgeAlign": "tl",
        "description": "Mecanismo de freno centralizado en posición libre/abierta.",
        "consequences": "Falta de inmovilización del equipo rodante durante la transferencia del paciente.",
        "regulation": "RD 1215/1997 sobre órganos de accionamiento y frenado de equipos móviles.",
        "prevention": "Pisar el pedal rojo para accionar el bloqueo de rueda y de giro antes de soltar la camilla."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"hospWallGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#f0fdfa\"/>\n      <stop offset=\"54%\" stop-color=\"#ccfbf1\"/>\n      <stop offset=\"55%\" stop-color=\"#0d9488\"/>\n      <stop offset=\"100%\" stop-color=\"#115e59\"/>\n    </linearGradient>\n    <linearGradient id=\"hospFloorGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n      <stop offset=\"18%\" stop-color=\"#f8fafc\"/>\n      <stop offset=\"55%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#94a3b8\"/>\n    </linearGradient>\n    <linearGradient id=\"hospChrome\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#64748b\"/>\n      <stop offset=\"28%\" stop-color=\"#f8fafc\"/>\n      <stop offset=\"55%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"82%\" stop-color=\"#f1f5f9\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n    <linearGradient id=\"hospO2Body\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"32%\" stop-color=\"#ffffff\"/>\n      <stop offset=\"80%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n    <linearGradient id=\"hospO2Shoulder\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#15803d\"/>\n      <stop offset=\"40%\" stop-color=\"#22c55e\"/>\n      <stop offset=\"85%\" stop-color=\"#166534\"/>\n      <stop offset=\"100%\" stop-color=\"#14532d\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Pared hospitalaria con zócalo higiénico y juntas -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#hospWallGrad)\"/>\n  <g stroke=\"#99f6e4\" stroke-width=\"1\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"30\" x2=\"1000\" y2=\"30\"/><line x1=\"0\" y1=\"68\" x2=\"1000\" y2=\"68\"/>\n    <line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"68\"/><line x1=\"340\" y1=\"0\" x2=\"340\" y2=\"68\"/><line x1=\"680\" y1=\"0\" x2=\"680\" y2=\"68\"/><line x1=\"880\" y1=\"0\" x2=\"880\" y2=\"68\"/>\n  </g>\n  <!-- Reloj de pared clínico en fondo superior derecho -->\n  <g transform=\"translate(705, 58)\">\n    <circle cx=\"22\" cy=\"22\" r=\"22\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <circle cx=\"22\" cy=\"22\" r=\"2\" fill=\"#0f172a\"/>\n    <line x1=\"22\" y1=\"22\" x2=\"22\" y2=\"10\" stroke=\"#0f172a\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"22\" y1=\"22\" x2=\"31\" y2=\"25\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 9 (SEGURO): Luminaria LED estanca empotrada -->\n  <g id=\"hosp-led\" transform=\"translate(90, 16)\">\n    <rect width=\"190\" height=\"30\" rx=\"5\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <rect x=\"6\" y=\"4\" width=\"178\" height=\"22\" rx=\"3\" fill=\"#ffffff\"/>\n    <line x1=\"12\" y1=\"15\" x2=\"178\" y2=\"15\" stroke=\"#e0f2fe\" stroke-width=\"2\"/>\n    <polygon points=\"6,26 184,26 245,140 -55,140\" fill=\"#ffffff\" opacity=\"0.1\"/>\n  </g>\n  <rect x=\"615\" y=\"16\" width=\"175\" height=\"28\" rx=\"4\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\" opacity=\"0.92\"/>\n\n  <!-- ITEM 5 (SEGURO): Panel de cabecero de gases medicinales -->\n  <g transform=\"translate(382, 74)\">\n    <rect width=\"268\" height=\"48\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <rect x=\"4\" y=\"4\" width=\"260\" height=\"8\" rx=\"2\" fill=\"#e2e8f0\"/>\n    <circle cx=\"40\" cy=\"28\" r=\"13\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"3\"/><text x=\"40\" y=\"31\" font-size=\"8\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"middle\">O2</text>\n    <circle cx=\"84\" cy=\"28\" r=\"13\" fill=\"#ffffff\" stroke=\"#eab308\" stroke-width=\"3\"/><text x=\"84\" y=\"31\" font-size=\"7\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">VAC</text>\n    <circle cx=\"128\" cy=\"28\" r=\"13\" fill=\"#ffffff\" stroke=\"#10b981\" stroke-width=\"3\"/><text x=\"128\" y=\"31\" font-size=\"7\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">AIRE</text>\n    <rect x=\"166\" y=\"18\" width=\"22\" height=\"18\" rx=\"2\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"1\"/>\n    <rect x=\"196\" y=\"18\" width=\"22\" height=\"18\" rx=\"2\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"1\"/>\n    <rect x=\"228\" y=\"19\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"1\"/>\n    <circle cx=\"238\" cy=\"27\" r=\"3\" fill=\"#ffffff\"/>\n  </g>\n\n  <!-- ITEM 2 (SEGURO): Pasamanos continuo de pared con soportes 3D -->\n  <rect x=\"0\" y=\"230\" width=\"1000\" height=\"18\" fill=\"#d97706\" stroke=\"#b45309\" stroke-width=\"1.5\"/>\n  <rect x=\"0\" y=\"232\" width=\"1000\" height=\"5\" fill=\"#fbbf24\"/>\n  <g fill=\"url(#hospChrome)\" stroke=\"#475569\" stroke-width=\"1\">\n    <rect x=\"65\" y=\"248\" width=\"12\" height=\"18\" rx=\"2\"/><rect x=\"215\" y=\"248\" width=\"12\" height=\"18\" rx=\"2\"/>\n    <rect x=\"445\" y=\"248\" width=\"12\" height=\"18\" rx=\"2\"/><rect x=\"745\" y=\"248\" width=\"12\" height=\"18\" rx=\"2\"/>\n  </g>\n\n  <!-- Suelo vinílico conductivo continuo con media caña sanitaria y juntas soldadas (ITEM 11) -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#hospFloorGrad)\"/>\n  <path d=\"M0 332 L1000 332 L1000 344 L0 344 Z\" fill=\"#0f766e\"/>\n  <g stroke=\"#ffffff\" stroke-width=\"1.5\" opacity=\"0.5\">\n    <line x1=\"0\" y1=\"415\" x2=\"1000\" y2=\"415\"/><line x1=\"0\" y1=\"498\" x2=\"1000\" y2=\"498\"/>\n    <line x1=\"180\" y1=\"340\" x2=\"40\" y2=\"600\"/><line x1=\"470\" y1=\"340\" x2=\"365\" y2=\"600\"/><line x1=\"760\" y1=\"340\" x2=\"730\" y2=\"600\"/>\n  </g>\n  <!-- Detalle de lámina vinílica continua soldada y banda conductiva en zona derecha (ITEM 11) -->\n  <g transform=\"translate(745, 488)\">\n    <polygon points=\"20,10 210,10 225,75 5,75\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"1.5\" opacity=\"0.7\"/>\n    <ellipse cx=\"115\" cy=\"42\" rx=\"75\" ry=\"16\" fill=\"#ffffff\" opacity=\"0.45\"/>\n    <line x1=\"18\" y1=\"62\" x2=\"212\" y2=\"62\" stroke=\"#0d9488\" stroke-width=\"2\" stroke-dasharray=\"6,4\" opacity=\"0.7\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Enchufes schuko grado médico verdes con toma de tierra -->\n  <g transform=\"translate(888, 246)\">\n    <rect width=\"84\" height=\"42\" rx=\"5\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"2\"/>\n    <circle cx=\"24\" cy=\"21\" r=\"11\" fill=\"#ecfdf5\" stroke=\"#15803d\" stroke-width=\"1.5\"/>\n    <circle cx=\"19\" cy=\"21\" r=\"2.2\" fill=\"#0f172a\"/><circle cx=\"29\" cy=\"21\" r=\"2.2\" fill=\"#0f172a\"/>\n    <line x1=\"24\" y1=\"10\" x2=\"24\" y2=\"14\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"60\" cy=\"21\" r=\"11\" fill=\"#ecfdf5\" stroke=\"#15803d\" stroke-width=\"1.5\"/>\n    <circle cx=\"55\" cy=\"21\" r=\"2.2\" fill=\"#0f172a\"/><circle cx=\"65\" cy=\"21\" r=\"2.2\" fill=\"#0f172a\"/>\n    <circle cx=\"42\" cy=\"11\" r=\"2.5\" fill=\"#86efac\"/>\n    <path d=\"M60 32 Q64 78 52 115\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Mesa auxiliar mayo con batea y jeringuilla con aguja hipodérmica destapada -->\n  <g id=\"danger-aguja\" transform=\"translate(78, 340)\">\n    <ellipse cx=\"78\" cy=\"206\" rx=\"62\" ry=\"10\" fill=\"#020617\" opacity=\"0.28\"/>\n    <rect x=\"70\" y=\"96\" width=\"12\" height=\"102\" fill=\"url(#hospChrome)\" stroke=\"#475569\" stroke-width=\"1\"/>\n    <rect x=\"26\" y=\"192\" width=\"100\" height=\"10\" rx=\"3\" fill=\"#475569\"/>\n    <circle cx=\"38\" cy=\"204\" r=\"7\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <circle cx=\"114\" cy=\"204\" r=\"7\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <!-- Tablero de acero de mesa mayo -->\n    <rect x=\"0\" y=\"80\" width=\"160\" height=\"18\" rx=\"4\" fill=\"url(#hospChrome)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Batea quirúrgica en 3/4 -->\n    <path d=\"M12 80 C34 72, 102 72, 126 80 L118 93 C98 97, 36 97, 18 93 Z\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Jeringuilla graduada grande y clara con aguja expuesta -->\n    <g transform=\"translate(40, 62) rotate(-7)\">\n      <rect x=\"20\" y=\"0\" width=\"60\" height=\"16\" rx=\"2\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.5\" opacity=\"0.95\"/>\n      <rect x=\"22\" y=\"3\" width=\"26\" height=\"10\" rx=\"1\" fill=\"#dc2626\" opacity=\"0.88\"/>\n      <g stroke=\"#0369a1\" stroke-width=\"1\">\n        <line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"5\"/><line x1=\"42\" y1=\"0\" x2=\"42\" y2=\"5\"/><line x1=\"54\" y1=\"0\" x2=\"54\" y2=\"5\"/><line x1=\"66\" y1=\"0\" x2=\"66\" y2=\"5\"/>\n      </g>\n      <rect x=\"80\" y=\"4\" width=\"26\" height=\"8\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <rect x=\"105\" y=\"-1\" width=\"5\" height=\"18\" rx=\"1\" fill=\"#475569\"/>\n      <polygon points=\"20,3 10,6 10,10 20,13\" fill=\"#0284c7\"/>\n      <line x1=\"10\" y1=\"8\" x2=\"-30\" y2=\"8\" stroke=\"#475569\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n      <circle cx=\"-31\" cy=\"10\" r=\"3.5\" fill=\"#dc2626\"/>\n    </g>\n    <!-- Gasa manchada de sangre -->\n    <ellipse cx=\"136\" cy=\"84\" rx=\"11\" ry=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/>\n    <circle cx=\"135\" cy=\"84\" r=\"4.5\" fill=\"#dc2626\" opacity=\"0.85\"/>\n  </g>\n\n  <!-- ITEM 8 (PELIGRO): Celador en 3/4 perfil inclinado levantando caja pesada en sobreesfuerzo lumbar -->\n  <g id=\"hosp-danger-ergonomia\" transform=\"translate(268, 224)\">\n    <ellipse cx=\"80\" cy=\"244\" rx=\"58\" ry=\"9\" fill=\"#020617\" opacity=\"0.28\"/>\n    <!-- Piernas rectas sin flexionar rodillas y zuecos hospitalarios apoyados en el suelo -->\n    <path d=\"M72 140 L66 232 L82 232 L87 140 Z\" fill=\"#0f766e\" stroke=\"#134e4a\" stroke-width=\"1.5\"/>\n    <path d=\"M90 140 L86 232 L102 232 L105 140 Z\" fill=\"#0d9488\" stroke=\"#134e4a\" stroke-width=\"1.5\"/>\n    <path d=\"M56 232 Q68 228 84 234 L84 244 L56 244 Z\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <path d=\"M78 232 Q90 228 106 234 L106 244 L78 244 Z\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <!-- Caja pesada en el suelo que intenta levantar con la espalda doblada -->\n    <g transform=\"translate(2, 186)\">\n      <rect width=\"54\" height=\"48\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"6\" y=\"6\" width=\"42\" height=\"8\" fill=\"#d97706\"/>\n      <text x=\"27\" y=\"34\" font-size=\"10\" font-weight=\"bold\" fill=\"#fef08a\" text-anchor=\"middle\">25 kg</text>\n    </g>\n    <!-- Torso encorvado conectado anatómicamente a la cadera -->\n    <path d=\"M104 142 C108 112, 86 82, 46 80 C34 80, 26 92, 30 105 C42 122, 68 138, 72 144 Z\" fill=\"#14b8a6\" stroke=\"#0f766e\" stroke-width=\"2\"/>\n    <!-- Brazo derecho articulado bajando hacia la caja con guantes azules -->\n    <path d=\"M46 96 L36 142 L28 184\" fill=\"none\" stroke=\"#0d9488\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <circle cx=\"28\" cy=\"186\" r=\"7\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>\n    <!-- Cuello + Cabeza en perfil mirando hacia la caja con mascarilla quirúrgica -->\n    <rect x=\"20\" y=\"70\" width=\"14\" height=\"16\" fill=\"#fed7aa\" transform=\"rotate(-25, 27, 78)\"/>\n    <g transform=\"translate(8, 44)\">\n      <circle cx=\"20\" cy=\"20\" r=\"17\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <path d=\"M4 16 C4 0, 35 -2, 37 14 C30 11, 14 11, 4 16 Z\" fill=\"#451a03\"/>\n      <circle cx=\"14\" cy=\"18\" r=\"2\" fill=\"#0f172a\"/>\n      <path d=\"M4 21 L22 21 L20 35 Q8 36 4 21 Z\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n    </g>\n    <!-- Rayos rojos de dolor lumbar en la curva de la espalda -->\n    <path d=\"M98 76 L112 64 L106 76 L122 68\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M84 68 L90 50 M108 92 L125 90\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 6 (PELIGRO): Bolsa amarilla de residuos biosanitarios rota derramando sangre y gasas -->\n  <g id=\"danger-residuos\" transform=\"translate(335, 442)\">\n    <!-- Charco de líquido biosanitario derramado -->\n    <path d=\"M10 66 C45 48, 118 46, 162 62 C192 75, 178 108, 128 116 C72 124, 18 110, 4 86 Z\" fill=\"#991b1b\" opacity=\"0.88\"/>\n    <path d=\"M36 70 Q75 62 115 72\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" opacity=\"0.6\"/>\n    <!-- Bolsa amarilla arrugada con cuello anudado -->\n    <g transform=\"translate(46, 8)\">\n      <path d=\"M48 16 L40 0 L52 4 L62 -2 L58 16 Z\" fill=\"#eab308\" stroke=\"#a16207\" stroke-width=\"1.5\"/>\n      <path d=\"M22 60 C8 42, 18 18, 48 14 C72 12, 92 18, 104 36 C116 54, 118 76, 88 84 C54 92, 32 84, 22 60 Z\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\"/>\n      <!-- Desgarro lateral con tubo roto -->\n      <path d=\"M82 62 L98 54 L94 70 L108 66 L96 78 Z\" fill=\"#7f1d1d\"/>\n      <rect x=\"92\" y=\"72\" width=\"22\" height=\"6\" rx=\"2\" fill=\"#e0f2fe\" stroke=\"#dc2626\" stroke-width=\"1\" transform=\"rotate(20, 98, 75)\"/>\n      <!-- Símbolo Riesgo Biológico -->\n      <g transform=\"translate(52, 36) scale(0.8)\">\n        <circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n        <circle cx=\"8\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n        <circle cx=\"16\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n        <circle cx=\"12\" cy=\"16\" r=\"6\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n        <circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"#0f172a\"/>\n      </g>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (CAMILLA SIN FRENOS) + ITEM 7 (GOTERO IV) + ITEM 12 (PEDAL DE FRENO LEVANTADO) -->\n  <g id=\"danger-camilla\" transform=\"translate(485, 290)\">\n    <ellipse cx=\"124\" cy=\"198\" rx=\"108\" ry=\"10\" fill=\"#020617\" opacity=\"0.28\"/>\n    <rect x=\"14\" y=\"106\" width=\"220\" height=\"12\" rx=\"4\" fill=\"url(#hospChrome)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"40\" y=\"118\" width=\"16\" height=\"54\" fill=\"url(#hospChrome)\" stroke=\"#64748b\" stroke-width=\"1\"/>\n    <rect x=\"184\" y=\"118\" width=\"16\" height=\"54\" fill=\"url(#hospChrome)\" stroke=\"#64748b\" stroke-width=\"1\"/>\n    <rect x=\"26\" y=\"166\" width=\"194\" height=\"11\" rx=\"3\" fill=\"#334155\"/>\n    <!-- Cabecero y piecero de camilla -->\n    <rect x=\"4\" y=\"34\" width=\"10\" height=\"72\" rx=\"4\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"232\" y=\"28\" width=\"10\" height=\"78\" rx=\"4\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Colchón azul clínico, almohada y sábana -->\n    <rect x=\"12\" y=\"52\" width=\"222\" height=\"28\" rx=\"6\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <path d=\"M18 52 L175 52 L175 66 Q95 72 18 64 Z\" fill=\"#f8fafc\" opacity=\"0.85\"/>\n    <rect x=\"188\" y=\"42\" width=\"42\" height=\"16\" rx=\"5\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <!-- Barandilla lateral bajada (colgando abierta) -->\n    <g transform=\"translate(32, 82)\">\n      <rect width=\"176\" height=\"6\" rx=\"2\" fill=\"url(#hospChrome)\" stroke=\"#475569\"/>\n      <line x1=\"25\" y1=\"6\" x2=\"25\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"3.5\"/>\n      <line x1=\"75\" y1=\"6\" x2=\"75\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"3.5\"/>\n      <line x1=\"125\" y1=\"6\" x2=\"125\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"3.5\"/>\n      <line x1=\"160\" y1=\"6\" x2=\"160\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"3.5\"/>\n    </g>\n    <!-- ITEM 7 (SEGURO): Soporte telescópico de gotero IV con bolsa de suero y cámara de goteo -->\n    <g transform=\"translate(216, -110)\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"165\" stroke=\"url(#hospChrome)\" stroke-width=\"5\"/>\n      <path d=\"M-20 4 Q-20 -4 -10 -4 L10 -4 Q20 -4 20 4\" fill=\"none\" stroke=\"#475569\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n      <rect x=\"-22\" y=\"8\" width=\"24\" height=\"40\" rx=\"5\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <rect x=\"-18\" y=\"18\" width=\"16\" height=\"20\" fill=\"#38bdf8\" opacity=\"0.55\"/>\n      <text x=\"-10\" y=\"30\" font-size=\"6\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">SF</text>\n      <rect x=\"-13\" y=\"48\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#ffffff\" stroke=\"#0284c7\"/>\n      <path d=\"M-10 60 Q-16 108 -6 146\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>\n    <!-- ITEM 12 (PELIGRO): Ruedas con pedal rojo de freno LEVANTADO (sin trabar) -->\n    <g transform=\"translate(38, 174)\">\n      <circle cx=\"14\" cy=\"16\" r=\"14\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <circle cx=\"14\" cy=\"16\" r=\"5\" fill=\"url(#hospChrome)\"/>\n      <rect x=\"20\" y=\"-4\" width=\"22\" height=\"7\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"1.5\" transform=\"rotate(-24, 20, 0)\"/>\n    </g>\n    <g transform=\"translate(180, 174)\">\n      <circle cx=\"14\" cy=\"16\" r=\"14\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <circle cx=\"14\" cy=\"16\" r=\"5\" fill=\"url(#hospChrome)\"/>\n      <rect x=\"20\" y=\"-4\" width=\"22\" height=\"7\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"1.5\" transform=\"rotate(-24, 20, 0)\"/>\n    </g>\n    <!-- Flechas de desplazamiento accidental -->\n    <path d=\"M-10 120 L-36 120 M-25 112 L-36 120 L-25 128\" stroke=\"#f59e0b\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <!-- ITEM 1 (PELIGRO): Botella alta de O2 inclinandose con cadena rota -->\n  <g id=\"danger-oxigeno\" transform=\"translate(792, 125)\">\n    <ellipse cx=\"48\" cy=\"398\" rx=\"42\" ry=\"10\" fill=\"#020617\" opacity=\"0.28\"/>\n    <!-- Soporte de pared con cadena rota colgando -->\n    <rect x=\"-12\" y=\"175\" width=\"14\" height=\"28\" rx=\"2\" fill=\"#334155\" stroke=\"#0f172a\"/>\n    <path d=\"M0 190 Q-18 228 4 268 Q-12 300 0 328\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"5\" stroke-dasharray=\"8,5\" stroke-linecap=\"round\"/>\n    <g transform=\"rotate(6, 48, 395)\">\n      <rect x=\"16\" y=\"88\" width=\"66\" height=\"308\" rx=\"18\" fill=\"url(#hospO2Body)\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n      <path d=\"M16 128 Q16 62 49 62 Q82 62 82 128 Z\" fill=\"url(#hospO2Shoulder)\" stroke=\"#14532d\" stroke-width=\"2\"/>\n      <!-- Grifo, volante y doble manómetro -->\n      <rect x=\"43\" y=\"40\" width=\"12\" height=\"24\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n      <rect x=\"33\" y=\"34\" width=\"32\" height=\"7\" rx=\"3\" fill=\"#0f172a\"/>\n      <g transform=\"translate(36, 8)\">\n        <circle cx=\"14\" cy=\"14\" r=\"14\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n        <line x1=\"14\" y1=\"14\" x2=\"21\" y2=\"7\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n        <circle cx=\"36\" cy=\"20\" r=\"10\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      </g>\n      <g transform=\"translate(52, 238) rotate(-90)\">\n        <text x=\"0\" y=\"4\" font-size=\"11\" font-weight=\"bold\" fill=\"#047857\" letter-spacing=\"2.5\">OXÍGENO MEDICINAL</text>\n      </g>\n      <polygon points=\"49,144 60,157 49,170 38,157\" fill=\"#eab308\" stroke=\"#a16207\" stroke-width=\"1.5\"/>\n      <ellipse cx=\"49\" cy=\"393\" rx=\"33\" ry=\"8\" fill=\"#475569\"/>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "hosp-1",
        "num": 1,
        "name": "Botella de Oxígeno medicinal",
        "category": "Equipos a Presión",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 78,
          "top": 15,
          "width": 10,
          "height": 68
        },
        "badgeAlign": "tr",
        "description": "Botella de gas comprimido a 200 bar de pie sin cadena mural de amarre.",
        "consequences": "Vuelco violento, rotura de válvula y proyectil a alta presión descontrolado.",
        "regulation": "Real Decreto 2060/2008 (ITC-EP-6). Fijación vertical obligatoria con cadena.",
        "prevention": "Fijar a pared con doble cadena o trasladar en carro portabotellas con abrazadera."
      },
      {
        "id": "hosp-3",
        "num": 3,
        "name": "Aguja hipodérmica en batea",
        "category": "Riesgo Biológico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 7,
          "top": 56,
          "width": 17,
          "height": 34
        },
        "badgeAlign": "tl",
        "description": "Aguja de punción usada con restos de sangre abandonada sin capuchón sobre mesa auxiliar.",
        "consequences": "Pinchazo accidental e inoculación de patógenos hemáticos (VIH, Hepatitis B y C).",
        "regulation": "Orden ESS/1451/2013 y RD 664/1997. Prohibición de dejar agujas desnudas sin contenedor.",
        "prevention": "Desechar inmediatamente en contenedor rígido de punzantes sin manipulación intermedia."
      },
      {
        "id": "hosp-4",
        "num": 4,
        "name": "Camilla de traslado sin frenos",
        "category": "Seguridad en Transporte",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 48,
          "top": 49,
          "width": 24,
          "height": 30
        },
        "badgeAlign": "tl",
        "description": "Camilla en zona de paso con pedales de freno levantados (libres) y barandilla bajada.",
        "consequences": "Desplazamiento involuntario por la pendiente y caída del paciente al suelo.",
        "regulation": "RD 1215/1997 sobre equipos de trabajo y protocolos clínicos de seguridad.",
        "prevention": "Enclavar siempre los frenos de ruedas en reposo y subir las barandillas laterales."
      },
      {
        "id": "hosp-6",
        "num": 6,
        "name": "Bolsa de residuos biosanitarios rota",
        "category": "Residuos Peligrosos",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 31,
          "top": 73,
          "width": 18,
          "height": 21
        },
        "badgeAlign": "bl",
        "description": "Bolsa amarilla Grupo III de residuos infecciosos rota con derrame de fluidos en el suelo.",
        "consequences": "Contaminación biológica por contacto y riesgo de resbalón sobre fluidos orgánicos.",
        "regulation": "RD 664/1997 sobre agentes biológicos y legislación autonómica de residuos sanitarios.",
        "prevention": "Utilizar bolsas de galga reforzada y recoger de inmediato con kit de derrames biológicos."
      },
      {
        "id": "hosp-8",
        "num": 8,
        "name": "Celador en sobreesfuerzo lumbar",
        "category": "Ergonomía Sanitaria",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 27,
          "top": 38,
          "width": 12,
          "height": 40
        },
        "badgeAlign": "tl",
        "description": "Trabajador doblando la columna en 90° levantando carga solo sin flexionar piernas.",
        "consequences": "Lumbalgia aguda, protusión discal y microtraumatismos repetitivos en columna.",
        "regulation": "RD 487/1997 sobre manipulación manual de cargas y Guía Técnica del INSST.",
        "prevention": "Usar grúas de bipedestación o transferencias asistidas y flexionar las rodillas."
      },
      {
        "id": "hosp-12",
        "num": 12,
        "name": "Pedal de freno de camilla levantado",
        "category": "Mecanismos de Bloqueo",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 53,
          "top": 70,
          "width": 18,
          "height": 12
        },
        "badgeAlign": "tl",
        "description": "Mecanismo de freno centralizado en posición libre/abierta.",
        "consequences": "Falta de inmovilización del equipo rodante durante la transferencia del paciente.",
        "regulation": "RD 1215/1997 sobre órganos de accionamiento y frenado de equipos móviles.",
        "prevention": "Pisar el pedal rojo para accionar el bloqueo de rueda y de giro antes de soltar la camilla."
      }
    ]
  },
  {
    "id": "oficina",
    "name": "Oficina y Despachos",
    "subtitle": "Administración y Gestión Corporativa",
    "description": "Espacio de trabajo administrativo común con equipos ofimáticos, tránsito, archivadores y medios de protección.",
    "badgeColor": "sky",
    "icon": "briefcase",
    "timeLimit": 90,
    "items": [
      {
        "id": "ofi-1",
        "num": 1,
        "name": "Cables sueltos cruzando pasillo",
        "category": "Orden y Limpieza",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 45,
          "top": 82,
          "width": 22,
          "height": 13
        },
        "badgeAlign": "bl",
        "description": "Cables de alimentación eléctrica y red cruzando libremente el suelo en el pasillo principal.",
        "consequences": "Tropiezos, caídas al mismo nivel con contusiones o fracturas óseas.",
        "regulation": "Real Decreto 486/1997 (Anexo I). Las zonas de paso deben permanecer expeditas.",
        "prevention": "Canalizar el cableado mediante pasacables de suelo homologados de goma biselada."
      },
      {
        "id": "ofi-2",
        "num": 2,
        "name": "Archivador con cajones abiertos",
        "category": "Estabilidad de Equipos",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 20,
          "top": 24,
          "width": 13,
          "height": 31
        },
        "badgeAlign": "tl",
        "description": "Archivador alto con cajones superiores abiertos al límite venciendo hacia adelante sin anclaje.",
        "consequences": "Vuelco del armario metálico sobre el trabajador con traumatismos graves por aplastamiento.",
        "regulation": "RD 486/1997 y NTP 481 del INSST sobre orden y prevención de vuelcos.",
        "prevention": "Anclar a la pared e instalar guías con bloqueo antivuelco de apertura simultánea."
      },
      {
        "id": "ofi-3",
        "num": 3,
        "name": "Taza de café derramada en regleta",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 11,
          "top": 59,
          "width": 13,
          "height": 15
        },
        "badgeAlign": "tl",
        "description": "Líquido conductor fluyendo directamente hacia los orificios de una regleta con enchufes activos.",
        "consequences": "Electrocución por contacto indirecto, cortocircuito y conato de incendio en moqueta.",
        "regulation": "RD 614/2001 sobre riesgo eléctrico y RD 486/1997.",
        "prevention": "Prohibir líquidos sobre equipos eléctricos y suspender regletas bajo tablero en bandejas."
      },
      {
        "id": "ofi-4",
        "num": 4,
        "name": "Extintor bloqueado por cajas",
        "category": "Protección contra Incendios",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 76,
          "top": 18,
          "width": 14,
          "height": 58
        },
        "badgeAlign": "tr",
        "description": "Pila de 4 cajas de cartón apiladas impidiendo acceder rápidamente al extintor mural.",
        "consequences": "Pérdida de minutos vitales para sofocar un fuego incipiente y propagación del humo.",
        "regulation": "RD 513/2017 (Reglamento de instalaciones de protección contra incendios).",
        "prevention": "Mantener un perímetro libre de obstáculos de al menos 1 metro alrededor de los extintores."
      },
      {
        "id": "ofi-5",
        "num": 5,
        "name": "Puesto informático con monitor curvo",
        "category": "Equipos Ergonómicos",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 6,
          "top": 43,
          "width": 25,
          "height": 17
        },
        "badgeAlign": "tl",
        "description": "Monitor situado a la distancia correcta (55 cm) a la altura de los ojos con teclado y ratón.",
        "consequences": "Ninguna. Favorece la alineación cervical neutra y reduce la fatiga visual.",
        "regulation": "Cumple el Real Decreto 488/1997 sobre pantallas de visualización de datos (PVD).",
        "prevention": "Puesto ofimático bien configurado. Elemento seguro."
      },
      {
        "id": "ofi-6",
        "num": 6,
        "name": "Silla rota con rueda desprendida",
        "category": "Mobiliario de Trabajo",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 68,
          "top": 48,
          "width": 10,
          "height": 22
        },
        "badgeAlign": "tl",
        "description": "Silla con respaldo desajustado hacia atrás y base de 5 radios con una rueda partida suelta.",
        "consequences": "Caída brusca hacia atrás del usuario al sentarse o girar y lesiones en cóccix y lumbares.",
        "regulation": "RD 488/1997 (Anexo). Las sillas deben ser estables, regulables y con 5 ruedas en perfecto estado.",
        "prevention": "Retirar inmediatamente del servicio y sustituir por silla ergonómica certificada EN 1335."
      },
      {
        "id": "ofi-7",
        "num": 7,
        "name": "Ventanal exterior con persiana veneciana",
        "category": "Confort Lumínico",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 36,
          "top": 5,
          "width": 30,
          "height": 28
        },
        "badgeAlign": "tl",
        "description": "Ventanal doble cristal con lamas orientables para modular la luz natural y evitar reflejos.",
        "consequences": "Ninguna. Asegura renovación de luz natural conforme a estándares de bienestar.",
        "regulation": "Cumple el RD 486/1997 sobre iluminación natural y acondicionamiento ambiental.",
        "prevention": "Elemento arquitectónico seguro."
      },
      {
        "id": "ofi-8",
        "num": 8,
        "name": "Papelera metálica de oficina",
        "category": "Mobiliario Auxiliar",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 2,
          "top": 75,
          "width": 8,
          "height": 12
        },
        "badgeAlign": "bl",
        "description": "Papelera para residuos de papel fuera del pasillo de tránsito.",
        "consequences": "Ninguna. Mantiene el orden y limpieza del puesto de trabajo.",
        "regulation": "Cumple normas de orden y limpieza del RD 486/1997.",
        "prevention": "Elemento seguro."
      },
      {
        "id": "ofi-9",
        "num": 9,
        "name": "Moqueta técnica ignífuga",
        "category": "Pavimentos",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 74,
          "top": 81,
          "width": 23,
          "height": 14
        },
        "badgeAlign": "br",
        "description": "Suelo técnico con baldosas de moqueta bien pegadas sin pestañas levantadas.",
        "consequences": "Ninguna. Proporciona aislamiento acústico y coeficiente de fricción antideslizante.",
        "regulation": "Cumple Código Técnico de la Edificación (DB-SI y DB-SUA).",
        "prevention": "Elemento constructivo seguro."
      },
      {
        "id": "ofi-10",
        "num": 10,
        "name": "Portátil muy bajo con flexión cervical",
        "category": "Ergonomía",
        "isHazard": true,
        "severity": "Leve",
        "rect": {
          "left": 52,
          "top": 35,
          "width": 15,
          "height": 24
        },
        "badgeAlign": "tr",
        "description": "Portátil colocado plano sobre la mesa obligando a inclinar el cuello más de 30°.",
        "consequences": "Sobrecarga trapecial, contracturas musculares y síndrome del túnel carpiano.",
        "regulation": "RD 488/1997 y Guía Técnica del INSST sobre ergonomía en pantallas.",
        "prevention": "Utilizar atril elevador de portátil, teclado independiente y reposamuñecas."
      },
      {
        "id": "ofi-11",
        "num": 11,
        "name": "Planta natural decorativa",
        "category": "Ambiente de Trabajo",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 90,
          "top": 56,
          "width": 8,
          "height": 22
        },
        "badgeAlign": "br",
        "description": "Planta de interior en tiesto de base ancha estable situada fuera de las vías de paso.",
        "consequences": "Ninguna. Mejora el ambiente psicosocial y oxigenación sin interferir.",
        "regulation": "Totalmente conforme con normas de seguridad.",
        "prevention": "Elemento seguro."
      },
      {
        "id": "ofi-12",
        "num": 12,
        "name": "Regleta eléctrica sobrecargada en suelo",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 27,
          "top": 74,
          "width": 9,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Múltiples adaptadores y transformadores conectados en cascada en una misma base.",
        "consequences": "Sobrecalentamiento térmico del conductor e inicio de ignición.",
        "regulation": "Reglamento Electrotécnico de Baja Tensión (REBT). Prohibición de enchufes en cascada.",
        "prevention": "Calcular potencias, instalar tomas suficientes fijas en pared y no sobrecargar."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"ofiWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"65%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"ofiFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"35%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"ofiWoodDesk\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"45%\" stop-color=\"#b45309\"/>\n      <stop offset=\"85%\" stop-color=\"#d97706\"/>\n      <stop offset=\"100%\" stop-color=\"#92400e\"/>\n    </linearGradient>\n    <linearGradient id=\"ofiCoffeeGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#451a03\"/>\n      <stop offset=\"55%\" stop-color=\"#78350f\"/>\n      <stop offset=\"100%\" stop-color=\"#270e02\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Pared y moqueta técnica ignífuga en losetas (ITEM 9) -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#ofiWall)\"/>\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#ofiFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <g stroke=\"#1e293b\" stroke-width=\"1.5\" opacity=\"0.65\">\n    <line x1=\"0\" y1=\"405\" x2=\"1000\" y2=\"405\"/><line x1=\"0\" y1=\"485\" x2=\"1000\" y2=\"485\"/><line x1=\"0\" y1=\"560\" x2=\"1000\" y2=\"560\"/>\n    <line x1=\"160\" y1=\"340\" x2=\"40\" y2=\"600\"/><line x1=\"420\" y1=\"340\" x2=\"320\" y2=\"600\"/><line x1=\"680\" y1=\"340\" x2=\"680\" y2=\"600\"/><line x1=\"880\" y1=\"340\" x2=\"940\" y2=\"600\"/>\n  </g>\n  <!-- Caja técnica enrasada en moqueta (ITEM 9 derecha) -->\n  <g transform=\"translate(800, 502)\">\n    <polygon points=\"10,0 130,0 142,46 0,46\" fill=\"#64748b\" opacity=\"0.35\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <rect x=\"52\" y=\"16\" width=\"38\" height=\"14\" rx=\"2\" fill=\"#334155\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- ITEM 7 (SEGURO): Ventanal exterior con persiana veneciana -->\n  <g transform=\"translate(360, 28)\">\n    <rect width=\"300\" height=\"175\" rx=\"4\" fill=\"#38bdf8\" opacity=\"0.25\"/>\n    <rect width=\"300\" height=\"175\" rx=\"4\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"6\"/>\n    <!-- Edificios horizonte -->\n    <rect x=\"25\" y=\"60\" width=\"46\" height=\"112\" fill=\"#0f172a\" opacity=\"0.45\"/>\n    <rect x=\"85\" y=\"40\" width=\"55\" height=\"132\" fill=\"#0f172a\" opacity=\"0.55\"/>\n    <rect x=\"180\" y=\"55\" width=\"60\" height=\"117\" fill=\"#0f172a\" opacity=\"0.45\"/>\n    <!-- Lamas de persiana veneciana + varilla -->\n    <g stroke=\"#cbd5e1\" stroke-width=\"3.2\" opacity=\"0.9\">\n      <line x1=\"6\" y1=\"14\" x2=\"294\" y2=\"14\"/><line x1=\"6\" y1=\"24\" x2=\"294\" y2=\"24\"/>\n      <line x1=\"6\" y1=\"34\" x2=\"294\" y2=\"34\"/><line x1=\"6\" y1=\"44\" x2=\"294\" y2=\"44\"/>\n      <line x1=\"6\" y1=\"54\" x2=\"294\" y2=\"54\"/>\n    </g>\n    <line x1=\"16\" y1=\"8\" x2=\"16\" y2=\"95\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n    <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"175\" stroke=\"#64748b\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"#64748b\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- ITEM 2 (PELIGRO): Archivador metálico venciendo por cajones superiores abiertos -->\n  <g id=\"danger-archivador\" transform=\"translate(228, 146) rotate(9, 45, 175)\">\n    <rect width=\"92\" height=\"190\" rx=\"4\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"3\"/>\n    <g transform=\"translate(-34, 12)\">\n      <rect width=\"122\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"42\" y=\"14\" width=\"34\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n      <polygon points=\"8,8 26,-6 44,8\" fill=\"#f59e0b\"/><polygon points=\"28,8 52,-4 68,8\" fill=\"#fef08a\"/>\n    </g>\n    <g transform=\"translate(-26, 56)\">\n      <rect width=\"114\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"40\" y=\"14\" width=\"34\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n    </g>\n    <g transform=\"translate(-16, 100)\">\n      <rect width=\"104\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"38\" y=\"14\" width=\"34\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n    </g>\n    <g transform=\"translate(4, 144)\">\n      <rect width=\"84\" height=\"36\" rx=\"2\" fill=\"#475569\"/>\n      <rect x=\"28\" y=\"14\" width=\"28\" height=\"6\" rx=\"2\" fill=\"#1e293b\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 5 (SEGURO): Mesa 1 izquierda con puesto informático y monitor curvo -->\n  <g transform=\"translate(62, 310)\">\n    <rect x=\"0\" y=\"38\" width=\"248\" height=\"16\" rx=\"4\" fill=\"url(#ofiWoodDesk)\" stroke=\"#78350f\" stroke-width=\"1\"/>\n    <rect x=\"14\" y=\"54\" width=\"12\" height=\"135\" fill=\"#334155\"/><rect x=\"222\" y=\"54\" width=\"12\" height=\"135\" fill=\"#334155\"/>\n    <!-- Monitor panorámico curvo -->\n    <path d=\"M62 -52 Q124 -42 186 -52 L186 18 Q124 26 62 18 Z\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <path d=\"M67 -47 Q124 -38 181 -47 L181 13 Q124 20 67 13 Z\" fill=\"#0284c7\"/>\n    <polyline points=\"78,-12 96,-26 116,-16 140,-34 166,-22\" fill=\"none\" stroke=\"#bae6fd\" stroke-width=\"2.5\"/>\n    <rect x=\"118\" y=\"18\" width=\"12\" height=\"20\" fill=\"#475569\"/>\n    <ellipse cx=\"124\" cy=\"38\" rx=\"24\" ry=\"4\" fill=\"#334155\"/>\n    <rect x=\"86\" y=\"42\" width=\"60\" height=\"7\" rx=\"2\" fill=\"#1e293b\"/><ellipse cx=\"164\" cy=\"45\" rx=\"7\" ry=\"4\" fill=\"#1e293b\"/>\n  </g>\n\n  <!-- ITEM 8 (SEGURO): Papelera metálica de rejilla apoyada en suelo junto a mesa izquierda -->\n  <g transform=\"translate(34, 456)\">\n    <ellipse cx=\"24\" cy=\"62\" rx=\"20\" ry=\"5\" fill=\"#020617\" opacity=\"0.28\"/>\n    <polygon points=\"4,0 44,0 38,60 10,60\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"12\" y1=\"8\" x2=\"15\" y2=\"52\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"24\" y1=\"8\" x2=\"24\" y2=\"52\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"36\" y1=\"8\" x2=\"33\" y2=\"52\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <polygon points=\"14,-2 24,-10 34,-1 24,5\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Mueble cajonera auxiliar con taza de café derramada sobre regleta -->\n  <g id=\"danger-cafe\" transform=\"translate(106, 384)\">\n    <!-- Cajonera auxiliar apoyada en suelo (y=44..120 relativa = y=428..504) -->\n    <rect x=\"8\" y=\"46\" width=\"126\" height=\"74\" rx=\"3\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"2\"/>\n    <rect x=\"4\" y=\"40\" width=\"134\" height=\"9\" rx=\"2\" fill=\"url(#ofiWoodDesk)\" stroke=\"#78350f\"/>\n    <rect x=\"18\" y=\"56\" width=\"106\" height=\"24\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\"/>\n    <rect x=\"18\" y=\"86\" width=\"106\" height=\"26\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\"/>\n    <!-- Regleta sobre la cajonera -->\n    <g transform=\"translate(42, 22)\">\n      <rect width=\"84\" height=\"20\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"20\" cy=\"10\" r=\"5\" fill=\"#cbd5e1\"/><circle cx=\"40\" cy=\"10\" r=\"5\" fill=\"#cbd5e1\"/><circle cx=\"60\" cy=\"10\" r=\"5\" fill=\"#cbd5e1\"/>\n      <circle cx=\"8\" cy=\"10\" r=\"2.5\" fill=\"#ef4444\"/>\n    </g>\n    <!-- Taza roja volcada derramando café con chispas -->\n    <g transform=\"translate(14, 10) rotate(68)\">\n      <rect width=\"22\" height=\"26\" rx=\"4\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <path d=\"M22 6 Q32 13 22 20\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n    </g>\n    <path d=\"M22 36 Q48 30 74 36 Q100 32 118 41 Q96 48 68 45 Q34 48 22 36 Z\" fill=\"url(#ofiCoffeeGrad)\"/>\n    <path d=\"M76 18 L80 8 L88 14 L94 0 L88 18 Z\" fill=\"#facc15\" stroke=\"#eab308\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- ITEM 12 (PELIGRO): Regleta eléctrica sobrecargada en cascada en suelo -->\n  <g transform=\"translate(274, 468)\">\n    <ellipse cx=\"40\" cy=\"32\" rx=\"38\" ry=\"6\" fill=\"#020617\" opacity=\"0.28\"/>\n    <rect width=\"80\" height=\"22\" rx=\"4\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"8\" y=\"-14\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#0f172a\"/>\n    <rect x=\"26\" y=\"-20\" width=\"18\" height=\"22\" rx=\"2\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1.5\"/>\n    <rect x=\"46\" y=\"-14\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ef4444\"/>\n    <circle cx=\"70\" cy=\"11\" r=\"4\" fill=\"#ef4444\"/>\n    <path d=\"M35 -22 L30 -34 L38 -28 L45 -40\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 1 (PELIGRO): Cables sueltos cruzando pasillo central -->\n  <g id=\"danger-cables\">\n    <path d=\"M370 500 C 425 470, 465 562, 520 495 S 595 552, 665 498\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <path d=\"M375 524 C 415 548, 455 462, 512 544 S 585 480, 662 532\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <path d=\"M382 488 C 435 552, 488 476, 546 550 S 602 488, 658 544\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"515\" cy=\"512\" rx=\"18\" ry=\"22\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\" transform=\"rotate(-22, 515, 512)\"/>\n  </g>\n\n  <!-- ITEM 10 (PELIGRO: TRABAJADOR CON FLEXIÓN CERVICAL ANTE PORTÁTIL BAJO) -->\n  <g id=\"ofi-danger-ergonomia\" transform=\"translate(508, 232)\">\n    <!-- Mesa 2 -->\n    <rect x=\"28\" y=\"112\" width=\"165\" height=\"16\" rx=\"4\" fill=\"url(#ofiWoodDesk)\" stroke=\"#78350f\"/>\n    <rect x=\"40\" y=\"128\" width=\"11\" height=\"122\" fill=\"#334155\"/><rect x=\"172\" y=\"128\" width=\"11\" height=\"122\" fill=\"#334155\"/>\n    <!-- Portátil plano muy bajo sobre la mesa (x=100..158 relative -> 608..666) -->\n    <rect x=\"96\" y=\"106\" width=\"60\" height=\"6\" rx=\"1\" fill=\"#475569\"/>\n    <polygon points=\"104,106 154,106 164,76 114,76\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <polygon points=\"107,103 151,103 159,80 116,80\" fill=\"#38bdf8\"/>\n    <!-- Silla intacta del trabajador (izquierda de la mesa) -->\n    <g transform=\"translate(8, 72)\">\n      <rect x=\"0\" y=\"0\" width=\"14\" height=\"58\" rx=\"4\" fill=\"#1e293b\" stroke=\"#0f172a\"/>\n      <rect x=\"6\" y=\"54\" width=\"42\" height=\"12\" rx=\"4\" fill=\"#1e293b\" stroke=\"#0f172a\"/>\n      <rect x=\"24\" y=\"66\" width=\"6\" height=\"40\" fill=\"#475569\"/>\n      <line x1=\"10\" y1=\"106\" x2=\"46\" y2=\"106\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <circle cx=\"10\" cy=\"112\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"46\" cy=\"112\" r=\"4\" fill=\"#0f172a\"/>\n    </g>\n    <!-- Trabajador sentado con torso inclinado y cuello doblado mirando hacia abajo -->\n    <g transform=\"translate(18, 12)\">\n      <!-- Piernas y zapatos bajo la mesa -->\n      <path d=\"M22 108 L64 108 L68 158\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <ellipse cx=\"72\" cy=\"162\" rx=\"10\" ry=\"5\" fill=\"#0f172a\"/>\n      <!-- Camisa azul encorvada hacia delante -->\n      <path d=\"M16 106 C14 72, 28 48, 52 46 L68 62 C58 84, 48 104, 34 112 Z\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n      <!-- Brazo hacia el teclado del portátil -->\n      <path d=\"M44 64 L70 92 L94 94\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"11\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <circle cx=\"96\" cy=\"94\" r=\"5\" fill=\"#fed7aa\"/>\n      <!-- Cuello flexionado + Cabeza mirando abajo hacia portátil + Rayos dolor cervical -->\n      <rect x=\"52\" y=\"34\" width=\"12\" height=\"16\" fill=\"#fed7aa\" transform=\"rotate(38, 58, 42)\"/>\n      <g transform=\"translate(54, 12) rotate(28, 18, 18)\">\n        <circle cx=\"18\" cy=\"18\" r=\"15\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n        <path d=\"M4 14 C6 0, 32 0, 33 15 C24 10, 12 12, 4 14 Z\" fill=\"#451a03\"/>\n        <circle cx=\"24\" cy=\"18\" r=\"2\" fill=\"#0f172a\"/>\n      </g>\n      <path d=\"M36 30 L28 20 M42 26 L40 12 M28 38 L18 34\" stroke=\"#ef4444\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 6 (PELIGRO): Silla ergonómica rota volcada junto al puesto con rueda desprendida -->\n  <g transform=\"translate(686, 330)\">\n    <ellipse cx=\"44\" cy=\"88\" rx=\"36\" ry=\"6\" fill=\"#020617\" opacity=\"0.28\"/>\n    <g transform=\"rotate(20, 42, 65)\">\n      <rect x=\"20\" y=\"0\" width=\"40\" height=\"48\" rx=\"8\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <rect x=\"14\" y=\"48\" width=\"52\" height=\"12\" rx=\"4\" fill=\"#334155\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n      <rect x=\"37\" y=\"60\" width=\"6\" height=\"24\" fill=\"#475569\"/>\n      <line x1=\"16\" y1=\"84\" x2=\"62\" y2=\"84\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <circle cx=\"16\" cy=\"88\" r=\"4.5\" fill=\"#0f172a\"/>\n    </g>\n    <!-- Rueda suelta rota destacada en rojo en el suelo -->\n    <circle cx=\"72\" cy=\"88\" r=\"7\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n    <circle cx=\"72\" cy=\"88\" r=\"2.5\" fill=\"#ffffff\"/>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Extintor bloqueado detrás de pila de cajas de archivo -->\n  <g id=\"danger-extintor\">\n    <g transform=\"translate(808, 152)\">\n      <rect x=\"-10\" y=\"-40\" width=\"70\" height=\"26\" rx=\"3\" fill=\"#dc2626\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"25\" y=\"-23\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">EXTINTOR</text>\n      <rect x=\"4\" y=\"0\" width=\"44\" height=\"104\" rx=\"14\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2.5\"/>\n      <rect x=\"12\" y=\"20\" width=\"28\" height=\"24\" rx=\"2\" fill=\"#f8fafc\" opacity=\"0.9\"/>\n      <circle cx=\"26\" cy=\"-14\" r=\"6\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n      <path d=\"M34 -6 Q50 4 46 52 L42 78\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    </g>\n    <!-- Cajas de cartón apiladas delante impidiendo el acceso -->\n    <g transform=\"translate(772, 224)\">\n      <ellipse cx=\"58\" cy=\"232\" rx=\"68\" ry=\"8\" fill=\"#020617\" opacity=\"0.28\"/>\n      <rect x=\"12\" y=\"0\" width=\"92\" height=\"52\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <line x1=\"58\" y1=\"0\" x2=\"58\" y2=\"52\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"6\" y=\"52\" width=\"104\" height=\"58\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"40\" y=\"68\" width=\"36\" height=\"18\" fill=\"#fef3c7\" opacity=\"0.85\"/>\n      <rect x=\"0\" y=\"110\" width=\"116\" height=\"60\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"-8\" y=\"170\" width=\"132\" height=\"62\" rx=\"3\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 11 (SEGURO): Planta natural decorativa en maceta -->\n  <g transform=\"translate(918, 338)\">\n    <ellipse cx=\"27\" cy=\"128\" rx=\"22\" ry=\"5\" fill=\"#020617\" opacity=\"0.28\"/>\n    <polygon points=\"8,76 46,76 40,126 14,126\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    <rect x=\"5\" y=\"68\" width=\"44\" height=\"10\" rx=\"2\" fill=\"#d97706\"/>\n    <path d=\"M27 70 Q10 35 4 20 Q20 30 27 55\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n    <path d=\"M27 70 Q44 35 52 18 Q36 28 27 55\" fill=\"#22c55e\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n    <path d=\"M27 65 Q27 25 27 2 Q34 25 27 60\" fill=\"#15803d\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"14\" cy=\"45\" rx=\"12\" ry=\"6\" fill=\"#22c55e\" transform=\"rotate(-25, 14, 45)\"/>\n    <ellipse cx=\"40\" cy=\"45\" rx=\"12\" ry=\"6\" fill=\"#16a34a\" transform=\"rotate(25, 40, 45)\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "ofi-1",
        "num": 1,
        "name": "Cables sueltos cruzando pasillo",
        "category": "Orden y Limpieza",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 45,
          "top": 82,
          "width": 22,
          "height": 13
        },
        "badgeAlign": "bl",
        "description": "Cables de alimentación eléctrica y red cruzando libremente el suelo en el pasillo principal.",
        "consequences": "Tropiezos, caídas al mismo nivel con contusiones o fracturas óseas.",
        "regulation": "Real Decreto 486/1997 (Anexo I). Las zonas de paso deben permanecer expeditas.",
        "prevention": "Canalizar el cableado mediante pasacables de suelo homologados de goma biselada."
      },
      {
        "id": "ofi-2",
        "num": 2,
        "name": "Archivador con cajones abiertos",
        "category": "Estabilidad de Equipos",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 20,
          "top": 24,
          "width": 13,
          "height": 31
        },
        "badgeAlign": "tl",
        "description": "Archivador alto con cajones superiores abiertos al límite venciendo hacia adelante sin anclaje.",
        "consequences": "Vuelco del armario metálico sobre el trabajador con traumatismos graves por aplastamiento.",
        "regulation": "RD 486/1997 y NTP 481 del INSST sobre orden y prevención de vuelcos.",
        "prevention": "Anclar a la pared e instalar guías con bloqueo antivuelco de apertura simultánea."
      },
      {
        "id": "ofi-3",
        "num": 3,
        "name": "Taza de café derramada en regleta",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 11,
          "top": 59,
          "width": 13,
          "height": 15
        },
        "badgeAlign": "tl",
        "description": "Líquido conductor fluyendo directamente hacia los orificios de una regleta con enchufes activos.",
        "consequences": "Electrocución por contacto indirecto, cortocircuito y conato de incendio en moqueta.",
        "regulation": "RD 614/2001 sobre riesgo eléctrico y RD 486/1997.",
        "prevention": "Prohibir líquidos sobre equipos eléctricos y suspender regletas bajo tablero en bandejas."
      },
      {
        "id": "ofi-4",
        "num": 4,
        "name": "Extintor bloqueado por cajas",
        "category": "Protección contra Incendios",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 76,
          "top": 18,
          "width": 14,
          "height": 58
        },
        "badgeAlign": "tr",
        "description": "Pila de 4 cajas de cartón apiladas impidiendo acceder rápidamente al extintor mural.",
        "consequences": "Pérdida de minutos vitales para sofocar un fuego incipiente y propagación del humo.",
        "regulation": "RD 513/2017 (Reglamento de instalaciones de protección contra incendios).",
        "prevention": "Mantener un perímetro libre de obstáculos de al menos 1 metro alrededor de los extintores."
      },
      {
        "id": "ofi-6",
        "num": 6,
        "name": "Silla rota con rueda desprendida",
        "category": "Mobiliario de Trabajo",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 68,
          "top": 48,
          "width": 10,
          "height": 22
        },
        "badgeAlign": "tl",
        "description": "Silla con respaldo desajustado hacia atrás y base de 5 radios con una rueda partida suelta.",
        "consequences": "Caída brusca hacia atrás del usuario al sentarse o girar y lesiones en cóccix y lumbares.",
        "regulation": "RD 488/1997 (Anexo). Las sillas deben ser estables, regulables y con 5 ruedas en perfecto estado.",
        "prevention": "Retirar inmediatamente del servicio y sustituir por silla ergonómica certificada EN 1335."
      },
      {
        "id": "ofi-10",
        "num": 10,
        "name": "Portátil muy bajo con flexión cervical",
        "category": "Ergonomía",
        "isHazard": true,
        "severity": "Leve",
        "rect": {
          "left": 52,
          "top": 35,
          "width": 15,
          "height": 24
        },
        "badgeAlign": "tr",
        "description": "Portátil colocado plano sobre la mesa obligando a inclinar el cuello más de 30°.",
        "consequences": "Sobrecarga trapecial, contracturas musculares y síndrome del túnel carpiano.",
        "regulation": "RD 488/1997 y Guía Técnica del INSST sobre ergonomía en pantallas.",
        "prevention": "Utilizar atril elevador de portátil, teclado independiente y reposamuñecas."
      },
      {
        "id": "ofi-12",
        "num": 12,
        "name": "Regleta eléctrica sobrecargada en suelo",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 27,
          "top": 74,
          "width": 9,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Múltiples adaptadores y transformadores conectados en cascada en una misma base.",
        "consequences": "Sobrecalentamiento térmico del conductor e inicio de ignición.",
        "regulation": "Reglamento Electrotécnico de Baja Tensión (REBT). Prohibición de enchufes en cascada.",
        "prevention": "Calcular potencias, instalar tomas suficientes fijas en pared y no sobrecargar."
      }
    ]
  },
  {
    "id": "obra",
    "name": "Obra de Construcción",
    "subtitle": "Edificación y Obra Civil",
    "description": "Entorno de obra con maquinaria pesada, trabajos en altura, excavaciones y cuadros eléctricos temporales.",
    "badgeColor": "amber",
    "icon": "hard-hat",
    "timeLimit": 90,
    "items": [
      {
        "id": "obra-1",
        "num": 1,
        "name": "Peón sin casco bajo carga de grúa",
        "category": "Cargas Suspendidas",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 49,
          "top": 50,
          "width": 22,
          "height": 10
        },
        "badgeAlign": "tr",
        "description": "Trabajador distraído hablando por teléfono con la cabeza descubierta bajo el cubilote suspendido.",
        "consequences": "Muerte instantánea o traumatismo craneoencefálico irreversible por desprendimiento de carga.",
        "regulation": "RD 1627/1997 sobre seguridad en obras y RD 773/1997 sobre EPIs.",
        "prevention": "Prohibición estricta de paso bajo cargas y uso permanente de casco homologado EN 397."
      },
      {
        "id": "obra-2",
        "num": 2,
        "name": "Cubilote de hormigón suspendido",
        "category": "Aparatos de Elevación",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 50,
          "top": 29,
          "width": 7,
          "height": 15
        },
        "badgeAlign": "tl",
        "description": "Carga de 1.500 kg de masa sobrevolando zonas de tránsito sin señal acústica ni balizamiento.",
        "consequences": "Aplastamiento de operarios por rotura de cable o fallo del gancho de seguridad.",
        "regulation": "RD 1215/1997 y NTP 125 del INSST sobre grúas torre.",
        "prevention": "Balizar el radio de giro de la pluma y no desplazar cargas sobre personas."
      },
      {
        "id": "obra-3",
        "num": 3,
        "name": "Andamio a 4m sin barandillas",
        "category": "Caídas en Altura",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 2,
          "top": 19,
          "width": 21,
          "height": 43
        },
        "badgeAlign": "tl",
        "description": "Plataforma de trabajo sin barandilla perimetral de 1 m, listón intermedio ni rodapié.",
        "consequences": "Caída a distinto nivel con resultado mortal o lesiones medulares permanentes.",
        "regulation": "RD 2177/2004 sobre trabajos en altura y RD 1627/1997.",
        "prevention": "Instalar barandillas tubulares completas homologadas antes de usar el andamio."
      },
      {
        "id": "obra-4",
        "num": 4,
        "name": "Zanja de excavación sin entibar",
        "category": "Movimiento de Tierras",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 69,
          "top": 68,
          "width": 28,
          "height": 27
        },
        "badgeAlign": "br",
        "description": "Zanja de más de 2 metros de profundidad en tierra arcillosa sin entibación ni valla perimetral.",
        "consequences": "Sepultamiento por desprendimiento de tierras y asfixia mecánica.",
        "regulation": "RD 1627/1997 (Anexo IV). Toda zanja de más de 1.30 m debe entibarse.",
        "prevention": "Instalar cajones de entibación metálicos y vallar a 1 metro del borde."
      },
      {
        "id": "obra-5",
        "num": 5,
        "name": "Cuadro eléctrico en charco de lluvia",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 77,
          "top": 33,
          "width": 12,
          "height": 32
        },
        "badgeAlign": "tl",
        "description": "Cuadro de distribución provisional abierto con cables pelados sumergidos en agua.",
        "consequences": "Electrocución por contacto directo/indirecto con tensión de 400V.",
        "regulation": "Reglamento Electrotécnico de Baja Tensión (ITC-BT-33) y RD 614/2001.",
        "prevention": "Elevar el cuadro a soporte seco, grado IP65 y diferencial de 30 mA."
      },
      {
        "id": "obra-6",
        "num": 6,
        "name": "Escalera sobre bidones inestables",
        "category": "Medios de Acceso",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 24,
          "top": 49,
          "width": 14,
          "height": 19
        },
        "badgeAlign": "tl",
        "description": "Escalera de mano apoyada sobre la chapa aceitosa de dos bidones metálicos apilados.",
        "consequences": "Deslizamiento violento de la base y precipitación del operario.",
        "regulation": "RD 2177/2004 sobre escaleras de mano.",
        "prevention": "Apoyar siempre en base plana y sólida o utilizar plataformas elevadoras PEMP."
      },
      {
        "id": "obra-7",
        "num": 7,
        "name": "Chaleco de alta visibilidad reflectante",
        "category": "EPIs Obligatorios",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 50,
          "top": 64,
          "width": 8,
          "height": 9
        },
        "badgeAlign": "tl",
        "description": "Prenda de señalización visual fluorescente de clase 2 según norma EN ISO 20471.",
        "consequences": "Ninguna. Asegura que el maquinista de la grúa y vehículos distingan al peón.",
        "regulation": "Cumple el RD 773/1997 sobre utilización de equipos de protección individual.",
        "prevention": "EPI obligatorio y correcto. Elemento seguro."
      },
      {
        "id": "obra-8",
        "num": 8,
        "name": "Botas de seguridad con puntera y plantilla",
        "category": "Calzado Profesional",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 48,
          "top": 80,
          "width": 8,
          "height": 6
        },
        "badgeAlign": "tl",
        "description": "Calzado de seguridad clasificación S3 con puntera de 200J y plantilla antiperforación.",
        "consequences": "Ninguna. Protege frente a pisada de clavos y aplastamiento de dedos.",
        "regulation": "Cumple norma UNE-EN ISO 20345.",
        "prevention": "EPI obligatorio y seguro."
      },
      {
        "id": "obra-9",
        "num": 9,
        "name": "Pilares de hormigón fraguados",
        "category": "Estructura",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 26,
          "top": 27,
          "width": 5,
          "height": 36
        },
        "badgeAlign": "tl",
        "description": "Columnas estructurales de hormigón armado debidamente curadas y aplomadas.",
        "consequences": "Ninguna. Estructura portante sólida conforme al proyecto de ejecución.",
        "regulation": "Cumple Código Estructural.",
        "prevention": "Elemento constructivo seguro."
      },
      {
        "id": "obra-10",
        "num": 10,
        "name": "Torre de grúa con arriostramientos",
        "category": "Maquinaria de Elevación",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 65,
          "top": 13,
          "width": 8,
          "height": 55
        },
        "badgeAlign": "tr",
        "description": "Mástil metálico de grúa torre aplomado y montado por empresa autorizada.",
        "consequences": "Ninguna. Dispone de libro de mantenimiento e inspección periódica en regla.",
        "regulation": "Cumple ITC-MIE-AEM-2 del Reglamento de aparatos de elevación.",
        "prevention": "Máquina homologada y segura."
      },
      {
        "id": "obra-11",
        "num": 11,
        "name": "Redondos de acero corrugado salientes",
        "category": "Riesgo de Empalamiento",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 4,
          "top": 70,
          "width": 14,
          "height": 17
        },
        "badgeAlign": "tl",
        "description": "Varillas de acero de forjado apuntando verticalmente sin capuchones plásticos (setas).",
        "consequences": "Empalamiento mortal en caso de caída o tropiezo de un trabajador sobre la armadura.",
        "regulation": "RD 1627/1997 y NTP 1039 del INSST.",
        "prevention": "Cubrir de inmediato con setas de protección de polietileno de alta resistencia."
      },
      {
        "id": "obra-12",
        "num": 12,
        "name": "Señalización de uso obligatorio de casco",
        "category": "Señalización de Seguridad",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 89,
          "top": 15,
          "width": 9,
          "height": 29
        },
        "badgeAlign": "tr",
        "description": "Señal redonda azul con pictograma blanco de protección obligatoria de la cabeza.",
        "consequences": "Ninguna. Advierte de forma clara de los requisitos de entrada a la zona.",
        "regulation": "Cumple el RD 485/1997 sobre señalización de seguridad y salud en el trabajo.",
        "prevention": "Elemento seguro de advertencia preventiva."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"obraSky\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\"/>\n      <stop offset=\"60%\" stop-color=\"#bae6fd\"/>\n      <stop offset=\"100%\" stop-color=\"#f0f9ff\"/>\n    </linearGradient>\n    <linearGradient id=\"obraGround\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"40%\" stop-color=\"#92400e\"/>\n      <stop offset=\"100%\" stop-color=\"#451a03\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"380\" fill=\"url(#obraSky)\"/>\n  <ellipse cx=\"180\" cy=\"70\" rx=\"68\" ry=\"20\" fill=\"#ffffff\" opacity=\"0.6\"/>\n  <ellipse cx=\"830\" cy=\"60\" rx=\"85\" ry=\"24\" fill=\"#ffffff\" opacity=\"0.5\"/>\n\n  <!-- ITEM 9 (SEGURO): Estructura de forjado y pilares de hormigón fraguados -->\n  <g fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\">\n    <rect x=\"0\" y=\"138\" width=\"600\" height=\"26\"/>\n    <rect x=\"60\" y=\"164\" width=\"36\" height=\"216\"/>\n    <rect x=\"260\" y=\"164\" width=\"40\" height=\"216\"/>\n    <rect x=\"460\" y=\"164\" width=\"36\" height=\"216\"/>\n  </g>\n\n  <!-- ITEM 10 (TORRE GRÚA ARRIOSTRADA) + ITEM 2 (CUBILOTE SUSPENDIDO) -->\n  <g transform=\"translate(658, 18)\">\n    <!-- Mástil reticulado amarillo (x=686..710 absoluto -> dentro de obra-10 650..730) -->\n    <rect x=\"28\" y=\"60\" width=\"24\" height=\"344\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"4\"/>\n    <g stroke=\"#facc15\" stroke-width=\"3\">\n      <line x1=\"28\" y1=\"60\" x2=\"28\" y2=\"404\"/><line x1=\"52\" y1=\"60\" x2=\"52\" y2=\"404\"/>\n      <polyline points=\"28,80 52,110 28,140 52,170 28,200 52,230 28,260 52,290 28,320 52,350 28,380\"/>\n    </g>\n    <!-- Arriostramiento metálico al edificio -->\n    <line x1=\"-162\" y1=\"200\" x2=\"28\" y2=\"200\" stroke=\"#475569\" stroke-width=\"7\"/>\n    <!-- Cabina de gruista y pluma horizontal -->\n    <rect x=\"18\" y=\"42\" width=\"32\" height=\"26\" rx=\"2\" fill=\"#0284c7\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <rect x=\"-320\" y=\"54\" width=\"430\" height=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"74\" y=\"42\" width=\"36\" height=\"22\" fill=\"#64748b\" stroke=\"#334155\"/>\n    <!-- Carro, cable y cubilote de hormigón exactamente en x=505..560 (obra-2) sobre el peón -->\n    <rect x=\"-138\" y=\"68\" width=\"26\" height=\"14\" fill=\"#0f172a\"/>\n    <line x1=\"-125\" y1=\"82\" x2=\"-125\" y2=\"188\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n    <circle cx=\"-125\" cy=\"186\" r=\"6\" fill=\"#facc15\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <path d=\"M-125 192 Q-129 200 -122 200\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n    <polygon points=\"-150,200 -100,200 -110,244 -140,244\" fill=\"#f59e0b\" stroke=\"#92400e\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"-125\" cy=\"200\" rx=\"22\" ry=\"5\" fill=\"#94a3b8\"/>\n    <rect x=\"-132\" y=\"244\" width=\"14\" height=\"7\" fill=\"#334155\"/>\n  </g>\n\n  <!-- ITEM 12 (SEGURO): Cartel de uso obligatorio de casco -->\n  <g transform=\"translate(895, 102)\">\n    <rect x=\"28\" y=\"68\" width=\"8\" height=\"184\" fill=\"#64748b\"/>\n    <rect x=\"0\" y=\"0\" width=\"66\" height=\"72\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <circle cx=\"33\" cy=\"28\" r=\"21\" fill=\"#0284c7\"/>\n    <path d=\"M18 32 Q33 14 48 32 Z\" fill=\"#ffffff\"/>\n    <rect x=\"16\" y=\"31\" width=\"34\" height=\"4\" rx=\"2\" fill=\"#ffffff\"/>\n    <text x=\"33\" y=\"63\" font-size=\"7.5\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">USO CASCO</text>\n  </g>\n\n  <rect x=\"0\" y=\"380\" width=\"1000\" height=\"220\" fill=\"url(#obraGround)\"/>\n\n  <!-- ITEM 3 (PELIGRO): Andamio tubular a 4m sin barandillas ni rodapié con albañil arriba -->\n  <g id=\"danger-andamio\" transform=\"translate(42, 130)\">\n    <line x1=\"20\" y1=\"0\" x2=\"20\" y2=\"250\" stroke=\"#facc15\" stroke-width=\"8\"/><line x1=\"185\" y1=\"0\" x2=\"185\" y2=\"250\" stroke=\"#facc15\" stroke-width=\"8\"/>\n    <rect x=\"10\" y=\"245\" width=\"20\" height=\"8\" fill=\"#475569\"/><rect x=\"175\" y=\"245\" width=\"20\" height=\"8\" fill=\"#475569\"/>\n    <rect x=\"8\" y=\"88\" width=\"190\" height=\"14\" rx=\"2\" fill=\"#d97706\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    <line x1=\"20\" y1=\"102\" x2=\"185\" y2=\"245\" stroke=\"#ca8a04\" stroke-width=\"4\"/><line x1=\"185\" y1=\"102\" x2=\"20\" y2=\"245\" stroke=\"#ca8a04\" stroke-width=\"4\"/>\n    <!-- Operario articulado trabajando en lo alto sin barandilla de seguridad -->\n    <g transform=\"translate(96, 12)\">\n      <rect x=\"14\" y=\"44\" width=\"10\" height=\"32\" fill=\"#1e3a8a\"/><rect x=\"26\" y=\"44\" width=\"10\" height=\"32\" fill=\"#1e40af\"/>\n      <rect x=\"10\" y=\"72\" width=\"14\" height=\"6\" rx=\"2\" fill=\"#0f172a\"/><rect x=\"26\" y=\"72\" width=\"14\" height=\"6\" rx=\"2\" fill=\"#0f172a\"/>\n      <rect x=\"12\" y=\"18\" width=\"26\" height=\"30\" rx=\"4\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <line x1=\"12\" y1=\"30\" x2=\"38\" y2=\"30\" stroke=\"#f8fafc\" stroke-width=\"3\"/>\n      <path d=\"M12 24 L-4 40\" stroke=\"#f97316\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n      <circle cx=\"25\" cy=\"10\" r=\"10\" fill=\"#fed7aa\"/>\n      <path d=\"M14 8 Q25 -4 36 8 Z\" fill=\"#facc15\" stroke=\"#ca8a04\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 11 (PELIGRO): Redondos de acero corrugado salientes sin setas protectoras -->\n  <g transform=\"translate(46, 420)\">\n    <rect x=\"0\" y=\"54\" width=\"126\" height=\"38\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <g stroke=\"#7c2d12\" stroke-width=\"5.5\" stroke-linecap=\"round\">\n      <line x1=\"18\" y1=\"54\" x2=\"18\" y2=\"-10\"/><line x1=\"44\" y1=\"54\" x2=\"44\" y2=\"-16\"/>\n      <line x1=\"72\" y1=\"54\" x2=\"72\" y2=\"-8\"/><line x1=\"100\" y1=\"54\" x2=\"100\" y2=\"-14\"/>\n    </g>\n    <circle cx=\"18\" cy=\"-10\" r=\"3.5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"-16\" r=\"3.5\" fill=\"#ef4444\"/>\n    <circle cx=\"72\" cy=\"-8\" r=\"3.5\" fill=\"#ef4444\"/><circle cx=\"100\" cy=\"-14\" r=\"3.5\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- ITEM 6 (PELIGRO): Escalera apoyada sobre bidones metálicos inestables -->\n  <g id=\"danger-escalera\" transform=\"translate(260, 294)\">\n    <ellipse cx=\"58\" cy=\"122\" rx=\"48\" ry=\"8\" fill=\"#020617\" opacity=\"0.28\"/>\n    <!-- Dos bidones metálicos azules abollados -->\n    <rect x=\"18\" y=\"56\" width=\"54\" height=\"64\" rx=\"4\" fill=\"#0284c7\" stroke=\"#0c4a6e\" stroke-width=\"2\"/>\n    <line x1=\"18\" y1=\"78\" x2=\"72\" y2=\"78\" stroke=\"#0369a1\" stroke-width=\"2.5\"/>\n    <line x1=\"18\" y1=\"100\" x2=\"72\" y2=\"100\" stroke=\"#0369a1\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"45\" cy=\"56\" rx=\"27\" ry=\"7\" fill=\"#38bdf8\" stroke=\"#0369a1\"/>\n    <!-- Escalera de aluminio inclinada encima de los bidones -->\n    <g transform=\"translate(14, 0) rotate(14, 42, 70)\">\n      <line x1=\"20\" y1=\"-26\" x2=\"20\" y2=\"76\" stroke=\"#e2e8f0\" stroke-width=\"5\"/>\n      <line x1=\"52\" y1=\"-26\" x2=\"52\" y2=\"76\" stroke=\"#e2e8f0\" stroke-width=\"5\"/>\n      <line x1=\"20\" y1=\"-10\" x2=\"52\" y2=\"-10\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n      <line x1=\"20\" y1=\"14\" x2=\"52\" y2=\"14\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n      <line x1=\"20\" y1=\"38\" x2=\"52\" y2=\"38\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n      <line x1=\"20\" y1=\"62\" x2=\"52\" y2=\"62\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 1 (PEÓN SIN CASCO HABLANDO AL MÓVIL) + ITEM 7 (CHALECO) + ITEM 8 (BOTAS S3) -->\n  <g id=\"danger-sin-casco\" transform=\"translate(486, 286)\">\n    <ellipse cx=\"44\" cy=\"218\" rx=\"36\" ry=\"7\" fill=\"#020617\" opacity=\"0.28\"/>\n    <!-- Piernas con pantalón de trabajo -->\n    <rect x=\"20\" y=\"120\" width=\"16\" height=\"82\" rx=\"4\" fill=\"#1e3a8a\" stroke=\"#172554\" stroke-width=\"1.5\"/>\n    <rect x=\"42\" y=\"120\" width=\"16\" height=\"82\" rx=\"4\" fill=\"#1e40af\" stroke=\"#172554\" stroke-width=\"1.5\"/>\n    <!-- ITEM 8: Botas de seguridad S3 con puntera metálica visible -->\n    <rect x=\"10\" y=\"198\" width=\"28\" height=\"15\" rx=\"4\" fill=\"#451a03\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <path d=\"M10 202 L20 202 L20 213 L10 213 Z\" fill=\"#94a3b8\" stroke=\"#475569\"/>\n    <rect x=\"40\" y=\"198\" width=\"28\" height=\"15\" rx=\"4\" fill=\"#451a03\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <path d=\"M58 202 L68 202 L68 213 L58 213 Z\" fill=\"#94a3b8\" stroke=\"#475569\"/>\n    <!-- Manga y camisa debajo -->\n    <rect x=\"12\" y=\"54\" width=\"54\" height=\"68\" rx=\"7\" fill=\"#0284c7\" stroke=\"#0369a1\"/>\n    <!-- ITEM 7: Chaleco reflectante amarillo con bandas 3M -->\n    <rect x=\"14\" y=\"54\" width=\"50\" height=\"66\" rx=\"6\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"14\" y=\"74\" width=\"50\" height=\"9\" fill=\"#f8fafc\"/>\n    <rect x=\"14\" y=\"92\" width=\"50\" height=\"9\" fill=\"#f8fafc\"/>\n    <!-- Brazo derecho relajado y brazo izquierdo levantado sujetando teléfono en la oreja -->\n    <path d=\"M64 62 L76 92 L70 112\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <circle cx=\"70\" cy=\"114\" r=\"5\" fill=\"#fed7aa\"/>\n    <path d=\"M14 64 L-4 46 L14 28\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <rect x=\"10\" y=\"20\" width=\"9\" height=\"18\" rx=\"2\" fill=\"#0f172a\" stroke=\"#38bdf8\" stroke-width=\"1\"/>\n    <circle cx=\"14\" cy=\"29\" r=\"4.5\" fill=\"#fed7aa\"/>\n    <!-- Cuello y cabeza DESCUBIERTA (sin casco) -->\n    <rect x=\"33\" y=\"42\" width=\"12\" height=\"14\" fill=\"#fed7aa\"/>\n    <circle cx=\"39\" cy=\"27\" r=\"16\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n    <path d=\"M23 24 C23 8, 55 8, 55 24 C45 17, 31 17, 23 24 Z\" fill=\"#271306\"/>\n    <circle cx=\"33\" cy=\"27\" r=\"2\" fill=\"#0f172a\"/><circle cx=\"45\" cy=\"27\" r=\"2\" fill=\"#0f172a\"/>\n  </g>\n\n  <!-- ITEM 5 (PELIGRO): Cuadro eléctrico de obra en charco de lluvia -->\n  <g id=\"danger-cuadro\" transform=\"translate(776, 200)\">\n    <rect x=\"16\" y=\"108\" width=\"8\" height=\"68\" fill=\"#475569\"/><rect x=\"68\" y=\"108\" width=\"8\" height=\"68\" fill=\"#475569\"/>\n    <rect width=\"92\" height=\"110\" rx=\"4\" fill=\"#ea580c\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n    <rect x=\"8\" y=\"10\" width=\"76\" height=\"90\" fill=\"#0f172a\"/>\n    <rect x=\"18\" y=\"22\" width=\"56\" height=\"22\" rx=\"2\" fill=\"#f8fafc\"/>\n    <rect x=\"24\" y=\"26\" width=\"10\" height=\"14\" fill=\"#ef4444\"/><rect x=\"38\" y=\"26\" width=\"10\" height=\"14\" fill=\"#1e293b\"/>\n    <path d=\"M46 52 L39 68 L49 68 L41 86\" stroke=\"#facc15\" stroke-width=\"3.5\" fill=\"none\" stroke-linejoin=\"round\"/>\n    <path d=\"M35 110 Q20 150 40 178\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\"/><path d=\"M55 110 Q72 142 52 178\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"4\"/>\n    <ellipse cx=\"48\" cy=\"178\" rx=\"46\" ry=\"15\" fill=\"#38bdf8\" opacity=\"0.78\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Zanja de excavación profunda sin entibación -->\n  <g id=\"danger-zanja\" transform=\"translate(684, 396)\">\n    <polygon points=\"0,16 296,16 276,184 28,184\" fill=\"#291307\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n    <polygon points=\"28,16 56,16 48,184 28,184\" fill=\"#451a03\" opacity=\"0.8\"/>\n    <path d=\"M-6 14 Q45 22 92 14 Q148 24 210 14 Q255 20 296 14\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3.5\"/>\n    <circle cx=\"96\" cy=\"78\" r=\"13\" fill=\"#451a03\"/><circle cx=\"162\" cy=\"118\" r=\"19\" fill=\"#451a03\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "obra-1",
        "num": 1,
        "name": "Peón sin casco bajo carga de grúa",
        "category": "Cargas Suspendidas",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 49,
          "top": 50,
          "width": 22,
          "height": 10
        },
        "badgeAlign": "tr",
        "description": "Trabajador distraído hablando por teléfono con la cabeza descubierta bajo el cubilote suspendido.",
        "consequences": "Muerte instantánea o traumatismo craneoencefálico irreversible por desprendimiento de carga.",
        "regulation": "RD 1627/1997 sobre seguridad en obras y RD 773/1997 sobre EPIs.",
        "prevention": "Prohibición estricta de paso bajo cargas y uso permanente de casco homologado EN 397."
      },
      {
        "id": "obra-2",
        "num": 2,
        "name": "Cubilote de hormigón suspendido",
        "category": "Aparatos de Elevación",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 50,
          "top": 29,
          "width": 7,
          "height": 15
        },
        "badgeAlign": "tl",
        "description": "Carga de 1.500 kg de masa sobrevolando zonas de tránsito sin señal acústica ni balizamiento.",
        "consequences": "Aplastamiento de operarios por rotura de cable o fallo del gancho de seguridad.",
        "regulation": "RD 1215/1997 y NTP 125 del INSST sobre grúas torre.",
        "prevention": "Balizar el radio de giro de la pluma y no desplazar cargas sobre personas."
      },
      {
        "id": "obra-3",
        "num": 3,
        "name": "Andamio a 4m sin barandillas",
        "category": "Caídas en Altura",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 2,
          "top": 19,
          "width": 21,
          "height": 43
        },
        "badgeAlign": "tl",
        "description": "Plataforma de trabajo sin barandilla perimetral de 1 m, listón intermedio ni rodapié.",
        "consequences": "Caída a distinto nivel con resultado mortal o lesiones medulares permanentes.",
        "regulation": "RD 2177/2004 sobre trabajos en altura y RD 1627/1997.",
        "prevention": "Instalar barandillas tubulares completas homologadas antes de usar el andamio."
      },
      {
        "id": "obra-4",
        "num": 4,
        "name": "Zanja de excavación sin entibar",
        "category": "Movimiento de Tierras",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 69,
          "top": 68,
          "width": 28,
          "height": 27
        },
        "badgeAlign": "br",
        "description": "Zanja de más de 2 metros de profundidad en tierra arcillosa sin entibación ni valla perimetral.",
        "consequences": "Sepultamiento por desprendimiento de tierras y asfixia mecánica.",
        "regulation": "RD 1627/1997 (Anexo IV). Toda zanja de más de 1.30 m debe entibarse.",
        "prevention": "Instalar cajones de entibación metálicos y vallar a 1 metro del borde."
      },
      {
        "id": "obra-5",
        "num": 5,
        "name": "Cuadro eléctrico en charco de lluvia",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 77,
          "top": 33,
          "width": 12,
          "height": 32
        },
        "badgeAlign": "tl",
        "description": "Cuadro de distribución provisional abierto con cables pelados sumergidos en agua.",
        "consequences": "Electrocución por contacto directo/indirecto con tensión de 400V.",
        "regulation": "Reglamento Electrotécnico de Baja Tensión (ITC-BT-33) y RD 614/2001.",
        "prevention": "Elevar el cuadro a soporte seco, grado IP65 y diferencial de 30 mA."
      },
      {
        "id": "obra-6",
        "num": 6,
        "name": "Escalera sobre bidones inestables",
        "category": "Medios de Acceso",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 24,
          "top": 49,
          "width": 14,
          "height": 19
        },
        "badgeAlign": "tl",
        "description": "Escalera de mano apoyada sobre la chapa aceitosa de dos bidones metálicos apilados.",
        "consequences": "Deslizamiento violento de la base y precipitación del operario.",
        "regulation": "RD 2177/2004 sobre escaleras de mano.",
        "prevention": "Apoyar siempre en base plana y sólida o utilizar plataformas elevadoras PEMP."
      },
      {
        "id": "obra-11",
        "num": 11,
        "name": "Redondos de acero corrugado salientes",
        "category": "Riesgo de Empalamiento",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 4,
          "top": 70,
          "width": 14,
          "height": 17
        },
        "badgeAlign": "tl",
        "description": "Varillas de acero de forjado apuntando verticalmente sin capuchones plásticos (setas).",
        "consequences": "Empalamiento mortal en caso de caída o tropiezo de un trabajador sobre la armadura.",
        "regulation": "RD 1627/1997 y NTP 1039 del INSST.",
        "prevention": "Cubrir de inmediato con setas de protección de polietileno de alta resistencia."
      }
    ]
  },
  {
    "id": "almacen",
    "name": "Almacén Logístico",
    "subtitle": "Almacenamiento y Manutención",
    "description": "Nave logística de alta rotación con carretillas elevadoras, estanterías pesadas y pasillos de tránsito.",
    "badgeColor": "emerald",
    "icon": "archive",
    "timeLimit": 90,
    "items": [
      {
        "id": "alm-1",
        "num": 1,
        "name": "Palet deformado y ladeado en altura",
        "category": "Estanterías Industriales",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 25,
          "top": 8,
          "width": 14,
          "height": 13
        },
        "badgeAlign": "tl",
        "description": "Palet con carga deformada y taco roto en el tercer nivel de la estantería inclinado hacia el pasillo.",
        "consequences": "Caída de carga de 800 kg sobre operarios que transiten por debajo.",
        "regulation": "Norma UNE-EN 15635 (Inspección de estanterías) y RD 1215/1997.",
        "prevention": "Rechazar palets rotos, flejar la carga e instalar topes traseros y mallas anticaídas."
      },
      {
        "id": "alm-2",
        "num": 2,
        "name": "Charco de aceite en pasillo de paso",
        "category": "Orden y Limpieza",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 38,
          "top": 76,
          "width": 13,
          "height": 13
        },
        "badgeAlign": "tr",
        "description": "Gran mancha de fluido hidráulico sobre el pavimento de paso peatonal.",
        "consequences": "Resbalones con fracturas y patinazos o pérdida de frenada en carretillas.",
        "regulation": "RD 486/1997 sobre lugares de trabajo.",
        "prevention": "Espolvorear sepiolita/absorbente mineral inmediatamente y señalizar con cono."
      },
      {
        "id": "alm-3",
        "num": 3,
        "name": "Carretilla con horquillas altas y llave",
        "category": "Maquinaria de Manutención",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 76,
          "top": 47,
          "width": 23,
          "height": 25
        },
        "badgeAlign": "br",
        "description": "Carretilla parada con horquillas elevadas a 1.6 metros y llave en el contacto sin conductor.",
        "consequences": "Empalamiento torácico de peatones y arranque por personal no cualificado.",
        "regulation": "RD 1215/1997 y NTP 714 del INSST.",
        "prevention": "Bajar siempre las horquillas a ras de suelo al estacionar y retirar la llave."
      },
      {
        "id": "alm-4",
        "num": 4,
        "name": "Salida de emergencia tapada por palets",
        "category": "Evacuación y Emergencias",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 2,
          "top": 36,
          "width": 13,
          "height": 28
        },
        "badgeAlign": "bl",
        "description": "Puerta con barra antipánico bloqueada por 4 palets apilados frente a la hoja.",
        "consequences": "Imposibilidad de evacuar la nave en conato de incendio o derrame tóxico.",
        "regulation": "RD 486/1997 y Código Técnico de la Edificación (DB-SI).",
        "prevention": "Pintar zona cebreada en suelo de prohibido depositar y mantener expedita 24/7."
      },
      {
        "id": "alm-5",
        "num": 5,
        "name": "Operario levantando 40 kg a pulso",
        "category": "Manipulación de Cargas",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 49,
          "top": 38,
          "width": 9,
          "height": 29
        },
        "badgeAlign": "tl",
        "description": "Trabajador flexionando la espalda en 90° con piernas rectas levantando caja pesada.",
        "consequences": "Hernia discal lumbar, ciática incapacitante y lumbalgia aguda.",
        "regulation": "RD 487/1997 (Límite general de 25 kg en condiciones ideales).",
        "prevention": "Utilizar transpaletas o solicitar ayuda de un compañero flexionando rodillas."
      },
      {
        "id": "alm-6",
        "num": 6,
        "name": "Línea amarilla de pasillo peatonal",
        "category": "Señalización Vial",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 6,
          "top": 86,
          "width": 32,
          "height": 7
        },
        "badgeAlign": "bl",
        "description": "Franja continua amarilla pintada en suelo de 10 cm delimitando la zona de personas.",
        "consequences": "Ninguna. Separa eficazmente los flujos de peatones del tráfico de carretillas.",
        "regulation": "Cumple el RD 485/1997 sobre señalización de seguridad.",
        "prevention": "Elemento de seguridad vial interior. Totalmente seguro."
      },
      {
        "id": "alm-7",
        "num": 7,
        "name": "Bastidores de estantería Mecalux anclados",
        "category": "Estructuras Pesadas",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 25,
          "top": 34,
          "width": 13,
          "height": 28
        },
        "badgeAlign": "tl",
        "description": "Puntales de acero azul anclados al forjado con placas de nivelación y pernos.",
        "consequences": "Ninguna. Estructura portante con certificado de carga máxima visible.",
        "regulation": "Cumple norma UNE-EN 15512 y UNE-EN 15635.",
        "prevention": "Instalación de almacenaje reglamentaria y segura."
      },
      {
        "id": "alm-8",
        "num": 8,
        "name": "Jaula de seguridad ROPS/FOPS de carretilla",
        "category": "Protección de Máquinas",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 73,
          "top": 32,
          "width": 11,
          "height": 26
        },
        "badgeAlign": "tl",
        "description": "Estructura metálica envolvente sobre el asiento del conductor de la carretilla.",
        "consequences": "Ninguna. Protege al carretillero de la caída de objetos y del aplastamiento por vuelco.",
        "regulation": "Cumple el RD 1215/1997 y normas UNE de seguridad en carretillas.",
        "prevention": "Dispositivo de protección pasiva obligatorio y seguro."
      },
      {
        "id": "alm-9",
        "num": 9,
        "name": "Señal luminiscente verde de salida",
        "category": "Señalización de Evacuación",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 2,
          "top": 16,
          "width": 10,
          "height": 14
        },
        "badgeAlign": "tl",
        "description": "Cartel fotoluminiscente clase A visible en la oscuridad con pictograma de persona saliendo.",
        "consequences": "Ninguna. Orienta a los ocupantes hacia la salida en fallo de alumbrado.",
        "regulation": "Cumple RD 485/1997 y norma UNE 23035.",
        "prevention": "Elemento seguro de protección contra incendios."
      },
      {
        "id": "alm-10",
        "num": 10,
        "name": "Alumbrado industrial suspendido en techo",
        "category": "Iluminación",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 49,
          "top": 3,
          "width": 8,
          "height": 12
        },
        "badgeAlign": "tl",
        "description": "Campanas industriales LED con cadena de seguridad secundaria anticaídas.",
        "consequences": "Ninguna. Aporta los 200 lux mínimos exigidos en pasillos de almacén.",
        "regulation": "Cumple RD 486/1997 (Anexo IV).",
        "prevention": "Instalación reglamentaria y segura."
      },
      {
        "id": "alm-11",
        "num": 11,
        "name": "Calzado de seguridad con puntera del operario",
        "category": "EPIs",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 52,
          "top": 73,
          "width": 6,
          "height": 7
        },
        "badgeAlign": "tl",
        "description": "Botas profesionales S3 con suela resistente a hidrocarburos y puntera de acero.",
        "consequences": "Ninguna. Protege los pies ante caída accidental de paquetes.",
        "regulation": "Cumple RD 773/1997 y norma EN ISO 20345.",
        "prevention": "EPI correcto y necesario."
      },
      {
        "id": "alm-12",
        "num": 12,
        "name": "Caja pesada de 40 kg sin medios mecánicos",
        "category": "Cargas Excesivas",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 39,
          "top": 56,
          "width": 13,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Bulto con peso superior al límite legal manipulado en solitario.",
        "consequences": "Desgarro muscular lumbar y descompensación postural.",
        "regulation": "RD 487/1997. Límite máximo de 25 kg para trabajadores masculinos.",
        "prevention": "Fraccionar el bulto o transportar con transpaleta manual/eléctrica."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"almWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f172a\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"almFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"35%\" stop-color=\"#475569\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"almForkliftYellow\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#facc15\"/><stop offset=\"50%\" stop-color=\"#eab308\"/><stop offset=\"100%\" stop-color=\"#ca8a04\"/>\n    </linearGradient>\n    <linearGradient id=\"almOilSpill\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#09090b\"/><stop offset=\"48%\" stop-color=\"#18181b\"/><stop offset=\"72%\" stop-color=\"#27272a\"/><stop offset=\"100%\" stop-color=\"#09090b\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#almWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"2\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"60\" x2=\"1000\" y2=\"60\"/><line x1=\"0\" y1=\"120\" x2=\"1000\" y2=\"120\"/>\n    <line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"340\"/><line x1=\"500\" y1=\"0\" x2=\"500\" y2=\"340\"/><line x1=\"800\" y1=\"0\" x2=\"800\" y2=\"340\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Alumbrado industrial LED suspendido -->\n  <g transform=\"translate(500, 0)\">\n    <line x1=\"32\" y1=\"0\" x2=\"32\" y2=\"42\" stroke=\"#94a3b8\" stroke-width=\"3.5\"/>\n    <polygon points=\"8,64 56,64 44,42 20,42\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <ellipse cx=\"32\" cy=\"66\" rx=\"20\" ry=\"4.5\" fill=\"#fef08a\"/>\n    <polygon points=\"8,68 56,68 122,225 -58,225\" fill=\"#fef08a\" opacity=\"0.07\"/>\n  </g>\n\n  <!-- Suelo hormigón y ITEM 6 (Línea amarilla de pasillo peatonal) -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#almFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <line x1=\"0\" y1=\"534\" x2=\"1000\" y2=\"534\" stroke=\"#eab308\" stroke-width=\"10\" stroke-dasharray=\"30,14\"/>\n\n  <!-- ITEM 7 (SEGURO): Estanterías industriales Mecalux ancladas con placas y pernos -->\n  <g stroke=\"#0284c7\" stroke-width=\"10\">\n    <line x1=\"200\" y1=\"80\" x2=\"200\" y2=\"380\"/><line x1=\"395\" y1=\"80\" x2=\"395\" y2=\"380\"/>\n  </g>\n  <g stroke=\"#38bdf8\" stroke-width=\"2\" opacity=\"0.55\">\n    <polyline points=\"200,120 220,165 200,210 220,255 200,300 220,345 200,375\"/>\n  </g>\n  <rect x=\"184\" y=\"376\" width=\"32\" height=\"9\" rx=\"1\" fill=\"#cbd5e1\" stroke=\"#475569\"/>\n  <rect x=\"379\" y=\"376\" width=\"32\" height=\"9\" rx=\"1\" fill=\"#cbd5e1\" stroke=\"#475569\"/>\n  <rect x=\"194\" y=\"114\" width=\"208\" height=\"12\" fill=\"#ea580c\" stroke=\"#9a3412\"/>\n  <rect x=\"194\" y=\"212\" width=\"208\" height=\"12\" fill=\"#ea580c\" stroke=\"#9a3412\"/>\n  <rect x=\"194\" y=\"310\" width=\"208\" height=\"12\" fill=\"#ea580c\" stroke=\"#9a3412\"/>\n\n  <!-- Cajas estables en baldas medias -->\n  <rect x=\"220\" y=\"168\" width=\"66\" height=\"44\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\"/>\n  <rect x=\"295\" y=\"162\" width=\"76\" height=\"50\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\"/>\n\n  <!-- ITEM 1 (PELIGRO): Palet de madera roto y ladeado en altura (x=245..390, y=48..126) -->\n  <g id=\"danger-palet\" transform=\"translate(232, 54)\">\n    <g transform=\"rotate(12, 85, 50)\">\n      <!-- Euro-palet con tacos -->\n      <rect x=\"6\" y=\"42\" width=\"154\" height=\"7\" fill=\"#d97706\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n      <rect x=\"10\" y=\"49\" width=\"18\" height=\"9\" fill=\"#92400e\"/><rect x=\"74\" y=\"49\" width=\"18\" height=\"9\" fill=\"#92400e\"/><rect x=\"138\" y=\"49\" width=\"18\" height=\"9\" fill=\"#92400e\"/>\n      <rect x=\"6\" y=\"58\" width=\"154\" height=\"5\" fill=\"#b45309\"/>\n      <rect x=\"14\" y=\"-4\" width=\"64\" height=\"46\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"84\" y=\"-10\" width=\"70\" height=\"52\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <path d=\"M10 0 Q55 -18 158 -6\" fill=\"none\" stroke=\"#e0f2fe\" stroke-width=\"3.5\" stroke-dasharray=\"14,5\" opacity=\"0.8\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (SALIDA EMERGENCIA BLOQUEADA) + ITEM 9 (SEÑAL LUMINISCENTE SALIDA) -->\n  <g id=\"danger-salida\" transform=\"translate(24, 195)\">\n    <rect width=\"112\" height=\"186\" rx=\"4\" fill=\"#15803d\" stroke=\"#14532d\" stroke-width=\"3\"/>\n    <rect x=\"68\" y=\"20\" width=\"28\" height=\"52\" rx=\"2\" fill=\"#86efac\" opacity=\"0.35\" stroke=\"#166534\"/>\n    <rect x=\"14\" y=\"88\" width=\"84\" height=\"10\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#64748b\"/>\n    <!-- ITEM 9: Señal verde SALIDA -->\n    <rect x=\"16\" y=\"-44\" width=\"80\" height=\"28\" rx=\"3\" fill=\"#22c55e\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n    <text x=\"56\" y=\"-26\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">SALIDA ➔</text>\n    <!-- Pila de palets y cajas bloqueando la puerta -->\n    <g transform=\"translate(6, 74)\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"26\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"28\" width=\"100\" height=\"26\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"56\" width=\"100\" height=\"26\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"84\" width=\"100\" height=\"26\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 2 (PELIGRO): Charco de aceite viscoso en el pasillo -->\n  <g id=\"danger-aceite\" transform=\"translate(382, 444)\">\n    <path d=\"M8 38 C32 14, 108 12, 144 34 C168 50, 148 78, 96 84 C44 90, 12 68, 8 38 Z\" fill=\"url(#almOilSpill)\" stroke=\"#09090b\" stroke-width=\"2\"/>\n    <path d=\"M44 36 Q78 30 104 42\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" opacity=\"0.65\"/>\n    <path d=\"M62 56 Q92 52 114 64\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2\" opacity=\"0.55\"/>\n  </g>\n\n  <!-- ITEM 5 (OPERARIO ESPALDA CURVADA) + ITEM 12 (CAJA 40 KG) + ITEM 11 (BOTAS S3) -->\n  <g id=\"danger-espalda\" transform=\"translate(392, 232)\">\n    <ellipse cx=\"116\" cy=\"240\" rx=\"68\" ry=\"8\" fill=\"#020617\" opacity=\"0.28\"/>\n    <!-- ITEM 12: Caja pesada de 40 kg en el suelo (x=395..500, y=338..400 -> rel x=4..98, y=106..168) -->\n    <g transform=\"translate(6, 108)\">\n      <rect width=\"92\" height=\"58\" rx=\"3\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"22\" width=\"92\" height=\"7\" fill=\"#b45309\"/>\n      <text x=\"46\" y=\"42\" font-size=\"14\" font-weight=\"bold\" fill=\"#fde047\" text-anchor=\"middle\">40 kg</text>\n    </g>\n    <!-- Piernas rectas sin flexionar y Botas S3 (ITEM 11: x=520..580, y=438..480 -> rel x=128..188, y=206..248) -->\n    <path d=\"M138 148 L134 218 L150 218 L152 148 Z\" fill=\"#1e3a8a\" stroke=\"#172554\" stroke-width=\"1.5\"/>\n    <path d=\"M158 148 L156 218 L172 218 L172 148 Z\" fill=\"#1e40af\" stroke=\"#172554\" stroke-width=\"1.5\"/>\n    <rect x=\"126\" y=\"216\" width=\"26\" height=\"14\" rx=\"4\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <rect x=\"126\" y=\"219\" width=\"9\" height=\"10\" rx=\"2\" fill=\"#94a3b8\"/>\n    <rect x=\"152\" y=\"216\" width=\"26\" height=\"14\" rx=\"4\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <rect x=\"152\" y=\"219\" width=\"9\" height=\"10\" rx=\"2\" fill=\"#94a3b8\"/>\n    <!-- Torso doblado peligrosamente hacia delante en chaleco amarillo -->\n    <path d=\"M172 148 C176 112, 152 76, 114 70 C100 68, 92 84, 98 102 C110 124, 134 142, 138 150 Z\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <line x1=\"114\" y1=\"88\" x2=\"152\" y2=\"120\" stroke=\"#ffffff\" stroke-width=\"6\"/>\n    <!-- Brazos bajando rectos hacia los laterales de la caja 40 kg -->\n    <path d=\"M114 90 L98 122 L84 140\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <circle cx=\"82\" cy=\"142\" r=\"6\" fill=\"#fed7aa\" stroke=\"#ea580c\"/>\n    <!-- Cuello y cabeza inclinada con gorra de almacén -->\n    <rect x=\"92\" y=\"56\" width=\"12\" height=\"14\" fill=\"#fed7aa\" transform=\"rotate(-25, 98, 63)\"/>\n    <g transform=\"translate(72, 32)\">\n      <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <path d=\"M4 16 Q20 2 35 16 Z\" fill=\"#0284c7\"/>\n      <rect x=\"-2\" y=\"13\" width=\"16\" height=\"4\" rx=\"2\" fill=\"#0369a1\"/>\n      <circle cx=\"14\" cy=\"21\" r=\"2\" fill=\"#0f172a\"/>\n    </g>\n    <!-- Rayos de dolor lumbar en la espalda -->\n    <path d=\"M162 66 L176 52 L170 66 L186 58\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    <path d=\"M148 60 L152 44 M172 82 L188 78\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 3 (CARRETILLA CON HORQUILLAS ALTAS Y LLAVE) & ITEM 8 (JAULA ROPS/FOPS) -->\n  <g id=\"danger-carretilla\" transform=\"translate(648, 240)\">\n    <ellipse cx=\"146\" cy=\"218\" rx=\"128\" ry=\"10\" fill=\"#020617\" opacity=\"0.28\"/>\n    <!-- Chasis contrapesado amarillo -->\n    <rect x=\"44\" y=\"112\" width=\"158\" height=\"86\" rx=\"14\" fill=\"url(#almForkliftYellow)\" stroke=\"#a16207\" stroke-width=\"3\"/>\n    <rect x=\"175\" y=\"82\" width=\"44\" height=\"116\" rx=\"6\" fill=\"#0f172a\"/>\n    <!-- Asiento y volante + llave puesta en rojo -->\n    <rect x=\"96\" y=\"76\" width=\"24\" height=\"36\" rx=\"4\" fill=\"#1e293b\"/>\n    <line x1=\"158\" y1=\"112\" x2=\"174\" y2=\"72\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"172\" cy=\"70\" rx=\"12\" ry=\"4\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"4\" transform=\"rotate(-18, 172, 70)\"/>\n    <circle cx=\"164\" cy=\"92\" r=\"5\" fill=\"#ef4444\"/><rect x=\"164\" y=\"90\" width=\"11\" height=\"4\" fill=\"#ef4444\"/>\n    <!-- ITEM 8: Jaula ROPS/FOPS robusta con luz rotativa arriba -->\n    <path d=\"M84 112 L94 26 L168 26 L174 112\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7.5\" stroke-linejoin=\"round\"/>\n    <rect x=\"90\" y=\"20\" width=\"84\" height=\"8\" rx=\"3\" fill=\"#0f172a\"/>\n    <rect x=\"122\" y=\"8\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#f97316\" stroke=\"#c2410c\"/>\n    <!-- Mástil vertical hidráulico y horquillas PELIGROSAMENTE ALTAS -->\n    <rect x=\"215\" y=\"-24\" width=\"14\" height=\"222\" fill=\"#334155\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <rect x=\"225\" y=\"38\" width=\"102\" height=\"11\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <rect x=\"225\" y=\"54\" width=\"102\" height=\"11\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <!-- Ruedas industriales macizas -->\n    <circle cx=\"80\" cy=\"198\" r=\"24\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/><circle cx=\"80\" cy=\"198\" r=\"9\" fill=\"#94a3b8\"/>\n    <circle cx=\"186\" cy=\"198\" r=\"22\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/><circle cx=\"186\" cy=\"198\" r=\"8\" fill=\"#94a3b8\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "alm-1",
        "num": 1,
        "name": "Palet deformado y ladeado en altura",
        "category": "Estanterías Industriales",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 25,
          "top": 8,
          "width": 14,
          "height": 13
        },
        "badgeAlign": "tl",
        "description": "Palet con carga deformada y taco roto en el tercer nivel de la estantería inclinado hacia el pasillo.",
        "consequences": "Caída de carga de 800 kg sobre operarios que transiten por debajo.",
        "regulation": "Norma UNE-EN 15635 (Inspección de estanterías) y RD 1215/1997.",
        "prevention": "Rechazar palets rotos, flejar la carga e instalar topes traseros y mallas anticaídas."
      },
      {
        "id": "alm-2",
        "num": 2,
        "name": "Charco de aceite en pasillo de paso",
        "category": "Orden y Limpieza",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 38,
          "top": 76,
          "width": 13,
          "height": 13
        },
        "badgeAlign": "tr",
        "description": "Gran mancha de fluido hidráulico sobre el pavimento de paso peatonal.",
        "consequences": "Resbalones con fracturas y patinazos o pérdida de frenada en carretillas.",
        "regulation": "RD 486/1997 sobre lugares de trabajo.",
        "prevention": "Espolvorear sepiolita/absorbente mineral inmediatamente y señalizar con cono."
      },
      {
        "id": "alm-3",
        "num": 3,
        "name": "Carretilla con horquillas altas y llave",
        "category": "Maquinaria de Manutención",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 76,
          "top": 47,
          "width": 23,
          "height": 25
        },
        "badgeAlign": "br",
        "description": "Carretilla parada con horquillas elevadas a 1.6 metros y llave en el contacto sin conductor.",
        "consequences": "Empalamiento torácico de peatones y arranque por personal no cualificado.",
        "regulation": "RD 1215/1997 y NTP 714 del INSST.",
        "prevention": "Bajar siempre las horquillas a ras de suelo al estacionar y retirar la llave."
      },
      {
        "id": "alm-4",
        "num": 4,
        "name": "Salida de emergencia tapada por palets",
        "category": "Evacuación y Emergencias",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 2,
          "top": 36,
          "width": 13,
          "height": 28
        },
        "badgeAlign": "bl",
        "description": "Puerta con barra antipánico bloqueada por 4 palets apilados frente a la hoja.",
        "consequences": "Imposibilidad de evacuar la nave en conato de incendio o derrame tóxico.",
        "regulation": "RD 486/1997 y Código Técnico de la Edificación (DB-SI).",
        "prevention": "Pintar zona cebreada en suelo de prohibido depositar y mantener expedita 24/7."
      },
      {
        "id": "alm-5",
        "num": 5,
        "name": "Operario levantando 40 kg a pulso",
        "category": "Manipulación de Cargas",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 49,
          "top": 38,
          "width": 9,
          "height": 29
        },
        "badgeAlign": "tl",
        "description": "Trabajador flexionando la espalda en 90° con piernas rectas levantando caja pesada.",
        "consequences": "Hernia discal lumbar, ciática incapacitante y lumbalgia aguda.",
        "regulation": "RD 487/1997 (Límite general de 25 kg en condiciones ideales).",
        "prevention": "Utilizar transpaletas o solicitar ayuda de un compañero flexionando rodillas."
      },
      {
        "id": "alm-12",
        "num": 12,
        "name": "Caja pesada de 40 kg sin medios mecánicos",
        "category": "Cargas Excesivas",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 39,
          "top": 56,
          "width": 13,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Bulto con peso superior al límite legal manipulado en solitario.",
        "consequences": "Desgarro muscular lumbar y descompensación postural.",
        "regulation": "RD 487/1997. Límite máximo de 25 kg para trabajadores masculinos.",
        "prevention": "Fraccionar el bulto o transportar con transpaleta manual/eléctrica."
      }
    ]
  },
  {
    "id": "laboratorio",
    "name": "Laboratorio Químico y Biológico",
    "subtitle": "Ensayos y Análisis de Riesgo Químico",
    "description": "Laboratorio de control y análisis con reactivos peligrosos, campana extractora y material biológico.",
    "badgeColor": "purple",
    "icon": "flask",
    "timeLimit": 90,
    "items": [
      {
        "id": "lab-1",
        "num": 1,
        "name": "Guillotina de campana extractora abierta",
        "category": "Riesgo Químico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 19,
          "top": 31,
          "width": 20,
          "height": 24
        },
        "badgeAlign": "tl",
        "description": "Vitrina de gases con la pantalla de cristal levantada al 100% y vapores tóxicos saliendo.",
        "consequences": "Inhalación aguda de gases químicos irritantes y asfixiantes.",
        "regulation": "RD 374/2001 sobre protección contra agentes químicos y NTP 672.",
        "prevention": "Mantener la guillotina al límite de seguridad (máx 30 cm) y revisar el flujo extractor."
      },
      {
        "id": "lab-2",
        "num": 2,
        "name": "Ácidos y disolventes inflamables juntos",
        "category": "Almacenamiento Químico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 76,
          "top": 14,
          "width": 17,
          "height": 15
        },
        "badgeAlign": "tr",
        "description": "Reactivos oxidantes (ácido nítrico) junto a disolventes en el mismo estante de armario.",
        "consequences": "Reacción química violenta, ignición espontánea y explosión.",
        "regulation": "RD 656/2017 (Reglamento de almacenamiento de productos químicos - APQ).",
        "prevention": "Segregar productos químicos incompatibles en armarios de seguridad independientes RF-90."
      },
      {
        "id": "lab-3",
        "num": 3,
        "name": "Ducha y lavaojos bloqueados por carro",
        "category": "Primeros Auxilios",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 3,
          "top": 17,
          "width": 10,
          "height": 22
        },
        "badgeAlign": "tl",
        "description": "Carro con cajas impidiendo el acceso inmediato al tirador de la ducha de descontaminación.",
        "consequences": "Agravamiento irreversible de quemaduras químicas cutáneas y pérdida de visión ocular.",
        "regulation": "Norma UNE-EN 15154 y NTP 500 del INSST.",
        "prevention": "Mantener un radio libre de obstáculos de 1 metro permanentemente despejado."
      },
      {
        "id": "lab-4",
        "num": 4,
        "name": "Matraz roto con ácido en encimera",
        "category": "Riesgo Químico",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 39,
          "top": 51,
          "width": 15,
          "height": 10
        },
        "badgeAlign": "tr",
        "description": "Vidrio quebrado con ácido corrosivo derramado sin neutralizar ni señalizar.",
        "consequences": "Cortes en manos contaminados con reactivos y quemaduras ácidas.",
        "regulation": "RD 374/2001 sobre agentes químicos.",
        "prevention": "Neutralizar con absorbente específico y recoger vidrios con pinzas mecánicas."
      },
      {
        "id": "lab-5",
        "num": 5,
        "name": "Investigador pipeteando con la boca",
        "category": "Malas Prácticas",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 53,
          "top": 34,
          "width": 13,
          "height": 14
        },
        "badgeAlign": "tr",
        "description": "Técnico aspirando líquido reactivo directamente con la boca a través de una pipeta de vidrio.",
        "consequences": "Ingestión accidental de compuestos químicos corrosivos o cancerígenos.",
        "regulation": "RD 374/2001 y RD 664/1997. Prohibición expresa y absoluta del pipeteo con la boca.",
        "prevention": "Utilizar siempre micropipetas automáticas o peras de aspiración de tres vías."
      },
      {
        "id": "lab-6",
        "num": 6,
        "name": "Bata blanca de laboratorio de algodón",
        "category": "EPIs de Laboratorio",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 55,
          "top": 50,
          "width": 8,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Bata 100% algodón abrochada con puños elásticos para evitar enganches.",
        "consequences": "Ninguna. Protege la ropa de calle y piel frente a salpicaduras químicas menores.",
        "regulation": "Cumple el RD 773/1997 sobre equipos de protección individual.",
        "prevention": "EPI reglamentario y correcto. Elemento seguro."
      },
      {
        "id": "lab-7",
        "num": 7,
        "name": "Encimera de resina fenólica no porosa",
        "category": "Instalaciones Técnicas",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 17,
          "top": 64,
          "width": 22,
          "height": 8
        },
        "badgeAlign": "tl",
        "description": "Superficie de trabajo con reborde antiderrame resistente a ácidos, bases y disolventes.",
        "consequences": "Ninguna. Evita que los líquidos goteen a las piernas del operario.",
        "regulation": "Cumple norma UNE-EN 13150 para mesas de laboratorio.",
        "prevention": "Mobiliario técnico seguro."
      },
      {
        "id": "lab-8",
        "num": 8,
        "name": "Fregadero con grifo de cuello de cisne",
        "category": "Fontanería Segura",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 69,
          "top": 66,
          "width": 10,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Pila de polipropileno con grifo monomando y válvula antirretorno.",
        "consequences": "Ninguna. Permite el lavado rápido de manos y enjuague seguro de material.",
        "regulation": "Cumple el Código Técnico de la Edificación (DB-HS).",
        "prevention": "Instalación higiénica reglamentaria y segura."
      },
      {
        "id": "lab-9",
        "num": 9,
        "name": "Etiquetas CLP en frascos de reactivos",
        "category": "Señalización Química",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 76,
          "top": 28,
          "width": 17,
          "height": 15
        },
        "badgeAlign": "tr",
        "description": "Envases con pictogramas de peligro en rombo rojo y frases H y P legibles.",
        "consequences": "Ninguna. Informa al usuario de los riesgos y medidas preventivas del reactivo.",
        "regulation": "Cumple el Reglamento CE 1272/2008 (Reglamento CLP).",
        "prevention": "Etiquetado normativo correcto. Elemento seguro."
      },
      {
        "id": "lab-10",
        "num": 10,
        "name": "Suelo de resina epoxi continuo sin juntas",
        "category": "Pavimentos Sanitarios",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 72,
          "top": 79,
          "width": 24,
          "height": 14
        },
        "badgeAlign": "br",
        "description": "Pavimento sellado químicamente resistente con media caña sanitaria en zócalo.",
        "consequences": "Ninguna. Evita filtraciones de contaminantes y facilita la descontaminación.",
        "regulation": "Cumple el RD 486/1997 sobre lugares de trabajo.",
        "prevention": "Suelo seguro y adecuado para laboratorio."
      },
      {
        "id": "lab-11",
        "num": 11,
        "name": "Vapores tóxicos escapando de la campana",
        "category": "Contaminación Ambiental",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 31,
          "top": 14,
          "width": 13,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Columna de gas visible superando el plano de la guillotina hacia el técnico.",
        "consequences": "Afección del tracto respiratorio superior y cefaleas agudas.",
        "regulation": "RD 374/2001 sobre valores límite ambientales (VLA).",
        "prevention": "Bajar la pantalla de cristal y verificar el caudal de tiro forzado."
      },
      {
        "id": "lab-12",
        "num": 12,
        "name": "Tirador triangular de ducha de emergencia",
        "category": "Dispositivos de Socorro",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 3,
          "top": 44,
          "width": 9,
          "height": 14
        },
        "badgeAlign": "tl",
        "description": "Accionador rígido de apertura rápida en un solo movimiento hacia abajo.",
        "consequences": "Ninguna. Asegura caudal instantáneo de 60 l/min en caso de emergencia.",
        "regulation": "Cumple norma UNE-EN 15154-1.",
        "prevention": "Dispositivo de socorro reglamentario. Elemento seguro."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"labWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f172a\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"labFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#labWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"60\" x2=\"1000\" y2=\"60\"/><line x1=\"0\" y1=\"120\" x2=\"1000\" y2=\"120\"/><line x1=\"0\" y1=\"180\" x2=\"1000\" y2=\"180\"/><line x1=\"0\" y1=\"240\" x2=\"1000\" y2=\"240\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Suelo de resina epoxi continuo sin juntas ni ranuras -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#labFloor)\"/>\n  <path d=\"M0 332 L1000 332 L1000 344 Q500 348 0 344 Z\" fill=\"#0d9488\"/> <!-- Media caña sanitaria -->\n  <g transform=\"translate(725, 476)\">\n    <polygon points=\"15,8 220,8 232,76 5,76\" fill=\"#38bdf8\" opacity=\"0.08\" stroke=\"#38bdf8\" stroke-width=\"1\" stroke-dasharray=\"6,4\"/>\n    <ellipse cx=\"118\" cy=\"42\" rx=\"82\" ry=\"18\" fill=\"#ffffff\" opacity=\"0.14\"/>\n  </g>\n\n  <!-- ITEM 5 (PIPETEO BUCAL) + ITEM 6 (BATA ALGODÓN) -->\n  <!-- Dibujado detrás de la encimera para efecto de profundidad 3D realista -->\n  <g id=\"danger-pipeteo\" transform=\"translate(546, 200)\">\n    <!-- Bata blanca de algodón abotonada con solapas y bolsillo con bolígrafos (ITEM 6) -->\n    <path d=\"M12 104 Q16 86 44 86 Q72 86 76 104 L78 164 L10 164 Z\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <polygon points=\"34,86 44,104 44,86\" fill=\"#e2e8f0\"/><polygon points=\"54,86 44,104 44,86\" fill=\"#e2e8f0\"/>\n    <line x1=\"44\" y1=\"104\" x2=\"44\" y2=\"164\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"48\" cy=\"116\" r=\"2.2\" fill=\"#475569\"/><circle cx=\"48\" cy=\"134\" r=\"2.2\" fill=\"#475569\"/>\n    <rect x=\"52\" y=\"114\" width=\"16\" height=\"20\" rx=\"1\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/>\n    <line x1=\"56\" y1=\"108\" x2=\"56\" y2=\"116\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n    <line x1=\"61\" y1=\"109\" x2=\"61\" y2=\"116\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    <!-- Cuello y perfil facial hacia la izquierda SIN gafas de seguridad -->\n    <rect x=\"38\" y=\"68\" width=\"12\" height=\"20\" fill=\"#fed7aa\"/>\n    <g transform=\"translate(22, 34)\">\n      <circle cx=\"22\" cy=\"20\" r=\"17\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <path d=\"M7 16 C8 0, 38 -2, 39 18 C30 12, 16 12, 7 16 Z\" fill=\"#271306\"/>\n      <circle cx=\"14\" cy=\"19\" r=\"2\" fill=\"#0f172a\"/>\n    </g>\n    <!-- Brazo derecho sujetando pipeta de vidrio hacia el vaso de precipitados sobre encimera -->\n    <path d=\"M22 106 L2 126 L-12 102\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"11\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <circle cx=\"-12\" cy=\"100\" r=\"6\" fill=\"#38bdf8\" stroke=\"#0284c7\"/>\n    <!-- Pipeta graduada metida en la boca aspirando reactivo rojo -->\n    <line x1=\"25\" y1=\"58\" x2=\"-24\" y2=\"132\" stroke=\"#bae6fd\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <line x1=\"-12\" y1=\"114\" x2=\"-24\" y2=\"132\" stroke=\"#ef4444\" stroke-width=\"2.6\"/>\n  </g>\n\n  <!-- ITEM 7 (ENCIMERA FENÓLICA NO POROSA) + ITEM 8 (FREGADERO CUELLO DE CISNE) -->\n  <g transform=\"translate(172, 315)\">\n    <!-- Encimera resistente negra/oscura fenólica arriba + cuerpo mueble -->\n    <rect x=\"0\" y=\"38\" width=\"645\" height=\"20\" rx=\"3\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <rect x=\"4\" y=\"42\" width=\"637\" height=\"5\" fill=\"#334155\"/>\n    <rect x=\"14\" y=\"58\" width=\"617\" height=\"132\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <g stroke=\"#94a3b8\" stroke-width=\"2\">\n      <line x1=\"170\" y1=\"58\" x2=\"170\" y2=\"190\"/><line x1=\"340\" y1=\"58\" x2=\"340\" y2=\"190\"/><line x1=\"485\" y1=\"58\" x2=\"485\" y2=\"190\"/>\n    </g>\n    <!-- Vaso de precipitados con reactivo rojo frente al investigador -->\n    <g transform=\"translate(342, 6)\">\n      <polygon points=\"4,0 26,0 28,32 2,32\" fill=\"#e0f2fe\" opacity=\"0.85\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n      <rect x=\"4\" y=\"15\" width=\"22\" height=\"16\" fill=\"#ef4444\" opacity=\"0.85\"/>\n    </g>\n    <!-- ITEM 8 (SEGURO): Fregadero de laboratorio con grifo de cuello de cisne (x=692..776, y=378..450 -> rel x=520..604) -->\n    <g transform=\"translate(520, 0)\">\n      <path d=\"M36 38 L36 10 Q36 -10 56 -10 Q70 -10 70 8\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <rect x=\"0\" y=\"38\" width=\"84\" height=\"10\" rx=\"2\" fill=\"#334155\"/>\n      <rect x=\"10\" y=\"48\" width=\"64\" height=\"62\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n      <rect x=\"26\" y=\"72\" width=\"32\" height=\"24\" rx=\"2\" fill=\"#1e293b\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 1 (CAMPANA GUILLOTINA ABIERTA) + ITEM 11 (VAPORES TÓXICOS ESCAPANDO) -->\n  <g id=\"danger-campana\" transform=\"translate(195, 100)\">\n    <rect width=\"194\" height=\"252\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <rect x=\"16\" y=\"16\" width=\"162\" height=\"186\" fill=\"#0f172a\"/>\n    <rect x=\"24\" y=\"16\" width=\"146\" height=\"28\" fill=\"#1e293b\"/>\n    <!-- Pantalla guillotina transparente totalmente subida -->\n    <rect x=\"16\" y=\"16\" width=\"162\" height=\"34\" fill=\"#38bdf8\" opacity=\"0.38\" stroke=\"#bae6fd\" stroke-width=\"2\"/>\n    <circle cx=\"164\" cy=\"30\" r=\"5.5\" fill=\"#ef4444\"/> <!-- Alarma flujo baja -->\n    <!-- Matraz hirviendo dentro con humos escapando -->\n    <rect x=\"80\" y=\"164\" width=\"34\" height=\"16\" rx=\"2\" fill=\"#334155\"/>\n    <circle cx=\"97\" cy=\"148\" r=\"16\" fill=\"#c084fc\" opacity=\"0.7\" stroke=\"#e9d5ff\" stroke-width=\"1.5\"/>\n    <rect x=\"92\" y=\"122\" width=\"10\" height=\"16\" fill=\"#e9d5ff\" opacity=\"0.8\"/>\n    <path d=\"M97 120 Q76 82 95 48 Q114 14 148 -6 Q186 -12 222 24\" fill=\"none\" stroke=\"#c084fc\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.9\"/>\n    <path d=\"M108 112 Q92 78 112 44 Q134 12 172 22\" fill=\"none\" stroke=\"#e879f9\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\"0.7\"/>\n  </g>\n\n  <!-- ITEM 2 (ARMARIO INCOMPATIBLES) + ITEM 9 (ETIQUETAS CLP EN FRASCOS) -->\n  <g id=\"danger-incompatibles\" transform=\"translate(762, 108)\">\n    <rect width=\"166\" height=\"244\" rx=\"4\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"3\"/>\n    <line x1=\"83\" y1=\"0\" x2=\"83\" y2=\"244\" stroke=\"#a16207\" stroke-width=\"2.5\"/>\n    <rect x=\"14\" y=\"58\" width=\"138\" height=\"7\" fill=\"#a16207\"/>\n    <rect x=\"14\" y=\"146\" width=\"138\" height=\"7\" fill=\"#a16207\"/>\n    <!-- Balda superior: ácido y disolvente juntos (ITEM 2) -->\n    <g transform=\"translate(22, 18)\">\n      <rect width=\"26\" height=\"40\" rx=\"3\" fill=\"#dc2626\" stroke=\"#7f1d1d\"/>\n      <rect x=\"4\" y=\"12\" width=\"18\" height=\"16\" fill=\"#ffffff\"/>\n      <polygon points=\"13,14 19,20 13,26 7,20\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    </g>\n    <g transform=\"translate(66, 18)\">\n      <rect width=\"28\" height=\"40\" rx=\"3\" fill=\"#eab308\" stroke=\"#854d0e\"/>\n      <rect x=\"5\" y=\"12\" width=\"18\" height=\"16\" fill=\"#ffffff\"/>\n      <polygon points=\"14,14 20,20 14,26 8,20\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    </g>\n    <!-- Balda intermedia: Frascos con etiquetas CLP visibles (ITEM 9: y=180..264) -->\n    <g transform=\"translate(26, 98)\">\n      <rect width=\"30\" height=\"48\" rx=\"4\" fill=\"#991b1b\" stroke=\"#450a0a\"/>\n      <rect x=\"4\" y=\"14\" width=\"22\" height=\"20\" fill=\"#ffffff\"/>\n      <polygon points=\"15,17 22,24 15,31 8,24\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    </g>\n    <g transform=\"translate(76, 98)\">\n      <rect width=\"30\" height=\"48\" rx=\"4\" fill=\"#1d4ed8\" stroke=\"#1e3a8a\"/>\n      <rect x=\"4\" y=\"14\" width=\"22\" height=\"20\" fill=\"#ffffff\"/>\n      <polygon points=\"15,17 22,24 15,31 8,24\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    </g>\n    <g transform=\"translate(116, 102)\">\n      <rect width=\"28\" height=\"44\" rx=\"4\" fill=\"#dc2626\" stroke=\"#7f1d1d\"/>\n      <rect x=\"4\" y=\"12\" width=\"20\" height=\"18\" fill=\"#ffffff\"/>\n      <polygon points=\"14,14 20,21 14,28 8,21\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 3 (DUCHA Y LAVAOJOS BLOQUEADOS POR CARRO) + ITEM 12 (TIRADOR TRIANGULAR) -->\n  <g id=\"danger-ducha\" transform=\"translate(26, 104)\">\n    <!-- Columna ducha + alcachofa cónica + fuente lavaojos verde EN 15154 -->\n    <rect x=\"34\" y=\"0\" width=\"10\" height=\"234\" fill=\"#22c55e\" stroke=\"#15803d\"/>\n    <polygon points=\"12,18 66,18 52,0 26,0\" fill=\"#22c55e\" stroke=\"#14532d\" stroke-width=\"2\"/>\n    <rect x=\"44\" y=\"76\" width=\"22\" height=\"8\" fill=\"#16a34a\"/>\n    <path d=\"M52 76 Q66 90 80 76 Z\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- ITEM 12: Varilla larga y tirador triangular amarillo exactamente en y=288..354 (rel y=184..250) -->\n    <line x1=\"78\" y1=\"36\" x2=\"78\" y2=\"202\" stroke=\"#cbd5e1\" stroke-width=\"3.5\"/>\n    <polygon points=\"78,202 62,230 94,230\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"4.5\" stroke-linejoin=\"round\"/>\n    <!-- Carro metálico con cajas apiladas bloqueando el acceso debajo de la ducha/lavaojos -->\n    <g transform=\"translate(2, 112)\">\n      <rect x=\"8\" y=\"-36\" width=\"52\" height=\"36\" rx=\"2\" fill=\"#d97706\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n      <rect x=\"16\" y=\"-58\" width=\"38\" height=\"22\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n      <rect width=\"68\" height=\"106\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <line x1=\"6\" y1=\"45\" x2=\"62\" y2=\"45\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <circle cx=\"14\" cy=\"112\" r=\"8\" fill=\"#0f172a\"/><circle cx=\"54\" cy=\"112\" r=\"8\" fill=\"#0f172a\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (MATRAZ ROTO CON ÁCIDO EN ENCIMERA) -->\n  <g id=\"danger-derrame\" transform=\"translate(396, 314)\">\n    <path d=\"M8 38 C34 26, 78 32, 126 30 C148 32, 154 44, 124 46 C76 48, 22 48, 8 38 Z\" fill=\"#22c55e\" opacity=\"0.92\" stroke=\"#15803d\"/>\n    <polygon points=\"48,30 66,8 82,12 96,30\" fill=\"#e0f2fe\" opacity=\"0.88\" stroke=\"#38bdf8\" stroke-width=\"1.8\" transform=\"rotate(34, 72, 24)\"/>\n    <polygon points=\"104,32 114,22 120,30\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n    <circle cx=\"38\" cy=\"36\" r=\"3\" fill=\"#ffffff\"/><circle cx=\"88\" cy=\"38\" r=\"2.5\" fill=\"#ffffff\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "lab-1",
        "num": 1,
        "name": "Guillotina de campana extractora abierta",
        "category": "Riesgo Químico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 19,
          "top": 31,
          "width": 20,
          "height": 24
        },
        "badgeAlign": "tl",
        "description": "Vitrina de gases con la pantalla de cristal levantada al 100% y vapores tóxicos saliendo.",
        "consequences": "Inhalación aguda de gases químicos irritantes y asfixiantes.",
        "regulation": "RD 374/2001 sobre protección contra agentes químicos y NTP 672.",
        "prevention": "Mantener la guillotina al límite de seguridad (máx 30 cm) y revisar el flujo extractor."
      },
      {
        "id": "lab-2",
        "num": 2,
        "name": "Ácidos y disolventes inflamables juntos",
        "category": "Almacenamiento Químico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 76,
          "top": 14,
          "width": 17,
          "height": 15
        },
        "badgeAlign": "tr",
        "description": "Reactivos oxidantes (ácido nítrico) junto a disolventes en el mismo estante de armario.",
        "consequences": "Reacción química violenta, ignición espontánea y explosión.",
        "regulation": "RD 656/2017 (Reglamento de almacenamiento de productos químicos - APQ).",
        "prevention": "Segregar productos químicos incompatibles en armarios de seguridad independientes RF-90."
      },
      {
        "id": "lab-3",
        "num": 3,
        "name": "Ducha y lavaojos bloqueados por carro",
        "category": "Primeros Auxilios",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 3,
          "top": 17,
          "width": 10,
          "height": 22
        },
        "badgeAlign": "tl",
        "description": "Carro con cajas impidiendo el acceso inmediato al tirador de la ducha de descontaminación.",
        "consequences": "Agravamiento irreversible de quemaduras químicas cutáneas y pérdida de visión ocular.",
        "regulation": "Norma UNE-EN 15154 y NTP 500 del INSST.",
        "prevention": "Mantener un radio libre de obstáculos de 1 metro permanentemente despejado."
      },
      {
        "id": "lab-4",
        "num": 4,
        "name": "Matraz roto con ácido en encimera",
        "category": "Riesgo Químico",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 39,
          "top": 51,
          "width": 15,
          "height": 10
        },
        "badgeAlign": "tr",
        "description": "Vidrio quebrado con ácido corrosivo derramado sin neutralizar ni señalizar.",
        "consequences": "Cortes en manos contaminados con reactivos y quemaduras ácidas.",
        "regulation": "RD 374/2001 sobre agentes químicos.",
        "prevention": "Neutralizar con absorbente específico y recoger vidrios con pinzas mecánicas."
      },
      {
        "id": "lab-5",
        "num": 5,
        "name": "Investigador pipeteando con la boca",
        "category": "Malas Prácticas",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 53,
          "top": 34,
          "width": 13,
          "height": 14
        },
        "badgeAlign": "tr",
        "description": "Técnico aspirando líquido reactivo directamente con la boca a través de una pipeta de vidrio.",
        "consequences": "Ingestión accidental de compuestos químicos corrosivos o cancerígenos.",
        "regulation": "RD 374/2001 y RD 664/1997. Prohibición expresa y absoluta del pipeteo con la boca.",
        "prevention": "Utilizar siempre micropipetas automáticas o peras de aspiración de tres vías."
      },
      {
        "id": "lab-11",
        "num": 11,
        "name": "Vapores tóxicos escapando de la campana",
        "category": "Contaminación Ambiental",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 31,
          "top": 14,
          "width": 13,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Columna de gas visible superando el plano de la guillotina hacia el técnico.",
        "consequences": "Afección del tracto respiratorio superior y cefaleas agudas.",
        "regulation": "RD 374/2001 sobre valores límite ambientales (VLA).",
        "prevention": "Bajar la pantalla de cristal y verificar el caudal de tiro forzado."
      }
    ]
  },
  {
    "id": "cocina",
    "name": "Cocina Industrial",
    "subtitle": "Hostelería y Restauración Colectiva",
    "description": "Cocina profesional con fogones de gas, freidoras, maquinaria de corte y suelo húmedo.",
    "badgeColor": "amber",
    "icon": "fire",
    "timeLimit": 90,
    "items": [
      {
        "id": "coc-1",
        "num": 1,
        "name": "Cortafiambres con cuchilla expuesta",
        "category": "Equipos de Trabajo",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 8,
          "top": 29,
          "width": 17,
          "height": 24
        },
        "badgeAlign": "tl",
        "description": "Máquina de corte girando sin el protector de plástico y sin empujador de producto.",
        "consequences": "Amputación traumática de falanges de los dedos por atrapamiento contra el filo.",
        "regulation": "RD 1215/1997 sobre equipos de trabajo y norma UNE-EN 1974.",
        "prevention": "Utilizar siempre el carro de empuje y guante de malla metálica anticorte EN 1082."
      },
      {
        "id": "coc-2",
        "num": 2,
        "name": "Charco de aceite y grasa en suelo",
        "category": "Caídas al Mismo Nivel",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 44,
          "top": 72,
          "width": 21,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Suelo de baldosas cubierto de película de aceite caliente frente a la freidora.",
        "consequences": "Resbalón con caída y posible apoyo accidental sobre la cuba de aceite hirviendo.",
        "regulation": "RD 486/1997 sobre lugares de trabajo.",
        "prevention": "Limpieza inmediata con desengrasante y uso de calzado con suela SRC antideslizante."
      },
      {
        "id": "coc-3",
        "num": 3,
        "name": "Filtros de campana goteando grasa inflamable",
        "category": "Riesgo de Incendio",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 36,
          "top": 6,
          "width": 32,
          "height": 22
        },
        "badgeAlign": "tl",
        "description": "Filtros metálicos saturados de grasa cayendo gotas directamente sobre los fogones activos.",
        "consequences": "Inflamación súbita de la campana con propagación por el conducto extractor.",
        "regulation": "Código Técnico de la Edificación (DB-SI) y RD 513/2017.",
        "prevention": "Limpieza periódica obligatoria de filtros y conductos en lavavajillas industrial."
      },
      {
        "id": "coc-4",
        "num": 4,
        "name": "Enchufe trifásico de 400V en contacto con agua",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 79,
          "top": 68,
          "width": 13,
          "height": 18
        },
        "badgeAlign": "tr",
        "description": "Clavija de conexión industrial roja de 400V sumergida en charco de baldeo junto al fregadero.",
        "consequences": "Electrocución de operarios que toquen superficies metálicas o pisen el agua.",
        "regulation": "Reglamento Electrotécnico de Baja Tensión y RD 614/2001.",
        "prevention": "Instalar bases estancas IP67 a más de 1.5 metros de altura del suelo en zonas húmedas."
      },
      {
        "id": "coc-5",
        "num": 5,
        "name": "Tabla de madera con pollo crudo y ensalada",
        "category": "Higiene Alimentaria",
        "isHazard": true,
        "severity": "Leve",
        "rect": {
          "left": 73,
          "top": 45,
          "width": 10,
          "height": 9
        },
        "badgeAlign": "tl",
        "description": "Tabla de madera agrietada porosa mezclando carne cruda con verdura lista para servir.",
        "consequences": "Contaminación cruzada por Salmonella o Campylobacter con toxiinfección alimentaria.",
        "regulation": "Reglamento CE 852/2004 relativo a la higiene de los productos alimenticios.",
        "prevention": "Prohibir tablas de madera; usar tablas de polietileno codificadas por colores."
      },
      {
        "id": "coc-6",
        "num": 6,
        "name": "Mesas de trabajo de acero inoxidable AISI 304",
        "category": "Superficies Higiénicas",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 7,
          "top": 58,
          "width": 25,
          "height": 17
        },
        "badgeAlign": "tl",
        "description": "Encimeras lisas metálicas con esquinas redondeadas sin bordes cortantes.",
        "consequences": "Ninguna. Máxima higiene, no poroso y de fácil desinfección diaria.",
        "regulation": "Cumple normas sanitarias UNE-EN 1672-2 para maquinaria y mobiliario de alimentos.",
        "prevention": "Mobiliario profesional reglamentario y seguro."
      },
      {
        "id": "coc-7",
        "num": 7,
        "name": "Quemadores de gas con termopar de seguridad",
        "category": "Equipos de Combustión",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 47,
          "top": 38,
          "width": 11,
          "height": 10
        },
        "badgeAlign": "tl",
        "description": "Fogones con llama azul estable dotados de sensor de corte automático por ausencia de llama.",
        "consequences": "Ninguna. Evita fugas de gas si se apaga accidentalmente la llama.",
        "regulation": "Cumple el Reglamento técnico de distribución y utilización de combustibles gaseosos.",
        "prevention": "Instalación de gas con mantenimiento reglamentario y segura."
      },
      {
        "id": "coc-8",
        "num": 8,
        "name": "Grifo de ducha de lavado con muelle compensador",
        "category": "Ergonomía en Fregadero",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 86,
          "top": 31,
          "width": 9,
          "height": 16
        },
        "badgeAlign": "tr",
        "description": "Manguera de alta presión suspendida con muelle para limpieza de ollas sin esfuerzo.",
        "consequences": "Ninguna. Reduce sobreesfuerzos dorsales en tareas de lavado.",
        "regulation": "Cumple estándares de ergonomía laboral.",
        "prevention": "Elemento auxiliar seguro."
      },
      {
        "id": "coc-9",
        "num": 9,
        "name": "Sumidero sifónico con rejilla inox en suelo",
        "category": "Evacuación de Aguas",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 20,
          "top": 79,
          "width": 10,
          "height": 10
        },
        "badgeAlign": "bl",
        "description": "Desagüe con filtro de recogida de sólidos y cierre hidráulico que evita malos olores.",
        "consequences": "Ninguna. Drena el agua de limpieza evitando encharcamientos.",
        "regulation": "Cumple Código Técnico de la Edificación (DB-HS).",
        "prevention": "Instalación de saneamiento correcta y segura."
      },
      {
        "id": "coc-10",
        "num": 10,
        "name": "Uniforme de cocina de algodón ignífugo",
        "category": "Ropa Laboral",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 57,
          "top": 18,
          "width": 9,
          "height": 18
        },
        "badgeAlign": "tl",
        "description": "Chaqueta de cocina cruzada de doble botonadura que protege de salpicaduras calientes.",
        "consequences": "Ninguna. Evita quemaduras térmicas en antebrazos y pecho.",
        "regulation": "Cumple el RD 773/1997 sobre EPIs.",
        "prevention": "Vestimenta profesional adecuada y segura."
      },
      {
        "id": "coc-11",
        "num": 11,
        "name": "Freidora industrial con termostato de seguridad",
        "category": "Aparatos Térmicos",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 57,
          "top": 50,
          "width": 10,
          "height": 11
        },
        "badgeAlign": "tr",
        "description": "Cuba de fritura con límite de temperatura tarado a 210°C que previene sobrecalentamiento.",
        "consequences": "Ninguna. Evita que el aceite alcance el punto de autoignición.",
        "regulation": "Cumple el marcado CE conforme a directiva de máquinas.",
        "prevention": "Aparato homologado y seguro."
      },
      {
        "id": "coc-12",
        "num": 12,
        "name": "Cuchilla de cortafiambres sin resguardo de disco",
        "category": "Puntos de Corte",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 20,
          "top": 41,
          "width": 9,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Bisel afilado del disco de 300 mm expuesto durante la rotación continua.",
        "consequences": "Sección de tendones y nervios en mano por proximidad involuntaria.",
        "regulation": "RD 1215/1997. Los órganos móviles deben estar provistos de resguardos.",
        "prevention": "Colocar el protector de anillo perimetral y el empujador de producto."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"cocWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/><stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n    <linearGradient id=\"cocFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#991b1b\"/><stop offset=\"50%\" stop-color=\"#b91c1c\"/><stop offset=\"100%\" stop-color=\"#7f1d1d\"/>\n    </linearGradient>\n    <linearGradient id=\"cocInox\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/><stop offset=\"30%\" stop-color=\"#f8fafc\"/><stop offset=\"70%\" stop-color=\"#cbd5e1\"/><stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"320\" fill=\"url(#cocWall)\"/>\n  <!-- Azulejos pared cocina -->\n  <g stroke=\"#cbd5e1\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"64\" x2=\"1000\" y2=\"64\"/><line x1=\"0\" y1=\"128\" x2=\"1000\" y2=\"128\"/><line x1=\"0\" y1=\"192\" x2=\"1000\" y2=\"192\"/><line x1=\"0\" y1=\"256\" x2=\"1000\" y2=\"256\"/>\n  </g>\n  <rect x=\"0\" y=\"320\" width=\"1000\" height=\"280\" fill=\"url(#cocFloor)\"/>\n  <g stroke=\"#450a0a\" stroke-width=\"2\" opacity=\"0.45\">\n    <line x1=\"0\" y1=\"400\" x2=\"1000\" y2=\"400\"/><line x1=\"0\" y1=\"490\" x2=\"1000\" y2=\"490\"/>\n    <line x1=\"180\" y1=\"320\" x2=\"70\" y2=\"600\"/><line x1=\"480\" y1=\"320\" x2=\"430\" y2=\"600\"/><line x1=\"800\" y1=\"320\" x2=\"820\" y2=\"600\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Campana extractora con filtros saturados goteando grasa -->\n  <g transform=\"translate(358, 22)\">\n    <polygon points=\"0,84 316,84 278,0 38,0\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"28\" y=\"64\" width=\"260\" height=\"16\" rx=\"2\" fill=\"#475569\"/>\n    <g stroke=\"#94a3b8\" stroke-width=\"2\">\n      <line x1=\"56\" y1=\"64\" x2=\"56\" y2=\"80\"/><line x1=\"84\" y1=\"64\" x2=\"84\" y2=\"80\"/>\n      <line x1=\"112\" y1=\"64\" x2=\"112\" y2=\"80\"/><line x1=\"140\" y1=\"64\" x2=\"140\" y2=\"80\"/>\n      <line x1=\"168\" y1=\"64\" x2=\"168\" y2=\"80\"/><line x1=\"196\" y1=\"64\" x2=\"196\" y2=\"80\"/>\n    </g>\n    <!-- Gotas de grasa amarilla cayendo sobre los fogones -->\n    <path d=\"M72 84 Q78 122 72 146\" stroke=\"#eab308\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <circle cx=\"72\" cy=\"154\" r=\"4\" fill=\"#ca8a04\"/>\n    <path d=\"M132 84 Q138 128 132 158\" stroke=\"#eab308\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <circle cx=\"132\" cy=\"166\" r=\"4\" fill=\"#ca8a04\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Cocinero con chaquetilla de algodón ignífugo de doble botonadura (x=570..660, y=108..216) -->\n  <g transform=\"translate(566, 108)\">\n    <!-- Gorro alto de cocinero y rostro expresivo -->\n    <path d=\"M22 22 L18 4 Q44 -6 70 4 L66 22 Z\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"44\" cy=\"36\" r=\"15\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n    <circle cx=\"38\" cy=\"35\" r=\"1.8\" fill=\"#0f172a\"/><circle cx=\"50\" cy=\"35\" r=\"1.8\" fill=\"#0f172a\"/>\n    <path d=\"M38 42 Q44 45 50 42\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <!-- Chaquetilla cruzada con doble fila de botones -->\n    <path d=\"M18 54 Q44 48 70 54 L74 114 L14 114 Z\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <line x1=\"36\" y1=\"54\" x2=\"36\" y2=\"114\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n    <circle cx=\"36\" cy=\"68\" r=\"2.5\" fill=\"#0f172a\"/><circle cx=\"36\" cy=\"84\" r=\"2.5\" fill=\"#0f172a\"/><circle cx=\"36\" cy=\"100\" r=\"2.5\" fill=\"#0f172a\"/>\n    <circle cx=\"52\" cy=\"68\" r=\"2.5\" fill=\"#0f172a\"/><circle cx=\"52\" cy=\"84\" r=\"2.5\" fill=\"#0f172a\"/><circle cx=\"52\" cy=\"100\" r=\"2.5\" fill=\"#0f172a\"/>\n    <!-- Brazo izquierdo sujetando cuchara hacia la olla -->\n    <path d=\"M18 68 L2 90 L-8 84\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <circle cx=\"-8\" cy=\"84\" r=\"5\" fill=\"#fed7aa\"/>\n  </g>\n\n  <!-- ITEM 7 (FOGONES GAS CON TERMOPAR) + ITEM 11 (FREIDORA CON TERMOSTATO MAX 210°C) -->\n  <g transform=\"translate(358, 222)\">\n    <rect width=\"318\" height=\"148\" rx=\"4\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Olla acero y quemadores con llama azul + sensor termopar dorado -->\n    <circle cx=\"72\" cy=\"24\" r=\"26\" fill=\"#1e293b\"/>\n    <circle cx=\"72\" cy=\"24\" r=\"14\" fill=\"#0284c7\" opacity=\"0.9\"/>\n    <rect x=\"130\" y=\"-12\" width=\"52\" height=\"32\" rx=\"3\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <circle cx=\"156\" cy=\"28\" r=\"26\" fill=\"#1e293b\"/>\n    <circle cx=\"156\" cy=\"28\" r=\"14\" fill=\"#0284c7\" opacity=\"0.9\"/>\n    <line x1=\"176\" y1=\"28\" x2=\"188\" y2=\"28\" stroke=\"#facc15\" stroke-width=\"3\"/>\n    <!-- Mandos frontales de cocina de gas -->\n    <circle cx=\"60\" cy=\"66\" r=\"8\" fill=\"#0f172a\"/><circle cx=\"105\" cy=\"66\" r=\"8\" fill=\"#0f172a\"/><circle cx=\"150\" cy=\"66\" r=\"8\" fill=\"#0f172a\"/>\n    <!-- ITEM 11: Freidora derecha (x=570..670, y=300..366 -> rel x=212..312, y=14..144) -->\n    <rect x=\"220\" y=\"14\" width=\"84\" height=\"54\" rx=\"3\" fill=\"#eab308\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"234\" y=\"-8\" width=\"56\" height=\"24\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"262\" cy=\"96\" r=\"11\" fill=\"#0f172a\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n    <circle cx=\"288\" cy=\"96\" r=\"5\" fill=\"#22c55e\"/>\n    <text x=\"262\" y=\"122\" font-size=\"9\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">MAX 210°C</text>\n  </g>\n\n  <!-- ITEM 6 (SEGURO MESA INOX) + ITEM 1 (CORTAFIAMBRES) + ITEM 12 (CUCHILLA DISCO SIN RESGUARDO) -->\n  <g transform=\"translate(72, 294)\">\n    <ellipse cx=\"124\" cy=\"174\" rx=\"118\" ry=\"8\" fill=\"#020617\" opacity=\"0.28\"/>\n    <rect x=\"0\" y=\"38\" width=\"248\" height=\"18\" rx=\"2\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"12\" y=\"56\" width=\"12\" height=\"118\" fill=\"#94a3b8\" stroke=\"#475569\"/>\n    <rect x=\"224\" y=\"56\" width=\"12\" height=\"118\" fill=\"#94a3b8\" stroke=\"#475569\"/>\n    <rect x=\"20\" y=\"128\" width=\"208\" height=\"10\" fill=\"#cbd5e1\" stroke=\"#64748b\"/>\n    <!-- Cortafiambres profesional con cuchilla circular expuesta en x=200..290, y=246..312 -->\n    <g transform=\"translate(34, -64)\">\n      <rect x=\"4\" y=\"64\" width=\"144\" height=\"36\" rx=\"5\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <!-- Carro de fiambre abierto sin empujador -->\n      <polygon points=\"16,64 68,64 56,28 8,36\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      <rect x=\"26\" y=\"40\" width=\"34\" height=\"22\" rx=\"4\" fill=\"#fb7185\" stroke=\"#be123c\"/>\n      <circle cx=\"24\" cy=\"82\" r=\"5\" fill=\"#22c55e\"/><circle cx=\"42\" cy=\"82\" r=\"5\" fill=\"#ef4444\"/>\n      <!-- Cuchilla rotatoria sin resguardo (ITEM 12) -->\n      <circle cx=\"144\" cy=\"46\" r=\"34\" fill=\"#f8fafc\" stroke=\"#dc2626\" stroke-width=\"3.5\"/>\n      <circle cx=\"144\" cy=\"46\" r=\"24\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n      <circle cx=\"144\" cy=\"46\" r=\"7\" fill=\"#334155\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 9 (SEGURO): Sumidero sifónico con rejilla inox en suelo -->\n  <g transform=\"translate(212, 486)\">\n    <rect width=\"74\" height=\"36\" rx=\"4\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>\n    <g stroke=\"#0f172a\" stroke-width=\"3.5\" stroke-linecap=\"round\">\n      <line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"29\"/><line x1=\"24\" y1=\"7\" x2=\"24\" y2=\"29\"/>\n      <line x1=\"37\" y1=\"7\" x2=\"37\" y2=\"29\"/><line x1=\"50\" y1=\"7\" x2=\"50\" y2=\"29\"/>\n      <line x1=\"62\" y1=\"7\" x2=\"62\" y2=\"29\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 2 (PELIGRO): Charco de aceite y grasa frente a la freidora -->\n  <g id=\"danger-grasa\" transform=\"translate(425, 428)\">\n    <path d=\"M22 46 C58 20, 174 16, 218 42 C252 64, 224 96, 168 104 C96 112, 22 92, 12 66 Z\" fill=\"#eab308\" opacity=\"0.88\" stroke=\"#a16207\" stroke-width=\"2\"/>\n    <path d=\"M68 42 Q120 34 166 48\" fill=\"none\" stroke=\"#fef08a\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n  </g>\n\n  <!-- ITEM 8 (GRIFO MUELLE COMPENSADOR) + ITEM 5 (TABLA POLLO/ENSALADA) + ITEM 4 (ENCHUFE 400V EN AGUA) -->\n  <g transform=\"translate(708, 222)\">\n    <rect x=\"0\" y=\"64\" width=\"236\" height=\"86\" rx=\"3\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"132\" y=\"70\" width=\"90\" height=\"30\" rx=\"2\" fill=\"#334155\"/>\n    <!-- Grifo ducha con muelle helicoidal y pistola de aclarado (ITEM 8) -->\n    <path d=\"M188 64 L188 -16 Q188 -36 158 -36 L142 -18\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"6.5\" stroke-linecap=\"round\"/>\n    <path d=\"M182 14 L194 20 L182 26 L194 32 L182 38\" fill=\"none\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <rect x=\"134\" y=\"-20\" width=\"16\" height=\"10\" rx=\"2\" fill=\"#0f172a\"/>\n    <!-- ITEM 5: Tabla de madera contaminada con pollo crudo rosado + lechuga verde (x=725..825, y=268..318) -->\n    <g transform=\"translate(18, 46)\">\n      <rect width=\"92\" height=\"16\" rx=\"2\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"1.5\"/>\n      <ellipse cx=\"28\" cy=\"2\" rx=\"14\" ry=\"7\" fill=\"#fda4af\" stroke=\"#e11d48\" stroke-width=\"1.5\"/>\n      <circle cx=\"40\" cy=\"4\" r=\"4\" fill=\"#f8fafc\"/>\n      <circle cx=\"68\" cy=\"2\" r=\"8\" fill=\"#22c55e\" stroke=\"#15803d\"/>\n      <circle cx=\"76\" cy=\"4\" r=\"6\" fill=\"#4ade80\"/>\n    </g>\n    <!-- ITEM 4: Clavija trifásica roja 400V caída en charco de agua jabonosa con chispas -->\n    <g transform=\"translate(88, 178)\">\n      <ellipse cx=\"52\" cy=\"96\" rx=\"52\" ry=\"18\" fill=\"#38bdf8\" opacity=\"0.78\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>\n      <path d=\"M36 26 Q28 66 52 94\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5.5\" stroke-linecap=\"round\"/>\n      <rect x=\"12\" y=\"2\" width=\"66\" height=\"28\" rx=\"5\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <rect x=\"64\" y=\"8\" width=\"18\" height=\"16\" rx=\"2\" fill=\"#f8fafc\" stroke=\"#475569\"/>\n      <path d=\"M62 72 L72 60 L66 74 L82 64\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "coc-1",
        "num": 1,
        "name": "Cortafiambres con cuchilla expuesta",
        "category": "Equipos de Trabajo",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 8,
          "top": 29,
          "width": 17,
          "height": 24
        },
        "badgeAlign": "tl",
        "description": "Máquina de corte girando sin el protector de plástico y sin empujador de producto.",
        "consequences": "Amputación traumática de falanges de los dedos por atrapamiento contra el filo.",
        "regulation": "RD 1215/1997 sobre equipos de trabajo y norma UNE-EN 1974.",
        "prevention": "Utilizar siempre el carro de empuje y guante de malla metálica anticorte EN 1082."
      },
      {
        "id": "coc-2",
        "num": 2,
        "name": "Charco de aceite y grasa en suelo",
        "category": "Caídas al Mismo Nivel",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 44,
          "top": 72,
          "width": 21,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Suelo de baldosas cubierto de película de aceite caliente frente a la freidora.",
        "consequences": "Resbalón con caída y posible apoyo accidental sobre la cuba de aceite hirviendo.",
        "regulation": "RD 486/1997 sobre lugares de trabajo.",
        "prevention": "Limpieza inmediata con desengrasante y uso de calzado con suela SRC antideslizante."
      },
      {
        "id": "coc-3",
        "num": 3,
        "name": "Filtros de campana goteando grasa inflamable",
        "category": "Riesgo de Incendio",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 36,
          "top": 6,
          "width": 32,
          "height": 22
        },
        "badgeAlign": "tl",
        "description": "Filtros metálicos saturados de grasa cayendo gotas directamente sobre los fogones activos.",
        "consequences": "Inflamación súbita de la campana con propagación por el conducto extractor.",
        "regulation": "Código Técnico de la Edificación (DB-SI) y RD 513/2017.",
        "prevention": "Limpieza periódica obligatoria de filtros y conductos en lavavajillas industrial."
      },
      {
        "id": "coc-4",
        "num": 4,
        "name": "Enchufe trifásico de 400V en contacto con agua",
        "category": "Riesgo Eléctrico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 79,
          "top": 68,
          "width": 13,
          "height": 18
        },
        "badgeAlign": "tr",
        "description": "Clavija de conexión industrial roja de 400V sumergida en charco de baldeo junto al fregadero.",
        "consequences": "Electrocución de operarios que toquen superficies metálicas o pisen el agua.",
        "regulation": "Reglamento Electrotécnico de Baja Tensión y RD 614/2001.",
        "prevention": "Instalar bases estancas IP67 a más de 1.5 metros de altura del suelo en zonas húmedas."
      },
      {
        "id": "coc-5",
        "num": 5,
        "name": "Tabla de madera con pollo crudo y ensalada",
        "category": "Higiene Alimentaria",
        "isHazard": true,
        "severity": "Leve",
        "rect": {
          "left": 73,
          "top": 45,
          "width": 10,
          "height": 9
        },
        "badgeAlign": "tl",
        "description": "Tabla de madera agrietada porosa mezclando carne cruda con verdura lista para servir.",
        "consequences": "Contaminación cruzada por Salmonella o Campylobacter con toxiinfección alimentaria.",
        "regulation": "Reglamento CE 852/2004 relativo a la higiene de los productos alimenticios.",
        "prevention": "Prohibir tablas de madera; usar tablas de polietileno codificadas por colores."
      },
      {
        "id": "coc-12",
        "num": 12,
        "name": "Cuchilla de cortafiambres sin resguardo de disco",
        "category": "Puntos de Corte",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 20,
          "top": 41,
          "width": 9,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Bisel afilado del disco de 300 mm expuesto durante la rotación continua.",
        "consequences": "Sección de tendones y nervios en mano por proximidad involuntaria.",
        "regulation": "RD 1215/1997. Los órganos móviles deben estar provistos de resguardos.",
        "prevention": "Colocar el protector de anillo perimetral y el empujador de producto."
      }
    ]
  },
  {
    "id": "taller",
    "name": "Taller Mecánico e Industrial",
    "subtitle": "Mantenimiento y Reparación de Vehículos",
    "description": "Taller de automoción con elevadores hidráulicos, herramientas rotativas, oxicorte y fosos.",
    "badgeColor": "sky",
    "icon": "wrench",
    "timeLimit": 90,
    "items": [
      {
        "id": "tal-1",
        "num": 1,
        "name": "Coche elevado sin seguro mecánico",
        "category": "Aparatos de Elevación",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 42,
          "top": 24,
          "width": 25,
          "height": 18
        },
        "badgeAlign": "tl",
        "description": "Vehículo en puente de 2 columnas suspendido por presión hidráulica sin trinquete enclavado.",
        "consequences": "Aplastamiento mortal por descenso intempestivo por rotura de latiguillo.",
        "regulation": "Norma UNE-EN 1493 (Elevadores de vehículos) y RD 1215/1997.",
        "prevention": "Bajar siempre el elevador hasta apoyar mecánicamente en los trinquetes antes de trabajar."
      },
      {
        "id": "tal-2",
        "num": 2,
        "name": "Amoladora radial sin protector de disco",
        "category": "Herramientas Rotativas",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 20,
          "top": 44,
          "width": 12,
          "height": 10
        },
        "badgeAlign": "tl",
        "description": "Radial sobre banco con el protector de disco de 230 mm desmontado.",
        "consequences": "Impacto de fragmentos del disco roto a 80 m/s en cara y cuello con desgarros graves.",
        "regulation": "RD 1215/1997 y NTP 86 del INSST.",
        "prevention": "Prohibir terminantemente el uso sin carcasa protectora y utilizar pantalla facial EN 166."
      },
      {
        "id": "tal-3",
        "num": 3,
        "name": "Botellas de oxicorte con manguera agrietada",
        "category": "Soldadura y Oxicorte",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 80,
          "top": 32,
          "width": 13,
          "height": 36
        },
        "badgeAlign": "tr",
        "description": "Mangueras de acetileno y oxígeno agrietadas reparadas con cinta aislante sin apagallamas.",
        "consequences": "Fuga de acetileno, retroceso de llama hacia la botella y explosión catastrófica.",
        "regulation": "RD 2060/2008 y NTP 495 del INSST sobre soldadura oxiacetilénica.",
        "prevention": "Instalar válvulas antirretroceso en soplete y manómetros, y usar mangueras normalizadas."
      },
      {
        "id": "tal-4",
        "num": 4,
        "name": "Foso de inspección abierto sin barandilla",
        "category": "Caídas a Distinto Nivel",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 50,
          "top": 81,
          "width": 21,
          "height": 13
        },
        "badgeAlign": "tl",
        "description": "Foso de 1.6 m de profundidad abierto en zona de paso con iluminación tenue.",
        "consequences": "Caída de mecánicos al fondo del foso con fracturas craneales o de extremidades.",
        "regulation": "RD 486/1997 sobre lugares de trabajo.",
        "prevention": "Cubrir con tablones resistentes o instalar barandillas y cadenas perimetrales retráctiles."
      },
      {
        "id": "tal-5",
        "num": 5,
        "name": "Cuba de desengrase abierta sin extracción",
        "category": "Riesgo Químico e Incendio",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 3,
          "top": 28,
          "width": 11,
          "height": 26
        },
        "badgeAlign": "tl",
        "description": "Depósito con disolventes volátiles abierto emitiendo vapores sin campana de captación.",
        "consequences": "Inhalación crónica de vapores de hidrocarburos e ignición de atmósfera inflamable.",
        "regulation": "RD 374/2001 y RD 1215/1997.",
        "prevention": "Cubas con tapa de cierre automático con fusible térmico y extracción localizada."
      },
      {
        "id": "tal-6",
        "num": 6,
        "name": "Columnas de elevador ancladas a forjado",
        "category": "Estructuras de Taller",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 66,
          "top": 18,
          "width": 5,
          "height": 42
        },
        "badgeAlign": "tl",
        "description": "Poste metálico con pernos de anclaje de alta resistencia y placas de asiento ensayadas.",
        "consequences": "Ninguna. Asegura la estabilidad geométrica de la máquina elevadora.",
        "regulation": "Cumple el manual del fabricante y directiva de máquinas.",
        "prevention": "Elemento estructural conforme y seguro."
      },
      {
        "id": "tal-7",
        "num": 7,
        "name": "Banco de trabajo metálico con tornillo",
        "category": "Mobiliario Industrial",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 25,
          "top": 70,
          "width": 13,
          "height": 11
        },
        "badgeAlign": "tl",
        "description": "Mesa de taller pesada con mordaza de fijación mecánica firme para piezas.",
        "consequences": "Ninguna. Inmoviliza las piezas evitando que salgan despedidas al trabajarlas.",
        "regulation": "Cumple normas ergonómicas y de seguridad en taller.",
        "prevention": "Mobiliario de taller seguro."
      },
      {
        "id": "tal-8",
        "num": 8,
        "name": "Enrollador automático de manguera neumática",
        "category": "Orden y Limpieza",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 82,
          "top": 5,
          "width": 11,
          "height": 16
        },
        "badgeAlign": "tr",
        "description": "Carrete en techo que recoge la manguera de aire evitando cables por el suelo.",
        "consequences": "Ninguna. Elimina el riesgo de tropiezos con mangueras neumáticas en pasillo.",
        "regulation": "Cumple el RD 486/1997 sobre orden de instalaciones.",
        "prevention": "Elemento preventivo de seguridad pasiva."
      },
      {
        "id": "tal-9",
        "num": 9,
        "name": "Carro de herramientas con cajones bloqueables",
        "category": "Almacenamiento de Útiles",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 1,
          "top": 61,
          "width": 12,
          "height": 21
        },
        "badgeAlign": "tl",
        "description": "Mueble con ruedas dotado de freno y guías con retención de cajones.",
        "consequences": "Ninguna. Mantiene las llaves y herramientas ordenadas sin peligro de caída.",
        "regulation": "Cumple principios ergonómicos y de orden.",
        "prevention": "Elemento auxiliar seguro."
      },
      {
        "id": "tal-10",
        "num": 10,
        "name": "Suelo de taller con pintura epoxi antideslizante",
        "category": "Pavimentos de Taller",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 74,
          "top": 79,
          "width": 23,
          "height": 14
        },
        "badgeAlign": "br",
        "description": "Suelo gris con árido de cuarzo espolvoreado resistente a aceites y grasas.",
        "consequences": "Ninguna. Asegura buen coeficiente de rozamiento incluso con polvo de neumático.",
        "regulation": "Cumple el RD 486/1997 sobre pavimentos no resbaladizos.",
        "prevention": "Pavimento adecuado y seguro."
      },
      {
        "id": "tal-11",
        "num": 11,
        "name": "Brazo basculante del elevador con goma de apoyo",
        "category": "Puntos de Contacto",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 45,
          "top": 42,
          "width": 20,
          "height": 8
        },
        "badgeAlign": "tl",
        "description": "Taco de caucho macizo que apoya directamente sobre los puntos de chasis reforzados.",
        "consequences": "Ninguna. Evita el resbalamiento de la carrocería sobre el metal del brazo.",
        "regulation": "Cumple norma UNE-EN 1493.",
        "prevention": "Elemento de apoyo seguro."
      },
      {
        "id": "tal-12",
        "num": 12,
        "name": "Disco de amoladora con fisura en el borde",
        "category": "Abrasivos",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 34,
          "top": 56,
          "width": 8,
          "height": 8
        },
        "badgeAlign": "tl",
        "description": "Disco abrasivo con muescas y grieta visible montado en el eje de la radial.",
        "consequences": "Desintegración centrífuga instantánea del disco a 6.000 rpm.",
        "regulation": "RD 1215/1997 y norma EN 12413 sobre productos abrasivos aglomerados.",
        "prevention": "Rechazar discos golpeados y comprobar siempre la velocidad máxima antes de montar."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"talWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n    <linearGradient id=\"talFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/><stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Pared metálica y suelo epoxi antideslizante (ITEM 10) -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#talWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"80\" x2=\"1000\" y2=\"80\"/><line x1=\"0\" y1=\"160\" x2=\"1000\" y2=\"160\"/>\n    <line x1=\"250\" y1=\"0\" x2=\"250\" y2=\"340\"/><line x1=\"750\" y1=\"0\" x2=\"750\" y2=\"340\"/>\n  </g>\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#talFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <!-- Textura antideslizante y señal de zona epoxi en tal-10 (740..970, 474..558) -->\n  <g transform=\"translate(745, 480)\">\n    <line x1=\"0\" y1=\"68\" x2=\"225\" y2=\"68\" stroke=\"#eab308\" stroke-width=\"4\" stroke-dasharray=\"14,8\" opacity=\"0.7\"/>\n    <ellipse cx=\"115\" cy=\"40\" rx=\"85\" ry=\"18\" fill=\"#94a3b8\" opacity=\"0.16\"/>\n  </g>\n\n  <!-- ITEM 8 (SEGURO): Enrollador automático neumático en techo -->\n  <g transform=\"translate(830, 26)\">\n    <rect x=\"20\" y=\"0\" width=\"40\" height=\"12\" rx=\"2\" fill=\"#64748b\"/>\n    <circle cx=\"40\" cy=\"42\" r=\"30\" fill=\"#0284c7\" stroke=\"#e2e8f0\" stroke-width=\"3\"/>\n    <circle cx=\"40\" cy=\"42\" r=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\"/>\n    <path d=\"M58 58 Q80 96 64 132\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"5.5\" stroke-linecap=\"round\"/>\n    <rect x=\"59\" y=\"130\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#94a3b8\"/>\n  </g>\n\n  <!-- ITEM 5 (PELIGRO): Cuba de desengrase abierta con tapa levantada y vapores -->\n  <g id=\"danger-cuba\" transform=\"translate(26, 198)\">\n    <ellipse cx=\"55\" cy=\"142\" rx=\"48\" ry=\"7\" fill=\"#020617\" opacity=\"0.28\"/>\n    <polygon points=\"8,24 98,24 90,0 16,0\" fill=\"#334155\" stroke=\"#0f172a\" stroke-width=\"2\"/> <!-- Tapa abierta -->\n    <rect y=\"24\" width=\"106\" height=\"82\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"53\" cy=\"34\" rx=\"44\" ry=\"10\" fill=\"#0284c7\" opacity=\"0.9\"/>\n    <path d=\"M36 28 Q26 4 42 -12 M66 28 Q78 6 58 -10\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\" opacity=\"0.85\" stroke-linecap=\"round\"/>\n    <rect x=\"14\" y=\"106\" width=\"10\" height=\"36\" fill=\"#334155\"/><rect x=\"82\" y=\"106\" width=\"10\" height=\"36\" fill=\"#334155\"/>\n  </g>\n\n  <!-- ITEM 9 (SEGURO): Carro de herramientas rojo bloqueable -->\n  <g transform=\"translate(20, 368)\">\n    <ellipse cx=\"58\" cy=\"126\" rx=\"56\" ry=\"7\" fill=\"#020617\" opacity=\"0.28\"/>\n    <rect width=\"114\" height=\"118\" rx=\"4\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"2.5\"/>\n    <path d=\"M114 14 L126 14 L126 32\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <rect x=\"8\" y=\"10\" width=\"98\" height=\"16\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/><rect x=\"42\" y=\"16\" width=\"30\" height=\"4\" fill=\"#e2e8f0\"/>\n    <rect x=\"8\" y=\"32\" width=\"98\" height=\"16\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/><rect x=\"42\" y=\"38\" width=\"30\" height=\"4\" fill=\"#e2e8f0\"/>\n    <rect x=\"8\" y=\"54\" width=\"98\" height=\"22\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/><rect x=\"42\" y=\"63\" width=\"30\" height=\"4\" fill=\"#e2e8f0\"/>\n    <rect x=\"8\" y=\"82\" width=\"98\" height=\"26\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/><rect x=\"42\" y=\"93\" width=\"30\" height=\"4\" fill=\"#e2e8f0\"/>\n    <circle cx=\"100\" cy=\"6\" r=\"3.5\" fill=\"#facc15\"/>\n    <circle cx=\"20\" cy=\"124\" r=\"10\" fill=\"#0f172a\"/><circle cx=\"94\" cy=\"124\" r=\"10\" fill=\"#0f172a\"/>\n  </g>\n\n  <!-- ITEM 7 (BANCO DE TRABAJO CON TORNILLO ALINEADO EN 230..380, 402..486) + ITEM 2 (RADIAL) + ITEM 12 (DISCO FISURADO) -->\n  <g id=\"danger-radial\" transform=\"translate(178, 314)\">\n    <ellipse cx=\"106\" cy=\"174\" rx=\"102\" ry=\"8\" fill=\"#020617\" opacity=\"0.28\"/>\n    <!-- Encimera superior e inferior metálica del banco de trabajo -->\n    <rect width=\"214\" height=\"18\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"12\" y=\"18\" width=\"14\" height=\"154\" fill=\"#475569\"/><rect x=\"188\" y=\"18\" width=\"14\" height=\"154\" fill=\"#475569\"/>\n    <rect x=\"18\" y=\"102\" width=\"178\" height=\"14\" rx=\"2\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- ITEM 7: Tornillo de banco robusto montado en bandeja/saliente frontal alineado en tal-7 (250..380, 410..486) -->\n    <g transform=\"translate(76, 86)\">\n      <rect x=\"0\" y=\"16\" width=\"118\" height=\"14\" rx=\"2\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <rect x=\"14\" y=\"18\" width=\"58\" height=\"16\" rx=\"2\" fill=\"#0284c7\" stroke=\"#0c4a6e\" stroke-width=\"2\"/>\n      <rect x=\"22\" y=\"-2\" width=\"20\" height=\"22\" rx=\"2\" fill=\"#1e293b\"/>\n      <rect x=\"48\" y=\"0\" width=\"16\" height=\"20\" rx=\"2\" fill=\"#0369a1\"/>\n      <line x1=\"62\" y1=\"10\" x2=\"92\" y2=\"10\" stroke=\"#cbd5e1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <line x1=\"92\" y1=\"-2\" x2=\"92\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    </g>\n    <!-- ITEM 2: Amoladora radial eléctrica SIN protector encima del banco -->\n    <g transform=\"translate(22, -32)\">\n      <path d=\"M-24 22 Q-10 34 6 20\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <rect x=\"6\" y=\"10\" width=\"68\" height=\"20\" rx=\"5\" fill=\"#0284c7\" stroke=\"#0c4a6e\" stroke-width=\"1.5\"/>\n      <rect x=\"68\" y=\"4\" width=\"24\" height=\"26\" rx=\"3\" fill=\"#94a3b8\"/>\n      <line x1=\"66\" y1=\"-6\" x2=\"66\" y2=\"12\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <circle cx=\"96\" cy=\"20\" r=\"22\" fill=\"#334155\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n      <circle cx=\"96\" cy=\"20\" r=\"5\" fill=\"#cbd5e1\"/>\n    </g>\n    <!-- ITEM 12: Disco de corte apoyado al borde derecho con FISURA visible en x=340..420, y=336..384 -->\n    <g transform=\"translate(172, 24)\">\n      <circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"#475569\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n      <circle cx=\"24\" cy=\"24\" r=\"6\" fill=\"#0f172a\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <polyline points=\"24,18 34,8 30,14 42,6\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 1 (COCHE ELEVADO SIN SEGURO) + ITEM 6 (COLUMNAS ANCLADAS) + ITEM 11 (BRAZO CON GOMA APOYO) -->\n  <g id=\"danger-elevador\" transform=\"translate(415, 110)\">\n    <!-- Columnas azules ancladas con pernos al suelo (x=660..710 para columna derecha) -->\n    <rect x=\"0\" y=\"0\" width=\"24\" height=\"340\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"-8\" y=\"334\" width=\"40\" height=\"10\" rx=\"1\" fill=\"#94a3b8\" stroke=\"#475569\"/>\n    <rect x=\"260\" y=\"0\" width=\"24\" height=\"340\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"252\" y=\"334\" width=\"40\" height=\"10\" rx=\"1\" fill=\"#94a3b8\" stroke=\"#475569\"/>\n    <circle cx=\"258\" cy=\"336\" r=\"2\" fill=\"#0f172a\"/><circle cx=\"286\" cy=\"336\" r=\"2\" fill=\"#0f172a\"/>\n    <!-- Coche rojo detallado con ventanillas, faros y llantas de aleación -->\n    <g transform=\"translate(14, 34)\">\n      <path d=\"M26 68 L62 24 Q120 18 178 24 L218 68 Z\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n      <!-- Lunas oscuras del coche -->\n      <polygon points=\"44,64 68,30 120,28 120,64\" fill=\"#38bdf8\" opacity=\"0.82\"/>\n      <polygon points=\"128,28 172,30 198,64 128,64\" fill=\"#38bdf8\" opacity=\"0.82\"/>\n      <!-- Carrocería inferior, faro y piloto -->\n      <rect x=\"8\" y=\"66\" width=\"242\" height=\"36\" rx=\"8\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <rect x=\"236\" y=\"72\" width=\"14\" height=\"10\" rx=\"2\" fill=\"#fef08a\"/>\n      <rect x=\"8\" y=\"74\" width=\"12\" height=\"10\" rx=\"2\" fill=\"#f97316\"/>\n      <!-- Ruedas completas con llantas -->\n      <circle cx=\"52\" cy=\"102\" r=\"22\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"52\" cy=\"102\" r=\"11\" fill=\"#cbd5e1\"/><circle cx=\"52\" cy=\"102\" r=\"4\" fill=\"#475569\"/>\n      <circle cx=\"206\" cy=\"102\" r=\"22\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"206\" cy=\"102\" r=\"11\" fill=\"#cbd5e1\"/><circle cx=\"206\" cy=\"102\" r=\"4\" fill=\"#475569\"/>\n    </g>\n    <!-- Brazos amarillos basculantes y tacos de goma negra bajo chasis (ITEM 11) -->\n    <line x1=\"20\" y1=\"162\" x2=\"262\" y2=\"162\" stroke=\"#facc15\" stroke-width=\"10\"/>\n    <rect x=\"46\" y=\"142\" width=\"26\" height=\"15\" rx=\"2\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <rect x=\"214\" y=\"142\" width=\"26\" height=\"15\" rx=\"2\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <!-- Indicador rojo de trinquete mecánico de seguridad sin enclavar -->\n    <path d=\"M250 175 L250 198 M244 190 L250 198 L256 190\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Carro de botellas de oxicorte con manómetros y manguera agrietada con cinta -->\n  <g id=\"danger-oxicorte\" transform=\"translate(794, 184)\">\n    <ellipse cx=\"48\" cy=\"224\" rx=\"52\" ry=\"8\" fill=\"#020617\" opacity=\"0.28\"/>\n    <rect x=\"-4\" y=\"212\" width=\"102\" height=\"10\" rx=\"2\" fill=\"#475569\"/>\n    <circle cx=\"88\" cy=\"214\" r=\"14\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <rect x=\"10\" y=\"54\" width=\"32\" height=\"162\" rx=\"11\" fill=\"#0284c7\" stroke=\"#0c4a6e\" stroke-width=\"2\"/>\n    <rect x=\"48\" y=\"72\" width=\"36\" height=\"144\" rx=\"11\" fill=\"#b91c1c\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n    <rect x=\"6\" y=\"130\" width=\"82\" height=\"6\" fill=\"#94a3b8\"/> <!-- Cadena carro -->\n    <circle cx=\"26\" cy=\"44\" r=\"8\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <circle cx=\"66\" cy=\"64\" r=\"8\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <path d=\"M26 36 Q12 6 66 32 Q98 56 88 122\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4.5\"/>\n    <rect x=\"44\" y=\"16\" width=\"14\" height=\"9\" fill=\"#0f172a\"/> <!-- Parche cinta aislante -->\n    <path d=\"M40 8 L34 -2 M52 4 L56 -6\" stroke=\"#facc15\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Foso de inspección profundo abierto sin barandilla -->\n  <g id=\"danger-foso\" transform=\"translate(415, 464)\">\n    <polygon points=\"0,0 280,0 256,108 24,108\" fill=\"#09090b\" stroke=\"#facc15\" stroke-width=\"4\" stroke-dasharray=\"16,10\"/>\n    <!-- Escalones internos del foso para dar sensación de profundidad real -->\n    <g stroke=\"#334155\" stroke-width=\"2\">\n      <line x1=\"20\" y1=\"26\" x2=\"54\" y2=\"26\"/><line x1=\"24\" y1=\"48\" x2=\"58\" y2=\"48\"/><line x1=\"28\" y1=\"70\" x2=\"62\" y2=\"70\"/>\n    </g>\n    <rect x=\"180\" y=\"34\" width=\"48\" height=\"24\" rx=\"2\" fill=\"#1e293b\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "tal-1",
        "num": 1,
        "name": "Coche elevado sin seguro mecánico",
        "category": "Aparatos de Elevación",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 42,
          "top": 24,
          "width": 25,
          "height": 18
        },
        "badgeAlign": "tl",
        "description": "Vehículo en puente de 2 columnas suspendido por presión hidráulica sin trinquete enclavado.",
        "consequences": "Aplastamiento mortal por descenso intempestivo por rotura de latiguillo.",
        "regulation": "Norma UNE-EN 1493 (Elevadores de vehículos) y RD 1215/1997.",
        "prevention": "Bajar siempre el elevador hasta apoyar mecánicamente en los trinquetes antes de trabajar."
      },
      {
        "id": "tal-2",
        "num": 2,
        "name": "Amoladora radial sin protector de disco",
        "category": "Herramientas Rotativas",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 20,
          "top": 44,
          "width": 12,
          "height": 10
        },
        "badgeAlign": "tl",
        "description": "Radial sobre banco con el protector de disco de 230 mm desmontado.",
        "consequences": "Impacto de fragmentos del disco roto a 80 m/s en cara y cuello con desgarros graves.",
        "regulation": "RD 1215/1997 y NTP 86 del INSST.",
        "prevention": "Prohibir terminantemente el uso sin carcasa protectora y utilizar pantalla facial EN 166."
      },
      {
        "id": "tal-3",
        "num": 3,
        "name": "Botellas de oxicorte con manguera agrietada",
        "category": "Soldadura y Oxicorte",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 80,
          "top": 32,
          "width": 13,
          "height": 36
        },
        "badgeAlign": "tr",
        "description": "Mangueras de acetileno y oxígeno agrietadas reparadas con cinta aislante sin apagallamas.",
        "consequences": "Fuga de acetileno, retroceso de llama hacia la botella y explosión catastrófica.",
        "regulation": "RD 2060/2008 y NTP 495 del INSST sobre soldadura oxiacetilénica.",
        "prevention": "Instalar válvulas antirretroceso en soplete y manómetros, y usar mangueras normalizadas."
      },
      {
        "id": "tal-4",
        "num": 4,
        "name": "Foso de inspección abierto sin barandilla",
        "category": "Caídas a Distinto Nivel",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 50,
          "top": 81,
          "width": 21,
          "height": 13
        },
        "badgeAlign": "tl",
        "description": "Foso de 1.6 m de profundidad abierto en zona de paso con iluminación tenue.",
        "consequences": "Caída de mecánicos al fondo del foso con fracturas craneales o de extremidades.",
        "regulation": "RD 486/1997 sobre lugares de trabajo.",
        "prevention": "Cubrir con tablones resistentes o instalar barandillas y cadenas perimetrales retráctiles."
      },
      {
        "id": "tal-5",
        "num": 5,
        "name": "Cuba de desengrase abierta sin extracción",
        "category": "Riesgo Químico e Incendio",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 3,
          "top": 28,
          "width": 11,
          "height": 26
        },
        "badgeAlign": "tl",
        "description": "Depósito con disolventes volátiles abierto emitiendo vapores sin campana de captación.",
        "consequences": "Inhalación crónica de vapores de hidrocarburos e ignición de atmósfera inflamable.",
        "regulation": "RD 374/2001 y RD 1215/1997.",
        "prevention": "Cubas con tapa de cierre automático con fusible térmico y extracción localizada."
      },
      {
        "id": "tal-12",
        "num": 12,
        "name": "Disco de amoladora con fisura en el borde",
        "category": "Abrasivos",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 34,
          "top": 56,
          "width": 8,
          "height": 8
        },
        "badgeAlign": "tl",
        "description": "Disco abrasivo con muescas y grieta visible montado en el eje de la radial.",
        "consequences": "Desintegración centrífuga instantánea del disco a 6.000 rpm.",
        "regulation": "RD 1215/1997 y norma EN 12413 sobre productos abrasivos aglomerados.",
        "prevention": "Rechazar discos golpeados y comprobar siempre la velocidad máxima antes de montar."
      }
    ]
  },
  {
    "id": "alturas",
    "name": "Cubiertas y Tejados",
    "subtitle": "Trabajos Verticales y Rehabilitación",
    "description": "Cubierta inclinada de teja con claraboyas frágiles, chimeneas y riesgo de caída en altura.",
    "badgeColor": "amber",
    "icon": "mountain",
    "timeLimit": 90,
    "items": [
      {
        "id": "alt-1",
        "num": 1,
        "name": "Lucernario de plástico frágil sin red",
        "category": "Superficies Frágiles",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 33,
          "top": 37,
          "width": 19,
          "height": 15
        },
        "badgeAlign": "tl",
        "description": "Claraboya de policarbonato translúcido envejecido sin reja ni malla metálica resistente.",
        "consequences": "Rotura inmediata de la placa bajo el peso del trabajador y caída al vacío de 8 metros.",
        "regulation": "RD 2177/2004 y RD 1627/1997. Las superficies no transitables deben protegerse.",
        "prevention": "Instalar redes bajo cubierta antes de pisar el tejado y pasarelas de reparto de carga."
      },
      {
        "id": "alt-2",
        "num": 2,
        "name": "Operario en el alero sin arnés ni línea",
        "category": "Caídas en Altura",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 58,
          "top": 48,
          "width": 26,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Trabajador arrodillado en el borde del tejado a 12 metros de altura sin atadura.",
        "consequences": "Caída vertical al vacío con resultado de muerte instantánea.",
        "regulation": "RD 2177/2004 sobre trabajos en altura. Obligación de protección a partir de 2 metros.",
        "prevention": "Instalar redes de seguridad perimetrales de horca tipo V o arnés conectado a línea de vida."
      },
      {
        "id": "alt-3",
        "num": 3,
        "name": "Cuerda amarrada a chimenea agrietada",
        "category": "Puntos de Anclaje",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 55,
          "top": 8,
          "width": 14,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Línea de vida atada al fuste de una chimenea de ladrillo antiguo con mortero disgregado.",
        "consequences": "Colapso de la chimenea al recibir el impacto dinámico de una caída (600 kg de fuerza).",
        "regulation": "Norma UNE-EN 795 (Dispositivos de anclaje). Resistencia estática mínima requerida de 12 kN.",
        "prevention": "Prohibir anclajes a ladrillo; taladrar con anclajes químicos en vigas maestras ensayadas."
      },
      {
        "id": "alt-4",
        "num": 4,
        "name": "Escalera que no sobrepasa 1m sobre alero",
        "category": "Acceso a Cubiertas",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 4,
          "top": 78,
          "width": 9,
          "height": 18
        },
        "badgeAlign": "tl",
        "description": "Escalera de mano que finaliza a ras del canalón sin sobresalir ni estar atada en cabeza.",
        "consequences": "Deslizamiento lateral de la escalera o pérdida de equilibrio durante el desembarco.",
        "regulation": "RD 2177/2004. Los largueros deben sobrepasar al menos 1 metro por encima del plano.",
        "prevention": "Utilizar escaleras con prolongación telescópica de 1 m y amarrar firmemente la cabeza."
      },
      {
        "id": "alt-5",
        "num": 5,
        "name": "Tejas cerámicas de cubierta fijadas",
        "category": "Material de Cobertura",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 8,
          "top": 32,
          "width": 22,
          "height": 22
        },
        "badgeAlign": "tl",
        "description": "Tejas curvas mecánicamente clavadas y recibidas con mortero en hiladas reglamentarias.",
        "consequences": "Ninguna. Superficie estable que canaliza el agua de lluvia hacia los desagües.",
        "regulation": "Cumple el Código Técnico de la Edificación (DB-HS).",
        "prevention": "Elemento constructivo seguro."
      },
      {
        "id": "alt-6",
        "num": 6,
        "name": "Canalón de recogida de aguas pluviales",
        "category": "Evacuación de Cubiertas",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 15,
          "top": 65,
          "width": 25,
          "height": 7
        },
        "badgeAlign": "tl",
        "description": "Canal metálico de zinc fijado mediante ganchos reforzados bajo la línea de alero.",
        "consequences": "Ninguna. Desagüe técnico sin cargas estructurales.",
        "regulation": "Cumple Código Técnico de la Edificación.",
        "prevention": "Elemento seguro."
      },
      {
        "id": "alt-7",
        "num": 7,
        "name": "Peto perimetral de ladrillo en fachada",
        "category": "Remates de Obra",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 88,
          "top": 19,
          "width": 7,
          "height": 48
        },
        "badgeAlign": "tr",
        "description": "Muro bajo de albañilería que corona la fachada exterior.",
        "consequences": "Ninguna. Elemento arquitectónico de cerramiento exterior.",
        "regulation": "Cumple Código Técnico de la Edificación.",
        "prevention": "Elemento constructivo seguro."
      },
      {
        "id": "alt-8",
        "num": 8,
        "name": "Casco con barboquejo para alturas",
        "category": "EPIs de Altura",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 76,
          "top": 33,
          "width": 7,
          "height": 13
        },
        "badgeAlign": "tl",
        "description": "Casco de protección para trabajos en altura EN 12492 con barboquejo de retención (50 daN).",
        "consequences": "Ninguna. Evita la pérdida del casco durante movimientos forzados o caídas.",
        "regulation": "Cumple el RD 773/1997 sobre EPIs.",
        "prevention": "EPI obligatorio y correcto. Elemento seguro."
      },
      {
        "id": "alt-9",
        "num": 9,
        "name": "Calzado especial con suela de agarre en teja",
        "category": "Calzado de Trabajo",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 75,
          "top": 64,
          "width": 10,
          "height": 12
        },
        "badgeAlign": "bl",
        "description": "Bota técnica de tejador con suela de caucho vulcanizado de máxima adherencia.",
        "consequences": "Ninguna. Previene el resbalamiento sobre la pendiente de teja.",
        "regulation": "Cumple norma UNE-EN ISO 20347 nivel SRC.",
        "prevention": "EPI adecuado y seguro."
      },
      {
        "id": "alt-10",
        "num": 10,
        "name": "Línea de cumbrera ventilada",
        "category": "Estructura de Tejado",
        "isHazard": false,
        "severity": "Seguro",
        "rect": {
          "left": 20,
          "top": 15,
          "width": 32,
          "height": 8
        },
        "badgeAlign": "tl",
        "description": "Caballete de remate superior que une las dos vertientes de la cubierta.",
        "consequences": "Ninguna. Elemento estructural firme y bien aplomado.",
        "regulation": "Cumple Código Técnico de la Edificación.",
        "prevention": "Elemento constructivo seguro."
      },
      {
        "id": "alt-11",
        "num": 11,
        "name": "Herramientas sueltas en la pendiente del tejado",
        "category": "Caída de Objetos",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 23,
          "top": 49,
          "width": 12,
          "height": 10
        },
        "badgeAlign": "tl",
        "description": "Taladro a batería y martillo apoyados sueltos sobre tejas inclinadas sin amarrar.",
        "consequences": "Caída de herramientas de 3 kg al vacío impactando sobre peatones en la acera.",
        "regulation": "RD 2177/2004 (Anexo). Las herramientas deben asegurarse mediante cuerdas de sujeción.",
        "prevention": "Utilizar bolsas portaherramientas o cuerdas elásticas de sujeción a la muñeca/arnés."
      },
      {
        "id": "alt-12",
        "num": 12,
        "name": "Grietas profundas en el mortero de la chimenea",
        "category": "Deterioro Estructural",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 56,
          "top": 25,
          "width": 8,
          "height": 9
        },
        "badgeAlign": "tr",
        "description": "Ladrillos sueltos con fractura que cederán ante cualquier esfuerzo horizontal.",
        "consequences": "Derrumbe del tiro de chimenea cayendo hacia el interior o exterior del edificio.",
        "regulation": "RD 1627/1997 sobre seguridad en obras.",
        "prevention": "Saneamiento y consolidación estructural antes de cualquier trabajo cercano."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"altSky\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\"/><stop offset=\"55%\" stop-color=\"#38bdf8\"/><stop offset=\"100%\" stop-color=\"#bae6fd\"/>\n    </linearGradient>\n    <linearGradient id=\"altRoof\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#c2410c\"/><stop offset=\"55%\" stop-color=\"#ea580c\"/><stop offset=\"100%\" stop-color=\"#9a3412\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Cielo exterior y vacío al borde derecho -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"600\" fill=\"url(#altSky)\"/>\n  <ellipse cx=\"220\" cy=\"54\" rx=\"85\" ry=\"22\" fill=\"#ffffff\" opacity=\"0.6\"/>\n  <rect x=\"880\" y=\"420\" width=\"120\" height=\"180\" fill=\"#0369a1\" opacity=\"0.35\"/>\n\n  <!-- Fachada del edificio de 12 metros con ventana visible -->\n  <polygon points=\"0,420 880,420 880,600 0,600\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/>\n  <g transform=\"translate(460, 465)\">\n    <rect width=\"120\" height=\"82\" rx=\"3\" fill=\"#0f172a\" opacity=\"0.55\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"82\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n  </g>\n\n  <!-- Faldón de tejado inclinado (cumbrera y=125 a alero y=410) -->\n  <polygon points=\"40,125 875,125 895,410 15,410\" fill=\"url(#altRoof)\" stroke=\"#7c2d12\" stroke-width=\"2\"/>\n\n  <!-- ITEM 5 (SEGURO): Hiladas reales de tejas cerámicas curvas fijadas -->\n  <g stroke=\"#7c2d12\" stroke-width=\"2\" fill=\"none\" opacity=\"0.72\">\n    <path d=\"M36,185 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0\"/>\n    <path d=\"M32,245 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0\"/>\n    <path d=\"M28,305 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0\"/>\n    <path d=\"M22,365 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0 q20,10 40,0\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Caballete de cumbrera ventilada -->\n  <g transform=\"translate(36, 106)\">\n    <rect width=\"844\" height=\"24\" rx=\"7\" fill=\"#7c2d12\" stroke=\"#451a03\" stroke-width=\"2\"/>\n    <rect x=\"6\" y=\"4\" width=\"832\" height=\"7\" rx=\"3\" fill=\"#c2410c\"/>\n  </g>\n\n  <!-- ITEM 7 (SEGURO): Peto perimetral de ladrillo en borde derecho con albardilla -->\n  <g transform=\"translate(868, 120)\">\n    <polygon points=\"0,0 34,0 54,290 18,290\" fill=\"#b91c1c\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n    <g stroke=\"#fca5a5\" stroke-width=\"1\" opacity=\"0.45\">\n      <line x1=\"4\" y1=\"50\" x2=\"36\" y2=\"50\"/><line x1=\"8\" y1=\"110\" x2=\"42\" y2=\"110\"/><line x1=\"12\" y1=\"170\" x2=\"46\" y2=\"170\"/><line x1=\"15\" y1=\"230\" x2=\"50\" y2=\"230\"/>\n    </g>\n    <rect x=\"-4\" y=\"-6\" width=\"40\" height=\"10\" rx=\"2\" fill=\"#cbd5e1\" stroke=\"#64748b\"/>\n  </g>\n\n  <!-- ITEM 6 (SEGURO): Canalón metálico de zinc en el alero y bajante -->\n  <g transform=\"translate(12, 404)\">\n    <rect width=\"890\" height=\"14\" rx=\"4\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"142\" y=\"14\" width=\"12\" height=\"182\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"139\" y=\"80\" width=\"18\" height=\"6\" fill=\"#475569\"/>\n  </g>\n\n  <!-- ITEM 3 (CUERDA AMARRADA) + ITEM 12 (GRIETAS PROFUNDAS EN MORTERO DE CHIMENEA) -->\n  <g id=\"danger-chimenea\" transform=\"translate(592, 62)\">\n    <rect width=\"94\" height=\"128\" fill=\"#991b1b\" stroke=\"#450a0a\" stroke-width=\"2.5\"/>\n    <g stroke=\"#fca5a5\" stroke-width=\"1.2\" opacity=\"0.45\">\n      <line x1=\"0\" y1=\"30\" x2=\"94\" y2=\"30\"/><line x1=\"0\" y1=\"60\" x2=\"94\" y2=\"60\"/><line x1=\"0\" y1=\"90\" x2=\"94\" y2=\"90\"/>\n      <line x1=\"47\" y1=\"0\" x2=\"47\" y2=\"30\"/><line x1=\"25\" y1=\"30\" x2=\"25\" y2=\"60\"/><line x1=\"70\" y1=\"60\" x2=\"70\" y2=\"90\"/>\n    </g>\n    <rect x=\"-6\" y=\"-8\" width=\"106\" height=\"12\" fill=\"#475569\"/>\n    <rect x=\"18\" y=\"-20\" width=\"14\" height=\"12\" fill=\"#b45309\"/><rect x=\"60\" y=\"-20\" width=\"14\" height=\"12\" fill=\"#b45309\"/>\n    <!-- Grietas estructurales oscuras destacadas -->\n    <polyline points=\"56,16 74,46 60,76 74,98\" stroke=\"#0f172a\" stroke-width=\"3.5\" fill=\"none\" stroke-linejoin=\"round\"/>\n    <polyline points=\"20,38 34,62 24,84\" stroke=\"#0f172a\" stroke-width=\"3\" fill=\"none\"/>\n    <!-- Lazo de cuerda amarilla amarrado a la chimenea deteriorada -->\n    <ellipse cx=\"47\" cy=\"70\" rx=\"51\" ry=\"12\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"6\"/>\n    <path d=\"M-4 72 Q-82 122 -132 168\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3.5\" stroke-dasharray=\"7,3\"/>\n  </g>\n\n  <!-- ITEM 1 (PELIGRO): Lucernario de policarbonato frágil sin malla ni pasarela -->\n  <g id=\"danger-lucernario\" transform=\"translate(338, 214)\">\n    <polygon points=\"16,0 168,0 188,96 0,96\" fill=\"#38bdf8\" opacity=\"0.65\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n    <line x1=\"56\" y1=\"0\" x2=\"48\" y2=\"96\" stroke=\"#bae6fd\" stroke-width=\"2\" opacity=\"0.5\"/>\n    <line x1=\"94\" y1=\"0\" x2=\"94\" y2=\"96\" stroke=\"#bae6fd\" stroke-width=\"2\" opacity=\"0.5\"/>\n    <line x1=\"132\" y1=\"0\" x2=\"140\" y2=\"96\" stroke=\"#bae6fd\" stroke-width=\"2\" opacity=\"0.5\"/>\n    <polyline points=\"42,32 76,58 112,42 134,64\" stroke=\"#ef4444\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 11 (PELIGRO): Herramientas sueltas deslizándose por el tejado -->\n  <g transform=\"translate(236, 314)\">\n    <!-- Taladro a batería amarillo -->\n    <rect x=\"0\" y=\"10\" width=\"46\" height=\"14\" rx=\"3\" fill=\"#facc15\" stroke=\"#854d0e\" stroke-width=\"1.5\"/>\n    <rect x=\"14\" y=\"24\" width=\"11\" height=\"18\" rx=\"1\" fill=\"#0f172a\"/>\n    <rect x=\"46\" y=\"14\" width=\"16\" height=\"5\" fill=\"#94a3b8\"/>\n    <!-- Martillo de orejas suelto inclinado -->\n    <g transform=\"translate(68, 18) rotate(28)\">\n      <rect x=\"0\" y=\"6\" width=\"38\" height=\"6\" rx=\"1\" fill=\"#b45309\"/>\n      <rect x=\"30\" y=\"0\" width=\"10\" height=\"18\" rx=\"2\" fill=\"#475569\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Escalera que NO sobrepasa 1m el alero -->\n  <g id=\"danger-escalera-altura\" transform=\"translate(46, 398)\">\n    <line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"195\" stroke=\"#e2e8f0\" stroke-width=\"6\"/>\n    <line x1=\"50\" y1=\"6\" x2=\"50\" y2=\"195\" stroke=\"#e2e8f0\" stroke-width=\"6\"/>\n    <line x1=\"16\" y1=\"28\" x2=\"50\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"16\" y1=\"62\" x2=\"50\" y2=\"62\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"16\" y1=\"96\" x2=\"50\" y2=\"96\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"16\" y1=\"130\" x2=\"50\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"16\" y1=\"164\" x2=\"50\" y2=\"164\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"4\" y1=\"6\" x2=\"64\" y2=\"6\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n  </g>\n\n  <!-- ITEM 2 (OPERARIO EN ALERO SIN ARNÉS) + ITEM 8 (CASCO BARBOQUEJO) + ITEM 9 (BOTAS DE TEJADOR) -->\n  <g id=\"danger-vacio\" transform=\"translate(756, 226)\">\n    <!-- Línea discontinua roja de peligro de caída al vacío -->\n    <line x1=\"98\" y1=\"6\" x2=\"98\" y2=\"210\" stroke=\"#ef4444\" stroke-width=\"3.5\" stroke-dasharray=\"8,5\"/>\n    <!-- Rodillas y botas técnicas antideslizantes apoyadas sobre teja del alero (ITEM 9: y=378..416 -> rel y=152..190) -->\n    <path d=\"M24 128 L34 152 L16 174\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M44 128 L52 152 L38 174\" fill=\"none\" stroke=\"#1e40af\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <!-- Botas de tejador con suela de agarre marcada en amarillo (rel y=168..184 = abs y=394..410 justo encima del canalón!) -->\n    <rect x=\"8\" y=\"166\" width=\"22\" height=\"12\" rx=\"3\" fill=\"#0f172a\" stroke=\"#facc15\" stroke-width=\"1.5\"/>\n    <rect x=\"34\" y=\"166\" width=\"22\" height=\"12\" rx=\"3\" fill=\"#0f172a\" stroke=\"#facc15\" stroke-width=\"1.5\"/>\n    <!-- Torso inclinado sin arnés anticaídas ni línea de vida -->\n    <path d=\"M18 66 L54 66 L52 130 L20 130 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n    <path d=\"M52 78 L72 96 L64 114\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <circle cx=\"64\" cy=\"116\" r=\"5\" fill=\"#fed7aa\"/>\n    <!-- Casco amarillo EN 12492 con barboquejo negro visible (ITEM 8: rel y=10..48 = abs y=236..274) -->\n    <rect x=\"30\" y=\"52\" width=\"12\" height=\"16\" fill=\"#fed7aa\"/>\n    <circle cx=\"36\" cy=\"34\" r=\"15\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.2\"/>\n    <circle cx=\"42\" cy=\"33\" r=\"1.8\" fill=\"#0f172a\"/>\n    <path d=\"M19 30 Q36 8 53 30 Z\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <path d=\"M24 30 L35 48 L48 30\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "alt-1",
        "num": 1,
        "name": "Lucernario de plástico frágil sin red",
        "category": "Superficies Frágiles",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 33,
          "top": 37,
          "width": 19,
          "height": 15
        },
        "badgeAlign": "tl",
        "description": "Claraboya de policarbonato translúcido envejecido sin reja ni malla metálica resistente.",
        "consequences": "Rotura inmediata de la placa bajo el peso del trabajador y caída al vacío de 8 metros.",
        "regulation": "RD 2177/2004 y RD 1627/1997. Las superficies no transitables deben protegerse.",
        "prevention": "Instalar redes bajo cubierta antes de pisar el tejado y pasarelas de reparto de carga."
      },
      {
        "id": "alt-2",
        "num": 2,
        "name": "Operario en el alero sin arnés ni línea",
        "category": "Caídas en Altura",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 58,
          "top": 48,
          "width": 26,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Trabajador arrodillado en el borde del tejado a 12 metros de altura sin atadura.",
        "consequences": "Caída vertical al vacío con resultado de muerte instantánea.",
        "regulation": "RD 2177/2004 sobre trabajos en altura. Obligación de protección a partir de 2 metros.",
        "prevention": "Instalar redes de seguridad perimetrales de horca tipo V o arnés conectado a línea de vida."
      },
      {
        "id": "alt-3",
        "num": 3,
        "name": "Cuerda amarrada a chimenea agrietada",
        "category": "Puntos de Anclaje",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 55,
          "top": 8,
          "width": 14,
          "height": 16
        },
        "badgeAlign": "tl",
        "description": "Línea de vida atada al fuste de una chimenea de ladrillo antiguo con mortero disgregado.",
        "consequences": "Colapso de la chimenea al recibir el impacto dinámico de una caída (600 kg de fuerza).",
        "regulation": "Norma UNE-EN 795 (Dispositivos de anclaje). Resistencia estática mínima requerida de 12 kN.",
        "prevention": "Prohibir anclajes a ladrillo; taladrar con anclajes químicos en vigas maestras ensayadas."
      },
      {
        "id": "alt-4",
        "num": 4,
        "name": "Escalera que no sobrepasa 1m sobre alero",
        "category": "Acceso a Cubiertas",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 4,
          "top": 78,
          "width": 9,
          "height": 18
        },
        "badgeAlign": "tl",
        "description": "Escalera de mano que finaliza a ras del canalón sin sobresalir ni estar atada en cabeza.",
        "consequences": "Deslizamiento lateral de la escalera o pérdida de equilibrio durante el desembarco.",
        "regulation": "RD 2177/2004. Los largueros deben sobrepasar al menos 1 metro por encima del plano.",
        "prevention": "Utilizar escaleras con prolongación telescópica de 1 m y amarrar firmemente la cabeza."
      },
      {
        "id": "alt-11",
        "num": 11,
        "name": "Herramientas sueltas en la pendiente del tejado",
        "category": "Caída de Objetos",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 23,
          "top": 49,
          "width": 12,
          "height": 10
        },
        "badgeAlign": "tl",
        "description": "Taladro a batería y martillo apoyados sueltos sobre tejas inclinadas sin amarrar.",
        "consequences": "Caída de herramientas de 3 kg al vacío impactando sobre peatones en la acera.",
        "regulation": "RD 2177/2004 (Anexo). Las herramientas deben asegurarse mediante cuerdas de sujeción.",
        "prevention": "Utilizar bolsas portaherramientas o cuerdas elásticas de sujeción a la muñeca/arnés."
      },
      {
        "id": "alt-12",
        "num": 12,
        "name": "Grietas profundas en el mortero de la chimenea",
        "category": "Deterioro Estructural",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 56,
          "top": 25,
          "width": 8,
          "height": 9
        },
        "badgeAlign": "tr",
        "description": "Ladrillos sueltos con fractura que cederán ante cualquier esfuerzo horizontal.",
        "consequences": "Derrumbe del tiro de chimenea cayendo hacia el interior o exterior del edificio.",
        "regulation": "RD 1627/1997 sobre seguridad en obras.",
        "prevention": "Saneamiento y consolidación estructural antes de cualquier trabajo cercano."
      }
    ]
  }
];
