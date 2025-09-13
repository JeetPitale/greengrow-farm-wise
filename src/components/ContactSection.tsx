import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "support@greengo.com",
      description: "Get expert advice from our team"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Support",
      content: "+1 (555) 123-FARM",
      description: "24/7 farmer support hotline"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Office",
      content: "123 Agriculture Ave, Farm City",
      description: "Agricultural innovation center"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Support Hours",
      content: "24/7 Available",
      description: "Always here when you need us"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about your crops or need personalized farming advice? 
            Our team of agricultural experts is here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-in-left shadow-primary border-border bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</Label>
                  <Input id="lastName" placeholder="Farmer" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="john@farm.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="farmSize" className="text-sm font-medium text-foreground">Farm Size (acres)</Label>
                <Input id="farmSize" placeholder="e.g., 50 acres" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="crops" className="text-sm font-medium text-foreground">Primary Crops</Label>
                <Input id="crops" placeholder="e.g., Wheat, Corn, Soybeans" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your farming challenges or questions..." 
                  rows={4}
                  className="mt-1"
                />
              </div>
              <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-card-foreground">{info.title}</h3>
                    <p className="font-medium text-primary mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-earth border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Need Immediate Help?</h3>
                <p className="text-muted-foreground mb-6">
                  Our agricultural experts are available 24/7 to assist with urgent farming questions 
                  and emergency crop issues.
                </p>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency Support
                </Button>
              </CardContent>
            </Card>

            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold mb-3 text-card-foreground">Popular Questions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• How do I interpret soil test results?</li>
                <li>• When is the best time to plant in my region?</li>
                <li>• How can I improve my crop yield naturally?</li>
                <li>• What are the current market prices for my crops?</li>
                <li>• How do I identify and treat plant diseases?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;