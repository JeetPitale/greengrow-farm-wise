import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, CloudRain, TrendingUp, Leaf, BarChart3, MessageCircle } from "lucide-react";

const FarmingAssistant = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Soil Health",
      description: "Get personalized soil analysis and nutrient management advice for optimal crop growth.",
      tips: ["Test soil pH regularly", "Apply organic compost", "Monitor nutrient levels"]
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Crop Planning",
      description: "Smart crop selection based on your region, season, and soil conditions.",
      tips: ["Seasonal crop calendar", "Companion planting", "Rotation schedules"]
    },
    {
      icon: <CloudRain className="h-8 w-8" />,
      title: "Weather Updates",
      description: "Real-time weather alerts and farming tips based on current conditions.",
      tips: ["7-day forecast", "Rainfall predictions", "Temperature alerts"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Prices",
      description: "Track crop prices, demand trends, and optimize your selling strategy.",
      tips: ["Daily price updates", "Market trends", "Best selling times"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Yield Optimization",
      description: "Data-driven insights to maximize your harvest and improve productivity.",
      tips: ["Performance tracking", "Growth monitoring", "Harvest timing"]
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Expert Advice",
      description: "Get instant answers to your farming questions from our AI assistant.",
      tips: ["24/7 support", "Localized advice", "Step-by-step guidance"]
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Your Farming Assistant</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get expert agricultural guidance tailored to your farm's needs. Simple, practical advice that helps you grow better crops and increase profits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border bg-card">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-fresh text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                {feature.icon}
              </div>
              <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {feature.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3">
          <MessageCircle className="mr-2 h-5 w-5" />
          Ask a Question
        </Button>
      </div>
    </div>
  );
};

export default FarmingAssistant;