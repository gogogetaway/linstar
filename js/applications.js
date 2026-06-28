(function () {
  var applicationData = {
    construction: {
      title: "Construction",
      count: 5,
      layout: "curated",
      description: "High-performance plywood solutions for concrete formwork, scaffolding, and structural building projects. Our panels provide the durability needed for repeated use in demanding construction environments."
    },
    furniture: {
      title: "Furniture",
      count: 5,
      layout: "curated",
      sequence: ["01", "04", "05", "03", "02"],
      description: "Premium wood panels for high-end furniture production, cabinetry, and shelving. Available in various veneers and core compositions to match aesthetic and structural requirements."
    },
    packaging: {
      title: "Packaging",
      count: 4,
      layout: "curated",
      description: "Robust wood panels for export crates, heavy-duty pallets, and specialized industrial packaging. Designed to protect cargo during international transit while meeting biosecurity standards."
    },
    vehicles: {
      title: "Vehicles",
      count: 3,
      description: "Specialized slip-resistant and durable plywood for truck flooring, trailer linings, and van interiors. Engineered for high impact resistance and long-term wear."
    },
    decoration: {
      title: "Decoration",
      count: 5,
      layout: "curated",
      sequence: ["03", "01", "02", "04", "05"],
      description: "Aesthetic panels for interior wall cladding, ceiling treatments, and architectural features. Combine natural wood beauty with the stability and ease of installation of engineered panels."
    }
  };

  var gallery = document.querySelector("[data-applications-gallery]");
  var title = document.querySelector("[data-application-title]");
  var count = document.querySelector("[data-application-count]");
  var description = document.querySelector("[data-application-description]");
  var tabs = document.querySelectorAll("[data-application-tab]");
  var lightbox = document.querySelector("[data-application-lightbox]");
  var lightboxImage = null;

  if (!gallery || !title || !count) return;

  var titleKeys = {
    construction: "dropConstruction",
    furniture: "dropFurnitureApp",
    decoration: "dropDecoration",
    vehicles: "dropVehicles",
    packaging: "dropPackaging"
  };

  var descKeys = {
    construction: "appConstructionDesc",
    furniture: "appFurnitureDesc",
    decoration: "appDecorationDesc",
    vehicles: "appVehiclesDesc",
    packaging: "appPackagingDesc"
  };

  function getCurrentLang() {
    // Language is determined by the URL directory (/ar/, /fr/, /ru/); root is English.
    var m = window.location.pathname.match(/^\/(ar|fr|ru)(\/|$)/);
    return m ? m[1] : "en";
  }

  function currentApplication() {
    var requested = new URLSearchParams(window.location.search).get("application");
    return applicationData[requested] ? requested : "construction";
  }

  function render(application) {
    var data = applicationData[application];
    var lang = getCurrentLang();
    var t = (window.siteTranslations && window.siteTranslations[lang]) ? window.siteTranslations[lang] : {};

    var displayTitle = t[titleKeys[application]] || data.title;
    var displayDesc = t[descKeys[application]] || data.description;

    // Format photo count text dynamically
    var displayCount = data.count + " application photos";
    if (t.appPhotosCount) {
      displayCount = t.appPhotosCount.replace("5", data.count);
    }

    title.textContent = displayTitle;
    count.textContent = displayCount;
    if (description) description.textContent = displayDesc;

    gallery.innerHTML = "";
    gallery.className = "applications-gallery applications-gallery--" + application;
    gallery.classList.toggle("applications-gallery--curated", data.layout === "curated");
    gallery.classList.toggle("applications-gallery--legacy", data.layout !== "curated");

    for (var index = 0; index < data.count; index += 1) {
      var number = data.sequence ? data.sequence[index] : String(index + 1).padStart(2, "0");
      var button = document.createElement("button");
      var image = document.createElement("img");
      button.type = "button";
      button.className = "applications-photo";
      if (data.layout === "curated") {
        if (index === 0) button.classList.add("is-featured");
        if (index === 1) button.classList.add("is-side");
        if (data.count === 4 && index > 1) button.classList.add("is-half");
      }
      button.setAttribute("aria-label", "Open " + displayTitle + " application photo " + (index + 1));
      image.src = "assets/applications/" + application + "/" + number + ".webp?v=20260614v4";
      image.alt = displayTitle + " application";
      image.loading = index > 1 ? "lazy" : "eager";
      button.appendChild(image);
      gallery.appendChild(button);
    }

    tabs.forEach(function (tab) {
      var isActive = tab.dataset.applicationTab === application;
      tab.classList.toggle("is-active", isActive);
      if (isActive && tab.parentElement) {
        tab.parentElement.scrollLeft = tab.offsetLeft - (tab.parentElement.clientWidth - tab.offsetWidth) / 2;
      }
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var application = tab.dataset.applicationTab;
      var lang = getCurrentLang();
      history.replaceState(null, "", "applications.html?application=" + application + "&lang=" + lang);
      render(application);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  gallery.addEventListener("click", function (event) {
    var image = event.target.closest("img");
    if (!image || !lightbox) return;
    if (!lightboxImage) {
      lightboxImage = document.createElement("img");
      lightbox.appendChild(lightboxImage);
    }
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox || event.target.closest("[data-application-lightbox-close]")) {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox) {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });

  window.addEventListener("siteLanguageChanged", function () {
    render(currentApplication());
  });

  render(currentApplication());
})();
