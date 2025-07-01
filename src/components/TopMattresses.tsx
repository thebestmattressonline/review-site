
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, CheckCircle, Zap } from "lucide-react";

const TopMattresses = () => {
  const mattresses = [
    {
      id: 1,
      name: "SleepyCat Deluxe",
      brand: "TabbyDream",
      rating: 4.9,
      price: "$2,499",
      badge: "Most Overpriced",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      pros: ["Purrs you to sleep", "Self-warming technology", "Comes with built-in judgment"],
      cons: ["Sheds foam everywhere", "Ignores you when you need comfort", "Demands premium fish treats"],
      summary: "The SleepyCat Deluxe: Because apparently sleeping like a cat is worth $2,500. Features patented 'ignore-your-human' technology and premium tabby-grade materials."
    },
    {
      id: 2,
      name: "MonkeyBusiness Supreme",
      brand: "BananaFoam",
      rating: 4.7,
      price: "$1,899",
      badge: "Most Bananas",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=800&h=600&fit=crop",
      pros: ["Goes bananas for comfort", "Swings you to dreamland", "Monkey-approved design"],
      cons: ["Makes you go ape over the price", "Attracts actual monkeys", "Warranty void if you go bananas"],
      summary: "MonkeyBusiness Supreme: The mattress that makes sleeping around seem appealing. Our patented banana-foam technology will have you swinging from the chandeliers... of your dreams."
    },
    {
      id: 3,
      name: "WildDeer Naturals",
      brand: "ForestNap",
      rating: 4.8,
      price: "$3,299",
      badge: "Most Pretentious",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&h=600&fit=crop",
      pros: ["All-natural woodland vibes", "Eco-friendly deer approval", "Makes you one with nature"],
      cons: ["Costs more than your car", "Attracts hunting season jokes", "Requires forest permit to sleep"],
      summary: "WildDeer Naturals: For when you want to sleep like you're in a National Geographic documentary. Warning: May cause excessive appreciation for nature and your bank account to go extinct."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The "Best" Mattresses of 2024
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've tested these mattresses so you can see through the marketing nonsense. 
            Spoiler: They're all just fancy rectangles you lie on.
          </p>
        </div>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {mattresses.map((mattress, index) => (
            <Card key={mattress.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <img 
                      src={mattress.image} 
                      alt={mattress.name}
                      className="w-full h-64 lg:h-full object-cover object-center"
                    />
                    <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                      #{index + 1}
                    </Badge>
                    {mattress.badge && (
                      <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                        <Zap className="h-3 w-3 mr-1" />
                        {mattress.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="lg:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {mattress.name}
                        </h3>
                        <p className="text-gray-600 mb-2">by {mattress.brand}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(mattress.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="font-semibold text-gray-900">{mattress.rating}</span>
                          <span className="text-sm text-gray-500">(out of 5 paid reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{mattress.price}</div>
                        <div className="text-sm text-gray-600">Queen size</div>
                        <div className="text-xs text-red-500">+ your soul</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{mattress.summary}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">"Pros" (According to Marketing)</h4>
                        <ul className="space-y-1">
                          {mattress.pros.map((pro, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Reality Check</h4>
                        <ul className="space-y-1">
                          {mattress.cons.map((con, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-700">
                              <div className="h-4 w-4 rounded-full bg-red-500 mr-2 flex-shrink-0" style={{minWidth: '16px', minHeight: '16px'}} />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                        Read Our Roast
                      </Button>
                      <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 flex-1">
                        Find Better Deals (Good Luck)
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMattresses;
