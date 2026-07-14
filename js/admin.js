/**
 * CHOOSE TRAVEL - Admin Dashboard Engine (v2.0)
 * Handles LocalStorage data persistence, Lead management, Package management, Quotation generator, and UI switching
 */

'use strict';

// ============================================================
// 1. INITIAL DATA PERSISTENCE & LOCAL STORAGE SETUP
// ============================================================
const DEFAULT_LEADS = [
  { id: 'L001', name: 'Priya Sharma', email: 'priya.sharma@gmail.com', phone: '+91 98765 00001', package: 'Kerala Backwaters Tour', date: 'Aug 15, 2026', pax: '4 Adults', status: 'New', submitted: '2026-07-08', notes: 'Wants houseboat stay with AC.' },
  { id: 'L002', name: 'Rahul Kumar', email: 'rahul.k@yahoo.com', phone: '+91 98765 00002', package: 'Andaman Paradise Tour', date: 'Sep 10, 2026', pax: '2 Adults', status: 'Contacted', submitted: '2026-07-07', notes: 'Honeymoon couple, requested scuba diving add-on.' },
  { id: 'L003', name: 'Anita Mehta', email: 'anita.mehta@outlook.com', phone: '+91 98765 00003', package: 'Coorg Honeymoon Package', date: 'Oct 5, 2026', pax: '2 Adults', status: 'Booked', submitted: '2026-07-06', notes: 'Advance ₹22,000 received via UPI.' },
  { id: 'L004', name: 'Vikram Patel', email: 'vpatel99@gmail.com', phone: '+91 98765 00004', package: 'Rajasthan Heritage Tour', date: 'Nov 20, 2026', pax: '6 Adults, 2 Kids', status: 'Follow-up', submitted: '2026-07-05', notes: 'Asking for tempo traveller and heritage palace stays.' },
  { id: 'L005', name: 'Sneha Nair', email: 'sneha.nair@gmail.com', phone: '+91 98765 00005', package: 'Kashmir Heaven Tour', date: 'Dec 15, 2026', pax: '4 Adults', status: 'New', submitted: '2026-07-08', notes: 'Looking for Gulmarg gondola Phase 2 included.' },
  { id: 'L006', name: 'Amitabh Verma', email: 'verma.a@gmail.com', phone: '+91 98765 00006', package: 'Goa Beach Holiday', date: 'Aug 28, 2026', pax: '5 Adults', status: 'Contacted', submitted: '2026-07-04', notes: 'North Goa resort close to Baga beach.' },
  { id: 'L007', name: 'Divya & Karan', email: 'divya.k@gmail.com', phone: '+91 98765 00007', package: 'Himachal Snow Adventure', date: 'Dec 24, 2026', pax: '2 Adults', status: 'New', submitted: '2026-07-08', notes: 'Manali & Solang valley snow activities.' },
  { id: 'L008', name: 'Rajesh Gupta', email: 'rgupta.biz@gmail.com', phone: '+91 98765 00008', package: 'Ooty Weekend Getaway', date: 'Jul 25, 2026', pax: '3 Adults', status: 'Booked', submitted: '2026-07-03', notes: 'Full payment completed.' }
];

const DEFAULT_PACKAGES = [
  { id: 'PKG1', title: 'Kerala Family Tour & Backwaters', destination: 'Kerala', duration: '5 Days / 4 Nights', category: 'Family', regularPrice: 22000, offerPrice: 18500, status: 'Published', featured: 'Yes', enquiries: 78 },
  { id: 'PKG2', title: 'Andaman Beach Paradise & Scuba', destination: 'Andaman', duration: '6 Days / 5 Nights', category: 'Adventure', regularPrice: 32000, offerPrice: 27999, status: 'Published', featured: 'Yes', enquiries: 62 },
  { id: 'PKG3', title: 'Goa Luxury Beach Resort Holiday', destination: 'Goa', duration: '4 Days / 3 Nights', category: 'Weekend', regularPrice: 16000, offerPrice: 13499, status: 'Published', featured: 'No', enquiries: 48 },
  { id: 'PKG4', title: 'Kashmir Heaven on Earth Tour', destination: 'Kashmir', duration: '6 Days / 5 Nights', category: 'Honeymoon', regularPrice: 35000, offerPrice: 29999, status: 'Published', featured: 'Yes', enquiries: 35 },
  { id: 'PKG5', title: 'Coorg & Mysore Nature Escape', destination: 'South India', duration: '4 Days / 3 Nights', category: 'Family', regularPrice: 15000, offerPrice: 12500, status: 'Published', featured: 'No', enquiries: 24 },
  { id: 'PKG6', title: 'Himachal Snow Adventure & Kasol', destination: 'North India', duration: '7 Days / 6 Nights', category: 'Adventure', regularPrice: 26000, offerPrice: 21999, status: 'Published', featured: 'Yes', enquiries: 41 }
];

const DEFAULT_DESTINATIONS = [
  { id: 'DST1', name: 'Kerala Backwaters & Hills', region: 'South India', packagesCount: 12, rating: '4.9/5', status: 'Active', featured: 'Yes' },
  { id: 'DST2', name: 'Kashmir Valley & Gulmarg', region: 'North India', packagesCount: 8, rating: '4.8/5', status: 'Active', featured: 'Yes' },
  { id: 'DST3', name: 'Andaman & Nicobar Islands', region: 'Islands', packagesCount: 6, rating: '4.9/5', status: 'Active', featured: 'Yes' },
  { id: 'DST4', name: 'Goa Beaches & Nightlife', region: 'West India', packagesCount: 15, rating: '4.7/5', status: 'Active', featured: 'Yes' },
  { id: 'DST5', name: 'Himachal Pradesh (Manali/Shimla)', region: 'North India', packagesCount: 10, rating: '4.8/5', status: 'Active', featured: 'No' },
  { id: 'DST6', name: 'Rajasthan Heritage & Palaces', region: 'West India', packagesCount: 9, rating: '4.9/5', status: 'Active', featured: 'Yes' }
];

const DEFAULT_BLOGS = [
  { id: 'BLG1', title: '10 Best Beaches in India You Must Visit in 2026', category: 'Beaches', author: 'Ananya Sharma', date: 'Jul 4, 2026', views: 1420, status: 'Published' },
  { id: 'BLG2', title: 'Complete Guide to Kerala Houseboat Experiences', category: 'Travel Guides', author: 'Vikram Singh', date: 'Jun 28, 2026', views: 980, status: 'Published' },
  { id: 'BLG3', title: 'Packing Checklist for Ladakh & High Altitude Tours', category: 'Tips & Tricks', author: 'Ananya Sharma', date: 'Jun 15, 2026', views: 850, status: 'Published' }
];

// Load from LocalStorage or seed defaults
function loadData(key, defaultVal) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function saveData(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error('Error saving to LocalStorage:', e);
  }
}

let leadsData = loadData('CHOOSE_TRAVEL_LEADS', DEFAULT_LEADS);
let packagesData = loadData('CHOOSE_TRAVEL_PACKAGES', DEFAULT_PACKAGES);
let destinationsData = loadData('CHOOSE_TRAVEL_DESTINATIONS', DEFAULT_DESTINATIONS);
let blogsData = loadData('CHOOSE_TRAVEL_BLOGS', DEFAULT_BLOGS);

// ============================================================
// 2. TAB SWITCHER ENGINE
// ============================================================
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.admin-section').forEach(sec => {
    sec.style.display = 'none';
  });

  // Show target section
  const target = document.getElementById(`section-${sectionName}`);
  if (target) {
    target.style.display = 'block';
  }

  // Update sidebar active state
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === sectionName) {
      link.classList.add('active');
    }
  });

  // Update Topbar Title
  const titleEl = document.querySelector('.admin-page-title');
  if (titleEl) {
    const titles = {
      'dashboard': 'Dashboard Overview',
      'leads': 'Lead & Enquiry Management',
      'packages': 'Tour Packages Management',
      'destinations': 'Destinations CMS',
      'quotes': 'Quotation & Itinerary Builder',
      'blogs': 'Blog & Content Management',
      'settings': 'Agency & SEO Settings'
    };
    titleEl.textContent = titles[sectionName] || 'Admin Dashboard';
  }

  // Close mobile sidebar on navigation
  const sidebar = document.querySelector('.admin-sidebar');
  if (sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }

  // Refresh data view
  if (sectionName === 'dashboard') renderDashboard();
  if (sectionName === 'leads') renderLeadsTable();
  if (sectionName === 'packages') renderPackagesTable();
  if (sectionName === 'destinations') renderDestinationsTable();
  if (sectionName === 'blogs') renderBlogsTable();
}

// ============================================================
// 3. RENDER DASHBOARD KPI & CHARTS
// ============================================================
function renderDashboard() {
  const totalLeadsEl = document.getElementById('kpiTotalLeads');
  const confirmedEl = document.getElementById('kpiConfirmed');
  const revenueEl = document.getElementById('kpiRevenue');
  const newTodayEl = document.getElementById('kpiNewToday');

  if (totalLeadsEl) totalLeadsEl.textContent = leadsData.length;
  
  const bookedCount = leadsData.filter(l => l.status === 'Booked').length;
  if (confirmedEl) confirmedEl.textContent = bookedCount;

  const revenue = bookedCount * 45000; // Average ₹45k per booking
  if (revenueEl) revenueEl.textContent = `₹${(revenue / 100000).toFixed(1)}L`;

  const newCount = leadsData.filter(l => l.status === 'New').length;
  if (newTodayEl) newTodayEl.textContent = newCount;

  // Update top packages widget
  const topPkgList = document.getElementById('topPackagesList');
  if (topPkgList) {
    topPkgList.innerHTML = packagesData
      .sort((a,b) => b.enquiries - a.enquiries)
      .slice(0, 5)
      .map(pkg => `
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F7FAFC;">
          <span style="font-size:.82rem;color:#4A5568;width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;">${pkg.title}</span>
          <div style="flex:1;background:#E2E8F0;border-radius:4px;height:8px;overflow:hidden;">
            <div style="width:${Math.min(pkg.enquiries, 100)}%;height:100%;background:var(--primary);border-radius:4px;"></div>
          </div>
          <span style="font-size:.78rem;font-weight:700;color:var(--primary);width:35px;text-align:right;">${pkg.enquiries}</span>
        </div>
      `).join('');
  }
}

// ============================================================
// 4. LEADS MANAGEMENT & ACTIONS
// ============================================================
function renderLeadsTable(filterStatus = 'All', searchQuery = '') {
  const tbody = document.getElementById('leadsTableBody');
  if (!tbody) return;

  let filtered = leadsData;
  if (filterStatus && filterStatus !== 'All' && filterStatus !== 'All Statuses') {
    filtered = filtered.filter(l => l.status === filterStatus);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(l => 
      l.name.toLowerCase().includes(q) || 
      l.phone.includes(q) || 
      l.package.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:30px;color:#718096;font-weight:600;">No matching leads found.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((l, idx) => {
    const statusClass = {
      'New': 'status-new',
      'Contacted': 'status-contacted',
      'Booked': 'status-booked',
      'Follow-up': 'status-follow',
      'Closed': 'status-closed'
    }[l.status] || 'status-new';

    const cleanPhone = l.phone.replace(/[^0-9]/g, '');

    return `
      <tr>
        <td style="font-weight:700;color:#718096;">#${l.id}</td>
        <td>
          <div style="font-weight:700;color:#0D1B2A;">${l.name}</div>
          <div style="font-size:.76rem;color:#718096;">${l.email || 'No email'}</div>
        </td>
        <td style="font-weight:600;">
          <a href="tel:${l.phone}" style="color:#0056D2;text-decoration:none;"><i class="fas fa-phone-alt" style="font-size:.75rem;margin-right:4px;"></i> ${l.phone}</a>
        </td>
        <td style="font-weight:600;color:#1C2B3A;">${l.package}</td>
        <td style="font-size:.85rem;">${l.date}</td>
        <td style="font-size:.85rem;">${l.pax}</td>
        <td>
          <select onchange="updateLeadStatus('${l.id}', this.value)" style="padding:4px 8px;border-radius:6px;font-size:.76rem;font-weight:700;border:1px solid #CBD5E0;outline:none;cursor:pointer;" class="status-badge ${statusClass}">
            <option value="New" ${l.status === 'New' ? 'selected' : ''}>New</option>
            <option value="Contacted" ${l.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
            <option value="Follow-up" ${l.status === 'Follow-up' ? 'selected' : ''}>Follow-up</option>
            <option value="Booked" ${l.status === 'Booked' ? 'selected' : ''}>Booked</option>
            <option value="Closed" ${l.status === 'Closed' ? 'selected' : ''}>Closed</option>
          </select>
        </td>
        <td style="font-size:.8rem;color:#718096;">${l.submitted}</td>
        <td>
          <div class="action-btns">
            <button class="action-btn action-view" title="Chat on WhatsApp" onclick="whatsappLead('${l.name}', '${cleanPhone}', '${l.package}')" style="background:#E8F8F0;color:#25D366;border:none;">
              <i class="fab fa-whatsapp"></i>
            </button>
            <button class="action-btn action-edit" title="View Details" onclick="viewLeadDetails('${l.id}')">
              <i class="fas fa-eye"></i>
            </button>
            <button class="action-btn action-del" title="Delete Lead" onclick="deleteLead('${l.id}')">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  const countEl = document.getElementById('leadsCountText');
  if (countEl) countEl.textContent = `Showing ${filtered.length} of ${leadsData.length} leads`;
}

function updateLeadStatus(id, newStatus) {
  const lead = leadsData.find(l => l.id === id);
  if (lead) {
    lead.status = newStatus;
    saveData('CHOOSE_TRAVEL_LEADS', leadsData);
    renderDashboard();
    renderLeadsTable();
  }
}

function deleteLead(id) {
  if (confirm(`Are you sure you want to delete lead #${id}?`)) {
    leadsData = leadsData.filter(l => l.id !== id);
    saveData('CHOOSE_TRAVEL_LEADS', leadsData);
    renderLeadsTable();
    renderDashboard();
  }
}

function whatsappLead(name, phone, pkg) {
  if (!phone || phone.length < 10) {
    alert('Invalid phone number for this lead.');
    return;
  }
  const msg = encodeURIComponent(`Hi ${name}, greeting from Choose Travel! We received your enquiry for *${pkg}*. How can our travel experts assist you with customizing your itinerary?`);
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}

function viewLeadDetails(id) {
  const lead = leadsData.find(l => l.id === id);
  if (!lead) return;
  alert(`📋 Lead Details [ID: #${lead.id}]\n\n👤 Name: ${lead.name}\n📞 Phone: ${lead.phone}\n📧 Email: ${lead.email}\n🌴 Package: ${lead.package}\n📅 Travel Date: ${lead.date}\n👥 Travelers: ${lead.pax}\n📌 Status: ${lead.status}\n📝 Notes: ${lead.notes || 'No special notes.'}`);
}

function addNewLeadModal() {
  const name = prompt('Customer Name:');
  if (!name) return;
  const phone = prompt('Customer Phone Number (e.g. +91 98765 12345):') || '+91 90000 00000';
  const pkg = prompt('Interested Package / Destination:') || 'Custom Tour';
  const pax = prompt('Number of Travelers (e.g. 2 Adults, 1 Child):') || '2 Adults';
  const notes = prompt('Special Notes / Budget / Dates:') || 'New phone inquiry.';

  const newId = 'L' + String(leadsData.length + 1).padStart(3, '0');
  const newLead = {
    id: newId,
    name: name.trim(),
    email: 'client@choosetravel.in',
    phone: phone.trim(),
    package: pkg.trim(),
    date: 'Flexible 2026',
    pax: pax.trim(),
    status: 'New',
    submitted: new Date().toISOString().split('T')[0],
    notes: notes.trim()
  };

  leadsData.unshift(newLead);
  saveData('CHOOSE_TRAVEL_LEADS', leadsData);
  renderLeadsTable();
  renderDashboard();
  alert(`✅ Lead #${newId} successfully created!`);
}

// ============================================================
// 5. PACKAGES MANAGEMENT ENGINE
// ============================================================
function renderPackagesTable() {
  const tbody = document.getElementById('packagesTableBody');
  if (!tbody) return;

  tbody.innerHTML = packagesData.map(pkg => `
    <tr>
      <td style="font-weight:700;color:#0056D2;">#${pkg.id}</td>
      <td>
        <div style="font-weight:800;color:#0D1B2A;">${pkg.title}</div>
        <div style="font-size:.76rem;color:#718096;">Category: ${pkg.category} &bull; ${pkg.duration}</div>
      </td>
      <td style="font-weight:600;">${pkg.destination}</td>
      <td>
        <div style="font-weight:700;color:#27AE60;">₹${pkg.offerPrice.toLocaleString()}</div>
        <div style="font-size:.76rem;color:#A0AEC0;text-decoration:line-through;">₹${pkg.regularPrice.toLocaleString()}</div>
      </td>
      <td>
        <span class="status-badge ${pkg.status === 'Published' ? 'status-booked' : 'status-follow'}">${pkg.status}</span>
      </td>
      <td style="font-weight:700;text-align:center;">${pkg.enquiries}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn action-edit" title="Edit Package" onclick="alert('Editing ${pkg.title}')"><i class="fas fa-edit"></i></button>
          <button class="action-btn action-view" title="Preview on Website" onclick="window.open('tour-packages.html', '_blank')"><i class="fas fa-external-link-alt"></i></button>
          <button class="action-btn action-del" title="Delete Package" onclick="deletePackage('${pkg.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function deletePackage(id) {
  if (confirm(`Are you sure you want to delete package #${id}?`)) {
    packagesData = packagesData.filter(p => p.id !== id);
    saveData('CHOOSE_TRAVEL_PACKAGES', packagesData);
    renderPackagesTable();
    renderDashboard();
  }
}

function handleAddPackageSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const title = form.querySelector('[name="pkgTitle"]').value || 'Custom Holiday Package';
  const destination = form.querySelector('[name="pkgDest"]').value || 'India';
  const duration = form.querySelector('[name="pkgDuration"]').value || '4 Days / 3 Nights';
  const category = form.querySelector('[name="pkgCategory"]').value || 'Family';
  const regularPrice = Number(form.querySelector('[name="pkgRegPrice"]').value) || 20000;
  const offerPrice = Number(form.querySelector('[name="pkgOfferPrice"]').value) || 16500;
  const status = form.querySelector('[name="pkgStatus"]').value || 'Published';
  const image = form.querySelector('[name="pkgImage"]') ? form.querySelector('[name="pkgImage"]').value : 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80';
  const offerText = form.querySelector('[name="pkgOfferText"]') ? form.querySelector('[name="pkgOfferText"]').value : '🔥 Special Offer';

  const newPkg = {
    id: 'PKG' + (packagesData.length + 1),
    title,
    destination,
    duration,
    category,
    regularPrice,
    offerPrice,
    status,
    featured: 'Yes',
    enquiries: 1,
    image,
    offerText,
    isCustom: true
  };

  packagesData.unshift(newPkg);
  saveData('CHOOSE_TRAVEL_PACKAGES', packagesData);
  form.reset();
  alert(`✅ Tour Package "${title}" with Offer "${offerText}" successfully published to Live Website!`);
  showSection('packages');
}

// ============================================================
// 6. DESTINATIONS & BLOGS TABLE RENDER
// ============================================================
function renderDestinationsTable() {
  const tbody = document.getElementById('destinationsTableBody');
  if (!tbody) return;

  tbody.innerHTML = destinationsData.map(d => `
    <tr>
      <td style="font-weight:700;color:#0056D2;">#${d.id}</td>
      <td>
        <div style="font-weight:800;color:#0D1B2A;">${d.name}</div>
        ${d.offerText ? `<span style="font-size:.72rem;background:#FEF3E2;color:#F5A623;padding:2px 8px;border-radius:4px;font-weight:700;">${d.offerText}</span>` : ''}
      </td>
      <td><span class="tag-badge" style="background:#EBF5FF;color:#0056D2;padding:4px 10px;border-radius:4px;font-size:.78rem;font-weight:600;">${d.region}</span></td>
      <td style="font-weight:700;">${d.packagesCount || 8} Packages</td>
      <td style="color:#F5A623;font-weight:700;"><i class="fas fa-star"></i> ${d.rating || '4.9/5'}</td>
      <td><span class="status-badge status-booked">${d.status || 'Active'}</span></td>
      <td>
        <div class="action-btns">
          <button class="action-btn action-view" title="Preview on Website" onclick="window.open('destinations.html', '_blank')"><i class="fas fa-external-link-alt"></i></button>
          <button class="action-btn action-del" title="Delete Destination" onclick="deleteDestination('${d.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function deleteDestination(id) {
  if (confirm(`Are you sure you want to delete destination #${id}?`)) {
    destinationsData = destinationsData.filter(d => d.id !== id);
    saveData('CHOOSE_TRAVEL_DESTINATIONS', destinationsData);
    renderDestinationsTable();
  }
}

function addNewDestinationModal() {
  const name = prompt('New Destination Name (e.g. Lakshadweep Islands, Munnar Hills):');
  if (!name) return;
  const region = prompt('Region (e.g. South India, North India, Islands, International):') || 'India';
  const startPrice = Number(prompt('Starting Price per person (₹) e.g. 15999:')) || 15999;
  const offerText = prompt('Special Offer / Deal Badge (e.g. 💥 20% OFF Early Bird):') || '💥 Special Offer';
  const image = prompt('Image URL (or leave blank for default scenic photo):') || 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80';

  const newDest = {
    id: 'DST' + (destinationsData.length + 1),
    name: name.trim(),
    region: region.trim(),
    packagesCount: 12,
    rating: '4.9/5',
    status: 'Active',
    featured: 'Yes',
    startPrice,
    offerText: offerText.trim(),
    image: image.trim(),
    isCustom: true
  };

  destinationsData.unshift(newDest);
  saveData('CHOOSE_TRAVEL_DESTINATIONS', destinationsData);
  renderDestinationsTable();
  renderDashboard();
  alert(`✅ Destination "${name}" with offer "${offerText}" successfully added and published to the live website!`);
}

function renderBlogsTable() {
  const tbody = document.getElementById('blogsTableBody');
  if (!tbody) return;

  tbody.innerHTML = blogsData.map(b => `
    <tr>
      <td style="font-weight:700;color:#718096;">#${b.id}</td>
      <td style="font-weight:700;color:#0D1B2A;">${b.title}</td>
      <td><span style="background:#F3EAF8;color:#9B59B6;padding:3px 8px;border-radius:4px;font-size:.75rem;font-weight:600;">${b.category}</span></td>
      <td style="font-size:.85rem;">${b.author}</td>
      <td style="font-size:.85rem;">${b.date}</td>
      <td style="font-weight:700;">${b.views.toLocaleString()}</td>
      <td><span class="status-badge status-booked">${b.status}</span></td>
      <td>
        <div class="action-btns">
          <button class="action-btn action-edit" title="Edit Article"><i class="fas fa-edit"></i></button>
          <button class="action-btn action-view" title="View Article" onclick="window.open('blog-detail.html', '_blank')"><i class="fas fa-eye"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ============================================================
// 7. QUOTATION & ITINERARY GENERATOR TOOL
// ============================================================
function handleQuoteGenerator(e) {
  e.preventDefault();
  const form = e.target;
  const clientName = form.querySelector('[name="qClientName"]').value || 'Valued Guest';
  const dest = form.querySelector('[name="qDest"]').value || 'Kerala Backwaters';
  const days = form.querySelector('[name="qDays"]').value || '5 Days / 4 Nights';
  const pax = form.querySelector('[name="qPax"]').value || '2 Adults';
  const hotels = form.querySelector('[name="qHotels"]').value || '3-Star Premium Hotels + Houseboat';
  const cab = form.querySelector('[name="qCab"]').value || 'Private AC Sedan / SUV';
  const price = form.querySelector('[name="qPrice"]').value || '₹24,500 per person';

  const quoteText = `🌴 *CHOOSE TRAVEL – OFFICIAL HOLIDAY QUOTATION* 🌴
============================================
👤 *Guest Name:* ${clientName}
📍 *Destination:* ${dest}
🗓️ *Duration:* ${days}
👥 *Travelers:* ${pax}

🏨 *Accommodation:*
✅ ${hotels}
✅ Daily Buffet Breakfast Included

🚗 *Transportation & Transfers:*
✅ ${cab} for entire sightseeing & pickup/drop
✅ All toll, parking & driver batta included

💰 *Special Offer Package Price:* *${price}* (Total / Per Person as per discussion)

✨ *Why Choose Travel?*
⭐ 10,000+ Happy Travelers across India
⭐ 24/7 On-Trip Concierge & WhatsApp Assistance
⭐ 100% Transparent Pricing with No Hidden Costs

📞 *To confirm your booking, reply to this message or call our travel expert at +91 98765 43210!*`;

  // Copy to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(quoteText).then(() => {
      alert('✅ Quotation successfully copied to clipboard! You can paste it directly into WhatsApp or email for ' + clientName + '.');
    }).catch(() => {
      prompt('Copy quotation text below:', quoteText);
    });
  } else {
    prompt('Copy quotation text below:', quoteText);
  }
}

// ============================================================
// 8. INITIALIZE & EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Render initial dashboard data
  renderDashboard();
  renderLeadsTable();
  renderPackagesTable();
  renderDestinationsTable();
  renderBlogsTable();

  // Attach search & filter listeners for leads
  const searchInput = document.getElementById('leadSearchInput');
  const statusSelect = document.getElementById('leadStatusFilter');
  
  if (searchInput && statusSelect) {
    const applyLeadFilters = () => {
      renderLeadsTable(statusSelect.value, searchInput.value);
    };
    searchInput.addEventListener('input', applyLeadFilters);
    statusSelect.addEventListener('change', applyLeadFilters);
  }

  // Attach Package Form submit
  const pkgForm = document.getElementById('addPackageForm');
  if (pkgForm) {
    pkgForm.addEventListener('submit', handleAddPackageSubmit);
  }

  // Attach Quote Generator Form submit
  const quoteForm = document.getElementById('quoteGeneratorForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', handleQuoteGenerator);
  }

  // Sidebar toggle button on topbar
  const toggleBtn = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.admin-sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
});
