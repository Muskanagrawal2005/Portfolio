import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal.jsx';
import CopyEmailButton from '../components/CopyEmailButton.jsx';

const Aboutnew = () => {
  return (
    <motion.div
      className="min-h-[600px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4"></div>
      </div>
      <div className="space-y-6">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={10}
          textClassName="!text-lg md:!text-xl lg:!text-2xl !leading-relaxed !font-normal text-neutral-300"
        >
          I am a full-stack developer proficient in the MERN stack, with a solid foundation in Data Structures and Algorithms (DSA). I enjoy building scalable, user-friendly applications that solve real-world problems by applying efficient logic and optimized approaches. Beyond development, I am deeply interested in integrating AI into applications to create smarter and more impactful solutions, and I continuously strengthen my problem-solving skills through regular DSA practice.
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={10}
          textClassName="!text-lg md:!text-xl lg:!text-2xl !leading-relaxed !font-normal text-neutral-300"
        >
          I build more than just websites—I create experiences that seamlessly blend design, performance, and functionality. I actively explore new technologies, system design concepts, and modern frameworks to stay ahead in the evolving tech landscape. With a result-driven mindset and openness to new ideas, my goal is to craft solutions that not only work effectively but also leave a lasting impact.
        </ScrollReveal>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 size-full">
        <div className="flex gap-4">
          <CopyEmailButton className=" px-4 py-2 rounded cursor-pointer flex items-center justify-center" />
          <a
            href="/Resume.pdf"
            download
            className="grid-black-color px-4 py-2 rounded cursor-pointer flex items-center justify-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Aboutnew