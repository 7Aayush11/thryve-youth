import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Menu, X as XIcon } from 'lucide-react';
import { navItems } from '../data/content.js';
import LogoMark from './LogoMark.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Thryve Youth home">
          <LogoMark />
          <span>
            <strong>Thryve</strong>
            <small>Youth</small>
          </span>
        </a>

        <div className="nav-links" aria-label="Primary links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-join" href="#join">
            Join us
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <XIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-join" href="#join" onClick={() => setOpen(false)}>
              Become a member
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
