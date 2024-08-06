import FeaturesSection from "@/components/platform/LandingPage/FeatureSection";
import HeroSection from "@/components/platform/LandingPage/HeroSection";
import ShowcaseSection from "@/components/platform/LandingPage/ShowcaseSection";
import StatisticsSection from "@/components/platform/LandingPage/StatisticsSection";
import TestimonialsSection from "@/components/platform/LandingPage/TestimonialsSection";
import CallToActionSection from "@/components/platform/LandingPage/CallToAction";
import Footer from "@/components/platform/LandingPage/Footer";
import {
  testimonials,
  showcases,
  features,
  statistics,
} from "@/utils/platformLandingData";
import AppBarSection from "@/components/platform/LandingPage/AppBarSection";
import { Container } from "@mui/material";

export default function LandingPage() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: { xxs: "100vw", md: 1000, lg: 1200 },
      }}
    >
      <AppBarSection />
      <HeroSection />
      <section id="showcase">
        <ShowcaseSection showcases={showcases} />
      </section>

      <section id="features">
        <FeaturesSection features={features} />
      </section>

      <section id="testimonials">
        <TestimonialsSection testimonials={testimonials} />
      </section>

      <StatisticsSection statistics={statistics} />

      <CallToActionSection />
      <Footer />
    </Container>
  );
}
