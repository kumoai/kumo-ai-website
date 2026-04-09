import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            Let's Discuss Your <br />
            <span className="text-sky-blue">Private AI Strategy</span>.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            Our team of experts is ready to help you navigate the complexities of enterprise AI. 
            Reach out to learn more about our solutions and how we can help you build a secure, 
            sovereign AI future.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-sky-blue group-hover:bg-sky-blue group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500 font-bold uppercase">Call Us</div>
                <div className="text-xl font-bold">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-sky-blue group-hover:bg-sky-blue group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500 font-bold uppercase">Email Us</div>
                <div className="text-xl font-bold">hello@kumoai.com</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
