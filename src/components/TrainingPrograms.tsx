import cardioStrengthImage from "@/assets/cardio-strength.jpg";
import weightLiftingImage from "@/assets/weight-lifting.jpg";
import bodyBalanceImage from "@/assets/body-balance.jpg";
import muscleStretchingImage from "@/assets/muscle-stretching.jpg";
import yogaMeditationImage from "@/assets/yoga-meditation.jpg";
import beginnerPilatesImage from "@/assets/beginner-pilates.jpg";

const TrainingPrograms = () => {
  const programs = [
    {
      title: "Cardio Strength",
      description: "High-intensity cardio combined with strength training for maximum calorie burn and muscle building.",
      image: cardioStrengthImage,
    },
    {
      title: "Weight Lifting",
      description: "Professional weight training programs designed to build muscle mass and increase overall strength.",
      image: weightLiftingImage,
    },
    {
      title: "Body Balance",
      description: "Improve stability, coordination, and core strength with our specialized balance training routines.",
      image: bodyBalanceImage,
    },
    {
      title: "Muscle Stretching",
      description: "Enhance flexibility and prevent injuries with our comprehensive stretching and mobility programs.",
      image: muscleStretchingImage,
    },
    {
      title: "Yoga & Meditation",
      description: "Find inner peace and physical harmony through our guided yoga and meditation sessions.",
      image: yogaMeditationImage,
    },
    {
      title: "Beginner Pilates",
      description: "Perfect introduction to Pilates focusing on core strength, posture, and controlled movements.",
      image: beginnerPilatesImage,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold text-lg font-semibold tracking-wider uppercase mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Training <span className="text-gold">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of professional training programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group bg-card border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-gold-bright transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;