const themeToggle = document.getElementById('themeToggle');

themeToggle.setAttribute(
  'aria-label',
  document.documentElement.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
);

themeToggle.addEventListener('click', themeToggleHandler);

function themeToggleHandler() {
  const root = document.documentElement;
  const goingDark = root.dataset.theme !== 'dark';

  root.dataset.theme = goingDark ? 'dark' : 'light';
  localStorage.setItem('theme', goingDark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', goingDark ? 'Switch to light theme' : 'Switch to dark theme');
}
