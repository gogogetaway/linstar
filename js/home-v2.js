(function () {
  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector("[data-menu-button]");
  var nav = document.querySelector("[data-nav]");
  var revealItems = document.querySelectorAll(".reveal");
  var langButtons = document.querySelectorAll("[data-lang]");
  var langCurrent = document.querySelector("[data-lang-current]");
  var translatable = document.querySelectorAll("[data-i18n]");
  var placeholderItems = document.querySelectorAll("[data-i18n-placeholder]");
  var heroSlides = document.querySelectorAll("[data-hero-slide]");
  var heroDots = document.querySelectorAll("[data-hero-dot]");
  var heroPrev = document.querySelector("[data-hero-prev]");
  var heroNext = document.querySelector("[data-hero-next]");
  var inquiryForm = document.querySelector("[data-inquiry-form]");
  var floatingContact = document.querySelector("[data-floating-contact]");
  var floatingContactToggle = document.querySelector("[data-floating-contact-toggle]");
  var catalogFilters = document.querySelectorAll("[data-catalog-filter]");
  var productMegaMenus = document.querySelectorAll(".v2-products-mega");
  var currentSlide = 0;
  var slideTimer;

  var dictionary = {
    en: {
      brandTag: "JIALINDA",
      navProducts: "Products",
      navTools: "Supply Support",
      navAbout: "About Us",
      navContact: "Contact",
      navApplications: "Applications",
      navSearch: "Search",
      dropFilm: "Film faced plywood",
      dropCommercial: "Commercial & Specialty Plywood",
      dropFurniture: "Furniture Panels",
      dropEngineered: "Engineered Wood Systems",
      dropSelector: "Product Matching",
      dropChecklist: "Inquiry Checklist",
      dropPacking: "Packing & Loading",
      dropCompliance: "Documents",
      dropCompany: "Company Overview",
      dropFactory: "Factory & QC",
      dropCertificates: "Certificates",
      dropInventory: "Production & QC",
      dropExport: "Export Markets",
      dropConstruction: "Construction",
      dropFurnitureApp: "Furniture",
      dropPackaging: "Packaging",
      dropVehicles: "Vehicles",
      dropDecoration: "Decoration",
      dropEmail: "Email Inquiry",
      dropWhatsapp: "WhatsApp",
      dropRequirement: "Requirement Template",
      searchPlaceholder: "Search plywood, MDF, LVL...",
      searchGo: "Go",
      searchFilm: "Film faced plywood",
      searchMdf: "MDF / Chipboard",
      searchLvl: "LVL / H20 Beam",
      getQuote: "Contact",
      heroEyebrow: "Direct from our own factory",
      heroTitle: "Reliable plywood supply for global buyers.",
      heroText: "Xuzhou Jialinda helps importers, contractors and manufacturers source stable wood panel specifications with export packing, OEM support and container delivery.",
      heroMetricYears: "Years Experience",
      heroMetricLines: "Production Lines",
      heroMetricMarkets: "Export Markets",
      browseProducts: "Browse Products",
      sendRequirements: "Send Requirements",
      quoteChecklist: "Inquiry guide",
      checkProduct: "Product type and application",
      checkSize: "Size, thickness and surface",
      checkQty: "Quantity and destination port",
      checkPacking: "Packing and documentation needs",
      proofFactory: "Production base",
      proofMarkets: "Export markets",
      proofPacking: "Packing support",
      proofContainer: "Container delivery",
      certIntro: "Common documentation support",
      productsEyebrow: "Product architecture",
      productsTitle: "Three sourcing paths for global buyers.",
      productsText: "Keep the homepage simple: buyer enters by application, then confirms specification through the product page or email inquiry.",
      productOneTitle: "Film faced plywood",
      productOneText: "Film faced plywood, PP plastic faced plywood, slip-resistant plywood and formply for concrete projects.",
      productTwoTitle: "Furniture Panels",
      productTwoText: "MDF, chipboard and OSB for furniture, interior and structural panel production.",
      productThreeTitle: "Engineered Wood Systems",
      productThreeText: "LVL and H20 beam components for industrial, structural and formwork project supply.",
      factoryEyebrow: "Manufacturing proof",
      factoryTitle: "Organized production and ready-to-ship panel inventory.",
      factoryText: "This section should make the site feel like a real supply partner, not only a catalog. The image works best here because it shows scale, storage discipline and repeat-order capability.",
      factoryPointOneTitle: "Stable supply",
      factoryPointOneText: "Stock planning for recurring import orders.",
      factoryPointTwoTitle: "Controlled storage",
      factoryPointTwoText: "Panels organized before packing and loading.",
      factoryPointThreeTitle: "Mixed containers",
      factoryPointThreeText: "Support for multiple panel categories in one sourcing plan.",
      processEyebrow: "Production workflow",
      processTitle: "A clear process from panel matching to container loading.",
      stepOneTitle: "Define",
      stepOneText: "Confirm application, grade, size, thickness, surface and target market.",
      stepTwoTitle: "Match",
      stepTwoText: "Recommend core, glue, overlay, packing method and documentation path.",
      stepThreeTitle: "Produce",
      stepThreeText: "Arrange panel production, inspection, edge sealing, pallet packing and marks.",
      stepFourTitle: "Load",
      stepFourText: "Prepare container loading, photos, documents and repeat-order specification files.",
      toolsEyebrow: "Supply support",
      toolsTitle: "Built for buyers who need stable wood panel supply.",
      toolsText: "The homepage connects product categories, production proof and export support before asking the buyer to send requirements.",
      toolOneTitle: "Formwork-focused supply",
      toolOneText: "Film faced plywood, formply, LVL and H20 beam products organized around construction use.",
      toolTwoTitle: "Export packing experience",
      toolTwoText: "Pallet packing, marks, wrapping and container loading visibility for remote buyers.",
      toolThreeTitle: "Export packing experience",
      toolThreeText: "Pallet packing, marks, wrapping and container loading visibility for remote buyers.",
      toolFourTitle: "Responsive inquiry process",
      toolFourText: "Send product, size, thickness, quantity and destination port to get a practical specification response.",
      marketsEyebrow: "Export markets",
      marketsTitle: "Plan content by region, not only by product.",
      marketOneTitle: "Europe",
      marketOneText: "Focus on EUDR, CE, formaldehyde class and traceable documentation.",
      marketTwoTitle: "North America",
      marketTwoText: "Prepare EPA TSCA VI, CARB-related questions and product specification files.",
      marketThreeTitle: "Middle East",
      marketThreeText: "Highlight formwork plywood, construction supply and export packing durability.",
      marketFourTitle: "Oceania",
      marketFourText: "Address biosecurity, ISPM 15 packing and moisture-controlled shipment needs.",
      faqEyebrow: "Buyer questions",
      faqTitle: "Answer the questions before the buyer emails.",
      faqOneQ: "What should I provide for a quotation?",
      faqOneA: "Please send product type, application, size, thickness, surface, quantity, destination port and required certificates.",
      faqTwoQ: "Can JLD support OEM packing?",
      faqTwoA: "Yes, the quotation can include customer marks, pallet labels, wrapping requirements and shipping documentation.",
      faqThreeQ: "Which products should I start with?",
      faqThreeA: "Construction buyers usually start with film faced plywood or formply. Furniture buyers usually start with MDF, chipboard or melamine boards.",
      whyUsTitle: "How we support plywood buyers",
      whyUsText: "From product matching to export packing, the supply process is built around repeat container orders.",
      whyUsCapTitle: "Panel supply base",
      whyUsCapDesc: "Film faced plywood, furniture panels, LVL and H20 beams supplied from organized production capacity.",
      whyUsCapFoot: "Stable output",
      whyUsMatTitle: "Specification matching",
      whyUsMatDesc: "Core, glue, thickness, surface and packing are matched to your application and destination market.",
      whyUsMatFoot: "Spec matching",
      whyUsMixTitle: "Mixed container plans",
      whyUsMixDesc: "Construction plywood, furniture boards and engineered wood can be arranged in one sourcing plan.",
      whyUsMixFoot: "Cargo efficiency",
      whyUsOemTitle: "OEM packing support",
      whyUsOemDesc: "Private marks, pallet labels, wrapping and moisture protection are prepared for long sea transport.",
      whyUsOemFoot: "Private label",
      whyUsDocTitle: "Document support",
      whyUsDocDesc: "Commercial documents, packing information and market-related certificate files can be prepared with the shipment.",
      whyUsDocFoot: "Global standards",
      whyUsQcTitle: "Order visibility",
      whyUsQcDesc: "Production checks, packing photos and container loading photos help overseas buyers follow the order remotely.",
      whyUsQcFoot: "Shipment safety",
      globalTitle: "Supplying wood panels to 50+ export markets",
      globalText: "From high-rise projects in the Middle East to furniture factories in Europe and SE Asia, Jialinda panels are trusted by importers and contractors for stable quality and global delivery.",
      globalEyebrow: "Global Reach",
      statCountries: "Countries",
      statClients: "B2B Clients",
      statYears: "Years Export",
      quoteEyebrow: "Email inquiry",
      quoteTitle: "Send the requirements directly to sales.",
      quoteText: "Fill the inquiry fields and submit. The website opens a prepared email to sales without storing customer data.",
      formProduct: "Product",
      formSize: "Size / Thickness",
      formQuantity: "Quantity",
      formPort: "Destination port",
      formNotes: "Packing, certificate or application notes",
      emailSales: "Email Sales",
      whatsapp: "WhatsApp",
      footerProducts: "Product center"
    },
  };

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  function closeMenu() {
    document.body.classList.remove("is-menu-open");
    if (header) header.classList.remove("is-open");
  }

  function showSlide(index) {
    if (!heroSlides.length) return;
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
    });
    heroDots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("is-active", dotIndex === currentSlide);
    });
  }

  function restartSlideTimer() {
    if (!heroSlides.length) return;
    clearInterval(slideTimer);
    slideTimer = setInterval(function () {
      showSlide(currentSlide + 1);
    }, 6200);
  }

  function buildInquiryMail(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var formData = new FormData(form);
    var body = [
      "Product: " + (formData.get("product") || ""),
      "Size / Thickness: " + (formData.get("size") || ""),
      "Quantity: " + (formData.get("quantity") || ""),
      "Destination port: " + (formData.get("port") || ""),
      "Packing / certificate / application notes:",
      formData.get("notes") || ""
    ].join("\n");
    window.location.href = "mailto:info@jldplywood.com?subject=" +
      encodeURIComponent("Jialinda wood panel inquiry") +
      "&body=" + encodeURIComponent(body);
  }

  function setHeroTitle(node, text, lang) {
    var highlighted = text.replace("plywood", '<span class="v2-title-accent">plywood</span>');
    node.innerHTML = highlighted
      .replace(" for global", "<br>for global");
  }

  function setLanguage(lang) {
    var copy = dictionary[lang] || dictionary.en;
    document.documentElement.lang = lang;
    translatable.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (!copy[key]) return;
      if (key === "heroTitle") {
        setHeroTitle(node, copy[key], lang);
        return;
      }
      node.textContent = copy[key];
    });
    placeholderItems.forEach(function (node) {
      var key = node.getAttribute("data-i18n-placeholder");
      if (copy[key]) node.setAttribute("placeholder", copy[key]);
    });
    langButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang") === lang);
    });
    if (langCurrent) {
      langCurrent.textContent = lang.toUpperCase();
    }
    try {
      localStorage.setItem("blxing-home-lang", lang);
    } catch (error) {}
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (menuButton && header) {
    menuButton.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      document.body.classList.toggle("is-menu-open", isOpen);
    });
  }

  // Flagship v3.5: Dynamic Counter Engine
  var countStarted = false;
  function startCounting() {
    if (countStarted) return;
    var stats = document.querySelectorAll(".stat-item strong");
    stats.forEach(function (stat) {
      var target = parseInt(stat.textContent);
      if (!Number.isFinite(target)) return;
      var count = 0;
      var duration = 2000; // 2 seconds
      var startTime = null;

      function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        var progress = currentTime - startTime;
        var increment = Math.min(Math.floor((progress / duration) * target), target);
        stat.textContent = increment + "+";
        if (progress < duration) {
          requestAnimationFrame(animation);
        } else {
          stat.textContent = target + "+";
        }
      }
      requestAnimationFrame(animation);
    });
    countStarted = true;
  }

  var globalSection = document.querySelector(".v2-global");
  if (globalSection && "IntersectionObserver" in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) startCounting();
    }, { threshold: 0.5 });
    statsObserver.observe(globalSection);
  }

  if (nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") closeMenu();
    });
  }

  productMegaMenus.forEach(function (menu) {
    var groups = menu.querySelectorAll(".v2-dropdown-group");

    function activateGroup(activeGroup) {
      groups.forEach(function (group) {
        group.classList.toggle("is-active", group === activeGroup);
      });
    }

    if (groups.length && !menu.querySelector(".v2-dropdown-group.is-active")) {
      activateGroup(groups[0]);
    }

    groups.forEach(function (group) {
      group.addEventListener("mouseenter", function () {
        activateGroup(group);
      });
      group.addEventListener("focusin", function () {
        activateGroup(group);
      });
    });

    menu.addEventListener("mouseleave", function () {
      if (groups.length) activateGroup(groups[0]);
    });
  });

  if (heroPrev) {
    heroPrev.addEventListener("click", function () {
      showSlide(currentSlide - 1);
      restartSlideTimer();
    });
  }

  if (heroNext) {
    heroNext.addEventListener("click", function () {
      showSlide(currentSlide + 1);
      restartSlideTimer();
    });
  }

  heroDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      showSlide(index);
      restartSlideTimer();
    });
  });

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", buildInquiryMail);
  }

  if (floatingContact && floatingContactToggle) {
    floatingContactToggle.addEventListener("click", function () {
      var isOpen = floatingContact.classList.toggle("is-open");
      floatingContactToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (!floatingContact.contains(event.target)) {
        floatingContact.classList.remove("is-open");
        floatingContactToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        floatingContact.classList.remove("is-open");
        floatingContactToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  catalogFilters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      catalogFilters.forEach(function (item) {
        item.classList.toggle("is-active", item === filter);
      });
    });
  });

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  showSlide(0);
  restartSlideTimer();

  try {
    localStorage.removeItem("blxing-home-lang");
  } catch (error) {}
  setLanguage("en");
})();
