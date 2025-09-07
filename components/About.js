"use client";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        About Me
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Intro */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hi, I’m <span className="font-bold text-primary-500">Donatus Gwer</span>, a
            passionate <span className="font-bold">full-stack web developer</span>. I specialize in{" "}
            <span className="font-bold">Django, Python, React, and Next.js</span>.  
            I love <span className="italic">transforming ideas</span> into scalable applications that 
            make a real difference in people’s lives.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Over time, I’ve built impactful platforms like{" "}
            <span className="italic font-semibold">Naija Co-op Hub</span> (a{" "}
            <span className="font-bold">digital cooperative ecosystem</span>) and{" "}
            <span className="italic font-semibold">JosEventia</span> (an{" "}
            <span className="font-bold">escrow-backed vendor marketplace</span>).  
            My mission is simple: to build <span className="font-bold">digital tools</span> that
            help <span className="italic">communities grow, collaborate, and thrive.</span>
          </p>
        </div>

        {/* Right: Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
          <h3 className="text-xl font-semibold mb-4">What I Do</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>⚡ <span className="font-bold">Full-stack web development</span></li>
            <li>⚡ Building <span className="font-bold">scalable apps</span> with Django & Next.js</li>
            <li>⚡ Designing <span className="font-bold">user-friendly, responsive UIs</span></li>
            <li>⚡ Creating <span className="font-bold">secure marketplaces</span> & platforms</li>
            <li>⚡ Integrating <span className="font-bold">APIs & payment systems</span></li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-center mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Python",
            "Django",
            "React",
            "Next.js",
            "HTML/CSS",
            "Bootstrap",
            "Tailwind CSS",
            "Git & GitHub",
          ].map((skill, i) => (
            <div
              key={i}
              className={`p-4 bg-gray-100 dark:bg-gray-900 rounded-xl font-semibold shadow-md transform transition duration-500 hover:-translate-y-2 hover:shadow-lg animate-float`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Floating animation style */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
