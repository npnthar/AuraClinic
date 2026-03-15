import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-sans bg-[#fdf8f5]">
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="portfolio"><PortfolioSection /></section>
      <section id="services"><ServicesSection /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
    </div>
  );
}