import React from 'react'
import mail_icon from '../assets/mail_icon.png'
import mail_icon_dark from '../assets/mail_icon_dark.png'
import cell from "../assets/cell1.png"
import cell_dark from "../assets/call2.png"
const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className="mt-20">
    <div className="text-center">
        {/* <img src={logo} alt="" className="w-36 mx-auto mb-2 dark:hidden"/>
        <img src={logo_dark} alt="" className="w-36 mx-auto mb-2 hidden dark:block"/> */}
        {/* <span className="w-36 mx-auto mb-2 dark:hidden">MOHAMEDRIYAS P</span>
        <span className="w-36 mx-auto mb-2 hidden dark:block">MOHAMEDRIYAS P</span> */}

        <div className="w-max flex items-center gap-2 mx-auto">
            <img src={mail_icon} alt="" className="w-6 dark:hidden"/>
            <img src={mail_icon_dark} alt="" className="w-6 hidden dark:block"/>
            <a href="mailto:mdnriyas@gmail.com">mdnriyas@gmail.com</a>
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
            <img src={cell_dark} alt="" className="w-6 dark:hidden"/>
            <img src={cell} alt="" className="w-6 hidden dark:block"/>
            <a href="tel: +91 8531803391">+91 8531803391</a>
        </div>
    </div>
    <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {date} Mohamedriyas. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target='_blank' href="https://github.com/mdnriyas17">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/mdnriyas/">LinkedIn</a></li>
            {/* <li><a target='_blank' href="https://instagram.com/greatstackdev">Twitter</a></li> */}
        </ul>
    </div>
 </div>
  )
}

export default Footer
