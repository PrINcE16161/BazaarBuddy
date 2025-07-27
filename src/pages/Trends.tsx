import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Calendar, BarChart3, LineChart, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Trends = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { toast } = useToast();

  const handleLoadMore = () => {
    toast({
      title: "Load More Feature",
      description: "Coming Soon"
    });
  }

  const priceData = [
    {
      product: "Basmati Rice",
      category: "Grains",
      currentPrice: 45,
      previousPrice: 44,
      change: 2.3,
      trend: "up",
      dailyData: [45],
      weeklyData: [42, 43, 44, 45, 46, 45, 45],
      monthlyData: [40, 41, 42, 43, 44, 45, 46, 45, 44, 45, 46, 47, 45, 44, 43, 44, 45, 46, 45, 44, 45, 46, 47, 48, 47, 46, 45, 44, 45, 45],
      yearlyData: [38, 40, 42, 45, 48, 46, 44, 43, 44, 45, 46, 45],
      prediction: "stable",
      alerts: [],
    },
    {
      product: "Onions",
      category: "Vegetables & Fruits",
      currentPrice: 28,
      previousPrice: 32,
      change: -12.5,
      trend: "down",
      dailyData: [28],
      weeklyData: [35, 34, 32, 30, 29, 28, 28],
      monthlyData: [40, 38, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 28, 29, 28, 27, 26, 28, 29, 30, 28, 27, 28, 29, 30, 28, 27, 28, 29, 28],
      yearlyData: [45, 42, 38, 35, 32, 28, 25, 30, 35, 38, 32, 28],
      prediction: "declining",
      alerts: ["Seasonal price drop expected to continue"],
    },
    {
      product: "Cumin Seeds",
      category: "Spices & Masala",
      currentPrice: 380,
      previousPrice: 370,
      change: 2.7,
      trend: "up",
      dailyData: [380],
      weeklyData: [365, 368, 370, 375, 378, 380, 380],
      monthlyData: [350, 355, 360, 365, 368, 370, 372, 375, 378, 380, 382, 380, 378, 380, 382, 385, 380, 378, 380, 382, 385, 380, 378, 380, 382, 385, 380, 378, 380, 380],
      yearlyData: [320, 340, 360, 380, 400, 385, 370, 365, 370, 380, 385, 380],
      prediction: "rising",
      alerts: [],
    },
    {
      product: "Mustard Oil",
      category: "Oil & Ghee",
      currentPrice: 120,
      previousPrice: 125,
      change: -4.0,
      trend: "down",
      dailyData: [120],
      weeklyData: [128, 126, 125, 123, 122, 121, 120],
      monthlyData: [135, 133, 130, 128, 126, 125, 123, 122, 121, 120, 118, 120, 122, 121, 120, 118, 120, 122, 121, 120, 118, 120, 122, 121, 120, 118, 120, 122, 121, 120],
      yearlyData: [140, 138, 135, 130, 125, 120, 118, 122, 125, 123, 121, 120],
      prediction: "stable",
      alerts: [],
    },
    {
      product: "Tomatoes",
      category: "Vegetables & Fruits",
      currentPrice: 34,
      previousPrice: 30,
      change: 13.3,
      trend: "up",
      dailyData: [34],
      weeklyData: [28, 29, 30, 31, 32, 33, 34],
      monthlyData: [22, 24, 26, 28, 30, 32, 33, 34, 35, 34, 33, 32, 31, 30, 29, 28, 30, 32, 34, 33, 32, 30, 31, 34, 33, 32, 31, 30, 34, 34],
      yearlyData: [20, 24, 28, 32, 36, 30, 28, 30, 33, 34, 33, 34],
      prediction: "volatile",
      alerts: ["Heatwave affected production in key regions"],
    },
    {
      product: "Black Pepper",
      category: "Spices & Masala",
      currentPrice: 520,
      previousPrice: 510,
      change: 2.0,
      trend: "up",
      dailyData: [520],
      weeklyData: [500, 505, 508, 510, 512, 515, 520],
      monthlyData: [480, 485, 490, 495, 500, 505, 510, 515, 520, 522, 525, 523, 520, 518, 516, 520, 522, 525, 523, 520, 518, 516, 520, 522, 520, 518, 516, 515, 520, 520],
      yearlyData: [460, 470, 480, 500, 520, 510, 505, 500, 505, 510, 520, 520],
      prediction: "rising",
      alerts: ["Export demand pushing prices higher"],
    },
    {
      product: "Bread (White)",
      category: "Bakery Items",
      currentPrice: 40,
      previousPrice: 38,
      change: 5.3,
      trend: "up",
      dailyData: [40],
      weeklyData: [36, 37, 37, 38, 39, 39, 40],
      monthlyData: [35, 36, 36, 37, 38, 38, 38, 39, 39, 40, 40, 39, 38, 38, 37, 36, 37, 38, 39, 40, 40, 39, 38, 38, 37, 36, 37, 38, 39, 40],
      yearlyData: [32, 33, 34, 35, 37, 38, 38, 39, 38, 37, 38, 40],
      prediction: "stable",
      alerts: [],
    },
    {
      product: "Ghee (Desi)",
      category: "Oil & Ghee",
      currentPrice: 560,
      previousPrice: 550,
      change: 1.8,
      trend: "up",
      dailyData: [560],
      weeklyData: [540, 545, 548, 550, 552, 555, 560],
      monthlyData: [520, 525, 530, 535, 540, 545, 550, 552, 554, 556, 558, 560, 558, 555, 552, 550, 552, 554, 556, 558, 560, 558, 555, 552, 550, 548, 550, 552, 555, 560],
      yearlyData: [500, 510, 520, 540, 560, 550, 548, 545, 550, 555, 560, 560],
      prediction: "rising",
      alerts: ["Demand surge during festive season"],
    },
    {
      product: "Paneer (Cottage Cheese)",
      category: "Dairy Products",
      currentPrice: 320,
      previousPrice: 310,
      change: 3.2,
      trend: "up",
      dailyData: [320],
      weeklyData: [305, 308, 310, 312, 315, 318, 320],
      monthlyData: [290, 295, 298, 300, 302, 305, 308, 310, 312, 315, 318, 320, 318, 316, 314, 312, 310, 308, 306, 305, 308, 310, 312, 315, 318, 320, 318, 316, 314, 320],
      yearlyData: [280, 290, 300, 310, 320, 315, 310, 308, 310, 312, 318, 320],
      prediction: "rising",
      alerts: ["Milk price hike impacting paneer rates"],
    },
    {
      product: "Almonds",
      category: "Dry-Fruits",
      currentPrice: 950,
      previousPrice: 960,
      change: -1.04,
      trend: "down",
      dailyData: [950],
      weeklyData: [970, 965, 962, 960, 955, 952, 950],
      monthlyData: [980, 975, 970, 965, 960, 955, 950, 952, 954, 956, 955, 954, 953, 952, 951, 950, 948, 946, 945, 944, 943, 942, 943, 944, 945, 946, 947, 948, 949, 950],
      yearlyData: [1000, 990, 980, 970, 960, 950, 940, 930, 940, 950, 955, 950],
      prediction: "stable",
      alerts: ["Price expected to stabilize after recent drop"],
    }
  ];

  const categories = [
    "all",
    "Grains",
    "Vegetables & Fruits",
    "Spices & Masala",
    "Bakery Items",
    "Oil & Ghee",
    "Dairy Products",
    "Dry-Fruits"
  ];

  const periods = [
    { value: "1d", label: "1 Day" },
    { value: "7d", label: "7 Days" },
    { value: "30d", label: "30 Days" },
    { value: "1y", label: "1 Years" },
  ];

  const filteredData = priceData.filter(item => 
    selectedCategory === "all" || item.category === selectedCategory
  );

  const getCurrentData = (item: any) => {
    const dataMap = {
      "1d": item.dailyData,
      "7d": item.weeklyData,
      "30d": item.monthlyData,
      "1y": item.yearlyData
    };
    return dataMap[selectedPeriod as keyof typeof dataMap] || item.weeklyData;
  };

  const getPeriodLabel = () => {
    const labelMap = {
      "1d": "1-Day",
      "7d": "7-Day", 
      "30d": "30-Day",
      "1y": "1-Year"
    };
    return labelMap[selectedPeriod as keyof typeof labelMap] || "7-Day";
  };

  const getPredictionColor = (prediction: string) => {
    switch (prediction) {
      case "rising": return "text-red-600";
      case "declining": return "text-red-500";
      case "stable": return "text-green-600";
      default: return "text-muted-foreground";
    }
  };

  const getPredictionIcon = (prediction: string) => {
    switch (prediction) {
      case "rising": return <TrendingUp className="w-4 h-4" />;
      case "declining": return <TrendingDown className="w-4 h-4" />;
      default: return <BarChart3 className="w-4 h-4" />;
    }
  };

  return (
    <Layout>
    <div className="container mx-auto md:mt-20 px-6 py-8 space-y-6">
      <div className="text-center mt-14">
        <h1 className="text-4xl font-bold mb-4">Price Trends & Analytics</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Stay ahead with real-time price insights and predictions
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex gap-4">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[150px]">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <BarChart3 className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Price Alerts */}
      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800 dark:text-orange-400">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Price Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredData.flatMap(item => 
              item.alerts.map((alert, index) => (
                <div key={`${item.product}-${index}`} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <span className="font-medium">{item.product}: </span>
                    <span className="text-muted-foreground">{alert}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Now</span>
                </div>
              ))
            )}
            {filteredData.every(item => item.alerts.length === 0) && (
              <p className="text-center text-muted-foreground py-4">No active price alerts</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Trends Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredData.map((item) => (
          <Card key={item.product} className="hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{item.product}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">₹{item.currentPrice}</div>
                  <div className={cn(
                    "flex items-center justify-end space-x-1",
                    item.trend === "up" ? "text-green-600" : "text-red-600"
                  )}>
                    {item.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {item.change > 0 ? "+" : ""}{item.change}%
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Price Chart */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{getPeriodLabel()} Price History</h4>
                <div className="h-30 overflow-x-auto rounded-lg bg-muted">
                  <div className="flex items-end justify-between gap-1 p-2 min-w-max">
                    {getCurrentData(item).map((price: number, index: number) => (
                      <div key={index} className="flex flex-col items-center space-y-1">
                        <div
                          className={cn(
                            "rounded-t transition-all",
                            item.trend === "up" ? "bg-green-500" : "bg-red-500"
                          )}
                          style={{
                            height: `${(price / Math.max(...getCurrentData(item))) * 60}px`,
                            width: selectedPeriod === "1y" ? "4px" : selectedPeriod === "30d" ? "6px" : "16px",
                          }}
                        />
                          <span className="text-xs">₹{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prediction */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-2">
                  {getPredictionIcon(item.prediction)}
                  <span className="font-medium">Price Prediction</span>
                </div>
                <span className={cn("font-semibold capitalize", getPredictionColor(item.prediction))}>
                  {item.prediction}
                </span>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">₹{Math.min(...getCurrentData(item))}</div>
                  <div className="text-xs text-muted-foreground">{getPeriodLabel().split('-')[0]}D Low</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">₹{Math.max(...getCurrentData(item))}</div>
                  <div className="text-xs text-muted-foreground">{getPeriodLabel().split('-')[0]}D High</div>
                </div>
                <div>
                  <div className="text-lg font-bold">₹{Math.round(getCurrentData(item).reduce((a: number, b: number) => a + b) / getCurrentData(item).length)}</div>
                  <div className="text-xs text-muted-foreground">{getPeriodLabel().split('-')[0]}D Avg</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={handleLoadMore}>
              Load More Analysis
            </Button>
          </div>
    </div>
    </Layout>
  );
};

export default Trends;