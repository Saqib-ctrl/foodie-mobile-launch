export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  featured: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Mama's Italian Kitchen",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: "2",
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.6,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d293?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: "3",
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.4,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: "4",
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.7,
    deliveryTime: "35-45 min",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: "5",
    name: "Fresh Sushi Co",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "40-50 min",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: "6",
    name: "Karachi Kitchen",
    cuisine: "Pakistani",
    rating: 4.8,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=300&fit=crop",
    featured: true
  }
];

export const mockMenuItems: { [key: string]: MenuItem[] } = {
  "1": [
    {
      id: "1-1",
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, basil, olive oil",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
      category: "Pizza"
    },
    {
      id: "1-2",
      name: "Spaghetti Carbonara",
      description: "Eggs, pecorino cheese, pancetta, black pepper",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
      category: "Pasta"
    },
    {
      id: "1-3",
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with mozzarella cheese",
      price: 20.99,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop",
      category: "Pizza"
    },
    {
      id: "1-4",
      name: "Fettuccine Alfredo",
      description: "Creamy Alfredo sauce with fresh fettuccine pasta",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&h=200&fit=crop",
      category: "Pasta"
    },
    {
      id: "1-5",
      name: "Tiramisu",
      description: "Coffee-soaked ladyfingers, mascarpone, cocoa",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
      category: "Dessert"
    },
    {
      id: "1-6",
      name: "Caesar Salad",
      description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
      category: "Salad"
    }
  ],
  "2": [
    {
      id: "2-1",
      name: "Sweet & Sour Chicken",
      description: "Crispy chicken with pineapple and bell peppers",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop",
      category: "Main"
    },
    {
      id: "2-2",
      name: "Vegetable Fried Rice",
      description: "Wok-fried rice with mixed vegetables and soy sauce",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop",
      category: "Rice"
    },
    {
      id: "2-3",
      name: "Kung Pao Chicken",
      description: "Spicy diced chicken with peanuts and vegetables",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop",
      category: "Main"
    },
    {
      id: "2-4",
      name: "Beef Lo Mein",
      description: "Soft noodles with beef and mixed vegetables",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      category: "Noodles"
    },
    {
      id: "2-5",
      name: "Spring Rolls",
      description: "Crispy vegetable spring rolls with sweet and sour sauce",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      category: "Appetizer"
    },
    {
      id: "2-6",
      name: "Wonton Soup",
      description: "Traditional pork wontons in clear broth",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
      category: "Soup"
    }
  ],
  "3": [
    {
      id: "3-1",
      name: "Classic Cheeseburger",
      description: "Beef patty with cheese, lettuce, tomato, and pickles",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      category: "Burger"
    },
    {
      id: "3-2",
      name: "Double Bacon Burger",
      description: "Two beef patties with bacon, cheese, and BBQ sauce",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop",
      category: "Burger"
    },
    {
      id: "3-3",
      name: "Chicken Wings",
      description: "Buffalo chicken wings with celery and blue cheese",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=200&fit=crop",
      category: "Appetizer"
    },
    {
      id: "3-4",
      name: "French Fries",
      description: "Crispy golden fries with ketchup",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=200&fit=crop",
      category: "Sides"
    },
    {
      id: "3-5",
      name: "Chocolate Milkshake",
      description: "Rich chocolate milkshake topped with whipped cream",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop",
      category: "Drink"
    },
    {
      id: "3-6",
      name: "Onion Rings",
      description: "Crispy beer-battered onion rings",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop",
      category: "Sides"
    }
  ],
  "4": [
    {
      id: "4-1",
      name: "Butter Chicken",
      description: "Tender chicken in creamy tomato-based curry",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
      category: "Main"
    },
    {
      id: "4-2",
      name: "Palak Paneer",
      description: "Fresh spinach curry with cottage cheese",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=300&h=200&fit=crop",
      category: "Vegetarian"
    },
    {
      id: "4-3",
      name: "Chicken Tandoori",
      description: "Marinated chicken grilled in tandoor oven",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop",
      category: "Main"
    },
    {
      id: "4-4",
      name: "Basmati Rice",
      description: "Fragrant basmati rice with cumin and cardamom",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop",
      category: "Rice"
    },
    {
      id: "4-5",
      name: "Garlic Naan",
      description: "Fresh baked naan bread with garlic and herbs",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop",
      category: "Bread"
    },
    {
      id: "4-6",
      name: "Mango Lassi",
      description: "Sweet yogurt drink with fresh mango",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&h=200&fit=crop",
      category: "Drink"
    },
    {
      id: "4-7",
      name: "Samosas",
      description: "Crispy pastries filled with spiced vegetables",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop",
      category: "Appetizer"
    }
  ],
  "5": [
    {
      id: "5-1",
      name: "California Roll",
      description: "Crab, avocado, and cucumber with sesame seeds",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      category: "Sushi"
    },
    {
      id: "5-2",
      name: "Salmon Sashimi",
      description: "Fresh salmon sliced thin, served with wasabi",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=300&h=200&fit=crop",
      category: "Sashimi"
    },
    {
      id: "5-3",
      name: "Dragon Roll",
      description: "Eel and cucumber topped with avocado",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
      category: "Sushi"
    },
    {
      id: "5-4",
      name: "Chicken Teriyaki",
      description: "Grilled chicken with teriyaki sauce and steamed rice",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
      category: "Main"
    },
    {
      id: "5-5",
      name: "Miso Soup",
      description: "Traditional soybean paste soup with tofu and seaweed",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
      category: "Soup"
    },
    {
      id: "5-6",
      name: "Tempura Shrimp",
      description: "Light and crispy battered shrimp with dipping sauce",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop",
      category: "Appetizer"
    },
    {
      id: "5-7",
      name: "Green Tea Ice Cream",
      description: "Traditional Japanese green tea flavored ice cream",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
      category: "Dessert"
    }
  ],
  "6": [
    {
      id: "6-1",
      name: "Chicken Biryani",
      description: "Aromatic basmati rice with tender chicken, spices, and saffron",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d293?w=300&h=200&fit=crop",
      category: "Rice"
    },
    {
      id: "6-2",
      name: "Beef Karahi",
      description: "Slow-cooked beef with tomatoes, ginger, and traditional spices",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
      category: "Main"
    },
    {
      id: "6-3",
      name: "Chicken Tikka",
      description: "Marinated chicken grilled in tandoor with yogurt and spices",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop",
      category: "Appetizer"
    },
    {
      id: "6-4",
      name: "Naan Bread",
      description: "Fresh baked naan bread with garlic and butter",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop",
      category: "Bread"
    },
    {
      id: "6-5",
      name: "Lamb Seekh Kebab",
      description: "Spiced ground lamb kebabs grilled to perfection",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1630409346448-4ac8c53ca22c?w=300&h=200&fit=crop",
      category: "Main"
    },
    {
      id: "6-6",
      name: "Gulab Jamun",
      description: "Sweet milk dumplings in rose-flavored syrup",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
      category: "Dessert"
    }
  ]
};

export const orderStatuses = [
  { status: "Order Received", completed: true, time: "2:30 PM" },
  { status: "Preparing Food", completed: true, time: "2:45 PM" },
  { status: "Out for Delivery", completed: false, time: "Est. 3:15 PM" },
  { status: "Delivered", completed: false, time: "Est. 3:30 PM" }
];
