import React from 'react'
import profile_img from '../assets/mypic.jpg'
import right_arrow_white from '../assets/right-arrow-white.png'
import download_icon from '../assets/download-icon.png'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {

  return (
    <div className="box-border w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
    <img src={profile_img} alt="" className="rounded-full w-32"/>
    <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Mohamedriyas P</h3>
    <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
      <TypeAnimation 
      sequence={["Full Stack Web Developer",1000, "Frontend Developer",1000, "MERN Stack Developer",1000]}
      wrapper="span"
      repeat={Infinity}
      speed={2}

      />
    </h1>
    <p className="max-w-2xl mx-auto font-Ovo">I am a Full Stack Web Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with Prest organizations, contributing to their success and growth.</p>

    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact"
        className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
        contact me <img src={right_arrow_white} alt="" className="w-4"/></a>

        <a target='_blank' href="https://drive.google.com/file/d/1hXiNobQOf6X09-q5muBaxAFSptPUMsAC/view?usp=drive_link" download
        className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">
        my resume <img src={download_icon} alt="" className="w-4"/></a>
    </div>
</div>
  )
}

export default Header
