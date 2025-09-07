"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radiance" aria-hidden="true" />
      <div className="container relative py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            I build <span className="text-brand">fast</span>, <span className="text-secondary">beautiful</span> websites
            and <span className="text-brand">WhatsApp</span> experiences that sell.
          </h1>
          <p className="mt-5 text-lg opacity-80">
            From modern portfolios to e-commerce, booking systems and chat commerce—crafted for speed, trust and growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-primary">
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#work" className="btn-ghost">
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {["Performance", "Security", "SEO", "Automation"].map((t, i) => (
            <div key={t} className="card p-4 text-center animate-floaty" style={{ animationDelay: `${i * 0.2}s` }}>
              <p className="font-semibold">{t}</p>
              <p className="text-sm opacity-70 mt-1">Built-in best practices</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
