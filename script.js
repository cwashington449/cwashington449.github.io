const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const sky = document.querySelector('.sky');
const starsContainer = document.querySelector('.stars');

// Add a click event listener to the sun element
sun.addEventListener('click', () => {
  console.log('Sun clicked!');
});

function toggleMode() {
  if (sun.style.display === 'none') {
    // Day mode to night mode
    sun.style.display = 'block';
    moon.style.display = 'none';
    sky.style.backgroundColor = '#000080';

    // Generate random stars
    generateStars();
  } else {
    // Night mode to day mode
    sun.style.display = 'none';
    moon.style.display = 'block';
    sky.style.backgroundColor = '#87CEEB';

    // Remove stars
    starsContainer.innerHTML = '';
  }
}

function generateStars() {
  const numStars = Math.floor(Math.random() * 200) + 100;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 5}px`;
    star.style.height = `${Math.random() * 5}px`;
    star.style.backgroundColor = 'white';

    starsContainer.appendChild(star);
  }
}
