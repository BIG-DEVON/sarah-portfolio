'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FFF7ED] text-[#1F2937] px-6 py-24 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-header mb-6">
            Who I Am
          </h2>

          <p className="text-lg font-body leading-relaxed text-[#4B5563] mb-6 max-w-xl">
            I’m Sarah Osagie, a passionate copywriter who blends storytelling with strategy.
            Whether it’s for startups or legacy brands, I help you speak with clarity, charm,
            and confidence. Let’s craft words that truly <span className="italic">connect</span>.
          </p>

          <Button>
            See My Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
                    {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 flex items-center justify-center relative"
        >
          {/* Artistic Blob Background */}
          <div className="absolute w-80 h-80 md:w-[22rem] md:h-[22rem] bg-orange-100/60 rounded-full blur-3xl -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />

          {/* Optional Image or Icon */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-orange-200">
            
            <Image
                src="/assets/sarah.jpg"
                alt="Sarah Osagie"
                width={500}
                height={500}
                className="..." 
            />

          </div>

          {/* Floating Accent Icon (Optional) */}
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-200 rounded-full opacity-80 animate-pulse z-0" />
        </motion.div>
      </div>
    </section>
  );
}
