# ⚠️ PRL Classroom Live — Multijugador Global en Tiempo Real (Estilo Kahoot)

Plataforma formativa interactiva multijugador para **Prevención de Riesgos Laborales (PRL)** diseñada para su uso en aulas, empresas y formación a distancia.

> [!TIP]
> **¡CONEXIÓN GLOBAL SIN MISMA RED WI-FI!**  
> Gracias a la integración del broker global sobre WebSockets seguros (`WSS`), el profesor puede estar en la red del aula o en la fibra de su casa, y los alumnos pueden conectarse desde **datos móviles 4G/5G, otra red Wi-Fi o desde sus hogares**, simplemente introduciendo el código PIN o abriendo el enlace de invitación.

---

## 🌐 ¿Cómo Funciona la Conexión entre Redes Distintas?

La aplicación utiliza un sistema de **transporte triple transparente**:

1. **Red Global en la Nube (MQTT sobre WSS en puerto 8084)**:
   - Utiliza brokers públicos mundiales de alta velocidad (`broker.emqx.io` y `broker.hivemq.com`).
   - El tráfico viaja encapsulado en WebSockets seguros con cifrado TLS (idéntico a la navegación HTTPS normal), por lo que **atraviesa sin problemas los cortafuegos de centros educativos, empresas y operadores móviles (Vodafone, Movistar, Orange, etc.)**.
   - **Cero configuración**: No requiere registrarse, ni instalar nada, ni abrir puertos en el router.
2. **Enlace Directo de Invitación**:
   - El Host tiene un botón **"🔗 Copiar Enlace de Invitación"** que genera una URL con el parámetro `?pin=XXXX`. Al compartirlo por WhatsApp, Teams o chat, los alumnos entran directamente con el código prellenado.
3. **Transporte Local (BroadcastChannel)**:
   - Permite que en un mismo ordenador se puedan abrir dos pestañas (Profesor y Alumno) para probarlo de inmediato con latencia de 0 ms.

---

## 🎧 Sistema de Audio Inmersivo Exclusivo del Host

> [!IMPORTANT]
> **Toda la música y efectos se reproducen ÚNICAMENTE en el dispositivo del Profesor (Host).**  
> Los teléfonos móviles de los alumnos permanecen 100% en silencio para evitar el caos acústico en el aula.

- 🎶 **Lobby de Espera**: Ritmo funk-pop dinámico y alegre a 124 BPM.
- 🧠 **Durante la Inspección (Pensando)**: Pista de concentración y suspense a 110 BPM con reloj de tensión y notas de marimba.
- 🏆 **Pantalla de Resultados**: Fanfarria triunfal festiva a 128 BPM para la revelación del podio y las soluciones.
- 🔔 **Efectos de Sonido (SFX)**: Campanilla de conexión de alumnos, *swoosh* de inicio de escenario, *ding* discreto cuando un alumno finaliza y golpe de impacto dramático al cortar la ronda.
- 🎛️ **Consola de Audio del Host**: Botón de Mute/Unmute permanente, deslizador de volumen maestro e indicador de pista activa en la cabecera.

---

## 🚀 Cómo Jugar con Alumnos en Redes Distintas (4G/5G / Diferentes Wi-Fi)

### Paso 1: Despliegue Gratuito en la Nube (Recomendado)
Sube esta carpeta a **GitHub Pages**, **Vercel** o **Netlify**:
- En **Netlify**: Simplemente arrastra la carpeta del proyecto a [netlify.com](https://netlify.com). Obtendrás una URL como `https://tu-simulador-prl.netlify.app`.
- En **Vercel**: Conecta tu repositorio o usa `npx vercel`.

### Paso 2: El Profesor Abre la Sala
1. El profesor abre la URL pública desde su PC o portátil (conectado al proyector).
2. Pulsa en **"Crear Sala (Profesor / Host)"** y hace clic en **"Abrir Sala y Mostrar PIN"**.
3. Se generará un código PIN de 4 dígitos (ej. `5821`).

### Paso 3: Los Alumnos se Conectan desde Cualquier Red
- **Opción A (Con el PIN)**: Los alumnos abren la web en sus móviles (con sus datos 4G/5G o Wi-Fi), pulsan en **"Unirse a Sala"** y escriben su nombre y el PIN `5821`.
- **Opción B (Con Enlace Directo)**: El profesor pulsa **"🔗 Copiar Enlace de Invitación"** y envía el enlace por WhatsApp o chat del aula. Al hacer clic, el PIN se autocompleta.

---

## 🗺️ 8 Escenarios Reales Disponibles

1. 🏢 **Oficina y Despachos**: Cables cruzados, líquidos junto a regletas, extintor bloqueado, archivador antivuelco y ergonomía (RD 486/1997, RD 614/2001, RD 513/2017, RD 488/1997).
2. 🏗️ **Obra de Construcción**: Operario sin casco bajo grúa, andamio sin barandillas perimetrales, zanja sin entibar ni señalizar, cuadro en charco de lluvia y escalera sobre bidones (RD 1627/1997, RD 2177/2004, RD 614/2001, RD 773/1997).
3. 🏭 **Almacén Logístico**: Palet deformado inestable en altura, derrame de aceite en pasillo, carretilla con horquillas altas y llave puesta, salida de emergencia bloqueada y manipulación de 40 kg (UNE-EN 15635, RD 1215/1997, RD 486/1997, RD 487/1997).
4. 🧪 **Laboratorio Químico y Biológico**: Reactivos químicos sin etiquetar ni pictograma CLP con vertido corrosivo, mechero Bunsen encendido junto a etanol 96%, ducha y lavaojos bloqueados, pipeteo bucal sin guantes ni gafas, y campana con guillotina abierta y motor apagado (RD 374/2001, RD 664/1997, RD 773/1997, NTP 500).
5. 🍳 **Cocina Industrial y Hostelería**: Suelo resbaladizo con grasa y agua, cuchillo de chef con hoja sobresaliendo hacia el pasillo, sartén hirviendo con mango hacia el exterior, llave de corte de gas y extintor clase F bloqueados por ollas, y filtros saturados de grasa (RD 486/1997, RD 1215/1997, RD 513/2017, CTE DB-SI).
6. 🏥 **Hospital y Centro Sanitario**: Aguja hipodérmica usada abandonada sin encapuchar (riesgo biológico), botellas de oxígeno medicinal a 200 bar libres sin cadena de amarre, bolsa de residuos biosanitarios infecciosos (Grupo III) rota en pasillo, camilla con frenos libres en rampa, y movilización de paciente con flexión lumbar lesiva (Orden ESS/1451/2013, RD 664/1997, RD 2060/2008, RD 1215/1997, RD 487/1997).
7. 🔧 **Taller Mecánico de Automoción**: Vehículo en elevador hidráulico sin trinquete mecánico enclavado, foso de mantenimiento abierto sin cadenas ni cubiertas, mecánico esmerilando sin pantalla facial ni gafas, torre inestable de neumáticos a 4 metros, y manguera de aire comprimido con rotura a 8 bares (UNE-EN 1493, RD 1215/1997, RD 486/1997, RD 773/1997, RD 2060/2008).
8. 🧗 **Trabajos en Alturas y Cubiertas**: Operario en tejado inclinado a 12m sin arnés ni línea de vida, claraboya plástica frágil sin red inferior, borde de cubierta sin barandilla perimetral ni rodapié, línea de vida provisional atada a chimenea agrietada, y escalera de mano que no sobrepasa 1m ni está sujeta en cabeza (RD 2177/2004, RD 1627/1997, UNE-EN 795, NTP 1032).

---

## 🏆 Revelación Técnica y Podio de la Clase

- **Sin feedback inmediato para los alumnos**: Sus pantallas muestran pines neutros (📍 1, 2, 3...) sin revelar si acertaron o fallaron para evitar que se copien en el aula.
- **Revelación en la pantalla del Host**: Al pulsar *"Terminar escenario y mostrar resultados"*, se proyecta el escenario con los riesgos reales resaltados y los nombres de los alumnos específicos que detectaron cada peligro.
- **Podio y Clasificación**: Ranking por puntuación (`+100 por acierto`, `-50 por falsa alarma`) con podio 🥇🥈🥉 y tabla descargable/imprimible.
