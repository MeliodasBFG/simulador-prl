const fs = require('fs');
const path = require('path');

// Reutilizamos los SVGs realistas que ya tienen excelente nivel gráfico
require('./generate_rich_scenarios.js');
global.window = {};
require('./js/scenarios.js');
const baseData = global.window.PRL_SCENARIOS || [];

// ============================================================================
// BASE DE DATOS DE ESCENARIOS ESTILO PÓSTER FORMATIVO (COMO IMAGEN DE REFERENCIA)
// Cada escenario cuenta con 12 OBJETOS CONCRETOS NUMERADOS con su etiqueta.
// Incluye RIESGOS VERDADEROS y RIESGOS FALSOS (ELEMENTOS SEGUROS) para evaluar.
// ============================================================================

const scenariosConfig = [
  // --------------------------------------------------------------------------
  // 1. HOSPITAL Y URGENCIAS
  // --------------------------------------------------------------------------
  {
    id: 'hospital',
    name: 'Hospital y Urgencias',
    subtitle: 'Atención Sanitaria y Hospitalización',
    description: 'Área clínica de urgencias con pacientes, gases medicinales, instrumental punzante y residuos.',
    badgeColor: 'sky',
    icon: 'heart-pulse',
    timeLimit: 90,
    items: [
      {
        id: 'hosp-1',
        num: 1,
        name: 'Botella de Oxígeno medicinal',
        category: 'Equipos a Presión',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 78, top: 20, width: 15, height: 48 },
        description: 'Botella de gas comprimido a 200 bar de pie sin cadena mural de amarre.',
        consequences: 'Vuelco violento, rotura de válvula y proyectil a alta presión descontrolado.',
        regulation: 'Real Decreto 2060/2008 (ITC-EP-6). Fijación vertical obligatoria con cadena.',
        prevention: 'Fijar a pared con doble cadena o trasladar en carro portabotellas con abrazadera.'
      },
      {
        id: 'hosp-2',
        num: 2,
        name: 'Pasamanos continuo de pared',
        category: 'Instalaciones Seguras',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 14, top: 34, width: 30, height: 6 },
        description: 'Pasamanos hospitalario continuo de madera con soportes de acero inoxidable a 90 cm.',
        consequences: 'Ninguna. Proporciona estabilidad y punto de apoyo seguro para el tránsito de pacientes.',
        regulation: 'Cumple el RD 486/1997 sobre lugares de trabajo y normativa de accesibilidad.',
        prevention: 'Elemento seguro de protección pasiva. No constituye ningún riesgo laboral.'
      },
      {
        id: 'hosp-3',
        num: 3,
        name: 'Aguja hipodérmica en batea',
        category: 'Riesgo Biológico',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 8, top: 56, width: 16, height: 24 },
        description: 'Aguja de punción usada con restos de sangre abandonada sin capuchón sobre mesa auxiliar.',
        consequences: 'Pinchazo accidental e inoculación de patógenos hemáticos (VIH, Hepatitis B y C).',
        regulation: 'Orden ESS/1451/2013 y RD 664/1997. Prohibición de dejar agujas desnudas sin contenedor.',
        prevention: 'Desechar inmediatamente en contenedor rígido de punzantes sin manipulación intermedia.'
      },
      {
        id: 'hosp-4',
        num: 4,
        name: 'Camilla de traslado sin frenos',
        category: 'Seguridad en Transporte',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 46, top: 48, width: 26, height: 26 },
        description: 'Camilla en zona de paso con pedales de freno levantados (libres) y barandilla bajada.',
        consequences: 'Desplazamiento involuntario por la pendiente y caída del paciente al suelo.',
        regulation: 'RD 1215/1997 sobre equipos de trabajo y protocolos clínicos de seguridad.',
        prevention: 'Enclavar siempre los frenos de ruedas en reposo y subir las barandillas laterales.'
      },
      {
        id: 'hosp-5',
        num: 5,
        name: 'Panel de cabecero de gases medicinales',
        category: 'Instalaciones Técnicas',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 42, top: 14, width: 26, height: 9 },
        description: 'Tomas rápidas DIN normalizadas de O2, Vacío y Aire con marcado CE y código de colores.',
        consequences: 'Ninguna. Suministro seguro y estanco de gases clínicos a baja presión.',
        regulation: 'Cumple norma UNE-EN ISO 7396-1 sobre sistemas de canalización de gases medicinales.',
        prevention: 'Instalación técnica reglamentaria y segura. No constituye ningún riesgo laboral.'
      },
      {
        id: 'hosp-6',
        num: 6,
        name: 'Bolsa de residuos biosanitarios rota',
        category: 'Residuos Peligrosos',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 40, top: 76, width: 22, height: 26 },
        description: 'Bolsa amarilla Grupo III de residuos infecciosos rota con derrame de fluidos en el suelo.',
        consequences: 'Contaminación biológica por contacto y riesgo de resbalón sobre fluidos orgánicos.',
        regulation: 'RD 664/1997 sobre agentes biológicos y legislación autonómica de residuos sanitarios.',
        prevention: 'Utilizar bolsas de galga reforzada y recoger de inmediato con kit de derrames biológicos.'
      },
      {
        id: 'hosp-7',
        num: 7,
        name: 'Soporte de gotero IV en cabecero',
        category: 'Material Sanitario',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 62, top: 32, width: 6, height: 22 },
        description: 'Mástil telescópico con bolsa de suero fisiológico herméticamente cerrada.',
        consequences: 'Ninguna. Material plástico estéril sin bordes cortantes correctamente suspendido.',
        regulation: 'Cumple estándares de producto sanitario con marcado CE.',
        prevention: 'Elemento médico habitual en uso correcto. No constituye ningún peligro.'
      },
      {
        id: 'hosp-8',
        num: 8,
        name: 'Celador en sobreesfuerzo lumbar',
        category: 'Ergonomía Sanitaria',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 28, top: 48, width: 18, height: 36 },
        description: 'Trabajador doblando la columna en 90° levantando carga solo sin flexionar piernas.',
        consequences: 'Lumbalgia aguda, protusión discal y microtraumatismos repetitivos en columna.',
        regulation: 'RD 487/1997 sobre manipulación manual de cargas y Guía Técnica del INSST.',
        prevention: 'Usar grúas de bipedestación o transferencias asistidas y flexionar las rodillas.'
      },
      {
        id: 'hosp-9',
        num: 9,
        name: 'Luminaria LED estanca empotrada',
        category: 'Iluminación Hospitalaria',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 18, top: 10, width: 16, height: 6 },
        description: 'Panel LED en falso techo con difusor opal antideslumbramiento (UGR<19, 500 lux).',
        consequences: 'Ninguna. Proporciona iluminación idónea para tareas de exploración médica.',
        regulation: 'Cumple el RD 486/1997 (Anexo IV sobre iluminación de lugares de trabajo).',
        prevention: 'Instalación de alumbrado reglamentaria. No constituye ningún riesgo laboral.'
      },
      {
        id: 'hosp-10',
        num: 10,
        name: 'Enchufes schuko grado médico verdes',
        category: 'Instalación Eléctrica',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 68, top: 42, width: 6, height: 6 },
        description: 'Bases de enchufe con aislamiento de quirófano protegidas por transformador de aislamiento.',
        consequences: 'Ninguna. Máxima seguridad eléctrica para aparamenta electromédica de soporte vital.',
        regulation: 'Cumple el Reglamento Electrotécnico de Baja Tensión (ITC-BT-38).',
        prevention: 'Sistema de protección eléctrica especial hospitalaria. Elemento seguro.'
      },
      {
        id: 'hosp-11',
        num: 11,
        name: 'Suelo vinílico conductivo limpio',
        category: 'Pavimentos Sanitarios',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 76, top: 78, width: 22, height: 16 },
        description: 'Pavimento continuo antibacteriano sin desniveles ni juntas abiertas.',
        consequences: 'Ninguna. Evita acumulación de cargas electrostáticas y facilita la desinfección.',
        regulation: 'Cumple RD 486/1997 sobre suelos lisos, no resbaladizos y de fácil limpieza.',
        prevention: 'Superficie de tránsito adecuada. Elemento seguro.'
      },
      {
        id: 'hosp-12',
        num: 12,
        name: 'Pedal de freno de camilla levantado',
        category: 'Mecanismos de Bloqueo',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 56, top: 66, width: 8, height: 10 },
        description: 'Mecanismo de freno centralizado en posición libre/abierta.',
        consequences: 'Falta de inmovilización del equipo rodante durante la transferencia del paciente.',
        regulation: 'RD 1215/1997 sobre órganos de accionamiento y frenado de equipos móviles.',
        prevention: 'Pisar el pedal rojo para accionar el bloqueo de rueda y de giro antes de soltar la camilla.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 2. OFICINA Y DESPACHOS (ESTILO LÁMINA IMAGEN 2)
  // --------------------------------------------------------------------------
  {
    id: 'oficina',
    name: 'Oficina y Despachos',
    subtitle: 'Administración y Gestión Corporativa',
    description: 'Espacio de trabajo administrativo común con equipos ofimáticos, tránsito, archivadores y medios de protección.',
    badgeColor: 'sky',
    icon: 'briefcase',
    timeLimit: 90,
    items: [
      {
        id: 'ofi-1',
        num: 1,
        name: 'Cables sueltos cruzando pasillo',
        category: 'Orden y Limpieza',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 38, top: 72, width: 28, height: 22 },
        description: 'Cables de alimentación eléctrica y red cruzando libremente el suelo en el pasillo principal.',
        consequences: 'Tropiezos, caídas al mismo nivel con contusiones o fracturas óseas.',
        regulation: 'Real Decreto 486/1997 (Anexo I). Las zonas de paso deben permanecer expeditas.',
        prevention: 'Canalizar el cableado mediante pasacables de suelo homologados de goma biselada.'
      },
      {
        id: 'ofi-2',
        num: 2,
        name: 'Archivador con cajones abiertos',
        category: 'Estabilidad de Equipos',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 42, top: 34, width: 14, height: 35 },
        description: 'Archivador alto con cajones superiores abiertos al límite venciendo hacia adelante sin anclaje.',
        consequences: 'Vuelco del armario metálico sobre el trabajador con traumatismos graves por aplastamiento.',
        regulation: 'RD 486/1997 y NTP 481 del INSST sobre orden y prevención de vuelcos.',
        prevention: 'Anclar a la pared e instalar guías con bloqueo antivuelco de apertura simultánea.'
      },
      {
        id: 'ofi-3',
        num: 3,
        name: 'Taza de café derramada en regleta',
        category: 'Riesgo Eléctrico',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 16, top: 58, width: 18, height: 24 },
        description: 'Líquido conductor fluyendo directamente hacia los orificios de una regleta con enchufes activos.',
        consequences: 'Electrocución por contacto indirecto, cortocircuito y conato de incendio en moqueta.',
        regulation: 'RD 614/2001 sobre riesgo eléctrico y RD 486/1997.',
        prevention: 'Prohibir líquidos sobre equipos eléctricos y suspender regletas bajo tablero en bandejas.'
      },
      {
        id: 'ofi-4',
        num: 4,
        name: 'Extintor bloqueado por cajas',
        category: 'Protección contra Incendios',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 4, top: 26, width: 17, height: 48 },
        description: 'Pila de 4 cajas de cartón apiladas impidiendo acceder rápidamente al extintor mural.',
        consequences: 'Pérdida de minutos vitales para sofocar un fuego incipiente y propagación del humo.',
        regulation: 'RD 513/2017 (Reglamento de instalaciones de protección contra incendios).',
        prevention: 'Mantener un perímetro libre de obstáculos de al menos 1 metro alrededor de los extintores.'
      },
      {
        id: 'ofi-5',
        num: 5,
        name: 'Puesto informático con monitor curvo',
        category: 'Equipos Ergonómicos',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 24, top: 44, width: 18, height: 25 },
        description: 'Monitor situado a la distancia correcta (55 cm) a la altura de los ojos con teclado y ratón.',
        consequences: 'Ninguna. Favorece la alineación cervical neutra y reduce la fatiga visual.',
        regulation: 'Cumple el Real Decreto 488/1997 sobre pantallas de visualización de datos (PVD).',
        prevention: 'Puesto ofimático bien configurado. Elemento seguro.'
      },
      {
        id: 'ofi-6',
        num: 6,
        name: 'Silla rota con rueda desprendida',
        category: 'Mobiliario de Trabajo',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 56, top: 54, width: 14, height: 25 },
        description: 'Silla con respaldo desajustado hacia atrás y base de 5 radios con una rueda partida suelta.',
        consequences: 'Caída brusca hacia atrás del usuario al sentarse o girar y lesiones en cóccix y lumbares.',
        regulation: 'RD 488/1997 (Anexo). Las sillas deben ser estables, regulables y con 5 ruedas en perfecto estado.',
        prevention: 'Retirar inmediatamente del servicio y sustituir por silla ergonómica certificada EN 1335.'
      },
      {
        id: 'ofi-7',
        num: 7,
        name: 'Ventanal exterior con persiana veneciana',
        category: 'Confort Lumínico',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 20, top: 14, width: 30, height: 28 },
        description: 'Ventanal doble cristal con lamas orientables para modular la luz natural y evitar reflejos.',
        consequences: 'Ninguna. Asegura renovación de luz natural conforme a estándares de bienestar.',
        regulation: 'Cumple el RD 486/1997 sobre iluminación natural y acondicionamiento ambiental.',
        prevention: 'Elemento arquitectónico seguro.'
      },
      {
        id: 'ofi-8',
        num: 8,
        name: 'Papelera metálica de oficina',
        category: 'Mobiliario Auxiliar',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 6, top: 76, width: 8, height: 14 },
        description: 'Papelera para residuos de papel fuera del pasillo de tránsito.',
        consequences: 'Ninguna. Mantiene el orden y limpieza del puesto de trabajo.',
        regulation: 'Cumple normas de orden y limpieza del RD 486/1997.',
        prevention: 'Elemento seguro.'
      },
      {
        id: 'ofi-9',
        num: 9,
        name: 'Moqueta técnica ignífuga',
        category: 'Pavimentos',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 74, top: 76, width: 18, height: 18 },
        description: 'Suelo técnico con baldosas de moqueta bien pegadas sin pestañas levantadas.',
        consequences: 'Ninguna. Proporciona aislamiento acústico y coeficiente de fricción antideslizante.',
        regulation: 'Cumple Código Técnico de la Edificación (DB-SI y DB-SUA).',
        prevention: 'Elemento constructivo seguro.'
      },
      {
        id: 'ofi-10',
        num: 10,
        name: 'Portátil muy bajo con flexión cervical',
        category: 'Ergonomía',
        isHazard: true,
        severity: 'Leve',
        rect: { left: 68, top: 38, width: 12, height: 15 },
        description: 'Portátil colocado plano sobre la mesa obligando a inclinar el cuello más de 30°.',
        consequences: 'Sobrecarga trapecial, contracturas musculares y síndrome del túnel carpiano.',
        regulation: 'RD 488/1997 y Guía Técnica del INSST sobre ergonomía en pantallas.',
        prevention: 'Utilizar atril elevador de portátil, teclado independiente y reposamuñecas.'
      },
      {
        id: 'ofi-11',
        num: 11,
        name: 'Planta natural decorativa',
        category: 'Ambiente de Trabajo',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 90, top: 48, width: 7, height: 24 },
        description: 'Planta de interior en tiesto de base ancha estable situada fuera de las vías de paso.',
        consequences: 'Ninguna. Mejora el ambiente psicosocial y oxigenación sin interferir.',
        regulation: 'Totalmente conforme con normas de seguridad.',
        prevention: 'Elemento seguro.'
      },
      {
        id: 'ofi-12',
        num: 12,
        name: 'Regleta eléctrica sobrecargada en suelo',
        category: 'Riesgo Eléctrico',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 34, top: 82, width: 12, height: 10 },
        description: 'Múltiples adaptadores y transformadores conectados en cascada en una misma base.',
        consequences: 'Sobrecalentamiento térmico del conductor e inicio de ignición.',
        regulation: 'Reglamento Electrotécnico de Baja Tensión (REBT). Prohibición de enchufes en cascada.',
        prevention: 'Calcular potencias, instalar tomas suficientes fijas en pared y no sobrecargar.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. OBRA DE CONSTRUCCIÓN
  // --------------------------------------------------------------------------
  {
    id: 'obra',
    name: 'Obra de Construcción',
    subtitle: 'Edificación y Obra Civil',
    description: 'Entorno de obra con maquinaria pesada, trabajos en altura, excavaciones y cuadros eléctricos temporales.',
    badgeColor: 'amber',
    icon: 'hard-hat',
    timeLimit: 90,
    items: [
      {
        id: 'obra-1',
        num: 1,
        name: 'Peón sin casco bajo carga de grúa',
        category: 'Cargas Suspendidas',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 42, top: 50, width: 14, height: 35 },
        description: 'Trabajador distraído hablando por teléfono con la cabeza descubierta bajo el cubilote suspendido.',
        consequences: 'Muerte instantánea o traumatismo craneoencefálico irreversible por desprendimiento de carga.',
        regulation: 'RD 1627/1997 sobre seguridad en obras y RD 773/1997 sobre EPIs.',
        prevention: 'Prohibición estricta de paso bajo cargas y uso permanente de casco homologado EN 397.'
      },
      {
        id: 'obra-2',
        num: 2,
        name: 'Cubilote de hormigón suspendido',
        category: 'Aparatos de Elevación',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 44, top: 16, width: 12, height: 12 },
        description: 'Carga de 1.500 kg de masa sobrevolando zonas de tránsito sin señal acústica ni balizamiento.',
        consequences: 'Aplastamiento de operarios por rotura de cable o fallo del gancho de seguridad.',
        regulation: 'RD 1215/1997 y NTP 125 del INSST sobre grúas torre.',
        prevention: 'Balizar el radio de giro de la pluma y no desplazar cargas sobre personas.'
      },
      {
        id: 'obra-3',
        num: 3,
        name: 'Andamio a 4m sin barandillas',
        category: 'Caídas en Altura',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 6, top: 24, width: 26, height: 42 },
        description: 'Plataforma de trabajo sin barandilla perimetral de 1 m, listón intermedio ni rodapié.',
        consequences: 'Caída a distinto nivel con resultado mortal o lesiones medulares permanentes.',
        regulation: 'RD 2177/2004 sobre trabajos en altura y RD 1627/1997.',
        prevention: 'Instalar barandillas tubulares completas homologadas antes de usar el andamio.'
      },
      {
        id: 'obra-4',
        num: 4,
        name: 'Zanja de excavación sin entibar',
        category: 'Movimiento de Tierras',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 68, top: 68, width: 30, height: 35 },
        description: 'Zanja de más de 2 metros de profundidad en tierra arcillosa sin entibación ni valla perimetral.',
        consequences: 'Sepultamiento por desprendimiento de tierras y asfixia mecánica.',
        regulation: 'RD 1627/1997 (Anexo IV). Toda zanja de más de 1.30 m debe entibarse.',
        prevention: 'Instalar cajones de entibación metálicos y vallar a 1 metro del borde.'
      },
      {
        id: 'obra-5',
        num: 5,
        name: 'Cuadro eléctrico en charco de lluvia',
        category: 'Riesgo Eléctrico',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 78, top: 34, width: 16, height: 28 },
        description: 'Cuadro de distribución provisional abierto con cables pelados sumergidos en agua.',
        consequences: 'Electrocución por contacto directo/indirecto con tensión de 400V.',
        regulation: 'Reglamento Electrotécnico de Baja Tensión (ITC-BT-33) y RD 614/2001.',
        prevention: 'Elevar el cuadro a soporte seco, grado IP65 y diferencial de 30 mA.'
      },
      {
        id: 'obra-6',
        num: 6,
        name: 'Escalera sobre bidones inestables',
        category: 'Medios de Acceso',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 24, top: 46, width: 14, height: 38 },
        description: 'Escalera de mano apoyada sobre la chapa aceitosa de dos bidones metálicos apilados.',
        consequences: 'Deslizamiento violento de la base y precipitación del operario.',
        regulation: 'RD 2177/2004 sobre escaleras de mano.',
        prevention: 'Apoyar siempre en base plana y sólida o utilizar plataformas elevadoras PEMP.'
      },
      {
        id: 'obra-7',
        num: 7,
        name: 'Chaleco de alta visibilidad reflectante',
        category: 'EPIs Obligatorios',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 54, top: 62, width: 10, height: 16 },
        description: 'Prenda de señalización visual fluorescente de clase 2 según norma EN ISO 20471.',
        consequences: 'Ninguna. Asegura que el maquinista de la grúa y vehículos distingan al peón.',
        regulation: 'Cumple el RD 773/1997 sobre utilización de equipos de protección individual.',
        prevention: 'EPI obligatorio y correcto. Elemento seguro.'
      },
      {
        id: 'obra-8',
        num: 8,
        name: 'Botas de seguridad con puntera y plantilla',
        category: 'Calzado Profesional',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 38, top: 76, width: 12, height: 8 },
        description: 'Calzado de seguridad clasificación S3 con puntera de 200J y plantilla antiperforación.',
        consequences: 'Ninguna. Protege frente a pisada de clavos y aplastamiento de dedos.',
        regulation: 'Cumple norma UNE-EN ISO 20345.',
        prevention: 'EPI obligatorio y seguro.'
      },
      {
        id: 'obra-9',
        num: 9,
        name: 'Pilares de hormigón fraguados',
        category: 'Estructura',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 22, top: 18, width: 8, height: 25 },
        description: 'Columnas estructurales de hormigón armado debidamente curadas y aplomadas.',
        consequences: 'Ninguna. Estructura portante sólida conforme al proyecto de ejecución.',
        regulation: 'Cumple Código Estructural.',
        prevention: 'Elemento constructivo seguro.'
      },
      {
        id: 'obra-10',
        num: 10,
        name: 'Torre de grúa con arriostramientos',
        category: 'Maquinaria de Elevación',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 60, top: 14, width: 8, height: 45 },
        description: 'Mástil metálico de grúa torre aplomado y montado por empresa autorizada.',
        consequences: 'Ninguna. Dispone de libro de mantenimiento e inspección periódica en regla.',
        regulation: 'Cumple ITC-MIE-AEM-2 del Reglamento de aparatos de elevación.',
        prevention: 'Máquina homologada y segura.'
      },
      {
        id: 'obra-11',
        num: 11,
        name: 'Redondos de acero corrugado salientes',
        category: 'Riesgo de Empalamiento',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 8, top: 66, width: 14, height: 10 },
        description: 'Varillas de acero de forjado apuntando verticalmente sin capuchones plásticos (setas).',
        consequences: 'Empalamiento mortal en caso de caída o tropiezo de un trabajador sobre la armadura.',
        regulation: 'RD 1627/1997 y NTP 1039 del INSST.',
        prevention: 'Cubrir de inmediato con setas de protección de polietileno de alta resistencia.'
      },
      {
        id: 'obra-12',
        num: 12,
        name: 'Señalización de uso obligatorio de casco',
        category: 'Señalización de Seguridad',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 86, top: 16, width: 8, height: 10 },
        description: 'Señal redonda azul con pictograma blanco de protección obligatoria de la cabeza.',
        consequences: 'Ninguna. Advierte de forma clara de los requisitos de entrada a la zona.',
        regulation: 'Cumple el RD 485/1997 sobre señalización de seguridad y salud en el trabajo.',
        prevention: 'Elemento seguro de advertencia preventiva.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. ALMACÉN LOGÍSTICO
  // --------------------------------------------------------------------------
  {
    id: 'almacen',
    name: 'Almacén Logístico',
    subtitle: 'Almacenamiento y Manutención',
    description: 'Nave logística de alta rotación con carretillas elevadoras, estanterías pesadas y pasillos de tránsito.',
    badgeColor: 'emerald',
    icon: 'archive',
    timeLimit: 90,
    items: [
      {
        id: 'alm-1',
        num: 1,
        name: 'Palet deformado y ladeado en altura',
        category: 'Estanterías Industriales',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 22, top: 18, width: 22, height: 26 },
        description: 'Palet con carga deformada y taco roto en el tercer nivel de la estantería inclinado hacia el pasillo.',
        consequences: 'Caída de carga de 800 kg sobre operarios que transiten por debajo.',
        regulation: 'Norma UNE-EN 15635 (Inspección de estanterías) y RD 1215/1997.',
        prevention: 'Rechazar palets rotos, flejar la carga e instalar topes traseros y mallas anticaídas.'
      },
      {
        id: 'alm-2',
        num: 2,
        name: 'Charco de aceite en pasillo de paso',
        category: 'Orden y Limpieza',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 38, top: 72, width: 26, height: 22 },
        description: 'Gran mancha de fluido hidráulico sobre el pavimento de paso peatonal.',
        consequences: 'Resbalones con fracturas y patinazos o pérdida de frenada en carretillas.',
        regulation: 'RD 486/1997 sobre lugares de trabajo.',
        prevention: 'Espolvorear sepiolita/absorbente mineral inmediatamente y señalizar con cono.'
      },
      {
        id: 'alm-3',
        num: 3,
        name: 'Carretilla con horquillas altas y llave',
        category: 'Maquinaria de Manutención',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 62, top: 48, width: 28, height: 38 },
        description: 'Carretilla parada con horquillas elevadas a 1.6 metros y llave en el contacto sin conductor.',
        consequences: 'Empalamiento torácico de peatones y arranque por personal no cualificado.',
        regulation: 'RD 1215/1997 y NTP 714 del INSST.',
        prevention: 'Bajar siempre las horquillas a ras de suelo al estacionar y retirar la llave.'
      },
      {
        id: 'alm-4',
        num: 4,
        name: 'Salida de emergencia tapada por palets',
        category: 'Evacuación y Emergencias',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 4, top: 42, width: 14, height: 48 },
        description: 'Puerta con barra antipánico bloqueada por 4 palets apilados frente a la hoja.',
        consequences: 'Imposibilidad de evacuar la nave en conato de incendio o derrame tóxico.',
        regulation: 'RD 486/1997 y Código Técnico de la Edificación (DB-SI).',
        prevention: 'Pintar zona cebreada en suelo de prohibido depositar y mantener expedita 24/7.'
      },
      {
        id: 'alm-5',
        num: 5,
        name: 'Operario levantando 40 kg a pulso',
        category: 'Manipulación de Cargas',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 44, top: 46, width: 14, height: 32 },
        description: 'Trabajador flexionando la espalda en 90° con piernas rectas levantando caja pesada.',
        consequences: 'Hernia discal lumbar, ciática incapacitante y lumbalgia aguda.',
        regulation: 'RD 487/1997 (Límite general de 25 kg en condiciones ideales).',
        prevention: 'Utilizar transpaletas o solicitar ayuda de un compañero flexionando rodillas.'
      },
      {
        id: 'alm-6',
        num: 6,
        name: 'Línea amarilla de pasillo peatonal',
        category: 'Señalización Vial',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 22, top: 76, width: 80, height: 6 },
        description: 'Franja continua amarilla pintada en suelo de 10 cm delimitando la zona de personas.',
        consequences: 'Ninguna. Separa eficazmente los flujos de peatones del tráfico de carretillas.',
        regulation: 'Cumple el RD 485/1997 sobre señalización de seguridad.',
        prevention: 'Elemento de seguridad vial interior. Totalmente seguro.'
      },
      {
        id: 'alm-7',
        num: 7,
        name: 'Bastidores de estantería Mecalux anclados',
        category: 'Estructuras Pesadas',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 18, top: 38, width: 6, height: 45 },
        description: 'Puntales de acero azul anclados al forjado con placas de nivelación y pernos.',
        consequences: 'Ninguna. Estructura portante con certificado de carga máxima visible.',
        regulation: 'Cumple norma UNE-EN 15512 y UNE-EN 15635.',
        prevention: 'Instalación de almacenaje reglamentaria y segura.'
      },
      {
        id: 'alm-8',
        num: 8,
        name: 'Jaula de seguridad ROPS/FOPS de carretilla',
        category: 'Protección de Máquinas',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 78, top: 44, width: 10, height: 16 },
        description: 'Estructura metálica envolvente sobre el asiento del conductor de la carretilla.',
        consequences: 'Ninguna. Protege al carretillero de la caída de objetos y del aplastamiento por vuelco.',
        regulation: 'Cumple el RD 1215/1997 y normas UNE de seguridad en carretillas.',
        prevention: 'Dispositivo de protección pasiva obligatorio y seguro.'
      },
      {
        id: 'alm-9',
        num: 9,
        name: 'Señal luminiscente verde de salida',
        category: 'Señalización de Evacuación',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 4, top: 18, width: 8, height: 6 },
        description: 'Cartel fotoluminiscente clase A visible en la oscuridad con pictograma de persona saliendo.',
        consequences: 'Ninguna. Orienta a los ocupantes hacia la salida en fallo de alumbrado.',
        regulation: 'Cumple RD 485/1997 y norma UNE 23035.',
        prevention: 'Elemento seguro de protección contra incendios.'
      },
      {
        id: 'alm-10',
        num: 10,
        name: 'Alumbrado industrial suspendido en techo',
        category: 'Iluminación',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 50, top: 12, width: 12, height: 8 },
        description: 'Campanas industriales LED con cadena de seguridad secundaria anticaídas.',
        consequences: 'Ninguna. Aporta los 200 lux mínimos exigidos en pasillos de almacén.',
        regulation: 'Cumple RD 486/1997 (Anexo IV).',
        prevention: 'Instalación reglamentaria y segura.'
      },
      {
        id: 'alm-11',
        num: 11,
        name: 'Calzado de seguridad con puntera del operario',
        category: 'EPIs',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 52, top: 76, width: 6, height: 6 },
        description: 'Botas profesionales S3 con suela resistente a hidrocarburos y puntera de acero.',
        consequences: 'Ninguna. Protege los pies ante caída accidental de paquetes.',
        regulation: 'Cumple RD 773/1997 y norma EN ISO 20345.',
        prevention: 'EPI correcto y necesario.'
      },
      {
        id: 'alm-12',
        num: 12,
        name: 'Caja pesada de 40 kg sin medios mecánicos',
        category: 'Cargas Excesivas',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 34, top: 56, width: 10, height: 10 },
        description: 'Bulto con peso superior al límite legal manipulado en solitario.',
        consequences: 'Desgarro muscular lumbar y descompensación postural.',
        regulation: 'RD 487/1997. Límite máximo de 25 kg para trabajadores masculinos.',
        prevention: 'Fraccionar el bulto o transportar con transpaleta manual/eléctrica.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. LABORATORIO QUÍMICO Y BIOLÓGICO
  // --------------------------------------------------------------------------
  {
    id: 'laboratorio',
    name: 'Laboratorio Químico y Biológico',
    subtitle: 'Ensayos y Análisis de Riesgo Químico',
    description: 'Laboratorio de control y análisis con reactivos peligrosos, campana extractora y material biológico.',
    badgeColor: 'purple',
    icon: 'flask',
    timeLimit: 90,
    items: [
      {
        id: 'lab-1',
        num: 1,
        name: 'Guillotina de campana extractora abierta',
        category: 'Riesgo Químico',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 18, top: 22, width: 20, height: 36 },
        description: 'Vitrina de gases con la pantalla de cristal levantada al 100% y vapores tóxicos saliendo.',
        consequences: 'Inhalación aguda de gases químicos irritantes y asfixiantes.',
        regulation: 'RD 374/2001 sobre protección contra agentes químicos y NTP 672.',
        prevention: 'Mantener la guillotina al límite de seguridad (máx 30 cm) y revisar el flujo extractor.'
      },
      {
        id: 'lab-2',
        num: 2,
        name: 'Ácidos y disolventes inflamables juntos',
        category: 'Almacenamiento Químico',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 74, top: 16, width: 18, height: 40 },
        description: 'Reactivos oxidantes (ácido nítrico) junto a disolventes en el mismo estante de armario.',
        consequences: 'Reacción química violenta, ignición espontánea y explosión.',
        regulation: 'RD 656/2017 (Reglamento de almacenamiento de productos químicos - APQ).',
        prevention: 'Segregar productos químicos incompatibles en armarios de seguridad independientes RF-90.'
      },
      {
        id: 'lab-3',
        num: 3,
        name: 'Ducha y lavaojos bloqueados por carro',
        category: 'Primeros Auxilios',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 3, top: 18, width: 16, height: 50 },
        description: 'Carro con cajas impidiendo el acceso inmediato al tirador de la ducha de descontaminación.',
        consequences: 'Agravamiento irreversible de quemaduras químicas cutáneas y pérdida de visión ocular.',
        regulation: 'Norma UNE-EN 15154 y NTP 500 del INSST.',
        prevention: 'Mantener un radio libre de obstáculos de 1 metro permanentemente despejado.'
      },
      {
        id: 'lab-4',
        num: 4,
        name: 'Matraz roto con ácido en encimera',
        category: 'Riesgo Químico',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 36, top: 62, width: 18, height: 24 },
        description: 'Vidrio quebrado con ácido corrosivo derramado sin neutralizar ni señalizar.',
        consequences: 'Cortes en manos contaminados con reactivos y quemaduras ácidas.',
        regulation: 'RD 374/2001 sobre agentes químicos.',
        prevention: 'Neutralizar con absorbente específico y recoger vidrios con pinzas mecánicas.'
      },
      {
        id: 'lab-5',
        num: 5,
        name: 'Investigador pipeteando con la boca',
        category: 'Malas Prácticas',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 48, top: 32, width: 16, height: 32 },
        description: 'Técnico aspirando líquido reactivo directamente con la boca a través de una pipeta de vidrio.',
        consequences: 'Ingestión accidental de compuestos químicos corrosivos o cancerígenos.',
        regulation: 'RD 374/2001 y RD 664/1997. Prohibición expresa y absoluta del pipeteo con la boca.',
        prevention: 'Utilizar siempre micropipetas automáticas o peras de aspiración de tres vías.'
      },
      {
        id: 'lab-6',
        num: 6,
        name: 'Bata blanca de laboratorio de algodón',
        category: 'EPIs de Laboratorio',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 56, top: 48, width: 8, height: 18 },
        description: 'Bata 100% algodón abrochada con puños elásticos para evitar enganches.',
        consequences: 'Ninguna. Protege la ropa de calle y piel frente a salpicaduras químicas menores.',
        regulation: 'Cumple el RD 773/1997 sobre equipos de protección individual.',
        prevention: 'EPI reglamentario y correcto. Elemento seguro.'
      },
      {
        id: 'lab-7',
        num: 7,
        name: 'Encimera de resina fenólica no porosa',
        category: 'Instalaciones Técnicas',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 18, top: 66, width: 20, height: 8 },
        description: 'Superficie de trabajo con reborde antiderrame resistente a ácidos, bases y disolventes.',
        consequences: 'Ninguna. Evita que los líquidos goteen a las piernas del operario.',
        regulation: 'Cumple norma UNE-EN 13150 para mesas de laboratorio.',
        prevention: 'Mobiliario técnico seguro.'
      },
      {
        id: 'lab-8',
        num: 8,
        name: 'Fregadero con grifo de cuello de cisne',
        category: 'Fontanería Segura',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 74, top: 58, width: 8, height: 12 },
        description: 'Pila de polipropileno con grifo monomando y válvula antirretorno.',
        consequences: 'Ninguna. Permite el lavado rápido de manos y enjuague seguro de material.',
        regulation: 'Cumple el Código Técnico de la Edificación (DB-HS).',
        prevention: 'Instalación higiénica reglamentaria y segura.'
      },
      {
        id: 'lab-9',
        num: 9,
        name: 'Etiquetas CLP en frascos de reactivos',
        category: 'Señalización Química',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 80, top: 34, width: 6, height: 8 },
        description: 'Envases con pictogramas de peligro en rombo rojo y frases H y P legibles.',
        consequences: 'Ninguna. Informa al usuario de los riesgos y medidas preventivas del reactivo.',
        regulation: 'Cumple el Reglamento CE 1272/2008 (Reglamento CLP).',
        prevention: 'Etiquetado normativo correcto. Elemento seguro.'
      },
      {
        id: 'lab-10',
        num: 10,
        name: 'Suelo de resina epoxi continuo sin juntas',
        category: 'Pavimentos Sanitarios',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 70, top: 82, width: 18, height: 18 },
        description: 'Pavimento sellado químicamente resistente con media caña sanitaria en zócalo.',
        consequences: 'Ninguna. Evita filtraciones de contaminantes y facilita la descontaminación.',
        regulation: 'Cumple el RD 486/1997 sobre lugares de trabajo.',
        prevention: 'Suelo seguro y adecuado para laboratorio.'
      },
      {
        id: 'lab-11',
        num: 11,
        name: 'Vapores tóxicos escapando de la campana',
        category: 'Contaminación Ambiental',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 34, top: 14, width: 10, height: 12 },
        description: 'Columna de gas visible superando el plano de la guillotina hacia el técnico.',
        consequences: 'Afección del tracto respiratorio superior y cefaleas agudas.',
        regulation: 'RD 374/2001 sobre valores límite ambientales (VLA).',
        prevention: 'Bajar la pantalla de cristal y verificar el caudal de tiro forzado.'
      },
      {
        id: 'lab-12',
        num: 12,
        name: 'Tirador triangular de ducha de emergencia',
        category: 'Dispositivos de Socorro',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 3, top: 46, width: 6, height: 8 },
        description: 'Accionador rígido de apertura rápida en un solo movimiento hacia abajo.',
        consequences: 'Ninguna. Asegura caudal instantáneo de 60 l/min en caso de emergencia.',
        regulation: 'Cumple norma UNE-EN 15154-1.',
        prevention: 'Dispositivo de socorro reglamentario. Elemento seguro.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 6. COCINA INDUSTRIAL
  // --------------------------------------------------------------------------
  {
    id: 'cocina',
    name: 'Cocina Industrial',
    subtitle: 'Hostelería y Restauración Colectiva',
    description: 'Cocina profesional con fogones de gas, freidoras, maquinaria de corte y suelo húmedo.',
    badgeColor: 'amber',
    icon: 'fire',
    timeLimit: 90,
    items: [
      {
        id: 'coc-1',
        num: 1,
        name: 'Cortafiambres con cuchilla expuesta',
        category: 'Equipos de Trabajo',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 14, top: 44, width: 18, height: 25 },
        description: 'Máquina de corte girando sin el protector de plástico y sin empujador de producto.',
        consequences: 'Amputación traumática de falanges de los dedos por atrapamiento contra el filo.',
        regulation: 'RD 1215/1997 sobre equipos de trabajo y norma UNE-EN 1974.',
        prevention: 'Utilizar siempre el carro de empuje y guante de malla metálica anticorte EN 1082.'
      },
      {
        id: 'coc-2',
        num: 2,
        name: 'Charco de aceite y grasa en suelo',
        category: 'Caídas al Mismo Nivel',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 40, top: 74, width: 24, height: 22 },
        description: 'Suelo de baldosas cubierto de película de aceite caliente frente a la freidora.',
        consequences: 'Resbalón con caída y posible apoyo accidental sobre la cuba de aceite hirviendo.',
        regulation: 'RD 486/1997 sobre lugares de trabajo.',
        prevention: 'Limpieza inmediata con desengrasante y uso de calzado con suela SRC antideslizante.'
      },
      {
        id: 'coc-3',
        num: 3,
        name: 'Filtros de campana goteando grasa inflamable',
        category: 'Riesgo de Incendio',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 42, top: 12, width: 35, height: 26 },
        description: 'Filtros metálicos saturados de grasa cayendo gotas directamente sobre los fogones activos.',
        consequences: 'Inflamación súbita de la campana con propagación por el conducto extractor.',
        regulation: 'Código Técnico de la Edificación (DB-SI) y RD 513/2017.',
        prevention: 'Limpieza periódica obligatoria de filtros y conductos en lavavajillas industrial.'
      },
      {
        id: 'coc-4',
        num: 4,
        name: 'Enchufe trifásico de 400V en contacto con agua',
        category: 'Riesgo Eléctrico',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 78, top: 66, width: 16, height: 25 },
        description: 'Clavija de conexión industrial roja de 400V sumergida en charco de baldeo junto al fregadero.',
        consequences: 'Electrocución de operarios que toquen superficies metálicas o pisen el agua.',
        regulation: 'Reglamento Electrotécnico de Baja Tensión y RD 614/2001.',
        prevention: 'Instalar bases estancas IP67 a más de 1.5 metros de altura del suelo en zonas húmedas.'
      },
      {
        id: 'coc-5',
        num: 5,
        name: 'Tabla de madera con pollo crudo y ensalada',
        category: 'Higiene Alimentaria',
        isHazard: true,
        severity: 'Leve',
        rect: { left: 62, top: 52, width: 15, height: 20 },
        description: 'Tabla de madera agrietada porosa mezclando carne cruda con verdura lista para servir.',
        consequences: 'Contaminación cruzada por Salmonella o Campylobacter con toxiinfección alimentaria.',
        regulation: 'Reglamento CE 852/2004 relativo a la higiene de los productos alimenticios.',
        prevention: 'Prohibir tablas de madera; usar tablas de polietileno codificadas por colores.'
      },
      {
        id: 'coc-6',
        num: 6,
        name: 'Mesas de trabajo de acero inoxidable AISI 304',
        category: 'Superficies Higiénicas',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 16, top: 64, width: 15, height: 16 },
        description: 'Encimeras lisas metálicas con esquinas redondeadas sin bordes cortantes.',
        consequences: 'Ninguna. Máxima higiene, no poroso y de fácil desinfección diaria.',
        regulation: 'Cumple normas sanitarias UNE-EN 1672-2 para maquinaria y mobiliario de alimentos.',
        prevention: 'Mobiliario profesional reglamentario y seguro.'
      },
      {
        id: 'coc-7',
        num: 7,
        name: 'Quemadores de gas con termopar de seguridad',
        category: 'Equipos de Combustión',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 38, top: 42, width: 12, height: 8 },
        description: 'Fogones con llama azul estable dotados de sensor de corte automático por ausencia de llama.',
        consequences: 'Ninguna. Evita fugas de gas si se apaga accidentalmente la llama.',
        regulation: 'Cumple el Reglamento técnico de distribución y utilización de combustibles gaseosos.',
        prevention: 'Instalación de gas con mantenimiento reglamentario y segura.'
      },
      {
        id: 'coc-8',
        num: 8,
        name: 'Grifo de ducha de lavado con muelle compensador',
        category: 'Ergonomía en Fregadero',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 74, top: 34, width: 8, height: 16 },
        description: 'Manguera de alta presión suspendida con muelle para limpieza de ollas sin esfuerzo.',
        consequences: 'Ninguna. Reduce sobreesfuerzos dorsales en tareas de lavado.',
        regulation: 'Cumple estándares de ergonomía laboral.',
        prevention: 'Elemento auxiliar seguro.'
      },
      {
        id: 'coc-9',
        num: 9,
        name: 'Sumidero sifónico con rejilla inox en suelo',
        category: 'Evacuación de Aguas',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 24, top: 80, width: 8, height: 8 },
        description: 'Desagüe con filtro de recogida de sólidos y cierre hidráulico que evita malos olores.',
        consequences: 'Ninguna. Drena el agua de limpieza evitando encharcamientos.',
        regulation: 'Cumple Código Técnico de la Edificación (DB-HS).',
        prevention: 'Instalación de saneamiento correcta y segura.'
      },
      {
        id: 'coc-10',
        num: 10,
        name: 'Uniforme de cocina de algodón ignífugo',
        category: 'Ropa Laboral',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 54, top: 32, width: 8, height: 22 },
        description: 'Chaqueta de cocina cruzada de doble botonadura que protege de salpicaduras calientes.',
        consequences: 'Ninguna. Evita quemaduras térmicas en antebrazos y pecho.',
        regulation: 'Cumple el RD 773/1997 sobre EPIs.',
        prevention: 'Vestimenta profesional adecuada y segura.'
      },
      {
        id: 'coc-11',
        num: 11,
        name: 'Freidora industrial con termostato de seguridad',
        category: 'Aparatos Térmicos',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 24, top: 44, width: 10, height: 10 },
        description: 'Cuba de fritura con límite de temperatura tarado a 210°C que previene sobrecalentamiento.',
        consequences: 'Ninguna. Evita que el aceite alcance el punto de autoignición.',
        regulation: 'Cumple el marcado CE conforme a directiva de máquinas.',
        prevention: 'Aparato homologado y seguro.'
      },
      {
        id: 'coc-12',
        num: 12,
        name: 'Cuchilla de cortafiambres sin resguardo de disco',
        category: 'Puntos de Corte',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 4, top: 56, width: 8, height: 10 },
        description: 'Bisel afilado del disco de 300 mm expuesto durante la rotación continua.',
        consequences: 'Sección de tendones y nervios en mano por proximidad involuntaria.',
        regulation: 'RD 1215/1997. Los órganos móviles deben estar provistos de resguardos.',
        prevention: 'Colocar el protector de anillo perimetral y el empujador de producto.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. TALLER MECÁNICO
  // --------------------------------------------------------------------------
  {
    id: 'taller',
    name: 'Taller Mecánico e Industrial',
    subtitle: 'Mantenimiento y Reparación de Vehículos',
    description: 'Taller de automoción con elevadores hidráulicos, herramientas rotativas, oxicorte y fosos.',
    badgeColor: 'sky',
    icon: 'wrench',
    timeLimit: 90,
    items: [
      {
        id: 'tal-1',
        num: 1,
        name: 'Coche elevado sin seguro mecánico',
        category: 'Aparatos de Elevación',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 38, top: 22, width: 32, height: 52 },
        description: 'Vehículo en puente de 2 columnas suspendido por presión hidráulica sin trinquete enclavado.',
        consequences: 'Aplastamiento mortal por descenso intempestivo por rotura de latiguillo.',
        regulation: 'Norma UNE-EN 1493 (Elevadores de vehículos) y RD 1215/1997.',
        prevention: 'Bajar siempre el elevador hasta apoyar mecánicamente en los trinquetes antes de trabajar.'
      },
      {
        id: 'tal-2',
        num: 2,
        name: 'Amoladora radial sin protector de disco',
        category: 'Herramientas Rotativas',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 14, top: 42, width: 18, height: 22 },
        description: 'Radial sobre banco con el protector de disco de 230 mm desmontado.',
        consequences: 'Impacto de fragmentos del disco roto a 80 m/s en cara y cuello con desgarros graves.',
        regulation: 'RD 1215/1997 y NTP 86 del INSST.',
        prevention: 'Prohibir terminantemente el uso sin carcasa protectora y utilizar pantalla facial EN 166.'
      },
      {
        id: 'tal-3',
        num: 3,
        name: 'Botellas de oxicorte con manguera agrietada',
        category: 'Soldadura y Oxicorte',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 76, top: 24, width: 16, height: 45 },
        description: 'Mangueras de acetileno y oxígeno agrietadas reparadas con cinta aislante sin apagallamas.',
        consequences: 'Fuga de acetileno, retroceso de llama hacia la botella y explosión catastrófica.',
        regulation: 'RD 2060/2008 y NTP 495 del INSST sobre soldadura oxiacetilénica.',
        prevention: 'Instalar válvulas antirretroceso en soplete y manómetros, y usar mangueras normalizadas.'
      },
      {
        id: 'tal-4',
        num: 4,
        name: 'Foso de inspección abierto sin barandilla',
        category: 'Caídas a Distinto Nivel',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 40, top: 68, width: 35, height: 24 },
        description: 'Foso de 1.6 m de profundidad abierto en zona de paso con iluminación tenue.',
        consequences: 'Caída de mecánicos al fondo del foso con fracturas craneales o de extremidades.',
        regulation: 'RD 486/1997 sobre lugares de trabajo.',
        prevention: 'Cubrir con tablones resistentes o instalar barandillas y cadenas perimetrales retráctiles.'
      },
      {
        id: 'tal-5',
        num: 5,
        name: 'Cuba de desengrase abierta sin extracción',
        category: 'Riesgo Químico e Incendio',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 74, top: 58, width: 16, height: 28 },
        description: 'Depósito con disolventes volátiles abierto emitiendo vapores sin campana de captación.',
        consequences: 'Inhalación crónica de vapores de hidrocarburos e ignición de atmósfera inflamable.',
        regulation: 'RD 374/2001 y RD 1215/1997.',
        prevention: 'Cubas con tapa de cierre automático con fusible térmico y extracción localizada.'
      },
      {
        id: 'tal-6',
        num: 6,
        name: 'Columnas de elevador ancladas a forjado',
        category: 'Estructuras de Taller',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 58, top: 22, width: 4, height: 45 },
        description: 'Poste metálico con pernos de anclaje de alta resistencia y placas de asiento ensayadas.',
        consequences: 'Ninguna. Asegura la estabilidad geométrica de la máquina elevadora.',
        regulation: 'Cumple el manual del fabricante y directiva de máquinas.',
        prevention: 'Elemento estructural conforme y seguro.'
      },
      {
        id: 'tal-7',
        num: 7,
        name: 'Banco de trabajo metálico con tornillo',
        category: 'Mobiliario Industrial',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 14, top: 64, width: 18, height: 16 },
        description: 'Mesa de taller pesada con mordaza de fijación mecánica firme para piezas.',
        consequences: 'Ninguna. Inmoviliza las piezas evitando que salgan despedidas al trabajarlas.',
        regulation: 'Cumple normas ergonómicas y de seguridad en taller.',
        prevention: 'Mobiliario de taller seguro.'
      },
      {
        id: 'tal-8',
        num: 8,
        name: 'Enrollador automático de manguera neumática',
        category: 'Orden y Limpieza',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 86, top: 14, width: 8, height: 10 },
        description: 'Carrete en techo que recoge la manguera de aire evitando cables por el suelo.',
        consequences: 'Ninguna. Elimina el riesgo de tropiezos con mangueras neumáticas en pasillo.',
        regulation: 'Cumple el RD 486/1997 sobre orden de instalaciones.',
        prevention: 'Elemento preventivo de seguridad pasiva.'
      },
      {
        id: 'tal-9',
        num: 9,
        name: 'Carro de herramientas con cajones bloqueables',
        category: 'Almacenamiento de Útiles',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 2, top: 48, width: 10, height: 22 },
        description: 'Mueble con ruedas dotado de freno y guías con retención de cajones.',
        consequences: 'Ninguna. Mantiene las llaves y herramientas ordenadas sin peligro de caída.',
        regulation: 'Cumple principios ergonómicos y de orden.',
        prevention: 'Elemento auxiliar seguro.'
      },
      {
        id: 'tal-10',
        num: 10,
        name: 'Suelo de taller con pintura epoxi antideslizante',
        category: 'Pavimentos de Taller',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 66, top: 78, width: 20, height: 18 },
        description: 'Suelo gris con árido de cuarzo espolvoreado resistente a aceites y grasas.',
        consequences: 'Ninguna. Asegura buen coeficiente de rozamiento incluso con polvo de neumático.',
        regulation: 'Cumple el RD 486/1997 sobre pavimentos no resbaladizos.',
        prevention: 'Pavimento adecuado y seguro.'
      },
      {
        id: 'tal-11',
        num: 11,
        name: 'Brazo basculante del elevador con goma de apoyo',
        category: 'Puntos de Contacto',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 52, top: 42, width: 6, height: 6 },
        description: 'Taco de caucho macizo que apoya directamente sobre los puntos de chasis reforzados.',
        consequences: 'Ninguna. Evita el resbalamiento de la carrocería sobre el metal del brazo.',
        regulation: 'Cumple norma UNE-EN 1493.',
        prevention: 'Elemento de apoyo seguro.'
      },
      {
        id: 'tal-12',
        num: 12,
        name: 'Disco de amoladora con fisura en el borde',
        category: 'Abrasivos',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 26, top: 50, width: 8, height: 8 },
        description: 'Disco abrasivo con muescas y grieta visible montado en el eje de la radial.',
        consequences: 'Desintegración centrífuga instantánea del disco a 6.000 rpm.',
        regulation: 'RD 1215/1997 y norma EN 12413 sobre productos abrasivos aglomerados.',
        prevention: 'Rechazar discos golpeados y comprobar siempre la velocidad máxima antes de montar.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 8. CUBIERTAS Y TRABAJOS EN ALTURAS
  // --------------------------------------------------------------------------
  {
    id: 'alturas',
    name: 'Cubiertas y Tejados',
    subtitle: 'Trabajos Verticales y Rehabilitación',
    description: 'Cubierta inclinada de teja con claraboyas frágiles, chimeneas y riesgo de caída en altura.',
    badgeColor: 'amber',
    icon: 'mountain',
    timeLimit: 90,
    items: [
      {
        id: 'alt-1',
        num: 1,
        name: 'Lucernario de plástico frágil sin red',
        category: 'Superficies Frágiles',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 34, top: 38, width: 22, height: 25 },
        description: 'Claraboya de policarbonato translúcido envejecido sin reja ni malla metálica resistente.',
        consequences: 'Rotura inmediata de la placa bajo el peso del trabajador y caída al vacío de 8 metros.',
        regulation: 'RD 2177/2004 y RD 1627/1997. Las superficies no transitables deben protegerse.',
        prevention: 'Instalar redes bajo cubierta antes de pisar el tejado y pasarelas de reparto de carga.'
      },
      {
        id: 'alt-2',
        num: 2,
        name: 'Operario en el alero sin arnés ni línea',
        category: 'Caídas en Altura',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 82, top: 52, width: 18, height: 35 },
        description: 'Trabajador arrodillado en el borde del tejado a 12 metros de altura sin atadura.',
        consequences: 'Caída vertical al vacío con resultado de muerte instantánea.',
        regulation: 'RD 2177/2004 sobre trabajos en altura. Obligación de protección a partir de 2 metros.',
        prevention: 'Instalar redes de seguridad perimetrales de horca tipo V o arnés conectado a línea de vida.'
      },
      {
        id: 'alt-3',
        num: 3,
        name: 'Cuerda amarrada a chimenea agrietada',
        category: 'Puntos de Anclaje',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 58, top: 14, width: 15, height: 32 },
        description: 'Línea de vida atada al fuste de una chimenea de ladrillo antiguo con mortero disgregado.',
        consequences: 'Colapso de la chimenea al recibir el impacto dinámico de una caída (600 kg de fuerza).',
        regulation: 'Norma UNE-EN 795 (Dispositivos de anclaje). Resistencia estática mínima requerida de 12 kN.',
        prevention: 'Prohibir anclajes a ladrillo; taladrar con anclajes químicos en vigas maestras ensayadas.'
      },
      {
        id: 'alt-4',
        num: 4,
        name: 'Escalera que no sobrepasa 1m sobre alero',
        category: 'Acceso a Cubiertas',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 4, top: 46, width: 14, height: 42 },
        description: 'Escalera de mano que finaliza a ras del canalón sin sobresalir ni estar atada en cabeza.',
        consequences: 'Deslizamiento lateral de la escalera o pérdida de equilibrio durante el desembarco.',
        regulation: 'RD 2177/2004. Los largueros deben sobrepasar al menos 1 metro por encima del plano.',
        prevention: 'Utilizar escaleras con prolongación telescópica de 1 m y amarrar firmemente la cabeza.'
      },
      {
        id: 'alt-5',
        num: 5,
        name: 'Tejas cerámicas de cubierta fijadas',
        category: 'Material de Cobertura',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 18, top: 54, width: 20, height: 15 },
        description: 'Tejas curvas mecánicamente clavadas y recibidas con mortero en hiladas reglamentarias.',
        consequences: 'Ninguna. Superficie estable que canaliza el agua de lluvia hacia los desagües.',
        regulation: 'Cumple el Código Técnico de la Edificación (DB-HS).',
        prevention: 'Elemento constructivo seguro.'
      },
      {
        id: 'alt-6',
        num: 6,
        name: 'Canalón de recogida de aguas pluviales',
        category: 'Evacuación de Cubiertas',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 4, top: 66, width: 6, height: 28 },
        description: 'Canal metálico de zinc fijado mediante ganchos reforzados bajo la línea de alero.',
        consequences: 'Ninguna. Desagüe técnico sin cargas estructurales.',
        regulation: 'Cumple Código Técnico de la Edificación.',
        prevention: 'Elemento seguro.'
      },
      {
        id: 'alt-7',
        num: 7,
        name: 'Peto perimetral de ladrillo en fachada',
        category: 'Remates de Obra',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 90, top: 34, width: 7, height: 20 },
        description: 'Muro bajo de albañilería que corona la fachada exterior.',
        consequences: 'Ninguna. Elemento arquitectónico de cerramiento exterior.',
        regulation: 'Cumple Código Técnico de la Edificación.',
        prevention: 'Elemento constructivo seguro.'
      },
      {
        id: 'alt-8',
        num: 8,
        name: 'Casco con barboquejo para alturas',
        category: 'EPIs de Altura',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 74, top: 38, width: 6, height: 6 },
        description: 'Casco de protección para trabajos en altura EN 12492 con barboquejo de retención (50 daN).',
        consequences: 'Ninguna. Evita la pérdida del casco durante movimientos forzados o caídas.',
        regulation: 'Cumple el RD 773/1997 sobre EPIs.',
        prevention: 'EPI obligatorio y correcto. Elemento seguro.'
      },
      {
        id: 'alt-9',
        num: 9,
        name: 'Calzado especial con suela de agarre en teja',
        category: 'Calzado de Trabajo',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 68, top: 66, width: 8, height: 6 },
        description: 'Bota técnica de tejador con suela de caucho vulcanizado de máxima adherencia.',
        consequences: 'Ninguna. Previene el resbalamiento sobre la pendiente de teja.',
        regulation: 'Cumple norma UNE-EN ISO 20347 nivel SRC.',
        prevention: 'EPI adecuado y seguro.'
      },
      {
        id: 'alt-10',
        num: 10,
        name: 'Línea de cumbrera ventilada',
        category: 'Estructura de Tejado',
        isHazard: false,
        severity: 'Seguro',
        rect: { left: 44, top: 16, width: 14, height: 8 },
        description: 'Caballete de remate superior que une las dos vertientes de la cubierta.',
        consequences: 'Ninguna. Elemento estructural firme y bien aplomado.',
        regulation: 'Cumple Código Técnico de la Edificación.',
        prevention: 'Elemento constructivo seguro.'
      },
      {
        id: 'alt-11',
        num: 11,
        name: 'Herramientas sueltas en la pendiente del tejado',
        category: 'Caída de Objetos',
        isHazard: true,
        severity: 'Grave',
        rect: { left: 24, top: 68, width: 14, height: 16 },
        description: 'Taladro a batería y martillo apoyados sueltos sobre tejas inclinadas sin amarrar.',
        consequences: 'Caída de herramientas de 3 kg al vacío impactando sobre peatones en la acera.',
        regulation: 'RD 2177/2004 (Anexo). Las herramientas deben asegurarse mediante cuerdas de sujeción.',
        prevention: 'Utilizar bolsas portaherramientas o cuerdas elásticas de sujeción a la muñeca/arnés.'
      },
      {
        id: 'alt-12',
        num: 12,
        name: 'Grietas profundas en el mortero de la chimenea',
        category: 'Deterioro Estructural',
        isHazard: true,
        severity: 'Muy Grave',
        rect: { left: 66, top: 22, width: 8, height: 10 },
        description: 'Ladrillos sueltos con fractura que cederán ante cualquier esfuerzo horizontal.',
        consequences: 'Derrumbe del tiro de chimenea cayendo hacia el interior o exterior del edificio.',
        regulation: 'RD 1627/1997 sobre seguridad en obras.',
        prevention: 'Saneamiento y consolidación estructural antes de cualquier trabajo cercano.'
      }
    ]
  }
];

// Asignar el contenido SVG correspondiente a cada escenario desde la base existente
const fullScenarios = scenariosConfig.map(sc => {
  const existing = baseData.find(b => b.id === sc.id);
  const svg = existing ? existing.svgContent : '';
  
  // Para compatibilidad hacia atrás, hazards son los items que sean riesgos reales
  const hazards = sc.items.filter(i => i.isHazard);

  return {
    ...sc,
    svgContent: svg,
    hazards,
    items: sc.items
  };
});

const outputContent = `/**
 * BANCO DE DATOS DE ESCENARIOS ESTILO PÓSTER FORMATIVO (PRL CLASSROOM LIVE)
 * 8 Escenarios con 12 Objetos Numerados cada uno (Riesgos Verdaderos + Riesgos Falsos Seguros).
 */
window.PRL_SCENARIOS = ${JSON.stringify(fullScenarios, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'scenarios.js'), outputContent, 'utf-8');
console.log('✅ Generated 8 poster-style scenarios with 12 numbered items each in js/scenarios.js!');
