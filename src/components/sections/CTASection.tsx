import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full" />
          </div>

          <div className="relative z-10">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Clock className="h-4 w-4 mr-2" />
              Join Today - Setup in 5 Minutes
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful vendors who've streamlined their sourcing with BazaarBuddy. 
              Start building reliable supplier relationships today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/marketplace">
                <Button 
                  variant="secondary" 
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90 group"
                >
                  
                    <Smartphone className="mr-2 h-5 w-5" />
                    Explore Market
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Link to="#" >
                <Button 
                  variant="glass" 
                  size="xl"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  View Demo
                </Button>
              </Link>
            </div>

            <p className="text-sm text-white/70 mt-6">
              No setup fees • Cancel anytime • 24/7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}