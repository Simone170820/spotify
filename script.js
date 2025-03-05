// Funzione per mostrare i dettagli della canzone
function showSongDetails(title, image, audioSrc) {
    document.getElementById('song-title').innerText = title;
    document.getElementById('song-image').src = image;
    document.getElementById('audio-player').src = audioSrc;
    document.getElementById('song-details').style.display = 'block';
}

// Funzione per riprodurre la musica
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const audioPlayer = document.getElementById('audio-player');

// Funzione per avviare la musica
function playMusic() {
    audioPlayer.play();
}

// Funzione per mettere in pausa la musica
function pauseMusic() {
    audioPlayer.pause();
}

// Event listeners per i bottoni
playButton.addEventListener('click', playMusic);
pauseButton.addEventListener('click', pauseMusic);

// Aggiungi qui altre funzioni per controllare la playlist se necessario
