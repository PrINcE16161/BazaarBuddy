import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, ShoppingBag } from "lucide-react";
import bakeryImage from "@/assets/products/bakery.jpg";
import vegetablesImage from "@/assets/products/vegetables.jpg";
import spicesImage from "@/assets/products/spices.jpg";
import dairyImage from "@/assets/products/dairy.jpg";

export function PopularOrdersSection() {
  const popularOrders = [
    {
      id: 1,
      name: "Onions",
      category: "Vegetables & Fruits",
      image: vegetablesImage,
      orders: 2840,
      growth: "+12%",
      items: ["Onions", "Tomatoes", "Potatoes", "Green Vegetables"],
      avgPrice: "₹25-50/kg"
    },
    {
      id: 11,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      image: spicesImage,
      orders: 1920,
      growth: "+8%",
      items: ["Garam Masala", "Cumin Seed", "Mutard Seed", "Cinnamon"],
      avgPrice: "₹450"
    },
    {
      id: 19,
      name: "MilkNest",
      category: "Dairy Products",
      image: bakeryImage,
      orders: 1650,
      growth: "+15%",
      items: ["Bread", "Pav", "Buns"],
      avgPrice: "₹180"
    },
    {
      id: 24,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      image: dairyImage,
      orders: 1340,
      growth: "+5%",
      items: ["Cooking Oil", "Ghee", "Milk"],
      avgPrice: "₹320"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Most Ordered This Week
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Orders from Local Vendors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what successful street food vendors in your area are ordering most frequently
          </p>
        </div>

        {/* Popular Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularOrders.map((order) => (
            <Link to={`/marketplace/${order.id}`}>
            <Card key={order.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={order.image} 
                  alt={order.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                    {order.growth}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold mb-1">
                      {order.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {order.category}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center text-primary">
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    {order.orders} orders
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    This week
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-1">
                      {order.items.slice(0, 2).map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {order.items.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{order.items.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="font-semibold text-primary">{order.avgPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Link to="/marketplace">
              Browse All Popular
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}