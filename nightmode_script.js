document.addEventListener('DOMContentLoaded', () => {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const stars = document.getElementById('stars');
    const sky = document.querySelector('.sky');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    let isDay = true;

    function transitionSky() {
        let step = 0;
        const steps = 100;
        const interval = setInterval(() => {
            step++;
            const progress = step / steps;

            if (isDay) {
                // Day to Night Transition
                const skyColor = `linear-gradient(to bottom, rgba(${135 - progress * 135}, ${206 - progress * 206}, ${235 - progress * 235}, 1), rgba(${255 - progress * 255}, ${215 - progress * 215}, ${0 - progress * 0}, 1))`;
                sky.style.background = skyColor;
                overlay.style.backgroundColor = `rgba(0, 0, ${51 + progress * (204 - 51)}, 0.7)`;
                body.style.backgroundColor = `rgba(0, 0, 0, ${progress})`;
                body.style.color = `rgba(255, 255, 255, ${progress})`;
                sun.style.top = `${10 + progress * 80}%`;
                sun.style.opacity = `${1 - progress}`;
                moon.style.top = `${90 - progress * 80}%`;
                moon.style.opacity = `${progress}`;
                stars.style.opacity = `${progress}`;
            } else {
                // Night to Day Transition
                const skyColor = `linear-gradient(to bottom, rgba(${0 + progress * 135}, ${0 + progress * 206}, ${0 + progress * 235}, 1), rgba(${0 + progress * 255}, ${0 + progress * 215}, ${0 + progress * 0}, 1))`;
                sky.style.background = skyColor;
                overlay.style.backgroundColor = `rgba(0, 0, ${204 - progress * (204 - 51)}, 0.7)`;
                body.style.backgroundColor = `rgba(0, 0, 0, ${1 - progress})`;
                body.style.color = `rgba(255, 255, 255, ${1 - progress})`;
                sun.style.top = `${90 - progress * 80}%`;
                sun.style.opacity = `${progress}`;
                moon.style.top = `${10 + progress * 80}%`;
                moon.style.opacity = `${1 - progress}`;
                stars.style.opacity = `${1 - progress}`;
            }

            if (step >= steps) {
                clearInterval(interval);
                isDay = !isDay;
            }
        }, 50);
    }

    sun.addEventListener('click', transitionSky);
    moon.addEventListener('click', transitionSky);
});
