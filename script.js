const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const scene = document.getElementById('scene');
let isDay = true;

sun.addEventListener('click', () => {
    if (isDay) {
        sun.style.transition = 'all 10s';
        moon.style.transition = 'all 10s';
        scene.style.transition = 'background 10s';

        // Move the sun in an arc
        sun.style.transform = 'translate(-50%, 100vh) rotate(180deg)';
        sun.style.left = '10%';

        // Delay the moon's appearance to avoid overlap
        setTimeout(() => {
            moon.style.display = 'block';
            moon.style.transform = 'translate(-50%, -100vh) rotate(180deg)';
            moon.style.left = '90%';
        }, 5000);

        // Gradually change the sky color
        setTimeout(() => {
            scene.style.background = 'linear-gradient(to bottom, #000000, #000033)';
            addStars();
        }, 5000);

        setTimeout(() => {
            sun.style.display = 'none';
        }, 10000);

        isDay = false;
    }
});

moon.addEventListener('click', () => {
    if (!isDay) {
        sun.style.display = 'block';
        sun.style.transition = 'all 10s';
        moon.style.transition = 'all 10s';
        scene.style.transition = 'background 10s';

        // Move the moon in an arc
        moon.style.transform = 'translate(-50%, 100vh) rotate(180deg)';
        moon.style.left = '10%';

        // Delay the sun's appearance to avoid overlap
        setTimeout(() => {
            sun.style.transform = 'translate(-50%, -100vh) rotate(180deg)';
            sun.style.left = '90%';
        }, 5000);

        // Gradually change the sky color
        setTimeout(() => {
            scene.style.background = 'linear-gradient(to bottom, #87CEEB, #228B22)';
            removeStars();
        }, 5000);

        setTimeout(() => {
            moon.style.display = 'none';
        }, 10000);

        isDay = true;
    }
});

function addStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.top = `${Math.random() * 50}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = 0;
        star.style.transition = 'opacity 2s';
        scene.appendChild(star);
        setTimeout(() => {
            star.style.opacity = 1;
        }, 5000);
    }
}

function removeStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.opacity = 0;
        setTimeout(() => {
            star.remove();
        }, 2000);
    });
}
