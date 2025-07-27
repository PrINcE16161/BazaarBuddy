import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Package, Clock, Search, Filter, Archive } from "lucide-react";
import { format } from "date-fns";

// Mock shopping list history data
const mockHistory = [
  {
    id: "1",
    name: "Weekly Produce Order",
    date: new Date("2024-01-15"),
    status: "completed",
    totalItems: 8,
    totalValue: "₹234.50",
    items: [
      { name: "Organic Tomatoes", quantity: "10 kg", price: "₹45.00", supplier: "Green Valley Farms" },
      { name: "Fresh Lettuce", quantity: "5 kg", price: "₹25.00", supplier: "Fresh Greens Co" },
      { name: "Carrots", quantity: "8 kg", price: "₹32.00", supplier: "Garden Fresh" },
      { name: "Bell Peppers", quantity: "6 kg", price: "₹48.00", supplier: "Valley Produce" }
    ]
  },
  {
    id: "2",
    name: "Special Event Catering",
    date: new Date("2024-01-10"),
    status: "completed",
    totalItems: 12,
    totalValue: "₹456.75",
    items: [
      { name: "Premium Beef", quantity: "15 kg", price: "₹225.00", supplier: "Prime Meats" },
      { name: "Organic Vegetables", quantity: "20 kg", price: "₹120.00", supplier: "Green Valley Farms" },
      { name: "Fresh Herbs", quantity: "2 kg", price: "₹36.00", supplier: "Herb Garden" }
    ]
  },
  {
    id: "3",
    name: "Daily Essentials",
    date: new Date("2024-01-08"),
    status: "pending",
    totalItems: 6,
    totalValue: "₹189.25",
    items: [
      { name: "Milk", quantity: "20 L", price: "₹40.00", supplier: "Dairy Fresh" },
      { name: "Bread", quantity: "10 loaves", price: "₹25.00", supplier: "Artisan Bakery" },
      { name: "Eggs", quantity: "5 dozen", price: "₹30.00", supplier: "Farm Fresh Eggs" }
    ]
  },
  {
    id: "4",
    name: "Bulk Order - January",
    date: new Date("2024-01-05"),
    status: "cancelled",
    totalItems: 15,
    totalValue: "₹678.90",
    items: [
      { name: "Rice", quantity: "50 kg", price: "₹75.00", supplier: "Grain Merchants" },
      { name: "Flour", quantity: "30 kg", price: "₹45.00", supplier: "Mill Direct" },
      { name: "Oil", quantity: "20 L", price: "₹120.00", supplier: "Oil Express" }
    ]
  }
];

export function ShoppingListHistory() {
  const [history] = useState(mockHistory);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedList, setExpandedList] = useState<string | null>(null);

  const filteredHistory = history.filter(list => {
    const matchesSearch = list.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || list.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const toggleExpanded = (listId: string) => {
    setExpandedList(expandedList === listId ? null : listId);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <h2 className="text-2xl font-bold">Shopping List History</h2>
          <p className="text-muted-foreground">View and manage your previous shopping lists</p>
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search lists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* History Cards */}
      <div className="space-y-4">
        {filteredHistory.map((list) => (
          <Card key={list.id} className="overflow-hidden">
            <CardHeader className="cursor-pointer" onClick={() => toggleExpanded(list.id)}>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">{list.name}</CardTitle>
                    <Badge className={getStatusColor(list.status)}>
                      {list.status.charAt(0).toUpperCase() + list.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(list.date, "MMM dd, yyyy")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      {list.totalItems} items
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-foreground">{list.totalValue}</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  {expandedList === list.id ? "Hide Details" : "View Details"}
                </Button>
              </div>
            </CardHeader>
            
            {expandedList === list.id && (
              <CardContent className="pt-0">
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Items Ordered:</h4>
                  <div className="space-y-3">
                    {list.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity} • Supplier: {item.supplier}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Archive className="w-4 h-4 mr-2" />
                        Reorder
                      </Button>
                      <Button variant="outline" size="sm">
                        Export PDF
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-lg font-bold">{list.totalValue}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No shopping lists found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search or filter criteria." 
                : "Your shopping list history will appear here once you create and save lists."
              }
            </p>
            {(searchTerm || statusFilter !== "all") && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                }}
              >
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}