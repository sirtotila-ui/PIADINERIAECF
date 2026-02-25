/* ============================================================
   ECF PIADINERIA — JavaScript
   ============================================================ */

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- Burger menu ----
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu on nav link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// ---- Menu Tabs ----
const tabs = document.querySelectorAll('.tab');
const menuGrids = document.querySelectorAll('.menu-grid');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    menuGrids.forEach(grid => {
      if (grid.id === target) {
        grid.classList.remove('hidden');
      } else {
        grid.classList.add('hidden');
      }
    });
  });
});

// ---- Scroll reveal (Intersection Observer) ----
const revealEls = document.querySelectorAll(
  '.menu-card, .feature-card, .review-card, .about-grid, .contact-grid'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
