(function () {
  // 1. Helper function to update internal page links so they carry over the lang parameter
  function updatePageLinks(lang) {
    // Directory-based i18n: each language lives under its own path (/ar/, /fr/, /ru/),
    // so internal links already point to the correct language. Kept as a no-op.
    return;
    var links = document.querySelectorAll("a[href]");
    links.forEach(function (a) {
      var href = a.getAttribute("href");
      // Skip absolute, anchor-only, protocol, and WhatsApp/Email links
      if (!href || 
          href.startsWith("http") || 
          href.startsWith("mailto:") || 
          href.startsWith("tel:") || 
          href.startsWith("javascript:") || 
          href.startsWith("#") ||
          a.closest(".v2-footer-social-row")) {
        return;
      }

      var parts = href.split("#");
      var pathAndQuery = parts[0];
      var anchor = parts[1] ? "#" + parts[1] : "";

      var pathParts = pathAndQuery.split("?");
      var path = pathParts[0];
      var query = pathParts[1] || "";

      // Only propagate for local HTML pages or empty path (root index)
      if (path === "" || path.endsWith(".html") || !path.includes(".")) {
        var params = new URLSearchParams(query);
        params.set("lang", lang);
        a.setAttribute("href", path + "?" + params.toString() + anchor);
      }
    });
  }

  // 2. Helper to set custom highlights for Hero Titles (e.g. plywood accents)
  function setSpecialHighlights(node, text, lang) {
    var highlighted = text;
    if (lang === "en") {
      highlighted = text.replace("plywood", '<span class="v2-title-accent">plywood</span>');
    } else if (lang === "ar") {
      highlighted = text.replace("الخشب المعاكس", '<span class="v2-title-accent">الخشب المعاكس</span>');
      // Some Arabic versions might have slightly different spelling
      if (highlighted === text) {
        highlighted = text.replace("بليود", '<span class="v2-title-accent">بليود</span>');
      }
    } else if (lang === "fr") {
      highlighted = text.replace("contreplaqué", '<span class="v2-title-accent">contreplaqué</span>');
    } else if (lang === "ru") {
      highlighted = text.replace("фанеры", '<span class="v2-title-accent">фанеры</span>');
    }
    node.innerHTML = highlighted;
  }

  // 3. Main Translation Engine
  function translatePage(lang) {
    if (!window.siteTranslations) {
      console.warn("siteTranslations not loaded yet.");
      return;
    }
    var copy = window.siteTranslations[lang] || window.siteTranslations.en;

    // Set Document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    // Set body directions
    if (lang === "ar") {
      document.body.classList.add("direction-rtl");
      document.body.classList.remove("direction-ltr");
    } else {
      document.body.classList.add("direction-ltr");
      document.body.classList.remove("direction-rtl");
    }

    // Translate all data-i18n items
    var translatable = document.querySelectorAll("[data-i18n]");
    translatable.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (!copy[key]) return;

      // Check special tags requiring innerHTML highlights
      if (key === "heroTitle") {
        setSpecialHighlights(node, copy[key], lang);
        return;
      }
      node.textContent = copy[key];
    });

    // Translate all data-i18n-placeholder items
    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(function (node) {
      var key = node.getAttribute("data-i18n-placeholder");
      if (copy[key]) {
        node.setAttribute("placeholder", copy[key]);
      }
    });

    // Update active states of language buttons
    var allButtons = document.querySelectorAll("[data-lang]");
    allButtons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    // Update current language label
    var langCurrent = document.querySelector("[data-lang-current]");
    if (langCurrent) {
      langCurrent.textContent = lang.toUpperCase();
    }

    // Propagate links
    updatePageLinks(lang);

    // Dispatch global custom event for other scripts to re-render
    var event;
    if (typeof CustomEvent === "function") {
      event = new CustomEvent("siteLanguageChanged", { detail: { lang: lang } });
    } else {
      event = document.createEvent("CustomEvent");
      event.initCustomEvent("siteLanguageChanged", true, true, { lang: lang });
    }
    window.dispatchEvent(event);
  }

  // 4. Determine initial language
  function getInitialLanguage() {
    // Language is determined by the URL directory: /ar/, /fr/, /ru/ -> that language.
    // The site root ("/") is English. This keeps each language on its own indexable URL.
    var m = window.location.pathname.match(/^\/(ar|fr|ru)(\/|$)/);
    return m ? m[1] : "en";
  }

  // Initialize Language System
  function init() {
    var initialLang = getInitialLanguage();
    
    // We run the translation
    translatePage(initialLang);

    // Watch for clicks on language switcher buttons -> navigate to the matching
    // language directory. Each language is its own URL (/, /ar/, /fr/, /ru/).
    document.addEventListener("click", function (e) {
      var langBtn = e.target.closest("[data-lang]");
      if (langBtn) {
        e.preventDefault();
        var newLang = langBtn.getAttribute("data-lang");
        // Strip any existing language prefix to get the root-relative path.
        var basePath = window.location.pathname.replace(/^\/(ar|fr|ru)(\/|$)/, "/");
        if (basePath.charAt(0) !== "/") basePath = "/" + basePath;
        var target = (newLang === "en" ? "" : "/" + newLang) + basePath;
        window.location.href = target + window.location.search + window.location.hash;
      }
    });
  }

  // Wait for DOM to be fully ready before translating, but run immediately if dictionary is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose translatePage globally in case other dynamic templates need to call it manually
  window.translatePage = translatePage;
  window.getCurrentLanguage = getInitialLanguage;
})();
