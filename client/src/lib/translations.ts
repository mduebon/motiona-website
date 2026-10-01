export type Language = "en" | "de";

export const translations = {
  en: {
    // Header
    header: {
      features: "Features",
      products: "Products",
      contact: "Contact",
      documentation: "Documentation",
      dubon: "DÜBON ENGINEERING",
      advancedMotionControl: "Advanced Motion Control",
    },
    // Hero Section
    hero: {
      label: "Embedded · Real-Time · AI · Motion Control",
      title1: "Engineering for",
      title2: "embedded real-time",
      title3: "and AI systems.",
      description:
        "Dübon Engineering GmbH builds embedded, real-time and AI systems for industrial automation — with MotionA as our flagship motion control product.",
      exploreSolutions: "Explore Solutions",
      watchDemo: "Watch Demo",
      realtime: "Real-time",
      precise: "Precise",
      flagshipBadge: "Flagship product",
      flagshipTitle: "MotionA",
      flagshipSubtitle: "Motion control, reimagined.",
    },
    // Trust Strip
    trustStrip: {
      research: {
        title: "BSFZ-certified R&D",
        description:
          "Recognised under the German research allowance (Forschungszulage) for our innovative work.",
      },
      company: {
        title: "GmbH since 2017",
        description:
          "Established engineering firm — accountable, contract-ready, long-term partner.",
      },
      investment: {
        title: "Self-funded R&D",
        description:
          "Independent, owner-led — we reinvest into our own platform and research.",
      },
    },
    // Supporters / Funding Strip
    supporters: {
      label: "SUPPORTED & FUNDED BY",
      partners: [
        { name: "Covision", logo: "/images/covision-logo.jpg" },
        { name: "MFG", logo: "/images/mfg-logo.png" },
        { name: "BSFZ", logo: "/images/bsfz-logo.png" },
      ],
    },
    // Use Cases Section
    useCases: {
      label: "USE CASES",
      title: "When to use MotionA",
      description:
        "MotionA is the perfect solution when you need powerful motion control without the complexity.",
      cases: [
        {
          title: "Looking for alternatives to PLCs?",
          description:
            "Break free from traditional PLC limitations with a flexible, modern motion control platform.",
        },
        {
          title: "Need realtime without the complexity?",
          description:
            "Get real-time performance without diving into complex realtime programming.",
        },
        {
          title: "Motion without the hassle?",
          description:
            "Achieve sophisticated motion control without the burden of complex infrastructure.",
        },
        {
          title: "Low cost for series production?",
          description:
            "Cost-effective solution perfectly suited for series production requirements.",
        },
        {
          title: "Want to unlock the full power of AI?",
          description:
            "Leverage AI capabilities for your realtime motion tasks with seamless integration.",
        },
      ],
    },
    // Core Capabilities Section
    coreCapabilities: {
      label: "CORE CAPABILITIES",
      title: "One Core, Any Environment",
      description:
        "MotionA is a highly adaptable and integrated control solution designed for a wide range of processing environments. Its core principle is flexibility.",
      capabilities: [
        {
          title: "Any Processor",
          description:
            "Run on microcontrollers, embedded PCs (x86, ARM), or full Linux/Windows systems. Complete hardware freedom.",
        },
        {
          title: "Flexible Integration",
          description:
            "Seamlessly integrate into virtually any new or existing robotic system with our adaptable architecture.",
        },
        {
          title: "Real-Time Performance",
          description:
            "Runs on every real-time system, from bare-metal microcontrollers to Linux with real-time patches for deterministic control.",
        },
        {
          title: "OS Agnostic",
          description:
            "Works with Linux and Windows-based systems for versatile integration with your existing infrastructure.",
        },
        {
          title: "No Vendor Lock-in",
          description:
            "Choose the best hardware for your application without being tied to a specific vendor or ecosystem.",
        },
      ],
    },
    // Advanced Capabilities Section
    advancedCapabilities: {
      label: "ADVANCED CAPABILITIES",
      title: "Motor Configuration and Supervision",
      description:
        "Comprehensive tools for monitoring, configuring, and optimizing your motion control system in real-time.",
      features: [
        {
          title: "Real-Time Data Supervision",
          description:
            "Monitor critical dynamics across multiple axes simultaneously. MotionA logs high-resolution data—including position, velocity, and torque—allowing engineers to visualize performance and diagnose bottlenecks as they happen.",
        },
        {
          title: "Comprehensive Motor Configuration",
          description:
            "Streamline setup with a centralized interface for defining operational modes (such as CSP), homing methods, and safety limits. Fine-tune interpolation times and current ratings to protect your hardware while maximizing throughput.",
        },
        {
          title: "AI-Powered Automated Tuning",
          description:
            "Eliminate the complexity of manual PID calibration. MotionA utilizes advanced AI algorithms to analyze motor behavior and automatically calculate optimal parameters, reducing settling times and vibration for smoother, more precise motion.",
        },
        {
          title: "Advanced Diagnostics",
          description:
            "Access deep-layer information through dedicated data channels. From tracking Status Words to monitoring digital inputs, MotionA provides the transparency needed for proactive maintenance and rapid troubleshooting.",
        },
      ],
    },
    // Versatility Section
    versatility: {
      label: "VERSATILITY",
      title: "From Cobots to Gantries",
      description:
        "Whether you choose the software core or the integrated hardware, MotionA provides a robust foundation for a wide spectrum of robotic applications.",
      robots: [
        {
          title: "SCARA Robots",
          description:
            "Selective Compliance Assembly Robot Arm for precise assembly and pick-and-place operations.",
        },
        {
          title: "Delta Robots",
          description:
            "High-speed parallel robots perfect for pick-and-place tasks in packaging and assembly.",
        },
        {
          title: "Gantry Systems",
          description:
            "Multi-axis linear motion systems for large workspace applications and CNC machines.",
        },
        {
          title: "Cobots",
          description:
            "Collaborative robots designed for safe human-robot interaction in shared workspaces.",
        },
        {
          title: "Custom Systems",
          description:
            "Tailored mechanical solutions ranging from complex specialized machinery to simplified automation, engineered into an intuitive robotic platform.",
        },
      ],
    },
    // Engineering Expertise Section
    expertise: {
      label: "ENGINEERING EXPERTISE",
      title: "Beyond Motion Control",
      description:
        "As Dübon Engineering GmbH, we bring deep embedded and industrial engineering expertise to your project — from regulatory compliance to standardized hardware management.",
      areas: [
        {
          tag: "EU REGULATION",
          title: "Cyber Resilience Act (CRA)",
          description:
            "We make connected products CRA-ready: Software Bill of Materials (SBOM), secure boot, signed updates, coordinated vulnerability handling, and the technical documentation required for CE marking under the EU Cyber Resilience Act.",
        },
        {
          tag: "DMTF STANDARD",
          title: "Redfish Management",
          description:
            "Standardized, RESTful hardware management with the DMTF Redfish API: out-of-band/BMC integration, schema implementation on embedded Linux, and secure remote monitoring and control for your devices.",
        },
        {
          title: "Embedded Linux & FPGA",
          description:
            "Board bring-up, kernel and driver development, and Linux on Xilinx ZYNQ SoCs — bridging custom FPGA fabric with application software.",
        },
        {
          title: "Real-Time Control",
          description:
            "Deterministic control from bare-metal microcontrollers to RT-patched Linux, engineered for hard real-time requirements.",
        },
        {
          title: "Industrial Fieldbus",
          description:
            "Native EtherCAT and CANopen integration to connect your control system to drives, sensors, and the wider plant.",
        },
        {
          title: "Connectivity & IoT",
          description:
            "Secure remote monitoring and long-range connectivity via LoRaWAN, SNMP, and browser-based real-time dashboards.",
        },
      ],
    },
    // Solutions Section
    solutions: {
      label: "SOLUTIONS",
      title: "Your System, Your Choice",
      description:
        "Two paths to implementation — choose the approach that best fits your project requirements and timeline.",
      motionA: {
        title: "MotionA",
        subtitle: "The Soft Motion Solution",
        description:
          "Integrate our flexible, hardware-agnostic software core directly into your existing or custom hardware for maximum control and adaptability.",
        features: [
          "Architecture Agnostic: Fully compatible with any processor architecture (x86, ARM, RISC-V, etc.)",
          "Versatile Deployment: Optimized to run on microcontrollers (MCUs), embedded PCs, or any real-time hardware environment",
          "Standardized Fieldbus Support: Native support for EtherCAT and CANopen communication protocols",
          "Comprehensive Kinematics: Pre-configured support for Cobots, Delta, SCARA, Gantry, and custom kinematic designs",
          "Flexible OS Integration: Supports everything from bare-metal implementations to full RTOS integration",
        ],
        learnMore: "Learn More",
      },
      motionASpark: {
        title: "MotionA-Spark",
        subtitle: "The Integrated Hardware",
        description:
          "Deploy a streamlined, all-in-one hardware solution for cost-sensitive applications and rapid, simplified system deployment.",
        features: [
          "Motor stepper drivers integrated",
          "Sensor inputs for homing",
          "Encoder inputs for closed-loop",
          "Ethernet connectivity",
          "USB interface",
          "Ideal for delta robots, gantry systems and SCARA robots",
        ],
        learnMore: "Learn More",
      },
    },
    // Resources Section
    resources: {
      label: "RESOURCES",
      title: "Your Next Move",
      description:
        "Dive deeper into MotionA and discover how it can transform your motion control.",
      items: [
        {
          title: "Read the Article",
          subtitle: "Motion Control Neu Gedacht",
          description:
            "Get an in-depth perspective in our feature article from Industrielle Automation magazine.",
          cta: "Feature Article",
        },
        {
          title: "Watch Demos",
          subtitle: "YouTube Playlist",
          description:
            "Explore our dedicated playlist packed with practical demonstrations and real-world applications.",
          cta: "YouTube Channel",
        },
        {
          title: "Explore Documentation",
          subtitle: "Technical Wiki",
          description:
            "Discover comprehensive technical details, API references, and integration guides in our wiki.",
          cta: "Documentation",
        },
      ],
      viewPricing: "View Pricing & TCO",
    },
    // Products Hub Section
    productsHub: {
      label: "CORE PORTFOLIO HIGHLIGHTS",
      title: "Core Portfolio Highlights",
      description:
        "Explore examples of our work. Contact us to discuss our full range of standard products and custom services.",
      categories: {
        motionControl: "Motion Control",
        iotConnectivity: "IoT & Connectivity",
        fpgaSolutions: "FPGA Solutions",
        services: "Services",
      },
      products: [
        {
          id: "komi-monitor",
          name: "Komi Temperature & Humidity Monitor",
          category: "IoT & Connectivity",
          description:
            "Real-time environmental monitoring with network connectivity.",
        },
        {
          id: "zynq-pcie",
          name: "ZYNQ PCIe Board",
          category: "FPGA Solutions",
          description:
            "High-performance FPGA board for advanced computing applications.",
        },
        {
          id: "lorawan-gateway",
          name: "LoraWAN Gateway",
          category: "IoT & Connectivity",
          description: "Long-range wireless connectivity for IoT applications.",
        },
      ],
      learnMore: "Learn More",
    },
    // Contact Section
    contact: {
      label: "GET IN TOUCH",
      title: "Let's Discuss Your Motion Control Needs",
      description:
        "Reach out to our team to explore how MotionA can power your next robotic innovation.",
      address: {
        title: "Address",
        street: "Teichäcker 4",
        city: "72127 Kusterdingen",
        country: "Germany",
      },
      phone: {
        title: "Phone",
        number: "07071/1384161-0",
      },
      email: {
        title: "Email",
        address: "mail@duebon-engineering.de",
      },
      funding:
        "MotionA received research funding from the BSFZ due to its innovative nature.",
    },
    // Footer
    footer: {
      tagline: "Advanced motion control solutions for modern robotics.",
      products: "Products",
      productLinks: {
        software: "MotionA Software",
        spark: "MotionA-Spark",
        pricing: "Pricing & TCO",
      },
      resources: "Resources",
      resourceLinks: {
        documentation: "Documentation",
        youtube: "YouTube Channel",
        article: "Feature Article",
      },
      copyright: "© 2026 Dübon Engineering GmbH. All rights reserved.",
      footerAddress: "Teichäcker 4, 72127 Kusterdingen, Germany",
      imprint: "Imprint",
    },
    // Imprint Page
    imprint: {
      title: "Imprint",
      companyDetails: "Company Details",
      legalInformation: "Legal Information",
      contact: "Contact",
      companyName: "Dübon Engineering GmbH",
      address: "Teichäcker 4",
      city: "72127 Kusterdingen-Tübingen",
      country: "Germany",
      registerCourt: "Register Court",
      registerCourtValue: "Amtsgericht Stuttgart, HRB 760981",
      managingDirector: "Managing Director",
      managingDirectorValue: "Matthias Dübon",
      vatId: "VAT ID",
      vatIdValue: "DE311221880",
      phone: "Phone",
      phoneValue: "+49 (0) 07071/1384161-0",
      email: "Email",
      emailValue: "mail@duebon-engineering.de",
      website: "Website",
      websiteValue: "www.duebon-engineering.de",
    },
    // Cookie Consent
    videos: {
      title: "Videos",
      kernsatz:
        "The control logic in these recordings is real — the same logic that runs on the real machine. The only difference: no motors are connected.",
      intro: "Videos load from YouTube only after you click.",
      gesamt: "total running time",
      kategorien: {
        produkt: "Products",
        anwendung: "Applications",
        art: "Explorations",
      },
      eintraege: [
        {
          kategorie: "anwendung",
          titel: "Picking parts off a moving belt — delta, SCARA or cobot",
          text: [
            "On the left the Python script, on the right the simulation: a robot picks parts off a running conveyor and drops them into a bin — driven by around thirty lines of code. A camera reports each new part once; the script attaches that position to the moving belt, and from then on the part’s current position follows from the belt’s motion. For MotionA it is simply a moving target in the world model.",
            "Only the sequence is described for each part: catch up, travel with the belt, grip while moving, then drop it in the bin. Switch the machine above — delta, SCARA or cobot: only the machine file and the drop position change, the sequence in the script stays the same.",
          ],
          varianten: [
            { id: "jy2JHnxqBMk", label: "Delta" },
            { id: "_FT1h6zr-58", label: "SCARA" },
            { id: "P_YaWyQ40ng", label: "Cobot" },
          ],
        },
        {
          kategorie: "anwendung",
          titel:
            "MotionA App Note — coupling stamping axes to an externally driven carousel",
          text: [
            "On the left the machine file and the Python script, on the right a simulated stamping station: four linear axes stamp parts on a carousel. The carousel is not part of the station — a foreign drive moves it unevenly and at times backwards. MotionA does not control that drive, it only reads its position and velocity; in the machine file the carousel is a reference frame, and so are the six parts riding on it.",
            "In the script a single step couples each stamp to the parts passing by, much like an electronic cam: lower, touch at the working point, lift — even when the carousel changes speed or reverses. Every touch is reported back to the script as an event; the script counts along and stops the station after twelve stampings, lifting the stamps while the carousel keeps running.",
          ],
          varianten: [{ id: "dkIKtRiM0uQ", label: "" }],
        },
        {
          kategorie: "anwendung",
          titel:
            "MotionA App Note — setting smoothness via maximum acceleration",
          text: [
            "On the left the Python script, on the right a simulated pipettor filling a plate column by column. How smoothly the pipette moves depends on the maximum permitted acceleration, and the script changes that limit while the program runs — first 3 m/s², then 0.3 m/s², then 3 m/s² again.",
            "MotionA re-plans the path under the new constraints each time; maximum velocity and maximum jerk stay as they were. At 0.3 m/s² the pipette starts visibly more gently and brakes more softly, but needs roughly twice as long for the column. That is how the trade-off between smooth running and cycle time gets set — without reprogramming the motion sequence itself.",
          ],
          varianten: [{ id: "e_F5ZE4q62g", label: "" }],
        },
        {
          kategorie: "anwendung",
          titel:
            "One prompt, three machines — a gantry, a SCARA and a delta draw a heart",
          text: [
            "One prompt — “Construct a heart and draw an arrow” — and three machines draw the result at the same time: an XY gantry, a SCARA and a linear delta. The heart is drawn by construction, from straight lines and circular arcs at constant speed; the arrow freehand.",
            "The same motion commands run on all three kinematics; only the machine description differs. The axes are simulated, and the prompt entry on the left is illustrative.",
          ],
          varianten: [{ id: "RgzSc_ilglc", label: "" }],
        },
        {
          kategorie: "art",
          titel:
            "From text to machine motion — AI-generated movement drives a SCARA and a cobot",
          text: [
            "Type a sentence, get motion. An open-source neural network (MoMask) generates human movement from a text prompt. MotionA describes the relationships between the skeleton’s points with a few simple rules and runs the skeleton and the machines as one control program. The prompt in this clip: “a person does jumping jacks”.",
            "The SCARA on the left and the cobot on the right are simulated, but MotionA uses the same control logic it would use for physical machines: it solves their inverse kinematics and calculates a trajectory for each axis, respecting joint limits and limits on velocity, acceleration and jerk. The remaining skeleton points are virtual and have no mechanical constraints — both run in a single program. The wait for motion generation has been cut.",
          ],
          varianten: [{ id: "7BnUx9JtsB4", label: "" }],
        },
        {
          kategorie: "produkt",
          titel:
            "MotionA Measure — adaptive measuring, first simulated then real",
          text: [
            "MotionA Measure inspects parts without contact, on site at the customer — a rentable system built from aluminium profiles, a measuring head and the MotionController, described and operated with MotionA. The measuring sequence is built entirely in simulation first; later the real components are connected and nothing about the sequence changes.",
            "Instead of fixed programmed positions, MotionA keeps track of how everything relates while it measures: the part, the reference body, the individual measuring fields. Each result becomes the starting point for the next — in the video the beam stays on the reference sphere while the table brings the next field into place, with nothing reprogrammed for it. The system can also react to its own results, tracking the sensor when a surface leaves the measuring range or re-measuring specific areas.",
          ],
          varianten: [{ id: "Qjs5bP1fkxQ", label: "" }],
        },
      ],
    },
    about: {
      title: "About",
      intro:
        "Dübon Engineering GmbH develops embedded real-time and AI systems in Kusterdingen near Tübingen. Owner-managed, a GmbH since 2017.",
      werH: "What we do",
      wer: [
        "We build control technology for industrial customers — devices that go into series production and have to run in the field for years without anyone standing next to them.",
        "MotionA is our own product: a control system that carries a model of space with it. Motion is described as a relationship between objects rather than as a programmed path.",
      ],
      foerderH: "Supported and funded by",
      foerderText:
        "Development work on MotionA is recognised as research and development under the German research allowance (BSFZ) and is supported by Covision and MFG Baden-Württemberg.",
      kontaktH: "Contact",
      firma: "Dübon Engineering GmbH",
      strasse: "Teichäcker 4",
      ort: "72127 Kusterdingen",
      land: "Germany",
      telefonLabel: "Phone",
      telefon: "07071/1384161-0",
      mailLabel: "Email",
      mail: "mail@duebon-engineering.de",
      registerH: "Register",
      register: "Commercial register HRB 760981 · VAT ID DE311221880",
      impressumHinweis: "Full legal notice",
    },
    cookieConsent: {
      title: "Cookie Settings",
      description:
        'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.',
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn more in our Privacy Policy",
    },
  },
  de: {
    // Header
    header: {
      features: "Funktionen",
      products: "Produkte",
      contact: "Kontakt",
      documentation: "Dokumentation",
      dubon: "DÜBON ENGINEERING",
      advancedMotionControl: "Advanced Motion Control",
    },
    // Hero Section
    hero: {
      label: "Embedded · Echtzeit · KI · Motion Control",
      title1: "Engineering für",
      title2: "eingebettete Echtzeit-",
      title3: "und KI-Systeme.",
      description:
        "Die Dübon Engineering GmbH entwickelt eingebettete Echtzeit- und KI-Systeme für die industrielle Automation — mit MotionA als unserem Flaggschiff im Motion Control.",
      exploreSolutions: "Lösungen entdecken",
      watchDemo: "Demo ansehen",
      realtime: "Echtzeit",
      precise: "Präzise",
      flagshipBadge: "Flaggschiff-Produkt",
      flagshipTitle: "MotionA",
      flagshipSubtitle: "Motion Control neu gedacht.",
    },
    // Trust Strip
    trustStrip: {
      research: {
        title: "BSFZ-zertifizierte F&E",
        description:
          "Anerkannt im Rahmen der deutschen Forschungszulage für innovative Entwicklungstätigkeit.",
      },
      company: {
        title: "GmbH seit 2017",
        description:
          "Etabliertes Ingenieurbüro — verlässlich, vertragsfähig, langfristiger Partner.",
      },
      investment: {
        title: "Eigenfinanzierte F&E",
        description:
          "Inhabergeführt und unabhängig — wir reinvestieren in unsere eigene Plattform und Forschung.",
      },
    },
    // Supporters / Funding Strip
    supporters: {
      label: "UNTERSTÜTZT & GEFÖRDERT DURCH",
      partners: [
        { name: "Covision", logo: "/images/covision-logo.jpg" },
        { name: "MFG", logo: "/images/mfg-logo.png" },
        { name: "BSFZ", logo: "/images/bsfz-logo.png" },
      ],
    },
    // Use Cases Section
    useCases: {
      label: "ANWENDUNGSFÄLLE",
      title: "Wann ist MotionA die richtige Wahl?",
      description:
        "MotionA ist die ideale Lösung, wenn Sie leistungsstarke Bewegungssteuerung ohne unnötige Komplexität benötigen.",
      cases: [
        {
          title: "Suchen Sie Alternativen zur SPS?",
          description:
            "Lösen Sie sich von den Einschränkungen traditioneller SPSen mit einer flexiblen, modernen Steuerungsplattform.",
        },
        {
          title: "Benötigen Sie Echtzeit ohne Komplexität?",
          description:
            "Profitieren Sie von harter Echtzeit-Performance, ohne sich in komplexer Low-Level-Programmierung zu verlieren.",
        },
        {
          title: "Motion Control ohne Overhead?",
          description:
            "Realisieren Sie anspruchsvolle Bewegungsabläufe ohne die Last schwerfälliger Infrastruktur.",
        },
        {
          title: "Kosteneffizienz in der Serie?",
          description:
            "Eine wirtschaftliche Lösung, perfekt skalierbar für die Serienproduktion.",
        },
        {
          title: "Wollen Sie die Power von KI nutzen?",
          description:
            "Integrieren Sie KI-Funktionen nahtlos in Ihre Echtzeit-Bewegungsaufgaben.",
        },
      ],
    },
    // Core Capabilities Section
    coreCapabilities: {
      label: "KERNFUNKTIONEN",
      title: "Ein Core, jede Umgebung",
      description:
        "MotionA ist eine hochgradig anpassbare Steuerungslösung, entwickelt für verschiedenste Prozessumgebungen. Unser Kernprinzip ist Flexibilität.",
      capabilities: [
        {
          title: "Hardware-Unabhängigkeit",
          description:
            "Läuft auf Mikrocontrollern, Embedded-PCs (x86, ARM) oder vollständigen Linux/Windows-Systemen. Totale Hardware-Freiheit.",
        },
        {
          title: "Flexible Integration",
          description:
            "Dank unserer anpassbaren Architektur integrieren Sie MotionA nahtlos in praktisch jedes neue oder bestehende Robotersystem.",
        },
        {
          title: "Echtzeit-Performance",
          description:
            "Funktioniert auf jedem Echtzeit-System – vom Bare-Metal-Mikrocontroller bis zu Linux mit RT-Patch für deterministische Steuerung.",
        },
        {
          title: "Betriebssystem-agnostisch",
          description:
            "Kompatibel mit Linux- und Windows-basierten Systemen für eine vielseitige Integration in Ihre bestehende Infrastruktur.",
        },
        {
          title: "Kein Vendor Lock-in",
          description:
            "Wählen Sie die beste Hardware für Ihre Anwendung, ohne an einen bestimmten Hersteller oder ein geschlossenes Ökosystem gebunden zu sein.",
        },
      ],
    },
    // Advanced Capabilities Section
    advancedCapabilities: {
      label: "ERWEITERTE FUNKTIONEN",
      title: "Motorkonfiguration und Überwachung",
      description:
        "Umfassende Tools zur Überwachung, Konfiguration und Optimierung Ihres Systems in Echtzeit.",
      features: [
        {
          title: "Echtzeit-Datenüberwachung",
          description:
            "Überwachen Sie kritische Dynamiken über mehrere Achsen gleichzeitig. MotionA protokolliert hochauflösende Daten – inklusive Position, Geschwindigkeit und Drehmoment – zur Visualisierung und Diagnose in Echtzeit.",
        },
        {
          title: "Zentrale Motorkonfiguration",
          description:
            "Vereinfachen Sie die Einrichtung mit einer zentralen Schnittstelle für Betriebsmodi (z. B. CSP), Homing-Methoden und Sicherheitsgrenzen. Optimieren Sie Interpolationszeiten und Stromwerte für maximalen Durchsatz und Hardware-Schutz.",
        },
        {
          title: "KI-gestütztes Auto-Tuning",
          description:
            "Keine manuelle PID-Kalibrierung mehr: MotionA nutzt KI-Algorithmen, um das Motorverhalten zu analysieren und optimale Parameter automatisch zu berechnen. Das Resultat: Geringere Einschwingzeiten und weniger Vibrationen.",
        },
        {
          title: "Erweiterte Diagnose",
          description:
            "Greifen Sie über dedizierte Datenkanäle auf tiefergehende Systeminformationen zu. Vom Tracking der Statuswörter bis zur Überwachung digitaler Eingänge bietet MotionA volle Transparenz für proaktive Wartung.",
        },
      ],
    },
    // Versatility Section
    versatility: {
      label: "VIELSEITIGKEIT",
      title: "Von Cobots bis zu Portalsystemen",
      description:
        "Egal ob Sie sich für den Software-Kern oder die integrierte Hardware entscheiden – MotionA bietet das Fundament für ein breites Spektrum an Anwendungen.",
      robots: [
        {
          title: "SCARA-Roboter",
          description:
            "Selektive Compliance-Arme für präzise Montage- und Pick-and-Place-Aufgaben.",
        },
        {
          title: "Delta-Roboter",
          description:
            "Hochgeschwindigkeits-Parallelkinematiken, ideal für Verpackung und Montage.",
        },
        {
          title: "Portalsysteme",
          description:
            "Mehrachsige Linear-Systeme für große Arbeitsbereiche und CNC-Anwendungen.",
        },
        {
          title: "Cobots",
          description:
            "Kollaborative Roboter für die sichere Mensch-Roboter-Interaktion.",
        },
        {
          title: "Sondermaschinen",
          description:
            "Maßgeschneiderte mechanische Lösungen – von komplexen Spezialmaschinen bis zur einfachen Automatisierung.",
        },
      ],
    },
    // Engineering Expertise Section
    expertise: {
      label: "ENGINEERING-KOMPETENZ",
      title: "Mehr als Motion Control",
      description:
        "Als Dübon Engineering GmbH bringen wir tiefes Embedded- und Industrie-Know-how in Ihr Projekt ein – von regulatorischer Compliance bis zum standardisierten Hardware-Management.",
      areas: [
        {
          tag: "EU-VERORDNUNG",
          title: "Cyber Resilience Act (CRA)",
          description:
            "Wir machen vernetzte Produkte CRA-fähig: Software Bill of Materials (SBOM), Secure Boot, signierte Updates, koordiniertes Schwachstellen-Management und die technische Dokumentation für die CE-Kennzeichnung nach dem EU Cyber Resilience Act.",
        },
        {
          tag: "DMTF-STANDARD",
          title: "Redfish-Management",
          description:
            "Standardisiertes, RESTful Hardware-Management mit der DMTF-Redfish-API: Out-of-Band-/BMC-Integration, Schema-Implementierung auf Embedded Linux sowie sichere Fernüberwachung und -steuerung Ihrer Geräte.",
        },
        {
          title: "Embedded Linux & FPGA",
          description:
            "Board-Bring-up, Kernel- und Treiberentwicklung sowie Linux auf Xilinx-ZYNQ-SoCs – die Brücke zwischen kundenspezifischer FPGA-Logik und Anwendungssoftware.",
        },
        {
          title: "Echtzeit-Steuerung",
          description:
            "Deterministische Steuerung von Bare-Metal-Mikrocontrollern bis zu RT-gepatchtem Linux – ausgelegt für harte Echtzeitanforderungen.",
        },
        {
          title: "Industrieller Feldbus",
          description:
            "Native EtherCAT- und CANopen-Integration zur Anbindung Ihres Steuerungssystems an Antriebe, Sensoren und die gesamte Anlage.",
        },
        {
          title: "Konnektivität & IoT",
          description:
            "Sichere Fernüberwachung und Langstrecken-Konnektivität über LoRaWAN, SNMP und browserbasierte Echtzeit-Dashboards.",
        },
      ],
    },
    // Solutions Section
    solutions: {
      label: "LÖSUNGEN",
      title: "Ihr System, Ihre Wahl",
      description:
        "Zwei Wege zur Implementierung – wählen Sie den Ansatz, der am besten zu Ihren Projektanforderungen passt.",
      motionA: {
        title: "MotionA",
        subtitle: "Die Soft-Motion-Lösung",
        description:
          "Integrieren Sie unseren flexiblen, hardware-agnostischen Software-Kern direkt in Ihre Elektronik für maximale Kontrolle.",
        features: [
          "Architektur-agnostisch: Kompatibel mit jeder Prozessorarchitektur (x86, ARM, RISC-V, etc.)",
          "Vielseitiges Deployment: Optimiert für MCUs, Embedded-PCs oder jede Echtzeit-Hardware",
          "Standardisierter Feldbus: Native Unterstützung für EtherCAT und CANopen",
          "Umfassende Kinematik: Vorkonfiguriert für Cobots, Delta, SCARA, Portale und Custom-Kinematiken",
          "Flexible OS-Integration: Von Bare-Metal bis RTOS",
        ],
        learnMore: "Mehr erfahren",
      },
      motionASpark: {
        title: "MotionA-Spark",
        subtitle: "Die integrierte Hardware",
        description:
          "Die All-in-One Hardware-Lösung für kostensensitive Anwendungen und schnelle Time-to-Market.",
        features: [
          "Integrierte Schrittmotortreiber",
          "Sensoreingänge für Homing",
          "Encoder-Eingänge für Closed-Loop",
          "Ethernet-Konnektivität & USB-Schnittstelle",
          "Ideal für Delta-Roboter, Portalsysteme und SCARA",
        ],
        learnMore: "Mehr erfahren",
      },
    },
    // Resources Section
    resources: {
      label: "RESSOURCEN",
      title: "Ihr nächster Schritt",
      description:
        "Tauchen Sie tiefer in MotionA ein und erfahren Sie, wie Sie Ihre Steuerungstechnik transformieren können.",
      items: [
        {
          title: "Artikel lesen",
          subtitle: "Motion Control neu gedacht",
          description:
            'Lesen Sie unseren Feature-Artikel im Magazin "Industrielle Automation".',
          cta: "Zum Artikel",
        },
        {
          title: "Demos ansehen",
          subtitle: "YouTube-Playlist",
          description:
            "Praktische Demonstrationen und reale Anwendungen in unserer Video-Playlist.",
          cta: "Zum YouTube-Kanal",
        },
        {
          title: "Dokumentation erkunden",
          subtitle: "Technisches Wiki",
          description:
            "Technische Details, API-Referenzen und Integrationsleitfäden in unserem Wiki.",
          cta: "Zur Dokumentation",
        },
      ],
      viewPricing: "Preise & TCO ansehen",
    },
    // Products Hub Section
    productsHub: {
      label: "KERN-PORTFOLIO HIGHLIGHTS",
      title: "Kern-Portfolio Highlights",
      description:
        "Entdecken Sie Beispiele unserer Arbeit. Kontaktieren Sie uns, um unser vollständiges Angebot an Standardprodukten und kundenspezifischen Dienstleistungen zu besprechen.",
      categories: {
        motionControl: "Motion Control",
        iotConnectivity: "IoT & Konnektivität",
        fpgaSolutions: "FPGA-Lösungen",
        services: "Services",
      },
      products: [
        {
          id: "komi-monitor",
          name: "Komi Temperatur- & Feuchtigkeitsmonitor",
          category: "IoT & Konnektivität",
          description: "Echtzeit-Umgebungsüberwachung mit Netzwerkanbindung.",
        },
        {
          id: "zynq-pcie",
          name: "ZYNQ PCIe Board",
          category: "FPGA-Lösungen",
          description:
            "Hochleistungs-FPGA-Karte für anspruchsvolle Rechenanwendungen.",
        },
        {
          id: "lorawan-gateway",
          name: "LoRaWAN Gateway",
          category: "IoT & Konnektivität",
          description:
            "Drahtlose Konnektivität mit hoher Reichweite für IoT-Anwendungen.",
        },
      ],
      learnMore: "Mehr erfahren",
    },
    // Contact Section
    contact: {
      label: "KONTAKT",
      title: "Sprechen wir über Ihre Anforderungen",
      description:
        "Kontaktieren Sie unser Team und erfahren Sie, wie MotionA Ihre nächste Roboter-Innovation antreiben kann.",
      address: {
        title: "Anschrift",
        street: "Teichäcker 4",
        city: "72127 Kusterdingen",
        country: "Deutschland",
      },
      phone: {
        title: "Telefon",
        number: "07071/1384161-0",
      },
      email: {
        title: "E-Mail",
        address: "mail@duebon-engineering.de",
      },
      funding:
        "MotionA wird aufgrund seiner innovativen Natur durch das BSFZ gefördert.",
    },
    // Footer
    footer: {
      tagline: "Fortschrittliche Motion-Control-Lösungen für moderne Robotik.",
      products: "Produkte",
      productLinks: {
        software: "MotionA Software",
        spark: "MotionA-Spark",
        pricing: "Preise & TCO",
      },
      resources: "Ressourcen",
      resourceLinks: {
        documentation: "Dokumentation",
        youtube: "YouTube-Kanal",
        article: "Feature-Artikel",
      },
      copyright: "© 2026 Dübon Engineering GmbH. Alle Rechte vorbehalten.",
      footerAddress: "Teichäcker 4, 72127 Kusterdingen, Deutschland",
      imprint: "Impressum",
    },
    // Imprint Page
    imprint: {
      title: "Impressum",
      companyDetails: "Firmenangaben",
      legalInformation: "Rechtliche Informationen",
      contact: "Kontakt",
      companyName: "Dübon Engineering GmbH",
      address: "Teichäcker 4",
      city: "72127 Kusterdingen-Tübingen",
      country: "Deutschland",
      registerCourt: "Registerbereich",
      registerCourtValue: "Amtsgericht Stuttgart, HRB 760981",
      managingDirector: "Geschäftsführer",
      managingDirectorValue: "Matthias Dübon",
      vatId: "USt-IdNr.",
      vatIdValue: "DE311221880",
      phone: "Telefon",
      phoneValue: "+49 (0) 07071/1384161-0",
      email: "E-Mail",
      emailValue: "mail@duebon-engineering.de",
      website: "Website",
      websiteValue: "www.duebon-engineering.de",
    },
    // Cookie Consent
    videos: {
      title: "Videos",
      kernsatz:
        "Die Steuerungslogik in diesen Aufnahmen ist echt — dieselbe, die auf der realen Anlage läuft. Der einzige Unterschied: Es sind keine Motoren angeschlossen.",
      intro: "Videos werden erst nach einem Klick von YouTube geladen.",
      gesamt: "Gesamtdauer",
      kategorien: {
        produkt: "Produkte",
        anwendung: "Anwendungen",
        art: "Freie Arbeiten",
      },
      eintraege: [
        {
          kategorie: "anwendung",
          titel: "Teile vom laufenden Band greifen — Delta, SCARA oder Cobot",
          text: [
            "Links das Python-Skript, rechts die Simulation: Ein Roboter greift Teile von einem laufenden Förderband und legt sie im Behälter ab — gesteuert von rund dreißig Zeilen Code. Eine Kamera meldet jedes neue Teil einmalig; das Skript ordnet dessen Position dem laufenden Band zu. Von da an ergibt sich die aktuelle Position aus der Bewegung des Bandes — für MotionA ist es ein bewegtes Ziel im Weltmodell.",
            "Beschrieben wird je Teil nur der Ablauf: einholen, mit dem Band mitfahren, während der Bewegung greifen, im Behälter ablegen. Wechseln Sie oben die Maschine — Delta, SCARA oder Cobot: Es ändern sich nur die Maschinendatei und die Ablageposition, der Ablauf im Skript bleibt derselbe.",
          ],
          varianten: [
            { id: "jy2JHnxqBMk", label: "Delta" },
            { id: "_FT1h6zr-58", label: "SCARA" },
            { id: "P_YaWyQ40ng", label: "Cobot" },
          ],
        },
        {
          kategorie: "anwendung",
          titel:
            "MotionA App Note — Stempelachsen an ein fremd angetriebenes Karussell koppeln",
          text: [
            "Links die Maschinendatei und das Python-Skript, rechts die Simulation einer Stanzstation: Vier Linearachsen stempeln Teile auf einem Karussell. Das Karussell gehört nicht zur Station — ein fremder Antrieb bewegt es ungleichmäßig und zeitweise rückwärts. MotionA steuert diesen Antrieb nicht, sondern liest nur Position und Geschwindigkeit mit; in der Maschinendatei ist das Karussell ein Bezugssystem, die sechs Teile darauf ebenso.",
            "Im Skript koppelt ein einziger Schritt jeden Stempel an die vorbeilaufenden Teile, ähnlich einer elektronischen Kurvenscheibe: absenken, am Arbeitspunkt berühren, abheben — auch wenn das Karussell seine Geschwindigkeit ändert oder die Richtung wechselt. Jede Berührung meldet MotionA als Ereignis an das Skript zurück; das zählt mit und hält die Station nach zwölf Stempelvorgängen an — die Stempel fahren hoch, während das Karussell weiterläuft.",
          ],
          varianten: [{ id: "dkIKtRiM0uQ", label: "" }],
        },
        {
          kategorie: "anwendung",
          titel:
            "MotionA App Note — Laufruhe über die maximale Beschleunigung einstellen",
          text: [
            "Links das Python-Skript, rechts die Simulation eines Pipettierers, der eine Platte Spalte für Spalte füllt. Wie ruhig sich die Pipette bewegt, hängt an der maximal erlaubten Beschleunigung — und das Skript ändert diesen Grenzwert im laufenden Programm: erst 3 m/s², dann 0,3 m/s², dann wieder 3 m/s².",
            "MotionA plant die Bahn jeweils unter den neuen Randbedingungen neu; maximale Geschwindigkeit und maximaler Ruck bleiben unverändert. Bei 0,3 m/s² fährt die Pipette sichtbar sanfter an und bremst weicher ab, braucht für die Spalte aber ungefähr doppelt so lange. So lässt sich der Kompromiss zwischen Laufruhe und Taktzeit einstellen, ohne den Bewegungsablauf neu zu programmieren.",
          ],
          varianten: [{ id: "e_F5ZE4q62g", label: "" }],
        },
        {
          kategorie: "anwendung",
          titel:
            "Ein Prompt, drei Maschinen — Portal, SCARA und Delta zeichnen ein Herz",
          text: [
            "Ein Prompt — „Construct a heart and draw an arrow“ — und drei Maschinen zeichnen das Ergebnis gleichzeitig: ein XY-Portal, ein SCARA und ein Lineardelta. Das Herz entsteht konstruiert, aus Geraden und Kreisbögen mit konstanter Geschwindigkeit, der Pfeil freihand.",
            "Auf allen drei Kinematiken laufen dieselben Bewegungsbefehle; nur die Maschinenbeschreibung unterscheidet sich. Die Achsen sind simuliert, und die Prompt-Eingabe links ist nachgestellt.",
          ],
          varianten: [{ id: "RgzSc_ilglc", label: "" }],
        },
        {
          kategorie: "art",
          titel:
            "Von Text zu Maschinenbewegung — KI-erzeugte Bewegung treibt SCARA und Cobot",
          text: [
            "Ein Satz Text, daraus eine Bewegung: Ein quelloffenes neuronales Netz (MoMask) erzeugt menschliche Bewegung aus einem Prompt. MotionA beschreibt mit wenigen einfachen Regeln, wie die Punkte des Skeletts zueinander stehen, und führt Skelett und Maschinen als ein einziges Steuerungsprogramm aus. Der Prompt in diesem Ausschnitt lautete „a person does jumping jacks“.",
            "SCARA links und Cobot rechts sind simuliert, die Steuerungslogik ist dieselbe wie für echte Maschinen: MotionA löst ihre inverse Kinematik und rechnet für jede Achse eine Bahn, die Gelenkgrenzen sowie Grenzen für Geschwindigkeit, Beschleunigung und Ruck einhält. Die übrigen Skelettpunkte sind virtuell und haben keine mechanischen Grenzen — beides läuft in einem Programm. Die Wartezeit auf die Bewegungserzeugung ist herausgeschnitten.",
          ],
          varianten: [{ id: "7BnUx9JtsB4", label: "" }],
        },
        {
          kategorie: "produkt",
          titel:
            "MotionA Measure — adaptive Messsysteme, erst simuliert, dann real",
          text: [
            "MotionA Measure misst Bauteile berührungslos beim Kunden vor Ort — eine mietbare Anlage aus Aluprofilen, Messkopf und MotionController, beschrieben und betrieben mit MotionA. Der Messablauf entsteht zuerst vollständig in der Simulation; später werden die echten Komponenten angeschlossen, am Ablauf selbst ändert sich nichts.",
            "Statt fest programmierter Positionen führt MotionA während der Messung mit, wie alles zusammenhängt: Bauteil, Referenzkörper, die einzelnen Messfelder. Das Ergebnis einer Messung ist der Ausgangspunkt der nächsten — im Video bleibt der Messstrahl auf der Referenzkugel, während der Tisch das nächste Feld heranfährt, ohne dass dafür etwas nachprogrammiert wird. Die Anlage kann zudem auf ihre eigenen Ergebnisse reagieren: den Sensor nachführen, wenn eine Fläche aus dem Messbereich läuft, oder Bereiche gezielt nachmessen.",
          ],
          varianten: [{ id: "Qjs5bP1fkxQ", label: "" }],
        },
      ],
    },
    about: {
      title: "Über uns",
      intro:
        "Die Dübon Engineering GmbH entwickelt eingebettete Echtzeit- und KI-Systeme in Kusterdingen bei Tübingen. Inhabergeführt, seit 2017 eine GmbH.",
      werH: "Was wir machen",
      wer: [
        "Wir bauen Steuerungstechnik für Industriekunden — Geräte, die in Serie gehen und über Jahre im Feld laufen müssen, ohne dass jemand danebensteht.",
        "MotionA ist unser eigenes Produkt: eine Steuerung, die ein Modell des Raums mitführt. Bewegung wird als Beziehung zwischen Objekten beschrieben statt als programmierte Bahn.",
      ],
      foerderH: "Unterstützt und gefördert durch",
      foerderText:
        "Die Entwicklung an MotionA ist im Rahmen der Forschungszulage als Forschung und Entwicklung anerkannt (BSFZ) und wird von Covision und der MFG Baden-Württemberg unterstützt.",
      kontaktH: "Kontakt",
      firma: "Dübon Engineering GmbH",
      strasse: "Teichäcker 4",
      ort: "72127 Kusterdingen",
      land: "Deutschland",
      telefonLabel: "Telefon",
      telefon: "07071/1384161-0",
      mailLabel: "E-Mail",
      mail: "mail@duebon-engineering.de",
      registerH: "Register",
      register: "Handelsregister HRB 760981 · USt-IdNr. DE311221880",
      impressumHinweis: "Vollständiges Impressum",
    },
    cookieConsent: {
      title: "Cookie-Einstellungen",
      description:
        'Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern und unseren Traffic zu analysieren. Durch Klicken auf "Akzeptieren" stimmen Sie der Verwendung von Cookies zu.',
      accept: "Akzeptieren",
      decline: "Ablehnen",
      learnMore: "Mehr erfahren in unserer Datenschutzerklärung",
    },
  },
};
