// components/ServicesCarousel.js
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ShoppingCart, CalendarClock, BarChart3, ShieldCheck, MessageCircle } from "lucide-react";

const slides = [
  {
    title: "Custom Websites & Landing Pages",
    desc: "Responsive websites that showcase your brand, products, and services effectively.",
    img: "/images/web1.jpg",
    icon: Code2,
    bullets: ["Modern UI/UX", "SEO-friendly", "Responsive & mobile-first"],
  },
  {
    title: "E-commerce Stores & Marketplaces",
    desc: "Sell your products online with secure carts, payment gateways, and dashboards.",
    img: "/images/2.jpg",
    icon: ShoppingCart,
    bullets: ["Secure payments", "Product catalog", "Dashboard analytics"],
  },
  {
    title: "Booking & Reservation Systems",
    desc: "Allow customers to book appointments, services, or events easily.",
    img: "/images/booking.jpg",
    icon: CalendarClock,
    bullets: ["Calendar sync", "Notifications", "Escrow payments"],
  },
  {
    title: "Web Applications & Dashboards",
    desc: "Custom business dashboards, apps, and tools to manage operations efficiently.",
    img: "/images/3.jpg",
    icon: BarChart3,
    bullets: ["Custom features", "Real-time data", "Analytics & insights"],
  },
  {
    title: "Website Maintenance & Security",
    desc: "Keep your website secure, fast, and updated with the latest technologies.",
    img: "/images/4.jpg",
    icon: ShieldCheck,
    bullets: ["Updates & backups", "Performance optimization", "Fraud protection"],
  },
  {
    title: "WhatsApp Chatbot Development",
    desc: "Automate customer conversations and support with smart chatbots.",
    img: "/images/6.png",
    icon: MessageCircle,
    bullets: ["Instant replies", "FAQ automation", "24/7 support"],
  },
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(timer.current);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const SlideIcon = slides[index].icon;

  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10">
          Services that <span className="text-brand">sell</span> your product
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-brand/20 blur-2xl rounded-3xl" aria-hidden="true" />
            <div className="card overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].img}
                  alt={slides[index].title}
                  initial={{ opacity: 0.0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-full h-[320px] md:h-[420px] object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button onClick={prev} className="btn-ghost">Prev</button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-6 rounded-full transition ${i === index ? "bg-brand" : "bg-white/30 dark:bg-white/10"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className="btn-ghost">Next</button>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <SlideIcon className="w-6 h-6 text-brand" />
                <h3 className="text-2xl font-bold">{slides[index].title}</h3>
              </div>
              <p className="mt-3 opacity-80">{slides[index].desc}</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {slides[index].bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">Get a Quote</a>
                <a href="#work" className="btn-ghost">See Examples</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
