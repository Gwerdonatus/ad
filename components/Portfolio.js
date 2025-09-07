"use client";

// Shared slides data (same images used by ServicesCarousel)
export const slides = [
  {
    title: "Custom Websites & Landing Pages",
    desc: "Responsive websites that showcase your brand, products, and services effectively.",
    img: "/images/t1.jpeg",
    tag: "Web"
  },
  {
    title: "E-commerce Stores & Marketplaces",
    desc: "Sell your products online with secure carts, payment gateways, and dashboards.",
    img: "/images/t6.jpeg",
    tag: "E-commerce"
  },
  {
    title: "Booking & Reservation Systems",
    desc: "Allow customers to book appointments, services, or events easily.",
    img: "/images/t3.jpeg",
    tag: "Booking"
  },
  {
    title: "Web Applications & Dashboards",
    desc: "Custom business dashboards, apps, and tools to manage operations efficiently.",
    img: "/images/3.jpg",
    tag: "Dashboard"
  },
  {
    title: "Website Maintenance & Security",
    desc: "Keep your website secure, fast, and updated with the latest technologies.",
    img: "/images/t5.jpeg",
    tag: "Security"
  },
  {
    title: "WhatsApp Chatbot Development",
    desc: "Automate customer conversations and support with smart chatbots.",
    img: "/images/6.png",
    tag: "WhatsApp"
  },
  {
    title: "WhatsApp API Integration & Templates",
    desc: "Integrate official WhatsApp Business API with pre-approved templates for messaging.",
    img: "/images/5.jpg",
    tag: "WhatsApp"
  },
  {
    title: "WhatsApp Payments (Paystack/Flutterwave)",
    desc: "Accept payments directly in WhatsApp chats using secure payment gateways.",
    img: "/images/whatsappmockup.png",
    tag: "Payments"
  }
];

// Portfolio component that uses the same images used by the ServicesCarousel
export default function Portfolio() {
  // Show first 8 service slides as portfolio cards — change .slice() as needed
  const projects = slides.slice(0, 8).map((s) => ({
    title: s.title,
    img: s.img,
    tag: s.tag || "Service"
  }));

  return (
    <section id="work" className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10">
          Best <span className="text-brand">work</span> & demos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 pointer-events-none" />

              <div className="absolute bottom-3 left-3 text-white">
                <span className="inline-block text-xs px-2 py-1 rounded bg-brand/80 text-white">{p.tag}</span>
                <p className="mt-2 font-semibold">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
