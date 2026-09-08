/* =====================================================
   NOORAN — JAVASCRIPT (ARABIC FULL VERSION)
   ===================================================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =====================================================
   LOADER
   ===================================================== */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = $("#loader");
    if (loader) loader.classList.add("done");
  }, 1000);
});

/* =====================================================
   NAVBAR SCROLL
   ===================================================== */
const navbar = $("#navbar");
window.addEventListener("scroll", () => {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }
});

/* =====================================================
   MOBILE MENU
   ===================================================== */
const menuToggle = $("#menuToggle");
const mobileMenu = $("#mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

$$("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

/* =====================================================
   SCROLL REVEAL OBSERVER
   ===================================================== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

$$(".reveal").forEach((el) => revealObserver.observe(el));

/* =====================================================
   HERO EYE PARALLAX
   ===================================================== */
const heroVisual = $("#heroVisual");
if (heroVisual) {
  window.addEventListener("mousemove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

    const iris = heroVisual.querySelector(".iris");
    if (iris) {
      iris.style.transform = `translate(calc(-50% + ${x * 15}px), calc(-50% + ${y * 12}px)) rotate(-45deg)`;
    }
  });
}

/* =====================================================
   CUSTOM CURSOR
   ===================================================== */
const cursorLabel = $("#cursorLabel");
if (cursorLabel) {
  window.addEventListener("mousemove", (e) => {
    cursorLabel.style.left = e.clientX + "px";
    cursorLabel.style.top = e.clientY + "px";
  });
}

$$(".booking-btn, .hero-visual, .card").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    if (!cursorLabel) return;
    cursorLabel.textContent = element.classList.contains("booking-btn")
      ? "حجز"
      : "";
    cursorLabel.classList.add("show");
  });

  element.addEventListener("mouseleave", () => {
    if (cursorLabel) cursorLabel.classList.remove("show");
  });
});

/* =====================================================
   ANATOMY INTERACTION
   ===================================================== */
const hotspots = $$(".hotspot");
const eyeTitle = $("#eyeTitle");
const eyeDesc = $("#eyeDesc");

hotspots.forEach((spot) => {
  spot.addEventListener("click", () => {
    hotspots.forEach((s) => s.classList.remove("active"));
    spot.classList.add("active");

    if (eyeTitle && eyeDesc) {
      eyeTitle.textContent = spot.dataset.title;
      eyeDesc.textContent = spot.dataset.description;
    }
  });
});

/* =====================================================
   FAQ ACCORDION
   ===================================================== */
$$(".faq-q").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("open");
  });
});

/* =====================================================
   BOOKING MODAL
   ===================================================== */
const bookingModal = $("#bookingModal");
const modalClose = $("#modalClose");

function openBooking() {
  if (bookingModal) {
    bookingModal.classList.add("open");
    document.body.classList.add("modal-open");
  }
}

function closeBooking() {
  if (bookingModal) {
    bookingModal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }
}

$$("[data-open-booking]").forEach((btn) => {
  btn.addEventListener("click", openBooking);
});

if (modalClose) modalClose.addEventListener("click", closeBooking);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBooking();
});

const bookingForm = $("#bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("تم استلام طلب الحجز بنجاح! وسنتواصل معك قريباً لتأكيد الموعد.");
    closeBooking();
  });
}