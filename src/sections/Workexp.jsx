import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDownload, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

const Workexp = () => {
  const workRef = useRef(null);
  const workInView = useInView(workRef, { once: false, amount: 0.2 });

  return (
    <motion.div 
      ref={workRef}
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={workInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">Work Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="group relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={workInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/20 transition-colors duration-500"></div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors shrink-0 mt-1">
                <FaBriefcase className="text-2xl text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Full Stack Developer Intern</h3>
                <div className="flex items-center gap-2 text-lg font-medium text-neutral-300">
                  <span>Ujjwala Global Academy</span>
                  <span className="text-neutral-500">•</span>
                  <a
                    href="https://ujjwala-school-academy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Live Site</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-2 md:mt-0">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-100 bg-blue-500/20 border border-blue-500/30 rounded-full shadow-inner whitespace-nowrap">
                May 2025 - Jul 2025
              </span>
            </div>
          </div>

          <div className="space-y-8 pl-0 md:pl-[76px]">
            {/* Responsibilities */}
            <div className="text-gray-300 text-base leading-relaxed">
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1.5 shrink-0">▹</span>
                  <span>Built and deployed Ujjwala Global Academy's website from scratch using React and Node, creating 5+ core sections and reducing manual information requests by 40%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1.5 shrink-0">▹</span>
                  <span>Integrated an LLM-based Q&A chatbot and dynamic Fun Fact generator using Gemini API, enhancing engagement by 30% with live, interactive AI responses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1.5 shrink-0">▹</span>
                  <span>Collaborated with design team and school authorities to deliver a 100% responsive, accessible, and SEO-optimized platform with cross-platform support and performance optimization.</span>
                </li>
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-4">Core Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'TailwindCSS', 'LLM APIs'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-1.5 text-xs font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Button */}
            <div className="pt-6 border-t border-white/10">
              <a
                href="/internshipCertificate.pdf"
                download="Internship_Certificate_Muskan_Agrawal.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl"
              >
                <FaDownload />
                <span>Download Certificate</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Workexp;