
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/data/mockData";
import { useState } from "react";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    setQuantity(1);
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover flex-shrink-0"
        />
        
        <div className="flex-1 p-4">
          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary text-lg">
              ${item.price}
            </span>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="px-3 font-semibold">{quantity}</span>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="rounded-full"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;
