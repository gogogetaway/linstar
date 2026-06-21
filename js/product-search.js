(function () {
  var products = [
    ["film-faced-plywood", "Brown/Red/Black Film Faced Plywood", "Film faced plywood", "assets/upload/202531214123263859.jpg", "film faced formwork brown red black concrete shuttering"],
    ["pp-plastic-faced-plywood", "PP Plastic Faced Plywood", "Film faced plywood", "assets/products/pp-plastic-faced-plywood/1.png", "pp plastic green waterproof formwork reusable"],
    ["slip-resistant-plywood", "Slip-resistant Plywood", "Film faced plywood", "assets/products/slip-resistant-plywood/1.png", "anti slip nonslip slip resistent hexagon flooring"],
    ["formply", "Formply", "Film faced plywood", "assets/products/formply/1.png", "f17 f14 f22 australia structural formwork"],
    ["okoume-plywood", "Okoume Plywood", "Commercial & Specialty Plywood", "assets/products/okoume-plywood/okoume-1.jpg", "commercial furniture cabinet"],
    ["birch-plywood", "Birch Plywood", "Commercial & Specialty Plywood", "assets/products/birch-plywood/birch-1.jpg", "commercial furniture cabinet"],
    ["bintangor-plywood", "Bintangor Plywood", "Commercial & Specialty Plywood", "assets/products/bintangor-plywood/bintangor-1.jpg", "commercial red face furniture"],
    ["pine-plywood", "Pine Plywood", "Commercial & Specialty Plywood", "assets/products/pine-plywood/pine-1.jpg", "commercial packing furniture"],
    ["fancy-plywood", "Fancy Plywood", "Commercial & Specialty Plywood", "assets/products/fancy-plywood/fancy-1.jpg", "decorative veneer furniture"],
    ["flexible-plywood", "Flexible / Bending Plywood", "Commercial & Specialty Plywood", "assets/products/flexible-plywood/flexible-1.jpg", "bendable curved flexible bending"],
    ["mdf", "MDF", "Furniture Panels", "assets/products/mdf/mdf-raw-panels.png", "medium density fibreboard fiberboard furniture"],
    ["chipboard", "Chipboard", "Furniture Panels", "assets/products/chipboard/chipboard-melamine-stack.png", "particle board particleboard furniture"],
    ["osb", "OSB", "Furniture Panels", "assets/products/osb/osb-edge.png", "oriented strand board structural"],
    ["lvl", "LVL", "Engineered Wood Systems", "assets/products/lvl/lvl-sections.png", "laminated veneer lumber structural beam"],
    ["h20-beam", "H20 Beam", "Engineered Wood Systems", "assets/products/h20-beam/h20-finished-beams.png", "h 20 timber beam formwork"],
    ["finger-joint-panel", "Finger Joint Panel", "Finger Joint Panel", "assets/products/blockboard/blockboard-panels.png", "finger joint panel finger-jointed block board joinery board solid core furniture"],
    ["melamine-board", "Melamine Board", "Melamine Board", "assets/products/melamine-boards/melamine-panels.jpg", "melamine faced board decorative furniture mfc laminated panel"]
  ].map(function (item) {
    return { slug: item[0], title: item[1], category: item[2], image: item[3], keywords: item[4] };
  });

  var popular = ["film-faced-plywood", "pp-plastic-faced-plywood", "mdf", "lvl"];

  function normalize(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  function distance(a, b) {
    var matrix = [];
    var i;
    var j;
    for (i = 0; i <= b.length; i += 1) matrix[i] = [i];
    for (j = 0; j <= a.length; j += 1) matrix[0][j] = j;
    for (i = 1; i <= b.length; i += 1) {
      for (j = 1; j <= a.length; j += 1) {
        matrix[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
          ? matrix[i - 1][j - 1]
          : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
      }
    }
    return matrix[b.length][a.length];
  }

  function score(product, query) {
    var haystack = normalize(product.title + " " + product.category + " " + product.keywords);
    var words = haystack.split(" ");
    var tokens = normalize(query).split(" ").filter(Boolean);
    var total = 0;
    var matched = tokens.every(function (token) {
      if (haystack.indexOf(token) !== -1) {
        total += haystack.indexOf(token) === 0 ? 8 : 5;
        return true;
      }
      var fuzzy = words.some(function (word) {
        return token.length >= 4 && Math.abs(word.length - token.length) <= 2 && distance(token, word) <= 2;
      });
      if (fuzzy) total += 2;
      return fuzzy;
    });
    return matched ? total : -1;
  }

  function resultsFor(query) {
    if (!normalize(query)) {
      return popular.map(function (slug) {
        return products.find(function (product) { return product.slug === slug; });
      });
    }
    return products.map(function (product) {
      return { product: product, score: score(product, query) };
    }).filter(function (entry) {
      return entry.score >= 0;
    }).sort(function (a, b) {
      return b.score - a.score || a.product.title.localeCompare(b.product.title);
    }).slice(0, 6).map(function (entry) {
      return entry.product;
    });
  }

  document.querySelectorAll(".v2-search").forEach(function (form, formIndex) {
    var input = form.querySelector("input[type='search']");
    if (!input) return;

    var panel = document.createElement("div");
    var selectedIndex = -1;
    var currentResults = [];
    panel.className = "v2-search-results";
    panel.id = "product-search-results-" + formIndex;
    panel.setAttribute("role", "listbox");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("aria-controls", panel.id);
    input.setAttribute("aria-expanded", "false");
    form.appendChild(panel);

    function open() {
      form.classList.add("is-search-open");
      input.setAttribute("aria-expanded", "true");
    }

    function close() {
      form.classList.remove("is-search-open");
      input.setAttribute("aria-expanded", "false");
      selectedIndex = -1;
    }

    function select(index) {
      var links = panel.querySelectorAll(".v2-search-result");
      selectedIndex = Math.max(-1, Math.min(index, links.length - 1));
      links.forEach(function (link, linkIndex) {
        link.classList.toggle("is-selected", linkIndex === selectedIndex);
      });
    }

    var searchUiTranslations = {
      en: {
        matching: "Matching products",
        popular: "Popular products",
        shown: "shown",
        noResults: "No matching products",
        browseAll: "Browse all products"
      },
      ar: {
        matching: "المنتجات المطابقة",
        popular: "المنتجات الشائعة",
        shown: "معروضة",
        noResults: "لا توجد منتجات مطابقة",
        browseAll: "تصفح جميع المنتجات"
      },
      fr: {
        matching: "Produits correspondants",
        popular: "Produits populaires",
        shown: "affichés",
        noResults: "Aucun produit correspondant",
        browseAll: "Parcourir tous les produits"
      },
      ru: {
        matching: "Найденные продукты",
        popular: "Популярные продукты",
        shown: "показано",
        noResults: "Нет подходящих продуктов",
        browseAll: "Все продукты"
      }
    };

    var titleKeys = {
      "film-faced-plywood": "productFilmFaced",
      "pp-plastic-faced-plywood": "productPP",
      "slip-resistant-plywood": "productSlipResistant",
      "formply": "productFormply",
      "okoume-plywood": "productOkoume",
      "birch-plywood": "productBirch",
      "bintangor-plywood": "productBintangor",
      "pine-plywood": "productPine",
      "fancy-plywood": "productFancy",
      "flexible-plywood": "productFlexible",
      "mdf": "productMDF",
      "chipboard": "productChipboard",
      "osb": "productOSB",
      "lvl": "productLVL",
      "h20-beam": "productH20",
      "finger-joint-panel": "blockboard",
      "melamine-board": "productMelamine"
    };

    var categoryKeys = {
      "Film faced plywood": "dropFilm",
      "Commercial & Specialty Plywood": "dropCommercial",
      "Furniture Panels": "dropFurniture",
      "Engineered Wood Systems": "dropEngineered",
      "Finger Joint Panel": "blockboard",
      "Melamine Board": "productMelamine"
    };

    function getCurrentLang() {
      var params = new URLSearchParams(window.location.search);
      var urlLang = params.get("lang");
      var supported = ["en", "ar", "fr", "ru"];
      if (urlLang && supported.indexOf(urlLang) !== -1) {
        return urlLang;
      }
      try {
        var stored = localStorage.getItem("blxing-home-lang");
        if (stored && supported.indexOf(stored) !== -1) {
          return stored;
        }
      } catch (e) {}
      return "en";
    }

    function render() {
      var lang = getCurrentLang();
      var ui = searchUiTranslations[lang] || searchUiTranslations.en;
      var translations = window.siteTranslations && window.siteTranslations[lang] ? window.siteTranslations[lang] : null;

      currentResults = resultsFor(input.value);
      selectedIndex = -1;
      panel.textContent = "";

      var label = document.createElement("div");
      label.className = "v2-search-result-label";
      var labelText = normalize(input.value) ? ui.matching : ui.popular;
      label.innerHTML = "<span>" + labelText + "</span><span>" + currentResults.length + " " + ui.shown + "</span>";
      panel.appendChild(label);

      if (!currentResults.length) {
        var empty = document.createElement("div");
        empty.className = "v2-search-empty";
        empty.textContent = ui.noResults;
        panel.appendChild(empty);
      }

      currentResults.forEach(function (product) {
        var link = document.createElement("a");
        link.className = "v2-search-result";
        link.href = "product-detail.html?product=" + product.slug + "&lang=" + lang;
        link.setAttribute("role", "option");

        var displayTitle = product.title;
        var displayCategory = product.category;

        if (translations) {
          var titleKey = titleKeys[product.slug];
          if (titleKey && translations[titleKey]) {
            displayTitle = translations[titleKey];
          }
          var catKey = categoryKeys[product.category];
          if (catKey && translations[catKey]) {
            displayCategory = translations[catKey];
          }
        }

        link.innerHTML = "<img src=\"" + product.image + "\" alt=\"\"><span><strong>" + displayTitle + "</strong><small>" + displayCategory + "</small></span>";
        panel.appendChild(link);
      });

      var browse = document.createElement("a");
      browse.className = "v2-search-browse";
      browse.href = "products.html?lang=" + lang;
      browse.innerHTML = "<span>" + ui.browseAll + "</span><span aria-hidden=\"true\">→</span>";
      panel.appendChild(browse);
      open();
    }

    input.addEventListener("focus", render);
    input.addEventListener("input", render);
    input.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (!form.classList.contains("is-search-open")) render();
        select(selectedIndex + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        select(selectedIndex - 1);
      } else if (event.key === "Escape") {
        close();
      } else if (event.key === "Enter" && selectedIndex >= 0 && currentResults[selectedIndex]) {
        event.preventDefault();
        var lang = getCurrentLang();
        window.location.href = "product-detail.html?product=" + currentResults[selectedIndex].slug + "&lang=" + lang;
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var target = currentResults[selectedIndex >= 0 ? selectedIndex : 0] || resultsFor(input.value)[0];
      var lang = getCurrentLang();
      window.location.href = target ? "product-detail.html?product=" + target.slug + "&lang=" + lang : "products.html?lang=" + lang;
    });

    document.addEventListener("click", function (event) {
      if (!form.contains(event.target)) close();
    });
  });
})();
