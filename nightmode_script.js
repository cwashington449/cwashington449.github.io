document.addEventListener('DOMContentLoaded', () => {
    const scene = document.getElementById('scene');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    // Function to create stars
    function createStars() {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            scene.appendChild(star);
        }
    }

    createStars();

    sun.addEventListener('click', () => {
        scene.classList.remove('day');
        scene.classList.add('night');
        scene.style.background = 'linear-gradient(to bottom, #2C3E50, #000000)'; // Nighttime sky
    });

    moon.addEventListener('click', () => {
        scene.classList.remove('night');
        scene.classList.add('day');
        scene.style.background = 'linear-gradient(to bottom, #87CEEB, #FFFFFF)'; // Daytime sky
    });
});
