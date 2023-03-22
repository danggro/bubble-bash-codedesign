import SectionContact from "@/components/Contact/SectionContact";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import SectionHeroImage from "@/components/Hero/SectionHeroImage";
import NavBar from "@/components/Nav/NavBar";
import SectionProject from "@/components/Projects/SectionProject";
import SectionService from "@/components/Service/SectionService";
import SectionTestimonial from "@/components/Testimonial/SectionTestimonial";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubble Bash</title>
      </Head>
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
