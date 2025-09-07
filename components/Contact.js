"use client";

import { Mail, Phone, MessageCircle, Linkedin, Instagram, Twitter, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Contact <span className="text-purple-600 dark:text-purple-400">me</span>
        </h2>

        {/* Contact methods */}
        <div className="grid gap-6 sm:grid-cols-3 items-stretch mb-10">
          <a href="mailto:donatusgwer@gmail.com" className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <Mail className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">donatusgwer@gmail.com</span>
          </a>

          <a href="https://wa.me/2348116276112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <MessageCircle className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">WhatsApp Me</span>
          </a>

          <a href="tel:+2348116276112" className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <Phone className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">+234 811 627 6112</span>
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="/images/profile.jpeg"
            alt="Donatus Gwer"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover ring-4 ring-purple-600 shadow-xl"
          />

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/donatus-gwer-857610338"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-purple-600 hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-purple-600 hover:text-white transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/donatus_gwer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-purple-600 hover:text-white transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Gwerdonatus"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-purple-600 hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Portfolio CTA */}
          <div className="mt-6">
            <a
              href="https://portfolio-uey9.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600 text-white font-semibold shadow hover:scale-105 transition"
            >
              Visit my portfolio →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
