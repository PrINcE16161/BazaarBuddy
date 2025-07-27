import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Phone, Clock, CheckCircle2 } from "lucide-react";

export default function Messages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState<number | null>(1);

  const conversations = [
    {
      id: 1,
      supplier: "Fresh Veggie Hub",
      contact: "Ramesh Kumar",
      avatar: "/placeholder.svg",
      lastMessage: "Your order has been dispatched and will reach you by 6 PM today.",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      category: "Vegetables"
    },
    {
      id: 2,
      supplier: "Spice World", 
      contact: "Mukesh Agarwal",
      avatar: "/placeholder.svg",
      lastMessage: "We have fresh garam masala available. Would you like to place an order?",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
      category: "Spices"
    },
    {
      id: 3,
      supplier: "Daily Bread Supply",
      contact: "Suresh Bakshi", 
      avatar: "/placeholder.svg",
      lastMessage: "Thank you for the order! Will deliver fresh bread tomorrow morning.",
      timestamp: "3 hours ago",
      unread: 1,
      online: true,
      category: "Bakery"
    },
    {
      id: 4,
      supplier: "Oil & Ghee Center",
      contact: "Pradeep Singh",
      avatar: "/placeholder.svg", 
      lastMessage: "Pure ghee is back in stock. Same quality as always.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      category: "Dairy"
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      message: "Hello! I need 10kg onions and 5kg tomatoes for tomorrow morning.",
      timestamp: "10:30 AM",
      isOwn: true
    },
    {
      id: 2, 
      senderId: 1,
      message: "Sure! I have fresh stock available. Total will be ₹425. Shall I confirm the order?",
      timestamp: "10:32 AM", 
      isOwn: false
    },
    {
      id: 3,
      senderId: 1,
      message: "Yes, please confirm. Same delivery address as always.",
      timestamp: "10:33 AM",
      isOwn: true
    },
    {
      id: 4,
      senderId: 1, 
      message: "Perfect! Order confirmed. Order ID: ORD-2024-001",
      timestamp: "10:35 AM",
      isOwn: false
    },
    {
      id: 5,
      senderId: 1,
      message: "Your order has been dispatched and will reach you by 6 PM today.",
      timestamp: "2:15 PM",
      isOwn: false
    }
  ];

  const filteredConversations = conversations.filter(conv => 
    conv.supplier.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-muted-foreground">
            Chat with your suppliers and manage communications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Conversations
                </CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0 overflow-y-auto">
                <div className="space-y-1">
                  {filteredConversations.map((conv) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedChat(conv.id)}
                      className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors border-l-4 ${
                        selectedChat === conv.id 
                          ? 'bg-primary/5 border-l-primary' 
                          : 'border-l-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conv.avatar} />
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {conv.contact.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {conv.online && (
                            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-trust rounded-full border-2 border-background" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm truncate">{conv.supplier}</h4>
                            {conv.unread > 0 && (
                              <Badge variant="destructive" className="text-xs px-1.5 py-0.5 min-w-[20px] h-5">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{conv.contact}</p>
                          <p className="text-sm text-muted-foreground truncate mb-1">
                            {conv.lastMessage}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {conv.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            {selectedConversation ? (
              <Card className="h-full flex flex-col">
                {/* Chat Header */}
                <CardHeader className="pb-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={selectedConversation.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {selectedConversation.contact.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {selectedConversation.online && (
                          <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-trust rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.supplier}</h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedConversation.contact} • {selectedConversation.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] p-3 rounded-lg ${
                            msg.isOwn
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <div className={`flex items-center gap-1 mt-1 text-xs ${
                            msg.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}>
                            <Clock className="h-3 w-3" />
                            {msg.timestamp}
                            {msg.isOwn && <CheckCircle2 className="h-3 w-3" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button variant="hero">
                      Send
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">
                    Choose a supplier from the left to start chatting
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}