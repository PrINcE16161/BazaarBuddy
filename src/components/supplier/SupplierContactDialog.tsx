import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Star, MapPin } from "lucide-react";

interface Supplier {
  id: string;
  name: string;
  location: string;
  rating: number;
  phone: string;
  whatsapp: string;
  price: number;
  unit: string;
  minOrder: number;
  verified: boolean;
}

interface SupplierContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  category: string;
}

const mockSuppliers: Record<string, Supplier[]> = {
  "Vegetables & Fruits": [
    {
      id: "1",
      name: "Mumbai Fresh Vegetables",
      location: "Vashi Market, Navi Mumbai",
      rating: 4.8,
      phone: "+91 98765 43210",
      whatsapp: "916355625928",
      price: 25,
      unit: "kg",
      minOrder: 10,
      verified: true
    }
  ],
  "Spices & Masala": [
    {
      id: "2",
      name: "Golden Grains Wholesale",
      location: "Andheri East, Mumbai",
      rating: 4.7,
      phone: "+91 98765 43213",
      whatsapp: "919876543213",
      price: 45,
      unit: "kg",
      minOrder: 25,
      verified: true
    },
  ],
  "Bakery Items": [
    {
      id: "3",
      name: "Mumbai Fresh Vegetables",
      location: "Vashi Market, Navi Mumbai",
      rating: 4.8,
      phone: "+91 98765 43210",
      whatsapp: "916355625928",
      price: 25,
      unit: "kg",
      minOrder: 10,
      verified: true
    }
  ],
  "Oil & Ghee": [
    {
      id: "4",
      name: "Golden Grains Wholesale",
      location: "Andheri East, Mumbai",
      rating: 4.7,
      phone: "+91 98765 43213",
      whatsapp: "919876543213",
      price: 45,
      unit: "kg",
      minOrder: 25,
      verified: true
    }
  ],
  "Dairy Products": [
    {
      id: "5",
      name: "Mumbai Fresh Vegetables",
      location: "Vashi Market, Navi Mumbai",
      rating: 4.8,
      phone: "+91 98765 43210",
      whatsapp: "916355625928",
      price: 25,
      unit: "kg",
      minOrder: 10,
      verified: true
    }
  ],
  "Dry-Fruits": [
    {
      id: "6",
      name: "Golden Grains Wholesale",
      location: "Andheri East, Mumbai",
      rating: 4.7,
      phone: "+91 98765 43213",
      whatsapp: "919876543213",
      price: 45,
      unit: "kg",
      minOrder: 25,
      verified: true
    }
  ]
};

export function SupplierContactDialog({ isOpen, onClose, productName, category }: SupplierContactDialogProps) {
  const suppliers = mockSuppliers[category] || [];
  const sortedSuppliers = [...suppliers].sort((a, b) => a.price - b.price);

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = (whatsapp: string, supplierName: string) => {
    const message = encodeURIComponent(`Hi ${supplierName}, I'm interested in ordering ${productName}. Could you please provide more details?`);
    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Suppliers for {productName}
            <Badge variant="outline">{category}</Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {sortedSuppliers.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No suppliers found for this category</p>
            </Card>
          ) : (
            sortedSuppliers.map((supplier) => (
              <Card key={supplier.id} className="relative">
                {supplier.verified && (
                  <Badge className="absolute top-3 right-3 bg-green-100 text-green-800 border-green-200">
                    Verified
                  </Badge>
                )}
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{supplier.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {supplier.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {supplier.rating}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        ₹{supplier.price}/{supplier.unit}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Min order: {supplier.minOrder} {supplier.unit}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCall(supplier.phone)}
                        className="flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </Button>
                      
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleWhatsApp(supplier.whatsapp, supplier.name)}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}