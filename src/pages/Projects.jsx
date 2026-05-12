import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const projectsData = {
  mern: [
    {
      title: "AI-Powered Content Generator",
      description:
        "An AI-powered content generation platform built using Gemini API that creates high-quality text content in real time with a modern, responsive UI and smooth user experience.",
      pros: [
        "Gemini API Integration",
        "Real-time Content Generation",
        "Responsive UI",
        "Text Animation",
        "Framer Motion",
        "Modern User Experience",
      ],
      future: ["Multi-language Support", "Content History", "Google Analytics"],
      git: "https://github.com/sksaakeeb/ai-content-generator",
      live: "https://ai-content-gen-lovat.vercel.app",
    },
    {
      title: "Smart Expense Tracker",
      description:
        "The Expense Tracker App is a powerful and easy-to-use web application that helps users manage their income and expenses with clarity and confidence.",
      pros: [
        "Real-time balance",
        "Transactions",
        "Authentication",
        "Cloud-based data",
      ],
      future: ["Activity dashboard", "Analytics", "Bar charts", "Graphs"],
      git: "https://github.com/sksaakeeb/expense-tracker",
      live: "https://expense-tracker-sakib-khaki.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description:
        "My personal portfolio that your are currently on , with weather like theme and some UI algorithms , Play arround and enjoy.",
      pros: [
        "Weather support",
        "Text Animation",
        "GSAP",
        "Framer Motion",
        "Canvas JS",
        "Matter JS",
      ],
      future: ["Foot fall", "Google Analytics"],
      git: "https://github.com/sksaakeeb/portfolio-website",
      live: "https://sksakib-portfolio.vercel.app",
    },
  ],
};

const ProjectCard = ({ title, description, pros, future, git, live }) => {
  return (
    <motion.div
      className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-primary/10 shadow-lg hover:border-primary/30 transition-all duration-300 group w-full"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px hsl(var(--primary) / 0.1), 0 8px 10px -6px hsl(var(--primary) / 0.1)",
      }}
    >
      <div className="relative">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-primary">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-foreground/80 mb-4 min-h-[60px] sm:h-24">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">
              Features
            </h4>
            <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/70 space-y-1">
              {pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">
              Future Scope
            </h4>
            <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/70 space-y-1">
              {future.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-auto pt-4 border-t border-primary/10">
          <a href={git} target="_blank" rel="noreferrer" className="flex-1">
            <button className="flex items-center justify-center space-x-2 text-foreground/70 hover:text-primary transition-colors w-full py-2 px-3 rounded-lg hover:bg-accent/50">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">GitHub</span>
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href={live} className="flex-1">
            <button className="flex items-center justify-center space-x-2 text-foreground/70 hover:text-primary transition-colors w-full py-2 px-3 rounded-lg hover:bg-accent/50">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Live Demo</span>
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { toast } = useToast();
  const handleMoreClick = () => {
    toast({
      title: "🚧 More Projects Coming Soon!",
      description:
        "I'm working on adding more exciting projects to my portfolio.",
    });
  };

  return (
    <PageWrapper
      title="Projects"
      description="A showcase of my work and projects."
    >
      <AnimatedText
        text="My Creations"
        as="h1"
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
      />
      <p className="text-center text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Here are some of the projects I've passionately built. Each one
        represents a unique challenge and a learning opportunity.
      </p>

      <ProjectSection
        title="MERN Stack Projects"
        projects={projectsData.mern}
      />

      <div className="text-center my-8 sm:my-12">
        <a
          href="https://github.com/sksaakeeb/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
            And More...
          </motion.button>
        </a>
      </div>
    </PageWrapper>
  );
};

const ProjectSection = ({ title, projects, singleColumn = false }) => (
  <section className="mb-12 sm:mb-16">
    <AnimatedText
      text={title}
      as="h2"
      className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary"
    />
    <div
      className={`grid gap-6 sm:gap-8 ${
        singleColumn
          ? "grid-cols-1"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  </section>
);

export default Projects;
