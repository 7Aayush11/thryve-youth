import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Brain, MapPin, Sparkles } from 'lucide-react';
import LogoMark from '../components/LogoMark.jsx';
import { revealTransition } from '../data/animation.js';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0, 0.18], [0, 90]);
  const copyY = useTransform(scrollYProgress, [0, 0.18], [0, 35]);

  return (
    <section className="hero" id="top">
      <div className="hero-ambient" aria-hidden="true">
        <span className="ambient-orb orb-one" />
        <span className="ambient-orb orb-two" />
        <span className="ambient-orb orb-three" />
        <span className="grain" />
      </div>

      <motion.div className="hero-grid" style={{ y: copyY }}>
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: 0.1 }}
        >
          <span className="hero-eyebrow">
            <Sparkles size={18} aria-hidden="true" />
            Youth-led teen mental health awareness
          </span>
          <h1>
            Young minds deserve room to <span>breathe, belong,</span> and grow.
          </h1>
          <p>
            Thryve Youth is building a supportive community where young people can
            overcome mental health challenges, break stigma, and lead meaningful change.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#join">
              Become a member
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#mission">
              Explore our mission
            </a>
          </div>
          <div className="hero-meta" aria-label="Organization highlights">
            <span>
              <MapPin size={16} aria-hidden="true" />
              Austin, Texas
            </span>
            <span>
              <Brain size={16} aria-hidden="true" />
              Awareness-first community
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...revealTransition, delay: 0.25 }}
        >
          <div className="orbit-wrap" aria-hidden="true">
            <svg className="orbit-text" viewBox="0 0 220 220">
              <defs>
                <path
                  id="orbit-circle"
                  d="M110,110 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"
                />
              </defs>
              <text>
                <textPath href="#orbit-circle">
                  AWARENESS • SUPPORT • COMMUNITY • ADVOCACY •
                </textPath>
              </text>
            </svg>
            <div className="orbit-center">
              <LogoMark />
            </div>
          </div>

          <div className="hero-card">
            <span className="card-label">Our promise</span>
            <blockquote>“You are more than a mental health struggle.”</blockquote>
            <div className="card-signals" aria-label="Thryve Youth values">
              <span>
                <i />
                Stigma-free
              </span>
              <span>
                <i />
                Youth-led
              </span>
              <span>
                <i />
                Community-powered
              </span>
            </div>
          </div>

          <div className="floating-chip chip-one">Peer support</div>
          <div className="floating-chip chip-two">Advocacy</div>
        </motion.div>
      </motion.div>

      <div className="scroll-cue" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  );
}
