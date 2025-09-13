import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Leaf, Globe } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "Empowering farmers worldwide with intelligent tools for sustainable agriculture and improved crop productivity."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Built by farmers, for farmers. We understand the challenges of modern agriculture and provide practical solutions."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability Focus",
      description: "Promoting eco-friendly farming practices that protect the environment while maximizing yields."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Supporting food security worldwide through innovative agricultural technology and data-driven insights."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-foreground">About GreenGo Crop Helper</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing agriculture with AI-powered tools that make smart farming accessible to everyone. 
            From soil analysis to market insights, we provide the technology farmers need to thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border bg-card/50 backdrop-blur-sm animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 p-4 rounded-full bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-soft">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Why Choose GreenGo?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              With over 10,000 satisfied farmers and proven results, GreenGo Crop Helper combines cutting-edge 
              technology with practical farming wisdom to deliver real results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Average Yield Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;