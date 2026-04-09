import { motion, useScroll, useTransform } from 'motion/react';
import { Moon, Sun, Menu, X, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const backgroundColor = useTransform(bgOpacity, (o) => `rgba(var(--nav-bg), ${o})`);

  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        "py-4 px-6 md:px-12"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-blue to-lavender flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Cloud size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight dark:text-white">
            Kumo<span className="text-sky-blue">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-blue dark:text-slate-300 dark:hover:text-sky-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#services"
            className="px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 md:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-600 dark:text-slate-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 rounded-xl bg-sky-blue text-white text-center font-bold"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
