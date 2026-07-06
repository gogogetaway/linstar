(function () {
  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector("[data-menu-button]");
  var nav = document.querySelector("[data-nav]");
  var revealItems = document.querySelectorAll(".reveal");
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

  // Multi-language dictionary and helpers moved to site-translations.js and site-i18n.js

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  var mobileNavQuery = window.matchMedia("(max-width: 1200px)");

  function setMobileNavItemExpanded(item, shouldExpand) {
    if (!item) return;
    var dropdown = item.querySelector(":scope > .v2-dropdown");
    var trigger = item.querySelector(":scope > .v2-nav-trigger");
    if (!dropdown) return;
    if (trigger) trigger.setAttribute("aria-expanded", String(shouldExpand));

    if (shouldExpand) {
      item.classList.add("is-mobile-expanded");
      dropdown.style.maxHeight = "0px";
      dropdown.offsetHeight;
      dropdown.style.maxHeight = (dropdown.scrollHeight + 32) + "px";
      return;
    }

    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    dropdown.offsetHeight;
    item.classList.remove("is-mobile-expanded");
    dropdown.style.maxHeight = "0px";
  }

  function resetMobileNavItems() {
    if (!nav) return;
    nav.querySelectorAll(".v2-nav-item").forEach(function (item) {
      item.classList.remove("is-mobile-expanded");
      var trigger = item.querySelector(":scope > .v2-nav-trigger");
      var dropdown = item.querySelector(":scope > .v2-dropdown");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      if (dropdown) dropdown.style.maxHeight = "";
    });
  }

  function closeMenu() {
    document.body.classList.remove("is-menu-open");
    if (header) header.classList.remove("is-open");
    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    }
    resetMobileNavItems();
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
    window.location.href = "mailto:info@linstarwood.com?subject=" +
      encodeURIComponent("Yongxiang wood panel inquiry") +
      "&body=" + encodeURIComponent(body);
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
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      document.body.classList.toggle("is-menu-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
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
      var trigger = event.target.closest(".v2-nav-trigger");
      if (trigger && mobileNavQuery.matches) {
        var item = trigger.closest(".v2-nav-item");
        if (item && item.querySelector(":scope > .v2-dropdown")) {
          event.preventDefault();
          var willExpand = !item.classList.contains("is-mobile-expanded");
          nav.querySelectorAll(".v2-nav-item.is-mobile-expanded").forEach(function (openItem) {
            if (openItem !== item) setMobileNavItemExpanded(openItem, false);
          });
          setMobileNavItemExpanded(item, willExpand);
          return;
        }
      }
      if (event.target.tagName === "A") closeMenu();
    });
  }

  mobileNavQuery.addEventListener("change", function (event) {
    if (!event.matches) resetMobileNavItems();
  });

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

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  showSlide(0);
  restartSlideTimer();

})();
