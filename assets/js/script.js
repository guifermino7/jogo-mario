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
    
    const koopaPosition = koopa.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (koopaPosition <= -10 && marioPosition < 40) {
        koopa.style.animation = 'none';
        koopa.style.left = `${koopaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/img/game-over.png';
        mario.style.width = '3.6rem';
        mario.style.rotate = '-3.5deg';
        mario.style.marginLeft = '3rem';

        clearInterval(loop);
    }
    
}, 10);

document.addEventListener('keydown', jump);