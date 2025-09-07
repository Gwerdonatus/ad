// components/Ads.js
"use client";

import { motion } from "framer-motion";
import { Wallet, Rocket, Bot, ShoppingCart, Calendar, ChartBar, MessageSquare } from "lucide-react";

const tiles = [
  {
    title: "WhatsApp Payments",
    img: "https://source.unsplash.com/800x600/?whatsapp,phone",
    desc: "Collect payments inside chat with smooth flows.",
    icon: Wallet,
  },
  {
    title: "High-Converting Websites",
    img: "https://source.unsplash.com/800x600/?website,ui",
    desc: "Modern, responsive sites that load fast and rank.",
    icon: Rocket,
  },
  {
    title: "AI Chat Automations",
    img: "https://source.unsplash.com/800x600/?chatbot,ai",
    desc: "Onboard, support, and sell—automatically.",
    icon: Bot,
  },
  {
    title: "E-commerce + Bookings",
    img: "https://source.unsplash.com/800x600/?ecommerce,app",
    desc: "Shops & scheduling with reminders and receipts.",
    icon: ShoppingCart,
  },
  {
    title: "Event Scheduling",
    img: "https://source.unsplash.com/800x600/?calendar,planner",
    desc: "Smart calendars with automated reminders.",
    icon: Calendar,
  },
  {
    title: "Dashboards & Analytics",
    img: "https://source.unsplash.com/800x600/?analytics,dashboard",
    desc: "Make data visual and actionable.",
    icon: ChartBar,
  },
  {
    title: "Omni-channel Messaging",
    img: "https://source.unsplash.com/800x600/?social,marketing",
    desc: "Broadcasts, segmentation, and campaigns.",
    icon: MessageSquare,
  },
];

export default function Ads() {
  return (
    <section id="ads" className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">What You’ll Get</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        A creative, growth-driven stack of features—delivered with clean UX and classy motion.
      </p>

      {/* Horizontal carousel on small screens */}
      <div className="md:hidden overflow-x-auto px-4 pb-2 snap-x snap-mandatory no-scrollbar">
        <div className="flex gap-5 w-max">
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="snap-center w-80 shrink-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-greenbrand" />
                    <h3 className="font-semibold">{t.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Grid on md+ */}
      <div className="hidden md:grid max-w-7xl mx-auto px-4 grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-greenbrand" />
                  <h3 className="font-semibold">{t.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-greenbrand text-white font-semibold shadow hover:scale-105 transition">
          Let’s Build Something Great 🚀
        </a>
      </div>
    </section>
  );
}
