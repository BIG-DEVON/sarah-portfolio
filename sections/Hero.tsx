'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button'; 
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#FFF7ED] flex items-center justify-center overflow-hidden px-6 pt-24 pb-32 md:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100 via-white to-white opacity-60"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 md:gap-16">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-[#1F2937]">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight tracking-tight"
          >
            Sarah Osagie
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl font-body text-[#4B5563] max-w-xl"
          >
            I write words that do more than sell — they spark emotion, build trust, and move people to act. Let’s make your story unforgettable.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            <Button>
              Work with me <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
                {/* Right Content - Profile Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="flex-1 flex items-center justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-[6px] border-[#F97316]">
            <Image
              src="/assets/profile.jpg"
              alt="Sarah Osagie Profile"
              fill
              className="object-cover"
              priority
            />
            {/* Floating Ring Accent */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full border-4 border-orange-200 animate-pulse"></div>
          </div>

          {/* Artistic Shape (Optional) */}
          <div className="absolute -bottom-6 -left-8 w-36 h-36 bg-orange-100 rounded-full blur-2xl opacity-70 z-[-1]" />
        </motion.div>
      </div>
    </section>
  );
}
