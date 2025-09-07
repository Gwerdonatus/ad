"use client";
import { motion } from 'framer-motion';
import { Code, Shield, Gauge, Globe, Search, Layers, Cpu } from 'lucide-react';

const services = [
  { title: "Full-Stack Web Apps", icon: Code, desc: "Django + React builds with clean APIs." },
  { title: "Performance & SEO", icon: Gauge, desc: "Core Web Vitals and ranking wins." },
  { title: "Secure Payments", icon: Shield, desc: "Paystack + best-practice auth flows." },
  { title: "Scalable Cloud", icon: Globe, desc: "CI/CD, containers, and monitoring." },
  { title: "Search & Discovery", icon: Search, desc: "Great IA, smart search, filters." },
  { title: "Modular Design", icon: Layers, desc: "Reusable components, fast iteration." },
  { title: "Automation & AI", icon: Cpu, desc: "Bots, workflows, and assistants." },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 shadow hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-xl grid place-content-center bg-greenbrand/10 text-greenbrand mb-4 group-hover:scale-105 transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
