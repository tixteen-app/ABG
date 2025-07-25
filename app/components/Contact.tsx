import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, Clock, ArrowUp, Facebook, Instagram, Linkedin, Award, Shield, Globe } from "lucide-react";
import abgLogo from "figma:asset/69fc4e8caae263073a7b1a2dc7b9e32409a78834.png";

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91-966 727 8098",
      href: "tel:+919667278098"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "abg.propack@gmail.com",
      href: "mailto:abg.propack@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "86, Phase 1, HSIIDC, Kundli, Haryana-131028, India",
      href: "#"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      value: "Monday - Saturday: 9:00 AM - 6:00 PM",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" }
  ];

  const certifications = [
    { icon: <Award className="h-4 w-4" />, text: "ISO 9001:2015" },
    { icon: <Shield className="h-4 w-4" />, text: "ZEDX Approved" },
    { icon: <Globe className="h-4 w-4" />, text: "FDA Compliant" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today to discuss your packaging needs and discover how we can 
            help elevate your brand with premium packaging solutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-primary bg-primary/10 p-4 rounded-lg inline-flex mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                {info.href.startsWith('#') ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">{info.value}</p>
                ) : (
                  <a 
                    href={info.href} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors leading-relaxed block"
                  >
                    {info.value}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground border-primary/20 mb-16">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Request a Quote Today</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Ready to transform your packaging? Get in touch with our experts for a 
              personalized consultation and competitive pricing.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open("mailto:abg.propack@gmail.com", "_blank")}
              className="bg-background text-foreground hover:bg-background/90"
            >
              Get Your Quote
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="border-t border-border pt-12">
          <div className="grid lg:grid-cols-3 gap-12 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={abgLogo} 
                  alt="ABG Pro Pack" 
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <div className="font-bold text-foreground">ABG PRO PACK</div>
                  <div className="text-sm text-muted-foreground">Advanced Packaging Solutions</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Leading manufacturer of premium flexible laminated tubes and advanced packaging solutions. 
                Proudly engineered in India with world-class quality standards.
              </p>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary bg-primary/10 p-2 rounded">
                      {cert.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-3">
                {["Home", "About", "Products", "Why Us", "Team"].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"));
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h5 className="font-medium text-foreground mb-2">Business Hours</h5>
                <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                <p className="text-sm font-medium text-foreground">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 ABG PRO PACK. All rights reserved.
            </p>
            <p className="text-muted-foreground">
              Developed by <span className="font-medium text-primary">Pitamass Creative Agency</span>
            </p>
          </div>
        </footer>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </section>
  );
}