import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000" 
          alt="Parallax Background" 
          className="w-full h-[140%] object-cover opacity-40 dark:opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-slate-950 dark:via-transparent dark:to-slate-950" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[3rem] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-slate-800/20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            Ready to Build Your <br />
            <span className="kumo-gradient-text">Private AI Future?</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Join the world's leading enterprises that trust Kumo AI to deliver secure, 
            sovereign, and scalable AI solutions.
          </p>
          <a
            href="#contact"
            className="px-10 py-5 rounded-full bg-sky-blue text-white font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-sky-blue/20"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
