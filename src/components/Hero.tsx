
import { Button } from "@/components/ui/button";
import { Star, Award, Users, Laugh } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-50 to-pink-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Laugh className="h-8 w-8 text-purple-600" />
            <span className="text-lg font-semibold text-purple-600">The REAL Mattress Reviews</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Finally, Someone Who
            <span className="block text-purple-600">Tells the Truth</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We've slept on every mattress so you don't have to pretend they're all "life-changing." 
            Spoiler alert: They're not magical rectangles that solve all your problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
              See Our Brutally Honest Reviews
            </Button>
            <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg">
              Learn Why You're Still Tired
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">500+ Sarcastic Reviews</div>
                <div className="text-sm text-gray-600">Zero BS detected</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">1M+ Confused Visitors</div>
                <div className="text-sm text-gray-600">Still can't decide</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">5 Years</div>
                <div className="text-sm text-gray-600">Of calling out the industry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
