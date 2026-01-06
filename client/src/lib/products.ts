export interface ProductImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  descriptionDE: string;
  shortDescription: string;
  shortDescriptionDE: string;
  images: ProductImage[];
  features: ProductFeature[];
  featuresDE: ProductFeature[];
  specifications?: Record<string, string | string[]>;
  specificationsDE?: Record<string, string | string[]>;
  links: {
    documentation?: string;
    buy?: string;
    repository?: string;
    handbook?: string;
  };
  relatedProducts?: string[];
}

export const products: Record<string, Product> = {
  "motionc-flex": {
    id: "motionc-flex",
    slug: "motionc-flex",
    name: "MotionC++ Flex",
    category: "Motion Control",
    description:
      "A universal motion controller with 3 motor outputs, featuring an innovative and simple description language, optimized trajectories, and extremely cost-sensitive design for series solutions.",
    descriptionDE:
      "Ein universeller Motion Controller mit 3 Motorausgängen mit innovativer, einfacher Beschreibungssprache, optimierten Trajektorien und extrem kostensensibler Auslegung für Serienlösungen.",
    shortDescription: "Flexible control system board for versatile motion applications.",
    shortDescriptionDE: "Flexibles Kontrollsystem-Board für vielseitige Bewegungsanwendungen.",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/619512257bd2ba0708fcc8bc/545a3a1a-f386-4bda-a4b8-05ed58487eec/MC_BaseBoard_V1.0_RevB+4X130+PCbs.482.png",
        alt: "MotionC++ Flex Board",
        caption: "MotionC++ Flex Main Board",
      },
    ],
    features: [
      {
        title: "Innovative Description Language",
        description: "Simple and intuitive programming interface",
      },
      {
        title: "Optimized Trajectories",
        description: "Pre-configured motion profiles for smooth operation",
      },
      {
        title: "Cost-Effective",
        description: "Extremely cost-sensitive design, especially for series solutions",
      },
      {
        title: "Flexible Configuration",
        description: "Adaptable system configuration for various applications",
      },
    ],
    featuresDE: [
      {
        title: "Innovative Beschreibungssprache",
        description: "Einfache und intuitive Programmierschnittstelle",
      },
      {
        title: "Optimierte Trajektorien",
        description: "Vorkonfigurierte Bewegungsprofile für sanfte Bedienung",
      },
      {
        title: "Kostengünstig",
        description: "Extrem kostensensibler Aufbau, besonders für Serienlösungen",
      },
      {
        title: "Flexible Konfiguration",
        description: "Anpassbare Systemkonfiguration für verschiedene Anwendungen",
      },
    ],
    specifications: {
      Dimensions: "109.6mm x 109.6mm x 41.6mm",
      "Input Voltage": "15-45V",
      MCU: "STM32H7 (Cortex-M7, 400MHz, 2MB Flash, 1MB RAM)",
      Interfaces: ["Isolated USB", "RS485", "RS232 (2-Channel)", "µSD Card"],
      GPIO: ["4-bit DIP", "1x Push Button", "6x LEDs"],
      "Motor Drivers": "4x independent driver modules",
      "Stepper Options": ["Option A: 1 Stepper (4A per phase)", "Option B: 2 Stepper (2A per phase)"],
    },
    specificationsDE: {
      Abmessungen: "109,6mm x 109,6mm x 41,6mm",
      Eingangsspannung: "15-45V",
      MCU: "STM32H7 (Cortex-M7, 400MHz, 2MB Flash, 1MB RAM)",
      Schnittstellen: ["Isoliertes USB", "RS485", "RS232 (2-Kanal)", "µSD-Karte"],
      GPIO: ["4-Bit-DIP", "1x Druckknopf", "6x LEDs"],
      Motortreiber: "4x unabhängige Treibermodule",
      "Stepper-Optionen": ["Option A: 1 Stepper (4A pro Phase)", "Option B: 2 Stepper (2A pro Phase)"],
    },
    links: {
      documentation: "https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview",
    },
    relatedProducts: ["motiona", "zynq-pcie-board"],
  },

  "komi-monitor": {
    id: "komi-monitor",
    slug: "komi-monitor",
    name: "Komi Temperature & Humidity Monitor",
    category: "IoT & Connectivity",
    description:
      "A temperature and humidity monitoring and alarm system with a browser-based real-time viewer, SNMP, and email alerts for comprehensive environmental monitoring.",
    descriptionDE:
      "Ein Temperatur- und Luftfeuchtigkeitsüberwachungs- und Alarmsystem mit einem browserbasierten Echtzeit-Viewer, SNMP und E-Mail-Alarm.",
    shortDescription: "Real-time environmental monitoring with IoT connectivity.",
    shortDescriptionDE: "Echtzeit-Umweltüberwachung mit IoT-Konnektivität.",
    images: [
      {
        url: "/images/komi-temperature-sensors.png",
        alt: "Komi Temperature Sensor Dashboard",
        caption: "Four Temperature Sensors with Real-time Monitoring and Alerts",
      },
      {
        url: "/images/komi-sensor-overview.png",
        alt: "Komi Sensor Configuration",
        caption: "Sensor Configuration and Monitoring Interface",
      },
      {
        url: "/images/komi-hardware-device.png",
        alt: "Komi Monitor Hardware Device",
        caption: "Komi Monitor with LAN Port and 4 Sensor Connections",
      },
    ],
    features: [
      {
        title: "Real-Time Monitoring",
        description: "Browser-based viewer for live environmental data",
      },
      {
        title: "SNMP Support",
        description: "Enterprise-grade network monitoring integration",
      },
      {
        title: "Email Alerts",
        description: "Automatic notifications when thresholds are exceeded",
      },
      {
        title: "Data Logging",
        description: "Historical data tracking and analysis capabilities",
      },
    ],
    featuresDE: [
      {
        title: "Echtzeit-Überwachung",
        description: "Browsergestützter Viewer für Live-Umweltdaten",
      },
      {
        title: "SNMP-Unterstützung",
        description: "Integration der Netzwerküberwachung auf Unternehmensebene",
      },
      {
        title: "E-Mail-Benachrichtigungen",
        description: "Automatische Benachrichtigungen bei Schwellenwertüberschreitung",
      },
      {
        title: "Datenprotokollierung",
        description: "Historische Datenverfolgung und Analysefunktionen",
      },
    ],
    specifications: {
      "Monitoring Type": "Temperature & Humidity",
      Interface: "Browser-based",
      Protocols: ["SNMP", "Email"],
      "Alert System": "Threshold-based notifications",
    },
    specificationsDE: {
      Überwachungstyp: "Temperatur & Luftfeuchtigkeit",
      Schnittstelle: "Browsergestützt",
      Protokolle: ["SNMP", "E-Mail"],
      Alarmsystem: "Schwellenwertbasierte Benachrichtigungen",
    },
    links: {},
    relatedProducts: ["lorawan-gateway"],
  },

  "lorawan-gateway": {
    id: "lorawan-gateway",
    slug: "lorawan-gateway",
    name: "LoraWAN Gateway",
    category: "IoT & Connectivity",
    description:
      "A LoraWAN Gateway designed for testing and prototyping purposes. Enables Lora-based devices to communicate over wireless connections with long-range capabilities.",
    descriptionDE:
      "Ein LoraWAN-Gateway für Test- und Prototyping-Zwecke. Ermöglicht Lora-basierten Geräten die Kommunikation über drahtlose Verbindungen mit großer Reichweite.",
    shortDescription: "Long-range wireless connectivity for IoT applications.",
    shortDescriptionDE: "Langstrecken-Funkverbindung für IoT-Anwendungen.",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/619512257bd2ba0708fcc8bc/1637328028183-OBNDG5MEB9EJ0M7GBPWM/Lora",
        alt: "LoraWAN Gateway",
        caption: "LoraWAN Gateway Device",
      },
      {
        url: "https://images.squarespace-cdn.com/content/v1/619512257bd2ba0708fcc8bc/22aec713-328e-41ed-8591-3002ff093bb5/image-asset__9___1___1_-removebg-preview.png",
        alt: "LoraWAN Gateway Product",
        caption: "LoraWAN Gateway",
      },
      {
        url: "/images/lorawan-gateway-hardware.png",
        alt: "LoraWAN Gateway Hardware",
        caption: "LoraWAN Gateway Hardware with Antenna Connection",
      },
    ],
    features: [
      {
        title: "Long-Range Communication",
        description: "Extended wireless range for distributed IoT networks",
      },
      {
        title: "Testing & Prototyping",
        description: "Ideal for development and proof-of-concept projects",
      },
      {
        title: "LoraWAN Protocol",
        description: "Standards-based wireless communication",
      },
      {
        title: "Easy Integration",
        description: "Simple setup and deployment for IoT applications",
      },
    ],
    featuresDE: [
      {
        title: "Langstrecken-Kommunikation",
        description: "Erweiterte Funkreichweite für verteilte IoT-Netzwerke",
      },
      {
        title: "Test & Prototyping",
        description: "Ideal für Entwicklungs- und Machbarkeitsprojekte",
      },
      {
        title: "LoraWAN-Protokoll",
        description: "Standardisierte drahtlose Kommunikation",
      },
      {
        title: "Einfache Integration",
        description: "Einfache Einrichtung und Bereitstellung für IoT-Anwendungen",
      },
    ],
    specifications: {
      Protocol: "LoraWAN",
      "Use Case": "Testing & Prototyping",
      Range: "Long-range wireless",
      "Network Type": "IoT",
    },
    specificationsDE: {
      Protokoll: "LoraWAN",
      Anwendungsfall: "Test & Prototyping",
      Reichweite: "Langstrecken-Funk",
      Netzwerktyp: "IoT",
    },
    links: {
      documentation: "https://www.duebon-engineering.de/lorawan-gateway",
    },
    relatedProducts: ["komi-monitor"],
  },

  "zynq-pcie": {
    id: "zynq-pcie",
    slug: "zynq-pcie",
    name: "ZYNQ PCIe Board",
    category: "FPGA Solutions",
    description:
      "A ZYNQ PCIe Board with FMC connector for custom expansion cards and Linux OS. Features ZYNQ XC72015, PCIe IP Core, and comprehensive Linux support for advanced FPGA applications.",
    descriptionDE:
      "Ein ZYNQ-PCIe-Board mit FMC-Stecker für kundenspezifische Erweiterungskarten und Linux OS. Mit ZYNQ XC72015, PCIe IP Core und umfassender Linux-Unterstützung für fortgeschrittene FPGA-Anwendungen.",
    shortDescription: "High-performance FPGA board for advanced computing applications.",
    shortDescriptionDE: "Hochleistungs-FPGA-Board für fortgeschrittene Computing-Anwendungen.",
    images: [
      {
        url: "/images/zynq-pcie-board.webp",
        alt: "ZYNQ PCIe Board",
        caption: "ZYNQ PCIe Board with FMC Connector",
      },
      {
        url: "/images/zynq-fmc-diagram.png",
        alt: "FMC and Carrier Board Architecture",
        caption: "FMC Expansion Cards and Carrier Board Architecture",
      },
    ],
    features: [
      {
        title: "ZYNQ XC72015",
        description: "Powerful Xilinx ZYNQ SoC with ARM processor and FPGA fabric",
      },
      {
        title: "FMC Connector",
        description: "FPGA Mezzanine Card connector for custom expansion cards",
      },
      {
        title: "PCIe IP Core",
        description: "Integrated PCIe interface for high-speed data transfer",
      },
      {
        title: "Linux OS Support",
        description: "Full Linux operating system support for easy development",
      },
    ],
    featuresDE: [
      {
        title: "ZYNQ XC72015",
        description: "Leistungsstarker Xilinx ZYNQ SoC mit ARM-Prozessor und FPGA-Fabric",
      },
      {
        title: "FMC-Stecker",
        description: "FPGA Mezzanine Card Stecker für kundenspezifische Erweiterungskarten",
      },
      {
        title: "PCIe IP Core",
        description: "Integrierte PCIe-Schnittstelle für Hochgeschwindigkeitsdatenübertragung",
      },
      {
        title: "Linux OS-Unterstützung",
        description: "Vollständige Linux-Betriebssystemunterstützung für einfache Entwicklung",
      },
    ],
    specifications: {
      FPGA: "ZYNQ XC72015",
      Connector: "FMC (FPGA Mezzanine Card)",
      Interface: "PCIe IP Core",
      "Operating System": "Linux",
      Repository: "https://bitbucket.org/ingdb/tec0097.git",
    },
    specificationsDE: {
      FPGA: "ZYNQ XC72015",
      Stecker: "FMC (FPGA Mezzanine Card)",
      Schnittstelle: "PCIe IP Core",
      Betriebssystem: "Linux",
      Repository: "https://bitbucket.org/ingdb/tec0097.git",
    },
    links: {
      documentation: "https://drive.google.com/drive/folders/1tsH49wlNh63odSeVSHUfIBW6YdH-qtiT",
      repository: "https://bitbucket.org/ingdb/tec0097.git",
    },
    relatedProducts: ["motionc-flex"],
  },
};

export function getProductBySlug(slug: string): Product | undefined {
  return Object.values(products).find((p) => p.slug === slug);
}

export function getRelatedProducts(productId: string): Product[] {
  const product = Object.values(products).find((p) => p.id === productId);
  if (!product || !product.relatedProducts) return [];
  return product.relatedProducts
    .map((id) => Object.values(products).find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
}
