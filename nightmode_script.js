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

    // Create stars on page load
    createStars();

    // Event listener for sun click to transition to night
    sun.addEventListener('click', () => {
        scene.classList.remove('day');
        scene.classList.add('night');
        sun.style.opacity = 1; // Ensure sun is visible for animation
    });

    // Event listener for moon click to transition to day
    moon.addEventListener('click', () => {
        scene.classList.remove('night');
        scene.classList.add('day');
        sun.style.opacity = 0; // Start with sun hidden
    });
});
