import { Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }) {
  return (
    <Reveal className={`section-heading ${align === 'center' ? 'center' : ''} ${dark ? 'dark' : ''}`}>
      <span className="section-eyebrow">
        <Sparkles size={16} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Reveal>
  );
}
