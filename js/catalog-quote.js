/* Catalog list: add a "Get a quote" button to every product card.
   Runs before rfq-panel.js so the injected [data-rfq-open] triggers get bound
   by the drawer's normal init. The product name is taken from the card title
   and pre-filled into the RFQ drawer. */
(function () {
  var cards = document.querySelectorAll(".catalog-card");
  if (!cards.length) return;

  cards.forEach(function (card) {
    var link = card.querySelector('a[href*="product-detail.html"]');
    var title = card.querySelector("h3");
    if (!link || !title) return;
    if (card.querySelector("[data-rfq-open]")) return;

    var actions = document.createElement("div");
    actions.className = "catalog-card-actions";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "catalog-quote";
    button.setAttribute("data-rfq-open", "");
    button.setAttribute("data-rfq-product", title.textContent.trim());
    button.setAttribute("data-i18n", "rfqFloating");
    button.textContent = "Get a Quote";

    link.parentNode.insertBefore(actions, link);
    actions.appendChild(link);
    actions.appendChild(button);
  });
})();
