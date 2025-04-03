import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PersonalCard from '../components/PersonalCard';

export default function AppRoute() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Personal Digital Card Section */}
      <PersonalCard />
      
      {/* Main Landing Page Content */}
      <div id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
} 