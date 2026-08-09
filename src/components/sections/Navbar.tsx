"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Works", href: "#works" },
  { name: "Results", href: "#results" },
  { name: "Reviews", href: "#reviews" },
];

const menuVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3 md:py-4",
        isScrolled ? "bg-[#171717]/80 backdrop-blur-md shadow-sm shadow-black/30 border-b border-border/50" : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary via-[#FF8A4C] to-primary z-50"
      />
      <div className="container-site flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-foreground relative z-50">
          MB.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors hover:underline decoration-primary/60 underline-offset-8 decoration-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-white text-[#171717] rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Contact &rarr;
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2.5 -mr-2.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 h-[100dvh] w-full bg-background flex flex-col items-center justify-center gap-7 px-6 overflow-y-auto py-12"
            >
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={menuVariants} initial="hidden" animate="visible">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 mt-4 bg-white text-[#171717] rounded-full text-lg font-medium w-full text-center block hover:bg-primary hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
