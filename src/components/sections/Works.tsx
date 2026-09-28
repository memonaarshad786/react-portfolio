import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  liveLink,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[340px]">
          <div className="relative h-[230px] w-full">
            {imageFailed ? (
              // Placeholder until a screenshot is uploaded
              <div className="violet-gradient flex h-full w-full items-center justify-center rounded-2xl">
                <span className="text-[28px] font-bold text-white">{name}</span>
              </div>
            ) : (
              <img
                src={image}
                alt={name}
                onError={() => setImageFailed(true)}
                className="h-full w-full rounded-2xl object-cover"
              />
            )}
            {liveLink && (
              <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${name}`}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white"
                >
                  <FiExternalLink className="h-1/2 w-1/2" />
                </a>
              </div>
            )}
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#915EFF] hover:underline"
              >
                {liveLink.replace(/^https?:\/\//, "")}
              </a>
            )}
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
