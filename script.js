console.log("Welcome to my Spotify Clone Website");

let songItem = Array.from(document.getElementsByClassName('songItem'));
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let range = document.getElementById('range');

if(audioElement.paused){
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
}

let songs = [
    { songName: "Faraar", filePath: "songs/1.mp3", coverPath: "images/cover5.jpg" },
    { songName: "Ganni", filePath: "songs/2.mp3", coverPath: "images/cover6.jpg" },
    { songName: "52 Bars", filePath: "songs/3.mp3", coverPath: "images/cover3.jpg" },
    { songName: "On Top", filePath: "songs/4.mp3", coverPath: "images/cover4.jpg" },
    { songName: "295", filePath: "songs/5.mp3", coverPath: "images/cover1.jpg" },
    { songName: "so High", filePath: "songs/6.mp3", coverPath: "images/cover2.jpg" },
]

songItem.forEach((element, i) => {
    document.getElementsByClassName('songName')[i].innerText = songs[i].songName;
    document.getElementsByClassName('covers')[i].src = songs[i].coverPath;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.currentTime == 0 || audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause') 
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    }
});

audioElement.addEventListener('timeupdate', () => {
    if(audioElement.paused && audioElement.currentTime > 2){
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')
    }
    
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    range.value = progress;
});

range.addEventListener('change', () => {
    audioElement.currentTime = (range.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playButton')).forEach((element) => {
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })
}

Array.from(document.getElementsByClassName('playButton')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay()
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        index = parseInt(e.target.id)
        audioElement.src = `songs/${index}.mp3`
        audioElement.currentTime == 0;
        audioElement.play();
    })
})

document.getElementById('backward').addEventListener('click', () => {
    if (index == 1) {
        index = 6
    }
    else {
        index -= 1
    }
    audioElement.src = `songs/${index}.mp3`
    audioElement.currentTime == 0;
    audioElement.play();
})

document.getElementById('forward').addEventListener('click', () => {
    if (index == 6) {
        index = 1
    }
    else {
        index += 1
    }
    audioElement.src = `songs/${index}.mp3`
    audioElement.currentTime == 0;
    audioElement.play();
})