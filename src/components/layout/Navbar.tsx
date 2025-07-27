import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Menu, X, Sun, Moon, ShoppingCart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const role = localStorage.getItem("userRole");
  const userFirstName = localStorage.getItem("userFirstName");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleProfile = () => {
    const role = localStorage.getItem("userRole");
    if(role === "supplier") {
    navigate('/profile/1');
    }
    else {
      navigate('/profile/2');
    }
  };

  const handleLogout = () => {
    localStorage.clear(); 
    sessionStorage.clear();
    toast({
      title: "Logged Out",
      description: "You have been securely logged out.",
    });
    navigate("/"); 
    window.location.reload(); 
  };

  return (
    <>
      {/* Desktop Navbar - Glass Effect */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-foreground">
              BazaarBuddy
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors">
                Marketplace
              </Link>
              <Link to="/suppliers" className="text-foreground hover:text-primary transition-colors">
                Suppliers
              </Link>
              <Link to="/shopping-list" className="whitespace-nowrap text-foreground hover:text-primary transition-colors">
                Shopping List
              </Link>
              <Link to="/trends" className="text-foreground hover:text-primary transition-colors">
                Prices
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleDarkMode}
                className="text-foreground hover:text-primary"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {userFirstName ? (
                <div className="flex items-center gap-3">
                  <Button variant="ghost" className="text-sm font-medium text-foreground whitespace-nowrap" onClick={handleProfile} >
                    Hello, {userFirstName}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="glass" size="sm" asChild>
                    <Link to="/login">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Link>
                  </Button>

                  <Button variant="hero" size="sm" asChild>
                    <Link to="/register">
                      Join Now
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="text-xl font-bold text-foreground">
            BazaarBuddy
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link 
                to="/marketplace" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link 
                to="/suppliers" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Suppliers
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/shopping-list" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shopping List
              </Link>
              
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/register">
                    Join Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}