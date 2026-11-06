import { ArrowRightCircle, Mail, MapPin } from 'lucide-react';
import { navItems } from '../data/content.js';
import LogoMark from './LogoMark.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="Thryve Youth home">
            <LogoMark />
            <span>
              <strong>Thryve</strong>
              <small>Youth</small>
            </span>
          </a>
          <p>
            A youth-led organization committed to breaking the stigma around adolescent mental health.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <span>
            <MapPin size={16} aria-hidden="true" />
            Austin, Texas
          </span>
          <a href="https://www.instagram.com/thryve.youth/" target="_blank" rel="noreferrer">
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
            @thryve.youth
          </a>
          {/* ASSUMPTION: Replace this placeholder contact address with the client's official email. */}
          <a href="mailto:hello@thryveyouth.org">
            <Mail size={16} aria-hidden="true" />
            hello@thryveyouth.org
          </a>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <p>© {new Date().getFullYear()} Thryve Youth. All rights reserved.</p>
        <p>You are more than a mental health struggle.</p>
      </div>
    </footer>
  );
}
