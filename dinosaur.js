const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
let isJumping = false;

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
});

function jump() {
    let position = 0;
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.right > cactusRect.left &&
        dinoRect.left < cactusRect.right &&
        dinoRect.bottom > cactusRect.top &&
        dinoRect.top < cactusRect.bottom
    ) {
        alert('Game Over!');
        document.location.reload();
    }
}

setInterval(checkCollision, 10);
