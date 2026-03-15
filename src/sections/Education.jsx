import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    score: "CGPA: 9.19",
    duration: "Aug 2023 – Present",
    location: "Punjab, India",
    logo: "../assets/lpu.png",
    bg: "bg-orange-500/10 border-orange-500/20",
    color: "text-orange-400"
  },
  {
    institution: "Lucknow Public School and Colleges",
    degree: "Intermediate",
    score: "Percentage: 93.4%",
    duration: "Apr 2021 – Mar 2023",
    logo: "../assets/lps.png",
    bg: "bg-blue-500/10 border-blue-500/20",
    color: "text-blue-400"
  },
  {
    institution: "Jesus and Mary School and College",
    degree: "Matriculation",
    score: "Percentage: 92.8%",
    duration: "Apr 2019 – Mar 2021",
    logo: "../assets/jms.jpg",
    bg: "bg-red-500/10 border-red-500/20",
    color: "text-red-400"
  }
];

const TimelineItem = ({ item, index }) => {
  return (
    <div className="relative pl-12 md:pl-0 mb-12 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
      >
        {/* Spacer for Alternate Layout */}
        <div className="hidden md:block w-5/12" />

        {/* Timeline Icon */}
        <div className="absolute left-[15px] md:left-1/2 top-6 md:top-1/2 w-12 h-12 rounded-full bg-white border-2 border-neutral-700 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 shadow-xl overflow-hidden p-[2px]">
          <img src={item.logo} alt={item.institution} className="w-full h-full object-contain rounded-full transition-transform duration-300 hover:scale-110 bg-white" />
        </div>

        {/* Content Card */}
        <div className="w-full md:w-5/12">
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 relative group shadow-lg hover:shadow-2xl">
            <span className="text-sm font-semibold text-neutral-400 mb-2 block tracking-wider uppercase">{item.duration}</span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {item.institution}
            </h3>
            <h4 className="text-lg text-neutral-300 mb-4 font-medium">{item.degree}</h4>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-1.5 text-xs font-bold rounded-full border ${item.bg} ${item.color}`}>
                {item.score}
              </span>
              {item.location && (
                <span className="px-4 py-1.5 text-xs font-bold rounded-full border bg-neutral-800/50 border-neutral-700 text-neutral-300">
                  {item.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="w-full">
      <div className="relative max-w-5xl mx-auto">
        {/* Global Timeline Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform -translate-x-1/2 rounded-full" />

        <div className="py-10">
          {educationData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
