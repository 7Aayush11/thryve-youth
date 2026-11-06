import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const words = ['Awareness', 'Support', 'Community', 'Advocacy', 'Belonging', 'Change'];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>
            {word}
            <Sparkles size={18} />
          </span>
        ))}
      </div>
    </div>
  );
}
