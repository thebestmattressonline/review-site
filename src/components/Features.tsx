
import { Shield, Clock, Users, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Unbiased Reviews",
      description: "We purchase and test every mattress ourselves to provide honest, independent reviews."
    },
    {
      icon: Clock,
      title: "365-Night Testing",
      description: "Our experts sleep on each mattress for a full year to evaluate long-term comfort and durability."
    },
    {
      icon: Users,
      title: "Real Customer Feedback",
      description: "We collect and analyze thousands of verified customer reviews to supplement our testing."
    },
    {
      icon: Award,
      title: "Expert Methodology",
      description: "Our rigorous testing process evaluates 15+ factors including comfort, support, and value."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Trust Our Reviews?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive testing process ensures you get the most accurate and helpful mattress reviews
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
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
