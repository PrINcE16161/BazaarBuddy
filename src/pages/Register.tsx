import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Phone, Mail, Store, Truck, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"vendor" | "supplier">("vendor");
  const navigate = useNavigate();
  const { toast } = useToast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactType, setContactType] = useState("email");
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const payload = {
      firstName,
      lastName,
      contactType,
      contactValue: contactType === "email" ? email : phone,
      userType,
      businessName,
      city,
      area,
      category: userType === "supplier" ? category : null,
      password,
    };
    let role = "vendor";
    if (contactType === "email" && email) {
      if (email.includes("supplier")) {
        role = "supplier";
      } else if (email.includes("vendor")) {
        role = "vendor";
      }
    }

    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userRole", role);
    console.log("Register payload:", payload);

    toast({
      title: "Registration Successful",
      description: `Welcome ${firstName}, to BazaarBuddy!`,
    });

    // Optionally redirect to homepage or dashboard
    navigate("/");
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-2xl">
          <Card className="border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Join BazaarBuddy</CardTitle>
              <p className="text-muted-foreground">
                Create your account and start building trusted partnerships
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* User Type Selection */}
              <div className="grid grid-cols-2 gap-4">
                <Card 
                  className={`cursor-pointer transition-all duration-200 ${
                    userType === "vendor" 
                      ? "border-primary bg-primary/5 shadow-md" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setUserType("vendor")}
                >
                  <CardContent className="p-4 text-center">
                    <Store className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Street Food Vendor</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Source quality ingredients for your food business
                    </p>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer transition-all duration-200 ${
                    userType === "supplier" 
                      ? "border-trust bg-trust/5 shadow-md" 
                      : "border-border hover:border-trust/50"
                  }`}
                  onClick={() => setUserType("supplier")}
                >
                  <CardContent className="p-4 text-center">
                    <Truck className="h-8 w-8 mx-auto mb-2 text-trust" />
                    <h3 className="font-semibold">Supplier</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Connect with vendors and grow your business
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <Tabs value={contactType} onValueChange={setContactType} defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </TabsTrigger>
                  <TabsTrigger value="phone">
                    <Phone className="h-4 w-4 mr-2" />
                    Phone
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </TabsContent>

                <TabsContent value="phone" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex">
                      <div className="flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                        <span className="text-sm">+91</span>
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="98765 43210"
                        onChange={(e) => setPhone(e.target.value)}
                        className="rounded-l-none"
                        required
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Business Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">
                    {userType === "vendor" ? "Shop/Stall Name" : "Business Name"}
                  </Label>
                  <Input
                    id="businessName"
                    placeholder={
                      userType === "vendor"
                        ? "e.g., Ram's Chaat Corner"
                        : "e.g., Fresh Veggie Hub"
                    }
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Select onValueChange={setCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area/Locality</Label>
                    <Input
                      id="area"
                      placeholder="e.g., Karol Bagh, Connaught Place"
                      onChange={(e) => setArea(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {userType === "supplier" && (
                  <div className="space-y-2">
                    <Label htmlFor="category">Business Category</Label>
                    <Select onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetables">Vegetables & Fruits</SelectItem>
                        <SelectItem value="spices">Spices & Masala</SelectItem>
                        <SelectItem value="dairy">Dairy & Oil</SelectItem>
                        <SelectItem value="bakery">Bakery Items</SelectItem>
                        <SelectItem value="meat">Meat & Poultry</SelectItem>
                        <SelectItem value="dryfruits">Dry Fruits & Nuts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                variant={userType === "vendor" ? "hero" : "trust"}
                size="lg"
                onClick={handleRegister}
              >
                Create {userType === "vendor" ? "Vendor" : "Supplier"} Account
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 justify-center pt-4">
                <Badge variant="outline" className="text-xs">
                  🔒 Secure Registration
                </Badge>
                <Badge variant="outline" className="text-xs">
                  ✓ Instant Verification
                </Badge>
                <Badge variant="outline" className="text-xs">
                  📞 24/7 Support
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}