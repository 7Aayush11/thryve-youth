import { ArrowRight, Sparkles } from 'lucide-react';
import { pathwaySteps, buildingNow } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Pathway() {
  return (
    <section className="section path-section" id="path">
      <div className="section-shell">
        <div className="path-layout">
          <div className="path-sticky">
            <SectionHeading
              dark
              eyebrow="How we move forward"
              title="Small conversations can become community-wide change."
              description="Thryve Youth is currently building its core team and shaping its first projects with members."
            />
            <Reveal delay={0.2}>
              <a className="button button-light" href="#join">
                Help shape what comes next
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="path-content">
            <div className="steps-list">
              {pathwaySteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.12} className="step-item">
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="building-panel">
              <Reveal>
                <div className="panel-heading">
                  <span>
                    <Sparkles size={16} aria-hidden="true" />
                    Building now
                  </span>
                  <h3>Designed with members, for real impact.</h3>
                </div>
              </Reveal>
              <div className="building-grid">
                {buildingNow.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 0.1}>
                      <article className="building-card">
                        <div>
                          <Icon size={21} aria-hidden="true" />
                          <span>{item.label}</span>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.copy}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
