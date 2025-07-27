import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EditIcon, MapPin, Phone, Mail, Clock, Package, Star, TrendingUp, History } from "lucide-react";
import { ProfileEditDialog } from "@/components/profile/ProfileEditDialog";
import { ProductManagement } from "@/components/profile/ProductManagement";
import { ShoppingListHistory } from "@/components/profile/ShoppingListHistory";

// Mock user data - in real app this would come from authentication/database

export default function Profile() {
  const { id } = useParams();

  const mockUserData = {
    "1": {
      id: "1",
    type: "supplier", // "vendor" or "supplier"
    name: "VeggieVerse",
    owner: "Mahesh kachhiya",
    category: "Vegetables & Fruits",
    location: "APMC Mandi, Sayajipura",
    fullAddress: "Shop No. 45-46, Sayajipura , vadodara,  390019 ",
    phone: "+91 98765 43210",
    email: "maheshveggieverse@gmail.com",
    whatsapp: "+91 98765 43210",
    verified: true,
    // Supplier specific fields
    rating: 4.8,
    reviews: 125,
    established: "2015",
    employees: "15-20",
    description: "We are trusted wholesale suppliers of fresh vegetables and farm produce, directly sourced from local growers. Guaranteed freshness, fair pricing, and timely delivery for all your market needs.",
    avatar: "/placeholder.svg",
    coverImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
    specialties: ["Bulk Vegetable Supplier",  "Organic Produce Specialist", "Daily Fresh Stock", "Seasonal Crop Distributor", "Exotic Vegetables Available", "Root Vegetables Expert (e.g., potato, onion, garlic)", "Green Leafy Supplier (e.g., spinach, coriander, methi)", "Fruit & Vegetable Combo Supplier", "Grains & Pulses Supplier"],
    businessHours: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM",
      wednesday: "6:00 AM - 8:00 PM",
      thursday: "6:00 AM - 8:00 PM",
      friday: "6:00 AM - 8:00 PM",
      saturday: "7:00 AM - 6:00 PM",
      sunday: "8:00 AM - 4:00 PM"
    },
    deliveryHours: ["6:00 AM - 10:00 AM", "2:00 PM - 6:00 PM"],
    deliveryAreas: ["Alkapuri, Vadodara", "Karelibaug", "Manjalpur", "Sayajipura"],
    paymentMethods: ["Cash", "UPI", "Bank Transfer", "Credit (for verified vendors)"],
    minimumOrder: "₹500",
    deliveryTime: "Same-Day Delivery if ordered before 12:00 PM",
    totalProducts: 45,
    activeOrders: 39,
    completedOrders: 1250,
    responseTime: "1 hours",
    certifications: ["FSSAI Licensed", "ISO 22000", "Organic Certified"]
    },
    "2": {
      id: "2",
    type: "vendor", // "vendor" or "supplier"
    name: "Vendor Memeber",
    owner: "Ram Pandit",
    location: "Alkapuri, Vadodara",
    fullAddress: "Shop No. 56, Alkapuri , vadodara,  390019 ",
    phone: "+91 98765 43210",
    email: "rampandit@gmail.com",
    whatsapp: "+91 98765 43210",
    verified: true,
    // Supplier specific fields
    rating: 4.8,
    reviews: 125,
    established: "2015",
    employees: "15-20",
    description: "We are trusted wholesale suppliers of fresh vegetables and farm produce, directly sourced from local growers. Guaranteed freshness, fair pricing, and timely delivery for all your market needs.",
    avatar: "/placeholder.svg",
    coverImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
    specialties: ["Bulk Vegetable Supplier",  "Organic Produce Specialist", "Daily Fresh Stock", "Seasonal Crop Distributor", "Exotic Vegetables Available", "Root Vegetables Expert (e.g., potato, onion, garlic)", "Green Leafy Supplier (e.g., spinach, coriander, methi)", "Fruit & Vegetable Combo Supplier", "Grains & Pulses Supplier"],
    businessHours: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM",
      wednesday: "6:00 AM - 8:00 PM",
      thursday: "6:00 AM - 8:00 PM",
      friday: "6:00 AM - 8:00 PM",
      saturday: "7:00 AM - 6:00 PM",
      sunday: "8:00 AM - 4:00 PM"
    },
    deliveryHours: ["6:00 AM - 10:00 AM", "2:00 PM - 6:00 PM"],
    deliveryAreas: ["Alkapuri, Vadodara", "Karelibaug", "Manjalpur", "Sayajipura"],
    paymentMethods: ["Cash", "UPI", "Bank Transfer", "Credit (for verified vendors)"],
    minimumOrder: "₹500",
    deliveryTime: "Same-Day Delivery if ordered before 12:00 PM",
    totalProducts: 45,
    activeOrders: 39,
    completedOrders: 1250,
    responseTime: "1 hours",
    certifications: ["FSSAI Licensed", "ISO 22000", "Organic Certified"]
    },
  };

  const mockUser = mockUserData[id] || mockUserData["1"];
  
  const [user] = useState(mockUser);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Cover Image */}
        {user.type === "supplier" && user.coverImage && (
          <div 
            className="h-48 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${user.coverImage})` }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}

        <div className="container mx-auto px-4 py-6">
          {/* Profile Header */}
          <div className={`relative ${user.type === "supplier" ? "-mt-24" : "mt-20"}   mb-6`}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold">{user.name}</h1>
                      {user.verified && (
                        <Badge variant="default" className="bg-green-500">
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-2">
                      Owner: {user.owner} • {user.category}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {user.location}
                      </div>
                      {user.type === "supplier" && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {user.rating} ({user.reviews} reviews)
                        </div>
                      )}
                    </div>

                    {user.type === "supplier" && user.description && (
                      <p className="text-sm mb-4">{user.description}</p>
                    )}

                    <Button 
                      onClick={() => setIsEditDialogOpen(true)}
                      className="gap-2"
                    >
                      <EditIcon className="w-4 h-4" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Content Tabs */}
          <Tabs defaultValue="contact" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4">
              <TabsTrigger value="contact">Contact & Business</TabsTrigger>
              {user.type === "supplier" && (
                <TabsTrigger value="overview">Overview</TabsTrigger>
              )}
              {user.type === "supplier" && (
                <TabsTrigger value="products">Products</TabsTrigger>
              )}
              {user.type === "vendor" && (  
                <TabsTrigger value="history">Shopping History</TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stats Cards */}
                {user.type === "supplier" && (
                  <>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.totalProducts}</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.activeOrders}</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
                        <History className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{user.completedOrders}</div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {/* Specialties/Categories */}
                {user.type === "supplier" && user.specialties && (
                  <Card className="md:col-span-2 lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Specialties</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {user.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Business Info */}
                {user.type === "supplier" && (
                  <Card className="md:col-span-2 lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Business Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Established</p>
                        <p className="text-sm text-muted-foreground">{user.established}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Employees</p>
                        <p className="text-sm text-muted-foreground">{user.employees}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Minimum Order</p>
                        <p className="text-sm text-muted-foreground">{user.minimumOrder}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Delivery Time</p>
                        <p className="text-sm text-muted-foreground">{user.deliveryTime}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Response Time</p>
                        <p className="text-sm text-muted-foreground">{user.responseTime}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {user.type === "supplier" && (
              <TabsContent value="products">
                <ProductManagement />
              </TabsContent>
            )}

            {user.type === "vendor" && (
              <TabsContent value="history">
                <ShoppingListHistory />
              </TabsContent>
            )}

            <TabsContent value="contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{user.fullAddress}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                {user.type === "supplier" && user.businessHours && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {Object.entries(user.businessHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="capitalize font-medium">{day}</span>
                          <span className="text-muted-foreground">{hours}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Delivery Information */}
                {user.type === "supplier" && (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle>Delivery Hours</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {user.deliveryHours.map((hours, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              {hours}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Delivery Areas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {user.deliveryAreas.map((area, index) => (
                            <Badge key={index} variant="outline">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Payment Methods</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {user.paymentMethods.map((method, index) => (
                            <Badge key={index} variant="secondary">
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Certifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {user.certifications.map((cert, index) => (
                            <Badge key={index} variant="default" className="bg-green-500">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <ProfileEditDialog 
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          user={user}
        />
      </div>
    </Layout>
  );
}