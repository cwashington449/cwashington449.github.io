const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const sky = document.querySelector('.sky');

sun.addEventListener('click', toggleMode);
moon.addEventListener('click', toggleMode);

function toggleMode() {
  if (sun.style.display === 'none') {
    // Day mode to night mode
    sun.style.display = 'block';
    moon.style.display = 'none';
    sky.style.backgroundColor = '#000080'; // Night sky color
    // Add code to generate random stars
  } else {
    // Night mode to day mode
    sun.style.display = 'none';
    moon.style.display = 'block';
    sky.style.backgroundColor = '#87CEEB'; // Day sky color
    // Remove stars
  }
}
