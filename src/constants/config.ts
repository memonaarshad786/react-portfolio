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
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    resume: string;
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
    title: "Memona Sehrish — Full Stack Software Engineer",
    fullName: "Memona Sehrish",
    // Shown on the site. Change to your work email (e.g. hello@yourdomain.com) once it is set up.
    email: "memonaarshad789@gmail.com",
    phone: "+92 304 1682069",
    location: "Lahore, Pakistan",
    // Paste your profile URLs here. Empty links are hidden.
    linkedin: "https://www.linkedin.com/in/memona-sehrish-41971231b/",
    github: "https://github.com/memonaarshad786",
    // File in the /public folder.
    resume: "/Memona-Sehrish-Resume.pdf",
  },
  hero: {
    name: "Memona Sehrish",
    p: [
      "Full Stack Software Engineer",
      "React · Next.js · Node.js · NestJS · Python · LLMs",
    ],
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
      content: `I'm a Full Stack Software Engineer with 3+ years of experience building web applications across cybersecurity compliance, e-commerce, workforce management, and automotive software. I work with React.js, Next.js, Node.js, NestJS, and Python, backed by PostgreSQL, MongoDB, and MySQL, and ship through Docker and CI/CD. I've built React interfaces for 4 connected e-commerce portals, contributed to a test setup of 94 suites with 72.45% front-end coverage, and developed LLM-based features (RAG, ChromaDB, Ollama) that reach 92% rule-extraction accuracy.`,
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
      content: `These projects come from my professional work. Each one is briefly described with the stack I used and a link to the live product, covering compliance automation with LLMs, multi-branch business dashboards, multi-portal e-commerce, and location-based workforce management.`,
    },
  },
};
