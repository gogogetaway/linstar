(function () {
  var header = document.querySelector("[data-header]");
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-nav]");
  var tabs = document.querySelectorAll("[data-product-tab]");
  var panels = document.querySelectorAll("[data-product-panel]");

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  menuToggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("is-menu-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("is-menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var selected = tab.getAttribute("data-product-tab");
      tabs.forEach(function (item) {
        var active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach(function (panel) {
        var active = panel.getAttribute("data-product-panel") === selected;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
})();
