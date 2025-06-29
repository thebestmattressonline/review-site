
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, CheckCircle } from "lucide-react";

const TopMattresses = () => {
  const mattresses = [
    {
      id: 1,
      name: "Purple Hybrid Premier",
      brand: "Purple",
      rating: 4.8,
      price: "$1,299",
      badge: "Editor's Choice",
      image: "/lovable-uploads/752fdb10-bad9-435d-a435-5d8615b5cda4.png",
      pros: ["Excellent cooling", "Great for all sleep positions", "100-night trial"],
      cons: ["Higher price point", "Heavy mattress"],
      summary: "The Purple Hybrid Premier combines innovative gel grid technology with responsive coils for exceptional comfort and cooling."
    },
    {
      id: 2,
      name: "Casper Original",
      brand: "Casper",
      rating: 4.6,
      price: "$1,095",
      badge: "Best Value",
      image: "/placeholder.svg",
      pros: ["Balanced feel", "Good motion isolation", "Free shipping"],
      cons: ["May sleep warm", "Limited firmness options"],
      summary: "A well-rounded mattress that works for most sleepers with its balanced foam construction and zoned support."
    },
    {
      id: 3,
      name: "Tempur-Pedic Cloud",
      brand: "Tempur-Pedic",
      rating: 4.7,
      price: "$1,699",
      badge: "Premium Pick",
      image: "/placeholder.svg",
      pros: ["Superior pressure relief", "Excellent durability", "25-year warranty"],
      cons: ["Expensive", "Slow response time"],
      summary: "Premium memory foam construction provides unmatched pressure relief and support for a luxurious sleep experience."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Rated Mattresses of 2024
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experts have tested hundreds of mattresses to bring you these top picks
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
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      #{index + 1}
                    </Badge>
                    {mattress.badge && (
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                        <Award className="h-3 w-3 mr-1" />
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
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{mattress.price}</div>
                        <div className="text-sm text-gray-600">Queen size</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{mattress.summary}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
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
                        <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
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
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                        Read Full Review
                      </Button>
                      <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 flex-1">
                        Check Best Price
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
