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
          "top": 12,
          "width": 27,
          "height": 9
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
          "top": 40,
          "width": 10,
          "height": 10
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
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"hospWallGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#f0fdfa\"/>\n      <stop offset=\"55%\" stop-color=\"#ccfbf1\"/>\n      <stop offset=\"56%\" stop-color=\"#0d9488\"/>\n      <stop offset=\"60%\" stop-color=\"#0f766e\"/>\n      <stop offset=\"100%\" stop-color=\"#115e59\"/>\n    </linearGradient>\n    <linearGradient id=\"hospFloorGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n      <stop offset=\"15%\" stop-color=\"#f8fafc\"/>\n      <stop offset=\"45%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#94a3b8\"/>\n    </linearGradient>\n    <linearGradient id=\"hospChrome\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#64748b\"/>\n      <stop offset=\"25%\" stop-color=\"#f8fafc\"/>\n      <stop offset=\"50%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"75%\" stop-color=\"#f1f5f9\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n    <linearGradient id=\"hospO2Body\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n      <stop offset=\"35%\" stop-color=\"#ffffff\"/>\n      <stop offset=\"85%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#94a3b8\"/>\n    </linearGradient>\n    <linearGradient id=\"hospO2Shoulder\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#15803d\"/>\n      <stop offset=\"40%\" stop-color=\"#22c55e\"/>\n      <stop offset=\"80%\" stop-color=\"#166534\"/>\n      <stop offset=\"100%\" stop-color=\"#14532d\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Pared y rejilla limpia -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#hospWallGrad)\"/>\n  <g stroke=\"#99f6e4\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"30\" x2=\"1000\" y2=\"30\"/>\n    <line x1=\"0\" y1=\"65\" x2=\"1000\" y2=\"65\"/>\n    <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"65\"/><line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"65\"/><line x1=\"500\" y1=\"0\" x2=\"500\" y2=\"65\"/><line x1=\"700\" y1=\"0\" x2=\"700\" y2=\"65\"/><line x1=\"900\" y1=\"0\" x2=\"900\" y2=\"65\"/>\n  </g>\n\n  <!-- ITEM 9 (SEGURO): Luminaria LED estanca empotrada -->\n  <g id=\"hosp-led\" transform=\"translate(90, 18)\">\n    <rect width=\"190\" height=\"28\" rx=\"4\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <rect x=\"6\" y=\"4\" width=\"178\" height=\"20\" rx=\"2\" fill=\"#ffffff\"/>\n    <polygon points=\"6,24 184,24 235,125 -45,125\" fill=\"#ffffff\" opacity=\"0.08\"/>\n  </g>\n  <rect x=\"620\" y=\"18\" width=\"150\" height=\"26\" rx=\"4\" fill=\"#ffffff\" opacity=\"0.9\"/>\n\n  <!-- ITEM 2 (SEGURO): Pasamanos continuo de pared -->\n  <rect x=\"0\" y=\"232\" width=\"1000\" height=\"16\" fill=\"#d97706\" rx=\"3\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <rect x=\"0\" y=\"234\" width=\"1000\" height=\"4\" fill=\"#fbbf24\"/>\n  <rect x=\"70\" y=\"248\" width=\"10\" height=\"18\" fill=\"url(#hospChrome)\"/>\n  <rect x=\"240\" y=\"248\" width=\"10\" height=\"18\" fill=\"url(#hospChrome)\"/>\n  <rect x=\"440\" y=\"248\" width=\"10\" height=\"18\" fill=\"url(#hospChrome)\"/>\n  <rect x=\"740\" y=\"248\" width=\"10\" height=\"18\" fill=\"url(#hospChrome)\"/>\n\n  <!-- ITEM 5 (SEGURO): Panel de cabecero de gases medicinales -->\n  <g transform=\"translate(385, 76)\">\n    <rect width=\"265\" height=\"44\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"40\" cy=\"22\" r=\"12\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"3\"/><text x=\"40\" y=\"25\" font-size=\"8\" font-weight=\"bold\" fill=\"#0284c7\" text-anchor=\"middle\">O2</text>\n    <circle cx=\"85\" cy=\"22\" r=\"12\" fill=\"#ffffff\" stroke=\"#eab308\" stroke-width=\"3\"/><text x=\"85\" y=\"25\" font-size=\"7\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">VAC</text>\n    <circle cx=\"130\" cy=\"22\" r=\"12\" fill=\"#ffffff\" stroke=\"#10b981\" stroke-width=\"3\"/><text x=\"130\" y=\"25\" font-size=\"7\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">AIRE</text>\n    <rect x=\"170\" y=\"13\" width=\"22\" height=\"18\" rx=\"2\" fill=\"#22c55e\"/><rect x=\"200\" y=\"13\" width=\"22\" height=\"18\" rx=\"2\" fill=\"#22c55e\"/><rect x=\"232\" y=\"15\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- Suelo vinílico conductivo continuo -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#hospFloorGrad)\"/>\n  <rect x=\"0\" y=\"334\" width=\"1000\" height=\"10\" fill=\"#0f766e\"/>\n  <g stroke=\"#ffffff\" stroke-width=\"1.5\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"410\" x2=\"1000\" y2=\"410\"/><line x1=\"0\" y1=\"495\" x2=\"1000\" y2=\"495\"/>\n    <line x1=\"200\" y1=\"340\" x2=\"50\" y2=\"600\"/><line x1=\"480\" y1=\"340\" x2=\"380\" y2=\"600\"/><line x1=\"750\" y1=\"340\" x2=\"720\" y2=\"600\"/>\n  </g>\n  <!-- Brillo suelo conductivo derecha (ITEM 11) -->\n  <ellipse cx=\"860\" cy=\"545\" rx=\"90\" ry=\"18\" fill=\"#ffffff\" opacity=\"0.28\"/>\n\n  <!-- ITEM 10 (SEGURO): Enchufes schuko grado médico verdes en pared derecha -->\n  <g transform=\"translate(895, 250)\">\n    <rect width=\"74\" height=\"36\" rx=\"4\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"2\"/>\n    <circle cx=\"22\" cy=\"18\" r=\"10\" fill=\"#ecfdf5\" stroke=\"#15803d\" stroke-width=\"1.5\"/>\n    <circle cx=\"18\" cy=\"18\" r=\"2\" fill=\"#0f172a\"/><circle cx=\"26\" cy=\"18\" r=\"2\" fill=\"#0f172a\"/>\n    <circle cx=\"52\" cy=\"18\" r=\"10\" fill=\"#ecfdf5\" stroke=\"#15803d\" stroke-width=\"1.5\"/>\n    <circle cx=\"48\" cy=\"18\" r=\"2\" fill=\"#0f172a\"/><circle cx=\"56\" cy=\"18\" r=\"2\" fill=\"#0f172a\"/>\n    <path d=\"M52 28 Q56 75 45 110\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Aguja hipodérmica usada en batea sobre mesa mayo -->\n  <g id=\"danger-aguja\" transform=\"translate(75, 345)\">\n    <rect x=\"65\" y=\"100\" width=\"12\" height=\"100\" fill=\"url(#hospChrome)\"/>\n    <rect x=\"25\" y=\"195\" width=\"95\" height=\"10\" rx=\"3\" fill=\"#475569\"/>\n    <circle cx=\"35\" cy=\"206\" r=\"6\" fill=\"#0f172a\"/><circle cx=\"110\" cy=\"206\" r=\"6\" fill=\"#0f172a\"/>\n    <rect x=\"0\" y=\"85\" width=\"155\" height=\"18\" rx=\"4\" fill=\"url(#hospChrome)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <path d=\"M18 86 C40 80, 95 80, 118 86 C112 98, 28 98, 18 86 Z\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <g transform=\"translate(36, 76) rotate(-8)\">\n      <rect x=\"18\" y=\"0\" width=\"58\" height=\"13\" rx=\"2\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.5\" opacity=\"0.92\"/>\n      <rect x=\"20\" y=\"2.5\" width=\"24\" height=\"8\" rx=\"1\" fill=\"#dc2626\" opacity=\"0.88\"/>\n      <rect x=\"74\" y=\"3\" width=\"24\" height=\"7\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1\"/><rect x=\"96\" y=\"0\" width=\"4\" height=\"13\" fill=\"#64748b\"/>\n      <polygon points=\"18,2 10,4.5 10,8.5 18,11\" fill=\"#0284c7\"/>\n      <line x1=\"10\" y1=\"6.5\" x2=\"-24\" y2=\"6.5\" stroke=\"#64748b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"-25\" cy=\"7.5\" r=\"3\" fill=\"#ef4444\"/>\n    </g>\n    <circle cx=\"132\" cy=\"88\" r=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><circle cx=\"131\" cy=\"87\" r=\"4\" fill=\"#dc2626\" opacity=\"0.85\"/>\n  </g>\n\n  <!-- ITEM 1 (PELIGRO): Botella de Oxígeno sin cadena antivuelco -->\n  <g id=\"danger-oxigeno\" transform=\"translate(795, 130)\">\n    <rect x=\"-10\" y=\"175\" width=\"14\" height=\"24\" rx=\"2\" fill=\"#334155\" stroke=\"#0f172a\"/>\n    <path d=\"M2 190 Q-16 225 4 265 Q-12 295 2 325\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"5\" stroke-dasharray=\"8,4\" stroke-linecap=\"round\"/>\n    <g transform=\"rotate(6, 45, 390)\">\n      <rect x=\"15\" y=\"85\" width=\"64\" height=\"310\" rx=\"20\" fill=\"url(#hospO2Body)\" stroke=\"#94a3b8\" stroke-width=\"2.5\"/>\n      <path d=\"M15 125 Q15 60 47 60 Q79 60 79 125 Z\" fill=\"url(#hospO2Shoulder)\" stroke=\"#166534\" stroke-width=\"2\"/>\n      <rect x=\"42\" y=\"40\" width=\"12\" height=\"22\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n      <g transform=\"translate(34, 15)\">\n        <circle cx=\"14\" cy=\"14\" r=\"14\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"2\"/>\n        <line x1=\"14\" y1=\"14\" x2=\"20\" y2=\"8\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n        <circle cx=\"34\" cy=\"20\" r=\"10\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      </g>\n      <g transform=\"translate(50, 235) rotate(-90)\">\n        <text x=\"0\" y=\"4\" font-size=\"11\" font-weight=\"bold\" fill=\"#047857\" letter-spacing=\"3\">OXÍGENO MEDICINAL</text>\n      </g>\n      <polygon points=\"48,145 58,157 48,169 38,157\" fill=\"#eab308\" stroke=\"#ca8a04\"/>\n      <ellipse cx=\"47\" cy=\"392\" rx=\"32\" ry=\"8\" fill=\"#475569\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO) + ITEM 7 (SEGURO GOTERO IV) + ITEM 12 (PEDAL FRENO LEVANTADO) -->\n  <g id=\"danger-camilla\" transform=\"translate(485, 290)\">\n    <rect x=\"15\" y=\"105\" width=\"215\" height=\"12\" rx=\"4\" fill=\"url(#hospChrome)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"40\" y=\"117\" width=\"16\" height=\"55\" fill=\"url(#hospChrome)\"/><rect x=\"180\" y=\"117\" width=\"16\" height=\"55\" fill=\"url(#hospChrome)\"/>\n    <rect x=\"25\" y=\"167\" width=\"190\" height=\"10\" rx=\"3\" fill=\"#334155\"/>\n    <!-- Barandilla lateral bajada -->\n    <g transform=\"translate(25, 78)\">\n      <rect width=\"175\" height=\"6\" rx=\"2\" fill=\"url(#hospChrome)\"/>\n      <line x1=\"30\" y1=\"6\" x2=\"30\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"3\"/><line x1=\"80\" y1=\"6\" x2=\"80\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"3\"/><line x1=\"130\" y1=\"6\" x2=\"130\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n    </g>\n    <rect x=\"10\" y=\"50\" width=\"225\" height=\"28\" rx=\"6\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"190\" y=\"45\" width=\"40\" height=\"16\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <!-- ITEM 7 (SEGURO): Soporte de gotero IV -->\n    <g transform=\"translate(215, -100)\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"160\" stroke=\"url(#hospChrome)\" stroke-width=\"5\"/>\n      <line x1=\"-18\" y1=\"0\" x2=\"18\" y2=\"0\" stroke=\"#64748b\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <rect x=\"-20\" y=\"8\" width=\"22\" height=\"36\" rx=\"5\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <rect x=\"-16\" y=\"16\" width=\"14\" height=\"16\" fill=\"#38bdf8\" opacity=\"0.5\"/>\n      <line x1=\"-9\" y1=\"44\" x2=\"-9\" y2=\"135\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>\n    <!-- ITEM 12 (PELIGRO): Pedal rojo de freno levantado (no trabado) -->\n    <g transform=\"translate(38, 174)\">\n      <circle cx=\"12\" cy=\"16\" r=\"14\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/><circle cx=\"12\" cy=\"16\" r=\"5\" fill=\"url(#hospChrome)\"/>\n      <rect x=\"18\" y=\"-2\" width=\"18\" height=\"6\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"1.5\" transform=\"rotate(-18, 18, 2)\"/>\n    </g>\n    <g transform=\"translate(182, 174)\">\n      <circle cx=\"12\" cy=\"16\" r=\"14\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/><circle cx=\"12\" cy=\"16\" r=\"5\" fill=\"url(#hospChrome)\"/>\n      <rect x=\"18\" y=\"-2\" width=\"18\" height=\"6\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"1.5\" transform=\"rotate(-18, 18, 2)\"/>\n    </g>\n    <path d=\"M-15 120 L-35 120 M-25 113 L-35 120 L-25 127\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <!-- ITEM 6 (PELIGRO): Bolsa de residuos biosanitarios rota -->\n  <g id=\"danger-residuos\" transform=\"translate(340, 445)\">\n    <path d=\"M18 60 C48 45, 108 40, 158 55 C195 68, 185 105, 138 115 C78 125, 28 110, 10 85 Z\" fill=\"#991b1b\" opacity=\"0.8\"/>\n    <g transform=\"translate(45, 15)\">\n      <path d=\"M25 55 C10 40, 20 15, 45 10 C65 6, 85 10, 100 25 C115 42, 125 70, 95 80 C60 90, 35 85, 25 55 Z\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <g transform=\"translate(56, 36) scale(0.75)\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n        <circle cx=\"8\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\"/><circle cx=\"16\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\"/>\n        <circle cx=\"12\" cy=\"16\" r=\"6\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"#000000\"/>\n      </g>\n    </g>\n  </g>\n\n  <!-- ITEM 8 (PELIGRO): Celador en sobreesfuerzo lumbar -->\n  <g id=\"danger-ergonomia\" transform=\"translate(275, 205)\">\n    <rect x=\"52\" y=\"155\" width=\"16\" height=\"115\" rx=\"5\" fill=\"#0f766e\" stroke=\"#115e59\" stroke-width=\"2\"/>\n    <rect x=\"75\" y=\"155\" width=\"16\" height=\"115\" rx=\"5\" fill=\"#0d9488\" stroke=\"#115e59\" stroke-width=\"2\"/>\n    <ellipse cx=\"56\" cy=\"270\" rx=\"14\" ry=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <ellipse cx=\"82\" cy=\"270\" rx=\"14\" ry=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <g transform=\"translate(30, 72) rotate(-35)\">\n      <rect x=\"0\" y=\"0\" width=\"75\" height=\"42\" rx=\"10\" fill=\"#14b8a6\" stroke=\"#0f766e\" stroke-width=\"2.5\"/>\n      <path d=\"M15 28 L-15 75 L-30 65\" fill=\"none\" stroke=\"#14b8a6\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n      <circle cx=\"-32\" cy=\"64\" r=\"8\" fill=\"#38bdf8\"/>\n      <path d=\"M-8 -5 L-18 -15 M-2 -8 L-5 -22 M5 -4 L10 -16\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <circle cx=\"-4\" cy=\"-5\" r=\"4\" fill=\"#ef4444\"/>\n    </g>\n    <g transform=\"translate(10, 92)\">\n      <circle cx=\"15\" cy=\"15\" r=\"18\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <path d=\"M0 12 C0 -4, 30 -4, 32 12 Z\" fill=\"#78350f\"/>\n      <rect x=\"2\" y=\"16\" width=\"18\" height=\"15\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n    </g>\n  </g>\n</svg>",
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
          "top": 61,
          "width": 13,
          "height": 14
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
          "top": 55,
          "width": 10,
          "height": 15
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
          "top": 42,
          "width": 15,
          "height": 17
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
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"ofiWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"60%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"ofiFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"30%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"ofiWoodDesk\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"40%\" stop-color=\"#b45309\"/>\n      <stop offset=\"80%\" stop-color=\"#d97706\"/>\n      <stop offset=\"100%\" stop-color=\"#92400e\"/>\n    </linearGradient>\n    <linearGradient id=\"ofiCoffeeGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#451a03\"/>\n      <stop offset=\"50%\" stop-color=\"#78350f\"/>\n      <stop offset=\"100%\" stop-color=\"#270e02\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Pared y suelo moqueta técnica (ITEM 9) -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#ofiWall)\"/>\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#ofiFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <g stroke=\"#1e293b\" stroke-width=\"1.5\" opacity=\"0.65\">\n    <line x1=\"0\" y1=\"410\" x2=\"1000\" y2=\"410\"/><line x1=\"0\" y1=\"490\" x2=\"1000\" y2=\"490\"/>\n    <line x1=\"180\" y1=\"340\" x2=\"50\" y2=\"600\"/><line x1=\"420\" y1=\"340\" x2=\"320\" y2=\"600\"/><line x1=\"680\" y1=\"340\" x2=\"680\" y2=\"600\"/><line x1=\"880\" y1=\"340\" x2=\"940\" y2=\"600\"/>\n  </g>\n\n  <!-- ITEM 7 (SEGURO): Ventanal exterior con persiana veneciana -->\n  <g transform=\"translate(360, 28)\">\n    <rect width=\"300\" height=\"175\" rx=\"4\" fill=\"#38bdf8\" opacity=\"0.22\"/>\n    <rect width=\"300\" height=\"175\" rx=\"4\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"6\"/>\n    <rect x=\"25\" y=\"55\" width=\"45\" height=\"120\" fill=\"#0f172a\" opacity=\"0.45\"/>\n    <rect x=\"85\" y=\"35\" width=\"55\" height=\"140\" fill=\"#0f172a\" opacity=\"0.55\"/>\n    <rect x=\"180\" y=\"50\" width=\"60\" height=\"125\" fill=\"#0f172a\" opacity=\"0.45\"/>\n    <!-- Lamas de persiana veneciana -->\n    <g stroke=\"#cbd5e1\" stroke-width=\"3\" opacity=\"0.85\">\n      <line x1=\"6\" y1=\"14\" x2=\"294\" y2=\"14\"/><line x1=\"6\" y1=\"24\" x2=\"294\" y2=\"24\"/>\n      <line x1=\"6\" y1=\"34\" x2=\"294\" y2=\"34\"/><line x1=\"6\" y1=\"44\" x2=\"294\" y2=\"44\"/>\n      <line x1=\"6\" y1=\"54\" x2=\"294\" y2=\"54\"/>\n    </g>\n    <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"175\" stroke=\"#64748b\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"#64748b\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- ITEM 2 (PELIGRO): Archivador venciendo con cajones abiertos -->\n  <g id=\"danger-archivador\" transform=\"translate(230, 145) rotate(8, 50, 160)\">\n    <rect width=\"90\" height=\"185\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"3\"/>\n    <g transform=\"translate(-32, 12)\">\n      <rect width=\"118\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"40\" y=\"14\" width=\"34\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n      <path d=\"M10 8 L30 2 L55 8 Z\" fill=\"#f59e0b\"/>\n    </g>\n    <g transform=\"translate(-26, 56)\"><rect width=\"112\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/></g>\n    <g transform=\"translate(-18, 100)\"><rect width=\"104\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/></g>\n    <g transform=\"translate(4, 144)\"><rect width=\"82\" height=\"34\" rx=\"2\" fill=\"#475569\"/></g>\n  </g>\n\n  <!-- ITEM 5 (SEGURO): Puesto informático ergonómico con monitor curvo -->\n  <g transform=\"translate(65, 310)\">\n    <rect x=\"0\" y=\"40\" width=\"250\" height=\"18\" rx=\"4\" fill=\"url(#ofiWoodDesk)\"/>\n    <rect x=\"15\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/><rect x=\"225\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/>\n    <path d=\"M68 -48 Q125 -40 182 -48 L182 18 Q125 24 68 18 Z\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n    <path d=\"M73 -43 Q125 -36 177 -43 L177 13 Q125 19 73 13 Z\" fill=\"#0284c7\"/>\n    <rect x=\"119\" y=\"18\" width=\"12\" height=\"22\" fill=\"#475569\"/>\n    <ellipse cx=\"125\" cy=\"40\" rx=\"22\" ry=\"4\" fill=\"#334155\"/>\n    <rect x=\"85\" y=\"44\" width=\"60\" height=\"8\" rx=\"2\" fill=\"#1e293b\"/><ellipse cx=\"160\" cy=\"48\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n  </g>\n\n  <!-- ITEM 8 (SEGURO): Papelera metálica de oficina bajo extremo izquierdo mesa -->\n  <g transform=\"translate(32, 430)\">\n    <polygon points=\"4,0 44,0 38,58 10,58\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"12\" y1=\"10\" x2=\"15\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"24\" y1=\"10\" x2=\"24\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"36\" y1=\"10\" x2=\"33\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <circle cx=\"24\" cy=\"-2\" r=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Taza de café derramada en regleta -->\n  <g id=\"danger-cafe\" transform=\"translate(105, 368)\">\n    <g transform=\"translate(26, 48)\">\n      <rect width=\"84\" height=\"24\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"16\" cy=\"12\" r=\"5\" fill=\"#cbd5e1\"/><circle cx=\"36\" cy=\"12\" r=\"5\" fill=\"#cbd5e1\"/><circle cx=\"56\" cy=\"12\" r=\"5\" fill=\"#cbd5e1\"/>\n      <circle cx=\"5\" cy=\"12\" r=\"2.5\" fill=\"#ef4444\"/>\n    </g>\n    <g transform=\"translate(0, 34) rotate(65)\">\n      <rect width=\"22\" height=\"28\" rx=\"4\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <path d=\"M22 6 Q32 14 22 22\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n    </g>\n    <path d=\"M20 56 Q45 48 68 56 Q95 50 112 63 Q95 75 68 72 Q32 75 20 56 Z\" fill=\"url(#ofiCoffeeGrad)\" opacity=\"0.95\"/>\n    <path d=\"M72 42 L76 34 L82 40 L88 28 L84 44 Z\" fill=\"#facc15\" stroke=\"#eab308\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- ITEM 12 (PELIGRO): Regleta eléctrica sobrecargada en suelo derecha mesa 1 -->\n  <g transform=\"translate(230, 480)\">\n    <rect width=\"74\" height=\"22\" rx=\"4\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"8\" y=\"-12\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#0f172a\"/>\n    <rect x=\"24\" y=\"-16\" width=\"16\" height=\"18\" rx=\"2\" fill=\"#f59e0b\" stroke=\"#b45309\"/>\n    <rect x=\"44\" y=\"-12\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#ef4444\"/>\n    <circle cx=\"66\" cy=\"11\" r=\"4\" fill=\"#ef4444\"/>\n    <path d=\"M32 -18 L28 -28 L36 -24 L42 -34\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2.5\"/>\n  </g>\n\n  <!-- ITEM 1 (PELIGRO): Cables sueltos cruzando pasillo -->\n  <g id=\"danger-cables\">\n    <path d=\"M345 485 C 405 455, 445 555, 505 480 S 585 545, 650 485\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <path d=\"M345 510 C 385 535, 435 445, 495 535 S 565 465, 650 520\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <path d=\"M355 475 C 415 545, 475 465, 535 545 S 595 475, 645 535\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"495\" cy=\"495\" rx=\"16\" ry=\"22\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\" transform=\"rotate(-25, 495, 495)\"/>\n  </g>\n\n  <!-- ITEM 10 (PELIGRO PORTÁTIL BAJO) + ITEM 6 (SILLA ROTA) -->\n  <g id=\"danger-ergonomia\">\n    <g transform=\"translate(565, 310)\">\n      <rect x=\"0\" y=\"40\" width=\"185\" height=\"18\" rx=\"4\" fill=\"url(#ofiWoodDesk)\"/>\n      <rect x=\"15\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/><rect x=\"158\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/>\n      <!-- Portátil plano muy bajo sobre mesa -->\n      <rect x=\"28\" y=\"34\" width=\"66\" height=\"6\" rx=\"1\" fill=\"#475569\"/>\n      <polygon points=\"32,34 88,34 78,2 22,2\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <polygon points=\"35,31 84,31 76,6 27,6\" fill=\"#38bdf8\"/>\n    </g>\n    <!-- Silla rota inclinada y rueda desprendida -->\n    <g transform=\"translate(655, 305)\">\n      <rect x=\"5\" y=\"-28\" width=\"42\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"2.5\" transform=\"rotate(24, 25, 20)\"/>\n      <ellipse cx=\"25\" cy=\"40\" rx=\"28\" ry=\"12\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <rect x=\"22\" y=\"52\" width=\"6\" height=\"35\" fill=\"#475569\"/>\n      <circle cx=\"5\" cy=\"90\" r=\"4.5\" fill=\"#0f172a\"/><circle cx=\"45\" cy=\"90\" r=\"4.5\" fill=\"#0f172a\"/><circle cx=\"64\" cy=\"92\" r=\"5.5\" fill=\"#ef4444\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Extintor bloqueado por cajas (derecha) -->\n  <g id=\"danger-extintor\">\n    <g transform=\"translate(808, 155)\">\n      <rect x=\"-8\" y=\"-38\" width=\"65\" height=\"26\" rx=\"3\" fill=\"#dc2626\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"24\" y=\"-21\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">EXTINTOR</text>\n      <rect x=\"5\" y=\"0\" width=\"42\" height=\"100\" rx=\"15\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2.5\"/>\n      <circle cx=\"26\" cy=\"-16\" r=\"6\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n      <path d=\"M34 -6 Q48 0 46 50 L42 75\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    </g>\n    <g transform=\"translate(772, 225)\">\n      <rect x=\"10\" y=\"0\" width=\"95\" height=\"52\" rx=\"3\" fill=\"#d97706\" stroke=\"#b45309\" stroke-width=\"2\"/>\n      <rect x=\"4\" y=\"50\" width=\"106\" height=\"58\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"-4\" y=\"106\" width=\"116\" height=\"62\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"-10\" y=\"166\" width=\"128\" height=\"68\" rx=\"3\" fill=\"#92400e\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 11 (SEGURO): Planta natural decorativa (extremo derecho suelo) -->\n  <g transform=\"translate(918, 340)\">\n    <polygon points=\"8,75 46,75 40,125 14,125\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    <rect x=\"5\" y=\"68\" width=\"44\" height=\"10\" rx=\"2\" fill=\"#d97706\"/>\n    <path d=\"M27 70 Q10 35 4 20 Q20 30 27 55\" fill=\"#16a34a\" stroke=\"#15803d\" stroke-width=\"1.5\"/>\n    <path d=\"M27 70 Q44 35 52 18 Q36 28 27 55\" fill=\"#22c55e\" stroke=\"#15803d\" stroke-width=\"1.5\"/>\n    <path d=\"M27 65 Q27 25 27 2 Q34 25 27 60\" fill=\"#15803d\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"14\" cy=\"45\" rx=\"12\" ry=\"6\" fill=\"#22c55e\" transform=\"rotate(-25, 14, 45)\"/>\n    <ellipse cx=\"40\" cy=\"45\" rx=\"12\" ry=\"6\" fill=\"#16a34a\" transform=\"rotate(25, 40, 45)\"/>\n  </g>\n</svg>",
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
          "top": 61,
          "width": 13,
          "height": 14
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
          "top": 55,
          "width": 10,
          "height": 15
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
          "top": 42,
          "width": 15,
          "height": 17
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
          "top": 47,
          "width": 8,
          "height": 12
        },
        "badgeAlign": "tl",
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
          "top": 33,
          "width": 7,
          "height": 11
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
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"obraSky\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\"/>\n      <stop offset=\"60%\" stop-color=\"#bae6fd\"/>\n      <stop offset=\"100%\" stop-color=\"#f0f9ff\"/>\n    </linearGradient>\n    <linearGradient id=\"obraGround\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"40%\" stop-color=\"#92400e\"/>\n      <stop offset=\"100%\" stop-color=\"#451a03\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"380\" fill=\"url(#obraSky)\"/>\n\n  <!-- ITEM 9 (SEGURO): Estructura de forjado y pilares de hormigón fraguados -->\n  <g fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\">\n    <rect x=\"0\" y=\"140\" width=\"600\" height=\"24\"/>\n    <rect x=\"60\" y=\"164\" width=\"35\" height=\"216\"/>\n    <rect x=\"260\" y=\"164\" width=\"38\" height=\"216\"/>\n    <rect x=\"460\" y=\"164\" width=\"35\" height=\"216\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO TOP-RIGHT) + ITEM 2 (PELIGRO CUBILOTE SUSPENDIDO) -->\n  <g transform=\"translate(680, 20)\">\n    <!-- Torre grúa arriostrada -->\n    <rect x=\"40\" y=\"60\" width=\"22\" height=\"340\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <line x1=\"40\" y1=\"100\" x2=\"62\" y2=\"140\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <line x1=\"40\" y1=\"180\" x2=\"62\" y2=\"220\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <line x1=\"-180\" y1=\"200\" x2=\"40\" y2=\"200\" stroke=\"#475569\" stroke-width=\"6\"/> <!-- Arriostramiento a edificio -->\n    <rect x=\"-350\" y=\"60\" width=\"450\" height=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"-200\" y=\"74\" width=\"24\" height=\"14\" fill=\"#0f172a\"/>\n    <line x1=\"-188\" y1=\"88\" x2=\"-188\" y2=\"195\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n    <polygon points=\"-212,195 -164,195 -174,238 -202,238\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- ITEM 12 (SEGURO): Señalización obligatoria de casco en poste derecha -->\n  <g transform=\"translate(895, 105)\">\n    <rect x=\"28\" y=\"65\" width=\"8\" height=\"180\" fill=\"#64748b\"/>\n    <rect x=\"0\" y=\"0\" width=\"64\" height=\"68\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <circle cx=\"32\" cy=\"28\" r=\"21\" fill=\"#0284c7\"/>\n    <path d=\"M18 32 Q32 14 46 32 Z\" fill=\"#ffffff\"/>\n    <rect x=\"16\" y=\"31\" width=\"32\" height=\"4\" rx=\"2\" fill=\"#ffffff\"/>\n    <text x=\"32\" y=\"60\" font-size=\"7\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">USO CASCO</text>\n  </g>\n\n  <rect x=\"0\" y=\"380\" width=\"1000\" height=\"220\" fill=\"url(#obraGround)\"/>\n\n  <!-- ITEM 3 (PELIGRO): Andamio a 4m sin barandillas -->\n  <g id=\"danger-andamio\" transform=\"translate(55, 130)\">\n    <line x1=\"20\" y1=\"0\" x2=\"20\" y2=\"250\" stroke=\"#facc15\" stroke-width=\"8\"/><line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"250\" stroke=\"#facc15\" stroke-width=\"8\"/>\n    <rect x=\"10\" y=\"80\" width=\"200\" height=\"16\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n    <line x1=\"20\" y1=\"80\" x2=\"200\" y2=\"250\" stroke=\"#ca8a04\" stroke-width=\"4\"/><line x1=\"200\" y1=\"80\" x2=\"20\" y2=\"250\" stroke=\"#ca8a04\" stroke-width=\"4\"/>\n    <g transform=\"translate(120, 12)\">\n      <circle cx=\"15\" cy=\"15\" r=\"12\" fill=\"#fed7aa\"/><rect x=\"5\" y=\"27\" width=\"20\" height=\"40\" fill=\"#f97316\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 11 (PELIGRO): Redondos de acero corrugado salientes sin setas en zapata -->\n  <g transform=\"translate(45, 420)\">\n    <rect x=\"0\" y=\"55\" width=\"120\" height=\"35\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"18\" y1=\"55\" x2=\"18\" y2=\"-10\" stroke=\"#78350f\" stroke-width=\"5\"/>\n    <line x1=\"42\" y1=\"55\" x2=\"42\" y2=\"-16\" stroke=\"#92400e\" stroke-width=\"5\"/>\n    <line x1=\"68\" y1=\"55\" x2=\"68\" y2=\"-8\" stroke=\"#78350f\" stroke-width=\"5\"/>\n    <line x1=\"95\" y1=\"55\" x2=\"95\" y2=\"-14\" stroke=\"#92400e\" stroke-width=\"5\"/>\n    <circle cx=\"18\" cy=\"-10\" r=\"3\" fill=\"#ef4444\"/><circle cx=\"42\" cy=\"-16\" r=\"3\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- ITEM 6 (PELIGRO): Escalera apoyada sobre bidones inestables -->\n  <g id=\"danger-escalera\" transform=\"translate(310, 220)\">\n    <rect x=\"10\" y=\"105\" width=\"65\" height=\"75\" rx=\"5\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <ellipse cx=\"42.5\" cy=\"105\" rx=\"32.5\" ry=\"8\" fill=\"#38bdf8\"/>\n    <g transform=\"rotate(18, 42, 105)\">\n      <line x1=\"20\" y1=\"-65\" x2=\"20\" y2=\"120\" stroke=\"#e2e8f0\" stroke-width=\"5\"/><line x1=\"50\" y1=\"-65\" x2=\"50\" y2=\"120\" stroke=\"#e2e8f0\" stroke-width=\"5\"/>\n      <line x1=\"20\" y1=\"-45\" x2=\"50\" y2=\"-45\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"20\" y1=\"-10\" x2=\"50\" y2=\"-10\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"20\" y1=\"25\" x2=\"50\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"20\" y1=\"60\" x2=\"50\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 1 (PEÓN SIN CASCO) + ITEM 7 (CHALECO REFLECTANTE) + ITEM 8 (BOTAS S3) -->\n  <g id=\"danger-sin-casco\" transform=\"translate(460, 290)\">\n    <rect x=\"18\" y=\"110\" width=\"14\" height=\"95\" fill=\"#1e3a8a\"/><rect x=\"36\" y=\"110\" width=\"14\" height=\"95\" fill=\"#1e40af\"/>\n    <!-- Botas seguridad S3 (ITEM 8) -->\n    <rect x=\"12\" y=\"195\" width=\"22\" height=\"14\" rx=\"4\" fill=\"#451a03\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <rect x=\"12\" y=\"198\" width=\"8\" height=\"10\" rx=\"2\" fill=\"#94a3b8\"/> <!-- Puntera acero -->\n    <rect x=\"34\" y=\"195\" width=\"22\" height=\"14\" rx=\"4\" fill=\"#451a03\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <rect x=\"48\" y=\"198\" width=\"8\" height=\"10\" rx=\"2\" fill=\"#94a3b8\"/>\n    <!-- Chaleco reflectante (ITEM 7) -->\n    <rect x=\"12\" y=\"45\" width=\"44\" height=\"68\" rx=\"6\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"12\" y=\"65\" width=\"44\" height=\"10\" fill=\"#ffffff\" opacity=\"0.9\"/>\n    <rect x=\"12\" y=\"84\" width=\"44\" height=\"8\" fill=\"#ffffff\" opacity=\"0.9\"/>\n    <!-- Teléfono distraído, SIN casco -->\n    <path d=\"M12 55 L-4 35 L4 28\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <rect x=\"-6\" y=\"24\" width=\"8\" height=\"15\" rx=\"2\" fill=\"#0f172a\"/>\n    <circle cx=\"34\" cy=\"22\" r=\"16\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n    <path d=\"M20 18 Q34 6 48 18\" fill=\"#451a03\"/>\n  </g>\n\n  <!-- ITEM 5 (PELIGRO): Cuadro eléctrico en charco de lluvia -->\n  <g id=\"danger-cuadro\" transform=\"translate(775, 200)\">\n    <rect width=\"88\" height=\"108\" rx=\"4\" fill=\"#ea580c\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n    <rect x=\"8\" y=\"10\" width=\"72\" height=\"88\" fill=\"#0f172a\"/><rect x=\"18\" y=\"24\" width=\"52\" height=\"20\" fill=\"#ffffff\"/>\n    <path d=\"M44 50 L37 66 L47 66 L39 83\" stroke=\"#facc15\" stroke-width=\"3\" fill=\"none\"/>\n    <path d=\"M35 108 Q20 148 40 176\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\"/><path d=\"M55 108 Q70 138 50 176\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"4\"/>\n    <ellipse cx=\"48\" cy=\"176\" rx=\"44\" ry=\"15\" fill=\"#38bdf8\" opacity=\"0.7\"/>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Zanja de excavación sin entibar -->\n  <g id=\"danger-zanja\" transform=\"translate(680, 395)\">\n    <polygon points=\"0,15 300,15 280,190 30,190\" fill=\"#291307\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n    <path d=\"M-10 13 Q40 20 80 13 Q140 23 200 13\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n    <circle cx=\"90\" cy=\"75\" r=\"12\" fill=\"#451a03\"/><circle cx=\"150\" cy=\"115\" r=\"18\" fill=\"#451a03\"/>\n  </g>\n</svg>",
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
          "top": 47,
          "width": 8,
          "height": 12
        },
        "badgeAlign": "tl",
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
          "top": 33,
          "width": 7,
          "height": 11
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
          "width": 22,
          "height": 28
        },
        "badgeAlign": "tr",
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
          "left": 4,
          "top": 23,
          "width": 8,
          "height": 7
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
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"almWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f172a\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"almFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"35%\" stop-color=\"#475569\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"almForkliftYellow\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#facc15\"/><stop offset=\"50%\" stop-color=\"#eab308\"/><stop offset=\"100%\" stop-color=\"#ca8a04\"/>\n    </linearGradient>\n    <linearGradient id=\"almOilSpill\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#09090b\"/><stop offset=\"45%\" stop-color=\"#18181b\"/><stop offset=\"70%\" stop-color=\"#27272a\"/><stop offset=\"100%\" stop-color=\"#09090b\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#almWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"2\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"60\" x2=\"1000\" y2=\"60\"/><line x1=\"0\" y1=\"120\" x2=\"1000\" y2=\"120\"/>\n    <line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"340\"/><line x1=\"500\" y1=\"0\" x2=\"500\" y2=\"340\"/><line x1=\"800\" y1=\"0\" x2=\"800\" y2=\"340\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Campanas LED de alumbrado industrial suspendidas en techo -->\n  <g transform=\"translate(500, 0)\">\n    <line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n    <polygon points=\"8,62 52,62 42,40 18,40\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <ellipse cx=\"30\" cy=\"64\" rx=\"18\" ry=\"4\" fill=\"#fef08a\"/>\n    <polygon points=\"8,66 52,66 110,220 -50,220\" fill=\"#fef08a\" opacity=\"0.06\"/>\n  </g>\n\n  <!-- Suelo hormigón y ITEM 6 (Línea amarilla pasillo peatonal) -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#almFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <line x1=\"0\" y1=\"535\" x2=\"1000\" y2=\"535\" stroke=\"#eab308\" stroke-width=\"9\" stroke-dasharray=\"28,14\"/>\n\n  <!-- ITEM 7 (SEGURO): Bastidores Mecalux azules con placas de anclaje al suelo -->\n  <g stroke=\"#0284c7\" stroke-width=\"9\">\n    <line x1=\"185\" y1=\"65\" x2=\"185\" y2=\"380\"/><line x1=\"385\" y1=\"65\" x2=\"385\" y2=\"380\"/>\n  </g>\n  <rect x=\"172\" y=\"376\" width=\"26\" height=\"8\" fill=\"#94a3b8\"/><rect x=\"372\" y=\"376\" width=\"26\" height=\"8\" fill=\"#94a3b8\"/>\n  <rect x=\"180\" y=\"110\" width=\"210\" height=\"12\" fill=\"#ea580c\"/>\n  <rect x=\"180\" y=\"210\" width=\"210\" height=\"12\" fill=\"#ea580c\"/>\n  <rect x=\"180\" y=\"310\" width=\"210\" height=\"12\" fill=\"#ea580c\"/>\n\n  <!-- ITEM 1 (PELIGRO): Palet deformado y ladeado en altura -->\n  <g id=\"danger-palet\" transform=\"translate(185, 60)\">\n    <g transform=\"rotate(13, 100, 50)\">\n      <rect x=\"10\" y=\"38\" width=\"170\" height=\"14\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"20\" y=\"-10\" width=\"70\" height=\"50\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"95\" y=\"-15\" width=\"75\" height=\"55\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <path d=\"M15 -5 Q50 -25 165 -10\" fill=\"none\" stroke=\"#e0f2fe\" stroke-width=\"4\" opacity=\"0.75\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 2 (PELIGRO): Charco de aceite en pasillo de paso -->\n  <g id=\"danger-aceite\" transform=\"translate(385, 420)\">\n    <path d=\"M10 48 C40 18, 140 15, 205 38 C265 62, 245 102, 180 112 C100 122, 25 102, 5 74 Z\" fill=\"url(#almOilSpill)\" stroke=\"#09090b\" stroke-width=\"2\"/>\n    <path d=\"M70 46 Q110 38 140 53\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" opacity=\"0.65\"/>\n    <path d=\"M90 68 Q130 63 160 78\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2\" opacity=\"0.55\"/>\n  </g>\n\n  <!-- ITEM 3 (CARRETILLA HORQUILLAS ALTAS + LLAVE) & ITEM 8 (JAULA ROPS/FOPS) -->\n  <g id=\"danger-carretilla\" transform=\"translate(645, 240)\">\n    <rect x=\"45\" y=\"110\" width=\"155\" height=\"88\" rx=\"15\" fill=\"url(#almForkliftYellow)\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n    <rect x=\"175\" y=\"80\" width=\"44\" height=\"118\" rx=\"6\" fill=\"#0f172a\"/>\n    <rect x=\"85\" y=\"25\" width=\"84\" height=\"90\" rx=\"4\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\"/> <!-- Jaula ROPS/FOPS -->\n    <circle cx=\"115\" cy=\"70\" r=\"14\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n    <circle cx=\"136\" cy=\"85\" r=\"4.5\" fill=\"#ef4444\"/><rect x=\"136\" y=\"85\" width=\"9\" height=\"3.5\" fill=\"#ef4444\"/> <!-- Llave puesta -->\n    <rect x=\"215\" y=\"-30\" width=\"14\" height=\"225\" fill=\"#334155\"/>\n    <rect x=\"225\" y=\"38\" width=\"98\" height=\"12\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"225\" y=\"50\" width=\"98\" height=\"12\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <circle cx=\"80\" cy=\"198\" r=\"25\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <circle cx=\"185\" cy=\"198\" r=\"23\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- ITEM 4 (PUERTA EMERGENCIA BLOQUEADA) + ITEM 9 (SEÑAL LUMINISCENTE VERDE SALIDA) -->\n  <g id=\"danger-salida\" transform=\"translate(22, 195)\">\n    <rect width=\"108\" height=\"185\" rx=\"4\" fill=\"#15803d\" stroke=\"#166534\" stroke-width=\"3\"/>\n    <rect x=\"15\" y=\"90\" width=\"78\" height=\"10\" rx=\"3\" fill=\"#e2e8f0\"/>\n    <!-- Señal luminiscente arriba -->\n    <rect x=\"18\" y=\"-42\" width=\"72\" height=\"26\" rx=\"3\" fill=\"#22c55e\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n    <text x=\"54\" y=\"-25\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">SALIDA ➔</text>\n    <g transform=\"translate(8, 72)\">\n      <rect x=\"0\" y=\"0\" width=\"92\" height=\"24\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"26\" width=\"92\" height=\"24\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"52\" width=\"92\" height=\"24\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"78\" width=\"92\" height=\"24\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 5 (OPERARIO ESPALDA) + ITEM 12 (CAJA 40 KG) + ITEM 11 (CALZADO SEGURIDAD) -->\n  <g id=\"danger-espalda\" transform=\"translate(495, 255)\">\n    <rect x=\"30\" y=\"108\" width=\"14\" height=\"82\" fill=\"#1e3a8a\"/>\n    <rect x=\"48\" y=\"108\" width=\"14\" height=\"82\" fill=\"#1e3a8a\"/>\n    <!-- Calzado seguridad S3 (ITEM 11) -->\n    <rect x=\"24\" y=\"186\" width=\"22\" height=\"12\" rx=\"4\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <rect x=\"46\" y=\"186\" width=\"22\" height=\"12\" rx=\"4\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <g transform=\"translate(10, 58) rotate(-40)\">\n      <rect width=\"60\" height=\"34\" rx=\"6\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <path d=\"M10 20 L-10 60 L10 60\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"10\"/>\n      <rect x=\"-35\" y=\"45\" width=\"65\" height=\"50\" rx=\"3\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/>\n      <text x=\"-2\" y=\"75\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde047\" text-anchor=\"middle\">40 kg</text>\n      <path d=\"M-8 -6 L-16 -16 M-2 -8 L-5 -20\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </g>\n    <circle cx=\"2\" cy=\"68\" r=\"14\" fill=\"#fed7aa\"/>\n  </g>\n</svg>",
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
          "width": 22,
          "height": 28
        },
        "badgeAlign": "tr",
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
          "top": 16,
          "width": 17,
          "height": 13
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
          "left": 72,
          "top": 63,
          "width": 9,
          "height": 12
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
          "top": 30,
          "width": 17,
          "height": 14
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
          "height": 12
        },
        "badgeAlign": "tl",
        "description": "Accionador rígido de apertura rápida en un solo movimiento hacia abajo.",
        "consequences": "Ninguna. Asegura caudal instantáneo de 60 l/min en caso de emergencia.",
        "regulation": "Cumple norma UNE-EN 15154-1.",
        "prevention": "Dispositivo de socorro reglamentario. Elemento seguro."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"labWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f172a\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"labFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#labWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"60\" x2=\"1000\" y2=\"60\"/><line x1=\"0\" y1=\"120\" x2=\"1000\" y2=\"120\"/><line x1=\"0\" y1=\"180\" x2=\"1000\" y2=\"180\"/><line x1=\"0\" y1=\"240\" x2=\"1000\" y2=\"240\"/>\n  </g>\n\n  <!-- Suelo epoxi continuo sin juntas (ITEM 10) -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#labFloor)\"/>\n  <rect x=\"0\" y=\"335\" width=\"1000\" height=\"10\" fill=\"#1e293b\"/> <!-- Zócalo media caña sanitaria -->\n\n  <!-- Encimera fenólica (ITEM 7) + Fregadero con grifo cisne (ITEM 8) -->\n  <g transform=\"translate(175, 315)\">\n    <rect x=\"0\" y=\"40\" width=\"560\" height=\"20\" rx=\"3\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <rect x=\"15\" y=\"60\" width=\"530\" height=\"130\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <!-- Fregadero con grifo de cuello de cisne (ITEM 8) a la derecha de la encimera -->\n    <g transform=\"translate(470, 5)\">\n      <path d=\"M22 35 L22 10 Q22 -8 40 -8 Q52 -8 52 8\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <rect x=\"0\" y=\"35\" width=\"66\" height=\"8\" rx=\"2\" fill=\"#64748b\"/>\n      <rect x=\"6\" y=\"43\" width=\"54\" height=\"28\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 1 (GUILLOTINA ABIERTA) + ITEM 11 (VAPORES TÓXICOS ESCAPANDO) -->\n  <g id=\"danger-campana\" transform=\"translate(215, 105)\">\n    <rect width=\"180\" height=\"230\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <rect x=\"15\" y=\"15\" width=\"150\" height=\"170\" fill=\"#0f172a\"/>\n    <rect x=\"15\" y=\"15\" width=\"150\" height=\"32\" fill=\"#38bdf8\" opacity=\"0.35\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <rect x=\"75\" y=\"130\" width=\"30\" height=\"42\" fill=\"#cbd5e1\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"90\" cy=\"130\" rx=\"15\" ry=\"4\" fill=\"#a855f7\" opacity=\"0.8\"/>\n    <path d=\"M90 125 Q70 90 85 55 Q100 10 135 -10 Q175 -15 205 20\" fill=\"none\" stroke=\"#c084fc\" stroke-width=\"6\" stroke-linecap=\"round\" opacity=\"0.9\"/>\n    <circle cx=\"150\" cy=\"30\" r=\"5\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- ITEM 2 (ARMARIO INCOMPATIBLES) + ITEM 9 (ETIQUETAS CLP EN FRASCOS) -->\n  <g id=\"danger-incompatibles\" transform=\"translate(765, 110)\">\n    <rect width=\"160\" height=\"240\" rx=\"4\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n    <line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"240\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"15\" y=\"52\" width=\"130\" height=\"6\" fill=\"#ca8a04\"/>\n    <rect x=\"15\" y=\"138\" width=\"130\" height=\"6\" fill=\"#ca8a04\"/>\n    <!-- Frascos con etiquetas CLP rombo rojo visibles -->\n    <g transform=\"translate(22, 16)\">\n      <rect width=\"26\" height=\"36\" rx=\"3\" fill=\"#dc2626\"/>\n      <rect x=\"4\" y=\"10\" width=\"18\" height=\"16\" fill=\"#ffffff\"/>\n      <polygon points=\"13,12 18,18 13,24 8,18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>\n    </g>\n    <g transform=\"translate(58, 16)\">\n      <rect width=\"26\" height=\"36\" rx=\"3\" fill=\"#eab308\" stroke=\"#854d0e\"/>\n      <rect x=\"4\" y=\"10\" width=\"18\" height=\"16\" fill=\"#ffffff\"/>\n      <polygon points=\"13,12 18,18 13,24 8,18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>\n    </g>\n    <g transform=\"translate(96, 16)\">\n      <rect width=\"26\" height=\"36\" rx=\"3\" fill=\"#dc2626\"/>\n      <rect x=\"4\" y=\"10\" width=\"18\" height=\"16\" fill=\"#ffffff\"/>\n      <polygon points=\"13,12 18,18 13,24 8,18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 3 (DUCHA BLOQUEADA POR CARRO) + ITEM 12 (TIRADOR TRIANGULAR DE EMERGENCIA) -->\n  <g id=\"danger-ducha\" transform=\"translate(28, 110)\">\n    <rect x=\"30\" y=\"0\" width=\"10\" height=\"150\" fill=\"#22c55e\"/>\n    <ellipse cx=\"35\" cy=\"15\" rx=\"25\" ry=\"10\" fill=\"#22c55e\" stroke=\"#15803d\" stroke-width=\"2\"/>\n    <!-- Tirador triangular rígido visible -->\n    <line x1=\"65\" y1=\"25\" x2=\"65\" y2=\"85\" stroke=\"#cbd5e1\" stroke-width=\"3\"/>\n    <polygon points=\"65,85 52,110 78,110\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"4\" stroke-linejoin=\"round\"/>\n    <!-- Carro metálico bloqueando debajo -->\n    <g transform=\"translate(0, 128)\">\n      <rect width=\"84\" height=\"86\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <circle cx=\"15\" cy=\"92\" r=\"8\" fill=\"#0f172a\"/><circle cx=\"68\" cy=\"92\" r=\"8\" fill=\"#0f172a\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (MATRAZ ROTO CON ÁCIDO EN ENCIMERA) -->\n  <g id=\"danger-derrame\" transform=\"translate(430, 315)\">\n    <path d=\"M10 38 Q40 25 80 35 Q130 30 150 45 Q120 58 70 55 Q20 58 10 38 Z\" fill=\"#22c55e\" opacity=\"0.88\"/>\n    <path d=\"M50 30 L65 10 L75 10 L90 30 Z\" fill=\"#e0f2fe\" stroke=\"#38bdf8\" stroke-width=\"1.5\" transform=\"rotate(45, 70, 25)\"/>\n    <circle cx=\"45\" cy=\"38\" r=\"3\" fill=\"#ffffff\"/>\n  </g>\n\n  <!-- ITEM 5 (PIPETEO BUCAL) + ITEM 6 (BATA BLANCA ALGODÓN) -->\n  <g id=\"danger-pipeteo\" transform=\"translate(555, 215)\">\n    <circle cx=\"35\" cy=\"25\" r=\"16\" fill=\"#fed7aa\"/>\n    <rect x=\"16\" y=\"45\" width=\"42\" height=\"88\" rx=\"4\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <line x1=\"37\" y1=\"45\" x2=\"37\" y2=\"133\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"42\" cy=\"65\" r=\"2\" fill=\"#475569\"/><circle cx=\"42\" cy=\"85\" r=\"2\" fill=\"#475569\"/>\n    <line x1=\"28\" y1=\"28\" x2=\"-4\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"3.5\"/>\n  </g>\n</svg>",
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
          "top": 16,
          "width": 17,
          "height": 13
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
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"cocWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/><stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n    <linearGradient id=\"cocFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#991b1b\"/><stop offset=\"50%\" stop-color=\"#b91c1c\"/><stop offset=\"100%\" stop-color=\"#7f1d1d\"/>\n    </linearGradient>\n    <linearGradient id=\"cocInox\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/><stop offset=\"30%\" stop-color=\"#f8fafc\"/><stop offset=\"70%\" stop-color=\"#cbd5e1\"/><stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"320\" fill=\"url(#cocWall)\"/>\n  <rect x=\"0\" y=\"320\" width=\"1000\" height=\"280\" fill=\"url(#cocFloor)\"/>\n  <g stroke=\"#450a0a\" stroke-width=\"2\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"400\" x2=\"1000\" y2=\"400\"/><line x1=\"0\" y1=\"490\" x2=\"1000\" y2=\"490\"/>\n    <line x1=\"200\" y1=\"320\" x2=\"80\" y2=\"600\"/><line x1=\"500\" y1=\"320\" x2=\"450\" y2=\"600\"/><line x1=\"800\" y1=\"320\" x2=\"820\" y2=\"600\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Campana extractora industrial con filtros goteando grasa -->\n  <g transform=\"translate(360, 35)\">\n    <polygon points=\"0,90 320,90 280,0 40,0\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <path d=\"M60 90 Q65 125 60 145\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M160 90 Q165 130 160 155\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M260 90 Q265 120 260 140\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Cocinero con uniforme de algodón ignífugo -->\n  <g transform=\"translate(555, 130)\">\n    <rect x=\"16\" y=\"42\" width=\"44\" height=\"65\" rx=\"6\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <circle cx=\"32\" cy=\"58\" r=\"2\" fill=\"#0f172a\"/><circle cx=\"32\" cy=\"72\" r=\"2\" fill=\"#0f172a\"/>\n    <circle cx=\"44\" cy=\"58\" r=\"2\" fill=\"#0f172a\"/><circle cx=\"44\" cy=\"72\" r=\"2\" fill=\"#0f172a\"/>\n    <circle cx=\"38\" cy=\"24\" r=\"14\" fill=\"#fed7aa\"/>\n    <rect x=\"24\" y=\"-8\" width=\"28\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- ITEM 7 (FOGONES GAS) + ITEM 11 (FREIDORA TERMOSTATO) -->\n  <g transform=\"translate(360, 230)\">\n    <rect width=\"320\" height=\"120\" rx=\"4\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <circle cx=\"65\" cy=\"24\" r=\"26\" fill=\"#1e293b\"/><circle cx=\"65\" cy=\"24\" r=\"13\" fill=\"#0284c7\" opacity=\"0.85\"/>\n    <circle cx=\"145\" cy=\"24\" r=\"26\" fill=\"#1e293b\"/><circle cx=\"145\" cy=\"24\" r=\"12\" fill=\"#0284c7\" opacity=\"0.85\"/>\n    <!-- Freidora derecha con termostato 210°C -->\n    <rect x=\"225\" y=\"10\" width=\"76\" height=\"48\" rx=\"3\" fill=\"#eab308\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <circle cx=\"263\" cy=\"82\" r=\"10\" fill=\"#0f172a\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n    <text x=\"263\" y=\"103\" font-size=\"8\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">MAX 210°C</text>\n  </g>\n\n  <!-- ITEM 6 (SEGURO MESA INOX) + ITEM 1 (CORTAFIAMBRES) + ITEM 12 (CUCHILLA DISCO SIN RESGUARDO) -->\n  <g transform=\"translate(80, 295)\">\n    <rect x=\"0\" y=\"38\" width=\"240\" height=\"16\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"12\" y=\"54\" width=\"12\" height=\"115\" fill=\"#94a3b8\"/><rect x=\"216\" y=\"54\" width=\"12\" height=\"115\" fill=\"#94a3b8\"/>\n    <g transform=\"translate(65, -35)\">\n      <rect x=\"10\" y=\"12\" width=\"90\" height=\"50\" rx=\"4\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <circle cx=\"105\" cy=\"30\" r=\"30\" fill=\"#f8fafc\" stroke=\"#dc2626\" stroke-width=\"3.5\"/>\n      <circle cx=\"105\" cy=\"30\" r=\"6\" fill=\"#475569\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 9 (SEGURO): Sumidero sifónico con rejilla inox en suelo -->\n  <g transform=\"translate(215, 495)\">\n    <rect width=\"68\" height=\"32\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <line x1=\"10\" y1=\"6\" x2=\"10\" y2=\"26\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <line x1=\"22\" y1=\"6\" x2=\"22\" y2=\"26\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <line x1=\"34\" y1=\"6\" x2=\"34\" y2=\"26\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <line x1=\"46\" y1=\"6\" x2=\"46\" y2=\"26\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <line x1=\"58\" y1=\"6\" x2=\"58\" y2=\"26\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n  </g>\n\n  <!-- ITEM 2 (PELIGRO): Charco de aceite y grasa en suelo frente a freidora -->\n  <g id=\"danger-grasa\" transform=\"translate(410, 425)\">\n    <path d=\"M20 48 C60 22, 180 18, 230 44 C270 68, 240 102, 180 112 C100 122, 20 96, 10 68 Z\" fill=\"#eab308\" opacity=\"0.8\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- ITEM 8 (GRIFO MUELLE COMPENSADOR) + ITEM 5 (TABLA POLLO/ENSALADA) + ITEM 4 (ENCHUFE 400V EN AGUA) -->\n  <g transform=\"translate(705, 225)\">\n    <rect x=\"0\" y=\"62\" width=\"230\" height=\"75\" fill=\"url(#cocInox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Grifo ducha con muelle compensador -->\n    <path d=\"M165 62 L165 -22 Q165 -42 135 -42 L120 -25\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <path d=\"M160 15 L170 20 L160 25 L170 30 L160 35\" fill=\"none\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <!-- Tabla de madera contaminada (ITEM 5) -->\n    <g transform=\"translate(12, 46)\">\n      <rect width=\"88\" height=\"14\" rx=\"2\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"1.5\"/>\n      <ellipse cx=\"26\" cy=\"2\" rx=\"12\" ry=\"6\" fill=\"#fda4af\" stroke=\"#e11d48\"/> <!-- Pollo crudo -->\n      <circle cx=\"64\" cy=\"2\" r=\"7\" fill=\"#22c55e\"/> <!-- Ensalada -->\n    </g>\n    <!-- Enchufe trifásico 400V caído en charco de baldeo (ITEM 4) -->\n    <g transform=\"translate(95, 165)\">\n      <rect width=\"75\" height=\"26\" rx=\"4\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <path d=\"M38 26 Q30 70 50 96\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n      <ellipse cx=\"52\" cy=\"100\" rx=\"42\" ry=\"15\" fill=\"#38bdf8\" opacity=\"0.72\"/>\n    </g>\n  </g>\n</svg>",
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
          "top": 72,
          "width": 13,
          "height": 10
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
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"talWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n    <linearGradient id=\"talFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/><stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Pared y suelo epoxi antideslizante (ITEM 10) -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#talWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"80\" x2=\"1000\" y2=\"80\"/><line x1=\"0\" y1=\"160\" x2=\"1000\" y2=\"160\"/>\n    <line x1=\"250\" y1=\"0\" x2=\"250\" y2=\"340\"/><line x1=\"750\" y1=\"0\" x2=\"750\" y2=\"340\"/>\n  </g>\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#talFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n\n  <!-- ITEM 8 (SEGURO): Enrollador automático de manguera neumática en techo derecha -->\n  <g transform=\"translate(835, 25)\">\n    <rect x=\"20\" y=\"0\" width=\"36\" height=\"12\" fill=\"#64748b\"/>\n    <circle cx=\"38\" cy=\"40\" r=\"28\" fill=\"#0284c7\" stroke=\"#e2e8f0\" stroke-width=\"3\"/>\n    <circle cx=\"38\" cy=\"40\" r=\"14\" fill=\"#facc15\"/>\n    <path d=\"M56 54 Q75 95 62 125\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- ITEM 5 (PELIGRO): Cuba de desengrase abierta sin extracción a la izquierda -->\n  <g id=\"danger-cuba\" transform=\"translate(28, 210)\">\n    <rect width=\"105\" height=\"90\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <ellipse cx=\"52\" cy=\"14\" rx=\"44\" ry=\"12\" fill=\"#0284c7\" opacity=\"0.88\"/>\n    <path d=\"M35 8 Q25 -18 42 -32 M65 8 Q78 -16 58 -30\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\" opacity=\"0.8\"/>\n    <rect x=\"14\" y=\"90\" width=\"10\" height=\"45\" fill=\"#334155\"/><rect x=\"82\" y=\"90\" width=\"10\" height=\"45\" fill=\"#334155\"/>\n  </g>\n\n  <!-- ITEM 9 (SEGURO): Carro de herramientas rojo con cajones bloqueables (izquierda primer plano) -->\n  <g transform=\"translate(26, 375)\">\n    <rect width=\"112\" height=\"120\" rx=\"4\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"2.5\"/>\n    <rect x=\"8\" y=\"10\" width=\"96\" height=\"16\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/>\n    <rect x=\"8\" y=\"32\" width=\"96\" height=\"16\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/>\n    <rect x=\"8\" y=\"54\" width=\"96\" height=\"22\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/>\n    <rect x=\"8\" y=\"82\" width=\"96\" height=\"28\" rx=\"2\" fill=\"#ef4444\" stroke=\"#991b1b\"/>\n    <circle cx=\"100\" cy=\"6\" r=\"3\" fill=\"#facc15\"/> <!-- Cerradura bloqueo -->\n    <circle cx=\"20\" cy=\"126\" r=\"10\" fill=\"#0f172a\"/><circle cx=\"92\" cy=\"126\" r=\"10\" fill=\"#0f172a\"/>\n  </g>\n\n  <!-- ITEM 7 (BANCO TRABAJO CON TORNILLO) + ITEM 2 (RADIAL SIN PROTECTOR) + ITEM 12 (DISCO FISURADO) -->\n  <g id=\"danger-radial\" transform=\"translate(175, 315)\">\n    <rect width=\"205\" height=\"18\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"12\" y=\"18\" width=\"14\" height=\"120\" fill=\"#475569\"/><rect x=\"180\" y=\"18\" width=\"14\" height=\"120\" fill=\"#475569\"/>\n    <!-- Tornillo de banco metálico (ITEM 7) -->\n    <g transform=\"translate(18, -28)\">\n      <rect x=\"0\" y=\"16\" width=\"38\" height=\"12\" fill=\"#0284c7\" stroke=\"#0369a1\"/>\n      <rect x=\"6\" y=\"0\" width=\"14\" height=\"18\" fill=\"#1e293b\"/>\n      <line x1=\"20\" y1=\"8\" x2=\"48\" y2=\"8\" stroke=\"#cbd5e1\" stroke-width=\"3\"/>\n    </g>\n    <!-- Amoladora sin protector + disco con fisura -->\n    <g transform=\"translate(75, -24)\">\n      <rect x=\"0\" y=\"6\" width=\"70\" height=\"22\" rx=\"4\" fill=\"#0284c7\"/>\n      <circle cx=\"88\" cy=\"16\" r=\"24\" fill=\"#334155\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n      <path d=\"M88 16 L104 2 L108 8\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <!-- Grieta en el borde del disco -->\n    </g>\n  </g>\n\n  <!-- ITEM 1 (COCHE ELEVADO SIN SEGURO) + ITEM 6 (COLUMNAS ANCLADAS) + ITEM 11 (BRAZO CON GOMA APOYO) -->\n  <g id=\"danger-elevador\" transform=\"translate(415, 110)\">\n    <!-- Columnas azules ancladas con pernos al suelo (ITEM 6) -->\n    <rect x=\"0\" y=\"0\" width=\"24\" height=\"340\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"-8\" y=\"336\" width=\"40\" height=\"10\" fill=\"#94a3b8\"/>\n    <rect x=\"260\" y=\"0\" width=\"24\" height=\"340\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"252\" y=\"336\" width=\"40\" height=\"10\" fill=\"#94a3b8\"/>\n    <!-- Coche rojo elevado -->\n    <g transform=\"translate(12, 36)\">\n      <path d=\"M20 70 Q50 30 110 25 Q180 20 230 70 Z\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <rect x=\"10\" y=\"70\" width=\"240\" height=\"35\" rx=\"6\" fill=\"#ef4444\"/>\n      <circle cx=\"50\" cy=\"105\" r=\"22\" fill=\"#0f172a\"/><circle cx=\"210\" cy=\"105\" r=\"22\" fill=\"#0f172a\"/>\n    </g>\n    <!-- Brazos amarillos y tacos de goma negra de apoyo (ITEM 11) -->\n    <line x1=\"20\" y1=\"165\" x2=\"260\" y2=\"165\" stroke=\"#facc15\" stroke-width=\"10\"/>\n    <rect x=\"42\" y=\"148\" width=\"24\" height=\"12\" rx=\"2\" fill=\"#0f172a\" stroke=\"#64748b\"/>\n    <rect x=\"218\" y=\"148\" width=\"24\" height=\"12\" rx=\"2\" fill=\"#0f172a\" stroke=\"#64748b\"/>\n  </g>\n\n  <!-- ITEM 3 (PELIGRO): Botellas de oxicorte con manguera agrietada derecha -->\n  <g id=\"danger-oxicorte\" transform=\"translate(795, 185)\">\n    <rect x=\"0\" y=\"210\" width=\"95\" height=\"12\" fill=\"#475569\"/>\n    <rect x=\"10\" y=\"55\" width=\"32\" height=\"165\" rx=\"10\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"48\" y=\"75\" width=\"36\" height=\"145\" rx=\"10\" fill=\"#b91c1c\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n    <circle cx=\"26\" cy=\"48\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <circle cx=\"66\" cy=\"68\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n    <path d=\"M26 42 Q12 10 66 36 Q95 60 88 120\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4.5\"/>\n    <rect x=\"48\" y=\"22\" width=\"12\" height=\"8\" fill=\"#0f172a\"/> <!-- Cinta aislante reparando manguera -->\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Foso de inspección abierto sin barandilla (centro abajo) -->\n  <g id=\"danger-foso\" transform=\"translate(415, 465)\">\n    <polygon points=\"0,0 280,0 255,105 25,105\" fill=\"#09090b\" stroke=\"#facc15\" stroke-width=\"4\" stroke-dasharray=\"16,10\"/>\n  </g>\n</svg>",
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
          "height": 16
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
          "left": 75,
          "top": 51,
          "width": 12,
          "height": 14
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
          "left": 87,
          "top": 20,
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
          "top": 36,
          "width": 7,
          "height": 10
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
          "left": 76,
          "top": 67,
          "width": 8,
          "height": 7
        },
        "badgeAlign": "tl",
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
          "left": 58,
          "top": 24,
          "width": 10,
          "height": 8
        },
        "badgeAlign": "tr",
        "description": "Ladrillos sueltos con fractura que cederán ante cualquier esfuerzo horizontal.",
        "consequences": "Derrumbe del tiro de chimenea cayendo hacia el interior o exterior del edificio.",
        "regulation": "RD 1627/1997 sobre seguridad en obras.",
        "prevention": "Saneamiento y consolidación estructural antes de cualquier trabajo cercano."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"altSky\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\"/><stop offset=\"55%\" stop-color=\"#38bdf8\"/><stop offset=\"100%\" stop-color=\"#bae6fd\"/>\n    </linearGradient>\n    <linearGradient id=\"altRoof\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#c2410c\"/><stop offset=\"50%\" stop-color=\"#ea580c\"/><stop offset=\"100%\" stop-color=\"#9a3412\"/>\n    </linearGradient>\n  </defs>\n\n  <!-- Cielo y vacío exterior derecha/abajo -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"600\" fill=\"url(#altSky)\"/>\n  <!-- Fachada del edificio de 12 metros bajo el alero -->\n  <polygon points=\"0,420 880,420 880,600 0,600\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/>\n  <!-- Caída libre a la calle derecha -->\n  <rect x=\"880\" y=\"420\" width=\"120\" height=\"180\" fill=\"#334155\" opacity=\"0.35\"/>\n\n  <!-- Tejado de tejas inclinadas (de y=125 cumbrera a y=410 alero) -->\n  <polygon points=\"40,125 875,125 895,410 15,410\" fill=\"url(#altRoof)\" stroke=\"#7c2d12\" stroke-width=\"2\"/>\n\n  <!-- ITEM 5 (SEGURO): Hiladas de tejas cerámicas fijadas -->\n  <g stroke=\"#7c2d12\" stroke-width=\"2\" opacity=\"0.65\">\n    <line x1=\"36\" y1=\"185\" x2=\"879\" y2=\"185\"/>\n    <line x1=\"32\" y1=\"245\" x2=\"884\" y2=\"245\"/>\n    <line x1=\"28\" y1=\"305\" x2=\"889\" y2=\"305\"/>\n    <line x1=\"22\" y1=\"365\" x2=\"893\" y2=\"365\"/>\n  </g>\n\n  <!-- ITEM 10 (SEGURO): Línea de cumbrera ventilada superior -->\n  <g transform=\"translate(36, 108)\">\n    <rect width=\"844\" height=\"22\" rx=\"6\" fill=\"#7c2d12\" stroke=\"#451a03\" stroke-width=\"2\"/>\n    <rect x=\"6\" y=\"4\" width=\"832\" height=\"6\" fill=\"#c2410c\"/>\n  </g>\n\n  <!-- ITEM 7 (SEGURO): Peto perimetral de ladrillo en borde derecho -->\n  <g transform=\"translate(868, 120)\">\n    <polygon points=\"0,0 32,0 52,290 18,290\" fill=\"#b91c1c\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n    <rect x=\"-2\" y=\"-6\" width=\"36\" height=\"10\" rx=\"2\" fill=\"#cbd5e1\"/>\n  </g>\n\n  <!-- ITEM 6 (SEGURO): Canalón metálico de recogida de aguas pluviales en el alero -->\n  <g transform=\"translate(12, 404)\">\n    <rect width=\"890\" height=\"14\" rx=\"4\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"140\" y=\"14\" width=\"12\" height=\"182\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1.5\"/> <!-- Bajante -->\n  </g>\n\n  <!-- ITEM 3 (CUERDA AMARRADA) + ITEM 12 (GRIETAS PROFUNDAS CHIMENEA) -->\n  <g id=\"danger-chimenea\" transform=\"translate(595, 65)\">\n    <rect width=\"92\" height=\"125\" fill=\"#991b1b\" stroke=\"#7f1d1d\" stroke-width=\"2.5\"/>\n    <rect x=\"-6\" y=\"-8\" width=\"104\" height=\"12\" fill=\"#475569\"/>\n    <!-- Grietas profundas en ladrillo (ITEM 12) -->\n    <path d=\"M55 18 L72 48 L60 82 M20 35 L35 60\" stroke=\"#0f172a\" stroke-width=\"3\" fill=\"none\"/>\n    <!-- Cuerda amarilla de falsa línea de vida atada al tiro (ITEM 3) -->\n    <ellipse cx=\"46\" cy=\"70\" rx=\"50\" ry=\"11\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"6\"/>\n    <path d=\"M-4 72 Q-80 120 -130 165\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3.5\" stroke-dasharray=\"6,3\"/>\n  </g>\n\n  <!-- ITEM 1 (PELIGRO): Lucernario de plástico frágil sin red anticaídas -->\n  <g id=\"danger-lucernario\" transform=\"translate(340, 215)\">\n    <polygon points=\"15,0 165,0 185,95 0,95\" fill=\"#38bdf8\" opacity=\"0.6\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n    <path d=\"M45 35 L78 58 L112 42\" stroke=\"#ef4444\" stroke-width=\"3.5\" fill=\"none\"/>\n  </g>\n\n  <!-- ITEM 11 (PELIGRO): Herramientas sueltas (taladro y martillo) en la pendiente de teja -->\n  <g transform=\"translate(235, 315)\">\n    <!-- Taladro a batería amarillo -->\n    <rect x=\"0\" y=\"10\" width=\"44\" height=\"14\" rx=\"2\" fill=\"#facc15\" stroke=\"#854d0e\" stroke-width=\"1.5\"/>\n    <rect x=\"14\" y=\"24\" width=\"10\" height=\"18\" rx=\"1\" fill=\"#0f172a\"/>\n    <rect x=\"44\" y=\"14\" width=\"16\" height=\"5\" fill=\"#94a3b8\"/>\n    <!-- Martillo suelto -->\n    <g transform=\"translate(65, 16) rotate(28)\">\n      <rect x=\"0\" y=\"6\" width=\"38\" height=\"6\" rx=\"1\" fill=\"#b45309\"/>\n      <rect x=\"30\" y=\"0\" width=\"10\" height=\"18\" rx=\"2\" fill=\"#475569\"/>\n    </g>\n  </g>\n\n  <!-- ITEM 4 (PELIGRO): Escalera que NO sobrepasa 1m el alero -->\n  <g id=\"danger-escalera-altura\" transform=\"translate(45, 398)\">\n    <line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"195\" stroke=\"#e2e8f0\" stroke-width=\"6\"/>\n    <line x1=\"50\" y1=\"6\" x2=\"50\" y2=\"195\" stroke=\"#e2e8f0\" stroke-width=\"6\"/>\n    <line x1=\"16\" y1=\"28\" x2=\"50\" y2=\"28\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"16\" y1=\"62\" x2=\"50\" y2=\"62\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"16\" y1=\"96\" x2=\"50\" y2=\"96\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"16\" y1=\"130\" x2=\"50\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    <line x1=\"16\" y1=\"164\" x2=\"50\" y2=\"164\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- ITEM 2 (OPERARIO EN ALERO SIN ARNÉS) + ITEM 8 (CASCO CON BARBOQUEJO) + ITEM 9 (BOTAS DE TEJADOR) -->\n  <g id=\"danger-vacio\" transform=\"translate(765, 255)\">\n    <!-- Piernas y botas de tejador (ITEM 9) -->\n    <rect x=\"18\" y=\"88\" width=\"12\" height=\"36\" fill=\"#1e3a8a\"/>\n    <rect x=\"36\" y=\"88\" width=\"12\" height=\"36\" fill=\"#1e40af\"/>\n    <rect x=\"14\" y=\"122\" width=\"20\" height=\"11\" rx=\"3\" fill=\"#0f172a\" stroke=\"#facc15\" stroke-width=\"1\"/>\n    <rect x=\"34\" y=\"122\" width=\"20\" height=\"11\" rx=\"3\" fill=\"#0f172a\" stroke=\"#facc15\" stroke-width=\"1\"/>\n    <!-- Chaqueta naranja sin arnés -->\n    <rect x=\"14\" y=\"34\" width=\"38\" height=\"56\" rx=\"5\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n    <!-- Cabeza y casco amarillo con barboquejo negro visible (ITEM 8) -->\n    <circle cx=\"33\" cy=\"18\" r=\"14\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n    <path d=\"M18 14 Q33 -4 48 14 Z\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n    <path d=\"M22 14 Q33 34 44 14\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/> <!-- Barboquejo -->\n    <!-- Línea discontinua roja de peligro de caída al vacío -->\n    <line x1=\"88\" y1=\"-20\" x2=\"88\" y2=\"195\" stroke=\"#ef4444\" stroke-width=\"3.5\" stroke-dasharray=\"7,5\"/>\n  </g>\n</svg>",
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
          "height": 16
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
          "left": 75,
          "top": 51,
          "width": 12,
          "height": 14
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
          "left": 58,
          "top": 24,
          "width": 10,
          "height": 8
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
