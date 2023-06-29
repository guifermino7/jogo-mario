const jump = () => {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const koopa = document.querySelector('.koopa');
    const mario = document.querySelector('.mario');
    const nuvens = document.querySelector('.clouds');
    
    const koopaPosition = koopa.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const nuvensPosition = nuvens.offsetLeft;

    console.log(koopaPosition);
    
    if (koopaPosition <= 90 && koopaPosition > 0 && marioPosition < 160) {
        koopa.style.animation = 'none';
        koopa.style.left = `${koopaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosition}px`;

        mario.src = './assets/img/game-over.png';
        mario.style.width = '3.6rem';
        mario.style.rotate = '-3.5deg';
        mario.style.marginLeft = '3rem';

        koopa.src = './assets/img/koopa.png'

        clearInterval(loop);
        document.addEventListener('keydown', refreshPage);
    }
    
}, 10);

const refreshPage = () => {
    window.location.reload();
}

document.addEventListener('keydown', jump);