"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useScrollAnimation } from "./ui/use-scroll-animation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const portfolioItems = [
    {
      title: "Advanced Tube Manufacturing",
      description: "State-of-the-art German machinery for premium quality tubes",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      category: "Manufacturing"
    },
    {
      title: "8-Color Flexographic Printing",
      description: "Vibrant, precise printing for exceptional brand presentation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Printing"
    },
    {
      title: "Quality Control Systems",
      description: "ISO certified processes ensuring 99.9% quality rate",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
      category: "Quality"
    },
    {
      title: "Automated Production Lines",
      description: "High-speed precision manufacturing with minimal waste",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Automation"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  if (!mounted) return null;

  return (
    <section id="home" className="pt-20 pb-16 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
      
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Premium Packaging & Advanced
            <br />
            <motion.span 
              className="text-primary block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Manufacturing Solutions
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Expert flexible tube manufacturing and advanced packaging solutions to help you achieve your quality goals.
            <br />
            We help startups and enterprises scale and raise more. Your success is our priority.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 transform hover:scale-105 transition-all duration-200"
            >
              Book an Intro Call
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("products")}
              className="rounded-full px-8 transform hover:scale-105 transition-all duration-200"
            >
              Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* <motion.div 
          className="grid lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 shadow-lg"
                onClick={() => scrollToSection("products")}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary/90 text-primary-foreground mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-white/80 text-xs">{item.description}</p>
                    </div>
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}