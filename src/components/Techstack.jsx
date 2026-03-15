import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import { SiTailwindcss, SiExpress, SiPhp, SiCplusplus, SiGit, SiDocker } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"

const iconVar=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const TechCard = ({ icon: Icon, name, color, delay }) => (
  <motion.div 
    variants={iconVar(delay)}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-2 border-neutral-700 bg-neutral-900/50 p-4 flex flex-col items-center justify-center gap-3 w-32 hover:bg-neutral-800 transition-colors"
  >
    <Icon className={`text-4xl ${color}`} />
    <span className="text-sm font-medium text-neutral-300">{name}</span>
  </motion.div>
);

const Techstack = () => {
  return (
    <div className="pt-12">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <TechCard icon={RiReactjsLine} name="React" color="text-cyan-400" delay={2.5} />
        <TechCard icon={FaNodeJs} name="Node.js" color="text-green-500" delay={6} />
        <TechCard icon={SiExpress} name="Express.js" color="text-neutral-400" delay={2.5} />
        <TechCard icon={SiMongodb} name="MongoDB" color="text-green-600" delay={5} />
        <TechCard icon={SiTailwindcss} name="TailwindCSS" color="text-cyan-400" delay={4} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
        <TechCard icon={SiCplusplus} name="C++" color="text-blue-500" delay={5} />
        <TechCard icon={TbBrandNextjs} name="Next.js" color="text-neutral-200" delay={3} />
        <TechCard icon={SiPhp} name="PHP" color="text-indigo-400" delay={3} />
        <TechCard icon={SiGit} name="Git" color="text-orange-500" delay={2.5} />
        <TechCard icon={SiDocker} name="Docker" color="text-blue-400" delay={4} />
        <TechCard icon={FaGithub} name="GitHub" color="text-neutral-200" delay={6} />
      </div>
    </div>
  )
}

export default Techstack