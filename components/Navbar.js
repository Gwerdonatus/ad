"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-white/10">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl">
          <span className="text-brand">Gwer</span>Dev
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
          <a href="#work" className="opacity-80 hover:opacity-100">Work</a>
          <a href="#why" className="opacity-80 hover:opacity-100">Why Me</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
          >
            {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </button>
          <a href="#contact" className="btn-primary">Hire Me</a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-white/15" onClick={() => setOpen(!open)}>
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur">
          <div className="container py-4 flex flex-col gap-3">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#work" onClick={() => setOpen(false)}>Work</a>
            <a href="#why" onClick={() => setOpen(false)}>Why Me</a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full text-center">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  );
}
