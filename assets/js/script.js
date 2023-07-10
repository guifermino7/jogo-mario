const startGame = () => {

    const jump = () => {
        const mario = document.querySelector('.mario');
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    document.addEventListener('keydown', (e) => {
        if ((e.code === "ArrowUp") | (e.code === "Space") | (e.code === "KeyW")) {
            jump();
        }
    });

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    const nuvensIntroOne = document.querySelector('.clouds-intro-one');
    const nuvensIntroTwo = document.querySelector('.clouds-intro-two');
    const startButton = document.querySelector('.start-button');
    const refreshButton = document.querySelector('.refresh-button');
    const marioLogo = document.querySelector('.mario-logo');
    const score = document.querySelector('.score');
    let count = 0;

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

    const loop = setInterval(() => {

        const koopa = document.querySelector('.koopa');
        const mario = document.querySelector('.mario');
        const nuvens = document.querySelector('.clouds');
        const refreshButton = document.querySelector('.refresh-button');
        const gameOver = document.querySelector('.game-board');

        const koopaPosition = koopa.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        console.log(koopaPosition);

        if (koopaPosition <= 110 && koopaPosition > 0 && marioPosition < 160) {

            gameOver.style.setProperty('background-image', 'url(./assets/img/game-over-background.png)');

            refreshButton.style.setProperty('display', 'flex');

            nuvens.style.setProperty('display', 'none');

            koopa.src = './assets/img/koopa.png';
            koopa.style.setProperty('animation', 'none');
            koopa.style.setProperty('left', `${koopaPosition}px`);

            console.log(`Bateu em ${koopaPosition} px`);

            mario.src = './assets/img/game-over.gif';
            mario.style.setProperty('animation', 'none');
            mario.style.setProperty('bottom', `${marioPosition}px`);
            mario.style.setProperty('z-index', '1');
            mario.style.setProperty('width', '3.6rem');
            mario.style.setProperty('margin-left', '2rem');

            clearInterval(loop);
        }

        count++;
        score.innerHTML = `Pontuação: ${count}`;

    }, 10);
}

const resetGame = () => {

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    const nuvensIntroOne = document.querySelector('.clouds-intro-one');
    const nuvensIntroTwo = document.querySelector('.clouds-intro-two');
    const refreshButton = document.querySelector('.refresh-button');
    const marioLogo = document.querySelector('.mario-logo');
    const gameOver = document.querySelector('.game-board');
    const score = document.querySelector('.score');
    let count = 0;

    const jump = () => {
        const mario = document.querySelector('.mario');
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    document.addEventListener('keydown', (e) => {
        if ((e.code === "ArrowUp") | (e.code === "Space") | (e.code === "KeyW")) {
            jump();
        }
    });

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

    const loop = setInterval(() => {

        const koopaPosition = koopa.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        if (koopaPosition <= 110 && koopaPosition > 0 && marioPosition < 160) {

            mario.src = './assets/img/game-over.gif';
            mario.style.setProperty('animation', 'none');
            /* mario.style.setProperty('animation', 'mario-dies 180ms ease-in-out infinite'); */
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

            clearInterval(loop);
        }

    }, 10);

    setInterval(() => {

        const koopaPosition = koopa.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        if (koopaPosition <= 110 && koopaPosition > 0 && marioPosition < 160) {
            clearInterval();
            count = 0;
        }

        count++;
        score.innerHTML = `Pontuação: ${count}`;

    }, 10);
}