"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./ui/use-scroll-animation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
  });
 
  // public/dabur.png public/dalmia.png public/devyani.png public/fresca.png public/kali mehandi.png public/kaveri.png public/Lahori.png public/neha.png public/reliance.png public/triveni.png public/zydus.png


  const capabilities = [
    {
      title: "Tube Manufacturing Excellence",
      description:
        "Premium ABL & PBL tubes with superior barrier protection",
      image: "/dabur.png",
    },
    {
      title: "Advanced Printing Technology",
      description:
        "8-color flexographic printing with perfect registration",
      image: "/dalmia.png",
    },
    {
      title: "Quality Assurance Systems",
      description:
        "ISO 9001:2015 certified processes ensuring excellence",
      image: "/devyani.png",
    },
    {
      title: "Automated Production",
      description:
        "High-speed precision manufacturing with minimal waste",
      image: "/fresca.png",
    },
  ];

  const clientLogos = [
    { name: "Dabur", logo: "/dabur.png" },
    { name: "Dalmia", logo: "/dalmia.png" },
    { name: "Devyani", logo: "/devyani.png" },
    { name: "Fresca", logo: "/fresca.png" },
    { name: "Kali Mehandi", logo: "/kali mehandi.png" },
    { name: "Kaveri", logo: "/kaveri.png" },
    { name: "Lahori", logo: "/Lahori.png" },
    { name: "Neha", logo: "/neha.png" },
    { name: "Reliance", logo: "/reliance.png" },
    { name: "Triveni", logo: "/triveni.png" },
    { name: "Zydus", logo: "/zydus.png" },
  ];

  // Auto-scroll functionality with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % capabilities.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [capabilities.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Client Logos Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-8">
            Trusted by 500+ Companies and Enterprises for
            Premium Packaging Solutions
          </h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            variants={staggerContainer}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-24 px-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                variants={logoVariants}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}