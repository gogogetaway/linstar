(function () {
  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector("[data-menu-button]");
  var nav = document.querySelector("[data-nav]");
  var revealItems = document.querySelectorAll(".reveal");
  var langButtons = document.querySelectorAll("[data-lang]");
  var langCurrent = document.querySelector("[data-lang-current]");
  var translatable = document.querySelectorAll("[data-i18n]");
  var placeholderItems = document.querySelectorAll("[data-i18n-placeholder]");
  var heroSlides = document.querySelectorAll("[data-hero-slide]");
  var heroDots = document.querySelectorAll("[data-hero-dot]");
  var heroPrev = document.querySelector("[data-hero-prev]");
  var heroNext = document.querySelector("[data-hero-next]");
  var inquiryForm = document.querySelector("[data-inquiry-form]");
  var currentSlide = 0;
  var slideTimer;

  var dictionary = {
    en: {
      brandTag: "Xuzhou Jialinda Trading Co., Ltd.",
      navProducts: "Products",
      navTools: "Why Jialinda",
      navAbout: "About Us",
      navContact: "Contact",
      navSearch: "Search",
      dropFilm: "Film Faced Plywood",
      dropFurniture: "Furniture Panels",
      dropEngineered: "Engineered Wood Systems",
      dropSelector: "Product Selector Brief",
      dropChecklist: "Inquiry Guide",
      dropCompliance: "Market Compliance Notes",
      dropFactory: "Factory Capability",
      dropInventory: "Inventory Control",
      dropExport: "Export Markets",
      dropEmail: "Email Inquiry",
      dropWhatsapp: "WhatsApp",
      dropRequirement: "Requirement Template",
      searchPlaceholder: "Search plywood, MDF, LVL...",
      searchGo: "Go",
      searchFilm: "Film faced plywood",
      searchMdf: "MDF / Chipboard",
      searchLvl: "LVL / H20 Beam",
      getQuote: "Get Quote",
      heroEyebrow: "Plywood manufacturer and exporter",
      heroTitle: "Factory supply for plywood, furniture panels and formwork systems.",
      heroText: "Xuzhou Jialinda helps importers, contractors and manufacturers source stable wood panel specifications with export packing, OEM support and container delivery.",
      heroMetricYears: "Years wood panel experience",
      heroMetricLines: "Production and processing lines",
      heroMetricMarkets: "Export markets served",
      browseProducts: "Browse Products",
      sendRequirements: "Send Requirements",
      quoteChecklist: "Inquiry guide",
      checkProduct: "Product type and application",
      checkSize: "Size, thickness and surface",
      checkQty: "Quantity and destination port",
      checkPacking: "Packing and documentation needs",
      proofFactory: "Production base",
      proofMarkets: "Export markets",
      proofPacking: "Packing support",
      proofContainer: "Container delivery",
      certIntro: "Common documentation support",
      productsEyebrow: "Product architecture",
      productsTitle: "Three sourcing paths for global buyers.",
      productsText: "Keep the homepage simple: buyer enters by application, then confirms specification through the product page or email inquiry.",
      productOneTitle: "Formwork & Construction",
      productOneText: "Film faced plywood, PP plastic faced plywood, slip-resistant plywood and formply for concrete projects.",
      productTwoTitle: "Furniture & Interior Panels",
      productTwoText: "MDF, chipboard, commercial plywood and melamine boards for furniture and interior manufacturing.",
      productThreeTitle: "Engineered Wood Systems",
      productThreeText: "LVL, H20 beam and formwork system components for industrial and project supply.",
      factoryEyebrow: "Manufacturing proof",
      factoryTitle: "Organized production and ready-to-ship panel inventory.",
      factoryText: "This section should make the site feel like a real supply partner, not only a catalog. The image works best here because it shows scale, storage discipline and repeat-order capability.",
      factoryPointOneTitle: "Stable supply",
      factoryPointOneText: "Stock planning for recurring import orders.",
      factoryPointTwoTitle: "Controlled storage",
      factoryPointTwoText: "Panels organized before packing and loading.",
      factoryPointThreeTitle: "Mixed containers",
      factoryPointThreeText: "Support for multiple panel categories in one sourcing plan.",
      processEyebrow: "Production workflow",
      processTitle: "A clear process from panel matching to container loading.",
      stepOneTitle: "Define",
      stepOneText: "Confirm application, grade, size, thickness, surface and target market.",
      stepTwoTitle: "Match",
      stepTwoText: "Recommend core, glue, overlay, packing method and documentation path.",
      stepThreeTitle: "Produce",
      stepThreeText: "Arrange panel production, inspection, edge sealing, pallet packing and marks.",
      stepFourTitle: "Load",
      stepFourText: "Prepare container loading, photos, documents and repeat-order specification files.",
      toolsEyebrow: "Why choose Jialinda",
      toolsTitle: "Built for buyers who need stable formwork panel supply.",
      toolsText: "The homepage should prove production, quality control and export execution before asking the buyer to send an inquiry.",
      toolOneTitle: "Formwork-focused supply",
      toolOneText: "Film faced plywood, formply, LVL and H20 beam products organized around construction use.",
      toolTwoTitle: "Export packing experience",
      toolTwoText: "Pallet packing, marks, wrapping and container loading visibility for remote buyers.",
      toolThreeTitle: "Export packing experience",
      toolThreeText: "Pallet packing, marks, wrapping and container loading visibility for remote buyers.",
      toolFourTitle: "Responsive inquiry process",
      toolFourText: "Send product, size, thickness, quantity and destination port to get a practical specification response.",
      marketsEyebrow: "Export markets",
      marketsTitle: "Plan content by region, not only by product.",
      marketOneTitle: "Europe",
      marketOneText: "Focus on EUDR, CE, formaldehyde class and traceable documentation.",
      marketTwoTitle: "North America",
      marketTwoText: "Prepare EPA TSCA VI, CARB-related questions and product specification files.",
      marketThreeTitle: "Middle East",
      marketThreeText: "Highlight formwork plywood, construction supply and export packing durability.",
      marketFourTitle: "Oceania",
      marketFourText: "Address biosecurity, ISPM 15 packing and moisture-controlled shipment needs.",
      faqEyebrow: "Buyer questions",
      faqTitle: "Answer the questions before the buyer emails.",
      faqOneQ: "What should I provide for a quotation?",
      faqOneA: "Please send product type, application, size, thickness, surface, quantity, destination port and required certificates.",
      faqTwoQ: "Can BLXING support OEM packing?",
      faqTwoA: "Yes, the quotation can include customer marks, pallet labels, wrapping requirements and shipping documentation.",
      faqThreeQ: "Which products should I start with?",
      faqThreeA: "Construction buyers usually start with film faced plywood or formply. Furniture buyers usually start with MDF, chipboard or melamine boards.",
      whyUsTitle: "Why buyers work with us",
      whyUsText: "Focused factory capacity, sourcing control and shipment support for repeat plywood orders.",
      whyUsCapTitle: "Factory capacity",
      whyUsCapDesc: "Own production base plus coordinated partner capacity for stable plywood and formwork panel supply.",
      whyUsCapFoot: "Stable output",
      whyUsMatTitle: "Material selection",
      whyUsMatDesc: "Veneer and core selection are matched to grade, glue, surface and destination market requirements.",
      whyUsMatFoot: "Spec matching",
      whyUsMixTitle: "Mixed containers",
      whyUsMixDesc: "Optimize your logistics by mixing different panel categories and specifications in a single container.",
      whyUsMixFoot: "Cargo efficiency",
      whyUsOemTitle: "OEM & Customizing",
      whyUsOemDesc: "Support for custom branding, pallet marks and moisture-proof packing for long sea transport.",
      whyUsOemFoot: "Private label",
      whyUsDocTitle: "Market compliance",
      whyUsDocDesc: "Professional handling of CE, FSC, EUDR and export documents to ensure smooth customs entry.",
      whyUsDocFoot: "Global standards",
      whyUsQcTitle: "Visual transparency",
      whyUsQcDesc: "Detailed QC reports and container loading photos provided for every order before shipment.",
      whyUsQcFoot: "Shipment safety",
      globalTitle: "Supplying wood panels to 100+ countries",
      globalText: "From high-rise projects in the Middle East to furniture factories in Europe and SE Asia, Jialinda panels are trusted by importers and contractors for stable quality and global delivery.",
      globalEyebrow: "Global Reach",
      statCountries: "Countries",
      statClients: "B2B Clients",
      statYears: "Years Export",
      quoteEyebrow: "Email inquiry",
      quoteTitle: "Send the requirements directly to sales.",
      quoteText: "Fill the inquiry fields and submit. The website opens a prepared email to sales without storing customer data.",
      formProduct: "Product",
      formSize: "Size / Thickness",
      formQuantity: "Quantity",
      formPort: "Destination port",
      formNotes: "Packing, certificate or application notes",
      emailSales: "Email Sales",
      whatsapp: "WhatsApp",
      footerProducts: "Product center"
    },
    zh: {
      brandTag: "徐州嘉林达贸易有限公司",
      navProducts: "产品",
      navTools: "为什么选择",
      navAbout: "关于我们",
      navContact: "联系",
      navSearch: "搜索",
      dropFilm: "覆膜板",
      dropFurniture: "家具板材",
      dropEngineered: "工程木系统",
      dropSelector: "产品选择简表",
      dropChecklist: "询价指南",
      dropCompliance: "市场合规备注",
      dropFactory: "工厂能力",
      dropInventory: "库存管理",
      dropExport: "出口市场",
      dropEmail: "邮件询盘",
      dropWhatsapp: "WhatsApp",
      dropRequirement: "需求模板",
      searchPlaceholder: "搜索胶合板、MDF、LVL...",
      searchGo: "搜索",
      searchFilm: "覆膜板",
      searchMdf: "MDF / 刨花板",
      searchLvl: "LVL / H20 梁",
      getQuote: "获取报价",
      heroEyebrow: "建筑模板板材工厂供应",
      heroTitle: "面向全球承包商与进口商的建筑模板胶合板供应商。",
      heroText: "聚焦覆膜板、Formply、LVL 与 H20 梁，支持稳定规格、出口包装、装柜交付和项目型询盘响应。",
      heroMetricYears: "板材供应经验",
      heroMetricLines: "生产与加工能力",
      heroMetricMarkets: "出口市场服务",
      browseProducts: "查看产品",
      sendRequirements: "发送询盘",
      quoteChecklist: "询价指南",
      checkProduct: "产品类型和用途",
      checkSize: "尺寸、厚度和表面",
      checkQty: "数量和目的港",
      checkPacking: "包装和文件需求",
      proofFactory: "生产基地",
      proofMarkets: "出口市场",
      proofPacking: "包装支持",
      proofContainer: "集装箱交付",
      certIntro: "认证与合规支持",
      productsEyebrow: "产品架构",
      productsTitle: "面向全球买家的三条采购路径。",
      productsText: "首页保持清晰：客户先按应用进入分类，再通过产品页或邮件确认具体规格。",
      productOneTitle: "建筑模板与施工",
      productOneText: "覆膜板、PP 塑面板、防滑板和 Formply，用于混凝土项目。",
      productTwoTitle: "家具与室内板材",
      productTwoText: "MDF、刨花板、普通胶合板和三聚氰胺板，用于家具与室内制造。",
      productThreeTitle: "工程木与模板系统",
      productThreeText: "LVL、H20 梁和模板系统部件，用于工业和项目供应。",
      factoryEyebrow: "制造证明",
      factoryTitle: "有组织的生产与可发货板材库存。",
      factoryText: "这个模块要让网站更像真实供应伙伴，而不只是产品目录。这张图适合放在这里，因为它能体现规模、仓储秩序和复购供货能力。",
      factoryPointOneTitle: "稳定供应",
      factoryPointOneText: "面向长期进口订单的库存规划。",
      factoryPointTwoTitle: "受控仓储",
      factoryPointTwoText: "板材在包装和装柜前有序存放。",
      factoryPointThreeTitle: "混合装柜",
      factoryPointThreeText: "支持多种板材品类组合采购。",
      processEyebrow: "生产流程",
      processTitle: "从规格匹配到集装箱装柜的清晰流程。",
      stepOneTitle: "定义需求",
      stepOneText: "确认用途、等级、尺寸、厚度、表面和目标市场。",
      stepTwoTitle: "匹配方案",
      stepTwoText: "推荐芯材、胶水、表面、包装方式和文件路径。",
      stepThreeTitle: "生产检验",
      stepThreeText: "安排生产、检验、封边、托盘包装和唛头。",
      stepFourTitle: "装柜交付",
      stepFourText: "准备装柜、照片、文件和复购规格档案。",
      toolsEyebrow: "为什么选择嘉林达",
      toolsTitle: "面向需要稳定建筑模板板材供应的买家。",
      toolsText: "首页需要先证明生产、质量控制和出口执行能力，再引导客户发送询盘。",
      toolOneTitle: "聚焦建筑模板供应",
      toolOneText: "覆膜板、Formply、LVL 和 H20 梁围绕建筑施工应用组织产品线。",
      toolTwoTitle: "出口包装经验",
      toolTwoText: "支持托盘包装、唛头、缠绕包装和装柜过程可视化，方便远程采购。",
      toolThreeTitle: "出口包装经验",
      toolThreeText: "支持托盘包装、唛头、缠绕包装和装柜过程可视化，方便远程采购。",
      toolFourTitle: "快速响应询盘",
      toolFourText: "发送产品、尺寸、厚度、数量和目的港，即可获得实用规格建议。",
      marketsEyebrow: "出口市场",
      marketsTitle: "按地区规划内容，而不只按产品规划。",
      marketOneTitle: "欧洲",
      marketOneText: "关注 EUDR、CE、甲醛等级和可追溯文件。",
      marketTwoTitle: "北美",
      marketTwoText: "准备 EPA TSCA VI、CARB 相关问题和产品规格文件。",
      marketThreeTitle: "中东",
      marketThreeText: "突出覆膜板、建筑供应和出口包装耐用性。",
      marketFourTitle: "大洋洲",
      marketFourText: "回应生物安全、ISPM 15 包装和防潮运输需求。",
      faqEyebrow: "买家问题",
      faqTitle: "在客户发邮件前先回答关键问题。",
      faqOneQ: "报价需要提供什么？",
      faqOneA: "请提供产品类型、用途、尺寸、厚度、表面、数量、目的港和所需证书。",
      faqTwoQ: "BLXING 可以做 OEM 包装吗？",
      faqTwoA: "可以，报价可包含客户唛头、托盘标签、包装要求和运输文件。",
      faqThreeQ: "我应该从哪些产品开始？",
      faqThreeA: "建筑客户通常从覆膜板或 Formply 开始。家具客户通常从 MDF、刨花板或三聚氰胺板开始。",
      quoteEyebrow: "邮件询盘",
      quoteTitle: "把需求直接发送给销售。",
      quoteText: "填写询盘信息并提交，网站会打开发给销售的邮件模板，不保存客户数据。",
      formProduct: "产品",
      formSize: "尺寸 / 厚度",
      formQuantity: "数量",
      formPort: "目的港",
      formNotes: "包装、证书或应用备注",
      emailSales: "邮件联系",
      whatsapp: "WhatsApp",
      footerProducts: "产品中心",
      whyUsCapTitle: "稳定供应基础",
      whyUsCapDesc: "自有生产基地与协同产能，确保建筑模板长期稳定供应。",
      whyUsMatTitle: "按需匹配材料",
      whyUsMatDesc: "根据项目等级匹配芯材、胶水和表面，实现精准规格定制。",
      whyUsMixTitle: "多品类一柜发货",
      whyUsMixDesc: "核心优势：支持胶合板、密度板、LVL 等多种品类混合装柜。",
      whyUsOemTitle: "品牌与加固包装",
      whyUsOemDesc: "支持品牌定制、托盘唛头以及针对长途海运的防潮加固包装。",
      whyUsDocTitle: "解决清关痛点",
      whyUsDocDesc: "专业处理 CE, FSC, EUDR 等证书，确保全球市场顺畅清关。",
      whyUsQcTitle: "过程透明报告",
      whyUsQcDesc: "每批订单均提供详细 QC 报告与装柜照片，让海外买家放心。",
      globalTitle: "板材供应覆盖全球 100 多个国家",
      globalText: "从中东的高层建筑项目到欧洲、东南亚的家具工厂，嘉林达板材凭借稳定的质量和全球化的交付能力，赢得了全球进口商与承包商的长期信任。",
      globalEyebrow: "全球足迹",
      statCountries: "覆盖国家",
      statClients: "企业客户",
      statYears: "出口经验",
      quoteEyebrow: "邮件询盘",
      brandTag: "Xuzhou Jialinda Trading Co., Ltd.",
      navProducts: "Productos",
      navTools: "Por que Jialinda",
      navAbout: "Nosotros",
      navContact: "Contacto",
      navSearch: "Buscar",
      dropFilm: "Film Faced Plywood",
      dropFurniture: "Paneles para muebles",
      dropEngineered: "Sistemas de madera tecnica",
      dropSelector: "Resumen de seleccion",
      dropChecklist: "Guia de consulta",
      dropCompliance: "Notas de cumplimiento",
      dropFactory: "Capacidad de fabrica",
      dropInventory: "Control de inventario",
      dropExport: "Mercados de exportacion",
      dropEmail: "Consulta por correo",
      dropWhatsapp: "WhatsApp",
      dropRequirement: "Plantilla de requisitos",
      searchPlaceholder: "Buscar plywood, MDF, LVL...",
      searchGo: "Ir",
      searchFilm: "Film faced plywood",
      searchMdf: "MDF / Chipboard",
      searchLvl: "LVL / H20 Beam",
      getQuote: "Cotizar",
      heroEyebrow: "Fabricante y exportador de plywood",
      heroTitle: "Suministro de fabrica para plywood, paneles para muebles y sistemas de encofrado.",
      heroText: "Xuzhou Jialinda ayuda a importadores, contratistas y fabricantes a comprar especificaciones estables con embalaje de exportacion, soporte OEM y entrega en contenedor.",
      heroMetricYears: "Anios de experiencia en paneles",
      heroMetricLines: "Lineas de produccion y proceso",
      heroMetricMarkets: "Mercados de exportacion",
      browseProducts: "Ver productos",
      sendRequirements: "Enviar requisitos",
      quoteChecklist: "Guia de consulta",
      checkProduct: "Producto y aplicacion",
      checkSize: "Medida, espesor y superficie",
      checkQty: "Cantidad y puerto destino",
      checkPacking: "Embalaje y documentos",
      proofFactory: "Base de produccion",
      proofMarkets: "Mercados de exportacion",
      proofPacking: "Soporte de embalaje",
      proofContainer: "Entrega en contenedor",
      certIntro: "Documentacion comun",
      productsEyebrow: "Arquitectura de producto",
      productsTitle: "Tres rutas de compra para compradores globales.",
      productsText: "La pagina principal guia por aplicacion y luego confirma especificaciones por catalogo o correo.",
      productOneTitle: "Encofrado y construccion",
      productOneText: "Film faced plywood, PP faced plywood, tablero antideslizante y formply para proyectos de concreto.",
      productTwoTitle: "Paneles para muebles",
      productTwoText: "MDF, chipboard, contrachapado comercial y melamina para fabricacion de muebles e interiores.",
      productThreeTitle: "Sistemas de madera tecnica",
      productThreeText: "LVL, viga H20 y componentes de encofrado para suministro industrial y proyectos.",
      factoryEyebrow: "Prueba de fabricacion",
      factoryTitle: "Organized production and ready-to-ship panel inventory.",
      factoryText: "Esta seccion debe mostrar a BLXING como socio real de suministro. La imagen funciona aqui porque comunica escala, orden y capacidad de pedidos repetidos.",
      factoryPointOneTitle: "Suministro estable",
      factoryPointOneText: "Planificacion de stock para pedidos recurrentes.",
      factoryPointTwoTitle: "Almacen controlado",
      factoryPointTwoText: "Paneles organizados antes del embalaje y carga.",
      factoryPointThreeTitle: "Contenedores mixtos",
      factoryPointThreeText: "Soporte para varias categorias en un plan de compra.",
      processEyebrow: "Flujo de produccion",
      processTitle: "Un proceso claro desde la especificacion hasta la carga.",
      stepOneTitle: "Definir",
      stepOneText: "Confirmar aplicacion, grado, medida, espesor, superficie y mercado.",
      stepTwoTitle: "Recomendar",
      stepTwoText: "Recomendar nucleo, cola, superficie, embalaje y documentos.",
      stepThreeTitle: "Producir",
      stepThreeText: "Organizar produccion, inspeccion, sellado, pallets y marcas.",
      stepFourTitle: "Cargar",
      stepFourText: "Preparar carga, fotos, documentos y archivos para pedidos repetidos.",
      toolsEyebrow: "Por que elegir Jialinda",
      toolsTitle: "Built for buyers who need stable formwork panel supply.",
      toolsText: "La pagina principal debe probar produccion, control de calidad y ejecucion de exportacion antes de pedir la consulta.",
      toolOneTitle: "Suministro enfocado en encofrado",
      toolOneText: "Film faced plywood, formply, LVL y viga H20 organizados para uso en construccion.",
      toolTwoTitle: "Experiencia en embalaje de exportacion",
      toolTwoText: "Pallets, marcas, wrapping y visibilidad de carga para compradores remotos.",
      toolThreeTitle: "Experiencia en embalaje de exportacion",
      toolThreeText: "Pallets, marcas, wrapping y visibilidad de carga para compradores remotos.",
      toolFourTitle: "Respuesta agil a consultas",
      toolFourText: "Enviar producto, medida, espesor, cantidad y puerto destino para recibir una recomendacion practica.",
      marketsEyebrow: "Mercados",
      marketsTitle: "Planificar por region, no solo por producto.",
      marketOneTitle: "Europa",
      marketOneText: "Enfoque en EUDR, CE, formaldehido y trazabilidad.",
      marketTwoTitle: "Norteamerica",
      marketTwoText: "Preparar EPA TSCA VI, CARB y archivos de especificacion.",
      marketThreeTitle: "Medio Oriente",
      marketThreeText: "Destacar plywood para encofrado, construccion y embalaje robusto.",
      marketFourTitle: "Oceania",
      marketFourText: "Atender bioseguridad, embalaje ISPM 15 y control de humedad.",
      faqEyebrow: "Preguntas",
      faqTitle: "Responder antes de que el comprador escriba.",
      faqOneQ: "Que debo enviar para cotizar?",
      faqOneA: "Enviar producto, aplicacion, medida, espesor, superficie, cantidad, puerto destino y certificados requeridos.",
      faqTwoQ: "BLXING ofrece embalaje OEM?",
      faqTwoA: "Si, la cotizacion puede incluir marcas, etiquetas, embalaje y documentos de envio.",
      faqThreeQ: "Con que productos empezar?",
      faqThreeA: "Construccion suele empezar con film faced plywood o formply. Muebles suele empezar con MDF, chipboard o melamina.",
      quoteEyebrow: "Consulta por correo",
      quoteTitle: "Enviar requisitos directamente a ventas.",
      quoteText: "Completa los campos y envia. El sitio abre un correo preparado para ventas sin guardar datos.",
      formProduct: "Producto",
      formSize: "Medida / Espesor",
      formQuantity: "Cantidad",
      formPort: "Puerto destino",
      formNotes: "Embalaje, certificado o notas de aplicacion",
      emailSales: "Enviar correo",
      whatsapp: "WhatsApp",
      footerProducts: "Centro de productos"
    }
  };

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  function closeMenu() {
    document.body.classList.remove("is-menu-open");
    if (header) header.classList.remove("is-open");
  }

  function showSlide(index) {
    if (!heroSlides.length) return;
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
    });
    heroDots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("is-active", dotIndex === currentSlide);
    });
  }

  function restartSlideTimer() {
    if (!heroSlides.length) return;
    clearInterval(slideTimer);
    slideTimer = setInterval(function () {
      showSlide(currentSlide + 1);
    }, 6200);
  }

  function buildInquiryMail(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var formData = new FormData(form);
    var body = [
      "Product: " + (formData.get("product") || ""),
      "Size / Thickness: " + (formData.get("size") || ""),
      "Quantity: " + (formData.get("quantity") || ""),
      "Destination port: " + (formData.get("port") || ""),
      "Packing / certificate / application notes:",
      formData.get("notes") || ""
    ].join("\n");
    window.location.href = "mailto:info@blxing.com?subject=" +
      encodeURIComponent("Jialinda wood panel inquiry") +
      "&body=" + encodeURIComponent(body);
  }

  function setLanguage(lang) {
    var copy = dictionary[lang] || dictionary.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    translatable.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (copy[key]) node.textContent = copy[key];
    });
    placeholderItems.forEach(function (node) {
      var key = node.getAttribute("data-i18n-placeholder");
      if (copy[key]) node.setAttribute("placeholder", copy[key]);
    });
    langButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang") === lang);
    });
    if (langCurrent) {
      langCurrent.textContent = lang === "zh" ? "中文" : lang.toUpperCase();
    }
    try {
      localStorage.setItem("blxing-home-lang", lang);
    } catch (error) {}
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (menuButton && header) {
    menuButton.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      document.body.classList.toggle("is-menu-open", isOpen);
    });
  }

  // Flagship v3.5: Dynamic Counter Engine
  var countStarted = false;
  function startCounting() {
    if (countStarted) return;
    var stats = document.querySelectorAll(".stat-item strong");
    stats.forEach(function (stat) {
      var target = parseInt(stat.textContent);
      var count = 0;
      var duration = 2000; // 2 seconds
      var startTime = null;

      function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        var progress = currentTime - startTime;
        var increment = Math.min(Math.floor((progress / duration) * target), target);
        stat.textContent = increment + "+";
        if (progress < duration) {
          requestAnimationFrame(animation);
        } else {
          stat.textContent = target + "+";
        }
      }
      requestAnimationFrame(animation);
    });
    countStarted = true;
  }

  var globalSection = document.querySelector(".v2-global");
  if (globalSection && "IntersectionObserver" in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) startCounting();
    }, { threshold: 0.5 });
    statsObserver.observe(globalSection);
  }

  if (nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") closeMenu();
    });
  }

  if (heroPrev) {
    heroPrev.addEventListener("click", function () {
      showSlide(currentSlide - 1);
      restartSlideTimer();
    });
  }

  if (heroNext) {
    heroNext.addEventListener("click", function () {
      showSlide(currentSlide + 1);
      restartSlideTimer();
    });
  }

  heroDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      showSlide(index);
      restartSlideTimer();
    });
  });

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", buildInquiryMail);
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  showSlide(0);
  restartSlideTimer();

  var initialLang = "zh";
  setLanguage(initialLang);
})();
