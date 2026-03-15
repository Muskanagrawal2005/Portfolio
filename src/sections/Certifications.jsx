import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FF2F207B2C78E8AC66FF7760F66AD9A26D75C1157AFBEA35F73E21967C8ECC22",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    bg: "bg-red-500/10"
  },
  {
    title: "Full Stack Development",
    issuer: "CipherSchools",
    date: "Jul 2025",
    link: "https://www.cipherschools.com/certificate/preview?id=687f76787efd6d5090704928",
    logo: "../assets/cipher.png",
    bg: "bg-orange-500/10"
  },
  {
    title: "Intermediate Problem Solving",
    issuer: "HackerRank",
    date: "Jun 2025",
    link: "https://www.hackerrank.com/certificates/fcdfa78463c8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    bg: "bg-green-500/10"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/19fLoaS9Lv3v6zKMs2UQMA11xs0UK1GhP/view",
    logo: "../assets/nptel.jpg",
    bg: "bg-blue-500/10"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/0JY1M44FCOCW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
    bg: "bg-blue-600/10"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    link: "https://www.freecodecamp.org/certification/fcc655c8782-2165-48f8-885c-236ad93c3ca2/responsive-web-design",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
    bg: "bg-neutral-500/10"
  }
];

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
  >
    <div className="flex items-start justify-between mb-6">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors p-2 ${cert.bg}`}>
        <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain filter" />
      </div>
      <span className="px-3 py-1 text-xs font-semibold text-neutral-400 bg-neutral-900/50 rounded-full border border-neutral-800">
        {cert.date}
      </span>
    </div>

    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
      {cert.title}
    </h3>
    <p className="text-neutral-400 font-medium mb-8 flex-grow">{cert.issuer}</p>

    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
    >
      <span>View Certificate</span>
      <FaExternalLinkAlt className="text-sm" />
    </a>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-10">
      {certificates.map((cert, index) => (
        <CertCard key={index} cert={cert} index={index} />
      ))}
    </div>
  );
};

export default Certifications;
