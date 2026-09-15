/* =====================================================
   NOORAN — JAVASCRIPT (FULL AR/EN i18n + INTERACTIVE ENGINE)
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  /* =====================================================
     1. DICTIONARY SYSTEM (i18n)
     ===================================================== */
  const i18n = {
    ar: {
      loader_text: "طب وجراحة العيون المتقدمة",
      nav_about: "فلسفتنا",
      nav_expertise: "التخصصات",
      nav_doctor: "د. نوران",
      nav_anatomy: "التشريح التفاعلي",
      nav_technology: "التقنيات",
      nav_faq: "الأسئلة الشائعة",
      nav_contact: "التواصل",
      nav_booking: "حجز موعد",

      hero_eyebrow: "رؤية أصفى.. لحياة أجمل",
      hero_subtitle: "دقة متناهية في طب وجراحة العيون",
      hero_desc: "نجمع بين الخبرة الطبية الرفيعة وأحدث تقنيات الفيمتو سيلك والتصوير الطبقي لتقديم أفضل مستوى من الرعاية البصرية المخصصة لك.",
      hero_cta: "حجز موعد استشارة",
      hero_explore: "استكشف خدماتنا",

      about_label: "فلسفة الرعاية",
      about_title: "العين نافذتك للعالم، ورعايتها شغفنا الأول",
      about_desc: "في مركز NOORAN، نؤمن بأن كل عين تشكل حالة فريدة تتطلب فحصاً تشخيصياً دقيقاً وخطة علاجية تناسب نمط حياتك. نستخدم أحدث الابتكارات لضمان أعلى درجات الأمان والراحة.",

      exp_eyebrow: "خدماتنا الطبية",
      exp_title: "تخصصاتنا الدقيقة",
      exp1_title: "تصحيح النظر بالليزر والفيمتو سيلك",
      exp1_desc: "أحدث تقنيات تصحيح الابصار بدون ألم وبأعلى درجات الأمان.",
      exp2_title: "جراحة المياه البيضاء وزراعة العدسات",
      exp2_desc: "استبدال العدسة الكدرة بأحدث العدسات الذكية متعددة البؤر.",
      exp3_title: "علاج وجراحة المياه الزرقاء (الجلوكوما)",
      exp3_desc: "متابعة وضبط ضغط العين لحماية العصب البصري من التلف.",
      exp4_title: "علاج أمراض الشبكية والجسم الزجاجي",
      exp4_desc: "علاج اعتلال الشبكية السكري وحقن العيون بأحدث المواد الطبية.",

      doc_eyebrow: "عن الطبيبة",
      doc_title: "د. نوران",
      doc_sub: "استشاري طب وجراحة العيون والفيزياء البصرية",
      doc_desc: "تمتلك د. نوران خبرة طويلة في إجراء أحدث جراحات تصحيح النظر والمياه البيضاء باستخدام الأجهزة الميكروسكوبية الدقيقة، وتشارك في المؤتمرات الدولية لنقل أحدث ابتكارات طب العيون لمرضاها.",
      doc_card: "خبرة تزيد عن ١٥ عاماً في تصحيح البصر ورعاية العين المتكاملة",

      anatomy_eyebrow: "التشريح التفاعلي",
      anatomy_title: "تعرف على أجزاء عينك",

      tech_eyebrow: "التكنولوجيا والأجهزة",
      tech_title: "تقنيات التشخيص والجراحة الحديثة",
      tech1_title: "OCT التصوير الطبقي",
      tech1_desc: "أدق جهاز للمسح الضوئي لطبقات الشبكية والعصب البصري بوضوح متناهٍ للتشخيص المبكر.",
      tech2_title: "Femto-Smile الفيمتو سيلك",
      tech2_desc: "أحدث تكنولوجيا تصحيح النظر بدون استخدام الشفرات الجراحية، لسرعة تعافي قياسية.",
      tech3_title: "Micro-Surgical Systems",
      tech3_desc: "مجاهر جراحية متطورة توفر دقة فائقة أثناء عمليات المياه البيضاء وزراعة العدسات.",

      faq_eyebrow: "الأسئلة الشائعة",
      faq_title: "إجابات لأسئلتك",
      faq1_q: "هل عملية تصحيح النظر بالفيمتو سيلك مؤلمة؟",
      faq1_a: "العملية غير مؤلمة تماماً حيث يتم استخدام قطرات مخدرة موضعية للعين، وتستغرق دقائق معدودة فقط.",
      faq2_q: "متى يمكنني العودة للعمل بعد العملية؟",
      faq2_a: "يمكن لمعظم المرضى العودة لممارسة حياتهم الطبيعية والعمل خلال 24 إلى 48 ساعة بعد العملية حسب تعليمات الطبيب.",
      faq3_q: "ما هي شروط إجراء عملية تصحيح النظر؟",
      faq3_a: "يشترط أن يكون عمر المريض 18 عاماً فأكثر، وثبات درجة النظر لمدة عام على الأقل، وسلامة سمك القرنية وفحص العين الشامل.",

      contact_eyebrow: "تواصل معنا",
      contact_title: "يسعدنا استقبالك في مركزنا",
      contact_desc: "احجز موعدك الآن للحصول على استشارة شمولية وصحة بصرية أفضل.",
      contact_info_title: "معلومات العيادة",
      contact_addr: "📍 العنوان: الرياض، المملكة العربية السعودية",
      contact_phone_lbl: "الهاتف:",
      contact_hours: "⏰ ساعات العمل: يومياً من 4 مساءً حتى 10 مساءً",

      footer_copy: "جميع الحقوق محفوظة © 2026 مركز NOORAN لطب وجراحة العيون.",
      footer_dev: "تصميم وتطوير برؤية حديثة متكاملة",
      back_to_top: "العودة للأعلى ↑",

      modal_title: "حجز موعد استشارة",
      modal_name: "الاسم الكامل",
      ph_name: "أدخل اسمك الكريم",
      modal_phone: "رقم الهاتف",
      ph_phone: "05xxxxxxxx",
      modal_service: "نوع الخدمة المطلوبة",
      opt_1: "تصحيح النظر (الفيمتو سيلك / الليزك)",
      opt_2: "جراحة المياه البيضاء",
      opt_3: "فحص عين شامل",
      opt_4: "استشارة أخرى",
      modal_submit: "تأكيد الحجز",

      toast_success: "تم استلام طلب الحجز بنجاح! وسنتواصل معك قريباً لتأكيد الموعد.",
      cursor_book: "حجز",
      cursor_explore: "استكشف"
    },
    en: {
      loader_text: "Advanced Ophthalmology & Eye Surgery",
      nav_about: "About Us",
      nav_expertise: "Specialties",
      nav_doctor: "Dr. Nooran",
      nav_anatomy: "Interactive Anatomy",
      nav_technology: "Technology",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_booking: "Book Appointment",

      hero_eyebrow: "Clearer Vision.. Better Life",
      hero_subtitle: "Precision in Ophthalmology & Eye Surgery",
      hero_desc: "Combining clinical excellence with modern Femto-Smile & OCT diagnostic imaging to deliver personalized visual care.",
      hero_cta: "Book Consultation",
      hero_explore: "Explore Services",

      about_label: "Care Philosophy",
      about_title: "Your Eyes Are Your Window to the World",
      about_desc: "At NOORAN Center, every eye is treated as a unique case requiring precise diagnostics and personalized treatment plans for safety and comfort.",

      exp_eyebrow: "Medical Services",
      exp_title: "Specialized Procedures",
      exp1_title: "LASIK & Femto-Smile Vision Correction",
      exp1_desc: "Painless vision correction using advanced blade-free laser techniques.",
      exp2_title: "Cataract Surgery & Premium Lenses",
      exp2_desc: "Replacing clouded lenses with advanced multifocal intraocular lenses.",
      exp3_title: "Glaucoma Treatment & Management",
      exp3_desc: "Monitoring intraocular pressure to prevent optic nerve damage.",
      exp4_title: "Retina & Vitreous Procedures",
      exp4_desc: "Treating diabetic retinopathy and retinal intravitreal injections.",

      doc_eyebrow: "About the Surgeon",
      doc_title: "Dr. Nooran",
      doc_sub: "Consultant Ophthalmologist & Optical Physics Expert",
      doc_desc: "Dr. Nooran holds long-standing experience in advanced refractive and cataract surgeries using microscopic systems and international protocols.",
      doc_card: "Over 15 Years of Experience in Advanced Eye Surgery",

      anatomy_eyebrow: "Interactive Anatomy",
      anatomy_title: "Discover Your Eye Structure",

      tech_eyebrow: "Medical Technology",
      tech_title: "Modern Diagnostic & Surgical Gear",
      tech1_title: "OCT Retinal Imaging",
      tech1_desc: "High-resolution optical coherence tomography for early diagnosis.",
      tech2_title: "Femto-Smile Technology",
      tech2_desc: "Flapless and painless laser vision correction for rapid recovery.",
      tech3_title: "Micro-Surgical Systems",
      tech3_desc: "Advanced surgical microscopes providing extreme precision.",

      faq_eyebrow: "FAQ",
      faq_title: "Answers to Your Questions",
      faq1_q: "Is Femto-Smile procedure painful?",
      faq1_a: "It is completely painless thanks to topical anesthetic eye drops, lasting only a few minutes.",
      faq2_q: "When can I return to work after surgery?",
      faq2_a: "Most patients resume normal activities and work within 24 to 48 hours.",
      faq3_q: "What are the requirements for vision correction?",
      faq3_a: "Patient must be 18+ years old, have stable vision for at least 1 year, and healthy corneal thickness.",

      contact_eyebrow: "Contact Us",
      contact_title: "We Are Ready to Welcome You",
      contact_desc: "Book your appointment today for a comprehensive eye assessment.",
      contact_info_title: "Clinic Details",
      contact_addr: "📍 Location: Riyadh, Kingdom of Saudi Arabia",
      contact_phone_lbl: "Phone:",
      contact_hours: "⏰ Working Hours: Daily from 4 PM to 10 PM",

      footer_copy: "All Rights Reserved © 2026 NOORAN Ophthalmology Center.",
      footer_dev: "Modern Visionary Design & Development",
      back_to_top: "Back to Top ↑",

      modal_title: "Book Consultation",
      modal_name: "Full Name",
      ph_name: "Enter your full name",
      modal_phone: "Phone Number",
      ph_phone: "05xxxxxxxx",
      modal_service: "Service Required",
      opt_1: "Vision Correction (Femto-Smile / LASIK)",
      opt_2: "Cataract Surgery",
      opt_3: "Comprehensive Eye Exam",
      opt_4: "Other Consultation",
      modal_submit: "Confirm Booking",

      toast_success: "Booking request received! We will contact you shortly to confirm.",
      cursor_book: "Book",
      cursor_explore: "Explore"
    }
  };

  const anatomyDetails = {
    cornea: {
      ar: { title: "القرنية (Cornea)", desc: "الطبقة الشفافة الأمامية للعين التي تقوم بكسر الضوء وتجميعه للرؤية الواضحة." },
      en: { title: "Cornea", desc: "The clear outer lens at the front of the eye that focuses incoming light." }
    },
    iris: {
      ar: { title: "القزحية والحدقة (Iris & Pupil)", desc: "الجزء الملون الذي يتحكم في كمية الضوء الداخلة إلى العين عبر انقباض الحدقة وانبساطها." },
      en: { title: "Iris & Pupil", desc: "The colored part controlling light entry by adjusting the pupil size." }
    },
    retina: {
      ar: { title: "الشبكية (Retina)", desc: "الطبقة الحساسة للضوء في الجزء الخلفي للعين والتي ترسل الإشارات البصرية إلى الدماغ." },
      en: { title: "Retina", desc: "Light-sensitive tissue at the back of the eye transmitting visual signals to the brain." }
    }
  };

  let currentLang = "ar";
  let activeSpotKey = "cornea";

  /* =====================================================
     2. SWITCH LANGUAGE FUNCTION
     ===================================================== */
  const langBtn = $("#langBtn");

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "عربي";

    // Update Text Contents
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update Placeholders
    $$("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (i18n[lang] && i18n[lang][key]) {
        el.setAttribute("placeholder", i18n[lang][key]);
      }
    });

    // Update Anatomy Active Info
    updateAnatomyInfo(activeSpotKey);
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(currentLang === "ar" ? "en" : "ar");
    });
  }

  /* =====================================================
     3. ANATOMY WIDGET
     ===================================================== */
  const hotspots = $$(".hotspot");
  const eyeTitle = $("#eyeTitle");
  const eyeDesc = $("#eyeDesc");

  function updateAnatomyInfo(spotKey) {
    activeSpotKey = spotKey;
    if (eyeTitle && eyeDesc && anatomyDetails[spotKey]) {
      eyeTitle.textContent = anatomyDetails[spotKey][currentLang].title;
      eyeDesc.textContent = anatomyDetails[spotKey][currentLang].desc;
    }
  }

  hotspots.forEach((spot) => {
    spot.addEventListener("click", () => {
      hotspots.forEach((s) => s.classList.remove("active"));
      spot.classList.add("active");
      const key = spot.getAttribute("data-spot");
      updateAnatomyInfo(key);
    });
  });

  /* =====================================================
     4. LOADER & NAVBAR SCROLL & ACTIVE LINK
     ===================================================== */
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = $("#loader");
      if (loader) loader.classList.add("done");
    }, 800);
  });

  const navbar = $("#navbar");
  const sections = $$("section");
  const navLinks = $$(".desktop-menu a");

  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }

    // ScrollSpy Active State
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  });

  /* =====================================================
     5. MOBILE MENU
     ===================================================== */
  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");

  function toggleMobileMenu(open) {
    if (!mobileMenu || !menuToggle) return;
    const isOpen = open !== undefined ? open : !mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("modal-open", isOpen);
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMobileMenu());
  }

  $$("#mobileMenu a, #mobileMenu button").forEach((link) => {
    link.addEventListener("click", () => toggleMobileMenu(false));
  });

  /* =====================================================
     6. HERO PUPIL MOUSE TRACKING
     ===================================================== */
  const eyeIris = $("#eyeIris");
  if (eyeIris && window.innerWidth > 992) {
    window.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 24;
      eyeIris.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-45deg)`;
    });
  }

  /* =====================================================
     7. CUSTOM CURSOR
     ===================================================== */
  const cursorLabel = $("#cursorLabel");
  if (cursorLabel && window.innerWidth > 992) {
    window.addEventListener("mousemove", (e) => {
      cursorLabel.style.left = e.clientX + "px";
      cursorLabel.style.top = e.clientY + "px";
    });

    $$(".booking-btn, .hero-visual, .card, .hotspot").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursorLabel.textContent = element.classList.contains("booking-btn")
          ? i18n[currentLang].cursor_book
          : i18n[currentLang].cursor_explore;
        cursorLabel.classList.add("show");
      });

      element.addEventListener("mouseleave", () => {
        cursorLabel.classList.remove("show");
      });
    });
  }

  /* =====================================================
     8. SCROLL REVEAL OBSERVER
     ===================================================== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  $$(".reveal").forEach((el) => revealObserver.observe(el));

  /* =====================================================
     9. FAQ ACCORDION
     ===================================================== */
  $$(".faq-q").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const answer = item.querySelector(".faq-a");
      const isOpen = item.classList.contains("open");

      $$(".faq-item").forEach((otherItem) => {
        otherItem.classList.remove("open");
        otherItem.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        const otherAnswer = otherItem.querySelector(".faq-a");
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        question.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* =====================================================
     10. MODAL & TOAST NOTIFICATION
     ===================================================== */
  const bookingModal = $("#bookingModal");
  const modalClose = $("#modalClose");
  const toastContainer = $("#toastContainer");

  function showToast(msg) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  function openBooking() {
    if (bookingModal) {
      bookingModal.classList.add("open");
      bookingModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }
  }

  function closeBooking() {
    if (bookingModal) {
      bookingModal.classList.remove("open");
      bookingModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  }

  $$("[data-open-booking]").forEach((btn) => btn.addEventListener("click", openBooking));
  if (modalClose) modalClose.addEventListener("click", closeBooking);

  if (bookingModal) {
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) closeBooking();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBooking();
  });

  const bookingForm = $("#bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeBooking();
      showToast(i18n[currentLang].toast_success);
      bookingForm.reset();
    });
  }
});
