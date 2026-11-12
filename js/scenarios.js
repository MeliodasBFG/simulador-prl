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
          "left": 80,
          "top": 18,
          "width": 15,
          "height": 48
        },
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
          "left": 14,
          "top": 34,
          "width": 30,
          "height": 6
        },
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
          "left": 6,
          "top": 56,
          "width": 16,
          "height": 24
        },
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
          "left": 46,
          "top": 48,
          "width": 26,
          "height": 26
        },
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
          "left": 42,
          "top": 14,
          "width": 26,
          "height": 9
        },
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
          "left": 38,
          "top": 78,
          "width": 22,
          "height": 26
        },
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
          "left": 60,
          "top": 26,
          "width": 6,
          "height": 22
        },
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
          "left": 26,
          "top": 48,
          "width": 18,
          "height": 36
        },
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
          "left": 18,
          "top": 10,
          "width": 16,
          "height": 6
        },
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
          "left": 68,
          "top": 44,
          "width": 6,
          "height": 6
        },
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
          "left": 76,
          "top": 78,
          "width": 22,
          "height": 16
        },
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
          "left": 56,
          "top": 66,
          "width": 8,
          "height": 10
        },
        "description": "Mecanismo de freno centralizado en posición libre/abierta.",
        "consequences": "Falta de inmovilización del equipo rodante durante la transferencia del paciente.",
        "regulation": "RD 1215/1997 sobre órganos de accionamiento y frenado de equipos móviles.",
        "prevention": "Pisar el pedal rojo para accionar el bloqueo de rueda y de giro antes de soltar la camilla."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"hospWallGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#f0fdfa\"/>\n      <stop offset=\"55%\" stop-color=\"#ccfbf1\"/>\n      <stop offset=\"56%\" stop-color=\"#0d9488\"/>\n      <stop offset=\"60%\" stop-color=\"#0f766e\"/>\n      <stop offset=\"100%\" stop-color=\"#115e59\"/>\n    </linearGradient>\n    <linearGradient id=\"hospFloorGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n      <stop offset=\"15%\" stop-color=\"#f8fafc\"/>\n      <stop offset=\"45%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#94a3b8\"/>\n    </linearGradient>\n    <linearGradient id=\"chromeGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#64748b\"/>\n      <stop offset=\"25%\" stop-color=\"#f8fafc\"/>\n      <stop offset=\"50%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"75%\" stop-color=\"#f1f5f9\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n    <linearGradient id=\"o2Body\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n      <stop offset=\"35%\" stop-color=\"#ffffff\"/>\n      <stop offset=\"85%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#94a3b8\"/>\n    </linearGradient>\n    <linearGradient id=\"o2Shoulder\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#15803d\"/>\n      <stop offset=\"40%\" stop-color=\"#22c55e\"/>\n      <stop offset=\"80%\" stop-color=\"#166534\"/>\n      <stop offset=\"100%\" stop-color=\"#14532d\"/>\n    </linearGradient>\n    <filter id=\"hospShadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"3\" dy=\"6\" stdDeviation=\"5\" flood-color=\"#042f2e\" flood-opacity=\"0.3\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#hospWallGrad)\"/>\n  <g stroke=\"#99f6e4\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"30\" x2=\"1000\" y2=\"30\"/>\n    <line x1=\"0\" y1=\"65\" x2=\"1000\" y2=\"65\"/>\n    <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"65\"/><line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"65\"/><line x1=\"500\" y1=\"0\" x2=\"500\" y2=\"65\"/><line x1=\"700\" y1=\"0\" x2=\"700\" y2=\"65\"/><line x1=\"900\" y1=\"0\" x2=\"900\" y2=\"65\"/>\n  </g>\n  <rect x=\"150\" y=\"20\" width=\"160\" height=\"25\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.95\"/>\n  <rect x=\"600\" y=\"20\" width=\"160\" height=\"25\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.95\"/>\n  <polygon points=\"130,45 330,45 420,340 40,340\" fill=\"#ffffff\" opacity=\"0.04\"/>\n  <polygon points=\"580,45 780,45 870,340 490,340\" fill=\"#ffffff\" opacity=\"0.04\"/>\n\n  <!-- Pasamanos de madera sanitaria -->\n  <rect x=\"0\" y=\"245\" width=\"1000\" height=\"14\" fill=\"#d97706\" rx=\"3\"/>\n  <rect x=\"0\" y=\"246\" width=\"1000\" height=\"4\" fill=\"#fbbf24\"/>\n  <rect x=\"80\" y=\"259\" width=\"10\" height=\"16\" fill=\"url(#chromeGrad)\"/><rect x=\"350\" y=\"259\" width=\"10\" height=\"16\" fill=\"url(#chromeGrad)\"/><rect x=\"650\" y=\"259\" width=\"10\" height=\"16\" fill=\"url(#chromeGrad)\"/><rect x=\"880\" y=\"259\" width=\"10\" height=\"16\" fill=\"url(#chromeGrad)\"/>\n\n  <!-- Cabecero de gases medicinales -->\n  <g transform=\"translate(420, 120)\" filter=\"url(#hospShadow)\">\n    <rect width=\"260\" height=\"42\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <circle cx=\"40\" cy=\"21\" r=\"11\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"3\"/><text x=\"40\" y=\"24\" font-size=\"7\" font-weight=\"black\" fill=\"#0284c7\" text-anchor=\"middle\">O2</text>\n    <circle cx=\"85\" cy=\"21\" r=\"11\" fill=\"#ffffff\" stroke=\"#eab308\" stroke-width=\"3\"/><text x=\"85\" y=\"24\" font-size=\"7\" font-weight=\"black\" fill=\"#eab308\" text-anchor=\"middle\">VAC</text>\n    <circle cx=\"130\" cy=\"21\" r=\"11\" fill=\"#ffffff\" stroke=\"#10b981\" stroke-width=\"3\"/><text x=\"130\" y=\"24\" font-size=\"7\" font-weight=\"black\" fill=\"#10b981\" text-anchor=\"middle\">AIRE</text>\n    <rect x=\"170\" y=\"12\" width=\"22\" height=\"18\" rx=\"2\" fill=\"#22c55e\"/><rect x=\"200\" y=\"12\" width=\"22\" height=\"18\" rx=\"2\" fill=\"#22c55e\"/><rect x=\"230\" y=\"14\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- Suelo de vinilo con reflejos -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#hospFloorGrad)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f766e\"/>\n  <g stroke=\"#ffffff\" stroke-width=\"1.5\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"410\" x2=\"1000\" y2=\"410\"/><line x1=\"0\" y1=\"495\" x2=\"1000\" y2=\"495\"/>\n    <line x1=\"200\" y1=\"340\" x2=\"50\" y2=\"600\"/><line x1=\"480\" y1=\"340\" x2=\"380\" y2=\"600\"/><line x1=\"750\" y1=\"340\" x2=\"720\" y2=\"600\"/>\n  </g>\n\n  <!-- PELIGRO 1: AGUJA DESTAPADA CON SANGRE EN MESA AUXILIAR MAYO -->\n  <g id=\"danger-aguja\" transform=\"translate(120, 310)\" class=\"cursor-pointer\" filter=\"url(#hospShadow)\">\n    <rect x=\"65\" y=\"110\" width=\"12\" height=\"110\" fill=\"url(#chromeGrad)\"/>\n    <rect x=\"25\" y=\"215\" width=\"90\" height=\"10\" rx=\"3\" fill=\"#475569\"/>\n    <circle cx=\"35\" cy=\"226\" r=\"6\" fill=\"#0f172a\"/><circle cx=\"105\" cy=\"226\" r=\"6\" fill=\"#0f172a\"/>\n    <rect x=\"0\" y=\"95\" width=\"150\" height=\"18\" rx=\"4\" fill=\"url(#chromeGrad)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <path d=\"M20 96 C40 90, 90 90, 110 96 C105 108, 30 108, 20 96 Z\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <g transform=\"translate(35, 88) rotate(-8)\">\n      <rect x=\"15\" y=\"0\" width=\"55\" height=\"12\" rx=\"2\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.5\" opacity=\"0.9\"/>\n      <line x1=\"25\" y1=\"0\" x2=\"25\" y2=\"6\" stroke=\"#0284c7\" stroke-width=\"1\"/><line x1=\"35\" y1=\"0\" x2=\"35\" y2=\"8\" stroke=\"#0284c7\" stroke-width=\"1\"/><line x1=\"45\" y1=\"0\" x2=\"45\" y2=\"6\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n      <rect x=\"17\" y=\"2\" width=\"22\" height=\"8\" rx=\"1\" fill=\"#dc2626\" opacity=\"0.85\"/>\n      <rect x=\"68\" y=\"3\" width=\"22\" height=\"6\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1\"/><rect x=\"88\" y=\"0\" width=\"4\" height=\"12\" fill=\"#64748b\"/>\n      <polygon points=\"15,2 8,4 8,8 15,10\" fill=\"#0284c7\"/>\n      <line x1=\"8\" y1=\"6\" x2=\"-22\" y2=\"6\" stroke=\"#94a3b8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <polygon points=\"-22,6 -18,4 -18,8\" fill=\"#cbd5e1\"/>\n      <circle cx=\"-23\" cy=\"7\" r=\"2.5\" fill=\"#ef4444\"/>\n    </g>\n    <circle cx=\"125\" cy=\"98\" r=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><circle cx=\"124\" cy=\"97\" r=\"4\" fill=\"#dc2626\" opacity=\"0.8\"/>\n  </g>\n\n  <!-- PELIGRO 2: BOTELLA DE OXÍGENO SIN CADENA INCLINADA -->\n  <g id=\"danger-oxigeno\" transform=\"translate(800, 130)\" class=\"cursor-pointer\" filter=\"url(#hospShadow)\">\n    <rect x=\"-8\" y=\"180\" width=\"14\" height=\"24\" rx=\"2\" fill=\"#334155\" stroke=\"#0f172a\"/>\n    <path d=\"M2 195 Q-15 230 4 270 Q-10 300 2 330\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"5\" stroke-dasharray=\"8,4\" stroke-linecap=\"round\"/>\n    <g transform=\"rotate(7, 45, 410)\">\n      <rect x=\"15\" y=\"90\" width=\"65\" height=\"320\" rx=\"20\" fill=\"url(#o2Body)\" stroke=\"#94a3b8\" stroke-width=\"2.5\"/>\n      <path d=\"M15 130 Q15 65 47 65 Q80 65 80 130 Z\" fill=\"url(#o2Shoulder)\" stroke=\"#166534\" stroke-width=\"2\"/>\n      <rect x=\"42\" y=\"45\" width=\"12\" height=\"22\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n      <g transform=\"translate(34, 18)\">\n        <circle cx=\"14\" cy=\"14\" r=\"14\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"2\"/>\n        <line x1=\"14\" y1=\"14\" x2=\"20\" y2=\"8\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n        <circle cx=\"34\" cy=\"20\" r=\"10\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n        <line x1=\"34\" y1=\"20\" x2=\"38\" y2=\"16\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>\n        <rect x=\"5\" y=\"-12\" width=\"8\" height=\"20\" rx=\"2\" fill=\"#e0f2fe\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      </g>\n      <g transform=\"translate(50, 240) rotate(-90)\">\n        <text x=\"0\" y=\"4\" font-size=\"12\" font-weight=\"black\" fill=\"#047857\" letter-spacing=\"4\">OXÍGENO MEDICINAL</text>\n        <text x=\"0\" y=\"16\" font-size=\"8\" font-weight=\"bold\" fill=\"#64748b\">UN 1072 · GAS COMPRIMIDO 200 BAR</text>\n      </g>\n      <polygon points=\"48,150 58,162 48,174 38,162\" fill=\"#eab308\" stroke=\"#ca8a04\"/>\n      <ellipse cx=\"47.5\" cy=\"405\" rx=\"32\" ry=\"8\" fill=\"#475569\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 4: CAMILLA HOSPITALARIA CON RUEDAS SIN FRENO Y BARANDILLA BAJADA -->\n  <g id=\"danger-camilla\" transform=\"translate(480, 290)\" class=\"cursor-pointer\" filter=\"url(#hospShadow)\">\n    <rect x=\"15\" y=\"110\" width=\"220\" height=\"12\" rx=\"4\" fill=\"url(#chromeGrad)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"40\" y=\"122\" width=\"16\" height=\"55\" fill=\"url(#chromeGrad)\"/><rect x=\"180\" y=\"122\" width=\"16\" height=\"55\" fill=\"url(#chromeGrad)\"/>\n    <rect x=\"25\" y=\"172\" width=\"195\" height=\"10\" rx=\"3\" fill=\"#334155\"/>\n    <g transform=\"translate(25, 82)\">\n      <rect width=\"180\" height=\"6\" rx=\"2\" fill=\"url(#chromeGrad)\"/>\n      <line x1=\"30\" y1=\"6\" x2=\"30\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"3\"/><line x1=\"80\" y1=\"6\" x2=\"80\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"3\"/><line x1=\"130\" y1=\"6\" x2=\"130\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n    </g>\n    <rect x=\"10\" y=\"55\" width=\"230\" height=\"28\" rx=\"6\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <path d=\"M12 56 Q125 60 238 56 L238 68 Q125 72 12 68 Z\" fill=\"#38bdf8\" opacity=\"0.4\"/>\n    <rect x=\"195\" y=\"50\" width=\"40\" height=\"16\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n    <g transform=\"translate(225, -20)\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100\" stroke=\"url(#chromeGrad)\" stroke-width=\"4\"/>\n      <rect x=\"-14\" y=\"6\" width=\"18\" height=\"30\" rx=\"4\" fill=\"#e0f2fe\" stroke=\"#38bdf8\" stroke-width=\"1.5\" opacity=\"0.85\"/>\n      <line x1=\"-5\" y1=\"36\" x2=\"-5\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>\n    <g transform=\"translate(38, 178)\">\n      <circle cx=\"12\" cy=\"16\" r=\"14\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/><circle cx=\"12\" cy=\"16\" r=\"5\" fill=\"url(#chromeGrad)\"/>\n      <rect x=\"18\" y=\"4\" width=\"16\" height=\"5\" rx=\"1.5\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"1\"/>\n    </g>\n    <g transform=\"translate(185, 178)\">\n      <circle cx=\"12\" cy=\"16\" r=\"14\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/><circle cx=\"12\" cy=\"16\" r=\"5\" fill=\"url(#chromeGrad)\"/>\n      <rect x=\"18\" y=\"4\" width=\"16\" height=\"5\" rx=\"1.5\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"1\"/>\n    </g>\n    <path d=\"M-15 125 L-35 125 M-25 118 L-35 125 L-25 132\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.75\"/>\n  </g>\n\n  <!-- PELIGRO 3: BOLSA DE RESIDUOS BIOLÓGICOS ROTA Y DERRAMADA -->\n  <g id=\"danger-residuos\" transform=\"translate(360, 420)\" class=\"cursor-pointer\" filter=\"url(#hospShadow)\">\n    <path d=\"M20 70 C50 55, 110 50, 160 65 C200 78, 190 115, 140 125 C80 135, 30 120, 10 95 Z\" fill=\"#991b1b\" opacity=\"0.75\"/>\n    <path d=\"M40 76 C70 65, 120 62, 145 74 C175 85, 160 110, 125 116 C75 122, 40 110, 28 94 Z\" fill=\"#b91c1c\" opacity=\"0.85\"/>\n    <g transform=\"translate(45, 25)\">\n      <path d=\"M25 55 C10 40, 20 15, 45 10 C65 6, 85 10, 100 25 C115 42, 125 70, 95 80 C60 90, 35 85, 25 55 Z\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <path d=\"M40 20 Q55 35 45 65 Q70 45 90 60\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"3\"/>\n      <path d=\"M40 10 L30 -5 M45 10 L50 -8\" stroke=\"#ca8a04\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <g transform=\"translate(60, 42) scale(0.65)\">\n        <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n        <circle cx=\"8\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\"/><circle cx=\"16\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\"/>\n        <circle cx=\"12\" cy=\"16\" r=\"6\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"#000000\"/>\n      </g>\n      <ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"5\" fill=\"#f8fafc\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n      <path d=\"M92 78 Q105 82 108 92 Q100 95 90 85\" fill=\"#38bdf8\" opacity=\"0.9\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 5: ENFERMERO EN SOBREESFUERZO LUMBAR -->\n  <g id=\"danger-ergonomia\" transform=\"translate(290, 200)\" class=\"cursor-pointer\" filter=\"url(#hospShadow)\">\n    <rect x=\"52\" y=\"160\" width=\"16\" height=\"120\" rx=\"5\" fill=\"#0f766e\" stroke=\"#115e59\" stroke-width=\"2\"/>\n    <rect x=\"75\" y=\"160\" width=\"16\" height=\"120\" rx=\"5\" fill=\"#0d9488\" stroke=\"#115e59\" stroke-width=\"2\"/>\n    <ellipse cx=\"56\" cy=\"278\" rx=\"14\" ry=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <ellipse cx=\"82\" cy=\"278\" rx=\"14\" ry=\"7\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <g transform=\"translate(30, 75) rotate(-35)\">\n      <rect x=\"0\" y=\"0\" width=\"75\" height=\"42\" rx=\"10\" fill=\"#14b8a6\" stroke=\"#0f766e\" stroke-width=\"2.5\"/>\n      <polygon points=\"60,10 75,20 60,30\" fill=\"#ccfbf1\"/>\n      <path d=\"M15 28 L-15 75 L-30 65\" fill=\"none\" stroke=\"#14b8a6\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n      <circle cx=\"-32\" cy=\"64\" r=\"8\" fill=\"#38bdf8\"/>\n      <path d=\"M-8 -5 L-18 -15 M-2 -8 L-5 -22 M5 -4 L10 -16\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <circle cx=\"-4\" cy=\"-5\" r=\"4\" fill=\"#ef4444\"/>\n    </g>\n    <g transform=\"translate(10, 95)\">\n      <circle cx=\"15\" cy=\"15\" r=\"18\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <path d=\"M0 12 C0 -4, 30 -4, 32 12 Z\" fill=\"#78350f\"/>\n      <rect x=\"2\" y=\"16\" width=\"18\" height=\"15\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "hosp-1",
        "num": 1,
        "name": "Botella de Oxígeno medicinal",
        "category": "Equipos a Presión",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 80,
          "top": 18,
          "width": 15,
          "height": 48
        },
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
          "left": 6,
          "top": 56,
          "width": 16,
          "height": 24
        },
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
          "left": 46,
          "top": 48,
          "width": 26,
          "height": 26
        },
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
          "left": 38,
          "top": 78,
          "width": 22,
          "height": 26
        },
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
          "left": 26,
          "top": 48,
          "width": 18,
          "height": 36
        },
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
          "left": 56,
          "top": 66,
          "width": 8,
          "height": 10
        },
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
          "left": 44,
          "top": 68,
          "width": 28,
          "height": 22
        },
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
          "left": 42,
          "top": 34,
          "width": 14,
          "height": 35
        },
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
          "left": 16,
          "top": 58,
          "width": 18,
          "height": 24
        },
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
          "left": 4,
          "top": 28,
          "width": 17,
          "height": 48
        },
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
          "left": 24,
          "top": 44,
          "width": 18,
          "height": 25
        },
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
          "left": 58,
          "top": 52,
          "width": 14,
          "height": 25
        },
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
          "left": 22,
          "top": 12,
          "width": 30,
          "height": 28
        },
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
          "left": 6,
          "top": 78,
          "width": 8,
          "height": 14
        },
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
          "left": 76,
          "top": 76,
          "width": 18,
          "height": 18
        },
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
          "left": 68,
          "top": 36,
          "width": 12,
          "height": 15
        },
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
          "top": 48,
          "width": 7,
          "height": 24
        },
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
          "left": 26,
          "top": 82,
          "width": 12,
          "height": 10
        },
        "description": "Múltiples adaptadores y transformadores conectados en cascada en una misma base.",
        "consequences": "Sobrecalentamiento térmico del conductor e inicio de ignición.",
        "regulation": "Reglamento Electrotécnico de Baja Tensión (REBT). Prohibición de enchufes en cascada.",
        "prevention": "Calcular potencias, instalar tomas suficientes fijas en pared y no sobrecargar."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"ofiWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"60%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"ofiFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"30%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"woodDesk\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"40%\" stop-color=\"#b45309\"/>\n      <stop offset=\"80%\" stop-color=\"#d97706\"/>\n      <stop offset=\"100%\" stop-color=\"#92400e\"/>\n    </linearGradient>\n    <linearGradient id=\"coffeeGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#451a03\"/>\n      <stop offset=\"50%\" stop-color=\"#78350f\"/>\n      <stop offset=\"100%\" stop-color=\"#270e02\"/>\n    </linearGradient>\n    <filter id=\"ofiShadow\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"3\" dy=\"5\" stdDeviation=\"4\" flood-color=\"#020617\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#ofiWall)\"/>\n  <g transform=\"translate(340, 30)\">\n    <rect width=\"320\" height=\"180\" rx=\"4\" fill=\"#0284c7\" opacity=\"0.25\"/>\n    <rect width=\"320\" height=\"180\" rx=\"4\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"6\"/>\n    <line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"90\" x2=\"320\" y2=\"90\" stroke=\"#64748b\" stroke-width=\"4\"/>\n    <rect x=\"25\" y=\"60\" width=\"45\" height=\"120\" fill=\"#0f172a\" opacity=\"0.5\"/>\n    <rect x=\"80\" y=\"35\" width=\"55\" height=\"145\" fill=\"#0f172a\" opacity=\"0.6\"/>\n    <rect x=\"180\" y=\"50\" width=\"60\" height=\"130\" fill=\"#0f172a\" opacity=\"0.5\"/>\n  </g>\n\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#ofiFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <g stroke=\"#1e293b\" stroke-width=\"1.5\" opacity=\"0.6\">\n    <line x1=\"0\" y1=\"410\" x2=\"1000\" y2=\"410\"/><line x1=\"0\" y1=\"490\" x2=\"1000\" y2=\"490\"/>\n    <line x1=\"180\" y1=\"340\" x2=\"50\" y2=\"600\"/><line x1=\"420\" y1=\"340\" x2=\"320\" y2=\"600\"/><line x1=\"680\" y1=\"340\" x2=\"680\" y2=\"600\"/>\n  </g>\n\n  <!-- Puesto 1 -->\n  <g transform=\"translate(60, 310)\" filter=\"url(#ofiShadow)\">\n    <rect x=\"0\" y=\"40\" width=\"250\" height=\"18\" rx=\"4\" fill=\"url(#woodDesk)\"/>\n    <rect x=\"15\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/><rect x=\"225\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/>\n    <rect x=\"80\" y=\"-45\" width=\"95\" height=\"65\" rx=\"4\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"84\" y=\"-41\" width=\"87\" height=\"57\" fill=\"#0284c7\"/>\n    <rect x=\"122\" y=\"20\" width=\"12\" height=\"20\" fill=\"#475569\"/>\n    <ellipse cx=\"128\" cy=\"40\" rx=\"22\" ry=\"4\" fill=\"#334155\"/>\n    <rect x=\"85\" y=\"44\" width=\"60\" height=\"8\" rx=\"2\" fill=\"#1e293b\"/><ellipse cx=\"160\" cy=\"48\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n  </g>\n\n  <!-- PELIGRO 1: CABLES SUELTOS EN PASILLO -->\n  <g id=\"danger-cables\" class=\"cursor-pointer\" filter=\"url(#ofiShadow)\">\n    <path d=\"M340 480 C 400 450, 440 550, 500 475 S 580 540, 650 480\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <path d=\"M340 505 C 380 530, 430 440, 490 530 S 560 460, 650 515\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <path d=\"M350 470 C 410 540, 470 460, 530 540 S 590 470, 640 530\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"495\" cy=\"490\" rx=\"16\" ry=\"22\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\" transform=\"rotate(-25, 495, 490)\"/>\n    <path d=\"M485 470 Q500 445 515 470\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"7\"/>\n  </g>\n\n  <!-- PELIGRO 2: TAZA DE CAFÉ DERRAMADA JUNTO A REGLETA -->\n  <g id=\"danger-cafe\" transform=\"translate(115, 360)\" class=\"cursor-pointer\" filter=\"url(#ofiShadow)\">\n    <g transform=\"translate(30, 50)\">\n      <rect width=\"85\" height=\"26\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"16\" cy=\"13\" r=\"6\" fill=\"#cbd5e1\"/><circle cx=\"36\" cy=\"13\" r=\"6\" fill=\"#cbd5e1\"/><circle cx=\"56\" cy=\"13\" r=\"6\" fill=\"#cbd5e1\"/>\n      <circle cx=\"5\" cy=\"13\" r=\"2.5\" fill=\"#ef4444\"/>\n    </g>\n    <g transform=\"translate(0, 36) rotate(65)\">\n      <rect width=\"24\" height=\"30\" rx=\"4\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <path d=\"M24 6 Q34 15 24 24\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n    </g>\n    <path d=\"M22 60 Q45 50 68 58 Q95 52 115 65 Q98 78 68 75 Q32 78 22 60 Z\" fill=\"url(#coffeeGrad)\" opacity=\"0.95\"/>\n    <path d=\"M72 45 L76 36 L82 42 L88 30 L84 46 Z\" fill=\"#facc15\" stroke=\"#eab308\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- PELIGRO 3: EXTINTOR BLOQUEADO POR CAJAS -->\n  <g id=\"danger-extintor\" class=\"cursor-pointer\" filter=\"url(#ofiShadow)\">\n    <g transform=\"translate(845, 160)\">\n      <rect x=\"-8\" y=\"-40\" width=\"65\" height=\"28\" rx=\"3\" fill=\"#dc2626\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <text x=\"24\" y=\"-22\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"black\" text-anchor=\"middle\">EXTINTOR</text>\n      <rect x=\"5\" y=\"0\" width=\"42\" height=\"105\" rx=\"15\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2.5\"/>\n      <circle cx=\"26\" cy=\"-16\" r=\"6\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\n      <path d=\"M34 -6 Q48 0 46 50 L42 75\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    </g>\n    <g transform=\"translate(805, 230)\">\n      <rect x=\"12\" y=\"0\" width=\"105\" height=\"55\" rx=\"3\" fill=\"#d97706\" stroke=\"#b45309\" stroke-width=\"2\"/>\n      <rect x=\"4\" y=\"50\" width=\"118\" height=\"60\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"-8\" y=\"105\" width=\"130\" height=\"65\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"-15\" y=\"165\" width=\"145\" height=\"70\" rx=\"3\" fill=\"#92400e\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 4: ARCHIVADOR VOLCANDO -->\n  <g id=\"danger-archivador\" transform=\"translate(250, 135) rotate(9, 50, 160)\" filter=\"url(#ofiShadow)\" class=\"cursor-pointer\">\n    <rect width=\"90\" height=\"185\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"3\"/>\n    <g transform=\"translate(-32, 12)\">\n      <rect width=\"118\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <rect x=\"40\" y=\"14\" width=\"34\" height=\"6\" rx=\"2\" fill=\"#334155\"/>\n      <path d=\"M10 8 L30 2 L55 8 Z\" fill=\"#f59e0b\"/>\n    </g>\n    <g transform=\"translate(-26, 56)\"><rect width=\"112\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/></g>\n    <g transform=\"translate(-18, 100)\"><rect width=\"104\" height=\"36\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/></g>\n    <g transform=\"translate(4, 144)\"><rect width=\"82\" height=\"34\" rx=\"2\" fill=\"#475569\"/></g>\n  </g>\n\n  <!-- PELIGRO 5: ERGONOMÍA DEFICIENTE -->\n  <g id=\"danger-ergonomia\" class=\"cursor-pointer\" filter=\"url(#ofiShadow)\">\n    <g transform=\"translate(640, 310)\">\n      <rect x=\"0\" y=\"40\" width=\"165\" height=\"18\" rx=\"4\" fill=\"url(#woodDesk)\"/>\n      <rect x=\"15\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/><rect x=\"140\" y=\"58\" width=\"12\" height=\"130\" fill=\"#334155\"/>\n      <rect x=\"40\" y=\"22\" width=\"60\" height=\"38\" rx=\"2\" fill=\"#0f172a\" transform=\"rotate(-15, 70, 40)\"/>\n      <rect x=\"42\" y=\"24\" width=\"56\" height=\"34\" fill=\"#38bdf8\" transform=\"rotate(-15, 70, 40)\"/>\n    </g>\n    <g transform=\"translate(685, 305)\">\n      <rect x=\"5\" y=\"-30\" width=\"42\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"2.5\" transform=\"rotate(24, 25, 20)\"/>\n      <ellipse cx=\"25\" cy=\"40\" rx=\"28\" ry=\"12\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <rect x=\"22\" y=\"52\" width=\"6\" height=\"35\" fill=\"#475569\"/>\n      <circle cx=\"5\" cy=\"90\" r=\"4.5\" fill=\"#0f172a\"/><circle cx=\"45\" cy=\"90\" r=\"4.5\" fill=\"#0f172a\"/><circle cx=\"62\" cy=\"92\" r=\"5\" fill=\"#ef4444\"/>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "ofi-1",
        "num": 1,
        "name": "Cables sueltos cruzando pasillo",
        "category": "Orden y Limpieza",
        "isHazard": true,
        "severity": "Grave",
        "rect": {
          "left": 44,
          "top": 68,
          "width": 28,
          "height": 22
        },
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
          "left": 42,
          "top": 34,
          "width": 14,
          "height": 35
        },
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
          "left": 16,
          "top": 58,
          "width": 18,
          "height": 24
        },
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
          "left": 4,
          "top": 28,
          "width": 17,
          "height": 48
        },
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
          "left": 58,
          "top": 52,
          "width": 14,
          "height": 25
        },
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
          "left": 68,
          "top": 36,
          "width": 12,
          "height": 15
        },
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
          "left": 26,
          "top": 82,
          "width": 12,
          "height": 10
        },
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
          "left": 42,
          "top": 46,
          "width": 14,
          "height": 35
        },
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
          "left": 38,
          "top": 14,
          "width": 12,
          "height": 12
        },
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
          "left": 6,
          "top": 24,
          "width": 26,
          "height": 42
        },
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
          "left": 68,
          "top": 70,
          "width": 30,
          "height": 35
        },
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
          "left": 78,
          "top": 34,
          "width": 16,
          "height": 28
        },
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
          "top": 46,
          "width": 14,
          "height": 38
        },
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
          "left": 56,
          "top": 64,
          "width": 10,
          "height": 16
        },
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
          "left": 38,
          "top": 78,
          "width": 12,
          "height": 8
        },
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
          "left": 22,
          "top": 18,
          "width": 8,
          "height": 25
        },
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
          "left": 64,
          "top": 14,
          "width": 8,
          "height": 45
        },
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
          "left": 6,
          "top": 66,
          "width": 14,
          "height": 10
        },
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
          "left": 86,
          "top": 16,
          "width": 8,
          "height": 10
        },
        "description": "Señal redonda azul con pictograma blanco de protección obligatoria de la cabeza.",
        "consequences": "Ninguna. Advierte de forma clara de los requisitos de entrada a la zona.",
        "regulation": "Cumple el RD 485/1997 sobre señalización de seguridad y salud en el trabajo.",
        "prevention": "Elemento seguro de advertencia preventiva."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"skyObra\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\"/>\n      <stop offset=\"60%\" stop-color=\"#bae6fd\"/>\n      <stop offset=\"100%\" stop-color=\"#f0f9ff\"/>\n    </linearGradient>\n    <linearGradient id=\"groundObra\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#78350f\"/>\n      <stop offset=\"40%\" stop-color=\"#92400e\"/>\n      <stop offset=\"100%\" stop-color=\"#451a03\"/>\n    </linearGradient>\n    <filter id=\"shadowObra\">\n      <feDropShadow dx=\"3\" dy=\"6\" stdDeviation=\"4\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"380\" fill=\"url(#skyObra)\"/>\n  <g fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\">\n    <rect x=\"0\" y=\"140\" width=\"600\" height=\"24\"/>\n    <rect x=\"60\" y=\"164\" width=\"35\" height=\"150\"/><rect x=\"250\" y=\"164\" width=\"35\" height=\"150\"/><rect x=\"450\" y=\"164\" width=\"35\" height=\"150\"/>\n    <line x1=\"70\" y1=\"140\" x2=\"70\" y2=\"110\" stroke=\"#b45309\" stroke-width=\"4\"/><line x1=\"85\" y1=\"140\" x2=\"85\" y2=\"115\" stroke=\"#b45309\" stroke-width=\"4\"/>\n    <line x1=\"260\" y1=\"140\" x2=\"260\" y2=\"110\" stroke=\"#b45309\" stroke-width=\"4\"/><line x1=\"275\" y1=\"140\" x2=\"275\" y2=\"115\" stroke=\"#b45309\" stroke-width=\"4\"/>\n  </g>\n\n  <g transform=\"translate(680, 20)\">\n    <rect x=\"40\" y=\"60\" width=\"18\" height=\"300\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"-350\" y=\"60\" width=\"450\" height=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"-200\" y=\"74\" width=\"22\" height=\"12\" fill=\"#0f172a\"/>\n    <line x1=\"-189\" y1=\"86\" x2=\"-189\" y2=\"240\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n    <polygon points=\"-210,240 -168,240 -178,280 -200,280\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/>\n  </g>\n\n  <rect x=\"0\" y=\"380\" width=\"1000\" height=\"220\" fill=\"url(#groundObra)\"/>\n\n  <!-- PELIGRO 1: PEÓN SIN CASCO BAJO LA CARGA -->\n  <g id=\"danger-sin-casco\" transform=\"translate(460, 290)\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <rect x=\"18\" y=\"110\" width=\"14\" height=\"95\" fill=\"#1e3a8a\"/><rect x=\"36\" y=\"110\" width=\"14\" height=\"95\" fill=\"#1e40af\"/>\n    <rect x=\"14\" y=\"195\" width=\"20\" height=\"12\" rx=\"3\" fill=\"#78350f\"/><rect x=\"34\" y=\"195\" width=\"20\" height=\"12\" rx=\"3\" fill=\"#78350f\"/>\n    <rect x=\"12\" y=\"45\" width=\"44\" height=\"68\" rx=\"6\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <rect x=\"12\" y=\"65\" width=\"44\" height=\"10\" fill=\"#e2e8f0\"/>\n    <path d=\"M12 55 L-4 35 L4 28\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <rect x=\"-6\" y=\"24\" width=\"8\" height=\"15\" rx=\"2\" fill=\"#0f172a\"/>\n    <circle cx=\"34\" cy=\"22\" r=\"16\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n    <path d=\"M20 18 Q34 6 48 18\" fill=\"#451a03\"/>\n  </g>\n\n  <!-- PELIGRO 2: ANDAMIO SIN BARANDILLAS -->\n  <g id=\"danger-andamio\" transform=\"translate(80, 130)\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <line x1=\"20\" y1=\"0\" x2=\"20\" y2=\"250\" stroke=\"#facc15\" stroke-width=\"8\"/><line x1=\"220\" y1=\"0\" x2=\"220\" y2=\"250\" stroke=\"#facc15\" stroke-width=\"8\"/>\n    <rect x=\"10\" y=\"80\" width=\"220\" height=\"16\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n    <line x1=\"20\" y1=\"80\" x2=\"220\" y2=\"250\" stroke=\"#ca8a04\" stroke-width=\"4\"/><line x1=\"220\" y1=\"80\" x2=\"20\" y2=\"250\" stroke=\"#ca8a04\" stroke-width=\"4\"/>\n    <g transform=\"translate(140, 10)\">\n      <circle cx=\"15\" cy=\"15\" r=\"12\" fill=\"#fed7aa\"/><rect x=\"5\" y=\"27\" width=\"20\" height=\"42\" fill=\"#f97316\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 3: ZANJA SIN ENTIBAR -->\n  <g id=\"danger-zanja\" transform=\"translate(680, 360)\" class=\"cursor-pointer\">\n    <polygon points=\"0,20 300,20 280,220 30,220\" fill=\"#291307\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n    <path d=\"M-10 18 Q40 25 80 18 Q140 28 200 18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\"/>\n    <circle cx=\"90\" cy=\"80\" r=\"12\" fill=\"#451a03\"/><circle cx=\"140\" cy=\"120\" r=\"18\" fill=\"#451a03\"/>\n  </g>\n\n  <!-- PELIGRO 4: CUADRO ELÉCTRICO EN CHARCO -->\n  <g id=\"danger-cuadro\" transform=\"translate(780, 200)\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <rect width=\"90\" height=\"110\" rx=\"4\" fill=\"#ea580c\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n    <rect x=\"8\" y=\"10\" width=\"74\" height=\"90\" fill=\"#0f172a\"/><rect x=\"18\" y=\"25\" width=\"54\" height=\"20\" fill=\"#ffffff\"/>\n    <path d=\"M45 52 L38 68 L48 68 L40 85\" stroke=\"#facc15\" stroke-width=\"3\" fill=\"none\"/>\n    <path d=\"M35 110 Q20 150 40 180\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\"/><path d=\"M55 110 Q70 140 50 180\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"4\"/>\n    <ellipse cx=\"50\" cy=\"180\" rx=\"45\" ry=\"16\" fill=\"#38bdf8\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- PELIGRO 5: ESCALERA SOBRE BIDONES -->\n  <g id=\"danger-escalera\" transform=\"translate(320, 220)\" class=\"cursor-pointer\" filter=\"url(#shadowObra)\">\n    <rect x=\"10\" y=\"110\" width=\"65\" height=\"75\" rx=\"5\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <ellipse cx=\"42.5\" cy=\"110\" rx=\"32.5\" ry=\"8\" fill=\"#38bdf8\"/>\n    <g transform=\"rotate(18, 42, 110)\">\n      <line x1=\"20\" y1=\"-80\" x2=\"20\" y2=\"120\" stroke=\"#e2e8f0\" stroke-width=\"5\"/><line x1=\"50\" y1=\"-80\" x2=\"50\" y2=\"120\" stroke=\"#e2e8f0\" stroke-width=\"5\"/>\n      <line x1=\"20\" y1=\"-60\" x2=\"50\" y2=\"-60\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"20\" y1=\"-20\" x2=\"50\" y2=\"-20\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"20\" y1=\"20\" x2=\"50\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"4\"/><line x1=\"20\" y1=\"60\" x2=\"50\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n    </g>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "obra-1",
        "num": 1,
        "name": "Peón sin casco bajo carga de grúa",
        "category": "Cargas Suspendidas",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 42,
          "top": 46,
          "width": 14,
          "height": 35
        },
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
          "left": 38,
          "top": 14,
          "width": 12,
          "height": 12
        },
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
          "left": 6,
          "top": 24,
          "width": 26,
          "height": 42
        },
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
          "left": 68,
          "top": 70,
          "width": 30,
          "height": 35
        },
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
          "left": 78,
          "top": 34,
          "width": 16,
          "height": 28
        },
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
          "top": 46,
          "width": 14,
          "height": 38
        },
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
          "left": 6,
          "top": 66,
          "width": 14,
          "height": 10
        },
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
          "left": 22,
          "top": 18,
          "width": 22,
          "height": 26
        },
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
          "left": 36,
          "top": 68,
          "width": 26,
          "height": 22
        },
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
          "left": 64,
          "top": 46,
          "width": 28,
          "height": 38
        },
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
          "left": 4,
          "top": 48,
          "width": 14,
          "height": 48
        },
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
          "left": 46,
          "top": 42,
          "width": 14,
          "height": 32
        },
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
          "left": 18,
          "top": 78,
          "width": 80,
          "height": 6
        },
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
          "left": 18,
          "top": 34,
          "width": 6,
          "height": 45
        },
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
          "left": 80,
          "top": 42,
          "width": 10,
          "height": 16
        },
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
          "top": 18,
          "width": 8,
          "height": 6
        },
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
          "left": 50,
          "top": 12,
          "width": 12,
          "height": 8
        },
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
          "left": 54,
          "top": 80,
          "width": 6,
          "height": 6
        },
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
          "left": 32,
          "top": 54,
          "width": 10,
          "height": 10
        },
        "description": "Bulto con peso superior al límite legal manipulado en solitario.",
        "consequences": "Desgarro muscular lumbar y descompensación postural.",
        "regulation": "RD 487/1997. Límite máximo de 25 kg para trabajadores masculinos.",
        "prevention": "Fraccionar el bulto o transportar con transpaleta manual/eléctrica."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"almWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f172a\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"almFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"35%\" stop-color=\"#475569\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"forkliftYellow\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#facc15\"/><stop offset=\"50%\" stop-color=\"#eab308\"/><stop offset=\"100%\" stop-color=\"#ca8a04\"/>\n    </linearGradient>\n    <linearGradient id=\"oilSpill\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#09090b\"/><stop offset=\"45%\" stop-color=\"#18181b\"/><stop offset=\"70%\" stop-color=\"#27272a\"/><stop offset=\"100%\" stop-color=\"#09090b\"/>\n    </linearGradient>\n    <filter id=\"almShadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"4\" dy=\"6\" stdDeviation=\"5\" flood-color=\"#020617\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <!-- Pared industrial con cerchas metálicas -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#almWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"2\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"60\" x2=\"1000\" y2=\"60\"/><line x1=\"0\" y1=\"120\" x2=\"1000\" y2=\"120\"/>\n    <line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"340\"/><line x1=\"500\" y1=\"0\" x2=\"500\" y2=\"340\"/><line x1=\"800\" y1=\"0\" x2=\"800\" y2=\"340\"/>\n  </g>\n\n  <!-- Suelo de hormigón pulido con señalización vial -->\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#almFloor)\"/>\n  <rect x=\"0\" y=\"336\" width=\"1000\" height=\"8\" fill=\"#0f172a\"/>\n  <!-- Líneas de pasillo peatonal de seguridad amarillas -->\n  <line x1=\"0\" y1=\"520\" x2=\"1000\" y2=\"520\" stroke=\"#eab308\" stroke-width=\"8\" stroke-dasharray=\"25,15\"/>\n\n  <!-- Estanterías industriales tipo Mecalux (Azul y Naranja) -->\n  <g stroke=\"#0284c7\" stroke-width=\"8\" opacity=\"0.95\">\n    <line x1=\"180\" y1=\"60\" x2=\"180\" y2=\"380\"/><line x1=\"380\" y1=\"60\" x2=\"380\" y2=\"380\"/>\n  </g>\n  <rect x=\"175\" y=\"110\" width=\"210\" height=\"12\" fill=\"#ea580c\"/>\n  <rect x=\"175\" y=\"210\" width=\"210\" height=\"12\" fill=\"#ea580c\"/>\n  <rect x=\"175\" y=\"310\" width=\"210\" height=\"12\" fill=\"#ea580c\"/>\n\n  <!-- PELIGRO 1: PALET DEFORMADO E INESTABLE EN ALTURA -->\n  <g id=\"danger-palet\" transform=\"translate(180, 60)\" class=\"cursor-pointer\" filter=\"url(#almShadow)\">\n    <g transform=\"rotate(14, 100, 50)\">\n      <rect x=\"10\" y=\"38\" width=\"170\" height=\"14\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"20\" y=\"-10\" width=\"70\" height=\"50\" rx=\"3\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"95\" y=\"-15\" width=\"75\" height=\"55\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <path d=\"M15 -5 Q50 -25 165 -10\" fill=\"none\" stroke=\"#e0f2fe\" stroke-width=\"4\" opacity=\"0.7\"/> <!-- Plástico roto -->\n    </g>\n  </g>\n\n  <!-- PELIGRO 2: GRAN DERRAME DE ACEITE LUBRICANTE EN PASILLO -->\n  <g id=\"danger-aceite\" transform=\"translate(390, 420)\" class=\"cursor-pointer\" filter=\"url(#almShadow)\">\n    <path d=\"M10 50 C40 20, 140 15, 210 40 C280 65, 260 110, 190 120 C110 130, 30 110, 5 80 Z\" fill=\"url(#oilSpill)\" stroke=\"#09090b\" stroke-width=\"2\"/>\n    <path d=\"M40 55 C70 35, 150 32, 190 52 C230 70, 215 100, 165 106 C105 112, 55 98, 35 78 Z\" fill=\"#18181b\" opacity=\"0.9\"/>\n    <!-- Brillos irisados en el aceite -->\n    <path d=\"M70 48 Q110 40 140 55\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" opacity=\"0.6\"/>\n    <path d=\"M90 70 Q130 65 160 80\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2\" opacity=\"0.5\"/>\n    <!-- Rodadas de carretilla pasando por encima -->\n    <line x1=\"30\" y1=\"20\" x2=\"220\" y2=\"130\" stroke=\"#000000\" stroke-width=\"6\" stroke-dasharray=\"10,5\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- PELIGRO 3: CARRETILLA CON HORQUILLAS ELEVADAS Y LLAVE PUESTA -->\n  <g id=\"danger-carretilla\" transform=\"translate(640, 240)\" class=\"cursor-pointer\" filter=\"url(#almShadow)\">\n    <!-- Cuerpo de carretilla amarilla -->\n    <rect x=\"50\" y=\"110\" width=\"160\" height=\"90\" rx=\"15\" fill=\"url(#forkliftYellow)\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n    <rect x=\"180\" y=\"80\" width=\"45\" height=\"120\" rx=\"6\" fill=\"#0f172a\"/>\n    <!-- Cabina y jaula antivuelco ROPS/FOPS -->\n    <rect x=\"90\" y=\"30\" width=\"80\" height=\"90\" rx=\"4\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n    <circle cx=\"120\" cy=\"70\" r=\"14\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"4\"/> <!-- Volante -->\n    <!-- LLAVE ROJA PUESTA EN EL CONTACTO SIN CONDUCTOR -->\n    <circle cx=\"140\" cy=\"85\" r=\"4\" fill=\"#ef4444\"/><rect x=\"140\" y=\"85\" width=\"8\" height=\"3\" fill=\"#ef4444\"/>\n    <!-- Mástil vertical y HORQUILLAS ELEVADAS EN VACÍO A 1.6M (PELIGRO DE EMPALAMIENTO) -->\n    <rect x=\"220\" y=\"-30\" width=\"14\" height=\"230\" fill=\"#334155\"/>\n    <rect x=\"230\" y=\"40\" width=\"100\" height=\"12\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/> <!-- Horquilla alta -->\n    <rect x=\"230\" y=\"52\" width=\"100\" height=\"12\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Ruedas negras macizas -->\n    <circle cx=\"85\" cy=\"200\" r=\"26\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <circle cx=\"190\" cy=\"200\" r=\"24\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- PELIGRO 4: SALIDA DE EMERGENCIA BLOQUEADA POR PALETS -->\n  <g id=\"danger-salida\" transform=\"translate(20, 200)\" class=\"cursor-pointer\" filter=\"url(#almShadow)\">\n    <!-- Puerta de emergencia verde con barra antipánico -->\n    <rect width=\"110\" height=\"180\" rx=\"4\" fill=\"#15803d\" stroke=\"#166534\" stroke-width=\"3\"/>\n    <rect x=\"15\" y=\"90\" width=\"80\" height=\"10\" rx=\"3\" fill=\"#e2e8f0\"/>\n    <rect x=\"30\" y=\"-35\" width=\"60\" height=\"24\" rx=\"3\" fill=\"#22c55e\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n    <text x=\"60\" y=\"-18\" font-size=\"10\" font-weight=\"black\" fill=\"#ffffff\" text-anchor=\"middle\">SALIDA</text>\n    <!-- Palets de madera apilados bloqueando físicamente la apertura -->\n    <g transform=\"translate(10, 70)\">\n      <rect x=\"0\" y=\"0\" width=\"95\" height=\"24\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"26\" width=\"95\" height=\"24\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"52\" width=\"95\" height=\"24\" rx=\"2\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <rect x=\"0\" y=\"78\" width=\"95\" height=\"24\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 5: OPERARIO CARGANDO 40KG CON ESPALDA DOBLADA -->\n  <g id=\"danger-espalda\" transform=\"translate(480, 270)\" class=\"cursor-pointer\" filter=\"url(#almShadow)\">\n    <rect x=\"30\" y=\"110\" width=\"14\" height=\"85\" fill=\"#1e3a8a\"/>\n    <rect x=\"48\" y=\"110\" width=\"14\" height=\"85\" fill=\"#1e3a8a\"/>\n    <g transform=\"translate(10, 60) rotate(-40)\">\n      <rect width=\"60\" height=\"34\" rx=\"6\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <path d=\"M10 20 L-10 60 L10 60\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"10\"/>\n      <!-- Caja pesada de 40 kg sin medios mecánicos -->\n      <rect x=\"-35\" y=\"45\" width=\"65\" height=\"50\" rx=\"3\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/>\n      <text x=\"-2\" y=\"75\" font-size=\"12\" font-weight=\"black\" fill=\"#fde047\" text-anchor=\"middle\">40 kg</text>\n      <!-- Rayos rojos de lesión lumbar -->\n      <path d=\"M-8 -6 L-16 -16 M-2 -8 L-5 -20\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </g>\n    <circle cx=\"2\" cy=\"70\" r=\"14\" fill=\"#fed7aa\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "alm-1",
        "num": 1,
        "name": "Palet deformado y ladeado en altura",
        "category": "Estanterías Industriales",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 22,
          "top": 18,
          "width": 22,
          "height": 26
        },
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
          "left": 36,
          "top": 68,
          "width": 26,
          "height": 22
        },
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
          "left": 64,
          "top": 46,
          "width": 28,
          "height": 38
        },
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
          "left": 4,
          "top": 48,
          "width": 14,
          "height": 48
        },
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
          "left": 46,
          "top": 42,
          "width": 14,
          "height": 32
        },
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
          "left": 32,
          "top": 54,
          "width": 10,
          "height": 10
        },
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
          "left": 14,
          "top": 32,
          "width": 20,
          "height": 36
        },
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
          "left": 74,
          "top": 16,
          "width": 18,
          "height": 40
        },
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
          "left": 2,
          "top": 14,
          "width": 16,
          "height": 50
        },
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
          "left": 36,
          "top": 62,
          "width": 18,
          "height": 24
        },
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
          "left": 48,
          "top": 32,
          "width": 16,
          "height": 32
        },
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
          "left": 56,
          "top": 48,
          "width": 8,
          "height": 18
        },
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
          "left": 18,
          "top": 66,
          "width": 20,
          "height": 8
        },
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
          "left": 74,
          "top": 58,
          "width": 8,
          "height": 12
        },
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
          "left": 80,
          "top": 34,
          "width": 6,
          "height": 8
        },
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
          "left": 70,
          "top": 82,
          "width": 18,
          "height": 18
        },
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
          "left": 32,
          "top": 10,
          "width": 10,
          "height": 12
        },
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
          "left": 2,
          "top": 46,
          "width": 6,
          "height": 8
        },
        "description": "Accionador rígido de apertura rápida en un solo movimiento hacia abajo.",
        "consequences": "Ninguna. Asegura caudal instantáneo de 60 l/min en caso de emergencia.",
        "regulation": "Cumple norma UNE-EN 15154-1.",
        "prevention": "Dispositivo de socorro reglamentario. Elemento seguro."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"labWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0f172a\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <linearGradient id=\"labFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n    <filter id=\"labShadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"3\" dy=\"5\" stdDeviation=\"4\" flood-color=\"#000000\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <!-- Pared alicatada de laboratorio -->\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#labWall)\"/>\n  <g stroke=\"#334155\" stroke-width=\"1\" opacity=\"0.35\">\n    <line x1=\"0\" y1=\"60\" x2=\"1000\" y2=\"60\"/><line x1=\"0\" y1=\"120\" x2=\"1000\" y2=\"120\"/><line x1=\"0\" y1=\"180\" x2=\"1000\" y2=\"180\"/><line x1=\"0\" y1=\"240\" x2=\"1000\" y2=\"240\"/>\n  </g>\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#labFloor)\"/>\n\n  <!-- Encimera fenólica de laboratorio con fregadero -->\n  <g transform=\"translate(180, 310)\" filter=\"url(#labShadow)\">\n    <rect x=\"0\" y=\"40\" width=\"600\" height=\"20\" rx=\"3\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <rect x=\"15\" y=\"60\" width=\"570\" height=\"130\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- PELIGRO 1: CAMPANA EXTRACTORA CON GUILLOTINA 100% ABIERTA Y VAPORES TÓXICOS -->\n  <g id=\"danger-campana\" transform=\"translate(220, 100)\" class=\"cursor-pointer\" filter=\"url(#labShadow)\">\n    <rect width=\"180\" height=\"230\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n    <rect x=\"15\" y=\"15\" width=\"150\" height=\"170\" fill=\"#0f172a\"/>\n    <!-- Guillotina de cristal subida al máximo en vez del límite de 30 cm -->\n    <rect x=\"15\" y=\"15\" width=\"150\" height=\"35\" fill=\"#38bdf8\" opacity=\"0.35\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <!-- Vaso de precipitados con vapor púrpura tóxico saliendo hacia el aula -->\n    <rect x=\"75\" y=\"130\" width=\"30\" height=\"42\" fill=\"#cbd5e1\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"90\" cy=\"130\" rx=\"15\" ry=\"4\" fill=\"#a855f7\" opacity=\"0.8\"/>\n    <!-- Nube de vapores escapando fuera de la campana -->\n    <path d=\"M90 125 Q70 90 85 60 Q100 20 135 15 Q175 10 205 45\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"5\" stroke-linecap=\"round\" opacity=\"0.85\"/>\n    <!-- Piloto rojo de alarma de caudal de aire en fallo -->\n    <circle cx=\"150\" cy=\"30\" r=\"4\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- PELIGRO 2: ARMARIO DE SEGURIDAD CON PRODUCTOS QUÍMICOS INCOMPATIBLES JUNTOS -->\n  <g id=\"danger-incompatibles\" transform=\"translate(760, 110)\" class=\"cursor-pointer\" filter=\"url(#labShadow)\">\n    <rect width=\"160\" height=\"240\" rx=\"4\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n    <line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"240\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n    <!-- Estantes con botellas de Ácido Nítrico y Disolventes orgánicos juntos -->\n    <rect x=\"15\" y=\"40\" width=\"130\" height=\"6\" fill=\"#ca8a04\"/>\n    <rect x=\"15\" y=\"120\" width=\"130\" height=\"6\" fill=\"#ca8a04\"/>\n    <!-- Botellas de ácido (corrosivo) e inflamable sin cubeto de retención -->\n    <rect x=\"25\" y=\"12\" width=\"22\" height=\"28\" rx=\"2\" fill=\"#ef4444\"/>\n    <rect x=\"55\" y=\"12\" width=\"22\" height=\"28\" rx=\"2\" fill=\"#eab308\"/>\n    <rect x=\"90\" y=\"12\" width=\"22\" height=\"28\" rx=\"2\" fill=\"#ef4444\"/>\n  </g>\n\n  <!-- PELIGRO 3: DUCHA Y LAVAOJOS BLOQUEADOS POR CARRO DE MATERIAL -->\n  <g id=\"danger-ducha\" transform=\"translate(20, 120)\" class=\"cursor-pointer\" filter=\"url(#labShadow)\">\n    <rect x=\"30\" y=\"0\" width=\"10\" height=\"150\" fill=\"#22c55e\"/>\n    <ellipse cx=\"35\" cy=\"15\" rx=\"25\" ry=\"10\" fill=\"#22c55e\" stroke=\"#15803d\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"50\" r=\"14\" fill=\"#22c55e\"/> <!-- Tirador triangular de emergencia -->\n    <!-- Carro metálico con cajas bloqueando el paso a la ducha -->\n    <g transform=\"translate(0, 120)\">\n      <rect width=\"80\" height=\"85\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <circle cx=\"15\" cy=\"90\" r=\"8\" fill=\"#0f172a\"/><circle cx=\"65\" cy=\"90\" r=\"8\" fill=\"#0f172a\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 4: MATRAZ ROTO CON DERRAME QUÍMICO EN ENCIMERA -->\n  <g id=\"danger-derrame\" transform=\"translate(460, 310)\" class=\"cursor-pointer\">\n    <path d=\"M10 38 Q40 25 80 35 Q130 30 150 45 Q120 58 70 55 Q20 58 10 38 Z\" fill=\"#22c55e\" opacity=\"0.85\"/>\n    <path d=\"M50 30 L65 10 L75 10 L90 30 Z\" fill=\"#e0f2fe\" stroke=\"#38bdf8\" stroke-width=\"1.5\" transform=\"rotate(45, 70, 25)\"/>\n    <circle cx=\"45\" cy=\"38\" r=\"3\" fill=\"#ffffff\" opacity=\"0.9\"/>\n  </g>\n\n  <!-- PELIGRO 5: PIPETEO BUCAL SIN EPI -->\n  <g id=\"danger-pipeteo\" transform=\"translate(580, 210)\" class=\"cursor-pointer\" filter=\"url(#labShadow)\">\n    <circle cx=\"35\" cy=\"25\" r=\"16\" fill=\"#fed7aa\"/>\n    <rect x=\"20\" y=\"45\" width=\"40\" height=\"80\" rx=\"4\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n    <!-- Pipeta de cristal en la boca -->\n    <line x1=\"30\" y1=\"28\" x2=\"0\" y2=\"70\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "lab-1",
        "num": 1,
        "name": "Guillotina de campana extractora abierta",
        "category": "Riesgo Químico",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 14,
          "top": 32,
          "width": 20,
          "height": 36
        },
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
          "left": 74,
          "top": 16,
          "width": 18,
          "height": 40
        },
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
          "left": 2,
          "top": 14,
          "width": 16,
          "height": 50
        },
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
          "left": 36,
          "top": 62,
          "width": 18,
          "height": 24
        },
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
          "left": 48,
          "top": 32,
          "width": 16,
          "height": 32
        },
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
          "left": 32,
          "top": 10,
          "width": 10,
          "height": 12
        },
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
          "left": 10,
          "top": 38,
          "width": 18,
          "height": 25
        },
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
          "left": 40,
          "top": 74,
          "width": 24,
          "height": 22
        },
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
          "left": 42,
          "top": 12,
          "width": 35,
          "height": 26
        },
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
          "left": 78,
          "top": 66,
          "width": 16,
          "height": 25
        },
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
          "left": 64,
          "top": 52,
          "width": 15,
          "height": 20
        },
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
          "left": 16,
          "top": 70,
          "width": 15,
          "height": 16
        },
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
          "left": 38,
          "top": 42,
          "width": 12,
          "height": 8
        },
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
          "left": 74,
          "top": 34,
          "width": 8,
          "height": 16
        },
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
          "left": 24,
          "top": 82,
          "width": 8,
          "height": 8
        },
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
          "left": 56,
          "top": 30,
          "width": 8,
          "height": 22
        },
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
          "left": 26,
          "top": 52,
          "width": 10,
          "height": 10
        },
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
          "left": 2,
          "top": 56,
          "width": 8,
          "height": 10
        },
        "description": "Bisel afilado del disco de 300 mm expuesto durante la rotación continua.",
        "consequences": "Sección de tendones y nervios en mano por proximidad involuntaria.",
        "regulation": "RD 1215/1997. Los órganos móviles deben estar provistos de resguardos.",
        "prevention": "Colocar el protector de anillo perimetral y el empujador de producto."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"cocWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/><stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n    <linearGradient id=\"cocFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#991b1b\"/><stop offset=\"50%\" stop-color=\"#b91c1c\"/><stop offset=\"100%\" stop-color=\"#7f1d1d\"/>\n    </linearGradient>\n    <linearGradient id=\"inox\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/><stop offset=\"30%\" stop-color=\"#f8fafc\"/><stop offset=\"70%\" stop-color=\"#cbd5e1\"/><stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </linearGradient>\n    <filter id=\"cocShadow\">\n      <feDropShadow dx=\"3\" dy=\"5\" stdDeviation=\"4\" flood-opacity=\"0.35\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"320\" fill=\"url(#cocWall)\"/>\n  <rect x=\"0\" y=\"320\" width=\"1000\" height=\"280\" fill=\"url(#cocFloor)\"/>\n  <g stroke=\"#450a0a\" stroke-width=\"2\" opacity=\"0.4\">\n    <line x1=\"0\" y1=\"400\" x2=\"1000\" y2=\"400\"/><line x1=\"0\" y1=\"490\" x2=\"1000\" y2=\"490\"/>\n    <line x1=\"200\" y1=\"320\" x2=\"80\" y2=\"600\"/><line x1=\"500\" y1=\"320\" x2=\"450\" y2=\"600\"/><line x1=\"800\" y1=\"320\" x2=\"820\" y2=\"600\"/>\n  </g>\n\n  <!-- Campana extractora industrial -->\n  <g transform=\"translate(380, 40)\" filter=\"url(#cocShadow)\">\n    <polygon points=\"0,90 320,90 280,0 40,0\" fill=\"url(#inox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- PELIGRO 3: GRASA CHORREANDO DE LOS FILTROS HACIA LOS FOGONES -->\n    <path d=\"M60 90 Q65 125 60 145\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M160 90 Q165 130 160 155\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M260 90 Q265 120 260 140\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n  </g>\n\n  <!-- Fogones y freidora industrial -->\n  <g transform=\"translate(380, 230)\" filter=\"url(#cocShadow)\">\n    <rect width=\"320\" height=\"120\" rx=\"4\" fill=\"url(#inox)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <circle cx=\"70\" cy=\"20\" r=\"28\" fill=\"#1e293b\"/>\n    <circle cx=\"70\" cy=\"20\" r=\"14\" fill=\"#0284c7\" opacity=\"0.8\"/> <!-- Llama de gas -->\n    <circle cx=\"160\" cy=\"20\" r=\"28\" fill=\"#1e293b\"/>\n    <rect x=\"230\" y=\"8\" width=\"70\" height=\"45\" rx=\"3\" fill=\"#eab308\" opacity=\"0.85\"/> <!-- Freidora burbujeando -->\n  </g>\n\n  <!-- PELIGRO 1: CORTAFIAMBRES CON DISCO EXPUESTO EN MARCHA -->\n  <g id=\"danger-cortafiambres\" transform=\"translate(160, 270)\" class=\"cursor-pointer\" filter=\"url(#cocShadow)\">\n    <rect x=\"0\" y=\"40\" width=\"160\" height=\"15\" fill=\"url(#inox)\"/>\n    <rect x=\"30\" y=\"0\" width=\"85\" height=\"42\" rx=\"4\" fill=\"url(#inox)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Disco de acero sin carcasa de seguridad -->\n    <circle cx=\"115\" cy=\"15\" r=\"28\" fill=\"#f8fafc\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n    <circle cx=\"115\" cy=\"15\" r=\"6\" fill=\"#475569\"/>\n  </g>\n\n  <!-- PELIGRO 2: CHARCO DE GRASA Y AGUA FRENTE A FREIDORA -->\n  <g id=\"danger-grasa\" transform=\"translate(420, 420)\" class=\"cursor-pointer\">\n    <path d=\"M20 50 C60 25, 180 20, 230 45 C270 70, 240 105, 180 115 C100 125, 20 100, 10 70 Z\" fill=\"#eab308\" opacity=\"0.75\" stroke=\"#ca8a04\"/>\n  </g>\n\n  <!-- PELIGRO 4: ENCHUFE TRIFÁSICO EN CONTACTO CON AGUA -->\n  <g id=\"danger-enchufe\" transform=\"translate(770, 360)\" class=\"cursor-pointer\" filter=\"url(#cocShadow)\">\n    <rect width=\"80\" height=\"24\" rx=\"4\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n    <path d=\"M40 24 Q30 80 50 110\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n    <ellipse cx=\"50\" cy=\"115\" rx=\"35\" ry=\"15\" fill=\"#38bdf8\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- PELIGRO 5: TABLAS DE MADERA CONTAMINADAS -->\n  <g id=\"danger-tablas\" transform=\"translate(680, 280)\" class=\"cursor-pointer\" filter=\"url(#cocShadow)\">\n    <rect width=\"85\" height=\"14\" rx=\"2\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"1.5\"/>\n    <circle cx=\"30\" cy=\"4\" r=\"5\" fill=\"#ef4444\"/> <!-- Carne cruda -->\n    <circle cx=\"60\" cy=\"4\" r=\"5\" fill=\"#22c55e\"/> <!-- Verdura en la misma tabla -->\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "coc-1",
        "num": 1,
        "name": "Cortafiambres con cuchilla expuesta",
        "category": "Equipos de Trabajo",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 10,
          "top": 38,
          "width": 18,
          "height": 25
        },
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
          "left": 40,
          "top": 74,
          "width": 24,
          "height": 22
        },
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
          "left": 42,
          "top": 12,
          "width": 35,
          "height": 26
        },
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
          "left": 78,
          "top": 66,
          "width": 16,
          "height": 25
        },
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
          "left": 64,
          "top": 52,
          "width": 15,
          "height": 20
        },
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
          "left": 2,
          "top": 56,
          "width": 8,
          "height": 10
        },
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
          "left": 38,
          "top": 22,
          "width": 32,
          "height": 52
        },
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
          "left": 16,
          "top": 38,
          "width": 18,
          "height": 22
        },
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
          "left": 74,
          "top": 26,
          "width": 16,
          "height": 45
        },
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
          "left": 40,
          "top": 68,
          "width": 35,
          "height": 24
        },
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
          "left": 74,
          "top": 58,
          "width": 16,
          "height": 28
        },
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
          "left": 58,
          "top": 22,
          "width": 4,
          "height": 45
        },
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
          "left": 14,
          "top": 66,
          "width": 18,
          "height": 16
        },
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
          "left": 86,
          "top": 14,
          "width": 8,
          "height": 10
        },
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
          "left": 2,
          "top": 52,
          "width": 10,
          "height": 22
        },
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
          "left": 66,
          "top": 78,
          "width": 20,
          "height": 18
        },
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
          "left": 52,
          "top": 42,
          "width": 6,
          "height": 6
        },
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
          "left": 24,
          "top": 56,
          "width": 8,
          "height": 8
        },
        "description": "Disco abrasivo con muescas y grieta visible montado en el eje de la radial.",
        "consequences": "Desintegración centrífuga instantánea del disco a 6.000 rpm.",
        "regulation": "RD 1215/1997 y norma EN 12413 sobre productos abrasivos aglomerados.",
        "prevention": "Rechazar discos golpeados y comprobar siempre la velocidad máxima antes de montar."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"talWall\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/>\n    </linearGradient>\n    <linearGradient id=\"talFloor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/><stop offset=\"100%\" stop-color=\"#1e293b\"/>\n    </linearGradient>\n    <filter id=\"talShadow\">\n      <feDropShadow dx=\"3\" dy=\"6\" stdDeviation=\"5\" flood-opacity=\"0.4\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"340\" fill=\"url(#talWall)\"/>\n  <rect x=\"0\" y=\"340\" width=\"1000\" height=\"260\" fill=\"url(#talFloor)\"/>\n\n  <!-- PELIGRO 2: PUENTE ELEVADOR CON COCHE SIN TRINQUETE DE SEGURIDAD -->\n  <g id=\"danger-elevador\" transform=\"translate(420, 110)\" class=\"cursor-pointer\" filter=\"url(#talShadow)\">\n    <!-- Columnas azules del elevador de 2 postes -->\n    <rect x=\"0\" y=\"0\" width=\"22\" height=\"350\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <rect x=\"260\" y=\"0\" width=\"22\" height=\"350\" fill=\"#0284c7\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n    <!-- Coche elevado a 1.8m -->\n    <g transform=\"translate(10, 40)\">\n      <path d=\"M20 70 Q50 30 110 25 Q180 20 230 70 Z\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <rect x=\"10\" y=\"70\" width=\"240\" height=\"35\" rx=\"6\" fill=\"#ef4444\"/>\n      <circle cx=\"50\" cy=\"105\" r=\"22\" fill=\"#0f172a\"/><circle cx=\"210\" cy=\"105\" r=\"22\" fill=\"#0f172a\"/>\n    </g>\n    <!-- Brazos de elevación sin el pasador de bloqueo mecánico echado -->\n    <line x1=\"20\" y1=\"175\" x2=\"260\" y2=\"175\" stroke=\"#facc15\" stroke-width=\"10\"/>\n  </g>\n\n  <!-- PELIGRO 1: AMOLADORA (RADIAL) SIN PROTECTOR DE DISCO -->\n  <g id=\"danger-radial\" transform=\"translate(180, 310)\" class=\"cursor-pointer\" filter=\"url(#talShadow)\">\n    <rect width=\"180\" height=\"20\" rx=\"3\" fill=\"#64748b\"/>\n    <g transform=\"translate(40, -15)\">\n      <rect x=\"0\" y=\"0\" width=\"70\" height=\"24\" rx=\"4\" fill=\"#0284c7\"/>\n      <!-- Disco abrasivo completamente descubierto sin carcasa -->\n      <circle cx=\"85\" cy=\"12\" r=\"24\" fill=\"#334155\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- PELIGRO 3: BOTELLAS DE OXICORTE SIN VÁLVULA ANTIRRETROCESO -->\n  <g id=\"danger-oxicorte\" transform=\"translate(800, 180)\" class=\"cursor-pointer\" filter=\"url(#talShadow)\">\n    <rect x=\"10\" y=\"60\" width=\"30\" height=\"180\" rx=\"10\" fill=\"#0284c7\"/> <!-- Oxígeno -->\n    <rect x=\"45\" y=\"80\" width=\"35\" height=\"160\" rx=\"10\" fill=\"#b91c1c\"/> <!-- Acetileno -->\n    <path d=\"M25 60 Q10 20 60 40\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\"/> <!-- Manguera agrietada -->\n  </g>\n\n  <!-- PELIGRO 4: FOSO DE INSPECCIÓN ABIERTO SIN VALLA -->\n  <g id=\"danger-foso\" transform=\"translate(80, 440)\" class=\"cursor-pointer\">\n    <polygon points=\"0,0 280,0 260,120 20,120\" fill=\"#09090b\" stroke=\"#facc15\" stroke-width=\"4\" stroke-dasharray=\"15,10\"/>\n  </g>\n\n  <!-- PELIGRO 5: CUBA DE DESENGRASE ABIERTA -->\n  <g id=\"danger-cuba\" transform=\"translate(20, 260)\" class=\"cursor-pointer\" filter=\"url(#talShadow)\">\n    <rect width=\"90\" height=\"80\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n    <ellipse cx=\"45\" cy=\"10\" rx=\"40\" ry=\"10\" fill=\"#0284c7\" opacity=\"0.8\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "tal-1",
        "num": 1,
        "name": "Coche elevado sin seguro mecánico",
        "category": "Aparatos de Elevación",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 38,
          "top": 22,
          "width": 32,
          "height": 52
        },
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
          "left": 16,
          "top": 38,
          "width": 18,
          "height": 22
        },
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
          "left": 74,
          "top": 26,
          "width": 16,
          "height": 45
        },
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
          "left": 40,
          "top": 68,
          "width": 35,
          "height": 24
        },
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
          "left": 74,
          "top": 58,
          "width": 16,
          "height": 28
        },
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
          "left": 24,
          "top": 56,
          "width": 8,
          "height": 8
        },
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
          "left": 34,
          "top": 38,
          "width": 22,
          "height": 25
        },
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
          "left": 82,
          "top": 52,
          "width": 18,
          "height": 35
        },
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
          "left": 58,
          "top": 12,
          "width": 15,
          "height": 32
        },
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
          "top": 46,
          "width": 14,
          "height": 42
        },
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
          "left": 18,
          "top": 54,
          "width": 20,
          "height": 15
        },
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
          "left": 4,
          "top": 68,
          "width": 6,
          "height": 28
        },
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
          "left": 90,
          "top": 34,
          "width": 7,
          "height": 20
        },
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
          "left": 74,
          "top": 38,
          "width": 6,
          "height": 6
        },
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
          "left": 68,
          "top": 66,
          "width": 8,
          "height": 6
        },
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
          "left": 40,
          "top": 14,
          "width": 14,
          "height": 8
        },
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
          "left": 24,
          "top": 70,
          "width": 14,
          "height": 16
        },
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
          "left": 70,
          "top": 22,
          "width": 8,
          "height": 10
        },
        "description": "Ladrillos sueltos con fractura que cederán ante cualquier esfuerzo horizontal.",
        "consequences": "Derrumbe del tiro de chimenea cayendo hacia el interior o exterior del edificio.",
        "regulation": "RD 1627/1997 sobre seguridad en obras.",
        "prevention": "Saneamiento y consolidación estructural antes de cualquier trabajo cercano."
      }
    ],
    "svgContent": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-full select-none\">\n  <defs>\n    <linearGradient id=\"skyAlt\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\"/><stop offset=\"50%\" stop-color=\"#38bdf8\"/><stop offset=\"100%\" stop-color=\"#bae6fd\"/>\n    </linearGradient>\n    <linearGradient id=\"tilesRoof\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#c2410c\"/><stop offset=\"50%\" stop-color=\"#ea580c\"/><stop offset=\"100%\" stop-color=\"#9a3412\"/>\n    </linearGradient>\n    <filter id=\"altShadow\">\n      <feDropShadow dx=\"3\" dy=\"5\" stdDeviation=\"4\" flood-opacity=\"0.35\"/>\n    </filter>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" width=\"1000\" height=\"600\" fill=\"url(#skyAlt)\"/>\n  \n  <!-- Cubierta inclinada de teja cerámica -->\n  <polygon points=\"0,320 1000,180 1000,600 0,600\" fill=\"url(#tilesRoof)\"/>\n  <g stroke=\"#7c2d12\" stroke-width=\"2\" opacity=\"0.5\">\n    <line x1=\"0\" y1=\"360\" x2=\"1000\" y2=\"220\"/><line x1=\"0\" y1=\"410\" x2=\"1000\" y2=\"270\"/>\n    <line x1=\"0\" y1=\"460\" x2=\"1000\" y2=\"320\"/><line x1=\"0\" y1=\"510\" x2=\"1000\" y2=\"370\"/>\n  </g>\n\n  <!-- PELIGRO 3: LÍNEA DE VIDA ATADA A CHIMENEA PRECARIA -->\n  <g id=\"danger-chimenea\" transform=\"translate(630, 90)\" class=\"cursor-pointer\" filter=\"url(#altShadow)\">\n    <rect width=\"90\" height=\"130\" fill=\"#991b1b\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n    <!-- Grietas profundas en el ladrillo -->\n    <path d=\"M20 20 L40 50 L30 80 M60 40 L75 70\" stroke=\"#000000\" stroke-width=\"2.5\" fill=\"none\"/>\n    <!-- Cuerda amarrada a la chimenea que no resistirá un impacto de 12 kN -->\n    <ellipse cx=\"45\" cy=\"70\" rx=\"50\" ry=\"12\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"6\"/>\n  </g>\n\n  <!-- PELIGRO 1: LUCERNARIO FRÁGIL SIN RED ANTICAÍDAS -->\n  <g id=\"danger-lucernario\" transform=\"translate(380, 240)\" class=\"cursor-pointer\" filter=\"url(#altShadow)\">\n    <polygon points=\"0,60 160,35 180,110 20,135\" fill=\"#38bdf8\" opacity=\"0.5\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n    <path d=\"M40 80 L70 95 L95 85\" stroke=\"#ef4444\" stroke-width=\"3\" fill=\"none\"/> <!-- Plástico quebrado -->\n  </g>\n\n  <!-- PELIGRO 2: TRABAJADOR AL BORDE DEL VACÍO SIN ARNÉS CONECTADO -->\n  <g id=\"danger-vacio\" transform=\"translate(800, 240)\" class=\"cursor-pointer\" filter=\"url(#altShadow)\">\n    <circle cx=\"25\" cy=\"20\" r=\"14\" fill=\"#fed7aa\"/>\n    <rect x=\"10\" y=\"34\" width=\"30\" height=\"60\" rx=\"4\" fill=\"#ea580c\"/>\n    <!-- Al borde justo de la caída libre de 12 metros -->\n    <line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"150\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"6,4\"/>\n  </g>\n\n  <!-- PELIGRO 4: ESCALERA QUE NO SOBREPASA 1 METRO -->\n  <g id=\"danger-escalera-altura\" transform=\"translate(40, 290)\" class=\"cursor-pointer\" filter=\"url(#altShadow)\">\n    <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"280\" stroke=\"#94a3b8\" stroke-width=\"6\"/>\n    <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"280\" stroke=\"#94a3b8\" stroke-width=\"6\"/>\n    <line x1=\"20\" y1=\"50\" x2=\"50\" y2=\"50\" stroke=\"#cbd5e1\" stroke-width=\"4\"/>\n    <line x1=\"20\" y1=\"90\" x2=\"50\" y2=\"90\" stroke=\"#cbd5e1\" stroke-width=\"4\"/>\n  </g>\n</svg>",
    "hazards": [
      {
        "id": "alt-1",
        "num": 1,
        "name": "Lucernario de plástico frágil sin red",
        "category": "Superficies Frágiles",
        "isHazard": true,
        "severity": "Muy Grave",
        "rect": {
          "left": 34,
          "top": 38,
          "width": 22,
          "height": 25
        },
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
          "left": 82,
          "top": 52,
          "width": 18,
          "height": 35
        },
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
          "left": 58,
          "top": 12,
          "width": 15,
          "height": 32
        },
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
          "top": 46,
          "width": 14,
          "height": 42
        },
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
          "left": 24,
          "top": 70,
          "width": 14,
          "height": 16
        },
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
          "left": 70,
          "top": 22,
          "width": 8,
          "height": 10
        },
        "description": "Ladrillos sueltos con fractura que cederán ante cualquier esfuerzo horizontal.",
        "consequences": "Derrumbe del tiro de chimenea cayendo hacia el interior o exterior del edificio.",
        "regulation": "RD 1627/1997 sobre seguridad en obras.",
        "prevention": "Saneamiento y consolidación estructural antes de cualquier trabajo cercano."
      }
    ]
  }
];
