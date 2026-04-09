import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background Layers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-lavender/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 dark:opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-blue/10 text-sky-blue border border-sky-blue/20 mb-8"
        >
          <Shield size={16} />
          <span className="text-sm font-bold tracking-wide uppercase">Enterprise-Grade Private AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block"
          >
            Your Data.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="kumo-gradient-text block"
          >
            Your Intelligence.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="block"
          >
            Sovereign AI.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Kumo AI delivers private, secure, and scalable AI solutions that run on your infrastructure. 
          Unlock the power of generative AI without compromising data privacy or security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group px-8 py-4 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Explore Solutions
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-slate-200 dark:border-slate-800 font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Elements Parallax */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 md:left-20 hidden lg:block"
      >
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
            <Zap size={24} />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase">Performance</div>
            <div className="text-lg font-bold">10x Faster Inference</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute top-40 right-10 md:right-20 hidden lg:block"
      >
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-blue/10 text-sky-blue flex items-center justify-center">
            <Lock size={24} />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase">Security</div>
            <div className="text-lg font-bold">Zero-Trust Architecture</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
