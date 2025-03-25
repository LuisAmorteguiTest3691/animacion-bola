const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');

// Cargar el sprite sheet
const sprite = new Image();
sprite.src = 'img/imagen prueba_Mesa de trabajo.png'; // Asegúrate de que la ruta sea correcta

// Definiciones del sprite
const frameWidth = 200;
const frameHeight = 200;
const framesPorFila = 3; // 3 columnas
const totalFrames = 9;   // 9 cuadros en total

let frameActual = 0;     // Índice del frame actual
const velocidad = 100;   // Velocidad de la animación en milisegundos

function actualizarFrame() {
    // Calcula la posición (columna y fila) del frame actual en el sprite sheet
    const columna = frameActual % framesPorFila;
    const fila = Math.floor(frameActual / framesPorFila);

    // Coordenadas de origen en el sprite sheet
    const sx = columna * frameWidth;
    const sy = fila * frameHeight;

    // Limpia el canvas antes de dibujar el nuevo frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja el frame correspondiente en el canvas
    // Parámetros de drawImage: imagen, sx, sy, sw, sh, dx, dy, dw, dh
    ctx.drawImage(sprite, sx, sy, frameWidth, frameHeight, 0, 0, canvas.width, canvas.height);

    // Actualiza el frame para la próxima iteración
    frameActual = (frameActual + 1) % totalFrames;
}

sprite.onload = function() {
    setInterval(actualizarFrame, velocidad);
}

