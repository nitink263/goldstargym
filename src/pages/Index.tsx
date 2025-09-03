import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrainingPrograms from "@/components/TrainingPrograms";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Gold Star Gym - Premium Fitness Center | Build to Sweat, Built to Shine";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform your fitness journey at Gold Star Gym. Premium training programs, expert coaches, and state-of-the-art equipment. Join since 2005. Build to Sweat, Built to Shine.");
    }

    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "gold star gym, fitness center, premium gym, personal training, weight lifting, cardio, yoga, pilates, nutrition plans, self defense";
    document.head.appendChild(metaKeywords);

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "GymAndFitnessCenter",
      "name": "Gold Star Gym",
      "description": "Premium fitness center offering personal training, group classes, and specialized programs since 2005",
      "url": window.location.href,
      "telephone": "+1-555-123-4567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Fitness Street",
        "addressLocality": "Downtown District",
        "addressRegion": "State",
        "postalCode": "12345"
      },
      "openingHours": "Mo-Fr 05:00-23:00,Sa-Su 06:00-22:00",
      "amenityFeature": [
        "Weight Training Area",
        "Cardio Equipment",
        "Group Fitness Classes",
        "Personal Training",
        "Nutrition Coaching"
      ]
    };

    const script = document.createElement('script');
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingKeywords = document.querySelector('meta[name="keywords"]');
      if (existingKeywords) {
        document.head.removeChild(existingKeywords);
      }
      const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
      if (existingStructuredData) {
        document.head.removeChild(existingStructuredData);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <TrainingPrograms />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
