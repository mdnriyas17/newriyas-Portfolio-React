import React, { useEffect } from "react";
import user_image from "../assets/mainimage.jpg";
import circular_text from "../assets/circular-text.png";
import dev_icon from "../assets/dev-icon.png";
import code_icon from "../assets/code-icon.png";
import code_icon_dark from "../assets/code-icon-dark.png";
import edu_icon from "../assets/edu-icon.png";
import edu_icon_dark from "../assets/edu-icon-dark.png";
import project_icon from "../assets/project-icon.png";
import project_icon_dark from "../assets/project-icon-dark.png";
import vscode from "../assets/vscode.png";
import firebase from "../assets/c-.png";
import figma from "../assets/js.png";
import git from "../assets/programing.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/physics.png";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <div id="about" className="box-border w-full px-[12%] py-10 scroll-mt-20">
      <div data-aos="fade-up-right">
        <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-Ovo">About me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="max-w-max mx-auto relative">
            <div data-aos="flip-left">
              <img
                src={user_image}
                alt=""
                className="w-64 sm:w-80 rounded-3xl max-w-none"
              />
            </div>
            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
              <img
                src={circular_text}
                alt=""
                className="w-full animate-spin_slow"
              />
              <img
                src={dev_icon}
                alt=""
                className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
              Full Stack Developer with 1.5 years of experience, including work
              at NPNG Tech and GUVI. Proficient in the MERN stack and C++ for
              Data Structures and Algorithms. Completed over 70 coding problems,
              showcasing strong problem-solving skills. Experienced in building
              responsive, scalable web applications, optimizing performance, and
              integrating RESTful APIs. Skilled in delivering high-quality,
              user-friendly solutions.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                "
              >
                <img src={code_icon} alt="" className="w-7 mt-3 dark:hidden" />
                <img
                  src={code_icon_dark}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Languages
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  HTML, CSS, JavaScript React Js, C++{" "}
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden" />
                <img
                  src={edu_icon_dark}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Education
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  B.Com (Honours){" "}
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img
                  src={project_icon}
                  alt=""
                  className="w-7 mt-3 dark:hidden"
                />
                <img
                  src={project_icon_dark}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Projects
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  Built more than 5 projects{" "}
                </p>
              </li>
            </ul>
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
              Tools i use
            </h4>

            <ul className="flex items-center gap-3 sm:gap-5">
              {/* <div data-aos="flip-left">
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <img src={vscode} alt="" className="w-5 sm:w-7" />
                </li>
              </div> */}
              <div data-aos="flip-left" >
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <img src={firebase} alt="" className="w-5 sm:w-7" />
                </li>
              </div>
              <div data-aos="flip-left" data-aos-delay="500">
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <img src={react} alt="" className="w-5 sm:w-7" />
                </li>{" "}
              </div>
              <div data-aos="flip-left" data-aos-delay="1000">
                {" "}
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <img src={mongodb} alt="" className="w-5 sm:w-7" />
                </li>
              </div>
              <div data-aos="flip-left" data-aos-delay="1500">
                {" "}
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <img src={figma} alt="" className="w-5 sm:w-7" />
                </li>
              </div>
              <div data-aos="flip-left" data-aos-delay="2000">
                {" "}
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <img src={git} alt="" className="w-5 sm:w-7" />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
