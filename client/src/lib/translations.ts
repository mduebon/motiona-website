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
      title2: 'Unlock Your',
      title3: 'Robotic Potential',
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
        number: '07071 / 138 416 109',
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
      advancedMotionControl: 'Fortgeschrittene Bewegungssteuerung',
    },
    // Hero Section
    hero: {
      label: 'Fortgeschrittene Bewegungssteuerungslösung',
      title1: 'MotionA',
      title2: 'Entfesseln Sie Ihr',
      title3: 'Robotisches Potenzial',
      description: 'Die fortgeschrittene Bewegungssteuerungslösung von Dübon Engineering GmbH. Nahtlose Integration in jedes Robotersystem mit unvergleichlicher Flexibilität und Präzision.',
      exploreSolutions: 'Lösungen erkunden',
      watchDemo: 'Demo ansehen',
      realtime: 'Echtzeit',
      precise: 'Präzise',
    },
    // Use Cases Section
    useCases: {
      label: 'ANWENDUNGSFÄLLE',
      title: 'Wann MotionA verwenden',
      description: 'MotionA ist die perfekte Lösung, wenn Sie leistungsstarke Bewegungssteuerung ohne Komplexität benötigen.',
      cases: [
        {
          title: 'Suchen Sie nach Alternativen zu SPSen?',
          description: 'Befreien Sie sich von den Einschränkungen traditioneller SPSen mit einer flexiblen, modernen Bewegungssteuerungsplattform.',
        },
        {
          title: 'Benötigen Sie Echtzeit ohne Komplexität?',
          description: 'Erhalten Sie Echtzeit-Leistung, ohne sich in komplexe Echtzeit-Programmierung zu vertiefen.',
        },
        {
          title: 'Bewegungssteuerung ohne Aufwand?',
          description: 'Erreichen Sie anspruchsvolle Bewegungssteuerung ohne die Belastung komplexer Infrastruktur.',
        },
        {
          title: 'Niedrige Kosten für die Serienproduktion?',
          description: 'Kostengünstige Lösung, die perfekt für Anforderungen der Serienproduktion geeignet ist.',
        },
        {
          title: 'Möchten Sie die volle Kraft der KI nutzen?',
          description: 'Nutzen Sie KI-Funktionen für Ihre Echtzeit-Bewegungsaufgaben mit nahtloser Integration.',
        },
      ],
    },
    // Core Capabilities Section
    coreCapabilities: {
      label: 'KERNFUNKTIONEN',
      title: 'Ein Kern, jede Umgebung',
      description: 'MotionA ist eine hochgradig anpassbare und integrierte Steuerungslösung, die für eine breite Palette von Verarbeitungsumgebungen konzipiert ist. Das Kernprinzip ist Flexibilität.',
      capabilities: [
        {
          title: 'Beliebiger Prozessor',
          description: 'Läuft auf Mikrocontrollern, eingebetteten PCs (x86, ARM) oder vollständigen Linux/Windows-Systemen. Vollständige Hardware-Freiheit.',
        },
        {
          title: 'Flexible Integration',
          description: 'Nahtlose Integration in praktisch jedes neue oder bestehende Robotersystem mit unserer anpassbaren Architektur.',
        },
        {
          title: 'Echtzeit-Leistung',
          description: 'Läuft auf jedem Echtzeit-System, von Bare-Metal-Mikrocontrollern bis zu Linux mit Echtzeit-Patches für deterministische Steuerung.',
        },
        {
          title: 'Betriebssystem-agnostisch',
          description: 'Funktioniert mit Linux- und Windows-basierten Systemen für vielseitige Integration mit Ihrer bestehenden Infrastruktur.',
        },
        {
          title: 'Keine Herstellerbindung',
          description: 'Wählen Sie die beste Hardware für Ihre Anwendung, ohne an einen bestimmten Anbieter oder ein Ökosystem gebunden zu sein.',
        },
      ],
    },
    // Advanced Capabilities Section
    advancedCapabilities: {
      label: 'ERWEITERTE FUNKTIONEN',
      title: 'Motorkonfiguration und Überwachung',
      description: 'Umfassende Tools zur Überwachung, Konfiguration und Optimierung Ihres Bewegungssteuerungssystems in Echtzeit.',
      features: [
        {
          title: 'Echtzeit-Datenüberwachung',
          description: 'Überwachen Sie kritische Dynamiken über mehrere Achsen gleichzeitig. MotionA protokolliert hochauflösende Daten – einschließlich Position, Geschwindigkeit und Drehmoment – und ermöglicht Ingenieuren, die Leistung zu visualisieren und Engpässe in Echtzeit zu diagnostizieren.',
        },
        {
          title: 'Umfassende Motorkonfiguration',
          description: 'Vereinfachen Sie die Einrichtung mit einer zentralisierten Schnittstelle zur Definition von Betriebsmodi (z. B. CSP), Homing-Methoden und Sicherheitsgrenzen. Optimieren Sie Interpolationszeiten und Stromwerte, um Ihre Hardware zu schützen und den Durchsatz zu maximieren.',
        },
        {
          title: 'KI-gestützte automatische Abstimmung',
          description: 'Beseitigen Sie die Komplexität der manuellen PID-Kalibrierung. MotionA nutzt fortschrittliche KI-Algorithmen, um das Motorverhalten zu analysieren und automatisch optimale Parameter zu berechnen, wodurch Einschwingzeiten und Vibrationen für eine sanftere, präzisere Bewegung reduziert werden.',
        },
        {
          title: 'Erweiterte Diagnose',
          description: 'Greifen Sie auf Informationen auf tieferer Ebene über dedizierte Datenkanäle zu. Von der Verfolgung von Statuswörtern bis zur Überwachung digitaler Eingänge bietet MotionA die Transparenz, die für proaktive Wartung und schnelle Fehlerbehebung erforderlich ist.',
        },
      ],
    },
    // Versatility Section
    versatility: {
      label: 'VIELSEITIGKEIT',
      title: 'Von Cobots bis zu Portalkränen',
      description: 'Egal ob Sie sich für den Softwarekern oder die integrierte Hardware entscheiden, MotionA bietet eine robuste Grundlage für ein breites Spektrum von Roboteranwendungen.',
      robots: [
        {
          title: 'SCARA-Roboter',
          description: 'Selektive Compliance Assembly Robot Arm für präzise Montage und Pick-and-Place-Operationen.',
        },
        {
          title: 'Delta-Roboter',
          description: 'Hochgeschwindigkeits-Parallelroboter, ideal für Pick-and-Place-Aufgaben in Verpackung und Montage.',
        },
        {
          title: 'Portalsysteme',
          description: 'Multi-Achsen-Linearbewegungssysteme für Anwendungen mit großem Arbeitsbereich und CNC-Maschinen.',
        },
        {
          title: 'Cobots',
          description: 'Kollaborative Roboter, die für sichere Mensch-Roboter-Interaktion in gemeinsamen Arbeitsbereichen konzipiert sind.',
        },
        {
          title: 'Benutzerdefinierte Systeme',
          description: 'Maßgeschneiderte mechanische Lösungen, die von komplexer spezialisierter Maschinen bis zu vereinfachter Automatisierung reichen.',
        },
      ],
    },
    // Solutions Section
    solutions: {
      label: 'LÖSUNGEN',
      title: 'Ihr System, Ihre Wahl',
      description: 'Zwei Implementierungspfade – wählen Sie den Ansatz, der am besten zu Ihren Projektanforderungen und Zeitplänen passt.',
      motionA: {
        title: 'MotionA',
        subtitle: 'Die Soft-Motion-Lösung',
        description: 'Integrieren Sie unseren flexiblen, hardwareagnostischen Softwarekern direkt in Ihre bestehende oder benutzerdefinierte Hardware für maximale Kontrolle und Anpassbarkeit.',
        features: [
          'Architektur-agnostisch: Vollständig kompatibel mit jeder Prozessorarchitektur (x86, ARM, RISC-V, etc.)',
          'Vielseitige Bereitstellung: Optimiert für die Ausführung auf Mikrocontrollern (MCUs), eingebetteten PCs oder jeder Echtzeit-Hardware-Umgebung',
          'Standardisierte Feldbus-Unterstützung: Native Unterstützung für EtherCAT- und CANopen-Kommunikationsprotokolle',
          'Umfassende Kinematik: Vorkonfigurierte Unterstützung für Cobots, Delta, SCARA, Portalkran und benutzerdefinierte kinematische Designs',
          'Flexible Betriebssystem-Integration: Unterstützt alles von Bare-Metal-Implementierungen bis zu vollständiger RTOS-Integration',
        ],
        learnMore: 'Mehr erfahren',
      },
      motionASpark: {
        title: 'MotionA-Spark',
        subtitle: 'Die integrierte Hardware',
        description: 'Stellen Sie eine rationalisierte All-in-One-Hardware-Lösung für kostensensitive Anwendungen und schnelle, vereinfachte Systembereitstellung bereit.',
        features: [
          'Integrierte Motor-Schrittmotortreiber',
          'Sensoreingänge für Homing',
          'Encoder-Eingänge für geschlossene Schleife',
          'Ethernet-Konnektivität',
          'USB-Schnittstelle',
          'Ideal für Delta-Roboter, Portalsysteme und SCARA-Roboter',
        ],
        learnMore: 'Mehr erfahren',
      },
    },
    // Resources Section
    resources: {
      label: 'RESSOURCEN',
      title: 'Ihr nächster Schritt',
      description: 'Tauchen Sie tiefer in MotionA ein und entdecken Sie, wie es Ihre Bewegungssteuerung transformieren kann.',
      items: [
        {
          title: 'Artikel lesen',
          subtitle: 'Motion Control Neu Gedacht',
          description: 'Erhalten Sie eine tiefgreifende Perspektive in unserem Feature-Artikel aus dem Magazin Industrielle Automation.',
          cta: 'Feature-Artikel',
        },
        {
          title: 'Demos ansehen',
          subtitle: 'YouTube-Playlist',
          description: 'Erkunden Sie unsere dedizierte Playlist mit praktischen Demonstrationen und realen Anwendungen.',
          cta: 'YouTube-Kanal',
        },
        {
          title: 'Dokumentation erkunden',
          subtitle: 'Technisches Wiki',
          description: 'Entdecken Sie umfassende technische Details, API-Referenzen und Integrationsleitfäden in unserem Wiki.',
          cta: 'Dokumentation',
        },
      ],
      viewPricing: 'Preise & TCO anzeigen',
    },
    // Contact Section
    contact: {
      label: 'KONTAKT',
      title: 'Lassen Sie uns über Ihre Bewegungssteuerungsanforderungen sprechen',
      description: 'Wenden Sie sich an unser Team, um zu erfahren, wie MotionA Ihre nächste Roboterinnovation antreiben kann.',
      address: {
        title: 'Adresse',
        street: 'Teichäcker 4',
        city: '72127 Kusterdingen',
        country: 'Deutschland',
      },
      phone: {
        title: 'Telefon',
        number: '07071 / 138 416 109',
      },
      email: {
        title: 'E-Mail',
        address: 'mail@duebon-engineering.de',
      },
      visitWebsite: 'Website besuchen',
      funding: 'MotionA erhielt Forschungsförderung von der BSFZ aufgrund seiner innovativen Natur.',
    },
    // Footer
    footer: {
      tagline: 'Fortgeschrittene Bewegungssteuerungslösungen für moderne Robotik.',
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
    },
  },
};
