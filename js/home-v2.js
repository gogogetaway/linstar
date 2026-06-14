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
  var floatingContact = document.querySelector("[data-floating-contact]");
  var floatingContactToggle = document.querySelector("[data-floating-contact-toggle]");
  var catalogFilters = document.querySelectorAll("[data-catalog-filter]");
  var productMegaMenus = document.querySelectorAll(".v2-products-mega");
  var currentSlide = 0;
  var slideTimer;

  var dictionary = {
    en: {
      brandTag: "JIALINDA",
      navProducts: "Products",
      navTools: "Supply Support",
      navAbout: "About Us",
      navContact: "Contact",
      navApplications: "Applications",
      navSearch: "Search",
      dropFilm: "Film faced plywood",
      dropCommercial: "Commercial & Specialty Plywood",
      dropFurniture: "Furniture Panels",
      dropEngineered: "Engineered Wood Systems",
      dropSelector: "Product Matching",
      dropChecklist: "Inquiry Checklist",
      dropPacking: "Packing & Loading",
      dropCompliance: "Documents",
      dropCompany: "Company Overview",
      dropFactory: "Factory & QC",
      dropCertificates: "Certificates",
      dropInventory: "Production & QC",
      dropExport: "Export Markets",
      dropConstruction: "Construction",
      dropFurnitureApp: "Furniture",
      dropPackaging: "Packaging",
      dropVehicles: "Vehicles",
      dropDecoration: "Decoration",
      dropEmail: "Email Inquiry",
      dropWhatsapp: "WhatsApp",
      dropRequirement: "Requirement Template",
      searchPlaceholder: "Search plywood, MDF, LVL...",
      searchGo: "Go",
      searchFilm: "Film faced plywood",
      searchMdf: "MDF / Chipboard",
      searchLvl: "LVL / H20 Beam",
      getQuote: "Contact",
      heroEyebrow: "Direct from our own factory",
      heroTitle: "Reliable plywood supply for global buyers.",
      heroText: "Xuzhou Jialinda helps importers, contractors and manufacturers source stable wood panel specifications with export packing, OEM support and container delivery.",
      heroMetricYears: "Years Experience",
      heroMetricLines: "Production Lines",
      heroMetricMarkets: "Export Markets",
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
      productOneTitle: "Film faced plywood",
      productOneText: "Film faced plywood, PP plastic faced plywood, slip-resistant plywood and formply for concrete projects.",
      productTwoTitle: "Furniture Panels",
      productTwoText: "MDF, chipboard and OSB for furniture, interior and structural panel production.",
      productThreeTitle: "Engineered Wood Systems",
      productThreeText: "LVL and H20 beam components for industrial, structural and formwork project supply.",
      factoryEyebrow: "Manufacturing proof",
      factoryTitle: "Organized production and ready-to-ship panel inventory.",
      factoryText: "This section should make the site feel like a real supply partner, not only a catalog.",
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
      toolsEyebrow: "Supply support",
      toolsTitle: "Built for buyers who need stable wood panel supply.",
      toolsText: "The homepage connects product categories, production proof and export support before asking the buyer to send requirements.",
      toolOneTitle: "Formwork-focused supply",
      toolOneText: "Film faced plywood, formply, LVL and H20 beam products organized around construction use.",
      toolTwoTitle: "Export packing experience",
      toolTwoText: "Pallet packing, marks, wrapping and container loading visibility for remote buyers.",
      toolThreeTitle: "Logistics support",
      toolThreeText: "Professional export document handling and FOB/CIF shipping terms management.",
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
      faqTwoQ: "Can JLD support OEM packing?",
      faqTwoA: "Yes, the quotation can include customer marks, pallet labels, wrapping requirements and shipping documentation.",
      faqThreeQ: "Which products should I start with?",
      faqThreeA: "Construction buyers usually start with film faced plywood or formply. Furniture buyers usually start with MDF, chipboard or melamine boards.",
      whyUsTitle: "How we support plywood buyers",
      whyUsText: "From product matching to export packing, the supply process is built around repeat container orders.",
      whyUsCapTitle: "Panel supply base",
      whyUsCapDesc: "Film faced plywood, furniture panels, LVL and H20 beams supplied from organized production capacity.",
      whyUsCapFoot: "Stable output",
      whyUsMatTitle: "Specification matching",
      whyUsMatDesc: "Core, glue, thickness, surface and packing are matched to your application and destination market.",
      whyUsMatFoot: "Spec matching",
      whyUsMixTitle: "Mixed container plans",
      whyUsMixDesc: "Construction plywood, furniture boards and engineered wood can be arranged in one sourcing plan.",
      whyUsMixFoot: "Cargo efficiency",
      whyUsOemTitle: "OEM packing support",
      whyUsOemDesc: "Private marks, pallet labels, wrapping and moisture protection are prepared for long sea transport.",
      whyUsOemFoot: "Private label",
      whyUsDocTitle: "Document support",
      whyUsDocDesc: "Commercial documents, packing information and market-related certificate files can be prepared with the shipment.",
      whyUsDocFoot: "Global standards",
      whyUsQcTitle: "Order visibility",
      whyUsQcDesc: "Production checks, packing photos and container loading photos help overseas buyers follow the order remotely.",
      whyUsQcFoot: "Shipment safety",
      globalTitle: "Supplying wood panels to 50+ export markets",
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
      footerProducts: "Product center",
      footerLogoSub: "Wood panel manufacturer & exporter",
      footerTagline: "Factory supply for plywood, furniture panels and engineered wood systems with export packing and container delivery support.",
      footerEmailLabel: "Email sales",
      footerCategories: "Product Categories",
      footerSupport: "Supply Support",
      footerCompany: "Company",
      footerRights: "All rights reserved.",
      footerDesc: "JIALINDA is a plywood manufacturer and exporter based in Xuzhou, China.",
      rfqTitle: "REQUEST FOR QUOTATION",
      rfqSub: "Send your requirements",
      rfqDesc: "Choose one contact method. Product specifications can be completed together with our sales team.",
      rfqContactMethod: "Preferred contact method",
      rfqContactField: "Your contact",
      rfqProductField: "Product",
      rfqSizeField: "Size / Thickness",
      rfqQtyField: "Quantity",
      rfqPortField: "Destination port",
      rfqNotesField: "Additional requirements",
      rfqNotesPlaceholder: "Surface, core, glue, packing or certificate needs",
      rfqSubmit: "Send requirements",
      rfqFloating: "Get a Quote",
      navHome: "Home",
      blockboard: "Blockboard",
      applicationsTitle: "Panels in use.",
      viewAll: "View all",
      viewDetails: "View details",
      productSpecs: "Specifications",
      aboutHeroTitle: "About Xuzhou Jialinda",
      aboutHeroDesc1: "Xuzhou Jialinda Trading Co., Ltd. is an integrated manufacturer and exporter specializing in wood-based panel products, including film faced plywood, commercial plywood, LVL, H20 beams, construction formwork panels and related building materials.",
      aboutHeroDesc2: "Based in Xuzhou, China, we combine factory production capabilities with professional export services to provide global customers with stable supply, consistent quality, competitive pricing and flexible order solutions.",
      aboutViewFactory: "View Factory Process",
      aboutCertificates: "Certificates",
      aboutLogPreparation: "01 Log selection & peeling",
      aboutQCInspection: "05 QC inspection",
      aboutExportPacking: "06 Packing & shipping",
      catalogAll: "All Products",
      catalogShowing: "Showing product families",
      contactHeroTitle: "Contact our export sales team.",
      matchHeroTitle: "Match panel specs to your application.",
      inquiryHeroTitle: "Send a complete inquiry faster.",
      packingHeroTitle: "Export packing and container loading support.",
      docHeroTitle: "Export documents prepared around order requirements.",
      docHeroText: "Documents and certificate files are confirmed by product, destination market and buyer customs requirements before shipment.",
      docCommFiles: "Commercial files",
      docCommText: "Commercial invoice, packing list, sales contract and shipment information are prepared around confirmed order data.",
      docCertFiles: "Certificate files",
      docCertText: "FSC, CE, EPA TSCA VI, EUDR or other files are checked according to product and order requirement.",
      docLoadingRecords: "Loading records",
      docLoadingText: "Packing photos, loading photos and marks can be shared for buyer review before shipment.",
      docMatchTitle: "Document details that must match.",
      docCertNote: "Certificate note",
      docCertAvailability: "Certificate availability depends on product type, raw material source, order requirement and destination market. Confirm required files before quotation.",
      viewCertSupport: "View Certificate Support",
      shippingMarks: "Shipping marks",
      moistureProtection: "Moisture protection",
      documentConsistency: "Document consistency"
    },
    zh: {
      brandTag: "嘉林达",
      navProducts: "产品中心",
      navTools: "供应支持",
      navAbout: "关于我们",
      navContact: "联系我们",
      navApplications: "应用领域",
      navSearch: "搜索",
      navHome: "首页",
      dropFilm: "覆膜板与建筑模板",
      dropCommercial: "商用与特种胶合板",
      dropFurniture: "家具板材",
      dropEngineered: "工程木系统",
      dropSelector: "产品规格匹配",
      dropChecklist: "询盘清单",
      dropPacking: "包装与装柜",
      dropCompliance: "出口文件",
      dropCompany: "公司介绍",
      dropFactory: "工厂与质检",
      dropCertificates: "资质证书",
      dropInventory: "生产与库存",
      dropExport: "出口市场",
      dropConstruction: "建筑工程",
      dropFurnitureApp: "家具制造",
      dropPackaging: "包装托盘",
      dropVehicles: "车辆地板",
      dropDecoration: "装饰内装",
      dropEmail: "邮件询盘",
      dropWhatsapp: "WhatsApp",
      dropRequirement: "需求模板",
      blockboard: "细木工板",
      searchPlaceholder: "搜索胶合板、MDF、LVL...",
      searchGo: "搜索",
      searchFilm: "覆膜胶合板",
      searchMdf: "MDF / 刨花板",
      searchLvl: "LVL / H20木梁",
      getQuote: "获取报价",
      heroEyebrow: "源头工厂直供",
      heroTitle: "为全球买家提供可靠的胶合板供应。",
      heroText: "徐州嘉林达贸易有限公司帮助进口商、承包商和制造商采购规格稳定的木板材，提供出口包装、OEM支持和集装箱交付。",
      heroMetricYears: "年行业经验",
      heroMetricLines: "条生产线",
      heroMetricMarkets: "个出口市场",
      browseProducts: "浏览产品",
      sendRequirements: "发送需求",
      quoteChecklist: "询盘指南",
      checkProduct: "产品类型与应用",
      checkSize: "尺寸、厚度与表面",
      checkQty: "数量与目的港",
      checkPacking: "包装与文件需求",
      proofFactory: "生产基地",
      proofMarkets: "出口市场",
      proofPacking: "包装支持",
      proofContainer: "集装箱交付",
      certIntro: "常用出口文件支持",
      productsEyebrow: "产品体系",
      productsTitle: "为全球买家提供三种采购路径。",
      productsText: "我们提供从应用选择到规格确认的完整采购方案，确保产品完全符合您的市场需求。",
      productOneTitle: "建筑覆膜板",
      productOneText: "提供各种颜色的覆膜板、PP塑料面模板及防滑板，适用于各种混凝土工程。",
      productTwoTitle: "家具板材",
      productTwoText: "MDF、刨花板、OSB等，适用于家具制造、内装及结构板材生产。",
      productThreeTitle: "工程木系统",
      productThreeText: "LVL和H20木梁组件，专为工业、结构和模板项目供应。",
      factoryEyebrow: "制造实力",
      factoryTitle: "有序的生产管理与现货库存。",
      factoryText: "我们注重仓储效率和持续供应能力，确保每一批次的质量稳定性。",
      factoryPointOneTitle: "稳定供应",
      factoryPointOneText: "针对长期订单的库存规划。",
      factoryPointTwoTitle: "受控仓储",
      factoryPointTwoText: "包装前的板材有序堆放与管理。",
      factoryPointThreeTitle: "拼柜支持",
      factoryPointThreeText: "支持在同一采购计划中包含多个品类的板材。",
      processEyebrow: "订单流程",
      processTitle: "从规格匹配到装柜发货的清晰流程。",
      stepOneTitle: "定义需求",
      stepOneText: "确认应用场景、等级、尺寸、厚度、表面及目标市场。",
      stepTwoTitle: "规格匹配",
      stepTwoText: "推荐合适的芯板、胶水、覆盖层、包装方式及文件路径。",
      stepThreeTitle: "生产制造",
      stepThreeText: "安排生产、质检、封边、托盘包装及刷唛。",
      stepFourTitle: "装柜交付",
      stepFourText: "准备装柜、拍摄照片、整理单据并建立复购规格档案。",
      toolsEyebrow: "供应支持",
      toolsTitle: "专为需要稳定板材供应的买家设计。",
      toolsText: "在下单前，我们为您连接产品分类、生产证明和出口支持。",
      toolOneTitle: "专注模板供应",
      toolOneText: "针对建筑用途优化的覆膜板、LVL和H20木梁产品。",
      toolTwoTitle: "丰富的包装经验",
      toolTwoText: "提供托盘包装、唛头、缠绕膜及透明的装柜流程。",
      toolThreeTitle: "物流支持",
      toolThreeText: "专业的出口单据处理及FOB/CIF贸易条款管理。",
      toolFourTitle: "快速响应询盘",
      toolFourText: "发送产品、规格、数量及目的港，获取专业的方案响应。",
      marketsEyebrow: "全球市场",
      marketsTitle: "按地区规划供应内容。",
      marketOneTitle: "欧洲市场",
      marketOneText: "专注于EUDR、CE、甲醛等级及可追溯文件。",
      marketTwoTitle: "北美市场",
      marketTwoText: "准备EPA TSCA VI、CARB相关资质及规格档案。",
      marketThreeTitle: "中东市场",
      marketThreeText: "侧重于建筑模板供应及出口包装的耐用性。",
      marketFourTitle: "大洋洲市场",
      marketFourText: "处理生物安全、ISPM 15包装及防潮运输需求。",
      faqEyebrow: "常见问题",
      faqTitle: "在您联络前，我们先为您解答。",
      faqOneQ: "获取报价需要提供哪些信息？",
      faqOneA: "请提供产品类型、应用、尺寸、厚度、表面要求、数量、目的港及所需证书。",
      faqTwoQ: "是否支持OEM包装？",
      faqTwoA: "支持。报价可包含客户唛头、托盘标签、特殊包装要求及单据处理。",
      faqThreeQ: "我应该从哪种产品开始？",
      faqThreeA: "建筑买家通常从覆膜板开始；家具买家通常从MDF、刨花板或三聚氰胺板开始。",
      whyUsTitle: "我们如何支持胶合板买家",
      whyUsText: "从产品匹配到出口包装，我们的流程专为长期集装箱订单而建。",
      whyUsCapTitle: "供应基地",
      whyUsCapDesc: "基于规模化产能，供应覆膜板、家具板、LVL及H20木梁。",
      whyUsCapFoot: "产出稳定",
      whyUsMatTitle: "规格匹配",
      whyUsMatDesc: "根据您的应用和市场，匹配芯板、胶水、厚度和包装方式。",
      whyUsMatFoot: "精准匹配",
      whyUsMixTitle: "拼柜计划",
      whyUsMixDesc: "支持在同一个集装箱中安排建筑板材、家具板及工程木。",
      whyUsMixFoot: "提升效率",
      whyUsOemTitle: "OEM包装支持",
      whyUsOemDesc: "准备私有唛头、托盘标签及长途海运防潮保护。",
      whyUsOemFoot: "自有品牌",
      whyUsDocTitle: "文件支持",
      whyUsDocDesc: "随货准备商业单据、装箱信息及市场相关的证书文件。",
      whyUsDocFoot: "国际标准",
      whyUsQcTitle: "订单透明度",
      whyUsQcDesc: "生产检查、包装照片及装柜照片，助您远程监控订单。",
      whyUsQcFoot: "运输安全",
      globalTitle: "产品销往全球50多个出口市场",
      globalText: "从中东的高层建筑到欧洲的家具厂，嘉林达板材凭借稳定的质量赢得全球客户信任。",
      globalEyebrow: "全球足迹",
      statCountries: "个国家",
      statClients: "B2B客户",
      statYears: "年出口经验",
      quoteEyebrow: "邮件询盘",
      quoteTitle: "直接向销售发送您的需求。",
      quoteText: "填写询盘字段并提交。网站将打开预设的邮件客户端，我们不存储客户数据。",
      formProduct: "产品名称",
      formSize: "尺寸 / 厚度",
      formQuantity: "采购数量",
      formPort: "目的港口",
      formNotes: "包装、证书或应用备注",
      emailSales: "邮件询盘",
      whatsapp: "WhatsApp联系",
      footerProducts: "产品中心",
      footerLogoSub: "木板材制造商与出口商",
      footerTagline: "源头工厂供应胶合板、家具板和工程木系统，支持出口包装和集装箱交付。",
      footerEmailLabel: "邮件咨询销售",
      footerCategories: "产品类别",
      footerSupport: "供应支持",
      footerCompany: "公司信息",
      footerRights: "保留所有权利。",
      footerDesc: "嘉林达是位于中国徐州的胶合板制造商和出口商。",
      rfqTitle: "询价请求",
      rfqSub: "发送您的采购需求",
      rfqDesc: "请选择一种联系方式。产品规格可与我们的销售团队共同确认。",
      rfqContactMethod: "首选联系方式",
      rfqContactField: "您的联系方式",
      rfqProductField: "产品名称",
      rfqSizeField: "规格 / 厚度",
      rfqQtyField: "采购数量",
      rfqPortField: "目的港口",
      rfqNotesField: "额外需求",
      rfqNotesPlaceholder: "表面、芯板、胶水、包装或证书需求",
      rfqSubmit: "发送采购需求",
      rfqFloating: "获取报价",
      applicationsTitle: "应用案例",
      viewAll: "查看全部",
      viewDetails: "查看详情",
      productSpecs: "规格参数",
      aboutHeroTitle: "关于徐州嘉林达",
      aboutLogPreparation: "01 原木选择与旋切",
      aboutQCInspection: "05 质量检测",
      aboutExportPacking: "06 包装与发运",
      catalogAll: "全部产品",
      catalogShowing: "显示产品系列",
      contactHeroTitle: "联系我们的出口销售团队",
      matchHeroTitle: "根据您的应用匹配板材规格",
      inquiryHeroTitle: "更快速地发送完整询盘",
      packingHeroTitle: "出口包装与集装箱装柜支持",
      docHeroTitle: "根据订单需求准备出口文件",
      docHeroText: "出口前将根据产品、目的市场和买家海关要求确认单据和证书文件。",
      docCommFiles: "贸易单据",
      docCommText: "根据确认的订单数据准备商业发票、装箱单、销售合同及货运信息。",
      docCertFiles: "证书文件",
      docCertText: "根据产品和订单要求核对 FSC、CE、EPA TSCA VI、EUDR 或其他文件。",
      docLoadingRecords: "装运记录",
      docLoadingText: "可在发货前分享包装照片、装柜照片和唛头供买家核对。",
      docMatchTitle: "必须匹配的单据细节",
      docCertNote: "证书说明",
      docCertAvailability: "证书的可用性取决于产品类型、原材料来源、订单要求和目的市场。请在报价前确认所需文件。",
      viewCertSupport: "查看证书支持",
      shippingMarks: "运输唛头",
      moistureProtection: "防潮保护",
      documentConsistency: "单据一致性"
    },
    es: {
      brandTag: "JIALINDA",
      navProducts: "Productos",
      navTools: "Soporte de Suministro",
      navAbout: "Sobre Nosotros",
      navContact: "Contacto",
      navApplications: "Aplicaciones",
      navSearch: "Buscar",
      navHome: "Inicio",
      dropFilm: "Contrachapado filmado",
      dropCommercial: "Contrachapado comercial y especial",
      dropFurniture: "Paneles para muebles",
      dropEngineered: "Sistemas de madera de ingeniería",
      dropSelector: "Mapeo de productos",
      dropChecklist: "Guía de consulta",
      dropPacking: "Embalaje y carga",
      dropCompliance: "Documentos",
      dropCompany: "Descripción de la empresa",
      dropFactory: "Fábrica y control de calidad",
      dropCertificates: "Certificados",
      dropInventory: "Producción y QC",
      dropExport: "Mercados de exportación",
      dropConstruction: "Construcción",
      dropFurnitureApp: "Mobiliario",
      dropPackaging: "Embalaje",
      dropVehicles: "Vehículos",
      dropDecoration: "Decoración",
      dropEmail: "Consulta por correo",
      dropWhatsapp: "WhatsApp",
      dropRequirement: "Plantilla de requerimientos",
      blockboard: "Tablero enlistonado",
      applicationsTitle: "Paneles en uso",
      viewAllApps: "Ver todas las aplicaciones",
      viewAll: "Ver todo",
      aboutHeroTitle: "Sobre Xuzhou Jialinda",
      aboutHeroDesc1: "Xuzhou Jialinda Trading Co., Ltd. es un fabricante e exportador integrado especializado en productos de paneles a base de madera, incluyendo contrachapado filmado, contrachapado comercial, LVL, vigas H20, paneles de encofrado de construcción y materiales de construcción relacionados.",
      aboutHeroDesc2: "Con sede en Xuzhou, China, combinamos capacidades de producción en fábrica con servicios profesionales de exportación para proporcionar a los clientes globales un suministro estable, calidad constante, precios competitivos y soluciones de pedidos flexibles.",
      aboutViewFactory: "Ver proceso de fábrica",
      aboutCertificates: "Certificados",
      viewFactory: "Ver fábrica y QC",
      viewProductCenter: "Ver centro de productos",
      featuredProductsTitle: "Productos destacados para pedidos de exportación",
      featuredProductsText: "Cuatro productos solicitados con frecuencia que cubren construcción, paneles para muebles y sistemas de encofrado.",
      inquiryChecklistTitle: "Envíe una consulta completa más rápido",
      inquiryChecklistText: "Estos detalles nos ayudan a coincidir con la estructura del producto, el embalaje y los términos de cotización antes de responder.",
      faqTitle: "Preguntas comunes de los compradores",
      faqText: "Respuestas prácticas para importadores de contrachapado antes de enviar una primera consulta.",
      catalogFilters: "Filtros",
      catalogCategory: "Categoría",
      catalogAll: "Todo",
      viewDetails: "Ver detalles",
      productFilmFaced: "Contrachapado filmado marrón/rojo/negro",
      productPP: "Contrachapado con cara de plástico PP",
      productSlipResistant: "Contrachapado antideslizante",
      productFormply: "Formply",
      productOkoume: "Contrachapado de Ocume",
      productBirch: "Contrachapado de Abedul",
      productBintangor: "Contrachapado de Bintangor",
      productPine: "Contrachapado de Pino",
      productFancy: "Contrachapado decorativo",
      productFlexible: "Contrachapado flexible",
      searchPlaceholder: "Buscar contrachapado, MDF, LVL...",
      searchGo: "Ir",
      searchFilm: "Contrachapado filmado",
      searchMdf: "MDF / Aglomerado",
      searchLvl: "LVL / Viga H20",
      getQuote: "Contacto",
      heroEyebrow: "Directo de nuestra propia fábrica",
      heroTitle: "Suministro confiable de madera contrachapada para compradores globales.",
      heroText: "Xuzhou Jialinda ayuda a importadores, contratistas y fabricantes a obtener especificaciones estables de paneles de madera con embalaje de exportación, soporte OEM y entrega en contenedores.",
      heroMetricYears: "Años de experiencia",
      heroMetricLines: "Líneas de producción",
      heroMetricMarkets: "Mercados de exportación",
      browseProducts: "Explorar productos",
      sendRequirements: "Enviar requerimientos",
      quoteChecklist: "Guía de consulta",
      checkProduct: "Tipo de producto y aplicación",
      checkSize: "Tamaño, espesor y superficie",
      checkQty: "Cantidad y puerto de destino",
      checkPacking: "Necesidades de embalaje y documentación",
      proofFactory: "Base de producción",
      proofMarkets: "Mercados de exportación",
      proofPacking: "Soporte de embalaje",
      proofContainer: "Entrega de contenedores",
      certIntro: "Soporte de documentación común",
      productsEyebrow: "Arquitectura de productos",
      productsTitle: "Tres rutas de suministro para compradores globales.",
      productsText: "Mantenemos la página de inicio simple: el comprador ingresa por aplicación, luego confirma la especificación a través de la página del producto o consulta por correo electrónico.",
      productOneTitle: "Contrachapado filmado",
      productOneText: "Contrachapado filmado, contrachapado con cara de plástico PP, contrachapado antideslizante y formply para proyectos de hormigón.",
      productTwoTitle: "Paneles para muebles",
      productTwoText: "MDF, aglomerado y OSB para la producción de muebles, paneles interiores y estructurales.",
      productThreeTitle: "Sistemas de madera de ingeniería",
      productThreeText: "Componentes de LVL y vigas H20 para suministro de proyectos industriales, estructurales y de encofrado.",
      factoryEyebrow: "Prueba de fabricación",
      factoryTitle: "Producción organizada e inventario de paneles listo para enviar.",
      factoryText: "Esta sección debe hacer que el sitio se sienta como un socio de suministro real, no solo un catálogo.",
      factoryPointOneTitle: "Suministro estable",
      factoryPointOneText: "Planificación de stock para pedidos de importación recurrentes.",
      factoryPointTwoTitle: "Almacenamiento controlado",
      factoryPointTwoText: "Paneles organizados antes del embalaje y la carga.",
      factoryPointThreeTitle: "Contenedores mixtos",
      factoryPointThreeText: "Soporte para múltiples categorías de paneles en un plan de suministro.",
      processEyebrow: "Flujo de trabajo de producción",
      processTitle: "Un proceso claro desde el mapeo de paneles hasta la carga del contenedor.",
      stepOneTitle: "Definir",
      stepOneText: "Confirmar aplicación, grado, tamaño, espesor, superficie y mercado de destino.",
      stepTwoTitle: "Mapear",
      stepTwoText: "Recomendar núcleo, pegamento, recubrimiento, método de embalaje y ruta de documentación.",
      stepThreeTitle: "Producir",
      stepThreeText: "Organizar la producción de paneles, inspección, sellado de bordes, embalaje en palets y marcas.",
      stepFourTitle: "Cargar",
      stepFourText: "Preparar la carga del contenedor, fotos, documentos y archivos de especificaciones de pedidos recurrentes.",
      toolsEyebrow: "Soporte de suministro",
      toolsTitle: "Construido para compradores que necesitan un suministro estable de paneles de madera.",
      toolsText: "La página de inicio conecta las categorías de productos, la prueba de producción y el soporte de exportación.",
      toolOneTitle: "Suministro centrado en encofrados",
      toolOneText: "Contrachapado filmado, formply, LVL y vigas H20 organizados para uso en construcción.",
      toolTwoTitle: "Experiencia en embalaje de exportación",
      toolTwoText: "Embalaje en palets, marcas, envoltura y visibilidad de carga de contenedores para compradores remotos.",
      toolThreeTitle: "Soporte logístico",
      toolThreeText: "Gestión profesional de documentos de exportación y términos comerciales FOB/CIF.",
      toolFourTitle: "Proceso de consulta receptivo",
      toolFourText: "Envíe el producto, tamaño, espesor, cantidad y puerto de destino para obtener una respuesta de especificación práctica.",
      marketsEyebrow: "Mercados de exportación",
      marketsTitle: "Planificar el contenido por región.",
      marketOneTitle: "Europa",
      marketOneText: "Enfoque en EUDR, CE, clase de formaldehído y documentación rastreable.",
      marketTwoTitle: "América del Norte",
      marketTwoText: "Preparar EPA TSCA VI, preguntas relacionadas con CARB y archivos de especificaciones del producto.",
      marketThreeTitle: "Medio Oriente",
      marketThreeText: "Destacar el contrachapado para encofrados, el suministro de construcción y la durabilidad del embalaje de exportación.",
      marketFourTitle: "Oceanía",
      marketFourText: "Abordar la bioseguridad, el embalaje ISPM 15 y las necesidades de envío controladas por humedad.",
      faqOneQ: "¿Qué debo proporcionar para una cotización?",
      faqOneA: "Envíe el tipo de producto, la aplicación, el tamaño, el espesor, la superficie, la cantidad, el puerto de destino y los certificados requeridos.",
      faqTwoQ: "¿Puede JLD soportar el embalaje OEM?",
      faqTwoA: "Sí, la cotización puede incluir marcas del cliente, etiquetas de palets, requisitos de envoltura y documentación de envío.",
      faqThreeQ: "¿Con qué productos debo empezar?",
      faqThreeA: "Los compradores de construcción suelen empezar con contrachapado filmado o formply. Los compradores de muebles suelen empezar con MDF, aglomerado o tableros de melamina.",
      whyUsTitle: "Cómo apoyamos a los compradores de contrachapado",
      whyUsText: "Desde el mapeo del producto hasta el embalaje de exportación, el proceso de suministro está diseñado para pedidos de contenedores recurrentes.",
      whyUsCapTitle: "Base de suministro de paneles",
      whyUsCapDesc: "Contrachapado filmado, paneles para muebles, LVL y vigas H20 suministrados desde una capacidad de producción organizada.",
      whyUsCapFoot: "Producción estable",
      whyUsMatTitle: "Mapeo de especificaciones",
      whyUsMatDesc: "El núcleo, el pegamento, el espesor, la superficie y el embalaje coinciden con su aplicación y mercado de destino.",
      whyUsMatFoot: "Mapeo de especificaciones",
      whyUsMixTitle: "Planes de contenedores mixtos",
      whyUsMixDesc: "El contrachapado de construcción, los tableros de muebles y la madera de ingeniería se pueden organizar en un solo plan de suministro.",
      whyUsMixFoot: "Eficiencia de carga",
      whyUsOemTitle: "Soporte de embalaje OEM",
      whyUsOemDesc: "Se preparan marcas privadas, etiquetas de palets, envoltura y protección contra la humedad para el transporte marítimo largo.",
      whyUsOemFoot: "Marca privada",
      whyUsDocTitle: "Soporte de documentos",
      whyUsDocDesc: "Los documentos comerciales, la información de embalaje y los archivos de certificados relacionados con el mercado se pueden preparar con el envío.",
      whyUsDocFoot: "Estándares globales",
      whyUsQcTitle: "Visibilidad del pedido",
      whyUsQcDesc: "Las comprobaciones de producción, las fotos de embalaje y las fotos de carga de contenedores ayudan a los compradores extranjeros a seguir el pedido de forma remota.",
      whyUsQcFoot: "Seguridad del envío",
      globalTitle: "Suministro de paneles de madera a más de 50 mercados de exportación",
      globalText: "Desde proyectos de rascacielos en el Medio Oriente hasta fábricas de muebles en Europa y el Sudeste Asiático.",
      globalEyebrow: "Alcance Global",
      statCountries: "Países",
      statClients: "Clientes B2B",
      statYears: "Años de exportación",
      quoteEyebrow: "Consulta por correo electrónico",
      quoteTitle: "Envíe los requerimientos directamente a ventas.",
      quoteText: "Complete los campos de consulta y envíe. El sitio web abre un correo electrónico preparado para ventas sin almacenar datos del cliente.",
      formProduct: "Producto",
      formSize: "Tamaño / Espesor",
      formQuantity: "Cantidad",
      formPort: "Puerto de destino",
      formNotes: "Notas de embalaje, certificado o aplicación",
      emailSales: "Ventas por correo",
      whatsapp: "WhatsApp",
      footerProducts: "Centro de productos",
      footerLogoSub: "Fabricante y exportador de paneles de madera",
      footerTagline: "Suministro de fábrica para contrachapado, paneles de muebles y sistemas de madera de ingeniería con soporte de embalaje de exportación y entrega en contenedores.",
      footerEmailLabel: "Ventas por correo",
      footerCategories: "Categorías de productos",
      footerSupport: "Soporte de suministro",
      footerCompany: "Empresa",
      footerRights: "Todos los derechos reservados.",
      footerDesc: "JIALINDA es un fabricante y exportador de contrachapado con sede en Xuzhou, China.",
      rfqTitle: "SOLICITUD DE COTIZACIÓN",
      rfqSub: "Envíe sus requerimientos",
      rfqDesc: "Elija un método de contacto. Las especificaciones del producto se pueden completar junto con nuestro equipo de ventas.",
      rfqContactMethod: "Método de contacto preferido",
      rfqContactField: "Su contacto",
      rfqProductField: "Producto",
      rfqSizeField: "Tamaño / Espesor",
      rfqQtyField: "Cantidad",
      rfqPortField: "Puerto de destino",
      rfqNotesField: "Requerimientos adicionales",
      rfqNotesPlaceholder: "Necesidades de superficie, núcleo, pegamento, embalaje o certificado",
      rfqSubmit: "Enviar requerimientos",
      rfqFloating: "Obtener cotización",
      aboutLogPreparation: "01 Selección y pelado de troncos",
      aboutQCInspection: "05 Inspección de control de calidad",
      aboutExportPacking: "06 Embalaje y envío",
      catalogShowing: "Mostrando familias de productos",
      contactHeroTitle: "Contacte a nuestro equipo de ventas de exportación.",
      matchHeroTitle: "Coincida las especificaciones del panel con su aplicación.",
      inquiryHeroTitle: "Envíe una consulta completa más rápido.",
      packingHeroTitle: "Soporte de embalaje de exportación y carga de contenedores.",
      docHeroTitle: "Documentos de exportación preparados según los requisitos del pedido.",
      docHeroText: "Los documentos y archivos de certificados se confirman por producto, mercado de destino y requisitos aduaneros del comprador antes del envío.",
      docCommFiles: "Archivos comerciales",
      docCommText: "La factura comercial, la lista de empaque, el contrato de venta y la información del envío se preparan según los datos confirmados del pedido.",
      docCertFiles: "Archivos de certificados",
      docCertText: "FSC, CE, EPA TSCA VI, EUDR u otros archivos se verifican según el producto y el requisito del pedido.",
      docLoadingRecords: "Registros de carga",
      docLoadingText: "Las fotos de empaque, las fotos de carga y las marcas se pueden compartir para la revisión del comprador antes del envío.",
      docMatchTitle: "Detalles del documento que deben coincidir.",
      docCertNote: "Nota de certificado",
      docCertAvailability: "La disponibilidad del certificado depende del tipo de producto, la fuente de materia prima, el requisito del pedido y el mercado de destino. Confirme los archivos requeridos antes de la cotización.",
      viewCertSupport: "Ver soporte de certificados",
      shippingMarks: "Marcas de envío",
      moistureProtection: "Protección contra la humedad",
      documentConsistency: "Consistencia de documentos"
    },
    ar: {
      brandTag: "جياليندا",
      navProducts: "المنتجات",
      navTools: "دعم التوريد",
      navAbout: "من نحن",
      navContact: "اتصل بنا",
      navApplications: "التطبيقات",
      navSearch: "بحث",
      navHome: "الرئيسية",
      dropFilm: "خشب معاكس مغطى بالفيلم",
      dropCommercial: "خشب معاكس تجاري وخاص",
      dropFurniture: "ألواح الأثاث",
      dropEngineered: "أنظمة الخشب الهندسية",
      dropSelector: "مطابقة المنتجات",
      dropChecklist: "قائمة فحص الاستفسار",
      dropPacking: "التعبئة والتحميل",
      dropCompliance: "المستندات",
      dropCompany: "نبذة عن الشركة",
      dropFactory: "المصنع ومراقبة الجودة",
      dropCertificates: "الشهادات",
      dropInventory: "الإنتاج والجودة",
      dropExport: "أسواق التصدير",
      dropConstruction: "البناء والمقاولات",
      dropFurnitureApp: "صناعة الأثاث",
      dropPackaging: "التعبئة والتغليف",
      dropVehicles: "أرضيات المركبات",
      dropDecoration: "الديكور الداخلي",
      dropEmail: "استفسار عبر البريد",
      dropWhatsapp: "واتساب",
      dropRequirement: "نموذج المتطلبات",
      blockboard: "خشب السنديان (Blockboard)",
      applicationsTitle: "الألواح في الاستخدام",
      viewAll: "عرض الكل",
      viewDetails: "عرض التفاصيل",
      productSpecs: "المواصفات",
      aboutHeroTitle: "حول شوزهو جياليندا",
      aboutHeroDesc1: "شركة شوزهو جياليندا للتجارة المحدودة هي شركة متكاملة للتصنيع والتصدير متخصصة في منتجات الألواح الخشبية، بما في ذلك الخشب المعاكس المغطى بالفيلم، والخشب المعاكس التجاري، وLVL، وعوارض H20، وألواح القوالب الخرسانية ومواد البناء ذات الصلة.",
      aboutHeroDesc2: "يقع مقرنا في شوزهو، الصين، ونجمع بين قدرات الإنتاج المصنعي وخدمات التصدير الاحترافية لتزويد العملاء العالميين بتوريد مستقر، وجودة ثابتة، وأسعار تنافسية وحلول طلبات مرنة.",
      aboutViewFactory: "عرض عملية التصنيع",
      aboutCertificates: "الشهادات",
      catalogAll: "جميع المنتجات",
      catalogShowing: "عرض فئات المنتجات",
      contactHeroTitle: "اتصل بفريق مبيعات التصدير لدينا",
      matchHeroTitle: "طابق مواصفات الألواح مع تطبيقك",
      inquiryHeroTitle: "أرسل استفساراً كاملاً بشكل أسرع",
      packingHeroTitle: "دعم التعبئة للتصدير وتحميل الحاويات",
      docHeroTitle: "وثائق التصدير المعدة حسب متطلبات الطلب",
      docHeroText: "يتم تأكيد المستندات وملفات الشهادات حسب المنتج وسوق الوجهة ومتطلبات الجمارك قبل الشحن.",
      docCommFiles: "الملفات التجارية",
      docCommText: "يتم إعداد الفاتورة التجارية وقائمة التعبئة وعقد البيع ومعلومات الشحن بناءً على بيانات الطلب المؤكدة.",
      docCertFiles: "ملفات الشهادات",
      docCertText: "يتم فحص ملفات FSC أو CE أو EPA TSCA VI أو EUDR أو غيرها وفقاً لمتطلبات المنتج والطلب.",
      docLoadingRecords: "سجلات التحميل",
      docLoadingText: "يمكن مشاركة صور التعبئة وصور التحميل والعلامات لمراجعة المشتري قبل الشحن.",
      docMatchTitle: "تفاصيل المستندات التي يجب أن تتطابق",
      docCertNote: "ملاحظة الشهادة",
      docCertAvailability: "يعتمد توفر الشهادة على نوع المنتج ومصدر المواد الخام ومتطلبات الطلب وسوق الوجهة. قم بتأكيد الملفات المطلوبة قبل عرض السعر.",
      viewCertSupport: "عرض دعم الشهادات",
      shippingMarks: "علامات الشحن",
      moistureProtection: "حماية من الرطوبة",
      documentConsistency: "اتساق المستندات",
      searchPlaceholder: "بحث عن خشب معاكس، MDF، LVL...",
      searchGo: "بحث",
      searchFilm: "خشب معاكس مغطى بالفيلم",
      searchMdf: "MDF / خشب حبيبي",
      searchLvl: "LVL / عوارض H20",
      getQuote: "اتصل بنا",
      heroEyebrow: "مباشرة من مصنعنا الخاص",
      heroTitle: "توريد موثوق للخشب المعاكس للمشترين العالميين.",
      heroText: "تساعد شركة شوزهو جياليندا المستوردين والمقاولين والمصنعين في الحصول على ألواح خشبية بمواصفات ثابتة مع تغليف للتصدير ودعم OEM وتسليم الحاويات.",
      heroMetricYears: "سنوات الخبرة",
      heroMetricLines: "خطوط الإنتاج",
      heroMetricMarkets: "أسواق التصدير",
      browseProducts: "تصفح المنتجات",
      sendRequirements: "إرسال المتطلبات",
      quoteChecklist: "دليل الاستفسار",
      checkProduct: "نوع المنتج والتطبيق",
      checkSize: "المقاس والسماكة والسطح",
      checkQty: "الكمية وميناء الوصول",
      checkPacking: "احتياجات التعبئة والمستندات",
      proofFactory: "قاعدة الإنتاج",
      proofMarkets: "أسواق التصدير",
      proofPacking: "دعم التعبئة",
      proofContainer: "تسليم الحاويات",
      certIntro: "دعم المستندات الشائعة",
      productsEyebrow: "تشكيلة المنتجات",
      productsTitle: "ثلاثة مسارات توريد للمشترين العالميين.",
      productsText: "نوفر حلولاً متكاملة تبدأ من اختيار التطبيق المناسب وصولاً إلى تأكيد المواصفات الفنية الدقيقة.",
      productOneTitle: "خشب معاكس مغطى بالفيلم",
      productOneText: "خشب بليود مغطى بالفيلم، وبلاستيك PP، وخشب مقاوم للانزلاق لمشاريع الخرسانة.",
      productTwoTitle: "ألواح الأثاث",
      productTwoText: "أف ألواح MDF، والخشب الحبيبي، وOSB لصناعة الأثاث والديكور الداخلي.",
      productThreeTitle: "أنظمة الخشب الهندسية",
      productThreeText: "منتجات LVL وعوارض H20 الخشبية للتطبيقات الإنشائية والصناعية.",
      factoryEyebrow: "دليل التصنيع",
      factoryTitle: "إنتاج منظم ومخزون ألواح جاهز للشحن.",
      factoryText: "نركز على كفاءة التخزين والقدرة على تلبية الطلبات المتكررة بمواصفات دقيقة.",
      factoryPointOneTitle: "توريد مستقر",
      factoryPointOneText: "تخطيط المخزون لطلبات الاستيراد المتكررة.",
      factoryPointTwoTitle: "تخزين محكوم",
      factoryPointTwoText: "تنظيم الألواح قبل التعبئة والتحميل في الحاويات.",
      factoryPointThreeTitle: "حاويات مختلطة",
      factoryPointThreeText: "إمكانية شحن فئات متعددة من الألواح في خطة توريد واحدة.",
      processEyebrow: "سير العمل",
      processTitle: "عملية واضحة من مطابقة الألواح حتى تحميل الحاوية.",
      stepOneTitle: "تحديد",
      stepOneText: "تأكيد التطبيق، الدرجة، المقاس، السماكة، السطح والسوق المستهدف.",
      stepTwoTitle: "مطابقة",
      stepTwoText: "التوصية باللب (Core)، الغراء، الطبقة السطحية وطريقة التعبئة.",
      stepThreeTitle: "إنتاج",
      stepThreeText: "ترتيب الإنتاج، الفحص، ختم الحواف، التعبئة على طبليات والوسم.",
      stepFourTitle: "تحميل",
      stepFourText: "إعداد تحميل الحاوية، الصور، المستندات وملفات المواصفات للطلبات المستقبلية.",
      toolsEyebrow: "دعم التوريد",
      toolsTitle: "مصمم للمشترين الذين يحتاجون لتوريد مستقر للألواح الخشبية.",
      toolsText: "نربط بين فئات المنتجات ودليل الإنتاج ودعم التصدير قبل تقديم الطلب.",
      toolOneTitle: "توريد متخصص للقوالب الخرسانية",
      toolOneText: "خشب معاكس مغطى بالفيلم، LVL، وعوارض H20 منظمة للاستخدام الإنشائي.",
      toolTwoTitle: "خبرة في التعبئة للتصدير",
      toolTwoText: "التعبئة على طبليات، الوسم، التغليف ورؤية واضحة للتحميل للمشترين.",
      toolThreeTitle: "الدعم اللوجستي",
      toolThreeText: "إدارة مستندات التصدير وشروط الشحن FOB/CIF باحترافية.",
      toolFourTitle: "عملية استفسار سريعة",
      toolFourText: "أرسل المنتج والمقاس والميناء للحصول على رد فني وعرض سعر عملي.",
      marketsEyebrow: "أسواق التصدير",
      marketsTitle: "تخطيط المحتوى حسب المنطقة الجغرافية.",
      marketOneTitle: "أوروبا",
      marketOneText: "التركيز على معايير EUDR، CE، فئات الفورمالديهايد والمستندات القابلة للتتبع.",
      marketTwoTitle: "أمريكا الشمالية",
      marketTwoText: "إعداد ملفات EPA TSCA VI، CARB ومواصفات المنتج الفنية.",
      marketThreeTitle: "الشرق الأوسط",
      marketThreeText: "تسليط الضوء على خشب القوالب الخرسانية ومتانة التعبئة للتصدير.",
      marketFourTitle: "أوقيانوسيا",
      marketFourText: "التعامل مع متطلبات الأمن الحيوي، تعبئة ISPM 15 والشحن المحكوم بالرطوبة.",
      faqEyebrow: "أسئلة المشترين",
      faqTitle: "نجيب على استفساراتك قبل إرسال بريدك الإلكتروني.",
      faqOneQ: "ما هي المعلومات المطلوبة للحصول على عرض سعر؟",
      faqOneA: "يرجى إرسال نوع المنتج، التطبيق، المقاس، السماكة، السطح، الكمية، ميناء الوصول والشهادات المطلوبة.",
      faqTwoQ: "هل تدعم شركة جياليندا تعبئة OEM؟",
      faqTwoA: "نعم، يمكن أن يشمل عرض السعر علامات العميل التجارية، ملصقات الطبليات، متطلبات التغليف ومستندات الشحن الخاصة.",
      faqThreeQ: "بأي المنتجات يجب أن أبدأ؟",
      faqThreeA: "مشترو قطاع البناء يبدأون عادة بخشب البليود المغطى بالفيلم. مشترو الأثاث يبدأون بـ MDF أو الألواح الحبيبية أو الميلامين.",
      whyUsTitle: "كيف ندعم مشتري الخشب المعاكس",
      whyUsText: "من مطابقة المنتج إلى التعبئة للتصدير، تم بناء عملية التوريد حول طلبات الحاويات المتكررة.",
      whyUsCapTitle: "قاعدة توريد الألواح",
      whyUsCapDesc: "خشب معاكس، ألواح أثاث، LVL وعوارض H20 يتم توريدها من طاقة إنتاجية منظمة.",
      whyUsCapFoot: "إنتاج مستقر",
      whyUsMatTitle: "مطابقة المواصفات",
      whyUsMatDesc: "يتم مطابقة اللب، الغراء، السماكة، السطح والتعبئة مع تطبيقك وسوقك المستهدف.",
      whyUsMatFoot: "دقة المواصفات",
      whyUsMixTitle: "خطط الحاويات المختلطة",
      whyUsMixDesc: "يمكن ترتيب خشب البناء وألواح الأثاث والخشب الهندسي في خطة توريد واحدة.",
      whyUsMixFoot: "كفاءة الشحن",
      whyUsOemTitle: "دعم تعبئة OEM",
      whyUsOemDesc: "إعداد العلامات الخاصة، ملصقات الطبليات، التغليف وحماية الرطوبة للنقل البحري الطويل.",
      whyUsOemFoot: "علامة خاصة",
      whyUsDocTitle: "دعم المستندات",
      whyUsDocDesc: "إعداد المستندات التجارية، معلومات التعبئة وملفات الشهادات المتعلقة بالسوق مع الشحنة.",
      whyUsDocFoot: "معايير عالمية",
      whyUsQcTitle: "شفافية الطلب",
      whyUsQcDesc: "فحوصات الإنتاج، صور التعبئة وصور تحميل الحاويات تساعد المشترين على متابعة الطلب عن بعد.",
      whyUsQcFoot: "سلامة الشحنة",
      globalTitle: "توريد الألواح الخشبية إلى أكثر من 50 سوقاً عالمياً",
      globalText: "من المشاريع الشاهقة في الشرق الأوسط إلى مصانع الأثاث في أوروبا وجنوب شرق آسيا، تحظى ألواح جياليندا بثقة المستوردين والمقاولين.",
      globalEyebrow: "الوصول العالمي",
      statCountries: "دولة",
      statClients: "عميل B2B",
      statYears: "سنوات التصدير",
      quoteEyebrow: "استفسار عبر البريد",
      quoteTitle: "أرسل متطلباتك مباشرة إلى قسم المبيعات.",
      quoteText: "املأ حقول الاستفسار وأرسلها. سيفتح الموقع بريداً إلكترونياً معداً مسبقاً للمبيعات.",
      formProduct: "المنتج",
      formSize: "المقاس / السماكة",
      formQuantity: "الكمية",
      formPort: "ميناء الوصول",
      formNotes: "ملاحظات التعبئة أو الشهادات أو التطبيق",
      emailSales: "بريد المبيعات",
      whatsapp: "واتساب",
      footerProducts: "مركز المنتجات",
      footerLogoSub: "مصنع ومصدر للألواح الخشبية",
      footerTagline: "توريد مصنعي للخشب المعاكس، ألواح الأثاث وأنظمة الخشب الهندسية مع دعم التعبئة والتحميل.",
      footerEmailLabel: "بريد المبيعات",
      footerCategories: "فئات المنتجات",
      footerSupport: "دعم التوريد",
      footerCompany: "الشركة",
      footerRights: "جميع الحقوق محفوظة.",
      footerDesc: "جياليندا هي شركة مصنعة ومصدرة للخشب المعاكس مقرها في شوزهو، الصين.",
      rfqTitle: "طلب عرض سعر",
      rfqSub: "أرسل متطلباتك",
      rfqDesc: "اختر وسيلة اتصال واحدة. يمكن استكمال مواصفات المنتج مع فريق المبيعات لدينا.",
      rfqContactMethod: "وسيلة الاتصال المفضلة",
      rfqContactField: "اتصالك",
      rfqProductField: "المنتج",
      rfqSizeField: "المقاس / السماكة",
      rfqQtyField: "الكمية",
      rfqPortField: "ميناء الوصول",
      rfqNotesField: "متطلبات إضافية",
      rfqNotesPlaceholder: "احتياجات السطح، اللب، الغراء، التعبئة أو الشهادات",
      rfqSubmit: "إرسال المتطلبات",
      rfqFloating: "احصل على سعر",
      aboutLogPreparation: "01 اختيار السجلات وتقشيرها",
      aboutQCInspection: "05 مراقبة الجودة",
      aboutExportPacking: "06 التعبئة والشحن",
      catalogShowing: "عرض فئات المنتجات",
      contactHeroTitle: "اتصل بفريق مبيعات التصدير لدينا",
      matchHeroTitle: "طابق مواصفات الألواح مع تطبيقك",
      inquiryHeroTitle: "أرسل استفساراً كاملاً بشكل أسرع",
      packingHeroTitle: "دعم التعبئة للتصدير وتحميل الحاويات",
      docHeroTitle: "وثائق التصدير المعدة حسب متطلبات الطلب",
      docHeroText: "يتم تأكيد المستندات وملفات الشهادات حسب المنتج وسوق الوجهة ومتطلبات الجمارك قبل الشحن.",
      docCommFiles: "الملفات التجارية",
      docCommText: "يتم إعداد الفاتورة التجارية وقائمة التعبئة وعقد البيع ومعلومات الشحن بناءً على بيانات الطلب المؤكدة.",
      docCertFiles: "ملفات الشهادات",
      docCertText: "يتم فحص ملفات FSC أو CE أو EPA TSCA VI أو EUDR أو غيرها وفقاً لمتطلبات المنتج والطلب.",
      docLoadingRecords: "سجلات التحميل",
      docLoadingText: "يمكن مشاركة صور التعبئة وصور التحميل والعلامات لمراجعة المشتري قبل الشحن.",
      docMatchTitle: "تفاصيل المستندات التي يجب أن تتطابق",
      docCertNote: "ملاحظة الشهادة",
      docCertAvailability: "يعتمد توفر الشهادة على نوع المنتج ومصدر المواد الخام ومتطلبات الطلب وسوق الوجهة. قم بتأكيد الملفات المطلوبة قبل عرض السعر.",
      viewCertSupport: "عرض دعم الشهادات",
      shippingMarks: "علامات الشحن",
      moistureProtection: "حماية من الرطوبة",
      documentConsistency: "اتساق المستندات"
    }
  };

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  var mobileNavQuery = window.matchMedia("(max-width: 1200px)");

  function setMobileNavItemExpanded(item, shouldExpand) {
    if (!item) return;
    var dropdown = item.querySelector(":scope > .v2-dropdown");
    var trigger = item.querySelector(":scope > .v2-nav-trigger");
    if (!dropdown) return;
    if (trigger) trigger.setAttribute("aria-expanded", String(shouldExpand));

    if (shouldExpand) {
      item.classList.add("is-mobile-expanded");
      dropdown.style.maxHeight = "0px";
      dropdown.offsetHeight;
      dropdown.style.maxHeight = (dropdown.scrollHeight + 32) + "px";
      return;
    }

    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    dropdown.offsetHeight;
    item.classList.remove("is-mobile-expanded");
    dropdown.style.maxHeight = "0px";
  }

  function resetMobileNavItems() {
    if (!nav) return;
    nav.querySelectorAll(".v2-nav-item").forEach(function (item) {
      item.classList.remove("is-mobile-expanded");
      var trigger = item.querySelector(":scope > .v2-nav-trigger");
      var dropdown = item.querySelector(":scope > .v2-dropdown");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      if (dropdown) dropdown.style.maxHeight = "";
    });
  }

  function closeMenu() {
    document.body.classList.remove("is-menu-open");
    if (header) header.classList.remove("is-open");
    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    }
    resetMobileNavItems();
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
    window.location.href = "mailto:info@jldplywood.com?subject=" +
      encodeURIComponent("Jialinda wood panel inquiry") +
      "&body=" + encodeURIComponent(body);
  }

  function setHeroTitle(node, text, lang) {
    var highlighted = text.replace("plywood", '<span class="v2-title-accent">plywood</span>');
    if (lang === "ar") {
      highlighted = text.replace("الخشب المعاكس", '<span class="v2-title-accent">الخشب المعاكس</span>');
    }
    node.innerHTML = highlighted;
  }

  function setLanguage(lang) {
    var copy = dictionary[lang] || dictionary.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    // Re-query translatable elements to include dynamically injected ones (like footer)
    var allTranslatable = document.querySelectorAll("[data-i18n]");
    var allPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");

    allTranslatable.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (!copy[key]) return;
      if (key === "heroTitle") {
        setHeroTitle(node, copy[key], lang);
        return;
      }
      node.textContent = copy[key];
    });

    allPlaceholders.forEach(function (node) {
      var key = node.getAttribute("data-i18n-placeholder");
      if (copy[key]) node.setAttribute("placeholder", copy[key]);
    });

    var allLangButtons = document.querySelectorAll("[data-lang]");
    allLangButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang") === lang);
    });
    if (langCurrent) {
      var displayLang = lang.toUpperCase();
      if (lang === "ar") displayLang = "AR";
      langCurrent.textContent = displayLang;
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
    }, { threshold: 0.05 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (menuButton && header) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      document.body.classList.toggle("is-menu-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  // Flagship v3.5: Dynamic Counter Engine
  var countStarted = false;
  function startCounting() {
    if (countStarted) return;
    var stats = document.querySelectorAll(".stat-item strong");
    stats.forEach(function (stat) {
      var target = parseInt(stat.textContent);
      if (!Number.isFinite(target)) return;
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
      var trigger = event.target.closest(".v2-nav-trigger");
      if (trigger && mobileNavQuery.matches) {
        var item = trigger.closest(".v2-nav-item");
        if (item && item.querySelector(":scope > .v2-dropdown")) {
          event.preventDefault();
          var willExpand = !item.classList.contains("is-mobile-expanded");
          nav.querySelectorAll(".v2-nav-item.is-mobile-expanded").forEach(function (openItem) {
            if (openItem !== item) setMobileNavItemExpanded(openItem, false);
          });
          setMobileNavItemExpanded(item, willExpand);
          return;
        }
      }
      if (event.target.tagName === "A") closeMenu();
    });
  }

  mobileNavQuery.addEventListener("change", function (event) {
    if (!event.matches) resetMobileNavItems();
  });

  productMegaMenus.forEach(function (menu) {
    var groups = menu.querySelectorAll(".v2-dropdown-group");

    function activateGroup(activeGroup) {
      groups.forEach(function (group) {
        group.classList.toggle("is-active", group === activeGroup);
      });
    }

    if (groups.length && !menu.querySelector(".v2-dropdown-group.is-active")) {
      activateGroup(groups[0]);
    }

    groups.forEach(function (group) {
      group.addEventListener("mouseenter", function () {
        activateGroup(group);
      });
      group.addEventListener("focusin", function () {
        activateGroup(group);
      });
    });

    menu.addEventListener("mouseleave", function () {
      if (groups.length) activateGroup(groups[0]);
    });
  });

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

  if (floatingContact && floatingContactToggle) {
    floatingContactToggle.addEventListener("click", function () {
      var isOpen = floatingContact.classList.toggle("is-open");
      floatingContactToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (!floatingContact.contains(event.target)) {
        floatingContact.classList.remove("is-open");
        floatingContactToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        floatingContact.classList.remove("is-open");
        floatingContactToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  catalogFilters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      catalogFilters.forEach(function (item) {
        item.classList.toggle("is-active", item === filter);
      });
    });
  });

  document.addEventListener("click", function (e) {
    var langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      var lang = langBtn.getAttribute("data-lang");
      setLanguage(lang);
      closeMenu(); // Close mobile menu if open
      var panel = document.querySelector(".v2-lang-panel");
      var trigger = document.querySelector(".v2-lang-current");
      if (panel) panel.classList.remove("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      return;
    }

    var trigger = e.target.closest(".v2-lang-current");
    var panel = document.querySelector(".v2-lang-panel");
    if (trigger && panel) {
      e.stopPropagation();
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", !isExpanded);
      panel.classList.toggle("is-open", !isExpanded);
    } else if (panel && !panel.contains(e.target)) {
      var activeTrigger = document.querySelector(".v2-lang-current");
      if (activeTrigger) activeTrigger.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
    }
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  showSlide(0);
  restartSlideTimer();

  var initialLang = "en";
  try {
    initialLang = localStorage.getItem("blxing-home-lang") || "en";
  } catch (error) {}
  setLanguage(initialLang);
})();
