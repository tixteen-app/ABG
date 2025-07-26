import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Linkedin, Mail, Award } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Tanishka Aggarwal",
      role: "Director",
      initials: "TA",
      image: "/tanishka.png",
      description: "Visionary director leading strategic initiatives and driving company growth through innovative approaches.",
      expertise: ["Strategic Planning", "Business Development", "Leadership"],
      achievement: "Key strategic partnerships established"
    },
    {
      name: "Ansh Bansal",
      role: "Director",
      initials: "AB",
      image: "/ansh.png",
      description: "Dynamic director focusing on operational excellence and business expansion strategies.",
      expertise: ["Operations Management", "Strategic Planning", "Business Growth"],
      achievement: "Significant market expansion"
    },
    {
      name: "Krishna Goyal",
      role: "Sales",
      initials: "KG",
      description: "Experienced sales professional driving business growth through strategic client relationships.",
      expertise: ["Sales Strategy", "Client Relations", "Market Development"],
      achievement: "Consistently exceeding targets"
    },
    {
      name: "Jagrit Aggarwal",
      role: "Sales",
      initials: "JA",
      description: "Results-driven sales expert focused on building and maintaining key client partnerships.",
      expertise: ["Business Development", "Client Management", "Sales Strategy"],
      achievement: "Strong client portfolio growth"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Team</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experienced leaders bringing decades of expertise in packaging, manufacturing, 
            and business excellence to drive innovation forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Avatar className="w-20 h-20 bg-primary text-primary-foreground">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                        {member.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {member.role}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {member.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground font-medium">
                          {member.achievement}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <Card className="bg-foreground text-background border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Leadership That Delivers Results</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">75+</div>
                <div className="text-background/70">Combined Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-background/70">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-background/70">Client Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}