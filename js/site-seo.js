(function () {
  var origin = "https://www.jldplywood.com";
  // Preserve the language directory (/ar/, /fr/, /ru/) in the canonical URL.
  var langMatch = location.pathname.match(/^\/(ar|fr|ru)(\/|$)/);
  var langPrefix = langMatch ? "/" + langMatch[1] : "";
  var path = location.pathname.split("/").pop() || "index.html";
  var canonicalPath = path === "index.html" ? langPrefix + "/" : langPrefix + "/" + path;
  var params = new URLSearchParams(location.search);
  if (path === "product-detail.html" && params.get("product")) {
    canonicalPath += "?product=" + encodeURIComponent(params.get("product"));
  }
  if (path === "applications.html" && params.get("application")) {
    canonicalPath += "?application=" + encodeURIComponent(params.get("application"));
  }
  var canonical = origin + canonicalPath;
  var title = document.title;
  var descriptionNode = document.querySelector('meta[name="description"]');
  var description = descriptionNode ? descriptionNode.content : "";
  var image = origin + "/assets/generated/jld-hero-factory.webp";

  function meta(property, content) {
    var selector = property.indexOf("og:") === 0 ?
      'meta[property="' + property + '"]' :
      'meta[name="' + property + '"]';
    var node = document.querySelector(selector);
    if (!node) {
      node = document.createElement("meta");
      node.setAttribute(property.indexOf("og:") === 0 ? "property" : "name", property);
      document.head.appendChild(node);
    }
    node.content = content;
  }

  var canonicalNode = document.querySelector('link[rel="canonical"]');
  if (!canonicalNode) {
    canonicalNode = document.createElement("link");
    canonicalNode.rel = "canonical";
    document.head.appendChild(canonicalNode);
  }
  canonicalNode.href = canonical;

  meta("robots", "index,follow,max-image-preview:large");
  meta("og:type", "website");
  meta("og:site_name", "Jialinda Wood Panels");
  meta("og:title", title);
  meta("og:description", description);
  meta("og:url", canonical);
  meta("og:image", image);
  meta("twitter:card", "summary_large_image");
  meta("twitter:title", title);
  meta("twitter:description", description);

  var schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xuzhou Jialinda International Trade Co., Ltd.",
    "url": origin,
    "logo": image,
    "email": "info@jldplywood.com",
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+86-131-4520-9266",
      "availableLanguage": ["English"]
    }]
  };
  if (path === "product-detail.html") {
    var productTitle = document.querySelector("[data-product-title]");
    var productImage = document.querySelector("[data-product-image]");
    var productSummary = document.querySelector("[data-product-summary]");
    if (productSummary) {
      description = productSummary.textContent.trim();
      meta("description", description);
      meta("og:description", description);
      meta("twitter:description", description);
    }
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": productTitle ? productTitle.textContent.trim() : title,
      "image": productImage ? new URL(productImage.src, location.href).href : image,
      "description": description,
      "brand": { "@type": "Brand", "name": "JIALINDA" },
      "manufacturer": {
        "@type": "Organization",
        "name": "Xuzhou Jialinda International Trade Co., Ltd.",
        "url": origin
      },
      "url": canonical
    };
  }
  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
})();
