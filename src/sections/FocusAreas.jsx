import { ArrowUpRight } from 'lucide-react';
import { focusAreas } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function FocusAreas() {
  return (
    <section className="section focus-section" id="focus">
      <div className="section-shell">
        <SectionHeading
          align="center"
          eyebrow="What we cultivate"
          title="A community designed around care, courage, and action."
          description="Three connected priorities guide the Thryve Youth experience as the team builds its first initiatives."
        />
        <div className="focus-grid">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={index * 0.12}>
                <article className={`focus-card accent-${area.accent}`}>
                  <div className="focus-icon">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <span>{area.eyebrow}</span>
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                  <ArrowUpRight className="focus-arrow" size={22} aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
