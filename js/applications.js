(function () {
  var applicationData = {
    construction: {
      title: "Construction",
      count: 5,
      description: "High-performance plywood solutions for concrete formwork, scaffolding, and structural building projects. Our panels provide the durability needed for repeated use in demanding construction environments."
    },
    furniture: {
      title: "Furniture",
      count: 5,
      sequence: ["05", "02", "03", "04", "01"],
      description: "Premium wood panels for high-end furniture production, cabinetry, and shelving. Available in various veneers and core compositions to match aesthetic and structural requirements."
    },
    packaging: {
      title: "Packaging",
      count: 5,
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
      sequence: ["05", "03", "02", "04", "01"],
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

  function currentApplication() {
    var requested = new URLSearchParams(window.location.search).get("application");
    return applicationData[requested] ? requested : "construction";
  }

  function render(application) {
    var data = applicationData[application];
    title.textContent = data.title;
    count.textContent = data.count + " application photos";
    if (description) description.textContent = data.description;
    gallery.innerHTML = "";

    for (var index = 0; index < data.count; index += 1) {
      var number = data.sequence ? data.sequence[index] : String(index + 1).padStart(2, "0");
      var button = document.createElement("button");
      var image = document.createElement("img");
      button.type = "button";
      button.className = "applications-photo";
      button.setAttribute("aria-label", "Open " + data.title + " application photo " + (index + 1));
      image.src = "assets/applications/" + application + "/" + number + ".jpg?v=20260614v4";
      image.alt = data.title + " application";
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
      history.replaceState(null, "", "applications.html?application=" + application);
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

  render(currentApplication());
})();
