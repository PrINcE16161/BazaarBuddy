import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Clock, CheckCircle, Truck, Star, Phone } from "lucide-react";

export default function Orders() {
  const orders = [
    {
      id: "ORD-2024-001",
      supplier: "Fresh Veggie Hub",
      status: "delivered",
      items: [
        { name: "Fresh Onions", quantity: "10kg", price: "₹250" },
        { name: "Tomatoes", quantity: "5kg", price: "₹175" }
      ],
      total: "₹425",
      orderDate: "2024-01-20",
      deliveryDate: "2024-01-20",
      rating: 5
    },
    {
      id: "ORD-2024-002", 
      supplier: "Spice World",
      status: "in-transit",
      items: [
        { name: "Garam Masala", quantity: "2kg", price: "₹800" },
        { name: "Red Chili Powder", quantity: "1kg", price: "₹300" }
      ],
      total: "₹1,100",
      orderDate: "2024-01-21",
      deliveryDate: "2024-01-21",
      trackingId: "TR123456789"
    },
    {
      id: "ORD-2024-003",
      supplier: "Daily Bread Supply", 
      status: "confirmed",
      items: [
        { name: "Pav Bread", quantity: "50 pieces", price: "₹200" },
        { name: "Burger Buns", quantity: "25 pieces", price: "₹150" }
      ],
      total: "₹350",
      orderDate: "2024-01-21",
      deliveryDate: "2024-01-22"
    },
    {
      id: "ORD-2024-004",
      supplier: "Oil & Ghee Center",
      status: "pending",
      items: [
        { name: "Cooking Oil", quantity: "5L", price: "₹600" },
        { name: "Pure Ghee", quantity: "1kg", price: "₹500" }
      ],
      total: "₹1,100", 
      orderDate: "2024-01-21",
      deliveryDate: "2024-01-22"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "trust";
      case "in-transit": return "default";
      case "confirmed": return "golden";
      case "pending": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered": return "Delivered";
      case "in-transit": return "In Transit";
      case "confirmed": return "Confirmed";
      case "pending": return "Pending";
      default: return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return CheckCircle;
      case "in-transit": return Truck;
      case "confirmed": return Package;
      case "pending": return Clock;
      default: return Package;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Orders</h1>
          <p className="text-muted-foreground">
            Track and manage your ingredient orders
          </p>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-golden" />
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm text-muted-foreground">In Transit</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-trust" />
              <div className="text-2xl font-bold">21</div>
              <div className="text-sm text-muted-foreground">Delivered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-destructive" />
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => {
            const StatusIcon = getStatusIcon(order.status);
            return (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Order {order.id}</h3>
                      <p className="text-muted-foreground text-sm">{order.supplier}</p>
                    </div>
                    <Badge variant={getStatusColor(order.status)} className="flex items-center gap-1">
                      <StatusIcon className="h-3 w-3" />
                      {getStatusText(order.status)}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="font-medium mb-3">Order Items:</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span>{item.name} ({item.quantity})</span>
                            <span className="font-medium">{item.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between items-center font-semibold">
                          <span>Total:</span>
                          <span className="text-lg text-primary">{order.total}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Order Details:</h4>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Order Date:</span>
                            <span>{order.orderDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivery Date:</span>
                            <span>{order.deliveryDate}</span>
                          </div>
                          {order.trackingId && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Tracking ID:</span>
                              <span className="font-mono text-xs">{order.trackingId}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {order.status === "delivered" && order.rating && (
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm">Your Rating:</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${
                                    i < order.rating! ? 'text-golden fill-current' : 'text-muted-foreground'
                                  }`} 
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {order.status === "in-transit" && (
                          <Button variant="outline" size="sm" className="w-full">
                            Track Order
                          </Button>
                        )}

                        {order.status === "pending" && (
                          <Button variant="outline" size="sm" className="w-full">
                            Cancel Order
                          </Button>
                        )}

                        <Button variant="ghost" size="sm" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Contact Supplier
                        </Button>

                        {order.status === "delivered" && !order.rating && (
                          <Button variant="hero" size="sm" className="w-full">
                            Rate Order
                          </Button>
                        )}

                        <Button variant="outline" size="sm" className="w-full">
                          Reorder Items
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State (if needed) */}
        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by browsing our marketplace to find suppliers
            </p>
            <Button variant="hero">
              Browse Marketplace
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}