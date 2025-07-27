import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Clock, 
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { label: "Active Vendors", value: "5,000+", icon: Users, color: "text-primary" },
    { label: "Trusted Suppliers", value: "2,000+", icon: Shield, color: "text-trust" },
    { label: "Monthly Transactions", value: "₹50L+", icon: TrendingUp, color: "text-golden" },
    { label: "Cities Covered", value: "15+", icon: MapPin, color: "text-destructive" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ years in supply chain",
      image: "/placeholder.svg",
      description: "Former vendor turned entrepreneur, understands ground-level challenges"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      experience: "12+ years in logistics",
      image: "/placeholder.svg",
      description: "Ensures smooth operations and quality control across platform"
    },
    {
      name: "Amit Singh",
      role: "Technology Lead",
      experience: "10+ years in tech",
      image: "/placeholder.svg",
      description: "Building scalable solutions for India's street food ecosystem"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Vendor First",
      description: "Every decision we make prioritizes the success and wellbeing of street food vendors"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through verified suppliers and transparent pricing"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Maintaining highest standards for all products and services on our platform"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Consistent, on-time delivery that vendors can depend on for their business"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto md:mt-20 px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering India's 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Street Food Heroes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BazaarBuddy was born from a simple observation: street food vendors, the backbone of India's 
            food culture, deserved better access to quality ingredients and fair pricing. We're here to 
            bridge that gap with technology and trust.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-6">
                  <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg opacity-90">
                To democratize access to quality ingredients for street food vendors across India, 
                creating a transparent, efficient, and trustworthy supply chain that empowers small 
                businesses to thrive.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-trust/10 to-trust/5 border-trust/20">
            <CardHeader>
              <CardTitle className="text-2xl text-trust">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                A future where every street food vendor in India has reliable access to quality 
                ingredients at fair prices, enabling them to focus on what they do best - creating 
                delicious food that brings communities together.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Passionate individuals working to transform India's street food supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                  <p className="text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact */}
        <Card className="mb-16 bg-gradient-to-r from-background to-muted/30">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-trust" />
                    <span>Reduced ingredient costs by 25% on average</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-trust" />
                    <span>Improved supply reliability for 5,000+ vendors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-trust" />
                    <span>Created 10,000+ direct and indirect jobs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-trust" />
                    <span>Facilitated ₹50L+ in monthly transactions</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-xl font-semibold mb-4">Vendor Satisfaction Rate</div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-golden fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Based on 2,500+ vendor reviews
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              +91 98765 43210
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="h-5 w-5 mr-2" />
              hello@bazaarbuddy.in
            </Button>
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/register">
              Join BazaarBuddy Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}