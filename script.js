const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const scene = document.getElementById('scene');
const stars = [];
let isDay = true;

// Function to place bushes and trees randomly on the ground
function placeElementsRandomly() {
    const bushes = document.querySelectorAll('.bush');
    const trees = document.querySelectorAll('.tree');
    bushes.forEach(bush => {
        bush.style.left = `${Math.random() * 90}%`;
    });
    trees.forEach(tree => {
        tree.style.left = `${Math.random() * 90}%`;
    });
}

// Call the function to place elements randomly on page load
placeElementsRandomly();

sun.addEventListener('click', () => {
    if (isDay) {
        sun.style.transition = 'all 5s';
        moon.style.transition = 'all 5s';
        scene.style.transition = 'background 5s';

        sun.style.top = '80%';
        sun.style.right = '10%';
        moon.style.display = 'block';
        moon.style.top = '10%';
        moon.style.right = '10%';

        scene.style.background = 'linear-gradient(to bottom, #000033 50%, #228B22 50%)';

        setTimeout(() => {
            sun.style.display = 'none';
            moon.style.top = '10%';
            moon.style.right = '10%';
            addStars();
        }, 5000);

        isDay = false;
    }
});

moon.addEventListener('click', () => {
    if (!isDay) {
        sun.style.display = 'block';
        sun.style.top = '10%';
        sun.style.right = '10%';
        moon.style.display = 'none';
        scene.style.background = 'linear-gradient(to bottom, #87CEEB 50%, #228B22 50%)';
        stars.forEach(star => {
            star.style.opacity = 0;
        });

        isDay = true;
    }
});

function addStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 50}%`; // Ensure stars are in the sky
        star.style.left = `${Math.random() * 100}%`;
        scene.appendChild(star);
        stars.push(star);
    }
    stars.forEach(star => {
        star.style.opacity = 1;
    });
}
