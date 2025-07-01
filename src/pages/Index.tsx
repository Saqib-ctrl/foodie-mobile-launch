
import { useState } from "react";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import { mockRestaurants } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Star } from "lucide-react";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  const featuredRestaurants = mockRestaurants.filter(r => r.featured);
  const cuisineTypes = [...new Set(mockRestaurants.map(r => r.cuisine))];

  const filteredRestaurants = selectedTab === "all" 
    ? mockRestaurants 
    : mockRestaurants.filter(r => r.cuisine.toLowerCase() === selectedTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showSearch cartCount={0} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-bounce-in">
            Delicious Food, Delivered Fast! 🍕
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Order from your favorite restaurants and get it delivered in minutes
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>Top Rated</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Track Your Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Restaurants ⭐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* All Restaurants */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">All Restaurants</h2>
          
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="italian">Italian</TabsTrigger>
              <TabsTrigger value="chinese">Chinese</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order? 🎉</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of satisfied customers who trust QuickBite for their food delivery needs.
          </p>
          <Button size="lg" className="rounded-full px-8">
            Start Ordering Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
