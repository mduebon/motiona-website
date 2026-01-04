/**
 * MotionA Website - Home Page
 * Design Philosophy: Swiss Precision Modernism
 * - Rigorous grid system with 8px base unit
 * - Deep forest green (#0d4d4d) primary, bright lime (#a3ff12) accent
 * - Manrope for display, Inter for body, DM Sans for labels
 * - Minimal, purposeful motion (250-300ms ease-in-out)
 * - Systematic spacing and perfect alignment
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Zap, 
  Monitor, 
  Settings, 
  Activity,
  Gauge,
  Sparkles,
  Search,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Play,
  Code2,
  CircuitBoard
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Swiss precision with clean navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DE</span>
              </div>
              <div>
                <div className="font-bold text-sm tracking-tight">DÜBON ENGINEERING</div>
                <div className="text-xs text-muted-foreground">Advanced Motion Control</div>
              </div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="outline" size="sm">
              EN
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Documentation
              <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Asymmetric layout with technical illustration */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="section-label text-primary">
                Advanced Motion Control Solution
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-primary">MotionA</span>
                <br />
                Unlock Your
                <br />
                Robotic Potential
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                The advanced motion control solution from Dübon Engineering GmbH. Seamlessly integrate into any robotic system with unmatched flexibility and precision.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/hero-robot-arm.png" 
                alt="Delta Robot Arm with Technical Diagram" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-8 right-8 flex gap-4">
                <div className="bg-background/90 backdrop-blur border border-border rounded px-3 py-2 text-sm font-medium">
                  <span className="text-primary">●</span> Real-time
                </div>
                <div className="bg-background/90 backdrop-blur border border-border rounded px-3 py-2 text-sm font-medium">
                  <span className="text-accent">●</span> Precise
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">USE CASES</div>
            <h2 className="text-4xl md:text-5xl font-bold">When to use MotionA</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MotionA is the perfect solution when you need powerful motion control without the complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Looking for alternatives to PLCs?",
                description: "Break free from traditional PLC limitations with a flexible, modern motion control platform."
              },
              {
                title: "Need realtime without the complexity?",
                description: "Get real-time performance without diving into complex realtime programming."
              },
              {
                title: "Motion without the hassle?",
                description: "Achieve sophisticated motion control without the burden of complex infrastructure."
              },
              {
                title: "Low cost for series production?",
                description: "Cost-effective solution perfectly suited for series production requirements."
              },
              {
                title: "Want to unlock the full power of AI?",
                description: "Leverage AI capabilities for your realtime motion tasks with seamless integration."
              }
            ].map((useCase, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">CORE CAPABILITIES</div>
            <h2 className="text-4xl md:text-5xl font-bold">One Core, Any Environment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MotionA is a highly adaptable and integrated control solution designed for a wide range of processing environments. Its core principle is flexibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Any Processor",
                description: "Run on microcontrollers, embedded PCs (x86, ARM), or full Linux/Windows systems. Complete hardware freedom."
              },
              {
                icon: Layers,
                title: "Flexible Integration",
                description: "Seamlessly integrate into virtually any new or existing robotic system with our adaptable architecture."
              },
              {
                icon: Zap,
                title: "Real-Time Performance",
                description: "Runs on every real-time system, from bare-metal microcontrollers to Linux with real-time patches for deterministic control."
              },
              {
                icon: Monitor,
                title: "OS Agnostic",
                description: "Works with Linux and Windows-based systems for versatile integration with your existing infrastructure."
              },
              {
                icon: Settings,
                title: "No Vendor Lock-in",
                description: "Choose the best hardware for your application without being tied to a specific vendor or ecosystem."
              }
            ].map((capability, index) => (
              <div key={index} className="space-y-4">
                <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Section with Dashboard */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">ADVANCED CAPABILITIES</div>
            <h2 className="text-4xl md:text-5xl font-bold">Motor Configuration and Supervision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools for monitoring, configuring, and optimizing your motion control system in real-time.
            </p>
          </div>
          
          <div className="mb-16">
            <img 
              src="/images/dashboard-interface.png" 
              alt="MotionA Analytics Dashboard" 
              className="w-full rounded-lg border border-border shadow-2xl"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Activity,
                title: "Real-Time Data Supervision",
                description: "Monitor critical dynamics across multiple axes simultaneously. MotionA logs high-resolution data—including position, velocity, and torque—allowing engineers to visualize performance and diagnose bottlenecks as they happen."
              },
              {
                icon: Gauge,
                title: "Comprehensive Motor Configuration",
                description: "Streamline setup with a centralized interface for defining operational modes (such as CSP), homing methods, and safety limits. Fine-tune interpolation times and current ratings to protect your hardware while maximizing throughput."
              },
              {
                icon: Sparkles,
                title: "AI-Powered Automated Tuning",
                description: "Eliminate the complexity of manual PID calibration. MotionA utilizes advanced AI algorithms to analyze motor behavior and automatically calculate optimal parameters, reducing settling times and vibration for smoother, more precise motion."
              },
              {
                icon: Search,
                title: "Advanced Diagnostics",
                description: "Access deep-layer information through dedicated data channels. From tracking Status Words to monitoring digital inputs, MotionA provides the transparency needed for proactive maintenance and rapid troubleshooting."
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Versatility Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">VERSATILITY</div>
            <h2 className="text-4xl md:text-5xl font-bold">From Cobots to Gantries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you choose the software core or the integrated hardware, MotionA provides a robust foundation for a wide spectrum of robotic applications.
            </p>
          </div>
          
          <div className="mb-12">
            <img 
              src="/images/robot-types-illustration.png" 
              alt="Robot Types: SCARA, Delta, Gantry, Cobot, Custom" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "SCARA Robots",
                description: "Selective Compliance Assembly Robot Arm for precise assembly and pick-and-place operations."
              },
              {
                title: "Delta Robots",
                description: "High-speed parallel robots perfect for pick-and-place tasks in packaging and assembly."
              },
              {
                title: "Gantry Systems",
                description: "Multi-axis linear motion systems for large workspace applications and CNC machines."
              },
              {
                title: "Cobots",
                description: "Collaborative robots designed for safe human-robot interaction in shared workspaces."
              },
              {
                title: "Custom Systems",
                description: "Tailored mechanical solutions ranging from complex specialized machinery to simplified automation."
              }
            ].map((robot, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-bold text-base">{robot.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {robot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="products" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/images/abstract-tech-pattern.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">SOLUTIONS</div>
            <h2 className="text-4xl md:text-5xl font-bold">Your System, Your Choice</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two paths to implementation — choose the approach that best fits your project requirements and timeline.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* MotionA Software */}
            <Card className="border-2 border-primary">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">MotionA</h3>
                  <p className="text-muted-foreground">The Soft Motion Solution</p>
                </div>
                
                <p className="text-sm leading-relaxed">
                  Integrate our flexible, hardware-agnostic software core directly into your existing or custom hardware for maximum control and adaptability.
                </p>
                
                <ul className="space-y-3 text-sm">
                  {[
                    "Architecture Agnostic: Fully compatible with any processor architecture (x86, ARM, RISC-V, etc.)",
                    "Versatile Deployment: Optimized to run on microcontrollers (MCUs), embedded PCs, or any real-time hardware environment",
                    "Standardized Fieldbus Support: Native support for EtherCAT and CANopen communication protocols",
                    "Comprehensive Kinematics: Pre-configured support for Cobots, Delta, SCARA, Gantry, and custom kinematic designs",
                    "Flexible OS Integration: Supports everything from bare-metal implementations to full RTOS integration"
                  ].map((feature, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            {/* MotionA-Spark Hardware */}
            <Card className="border-2 border-accent">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center">
                  <CircuitBoard className="h-6 w-6 text-accent" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">MotionA-Spark</h3>
                  <p className="text-muted-foreground">The Integrated Hardware</p>
                </div>
                
                <p className="text-sm leading-relaxed">
                  Deploy a streamlined, all-in-one hardware solution for cost-sensitive applications and rapid, simplified system deployment.
                </p>
                
                <ul className="space-y-3 text-sm">
                  {[
                    "Motor stepper drivers integrated",
                    "Sensor inputs for homing",
                    "Encoder inputs for closed-loop",
                    "Ethernet connectivity",
                    "USB interface",
                    "Ideal for delta robots, gantry systems and SCARA robots"
                  ].map((feature, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">RESOURCES</div>
            <h2 className="text-4xl md:text-5xl font-bold">Your Next Move</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into MotionA and discover how it can transform your motion control.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Read the Article",
                subtitle: "Motion Control Neu Gedacht",
                description: "Get an in-depth perspective in our feature article from Industrielle Automation magazine.",
                cta: "Feature Article"
              },
              {
                title: "Watch Demos",
                subtitle: "YouTube Playlist",
                description: "Explore our dedicated playlist packed with practical demonstrations and real-world applications.",
                cta: "YouTube Channel"
              },
              {
                title: "Explore Documentation",
                subtitle: "Technical Wiki",
                description: "Discover comprehensive technical details, API references, and integration guides in our wiki.",
                cta: "Documentation"
              }
            ].map((resource, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{resource.title}</h3>
                    <p className="text-sm font-medium text-primary">{resource.subtitle}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {resource.cta}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Pricing & TCO
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">GET IN TOUCH</div>
            <h2 className="text-4xl md:text-5xl font-bold">Let's Discuss Your Motion Control Needs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to our team to explore how MotionA can power your next robotic innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Teichäcker 4<br />
                  72127 Kusterdingen<br />
                  Germany
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold">Phone</h3>
                <a href="tel:+4970711384161009" className="text-sm text-primary hover:underline block">
                  07071 / 138 416 109
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold">Email</h3>
                <a href="mailto:mail@duebon-engineering.de" className="text-sm text-primary hover:underline block">
                  mail@duebon-engineering.de
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                PDF
              </div>
              <p className="text-sm text-muted-foreground">
                MotionA received research funding from the BSFZ due to its innovative nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">DE</span>
                </div>
                <div>
                  <div className="font-bold text-sm">DÜBON</div>
                  <div className="text-xs opacity-80">ENGINEERING GMBH</div>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Advanced motion control solutions for modern robotics.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">Products</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">MotionA Software</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">MotionA-Spark</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing & TCO</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube Channel</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Feature Article</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Teichäcker 4</li>
                <li>72127 Kusterdingen</li>
                <li>Germany</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2026 Dübon Engineering GmbH. All rights reserved.</p>
            <p>Teichäcker 4, 72127 Kusterdingen, Germany</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
