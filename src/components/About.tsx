import { motion } from 'motion/react';
import { ShieldCheck, Database, Server, Cpu } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Data Sovereignty",
      description: "Keep your data within your own infrastructure. Kumo AI ensures that your sensitive information never leaves your secure environment."
    },
    {
      icon: <Database size={32} />,
      title: "Contextual Intelligence",
      description: "Leverage your proprietary data to train and fine-tune AI models that understand your specific business context and industry nuances."
    },
    {
      icon: <Server size={32} />,
      title: "Hybrid Deployment",
      description: "Deploy on-premises, in your private cloud, or across hybrid environments with consistent performance and security controls."
    },
    {
      icon: <Cpu size={32} />,
      title: "Optimized Performance",
      description: "Our solutions are engineered for high-throughput and low-latency inference, ensuring that your AI applications are responsive and scalable."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">What is Private AI?</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              The Future of Enterprise Intelligence is <span className="text-sky-blue">Private</span>.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Private AI is an architectural approach that brings AI capabilities directly to your data, rather than sending your data to a public AI service. 
              It combines the power of large language models with the security and control of your own enterprise infrastructure.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-blue/10 flex items-center justify-center text-sky-blue shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Uncompromising Security</h4>
                  <p className="text-slate-600 dark:text-slate-400">Eliminate the risk of data leaks and intellectual property theft associated with public AI APIs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-lavender/10 flex items-center justify-center text-lavender shrink-0">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Full Data Control</h4>
                  <p className="text-slate-600 dark:text-slate-400">Maintain complete ownership and control over how your data is used to train and improve AI models.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-blue/10 to-lavender/10 text-sky-blue flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
