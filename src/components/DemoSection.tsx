import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dashboardImage from "@/assets/dashboard-mockup.jpg";
import { Play, Monitor, Smartphone, Tablet } from "lucide-react";

const DemoSection = () => {
  const dashboardFeatures = [
    { name: "Real-time Monitoring", status: "active" },
    { name: "Weather Alerts", status: "warning" },
    { name: "Soil Analysis", status: "success" },
    { name: "Market Prices", status: "active" },
    { name: "AI Diagnosis", status: "success" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-primary text-primary-foreground";
      case "warning": return "bg-orange-500 text-white";
      case "active": return "bg-blue-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-foreground">See GreenGo in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our intuitive dashboard that puts all your farming data at your fingertips. 
            Monitor, analyze, and optimize your farm operations from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="animate-slide-in-left">
            <Card className="overflow-hidden shadow-primary border-2 border-primary/20">
              <CardHeader className="bg-gradient-primary text-primary-foreground">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Farm Dashboard</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Monitor className="h-4 w-4" />
                    <Tablet className="h-4 w-4" />
                    <Smartphone className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative group">
                  <img 
                    src={dashboardImage} 
                    alt="GreenGo Dashboard Preview" 
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button 
                    size="lg" 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary hover:bg-primary-hover"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Status Panel */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Dashboard Features</h3>
              <div className="space-y-4">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:shadow-soft transition-all duration-300">
                    <span className="font-medium text-card-foreground">{feature.name}</span>
                    <Badge className={getStatusColor(feature.status)}>
                      {feature.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-earth border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Try It Now</h4>
                <p className="text-muted-foreground mb-4">
                  Experience the power of AI-driven agriculture with our interactive demo. 
                  No registration required.
                </p>
                <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground">
                  <Play className="mr-2 h-5 w-5" />
                  Launch Interactive Demo
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">Real-time</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">Multi-device</div>
                <div className="text-sm text-muted-foreground">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;