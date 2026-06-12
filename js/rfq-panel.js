(function () {
  var drawer = document.querySelector("[data-rfq-drawer]");
  if (!drawer) return;

  var form = drawer.querySelector("form");
  var contactInput = drawer.querySelector("[data-rfq-contact]");
  var productInput = drawer.querySelector("[data-rfq-product]");
  var closeButtons = drawer.querySelectorAll("[data-rfq-close]");
  var openButtons = document.querySelectorAll("[data-rfq-open]");
  var contactMethods = drawer.querySelectorAll("[name='preferred_contact']");

  function selectedMethod() {
    var selected = drawer.querySelector("[name='preferred_contact']:checked");
    return selected ? selected.value : "WhatsApp";
  }

  function updateContactField() {
    var method = selectedMethod();
    contactInput.placeholder = method === "Email" ? "Email address" : "WhatsApp number with country code";
    contactInput.setAttribute("aria-label", method === "Email" ? "Email address" : "WhatsApp number");
    contactInput.setAttribute("inputmode", method === "Email" ? "email" : "tel");
  }

  function openDrawer(trigger) {
    var product = trigger && trigger.getAttribute("data-rfq-product");
    if (!product) {
      var title = document.querySelector("[data-product-title]");
      product = title ? title.textContent.trim() : "";
    }
    if (product && productInput) productInput.value = product;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-rfq-open");
    window.setTimeout(function () { contactInput.focus(); }, 280);
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-rfq-open");
  }

  openButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openDrawer(button);
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeDrawer);
  });

  contactMethods.forEach(function (radio) {
    radio.addEventListener("change", updateContactField);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeDrawer();
  });

  if (form) {
    form.addEventListener("submit", function () {
      contactInput.name = selectedMethod() === "Email" ? "email" : "whatsapp";
    });
  }

  updateContactField();
})();
