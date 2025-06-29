
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      rating: 5,
      text: "Finally, a mattress review site that doesn't pretend sleeping on foam will cure my existential dread. Bought the cheapest one they recommended and guess what? I still have problems, but at least I'm not broke.",
      mattress: "Generic Foam Thing"
    },
    {
      name: "Mike C.",
      rating: 5,
      text: "These guys saved me from spending $3000 on a 'revolutionary sleep system.' Turns out my old mattress was fine, I just needed to go to bed before 2 AM. Who knew?",
      mattress: "My Old Mattress"
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "Their review told me that no mattress would fix my back problems and I should see a doctor instead. Best medical advice I've gotten from a mattress website. 10/10 would recommend.",
      mattress: "Physical Therapy"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Real People Actually Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from people who appreciated our brutal honesty (and saved money)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-600 mb-4" />
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-purple-600">Purchased: {testimonial.mattress}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
