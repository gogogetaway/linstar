(function () {
  var routes = Array.prototype.slice.call(document.querySelectorAll("[data-route]"));
  var routePaths = Array.prototype.slice.call(document.querySelectorAll(".market-routes path"));
  var routeNames = ["germany", "uae", "usa", "australia", "indonesia", "south-africa"];
  var lastRoute = "germany";
  var dashOffset = 120;

  function pickRoute() {
    var next = lastRoute;
    while (next === lastRoute && routeNames.length > 1) {
      next = routeNames[Math.floor(Math.random() * routeNames.length)];
    }
    lastRoute = next;
    routes.forEach(function (item) {
      item.classList.toggle("is-active", item.getAttribute("data-route") === next);
    });
  }

  function animateRouteFlow() {
    dashOffset = dashOffset <= 0 ? 120 : dashOffset - 1.4;
    routePaths.forEach(function (path) {
      if (path.classList.contains("is-active")) {
        path.style.strokeDashoffset = dashOffset;
      }
    });
  }

  if (routes.length) {
    window.setInterval(pickRoute, 3200);
    window.setInterval(animateRouteFlow, 80);
  }
})();
