import { TrendingUp, Dumbbell, Apple, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Progression",
      description: "Track your fitness journey with our advanced monitoring system and personalized progress reports."
    },
    {
      icon: Dumbbell,
      title: "Workout Programs",
      description: "Professionally designed training programs tailored to your fitness level and goals."
    },
    {
      icon: Apple,
      title: "Nutrition Plans",
      description: "Custom meal plans and nutritional guidance to fuel your fitness transformation."
    },
    {
      icon: Shield,
      title: "Self Defence Training",
      description: "Learn practical self-defense techniques while building confidence and strength."
    }
  ];

  return (
    <section className="py-20 bg-gradient-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gold">Gold Star Gym</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the premier fitness destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card border border-gold/20 rounded-lg p-6 text-center hover:border-gold/40 hover:shadow-gold transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;