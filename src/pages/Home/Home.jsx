import AboutSection from "@sections/AboutSection/AboutSection";
import FeaturesSection from "@sections/FeaturesSection/FeaturesSection";
import HeroSection from "@sections/HeroSection/HeroSection";
import LogoSection from "@sections/LogoSection/LogoSection";
import NewsSection from "@sections/NewsSection/NewsSection";
import ProjectsSection from "@sections/ProjectsSection/ProjectsSection";
import ServicesSection from "@sections/ServicesSection/ServicesSection";
import SignUpSection from "@sections/SignUpSection/SignUpSection";
import TeamSection from "@sections/TeamSection/TeamSection";
import TestimonialSection from "@sections/TestimonialSection/TestimonialSection";
import WhyUsSection from "@sections/WhyUsSection/WhyUsSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <LogoSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialSection />
      <NewsSection />
      <SignUpSection />
    </main>
  );
};

export default Home;
