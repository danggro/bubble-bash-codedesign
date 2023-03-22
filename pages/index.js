import SectionContact from "@/components/Contact/SectionContact";
import Container from "@/components/Container";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import SectionHeroImage from "@/components/Hero/SectionHeroImage";
import NavBar from "@/components/Nav/NavBar";
import SectionProject from "@/components/Projects/SectionProject";
import SectionService from "@/components/Service/SectionService";
import SectionTestimonial from "@/components/Testimonial/SectionTestimonial";

export default function Home() {
  return (
    <>
      <div className="w-screen pt-6 bg-green bg-hero">
        <NavBar />
        <SectionHero />
      </div>
      <SectionHeroImage />
      <SectionService />
      <SectionProject />
      <SectionTestimonial />
      <SectionContact />
      <Footer />
    </>
  );
}
