
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Clock, MapPin, Phone, Star } from "lucide-react";

const OrderTracking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState<any>(null);

  const orderStatuses = [
    { status: "Order Received", time: "2:30 PM", icon: "📝" },
    { status: "Preparing Food", time: "2:45 PM", icon: "👨‍🍳" },
    { status: "Out for Delivery", time: "Est. 3:15 PM", icon: "🚗" },
    { status: "Delivered", time: "Est. 3:30 PM", icon: "🎉" }
  ];
  
  // Load order data from localStorage
  useEffect(() => {
    const storedOrder = localStorage.getItem('currentOrder');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    }
  }, []);

  // Simulate order progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < orderStatuses.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCallRestaurant = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleCallDriver = () => {
    window.location.href = 'tel:+1987654321';
  };

  const handleRateOrder = () => {
    localStorage.removeItem('currentOrder');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Track Your Order 📍</h1>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Order Details */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">
                  Order #{orderData?.id || 'QB123456'}
                </h3>
                <p className="text-muted-foreground">From Mama's Italian Kitchen</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${orderData?.total?.toFixed(2) || '58.97'}</p>
                <p className="text-sm text-muted-foreground">
                  {orderData?.items?.length || 2} items
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Delivering to: 123 Main St, City, State 12345</span>
            </div>
          </Card>

          {/* Order Status */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-6">Order Status</h3>
            
            <div className="space-y-4">
              {orderStatuses.map((status, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {index <= currentStep ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Clock className="h-5 w-5" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{status.icon}</span>
                      <p className={`font-medium ${
                        index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {status.status}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{status.time}</p>
                  </div>
                  
                  {index === currentStep && index < orderStatuses.length - 1 && (
                    <div className="text-primary text-sm font-medium animate-pulse">
                      In Progress...
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Live Map Tracking */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Live Tracking 🗺️</h3>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-green-200/20"></div>
              <div className="text-center relative z-10">
                <div className="text-4xl mb-2 animate-bounce">🚗</div>
                <p className="text-lg font-semibold text-gray-700">
                  Your driver is on the way!
                </p>
                <p className="text-sm text-muted-foreground">
                  Estimated arrival: 15 minutes
                </p>
              </div>
              
              {/* Animated route line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 transform -translate-y-1/2">
                <div className="h-full bg-primary w-1/3 animate-pulse"></div>
              </div>
            </div>
          </Card>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-4 hover:bg-blue-50 border-blue-200"
              onClick={handleCallRestaurant}
            >
              <div className="text-center">
                <Phone className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold">Call Restaurant</p>
                <p className="text-sm text-muted-foreground">Get order updates</p>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto p-4 hover:bg-green-50 border-green-200"
              onClick={handleCallDriver}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">🚗</div>
                <p className="font-semibold">Call Driver</p>
                <p className="text-sm text-muted-foreground">Contact delivery person</p>
              </div>
            </Button>
          </div>

          {/* Order Delivered Success */}
          {currentStep === orderStatuses.length - 1 && (
            <Card className="p-6 text-center bg-green-50 border-green-200">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">
                Order Delivered Successfully!
              </h3>
              <p className="text-green-700 mb-4">
                Hope you enjoyed your meal! Please rate your experience.
              </p>
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400 cursor-pointer hover:scale-110 transition-transform" />
                ))}
              </div>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleRateOrder}
              >
                Submit Rating & Return Home
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
