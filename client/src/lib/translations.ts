export type Language = 'en' | 'de';

export const translations = {
  en: {
    // Header
    header: {
      features: 'Features',
      products: 'Products',
      contact: 'Contact',
      documentation: 'Documentation',
      dubon: 'DÜBON ENGINEERING',
      advancedMotionControl: 'Advanced Motion Control',
    },
    // Hero Section
    hero: {
      label: 'Advanced Motion Control Solution',
      title1: 'MotionA',
      title2: 'Power in Motion',
      title3: '',
      description: 'The advanced motion control solution from Dübon Engineering GmbH. Seamlessly integrate into any robotic system with unmatched flexibility and precision.',
      exploreSolutions: 'Explore Solutions',
      watchDemo: 'Watch Demo',
      realtime: 'Real-time',
      precise: 'Precise',
    },
    // Use Cases Section
    useCases: {
      label: 'USE CASES',
      title: 'When to use MotionA',
      description: 'MotionA is the perfect solution when you need powerful motion control without the complexity.',
      cases: [
        {
          title: 'Looking for alternatives to PLCs?',
          description: 'Break free from traditional PLC limitations with a flexible, modern motion control platform.',
        },
        {
          title: 'Need realtime without the complexity?',
          description: 'Get real-time performance without diving into complex realtime programming.',
        },
        {
          title: 'Motion without the hassle?',
          description: 'Achieve sophisticated motion control without the burden of complex infrastructure.',
        },
        {
          title: 'Low cost for series production?',
          description: 'Cost-effective solution perfectly suited for series production requirements.',
        },
        {
          title: 'Want to unlock the full power of AI?',
          description: 'Leverage AI capabilities for your realtime motion tasks with seamless integration.',
        },
      ],
    },
    // Core Capabilities Section
    coreCapabilities: {
      label: 'CORE CAPABILITIES',
      title: 'One Core, Any Environment',
      description: 'MotionA is a highly adaptable and integrated control solution designed for a wide range of processing environments. Its core principle is flexibility.',
      capabilities: [
        {
          title: 'Any Processor',
          description: 'Run on microcontrollers, embedded PCs (x86, ARM), or full Linux/Windows systems. Complete hardware freedom.',
        },
        {
          title: 'Flexible Integration',
          description: 'Seamlessly integrate into virtually any new or existing robotic system with our adaptable architecture.',
        },
        {
          title: 'Real-Time Performance',
          description: 'Runs on every real-time system, from bare-metal microcontrollers to Linux with real-time patches for deterministic control.',
        },
        {
          title: 'OS Agnostic',
          description: 'Works with Linux and Windows-based systems for versatile integration with your existing infrastructure.',
        },
        {
          title: 'No Vendor Lock-in',
          description: 'Choose the best hardware for your application without being tied to a specific vendor or ecosystem.',
        },
      ],
    },
    // Advanced Capabilities Section
    advancedCapabilities: {
      label: 'ADVANCED CAPABILITIES',
      title: 'Motor Configuration and Supervision',
      description: 'Comprehensive tools for monitoring, configuring, and optimizing your motion control system in real-time.',
      features: [
        {
          title: 'Real-Time Data Supervision',
          description: 'Monitor critical dynamics across multiple axes simultaneously. MotionA logs high-resolution data—including position, velocity, and torque—allowing engineers to visualize performance and diagnose bottlenecks as they happen.',
        },
        {
          title: 'Comprehensive Motor Configuration',
          description: 'Streamline setup with a centralized interface for defining operational modes (such as CSP), homing methods, and safety limits. Fine-tune interpolation times and current ratings to protect your hardware while maximizing throughput.',
        },
        {
          title: 'AI-Powered Automated Tuning',
          description: 'Eliminate the complexity of manual PID calibration. MotionA utilizes advanced AI algorithms to analyze motor behavior and automatically calculate optimal parameters, reducing settling times and vibration for smoother, more precise motion.',
        },
        {
          title: 'Advanced Diagnostics',
          description: 'Access deep-layer information through dedicated data channels. From tracking Status Words to monitoring digital inputs, MotionA provides the transparency needed for proactive maintenance and rapid troubleshooting.',
        },
      ],
    },
    // Versatility Section
    versatility: {
      label: 'VERSATILITY',
      title: 'From Cobots to Gantries',
      description: 'Whether you choose the software core or the integrated hardware, MotionA provides a robust foundation for a wide spectrum of robotic applications.',
      robots: [
        {
          title: 'SCARA Robots',
          description: 'Selective Compliance Assembly Robot Arm for precise assembly and pick-and-place operations.',
        },
        {
          title: 'Delta Robots',
          description: 'High-speed parallel robots perfect for pick-and-place tasks in packaging and assembly.',
        },
        {
          title: 'Gantry Systems',
          description: 'Multi-axis linear motion systems for large workspace applications and CNC machines.',
        },
        {
          title: 'Cobots',
          description: 'Collaborative robots designed for safe human-robot interaction in shared workspaces.',
        },
        {
          title: 'Custom Systems',
          description: 'Tailored mechanical solutions ranging from complex specialized machinery to simplified automation, engineered into an intuitive robotic platform.',
        },
      ],
    },
    // Solutions Section
    solutions: {
      label: 'SOLUTIONS',
      title: 'Your System, Your Choice',
      description: 'Two paths to implementation — choose the approach that best fits your project requirements and timeline.',
      motionA: {
        title: 'MotionA',
        subtitle: 'The Soft Motion Solution',
        description: 'Integrate our flexible, hardware-agnostic software core directly into your existing or custom hardware for maximum control and adaptability.',
        features: [
          'Architecture Agnostic: Fully compatible with any processor architecture (x86, ARM, RISC-V, etc.)',
          'Versatile Deployment: Optimized to run on microcontrollers (MCUs), embedded PCs, or any real-time hardware environment',
          'Standardized Fieldbus Support: Native support for EtherCAT and CANopen communication protocols',
          'Comprehensive Kinematics: Pre-configured support for Cobots, Delta, SCARA, Gantry, and custom kinematic designs',
          'Flexible OS Integration: Supports everything from bare-metal implementations to full RTOS integration',
        ],
        learnMore: 'Learn More',
      },
      motionASpark: {
        title: 'MotionA-Spark',
        subtitle: 'The Integrated Hardware',
        description: 'Deploy a streamlined, all-in-one hardware solution for cost-sensitive applications and rapid, simplified system deployment.',
        features: [
          'Motor stepper drivers integrated',
          'Sensor inputs for homing',
          'Encoder inputs for closed-loop',
          'Ethernet connectivity',
          'USB interface',
          'Ideal for delta robots, gantry systems and SCARA robots',
        ],
        learnMore: 'Learn More',
      },
    },
    // Resources Section
    resources: {
      label: 'RESOURCES',
      title: 'Your Next Move',
      description: 'Dive deeper into MotionA and discover how it can transform your motion control.',
      items: [
        {
          title: 'Read the Article',
          subtitle: 'Motion Control Neu Gedacht',
          description: 'Get an in-depth perspective in our feature article from Industrielle Automation magazine.',
          cta: 'Feature Article',
        },
        {
          title: 'Watch Demos',
          subtitle: 'YouTube Playlist',
          description: 'Explore our dedicated playlist packed with practical demonstrations and real-world applications.',
          cta: 'YouTube Channel',
        },
        {
          title: 'Explore Documentation',
          subtitle: 'Technical Wiki',
          description: 'Discover comprehensive technical details, API references, and integration guides in our wiki.',
          cta: 'Documentation',
        },
      ],
      viewPricing: 'View Pricing & TCO',
    },
    // Products Hub Section
    productsHub: {
      label: 'ALL PRODUCTS',
      title: 'Our Complete Product Portfolio',
      description: 'Explore our comprehensive range of motion control solutions, IoT connectivity, FPGA systems, and engineering services.',
      categories: {
        motionControl: 'Motion Control',
        iotConnectivity: 'IoT & Connectivity',
        fpgaSolutions: 'FPGA Solutions',
        services: 'Services',
      },
      products: [
        {
          id: 'komi-monitor',
          name: 'Komi Temperature & Humidity Monitor',
          category: 'IoT & Connectivity',
          description: 'Real-time environmental monitoring with network connectivity.',
        },
        {
          id: 'zynq-pcie',
          name: 'ZYNQ PCIe Board',
          category: 'FPGA Solutions',
          description: 'High-performance FPGA board for advanced computing applications.',
        },
        {
          id: 'lorawan-gateway',
          name: 'LoraWAN Gateway',
          category: 'IoT & Connectivity',
          description: 'Long-range wireless connectivity for IoT applications.',
        },
      ],
      learnMore: 'Learn More',
    },
    // Contact Section
    contact: {
      label: 'GET IN TOUCH',
      title: 'Let\'s Discuss Your Motion Control Needs',
      description: 'Reach out to our team to explore how MotionA can power your next robotic innovation.',
      address: {
        title: 'Address',
        street: 'Teichäcker 4',
        city: '72127 Kusterdingen',
        country: 'Germany',
      },
      phone: {
        title: 'Phone',
        number: '070711384161-0',
      },
      email: {
        title: 'Email',
        address: 'mail@duebon-engineering.de',
      },
      visitWebsite: 'Visit Website',
      funding: 'MotionA received research funding from the BSFZ due to its innovative nature.',
    },
    // Footer
    footer: {
      tagline: 'Advanced motion control solutions for modern robotics.',
      products: 'Products',
      productLinks: {
        software: 'MotionA Software',
        spark: 'MotionA-Spark',
        pricing: 'Pricing & TCO',
      },
      resources: 'Resources',
      resourceLinks: {
        documentation: 'Documentation',
        youtube: 'YouTube Channel',
        article: 'Feature Article',
      },
      copyright: '© 2026 Dübon Engineering GmbH. All rights reserved.',
      footerAddress: 'Teichäcker 4, 72127 Kusterdingen, Germany',
      imprint: 'Imprint',
    },
    // Imprint Page
    imprint: {
      title: 'Imprint',
      companyDetails: 'Company Details',
      legalInformation: 'Legal Information',
      contact: 'Contact',
      companyName: 'Dübon Engineering GmbH',
      address: 'Teichäcker 4',
      city: '72127 Kusterdingen-Tübingen',
      country: 'Germany',
      registerCourt: 'Register Court',
      registerCourtValue: 'Amtsgericht Stuttgart, HRB 760981',
      managingDirector: 'Managing Director',
      managingDirectorValue: 'Matthias Dübon',
      vatId: 'VAT ID',
      vatIdValue: 'DE311221880',
      phone: 'Phone',
      phoneValue: '+49 (0) 70711384161-0',
      email: 'Email',
      emailValue: 'mail@duebon-engineering.de',
      website: 'Website',
      websiteValue: 'www.duebon-engineering.de',
    },
    // Cookie Consent
    cookieConsent: {
      title: 'Cookie Settings',
      description: 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.',
      accept: 'Accept',
      decline: 'Decline',
      learnMore: 'Learn more in our Privacy Policy',
    },
  },
  de: {
    // Header
    header: {
      features: 'Funktionen',
      products: 'Produkte',
      contact: 'Kontakt',
      documentation: 'Dokumentation',
      dubon: 'DÜBON ENGINEERING',
      advancedMotionControl: 'Advanced Motion Control',
    },
    // Hero Section
    hero: {
      label: 'Advanced Motion Control Solution',
      title1: 'MotionA',
      title2: 'Power in Motion',
      title3: '',
      description: 'Die fortschrittliche Motion-Control-Lösung der Dübon Engineering GmbH. Nahtlose Integration in jedes Robotersystem bei höchster Flexibilität und Präzision.',
      exploreSolutions: 'Lösungen entdecken',
      watchDemo: 'Demo ansehen',
      realtime: 'Echtzeit',
      precise: 'Präzise',
    },
    // Use Cases Section
    useCases: {
      label: 'ANWENDUNGSFÄLLE',
      title: 'Wann ist MotionA die richtige Wahl?',
      description: 'MotionA ist die ideale Lösung, wenn Sie leistungsstarke Bewegungssteuerung ohne unnötige Komplexität benötigen.',
      cases: [
        {
          title: 'Suchen Sie Alternativen zur SPS?',
          description: 'Lösen Sie sich von den Einschränkungen traditioneller SPSen mit einer flexiblen, modernen Steuerungsplattform.',
        },
        {
          title: 'Benötigen Sie Echtzeit ohne Komplexität?',
          description: 'Profitieren Sie von harter Echtzeit-Performance, ohne sich in komplexer Low-Level-Programmierung zu verlieren.',
        },
        {
          title: 'Motion Control ohne Overhead?',
          description: 'Realisieren Sie anspruchsvolle Bewegungsabläufe ohne die Last schwerfälliger Infrastruktur.',
        },
        {
          title: 'Kosteneffizienz in der Serie?',
          description: 'Eine wirtschaftliche Lösung, perfekt skalierbar für die Serienproduktion.',
        },
        {
          title: 'Wollen Sie die Power von KI nutzen?',
          description: 'Integrieren Sie KI-Funktionen nahtlos in Ihre Echtzeit-Bewegungsaufgaben.',
        },
      ],
    },
    // Core Capabilities Section
    coreCapabilities: {
      label: 'KERNFUNKTIONEN',
      title: 'Ein Core, jede Umgebung',
      description: 'MotionA ist eine hochgradig anpassbare Steuerungslösung, entwickelt für verschiedenste Prozessumgebungen. Unser Kernprinzip ist Flexibilität.',
      capabilities: [
        {
          title: 'Hardware-Unabhängigkeit',
          description: 'Läuft auf Mikrocontrollern, Embedded-PCs (x86, ARM) oder vollständigen Linux/Windows-Systemen. Totale Hardware-Freiheit.',
        },
        {
          title: 'Flexible Integration',
          description: 'Dank unserer anpassbaren Architektur integrieren Sie MotionA nahtlos in praktisch jedes neue oder bestehende Robotersystem.',
        },
        {
          title: 'Echtzeit-Performance',
          description: 'Funktioniert auf jedem Echtzeit-System – vom Bare-Metal-Mikrocontroller bis zu Linux mit RT-Patch für deterministische Steuerung.',
        },
        {
          title: 'Betriebssystem-agnostisch',
          description: 'Kompatibel mit Linux- und Windows-basierten Systemen für eine vielseitige Integration in Ihre bestehende Infrastruktur.',
        },
        {
          title: 'Kein Vendor Lock-in',
          description: 'Wählen Sie die beste Hardware für Ihre Anwendung, ohne an einen bestimmten Hersteller oder ein geschlossenes Ökosystem gebunden zu sein.',
        },
      ],
    },
    // Advanced Capabilities Section
    advancedCapabilities: {
      label: 'ERWEITERTE FUNKTIONEN',
      title: 'Motorkonfiguration und Überwachung',
      description: 'Umfassende Tools zur Überwachung, Konfiguration und Optimierung Ihres Systems in Echtzeit.',
      features: [
        {
          title: 'Echtzeit-Datenüberwachung',
          description: 'Überwachen Sie kritische Dynamiken über mehrere Achsen gleichzeitig. MotionA protokolliert hochauflösende Daten – inklusive Position, Geschwindigkeit und Drehmoment – zur Visualisierung und Diagnose in Echtzeit.',
        },
        {
          title: 'Zentrale Motorkonfiguration',
          description: 'Vereinfachen Sie die Einrichtung mit einer zentralen Schnittstelle für Betriebsmodi (z. B. CSP), Homing-Methoden und Sicherheitsgrenzen. Optimieren Sie Interpolationszeiten und Stromwerte für maximalen Durchsatz und Hardware-Schutz.',
        },
        {
          title: 'KI-gestütztes Auto-Tuning',
          description: 'Keine manuelle PID-Kalibrierung mehr: MotionA nutzt KI-Algorithmen, um das Motorverhalten zu analysieren und optimale Parameter automatisch zu berechnen. Das Resultat: Geringere Einschwingzeiten und weniger Vibrationen.',
        },
        {
          title: 'Erweiterte Diagnose',
          description: 'Greifen Sie über dedizierte Datenkanäle auf tiefergehende Systeminformationen zu. Vom Tracking der Statuswörter bis zur Überwachung digitaler Eingänge bietet MotionA volle Transparenz für proaktive Wartung.',
        },
      ],
    },
    // Versatility Section
    versatility: {
      label: 'VIELSEITIGKEIT',
      title: 'Von Cobots bis zu Portalsystemen',
      description: 'Egal ob Sie sich für den Software-Kern oder die integrierte Hardware entscheiden – MotionA bietet das Fundament für ein breites Spektrum an Anwendungen.',
      robots: [
        {
          title: 'SCARA-Roboter',
          description: 'Selektive Compliance-Arme für präzise Montage- und Pick-and-Place-Aufgaben.',
        },
        {
          title: 'Delta-Roboter',
          description: 'Hochgeschwindigkeits-Parallelkinematiken, ideal für Verpackung und Montage.',
        },
        {
          title: 'Portalsysteme',
          description: 'Mehrachsige Linear-Systeme für große Arbeitsbereiche und CNC-Anwendungen.',
        },
        {
          title: 'Cobots',
          description: 'Kollaborative Roboter für die sichere Mensch-Roboter-Interaktion.',
        },
        {
          title: 'Sondermaschinen',
          description: 'Maßgeschneiderte mechanische Lösungen – von komplexen Spezialmaschinen bis zur einfachen Automatisierung.',
        },
      ],
    },
    // Solutions Section
    solutions: {
      label: 'LÖSUNGEN',
      title: 'Ihr System, Ihre Wahl',
      description: 'Zwei Wege zur Implementierung – wählen Sie den Ansatz, der am besten zu Ihren Projektanforderungen passt.',
      motionA: {
        title: 'MotionA',
        subtitle: 'Die Soft-Motion-Lösung',
        description: 'Integrieren Sie unseren flexiblen, hardware-agnostischen Software-Kern direkt in Ihre Elektronik für maximale Kontrolle.',
        features: [
          'Architektur-agnostisch: Kompatibel mit jeder Prozessorarchitektur (x86, ARM, RISC-V, etc.)',
          'Vielseitiges Deployment: Optimiert für MCUs, Embedded-PCs oder jede Echtzeit-Hardware',
          'Standardisierter Feldbus: Native Unterstützung für EtherCAT und CANopen',
          'Umfassende Kinematik: Vorkonfiguriert für Cobots, Delta, SCARA, Portale und Custom-Kinematiken',
          'Flexible OS-Integration: Von Bare-Metal bis RTOS',
        ],
        learnMore: 'Mehr erfahren',
      },
      motionASpark: {
        title: 'MotionA-Spark',
        subtitle: 'Die integrierte Hardware',
        description: 'Die All-in-One Hardware-Lösung für kostensensitive Anwendungen und schnelle Time-to-Market.',
        features: [
          'Integrierte Schrittmotortreiber',
          'Sensoreingänge für Homing',
          'Encoder-Eingänge für Closed-Loop',
          'Ethernet-Konnektivität & USB-Schnittstelle',
          'Ideal für Delta-Roboter, Portalsysteme und SCARA',
        ],
        learnMore: 'Mehr erfahren',
      },
    },
    // Resources Section
    resources: {
      label: 'RESSOURCEN',
      title: 'Ihr nächster Schritt',
      description: 'Tauchen Sie tiefer in MotionA ein und erfahren Sie, wie Sie Ihre Steuerungstechnik transformieren können.',
      items: [
        {
          title: 'Artikel lesen',
          subtitle: 'Motion Control neu gedacht',
          description: 'Lesen Sie unseren Feature-Artikel im Magazin "Industrielle Automation".',
          cta: 'Zum Artikel',
        },
        {
          title: 'Demos ansehen',
          subtitle: 'YouTube-Playlist',
          description: 'Praktische Demonstrationen und reale Anwendungen in unserer Video-Playlist.',
          cta: 'Zum YouTube-Kanal',
        },
        {
          title: 'Dokumentation erkunden',
          subtitle: 'Technisches Wiki',
          description: 'Technische Details, API-Referenzen und Integrationsleitfäden in unserem Wiki.',
          cta: 'Zur Dokumentation',
        },
      ],
      viewPricing: 'Preise & TCO ansehen',
    },
    // Products Hub Section
    productsHub: {
      label: 'ALLE PRODUKTE',
      title: 'Unser vollständiges Produktportfolio',
      description: 'Entdecken Sie unsere Palette an Motion-Control-Lösungen, IoT-Konnektivität, FPGA-Systemen und Engineering-Services.',
      categories: {
        motionControl: 'Motion Control',
        iotConnectivity: 'IoT & Konnektivität',
        fpgaSolutions: 'FPGA-Lösungen',
        services: 'Services',
      },
      products: [
        {
          id: 'komi-monitor',
          name: 'Komi Temperatur- & Feuchtigkeitsmonitor',
          category: 'IoT & Konnektivität',
          description: 'Echtzeit-Umgebungsüberwachung mit Netzwerkanbindung.',
        },
        {
          id: 'zynq-pcie',
          name: 'ZYNQ PCIe Board',
          category: 'FPGA-Lösungen',
          description: 'Hochleistungs-FPGA-Karte für anspruchsvolle Rechenanwendungen.',
        },
        {
          id: 'lorawan-gateway',
          name: 'LoRaWAN Gateway',
          category: 'IoT & Konnektivität',
          description: 'Drahtlose Konnektivität mit hoher Reichweite für IoT-Anwendungen.',
        },
      ],
      learnMore: 'Mehr erfahren',
    },
    // Contact Section
    contact: {
      label: 'KONTAKT',
      title: 'Sprechen wir über Ihre Anforderungen',
      description: 'Kontaktieren Sie unser Team und erfahren Sie, wie MotionA Ihre nächste Roboter-Innovation antreiben kann.',
      address: {
        title: 'Anschrift',
        street: 'Teichäcker 4',
        city: '72127 Kusterdingen',
        country: 'Deutschland',
      },
      phone: {
        title: 'Telefon',
        number: '070711384161-0',
      },
      email: {
        title: 'E-Mail',
        address: 'mail@duebon-engineering.de',
      },
      visitWebsite: 'Website besuchen',
      funding: 'MotionA wird aufgrund seiner innovativen Natur durch das BSFZ gefördert.',
    },
    // Footer
    footer: {
      tagline: 'Fortschrittliche Motion-Control-Lösungen für moderne Robotik.',
      products: 'Produkte',
      productLinks: {
        software: 'MotionA Software',
        spark: 'MotionA-Spark',
        pricing: 'Preise & TCO',
      },
      resources: 'Ressourcen',
      resourceLinks: {
        documentation: 'Dokumentation',
        youtube: 'YouTube-Kanal',
        article: 'Feature-Artikel',
      },
      copyright: '© 2026 Dübon Engineering GmbH. Alle Rechte vorbehalten.',
      footerAddress: 'Teichäcker 4, 72127 Kusterdingen, Deutschland',
      imprint: 'Impressum',
    },
    // Imprint Page
    imprint: {
      title: 'Impressum',
      companyDetails: 'Firmenangaben',
      legalInformation: 'Rechtliche Informationen',
      contact: 'Kontakt',
      companyName: 'Dübon Engineering GmbH',
      address: 'Teichäcker 4',
      city: '72127 Kusterdingen-Tübingen',
      country: 'Deutschland',
      registerCourt: 'Registerbereich',
      registerCourtValue: 'Amtsgericht Stuttgart, HRB 760981',
      managingDirector: 'Geschäftsführer',
      managingDirectorValue: 'Matthias Dübon',
      vatId: 'USt-IdNr.',
      vatIdValue: 'DE311221880',
      phone: 'Telefon',
      phoneValue: '+49 (0) 70711384161-0',
      email: 'E-Mail',
      emailValue: 'mail@duebon-engineering.de',
      website: 'Website',
      websiteValue: 'www.duebon-engineering.de',
    },
    // Cookie Consent
    cookieConsent: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern und unseren Traffic zu analysieren. Durch Klicken auf "Akzeptieren" stimmen Sie der Verwendung von Cookies zu.',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
      learnMore: 'Mehr erfahren in unserer Datenschutzerklärung',
    },
  },
};
