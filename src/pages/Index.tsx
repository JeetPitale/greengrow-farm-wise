import heroImage from "@/assets/hero-farming.jpg";
import FarmingAssistant from "@/components/FarmingAssistant";
import AboutSection from "@/components/AboutSection";
import DemoSection from "@/components/DemoSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Sprout, Shield, Users, Star, ChevronDown, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sprout className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">GreenGo Crop Helper</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-primary transition-colors">Features</button>
              <button onClick={() => scrollToSection('demo')} className="text-muted-foreground hover:text-primary transition-colors">Demo</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-fresh pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h2 className="text-6xl font-bold text-foreground leading-tight">
                  Smart Farming
                  <span className="block text-primary">Starts Here</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Empower your agricultural journey with AI-driven insights, real-time monitoring, 
                  and expert guidance. Transform your farm into a data-driven, sustainable operation 
                  that maximizes yield and profitability.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-10 py-4 text-lg animate-bounce-gentle">
                  Try Demo
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
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

            <div className="relative animate-slide-in-right">
              <img 
                src={heroImage} 
                alt="Modern farming with technology" 
                className="rounded-2xl shadow-primary w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FarmingAssistant />

      {/* Quick Stats */}
      <section className="bg-gradient-earth py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <h3 className="text-4xl font-bold text-primary">10K+</h3>
              <p className="text-muted-foreground">Happy Farmers</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-4xl font-bold text-primary">25%</h3>
              <p className="text-muted-foreground">Avg. Yield Increase</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Crop Varieties</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-4xl font-bold text-primary">24/7</h3>
              <p className="text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of farmers who are already using GreenGo Crop Helper to increase yields, 
            reduce costs, and farm more sustainably. Start your smart farming journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-12 py-4 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">GreenGo Crop Helper</span>
              </div>
              <p className="text-muted-foreground">
                Empowering farmers with AI-driven agricultural insights for sustainable and profitable farming.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Soil Health Monitoring</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Smart Crop Planning</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Weather Alerts</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Market Prices</li>
                <li className="hover:text-primary cursor-pointer transition-colors">AI Crop Diagnosis</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Community Forum</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Contact Support</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Training Resources</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>support@greengo.com</li>
                <li>+1 (555) 123-FARM</li>
                <li>123 Agriculture Ave</li>
                <li>Farm City, FC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2024 GreenGo Crop Helper. All rights reserved. | Privacy Policy | Terms of Service
              </p>
              <p className="text-muted-foreground text-sm">
                Made with ❤️ for farmers worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full shadow-primary transition-all duration-300 z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Index;