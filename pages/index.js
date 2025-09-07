import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesCarousel from "../components/ServicesCarousel";
import ServicesSection from "../components/ServicesSection"; // ✅ detailed service list
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot"; 
import AboutPage from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesCarousel />   {/* visual / creative showcase */}
        <ServicesSection />    {/* detailed structured service list */}
        <WhyChoose />
        <Portfolio />
        <CTA />
        <Contact />
        <AboutPage />
      </main>
      <Footer />
      
      {/* Chatbot floating on all pages */}
      <Chatbot />
    </>
  );
}
