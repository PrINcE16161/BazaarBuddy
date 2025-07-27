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
import { Eye, EyeOff, Phone, Mail, Store, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const {toast} = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"vendor" | "supplier">("vendor");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactType, setContactType] = useState("email");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const payload = {
      contactType,
      contactValue: contactType === "email" ? email : phone,
      password,
    };
    let firstName = "Guest";
    let role = "vendor";

    if (contactType === "email" && email) {
      const extractedName = email.split("@")[0]; // "prince"
      firstName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1); // "Prince"
      if (email.includes("supplier")) {
        role = "supplier";
      } else if (email.includes("vendor")) {
        role = "vendor";
      }
    }
    localStorage.setItem("userFirstName", firstName );
    localStorage.setItem("userRole", role);

    console.log("Login payload:", payload);

    toast({
      title: "Registration Successful",
      description: `Welcome to BazaarBuddy!`,
    });

    // Optionally redirect to homepage or dashboard
    navigate("/");
  }
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <Card className="border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <p className="text-muted-foreground">
                Sign in to your BazaarBuddy account
              </p>
              <Card className="p-4 text-sm border-muted shadow-sm">
                <p className="mb-1"><strong>Vendor:</strong> vendor@demo.com</p>
                <p className="mb-1"><strong>Supplier:</strong> supplier@demo.com</p>
                <p><strong>Password:</strong> any</p>
              </Card>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* User Type Selection */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={userType === "vendor" ? "hero" : "outline"}
                  onClick={() => setUserType("vendor")}
                  className="flex items-center gap-2"
                >
                  <Store className="h-4 w-4" />
                  Vendor
                </Button>
                <Button
                  variant={userType === "supplier" ? "trust" : "outline"}
                  onClick={() => setUserType("supplier")}
                  className="flex items-center gap-2"
                >
                  <Truck className="h-4 w-4" />
                  Supplier
                </Button>
              </div>

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
                    <Label htmlFor="email">Email</Label>
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

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                variant={userType === "vendor" ? "hero" : "trust"}
                onClick={handleLogin}
                size="lg"
              >
                Sign In as {userType === "vendor" ? "Vendor" : "Supplier"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    Register here
                  </Link>
                </p>
              </div>

              {/* Trust Badge */}
              <div className="flex justify-center pt-4">
                <Badge variant="outline" className="text-xs">
                  🔒 Secure login with end-to-end encryption
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}