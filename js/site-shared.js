(function () {
  var footerMarkup = [
    '<footer class="v2-footer" id="quote">',
    '  <div class="v2-footer-inner">',
    '    <div class="v2-footer-grid">',
    '      <div class="v2-footer-brand-col">',
    '        <a class="v2-footer-logo" href="index.html" aria-label="Jialinda home">',
    '          <img src="assets/img/logo-v2.png" alt="JIALINDA">',
    '          <span><strong data-i18n="brandTag">JIALINDA</strong><small data-i18n="footerLogoSub">Wood panel manufacturer &amp; exporter</small></span>',
    '        </a>',
    '        <p class="v2-footer-tagline" data-i18n="footerTagline">Factory supply for plywood, furniture panels and engineered wood systems with export packing and container delivery support.</p>',
    '        <div class="v2-footer-brand-contact">',
    '          <a href="mailto:info@jldplywood.com" class="v2-footer-email"><span data-i18n="footerEmailLabel">Email sales</span><strong>info@jldplywood.com</strong></a>',
    '          <div class="v2-footer-social-row" aria-label="Contact and social links">',
    '            <a href="https://api.whatsapp.com/send?phone=8613145209266" target="_blank" rel="noopener" class="v2-footer-social-link v2-footer-whatsapp"><img src="assets/whatapp.png" alt=""><span data-i18n="whatsapp">WhatsApp</span></a>',
    '            <a href="https://www.facebook.com/share/1E8qckjdye/?mibextid=wwXIfr" target="_blank" rel="noopener" class="v2-footer-social-link v2-footer-facebook" aria-label="Follow Jialinda on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg><span>Facebook</span></a>',
    '          </div>',
    '        </div>',
    '      </div>',
    '      <div>',
    '        <h4 data-i18n="footerCategories">Product Categories</h4>',
    '        <ul>',
    '          <li><a href="products.html#formwork-plywood" data-i18n="dropFilm">Film faced plywood</a></li>',
    '          <li><a href="products.html#commercial-panels" data-i18n="dropCommercial">Commercial &amp; specialty plywood</a></li>',
    '          <li><a href="products.html#furniture-panels" data-i18n="dropFurniture">Furniture panels</a></li>',
    '          <li><a href="products.html#engineered-wood" data-i18n="dropEngineered">Engineered wood systems</a></li>',
    '          <li><a href="products.html#blockboard" data-i18n="blockboard">Blockboard</a></li>',
    '        </ul>',
    '      </div>',
    '      <div>',
    '        <h4 data-i18n="footerSupport">Our Advantages</h4>',
    '        <ul>',
    '          <li><a href="advantages-production.html" data-i18n="dropSelector">Factory Supply</a></li>',
    '          <li><a href="advantages-qc.html" data-i18n="dropChecklist">Quality Control</a></li>',
    '          <li><a href="advantages-packing.html" data-i18n="dropPacking">Export Execution</a></li>',
    '          <li><a href="markets.html" data-i18n="dropExport">Export Markets</a></li>',
    '        </ul>',
    '      </div>',
    '      <div>',
    '        <h4 data-i18n="footerCompany">Company</h4>',
    '        <ul>',
    '          <li><a href="about.html" data-i18n="dropCompany">About Jialinda</a></li>',
    '          <li><a href="applications.html" data-i18n="navApplications">Applications</a></li>',
    '          <li><a href="about.html#factory" data-i18n="dropFactory">Factory &amp; QC</a></li>',
    '          <li><a href="about.html#certificates" data-i18n="dropCertificates">Certificates</a></li>',
    '          <li><a href="contact.html" data-i18n="navContact">Contact sales</a></li>',
    '        </ul>',
    '      </div>',
    '    </div>',
    '    <div class="v2-footer-bottom">',
    '      <p>© 2026 JLD / Xuzhou Jialinda Trading Co., Ltd. <span data-i18n="footerRights">All rights reserved.</span></p>',
    '      <p data-i18n="footerDesc">JIALINDA is a plywood manufacturer and exporter based in Xuzhou, China.</p>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join("");

  var quoteMarkup = [
    '<div class="rfq-drawer" data-rfq-drawer aria-hidden="true">',
    '  <button class="rfq-drawer-backdrop" type="button" aria-label="Close request form" data-rfq-close></button>',
    '  <aside class="rfq-drawer-panel" aria-label="Request a quotation">',
    '    <div class="rfq-drawer-head"><small data-i18n="rfqTitle">REQUEST FOR QUOTATION</small><strong data-i18n="rfqSub">Send your requirements</strong><p data-i18n="rfqDesc">Choose one contact method. Product specifications can be completed together with our sales team.</p><button class="rfq-drawer-close" type="button" aria-label="Close" data-rfq-close>×</button></div>',
    '    <form action="https://api.web3forms.com/submit" method="POST">',
    '      <input type="hidden" name="access_key" value="5e241454-a228-47e8-8b78-c47883800404">',
    '      <fieldset class="rfq-contact-choice"><legend data-i18n="rfqContactMethod">Preferred contact method</legend><label><input type="radio" name="preferred_contact" value="WhatsApp" checked><span data-i18n="whatsapp">WhatsApp</span></label><label><input type="radio" name="preferred_contact" value="Email"><span data-i18n="dropEmail">Email</span></label></fieldset>',
    '      <label class="rfq-field rfq-field-wide"><span data-i18n="rfqContactField">Your contact</span><input type="text" required data-rfq-contact></label>',
    '      <label class="rfq-field rfq-field-wide"><span data-i18n="rfqProductField">Product</span><input type="text" name="product" data-i18n-placeholder="searchPlaceholder" placeholder="Film faced plywood, MDF, LVL..." data-rfq-product></label>',
    '      <label class="rfq-field"><span data-i18n="rfqSizeField">Size / Thickness</span><input type="text" name="size"></label>',
    '      <label class="rfq-field"><span data-i18n="rfqQtyField">Quantity</span><input type="text" name="quantity"></label>',
    '      <label class="rfq-field rfq-field-wide"><span data-i18n="rfqPortField">Destination port</span><input type="text" name="port"></label>',
    '      <label class="rfq-field rfq-field-wide"><span data-i18n="rfqNotesField">Additional requirements</span><textarea name="message" data-i18n-placeholder="rfqNotesPlaceholder" placeholder="Surface, core, glue, packing or certificate needs"></textarea></label>',
    '      <button class="rfq-submit" type="submit" data-i18n="rfqSubmit">Send requirements <span>→</span></button>',
    '    </form>',
    '  </aside>',
    '</div>',
    '<button class="rfq-floating-open" type="button" data-rfq-open><span data-i18n="rfqFloating">Get a Quote</span><span>+</span></button>'
  ].join("");

  document.querySelectorAll(".v2-footer").forEach(function (footer, index) {
    if (index === 0) footer.outerHTML = footerMarkup;
    else footer.remove();
  });

  if (!document.querySelector(".v2-footer")) {
    document.body.insertAdjacentHTML("beforeend", footerMarkup);
  }

  document.querySelectorAll(".rfq-drawer, .rfq-floating-open, .v2-floating-contact").forEach(function (element) {
    element.remove();
  });
  document.body.insertAdjacentHTML("beforeend", quoteMarkup);

  if (window.translatePage && typeof window.getCurrentLanguage === "function") {
    window.translatePage(window.getCurrentLanguage());
  }
})();
