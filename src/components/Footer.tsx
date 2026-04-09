import { Cloud, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-blue to-lavender flex items-center justify-center text-white shadow-lg">
              <Cloud size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight dark:text-white">
              Kumo<span className="text-sky-blue">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#home" className="hover:text-sky-blue transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-blue transition-colors">About</a>
            <a href="#services" className="hover:text-sky-blue transition-colors">Services</a>
            <a href="#contact" className="hover:text-sky-blue transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Kumo AI Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-sky-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
