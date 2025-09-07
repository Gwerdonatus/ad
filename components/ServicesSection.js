"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    category: "Core Web Development Services",
    items: [
      "Custom Websites & Landing Pages – modern, responsive websites that showcase their brand.",
      "E-commerce Stores – complete online shops with payment integration (Paystack, Flutterwave).",
      "Booking & Reservation Systems – for salons, restaurants, event vendors.",
      "Web Applications & Dashboards – business management tools (inventory, invoicing, CRM).",
      "Website Maintenance & Security – regular updates, bug fixes, and backups.",
    ],
  },
  {
    category: "WhatsApp Business & Automation Services",
    items: [
      "WhatsApp Chatbot Development – automate FAQs, orders, customer support.",
      "WhatsApp API Integration – connect WhatsApp to their website or CRM.",
      "WhatsApp Payments Integration – allow customers to pay directly in WhatsApp (via Paystack/Flutterwave).",
      "Automated Notifications – order updates, payment receipts, reminders sent through WhatsApp.",
      "WhatsApp Marketing Campaigns – bulk messaging (with compliance), sales funnels.",
    ],
  },
  {
    category: "Software & Engineering Solutions",
    items: [
      "Custom Business Software – tailored apps for SMEs (inventory, POS, HR).",
      "Integration with Existing Tools – linking WhatsApp, websites, and accounting software.",
      "Data Analytics Dashboards – help SMEs track sales, customers, and performance.",
      "API Development – connect multiple platforms together.",
    ],
  },
  {
    category: "Value-Added Services",
    items: [
      "SEO & Google Business Setup – make SMEs discoverable online.",
      "UI/UX Design – simple, beautiful user experiences.",
      "Training & Support – onboarding SMEs to use their new tools effectively.",
      "Digital Strategy Consulting – show SMEs how to leverage WhatsApp + web for real growth.",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-purple-700 dark:text-purple-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">
                {service.category}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-200"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Smart Business Hub box */}
        <motion.div
          className="mt-16 text-center bg-purple-600 text-white rounded-2xl p-10 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Smart Business Hub 🚀</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Combining <span className="font-semibold">Website</span> +{" "}
            <span className="font-semibold">WhatsApp Automation</span> +{" "}
            <span className="font-semibold">Payments</span> +{" "}
            <span className="font-semibold">Support</span> in one powerful
            solution designed to help SMEs grow faster and smarter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
