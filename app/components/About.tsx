"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Globe, Target, Factory, Shield } from "lucide-react";
import { useScrollAnimation } from "./ui/use-scroll-animation";

export function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    {
      icon: <Award className="h-6 w-6" />,
      value: "2025",
      label: "Founded",
      description: "Industry expertise "
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "50+",
      label: "Expert Team",
      description: "Skilled  driving innovation"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "500+",
      label: "Global Clients",
      description: "Trusted partners worldwide"
    },
    {
      icon: <Target className="h-6 w-6" />,
      value: "99.9%",
      label: "Quality Rate",
      description: "Uncompromising quality standards"
    }
  ];

  const features = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art German and Japanese machinery ensuring world-class production quality and precision engineering for every product."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified processes with rigorous quality control at every stage of production and comprehensive testing protocols."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Standards",
      description: "International compliance including FDA, ZEDX approval for food-grade applications ensuring worldwide market acceptance."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          ref={headerRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4">About ABG PRO PACK</Badge>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building Excellence Since 2025
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Founded on decades of expertise in global trade and manufacturing, 
            ABG PRO PACK represents the future of innovative packaging solutions.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          ref={statsRef as React.RefObject<HTMLDivElement>}
          variants={staggerContainer}
          initial="initial"
          animate={statsVisible ? "animate" : "initial"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div 
                    className="text-primary bg-primary/10 p-3 rounded-full inline-flex mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-foreground mb-2"
                    initial={{ scale: 0 }}
                    animate={statsVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-16"
          ref={contentRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 60 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          {/* Story */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Heritage</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  With a distinguished legacy in the export and import of chemicals, spices, and dry fruits, 
                  our foundation partners bring decades of experience in quality-driven trade and sophisticated 
                  supply chain management across global markets.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Recognizing the evolving needs of our valued customers, we strategically established 
                  ABG Pro Pack in early 2025 as part of a comprehensive backward integration initiative. 
                  This forward-thinking approach enables us to deliver unparalleled packaging solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Our commitment extends beyond manufacturing – we create packaging that tells your brand's 
                  story, protects your products, and elevates your market presence through cutting-edge 
                  design and engineering excellence.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate={contentVisible ? "animate" : "initial"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="text-primary bg-primary/10 p-3 rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={contentVisible ? "animate" : "initial"}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-border h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="h-6 w-6 text-primary mr-3" />
                  </motion.div>
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize packaging through innovative, sustainable solutions that enhance 
                  product protection and brand excellence. We're driven by fresh perspectives and 
                  next-generation leadership to exceed today's dynamic market expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-border h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="h-6 w-6 text-primary mr-3" />
                  </motion.div>
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To emerge as the global leader in innovative and sustainable packaging solutions, 
                  showcasing 'Made in India' excellence that creates transformative impact across 
                  local and international markets with uncompromising quality.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}