import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Material UI", "Bootstrap", "SCSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "FastAPI", "REST APIs", "Java APIs", ".NET APIs"],
  },
  {
    title: "AI / ML",
    items: ["LLMs", "RAG", "Ollama", "ChromaDB", "Prompt Engineering", "Structured Output Validation"],
  },
  {
    title: "Security",
    items: ["CIS Benchmarks", "SSH", "WinRM", "Security Compliance", "Authentication", "Authorization", "RBAC"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "TypeORM"],
  },
  {
    title: "DevOps & Testing",
    items: ["Docker", "GitHub Actions", "CI/CD", "Jest", "Playwright", "ESLint", "Git", "GitHub", "Postman", "Linux"],
  },
  {
    title: "Practices",
    items: ["SDLC", "Agile", "OOP", "Unit & E2E Testing", "Code Review", "Web Accessibility", "Responsive Design"],
  },
];

const SkillSection = () => {
  return (
    <div className="py-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        My Skills
      </motion.h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="green-pink-gradient rounded-2xl p-[1px]"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Adds a stagger effect
            }}
          >
            <div className="bg-tertiary h-full rounded-2xl p-5">
              <h3 className="mb-4 text-lg font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-secondary rounded-full bg-black-100 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
