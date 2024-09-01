const sun = document.querySelector('.sun');
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
  sky.style.backgroundColor = '#111';
}

function animateSunToDay() {
  sun.style.transform = 'translate(0, 0)';
  sky.style.backgroundColor = '#f0f0f0';
}
