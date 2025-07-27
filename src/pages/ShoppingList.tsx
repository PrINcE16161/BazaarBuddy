import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, MessageCircle, ShoppingCart, CheckCircle, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SupplierContactDialog } from "@/components/supplier/SupplierContactDialog";

interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  priority: "high" | "medium" | "low";
  notes?: string;
  status: "pending" | "contacted" | "ordered" | "completed";
}

export default function ShoppingList() {
  const [items, setItems] = useState<ShoppingListItem[]>(() => {
    const stored = localStorage.getItem("shoppingList");
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: "1",
            name: "Fresh Onions",
            quantity: 50,
            unit: "kg",
            category: "Vegetables & Fruits",
            priority: "high",
            notes: "Red onions preferred",
            status: "pending",
          },
          {
            id: "2",
            name: "Red Chill",
            quantity: 25,
            unit: "kg",
            category: "Spices & Masala",
            priority: "medium",
            status: "contacted",
          },
          {
            id: "3",
            name: "Tomatoes",
            quantity: 30,
            unit: "kg",
            category: "Vegetables & Fruits",
            priority: "high",
            status: "ordered",
          },
        ];
  });

  // Sync to localStorage on change
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [supplierDialogOpen, setSupplierDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; category: string } | null>(null);
  const [newItem, setNewItem] = useState<{
    name: string;
    quantity: number;
    unit: string;
    category: string;
    priority: "high" | "medium" | "low";
    notes: string;
  }>({
    name: "",
    quantity: 0,
    unit: "kg",
    category: "Vegetables & Fruits",
    priority: "medium",
    notes: ""
  });

  const { toast } = useToast();

  const addItem = () => {
    if (!newItem.name || newItem.quantity <= 0) {
      toast({
        title: "Invalid item",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    const item: ShoppingListItem = {
      id: Date.now().toString(),
      ...newItem,
      status: "pending"
    };

    setItems([...items, item]);
    setNewItem({
      name: "",
      quantity: 0,
      unit: "kg",
      category: "vegetables",
      priority: "medium",
      notes: ""
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Item added",
      description: "Product added to your shopping list"
    });
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Product removed from your shopping list"
    });
  };

  const updateStatus = (id: string, status: ShoppingListItem["status"]) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, status } : item
    ));
    
    const statusMessages = {
      contacted: "Supplier contacted",
      ordered: "Order placed",
      completed: "Item completed"
    };
    
    toast({
      title: statusMessages[status] || "Status updated",
      description: "Item status has been updated"
    });
  };

  const openSupplierDialog = (item: ShoppingListItem) => {
    setSelectedProduct({ name: item.name, category: item.category });
    setSupplierDialogOpen(true);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "outline";
      case "contacted": return "secondary";
      case "ordered": return "default";
      case "completed": return "secondary";
      default: return "outline";
    }
  };

  const categories = ["All Categories", "Vegetables & Fruits", "Spices & Masala", "Bakery Items", "Oil & Ghee", "Dairy Products", "Dry-Fruits"];
  const units = ["kg", "grams", "pieces", "liters", "packets", "boxes"];
  return (
    <Layout>
      <div className="container mx-auto md:mt-20 px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Shopping List</h1>
            <p className="text-muted-foreground">Manage your product requirements and track orders</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="default" className="mt-4 md:mt-0">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    placeholder="Enter product name"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={newItem.quantity || ""}
                      onChange={(e) => setNewItem({...newItem, quantity: Number(e.target.value)})}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="unit">Unit</Label>
                    <Select value={newItem.unit} onValueChange={(value) => setNewItem({...newItem, unit: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {units.map((unit) => (
                          <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={newItem.category} onValueChange={(value) => setNewItem({...newItem, category: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={newItem.priority} onValueChange={(value) => setNewItem({...newItem, priority: value as "high" | "medium" | "low"})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={newItem.notes}
                    onChange={(e) => setNewItem({...newItem, notes: e.target.value})}
                    placeholder="Any specific requirements..."
                    rows={3}
                  />
                </div>

                <Button onClick={addItem} className="w-full">
                  Add to List
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold">{items.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Contacted</p>
                <p className="text-2xl font-bold">{items.filter(i => i.status === "contacted").length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Ordered</p>
                <p className="text-2xl font-bold">{items.filter(i => i.status === "ordered").length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{items.filter(i => i.status === "completed").length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Shopping List Items */}
        <div className="space-y-4">
          {items.length === 0 ? (
            <Card className="p-8 text-center">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items in your list</h3>
              <p className="text-muted-foreground mb-4">Start by adding products you need to source</p>
              <Button onClick={() => setIsAddDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add First Item
              </Button>
            </Card>
          ) : (
            items.map((item) => (
              <Card key={item.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {item.name}
                        <Badge variant={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                        <Badge variant={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.quantity} {item.unit} • {item.category}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {item.notes && (
                    <>
                      <p className="text-sm text-muted-foreground mb-4">{item.notes}</p>
                      <Separator className="mb-4" />
                    </>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {item.status === "pending" && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openSupplierDialog(item)}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Contact Suppliers
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateStatus(item.id, "ordered")}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Place Order
                        </Button>
                      </>
                    )}
                    
                    {item.status === "contacted" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStatus(item.id, "ordered")}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Place Order
                      </Button>
                    )}
                    
                    {item.status !== "completed" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStatus(item.id, "completed")}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Complete
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Supplier Contact Dialog */}
        {selectedProduct && (
          <SupplierContactDialog
            isOpen={supplierDialogOpen}
            onClose={() => {
              setSupplierDialogOpen(false);
              setSelectedProduct(null);
            }}
            productName={selectedProduct.name}
            category={selectedProduct.category}
          />
        )}
      </div>
    </Layout>
  );
}