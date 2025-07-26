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
      description:
        "State-of-the-art German machinery for premium quality tubes",
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      category: "Manufacturing",
    },
    {
      title: "8-Color Flexographic Printing",
      description:
        "Vibrant, precise printing for exceptional brand presentation",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Printing",
    },
    {
      title: "Quality Control Systems",
      description: "ISO certified processes ensuring 99.9% quality rate",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
      category: "Quality",
    },
    {
      title: "Automated Production Lines",
      description: "High-speed precision manufacturing with minimal waste",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Automation",
    },
  ];

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };

  const staggerContainer = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      rotateX: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };

  const titleAnimation = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-muted/30 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Badge
              variant="outline"
              className="backdrop-blur-sm bg-background/30"
            >
              Welcome to ABG Pro Pack
            </Badge>
          </motion.div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
            variants={titleAnimation}
          >
            Premium Packaging & Advanced
            <br />
            <motion.span
              className="text-primary block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Manufacturing Solutions
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Expert flexible tube manufacturing and advanced packaging solutions
            to help you achieve your quality goals.
            <br />
            We help startups and enterprises scale and raise more. Your success
            is our priority.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 transform hover:scale-105 transition-all duration-200"
            >
              Book an Intro Call
            </Button>
            {/* <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("products")}
              className="rounded-full px-8 transform hover:scale-105 transition-all duration-200 border"
              style={{  border: "1px solid #1e40af" }}
            >
              Our Work
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("products")}
              className="relative rounded-full px-8 transition-all duration-300 border border-blue-800/80 hover:border-blue-600
             backdrop-blur-sm bg-white/10 hover:bg-white/20
             transform hover:scale-105 hover:shadow-[0_0_15px_rgba(30,64,175,0.3)]"
              style={{ border: "1px solid #1e40af" }}
            >
              <span className="relative z-10">Our Work</span>
              <span className="absolute inset-0 rounded-full bg-blue-800/10 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
