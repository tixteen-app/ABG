"use client";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle, Package, Printer, Factory, Settings, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === capabilities.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? capabilities.length - 1 : prev - 1));
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  const features = [
    "Fully Customizable Design & Branding",
    "Advanced High-Barrier Protection",
    "Multiple Diameter Options: 19mm to 35mm",
    "Premium Aluminum & Plastic Materials",
    "FDA Compliant Food-Grade Safety",
    "Extended Shelf Life Protection"
  ];

  const capabilities = [
    {
      icon: <Printer className="h-8 w-8" />,
      title: "8-Color Flexographic Printing",
      description: "Advanced multi-color printing with perfect registration and vibrant color reproduction for exceptional brand presentation.",
      image: "/8-colour.png"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "ABL / PBL Tube Manufacturing",
      description: "Premium aluminum and plastic barrier laminate tube production with superior quality control and precision engineering.",
      image: "tube.png"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Automated Production Lines",
      description: "Fully automated tube body making with consistent quality, high-speed production, and minimal human intervention.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEKr3RtjbEuWdKR0XJUnQr3KtXwWC9teELQ&s"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Precision Shoulder Heading",
      description: "Semi & fully automatic shoulder and neck formation with German precision machinery for perfect finishing.",
      image: "https://fastenerandfixing.com/media/42373/wds.jpg?width=1090&height=780&rnd=133065828046100000"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Products</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Engineering Excellence in Packaging
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Precision-engineered solutions for FMCG, Pharma, and Personal Care industries 
            with cutting-edge German and Japanese manufacturing technology.
          </p>
        </div>

        {/* Hero Product */}
        <Card className="mb-16 overflow-hidden border-border">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-primary bg-primary/10 p-3 rounded-lg">
                    <Package className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Premium Laminated Tubes</h3>
                    <p className="text-primary font-medium">Our Flagship Product Line</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Revolutionary plastic and aluminum laminated tubes engineered for superior barrier protection, 
                  exceptional durability, and stunning visual appeal. Perfect for pharmaceuticals, cosmetics, 
                  food products, and industrial applications.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="bg-primary/10 text-primary border-primary/20">ISO-Certified Manufacturing</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">ZEDX-Approved Facility</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Food-Grade Compliant</Badge>
                </div>

                <Button onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  Request Samples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="relative bg-white-to-br from-muted to-muted/50 p-8 flex items-center justify-center">
                <ImageWithFallback 
                  src="https://cdn.berryglobal.com/product-images/13184004/1.1875%20M8%20Lam%20Tubes%20and%20Closures.jpg" 
                  alt="Advanced Tube Manufacturing Equipment" 
                  className="w-full max-w-md rounded-lg shadow-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manufacturing Capabilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Manufacturing Capabilities</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art German & Japanese machinery ensuring world-class quality and precision in every product.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="border-border hover:shadow-lg transition-shadow group h-[400px]">
                  <CardContent className="p-0 h-full">
                    <div className="grid md:grid-cols-5 h-full">
                      <div className="md:col-span-3 p-8 flex flex-col">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="text-primary bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {capabilities[currentIndex].icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-foreground mb-2">{capabilities[currentIndex].title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{capabilities[currentIndex].description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 relative h-full overflow-hidden">
                        <div className="absolute inset-0">
                          <ImageWithFallback 
                            src={capabilities[currentIndex].image} 
                            alt={capabilities[currentIndex].title}
                            className="w-full h-full object-contain object-center rounded-r-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-background p-2 rounded-full shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-background p-2 rounded-full shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-4 space-x-2">
              {capabilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <Card className="bg-foreground text-background border-border">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">German & Japanese Technology</h3>
            <p className="text-background/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our manufacturing facility features the latest precision machinery from Germany and Japan, 
              ensuring unmatched quality, efficiency, and reliability in every product we deliver.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">German</div>
                <div className="text-background/70">Engineering Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Japanese</div>
                <div className="text-background/70">Precision Technology</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-background/70">Quality Assurance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}