import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// …existing imports…

const Workexp = () => {
  const workRef = useRef(null)
  const workInView = useInView(workRef, { once: false, amount: 0.2 })

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
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 md:p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={workInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Full Stack Developer Intern</h3>
              <p className="text-blue-400 font-semibold">
                Ujjwala Global Academy |{' '}
                <a
                  href="https://ujjwala-school-academy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300"
                >
                  Live
                </a>
              </p>
            </div>
            <div className="text-gray-300 mt-2 md:mt-0">
              <p className="text-sm">May 2025 - Jul 2025</p>
            </div>
          </div>

          {/* …rest of the component… */}
          
          <div className="space-y-4">
            <div className="text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Built and deployed Ujjwala Global Academy's website from scratch using React and Node, creating 5+ core sections and reducing manual information requests by 40%.</li>
                <li>Integrated an LLM-based Q&A chatbot and dynamic Fun Fact generator using Gemini API, enhancing engagement by 30% with live, interactive AI responses.</li>
                <li>Collaborated with design team and school authorities to deliver a 100% responsive, accessible, and SEO-optimized platform with cross-platform support and performance optimization.</li>
              </ul>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'TailwindCSS', 'LLM APIs'].map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Download Link */}
            <div className="pt-4 border-t border-gray-700">
              <a
                href="/internshipCertificate.pdf"
                download="Internship_Certificate_Muskan_Agrawal.pdf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                
                Download Certificate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Workexp