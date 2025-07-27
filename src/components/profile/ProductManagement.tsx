import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Upload, Video, TrendingUp, TrendingDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock product data
const mockProducts = [
  {
    id: "1",
    name: "Organic Tomatoes",
    category: "Vegetables",
    description: "Fresh organic tomatoes grown without pesticides",
    images: ["https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400"],
    videos: [
      {
        title: "Growing Process",
        thumbnail: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200",
        url: "https://example.com/video1.mp4"
      }
    ],
    suppliers: [
      {
        id: "1",
        name: "Green Valley Farms",
        price: 4.50,
        rating: 4.8,
        contact: "+1234567890",
        email: "contact@greenvalley.com",
        location: "California",
        avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100",
        minOrder: "$50",
        deliveryTime: "2-4 hours"
      }
    ],
    priceHistory: [4.20, 4.35, 4.50, 4.45, 4.50],
    trend: "up",
    changePercent: 7.1,
    specifications: {
      "Origin": "California, USA",
      "Organic": "Yes",
      "Shelf Life": "7-10 days",
      "Storage": "Cool, dry place"
    }
  },
  {
    id: "2",
    name: "Fresh Basil",
    category: "Herbs",
    description: "Aromatic fresh basil perfect for cooking",
    images: ["https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400"],
    videos: [],
    suppliers: [
      {
        id: "1",
        name: "Green Valley Farms",
        price: 2.50,
        rating: 4.8,
        contact: "+1234567890",
        email: "contact@greenvalley.com",
        location: "California",
        avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100",
        minOrder: "$50",
        deliveryTime: "2-4 hours"
      }
    ],
    priceHistory: [2.80, 2.70, 2.60, 2.55, 2.50],
    trend: "down",
    changePercent: -10.7,
    specifications: {
      "Type": "Sweet Basil",
      "Origin": "California, USA",
      "Organic": "Yes",
      "Shelf Life": "3-5 days"
    }
  }
];

export function ProductManagement() {
  const { toast } = useToast();
  const [products, setProducts] = useState(mockProducts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    description: "",
    images: [] as string[],
    videos: [] as Array<{title: string, thumbnail: string, url: string}>,
    specifications: {} as Record<string, string>
  });

  const handleAddProduct = () => {
    const product = {
      id: Date.now().toString(),
      ...newProduct,
      suppliers: [] as typeof mockProducts[0]['suppliers'],
      priceHistory: [] as number[],
      trend: "stable" as "up" | "down" | "stable",
      changePercent: 0
    };
    
    setProducts([...products, product as any]);
    setNewProduct({
      name: "",
      category: "",
      description: "",
      images: [] as string[],
      videos: [] as Array<{title: string, thumbnail: string, url: string}>,
      specifications: {} as Record<string, string>
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Product Added",
      description: "Your product has been successfully added.",
    });
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({
      title: "Product Deleted",
      description: "Product has been removed from your catalog.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Product Management</h2>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Add a new product to your catalog
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={newProduct.category} 
                    onValueChange={(value) => setNewProduct(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vegetables">Vegetables</SelectItem>
                      <SelectItem value="Fruits">Fruits</SelectItem>
                      <SelectItem value="Herbs">Herbs</SelectItem>
                      <SelectItem value="Grains">Grains</SelectItem>
                      <SelectItem value="Dairy">Dairy</SelectItem>
                      <SelectItem value="Meat">Meat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your product..."
                />
              </div>
              
              <div>
                <Label>Product Images</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload images</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddProduct}>
                  Add Product
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-video bg-muted relative">
              {product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
              
              {product.videos.length > 0 && (
                <Badge className="absolute top-2 right-2 gap-1">
                  <Video className="w-3 h-3" />
                  {product.videos.length}
                </Badge>
              )}
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </div>
                <div className="flex items-center gap-1">
                  {product.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : product.trend === "down" ? (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  ) : null}
                  <span className={`text-sm ${
                    product.trend === "up" ? "text-green-500" : 
                    product.trend === "down" ? "text-red-500" : 
                    "text-muted-foreground"
                  }`}>
                    {product.changePercent > 0 ? "+" : ""}{product.changePercent}%
                  </span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>
              
              {Object.keys(product.specifications).length > 0 && (
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">Specifications:</p>
                  <div className="space-y-1">
                    {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{key}:</span>
                        <span>{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <Badge variant="secondary">
                  {product.suppliers.length} Supplier{product.suppliers.length !== 1 ? "s" : ""}
                </Badge>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setEditingProduct(product)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {products.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No products yet</h3>
            <p className="text-muted-foreground mb-4">
              Start building your product catalog by adding your first product.
            </p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              Add Your First Product
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}