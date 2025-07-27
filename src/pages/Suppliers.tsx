import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, Star, MapPin, Phone, Mail, Users, Package, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Suppliers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const suppliers = [
    {
      id: 1,
      name: "VeggieVerse",
      owner: "Mahesh kachhiy",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      email: "maheshveggieVerse@gmail.com",
      verified: true,
      established: "2015",
      employees: "15-20",
      specialties: ["Bulk Vegetable Supplier",  "Organic Produce Specialist", "Daily Fresh Stock", "Seasonal Crop Distributor", "Exotic Vegetables Available", "Root Vegetables Expert (e.g., potato, onion, garlic)", "Green Leafy Supplier (e.g., spinach, coriander, methi)", "Fruit & Vegetable Combo Supplier", "Grains & Pulses Supplier"],
      description: "We are trusted wholesale suppliers of fresh vegetables and farm produce, directly sourced from local growers. Guaranteed freshness, fair pricing, and timely delivery for all your market needs.",
      products: 45,
      activeOrders: 39,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "SupplyHarvest",
      owner: "Manjeet Singh",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      email: "manjeetsupplyharvest@gmail.com",
      verified: true,
      established: "2008",
      employees: "8-10",
      specialties: ["Garam Masala", "Chaat Masala", "Custom Blends", "Organic Spices" ,"Rajwadi Masala (Gujarat)", "Malabar Black Pepper (Kerala)", "Byadgi Chili (Karnataka)", "Kashmiri Saffron & Chili", "Rajasthani Dry Spices"],
      description: "Premium spice supplier with authentic Indian spices sourced directly from farms. Specializing in street food spice blends and custom masala mixes.",
      products: 78,
      activeOrders: 68,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "MilkNest",
      owner: "Manan Desai",
      category: "Dairy Products",
      location: "Baroda Dairy (vadodara)",
      rating: 4.9,
      reviews: 156,
      phone: "+91 76543 21098",
      email: "milknest171@gmail.com",
      verified: true,
      established: "2012",
      employees: "25-30",
      specialties: ["Fresh Milk", "Paneer", "Yogurt", "Butter"],
      description: "Proudly serving Vadodara since 1957. We are a cooperative of local farmers delivering quality dairy every day to thousands of homes.",
      products: 52,
      activeOrders: 45,
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "PureDrop Oils",
      owner: "Ramesh Kandoi",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      email: "puredrop186@gmail.com",
      verified: true,
      established: "2012",
      employees: "8-9",
      specialties: ["Mustard oil", "Rice Bran oil", "Soy bean oil", "Olive oil" ,"Avocado oil", "Sun flower oil",],
      description: "Pure, Fresh, & Authentic Oils and Ghee Discover our range of traditionally extracted edible oils and premium desi ghee — straight from trusted local producers.",
      products: 78,
      activeOrders: 23,
      avatar: "/placeholder.svg"
    },
    {
      id: 5,
      name: "The Bake Lane",
      owner: "Chandu patel",
      category: "Bakery Items",
      location: "Ranu, Padra",
      rating: 4.9,
      reviews: 198,
      phone: "+91 76543 21098",
      email: "chandupatel1@gmail.com",
      verified: true,
      established: "2018",
      employees: "10-15",
      specialties: ["specialties", "Donuts", "Cookies", "Muffins", "Tea-Time Cakes", "Artisan Breads"],
      description: "Reliable bakery supplier with fresh daily production, specializing in bread items for street food vendors.",
      products: 112,
      activeOrders: 98,
      avatar: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Crunchy Crate",
      owner: "Jalpesh Rathod",
      category: "Dry-Fruits",
      location: "athiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      email: "crunchycrate191@gmail.com",
      verified: true,
      established: "2008",
      employees: "4-5",
      specialties: ["CASHEW", "PISTA", "RAISIN", "COCONUT" ,"APRICOT", "WALNUT SHELL"],
      description: "Buy premium quality dry fruits, nuts, seeds, and berries online – fresh, hygienic, and delivered across Vadodara and Gujarat.",
      products: 56,
      activeOrders: 23,
      avatar: "/placeholder.svg"
    }
  ];

  const categories = [
    "All Categories",
    "Vegetables & Fruits",
    "Spices & Masala", 
    "Bakery Items",
    "Oil & Ghee",
    "Dairy Products",
    "Dry-Fruits"
  ];

  const handleCall = (phone: string) => {
    // Remove all non-digit characters: +, spaces, etc.
    const cleanedNumber = phone.replace(/\D/g, '');

    // Open phone dialer
    window.open(`tel:${cleanedNumber}`, '_self');
  };

  const handleWhatsApp = (whatsapp: string, supplierName: string, productName: string) => {
    // Remove all non-digit characters: +, spaces, etc.
    const cleanedNumber = whatsapp.replace(/\D/g, '');

    // Encode the message for URL
    const message = encodeURIComponent(
      `Hi ${supplierName}, I'm interested in ordering ${productName}. Could you please provide more details?`
    );

    // Open WhatsApp Web/app with the message
    window.open(`https://wa.me/${cleanedNumber}?text=${message}`, '_blank');
  };
  
  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || supplier.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const { toast } = useToast();

  const handleLoadMore = () => {
    toast({
      title: "Load More Feature",
      description: "Coming Soon"
    });
  }
  return (
    <Layout>
      <div className="container mx-auto md:mt-20 px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Trusted Suppliers</h1>
          <p className="text-muted-foreground">
            Connect with verified suppliers across Delhi NCR
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search suppliers by name, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="whitespace-nowrap cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredSuppliers.length} suppliers
            {selectedCategory !== "All Categories" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={supplier.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {supplier.owner.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {supplier.name}
                          {supplier.verified && (
                            <Badge variant="trust" className="ml-2 text-xs">
                              Verified
                            </Badge>
                          )}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          Owner: {supplier.owner}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {supplier.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-golden mr-1 fill-current" />
                        {supplier.rating} ({supplier.reviews})
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {supplier.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {supplier.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-primary">{supplier.products}</div>
                      <div className="text-xs text-muted-foreground">Products</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-trust">{supplier.activeOrders}</div>
                      <div className="text-xs text-muted-foreground">Active Orders</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-golden">{supplier.established}</div>
                      <div className="text-xs text-muted-foreground">Since</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {supplier.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={(e) => { e.stopPropagation(); handleCall(supplier.phone);}}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={(e) => { e.stopPropagation(); handleWhatsApp(supplier.phone, supplier.name, supplier.specialties.join(', '));}}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button size="sm" variant="hero" className="flex-1" asChild>
                      <Link to={`/supplier/${supplier.id}`}>
                        View Profile
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No suppliers found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all categories
            </p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Categories");
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredSuppliers.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={handleLoadMore}>
              Load More Suppliers
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}