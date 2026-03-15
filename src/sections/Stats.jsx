import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaTrophy, FaLaptopCode } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const Counter = ({ end, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    title: "DSA Problems Solved",
    value: 400,
    icon: FaCode,
    color: "from-blue-400 to-cyan-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "LeetCode Rating",
    value: 1500,
    icon: SiLeetcode,
    color: "from-yellow-400 to-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "CodeChef Rating",
    value: 1200,
    icon: SiCodechef,
    color: "from-amber-700 to-amber-900",
    bg: "bg-amber-800/10"
  },
  {
    title: "Open Source Contributions",
    value: 4,
    icon: FaLaptopCode,
    color: "from-purple-400 to-pink-500",
    bg: "bg-purple-500/10"
  }
];

const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-0" />
      <div className="bg-neutral-900/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center h-full relative z-10 
                      border border-white/5 hover:border-white/10 transition-all duration-300 shadow-xl">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${stat.bg}`}>
          <stat.icon className={`text-3xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ fill: "url(#gradient-" + index + ")" }} />

          {/* SVG definitions for gradient matching the text trick */}
          <svg width="0" height="0">
            <linearGradient id={`gradient-${index}`} x1="100%" y1="100%" x2="0%" y2="0%">
              {index === 0 && <><stop stopColor="#3b82f6" offset="0%" /><stop stopColor="#22d3ee" offset="100%" /></>}
              {index === 1 && <><stop stopColor="#f59e0b" offset="0%" /><stop stopColor="#f97316" offset="100%" /></>}
              {index === 2 && <><stop stopColor="#78350f" offset="0%" /><stop stopColor="#b45309" offset="100%" /></>}
              {index === 3 && <><stop stopColor="#c084fc" offset="0%" /><stop stopColor="#ec4899" offset="100%" /></>}
            </linearGradient>
          </svg>
        </div>

        <h4 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
          <Counter end={stat.value} />
        </h4>
        <p className="text-neutral-400 font-medium">{stat.title}</p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
};

export default Stats;