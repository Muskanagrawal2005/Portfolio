import { useState, useRef } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Herobg from './sections/Herobg'
import Techstack from './components/Techstack'
import Aboutnew from './sections/Aboutnew'
import Projects from './sections/Projects'
// import ContactForm from './components/ContactForm'
import ContactImg from './sections/ContactImg'
import Stats from './sections/Stats'
import Workexp from './sections/Workexp'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

function App() {
  const projectsRef = useRef(null)
  const achievementsRef = useRef(null)
  const contactRef = useRef(null)
  const skillsRef = useRef(null)

  const projectsInView = useInView(projectsRef, { once: false, amount: 0.2 })
  const achievementsInView = useInView(achievementsRef, { once: false, amount: 0.2 })
  const contactInView = useInView(contactRef, { once: false, amount: 0.2 })
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.2 })

  return (
    <>
      <div className="container mx-auto max-w-7xl px-4">
        {/* navbar */}
        <Navbar />

        {/* hero section with background */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="relative z-0 w-full" id='home'>
            <Hero />
          </div>
          <div className="absolute inset-0 w-full h-full z-10">
            <Herobg />
          </div>
        </div>

        {/* about */}
        <div id='about' className="py-20"><Aboutnew /></div>

        {/* work experience */}
        <div id='work' className="py-20"><Workexp /></div>

        {/* tech stack */}
        <motion.div 
          ref={skillsRef}
          className="py-20" 
          id='skills'
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4"></div>
          </div>
          <div className='flex justify-center'>
            <div className="grid-default-color w-220 flex justify-center">
              <Techstack />
            </div>
          </div>
        </motion.div>

        {/* projects */}
        <motion.div 
          ref={projectsRef}
          className="py-20" 
          id='projects'
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4"></div>
          </div>
          <Projects />
        </motion.div>

        {/* stats */}
        <motion.div 
          ref={achievementsRef}
          className="py-20" 
          id='stats'
          initial={{ opacity: 0, y: 50 }}
          animate={achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">Achievements</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4"></div>
          </div>
          <Stats />
        </motion.div>

        {/* contact */}
        <motion.div 
          ref={contactRef}
          className="py-20" 
          id='contact'
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContactImg />
        </motion.div>

        {/* footer */}
      </div>
    </>
  )
}

export default App