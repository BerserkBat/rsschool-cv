let isPlay = false;
let firstPlay = true;
const audio = new Audio();
let day = true;

window.onload = function ecoSound() {
    let animals = document.querySelectorAll(".sound");
    console.log(animals);
}

    function playAudio(day,a) {
        if (firstPlay) {
            firstPlay = false;
        }
        audio.src = "sounds/"+day+"-"+a+".mp3";
        //audio.muted=true;
        audio.currentTime = 0;
        audio.loop = true;
        audio.play();
        //console.log("Function playAudio");
        let main = document.getElementById("main")
        main.style.backgroundImage = "url('imgs/"+day+"-"+a+".jpg')";
        let startButton = document.getElementById("start-btn");
        isPlay = true;
        //startButton.classList.add("hidden")
        let play = document.getElementById("play");
        let pause = document.getElementById("pause");
        play.classList.add("hidden");
        pause.classList.remove("hidden")
        let animals = document.querySelectorAll(".sound");
        animals.forEach(element => element.classList.remove("active"));
        let activeBtn = document.getElementById(a);
        activeBtn.classList.add("active");
    }

    function playPause() {
        if (firstPlay) {
            playAudio("day", 0);
            firstPlay = false;
        } else {
            let play = document.getElementById("play");
            let pause = document.getElementById("pause");
            if (!isPlay) {
                audio.play();
                isPlay = true;
                play.classList.add("hidden");
                pause.classList.remove("hidden")

            } else if (isPlay) {
                audio.pause();
                isPlay = false;
                pause.classList.add("hidden");
                play.classList.remove("hidden");
            }
        }
    }
    function start() {
        playAudio();
        console.log("Start audio");
        //isPlay = true;
    }

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        console.log('Space pressed'); //whatever you want to do when space is pressed
        playPause();
    }
})

function dayNight(){
    let options = document.querySelectorAll("#day-night > i");
//console.log(options);
    //let daySounds = document.querySelectorAll("#animals-container > .day");
    //let nightSounds = document.querySelectorAll("#animals-container > .night");
    options.forEach(element => {
        if(element.classList.contains("active")){
            element.classList.remove("active");
            element.classList.add("hidden");
        } else{
            element.classList.add("active");
            element.classList.remove("hidden");
        }
    })
    let animals = document.querySelectorAll(".sound");
    animals.forEach(element => {
        if(element.classList.contains("hidden")){
            element.classList.remove("hidden");
        } else{
            element.classList.add("hidden");
        }
    })
    day = !day;
    let main = document.getElementById("main");
    main.style.backgroundImage = "url('imgs/bg.jpg')";
    //console.log(day);
    if(isPlay){
        playPause();
    }
}

function randomSound(){
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let animals = document.querySelectorAll(".sound");
    animals.forEach(element => element.classList.remove("active"));
    if(day){
        let a = getRandom(0,4);
        playAudio("day", a);
    } else{
        let a = getRandom(5,9);
        playAudio("night", a);
    }
}


