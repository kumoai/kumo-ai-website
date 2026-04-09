import { motion } from 'motion/react';
import { Brain, Network, Terminal, BarChart3, Globe, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "Custom LLM Fine-Tuning",
      description: "Adapt state-of-the-art large language models to your specific domain using your proprietary datasets securely."
    },
    {
      icon: <Network size={32} />,
      title: "RAG Infrastructure",
      description: "Implement Retrieval-Augmented Generation systems that connect your AI models to your real-time enterprise data sources."
    },
    {
      icon: <Terminal size={32} />,
      title: "Private API Gateways",
      description: "Secure, high-performance API endpoints for internal AI consumption with full observability and access control."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "AI Governance & Auditing",
      description: "Comprehensive tools for monitoring AI behavior, ensuring compliance, and auditing model outputs for bias and safety."
    },
    {
      icon: <Globe size={32} />,
      title: "Edge AI Deployment",
      description: "Run optimized AI models at the edge for low-latency processing and offline capabilities in remote environments."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Automation",
      description: "Automate complex business workflows and decision-making processes with secure, private AI agents."
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-sky-blue mb-4"
          >
            Our Solutions
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Empowering Enterprise with <br />
            <span className="kumo-gradient-text">Sovereign Intelligence</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            We provide the tools and infrastructure needed to build, deploy, and manage 
            private AI solutions that are secure by design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center mb-8 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <a href="#" className="text-sky-blue font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
