// Smooth fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Glow pulse on hover (JS animation)
const mainImg = document.getElementById('mainImg');
mainImg.addEventListener('mouseenter', () => {
  mainImg.style.boxShadow = "0 0 40px 10px #ffeb3b";
});
mainImg.addEventListener('mouseleave', () => {
  mainImg.style.boxShadow = "none";
});

// Title color shift effect
const title = document.querySelector('.title');
let hue = 0;
setInterval(() => {
  hue = (hue + 3) % 360;
  title.style.color = `hsl(${hue}, 90%, 60%)`;
}, 100);
