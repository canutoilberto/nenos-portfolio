"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "PHP", icon: "🐘" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "ShadCN-UI", icon: "🎭" },
  { name: "Mantine-UI", icon: "🧩" },
];

export default function Skills() {
  return (
    <section id="habilidades" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 h-full">
                <span
                  className="text-4xl mb-4"
                  role="img"
                  aria-label={skill.name}
                >
                  {skill.icon}
                </span>
                <h3 className="text-lg font-semibold text-center">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
