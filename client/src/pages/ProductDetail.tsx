import { useParams, useLocation } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const { language } = useLanguage();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { ref: heroRef } = useScrollAnimation();
  const { ref: featuresRef } = useScrollAnimation();
  const { ref: specsRef } = useScrollAnimation();
  const { ref: relatedRef } = useScrollAnimation();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")} className="gap-2">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  const isDE = language === "de";
  const currentImage = product.images[currentImageIndex];
  const features = isDE ? product.featuresDE : product.features;
  const specifications = isDE ? product.specificationsDE : product.specifications;
  const description = isDE ? product.descriptionDE : product.description;
  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="scroll-animate py-12 md:py-20">
        <div className="container">
          <div className="mb-8">
            <span className="section-label text-primary">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.name}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
          </div>

          {/* Product Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Image */}
            <div className="md:col-span-2">
              <div className="relative border-2 border-dashed border-primary rounded-lg overflow-hidden bg-secondary/50 aspect-video flex items-center justify-center">
                {currentImage?.url ? (
                  <img
                    src={currentImage.url}
                    alt={currentImage.alt}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <div className="text-center text-muted-foreground">
                    <p>Image not available</p>
                  </div>
                )}
              </div>
              {currentImage?.caption && (
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  {currentImage.caption}
                </p>
              )}

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <div className="flex gap-2 mt-6">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 rounded border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={product.images[index].url}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info & Actions */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="text-xl font-semibold mb-4">
                  {isDE ? "Produktinformationen" : "Product Information"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isDE ? product.shortDescriptionDE : product.shortDescription}
                </p>

                <div className="space-y-3">
                  {product.links.documentation && (
                    <Button
                      asChild
                      className="w-full gap-2 bg-primary hover:bg-primary/90"
                    >
                      <a href={product.links.documentation} target="_blank" rel="noopener noreferrer">
                        {isDE ? "Dokumentation" : "Documentation"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {product.links.handbook && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full gap-2"
                    >
                      <a href={product.links.handbook} target="_blank" rel="noopener noreferrer">
                        {isDE ? "Handbuch" : "Handbook"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {product.links.buy && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full gap-2"
                    >
                      <a href={product.links.buy} target="_blank" rel="noopener noreferrer">
                        {isDE ? "Kaufen" : "Buy"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="scroll-animate py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="mb-12">
            <span className="section-label text-primary">
              {isDE ? "MERKMALE" : "FEATURES"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              {isDE ? "Hauptmerkmale" : "Key Features"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      {specifications && (
        <section ref={specsRef} className="scroll-animate py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <span className="section-label text-primary">
                {isDE ? "TECHNISCHE DATEN" : "SPECIFICATIONS"}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                {isDE ? "Technische Spezifikationen" : "Technical Specifications"}
              </h2>
            </div>

            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="divide-y divide-border">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="p-6 hover:bg-secondary/30 transition-colors">
                    <dt className="font-semibold text-foreground mb-2">{key}</dt>
                    <dd className="text-muted-foreground">
                      {Array.isArray(value) ? (
                        <ul className="space-y-1">
                          {value.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section ref={relatedRef} className="scroll-animate py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="mb-12">
              <span className="section-label text-primary">
                {isDE ? "VERWANDTE PRODUKTE" : "RELATED PRODUCTS"}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                {isDE ? "Entdecken Sie ähnliche Produkte" : "Discover Similar Products"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group"
                  onClick={() => navigate(`/product/${relatedProduct.slug}`)}
                >
                  <div className="aspect-video bg-secondary/50 overflow-hidden flex items-center justify-center">
                    {relatedProduct.images[0]?.url && (
                      <img
                        src={relatedProduct.images[0].url}
                        alt={relatedProduct.name}
                        className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary font-medium mb-2">
                      {relatedProduct.category}
                    </p>
                    <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {isDE
                        ? relatedProduct.shortDescriptionDE
                        : relatedProduct.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isDE ? "Interessiert an diesem Produkt?" : "Interested in this product?"}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {isDE
              ? "Kontaktieren Sie uns für weitere Informationen, technische Unterstützung oder ein Angebot."
              : "Contact us for more information, technical support, or a quote."}
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-background text-primary hover:bg-background/90"
          >
            <a href="/#contact">
              {isDE ? "Kontakt aufnehmen" : "Get in Touch"}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
