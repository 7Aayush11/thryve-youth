import { ArrowRight, ArrowRightCircle, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="section-shell">
        <Reveal className="cta-panel">
          <div>
            <span>
              <Sparkles size={17} aria-hidden="true" />
              Your voice matters
            </span>
            <h2>Ready to help change the story around teen mental health?</h2>
            <p>
              Join the community, share the mission, and help Thryve Youth grow from its first conversation into lasting impact.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="#join">
              Become a member
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href="https://www.instagram.com/thryve.youth/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
              Follow @thryve.youth
            </a>
          </div>
          <div className="cta-orb" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
