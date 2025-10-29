type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Memona Sehrish — React Js Developer",
    fullName: "Memona Sehrish",
    email: "meemonaarshad789@gmail.com",
  },
  hero: {
    name: "Memona Sehrish",
    p: ["I'm a React Js Developer", "I create interactive websites."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Hi, I am Memona Sehrish, a proficient Frontend Developer specializing in React JS and Vue JS. I excel in creating dynamic, high-performance web applications that enhance user experience across both desktop and mobile platforms. With a strong focus on React JS and Vue JS, I am adept at building scalable and maintainable solutions that ensure seamless functionality and superb design. My expertise extends to delivering responsive applications that provide consistent performance across all devices, with a commitment to writing clean, efficient code. My passion for staying updated with the latest industry trends and technologies drives me to continuously improve my skills and deliver innovative solutions. I am dedicated to collaborating effectively with cross-functional teams to achieve project goals and exceed client expectations.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
