
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Our Honest Takes in Your Inbox
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Subscribe for brutally honest mattress reviews, sleep reality checks, and memes that hit different at 3 AM. 
            We promise not to sell you a $4000 "sleep system."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="your.email@sleepdeprived.com"
              className="bg-white border-0 text-gray-900 flex-1"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8">
              Join the Truth Squad
            </Button>
          </div>
          
          <p className="text-sm text-purple-200 mt-4">
            No spam, no BS, just honest sleep advice. Unsubscribe when you finally get 8 hours of sleep (so, never).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
