'use client';

// import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  reversed?: boolean;
}

const projects: Project[] = [
  {
    title: 'Brand Voice for Elara Beauty',
    description:
      'Developed a vibrant and relatable brand voice for Elara Beauty’s product launch campaign. The result? 3x increase in customer engagement and a 22% boost in conversions.',
    image: '/assets/projects/elara.jpg',
    link: 'https://example.com/elara',
    tags: ['Branding', 'Copywriting', 'Strategy'],
  },
  {
    title: 'Conversion Copy for Kresto Finance',
    description:
      'Crafted high-converting website copy and email sequences for Kresto Finance. Helped drive $50K in new client signups within the first 45 days of campaign launch.',
    image: '/assets/projects/kresto.jpg',
    link: 'https://example.com/kresto',
    tags: ['Fintech', 'Landing Page', 'Email Copy'],
    reversed: true,
  },
];  export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#FFF7ED] py-24 px-6 md:px-12 text-[#1F2937]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-header mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                project.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-display">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg font-body text-[#4B5563]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 font-accent text-[#F97316] hover:underline"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>


                     {/* View All Projects CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-base rounded-full bg-[#F97316] text-white hover:bg-[#ea630a] transition-colors duration-300 font-semibold shadow-md"
            >
            See All Projects <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>

        </motion.div>
      </div>
    </section>
  );
}
