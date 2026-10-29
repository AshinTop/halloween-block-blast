[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [日本語](README.ja.md)

# Witch’s Candy Blocks — Puzzle de bloques de Halloween y pedidos de pociones

🍬 Una bruja trae dulces de formas extrañas y un caldero espera tu mejor idea. **Witch’s Candy Blocks** es un puzzle de Halloween sobre hacer espacio en un tablero de 8×8. Encaja las piezas, completa filas y columnas, y convierte cada limpieza en un poco de magia de medianoche.

**[Jugar ahora](https://halloween-block-blast.crazy3d.org/)** · [Ver los 12 juegos de Halloween](https://github.com/AshinTop/halloween-games) · [⭐ Dar una estrella en GitHub](https://github.com/AshinTop/halloween-block-blast)

El README está disponible en cinco idiomas. La **interfaz del juego solo ofrece inglés y chino simplificado**.

![Tablero de ocho por ocho, bandeja de tres piezas, objetivos con telarañas y caldero de Witch’s Candy Blocks](docs/images/gameplay.jpg)

## Qué lo hace especial

- Tablero de **8×8** y bandeja de tres piezas. Filas y columnas completas se eliminan juntas; una casilla compartida solo cuenta una vez.
- **Classic** para mejorar la puntuación y **cinco Potion Orders fijos** con recorridos completos verificados.
- Arrastrar y soltar, seleccionar y tocar, teclado y vistas previas de colocación y líneas que se completarán.
- Un **Moon Rewind** por partida recupera toda la colocación anterior, incluidos puntos, bandeja, objetivos y secuencia aleatoria.
- Arte original de dulces, telarañas, botellas y caldero; sonido opcional, movimiento reducido y progreso local.

## Cómo jugar

Elige una figura y colócala completamente dentro del tablero sin superponer casillas ocupadas. Completa las ocho casillas de una fila o columna para eliminarla. **Los colores no necesitan coincidir y las figuras no giran.** No hay temporizador de caída. La siguiente bandeja aparece cuando has colocado las tres piezas actuales.

En **Classic**, conserva espacio y aumenta tu puntuación. Cada 12 líneas completas llenan otra botella. La partida termina cuando ninguna pieza restante tiene una colocación legal, no solo porque una figura concreta resulte incómoda.

En **Potion Orders**, elimina los dulces que tenían telaraña al principio antes de agotar el número de colocaciones. Los dulces nuevos no se convierten en objetivos. Los cinco puzzles enseñan filas simples, filas emparejadas, cruces, planificación de las tres figuras y finales de doble fila. Tableros y secuencias son fijos.

**Moon Rewind** se usa una vez por partida. Puede recuperar la última colocación después de quedarte sin espacio, pero no deshace un pedido ya completado. Reiniciar abre un intento nuevo; no hay deshacer ilimitado.

## Controles

| Acción | Cómo hacerlo |
| --- | --- |
| Seleccionar pieza | Tocar la bandeja o pulsar **1 / 2 / 3** |
| Colocar | Arrastrar o tocar la casilla de su esquina superior izquierda |
| Colocar con teclado | Flechas para el cursor; **Enter** para colocar |
| Moon Rewind | **Z** o el botón correspondiente |
| Modo, pedido, reinicio y ayuda | Botones o menú compacto; el teclado necesita foco en el iframe |

## Un poco de estrategia

Mira las tres figuras antes de ocupar la zona libre más grande. Una limpieza pequeña y tentadora puede dejar la siguiente pieza sin sitio. En un pedido, prioriza las telarañas originales, no todas las casillas de colores. Revisa la vista previa antes de soltar y reserva Moon Rewind para una colocación cuyas consecuencias no habías previsto.

## Progreso y enlaces de desafío

El navegador conserva la partida Classic sin terminar, el récord, los pedidos completados y las preferencias cuando permite almacenamiento. No se sincronizan entre dispositivos. El [pedido 3](https://halloween-block-blast.crazy3d.org/#order=3) abre ese desafío fijo; los valores 1–5 eligen los demás. Compartir copia la puntuación o el resultado real y un enlace, no una repetición ni un tablero subido a un servidor. Si la copia está bloqueada, queda texto disponible.

## Capturas y presentación en vídeo

![Distribución compacta con tablero, bandeja, progreso del pedido y Moon Rewind](docs/images/mobile.jpg)

Captura real dentro de un iframe compacto. Muestra la distribución en una ventana pequeña, no una prueba en un teléfono físico.

[Reproductor y transcripción](https://halloween-block-blast.crazy3d.org/intro.html) · [Descargar el MP4](docs/media/intro.mp4)

La **presentación de 24 segundos, sin sonido**, combina capturas reales y rótulos. Es un recorrido visual, no una partida grabada de forma continua ni una muestra de audio.

## Preguntas frecuentes

### ¿Es un juego de combinar tres?

Se trata de encajar figuras para completar filas y columnas. El color es decorativo; no intercambias dulces vecinos. Para eso puedes probar Witch’s Potion Match, enlazado más abajo.

### ¿Por qué no se renueva la bandeja?

Debes usar las tres piezas del lote actual. Conviene planificar alrededor de la más difícil, no solo de las fáciles.

### ¿Qué recupera Moon Rewind?

El tablero, bandeja, puntos, líneas, objetivos y estado aleatorio anteriores a la colocación. Solo hay uno por partida: no sirve para probar infinitamente todos los huecos.

## Ejecutar en local e insertar el juego

Sirve la raíz del repositorio mediante HTTP:

```sh
python3 -m http.server 4173
```

Abre **http://localhost:4173/**. No requiere compilación ni dependencias. Usa HTTP: `file://` puede bloquear los módulos JavaScript.

Ejecuta las comprobaciones incluidas con Node:

```sh
npm test
```

Las pruebas verifican colocaciones rechazadas, cruces simultáneos, reposición de la bandeja, finales, generación determinista, las cinco soluciones y los datos Classic guardados. No requieren compilar ni instalar dependencias.

```html
<iframe src="https://halloween-block-blast.crazy3d.org/?embed=1"
  title="Witch’s Candy Blocks"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

El espacio de escritorio tiene **654 px** de altura. Se revisaron ventanas de 1160×654, 390×650 y 844×340, incluyendo completar un pedido y rebobinar. La bandeja pasa al lado o debajo del tablero; los diálogos pueden desplazarse internamente.

Consulta [EMBEDDING.md](EMBEDDING.md) para tamaño, almacenamiento, foco y permisos. Mide la altura restante después de la barra del sitio anfitrión.

## Más pequeñas aventuras de Halloween

- **[Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-potion-match) — Intercambia ingredientes, provoca cascadas y enciende velas.
- **[Pumpkin 2048](https://halloween-2048.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-2048) — Combina calabazas numeradas y resuelve pruebas con casillas objetivo.
- **[Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-tripeaks) — Encadena cartas de valores consecutivos en ocho rescates.
- **[Haunted Hearts](https://halloween-love-game.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-love-game) — Ayuda a dos fantasmas a compartir puertas, caminos y una linterna.

## Créditos y apoyo

Creado para **AshinTop** y **Midnight Candy Club** con diseño, programación y revisión dirigidos por personas y asistidos por IA. Arte y sonidos sintetizados originales del proyecto. No necesita cuenta remota; el alojamiento puede añadir scripts o registros de solicitudes.

¿Te ha gustado? **[Dale una estrella en GitHub](https://github.com/AshinTop/halloween-block-blast)**. Para informar de errores, incluye navegador, tamaño del iframe, enlace y pasos para reproducirlos.
