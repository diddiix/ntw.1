const yesBtn = document.getElementById('yesBtn');
const videoContainer = document.getElementById('video-container');
const continueBtn = document.getElementById('continue-btn');
const showFlowersBtn = document.getElementById('showFlowersBtn'); // Botón de flores
const content = document.getElementById('content');
const flowersContainer = document.getElementById('flowers-container');

// Función de la API de YouTube para inicializar el reproductor
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('scaryVideo', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Función para manejar el autoplay y la pantalla completa
function onPlayerReady(event) {
    player.setPlaybackRate(2);  // Ajusta la velocidad de reproducción a 2x
    event.target.playVideo();   // Reproduce automáticamente

    // Poner el video en pantalla completa
    let iframe = document.getElementById('scaryVideo');
    let requestFullScreen = iframe.requestFullscreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullscreen || iframe.msRequestFullscreen;
    if (requestFullScreen) {
        requestFullScreen.call(iframe);  // Pone el video en pantalla completa
    }

    // Mostrar el botón después de 20 segundos
    setTimeout(() => {
        showFlowersBtn.style.display = 'block';
    }, 20000); // 20 segundos
}

// Detecta cuando el video ha terminado
function onPlayerStateChange(event) {
    if (event.data === 0) {  // Estado 0 es cuando el video termina
        videoContainer.style.display = 'none'; // Oculta el contenedor del video
        continueBtn.style.display = 'block'; // Muestra el botón "Continuar"
    }
}

// Al hacer clic en "Sí", mostramos el video de terror
yesBtn.addEventListener('click', function() {
    content.style.display = 'none';  // Oculta la pantalla inicial
    videoContainer.style.display = 'flex';  // Muestra el contenedor del video
});
// Detecta cuando el video ha terminado
function onPlayerStateChange(event) {
    if (event.data === 0) {  // Estado 0 es cuando el video termina
        videoContainer.style.display = 'none'; // Oculta el contenedor del video
        continueBtn.style.display = 'block'; // Muestra el botón "Continuar"
    }
}

// Al hacer clic en "Continuar", muestra las flores y reproduce la canción
continueBtn.addEventListener('click', function() {
    flowersContainer.style.display = 'flex';  // Muestra el contenedor de las flores
    document.getElementById('black-screen').style.display = 'none'; // Oculta la pantalla negra

    // Configura y reproduce la canción al hacer clic en "Continuar"
    const floricientaAudio = document.getElementById('floricienta-audio');
    floricientaAudio.src = "https://www.youtube.com/embed/S7gMzYqXIZc?autoplay=1&enablejsapi=1"; // Cambia el src para iniciar la reproducción
    audioContainer.style.display = 'block'; // Muestra el contenedor de audio
});



// Cargamos la API de YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
