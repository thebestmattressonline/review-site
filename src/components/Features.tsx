
import { Shield, Clock, Users, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Actually Honest Reviews",
      description: "We tell you the truth about mattresses because we're not getting paid by Big Mattress (yet)."
    },
    {
      icon: Clock,
      title: "365-Night Reality Check",
      description: "We sleep on mattresses long enough to realize they're just expensive rectangles that don't solve life problems."
    },
    {
      icon: Users,
      title: "Real Human Feedback",
      description: "We collect reviews from actual humans, not bots programmed to say 'life-changing' every other sentence."
    },
    {
      icon: Award,
      title: "Sarcasm-Based Methodology",
      description: "Our rigorous testing process includes rolling our eyes at marketing claims and asking 'but is it worth it though?'"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why We're Different (And Better)
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlike other mattress review sites, we actually tell you the truth instead of whatever gets us the biggest commission check
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
