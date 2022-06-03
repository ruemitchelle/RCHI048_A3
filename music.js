const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

//Array to get song titles 
const songs = ['Hidden', 'Lofi Study', 'Moody Lofi Study']

let songIndex = 2

//load songs

loadSong(songs[songIndex])

//Update song details for title and song

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
}


//creating button action to play and pause music 

function playSong () {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause')

    audio.play()
}

function pauseSong () {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')

    audio.pause()
}


//creates function so if user goes back to last song, player will loop

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    
    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    
    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}


//Event Listeners

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }

})

//change song events 

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)