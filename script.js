const sun = document.querySelector('.sun');
const sunGlow = document.querySelector('.sun-glow');
const moon = document.querySelector('.moon');
const sky = document.querySelector('.sky');

let isDayMode = true;

sun.addEventListener('click', () => {
  if (isDayMode) {
    animateSunToNight();
    isDayMode = false;
  } else {
    animateSunToDay();
    isDayMode = true;
  }
});

moon.addEventListener('click', () => {
  if (!isDayMode) {
    animateSunToDay();
    isDayMode = true;
  } else {
    animateSunToNight();
    isDayMode = false;
  }
});

function animateSunToNight() {
  sun.style.transform = 'translate(500px, -200px)';
  sun.style.backgroundColor = '#f0f0f0';
  sunGlow.style.backgroundColor = 'rgba(255, 255, 0, 0)';
  moon.style.display = 'block';
  moon.style.transform = 'translate(0, 100px)';
  sky.style.backgroundColor = '#111';
}

function animateSunToDay() {
  sun.style.transform = 'translate(0, 0)';
  sun.style.backgroundColor = 'yellow';
  sunGlow.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
  moon.style.display = 'none';
  moon.style.transform = 'translate(0, -200px)';
  sky.style.backgroundColor = '#f0f0f0';
}
