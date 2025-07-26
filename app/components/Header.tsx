"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const services = [
    { name: "Tube Manufacturing", id: "products" },
    { name: "Flexible Packaging", id: "products" },
    { name: "8-Color Printing", id: "products" },
    { name: "Quality Assurance", id: "about" }
  ];

  const industries = [
    { name: "FMCG", id: "products" },
    { name: "Pharmaceuticals", id: "products" },
    { name: "Personal Care", id: "products" },
    { name: "Food & Beverage", id: "products" }
  ];

  const company = [
    { name: "About Us", id: "about" },
    { name: "Our Team", id: "team" },
    { name: "Why Choose Us", id: "why-us" },
    { name: "Contact", id: "contact" }
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    }
  } as const;

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0
    },
    visible: { 
      opacity: 1, 
      height: "auto"
    }
  } as const;

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-background border-b border-border"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img 
              src="/ABG_Logo.png" 
              alt="ABG Pro Pack" 
              className="h-20 w-20 object-contain"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            {/* <div className="text-lg font-bold text-primary">ABG PRO PACK</div> */}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">

            
            <motion.button
              onClick={() => scrollToSection("home")}
              className="text-md font-medium text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Home
            </motion.button>

                <motion.button
              onClick={() => scrollToSection("about")}
              className="text-md font-medium text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.button>

      {/* contact us  */}
        <motion.button
              onClick={() => scrollToSection("contact")}
              className="text-md font-medium text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Contact Us
            </motion.button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.button 
                className="flex items-center space-x-1 text-md font-medium text-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span>Services</span>
                <motion.div
                  animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-xl py-2"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {services.map((service, index) => (
                      <motion.button
                        key={service.name}
                        onClick={() => scrollToSection(service.id)}
                        className="w-full text-left px-4 py-2 text-md text-foreground hover:bg-muted transition-colors"
                        whileHover={{ x: 4, backgroundColor: "var(--muted)" }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {service.name}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            {/* about */}
        
           
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              >
                Book a Call
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden border-t border-border"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <div className="py-4 space-y-3">
                {[
                  { name: "Services", id: "products" },
                  { name: "Industries", id: "products" },
                  { name: "Portfolio", id: "products" },
                  { name: "Company", id: "about" }
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-md font-medium text-foreground hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div 
                  className="px-3 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-primary text-primary-foreground rounded-full"
                  >
                    Book a Call
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}