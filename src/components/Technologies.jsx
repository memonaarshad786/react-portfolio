import { RiReactjsFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNode, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGithubactions,
  SiJest,
} from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { name: "React", Icon: RiReactjsFill, className: "text-cyan-500", duration: 2.5 },
  { name: "Next.js", Icon: RiNextjsFill, className: "text-white", duration: 4 },
  { name: "TypeScript", Icon: SiTypescript, className: "text-blue-500", duration: 5 },
  { name: "JavaScript", Icon: SiJavascript, className: "text-yellow-500", duration: 4 },
  { name: "Tailwind CSS", Icon: RiTailwindCssFill, className: "text-sky-300", duration: 6 },
  { name: "Node.js", Icon: FaNode, className: "text-green-500", duration: 3 },
  { name: "NestJS", Icon: SiNestjs, className: "text-red-500", duration: 5 },
  { name: "Express", Icon: SiExpress, className: "text-gray-300", duration: 4 },
  { name: "Python", Icon: FaPython, className: "text-yellow-400", duration: 2.5 },
  { name: "FastAPI", Icon: SiFastapi, className: "text-teal-400", duration: 6 },
  { name: "PostgreSQL", Icon: SiPostgresql, className: "text-blue-400", duration: 3 },
  { name: "MongoDB", Icon: SiMongodb, className: "text-green-600", duration: 5 },
  { name: "MySQL", Icon: SiMysql, className: "text-sky-500", duration: 4 },
  { name: "Redis", Icon: SiRedis, className: "text-red-600", duration: 6 },
  { name: "Docker", Icon: FaDocker, className: "text-blue-500", duration: 2.5 },
  { name: "GitHub Actions", Icon: SiGithubactions, className: "text-blue-300", duration: 5 },
  { name: "Jest", Icon: SiJest, className: "text-red-700", duration: 4 },
  { name: "Git", Icon: FaGitAlt, className: "text-orange-400", duration: 3 },
];

const Technologies = () => {
  return (
    <div className="pb-4 lg:mb-36 pt-24 lg:pt-0">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4"
      >
        {technologies.map(({ name, Icon, className, duration }) => (
          <motion.div
            key={name}
            initial="initial"
            animate="animate"
            variants={iconVariants(duration)}
            className="p-4"
            title={name}
          >
            <Icon className={`text-6xl ${className}`} aria-label={name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
