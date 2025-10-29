import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95, color: "#61DAFB" },
  { name: "CSS3", level: 90, color: "#02569B" },
  { name: "Material UI", level: 75, color: "#764ABC" },
  { name: "Bootstrap", level: 80, color: "#61DAFB" },
  { name: "JavaScript", level: 70, color: "#4630EB" },
  { name: "DOM", level: 85, color: "#FF9900" },
  { name: "ReactJs", level: 80, color: "#E34F26" },
  { name: "VueJs", level: 60, color: "#E10098" },
  { name: "Context API", level: 75, color: "#4285F4" },
  { name: "React Redux", level: 65, color: "#FF5722" },
  { name: "React Router DOM", level: 90, color: "#FFCA28" },
  { name: "React Query", level: 50, color: "#47A248" },
  { name: "VCS", level: 70, color: "#F05033" },
  { name: "GitHub", level: 70, color: "#000000" },
  { name: "VSCode", level: 90, color: "#339933" },
  
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Adds a stagger effect
            }}
          >
            <div className="w-24 h-24">
              <motion.div
                whileInView={{
                  rotate: 360,
                  transition: { duration: 2, type: "spring" },
                }}
                initial={{ rotate: 0 }}
              >
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    pathColor: skill.color,
                    textColor: "white",
                    trailColor: "#E5E7EB",
                    textSize: "16px",
                  })}
                />
              </motion.div>
            </div>
            <p className="mt-4 text-lg font-medium text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
