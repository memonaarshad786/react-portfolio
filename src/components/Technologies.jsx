import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaVuejs , FaGit, FaNode, FaGithub , FaCss3Alt  } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiFirebase, SiMongodb, SiJavascript, SiRedux, SiIos, SiReactquery, SiExpo, SiGraphql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

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
        className="flex flex-wrap items-center justify-center gap-4"
      >
         <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <TiHtml5 className="text-6xl text-red-400" /> 
        </motion.div>
        
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <FaCss3Alt className="text-6xl text-blue-400" /> 
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <SiJavascript className="text-6xl text-yellow-500" /> 
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <RiTailwindCssFill className="text-6xl text-sky-300" /> 
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <RiReactjsFill className="text-7xl text-cyan-500" /> 
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <FaVuejs  className="text-6xl text-green-600" /> 
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <SiRedux  className="text-6xl text-purple-600" /> 
        </motion.div>


        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <SiReactquery className="text-6xl text-red-700" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <VscVscode className="text-6xl text-blue-600" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
          <FaGithub  className="text-6xl text-gray-600" /> 
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <FaGit className="text-7xl text-orange-400" /> {/* Git */}
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
