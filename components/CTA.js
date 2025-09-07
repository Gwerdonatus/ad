"use client";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-radiance" aria-hidden="true" />
      <div className="container relative">
        <div className="card p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold">
            Let’s build something <span className="text-brand">profitable</span> together.
          </h3>
          <p className="mt-3 opacity-80 max-w-2xl mx-auto">
            I turn ideas into polished, revenue-ready web products—fast.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Book Free Call <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:donatusgwer@gmail.com" className="btn-ghost">Email Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
