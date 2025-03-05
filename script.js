// Funzione per gestire i controlli musicali
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const shuffleButton = document.getElementById('shuffle-button');

// Simuliamo un array di canzoni
const songs = [
    { title: 'addios', file: 'assets/music/song1.mp3' },
    { title: 'Song Title 2', file: 'assets/music/song2.mp3' },
    { title: 'Song Title 3', file: 'assets/music/song3.mp3' },
    { title: 'Song Title 4', file: 'assets/music/song4.mp3' },
];

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].file);

// Funzione per riprodurre la musica
function playMusic() {
    audio.play();
}

// Funzione per mettere in pausa la musica
function pauseMusic() {
    audio.pause();
}

// Funzione per passare alla canzone successiva
function nextMusic() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].file;
    playMusic();
}

// Funzione per passare alla canzone precedente
function prevMusic() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex].file;
    playMusic();
}

// Funzione per mescolare le canzoni (shuffle)
function shuffleMusic() {
    currentSongIndex = Math.floor(Math.random() * songs.length);
    audio.src = songs[currentSongIndex].file;
    playMusic();
}

// Event listeners per i bottoni
playButton.addEventListener('click', playMusic);
pauseButton.addEventListener('click', pauseMusic);
nextButton.addEventListener('click', nextMusic);
prevButton.addEventListener('click', prevMusic);
shuffleButton.addEventListener('click', shuffleMusic);

// Inizializza la prima canzone
audio.src = songs[currentSongIndex].file;
