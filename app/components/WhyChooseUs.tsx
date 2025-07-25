import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Award, Cog, Users, Clock, Globe, Target, CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  const mainFeatures = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "ISO-Certified Excellence",
      description: "International quality standards with rigorous quality assurance protocols and continuous improvement processes for optimal results.",
      stats: ["ISO 9001:2015", "ZEDX Approved", "100% Quality Control"]
    },
    {
      icon: <Cog className="h-10 w-10" />,
      title: "Advanced Manufacturing",
      description: "German & Japanese precision machinery delivering world-class quality with cutting-edge automation technology and expert craftsmanship.",
      stats: ["German Tech", "Japanese Precision", "Automated Lines"]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Expert Team",
      description: "20+ years of industry expertise ensuring consistent quality and innovative solutions for complex packaging challenges across industries.",
      stats: ["20+ Years Exp", "Expert Team", "Innovation Focus"]
    }
  ];

  const benefits = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Uncompromising quality standards with rigorous testing"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Streamlined production for quick turnaround times"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Standards",
      description: "International compliance and certifications"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Tailored packaging for specific requirements"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "500+ satisfied clients across diverse industries"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliable Partnership",
      description: "Long-term support and consistent service quality"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Success Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining decades of expertise with cutting-edge technology to deliver 
            packaging solutions that exceed expectations and drive business growth.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="text-primary bg-primary/10 p-4 rounded-2xl inline-flex mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="flex justify-center space-x-4">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2"></div>
                      <div className="text-xs font-medium text-foreground">{stat}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary bg-primary/10 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to Experience Excellence?</h3>
            <p className="text-primary-foreground/80 mb-4">
              Join 500+ satisfied clients who trust our quality and innovation
            </p>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">99.9% Client Satisfaction Rate</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}