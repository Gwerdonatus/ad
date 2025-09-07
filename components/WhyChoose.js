"use client";
import { CheckCircle2, GaugeCircle, LockKeyhole, Sparkles } from "lucide-react";

const points = [
  { icon: GaugeCircle, title: "Speed First", desc: "Lighthouse-friendly performance out of the box." },
  { icon: LockKeyhole, title: "Secure", desc: "Auth, roles, validations and safe payments." },
  { icon: Sparkles, title: "Creative UI", desc: "Modern visuals, micro-interactions, and motion." },
  { icon: CheckCircle2, title: "Done-For-You", desc: "I ship fast and handle the heavy lifting." }
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
          Why clients <span className="text-brand">choose</span> me
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6 hover:animate-glowpulse transition">
              <Icon className="w-8 h-8 text-brand" />
              <h3 className="mt-3 font-bold text-lg">{title}</h3>
              <p className="opacity-80 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
