(function () {
  var header = document.querySelector("[data-header]");
  var revealItems = document.querySelectorAll(".reveal");
  var counters = document.querySelectorAll("[data-count]");
  var counted = false;

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function animateCounters() {
    if (counted) return;
    counted = true;

    counters.forEach(function (item) {
      var target = parseInt(item.getAttribute("data-count"), 10);
      var duration = 1200;
      var start = performance.now();

      function step(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(target * eased);
        item.textContent = current >= 1000 ? current.toLocaleString("en-US") : current;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.querySelector("[data-count]")) animateCounters();
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
    animateCounters();
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
})();
