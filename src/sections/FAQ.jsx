import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${item.question.replaceAll(' ', '-')}-panel`}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <ChevronDown size={21} aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={`${item.question.replaceAll(' ', '-')}-panel`}
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p>{item.answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-shell faq-grid">
        <SectionHeading
          eyebrow="Questions"
          title="Good questions make stronger communities."
          description="A few essentials for students and families exploring Thryve Youth."
        />
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.08}>
              <FaqItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
