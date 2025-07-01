
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import MenuItemCard from "@/components/MenuItemCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { mockRestaurants, mockMenuItems, MenuItem, CartItem } from "@/data/mockData";
import { toast } from "sonner";

const Menu = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const restaurant = mockRestaurants.find(r => r.id === restaurantId);
  const menuItems = mockMenuItems[restaurantId || ""] || [];
  
  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = (item: MenuItem, quantity: number) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    
    toast.success(`Added ${quantity}x ${item.name} to cart! 🛒`);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} />
      
      {/* Restaurant Hero */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <Button
          variant="ghost"
          className="absolute top-4 left-4 text-white hover:bg-white/20"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg mb-4">{restaurant.cuisine} cuisine</p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{restaurant.rating}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>2.5 km away</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Menu 📖</h2>
        
        {menuItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              Menu items coming soon! 🍽️
            </p>
            <Button onClick={() => navigate("/")}>
              Browse Other Restaurants
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {menuItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6">
          <Button
            size="lg"
            className="rounded-full shadow-lg animate-bounce-in"
            onClick={() => navigate("/cart")}
          >
            View Cart ({cartCount}) 🛒
          </Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
