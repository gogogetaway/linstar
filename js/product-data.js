(function () {
  function productImages(folder, prefix, alt) {
    return [1, 2, 3].map(function (number) {
      return {
        src: "assets/products/" + folder + "/" + prefix + "-" + number + ".jpg",
        alt: alt + " image " + number
      };
    });
  }

  function commercialPlywoodProduct(title, folder, prefix, summary, face) {
    return {
      image: "assets/products/" + folder + "/" + prefix + "-1.jpg",
      images: productImages(folder, prefix, title),
      alt: title,
      groupHash: "commercial-panels",
      technicalSpecTable: true,
      locales: {
        en: {
          title: title,
          category: "Commercial & Specialty Plywood",
          summary: summary,
          tags: [face + " face", "Multiple grades", "Custom sizes", "Furniture plywood"],
          detailTitle: face + "-faced plywood for furniture and general woodworking.",
          detailText: title + " combines a selected " + face.toLowerCase() + " face and back with a plywood core for furniture, cabinetry, interiors, packing and general panel applications. Face grade, core construction, glue and dimensions can be matched to the buyer's market.",
          note: "Confirm face and back grade, core, glue, size, thickness, quantity and destination port before quotation.",
          specTitle: "Technical specifications",
          specs: [
            ["Face / back", face + " or buyer-specified back veneer"],
            ["Core", "Poplar, eucalyptus, birch, pine, tropical hardwood or combi"],
            ["Grade", "BB/BB, BB/CC, DBB/CC, CC/CC, C/D, D/E or custom"],
            ["Glue", "E1, E2, MR, melamine WBP or phenolic WBP"],
            ["Standard size", "1220 x 2440, 915 x 1830, 1200 x 2400 or 1250 x 2500 mm"],
            ["Special size", "Door size and long-panel sizes available"],
            ["Application", "Furniture, interiors, packing and general woodworking"],
            ["Packing", "Export pallets with wrapping and shipping marks"]
          ],
          advantagesTitle: "Why buyers use " + title.toLowerCase(),
          advantages: [
            ["Selected face", face + " veneer provides a consistent visible surface."],
            ["Flexible specification", "Core, glue, grade and dimensions can be matched to the order."],
            ["Broad application", "Suitable for furniture, interiors and general panel work."],
            ["Export supply", "Pallet packing and shipping marks can be arranged."]
          ],
          applications: ["Furniture and cabinet components", "Interior panels and partitions", "Packing and general woodworking", "Wholesale plywood distribution"]
        }
      }
    };
  }

  var products = {
    "film-faced-plywood": {
      image: "assets/upload/202531214123263859.jpg",
      alt: "Film faced plywood panel",
      images: [
        {
          src: "assets/upload/202531214123263859.jpg",
          alt: "Brown film faced plywood panel"
        },
        {
          src: "assets/products/film-faced-plywood/red.png",
          alt: "Red film faced plywood panel"
        },
        {
          src: "assets/products/film-faced-plywood/black.png",
          alt: "Black film faced plywood panel"
        }
      ],
      technicalSpecTable: true,
      groupHash: "formwork-plywood",
      locales: {
        en: {
          title: "Film Faced Plywood",
          category: "Formwork & Construction Plywood",
          summary: "Structural engineered wood panel for concrete formwork and heavy-duty industrial use, available in multiple sizes, cores, glues and film colors.",
          tags: ["4-35 mm", "Custom sizes", "15-20 reuses", "WBP / MLM / MR"],
          detailTitle: "Designed for concrete formwork and heavy-duty use.",
          detailText: "Film Faced Plywood is a structural engineered wood panel specially designed for concrete formwork and heavy-duty industrial usage. The board avoids direct contact between wet concrete and wood core, greatly reducing board corrosion and guaranteeing mirror-smooth concrete surface without extra polishing work.",
          note: "For quotation, confirm size, thickness, film color, core, glue, quantity, packing marks and destination port.",
          specTitle: "Technical specifications",
          specs: [
            ["Size (mm)", "610 x 2440, 625 x 2500, 1220 x 2440, 1250 x 2500; custom sizes available"],
            ["Brand", "JLD / KALINDA / Linstar"],
            ["Thickness (mm)", "4, 6, 9, 12, 15, 18, 21, 35"],
            ["Thickness tolerance", "+/- 0.5 mm"],
            ["Film color", "Brown, black, red, yellow or blue"],
            ["Core", "Birch, eucalyptus, poplar, pine, combi or recycled"],
            ["Glue", "WBP / MLM / MR"],
            ["Reuse times", "15-20"],
            ["Density", "500-630 kg/m³"],
            ["Moisture content", "8%-12%"],
            ["Edge sealing", "Sealed with waterproof paint"],
            ["Packing", "Export pallets, wrapping, marks and container loading support"]
          ],
          advantagesTitle: "Why buyers use film faced plywood",
          advantages: [
            ["Clean concrete finish", "Smooth film surface helps improve concrete release and reduce finishing work."],
            ["Moisture resistance", "Coated face and sealed edge options help limit water absorption during site use."],
            ["Custom structure", "Core, glue, thickness and film color can be matched to project requirements."],
            ["Export-ready supply", "Pallet packing, shipping marks and loading photos can be arranged for import buyers."]
          ],
          applications: [
            "Concrete wall, slab and bridge formwork",
            "Construction site reusable panels",
            "Project supply for contractors and formwork distributors",
            "Container orders with OEM marks and export packing"
          ]
        }
      }
    },
    "pp-plastic-faced-plywood": {
      image: "assets/products/pp-plastic-faced-plywood/pp-colors.jpeg",
      alt: "PP plastic faced plywood panel",
      images: [
        {
          src: "assets/products/pp-plastic-faced-plywood/pp-colors.jpeg",
          alt: "PP plastic faced plywood colors and core layers"
        },
        {
          src: "assets/products/pp-plastic-faced-plywood/pp-factory.jpeg",
          alt: "Green PP plastic faced plywood in production"
        },
        {
          src: "assets/products/pp-plastic-faced-plywood/pp-surface.jpeg",
          alt: "Green PP plastic faced plywood surface and edge"
        }
      ],
      technicalSpecTable: true,
      groupHash: "formwork-plywood",
      locales: {
        en: {
          title: "PP Plastic Faced Plywood",
          category: "Formwork & Construction Plywood",
          summary: "PP plastic faced formwork plywood with a durable waterproof surface, designed for repeated use in high-rise, bridge and humid construction projects.",
          tags: ["12-21 mm", "25-30 reuses", "PP surface", "Melamine / Phenolic"],
          detailTitle: "Durable PP surface for repeated formwork use.",
          detailText: "PP film faced plywood is hot-pressed with thick polypropylene plastic film on both sides, bonded with WBP melamine modified glue. Outstanding waterproof, no release agent needed, reusable 25-30 times for high-rise, bridge and humid construction projects.",
          note: "For quotation, confirm size, thickness, PP color, core, glue, quantity, packing marks and destination port.",
          specTitle: "Technical specifications",
          specs: [
            ["Size (mm)", "610 x 2440, 625 x 2500, 1220 x 2440, 1250 x 2500; custom sizes available"],
            ["Brand", "JLD / KALINDA / Linstar"],
            ["Thickness (mm)", "12, 15, 18, 21"],
            ["Thickness tolerance", "+/- 0.5 mm"],
            ["PP color", "Green, blue or multicolour"],
            ["Core", "Birch, eucalyptus, poplar, pine, hardwood or combi"],
            ["Glue", "Melamine / Phenolic"],
            ["Reuse times", "25-30"],
            ["Density", "550-680 kg/m³"],
            ["Moisture content", "8%-12%"],
            ["Edge sealing", "Sealed with waterproof paint"],
            ["Packing", "Export pallets, wrapping, marks and container loading support"]
          ],
          advantagesTitle: "Why buyers use PP plastic faced plywood",
          advantages: [
            ["Easy cleaning", "Plastic face can be cleaned more easily after concrete contact."],
            ["Durable surface", "PP overlay helps resist abrasion during normal formwork handling."],
            ["Specification control", "Core, glue, size and edge treatment can be adjusted by project."],
            ["Export handling", "Packing, marks and loading photos support remote purchasing."]
          ],
          applications: [
            "Concrete formwork panels for repeated site use",
            "Projects needing easier panel cleaning",
            "Contractor and formwork distributor supply",
            "Mixed container orders with film faced plywood"
          ]
        }
      }
    },
    "slip-resistant-plywood": {
      image: "assets/products/slip-resistant-plywood/slip-resistant-surface.jpeg",
      images: [
        {
          src: "assets/products/slip-resistant-plywood/slip-resistant-surface.jpeg",
          alt: "Slip-resistant plywood with hexagonal anti-slip surface"
        },
        {
          src: "assets/products/slip-resistant-plywood/slip-resistant-panels.jpeg",
          alt: "Slip-resistant plywood panels showing surface and edge"
        },
        {
          src: "assets/products/slip-resistant-plywood/slip-resistant-core.jpeg",
          alt: "Slip-resistant plywood core layers"
        }
      ],
      alt: "Slip-resistant plywood panel",
      groupHash: "formwork-plywood",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "Slip-resistant Plywood",
          category: "Anti-slip Panel",
          summary: "High-performance anti-slip plywood for wet, oily, dusty and high-traffic working environments.",
          tags: ["9-25 mm", "Anti-slip surface", "550-680 kg/m³", "Custom sizes"],
          detailTitle: "Engineered safety surface for demanding environments.",
          detailText: "Our high-performance anti-slip board is a customized safety building and industrial material, specially engineered to solve slip risks in wet, oily, dusty, and high-traffic environments. Adopting advanced embossed texture, perforated anti-skid and integral molding technology, the board features high friction coefficient, stable structure and strong load-bearing capacity.",
          note: "Send the required size, thickness, anti-slip pattern, core, glue, quantity and destination port for specification matching.",
          specTitle: "Technical specifications",
          specs: [
            ["Size (mm)", "610 x 2440, 625 x 2500, 1220 x 2440, 1250 x 2500 or custom"],
            ["Thickness (mm)", "9-25"],
            ["Thickness tolerance (mm)", "+/-0.5"],
            ["Surface", "Wire mesh, hexagon or other anti-slip patterns"],
            ["Core", "Poplar, hardwood or combi core"],
            ["Glue", "Exterior or moisture-resistant glue options"],
            ["Density (kg/m³)", "550-680"],
            ["Moisture content (%)", "8-12"],
            ["Edge sealing", "Sealed edge available"],
            ["Packing", "Export pallets, wrapping, marks and container loading support"]
          ],
          advantagesTitle: "Why buyers use slip-resistant plywood",
          advantages: [
            ["Safer surface", "Textured face improves grip for walking and platform use."],
            ["Strong panel base", "Plywood core gives practical strength for site and vehicle applications."],
            ["Custom pattern", "Surface pattern, thickness and core can be matched to buyer demand."],
            ["Bulk supply", "Suitable for repeat container orders and distributor stock."]
          ],
          applications: [
            "Scaffolding platforms and temporary flooring",
            "Vehicle floors, trailers and loading decks",
            "Industrial walkways and service platforms",
            "Construction site access panels"
          ]
        }
      }
    },
    formply: {
      image: "assets/upload/20254814242521166.png",
      alt: "Formply panel",
      images: [
        {
          src: "assets/upload/20254814242521166.png",
          alt: "JLD F17 Formply export package"
        },
        {
          src: "assets/products/formply/formply-panels.png",
          alt: "Black phenolic Formply panels and core layers"
        },
        {
          src: "assets/products/formply/formply-factory-stack.png",
          alt: "Full-size Formply panels stacked at the factory"
        }
      ],
      technicalSpecTable: true,
      groupHash: "formwork-plywood",
      locales: {
        en: {
          title: "Formply",
          category: "Formwork & Construction Plywood",
          summary: "Structural phenolic film-faced plywood manufactured for concrete pouring and Australian formwork supply.",
          tags: ["F14 / F17 / F22", "AS/NZS 2269", "A-bond glue", "Black HDO film"],
          detailTitle: "Structural Formply for concrete pouring construction.",
          detailText: "Formply, also known as formwork plywood, is a structural phenolic film-faced plywood exclusively manufactured for concrete pouring construction. Different from common film faced plywood, Formply follows strict Australia & New Zealand standards AS/NZS 2269 & AS 6669, with fixed structural stress grades F14, F17 and F22. It is constructed with cross-laminated high-density hardwood veneers, bonded by fully waterproof phenol formaldehyde A-bond glue, and covered with double-sided black HDO phenolic resin film. All panel edges are fully sealed to stop water penetration and veneer delamination.",
          note: "For quotation, confirm stress grade, size, thickness, film requirement, quantity, packing marks and destination port.",
          specTitle: "Technical specifications",
          specs: [
            ["Standard", "AS/NZS 2269 and AS 6669"],
            ["Stress grade", "F14, F17 or F22"],
            ["Standard size", "1200 x 1800, 1200 x 2400 or project-specified size"],
            ["Thickness", "12, 15, 17, 18 or 21 mm"],
            ["Surface", "Double-sided black HDO phenolic resin film"],
            ["Core", "Cross-laminated high-density hardwood veneers"],
            ["Glue", "Fully waterproof phenol formaldehyde A-bond"],
            ["Edge sealing", "All panel edges fully sealed"],
            ["Application", "Concrete pouring and structural formwork"],
            ["Packing", "Export pallets, protective wrapping and shipping marks"]
          ],
          advantagesTitle: "Why buyers use formply",
          advantages: [
            ["Concrete finish", "Overlay surface supports cleaner concrete release."],
            ["Project matching", "Specifications can be matched to contractor habits and market demand."],
            ["Stable dimensions", "Panel sizes and thicknesses are controlled for repeat orders."],
            ["Export support", "Packing marks, documents and loading photos can be arranged."]
          ],
          applications: [
            "Building and infrastructure concrete formwork",
            "Contractor project purchasing",
            "Distributor stock for construction markets",
            "OEM branded formwork panel supply"
          ]
        }
      }
    },
    "okoume-plywood": commercialPlywoodProduct("Okoume Plywood", "okoume-plywood", "okoume", "Smooth okoume-faced plywood for furniture, cabinetry, interiors and general woodworking.", "Okoume"),
    "birch-plywood": commercialPlywoodProduct("Birch Plywood", "birch-plywood", "birch", "Clean birch-faced plywood for cabinets, furniture, interior components and general panel supply.", "Birch"),
    "bintangor-plywood": commercialPlywoodProduct("Bintangor Plywood", "bintangor-plywood", "bintangor", "Red-toned bintangor-faced plywood for furniture, decoration and general woodworking.", "Bintangor"),
    "pine-plywood": commercialPlywoodProduct("Pine Plywood", "pine-plywood", "pine", "Natural pine-faced plywood for furniture, packing, decoration and interior applications.", "Pine"),
    "fancy-plywood": {
      image: "assets/products/fancy-plywood/fancy-1.jpg",
      images: productImages("fancy-plywood", "fancy", "Fancy plywood"),
      alt: "Fancy plywood",
      groupHash: "commercial-panels",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "Fancy Plywood",
          category: "Commercial & Specialty Plywood",
          summary: "Decorative natural veneer plywood for cabinetry, furniture and interior design.",
          tags: ["Natural veneer", "Decorative face", "2.5-18 mm", "Interior use"],
          detailTitle: "Fine wood appearance with a practical plywood core.",
          detailText: "Fancy plywood combines the technical characteristics of plywood with the appearance of fine natural wood veneer. It is widely used in carpentry, cabinet making, furniture and interior design where buyers need a decorative surface at a practical cost.",
          note: "Confirm veneer species, grade, thickness, size, core, glue and quantity before quotation.",
          specTitle: "Technical specifications",
          specs: [
            ["Product type", "Fancy, decorative or natural veneer plywood"],
            ["Thickness", "2.5, 2.7, 3.2, 3.6, 4.2, 4.6, 5, 5.2, 5.5, 12 or 18 mm"],
            ["Face", "Natural walnut, sapele, teak, ash, cherry or requested veneer"],
            ["Core", "Poplar, hardwood, eucalyptus or combi core"],
            ["Glue", "E1, E2, MR, melamine WBP or phenolic WBP"],
            ["Size", "1220 x 2440 mm or requested size"],
            ["Application", "Cabinets, furniture, doors and interiors"],
            ["Packing", "Export pallets with protective wrapping"]
          ],
          advantagesTitle: "Why buyers use fancy plywood",
          advantages: [["Decorative surface", "Natural veneer provides a premium wood appearance."], ["Practical core", "Plywood structure supports furniture and interior processing."], ["Veneer choice", "Multiple wood species and tones can be selected."], ["Export supply", "Thickness, core and packing can be matched to order."]],
          applications: ["Cabinet and furniture production", "Interior decorative panels", "Door and wall panel components", "Carpentry and general woodworking"]
        }
      }
    },
    "flexible-plywood": {
      image: "assets/products/flexible-plywood/flexible-1.jpg",
      images: productImages("flexible-plywood", "flexible", "Flexible bending plywood"),
      alt: "Flexible bending plywood",
      groupHash: "commercial-panels",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "Flexible / Bending Plywood",
          category: "Commercial & Specialty Plywood",
          summary: "One-direction flexible plywood for curved furniture, columns and shaped interior construction.",
          tags: ["One-way bending", "4-15 mm", "1220 x 2440 mm", "Curved interiors"],
          detailTitle: "Flexible plywood for curved and shaped work.",
          detailText: "Flexible plywood, also called flexi-board or bending plywood, uses a special construction that allows the panel to bend in one direction. It is suitable for curved furniture, pillar and column cladding, counters and shaped interior projects.",
          note: "Confirm bending direction, radius, thickness, size, quantity and intended application before quotation.",
          specTitle: "Technical specifications",
          specs: [
            ["Product type", "Flexible plywood, flexi-board or bending plywood"],
            ["Bending direction", "Long grain or cross grain options"],
            ["Thickness", "4, 5, 6, 9, 10, 12 or 15 mm"],
            ["Standard size", "1220 x 2440 mm"],
            ["Core", "Specially constructed flexible veneer core"],
            ["Surface", "Raw surface for veneering or finishing"],
            ["Application", "Curved furniture, columns and interior shapes"],
            ["Packing", "Protected export pallet packing"]
          ],
          advantagesTitle: "Why buyers use flexible plywood",
          advantages: [["Controlled bending", "Special construction allows one-direction curves."], ["Easy finishing", "Surface can receive veneer or decorative finishing."], ["Shape freedom", "Suitable for curved furniture and architectural details."], ["Project sizing", "Thickness and bending direction can be selected by use."]],
          applications: ["Curved furniture and cabinet components", "Pillar and column cladding", "Counters, displays and interior features", "Architectural curves and shaped panels"]
        }
      }
    },
    mdf: {
      image: "assets/products/mdf/mdf-raw-panels.png",
      images: [
        { src: "assets/products/mdf/mdf-raw-panels.png", alt: "Plain raw MDF panels" },
        { src: "assets/products/mdf/mdf-stacked-panels.png", alt: "Stacked MDF panels" },
        { src: "assets/products/mdf/mdf-core-detail.png", alt: "MDF surface and core detail" }
      ],
      alt: "MDF panel",
      groupHash: "furniture-panels",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "MDF",
          category: "Furniture Panel",
          summary: "Uniform MDF fiberboard with an ultra-smooth surface, stable structure and excellent machinability.",
          tags: ["E0 / E1", "Raw or melamine", "Smooth surface", "Furniture panel"],
          detailTitle: "Uniform fiberboard for furniture and interior production.",
          detailText: "High-quality uniform MDF fiberboard with ultra-smooth surface, excellent machinability and stable structure. Available in plain raw MDF and melamine laminated MDF, widely used for cabinet doors, furniture, mouldings and interior decoration. Eco-friendly E0/E1 low formaldehyde grade with factory direct wholesale price.",
          note: "Confirm thickness, density, grade, surface requirement, moisture resistance and loading quantity.",
          specTitle: "Technical specifications",
          specs: [
            ["Thickness", "2.5-30 mm or custom"],
            ["Standard size", "1220 x 2440, 1830 x 2440 mm or custom"],
            ["Density", "Standard or high-density options"],
            ["Surface", "Plain raw, sanded or melamine laminated"],
            ["Emission grade", "E0 or E1 low formaldehyde"],
            ["Moisture option", "Standard or moisture-resistant MDF"],
            ["Application", "Cabinet doors, furniture, mouldings and interiors"],
            ["Packing", "Wrapped pallets for container delivery"]
          ],
          advantagesTitle: "Why buyers use MDF",
          advantages: [
            ["Smooth finish", "Fine surface supports painting, veneering and melamine lamination."],
            ["Machining quality", "Consistent structure is suitable for cutting, routing and edge work."],
            ["Furniture focus", "Common choice for cabinets, shelves, doors and interior products."],
            ["Specification range", "Thickness, density and emission class can be matched to market."]
          ],
          applications: [
            "Furniture production and cabinet components",
            "Painted panels, doors and wall panels",
            "Melamine faced board substrate",
            "Interior decoration and shelving"
          ]
        }
      }
    },
    chipboard: {
      image: "assets/products/chipboard/chipboard-melamine-stack.png",
      images: [
        { src: "assets/products/chipboard/chipboard-melamine-stack.png", alt: "Melamine laminated chipboard panels" },
        { src: "assets/products/chipboard/chipboard-finishes.png", alt: "Chipboard finish options" },
        { src: "assets/products/chipboard/chipboard-factory-stack.png", alt: "Chipboard factory stack" }
      ],
      alt: "Chipboard panel",
      groupHash: "furniture-panels",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "Chipboard",
          category: "Furniture Panel",
          summary: "Economical engineered wood panel with stable dimensions and strong screw retention for mass furniture production.",
          tags: ["E0 / E1", "Raw or melamine", "Stable dimensions", "Cost efficient"],
          detailTitle: "Cost-effective substrate for mass furniture production.",
          detailText: "Chipboard, also widely known as Particle Board, is an economical engineered wood panel manufactured by compressing mixed wood chips, flakes and synthetic resin under high temperature and high pressure. Different from plywood's layered veneer structure and MDF's fine fiber texture, chipboard features homogeneous internal structure, flat surface and stable overall dimension. It provides consistent density and strong screw retention performance, making it the most cost-effective substrate for mass furniture production. We supply standard dry-grade, moisture-resistant grade and fire-retardant grade chipboard, including both raw un-faced boards and finished melamine laminated chipboard panels. All products comply with E0/E1 low formaldehyde emission standards for safe indoor use.",
          note: "Send thickness, density, surface finish, emission class, edge requirement and packing preference.",
          specTitle: "Technical specifications",
          specs: [
            ["Thickness", "9-25 mm or custom"],
            ["Standard size", "1220 x 2440 mm or customized"],
            ["Surface", "Raw un-faced or melamine laminated"],
            ["Structure", "Homogeneous compressed wood chips and flakes"],
            ["Emission grade", "E0 or E1 low formaldehyde"],
            ["Grade options", "Dry-grade, moisture-resistant or fire-retardant"],
            ["Application", "Furniture, shelving, cabinets and interiors"],
            ["Packing", "Export pallets with protective wrapping"]
          ],
          advantagesTitle: "Why buyers use chipboard",
          advantages: [
            ["Cost control", "Suitable for buyers balancing panel performance and price."],
            ["Furniture ready", "Common substrate for laminated furniture and shelving."],
            ["Large-format supply", "Standard panel dimensions simplify factory processing."],
            ["Surface options", "Raw or melamine faced versions can be arranged."]
          ],
          applications: [
            "Flat-pack furniture and shelving",
            "Cabinet carcasses and interior parts",
            "Melamine faced board production",
            "Wholesale furniture panel supply"
          ]
        }
      }
    },
    osb: {
      image: "assets/products/osb/osb-edge.png",
      images: [
        { src: "assets/products/osb/osb-edge.png", alt: "OSB oriented strand structure and edge" },
        { src: "assets/products/osb/osb-stack.png", alt: "Stacked OSB panels" },
        { src: "assets/products/osb/osb-surface.png", alt: "OSB oriented strand surface detail" }
      ],
      alt: "OSB oriented strand board",
      groupHash: "furniture-panels",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "OSB",
          category: "Furniture & Structural Panel",
          summary: "High-performance oriented strand board with consistent strength and waterproof resin options.",
          tags: ["OSB2 / OSB3 / OSB4", "E0 / E1", "MDI / Phenolic", "Structural panel"],
          detailTitle: "Directional strand structure for consistent panel strength.",
          detailText: "OSB (Oriented Strand Board) is a high-performance structural engineered wood panel, manufactured by cross-laminating and compressing geometrically aligned wood strands with waterproof resin under high temperature and high pressure. Unlike plywood with layered veneers or chipboard with random wood particles, OSB features intelligent directional strand layout, delivering consistent strength across the entire panel with no knots, no hollow gaps and no core defects. Our OSB boards adopt advanced waterproof adhesive (MDI / Phenolic glue) and double-sided calibrated sanding process. We supply full grades: indoor OSB2, moisture-resistant OSB3, and heavy-duty structural OSB4. All panels meet E0/E1 low formaldehyde standards for safe residential and commercial use.",
          note: "Confirm OSB grade, thickness, size, glue, surface, quantity and intended structural or interior application.",
          specTitle: "Technical specifications",
          specs: [
            ["Product grade", "OSB2, OSB3 or OSB4"],
            ["Thickness", "6-25 mm or custom"],
            ["Standard size", "1220 x 2440, 1250 x 2500 mm or custom"],
            ["Structure", "Cross-laminated geometrically aligned wood strands"],
            ["Glue", "MDI or phenolic waterproof resin"],
            ["Emission grade", "E0 or E1 low formaldehyde"],
            ["Surface", "Double-sided calibrated sanding"],
            ["Packing", "Protected export pallet packing"]
          ],
          advantagesTitle: "Why buyers use OSB",
          advantages: [
            ["Consistent strength", "Directional strand layout delivers stable performance across the panel."],
            ["Clean structure", "No knots, hollow gaps or veneer core defects."],
            ["Grade selection", "OSB2, OSB3 and OSB4 cover indoor, moisture-resistant and structural use."],
            ["Waterproof options", "MDI or phenolic resin supports demanding applications."]
          ],
          applications: ["Furniture and interior panel production", "Wall, roof and floor sheathing", "Packaging and industrial panels", "Residential and commercial construction"]
        }
      }
    },
    "melamine-boards": {
      image: "assets/upload/202531310455680132.jpg",
      alt: "Melamine boards",
      groupHash: "commercial-panels",
      locales: {
        en: {
          title: "Melamine Boards",
          category: "Decorative Furniture Panel",
          summary: "Decorative melamine faced panels for cabinets, wardrobes, shelves and interior furniture projects.",
          tags: ["Decorative face", "MDF or chipboard", "Cabinet use", "Color matching"],
          detailTitle: "Decorative panel for finished furniture parts.",
          detailText: "Melamine boards combine a decorative paper surface with MDF, chipboard or plywood substrate. They are supplied for buyers who need ready-to-cut furniture panels with consistent color and surface.",
          note: "Confirm substrate, thickness, color code, texture, two-side or one-side finish, quantity and packing marks.",
          specs: [
            ["Thickness", "9 mm, 12 mm, 15 mm, 16 mm, 18 mm, 25 mm or custom"],
            ["Standard size", "1220 x 2440 mm or market-specific sizes"],
            ["Substrate", "MDF, chipboard or plywood"],
            ["Surface", "Solid color, wood grain, matte, texture or custom paper"],
            ["Finish", "One side or two sides melamine faced"],
            ["Grade", "Emission class by market requirement"],
            ["Use", "Cabinets, wardrobes, shelves and interiors"],
            ["Packing", "Surface-protected export pallet packing"]
          ],
          advantagesTitle: "Why buyers use melamine boards",
          advantages: [
            ["Ready surface", "Decorative face reduces finishing work in furniture production."],
            ["Design choice", "Color, texture and substrate can be matched to local demand."],
            ["Factory efficiency", "Panels are ready for cutting, edging and assembly."],
            ["Export matching", "Packing and marks support distributor and OEM orders."]
          ],
          applications: [
            "Kitchen cabinets and wardrobes",
            "Shelving, office furniture and retail fixtures",
            "Interior wall and decorative panels",
            "OEM furniture panel programs"
          ]
        }
      }
    },
    lvl: {
      image: "assets/products/lvl/lvl-sections.png",
      images: [
        {
          src: "assets/products/lvl/lvl-sections.png",
          alt: "LVL laminated veneer lumber sections"
        },
        {
          src: "assets/products/lvl/lvl-factory-stock.png",
          alt: "LVL factory stock"
        },
        {
          src: "assets/products/lvl/lvl-planks.png",
          alt: "LVL planks"
        }
      ],
      alt: "LVL laminated veneer lumber",
      groupHash: "engineered-wood",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "LVL",
          category: "Engineered Wood Systems",
          summary: "High-performance laminated veneer lumber for structural members, scaffold planks, industrial packing and engineered components.",
          tags: ["Parallel veneer", "Structural lumber", "Custom section", "Stable strength"],
          detailTitle: "High-performance structural laminated veneer lumber.",
          detailText: "LVL stands for Laminated Veneer Lumber, a high-performance structural engineered wood. It is manufactured by arranging thin hardwood veneers all in the same grain direction, then bonding and hot-pressing layers together with waterproof structural adhesive. Unlike ordinary plywood with cross-laminated veneers, all veneer layers of LVL run parallel, giving it extraordinary unidirectional bending strength, stable linear dimension and outstanding load-bearing performance.",
          note: "Confirm section size, length, grade, moisture, glue standard, use case and required certificates.",
          specTitle: "Technical specifications",
          specs: [
            ["Construction", "Parallel laminated hardwood veneer layers"],
            ["Section size", "Custom thickness, width and length by order"],
            ["Material", "Poplar, pine, eucalyptus or mixed hardwood veneer"],
            ["Glue", "Waterproof structural adhesive"],
            ["Strength direction", "High unidirectional bending strength"],
            ["Grade", "Industrial, packing or construction grade"],
            ["Application", "Beams, scaffold planks, packing and components"],
            ["Packing", "Bundled export packing with marks"]
          ],
          advantagesTitle: "Why buyers use LVL",
          advantages: [
            ["Directional strength", "Parallel veneer construction supports demanding load-related applications."],
            ["Custom sizing", "Length and section can be produced around project requirements."],
            ["Stable dimensions", "Engineered layers help maintain predictable linear dimensions."],
            ["Container planning", "Bundling and loading can be arranged for efficient shipment."]
          ],
          applications: [
            "Construction beams and support members",
            "Scaffold planks and formwork components",
            "Industrial packing beams and pallets",
            "Custom engineered wood parts"
          ]
        }
      }
    },
    "h20-beam": {
      image: "assets/products/h20-beam/h20-finished-beams.png",
      images: [
        {
          src: "assets/products/h20-beam/h20-finished-beams.png",
          alt: "Finished H20 formwork beams"
        },
        {
          src: "assets/products/h20-beam/h20-stacked-beams.png",
          alt: "Stacked H20 formwork beams"
        },
        {
          src: "assets/products/h20-beam/h20-blue-caps.png",
          alt: "H20 beams with blue end caps"
        }
      ],
      alt: "H20 formwork beam",
      groupHash: "engineered-wood",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "H20 Beam",
          category: "Engineered Wood Systems",
          summary: "Reusable H20 timber beam for concrete formwork systems, wall formwork, slab support and construction projects.",
          tags: ["I-shaped beam", "WBP phenolic glue", "Protected ends", "Project supply"],
          detailTitle: "Protected composite timber beam for concrete formwork.",
          detailText: "The H20 beam features a classic I-shaped composite structure. The top and bottom flanges are made of high-density finger-jointed spruce solid wood, while the middle web consists of waterproof phenolic plywood or LVL board. All components are hot-pressed and bonded with WBP boil-proof phenolic glue, delivering superior waterproof performance and stable structural integrity for harsh construction site conditions. Every H20 beam is finished with alkali-resistant yellow protective paint and fitted with sturdy plastic or metal end caps, effectively preventing cracking, water infiltration and impact damage during repeated cycles of use.",
          note: "Send beam length, quantity, end cap requirement, color mark, packing method and project destination.",
          specTitle: "Technical specifications",
          specs: [
            ["Structure", "I-shaped composite timber beam"],
            ["Height", "H20 beam profile"],
            ["Length", "Common lengths and custom lengths by order"],
            ["Flange", "High-density finger-jointed spruce solid wood"],
            ["Web", "Waterproof phenolic plywood or LVL board"],
            ["Glue", "WBP boil-proof phenolic glue"],
            ["End protection", "Plastic or metal end caps"],
            ["Surface", "Alkali-resistant yellow protective paint"],
            ["Application", "Wall, slab and support formwork systems"],
            ["Packing", "Bundled packing for container loading"]
          ],
          advantagesTitle: "Why buyers use H20 beams",
          advantages: [
            ["Composite structure", "Solid wood flanges and an engineered web create a stable formwork component."],
            ["Site protection", "Protective paint and end caps reduce water and impact damage."],
            ["Project matching", "Lengths, caps and marks can be arranged for project supply."],
            ["Export support", "Bundled packing and loading photos help remote buyers manage orders."]
          ],
          applications: [
            "Wall and slab concrete formwork systems",
            "Contractor project material supply",
            "Formwork distributor stock",
            "Mixed shipments with plywood and LVL"
          ]
        }
      }
    },
    blockboard: {
      image: "assets/products/blockboard/blockboard-panels.png",
      images: [
        {
          src: "assets/products/blockboard/blockboard-panels.png",
          alt: "Blockboard panels"
        },
        {
          src: "assets/products/blockboard/blockboard-surface.png",
          alt: "Blockboard panel surface"
        },
        {
          src: "assets/products/blockboard/blockboard-core.png",
          alt: "Blockboard solid strip core"
        }
      ],
      alt: "Blockboard engineered wood panel",
      groupHash: "engineered-wood",
      technicalSpecTable: true,
      locales: {
        en: {
          title: "Blockboard",
          category: "Engineered Wood Systems",
          summary: "Solid strip-core engineered panel for furniture, doors, shelving and interior components.",
          tags: ["Solid strip core", "Furniture panel", "Custom surface", "Export packing"],
          detailTitle: "Solid strip-core panel for furniture and interior production.",
          detailText: "Blockboard is an engineered wood panel built with a core of solid wood strips placed edge to edge between veneer layers. This structure provides a practical balance of panel stiffness, manageable weight and screw-holding performance for furniture, doors, shelving and interior components.",
          note: "Confirm core material, face and back, glue, size, thickness, quantity and destination port before quotation.",
          specTitle: "Technical specifications",
          specs: [
            ["Core", "Edge-glued solid wood strips"],
            ["Face / back", "Raw veneer, decorative face or buyer-specified surface"],
            ["Thickness", "Common furniture thicknesses or custom production"],
            ["Standard size", "1220 x 2440 mm or custom sizes"],
            ["Core material", "Poplar, pine or selected solid wood strips"],
            ["Glue", "MR, melamine or exterior-grade options"],
            ["Application", "Furniture, doors, shelves and interiors"],
            ["Packing", "Protected export pallets with shipping marks"]
          ],
          advantagesTitle: "Why buyers use blockboard",
          advantages: [
            ["Solid strip core", "The internal wood-strip structure provides useful panel stiffness."],
            ["Furniture friendly", "Suitable for cutting, fixing and common interior component production."],
            ["Surface choice", "Faces and finishes can be matched to the buyer's application."],
            ["Export matching", "Sizes, packing and shipping marks can be arranged by order."]
          ],
          applications: [
            "Furniture and cabinet components",
            "Doors, shelves and partitions",
            "Interior fit-out and decorative panels",
            "Wholesale panel distribution"
          ]
        }
      }
    }
  };

  function text(node, value) {
    if (node) node.textContent = value || "";
  }

  function clear(node) {
    if (node) node.textContent = "";
  }

  function appendTag(container, value) {
    var item = document.createElement("span");
    item.textContent = value;
    container.appendChild(item);
  }

  function appendSpec(container, item) {
    var row = document.createElement("div");
    var label = document.createElement("span");
    var value = document.createElement("strong");
    label.textContent = item[0];
    value.textContent = item[1];
    row.appendChild(label);
    row.appendChild(value);
    container.appendChild(row);
  }

  function appendSpecHeader(container) {
    var row = document.createElement("div");
    var parameter = document.createElement("span");
    var details = document.createElement("strong");
    var parameterTwo = document.createElement("span");
    var detailsTwo = document.createElement("strong");
    row.className = "detail-spec-head";
    parameter.textContent = "Parameter";
    details.textContent = "Details";
    parameterTwo.textContent = "Parameter";
    detailsTwo.textContent = "Details";
    row.appendChild(parameter);
    row.appendChild(details);
    row.appendChild(parameterTwo);
    row.appendChild(detailsTwo);
    container.appendChild(row);
  }

  function appendAdvantage(container, item, index) {
    var card = document.createElement("article");
    var number = document.createElement("span");
    var title = document.createElement("h3");
    var copy = document.createElement("p");
    number.textContent = String(index + 1).padStart(2, "0");
    title.textContent = item[0];
    copy.textContent = item[1];
    card.appendChild(number);
    card.appendChild(title);
    card.appendChild(copy);
    container.appendChild(card);
  }

  function appendApplication(container, value) {
    var item = document.createElement("li");
    item.textContent = value;
    container.appendChild(item);
  }

  function productSlug() {
    var params = new URLSearchParams(window.location.search);
    return params.get("product") || "film-faced-plywood";
  }

  function currentLocale(product) {
    var stored = "en";
    try {
      stored = localStorage.getItem("blxing-home-lang") || "en";
    } catch (error) {}
    return product.locales[stored] ? stored : "en";
  }

  function mailto(productTitle) {
    var body = [
      "Product: " + productTitle,
      "Size:",
      "Thickness:",
      "Quantity:",
      "Destination port:"
    ].join("\n");
    return "mailto:info@jldplywood.com?subject=" +
      encodeURIComponent(productTitle + " Inquiry") +
      "&body=" + encodeURIComponent(body);
  }

  function renderGallery(product, copy) {
    var image = document.querySelector("[data-product-image]");
    var thumbs = document.querySelector("[data-product-thumbnails]");
    var gallery = image ? image.closest(".detail-gallery") : null;
    var galleryImages = product.images || [{
      src: product.image,
      alt: product.alt || copy.title
    }];

    if (!image) return;

    function selectImage(index) {
      var selected = galleryImages[index];
      image.setAttribute("src", selected.src);
      image.setAttribute("alt", selected.alt || product.alt || copy.title);
      if (!thumbs) return;
      thumbs.querySelectorAll("button").forEach(function (button, buttonIndex) {
        var active = buttonIndex === index;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-current", active ? "true" : "false");
      });
    }

    clear(thumbs);
    galleryImages.forEach(function (item, index) {
      var button = document.createElement("button");
      var thumbnail = document.createElement("img");
      button.type = "button";
      button.className = "detail-gallery-thumb";
      button.setAttribute("aria-label", "View image " + (index + 1));
      thumbnail.src = item.src;
      thumbnail.alt = "";
      button.appendChild(thumbnail);
      button.addEventListener("click", function () {
        selectImage(index);
      });
      thumbs.appendChild(button);
    });

    selectImage(0);
    if (gallery) gallery.classList.toggle("has-thumbnails", galleryImages.length > 1);
    if (thumbs) thumbs.hidden = galleryImages.length < 2;
  }

  function render() {
    var slug = productSlug();
    var product = products[slug] || products["film-faced-plywood"];
    var copy = product.locales[currentLocale(product)] || product.locales.en;
    var tags = document.querySelector("[data-product-tags]");
    var specs = document.querySelector("[data-product-specs]");
    var advantages = document.querySelector("[data-product-advantages]");
    var applications = document.querySelector("[data-product-applications]");
    var email = document.querySelector("[data-product-email]");
    var description = document.querySelector("[data-product-meta-description]");

    document.title = copy.title + " | JLD Wood Panels";
    if (description) description.setAttribute("content", copy.summary);
    renderGallery(product, copy);
    text(document.querySelector("[data-product-breadcrumb]"), copy.title);
    text(document.querySelector("[data-product-category]"), copy.category);
    text(document.querySelector("[data-product-title]"), copy.title);
    text(document.querySelector("[data-product-summary]"), copy.summary);
    text(document.querySelector("[data-product-detail-title]"), copy.detailTitle);
    text(document.querySelector("[data-product-detail-text]"), copy.detailText);
    text(document.querySelector("[data-product-note]"), copy.note);
    text(document.querySelector("[data-product-spec-title]"), copy.specTitle || "Common supply options");
    text(document.querySelector("[data-product-advantages-title]"), copy.advantagesTitle);
    if (email) email.setAttribute("href", mailto(copy.title));

    clear(tags);
    (copy.tags || []).forEach(function (item) {
      appendTag(tags, item);
    });
    clear(specs);
    specs.classList.toggle("is-technical", Boolean(product.technicalSpecTable));
    if (product.technicalSpecTable) appendSpecHeader(specs);
    (copy.specs || []).forEach(function (item) {
      appendSpec(specs, item);
    });
    clear(advantages);
    (copy.advantages || []).forEach(function (item, index) {
      appendAdvantage(advantages, item, index);
    });
    clear(applications);
    (copy.applications || []).forEach(function (item) {
      appendApplication(applications, item);
    });
  }

  render();

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      window.setTimeout(render, 0);
    });
  });

  window.blxingProducts = products;
})();
