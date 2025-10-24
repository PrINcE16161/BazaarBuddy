import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, ShoppingBag, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/hero-banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
          <ShoppingBag className="h-6 w-6 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
          <Users className="h-6 w-6 text-trust" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
          <TrendingUp className="h-6 w-6 text-golden" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <Badge variant="secondary" className="mb-6 animate-fade-in">
          <CheckCircle className="h-4 w-4 mr-2" />
          Trusted by 5000+ Street Food Vendors
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Connect. Source.{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Prosper.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          India's first trusted marketplace connecting street food vendors with reliable suppliers. 
          Get quality ingredients at fair prices, build lasting partnerships.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button variant="hero" size="xl" className="group" asChild>
            <Link to="/register">
              Start as Vendor
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button variant="glass" size="xl" asChild>
            <Link to="/register">
              Join as Supplier
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">5K+</div>
            <div className="text-sm text-muted-foreground">Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-trust">2K+</div>
            <div className="text-sm text-muted-foreground">Suppliers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-golden">₹50L+</div>
            <div className="text-sm text-muted-foreground">Traded</div>
          </div>
        </div>
      </div>
    </section>
  );
}