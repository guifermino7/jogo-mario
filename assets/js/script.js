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
    const nuvensIntro = document.querySelector('.clouds-intro');
    const startButton = document.querySelector('.start-button');

    startButton.style.setProperty('display', 'none');

    mario.src = './assets/img/mario.gif';

    mario.style.setProperty('width', '5.8rem');

    koopa.style.setProperty('display', 'flex');
    koopa.style.setProperty('animation', 'koopa-animation 1.5s infinite linear');

    nuvensIntro.style.setProperty('display', 'none');

    nuvens.style.setProperty('display', 'flex');
    nuvens.style.setProperty('position', 'absolute');
    nuvens.style.setProperty('width', '30rem');
    nuvens.style.setProperty('top', '2rem');
    nuvens.style.setProperty('animation', 'clouds-animation 15s infinite linear');

}

const loop = setInterval(() => {

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    const refreshButton = document.querySelector('.refresh-button');
    
    const koopaPosition = koopa.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const nuvensPosition = nuvens.offsetLeft;

    refreshButton.style.setProperty('display', 'none');

    if (koopaPosition <= 88 && koopaPosition > 0 && marioPosition < 180) {

        refreshButton.style.setProperty('display', 'flex');

        koopa.style.setProperty('animation', 'none');
        koopa.style.setProperty('left', `${koopaPosition}px`);

        mario.style.setProperty('animation', 'none');
        mario.style.setProperty('bottom', `${marioPosition}px`);

        nuvens.style.setProperty('animation', 'none');
        nuvens.style.setProperty('left', `${nuvensPosition}px`);

        mario.src = './assets/img/game-over.png';
        
        mario.style.setProperty('width', '3.6rem');
        mario.style.setProperty('rotate', '-3.5deg');
        mario.style.setProperty('margin-left', '2rem');

        koopa.src = './assets/img/koopa.png';

        clearInterval(loop);
    }

}, 10);

const resetGame = () => {

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    const nuvensIntro = document.querySelector('.clouds-intro');
    const refreshButton = document.querySelector('.refresh-button');

    const jump = () => {
        const mario = document.querySelector('.mario');
        mario.classList.add('jump');
    
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    document.addEventListener('keydown', jump);

    if (nuvens.style.display = 'none') {

        mario.src = './assets/img/mario.gif';

        koopa.style.removeProperty('animation');
        koopa.style.removeProperty('left');

        mario.style.removeProperty('animation');
        mario.style.removeProperty('bottom');

        nuvens.style.removeProperty('animation');
        nuvens.style.removeProperty('left');
        
        mario.style.removeProperty('width');
        mario.style.removeProperty('rotate');
        mario.style.removeProperty('margin-left');


        mario.style.setProperty('width', '5.8rem');

        koopa.style.setProperty('display', 'flex');
        koopa.style.setProperty('animation', 'koopa-animation 1.5s infinite linear');

        nuvensIntro.style.setProperty('display', 'none');

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
        const nuvensPosition = nuvens.offsetLeft;
    
        if (koopaPosition <= 88 && koopaPosition > 0 && marioPosition < 180) {

            refreshButton.style.setProperty('display', 'flex');

            koopa.style.setProperty('animation', 'none');
            koopa.style.setProperty('left', `${koopaPosition}px`);

            mario.style.setProperty('animation', 'none');
            mario.style.setProperty('bottom', `${marioPosition}px`);

            nuvens.style.setProperty('animation', 'none');
            nuvens.style.setProperty('left', `${nuvensPosition}px`);

            mario.src = './assets/img/game-over.png';
            
            mario.style.setProperty('width', '3.6rem');
            mario.style.setProperty('rotate', '-3.5deg');
            mario.style.setProperty('margin-left', '2rem');

            koopa.src = './assets/img/koopa.png';

            clearInterval(loop);
        }
    
    }, 10);

}
