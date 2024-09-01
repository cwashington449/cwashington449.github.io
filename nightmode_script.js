alert('JavaScript is running');
document.addEventListener('DOMContentLoaded', () => {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const stars = document.getElementById('stars');
    const sky = document.querySelector('.sky');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    sun.addEventListener('click', () => {
        console.log('Sun clicked'); // Debugging line
        sun.style.top = '90%';
        sun.style.opacity = '0';
        moon.style.top = '10%';
        moon.style.opacity = '1';
        stars.style.opacity = '1';
        sky.style.background = 'linear-gradient(to bottom, #000033, #000)';
        overlay.style.backgroundColor = 'rgba(0, 0, 51, 0.7)';
        body.style.backgroundColor = '#000';
        body.style.color = '#fff';
    });

    moon.addEventListener('click', () => {
        console.log('Moon clicked'); // Debugging line
        moon.style.top = '90%';
        moon.style.opacity = '0';
        sun.style.top = '10%';
        sun.style.opacity = '1';
        stars.style.opacity = '0';
        sky.style.background = 'linear-gradient(to bottom, #87CEEB, #FFD700)';
        overlay.style.backgroundColor = 'rgba(0, 68, 204, 0.7)';
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';
    });
});
