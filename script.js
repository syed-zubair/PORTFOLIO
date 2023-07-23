const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-theme');
});