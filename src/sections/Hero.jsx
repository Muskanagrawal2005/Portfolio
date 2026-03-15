import React from 'react'
import { motion } from "motion/react"
import Write from './Write'

const Hero = () => {
  return (

    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full pb-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-x-12 gap-y-12">
          {/* Left section */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className='flex flex-col gap-7'>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className='hero-text'
                >
                  <h1>I'm </h1>
                  <Write />
                </motion.div>

                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className='text-white-50 md:text-xl relative z-10 pointer-events-none max-w-2xl'
                >
                  Driven by curiosity, I build software that solves real problems and keeps me learning every day.                </motion.p>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full lg:w-5/12">
            <div className="flex justify-center">
              <motion.img
                width={280}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src="/assets/avatarmuskan.png"
                alt="Muskan Avatar"
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero