import { motion } from 'framer-motion';
import { revealTransition } from '../data/animation.js';
export default function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
