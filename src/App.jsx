import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Marquee from './sections/Marquee.jsx';
import Mission from './sections/Mission.jsx';
import FocusAreas from './sections/FocusAreas.jsx';
import Pathway from './sections/Pathway.jsx';
import MembershipForm from './sections/MembershipForm.jsx';
import Faq from './sections/FAQ.jsx';
import FinalCta from './sections/FinalCTA.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="app">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><Marquee /><Mission /><FocusAreas /><Pathway />
        <MembershipForm /><Faq /><FinalCta />
      </main>
      <Footer />
    </div>
  );
}
