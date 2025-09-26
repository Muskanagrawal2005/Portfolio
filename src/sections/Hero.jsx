import React from 'react'
import { motion } from "motion/react"
import Write from './Write'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center gap-8">
        {/* Contact Form - 70% */}
        <div className="flex-[7] flex flex-col items-center justify-center min-w-0">
          {/* <ContactForm /> */}
          <div className="w-full max-w-none">
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className='flex flex-col gap-7 w-full'>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className='hero-text'
                >
                  <h1>I'm a</h1>
                  <Write />
                </motion.div>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className='text-white-50 md:text-xl relative z-10 pointer-events-none'
                >
                  Hi, I'm Muskan, a developer based in India with love towards building cool stuffs.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[3] flex justify-center items-center">
          
          <motion.img
            width={300}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src="/assets/avatarmuskan.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero