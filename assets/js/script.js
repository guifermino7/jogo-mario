const jump = () => {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const startGame = () => {
    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');

    mario.src = './assets/img/mario.gif';
    mario.style.width = '5.8rem';
    koopa.style.display = 'flex';
    nuvens.style.display = 'flex';
    koopa.style.animation = 'koopa-animation 1.5s infinite linear';
    nuvens.style.animation = 'clouds-animation 15s infinite linear';
}

const loop = setInterval(() => {

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    
    const koopaPosition = koopa.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const nuvensPosition = nuvens.offsetLeft;

    if (koopaPosition <= 88 && koopaPosition > 0 && marioPosition < 192) {
        koopa.style.animation = 'none';
        koopa.style.left = `${koopaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosition}px`;

        mario.src = './assets/img/game-over.png';
        mario.style.width = '3.6rem';
        mario.style.rotate = '-3.5deg';
        mario.style.marginLeft = '2rem';

        koopa.src = './assets/img/koopa.png';

        clearInterval(loop);
    }
    
}, 10);

document.addEventListener('keydown', jump);

const refreshPage = () => {
    window.location.reload();
}
