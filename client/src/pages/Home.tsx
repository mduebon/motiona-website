/**
 * MotionA Website - Home Page
 * Design Philosophy: Swiss Precision Modernism
 * - Rigorous grid system with 8px base unit
 * - Deep forest green (#0d4d4d) primary, bright lime (#a3ff12) accent
 * - Manrope for display, Inter for body, DM Sans for labels
 * - Minimal, purposeful motion (250-300ms ease-in-out)
 * - Systematic spacing and perfect alignment
 * - Multi-language support: English (default) and German
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
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Swiss precision with clean navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <img src="/images/dubon-logo.png" alt="Dübon Engineering" className="h-12 cursor-pointer" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t.header.features}
            </a>
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t.header.products}
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t.header.contact}
            </a>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </Button>
            <a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t.header.documentation}
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Asymmetric layout with technical illustration */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="section-label text-primary">
                {t.hero.label}
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-primary">{t.hero.title1}</span>
                <br />
                {t.hero.title2}
                <br />
                {t.hero.title3}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t.hero.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#products">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t.hero.exploreSolutions}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button size="lg" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  {t.hero.watchDemo}
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
                  <span className="text-primary">●</span> {t.hero.realtime}
                </div>
                <div className="bg-background/90 backdrop-blur border border-border rounded px-3 py-2 text-sm font-medium">
                  <span className="text-accent">●</span> {t.hero.precise}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Use Cases Section */}
      <section id="features" className="py-24 bg-background scroll-animation">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.useCases.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.useCases.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.useCases.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.useCases.cases.map((useCase, index) => (
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
      <section className="py-24 bg-muted/30 scroll-animation">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.coreCapabilities.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.coreCapabilities.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.coreCapabilities.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu },
              { icon: Layers },
              { icon: Zap },
              { icon: Monitor },
              { icon: Settings },
            ].map((item, index) => {
              const capability = t.coreCapabilities.capabilities[index];
              return (
                <div key={index} className="space-y-4">
                  <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Section */}
      <section className="py-24 bg-background scroll-animation">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.advancedCapabilities.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.advancedCapabilities.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.advancedCapabilities.description}
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
              { icon: Activity },
              { icon: Gauge },
              { icon: Sparkles },
              { icon: Search },
            ].map((item, index) => {
              const feature = t.advancedCapabilities.features[index];
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Versatility Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.versatility.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.versatility.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.versatility.description}
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
            {t.versatility.robots.map((robot, index) => (
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
      <section className="py-24 bg-background scroll-animation relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/images/abstract-tech-pattern.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.solutions.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.solutions.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.solutions.description}
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
                  <h3 className="text-2xl font-bold mb-2">{t.solutions.motionA.title}</h3>
                  <p className="text-muted-foreground">{t.solutions.motionA.subtitle}</p>
                </div>
                
                <p className="text-sm leading-relaxed">
                  {t.solutions.motionA.description}
                </p>
                
                <ul className="space-y-3 text-sm">
                  {t.solutions.motionA.features.map((feature, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t.solutions.motionA.learnMore}
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            {/* MotionA-Spark Hardware */}
            <Card className="border-2 border-accent">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center">
                  <CircuitBoard className="h-6 w-6 text-accent" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t.solutions.motionASpark.title}</h3>
                  <p className="text-muted-foreground">{t.solutions.motionASpark.subtitle}</p>
                </div>
                
                <p className="text-sm leading-relaxed">
                  {t.solutions.motionASpark.description}
                </p>
                
                <ul className="space-y-3 text-sm">
                  {t.solutions.motionASpark.features.map((feature, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {t.solutions.motionASpark.learnMore}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-muted/30 scroll-animation">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.resources.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.resources.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.resources.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                ...t.resources.items[0],
                url: 'https://www.industrielle-automation.net/motion-control-neu-gedacht/',
              },
              {
                ...t.resources.items[1],
                url: 'https://www.youtube.com/playlist?list=PLCVC6KYu5hU6NFSxSEH60EhtbraxJHt1P',
              },
              {
                ...t.resources.items[2],
                url: 'https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview',
              },
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
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full">
                      {resource.cta}
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/pages/31129609" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t.resources.viewPricing}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Products Hub Section */}
      <section id="products" className="py-24 bg-background scroll-animation">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.productsHub.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.productsHub.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.productsHub.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.productsHub.products.map((product, index) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
                      <span className="text-xs font-semibold text-primary">{product.category}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  {product.id === 'motionc-flex' || product.id === 'komi-monitor' || product.id === 'lorawan-gateway' || product.id === 'zynq-pcie' ? (
                    <Link href={`/product/${product.id}`}>
                      <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                        {t.productsHub.learnMore}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                        {t.productsHub.learnMore}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30 scroll-animation">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="section-label text-primary">{t.contact.label}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold">{t.contact.address.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.contact.address.street}<br />
                  {t.contact.address.city}<br />
                  {t.contact.address.country}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold">{t.contact.phone.title}</h3>
                <a href="tel:+4970711384161" className="text-sm text-primary hover:underline block">
                  {t.contact.phone.number}
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold">{t.contact.email.title}</h3>
                <a href="mailto:mail@duebon-engineering.de" className="text-sm text-primary hover:underline block">
                  {t.contact.email.address}
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <a href="https://motion-a-by-dubon-engineering-e066635c.base44.app/#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                {t.contact.visitWebsite}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-4">
              <img src="/images/bsfz-logo.png" alt="BSFZ" className="h-12" />
              <p className="text-sm text-muted-foreground">
                {t.contact.funding}
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
              <img src="/images/dubon-logo.png" alt="Dübon Engineering" className="h-10" />
              <p className="text-sm opacity-80">
                {t.footer.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">{t.footer.products}</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{t.footer.productLinks.software}</a></li>
                <li><a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{t.footer.productLinks.spark}</a></li>
                <li><a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/pages/31129609" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{t.footer.productLinks.pricing}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">{t.footer.resources}</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="https://ing-duebon.atlassian.net/wiki/spaces/MotionA/overview" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{t.footer.resourceLinks.documentation}</a></li>
                <li><a href="https://www.youtube.com/playlist?list=PLCVC6KYu5hU6NFSxSEH60EhtbraxJHt1P" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{t.footer.resourceLinks.youtube}</a></li>
                <li><a href="https://www.industrielle-automation.net/motion-control-neu-gedacht/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{t.footer.resourceLinks.article}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">{t.contact.label}</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>{t.contact.address.street}</li>
                <li>{t.contact.address.city}</li>
                <li>{t.contact.address.country}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>{t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <Link href="/imprint" className="hover:opacity-100 transition-opacity">
                {t.footer.imprint}
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                {language === 'de' ? 'Datenschutz' : 'Privacy Policy'}
              </Link>
              <span>|</span>
              <p>{t.footer.footerAddress}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
