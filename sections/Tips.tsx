'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tips = [
  "Write like you’re having a conversation, not a performance.",
  "Clarity is always more powerful than cleverness.",
  "Your headline has one job: make them want to read the next line.",
  "Every word should earn its place. Cut the fluff.",
  "Good copy is invisible — the message shines, not the writer.",
  "Don’t sell a product. Sell a feeling, a vision, a transformation.",
  "Your first draft is just thinking on paper — edit ruthlessly.",
  "Speak to one person. One real, specific human.",
];

export default function Tips() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 5000); // show each tip for 5s
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full bg-[#FDF4EB] py-24 px-6 md:px-12 border-t border-orange-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-header text-[#1F2937] mb-10 flex items-center justify-center gap-3">
          ✨ Copywriting Tips
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            🖋️
          </motion.span>
        </h2>

        {/* Rotating Tip Text */}
        <div className="relative h-24 md:h-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl font-body text-[#4B5563] px-6 bg-white/80 backdrop-blur-md py-6 rounded-xl shadow-md max-w-2xl mx-auto border border-orange-100"
            >
              {tips[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <a
            href="#contact"
            className="inline-block font-display text-white bg-[#FF6200] hover:bg-[#e55a00] transition-colors px-6 py-3 rounded-full text-lg shadow-lg"
          >
            Want words like these working for you? Let’s Talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
