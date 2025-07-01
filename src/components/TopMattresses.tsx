import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, CheckCircle, Zap } from "lucide-react";

const TopMattresses = () => {
  const mattresses = [
    {
      id: 1,
      name: "TempurTantrum",
      brand: "Tempur-Tantrum Sleep Co.",
      rating: 4.9,
      price: "$2,199",
      badge: "Most Overpriced",
      image: "/lovable-uploads/438c1599-f106-4b29-a50d-b129abfaf169.png",
      pros: ["Memory foam that remembers your tantrums", "Patented anger-absorption technology", "Cry-comfort guarantee"],
      cons: ["Costs more than your rent", "Pillow looks perpetually angry", "Warranty void if you don't cry"],
      summary: "TempurTantrum: So comfy it'll make you cry - from your bank account. The only mattress that promises emotional support while draining your wallet."
    },
    {
      id: 2,
      name: "Has-Beens",
      brand: "Nostalgic Sleep Solutions",
      rating: 4.7,
      price: "$1,599",
      badge: "Most Generic",
      image: "/lovable-uploads/7a522065-b13c-4d2e-b037-9b15c510ced0.png",
      pros: ["Classic checkered comfort", "Vintage horse-powered springs", "Reminds you of better times"],
      cons: ["Sounds like a retirement home", "Horse left separately", "Better times never existed"],
      summary: "Has-Beens: The mattress for people who peaked in high school. Features authentic checkered pattern that screams 'I've given up on life.'"
    },
    {
      id: 3,
      name: "SLEEPOLOGY",
      brand: "Scientific Snooze Institute",
      rating: 4.8,
      price: "$2,899",
      badge: "Most Pretentious",
      image: "/lovable-uploads/f917b42f-257a-435e-a420-1da2c7b90741.png",
      pros: ["PhD-level sleep science", "Golden hexagon technology", "Awakens you to mattress freedom"],
      cons: ["Costs more than a Tesla", "Science is just marketing", "Freedom comes with monthly payments"],
      summary: "SLEEPOLOGY: Awaken to total mattress freedom (and total financial slavery). The only mattress with a PhD in taking your money."
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
