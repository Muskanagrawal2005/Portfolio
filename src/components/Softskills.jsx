import React from 'react'
import { FaLightbulb, FaUsers, FaHandshake } from "react-icons/fa";
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

const SoftSkillCard = ({ icon: Icon, name, color, delay }) => (
  <motion.div 
    variants={iconVar(delay)}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-2 border-neutral-700 bg-neutral-900/50 p-6 flex flex-col items-center justify-center gap-4 w-40 hover:bg-neutral-800 transition-colors"
  >
    <Icon className={`text-4xl ${color}`} />
    <span className="text-sm font-medium text-neutral-300 text-center">{name}</span>
  </motion.div>
);

const Softskills = () => {
  return (
    <div className="pt-2 pb-2">
      <div className="flex flex-wrap items-center justify-center gap-8">
        <SoftSkillCard icon={FaLightbulb} name="Problem-Solving" color="text-yellow-400" delay={3} />
        <SoftSkillCard icon={FaUsers} name="Team Management" color="text-blue-400" delay={5} />
        <SoftSkillCard icon={FaHandshake} name="Collaboration" color="text-green-400" delay={4} />
      </div>
    </div>
  )
}

export default Softskills
