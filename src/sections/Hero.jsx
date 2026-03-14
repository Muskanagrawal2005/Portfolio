import React from 'react'
import { motion } from "motion/react"
import Write from './Write'

const Hero = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full pb-4 mx-auto">
        <div className="flex items-center gap-x-8">
          {/* Left section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <div className='flex flex-col gap-7'>
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

          {/* Right section */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
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
      </div>
    </div>
  )
}

export default Hero