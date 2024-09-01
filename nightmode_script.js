document.addEventListener('DOMContentLoaded', () => {
    const scene = document.getElementById('scene');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    sun.addEventListener('click', () => {
        scene.style.background = 'linear-gradient(to bottom, #2C3E50, #000000)'; // Nighttime sky
        sun.style.display = 'none';
        moon.style.display = 'block';
    });

    moon.addEventListener('click', () => {
        scene.style.background = 'linear-gradient(to bottom, #87CEEB, #FFFFFF)'; // Daytime sky
        moon.style.display = 'none';
        sun.style.display = 'block';
    });
});
