const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const scene = document.getElementById('scene');
let isDay = true;

sun.addEventListener('click', () => {
    if (isDay) {
        sun.style.transition = 'all 10s';
        moon.style.transition = 'all 10s';
        scene.style.transition = 'background 10s';

        sun.style.top = '110%';
        sun.style.left = '10%';
        moon.style.display = 'block';
        moon.style.top = '10%';
        moon.style.left = '90%';

        scene.style.background = 'linear-gradient(to bottom, #FF4500, #000033)';

        setTimeout(() => {
            sun.style.display = 'none';
            moon.style.top = '10%';
            moon.style.left = '50%';
            moon.style.transform = 'translateX(-50%)';
            addStars();
        }, 10000);

        isDay = false;
    }
});

moon.addEventListener('click', () => {
    if (!isDay) {
        sun.style.display = 'block';
        sun.style.top = '10%';
        sun.style.left = '90%';
        sun.style.transform = 'translateX(-50%)';
        moon.style.transition = 'all 10s';
        moon.style.top = '110%';
        moon.style.left = '10%';

        scene.style.background = 'linear-gradient(to bottom, #87CEEB, #228B22)';
        removeStars();

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
