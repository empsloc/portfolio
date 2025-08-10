"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Java", "JavaScript", "TypeScript", "Dart", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Flutter",
    ],
  },
  {
    category: "Databases & ORMs",
    items: ["MySQL", "MongoDB", "Firebase", "Prisma", "Drizzle", "Convex"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Jupyter", "RStudio"],
  },
];

export default function MyInfo() {
  return (
    <section
      id="myinfo"
      className="flex flex-col items-center justify-center py-16 px-6"
    >
      <h2 className="text-5xl font-extrabold mb-12 text-white/90 drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-400">
          Skills
        </span>
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Purple glowing timeline line */}
        <div
          className="absolute left-8 top-0 w-1 h-full rounded"
          style={{
            background:
              "linear-gradient(to bottom, rgba(139,92,246,0.7), rgba(124,58,237,0.35), rgba(99,102,241,0.08))",
            boxShadow: "0 0 30px rgba(124,58,237,0.25)",
          }}
        />

        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            className="mb-12 flex items-start"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            {/* Smaller Dot */}
            <div className="flex-shrink-0 w-16 flex justify-center relative">
              <div
                className="w-4 h-4 rounded-full ring-2 ring-purple-700/30 shadow-[0_0_14px_rgba(124,58,237,0.4)]"
                style={{
                  background: "linear-gradient(135deg,#a78bfa,#7c3aed 70%)",
                }}
              />
            </div>

            {/* Glossy Card */}
            <div className="relative w-full">
              {/* glossy overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden z-0">
                <div
                  className="absolute -inset-1 transform rotate-3 blur-lg opacity-20"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02) 60%, transparent)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    boxShadow: "inset 0 1px 40px rgba(0,0,0,0.35)",
                  }}
                />
              </div>

              <article
                className="relative z-10 rounded-lg p-6 pl-8 backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 className="text-2xl font-bold mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-500">
                    {skill.category}
                  </span>
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 rounded-md text-sm text-white/90"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(124,58,237,0.12), rgba(99,102,241,0.06))",
                        border: "1px solid rgba(255,255,255,0.03)",
                        boxShadow: "0 4px 14px rgba(99,102,241,0.04)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
