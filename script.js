const themeToggle = document.getElementById('theme-toggle-check');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
