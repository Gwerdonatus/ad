"use client";
import { motion } from 'framer-motion';

const quotes = [
  {
    name: "Jane – Fashion Entrepreneur",
    text: "Smart Ads + site refresh doubled my sales in two weeks!",
    img: "https://source.unsplash.com/200x200/?portrait,smile"
  },
  {
    name: "Emeka – Event Planner",
    text: "Booking automation saved us hours and cut no-shows dramatically.",
    img: "https://source.unsplash.com/200x200/?portrait,man"
  },
  {
    name: "Halima – Store Owner",
    text: "WhatsApp payments made checkout effortless for customers.",
    img: "https://source.unsplash.com/200x200/?portrait,woman"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Results People Feel</h2>

      <div className="overflow-x-auto px-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 w-max mx-auto">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="snap-center w-[28rem] max-w-[90vw] shrink-0 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={q.img} alt={q.name} className="w-12 h-12 rounded-full object-cover" />
                <figcaption className="font-semibold">{q.name}</figcaption>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300">{q.text}</blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
