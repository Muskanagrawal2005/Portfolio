import React from 'react'
import ChromaGrid from '../components/ChromaGrid.jsx'


const Projects = () => {
  const items = [
    {
      image: "src/assets/study.jpg",
      title: "Study Mitr",
      subtitle: "Study platform with match making",
      handle: "Github",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/Muskanagrawal2005/studyMitr"
    },
    {
      image: "src/assets/devtime.png",
      title: "DevTimeCapsule",
      subtitle: "Extension that tracks productivity",
      handle: "Github",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://github.com/Muskanagrawal2005/DevTimeCapsule"
    },
    {
      image: "src/assets/feedback.png",
      title: "Feedback Analyzer",
      subtitle: "Cateogarizes feedback into -positive,negative or neutral",
      handle: "Github",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/Muskanagrawal2005/Customer-feedback-analyzer"
    },
    {
      image: "src/assets/chatbot.jpg",
      title: "Museum Booking Chatbot",
      subtitle: "Books the ticket via a chatbot",
      handle: "Github",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://github.com/Muskanagrawal2005/Museum-Booking"
    }
    ,
    {
      image: "src/assets/note.png",
      title: "Notes App",
      subtitle: "Create and remove notes",
      handle: "Github",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://github.com/Muskanagrawal2005/Museum-Booking"
    }
  ];
  return (
    
    <div style={{ position: 'relative' }}>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  )
}

export default Projects