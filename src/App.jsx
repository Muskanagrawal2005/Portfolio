import { useState } from 'react'
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

function App() {

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        {/* navbar */}
        <Navbar />

        {/* hero section with background */}
        <div className="relative min-h-screen">
          <div className="relative z-0" id='home'>
            <Hero />
          </div>
          <div className="absolute inset-0 w-full h-full z-10">
            <Herobg />
          </div>
        </div>

        {/* about */}
        <div id='about'><Aboutnew className="mb-20" /></div>

        {/* tech stack */}
        <div className="mb-20" id='skills'>
          <h2 className="text-heading mb-10">Skills</h2>
          <div className='flex justify-center'>
            <div className="grid-default-color w-220 flex justify-center">
              <Techstack />
            </div>
          </div>
        </div>

        {/* projects */}
        <div className="mb-20" id='projects'>
          <h2 className="text-heading mb-10">Projects</h2>
          <Projects />
        </div>

        {/* stats */}
        <div className="mb-20" id='stats'>
          <h2 className="text-heading mb-10">Stats</h2>
          <Stats />
        </div>

        {/* contact */}
        <div className="mb-20" id='contact'>
          <ContactImg />
        </div>

        {/* footer */}
      </div>
    </>
  )
}

export default App
