// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.toggle('acik'));

// Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// SSS accordion
document.querySelectorAll('.sss-soru').forEach(soru => {
  soru.addEventListener('click', () => {
    const item = soru.parentElement;
    const wasOpen = item.classList.contains('acik');
    document.querySelectorAll('.sss-item').forEach(i => i.classList.remove('acik'));
    if (!wasOpen) item.classList.add('acik');
  });
});
