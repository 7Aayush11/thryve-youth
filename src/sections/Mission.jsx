import { Brain } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import LogoMark from '../components/LogoMark.jsx';

export default function Mission() {
  return (
    <section className="section mission-section" id="mission">
      <div className="section-shell mission-grid">
        <div>
          <SectionHeading
            eyebrow="Why we exist"
            title="Mental health conversations should feel safer, sooner."
            description="Thryve Youth exists to break the stigma surrounding adolescent mental health by fostering a supportive community and empowering young people to thrive."
          />
          <div className="mission-copy">
            <Reveal delay={0.1}>
              <p>
                We believe early awareness can change how a young person understands
                themselves and reaches for support. Our work is centered on compassion,
                open conversation, and community action led by the people it serves.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mission-note">
              <Brain size={24} aria-hidden="true" />
              <div>
                <strong>Rooted in a simple truth</strong>
                <span>No one should be defined by a mental health challenge.</span>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mission-art" delay={0.15}>
          <div className="mission-art-card">
            <span className="art-kicker">The change we want</span>
            <h3>From quiet struggle to shared strength.</h3>
            <div className="growth-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="art-footer">
              <LogoMark />
              <p>Reshaping the future of youth mental health advocacy.</p>
            </div>
          </div>
          <div className="art-badge badge-top">Listen</div>
          <div className="art-badge badge-bottom">Thryve</div>
        </Reveal>
      </div>
    </section>
  );
}
