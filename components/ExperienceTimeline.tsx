
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const calculateDurationMonths = (start: string, end?: string): number => {
  const startDate = new Date(start);
  const endDate = end === 'Present' || !end ? new Date() : new Date(end);
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  return Math.max((years * 12 + months), 3); 
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  // Height multiplier for the timeline segment
  const BASE_HEIGHT = 120;
  const MULTIPLIER = 8; 

  return (
    <div className="relative pl-4 md:pl-0">
      {experiences.map((exp, idx) => {
        const duration = calculateDurationMonths(exp.startDate, exp.endDate);
        // We use the dynamic height to determine the visual space this experience occupies
        const dynamicHeight = Math.min(Math.max(BASE_HEIGHT + duration * MULTIPLIER, 150), 500);
        const isPresent = exp.endDate === 'Present' || !exp.endDate;

        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative grid grid-cols-[auto_1fr] md:grid-cols-[120px_auto_1fr] gap-8 group"
            style={{ minHeight: `${dynamicHeight}px` }}
          >
            {/* 1. Date Column (Hidden on mobile, shown on md) */}
            <div className="hidden md:flex flex-col items-end pt-2 text-right">
              <span className={`text-xs font-bold tracking-widest uppercase mb-1 ${isPresent ? 'text-white' : 'text-neutral-500'}`}>
                {exp.endDate === 'Present' ? 'Now' : new Date(exp.endDate!).toLocaleDateString('en-US', { year: '2-digit', month: 'short' })}
              </span>
              <span className="text-[10px] text-neutral-600 font-mono">
                {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric' })}
              </span>
            </div>

            {/* 2. Timeline Graphic */}
            <div className="relative flex flex-col items-center">
              {/* Dot */}
              <div className={`w-3 h-3 rounded-full border-2 z-10 transition-colors duration-500
                ${isPresent 
                  ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' 
                  : 'bg-[#050505] border-neutral-700 group-hover:border-neutral-400'
                }`} 
              />
              {/* Line */}
              <div 
                className={`w-px flex-1 mt-2 mb-2 transition-colors duration-500 ${isPresent ? 'bg-gradient-to-b from-blue-500/50 to-neutral-800' : 'bg-neutral-800 group-hover:bg-neutral-700'}`}
              ></div>
            </div>

            {/* 3. Content Area */}
            <div className="pb-16 pt-1 pr-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {exp.role}
              </h3>
              <div className="text-lg text-neutral-500 mb-6 flex items-center gap-2">
                 {exp.company}
              </div>

              <div className="space-y-3 mb-8">
                {exp.description.map((point, i) => (
                  <p key={i} className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {point}
                  </p>
                ))}
              </div>

              {/* Minimal Tags */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                {exp.tags.map(tag => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
