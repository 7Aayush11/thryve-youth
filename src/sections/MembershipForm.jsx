import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, HeartHandshake, Send, Sparkles } from 'lucide-react';
import { gradeOptions, initialForm } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function MembershipForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  useEffect(() => {
    if (submitted) {
      document.getElementById('form-success')?.focus();
    }
  }, [submitted]);

  // ASSUMPTION: Replace this local-only submit handler with the client's backend or Google Form integration before production.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section join-section" id="join">
      <div className="section-shell join-grid">
        <div className="join-intro">
          <SectionHeading
            eyebrow="Membership"
            title="Join the team building a kinder future for teen mental health."
            description="Complete the membership form to help Thryve Youth grow its core team and shape upcoming awareness, volunteering, and community opportunities."
          />
          <Reveal delay={0.15} className="join-card">
            <span className="join-card-label">What to expect</span>
            <ul>
              <li>
                <Check size={18} aria-hidden="true" />
                Membership and volunteering discussions as events follow
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                Opportunities to support awareness and community initiatives
              </li>
              <li>
                <Check size={18} aria-hidden="true" />
                A youth-led space centered on empathy and advocacy
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.25} className="support-card">
            <HeartHandshake size={28} aria-hidden="true" />
            <div>
              <strong>You are not alone.</strong>
              <span>Thryve Youth exists to remind every young person that their story is bigger than a struggle.</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="form-shell" delay={0.15}>
          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <span>
                <Sparkles size={17} aria-hidden="true" />
                Thryve Youth Membership
              </span>
              <p>Fields marked * are required.</p>
            </div>

            <div className="field-row">
              <label className="field">
                <span>
                  First Name <em>*</em>
                </span>
                <input
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={updateField}
                  placeholder="Jane"
                  autoComplete="given-name"
                  required
                />
              </label>
              <label className="field">
                <span>
                  Last Name <em>*</em>
                </span>
                <input
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={updateField}
                  placeholder="Doe"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            <fieldset className="field grade-field">
              <legend>
                Grade <em>*</em>
              </legend>
              <div className="grade-options">
                {gradeOptions.map((grade) => (
                  <label key={grade} className={form.grade === grade ? 'selected' : ''}>
                    <input
                      type="radio"
                      name="grade"
                      value={grade}
                      checked={form.grade === grade}
                      onChange={updateField}
                      required
                    />
                    <span>{grade}</span>
                  </label>
                ))}
              </div>
              <AnimatePresence>
                {form.grade === 'Other' ? (
                  <motion.label
                    className="field other-grade"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <span>Please specify</span>
                    <input
                      name="otherGrade"
                      type="text"
                      value={form.otherGrade}
                      onChange={updateField}
                      placeholder="Grade, program, or role"
                    />
                  </motion.label>
                ) : null}
              </AnimatePresence>
            </fieldset>

            <label className="field">
              <span>Country or State (if in USA)</span>
              <input
                name="location"
                type="text"
                value={form.location}
                onChange={updateField}
                placeholder="Texas"
                autoComplete="address-level1"
              />
            </label>

            <div className="field-row">
              <label className="field">
                <span>
                  Email For Contact <em>*</em>
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="jane.doe@example.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="field">
                <span>Phone Number</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="field">
              <span>Why do you want to be a member of Thryve Youth?</span>
              <textarea
                name="reason"
                value={form.reason}
                onChange={updateField}
                placeholder="Share your motivation, experience, or the change you want to create."
                rows="5"
              />
            </label>

            {submitted ? (
              <div className="form-success" id="form-success" tabIndex="-1" role="status">
                <Check size={21} aria-hidden="true" />
                <div>
                  <strong>Thank you for your interest.</strong>
                  <span>Your membership details are ready for the Thryve Youth team.</span>
                </div>
              </div>
            ) : null}

            <button className="button button-primary form-submit" type="submit" disabled={submitted}>
              {submitted ? 'Interest submitted' : 'Submit membership interest'}
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
