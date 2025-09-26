import React from 'react'
import ScrollReveal from '../components/ScrollReveal.jsx';
import CopyEmailButton from '../components/CopyEmailButton.jsx';

const Aboutnew = () => {
    return (
        <div className="min-h-[600px]">
          
            <h2 className="text-heading">About Me</h2>
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                I build more than just websites—I create experiences that blend design, performance, and functionality. My goal is to craft solutions that not only work but leave a lasting impact.
            </ScrollReveal>
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <div className="flex gap-4">
                    <CopyEmailButton className=" px-4 py-2 rounded cursor-pointer flex items-center justify-center" />
                <a
                  href="/src/assets/resume.pdf"
                  download
                  className="grid-black-color px-4 py-2 rounded cursor-pointer flex items-center justify-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
        </div>
    )
}

export default Aboutnew