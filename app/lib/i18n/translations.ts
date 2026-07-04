export type Language = "en" | "fr";

export type Translations = {
  languagePicker: {
    title: string;
    subtitle: string;
    english: string;
    french: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    services: string;
    projects: string;
    contact: string;
    getQuote: string;
    toggleMenu: string;
  };
  hero: {
    imageAlt: string;
    companyLine1: string;
    companyLine2: string;
    taglineLine1: string;
    taglineLine2: string;
    subtitle: string;
    getQuote: string;
    ourProjects: string;
  };
  heroFeatures: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  aboutPreview: {
    label: string;
    title: string;
    body: string;
    servicesNote: string;
    learnMore: string;
    imageAlt: string;
  };
  director: {
    label: string;
    quote: string;
    body: string;
    role: string;
  };
  about: {
    label: string;
    title: string;
    body: string;
    imageAlt: string;
  };
  visionMissionValues: { title: string; description: string }[];
  whyChooseUs: { title: string; items: string[] };
  products: {
    label: string;
    title: string;
    body: string;
    viewDetails: string;
    items: { title: string; description: string }[];
  };
  productsCta: {
    title: string;
    body: string;
    button: string;
  };
  services: {
    label: string;
    title: string;
    body: string;
    imageAlt: string;
    items: { title: string; description: string }[];
  };
  serviceFeatures: { title: string; description: string }[];
  quote: {
    label: string;
    title: string;
    body: string;
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    serviceRequired: string;
    projectDetails: string;
    selectProjectType: string;
    selectService: string;
    sendRequest: string;
    whyTitle: string;
    benefits: string[];
    projectTypes: string[];
  };
  projects: {
    label: string;
    title: string;
    body: string;
    filters: Record<string, string>;
    items: { title: string }[];
  };
  dubaiAreas: {
    title: string;
    areas: string[];
  };
  contact: {
    label: string;
    title: string;
    body: string;
    labels: {
      phone: string;
      phoneAlt: string;
      email: string;
      address: string;
      workingHours: string;
    };
    addressValue: string;
    workingHoursValue: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      message: string;
      sendMessage: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
    };
    mapTitle: string;
  };
  footer: {
    body: string;
    role: string;
    quickLinks: string;
    ourProducts: string;
    ourServices: string;
    links: {
      home: string;
      about: string;
      products: string;
      services: string;
      projects: string;
      getQuote: string;
      contact: string;
    };
    productItems: string[];
    serviceItems: string[];
    rights: string;
    privacy: string;
    terms: string;
    developedBy: string;
    developerName: string;
    linkedin: string;
    portfolio: string;
  };
  common: {
    logoAlt: string;
    whatsapp: string;
  };
};

export const translations: Record<Language, Translations> = {
  en: {
    languagePicker: {
      title: "Choose Your Language",
      subtitle: "Select your preferred language to continue",
      english: "English",
      french: "Français",
    },
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
      getQuote: "Get a Quote",
      toggleMenu: "Toggle menu",
    },
    hero: {
      imageAlt: "Premium aluminium and glass solutions in Dubai",
      companyLine1: "Farhan Asif",
      companyLine2: "Aluminium and Glass Fixing L.L.C.",
      taglineLine1: "Precision in Aluminium.",
      taglineLine2: "Perfection in Glass.",
      subtitle:
        "Specialist manufacturers and installers of aluminium doors, windows, partitions, grill & glass doors, kitchen cabinets, casting gates, wood doors, and rolling shutters across Dubai.",
      getQuote: "Get a Quote",
      ourProjects: "Our Projects",
    },
    heroFeatures: [
      { title: "Premium Quality", description: "High quality materials built for longevity" },
      { title: "Skilled Workforce", description: "Experienced team with attention to detail" },
      { title: "Timely Delivery", description: "Projects completed on schedule, every time" },
      { title: "Custom Solutions", description: "Tailored designs for every project need" },
    ],
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "500+", label: "Projects Completed" },
      { value: "100%", label: "Client Satisfaction" },
      { value: "Dubai", label: "Based Company" },
    ],
    aboutPreview: {
      label: "About Farhan Asif",
      title: "Building Spaces with Clarity and Confidence",
      body: "Farhan Asif Aluminium and Glass Fixing L.L.C. is a trusted Dubai-based company led from the front by our Managing Director. We manufacture and install a full range of aluminium and glass products for residential, commercial, and industrial clients across Deira and the wider UAE.",
      servicesNote:
        "We are making Aluminium Doors, Windows, Porch & Front Fixings, Balcony & Staircase Work, Partitions, Grill & Glass Doors, Kitchen Cabinets, Casting Gates & Grills, Window & Wood Doors, and Rolling Shutters.",
      learnMore: "Learn More",
      imageAlt: "Modern aluminium and glass building",
    },
    director: {
      label: "Leadership Statement",
      quote:
        "Every project we undertake reflects our commitment to quality craftsmanship, honest service, and lasting results. From the first measurement to the final installation, our team works with precision so every client receives work they can trust for years to come.",
      body: "Under the leadership of our Managing Director, Farhan Asif Aluminium and Glass Fixing L.L.C. continues to serve Dubai with the same dedication, expertise, and personal accountability that has defined our reputation from day one.",
      role: "Managing Director",
    },
    about: {
      label: "About Us",
      title: "We Design. We Fix. We Deliver Excellence.",
      body: "Based in Frij Al Murar, Deira, Farhan Asif Aluminium and Glass Fixing L.L.C. has built a strong reputation for reliable aluminium and glass fixing across Dubai. We combine skilled workmanship with quality materials to deliver doors, windows, partitions, cabinets, gates, grills, and shutters that meet the highest standards.",
      imageAlt: "Glass facade reflecting Dubai skyline",
    },
    visionMissionValues: [
      {
        title: "Our Vision",
        description: "To be the leading aluminium and glass fixing company in the UAE.",
      },
      {
        title: "Our Mission",
        description: "Deliver quality solutions with precision and professionalism every time.",
      },
      {
        title: "Our Values",
        description: "Quality, integrity, innovation and customer satisfaction are at our core.",
      },
    ],
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Experienced & Skilled Team",
        "High Quality Materials",
        "Modern Tools & Technology",
        "Timely Project Delivery",
        "Competitive Pricing",
        "100% Customer Satisfaction",
      ],
    },
    products: {
      label: "Our Products",
      title: "Premium Aluminium & Glass Products",
      body: "As stated on our official company profile, we manufacture and supply a complete range of aluminium and glass products for homes, offices, and commercial projects throughout Dubai.",
      viewDetails: "View Details",
      items: [
        { title: "Aluminium Doors", description: "Custom-built aluminium entrance and sliding door systems." },
        { title: "Aluminium Windows", description: "Modern window framing for villas, offices, and commercial spaces." },
        { title: "Porch & Front Fixings", description: "Front porch structures and entrance fixings built to specification." },
        { title: "Balcony & Staircase Work", description: "Balcony glazing, railings, and staircase aluminium solutions." },
        { title: "Glass Partitions", description: "Office and interior partition systems with clean glass finishes." },
        { title: "Grill & Glass Doors", description: "Decorative grill and glass entrance doors for homes and businesses." },
        { title: "Kitchen Cabinets", description: "Quality kitchen cabinetry designed and installed to your layout." },
        { title: "Casting Gates & Grills", description: "Durable casting gates and decorative grill work for security and style." },
        { title: "Window & Wood Doors", description: "Wood door and window combinations with premium finishing." },
        { title: "Rolling Shutters", description: "Commercial and residential rolling shutter supply and installation." },
      ],
    },
    productsCta: {
      title: "Looking for a Custom Solution?",
      body: "We can design and install products tailored to your project needs.",
      button: "Get a Quote",
    },
    services: {
      label: "Our Services",
      title: "Complete Aluminium & Glass Solutions",
      body: "From supply to installation, we provide end to end solutions for all types of aluminium and glass works.",
      imageAlt: "Aluminium and glass building corner",
      items: [
        { title: "Supply & Installation", description: "We supply and install high quality aluminium and glass systems." },
        { title: "Glass Fixing", description: "Expert glass fixing for facades, partitions, railings and more." },
        { title: "Curtain Wall Installation", description: "Professional installation of curtain wall systems for modern buildings." },
        { title: "Maintenance & Support", description: "Reliable maintenance and after sales support for long lasting performance." },
      ],
    },
    serviceFeatures: [
      { title: "Professional Team", description: "Skilled & experienced professionals." },
      { title: "Quality Workmanship", description: "Precision in every project." },
      { title: "Safety First", description: "We follow strict safety standards." },
      { title: "On Time Delivery", description: "We value your time and deadlines." },
    ],
    quote: {
      label: "Get a Quote",
      title: "Tell Us About Your Project",
      body: "Fill out the form below and our team will get back to you with a detailed quote within 24 hours.",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      projectType: "Project Type",
      serviceRequired: "Service Required",
      projectDetails: "Project Details",
      selectProjectType: "Select project type",
      selectService: "Select a service",
      sendRequest: "Send Request",
      whyTitle: "Why Get a Quote From Us?",
      benefits: [
        "Free consultation and site visit",
        "Competitive and transparent pricing",
        "Detailed project proposal",
        "Flexible payment options",
        "Dedicated project manager",
      ],
      projectTypes: ["Residential", "Commercial", "Industrial", "Other"],
    },
    projects: {
      label: "Our Projects",
      title: "Built with Trust. Delivered with Pride.",
      body: "We take pride in delivering high quality aluminium and glass solutions across Dubai.",
      filters: {
        All: "All",
        Residential: "Residential",
        Commercial: "Commercial",
        Hospitality: "Hospitality",
        Industrial: "Industrial",
      },
      items: [
        { title: "Villa Glazing" },
        { title: "Commercial Facade" },
        { title: "Office Partitions" },
        { title: "Glass Balcony" },
        { title: "Hotel Entrance" },
        { title: "Industrial Shutters" },
      ],
    },
    dubaiAreas: {
      title: "Proudly Serving Across Dubai",
      areas: ["Downtown Dubai", "Dubai Marina", "Business Bay", "Jumeirah", "Palm Jumeirah", "And More..."],
    },
    contact: {
      label: "Contact Us",
      title: "We Are Here to Help You",
      body: "Have a question or want to discuss your project? Reach out to us and our team will assist you.",
      labels: {
        phone: "Phone",
        phoneAlt: "Phone (Alt)",
        email: "Email",
        address: "Address",
        workingHours: "Working Hours",
      },
      addressValue: "Frij Al Murar, Near Latifa Mosque, Deira, Dubai - U.A.E.",
      workingHoursValue: "Mon - Sat : 8:00 AM - 6:00 PM",
      form: {
        fullName: "Full Name *",
        email: "Email Address *",
        phone: "Phone Number *",
        message: "Message *",
        sendMessage: "Send Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+971",
        messagePlaceholder: "How can we help you?",
      },
      mapTitle: "Farhan Asif Aluminium and Glass Fixing location",
    },
    footer: {
      body: "Farhan Asif Aluminium and Glass Fixing L.L.C. — Dubai-based aluminium and glass fixing company delivering quality solutions with precision and professionalism. Led by",
      role: "Managing Director.",
      quickLinks: "Quick Links",
      ourProducts: "Our Products",
      ourServices: "Our Services",
      links: {
        home: "Home",
        about: "About Us",
        products: "Products",
        services: "Services",
        projects: "Projects",
        getQuote: "Get a Quote",
        contact: "Contact Us",
      },
      productItems: [
        "Aluminium Doors",
        "Aluminium Windows",
        "Glass Partitions",
        "Grill & Glass Doors",
        "Kitchen Cabinets",
        "Casting Gates & Grills",
        "Window & Wood Doors",
        "Rolling Shutters",
      ],
      serviceItems: [
        "Supply & Installation",
        "Glass Fitting",
        "Curtain Wall Installation",
        "Maintenance & Support",
      ],
      rights: "All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      developedBy: "Website Designed & Developed by",
      developerName: "Hassan Raza",
      linkedin: "LinkedIn",
      portfolio: "hassanrazadev.tech",
    },
    common: {
      logoAlt: "Farhan Asif Aluminium and Glass Fixing L.L.C.",
      whatsapp: "Chat on WhatsApp",
    },
  },
  fr: {
    languagePicker: {
      title: "Choisissez Votre Langue",
      subtitle: "Sélectionnez votre langue préférée pour continuer",
      english: "English",
      french: "Français",
    },
    nav: {
      home: "Accueil",
      about: "À Propos",
      products: "Produits",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
      getQuote: "Demander un Devis",
      toggleMenu: "Ouvrir le menu",
    },
    hero: {
      imageAlt: "Solutions premium en aluminium et verre à Dubaï",
      companyLine1: "Farhan Asif",
      companyLine2: "Aluminium and Glass Fixing L.L.C.",
      taglineLine1: "Précision en Aluminium.",
      taglineLine2: "Perfection en Verre.",
      subtitle:
        "Fabricants et installateurs spécialisés de portes en aluminium, fenêtres, cloisons, portes grillagées et vitrées, cuisines équipées, portails moulés, portes en bois et rideaux métalliques à Dubaï.",
      getQuote: "Demander un Devis",
      ourProjects: "Nos Projets",
    },
    heroFeatures: [
      { title: "Qualité Premium", description: "Matériaux de haute qualité conçus pour durer" },
      { title: "Main-d'Œuvre Qualifiée", description: "Équipe expérimentée et soucieuse du détail" },
      { title: "Livraison Ponctuelle", description: "Projets terminés dans les délais, à chaque fois" },
      { title: "Solutions Sur Mesure", description: "Conceptions adaptées à chaque besoin de projet" },
    ],
    stats: [
      { value: "10+", label: "Années d'Expérience" },
      { value: "500+", label: "Projets Réalisés" },
      { value: "100%", label: "Satisfaction Client" },
      { value: "Dubaï", label: "Entreprise Basée à" },
    ],
    aboutPreview: {
      label: "À Propos de Farhan Asif",
      title: "Construire des Espaces avec Clarté et Confiance",
      body: "Farhan Asif Aluminium and Glass Fixing L.L.C. est une entreprise de confiance basée à Dubaï, dirigée par notre Directeur Général. Nous fabriquons et installons une gamme complète de produits en aluminium et verre pour les clients résidentiels, commerciaux et industriels à Deira et dans les Émirats.",
      servicesNote:
        "Nous fabriquons des portes en aluminium, fenêtres, fixations de porche et avant, travaux de balcons et escaliers, cloisons, portes grillagées et vitrées, cuisines équipées, portails et grilles moulés, portes et fenêtres en bois, et rideaux métalliques.",
      learnMore: "En Savoir Plus",
      imageAlt: "Bâtiment moderne en aluminium et verre",
    },
    director: {
      label: "Déclaration de Direction",
      quote:
        "Chaque projet que nous entreprenons reflète notre engagement envers un savoir-faire de qualité, un service honnête et des résultats durables. De la première mesure à l'installation finale, notre équipe travaille avec précision pour que chaque client reçoive un travail fiable pendant des années.",
      body: "Sous la direction de notre Directeur Général, Farhan Asif Aluminium and Glass Fixing L.L.C. continue de servir Dubaï avec le même dévouement, la même expertise et la même responsabilité personnelle qui ont défini notre réputation dès le premier jour.",
      role: "Directeur Général",
    },
    about: {
      label: "À Propos de Nous",
      title: "Nous Concevons. Nous Installons. Nous Livrons l'Excellence.",
      body: "Basée à Frij Al Murar, Deira, Farhan Asif Aluminium and Glass Fixing L.L.C. a bâti une solide réputation en installation d'aluminium et de verre à Dubaï. Nous combinons un travail qualifié et des matériaux de qualité pour livrer portes, fenêtres, cloisons, cuisines, portails, grilles et rideaux métalliques conformes aux plus hauts standards.",
      imageAlt: "Façade vitrée reflétant la skyline de Dubaï",
    },
    visionMissionValues: [
      {
        title: "Notre Vision",
        description: "Être la principale entreprise d'installation d'aluminium et de verre aux EAU.",
      },
      {
        title: "Notre Mission",
        description: "Fournir des solutions de qualité avec précision et professionnalisme à chaque fois.",
      },
      {
        title: "Nos Valeurs",
        description: "La qualité, l'intégrité, l'innovation et la satisfaction client sont au cœur de notre action.",
      },
    ],
    whyChooseUs: {
      title: "Pourquoi Nous Choisir ?",
      items: [
        "Équipe Expérimentée et Qualifiée",
        "Matériaux de Haute Qualité",
        "Outils et Technologies Modernes",
        "Livraison de Projet dans les Délais",
        "Tarifs Compétitifs",
        "100% Satisfaction Client",
      ],
    },
    products: {
      label: "Nos Produits",
      title: "Produits Premium en Aluminium et Verre",
      body: "Comme indiqué sur notre profil officiel, nous fabriquons et fournissons une gamme complète de produits en aluminium et verre pour les maisons, bureaux et projets commerciaux à Dubaï.",
      viewDetails: "Voir les Détails",
      items: [
        { title: "Portes en Aluminium", description: "Portes d'entrée et coulissantes en aluminium sur mesure." },
        { title: "Fenêtres en Aluminium", description: "Encadrements modernes pour villas, bureaux et espaces commerciaux." },
        { title: "Fixations de Porche et Avant", description: "Structures de porche et fixations d'entrée selon vos spécifications." },
        { title: "Travaux de Balcon et Escalier", description: "Vitrage de balcons, garde-corps et solutions en aluminium pour escaliers." },
        { title: "Cloisons en Verre", description: "Cloisons de bureau et intérieures avec finitions vitrées propres." },
        { title: "Portes Grillagées et Vitrées", description: "Portes d'entrée décoratives en grillage et verre pour maisons et entreprises." },
        { title: "Cuisines Équipées", description: "Cuisines de qualité conçues et installées selon votre plan." },
        { title: "Portails et Grilles Moulés", description: "Portails moulés durables et grilles décoratives pour sécurité et style." },
        { title: "Portes et Fenêtres en Bois", description: "Combinaisons portes et fenêtres en bois avec finition premium." },
        { title: "Rideaux Métalliques", description: "Fourniture et installation de rideaux métalliques commerciaux et résidentiels." },
      ],
    },
    productsCta: {
      title: "Vous Cherchez une Solution Sur Mesure ?",
      body: "Nous pouvons concevoir et installer des produits adaptés aux besoins de votre projet.",
      button: "Demander un Devis",
    },
    services: {
      label: "Nos Services",
      title: "Solutions Complètes en Aluminium et Verre",
      body: "De la fourniture à l'installation, nous proposons des solutions complètes pour tous types de travaux en aluminium et verre.",
      imageAlt: "Angle de bâtiment en aluminium et verre",
      items: [
        { title: "Fourniture et Installation", description: "Nous fournissons et installons des systèmes en aluminium et verre de haute qualité." },
        { title: "Pose de Verre", description: "Pose experte de verre pour façades, cloisons, garde-corps et plus encore." },
        { title: "Installation de Mur-Rideau", description: "Installation professionnelle de systèmes de mur-rideau pour bâtiments modernes." },
        { title: "Maintenance et Support", description: "Maintenance fiable et support après-vente pour une performance durable." },
      ],
    },
    serviceFeatures: [
      { title: "Équipe Professionnelle", description: "Professionnels qualifiés et expérimentés." },
      { title: "Qualité d'Exécution", description: "Précision dans chaque projet." },
      { title: "La Sécurité d'Abord", description: "Nous respectons des normes de sécurité strictes." },
      { title: "Livraison à Temps", description: "Nous respectons votre temps et vos délais." },
    ],
    quote: {
      label: "Demander un Devis",
      title: "Parlez-Nous de Votre Projet",
      body: "Remplissez le formulaire ci-dessous et notre équipe vous répondra avec un devis détaillé sous 24 heures.",
      fullName: "Nom Complet",
      email: "Adresse E-mail",
      phone: "Numéro de Téléphone",
      projectType: "Type de Projet",
      serviceRequired: "Service Requis",
      projectDetails: "Détails du Projet",
      selectProjectType: "Sélectionner le type de projet",
      selectService: "Sélectionner un service",
      sendRequest: "Envoyer la Demande",
      whyTitle: "Pourquoi Demander un Devis Chez Nous ?",
      benefits: [
        "Consultation gratuite et visite sur site",
        "Tarifs compétitifs et transparents",
        "Proposition de projet détaillée",
        "Options de paiement flexibles",
        "Chef de projet dédié",
      ],
      projectTypes: ["Résidentiel", "Commercial", "Industriel", "Autre"],
    },
    projects: {
      label: "Nos Projets",
      title: "Construit avec Confiance. Livré avec Fierté.",
      body: "Nous sommes fiers de livrer des solutions en aluminium et verre de haute qualité à travers Dubaï.",
      filters: {
        All: "Tous",
        Residential: "Résidentiel",
        Commercial: "Commercial",
        Hospitality: "Hôtellerie",
        Industrial: "Industriel",
      },
      items: [
        { title: "Vitrage de Villa" },
        { title: "Façade Commerciale" },
        { title: "Cloisons de Bureau" },
        { title: "Balcon Vitré" },
        { title: "Entrée d'Hôtel" },
        { title: "Rideaux Industriels" },
      ],
    },
    dubaiAreas: {
      title: "Fiers de Servir Tout Dubaï",
      areas: ["Downtown Dubai", "Dubai Marina", "Business Bay", "Jumeirah", "Palm Jumeirah", "Et Plus..."],
    },
    contact: {
      label: "Contactez-Nous",
      title: "Nous Sommes Là pour Vous Aider",
      body: "Vous avez une question ou souhaitez discuter de votre projet ? Contactez-nous et notre équipe vous assistera.",
      labels: {
        phone: "Téléphone",
        phoneAlt: "Téléphone (Alt.)",
        email: "E-mail",
        address: "Adresse",
        workingHours: "Heures d'Ouverture",
      },
      addressValue: "Frij Al Murar, Près de la Mosquée Latifa, Deira, Dubaï - E.A.U.",
      workingHoursValue: "Lun - Sam : 8h00 - 18h00",
      form: {
        fullName: "Nom Complet *",
        email: "Adresse E-mail *",
        phone: "Numéro de Téléphone *",
        message: "Message *",
        sendMessage: "Envoyer le Message",
        namePlaceholder: "Votre nom complet",
        emailPlaceholder: "votre@email.com",
        phonePlaceholder: "+971",
        messagePlaceholder: "Comment pouvons-nous vous aider ?",
      },
      mapTitle: "Emplacement de Farhan Asif Aluminium and Glass Fixing",
    },
    footer: {
      body: "Farhan Asif Aluminium and Glass Fixing L.L.C. — entreprise d'installation d'aluminium et de verre basée à Dubaï, offrant des solutions de qualité avec précision et professionnalisme. Dirigée par",
      role: "Directeur Général.",
      quickLinks: "Liens Rapides",
      ourProducts: "Nos Produits",
      ourServices: "Nos Services",
      links: {
        home: "Accueil",
        about: "À Propos",
        products: "Produits",
        services: "Services",
        projects: "Projets",
        getQuote: "Demander un Devis",
        contact: "Contact",
      },
      productItems: [
        "Portes en Aluminium",
        "Fenêtres en Aluminium",
        "Cloisons en Verre",
        "Portes Grillagées et Vitrées",
        "Cuisines Équipées",
        "Portails et Grilles Moulés",
        "Portes et Fenêtres en Bois",
        "Rideaux Métalliques",
      ],
      serviceItems: [
        "Fourniture et Installation",
        "Pose de Verre",
        "Installation de Mur-Rideau",
        "Maintenance et Support",
      ],
      rights: "Tous Droits Réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions Générales",
      developedBy: "Site Web Conçu et Développé par",
      developerName: "Hassan Raza",
      linkedin: "LinkedIn",
      portfolio: "hassanrazadev.tech",
    },
    common: {
      logoAlt: "Farhan Asif Aluminium and Glass Fixing L.L.C.",
      whatsapp: "Discuter sur WhatsApp",
    },
  },
};

export const COMPANY_NAME = "Farhan Asif Aluminium and Glass Fixing L.L.C.";
export const COMPANY_NAME_AR = "فرحان اصف لتركيب الالمنيوم والزجاج ذ.م.م";
export const MANAGING_DIRECTOR = "Farhan Asif";
export const LANGUAGE_STORAGE_KEY = "fa-language";
