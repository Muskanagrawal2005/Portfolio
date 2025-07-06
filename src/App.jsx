import React from 'react';
import './App.css';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const resumeUrl = "/resume.pdf";
const profileImg = "/muskanAvatar.jpeg";

const projects = [
  {
    title: "DevTimeCapsule – AI Developer Journal Chrome Extension",
    date: "07/2025 - 07/2025",
    tech: ["JavaScript", "Chrome APIs", "Gemini API", "Web Extension APIs"],
    desc: [
      "Developed a Chrome extension that tracked daily developer activity (tabs, code, questions) with 95% accuracy.",
      "Integrated Gemini API to generate AI-based learning journals, improving user reflection time by 60%."
    ],
    github: "https://github.com/Muskanagrawal2005/DevTimeCapsule",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
  },
  {
    title: "Energy-Efficient CPU Scheduling Algorithm Visualizer",
    date: "03/2025 - 04/2025",
    tech: ["TypeScript", "ReactJS", "recharts", "TailwindCSS"],
    desc: [
      "Designed an energy-efficient CPU scheduling visualizer supporting 4+ algorithms (FCFS, SJF, Round Robin, Priority) using real-time JavaScript-based charts.",
      "Applied critical thinking to stimulate 10+ task executions to display estimated energy consumption, turnaround time, and CPU idle cycles per algorithm."
    ],
    github: "https://github.com/Muskanagrawal2005/CPU-Scheduling-Visualizer",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "Customer Feedback Analyzer",
    date: "03/2025 - 04/2025",
    tech: ["Express.js", "MongoDB", "Chart.js","HuggingFace API"],
    desc: [
      "Built a sentiment classification system using Hugging Face API, achieving 92% classification accuracy on test feedback.",
      "Visualized over 50+ feedback entries via interactive pie charts to support data-driven decisions."
    ],
    github: "https://github.com/Muskanagrawal2005/Customer-Feedback-Analyzer",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    title: "Museum Booking Chatbot System",
    date: "03/2025 - 04/2025",
    tech: ["PHP", "MySQL", "JavaScript", "PHPMailer"],
    desc: [
      "Collaborated in building a chatbot-based ticket booking system with secure login, payment integration, and 3 booking flows, tested across 10+ scenarios.",
      "Automated email confirmations and digital receipts using PHPMailer, reducing manual email handling by 100%."
    ],
    github: "https://github.com/Muskanagrawal2005/Museum-Booking-Chatbot",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    title: "Meet-up Website",
    date: "05/2024 - 06/2024",
    tech: ["Express.js", "CSS", "MongoDB", "Node.js"],
    desc: [
      "Developed a real-time event platform with 4+ functional modules (profiles, events, news) using Node.js and Express.js enable seamless multi-user communication and event coordination."
    ],
    github: "https://github.com/Muskanagrawal2005/Meetup-Website",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  }
];

const education = [
  {
    school: "Lovely Professional University, Phagwara, Punjab",
    degree: "Bachelor's - Computer Science and Engineering",
    score: "9.15 CGPA",
    year: "2023 - 2027"
  },
  {
    school: "Lucknow Public School And Colleges, Lucknow, Uttar Pradesh",
    degree: "Higher Secondary Certificate - CBSE",
    score: "93.4 %",
    year: "2021 – 2023"
  },
  {
    school: "Jesus & Mary School And College, Balrampur, Uttar Pradesh",
    degree: "Secondary School Certificate - ICSE",
    score: "92.8 %",
    year: "2019 - 2021"
  }
];

const skillGroups = [
  {
    group: "Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ]
  },
  {
    group: "Libraries & Frameworks",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", bg: "bg-white" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "WebRTC" },
      { name: "WebSockets" },
    ]
  },
  {
    group: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ]
  },
  {
    group: "Core CS Concepts",
    skills: [
      { name: "Data Structures" },
      { name: "Operating Systems" },
      { name: "Networking" },
      { name: "DBMS" },
      { name: "Software Engineering" },
    ]
  },
  {
    group: "Technologies & Domains",
    skills: [
      { name: "Generative AI" },
      { name: "Large Language Models (LLMs)" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ]
  },
  {
    group: "Tools & Platforms",
    skills: [
      { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Chrome DevTools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ]
  },
  {
    group: "Soft Skills",
    skills: [
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Adaptability" },
      { name: "Analytical Thinking" },
      { name: "Continuous Learning" },
    ]
  },
];

const socialLinks = [
  { href: "mailto:muskanblp05@gmail.com", icon: (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.6 6.2L19.6 6H4.4Zm-.4 1.32V17.5c0 .276.224.5.5.5h15a.5.5 0 0 0 .5-.5V7.32l-7.36 6.01a1 1 0 0 1-1.28 0L4 7.32Z" fill="currentColor"/></svg>
  ), title: "Email" },
  { href: "https://linkedin.com/in/agrawal-muskan", icon: (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.27h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.39-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v6.5z" fill="currentColor"/></svg>
  ), title: "LinkedIn" },
  { href: "https://github.com/Muskanagrawal2005", icon: (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.8c.85.004 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
  ), title: "GitHub" },
];

// Typewriter effect for hero subtitle
function useTypewriter(words, speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  React.useEffect(() => {
    if (index === words.length) return;
    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  React.useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
}

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [modalProject, setModalProject] = useState(null);

  // Typewriter for hero subtitle
  const subtitle = useTypewriter([
    'Full Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Open Source Contributor'
  ]);

  // Scrollspy effect
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutTop = aboutRef.current.offsetTop - 100;
      const projectsTop = projectsRef.current.offsetTop - 100;
      const contactTop = contactRef.current.offsetTop - 100;
      if (scrollY >= contactTop) setActiveSection('contact');
      else if (scrollY >= projectsTop) setActiveSection('projects');
      else setActiveSection('about');
      setShowTop(scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen text-gray-900 font-sans relative">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-lg flex justify-between items-center px-6 py-3">
        <span className="font-bold text-blue-700 text-lg cursor-pointer" onClick={() => scrollTo(aboutRef)}>Muskan.dev</span>
        <div className="flex gap-6">
          <button className={`hover:text-blue-600 pb-1 border-b-2 transition-all ${activeSection==='about' ? 'border-blue-600 text-blue-700' : 'border-transparent'}`} onClick={() => scrollTo(aboutRef)}>About</button>
          <button className={`hover:text-blue-600 pb-1 border-b-2 transition-all ${activeSection==='projects' ? 'border-blue-600 text-blue-700' : 'border-transparent'}`} onClick={() => scrollTo(projectsRef)}>Projects</button>
          <button className={`hover:text-blue-600 pb-1 border-b-2 transition-all ${activeSection==='contact' ? 'border-blue-600 text-blue-700' : 'border-transparent'}`} onClick={() => scrollTo(contactRef)}>Contact</button>
        </div>
        <a href={resumeUrl} download className="bg-blue-600 text-white px-4 py-1 rounded shadow hover:bg-blue-700 transition text-sm">Resume</a>
      </nav>

      {/* HERO SECTION */}
      <motion.section ref={aboutRef} className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-br from-blue-100/80 to-purple-100/60" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.img src={profileImg} alt="Profile" className="w-36 h-36 rounded-full border-4 border-blue-400 shadow-lg mb-6 object-cover aspect-square bg-white" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} />
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Muskan Agrawal</h1>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 min-h-[2.5rem]">{subtitle}</h2>
        <p className="max-w-xl text-lg text-gray-700 mb-6">I love building AI-powered web apps, Chrome extensions, and real-time systems. I focus on clean, scalable code and seamless user experiences.</p>
        <motion.div className="flex gap-4 justify-center mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          {socialLinks.map((s, i) => (
            <motion.a key={i} href={s.href} className="rounded-full bg-white/70 shadow p-3 hover:bg-blue-100 transition" title={s.title} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" whileHover={{ scale: 1.15, rotate: 8 }}>
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={resumeUrl} download className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">Download Resume</a>
          <button onClick={() => scrollTo(contactRef)} className="bg-white text-blue-700 border border-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-50 transition font-semibold">Contact Me</button>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section ref={projectsRef} className="max-w-5xl mx-auto px-4 mb-20" id="projects" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h3 className="text-3xl font-bold mb-8 text-blue-800 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-blue-200 group relative overflow-hidden card-glass cursor-pointer"
              whileHover={{ scale: 1.05, rotate: -2, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
              onClick={() => setModalProject(proj)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={proj.img} alt={proj.title} className="w-14 h-14 mb-3 z-10" />
              <h4 className="text-lg font-semibold text-blue-700 mb-1 group-hover:underline text-center z-10">{proj.title}</h4>
              <span className="text-xs text-gray-500 mb-1">{proj.date}</span>
              <div className="flex flex-wrap gap-2 mb-3 justify-center z-10">
                {proj.tech.map((t, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">{t}</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-2 text-center z-10 line-clamp-2">{proj.desc[0]}</p>
              <span className="text-blue-600 hover:underline text-xs font-semibold z-10">View Details</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {modalProject && (
          <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full relative animate-fade-in" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}>
              <button className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl" onClick={() => setModalProject(null)}>&times;</button>
              <div className="flex flex-col items-center">
                <img src={modalProject.img} alt={modalProject.title} className="w-16 h-16 mb-2" />
                <h4 className="text-xl font-bold text-blue-700 mb-1">{modalProject.title}</h4>
                <span className="text-xs text-gray-500 mb-2">{modalProject.date}</span>
                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                  {modalProject.tech.map((t, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">{t}</span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-700 mb-2 text-left">
                  {modalProject.desc.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
                <div className="flex gap-3 mt-2">
                  <a href={modalProject.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">View Code</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SKILLS */}
      <motion.section className="max-w-3xl mx-auto px-4 mb-20" id="skills" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h3 className="text-3xl font-bold mb-8 text-blue-800 text-center">Skills</h3>
        <div className="space-y-8">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <div className="font-semibold text-blue-700 mb-2 text-lg">{group.group}</div>
              <div className="flex flex-wrap gap-4 items-center">
                {group.skills.map((skill, i) => (
                  <motion.div key={i} className="flex flex-col items-center group" whileHover={{ scale: 1.15, rotate: 8 }}>
                    {skill.icon ? (
                      <div className={`rounded-full p-2 ${skill.bg || 'bg-gray-100'}`}><img src={skill.icon} alt={skill.name} className="w-10 h-10" /></div>
                    ) : (
                      <div className="rounded-full p-2 bg-blue-100 w-10 h-10 flex items-center justify-center text-blue-700 font-bold text-sm">
                        {skill.name.split(' ').map(w => w[0]).join('').substring(0,2)}
                      </div>
                    )}
                    <span className="text-xs text-gray-700 group-hover:text-blue-700 transition mt-1">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section className="max-w-xl mx-auto px-4 mb-20 flex flex-col items-center text-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold mb-2 text-blue-800">Education</h3>
        <div className="space-y-4 w-full">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-lg rounded-lg shadow p-4 border-l-4 border-blue-400 w-full card-glass">
              <div className="font-semibold text-blue-700">{edu.school}</div>
              <div className="text-gray-700">{edu.degree} <span className="text-sm text-gray-500">({edu.score})</span></div>
              <div className="text-sm text-gray-500">{edu.year}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section ref={contactRef} className="max-w-xl mx-auto px-4 mb-16 text-center" id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold mb-4 text-blue-800">Contact</h3>
        <p className="mb-4">Want to connect or collaborate? Reach out via <a href="mailto:muskanblp05@gmail.com" className="text-blue-600 hover:underline">email</a> or message me on <a href="https://linkedin.com/in/agrawal-muskan" className="text-blue-600 hover:underline">LinkedIn</a>.</p>
        <a href="mailto:muskanblp05@gmail.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">Email Me</a>
      </motion.section>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showTop && (
          <motion.button onClick={() => scrollTo(aboutRef)} className="fixed bottom-8 right-8 bg-white/80 shadow-lg rounded-full p-3 hover:bg-blue-100 transition z-50" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} transition={{ duration: 0.3 }}>
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none"><path d="M12 4l-8 8h6v8h4v-8h6z" fill="#2563eb"/></svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 pb-6 flex flex-col items-center gap-2">
        <div className="flex gap-4 justify-center mb-1">
          {socialLinks.map((s, i) => (
            <motion.a key={i} href={s.href} className="rounded-full bg-white/70 shadow p-2 hover:bg-blue-100 transition" title={s.title} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 8 }}>
              {s.icon}
            </motion.a>
          ))}
        </div>
        <span>&copy; {new Date().getFullYear()} Muskan Agrawal</span>
      </footer>
    </div>
  );
}
