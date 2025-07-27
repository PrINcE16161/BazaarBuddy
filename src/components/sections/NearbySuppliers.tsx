import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function NearbySuppliersSection() {
  // Mock user location - in real app, this would come from geolocation
  const navigate = useNavigate();
  const userLocation = "Connaught Place, Delhi";
  
  const nearbySuppliers = [
    {
      id: 1,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      distance: "1.2 km",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      verified: true,
      specialties: ["Onions", "Tomatoes", "Potatoes"],
      deliveryTime: "30 mins",
      minOrder: "₹500"
    },
    {
      id: 2,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      distance: "800 m",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      verified: true,
      specialties: ["Garam Masala", "Turmeric", "Red Chili"],
      deliveryTime: "20 mins",
      minOrder: "₹300"
    },
    {
      id: 3,
      name: "MilkNest",
      category: "Dairy Product",
      distance: "1.8 km",
      rating: 4.6,
      reviews: 203,
      phone: "+91 76543 21098",
      verified: true,
      specialties: ["Bread", "Buns", "Pav"],
      deliveryTime: "25 mins",
      minOrder: "₹200"
    },
    {
      id: 4,
      name: "PureDrop Oils",
      category: "Oils & Ghee",
      distance: "2.1 km",
      rating: 4.7,
      reviews: 156,
      phone: "+91 65432 10987",
      verified: true,
      specialties: ["Cooking Oil", "Ghee", "Paneer"],
      deliveryTime: "35 mins",
      minOrder: "₹400"
    }
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Navigation className="h-4 w-4 mr-2" />
            Near {userLocation}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted Suppliers in Your Area
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with verified suppliers close to your location for faster delivery and better relationships
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbySuppliers.map((supplier) => (
            <Card key={supplier.id} className="group hover:shadow-lg transition-all duration-300" onClick={() => navigate(`/supplier/${supplier.id}`)}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {supplier.name}
                      {supplier.verified && (
                        <Badge variant="trust" className="ml-2 text-xs">
                          Verified
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {supplier.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {supplier.distance} away
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-golden mr-1 fill-current" />
                    <span className="font-medium">{supplier.rating}</span>
                    <span className="text-muted-foreground ml-1">({supplier.reviews})</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {supplier.specialties.slice(0, 2).map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {supplier.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{supplier.specialties.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p>{supplier.deliveryTime}</p>
                    </div>
                    <div>
                      <p className="font-medium">Min Order</p>
                      <p>{supplier.minOrder}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={(e) => { e.stopPropagation(); handleCall(supplier.phone);}}>
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={(e) => { e.stopPropagation(); handleWhatsApp(supplier.phone, supplier.name, supplier.specialties.join(', '));}}>
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="hero" className="flex-1" asChild>
                      <Link to={`/supplier/${supplier.id}`} onClick={(e) => e.stopPropagation()}>
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/suppliers">
              View All Suppliers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}