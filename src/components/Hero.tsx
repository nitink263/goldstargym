import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep/90 via-black-deep/70 to-black-deep/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <span className="text-gold text-lg font-semibold tracking-wider uppercase">
              Since 2005
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">BUILD TO</span>
            <br />
            <span className="text-gold">SWEAT,</span>
            <br />
            <span className="text-foreground">BUILT TO</span>
            <br />
            <span className="text-gold">SHINE</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in delay-300">
            Transforming fitness into a lifestyle. Experience premium training in our state-of-the-art facility.
          </p>

          <div className="animate-fade-in delay-500">
            <Button 
              size="lg"
              className="bg-gradient-gold text-black font-bold text-lg px-8 py-4 hover:shadow-gold-strong hover:scale-105 transition-all duration-300"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;