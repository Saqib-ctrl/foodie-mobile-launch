
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
      name: "Tiramisu",
      description: "Coffee-soaked ladyfingers, mascarpone, cocoa",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
      category: "Dessert"
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
