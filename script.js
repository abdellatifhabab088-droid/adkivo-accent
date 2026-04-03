/* ============================================
   ADKIVO — script.js
   ============================================ */

'use strict';

/* ---- SCROLL PROGRESS ---- */
const scrollBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = (scrolled / total * 100) + '%';
}, { passive: true });

/* ---- NAV SCROLL EFFECT ---- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ---- MOBILE MENU ---- */
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu   = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ---- CUSTOM CURSOR ---- */
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

if (window.matchMedia('(pointer: fine)').matches) {
  let trailX = 0, trailY = 0;
  let curX   = 0, curY   = 0;

  document.addEventListener('mousemove', e => {
    curX = e.clientX;
    curY = e.clientY;
    cursor.style.left = curX + 'px';
    cursor.style.top  = curY + 'px';
  });

  function animateTrail() {
    trailX += (curX - trailX) * 0.12;
    trailY += (curY - trailY) * 0.12;
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top  = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
}

/* ---- PARTICLE CANVAS (HERO BACKGROUND) ---- */
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], mouse = { x: -9999, y: -9999 };
  const COUNT    = 80;
  const MAX_DIST = 140;
  const COLORS   = ['#00FF88', '#00D9FF', '#A855F7'];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
  });

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x: rand(0, W),
      y: rand(0, H),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      r: rand(1.5, 3),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: rand(0.3, 0.8),
    };
  }

  for (let i = 0; i < COUNT; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* Draw connections */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,255,136,${0.06 * (1 - dist / MAX_DIST)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }

      /* Mouse connections */
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < MAX_DIST * 1.5) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,255,136,${0.18 * (1 - mdist / (MAX_DIST * 1.5))})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    /* Draw particles */
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });

    requestAnimationFrame(draw);
  }

  /* Reduce particle count on low-end / mobile */
  if (window.innerWidth < 768) {
    particles = particles.slice(0, 30);
  }

  draw();
})();

/* ---- INTERSECTION OBSERVER — REVEAL ---- */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ---- COUNT-UP NUMBERS ---- */
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

function startCountUp(el) {
  const target  = parseFloat(el.dataset.target);
  const suffix  = el.dataset.suffix || '';
  const decimal = parseInt(el.dataset.decimal) || 0;
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const val = easeOutQuart(progress) * target;
    el.textContent = val.toFixed(decimal) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statNumbers = document.querySelectorAll('.stat-number');

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCountUp(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

statNumbers.forEach(el => statObserver.observe(el));

/* ---- FAQ ACCORDION ---- */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

    // Toggle clicked
    if (!isOpen) item.classList.add('open');
  });
});

/* ---- SMOOTH SCROLL for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---- CARD HOVER GLOW (color per section) ---- */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const section = card.closest('section');
    let color = 'rgba(0,255,136,0.12)';
    if (section && section.classList.contains('case-studies')) {
      color = 'rgba(168,85,247,0.12)';
    }
    card.style.setProperty('--glow-color', color);
  });
});

/* ---- AUDIT MODAL ---- */
const auditModal  = document.getElementById('auditModal');
const modalClose  = document.getElementById('modalClose');
const auditForm   = document.getElementById('auditForm');
const modalForm   = document.getElementById('modalForm');
const modalThanks = document.getElementById('modalThanks');
const formError   = document.getElementById('formError');

function openModal() {
  auditModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Reset to form step each time
  modalForm.classList.remove('hidden');
  modalThanks.classList.add('hidden');
  auditForm.reset();
  formError.textContent = '';
}

function closeModal() {
  auditModal.classList.remove('open');
  document.body.style.overflow = '';
}

// All buttons with .open-modal trigger the popup
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', openModal);
});

// Close on X button
modalClose.addEventListener('click', closeModal);

// Close on overlay click (outside the box)
auditModal.addEventListener('click', e => {
  if (e.target === auditModal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && auditModal.classList.contains('open')) closeModal();
});

// Form submission
auditForm.addEventListener('submit', e => {
  e.preventDefault();
  formError.textContent = '';

  const name   = auditForm.querySelector('#f-name').value.trim();
  const phone  = auditForm.querySelector('#f-phone').value.trim();
  const niche  = auditForm.querySelector('#f-niche').value.trim();
  const ads    = auditForm.querySelector('input[name="running_ads"]:checked');
  const budget = auditForm.querySelector('input[name="budget"]:checked');

  if (!name)   { formError.textContent = 'Please enter your name.'; return; }
  if (!phone)  { formError.textContent = 'Please enter your phone number.'; return; }
  if (!niche)  { formError.textContent = 'Please tell us your niche or product.'; return; }
  if (!ads)    { formError.textContent = 'Please tell us if you\'re running ads.'; return; }
  if (!budget) { formError.textContent = 'Please select your monthly budget range.'; return; }

  // Show thank you
  modalForm.classList.add('hidden');
  modalThanks.classList.remove('hidden');
});

/* ---- STICKY BAR (show after hero) ---- */
const stickyBar = document.getElementById('stickyBar');
const heroSection = document.getElementById('hero');

function checkStickyVisibility() {
  if (!heroSection) return;
  const heroBottom = heroSection.getBoundingClientRect().bottom;
  if (heroBottom < 0) {
    stickyBar.classList.add('visible');
  } else {
    stickyBar.classList.remove('visible');
  }
}

window.addEventListener('scroll', checkStickyVisibility, { passive: true });
checkStickyVisibility();
