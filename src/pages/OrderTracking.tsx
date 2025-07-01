
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Clock, MapPin } from "lucide-react";
import { orderStatuses } from "@/data/mockData";

const OrderTracking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
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
    }, 5000); // Update every 5 seconds for demo

    return () => clearInterval(interval);
  }, []);

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
                <h3 className="font-semibold text-lg">Order #QB123456</h3>
                <p className="text-muted-foreground">From Mama's Italian Kitchen</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$58.97</p>
                <p className="text-sm text-muted-foreground">2 items</p>
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
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {index <= currentStep ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className={`font-medium ${
                      index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {status.status}
                    </p>
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

          {/* Delivery Map Placeholder */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Live Tracking</h3>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-muted-foreground">
                  Map integration would show live delivery tracking
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <div className="text-2xl mb-1">📞</div>
                <p className="font-semibold">Call Restaurant</p>
                <p className="text-sm text-muted-foreground">Get order updates</p>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <div className="text-2xl mb-1">🚗</div>
                <p className="font-semibold">Call Driver</p>
                <p className="text-sm text-muted-foreground">Contact delivery person</p>
              </div>
            </Button>
          </div>

          {currentStep === orderStatuses.length - 1 && (
            <Card className="p-6 text-center bg-green-50 border-green-200">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">
                Order Delivered!
              </h3>
              <p className="text-green-700 mb-4">
                Enjoy your meal! Don't forget to rate your experience.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Rate Order ⭐
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
