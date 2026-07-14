/**
 * CHOOSE TRAVEL – Shared Components (Header + Footer)
 * Injected via data-component attributes
 */

'use strict';

/* ============================================================
   FULL NAV HTML (all pages)
   ============================================================ */
const NAV_HTML = `
<div class="top-bar">
  <div class="container">
    <div class="top-bar-left">
      <div class="top-bar-item"><i class="fas fa-phone-alt"></i><a href="tel:+919876543210">+91 98765 43210</a></div>
      <div class="top-bar-item"><i class="fas fa-envelope"></i><a href="mailto:info@choose.travel">info@choose.travel</a></div>
    </div>
    <div class="top-bar-right">
      <span>Follow Us:</span>
      <div class="social-links">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
</div>

<header class="header">
  <div class="container">
    <nav class="navbar">
      <a href="/" class="logo" style="display:flex;align-items:center;text-decoration:none;">
        <img src="/image (1).png" alt="Choose Travel" class="brand-logo-img" style="height:52px;width:auto;object-fit:contain;display:block;" />
      </a>

      <ul class="nav-menu" id="navMenu">
        <li class="nav-item"><a href="/" class="nav-link" data-page="home">Home</a></li>

        <li class="nav-item">
          <a href="/destinations/" class="nav-link" data-page="destinations">
            Destinations <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown-menu">
            <a href="/destinations/?region=south" class="dropdown-item"><i class="fas fa-leaf"></i> South India</a>
            <a href="/destinations/?region=north" class="dropdown-item"><i class="fas fa-mountain"></i> North India</a>
            <a href="/destinations/?region=east" class="dropdown-item"><i class="fas fa-water"></i> East India</a>
            <a href="/destinations/?region=west" class="dropdown-item"><i class="fas fa-sun"></i> West India</a>
            <a href="/destinations/?region=islands" class="dropdown-item"><i class="fas fa-umbrella-beach"></i> Islands</a>
            <div style="height:1px;background:var(--border);margin:6px 0;"></div>
            <a href="/destinations/" class="dropdown-item"><i class="fas fa-th"></i> All Destinations</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="/tour-packages/" class="nav-link" data-page="packages">
            Tour Packages <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown-menu">
            <a href="/travel-themes/" class="dropdown-item"><i class="fas fa-heart"></i> Honeymoon Packages</a>
            <a href="/travel-themes/" class="dropdown-item"><i class="fas fa-home"></i> Family Packages</a>
            <a href="/travel-themes/" class="dropdown-item"><i class="fas fa-hiking"></i> Adventure Tours</a>
            <a href="/travel-themes/" class="dropdown-item"><i class="fas fa-pray"></i> Pilgrimage Tours</a>
            <a href="/travel-themes/" class="dropdown-item"><i class="fas fa-gem"></i> Luxury Packages</a>
            <a href="/travel-themes/" class="dropdown-item"><i class="fas fa-coffee"></i> Weekend Getaways</a>
            <div style="height:1px;background:var(--border);margin:6px 0;"></div>
            <a href="/tour-packages/" class="dropdown-item"><i class="fas fa-suitcase-rolling"></i> All Packages</a>
          </div>
        </li>

        <li class="nav-item"><a href="/about-us/" class="nav-link" data-page="about">About Us</a></li>
        <li class="nav-item"><a href="/blog/" class="nav-link" data-page="blog">Blog</a></li>
        <li class="nav-item"><a href="/gallery/" class="nav-link" data-page="gallery">Gallery</a></li>
        <li class="nav-item"><a href="/testimonials/" class="nav-link" data-page="testimonials">Testimonials</a></li>
        <li class="nav-item"><a href="/faq/" class="nav-link" data-page="faq">FAQ</a></li>
        <li class="nav-item"><a href="/contact-us/" class="nav-link" data-page="contact">Contact Us</a></li>
        <li class="nav-item mobile-drawer-cta">
          <div style="padding: 18px 12px; width: 100%; border-top: 1px solid var(--border); margin-top: 8px;">
            <a href="/contact-us/" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 14px; font-size: 1.02rem; font-weight: 700; border-radius: 8px; box-shadow: var(--shadow-md); display: flex; align-items: center;"><i class="fas fa-paper-plane" style="margin-right: 8px;"></i> Enquiry Now</a>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px;">
              <a href="tel:+919876543210" class="btn" style="background: var(--gray-100); color: var(--dark); justify-content: center; padding: 12px 10px; font-size: 0.9rem; font-weight: 700; border-radius: 6px; display: flex; align-items: center;"><i class="fas fa-phone-alt" style="margin-right: 6px; color: var(--primary);"></i> Call Us</a>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20tour%20packages." target="_blank" rel="noopener" class="btn" style="background: #25D366; color: white; justify-content: center; padding: 12px 10px; font-size: 0.9rem; font-weight: 700; border-radius: 6px; display: flex; align-items: center;"><i class="fab fa-whatsapp" style="margin-right: 6px;"></i> WhatsApp</a>
            </div>
          </div>
        </li>
      </ul>

      <div class="nav-cta">
        <a href="/contact-us/" class="btn btn-primary header-enquiry-btn" id="navEnquiryBtn" style="padding:10px 24px;border-radius:6px;font-weight:700;">Enquiry Now</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="footer" aria-label="Footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="logo footer-logo" style="margin-bottom:16px;display:inline-flex;align-items:center;text-decoration:none;">
          <img src="/image (1).png" alt="Choose Travel" class="brand-logo-img" style="height:58px;width:auto;object-fit:contain;display:block;" />
        </a>
        <p class="footer-brand-desc">Your trusted travel partner across India. We craft unforgettable holiday experiences with the best destinations, packages, and service since 2015.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/about-us/">About Us</a>
          <a href="/destinations/">Destinations</a>
          <a href="/tour-packages/">Tour Packages</a>
          <a href="/travel-themes/">Travel Themes</a>
          <a href="/travel-guides/">Travel Guides</a>
          <a href="/plan-your-trip/">Plan Your Trip</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Support</h4>
        <div class="footer-links">
          <a href="/gallery/">Gallery</a>
          <a href="/testimonials/">Testimonials</a>
          <a href="/blog/">Blog</a>
          <a href="/faq/">FAQ</a>
          <a href="/contact-us/">Contact Us</a>
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/terms-conditions/">Terms & Conditions</a>
          <a href="/refund-policy/">Refund Policy</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact-list">
          <div class="footer-contact-item">
            <i class="fas fa-phone-alt"></i>
            <div>
              <div>+91 98765 43210</div>
              <div style="font-size:.78rem;color:rgba(255,255,255,.4);">Mon–Sat, 9AM–7PM</div>
            </div>
          </div>
          <div class="footer-contact-item"><i class="fas fa-envelope"></i><div>info@choose.travel</div></div>
          <div class="footer-contact-item"><i class="fab fa-whatsapp"></i><a href="https://wa.me/919876543210" style="color:rgba(255,255,255,.75);" target="_blank" rel="noopener">WhatsApp Us</a></div>
          <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><div>125, Travel Street, Bangalore – 560001, Karnataka, India</div></div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© <span class="current-year"></span> Choose Travel. All rights reserved. Designed with ❤️ in India.</p>
      <div class="footer-bottom-links">
        <a href="/privacy-policy/">Privacy Policy</a>
        <a href="/terms-conditions/">Terms & Conditions</a>
        <a href="/refund-policy/">Refund Policy</a>
      </div>
    </div>
  </div>
</footer>

<div class="float-btns">
  <a href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20tour%20packages." class="float-btn whatsapp-btn" target="_blank" rel="noopener" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>
  <button class="float-btn back-top-btn" id="backTopBtn" aria-label="Back to top">
    <i class="fas fa-chevron-up"></i>
  </button>
</div>

<div class="enquiry-strip">
  <a href="https://wa.me/919876543210" class="enquiry-strip-btn" target="_blank" rel="noopener">
    <i class="fab fa-whatsapp" style="font-size:1.1rem;"></i> Enquire on WhatsApp
  </a>
</div>

<!-- Sticky Bottom Mobile CTA Bar (100% Mobile Optimized & High Conversion) -->
<div class="mobile-bottom-cta-bar">
  <a href="tel:+919876543210" class="mobile-bar-btn call-btn">
    <i class="fas fa-phone-alt"></i> Call Now
  </a>
  <a href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20tour%20packages." class="mobile-bar-btn whatsapp-btn-bar" target="_blank" rel="noopener">
    <i class="fab fa-whatsapp"></i> WhatsApp
  </a>
  <a href="/contact-us/" class="mobile-bar-btn enquire-btn-bar">
    <i class="fas fa-paper-plane"></i> Enquire Now
  </a>
</div>
`;

/* ============================================================
   INJECT COMPONENTS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('site-nav');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = NAV_HTML;
  }

  // Inject footer
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = FOOTER_HTML;
  }

  // Bind foolproof mobile navigation toggle (hamburger) immediately after injection
  const bindMobileNav = () => {
    const hamburger = document.getElementById('hamburger') || document.querySelector('.hamburger');
    const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
    if (hamburger && navMenu && !hamburger.dataset.bound) {
      hamburger.dataset.bound = "true";
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
          if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (spans[1]) spans[1].style.opacity = '0';
          if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
      });

      // Close mobile menu when clicking outside or tapping a nav link
      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
          navMenu.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
      });
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        });
      });
    }
  };
  bindMobileNav();

  // Auto-mark active nav link & map SEO Clean URLs
  setTimeout(() => {
    bindMobileNav();
    const page = document.body.dataset.page || '';
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
      if (link.dataset.page === page) link.classList.add('active');
    });
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });

    // Automatic SEO Clean URL router (Rank Math & requirement compliant)
    const seoRoutes = {
      'index.html': '/',
      'about.html': '/about-us/',
      'destinations.html': '/destinations/',
      'destination-detail.html': '/destinations/kerala/',
      'tour-packages.html': '/tour-packages/',
      'package-detail.html': '/tour-packages/kerala-family-tour/',
      'travel-themes.html': '/travel-themes/',
      'travel-guides.html': '/travel-guides/',
      'gallery.html': '/gallery/',
      'testimonials.html': '/testimonials/',
      'blog.html': '/blog/',
      'blog-detail.html': '/blog/top-10-places-to-visit-in-kerala/',
      'faq.html': '/faq/',
      'contact.html': '/contact-us/',
      'plan-your-trip.html': '/plan-your-trip/',
      'guide-detail.html': '/travel-guides/kerala-complete-guide/',
      'guide-detail.html?guide=kerala-complete-guide': '/travel-guides/kerala-complete-guide/',
      'privacy-policy.html': '/privacy-policy/',
      'refund-policy.html': '/refund-policy/',
      'terms-conditions.html': '/terms-conditions/',
      'admin/dashboard.html': '/admin/dashboard/',
      'search-results.html': '/search/'
    };

    if (window.location.protocol !== 'file:') {
      // On web server: force all .html links to clean SEO slugs
      document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          const parts = href.split('?');
          const baseWithHash = parts[0];
          const query = parts.length > 1 ? '?' + parts[1] : '';
          const hashParts = baseWithHash.split('#');
          const base = hashParts[0];
          const hash = hashParts.length > 1 ? '#' + hashParts[1] : '';
          if (seoRoutes[base]) {
            a.setAttribute('href', seoRoutes[base] + query + hash);
          }
        }
      });
      document.querySelectorAll('form[action]').forEach(f => {
        const action = f.getAttribute('action');
        if (action && seoRoutes[action]) {
          f.setAttribute('action', seoRoutes[action]);
        }
      });
    } else {
      // On local file:// system: map clean SEO slugs back to flat .html files so offline double-click testing works 100%
      const reverseRoutes = {};
      Object.keys(seoRoutes).forEach(k => {
        reverseRoutes[seoRoutes[k]] = k;
      });
      document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          const parts = href.split('?');
          const baseWithHash = parts[0];
          const query = parts.length > 1 ? '?' + parts[1] : '';
          const hashParts = baseWithHash.split('#');
          const base = hashParts[0];
          const hash = hashParts.length > 1 ? '#' + hashParts[1] : '';
          if (reverseRoutes[base]) {
            a.setAttribute('href', reverseRoutes[base] + query + hash);
          }
        }
      });
      document.querySelectorAll('form[action]').forEach(f => {
        const action = f.getAttribute('action');
        if (action && reverseRoutes[action]) {
          f.setAttribute('action', reverseRoutes[action]);
        }
      });
    }

    // ============================================================
    // TAKA-TAK AUTOMATED SEO ENGINE (Rank Math & Google 100/100)
    // ============================================================
    try {
      const pageTitle = document.title || 'Choose Travel – India\'s Trusted Travel Partner';
      const metaDescEl = document.querySelector('meta[name="description"]');
      const pageDesc = metaDescEl ? metaDescEl.content : 'Handpicked destinations, comfortable stays and unforgettable experiences across India with Choose Travel.';
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = canonicalEl ? canonicalEl.href : 'https://www.choose.travel' + window.location.pathname;
      const heroImg = document.querySelector('.home-hero, .page-banner, img');
      const defaultOgImg = 'https://www.choose.travel/image%20(1).png';

      // 1. Inject Open Graph & Twitter Cards if missing
      const injectMeta = (propOrName, key, value) => {
        if (!document.querySelector(`meta[${propOrName}="${key}"]`)) {
          const m = document.createElement('meta');
          m.setAttribute(propOrName, key);
          m.setAttribute('content', value);
          document.head.appendChild(m);
        }
      };

      injectMeta('property', 'og:site_name', 'Choose Travel');
      injectMeta('property', 'og:title', pageTitle);
      injectMeta('property', 'og:description', pageDesc);
      injectMeta('property', 'og:url', canonicalUrl);
      injectMeta('property', 'og:type', document.body.dataset.page === 'blog-detail' ? 'article' : 'website');
      injectMeta('property', 'og:image', defaultOgImg);
      injectMeta('name', 'twitter:card', 'summary_large_image');
      injectMeta('name', 'twitter:title', pageTitle);
      injectMeta('name', 'twitter:description', pageDesc);
      injectMeta('name', 'twitter:image', defaultOgImg);

      // 2. Build & Inject Rank Math JSON-LD Schema Markup
      const schemaGraph = [
        {
          "@type": "TravelAgency",
          "@id": "https://www.choose.travel/#organization",
          "name": "Choose Travel",
          "url": "https://www.choose.travel/",
          "logo": "https://www.choose.travel/image%20(1).png",
          "image": "https://www.choose.travel/image%20(1).png",
          "description": "India's premier travel agency offering domestic tour packages, customized itineraries, and memorable journeys across Kerala, Ooty, Kashmir, Goa, and Himachal.",
          "telephone": "+91 98765 43210",
          "email": "info@choosetravel.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "MG Road, Connaught Place",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110001",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "1250"
          }
        },
        {
          "@type": "WebPage",
          "@id": canonicalUrl + "#webpage",
          "url": canonicalUrl,
          "name": pageTitle,
          "description": pageDesc,
          "isPartOf": { "@id": "https://www.choose.travel/#organization" }
        }
      ];

      // Scrape Breadcrumbs for BreadcrumbList Schema
      const breadcrumbLinks = document.querySelectorAll('.breadcrumb a, .breadcrumb span');
      if (breadcrumbLinks.length > 0) {
        const itemListElement = [];
        let pos = 1;
        breadcrumbLinks.forEach(item => {
          if (item.tagName === 'A' || item.textContent.trim() !== '›') {
            itemListElement.push({
              "@type": "ListItem",
              "position": pos++,
              "name": item.textContent.trim(),
              "item": item.tagName === 'A' ? (item.href.startsWith('http') ? item.href : 'https://www.choose.travel/' + item.getAttribute('href')) : canonicalUrl
            });
          }
        });
        if (itemListElement.length > 0) {
          schemaGraph.push({
            "@type": "BreadcrumbList",
            "itemListElement": itemListElement
          });
        }
      }

      // Scrape FAQ Accordions for Google Rich Snippets FAQPage Schema
      const faqHeaders = document.querySelectorAll('.accordion-header, .faq-item h3');
      if (faqHeaders.length > 0) {
        const mainEntity = [];
        faqHeaders.forEach(hdr => {
          const q = hdr.textContent.replace('+', '').replace('-', '').trim();
          const nextEl = hdr.nextElementSibling || (hdr.parentElement && hdr.parentElement.querySelector('.accordion-content, p'));
          const a = nextEl ? nextEl.textContent.trim() : 'Contact Choose Travel experts for personalized guidance.';
          if (q && a) {
            mainEntity.push({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": a
              }
            });
          }
        });
        if (mainEntity.length > 0) {
          schemaGraph.push({
            "@type": "FAQPage",
            "mainEntity": mainEntity
          });
        }
      }

      // Inject combined JSON-LD graph into head
      const scriptLd = document.createElement('script');
      scriptLd.type = 'application/ld+json';
      scriptLd.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemaGraph
      }, null, 2);
      document.head.appendChild(scriptLd);

      // 3. Core Web Vitals & Accessibility polish
      document.querySelectorAll('img:not([alt])').forEach(img => {
        img.setAttribute('alt', pageTitle);
      });
      document.querySelectorAll('img:not([loading])').forEach((img, idx) => {
        if (idx > 2) img.setAttribute('loading', 'lazy');
      });

      // 4. CHOOSE TRAVEL DYNAMIC CMS ENGINE (Connects Admin Panel to Live Website)
      if (typeof initChooseTravelDynamicCMS === 'function') {
        initChooseTravelDynamicCMS();
      }

      // 5. CHOOSE TRAVEL LIVE SEARCH & FILTER OPERATIONAL ENGINE
      if (typeof initChooseTravelSearchFilters === 'function') {
        initChooseTravelSearchFilters();
      }
    } catch (e) {
      console.warn('Taka-Tak SEO Engine note:', e);
    }
  }, 50);
});

/**
 * CHOOSE TRAVEL DYNAMIC CMS RENDERER
 * Automatically reads user-created packages, places, images & special offers from Admin LocalStorage
 * and renders them live on tour-packages.html, destinations.html, and index.html!
 */
function initChooseTravelDynamicCMS() {
  try {
    const packagesData = JSON.parse(localStorage.getItem('CHOOSE_TRAVEL_PACKAGES') || '[]');
    const destinationsData = JSON.parse(localStorage.getItem('CHOOSE_TRAVEL_DESTINATIONS') || '[]');

    // 1. Render custom packages on Tour Packages page or Homepage
    const pkgGrid = document.querySelector('.packages-grid') || 
                    (window.location.pathname.includes('tour-packages') ? document.querySelector('div[style*="grid-template-columns:repeat(auto-fit, minmax(280px, 1fr))"]') : null);

    if (pkgGrid && packagesData.length > 0) {
      // Find custom packages created by admin (e.g. IDs with custom timestamps or added beyond defaults)
      const customPackages = packagesData.filter(p => p.isCustom || p.offerText || p.image);
      if (customPackages.length > 0) {
        const customHTML = customPackages.map(pkg => {
          const imgUrl = pkg.image || 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80';
          const badgeText = pkg.offerText || pkg.badge || '🔥 Special Offer';
          const badgeBg = pkg.offerBg || '#E74C3C';

          return `
            <div class="package-card dynamic-pkg-card" style="background:white;border-radius:18px;overflow:hidden;border:2px solid var(--primary);box-shadow:0 8px 24px rgba(0,86,210,0.15);display:flex;flex-direction:column;justify-content:space-between;position:relative;">
              <div>
                <div style="position:relative;height:200px;overflow:hidden;">
                  <img src="${imgUrl}" alt="${pkg.title}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.4s;" />
                  <span style="position:absolute;top:12px;left:12px;background:${badgeBg};color:white;font-size:.76rem;font-weight:800;padding:5px 14px;border-radius:50px;box-shadow:0 2px 8px rgba(0,0,0,0.25);">${badgeText}</span>
                  ${pkg.duration ? `<span style="position:absolute;bottom:10px;right:10px;background:rgba(13,27,42,0.85);color:white;font-size:.74rem;font-weight:700;padding:4px 10px;border-radius:6px;"><i class="fas fa-clock" style="margin-right:4px;"></i>${pkg.duration}</span>` : ''}
                </div>
                <div style="padding:18px;">
                  <h3 style="font-size:1.2rem;font-weight:800;color:var(--dark);margin-bottom:6px;">${pkg.title}</h3>
                  <div style="font-size:.82rem;color:var(--gray-500);margin-bottom:10px;"><i class="fas fa-map-marker-alt" style="color:var(--primary);margin-right:6px;"></i>${pkg.destination || 'India'}</div>
                  <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:14px;">
                    <span style="font-size:1.4rem;font-weight:900;color:var(--dark);">₹${Number(pkg.offerPrice || pkg.regularPrice || 14999).toLocaleString()}/-</span>
                    ${pkg.regularPrice && pkg.regularPrice > pkg.offerPrice ? `<span style="font-size:.85rem;color:var(--gray-500);text-decoration:line-through;">₹${Number(pkg.regularPrice).toLocaleString()}/-</span>` : ''}
                    <span style="font-size:.72rem;color:#27AE60;font-weight:800;">Per Person</span>
                  </div>
                </div>
              </div>
              <div style="padding:0 18px 18px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <a href="package-detail.html?pkg=${encodeURIComponent(pkg.title)}" class="btn btn-outline" style="justify-content:center;border-radius:8px;padding:10px;font-weight:700;font-size:.85rem;">Details</a>
                <a href="https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I want to book the *${pkg.title}* (${badgeText}) for ₹${pkg.offerPrice}/-. Please share details.`)}" target="_blank" rel="noopener" class="btn btn-primary" style="justify-content:center;border-radius:8px;padding:10px;font-weight:700;font-size:.85rem;background:#25D366;border-color:#25D366;"><i class="fab fa-whatsapp" style="margin-right:5px;"></i> Book</a>
              </div>
            </div>
          `;
        }).join('');

        // Prepend user-created dynamic packages at the top of the grid!
        pkgGrid.insertAdjacentHTML('afterbegin', customHTML);
      }
    }

    // 2. Render custom destinations on Destinations page
    const destGrid = document.querySelector('.destinations-grid') || 
                     (window.location.pathname.includes('destinations') ? document.querySelector('div[style*="grid-template-columns:repeat(auto-fit, minmax(260px, 1fr))"], .gallery-grid') : null);

    if (destGrid && destinationsData.length > 0) {
      const customDests = destinationsData.filter(d => d.isCustom || d.image || d.offerText);
      if (customDests.length > 0) {
        const destHTML = customDests.map(d => {
          const imgUrl = d.image || 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80';
          const badgeText = d.offerText || `${d.packagesCount || 10}+ Packages`;
          return `
            <div class="dest-card dynamic-dest-card" style="background:white;border-radius:18px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow-md);position:relative;">
              <div style="position:relative;height:240px;overflow:hidden;">
                <img src="${imgUrl}" alt="${d.name}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;" />
                <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(13,27,42,0.85) 0%, transparent 60%);"></div>
                <span style="position:absolute;top:14px;right:14px;background:var(--primary);color:white;font-size:.76rem;font-weight:800;padding:5px 12px;border-radius:50px;">${badgeText}</span>
                <div style="position:absolute;bottom:16px;left:16px;right:16px;color:white;">
                  <h3 style="font-size:1.3rem;font-weight:800;margin-bottom:4px;color:white;">${d.name}</h3>
                  <div style="font-size:.82rem;color:rgba(255,255,255,0.85);"><i class="fas fa-map-marker-alt" style="color:#F5A623;margin-right:6px;"></i>${d.region || 'India'}</div>
                </div>
              </div>
              <div style="padding:16px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <span style="font-size:.75rem;color:var(--gray-500);display:block;">Starting from</span>
                  <span style="font-size:1.15rem;font-weight:900;color:var(--dark);">₹${Number(d.startPrice || 12999).toLocaleString()}/-</span>
                </div>
                <a href="destination-detail.html?dest=${encodeURIComponent(d.name)}" class="btn btn-primary btn-sm" style="border-radius:8px;font-weight:700;">Explore <i class="fas fa-arrow-right" style="margin-left:5px;"></i></a>
              </div>
            </div>
          `;
        }).join('');
        destGrid.insertAdjacentHTML('afterbegin', destHTML);
      }
    }

    // 3. Intercept website enquiry forms and push straight to Admin LocalStorage Leads!
    document.querySelectorAll('form').forEach(form => {
      if (!form.dataset.adminBound && !form.id.includes('admin') && !form.id.includes('quote')) {
        form.dataset.adminBound = 'true';
        form.addEventListener('submit', (e) => {
          const nameInput = form.querySelector('input[name*="name"], input[placeholder*="Name"], input[type="text"]');
          const phoneInput = form.querySelector('input[name*="phone"], input[placeholder*="Phone"], input[type="tel"]');
          if (nameInput || phoneInput) {
            const currentLeads = JSON.parse(localStorage.getItem('CHOOSE_TRAVEL_LEADS') || '[]');
            const newId = 'L' + String(currentLeads.length + 1).padStart(3, '0');
            const newLead = {
              id: newId,
              name: (nameInput ? nameInput.value : 'Website Visitor').trim(),
              email: 'enquiry@choosetravel.in',
              phone: (phoneInput ? phoneInput.value : '+91 98765 00000').trim(),
              package: document.title.split('|')[0].trim() || 'Online Enquiry',
              date: 'Immediate / 2026',
              pax: '2 Adults',
              status: 'New',
              submitted: new Date().toISOString().split('T')[0],
              notes: 'Submitted via live website form on page: ' + window.location.pathname
            };
            currentLeads.unshift(newLead);
            localStorage.setItem('CHOOSE_TRAVEL_LEADS', JSON.stringify(currentLeads));
          }
        });
      }
    });

  } catch (err) {
    console.warn('Choose Travel Dynamic CMS initialization note:', err);
  }
}

/**
 * CHOOSE TRAVEL LIVE SEARCH & FILTER OPERATIONAL ENGINE
 * Makes search bars, destination dropdowns, duration filters, theme selectors, and sort options 
 * instantly functional across index.html, tour-packages.html, and destinations.html!
 */
function initChooseTravelSearchFilters() {
  try {
    // 1. Intercept Hero Search Box on Homepage (#heroSearchForm)
    const heroSearchForm = document.getElementById('heroSearchForm') || document.querySelector('form[action*="search"]');
    if (heroSearchForm) {
      heroSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destInput = heroSearchForm.querySelector('input[name="q"], input[placeholder*="Destination"], input[type="text"]');
        const destVal = destInput ? destInput.value.trim().toLowerCase() : '';
        if (destVal) {
          window.location.href = `/tour-packages/?dest=${encodeURIComponent(destVal)}`;
        } else {
          window.location.href = `/tour-packages/`;
        }
      });
    }

    // 2. Check URL parameters to pre-populate filters when arriving from links/hero search
    const urlParams = new URLSearchParams(window.location.search);
    const paramDest = urlParams.get('dest') || urlParams.get('q') || '';
    const paramTheme = urlParams.get('theme') || '';

    // 3. Operationalize Tour Packages Filters (#topPackagesFilterForm)
    const pkgFilterForm = document.getElementById('topPackagesFilterForm') || document.getElementById('packageFilterForm');
    const pkgSearchInput = document.getElementById('pkgSearchInput');
    const pkgDestSelect = document.getElementById('pkgDestSelect');
    const pkgDurationSelect = document.getElementById('pkgDurationSelect');
    const pkgThemeSelect = document.getElementById('pkgThemeSelect');
    const pkgSortSelect = document.querySelector('#packagesMainLayout select, select[style*="height:38px"]');

    if (pkgFilterForm || pkgSearchInput || pkgDestSelect) {
      // Pre-fill from URL param if present
      if (paramDest) {
        if (pkgDestSelect && Array.from(pkgDestSelect.options).some(o => o.value.toLowerCase() === paramDest.toLowerCase())) {
          pkgDestSelect.value = paramDest.toLowerCase();
        } else if (pkgSearchInput) {
          pkgSearchInput.value = paramDest;
        }
      }
      if (paramTheme && pkgThemeSelect && Array.from(pkgThemeSelect.options).some(o => o.value.toLowerCase() === paramTheme.toLowerCase())) {
        pkgThemeSelect.value = paramTheme.toLowerCase();
      }

      // Attach instant real-time listeners to all inputs and selects
      const allPkgInputs = [pkgSearchInput, pkgDestSelect, pkgDurationSelect, pkgThemeSelect, pkgSortSelect].filter(Boolean);
      allPkgInputs.forEach(el => {
        el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', filterTourPackages);
      });

      if (pkgFilterForm) {
        pkgFilterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          filterTourPackages();
          // Scroll smoothly to package grid on Apply Filters click
          const gridEl = document.querySelector('.packages-grid') || document.getElementById('packagesMainLayout');
          if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      // Run initial filter immediately on load
      setTimeout(filterTourPackages, 150);
    }

    // 4. Operationalize Destinations Filters (#destinationsFilterForm)
    const destFilterForm = document.getElementById('destinationsFilterForm');
    const destSearchInput = document.getElementById('destSearchInput');
    const regionSelect = document.getElementById('regionSelect');
    const typeSelect = document.getElementById('typeSelect');

    if (destFilterForm || destSearchInput || regionSelect) {
      if (paramDest && destSearchInput) destSearchInput.value = paramDest;

      const allDestInputs = [destSearchInput, regionSelect, typeSelect].filter(Boolean);
      allDestInputs.forEach(el => {
        el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', filterDestinations);
      });

      if (destFilterForm) {
        destFilterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          filterDestinations();
          const dGrid = document.getElementById('destinationsGrid');
          if (dGrid) dGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      setTimeout(filterDestinations, 150);
    }

  } catch (err) {
    console.warn('Choose Travel Search Filters note:', err);
  }
}

/**
 * Filter & Sort Tour Packages Live
 */
function filterTourPackages() {
  const cards = Array.from(document.querySelectorAll('.package-card'));
  if (cards.length === 0) return;

  const q = (document.getElementById('pkgSearchInput')?.value || '').toLowerCase().trim();
  const dest = (document.getElementById('pkgDestSelect')?.value || 'all').toLowerCase();
  const dur = (document.getElementById('pkgDurationSelect')?.value || 'all').toLowerCase();
  const theme = (document.getElementById('pkgThemeSelect')?.value || 'all').toLowerCase();
  const sort = document.querySelector('#packagesMainLayout select, select[style*="height:38px"]')?.value || '';

  let visibleCount = 0;

  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();
    const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
    const locationText = (card.querySelector('div[style*="fa-map-marker-alt"]')?.textContent || cardText).toLowerCase();
    const durationText = (card.querySelector('div[style*="fa-clock"]')?.textContent || cardText).toLowerCase();

    // 1. Search Query Match
    const matchesQ = !q || cardText.includes(q) || title.includes(q);

    // 2. Destination Match
    let matchesDest = dest === 'all';
    if (!matchesDest) {
      if (dest === 'kerala') matchesDest = locationText.includes('kerala') || title.includes('kerala') || cardText.includes('backwater');
      else if (dest === 'tamilnadu') matchesDest = locationText.includes('tamil') || title.includes('ooty') || title.includes('kodaikanal') || cardText.includes('tamil');
      else if (dest === 'karnataka') matchesDest = locationText.includes('karnataka') || title.includes('coorg') || title.includes('mysore');
      else if (dest === 'goa') matchesDest = locationText.includes('goa') || title.includes('goa') || cardText.includes('beach');
      else if (dest === 'andaman') matchesDest = locationText.includes('andaman') || title.includes('andaman') || title.includes('island');
      else matchesDest = cardText.includes(dest);
    }

    // 3. Duration Match
    let matchesDur = dur === 'all';
    if (!matchesDur) {
      if (dur === 'short') matchesDur = durationText.includes('1 day') || durationText.includes('2 day') || durationText.includes('3 day') || durationText.includes('weekend');
      else if (dur === 'medium') matchesDur = durationText.includes('4 day') || durationText.includes('5 day') || durationText.includes('6 day');
      else if (dur === 'long') matchesDur = durationText.includes('7 day') || durationText.includes('8 day') || durationText.includes('9 day');
      else if (dur === 'extended') matchesDur = durationText.includes('10 day') || durationText.includes('11 day') || durationText.includes('12 day') || durationText.includes('14 day') || durationText.includes('15 day');
    }

    // 4. Theme Match
    let matchesTheme = theme === 'all';
    if (!matchesTheme) {
      if (theme === 'family') matchesTheme = cardText.includes('family') || title.includes('family') || !title.includes('honeymoon');
      else if (theme === 'honeymoon') matchesTheme = cardText.includes('honeymoon') || title.includes('honeymoon') || title.includes('couple') || cardText.includes('romantic');
      else if (theme === 'adventure') matchesTheme = cardText.includes('adventure') || title.includes('trek') || title.includes('safari') || title.includes('camping') || title.includes('hills');
      else if (theme === 'beach') matchesTheme = cardText.includes('beach') || title.includes('goa') || title.includes('andaman') || cardText.includes('island');
      else matchesTheme = cardText.includes(theme);
    }

    const isVisible = matchesQ && matchesDest && matchesDur && matchesTheme;
    card.style.display = isVisible ? 'flex' : 'none';
    if (isVisible) visibleCount++;
  });

  // Update Live Counter Text
  const counterEl = document.querySelector('#packagesMainLayout div[style*="font-size:1.05rem"]') || document.getElementById('pkgCounterText');
  if (counterEl) {
    counterEl.textContent = `${visibleCount} Packages Found`;
  }

  // Handle Sorting of Visible Cards
  if (sort && (sort.includes('Price') || sort.includes('Duration'))) {
    const gridContainer = cards[0]?.parentElement;
    if (gridContainer) {
      const visibleCards = cards.filter(c => c.style.display !== 'none');
      visibleCards.sort((a, b) => {
        const priceA = Number((a.querySelector('div[style*="font-size:1.35rem"], span[style*="font-size:1.4rem"]')?.textContent || '').replace(/[^0-9]/g, '')) || 0;
        const priceB = Number((b.querySelector('div[style*="font-size:1.35rem"], span[style*="font-size:1.4rem"]')?.textContent || '').replace(/[^0-9]/g, '')) || 0;

        if (sort.includes('Low to High')) return priceA - priceB;
        if (sort.includes('High to Low')) return priceB - priceA;
        if (sort.includes('Short to Long')) {
          const durA = parseInt((a.querySelector('div[style*="fa-clock"]')?.textContent || '4').replace(/[^0-9]/g, '')) || 4;
          const durB = parseInt((b.querySelector('div[style*="fa-clock"]')?.textContent || '4').replace(/[^0-9]/g, '')) || 4;
          return durA - durB;
        }
        return 0;
      });

      // Re-append sorted cards in order
      visibleCards.forEach(c => gridContainer.appendChild(c));
    }
  }

  // Handle No Results Empty State
  const gridContainer = cards[0]?.parentElement;
  if (gridContainer) {
    let emptyMsg = gridContainer.querySelector('.no-results-msg');
    if (visibleCount === 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('div');
        emptyMsg.className = 'no-results-msg';
        emptyMsg.style.cssText = 'grid-column:1/-1;text-align:center;padding:50px 20px;background:#F8FAFC;border-radius:16px;border:1px dashed #CBD5E0;';
        emptyMsg.innerHTML = `
          <i class="fas fa-search" style="font-size:2.5rem;color:#A0AEC0;margin-bottom:14px;display:block;"></i>
          <h3 style="font-size:1.25rem;font-weight:800;color:#0D1B2A;margin-bottom:8px;">No Tour Packages Match Your Filters</h3>
          <p style="font-size:.9rem;color:#718096;margin-bottom:18px;">Try adjusting your search terms, selecting "All Destinations", or clearing your filters.</p>
          <button onclick="document.getElementById('topPackagesFilterForm')?.reset(); filterTourPackages();" class="btn btn-primary btn-sm" style="border-radius:8px;font-weight:700;"><i class="fas fa-redo" style="margin-right:6px;"></i> Reset All Filters</button>
        `;
        gridContainer.appendChild(emptyMsg);
      }
      emptyMsg.style.display = 'block';
    } else if (emptyMsg) {
      emptyMsg.style.display = 'none';
    }
  }
}

/**
 * Filter Destinations Live
 */
function filterDestinations() {
  const cards = Array.from(document.querySelectorAll('.dest-card'));
  if (cards.length === 0) return;

  const q = (document.getElementById('destSearchInput')?.value || '').toLowerCase().trim();
  const region = (document.getElementById('regionSelect')?.value || 'all').toLowerCase();
  const type = (document.getElementById('typeSelect')?.value || 'all').toLowerCase();

  let visibleCount = 0;

  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();
    const title = (card.querySelector('h3')?.textContent || '').toLowerCase();

    // 1. Search Query
    const matchesQ = !q || cardText.includes(q) || title.includes(q);

    // 2. Region Match
    let matchesRegion = region === 'all';
    if (!matchesRegion) {
      if (region === 'south') matchesRegion = cardText.includes('kerala') || cardText.includes('tamil') || cardText.includes('karnataka') || cardText.includes('coorg') || cardText.includes('ooty') || cardText.includes('mysore') || cardText.includes('south');
      else if (region === 'north') matchesRegion = cardText.includes('kashmir') || cardText.includes('himachal') || cardText.includes('manali') || cardText.includes('shimla') || cardText.includes('ladakh') || cardText.includes('north') || cardText.includes('rajasthan');
      else if (region === 'west') matchesRegion = cardText.includes('goa') || cardText.includes('maharashtra') || cardText.includes('gujarat') || cardText.includes('west');
      else if (region === 'islands') matchesRegion = cardText.includes('andaman') || cardText.includes('lakshadweep') || cardText.includes('island');
      else matchesRegion = cardText.includes(region);
    }

    // 3. Type Match
    let matchesType = type === 'all';
    if (!matchesType) {
      if (type === 'hill') matchesType = cardText.includes('hill') || cardText.includes('ooty') || cardText.includes('kodaikanal') || cardText.includes('manali') || cardText.includes('shimla') || cardText.includes('coorg') || cardText.includes('kashmir');
      else if (type === 'beach') matchesType = cardText.includes('beach') || cardText.includes('goa') || cardText.includes('andaman') || cardText.includes('kerala') || cardText.includes('island');
      else if (type === 'nature') matchesType = cardText.includes('nature') || cardText.includes('wildlife') || cardText.includes('backwater') || cardText.includes('kerala') || cardText.includes('forest');
      else if (type === 'heritage') matchesType = cardText.includes('heritage') || cardText.includes('culture') || cardText.includes('temple') || cardText.includes('mysore') || cardText.includes('rajasthan');
      else matchesType = cardText.includes(type);
    }

    const isVisible = matchesQ && matchesRegion && matchesType;
    card.style.display = isVisible ? 'flex' : 'none';
    if (isVisible) visibleCount++;
  });

  const gridContainer = cards[0]?.parentElement;
  if (gridContainer) {
    let emptyMsg = gridContainer.querySelector('.no-dest-results-msg');
    if (visibleCount === 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('div');
        emptyMsg.className = 'no-dest-results-msg';
        emptyMsg.style.cssText = 'grid-column:1/-1;text-align:center;padding:50px 20px;background:#F8FAFC;border-radius:16px;border:1px dashed #CBD5E0;';
        emptyMsg.innerHTML = `
          <i class="fas fa-map-marked-alt" style="font-size:2.5rem;color:#A0AEC0;margin-bottom:14px;display:block;"></i>
          <h3 style="font-size:1.25rem;font-weight:800;color:#0D1B2A;margin-bottom:8px;">No Destinations Match Your Search</h3>
          <p style="font-size:.9rem;color:#718096;margin-bottom:18px;">Try searching for Kerala, Goa, Kashmir, or Andaman, or select "All Regions".</p>
          <button onclick="document.getElementById('destinationsFilterForm')?.reset(); filterDestinations();" class="btn btn-primary btn-sm" style="border-radius:8px;font-weight:700;"><i class="fas fa-redo" style="margin-right:6px;"></i> Reset Search</button>
        `;
        gridContainer.appendChild(emptyMsg);
      }
      emptyMsg.style.display = 'block';
    } else if (emptyMsg) {
      emptyMsg.style.display = 'none';
    }
  }
}
