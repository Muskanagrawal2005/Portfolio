import TiltedCard from '../components/TiltedCrad.jsx';
import ContactForm from '../components/ContactForm.jsx';
import React from 'react'

const ContactImg = () => {
  return (
    <div className='flex justify-center items-center w-full max-w-7xl mx-auto gap-8 min-h-screen'>
      <div className="flex-[3] flex flex-col items-center justify-center">
        <TiltedCard
          imageSrc="src/assets/contactimg.jpeg "
          altText=""
          captionText="Muskan Agrawal"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">
              
            </p>
          }
        />
        {/* Social Icons below the image */}
        <div className="flex gap-4 mt-4 bg-white border-7 rounded-2xl">
          <a href="https://github.com/MuskanAgrawal2005" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/agrawal-muskan" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="mailto:muskanblp05@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Mail" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex-[7] flex justify-center w-full max-w-full">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactImg
