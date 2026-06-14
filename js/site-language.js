(function () {
  try {
    localStorage.removeItem("jld-site-lang");
  } catch (error) {}
  document.cookie = "googtrans=/en/en;path=/;SameSite=Lax";
  document.cookie = "googtrans=/en/en;path=/;domain=" + location.hostname + ";SameSite=Lax";

  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";
  document.body.classList.remove("is-rtl");

  document.querySelectorAll(".v2-lang-panel").forEach(function (panel) {
    panel.remove();
  });

  document.querySelectorAll("[data-lang-current]").forEach(function (button) {
    button.classList.add("notranslate");
    button.textContent = "EN";
    button.disabled = true;
  });
})();
