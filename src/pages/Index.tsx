import heroImage from "@/assets/hero-farming.jpg";
import FarmingAssistant from "@/components/FarmingAssistant";
import { Button } from "@/components/ui/button";
import { Sprout, Shield, Users, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">GreenGo Crop Helper</h1>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-fresh">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-foreground leading-tight">
                  Smart Farming
                  <span className="block text-primary">Made Simple</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your AI-powered agricultural assistant providing clear, practical advice on soil health, crop planning, weather updates, and market insights. Grow better crops with expert guidance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-4">
                  Start Farming Smarter
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Trusted by 10,000+ farmers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern farming with technology" 
                className="rounded-2xl shadow-primary w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <FarmingAssistant />
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-earth py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">10,000+</h3>
              <p className="text-muted-foreground">Happy Farmers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">25%</h3>
              <p className="text-muted-foreground">Average Yield Increase</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Crop Varieties Supported</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">24/7</h3>
              <p className="text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of farmers who are already using GreenGo Crop Helper to increase yields, reduce costs, and farm more sustainably.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-12 py-4">
            <Users className="mr-2 h-5 w-5" />
            Join Our Community
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">GreenGo Crop Helper</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              Empowering farmers with AI-driven agricultural insights.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;