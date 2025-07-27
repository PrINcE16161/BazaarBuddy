import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Heart, DollarSign, Clock, Award } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Verified Suppliers",
      description: "Every supplier is background-checked and quality verified",
      color: "text-trust"
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden costs or middleman markup",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable delivery schedules that keep your business running",
      color: "text-golden"
    },
    {
      icon: Heart,
      title: "Quality Assured",
      description: "Fresh ingredients and quality materials, guaranteed",
      color: "text-destructive"
    },
    {
      icon: Zap,
      title: "Quick Orders",
      description: "Order in minutes, not hours. Streamlined for busy vendors",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Rating System",
      description: "Community-driven ratings help you choose the best suppliers",
      color: "text-trust"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose BazaarBuddy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Street Food Heroes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the challenges of street food business. Our platform is designed 
            specifically for vendors like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${feature.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}