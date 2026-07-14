/**
 * CHOOSE TRAVEL - Main JavaScript
 * Version: 1.0
 */

'use strict';

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

/* ============================================================
   HEADER: Sticky + Scroll Effects
   ============================================================ */
function initHeader() {
  const header = $('.header');
  const backTop = $('.back-top-btn');
  if (!header) return;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 50);
    if (backTop) backTop.classList.toggle('visible', y > 400);
  };
  on(window, 'scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  const hamburger = $('.hamburger');
  const navMenu = $('.nav-menu');
  if (hamburger && navMenu) {
    on(hamburger, 'click', () => {
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
      const spans = $$('span', hamburger);
      if (hamburger.classList.contains('active')) {
        if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (spans[1]) spans[1].style.opacity = '0';
        if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop();
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Back to top
  if (backTop) on(backTop, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   HERO BACKGROUND PARALLAX
   ============================================================ */
function initHeroParallax() {
  const heroBg = $('.hero-bg');
  if (!heroBg) return;
  on(window, 'scroll', () => {
    const y = window.scrollY * 0.3;
    heroBg.style.transform = `translateY(${y}px)`;
  }, { passive: true });
}

/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */
function initScrollReveal() {
  const elems = $$('.reveal');
  if (!elems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elems.forEach(el => observer.observe(el));
}

/* ============================================================
   TESTIMONIALS SLIDER
   ============================================================ */
function initTestimonialsSlider() {
  const track = $('.testimonials-track');
  if (!track) return;

  const cards = $$('.testimonial-card', track);
  const dots = $$('.dot');
  const prevBtn = $('.slider-prev');
  const nextBtn = $('.slider-next');
  let current = 0;
  let autoSlide;

  const cardWidth = () => {
    const card = cards[0];
    if (!card) return 0;
    const style = getComputedStyle(card);
    return card.offsetWidth + parseInt(style.marginRight || 0) + 24;
  };

  const goTo = (idx) => {
    const len = cards.length;
    current = ((idx % len) + len) % len;
    track.style.transform = `translateX(-${current * cardWidth()}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  const startAuto = () => {
    autoSlide = setInterval(() => goTo(current + 1), 4500);
  };
  const stopAuto = () => clearInterval(autoSlide);

  if (prevBtn) on(prevBtn, 'click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  if (nextBtn) on(nextBtn, 'click', () => { stopAuto(); goTo(current + 1); startAuto(); });
  dots.forEach((d, i) => on(d, 'click', () => { stopAuto(); goTo(i); startAuto(); }));

  goTo(0);
  startAuto();

  // Touch support
  let startX = 0;
  on(track, 'touchstart', e => { startX = e.touches[0].clientX; stopAuto(); }, { passive: true });
  on(track, 'touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    startAuto();
  });
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function initFAQ() {
  $$('.faq-question').forEach(q => {
    on(q, 'click', () => {
      const item = q.closest('.faq-item');
      const answer = $('.faq-answer', item);
      const isOpen = q.classList.contains('open');

      // Close all
      $$('.faq-question.open').forEach(other => {
        other.classList.remove('open');
        const otherAns = $('.faq-answer', other.closest('.faq-item'));
        if (otherAns) otherAns.classList.remove('open');
      });

      // Open current if was closed
      if (!isOpen) {
        q.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });
}

/* ============================================================
   ITINERARY ACCORDION
   ============================================================ */
function initItinerary() {
  $$('.itinerary-header').forEach(h => {
    on(h, 'click', () => {
      const body = h.nextElementSibling;
      const isOpen = h.classList.contains('open');

      $$('.itinerary-header.open').forEach(other => {
        other.classList.remove('open');
        if (other.nextElementSibling) other.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        h.classList.add('open');
        if (body) body.classList.add('open');
      }
    });
  });
}

/* ============================================================
   TAB SYSTEM
   ============================================================ */
function initTabs() {
  $$('.tab-btn').forEach(btn => {
    on(btn, 'click', () => {
      const target = btn.dataset.tab;
      const container = btn.closest('[data-tabs-container]') || btn.parentElement.parentElement;

      $$('.tab-btn', btn.parentElement).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (container) {
        $$('.tab-content', container).forEach(c => c.classList.remove('active'));
        const targetEl = $(`#tab-${target}`, container) || $(`[data-tab-content="${target}"]`, container);
        if (targetEl) targetEl.classList.add('active');
      }
    });
  });
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const from = 0;
  const to = parseInt(target.replace(/,/g, ''));
  const suffix = target.match(/[^0-9,]+$/)?.[0] || '';

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(from + (to - from) * ease);
    el.textContent = val.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = $$('.stat-num');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = el.dataset.target || el.textContent;
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => {
    c.dataset.target = c.textContent;
    observer.observe(c);
  });
}

/* ============================================================
   GALLERY LIGHTBOX
   ============================================================ */
function initLightbox() {
  const lightbox = $('.lightbox');
  if (!lightbox) return;
  const lightboxImg = $('img', lightbox);
  const closeBtn = $('.lightbox-close');

  $$('.gallery-item').forEach(item => {
    on(item, 'click', () => {
      const img = $('img', item);
      if (!img || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) on(closeBtn, 'click', closeLightbox);
  on(lightbox, 'click', e => { if (e.target === lightbox) closeLightbox(); });
  on(document, 'keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

/* ============================================================
   DESTINATION FILTER
   ============================================================ */
function initDestinationFilter() {
  const searchInput = $('#destSearch');
  const regionFilter = $('#regionFilter');
  const typeFilter = $('#typeFilter');
  const cards = $$('.dest-filter-card');

  const applyFilter = () => {
    const q = searchInput ? searchInput.value.toLowerCase() : '';
    const region = regionFilter ? regionFilter.value.toLowerCase() : '';
    const type = typeFilter ? typeFilter.value.toLowerCase() : '';

    cards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const cardRegion = (card.dataset.region || '').toLowerCase();
      const cardType = (card.dataset.type || '').toLowerCase();

      const matchQ = !q || name.includes(q);
      const matchRegion = !region || cardRegion === region;
      const matchType = !type || cardType === type;

      card.style.display = (matchQ && matchRegion && matchType) ? '' : 'none';
    });
  };

  if (searchInput) on(searchInput, 'input', applyFilter);
  if (regionFilter) on(regionFilter, 'change', applyFilter);
  if (typeFilter) on(typeFilter, 'change', applyFilter);
}

/* ============================================================
   PACKAGE FILTER
   ============================================================ */
function initPackageFilter() {
  const cards = $$('.pkg-filter-card');
  $$('.filter-chip').forEach(chip => {
    on(chip, 'click', () => {
      $$('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const val = chip.dataset.filter;

      cards.forEach(card => {
        if (val === 'all' || card.dataset.category === val) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================================
   SEARCH FORM
   ============================================================ */
function initSearchForm() {
  const form = $('.hero-search-form');
  if (!form) return;
  on(form, 'submit', e => {
    e.preventDefault();
    const dest = $('#searchDest', form)?.value;
    const date = $('#searchDate', form)?.value;
    const travelers = $('#searchTravelers', form)?.value;

    // Build URL params and redirect
    const params = new URLSearchParams();
    if (dest) params.set('destination', dest);
    if (date) params.set('date', date);
    if (travelers) params.set('travelers', travelers);
    window.location.href = `/tour-packages/?${params.toString()}`;
  });
}

/* ============================================================
   ENQUIRY FORM
   ============================================================ */
function initEnquiryForm() {
  $$('.enquiry-form').forEach(form => {
    on(form, 'submit', e => {
      e.preventDefault();
      const btn = $('[type="submit"]', form);
      if (!btn) return;

      const origText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Enquiry Sent!';
        btn.style.background = '#27AE60';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = origText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  });
}

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */
function initNewsletter() {
  const form = $('.newsletter-form');
  if (!form) return;
  on(form, 'submit', e => {
    e.preventDefault();
    const input = $('input', form);
    const btn = $('button', form);
    if (!input || !input.value.trim()) return;

    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
    btn.style.background = '#27AE60';
    input.value = '';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
    }, 3000);
  });
}

/* ============================================================
   LAZY LOADING IMAGES
   ============================================================ */
function initLazyImages() {
  const imgs = $$('img[data-src]');
  if (!imgs.length || !('IntersectionObserver' in window)) {
    imgs.forEach(img => { img.src = img.dataset.src; });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  imgs.forEach(img => observer.observe(img));
}

/* ============================================================
   PACKAGE GALLERY (details page)
   ============================================================ */
function initPackageGallery() {
  const thumbs = $$('.pkg-thumb');
  const mainImg = $('.pkg-main-img');
  if (!thumbs.length || !mainImg) return;

  thumbs.forEach(thumb => {
    on(thumb, 'click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const src = $('img', thumb)?.src;
      if (src) mainImg.src = src;
    });
  });
}

/* ============================================================
   ADMIN SIDEBAR TOGGLE
   ============================================================ */
function initAdminSidebar() {
  const sidebar = $('.admin-sidebar');
  const toggleBtn = $('#sidebarToggle');
  if (!sidebar || !toggleBtn) return;

  on(toggleBtn, 'click', () => sidebar.classList.toggle('open'));
}

/* ============================================================
   ADMIN: Lead Status Update
   ============================================================ */
function initAdminLeads() {
  $$('.lead-status-select').forEach(sel => {
    on(sel, 'change', () => {
      const row = sel.closest('tr');
      const badge = row ? $('.status-badge', row) : null;
      if (!badge) return;
      const val = sel.value;
      badge.className = 'status-badge status-' + val.replace(' ', '-').toLowerCase();
      badge.textContent = val;
    });
  });
}

/* ============================================================
   SMOOTH ANCHOR SCROLL
   ============================================================ */
function initAnchorScroll() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const target = $(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 70;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================================
   FILTER CHIPS
   ============================================================ */
function initFilterChips() {
  $$('.filter-chip').forEach(chip => {
    on(chip, 'click', () => {
      const group = chip.closest('.filter-chips');
      if (group) $$('.filter-chip', group).forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
}

/* ============================================================
   PRICE RANGE SLIDER
   ============================================================ */
function initPriceRange() {
  const slider = $('#priceRange');
  const display = $('#priceDisplay');
  if (!slider || !display) return;

  on(slider, 'input', () => {
    display.textContent = '₹' + parseInt(slider.value).toLocaleString('en-IN');
  });
}

/* ============================================================
   MOBILE MENU CLOSE ON OUTSIDE CLICK
   ============================================================ */
function initMobileMenuClose() {
  on(document, 'click', e => {
    const navMenu = $('.nav-menu');
    const hamburger = $('.hamburger');
    if (navMenu && hamburger) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
      }
    }
  });
}

/* ============================================================
   CURRENT YEAR (footer)
   ============================================================ */
function initYear() {
  $$('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ============================================================
   INIT ALL
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroParallax();
  initScrollReveal();
  initTestimonialsSlider();
  initFAQ();
  initItinerary();
  initTabs();
  initCounters();
  initLightbox();
  initDestinationFilter();
  initPackageFilter();
  initSearchForm();
  initEnquiryForm();
  initNewsletter();
  initLazyImages();
  initPackageGallery();
  initAdminSidebar();
  initAdminLeads();
  initAnchorScroll();
  initFilterChips();
  initPriceRange();
  initMobileMenuClose();
  initYear();
});
