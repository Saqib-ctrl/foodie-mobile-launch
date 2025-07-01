import { useState } from "react";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockRestaurants } from "@/data/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = ["All", "Italian", "Chinese", "American", "Indian", "Japanese", "Pakistani"];

  const filteredRestaurants = mockRestaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  const featuredRestaurants = filteredRestaurants.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showSearch={true} onSearch={setSearchQuery} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Craving something delicious? 🍕
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Get your favorite food delivered in minutes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <span>⚡</span>
              <span>Fast delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <span>🎯</span>
              <span>Track your order</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <span>💳</span>
              <span>Easy payment</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Cuisine Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse by Cuisine 🍽️</h2>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCuisine(cuisine)}
                className="rounded-full"
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Restaurants */}
        {featuredRestaurants.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Restaurants ⭐</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </section>
        )}

        {/* All Restaurants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCuisine === "All" ? "All Restaurants" : `${selectedCuisine} Restaurants`} 🏪
          </h2>
          {filteredRestaurants.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or cuisine filter
              </p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
