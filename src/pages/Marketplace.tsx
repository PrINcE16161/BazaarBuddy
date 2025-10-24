import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, Star, MapPin, Phone, Plus, Eye, ShoppingCart, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  name: string;
  price: string;
  image: string;
  inStock: boolean;
}

interface Supplier {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  phone: string;
  whatsapp: string,
  verified: boolean;
  products: Product[];
  price: string;
}

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

export default function Marketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const { toast } = useToast();

  const handleLoadMore = () => {
    toast({
      title: "Load More Feature",
      description: "Coming Soon"
    });
  }
  const suppliers: Supplier[] = [
    {
      id: 1,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Onions", price: "₹25/kg", image: "/assets/products/vegetables/onions/onion.jpg", inStock: true },
      ],
      price: "₹25-50/kg"
    },
    {
      id: 2,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "tometo", price: "₹30/kg", image: "/assets/products/vegetables/tomato/tomato.png", inStock: true },
      ],
      price: "₹30-55/kg"
    },
    {
      id: 3,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Green Chilli", price: "₹40/kg", image: "/assets/products/vegetables/greenChilli/greenChilli.jpg", inStock: true },
      ],
      price: "₹40-50/kg"
    },
    {
      id: 4,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Beetroot", price: "₹29/kg", image: "/assets/products/vegetables/beetroot/beetroot.jpg", inStock: true },
      ],
      price: "₹29-38/kg"
    },
    {
      id: 5,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Potato", price: "₹30/kg", image: "/assets/products/vegetables/potato/Potato.jpg", inStock: true },
      ],
      price: "₹30-50/kg"
    },
    {
      id: 6,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Brinjial", price: "₹18/kg", image: "/assets/products/vegetables/brinjial/brinjal.jpg", inStock: true },
      ],
      price: "₹18-30/kg"
    },
    {
      id: 7,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Ginger", price: "₹44/kg", image: "/assets/products/vegetables/ginger/ginger.jpg", inStock: true },
      ],
      price: "₹44-80/kg"
    },
    {
      id: 8,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Garlic", price: "₹50/kg", image: "/assets/products/vegetables/garlic/garlic.jpg", inStock: true },
      ],
      price: "₹50-80/kg"
    },
    {
      id: 9,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Lady Finger", price: "40/kg", image: "/assets/products/vegetables/ladyfinger/ladyFinger.jpg", inStock: true },
      ],
      price: "₹40-60/kg"
    },
    {
      id: 10,
      name: "VeggieVerse",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      whatsapp: "+91 63556 25928",
      verified: true,
      products: [
        { name: "Pumpkin", price: "₹60/kg", image: "/assets/products/vegetables/pumpkin/pumpkin.jpg", inStock: true },
      ],
      price: "₹60-100/kg"
    },
    {
      id: 11,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Garam Masala", price: "₹450/kg", image: "/assets/products/spices/garammasala/garamMasala.jpg", inStock: true },
      ],
      price: "₹100-500/kg"
    },
    {
      id: 12,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Cumin Seed", price: "₹180/kg", image: "/assets/products/spices/cuminseed/cuminSeeds.jpg", inStock: true },
      ],
      price: "₹180-300/kg"
    },
    {
      id: 13,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Muatard Seed", price: "₹70/kg", image: "/assets/products/spices/muatardseed/mustardSeeds.jpg", inStock: true },
      ],
      price: "₹70-200kg"
    },
    {
      id: 14,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Cinnamon", price: "₹585/kg", image: "/assets/products/spices/cinnamon/cinnamon.jpg", inStock: true },
      ],
      price: "₹585-700/kg"
    },
    {
      id: 15,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Black Pepper", price: "₹662/kg", image: "/assets/products/spices/blackpepper/blackPepper.jpg", inStock: true },
      ],
      price: "₹662-800/kg"
    },
    {
      id: 16,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Red Chilli", price: "115/kg", image: "/assets/products/spices/redchilli/redChilli.jpg", inStock: true },
      ],
      price: "₹115-175/kg"
    },
    {
      id: 17,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Sesame Seeds", price: "₹100/kg", image: "/assets/products/spices/sesameseeds/sesameSeeds.jpg", inStock: true },
      ],
      price: "₹100-500/kg"
    },
    {
      id: 18,
      name: "SupplyHarvest",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      rating: 4.9,
      reviews: 89,
      phone: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      verified: true,
      products: [
        { name: "Black Stone Flower", price: "₹1900/kg", image: "/assets/products/spices/blackstoneflower/blackStoneFlower.jpg", inStock: true },
      ],
      price: "₹1900-2500/kg"
    },
    {
      id: 19,
      name: "MilkNest",
      category: "Dairy Products",
      location: "Baroda Dairy (vadodara)",
      rating: 4.9,
      reviews: 156,
      phone: "+91 76543 21098",
      whatsapp: "+91 76543 21098",
      verified: true,
      products: [
        { name: "Bread", price: "₹25/piece", image: "/assets/products/bakery/bread/bread.jpg", inStock: true },
      ],
      price: "₹20-40/piece"
    },
     {
      id: 20,
      name: "MilkNest",
      category: "Dairy Products",
      location: "Baroda Dairy (vadodara)",
      rating: 4.9,
      reviews: 156,
      phone: "+91 76543 21098",
      whatsapp: "+91 76543 21098",
      verified: true,
      products: [
        { name: "Paneer", price: "₹148/piece", image: "/assets/products/dairyproducts/panner/paneer.jpg", inStock: true },
      ],
      price: "₹148-160/piece"
    },
     {
      id: 21,
      name: "MilkNest",
      category: "Dairy Products",
      location: "Baroda Dairy (vadodara)",
      rating: 4.9,
      reviews: 156,
      phone: "+91 76543 21098",
      whatsapp: "+91 76543 21098",
      verified: true,
      products: [
        { name: "Fresh Milk", price: "₹60/piece", image: "/assets/products/dairyproducts/milk/milk.jpg", inStock: true },
      ],
      price: "₹60-70/piece"
    },
     {
      id: 22,
      name: "MilkNest",
      category: "Dairy Products",
      location: "Baroda Dairy (vadodara)",
      rating: 4.9,
      reviews: 156,
      phone: "+91 76543 21098",
      whatsapp: "+91 76543 21098",
      verified: true,
      products: [
        { name: "Chees", price: "₹180/piece", image: "/assets/products/dairyproducts/cheese/cheese.jpg", inStock: true },
      ],
      price: "₹180-200/piece"
    },
     {
      id: 23,
      name: "MilkNest",
      category: "Dairy Products",
      location: "Baroda Dairy (vadodara)",
      rating: 4.9,
      reviews: 156,
      phone: "+91 76543 21098",
      whatsapp: "+91 76543 21098",
      verified: true,
      products: [
        { name: "Butter", price: "₹138/piece", image: "/assets/products/dairyproducts/butter/butter.jpg", inStock: true },
      ],
      price: "₹138-140/piece"
    },
    {
      id: 24,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Cooking Oil", price: "₹150/L", image: "/assets/products/oil/cookingOil/cookingOil.jpg", inStock: true },
      ],
      price: "₹150-200/L"
    },
    {
      id: 25,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Mustard oil", price: "₹155/L", image: "/assets/products/oil/mustardOil/mustardOil.jpg", inStock: true },
      ],
      price: "₹155-200/L"
    },
    {
      id: 26,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Ground nut oil", price: "₹184/L", image: "/assets/products/oil/groundnutOil/groundnutOil.jpg", inStock: true },
      ],
      price: "₹184-200/L"
    },
    {
      id: 27,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Sun flower oil", price: "₹150/L", image: "/assets/products/oil/sunflowerOil/sunflowerOil.png", inStock: true },
      ],
      price: "₹150-200/L"
    },
    {
      id: 28,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Soy bean oil", price: "₹124/L", image: "/assets/products/oil/soyabinOil/soyabeanOil.jpg", inStock: true },
      ],
      price: "₹124-200/L"
    },
    {
      id: 29,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Avocado oil", price: "₹1808/L", image: "/assets/products/oil/avacadoOil/avocadoOil.jpg", inStock: true },
      ],
      price: "₹1808-2000/L"
    },
    {
      id: 30,
      name: "PureDrop Oils",
      category: "Oil & Ghee",
      location: "Samta, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Piam oil", price: "₹110/L", image: "/assets/products/oil/palmOil/plamOil.jpg", inStock: true },
      ],
      price: "₹110-150/L"
    },
     {
      id: 31,
      name: "The Bake Lane",
      category: "Bakery Items",
      location: "Ranu, Padra",
      rating: 4.9,
      reviews: 198,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Bread", price: "₹35/L", image: "/assets/products/bakery/bread/bread.jpg", inStock: true },
      ],
      price: "₹35-50/lg"
    },
    {
      id: 32,
      name: "The Bake Lane",
      category: "Bakery Items",
      location: "Ranu, Padra",
      rating: 4.9,
      reviews: 198,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Cupcake", price: "₹40", image: "/assets/products/bakery/cupCake/cupCake.jpg", inStock: true },
      ],
      price: "₹40-80"
    },
    {
      id: 33,
      name: "The Bake Lane",
      category: "Bakery Items",
      location: "Ranu, Padra",
      rating: 4.9,
      reviews: 198,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Bun", price: "₹50/kg", image: "/assets/products/bakery/bun/bun.jpg", inStock: true },
      ],
      price: "₹50-60/kg"
    },
    {
      id: 34,
      name: "The Bake Lane",
      category: "Bakery Items",
      location: "Ranu, Padra",
      rating: 4.9,
      reviews: 198,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Tost", price: "₹45/kg", image: "/assets/products/bakery/toast/toast.jpg", inStock: true },
      ],
      price: "₹45-55/kg"
    },
    {
      id: 35,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Almond", price: "₹500/kg", image: "/assets/products/dryfruits/almond/almond.jpeg", inStock: true },
      ],
      price: "₹500-750/kg"
    },
    {
      id: 36,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Pista", price: "₹800/kg", image: "/assets/products/dryfruits/pista/pista.jpg", inStock: true },
      ],
      price: "₹800-1000/kg"
    },
    {
      id: 37,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Coconut", price: "₹250/kg", image: "/assets/products/dryfruits/coconut/coconut.png", inStock: true },
      ],
      price: "₹250-350/kg"
    },
    {
      id: 38,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Fig", price: "₹800/kg", image: "/assets/products/dryfruits/fig/fig.jpg", inStock: true },
      ],
      price: "₹800-1000/kg"
    },
    {
      id: 39,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Dates", price: "₹150/kg", image: "/assets/products/dryfruits/dates/dates.jpg", inStock: true },
      ],
      price: "₹150-200/kg"
    },
    {
      id: 40,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Dry Dates", price: "₹200/kg", image: "/assets/products/dryfruits/drydat/drydat.jpg", inStock: true },
      ],
      price: "₹200-250/kg"
    },
    {
      id: 41,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Raisin", price: "₹500/kg", image: "/assets/products/dryfruits/raisins/raisins.png", inStock: true },
      ],
      price: "₹500-750/kg"
    },
    {
      id: 42,
      name: "Crunchy Crate",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      rating: 4.7,
      reviews: 89,
      phone: "+91 65432 10987",
      whatsapp: "+91 65432 10987",
      verified: true,
      products: [
        { name: "Walnut", price: "₹600/kg", image: "/assets/products/dryfruits/walnut/walnut.jpg", inStock: true },
      ],
      price: "₹600-750/kg"
    },
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

  // Filter suppliers based on search and category
  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.products.some(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All Categories" || supplier.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToShoppingList = (product: Product, supplier: Supplier) => {
    const existingList: ShoppingListItem[] = JSON.parse(
      localStorage.getItem("shoppingList") || "[]"
    );

    const newItem: ShoppingListItem = {
      id: Date.now().toString(),
      name: product.name,
      quantity: 1,
      unit: "kg",
      category: supplier.category,
      priority: "medium", // must be lowercase to match union type
      status: "pending",
      notes: "",
    };

    const updatedList = [...existingList, newItem];
    localStorage.setItem("shoppingList", JSON.stringify(updatedList));

    toast({
      title: "Added to Shopping List",
      description: `${product.name} from ${supplier.name} has been added to your shopping list.`,
    });
  };

  const ProductModal = ({ supplier }: { supplier: Supplier }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Eye className="h-4 w-4 mr-1" />
          View Products
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {supplier.name}
            {supplier.verified && (
              <Badge variant="trust" className="text-xs">
                Verified
              </Badge>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {supplier.products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{product.name}</h3>
                  <span className="text-primary font-medium">{product.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    disabled={!product.inStock}
                    onClick={() => addToShoppingList(product, supplier)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to List
                  </Button>
                  <Button size="sm" variant="hero" disabled={!product.inStock}>
                    <Phone className="h-4 w-4 mr-1" />
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );

  const handleProductClick = (product: any) => {
    navigate(`/marketplace/${product.id}`);
  };

  const handleWhatsApp = (whatsapp: string, supplierName: string, productName: string, productPrice: string) => {
    // Remove all non-digit characters: +, spaces, etc.
    const cleanedNumber = whatsapp.replace(/\D/g, '');

    // Encode the message for URL
    const message = encodeURIComponent(
      `Hello ${supplierName}, I hope you're doing well. I'm interested in purchasing ${productName}. Could you please share more details regarding quality, availability, and delivery? The listed price is ${productPrice}. Thank you!`
    );

    // Open WhatsApp Web/app with the message
    window.open(`https://wa.me/${cleanedNumber}?text=${message}`, '_blank');
  };

  return (
    <Layout>
      <div className="container mx-auto md:mt-20 px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">
            Discover trusted suppliers for your street food business
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search suppliers, products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
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

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredSuppliers.length} suppliers
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} onClick={() => handleProductClick(supplier)} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                {supplier.products[0]?.image && (
                  <img
                    src={supplier.products[0].image}
                    alt={supplier.products[0].name}
                    className="w-full h-60 object-cover rounded-md mb-4"
                  />
                )}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {supplier.products[0].name}
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

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-golden mr-1 fill-current" />
                    {supplier.rating} ({supplier.reviews})
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {supplier.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Supplier:</p>
                    <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          {supplier.name}
                        </Badge>
                      {supplier.products.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{supplier.products.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {supplier.price}
                    </span>
                    <div className="z-10 flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={!supplier.products.some(p => p.inStock)}
                        onClick={(e) => {
                          e.stopPropagation();
                          const firstAvailable = supplier.products.find(p => p.inStock);
                          if (firstAvailable) {
                            addToShoppingList(firstAvailable, supplier);
                          }
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to List
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={(e) => {e.stopPropagation(); handleWhatsApp(supplier.whatsapp, supplier.name, supplier.products[0].name, supplier.products[0].price);}}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No suppliers found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
            >
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