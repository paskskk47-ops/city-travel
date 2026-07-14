/* ============================================================
   RANKING BOOSTER - script.js
   Handles: Nav scroll, Modals, FAQ, Pricing Slider,
            Form validation, Scroll animations, Newsletter
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     PRICING PLANS DATA
     ---------------------------------------------------------- */
  const plans = [
    { id: 0,  kw: 5,     minutes: 2, pages: 2,  price: 0,    searches: 10,    vmin: 5 },
    { id: 1,  kw: 20,    minutes: 2, pages: 2,  price: 59,   searches: 50,    vmin: 5 },
    { id: 2,  kw: 50,    minutes: 2, pages: 2,  price: 99,   searches: 100,   vmin: 5 },
    { id: 3,  kw: 100,   minutes: 3, pages: 3,  price: 139,  searches: 150,   vmin: 5 },
    { id: 4,  kw: 150,   minutes: 3, pages: 3,  price: 179,  searches: 200,   vmin: 5 },
    { id: 5,  kw: 250,   minutes: 4, pages: 4,  price: 249,  searches: 300,   vmin: 5 },
    { id: 6,  kw: 350,   minutes: 4, pages: 4,  price: 299,  searches: 400,   vmin: 5 },
    { id: 7,  kw: 500,   minutes: 5, pages: 5,  price: 349,  searches: 500,   vmin: 5 },
    { id: 8,  kw: 750,   minutes: 5, pages: 5,  price: 499,  searches: 750,   vmin: 5 },
    { id: 9,  kw: 1000,  minutes: 5, pages: 5,  price: 599,  searches: 1000,  vmin: 5 },
    { id: 10, kw: 1500,  minutes: 5, pages: 5,  price: 799,  searches: 1500,  vmin: 5 },
    { id: 11, kw: 2000,  minutes: 5, pages: 5,  price: 999,  searches: 2000,  vmin: 90 },
    { id: 12, kw: 3000,  minutes: 5, pages: 11, price: 1399, searches: 3000,  vmin: 90 },
    { id: 13, kw: 4000,  minutes: 5, pages: 11, price: 1799, searches: 4000,  vmin: 90 },
    { id: 14, kw: 5000,  minutes: 5, pages: 11, price: 1999, searches: 5000,  vmin: 90 },
    { id: 15, kw: 7500,  minutes: 5, pages: 11, price: 2499, searches: 7500,  vmin: 90 },
    { id: 16, kw: 10000, minutes: 5, pages: 11, price: 2999, searches: 10000, vmin: 90 },
    { id: 17, kw: 15000, minutes: 5, pages: 11, price: 3999, searches: 15000, vmin: 90 },
    { id: 18, kw: 20000, minutes: 5, pages: 11, price: 4999, searches: 20000, vmin: 90 },
    { id: 19, kw: 30000, minutes: 5, pages: 11, price: 7499, searches: 30000, vmin: 90 },
    { id: 20, kw: 40000, minutes: 5, pages: 11, price: 9999, searches: 40000, vmin: 90 }
  ];

  /* ----------------------------------------------------------
     UTILITY: FORMAT NUMBER
     ---------------------------------------------------------- */
  function fmt(n) {
    return n.toLocaleString('en-US');
  }

  /* ----------------------------------------------------------
     UTILITY: SHOW TOAST
     ---------------------------------------------------------- */
  function showToast(message, icon = '✅', duration = 3500) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toastMessage').textContent = message;
    document.getElementById('toastIcon').textContent = icon;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
  }

  /* ----------------------------------------------------------
     NAV: Scroll behavior
     ---------------------------------------------------------- */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     SCROLL REVEAL ANIMATIONS
     ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------
     MODAL SYSTEM
     ---------------------------------------------------------- */
  const loginModal   = document.getElementById('loginModal');
  const signupModal  = document.getElementById('signupModal');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus first input
    setTimeout(() => {
      const firstInput = modal.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 200);
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset success state after closing
    setTimeout(() => {
      const successEl = modal.querySelector('.form-success');
      const formEl    = modal.querySelector('[id$="Form"]');
      if (successEl) successEl.classList.remove('visible');
      if (formEl)    formEl.style.display = '';
      // Clear inputs
      modal.querySelectorAll('input').forEach(i => i.value = '');
      // Clear errors
      modal.querySelectorAll('.form-error').forEach(e => e.classList.remove('visible'));
    }, 400);
  }

  function switchModals() {
    closeModal(loginModal);
    closeModal(signupModal);
    setTimeout(() => {
      if (loginModal.classList.contains('active')) {
        closeModal(loginModal);
        openModal(signupModal);
      } else {
        closeModal(signupModal);
        openModal(loginModal);
      }
    }, 50);
  }

  // Open buttons
  const loginTriggers  = [
    document.getElementById('navLoginBtn'),
    document.getElementById('heroLoginBtn')
  ];
  const signupTriggers = [
    document.getElementById('navSignupBtn'),
    document.getElementById('heroSignupBtn'),
    document.getElementById('howItWorksSignupBtn'),
    document.getElementById('ctaBannerBtn'),
    document.getElementById('finalCtaBtn'),
    document.getElementById('pricingCtaBtn')
  ];

  loginTriggers.forEach(btn => btn && btn.addEventListener('click', () => openModal(loginModal)));
  signupTriggers.forEach(btn => btn && btn.addEventListener('click', () => openModal(signupModal)));

  // Close buttons
  document.getElementById('closeLoginModal')  ?.addEventListener('click', () => closeModal(loginModal));
  document.getElementById('closeSignupModal') ?.addEventListener('click', () => closeModal(signupModal));

  // Close on overlay click
  [loginModal, signupModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal(loginModal);
      closeModal(signupModal);
    }
  });

  // Switch links
  document.getElementById('switchToSignup') ?.addEventListener('click', () => {
    closeModal(loginModal);
    setTimeout(() => openModal(signupModal), 250);
  });
  document.getElementById('switchToLogin') ?.addEventListener('click', () => {
    closeModal(signupModal);
    setTimeout(() => openModal(loginModal), 250);
  });

  /* ----------------------------------------------------------
     LOGIN FORM SUBMISSION
     ---------------------------------------------------------- */
  const loginSubmitBtn = document.getElementById('loginSubmitBtn');
  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener('click', () => {
      const email    = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      if (!email || !password) {
        showToast('Please fill in all fields.', '⚠️');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address.', '⚠️');
        return;
      }
      // Simulate login
      loginSubmitBtn.textContent = 'Logging in…';
      loginSubmitBtn.disabled = true;
      setTimeout(() => {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('loginSuccess').classList.add('visible');
        loginSubmitBtn.textContent = 'Login';
        loginSubmitBtn.disabled = false;
        showToast('Login successful! Welcome back.', '✅');
        setTimeout(() => closeModal(loginModal), 2500);
      }, 1200);
    });
  }

  /* ----------------------------------------------------------
     SIGNUP FORM VALIDATION & SUBMISSION
     ---------------------------------------------------------- */
  const signupPassword        = document.getElementById('signupPassword');
  const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');
  const passwordMismatchError = document.getElementById('passwordMismatchError');
  const signupSubmitBtn       = document.getElementById('signupSubmitBtn');

  function validatePasswords() {
    if (!signupPassword || !signupPasswordConfirm) return true;
    const pw  = signupPassword.value;
    const pwc = signupPasswordConfirm.value;
    if (pwc.length === 0) {
      passwordMismatchError?.classList.remove('visible');
      return true;
    }
    if (pw !== pwc) {
      passwordMismatchError?.classList.add('visible');
      if (signupSubmitBtn) signupSubmitBtn.disabled = true;
      return false;
    } else {
      passwordMismatchError?.classList.remove('visible');
      if (signupSubmitBtn) signupSubmitBtn.disabled = false;
      return true;
    }
  }

  signupPassword        ?.addEventListener('input', validatePasswords);
  signupPasswordConfirm ?.addEventListener('input', validatePasswords);

  if (signupSubmitBtn) {
    signupSubmitBtn.addEventListener('click', () => {
      const email = document.getElementById('signupEmail').value.trim();
      const pw    = signupPassword?.value || '';

      if (!email || !pw) {
        showToast('Please fill in all fields.', '⚠️');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address.', '⚠️');
        return;
      }
      if (pw.length < 8) {
        showToast('Password must be at least 8 characters.', '⚠️');
        return;
      }
      if (!validatePasswords()) {
        showToast('Passwords do not match.', '⚠️');
        return;
      }

      // Simulate signup
      signupSubmitBtn.textContent = 'Creating account…';
      signupSubmitBtn.disabled = true;
      setTimeout(() => {
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('signupSuccess').classList.add('visible');
        signupSubmitBtn.textContent = 'Create Account';
        signupSubmitBtn.disabled = false;
        showToast('Account created! Check your email.', '🎉');
        setTimeout(() => closeModal(signupModal), 3000);
      }, 1400);
    });
  }

  /* ----------------------------------------------------------
     PRICING SLIDER
     ---------------------------------------------------------- */
  const slider         = document.getElementById('pricingSlider');
  const pricingSearches = document.getElementById('pricingSearches');
  const pricingMonthly  = document.getElementById('pricingMonthly');
  const pricingValue    = document.getElementById('pricingValue');
  const pfKeywords      = document.getElementById('pfKeywords');
  const pfMinutes       = document.getElementById('pfMinutes');
  const pfPages         = document.getElementById('pfPages');
  const pricingNote     = document.getElementById('pricingNote');
  const sliderLabel     = document.getElementById('sliderCurrentLabel');

  function updatePricing(planIndex) {
    const plan = plans[planIndex];
    if (!plan) return;

    const isFreePlan = plan.price === 0;

    if (pricingSearches) pricingSearches.textContent = `${fmt(plan.searches)} Searches / Day`;
    if (pricingMonthly)  pricingMonthly.textContent  = `At least ${fmt(plan.searches * 30)} searches / month`;
    if (pfKeywords)      pfKeywords.textContent       = `${fmt(plan.kw)} keywords`;
    if (pfMinutes)       pfMinutes.textContent        = `At least ${plan.minutes} min on site (${plan.vmin} min on YT)`;
    if (pfPages)         pfPages.textContent          = `Up to ${plan.pages} page views`;
    if (sliderLabel)     sliderLabel.textContent      = `${fmt(plan.searches)} searches/day`;

    if (pricingValue) {
      if (isFreePlan) {
        pricingValue.innerHTML = `<span class="pricing-price--free">Free</span>`;
        pricingValue.style.fontSize = '3rem';
      } else {
        pricingValue.innerHTML = `$${fmt(plan.price)}<span>/mo</span>`;
        pricingValue.style.fontSize = '';
      }
    }

    if (pricingNote) {
      if (isFreePlan) {
        pricingNote.textContent = '✓ No credit card required · Free forever plan';
      } else {
        pricingNote.textContent = '✓ Cancel anytime · No setup fees · Billed monthly';
      }
    }

    // Update slider fill (CSS hack via background)
    if (slider) {
      const pct = (planIndex / 20) * 100;
      slider.style.background = `linear-gradient(to right, #7c3aed ${pct}%, rgba(255,255,255,0.1) ${pct}%)`;
    }
  }

  if (slider) {
    slider.addEventListener('input', () => updatePricing(parseInt(slider.value)));
    slider.addEventListener('change', () => updatePricing(parseInt(slider.value)));
    // Initialize
    updatePricing(parseInt(slider.value));
  }

  /* ----------------------------------------------------------
     FAQ ACCORDION
     ---------------------------------------------------------- */
  document.querySelectorAll('[data-faq]').forEach(item => {
    const header = item.querySelector('.faq-item__header');
    const body   = item.querySelector('.faq-item__body');
    const toggle = item.querySelector('.faq-item__toggle');

    if (!header) return;

    const toggleFaq = () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('[data-faq].open').forEach(openItem => {
        openItem.classList.remove('open');
        const oh = openItem.querySelector('.faq-item__header');
        if (oh) oh.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    };

    header.addEventListener('click', toggleFaq);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFaq();
      }
    });
  });

  /* ----------------------------------------------------------
     NEWSLETTER SUBSCRIBE
     ---------------------------------------------------------- */
  const newsletterSubscribeBtn = document.getElementById('newsletterSubscribeBtn');
  if (newsletterSubscribeBtn) {
    newsletterSubscribeBtn.addEventListener('click', () => {
      const emailInput = document.getElementById('newsletterEmail');
      if (!emailInput) return;
      const email = emailInput.value.trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email to subscribe.', '⚠️');
        return;
      }

      newsletterSubscribeBtn.textContent = 'Subscribing…';
      newsletterSubscribeBtn.disabled = true;
      setTimeout(() => {
        emailInput.value = '';
        newsletterSubscribeBtn.textContent = 'Subscribe →';
        newsletterSubscribeBtn.disabled = false;
        showToast('You\'re subscribed! Check your email for your 20% discount.', '🎉');
      }, 1000);
    });
  }

  /* ----------------------------------------------------------
     SMOOTH SCROLL FOR ANCHOR LINKS
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     COUNTER ANIMATION FOR HERO STATS
     ---------------------------------------------------------- */
  function animateCounter(el, target, duration = 1500) {
    const start = 0;
    const step  = target / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('en-US') + '+';
    }, 16);
  }

  // Animate stat 1 (10K+) when hero is visible
  const stat1 = document.getElementById('stat1');
  if (stat1) {
    const statObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter(stat1, 10000);
        statObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statObserver.observe(stat1);
  }

  /* ----------------------------------------------------------
     PRICING SLIDER INITIALIZATION with fill on load
     ---------------------------------------------------------- */
  if (slider) {
    const pct = (parseInt(slider.value) / 20) * 100;
    slider.style.background = `linear-gradient(to right, #7c3aed ${pct}%, rgba(255,255,255,0.1) ${pct}%)`;
  }

})();
