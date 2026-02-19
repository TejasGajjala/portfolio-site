
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight, MoveDown, Star, ArrowRight } from 'lucide-react';
import { EXPERIENCES, EDUCATION, SKILLS } from './constants';
import ExperienceTimeline from './components/ExperienceTimeline';

const App: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('profile.jpg');

  const handleImageError = () => {
    setImageSrc('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans selection:bg-white selection:text-black">
      
      {/* Subtle Grain/Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-start z-50 pointer-events-none mix-blend-difference">
        <div className="text-white font-bold text-xl tracking-tight pointer-events-auto">
          Tejas Gajjala<span className="text-blue-500">.</span>
        </div>
        <div className="flex flex-col items-end gap-1 pointer-events-auto">
          <a href="mailto:tejasgajjala@gmail.com" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">Contact</a>
          <span className="text-[10px] text-neutral-500">Based in Hyderabad</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] leading-[0.85] font-bold text-white tracking-tighter mb-12">
              Human<br/>
              Centric<br/>
              <span className="text-neutral-700">Design.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-5 md:col-start-8">
                 <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed mb-8">
                   I architect high-impact digital products at the intersection of <span className="text-white">Design Systems</span> and <span className="text-white">Human Behavior</span>.
                 </p>
                 <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-500 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Available for hire
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="absolute bottom-10 left-6 md:left-12"
          >
            <MoveDown className="text-white animate-bounce" />
          </motion.div>
        </section>

        {/* NARRATIVE PROJECT SECTION: Miracle of Mind */}
        <section className="py-32 md:py-48 border-t border-neutral-900">
          
          {/* Chapter 1: The Context */}
          <div className="mb-24 md:mb-32">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 block">01 — The Context</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 max-w-3xl">
              Mental health is the silent pandemic of our generation.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-neutral-800 pt-12">
              {[
                { 
                  val: "50%", 
                  desc: "Population will experience a mental disorder.", 
                  src: "Harvard Medical School",
                  link: "https://hms.harvard.edu/news/half-worlds-population-will-experience-mental-health-disorder"
                },
                { 
                  val: "1 in 2", 
                  desc: "Adults report experiencing loneliness.", 
                  src: "USA Dept. of Health",
                  link: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf"
                },
                { 
                  val: "40s", 
                  desc: "Frequency of suicide deaths globally.", 
                  src: "World Health Org",
                  link: "https://www.who.int/news/item/09-09-2019-suicide-one-person-dies-every-40-seconds"
                }
              ].map((stat, i) => (
                <a 
                  key={i} 
                  href={stat.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block cursor-pointer"
                >
                  <div className="text-5xl md:text-7xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">
                    {stat.val}
                  </div>
                  <p className="text-neutral-400 text-lg mb-4">{stat.desc}</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">
                    {stat.src} <ArrowUpRight size={12} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Chapter 2: The Solution */}
          <div className="mb-24 md:mb-32">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                   <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-4 block">02 — The Solution</span>
                   <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter">Miracle<br/>of Mind.</h2>
                </div>
                <div className="text-right md:text-left mt-8 md:mt-0">
                   <p className="text-xl text-white max-w-sm mb-4">A revolutionary platform bridging ancient wisdom with modern UX.</p>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Isha Foundation</span>
                </div>
             </div>
             
             <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-900 overflow-hidden relative group">
                <img 
                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
                   alt="App Interface"
                   className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
             </div>
          </div>

          {/* Chapter 3: Impact & Contribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
             <div>
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 block">03 — Contribution</span>
                <div className="space-y-12">
                   <div>
                      <h3 className="text-2xl text-white font-bold mb-2">Strategic Launch</h3>
                      <p className="text-neutral-400 leading-relaxed">Orchestrated UX strategy for high-load launch, ensuring zero downtime UX during peak traffic.</p>
                   </div>
                   <div>
                      <h3 className="text-2xl text-white font-bold mb-2">Growth Systems</h3>
                      <p className="text-neutral-400 leading-relaxed">Designed gamification loops that increased retention by 8% and activation by 15%.</p>
                   </div>
                </div>
             </div>

             <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-6 block">04 — The Impact</span>
                <div className="space-y-12">
                   <div className="flex items-baseline gap-4 border-b border-neutral-900 pb-8">
                      <span className="text-6xl md:text-8xl font-bold text-white">#1</span>
                      <span className="text-xl text-neutral-500">Health & Fitness</span>
                   </div>
                   <div className="flex items-baseline gap-4 border-b border-neutral-900 pb-8">
                      <span className="text-6xl md:text-8xl font-bold text-white">1M+</span>
                      <span className="text-xl text-neutral-500">Downloads (15h)</span>
                   </div>
                   <div className="flex items-baseline gap-4 border-b border-neutral-900 pb-8">
                      <span className="text-6xl md:text-8xl font-bold text-white">4.9</span>
                      <span className="text-xl text-neutral-500">Avg. Rating</span>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section className="py-32 md:py-48 border-t border-neutral-900 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 block">Career</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Selected<br/>Works.</h2>
                <p className="text-neutral-500 max-w-xs leading-relaxed mb-12">
                   A timeline of my professional journey. The vertical space represents the duration and depth of each role.
                </p>
                
                {/* Minimal Profile Snippet */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800">
                    <img src={imageSrc} onError={handleImageError} alt="Tejas" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Tejas Gajjala</div>
                    <div className="text-neutral-500 text-xs">Product Designer</div>
                  </div>
                </div>
             </div>
          </div>
          <div className="lg:col-span-8">
            <ExperienceTimeline experiences={EXPERIENCES} />
          </div>
        </section>

        {/* INFO / FOOTER */}
        <section className="py-32 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-2 gap-16">
           <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 block">Capabilities</span>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                 {SKILLS.map(skill => (
                    <span key={skill} className="text-xl md:text-2xl text-white hover:text-blue-500 transition-colors cursor-default">{skill}</span>
                 ))}
              </div>
           </div>

           <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6 block">Education</span>
              <ul className="space-y-6">
                 {EDUCATION.map((edu, i) => (
                    <li key={i}>
                       <div className="text-xl text-white font-medium">{edu.school}</div>
                       <div className="text-neutral-500">{edu.degree}</div>
                    </li>
                 ))}
              </ul>
           </div>
        </section>

        <footer className="py-20 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
           <a href="mailto:tejasgajjala@gmail.com" className="text-4xl md:text-6xl font-bold text-white hover:text-blue-500 transition-colors tracking-tighter">
              Let's Talk <ArrowRight className="inline-block ml-2 mb-1" size={40} />
           </a>
           
           <div className="flex gap-8">
              <a href="https://linkedin.com" className="text-neutral-500 hover:text-white uppercase text-xs font-bold tracking-widest">LinkedIn</a>
              <a href="mailto:tejasgajjala@gmail.com" className="text-neutral-500 hover:text-white uppercase text-xs font-bold tracking-widest">Email</a>
              <span className="text-neutral-700 uppercase text-xs font-bold tracking-widest">© 2025</span>
           </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
