import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Ayurvedic Health Dashboard",
    description: "A centralized wellness platform for dietitians and patients that generates Dosha-based Ayurvedic diet plans. Features include AI-based nutrient analysis, self-healing Gemini API integration, automated calorie tracking, and JWT authentication with secure cookies.",
    image: "../assets/ayur.png",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Gemini API", "Razorpay SDK"],
    github: "https://github.com/Muskanagrawal2005/AyuBalance",
    live: null,
  },
  {
    title: "Group Study Platform",
    description: "A real-time collaboration platform where students are matched with study partners. Features include cron-based intelligent study partner matching, real-time chat and file sharing, JWT authentication, and direct + group communication.",
    image: "../assets/group.png",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Socket.io", "node-cron"],
    github: "https://github.com/Muskanagrawal2005/studyMitr",
    live: null,
  },
  {
    title: "Customer Feedback Analyzer",
    description: "An AI-powered system that analyzes customer reviews to extract sentiment insights and identify common product issues. Includes dashboard visualization for feedback trends and automated topic extraction.",
    image: "../assets/feedback.png",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "HuggingFace"],
    github: "https://github.com/Muskanagrawal2005/Customer-feedback-analyzer",
    live: null,
  },
  {
    title: "Dev Time Capsule Extension",
    description: "A browser extension that allows developers to save coding milestones, learning breakthroughs, and future messages to themselves. Features a lightweight storage system and productivity journaling.",
    image: "../assets/extension.png",
    stack: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
    github: "https://github.com/Muskanagrawal2005/DevTimeCapsule",
    live: null,
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 h-full"
    >
      {/* Banner Image (Hidden currently) */}
      {/*
      <div className="w-full overflow-hidden rounded-2xl relative mb-6">
        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      */}

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors font-medium text-sm flex-1 justify-center border border-white/5"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;