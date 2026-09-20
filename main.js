/**
 * ARCHITECT INTEZAR - FRAMER & TERASCAPE INTERACTIVE ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initStudioMenu();
  initStickyNav();
  initTimelineTabs();
  initBeforeAfterSlider();
  initPortfolioFilters();
  initProjectModals();
  initEstimatorCalculator();
  initConsultationModal();
});

/* ==========================================================================
   1. HERO PROJECT SLIDER (Screenshot 1: < (01) ── (03) >)
   ========================================================================== */
const heroSlides = [
  {
    num: "(01)",
    title: "Stellar home for Saturion",
    mainHeading: "Home with<br>the hearth",
    img: "assets/terascape-hero.jpg",
    progress: "33%"
  },
  {
    num: "(02)",
    title: "The Obsidian Sky Penthouse",
    mainHeading: "Crown over<br>the skyline",
    img: "assets/terascape-hero-2.jpg",
    progress: "66%"
  },
  {
    num: "(03)",
    title: "Al-Khor Desert Sanctuary",
    mainHeading: "Sanctuary for<br>the senses",
    img: "assets/terascape-hero-3.jpg",
    progress: "100%"
  }
];

function initStudioMenu() {
  const menuBtn = document.getElementById('menuToggleBtn');
  const drawer = document.getElementById('studioMenuDrawer');
  const closeBtn = document.getElementById('closeStudioMenuBtn');
  const backdrop = document.getElementById('closeMenuBackdrop');
  const navItems = document.querySelectorAll('.studio-nav-item');

  if (!menuBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
}

function initHeroSlider() {
  let currentIdx = 0;

  const titleEl = document.getElementById('heroSliderTitle');
  const mainTitleEl = document.getElementById('heroMainTitle');
  const imgEl = document.getElementById('heroCurrentImg');
  const numEl = document.getElementById('sliderCurrentNum');
  const progressEl = document.getElementById('sliderProgressBar');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (!titleEl || !imgEl) return;

  function updateSlide(index) {
    currentIdx = (index + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[currentIdx];

    // Image crossfade
    imgEl.style.opacity = '0';
    setTimeout(() => {
      imgEl.src = slide.img;
      imgEl.style.opacity = '1';
    }, 200);

    titleEl.textContent = slide.title;
    mainTitleEl.innerHTML = slide.mainHeading;
    numEl.textContent = slide.num;
    progressEl.style.width = slide.progress;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentIdx - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentIdx + 1));
}

/* ==========================================================================
   2. STICKY NAV ON SCROLL
   ========================================================================== */
function initStickyNav() {
  const stickyNav = document.getElementById('stickyNav');
  if (!stickyNav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      stickyNav.classList.add('visible');
    } else {
      stickyNav.classList.remove('visible');
    }
  });
}

/* ==========================================================================
   3. TIMELINE INTERACTIVE TABS (Screenshot 3)
   ========================================================================== */
const timelineImages = {
  1: "assets/project-sanctuary.jpg",
  2: "assets/pillar-engineering.jpg",
  3: "assets/after.jpg"
};

function initTimelineTabs() {
  const phaseItems = document.querySelectorAll('.phase-item');
  const activeImg = document.getElementById('timelineActiveImg');

  if (!phaseItems.length || !activeImg) return;

  phaseItems.forEach(item => {
    item.addEventListener('click', () => {
      phaseItems.forEach(p => p.classList.remove('active'));
      item.classList.add('active');

      const phase = item.getAttribute('data-phase');
      if (timelineImages[phase]) {
        activeImg.style.opacity = '0';
        setTimeout(() => {
          activeImg.src = timelineImages[phase];
          activeImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

/* ==========================================================================
   4. BEFORE & AFTER SPLIT COMPARISON SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('comparisonSlider');
  const beforeLayer = document.getElementById('beforeLayer');
  const handle = document.getElementById('sliderHandle');

  if (!container || !beforeLayer || !handle) return;

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    const minX = rect.width * 0.05;
    const maxX = rect.width * 0.95;

    if (offsetX < minX) offsetX = minX;
    if (offsetX > maxX) offsetX = maxX;

    const pct = (offsetX / rect.width) * 100;
    beforeLayer.style.width = `${pct}%`;
    handle.style.left = `${pct}%`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  }, { passive: true });
}

/* ==========================================================================
   5. PORTFOLIO FILTERING
   ========================================================================== */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.portfolio-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const val = btn.getAttribute('data-filter');
      cards.forEach(c => {
        const cat = c.getAttribute('data-category');
        if (val === 'all' || cat === val) {
          c.style.display = 'flex';
        } else {
          c.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. PROJECT DETAIL MODAL
   ========================================================================== */
const projectDetails = {
  monteverde: {
    title: "Villa Monteverde",
    loc: "Costa Brava, Spain • 12,400 sq.ft",
    img: "assets/terascape-hero.jpg",
    desc: "A bold brutalist and travertine cantilevered estate suspended above the Mediterranean Sea. Negative edge reflection infinity pools and frameless floor-to-ceiling glass systems create an effortless dialogue between the interior hearth and the coastal horizon."
  },
  obsidian: {
    title: "The Obsidian Sky Penthouse",
    loc: "Downtown Manhattan, NY • 8,200 sq.ft",
    img: "assets/project-penthouse.jpg",
    desc: "Triplex crown penthouse featuring a sculpted helical staircase in oxidized bronze, floor-to-ceiling panoramic soundproof glazing, and custom dark walnut acoustic joinery."
  },
  sanctuary: {
    title: "Al-Khor Desert Sanctuary",
    loc: "Dubai / Al-Khor • 16,000 sq.ft",
    img: "assets/project-sanctuary.jpg",
    desc: "An earth-toned private sanctuary engineered for extreme climates with subterranean courtyards, ancient olive groves, and thermal mass rammed earth walls."
  },
  mayfair: {
    title: "The Mayfair Master Suite",
    loc: "Mayfair, London • 4,500 sq.ft",
    img: "assets/pillar-interior.jpg",
    desc: "Fluted dark oak joinery, concealed LED lighting, and silk-wool drapery create an acoustically serene private retreat in the heart of London."
  },
  calacatta: {
    title: "The Monolithic Calacatta Atelier",
    loc: "Milan, Italy • 3,200 sq.ft",
    img: "assets/pillar-turnkey.jpg",
    desc: "A 4.5m solid carved Italian Calacatta island, motorized hidden pantry automation, and warm European white oak dining pavilion."
  },
  kyoto: {
    title: "The Biophilic Zen Courtyard",
    loc: "Bandra West, Mumbai • 6,800 sq.ft",
    img: "assets/pillar-biophilic.jpg",
    desc: "Central skylit Japanese maple garden, natural basalt reflection pond, board-formed concrete, and cross-ventilated timber louvers."
  }
};

function initProjectModals() {
  const overlay = document.getElementById('projectModalOverlay');
  const content = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const viewBtns = document.querySelectorAll('.view-project-btn');

  if (!overlay || !content) return;

  const open = (id) => {
    const data = projectDetails[id];
    if (!data) return;

    content.innerHTML = `
      <img src="${data.img}" alt="${data.title}" style="width: 100%; height: 320px; object-fit: cover; border-radius: 16px; margin-bottom: 20px;" />
      <span style="font-size: 0.8rem; color: #6b7280; font-weight: 600; text-transform: uppercase;">${data.loc}</span>
      <h3 style="font-size: 1.6rem; font-weight: 700; margin: 4px 0 12px;">${data.title}</h3>
      <p style="font-size: 0.95rem; color: #4b5563; line-height: 1.6; margin-bottom: 24px;">${data.desc}</p>
      <button class="black-pill-btn open-consultation-btn w-full" style="justify-content: center;">
        <span>Inquire About Similar Space</span>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    `;

    const btn = content.querySelector('.open-consultation-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        close();
        const cModal = document.getElementById('consultationModalOverlay');
        if (cModal) cModal.classList.add('active');
      });
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  viewBtns.forEach(b => {
    b.addEventListener('click', () => {
      const id = b.getAttribute('data-project');
      open(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
}

/* ==========================================================================
   7. ESTIMATOR
   ========================================================================== */
function initEstimatorCalculator() {
  const range = document.getElementById('areaRange');
  const display = document.getElementById('areaDisplay');
  const typePills = document.querySelectorAll('.est-pill');
  const scopePills = document.querySelectorAll('.scope-est-pill');

  const resDur = document.getElementById('resDuration');
  const resTeam = document.getElementById('resTeam');
  const resTier = document.getElementById('resTier');

  if (!range || !display) return;

  let area = 5000;
  let scope = 'complete';

  function update() {
    display.textContent = `${Number(area).toLocaleString()} sq. ft`;

    let weeksMin = Math.round(3 + (area / 5000) * 1.5);
    let weeksMax = weeksMin + 3;
    if (resDur) resDur.textContent = `${weeksMin}–${weeksMax} Weeks (Concept to 8K BIM)`;

    if (resTeam) {
      resTeam.textContent = area > 10000 
        ? "Principal Architect + BIM Director + Interior Lead + Material Specialist"
        : "Principal Architect + 3D Visualizer + Material Director";
    }

    if (resTier) {
      resTier.textContent = scope === 'complete' 
        ? "Bespoke Signature Turnkey Tier"
        : (scope === 'interior' ? "Luxury Interior Master Curation Tier" : "Architectural BIM Blueprint Tier");
    }
  }

  range.addEventListener('input', (e) => {
    area = e.target.value;
    update();
  });

  typePills.forEach(p => {
    p.addEventListener('click', () => {
      typePills.forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      update();
    });
  });

  scopePills.forEach(p => {
    p.addEventListener('click', () => {
      scopePills.forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      scope = p.getAttribute('data-scope');
      update();
    });
  });

  update();
}

/* ==========================================================================
   8. CONSULTATION MODAL
   ========================================================================== */
function initConsultationModal() {
  const overlay = document.getElementById('consultationModalOverlay');
  const closeBtn = document.getElementById('consultCloseBtn');
  const openBtns = document.querySelectorAll('.open-consultation-btn');
  const form = document.getElementById('consultationForm');
  const success = document.getElementById('consultSuccessState');
  const closeSuccess = document.getElementById('closeSuccessBtn');

  if (!overlay) return;

  const open = () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (form) form.style.display = 'flex';
    if (success) success.style.display = 'none';
  };

  const close = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtns.forEach(b => b.addEventListener('click', open));
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (closeSuccess) closeSuccess.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitConsultBtn');
      if (submitBtn) {
        submitBtn.innerHTML = `<span>Securing Strategy Session...</span>`;
      }
      setTimeout(() => {
        form.style.display = 'none';
        if (success) success.style.display = 'block';
        form.reset();
        if (submitBtn) {
          submitBtn.innerHTML = `<span>Submit Project Inquiry</span> <span class="btn-square-icon">■</span>`;
        }
      }, 700);
    });
  }
}
