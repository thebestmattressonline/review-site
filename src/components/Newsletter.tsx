
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on the Best Deals
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get exclusive mattress deals, sleep tips, and new reviews delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white border-0 text-gray-900 flex-1"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
