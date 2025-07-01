
import { Star, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Restaurant } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="restaurant-card-hover cursor-pointer overflow-hidden border-0 shadow-lg"
      onClick={() => navigate(`/menu/${restaurant.id}`)}
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {restaurant.featured && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
            Featured ⭐
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{restaurant.cuisine}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-sm">{restaurant.rating}</span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
