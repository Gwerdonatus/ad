"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ShoppingCart, CalendarClock, MessageCircle, BarChart3, ShieldCheck } from "lucide-react";

/* Updated Carousel slides */
const slides = [
  // Web Development & Digital Presence
  {
    title: "Custom Websites & Landing Pages",
    desc: "Responsive websites that showcase your brand, products, and services effectively.",
    img: "/images/web1.jpg",
    icon: Code2,
    bullets: ["Modern UI/UX", "SEO-friendly", "Responsive & mobile-first"]
  },
  {
    title: "E-commerce Stores & Marketplaces",
    desc: "Sell your products online with secure carts, payment gateways, and dashboards.",
    img: "/images/2.jpg",
    icon: ShoppingCart,
    bullets: ["Secure payments", "Product catalog", "Dashboard analytics"]
  },
  {
    title: "Booking & Reservation Systems",
    desc: "Allow customers to book appointments, services, or events easily.",
    img: "/images/booking.jpg",
    icon: CalendarClock,
    bullets: ["Calendar sync", "Notifications", "Escrow payments"]
  },
  {
    title: "Web Applications & Dashboards",
    desc: "Custom business dashboards, apps, and tools to manage operations efficiently.",
    img: "/images/3.jpg",
    icon: BarChart3,
    bullets: ["Custom features", "Real-time data", "Analytics & insights"]
  },
  {
    title: "Website Maintenance & Security",
    desc: "Keep your website secure, fast, and updated with the latest technologies.",
    img: "/images/4.jpg",
    icon: ShieldCheck,
    bullets: ["Updates & backups", "Performance optimization", "Fraud protection"]
  },

  // WhatsApp Business & Automation
  {
    title: "WhatsApp Chatbot Development",
    desc: "Automate customer conversations and support with smart chatbots.",
    img: "/images/6.png",
    icon: MessageCircle,
    bullets: ["Instant replies", "FAQ automation", "24/7 support"]
  },
  {
    title: "WhatsApp API Integration & Templates",
    desc: "Integrate official WhatsApp Business API with pre-approved templates for messaging.",
    img: "/images/5.jpg",
    icon: MessageCircle,
    bullets: ["Business API setup", "Template messages", "Seamless integration"]
  },
  {
    title: "WhatsApp Payments (Paystack/Flutterwave)",
    desc: "Accept payments directly in WhatsApp chats using secure payment gateways.",
    img: "/images/whatsappmockup.png",
    icon: ShoppingCart,
    bullets: ["Secure transactions", "Easy checkout", "Paystack & Flutterwave"]
  },
  {
    title: "Automated Notifications",
    desc: "Send WhatsApp, SMS, or Email notifications automatically to clients.",
    img: "/images/88.jpg",
    icon: MessageCircle,
    bullets: ["Reminders & alerts", "Order updates", "Marketing notifications"]
  },
  {
    title: "WhatsApp Marketing Campaigns",
    desc: "Reach your customers with campaigns and promotions directly on WhatsApp.",
    img: "/images/whatsappapi.jpg",
    icon: MessageCircle,
    bullets: ["Targeted campaigns", "High engagement", "Trackable results"]
  },

  // Software & Engineering Solutions
  {
    title: "Custom Business Software",
    desc: "Build inventory, POS, HR, or any custom software for your business.",
    img: "/images/9.png",
    icon: Code2,
    bullets: ["Tailored solutions", "Automation", "Operational efficiency"]
  },
  {
    title: "Integration with Tools (Accounting, CRM)",
    desc: "Connect your existing systems for seamless data flow and reporting.",
    img: "/images/crm.jpg",
    icon: BarChart3,
    bullets: ["CRM & accounting sync", "Unified data", "Improved productivity"]
  },
  {
    title: "Data Analytics Dashboards",
    desc: "Get actionable insights from your business data in real-time dashboards.",
    img: "/images/data.jpg",
    icon: BarChart3,
    bullets: ["Visual reports", "Real-time metrics", "Decision support"]
  },
  {
    title: "API Development",
    desc: "Expose your data and services securely via custom APIs for integrations.",
    img: "/images/12.jpg",
    icon: Code2,
    bullets: ["Secure endpoints", "REST & GraphQL", "Integration ready"]
  },

  // Value-Added Services
  {
    title: "SEO & Google Business Setup",
    desc: "Optimize your online presence to rank higher and attract local customers.",
    img: "/images/10.jpg",
    icon: BarChart3,
    bullets: ["Google My Business", "On-page SEO", "Traffic growth"]
  },
  {
    title: "UI/UX Design",
    desc: "Design intuitive, attractive interfaces for websites and apps.",
    img: "/images/uiux.jpg",
    icon: Code2,
    bullets: ["User-friendly", "Modern design", "High conversion"]
  },
  {
    title: "Training & Support",
    desc: "Empower your team with knowledge and support for your digital tools.",
    img: "/images/learning.jpg",
    icon: MessageCircle,
    bullets: ["Team training", "Documentation", "Ongoing support"]
  },
  {
    title: "Digital Strategy Consulting",
    desc: "Plan and execute strategies to grow your business online effectively.",
    img: "/images/Digital-Marketing.jpg",
    icon: BarChart3,
    bullets: ["Growth planning", "Market analysis", "Execution roadmap"]
  }
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  // autoplay
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
                  className="w-full h-[320px] md:h-[420px] object-cover"
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
