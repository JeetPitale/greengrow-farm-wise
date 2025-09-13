import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, CloudRain, TrendingUp, Stethoscope, Calendar, BarChart3 } from "lucide-react";

const FarmingAssistant = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "🌱 Soil Health Monitoring",
      description: "Advanced soil analysis with real-time pH, nutrient levels, and moisture tracking for optimal crop growth.",
      tips: ["pH level monitoring", "Nutrient deficiency alerts", "Soil moisture tracking"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "📅 Smart Crop Planning",
      description: "AI-powered planting schedules, crop rotation suggestions, and seasonal optimization based on your location.",
      tips: ["Seasonal planting calendar", "Crop rotation planning", "Yield optimization"]
    },
    {
      icon: <CloudRain className="h-8 w-8" />,
      title: "⛈️ Real-time Weather Alerts",
      description: "Precision weather forecasting with farming-specific alerts for frost, rain, and optimal planting conditions.",
      tips: ["7-day detailed forecast", "Frost & storm warnings", "Irrigation scheduling"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "📈 Market Price Updates",
      description: "Live commodity prices, market trends, and optimal selling timing to maximize your profits.",
      tips: ["Real-time pricing", "Market trend analysis", "Profit optimization"]
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "🤖 AI-driven Crop Diagnosis",
      description: "Field Doctor AI instantly identifies plant diseases, pest issues, and provides treatment recommendations.",
      tips: ["Disease identification", "Pest detection", "Treatment recommendations"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "📊 Yield Analytics",
      description: "Comprehensive farm performance tracking with actionable insights to improve productivity and sustainability.",
      tips: ["Performance tracking", "Growth monitoring", "Sustainability metrics"]
    }
  ];

  return (
    <section id="features" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Powerful Features for Modern Farmers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to optimize your farm operations, increase yields, and make data-driven decisions. 
            Our AI-powered tools provide practical insights that translate into real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border bg-card animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-fresh text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feature.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gradient-earth rounded-2xl p-8 max-w-4xl mx-auto shadow-soft">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Transform Your Farm?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of farmers who are already using our tools to increase productivity and sustainability.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-12 py-4 animate-bounce-gentle">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmingAssistant;