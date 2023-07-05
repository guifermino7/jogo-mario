/* function scoring() {

    const startTimer = () => {
        let seconds = 0;
        let tens = 0;
        let appendTens = document.getElementsByClassName("tens")[0];
        let appendSeconds = document.getElementsByClassName("seconds")[0];
        tens++;
    
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
    
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
    
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }
    
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
} */

let seconds = 0;
let tens = 0;
let appendTens = document.getElementsByClassName("tens")[0];
let appendSeconds = document.getElementsByClassName("seconds")[0];
let Interval;

/* buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {
   clearInterval(Interval);
}

buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
} */

/* function startTimer() {
    let seconds = 0;
    let tens = 0;
    let appendTens = document.getElementsByClassName("tens")[0];
    let appendSeconds = document.getElementsByClassName("seconds")[0];
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "00";
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
} */

const startGame = () => {

    const jump = () => {
        const mario = document.querySelector('.mario');
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    document.addEventListener('keydown', jump);

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    const nuvensIntroOne = document.querySelector('.clouds-intro-one');
    const nuvensIntroTwo = document.querySelector('.clouds-intro-two');
    const startButton = document.querySelector('.start-button');
    const refreshButton = document.querySelector('.refresh-button');
    const marioLogo = document.querySelector('.mario-logo');

    marioLogo.style.setProperty('display', 'none');

    nuvensIntroOne.style.setProperty('display', 'none');
    nuvensIntroTwo.style.setProperty('display', 'none');

    startButton.style.setProperty('display', 'none');
    refreshButton.style.setProperty('display', 'none');

    mario.src = './assets/img/mario.gif';
    mario.style.setProperty('width', '5.8rem');

    koopa.style.setProperty('display', 'flex');
    koopa.style.setProperty('animation', 'koopa-animation 1.5s infinite linear');

    nuvens.style.setProperty('display', 'flex');
    nuvens.style.setProperty('position', 'absolute');
    nuvens.style.setProperty('width', '30rem');
    nuvens.style.setProperty('top', '2rem');
    nuvens.style.setProperty('animation', 'clouds-animation 15s infinite linear');

    let appendTens = document.getElementsByClassName("tens")[0];
    let appendSeconds = document.getElementsByClassName("seconds")[0];
    let seconds = 0;
    let tens = 0;
    let Interval;

    if (koopa.style.animation = 'koopa-animation 1.5s infinite linear') {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }

    const loop = setInterval(() => {

        const koopa = document.querySelector('.koopa');
        const mario = document.querySelector('.mario');
        const nuvens = document.querySelector('.clouds');
        const refreshButton = document.querySelector('.refresh-button');
        const gameOver = document.querySelector('.game-board');
    
        const koopaPosition = koopa.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    
        if (koopaPosition <= 88 && koopaPosition > 0 && marioPosition < 160) {
    
            gameOver.style.setProperty('background-image', 'url(./assets/img/game-over-background.png)');
    
            refreshButton.style.setProperty('display', 'flex');
    
            nuvens.style.setProperty('display', 'none');
    
            koopa.src = './assets/img/koopa.png';
            koopa.style.setProperty('animation', 'none');
            koopa.style.setProperty('left', `${koopaPosition}px`);
    
            mario.src = './assets/img/game-over.gif';
            mario.style.setProperty('animation', 'none');
            mario.style.setProperty('bottom', `${marioPosition}px`);
            mario.style.setProperty('z-index', '1');
            mario.style.setProperty('width', '3.6rem');
            mario.style.setProperty('margin-left', '2rem');
    
            clearInterval(loop);
        }

    }, 10);
}

/* const loop = setInterval(() => {

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    const refreshButton = document.querySelector('.refresh-button');
    const gameOver = document.querySelector('.game-board');

    const koopaPosition = koopa.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if (koopaPosition <= 88 && koopaPosition > 0 && marioPosition < 160) {

        gameOver.style.setProperty('background-image', 'url(./assets/img/game-over-background.png)');

        refreshButton.style.setProperty('display', 'flex');

        nuvens.style.setProperty('display', 'none');

        koopa.src = './assets/img/koopa.png';
        koopa.style.setProperty('animation', 'none');
        koopa.style.setProperty('left', `${koopaPosition}px`);

        mario.src = './assets/img/game-over.gif';
        mario.style.setProperty('animation', 'none');
        mario.style.setProperty('bottom', `${marioPosition}px`);
        mario.style.setProperty('z-index', '1');
        mario.style.setProperty('width', '3.6rem');
        mario.style.setProperty('margin-left', '2rem');

        clearInterval(loop);
    }

}, 10); */

const resetGame = () => {

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    const nuvensIntroOne = document.querySelector('.clouds-intro-one');
    const nuvensIntroTwo = document.querySelector('.clouds-intro-two');
    const refreshButton = document.querySelector('.refresh-button');
    const marioLogo = document.querySelector('.mario-logo');
    const gameOver = document.querySelector('.game-board');

    const jump = () => {
        const mario = document.querySelector('.mario');
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    document.addEventListener('keydown', jump);

    if (nuvens.style.display = 'none') {

        refreshButton.style.setProperty('display', 'none');

        gameOver.style.removeProperty('background-image', 'url(./assets/img/game-over-background.png)');
        gameOver.style.setProperty('background-image', 'url(./assets/img/mario-background.png)')

        mario.src = './assets/img/mario.gif';
        mario.style.removeProperty('animation');
        mario.style.removeProperty('bottom');
        mario.style.removeProperty('width');
        mario.style.removeProperty('rotate');
        mario.style.removeProperty('margin-left');
        mario.style.setProperty('width', '5.8rem');

        koopa.src = './assets/img/koopa.gif';
        koopa.style.removeProperty('animation');
        koopa.style.removeProperty('left');
        koopa.style.setProperty('display', 'flex');
        koopa.style.setProperty('animation', 'koopa-animation 1.5s infinite linear');

        nuvens.style.removeProperty('animation');
        nuvens.style.removeProperty('left');

        nuvensIntroOne.style.setProperty('display', 'none');
        nuvensIntroTwo.style.setProperty('display', 'none');

        marioLogo.style.setProperty('display', 'none');

        nuvens.style.setProperty('display', 'flex');
        nuvens.style.setProperty('position', 'absolute');
        nuvens.style.setProperty('width', '30rem');
        nuvens.style.setProperty('top', '2rem');
        nuvens.style.setProperty('animation', 'clouds-animation 15s infinite linear');
    }

    setInterval(() => {

        const koopa = document.querySelector('.koopa');
        const mario = document.querySelector('.mario');
        const nuvens = document.querySelector('.clouds');

        const koopaPosition = koopa.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        if (koopaPosition <= 88 && koopaPosition > 0 && marioPosition < 160) {

            mario.src = './assets/img/game-over.gif';
            mario.style.setProperty('animation', 'none');
            mario.style.setProperty('animation', 'mario-dies 180ms ease-in-out infinite');
            mario.style.setProperty('bottom', `${marioPosition}px`);
            mario.style.setProperty('z-index', '1');
            mario.style.setProperty('width', '3.6rem');
            mario.style.setProperty('margin-left', '2rem');

            gameOver.style.setProperty('background-image', 'url(./assets/img/game-over-background.png)');

            refreshButton.style.setProperty('display', 'flex');

            nuvens.style.setProperty('display', 'none');

            koopa.src = './assets/img/koopa.png';
            koopa.style.setProperty('animation', 'none');
            koopa.style.setProperty('left', `${koopaPosition}px`);;

            clearInterval();
        }

    }, 10);

}
