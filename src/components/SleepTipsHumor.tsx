
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Coffee, Zap, Laugh, Brain, Heart } from "lucide-react";

const SleepTipsHumor = () => {
  const sleepTips = [
    {
      icon: Moon,
      tip: "Go to bed at the same time every night",
      reality: "Unless Netflix releases a new season of your favorite show",
      meme: "Me: I'll go to bed early tonight\nAlso me at 2 AM: Just one more episode..."
    },
    {
      icon: Coffee,
      tip: "Avoid caffeine 6 hours before bedtime",
      reality: "Coffee is a food group and we will not be taking questions",
      meme: "Sleep experts: No caffeine after 2 PM\nMe: *drinks espresso at 11 PM* This sign can't stop me because I can't read"
    },
    {
      icon: Brain,
      tip: "Keep your bedroom cool and dark",
      reality: "Your partner likes it warm and bright, so good luck with that",
      meme: "Me: *adjusts thermostat to 65°F*\nMy partner: *changes it to 75°F*\nThe thermostat: 👁️👄👁️"
    },
    {
      icon: Heart,
      tip: "Exercise regularly for better sleep",
      reality: "Walking to the fridge counts as cardio, right?",
      meme: "Sleep tip: Exercise 4 hours before bed\nMe: *does jumping jacks at 11:55 PM*"
    },
    {
      icon: Zap,
      tip: "No screens 1 hour before bed",
      reality: "But how will I know what my high school acquaintances had for dinner?",
      meme: "Sleep hygiene: No phones in bed\nMe: *types this while lying in bed at midnight*"
    },
    {
      icon: Laugh,
      tip: "Create a relaxing bedtime routine",
      reality: "Panicking about tomorrow's responsibilities is my routine",
      meme: "My bedtime routine:\n1. Brush teeth\n2. Remember everything I forgot to do today\n3. Panic\n4. Repeat"
    }
  ];

  const sleepMemes = [
    {
      title: "The 8-Hour Sleep Myth",
      content: "Sleep experts: 'You need 8 hours of sleep'\nParents: 'You guys are getting sleep?'"
    },
    {
      title: "Weekend Sleep Schedule",
      content: "Monday-Friday: *goes to bed at 10 PM*\nFriday night: 'It's time to party until 3 AM and ruin my entire sleep schedule'"
    },
    {
      title: "The Pillow Flip",
      content: "Nobody:\nAbsolutely nobody:\nMe at 3 AM: *flips pillow to the cool side*\n'Ah yes, this will fix everything'"
    },
    {
      title: "Sleep Position Reality",
      content: "How I think I sleep: 😴\nHow I actually sleep: 🥨"
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sleep Tips That Actually Make Sense
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finally, sleep advice that acknowledges you're a real human being, not a perfect sleep robot
          </p>
        </div>
        
        {/* Sleep Tips with Reality Check */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sleepTips.map((tip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <tip.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <Badge variant="secondary" className="text-xs">Expert Advice</Badge>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-green-600 mb-2 text-sm">The Tip:</h3>
                  <p className="text-sm text-gray-700 mb-3">"{tip.tip}"</p>
                  
                  <h3 className="font-semibold text-red-600 mb-2 text-sm">Reality:</h3>
                  <p className="text-sm text-gray-700 mb-3 italic">{tip.reality}</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 whitespace-pre-line">{tip.meme}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sleep Memes Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sleep Memes That Hit Different at 3 AM</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sleepMemes.map((meme, index) => (
            <Card key={index} className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-purple-600 mb-3">{meme.title}</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 whitespace-pre-line font-mono">{meme.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-purple-600 mb-4">Pro Tip from the Pros</h4>
              <p className="text-gray-700 italic">
                "The best sleep tip is to stop reading sleep tips at 2 AM and just go to bed. 
                Your mattress doesn't care if it's the 'perfect' one - it just wants you to lie down and stop overthinking everything."
              </p>
              <p className="text-sm text-purple-600 mt-4 font-semibold">- The Only Sleep Advice You Actually Need</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SleepTipsHumor;
