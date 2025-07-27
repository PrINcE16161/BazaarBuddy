import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Package, 
  Users, 
  Award,
  ShoppingCart,
  Heart,
  Share2,
  ArrowLeft,
  Verified,
  TrendingUp
} from "lucide-react";
import vegetablesImg from "@/assets/products/vegetables.jpg";
import spicesImg from "@/assets/products/spices.jpg";
import bakeryImg from "@/assets/products/bakery.jpg";
import dairyImg from "@/assets/products/dairy.jpg";

export default function SupplierProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("products");

  // Mock suppliers database
  const suppliersData = {
    "1": {
      id: 1,
      name: "VeggieVerse",
      owner: "Mahesh kachhiya",
      category: "Vegetables & Fruits",
      location: "APMC Mandi, Sayajipura",
      fullAddress: "Shop No. 45-46, Sayajipura , vadodara,  390019 ",
      rating: 4.8,
      reviews: 125,
      phone: "+91 98765 43210",
      email: "maheshveggieverse@gmail.com",
      whatsapp: "+91 98765 43210",
      verified: true,
      established: "2015",
      employees: "15-20",
      description: "We are trusted wholesale suppliers of fresh vegetables and farm produce, directly sourced from local growers. Guaranteed freshness, fair pricing, and timely delivery for all your market needs.",
      avatar: "/placeholder.svg",
      coverImage: vegetablesImg,
      specialties: ["Bulk Vegetable Supplier",  "Organic Produce Specialist", "Daily Fresh Stock", "Seasonal Crop Distributor", "Exotic Vegetables Available", "Root Vegetables Expert (e.g., potato, onion, garlic)", "Green Leafy Supplier (e.g., spinach, coriander, methi)", "Fruit & Vegetable Combo Supplier", "Grains & Pulses Supplier"],
      businessHours: "Monday - Saturday: 5:00 AM - 8:00 PM",
      deliveryAreas: ["Alkapuri, Vadodara", "Karelibaug", "Manjalpur", "Sayajipura"],
      paymentMethods: ["Cash", "UPI", "Bank Transfer", "Credit (for verified vendors)"],
      minimumOrder: "₹500",
      deliveryTime: "Same-Day Delivery if ordered before 12:00 PM",
      totalProducts: 45,
      activeOrders: 39,
      completedOrders: 1250,
      responseTime: "1 hours",
      certifications: ["FSSAI Licensed", "ISO 22000", "Organic Certified"]
    },
    "2": {
      id: 2,
      name: "SupplyHarvest",
      owner: "Manjeet Singh",
      category: "Spices & Masala",
      location: "Khanderao Market (Chamaraja Road)",
      fullAddress: "Shop No. 127, Khanderao Market, Chamaraja Road, vadodara-390001",
      rating: 4.6,
      reviews: 89,
      phone: "+91 98765 12345",
      email: "manjeetsupplyharvest@gmail.com",
      whatsapp: "+91 98765 12345",
      verified: true,
      established: "2008",
      employees: "8-10",
      description: "Premium spice supplier with authentic Indian spices sourced directly from farms. Specializing in street food spice blends and custom masala mixes.",
      avatar: "/placeholder.svg",
      coverImage: spicesImg,
      specialties: ["Garam Masala", "Chaat Masala", "Custom Blends", "Organic Spices" ,"Rajwadi Masala (Gujarat)", "Malabar Black Pepper (Kerala)", "Byadgi Chili (Karnataka)", "Kashmiri Saffron & Chili", "Rajasthani Dry Spices"],
      businessHours: "Monday - Saturday: 9:00 AM - 7:00 PM",
      deliveryAreas: ["Padra mandi", "Tarshali market", "Manjalpur", "Raopura mandi"],
      paymentMethods: ["Cash", "UPI", "Bank Transfer"],
      minimumOrder: "₹300",
      deliveryTime: "2-3 hours delivery",
      totalProducts: 78,
      activeOrders: 68,
      completedOrders: 950,
      responseTime: "1 hour",
      certifications: ["FSSAI Licensed", "Spice Board Certified", "Export Quality"]
    },
    "3": {
      id: 3,
      name: "MilkNest",
      owner: "Manan Desai",
      category: "Dairy Products",
      location: " Baroda Dairy (vadodara)",
      fullAddress: "Opposite ONGC, Makarpura Road, Vadodara – 390009, Gujarat",
      rating: 4.9,
      reviews: 156,
      phone: "+91 98765 67890",
      email: "milknest171@gmail.com",
      whatsapp: "+91 98765 67890",
      verified: true,
      established: "2012",
      employees: "25-30",
      description: "Proudly serving Vadodara since 1957. We are a cooperative of local farmers delivering quality dairy every day to thousands of homes.",
      avatar: "/placeholder.svg",
      coverImage: dairyImg,
      specialties: ["Fresh Milk", "Paneer", "Yogurt", "Butter"],
      businessHours: "Daily: 5:00 AM - 10:00 PM",
      deliveryAreas: ["Bhayli (Vasant Vihar)", "Gorwa (Sugam Parlour)", "Karelibaug", "Amul parlor"],
      paymentMethods: ["Cash", "UPI", "Bank Transfer", "Weekly Credit"],
      minimumOrder: "₹200",
      deliveryTime: "Early morning delivery",
      totalProducts: 52,
      activeOrders: 45,
      completedOrders: 2100,
      responseTime: "30 minutes",
      certifications: ["FSSAI Licensed", "ISO 22000", "Dairy Board Certified"]
    },
    "4": {
      id: 4,
      name: "PureDrop Oils",
      owner: "Ramesh Kandoi",
      category: "Oils & Ghee",
      location: "Samta, Vadodara",
      fullAddress: "Shop 12, Patidar Mall, Main Road, Karelibaug, vadodara-391440",
      rating: 4.7,
      reviews: 89,
      phone: "+91 98765 12345",
      email: "puredrop186@gmail.com",
      whatsapp: "+91 98765 12345",
      verified: true,
      established: "2008",
      employees: "8-9",
      description: "Pure, Fresh, & Authentic Oils and Ghee Discover our range of traditionally extracted edible oils and premium desi ghee — straight from trusted local producers.",
      avatar: "/placeholder.svg",
      coverImage: spicesImg,
      specialties: ["Mustard oil", "Rice Bran oil", "Soy bean oil", "Olive oil" ,"Avocado oil", "Sun flower oil",],
      businessHours: "Monday - Saturday: 10:00 AM - 8:00 PM",
      deliveryAreas: ["Padra Side", "Tarshali Side", "Manjalpur Side", "Raopura Market"],
      paymentMethods: ["Cash", "UPI", "Bank Transfer"],
      minimumOrder: "₹170",
      deliveryTime: "2-3 hours delivery",
      totalProducts: 78,
      activeOrders: 23,
      completedOrders: 950,
      responseTime: "1 hour",
      certifications: ["FSSAI Licensed", "Spice Board Certified", "Export Quality"]
    },
    "5": {
      id: 5,
      name: "The Bake Lane",
      owner: "Chandu patel",
      category: "Bakery Items",
      location: "Ranu, Padra",
      fullAddress: "Shop 18, Ranu, Latipura Main Road, Padra, vadodara-391440",
      rating: 4.9,
      reviews: 198,
      phone: "+91 98765 12345",
      email: "chandupatel1@gmail.com",
      whatsapp: "+91 98765 12345",
      verified: true,
      established: "2008",
      employees: "8-10",
      description: "Where Sweetness Begins Discover Cupcakes, Cookies, And Custom Cakes Handcrafted For Every Celebration.",
      avatar: "/placeholder.svg",
      coverImage: spicesImg,
      specialties: ["specialties", "Donuts", "Cookies", "Muffins" ,"Tea-Time Cakes", "Artisan Breads",],
      businessHours: "Every Day: 9:00 AM - 10:00 PM",
      deliveryAreas: ["Ranu", "Tarshali", "Manjalpur", "Padra", "Vadodara"],
      paymentMethods: ["Cash", "UPI", "Bank Transfer"],
      minimumOrder: "₹40",
      deliveryTime: "1 hours delivery",
      totalProducts: 112,
      activeOrders: 98,
      completedOrders: 1423,
      responseTime: "1 hour",
      certifications: ["FSSAI Licensed", "Spice Board Certified", "Export Quality"]
    },
    "6": {
      id: 6,
      name: "Crunchy Crate",
      owner: "Jalpesh Rathod",
      category: "Dry-Fruits",
      location: "HathiKhana, Vadodara",
      fullAddress: "Shop 28, Raopura Road, Nani Chhipwad, vadodara-156372",
      rating: 4.7,
      reviews: 89,
      phone: "+91 98765 12345",
      email: "crunchycrate191@gmail.com",
      whatsapp: "+91 98765 12345",
      verified: true,
      established: "2008",
      employees: "4-5",
      description: "Buy premium quality dry fruits, nuts, seeds, and berries online – fresh, hygienic, and delivered across Vadodara and Gujarat.",
      avatar: "/placeholder.svg",
      coverImage: spicesImg,
      specialties: ["CASHEW", "PISTA", "RAISIN", "COCONUT" ,"APRICOT", "WALNUT SHELL",],
      businessHours: "Monday - friday: 10:00 AM - 7:00 PM",
      deliveryAreas: ["Padra Side", "Tarshali Side", "Manjalpur Side", "Raopura Market"],
      paymentMethods: ["Cash", "UPI", "Bank Transfer"],
      minimumOrder: "₹150",
      deliveryTime: "1-2hours delivery",
      totalProducts: 56,
      activeOrders: 23,
      completedOrders: 473,
      responseTime: "1 hour",
      certifications: ["FSSAI Licensed", "Spice Board Certified", "Export Quality"]
    },
  };

  // Get supplier data based on ID
  const supplier = suppliersData[id] || suppliersData["1"];

  // Products data based on supplier
  const productsData = {
    "1": [
      {
        id: 1,
        name: "Fresh Onions",
        price: "₹25/kg",
        image: vegetablesImg,
        category: "Vegetables",
        inStock: true,
        minOrder: "5kg",
        description: "Fresh red onions sourced directly from farms"
      },
      {
        id: 2,
        name: "Tomatoes",
        price: "₹35/kg",
        image: vegetablesImg,
        category: "Vegetables", 
        inStock: true,
        minOrder: "3kg",
        description: "Ripe, fresh tomatoes perfect for cooking"
      },
      {
        id: 3,
        name: "Green Chillies",
        price: "₹80/kg",
        image: vegetablesImg,
        category: "Vegetables",
        inStock: true,
        minOrder: "1kg",
        description: "Fresh green chillies with perfect heat level"
      },
      {
        id: 4,
        name: "Potatoes",
        price: "₹30/kg",
        image: vegetablesImg,
        category: "Vegetables",
        inStock: false,
        minOrder: "5kg",
        description: "Quality potatoes for all cooking needs"
      }
    ],
    "2": [
      {
        id: 1,
        name: "Garam Masala",
        price: "₹120/kg",
        image: spicesImg,
        category: "Spices",
        inStock: true,
        minOrder: "1kg",
        description: "Premium blend of aromatic spices"
      },
      {
        id: 2,
        name: "Chaat Masala",
        price: "₹150/kg",
        image: spicesImg,
        category: "Spices",
        inStock: true,
        minOrder: "500g",
        description: "Tangy spice mix perfect for street food"
      },
      {
        id: 3,
        name: "Red Chili Powder",
        price: "₹80/kg",
        image: spicesImg,
        category: "Spices",
        inStock: true,
        minOrder: "2kg",
        description: "Premium quality red chili powder"
      },
      {
        id: 4,
        name: "Turmeric Powder",
        price: "₹90/kg",
        image: spicesImg,
        category: "Spices",
        inStock: true,
        minOrder: "1kg",
        description: "Pure turmeric powder with rich color"
      }
    ],
    "3": [
      {
        id: 1,
        name: "Fresh Milk",
        price: "₹60/L",
        image: dairyImg,
        category: "Dairy",
        inStock: true,
        minOrder: "5L",
        description: "Fresh cow milk delivered daily"
      },
      {
        id: 2,
        name: "Paneer",
        price: "₹350/kg",
        image: dairyImg,
        category: "Dairy",
        inStock: true,
        minOrder: "1kg",
        description: "Fresh homemade paneer"
      },
      {
        id: 3,
        name: "Yogurt",
        price: "₹80/kg",
        image: dairyImg,
        category: "Dairy",
        inStock: true,
        minOrder: "2kg",
        description: "Thick and creamy yogurt"
      },
      {
        id: 4,
        name: "Butter",
        price: "₹450/kg",
        image: dairyImg,
        category: "Dairy",
        inStock: false,
        minOrder: "500g",
        description: "Fresh churned butter"
      }
    ]
  };

  const products = productsData[id] || productsData["1"];

  // Reviews data based on supplier
  const reviewsData = {
    "1": [
      {
        id: 1,
        vendor: "Raj's Chaat Corner",
        rating: 5,
        comment: "Excellent quality vegetables, always fresh and delivered on time. Been working with them for 2 years.",
        date: "2 days ago",
        verified: true
      },
      {
        id: 2,
        vendor: "Delhi Street Foods",
        rating: 4,
        comment: "Good supplier, reliable delivery. Sometimes prices could be better but quality is consistent.",
        date: "1 week ago",
        verified: true
      },
      {
        id: 3,
        vendor: "Mohan's Food Stall",
        rating: 5,
        comment: "Best supplier in the area. Ramesh bhai is very helpful and understanding of our business needs.",
        date: "2 weeks ago",
        verified: true
      }
    ],
    "2": [
      {
        id: 1,
        vendor: "Spice Street Delights",
        rating: 5,
        comment: "Amazing spice quality! Their garam masala blend is perfect for our chaat items. Highly recommended!",
        date: "1 day ago",
        verified: true
      },
      {
        id: 2,
        vendor: "Chaat King Corner",
        rating: 4,
        comment: "Good variety of spices. Manjeet ji is very knowledgeable and helps with custom blends.",
        date: "4 days ago",
        verified: true
      },
      {
        id: 3,
        vendor: "Street Food Express",
        rating: 5,
        comment: "Authentic spices at competitive prices. Their chaat masala is the best in the market.",
        date: "1 week ago",
        verified: true
      }
    ],
    "3": [
      {
        id: 1,
        vendor: "Morning Breakfast Hub",
        rating: 5,
        comment: "Fresh dairy products every morning! Their milk quality is exceptional and paneer is so fresh.",
        date: "1 day ago",
        verified: true
      },
      {
        id: 2,
        vendor: "Healthy Bites Cafe",
        rating: 5,
        comment: "Suresh ji ensures timely delivery every day. Quality is consistent and price is reasonable.",
        date: "3 days ago",
        verified: true
      },
      {
        id: 3,
        vendor: "Delhi Dairy Corner",
        rating: 4,
        comment: "Great dairy supplier for our cafe. Their yogurt is thick and creamy, customers love it!",
        date: "5 days ago",
        verified: true
      }
    ]
  };

  const handleCall = (phone: string) => {
    // Remove all non-digit characters: +, spaces, etc.
    const cleanedNumber = phone.replace(/\D/g, '');

    // Open phone dialer
    window.open(`tel:${cleanedNumber}`, '_self');
  };

  const handleEmail = (email: string, supplierName: string, productName: string) => {
    const subject = encodeURIComponent(`Inquiry about ${productName}`);
    const body = encodeURIComponent(`Hi ${supplierName},\n\nI'm interested in ordering ${productName}. Could you please provide more details?\n\nThank you.`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };

  const reviews = reviewsData[id] || reviewsData["1"];

  return (
    <Layout>
      <div className="container mx-auto md:mt-20 px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/suppliers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Suppliers
          </Link>
        </Button>

        {/* Supplier Header */}
        <Card className="mb-8">
          <div 
            className="h-48 bg-cover bg-center rounded-t-lg relative"
            style={{ backgroundImage: `url(${supplier.coverImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
            <div className="absolute bottom-4 left-6 text-white">
              <h1 className="text-3xl font-bold">{supplier.name}</h1>
              <p className="text-lg opacity-90">{supplier.category}</p>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/30">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/30">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={supplier.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {supplier.owner.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-semibold">{supplier.owner}</h2>
                      {supplier.verified && (
                        <Badge variant="trust" className="text-xs">
                          <Verified className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-golden mr-1 fill-current" />
                        {supplier.rating} ({supplier.reviews} reviews)
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {supplier.location}
                      </div>
                    </div>
                    <p className="text-sm">{supplier.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {supplier.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{supplier.totalProducts}</div>
                    <div className="text-xs text-muted-foreground">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-trust">{supplier.activeOrders}</div>
                    <div className="text-xs text-muted-foreground">Active Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-golden">{supplier.completedOrders}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-destructive">{supplier.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" >
                    <Phone className="h-4 w-4 mr-2" onClick={(e) => { e.stopPropagation(); handleCall(supplier.phone);}}/>
                    Call
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={(e) => {e.stopPropagation(); handleEmail(supplier.email, supplier.name, supplier.specialties.join(', '));}}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="info">Business Info</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-cover bg-center rounded-t-lg relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Badge variant="outline" className="text-xs">
                        Min: {product.minOrder}
                      </Badge>
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={!product.inStock}
                      variant={product.inStock ? "hero" : "outline"}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-golden fill-current" />
                  <span className="font-semibold">{supplier.rating}</span>
                  <span className="text-muted-foreground">({supplier.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.vendor}</span>
                            {review.verified && (
                              <Badge variant="trust" className="text-xs">
                                Verified Vendor
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-golden fill-current' : 'text-muted-foreground'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="info" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location & Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium">Address:</span>
                    <p className="text-sm text-muted-foreground">{supplier.fullAddress}</p>
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>
                    <p className="text-sm text-muted-foreground">{supplier.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>
                    <p className="text-sm text-muted-foreground">{supplier.email}</p>
                  </div>
                  <div>
                    <span className="font-medium">WhatsApp:</span>
                    <p className="text-sm text-muted-foreground">{supplier.whatsapp}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium">Operating Hours:</span>
                    <p className="text-sm text-muted-foreground">{supplier.businessHours}</p>
                  </div>
                  <div>
                    <span className="font-medium">Established:</span>
                    <p className="text-sm text-muted-foreground">{supplier.established}</p>
                  </div>
                  <div>
                    <span className="font-medium">Team Size:</span>
                    <p className="text-sm text-muted-foreground">{supplier.employees} employees</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium">Delivery Areas:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {supplier.deliveryAreas.map((area) => (
                        <Badge key={area} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Delivery Time:</span>
                    <p className="text-sm text-muted-foreground">{supplier.deliveryTime}</p>
                  </div>
                  <div>
                    <span className="font-medium">Minimum Order:</span>
                    <p className="text-sm text-muted-foreground">{supplier.minimumOrder}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {supplier.certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-2">
                        <Badge variant="trust" className="text-xs">✓</Badge>
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="policies" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {supplier.paymentMethods.map((method) => (
                      <div key={method} className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">✓</Badge>
                        <span className="text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Return Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Quality issues reported within 2 hours of delivery will be addressed immediately</p>
                  <p>• Replacements provided for damaged or sub-standard products</p>
                  <p>• Refunds processed within 24 hours for valid complaints</p>
                  <p>• No returns accepted for perishable items after 4 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Orders can be cancelled up to 2 hours before delivery time</p>
                  <p>• No cancellation charges for orders cancelled within allowed time</p>
                  <p>• Late cancellations may incur 10% processing fee</p>
                  <p>• Emergency cancellations will be handled case by case</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• All products are quality checked before dispatch</p>
                  <p>• Fresh produce guarantee with proper storage and handling</p>
                  <p>• FSSAI compliant processing and packaging</p>
                  <p>• Customer satisfaction is our top priority</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}