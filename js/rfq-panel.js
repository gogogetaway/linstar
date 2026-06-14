(function () {
  var drawer = document.querySelector("[data-rfq-drawer]");
  if (!drawer) return;

  var form = drawer.querySelector("form");
  var contactInput = drawer.querySelector("[data-rfq-contact]");
  var productInput = drawer.querySelector("[data-rfq-product]");
  var closeButtons = drawer.querySelectorAll("[data-rfq-close]");
  var openButtons = document.querySelectorAll("[data-rfq-open]");
  var contactMethods = drawer.querySelectorAll("[name='preferred_contact']");
  var submitButton = form ? form.querySelector(".rfq-submit") : null;
  var submitLabel = submitButton ? submitButton.innerHTML : "";
  var toast = document.createElement("div");
  var toastTimer;

  toast.className = "rfq-toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);

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

  function showToast(message, type) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.toggle("is-error", type === "error");
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3600);
  }

  function setSubmitting(submitting) {
    if (!submitButton) return;
    submitButton.disabled = submitting;
    submitButton.classList.toggle("is-sending", submitting);
    submitButton.setAttribute("aria-busy", String(submitting));
    submitButton.innerHTML = submitting ? "<span>Sending...</span><span class=\"rfq-submit-loader\"></span>" : submitLabel;
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
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      contactInput.name = selectedMethod() === "Email" ? "email" : "whatsapp";
      setSubmitting(true);

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (response) {
        if (!response.ok) throw new Error("Submission failed");
        return response.json().catch(function () { return {}; });
      }).then(function (result) {
        if (result.success === false) throw new Error("Submission failed");
        showToast("Requirements sent. We will reply shortly.", "success");
        form.reset();
        updateContactField();
        window.setTimeout(closeDrawer, 500);
      }).catch(function () {
        showToast("Unable to send. Please try again.", "error");
      }).finally(function () {
        setSubmitting(false);
      });
    });
  }

  updateContactField();
})();
