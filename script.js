const themeToggle = document.getElementById('themeToggle');

const backToTop = document.getElementById('backToTop');
const footer = document.querySelector('.footer');
const showAfter = document.getElementById('portfolio');

let pastShowPoint = false;
let footerVisible = false;

new IntersectionObserver(([entry]) => {
  pastShowPoint = entry.boundingClientRect.top < 0;
  updateVisibility();
}, { threshold: 0 }).observe(showAfter);

new IntersectionObserver(([entry]) => {
  footerVisible = entry.isIntersecting;
  updateVisibility();
}, { threshold: 0 }).observe(footer);

backToTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

updateFooterOffset();
window.addEventListener('resize', updateFooterOffset);

themeToggle.setAttribute(
  'aria-label',
  document.documentElement.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
);

themeToggle.addEventListener('click', themeToggleHandler);

function updateFooterOffset() {
  const footerHeight = footer.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--footer-offset', `${footerHeight + 12}px`);
}

function updateVisibility() {
  backToTop.classList.toggle('visible', pastShowPoint);
  backToTop.classList.toggle('above-footer', footerVisible);
}

function themeToggleHandler() {
  const root = document.documentElement;
  const goingDark = root.dataset.theme !== 'dark';

  root.dataset.theme = goingDark ? 'dark' : 'light';
  localStorage.setItem('theme', goingDark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', goingDark ? 'Switch to light theme' : 'Switch to dark theme');
}
