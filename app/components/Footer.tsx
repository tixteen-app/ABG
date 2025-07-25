"use client";
import { Button } from "./ui/button";
import { ArrowUp, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { name: "Tube Manufacturing", id: "products" },
    { name: "8-Color Printing", id: "products" },
    { name: "Flexible Packaging", id: "products" },
    { name: "Quality Assurance", id: "about" },
    { name: "Custom Solutions", id: "products" },
    { name: "Process Optimization", id: "about" }
  ];

  const industries = [
    { name: "FMCG", id: "products" },
    { name: "Pharmaceuticals", id: "products" },
    { name: "Personal Care", id: "products" },
    { name: "Food & Beverage", id: "products" },
    { name: "Cosmetics", id: "products" },
    { name: "Healthcare", id: "products" }
  ];

  const company = [
    { name: "About Us", id: "about" },
    { name: "Our Team", id: "team" },
    { name: "Why Choose Us", id: "why-us" },
    { name: "Contact", id: "contact" },
    { name: "Careers", id: "contact" },
    { name: "Partnership", id: "contact" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Dribbble className="h-5 w-5" />, href: "#", name: "Dribbble" }
  ];

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/ABG_Logo.png" 
                alt="ABG Pro Pack" 
                className="h-12 w-12 object-contain invert"
              />
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              India, Rajasthan, Bangalore,<br />
              Karnataka, 560021
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">+91 9667278098</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">abg.propack@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-background/10 text-background/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => scrollToSection(service.id)}
                  className="block text-background/80 hover:text-primary transition-colors text-left"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-background mb-4">Industries</h4>
            <div className="space-y-3">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => scrollToSection(industry.id)}
                  className="block text-background/80 hover:text-primary transition-colors text-left"
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <div className="space-y-3">
              {company.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-background/80 hover:text-primary transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 mb-4 md:mb-0">
              © 2025 ABG PRO PACK. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-background/60">
                86, Phase 1, HSIIDC, Kundli, Haryana-131028, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}