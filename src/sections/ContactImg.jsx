import TiltedCard from '../components/TiltedCrad.jsx';
import ContactForm from '../components/ContactForm.jsx';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactImg = () => {
  return (
    <div className='flex justify-center items-center w-full max-w-7xl mx-auto gap-8 min-h-[80vh] flex-col md:flex-row'>
      <div className="flex-[3] flex flex-col items-center justify-center relative">
        {/* Soft Background Glow Behind Tilt Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 drop-shadow-2xl">
          <TiltedCard
            imageSrc="../assets/connect.png"
            altText="System Architecture"
            captionText="Muskan Agrawal"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent pointer-events-none rounded-2xl" />
            }
          />
        </div>

        {/* Social Icons below the image */}
        <div className="flex gap-6 mt-8 p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:bg-white/10 transition-colors relative z-10">
          <a href="https://github.com/Muskanagrawal2005" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/agrawal-muskan/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="mailto:muskanblp05@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
            <FaEnvelope className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="flex-[7] flex justify-center w-full max-w-full mt-12 md:mt-0 relative z-10">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactImg;
