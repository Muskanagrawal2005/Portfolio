import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import { SiTailwindcss, SiExpress, SiPhp, SiCplusplus, SiGit, SiDocker } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {inView, motion} from "framer-motion"

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


const Techstack = () => {
  return (
    <div className="pt-12">
        <div 
        className="flex flex-wrap items-center justify-center gap-4">
  <motion.div 
  variants={iconVar(2.5)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <RiReactjsLine className="text-3xl text-cyan-400" />
  </motion.div>
  <motion.div 
  variants={iconVar(3)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <TbBrandNextjs className="text-3xl text-black" />
  </motion.div>
  <motion.div 
  variants={iconVar(5)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <SiMongodb className="text-3xl text-green-600" />
  </motion.div>
  <motion.div 
  variants={iconVar(6)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <FaNodeJs className="text-3xl text-green-500" />
  </motion.div>
  <motion.div 
  variants={iconVar(4)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <SiTailwindcss className="text-3xl text-cyan-400" />
  </motion.div>
  <motion.div
  variants={iconVar(2.5)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <SiExpress className="text-3xl text-black" />
  </motion.div>
  <motion.div 
  variants={iconVar(3)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <SiPhp className="text-3xl text-indigo-400" />
  </motion.div>
</div>

<div className="flex flex-wrap items-center justify-center gap-4 mt-5">
  <motion.div 
  variants={iconVar(5)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <SiCplusplus className="text-3xl text-blue-700" />
  </motion.div>
  <motion.div 
  variants={iconVar(2.5)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <SiGit className="text-3xl text-orange-500" />
  </motion.div>
  <motion.div 
  variants={iconVar(4)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <SiDocker className="text-3xl text-blue-400" />
  </motion.div>
  <motion.div 
  variants={iconVar(6)}
        initial="initial"
        animate="animate"
  className="rounded-2xl border-2 border-neutral-200 p-4">
    <FaGithub className="text-3xl text-black" />
  </motion.div>
</div>

    </div>
  )
}

export default Techstack