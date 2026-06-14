(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var contactInput = form.querySelector("[data-contact-input]");
  var methods = form.querySelectorAll("[name='preferred_contact']");
  var submit = form.querySelector(".contact-submit");
  var status = form.querySelector("[data-contact-status]");
  var submitLabel = submit.innerHTML;

  function selectedMethod() {
    var selected = form.querySelector("[name='preferred_contact']:checked");
    return selected ? selected.value : "WhatsApp";
  }

  function updateContactInput() {
    var isEmail = selectedMethod() === "Email";
    contactInput.placeholder = isEmail ? "Email address" : "WhatsApp number with country code";
    contactInput.setAttribute("inputmode", isEmail ? "email" : "tel");
  }

  function showStatus(message, isError) {
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  methods.forEach(function (method) {
    method.addEventListener("change", updateContactInput);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    contactInput.name = selectedMethod() === "Email" ? "email" : "whatsapp";
    submit.disabled = true;
    submit.innerHTML = "<span>Sending...</span><span aria-hidden=\"true\">···</span>";
    showStatus("", false);

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (response) {
      if (!response.ok) throw new Error("Submission failed");
      return response.json().catch(function () { return {}; });
    }).then(function (result) {
      if (result.success === false) throw new Error("Submission failed");
      form.reset();
      updateContactInput();
      showStatus("Requirements sent. Our sales team will reply shortly.", false);
    }).catch(function () {
      showStatus("Unable to send. Please use WhatsApp or email us directly.", true);
    }).finally(function () {
      submit.disabled = false;
      submit.innerHTML = submitLabel;
    });
  });

  updateContactInput();
})();
