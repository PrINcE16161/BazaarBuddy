import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Phone, Mail, MapPin, ShoppingCart, CreditCard, TrendingUp, TrendingDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import bakeryImage from "@/assets/products/bakery.jpg";
import vegetablesImage from "@/assets/products/vegetables.jpg";
import spicesImage from "@/assets/products/spices.jpg";
import dairyImage from "@/assets/products/dairy.jpg";

import onionImage from "@/assets/products/vegetables/onions/onion.jpg";
import onionImage1 from "@/assets/products/vegetables/onions/onion1.jpg";
import onionImage2 from "@/assets/products/vegetables/onions/onion2.png";

import tomatoImage from "@/assets/products/vegetables/tomato/tomato.png";
import tomatoImage1 from "@/assets/products/vegetables/tomato/tomatoe1.jpg";
import tomatoImage2 from "@/assets/products/vegetables/tomato/tomato2.jpg";

import potatoImage from "@/assets/products/vegetables/potato/Potato.jpg";
import potatoImage1 from "@/assets/products/vegetables/potato/potato1.png";
import potatoImage2 from "@/assets/products/vegetables/potato/potato2.jpg";

import brinjalImage from "@/assets/products/vegetables/brinjial/brinjal.jpg";
import brinjalImage1 from "@/assets/products/vegetables/brinjial/brinjal1.png";
import brinjalImage2 from "@/assets/products/vegetables/brinjial/brinjal.jpg";

import garlicImage from "@/assets/products/vegetables/garlic/garlic.jpg";
import garlicImage1 from "@/assets/products/vegetables/garlic/garlic2.jpg";
import garlicImage2 from "@/assets/products/vegetables/garlic/garlic.jpg";

import ladyImage from "@/assets/products/vegetables/ladyfinger/ladyFinger.jpg";
import ladyImage1 from "@/assets/products/vegetables/ladyfinger/ladyFinger1.jpg";
import ladyImage2 from "@/assets/products/vegetables/ladyfinger/ladyFinger2.jpg";

import gingerImage from "@/assets/products/vegetables/ginger/ginger.jpg";
import gingerImage1 from "@/assets/products/vegetables/ginger/ginger1.jpg";
import gingerImage2 from "@/assets/products/vegetables/ginger/ginger2.jpg";

import pumpkinImage from "@/assets/products/vegetables/pumpkin/pumpkin.jpg";
import pumpkinImage1 from "@/assets/products/vegetables/pumpkin/pumpkin1.jpg";
import pumpkinImage2 from "@/assets/products/vegetables/pumpkin/pumpkin2.jpg";

import garamImage from "@/assets/products/spices/garammasala/garamMasala.jpg";
import garamImage1 from "@/assets/products/spices/garammasala/garamMasala1.jpg";
import garamImage2 from "@/assets/products/spices/garammasala/garamMasala2.jpg";

import cuminImage from "@/assets/products/spices/cuminseed/cuminSeeds.jpg";
import cuminImage1 from "@/assets/products/spices/cuminseed/cuminSeeds1.jpg";
import cuminImage2 from "@/assets/products/spices/cuminseed/cuminSeeds2.jpg";

import mustardImage from "@/assets/products/spices/muatardseed/mustardSeeds.jpg";
import mustardImage1 from "@/assets/products/spices/muatardseed/mustardSeeds1.jpg";
import mustardImage2 from "@/assets/products/spices/muatardseed/mustardSeeds2.jpg";

import cuminseedImage from "@/assets/products/spices/cuminseed/cuminSeeds.jpg";
import cuminseedImage1 from "@/assets/products/spices/cuminseed/cuminSeeds1.jpg";
import cuminseedImage2 from "@/assets/products/spices/cuminseed/cuminSeeds2.jpg";

import blackImage from "@/assets/products/spices/blackpepper/blackPepper.jpg";
import blackImage1 from "@/assets/products/spices/blackpepper/blackPepper1.jpg";
import blackImage2 from "@/assets/products/spices/blackpepper/blackPepper2.png";

import redImage from "@/assets/products/spices/redchilli/redChilli.jpg";
import redImage1 from "@/assets/products/spices/redchilli/redChilli1.jpg";
import redImage2 from "@/assets/products/spices/redchilli/redChilli2.jpg";

import seameImage from "@/assets/products/spices/sesameseeds/sesameSeeds.jpg";
import seameImage1 from "@/assets/products/spices/sesameseeds/sesameSeeds1.jpg";
import seameImage2 from "@/assets/products/spices/sesameseeds/sesameSeeds2.jpg";

import blackStoneImage from "@/assets/products/spices/blackstoneflower/blackStoneFlower.jpg";
import blackStoneImage1 from "@/assets/products/spices/blackstoneflower/blackStoneFlower1.jpg";
import blackStoneImage2 from "@/assets/products/spices/blackstoneflower/blackStoneFlower2.jpg";

import breadImage from "@/assets/products/bakery/bread/bread.jpg";
import breadImage1 from "@/assets/products/bakery/bread/bread1.jpg";
import breadImage2 from "@/assets/products/bakery/bread/bread2.jpg";

import cupImage from "@/assets/products/bakery/cupCake/cupCake.jpg";
import cupImage1 from "@/assets/products/bakery/cupCake/cupCake1.jpg";
import cupImage2 from "@/assets/products/bakery/cupCake/cupCake2.jpg";

import bunImage from "@/assets/products/bakery/bun/bun.jpg";
import bunImage1 from "@/assets/products/bakery/bun/bun1.jpg";
import bunImage2 from "@/assets/products/bakery/bun/bun2.jpg";

import toastImage from "@/assets/products/bakery/toast/toast.jpg";
import toastImage1 from "@/assets/products/bakery/toast/toast1.jpg";
import toastImage2 from "@/assets/products/bakery/toast/toast2.jpg";

import { useToast } from "@/hooks/use-toast";

interface Product {
  name: string;
  price: string;
  category: string;
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

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  // Mock product data - in real app, fetch based on ID
  const productsData = {
    "1": {
      id: 1,
      name: "Onions",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        onionImage,
        onionImage1,
        onionImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "2": {
      id: 1,
      name: "Tomato",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        tomatoImage,
        tomatoImage1,
        tomatoImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "3": {
      id: 1,
      name: "Green Chilli",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "4": {
      id: 1,
      name: "Beetroot",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "5": {
      id: 1,
      name: "Potato",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        potatoImage,
        potatoImage1,
        potatoImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "6": {
      id: 1,
      name: "Brinjial",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        brinjalImage,
        brinjalImage1,
        brinjalImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "7": {
      id: 1,
      name: "Ginger",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        gingerImage,
        gingerImage1,
        gingerImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "8": {
      id: 1,
      name: "Garlic",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        garlicImage,
        garlicImage1,
        garlicImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "9": {
      id: 1,
      name: "Lady Finger",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        ladyImage,
        ladyImage1,
        ladyImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "10": {
      id: 1,
      name: "Pumpkin",
      category: "Vegetables & Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        pumpkinImage,
        pumpkinImage1,
        pumpkinImage2,
      ],
      supplier: [
        {
          name: "VeggieVerse"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 26 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A1",
        "Origin": "Punjab, India",
        "Packaging": "50kg Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "11": {
      id: 1,
      name: "Garam Masala",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        garamImage,
        garamImage1,
        garamImage2,
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "12": {
      id: 1,
      name: "Cumin Seed",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        cuminImage,
        cuminImage1,
        cuminImage2,
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "13": {
      id: 1,
      name: "Muatard Seed",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "14": {
      id: 1,
      name: "Cinnamon",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        cuminseedImage,
        cuminseedImage1,
        cuminseedImage2,
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "15": {
      id: 1,
      name: "Black Pepper",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        blackImage,
        blackImage1,
        blackImage2,
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "16": {
      id: 1,
      name: "Red Chilli",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        redImage,
        redImage1,
        redImage2,
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "17": {
      id: 1,
      name: "Sesame Seeds",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        seameImage,
        seameImage1,
        seameImage2,
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "18": {
      id: 1,
      name: "Black Stone Flower",
      category: "Spices & Masala",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        blackStoneImage,
        blackStoneImage1,
        blackStoneImage2,
      ],
      supplier: [
        {
          name: "SupplyHarvest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 100 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 133 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "19": {
      id: 1,
      name: "Bread",
      category: "Dairy Products",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        breadImage,
        breadImage1,
        breadImage2,
      ],
      supplier: [
        {
          name: "MilkNest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "20": {
      id: 1,
      name: "Paneer",
      category: "Dairy Products",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "MilkNest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "21": {
      id: 1,
      name: "Fresh Milk",
      category: "Dairy Products",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "MilkNest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "22": {
      id: 1,
      name: "Chees",
      category: "Dairy Products",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "MilkNest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "23": {
      id: 1,
      name: "Butter",
      category: "Dairy Products",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "MilkNest"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 33 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 40 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Kasmir, India",
        "Packaging": "35kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "24": {
      id: 1,
      name: "Cooking Oil",
      category: "Oil & Ghee",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "PureDrop Oils"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 134 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 313 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "25": {
      id: 1,
      name: "Mustard oil",
      category: "Oil & Ghee",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        mustardImage,
        mustardImage1,
        mustardImage2,
      ],
      supplier: [
        {
          name: "PureDrop Oils"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 134 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 313 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "26": {
      id: 1,
      name: "Ground nut oil",
      category: "Oil & Ghee",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "PureDrop Oils"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 134 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 313 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "27": {
      id: 1,
      name: "Sun flower oil",
      category: "Oil & Ghee",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "PureDrop Oils"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 134 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 313 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "28": {
      id: 1,
      name: "Soy bean oil",
      category: "Oil & Ghee",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "PureDrop Oils"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 134 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 313 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "29": {
      id: 1,
      name: "Avocado oil",
      category: "Oil & Ghee",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "PureDrop Oils"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 134 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 313 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "30": {
      id: 1,
      name: "Piam oil",
      category: "Oil & Ghee",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "PureDrop Oils"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 134 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 17", price: 313 },
          { date: "Jan 18", price: 125 },
          { date: "Jan 19", price: 126 },
          { date: "Jan 20", price: 134 },
          { date: "Jan 21", price: 144 },
        ],
        "30d": [
          { date: "Dec 22", price: 141 },
          { date: "Dec 27", price: 141 },
          { date: "Jan 1", price: 143 },
          { date: "Jan 6", price: 145 },
          { date: "Jan 11", price: 136 },
          { date: "Jan 16", price: 125 },
          { date: "Jan 21", price: 135 },
        ],
        "90d": [
          { date: "Oct", price: 140 },
          { date: "Nov", price: 142 },
          { date: "Dec", price: 143 },
          { date: "Jan", price: 145 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "31": {
      id: 1,
      name: "Bread",
      category: "Bakery Items",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "The Bake Lane"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 13 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 43 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "32": {
      id: 1,
      name: "Cupcake",
      category: "Bakery Items",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        cupImage,
        cupImage1,
        cupImage2,
      ],
      supplier: [
        {
          name: "The Bake Lane"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 13 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 43 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "33": {
      id: 1,
      name: "Bun",
      category: "Bakery Items",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        bunImage,
        bunImage1,
        bunImage2,
      ],
      supplier: [
        {
          name: "The Bake Lane"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 13 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 43 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "34": {
      id: 1,
      name: "Toast",
      category: "Bakery Items",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        toastImage,
        toastImage1,
        toastImage2,
      ],
      supplier: [
        {
          name: "The Bake Lane"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 34 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 17", price: 13 },
          { date: "Jan 18", price: 25 },
          { date: "Jan 19", price: 26 },
          { date: "Jan 20", price: 34 },
          { date: "Jan 21", price: 44 },
        ],
        "30d": [
          { date: "Dec 22", price: 41 },
          { date: "Dec 27", price: 41 },
          { date: "Jan 1", price: 43 },
          { date: "Jan 6", price: 45 },
          { date: "Jan 11", price: 36 },
          { date: "Jan 16", price: 25 },
          { date: "Jan 21", price: 35 },
        ],
        "90d": [
          { date: "Oct", price: 43 },
          { date: "Nov", price: 42 },
          { date: "Dec", price: 43 },
          { date: "Jan", price: 45 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium A2",
        "Origin": "Aasam, India",
        "Packaging": "5Liter Jute Bags",
        "Shelf Life": "12 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "35": {
      id: 1,
      name: "Walnut",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "36": {
      id: 1,
      name: "Pista",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "37": {
      id: 1,
      name: "Coconut",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "38": {
      id: 1,
      name: "Fig",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "39": {
      id: 1,
      name: "Dates",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
     "40": {
      id: 1,
      name: "Dry Dates",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "41": {
      id: 1,
      name: "Raisin",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
    "42": {
      id: 1,
      name: "Walnut",
      category: "Dry-Fruits",
      description: "",
      whatsapp: "+91 98765 43210",
      images: [
        vegetablesImage,
        vegetablesImage,
        "/api/placeholder/600/400",
      ],
      supplier: [
        {
          name: "Crunchy Crate"
        }
      ],
      priceHistory: {
        "7d": [
          { date: "Jan 15", price: 534 },
          { date: "Jan 16", price: 525 },
          { date: "Jan 17", price: 513 },
          { date: "Jan 18", price: 525 },
          { date: "Jan 19", price: 526 },
          { date: "Jan 20", price: 434 },
          { date: "Jan 21", price: 444 },
        ],
        "30d": [
          { date: "Dec 22", price: 741 },
          { date: "Dec 27", price: 741 },
          { date: "Jan 1", price: 643 },
          { date: "Jan 6", price: 645 },
          { date: "Jan 11", price: 636 },
          { date: "Jan 16", price: 625 },
          { date: "Jan 21", price: 635 },
        ],
        "90d": [
          { date: "Oct", price: 643 },
          { date: "Nov", price: 742 },
          { date: "Dec", price: 743 },
          { date: "Jan", price: 645 },
        ],
      },
      trend: "up",
      changePercent: 2.3,
      specifications: {
        "Grade": "Premium 12",
        "Origin": "Ahembadawad, India",
        "Packaging": "3.5 kg Jute Bags",
        "Shelf Life": "24 months",
        "Moisture": "12-14%",
        "Whatsapp": "+91 98765 43210"
      }
    },
  };

  const product = productsData[id] || productsData["1"];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const getCurrentPriceData = () => {
    return product.priceHistory[selectedPeriod as keyof typeof product.priceHistory] || product.priceHistory["7d"];
  };

  const getPeriodLabel = () => {
    const labelMap = {
      "7d": "7-Day",
      "30d": "30-Day", 
      "90d": "90-Day"
    };
    return labelMap[selectedPeriod as keyof typeof labelMap] || "7-Day";
  };

  const addToShoppingList = (product: Product, supplier: Supplier) => {
    const existingList: ShoppingListItem[] = JSON.parse(
      localStorage.getItem("shoppingList") || "[]"
    );

    const newItem: ShoppingListItem = {
      id: Date.now().toString(),
      name: product.name,
      quantity: 1,
      unit: "kg",
      category: product.category,
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
    <Layout>
      <div className="min-h-screen md:mt-20">
        {/* Header */}
        <div className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{product.category}</Badge>
              <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
              <div className={cn(
                "flex items-center space-x-1 ml-auto",
                product.trend === "up" ? "text-green-600" : "text-red-600"
              )}>
                {product.trend === "up" ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">
                  {product.changePercent > 0 ? "+" : ""}{product.changePercent}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Media */}
            <div className="space-y-6">
              <Tabs defaultValue="images" className="w-full">
                
                <TabsContent value="images" className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={selectedImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all"
                    />
                  </div>

                  {/* Thumbnails below */}
                  <div className="flex justify-center gap-2 mt-4">
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={cn(
                          "aspect-square w-20 bg-muted rounded-md overflow-hidden cursor-pointer border",
                          selectedImage === image ? "border-primary" : "border-transparent"
                        )}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Product Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Best Deal */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    Best Deal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      min="1"
                      className="w-20 px-3 py-2 border border-input rounded-md text-center text-foreground bg-background placeholder:text-muted-foreground"
                    />
                    <span className="flex items-center text-sm text-muted-foreground">kg</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => addToShoppingList(product, product.supplier)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to List
                    </Button>
                    <Button
                      variant="secondary"
                      className="flex-1"
                      onClick={() =>
                        handleWhatsApp(
                          product.whatsapp,
                          product.name,
                          product.products?.[0]?.name || "your product"
                        )
                      }
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="mt-12">
            <Tabs defaultValue="trends" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="trends">Price Trend</TabsTrigger>
              </TabsList>

              <TabsContent value="trends" className="space-y-4">
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <CardTitle>{getPeriodLabel()} Price Trend</CardTitle>
                        <CardDescription>
                          Track price movements across suppliers
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant={selectedPeriod === "7d" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedPeriod("7d")}
                        >
                          7 Days
                        </Button>
                        <Button
                          variant={selectedPeriod === "30d" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedPeriod("30d")}
                        >
                          30 Days
                        </Button>
                        <Button
                          variant={selectedPeriod === "90d" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedPeriod("90d")}
                        >
                          90 Days
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-0 pb-0">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={getCurrentPriceData()}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="price"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;