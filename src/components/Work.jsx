import React from "react";
import send_icon from "../assets/send-icon.png";
import urlicon from "../assets/network.png";
import Aos from "aos";
import { Modal } from "antd";
import { useState, useEffect } from "react";
const Work = () => {
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 600,
          easing: "ease-in-sine",
          delay: 100,
        });
    })
  return (
    <div id="work" className="box-border w-11/12 px-[12%] py-10 scroll-mt-20">
      <div data-aos="fade-up-left">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in Full Stack web development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3  my-10 gap-5 dark:text-black">
        {/* 1 */}
        <div data-aos="flip-right">
        <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div
            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            onClick={() =>
              Modal.info({
                title: "Frontend project",
                content: (
                  <>
                    <div>
                      <h2 className="font-semibold">
                        NPNG ONLINE TRAINING COURSES
                      </h2>
                      <p className="text-sm text-gray-700">
                        Developed a responsive front-end website with integrated
                        email connectivity for NPNG Online Training Courses.
                        Utilized modern web development tools and best practices
                        to enhance user engagement and streamline communication.
                      </p>
                      <h2 className="font-semibold">Tools Used:</h2>
                      <ul className="text-sm" style={{ listStyleType: "disc" }}>
                        <li>
                          <span className="font-bold">Frontend:</span> HTML,
                          CSS, JavaScript, React
                        </li>
                        <li>
                          <span className="font-bold">Connectivity:</span> Node
                          mailer{" "}
                        </li>
                        <li>
                          <span className="font-bold">Version Control: :</span>
                          Git, GitHub
                        </li>
                        <li>
                          <span className="font-bold">
                            Backend Development:
                          </span>{" "}
                          Node.js, Express.js
                        </li>
                        <li>
                          {" "}
                          <span className="font-bold">
                            Styling & Design:{" "}
                          </span>{" "}
                          Tailwind CSS, Bootstrap
                        </li>
                        <li>
                          {" "}
                          <span className="font-bold">Hosting:</span> Hostinger
                        </li>
                      </ul>
                    </div>

                    <a
                      target="_blank"
                      href="https://github.com/mdnriyas17/npng-react-ins"
                      className="flex items-center gap-2 text-sm mt-5"
                    >
                      Source code
                      <img src={send_icon} alt="" className="w-4" />
                    </a>

                    <a
                      target="_blank"
                      href="https://npng.in/"
                      className="flex items-center gap-2 text-sm mt-5"
                    >
                      Live Url <img src={urlicon} alt="" className="w-5" />
                    </a>
                  </>
                ),
              })
            }
          >
            
            <div>
              <h2 className="font-semibold">Institute Website </h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        </div>
        <div  data-aos="flip-right" data-aos-duration="1500"  >
        <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div
            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            onClick={() =>
              Modal.info({
                title: "Frontend project",
                content: (
                  <>
                    <div>
                      <h2 className="font-semibold">
                        NPNG Tech - Frontend Project
                      </h2>
                      <p className="text-sm text-gray-700">
                        Developed a dynamic frontend project using HTML, CSS,
                        and JavaScript, focusing on DOM manipulation for
                        enhanced interactivity. Leveraged Bootstrap for
                        responsive design and styling, ensuring a modern and
                        user-friendly interface. Integrated email functionality
                        using Node.js and Nodemailer, enabling seamless
                        communication through the website.
                      </p>
                      <h2 className="font-semibold">Tools Used:</h2>
                      <ul className="text-sm" style={{ listStyleType: "disc" }}>
                        <li>
                          <span className="font-bold">
                            Frontend Development:
                          </span>{" "}
                          HTML, CSS, JavaScript
                        </li>
                        <li>
                          <span className="font-bold">Email Integration: </span>{" "}
                          Node js, Node mailer{" "}
                        </li>
                        <li>
                          <span className="font-bold">Version Control: :</span>
                          Git, GitHub
                        </li>
                        <li>
                          <span className="font-bold">Interactivity:</span> DOM
                          Manipulation
                        </li>
                        <li>
                          {" "}
                          <span className="font-bold">
                            Styling & Design:{" "}
                          </span>{" "}
                          Bootstrap
                        </li>
                        <li>
                          {" "}
                          <span className="font-bold">
                            Development Environment:
                          </span>
                          VS Code
                        </li>
                        <li>
                          {" "}
                          <span className="font-bold">Hosting:</span> Hostinger
                        </li>
                      </ul>
                    </div>

                    <a
                      target="_blank"
                      href="https://github.com/mdnriyas17/npng"
                      className="flex items-center gap-2 text-sm mt-5"
                    >
                      Source code
                      <img src={send_icon} alt="" className="w-4" />
                    </a>

                    <a
                      target="_blank"
                      href="https://npngtech.in/"
                      className="flex items-center gap-2 text-sm mt-5"
                    >
                      Live Url <img src={urlicon} alt="" className="w-5" />
                    </a>
                  </>
                ),
              })
            }
          >
            <div>
              <h2 className="font-semibold">Tech website</h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        </div>
        < div  data-aos="flip-right" data-aos-duration="2000"  >
        <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div
            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            onClick={() => {
              Modal.info({
                title: "Frontend project",
                content: (
                  <>
                    <div>
                      <h2 className="font-semibold">Real estate website</h2>
                      <p className="text-sm text-gray-700">
                        Developed a responsive front-end website for a real
                        estate project, featuring integrated email connectivity
                        to enhance customer interaction and lead generation.
                        Employed modern web development practices to create a
                        user-friendly and visually appealing interface.
                      </p>
                      <h2 className="font-semibold">Tools Used:</h2>
                      <ul className="text-sm" style={{ listStyleType: "disc" }}>
                        <li>
                          <span className="font-bold">
                            Frontend Development:
                          </span>{" "}
                          HTML, CSS, JavaScript, React.js
                        </li>
                        <li>
                          <span className="font-bold">Email Integration: </span>{" "}
                          Node js, Node mailer{" "}
                        </li>
                        <li>
                          <span className="font-bold">Version Control: :</span>
                          Git, GitHub
                        </li>
                        <li>
                          <span className="font-bold">Styling & Design: </span>{" "}
                          Tailwind CSS, Antd, Bootstrap
                        </li>
                        <li>
                          {" "}
                          <span className="font-bold">
                            Development Environment:
                          </span>
                          VS Code
                        </li>
                        <li>
                          {" "}
                          <span className="font-bold">Hosting:</span> Hostinger
                        </li>
                      </ul>
                    </div>
                    <a
                      target="_blank"
                      href="https://github.com/mdnriyas17/Finalresponsive_realeastate"
                      className="flex items-center gap-2 text-sm mt-5"
                    >
                      Source code
                      <img src={send_icon} alt="" className="w-4" />
                    </a>

                    <a
                      target="_blank"
                      href="https://realestate.npngtech.in/"
                      className="flex items-center gap-2 text-sm mt-5"
                    >
                      Live Url <img src={urlicon} alt="" className="w-5" />
                    </a>
                  </>
                ),
              });
            }}
          >
            <div>
              <h2 className="font-semibold">Real estate website</h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        </div>
        <div  data-aos="flip-right" data-aos-duration="1000"  >
        <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7" onClick={() => {
            Modal.info({
              title: "Full Stack project",
              content: (
                <>
                  <div>
                    <h2 className="font-semibold">Resume builder website with AI</h2>
                    <p className="text-sm text-gray-700">
                    Developed a full-stack resume builder website using the MERN stack, integrating Gemini AI for enhanced user experience and personalized suggestions. Implemented JWT token authentication and cookie management for secure and seamless user sessions. The project showcases expertise in building complex, user-centric web applications.
                    </p>
                    <h2 className="font-semibold">Tools Used:</h2>
                    <ul className="text-sm" style={{ listStyleType: "disc" }}>
                      <li> <span className="font-bold"> Frontend Development:</span> HTML, CSS, JavaScript, React.js</li>
                      <li> <span className="font-bold">Backend Development: </span> Node.js, Express.js</li>
                      <li> <span className="font-bold">Database : </span> MongoDB</li>
                      <li> <span className="font-bold">AI Integration:</span> Gemini AI</li>
                      <li> <span className="font-bold">Authentication & Security: </span> JWT Tokens, Cookies</li>
                      <li> <span className="font-bold">Styling & Design: </span> Tailwind CSS, Antd, Bootstrap</li>
                      <li> <span className="font-bold">Development Environment: </span> VS Code</li>
                      <li> <span className="font-bold">Hosting: </span> Hostinger</li>
                    </ul>
                  </div>
                  <a 
                    target="_blank"
                    href="https://github.com/mdnriyas17/AI-Resume-Builder-main"
                    className="flex items-center gap-2 text-sm mt-5"
                  >
                    Source code
                    <img src={send_icon} alt="" className="w-4" />
                  </a>

                  <a
                    target="_blank"
                    href="https://npngresume.npngtech.in/"
                    className="flex items-center gap-2 text-sm mt-5"
                  >
                    Live Url <img src={urlicon} alt="" className="w-5" />
                  </a>
                </>
              )
          })} 
        }>
            <div>
              <h2 className="font-semibold">Resume Builder</h2>
              <p className="text-sm text-gray-700">Full Stack Development</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        </div>
        < div  data-aos="flip-right" data-aos-duration="1500"  >
        <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7" onClick={() => {
            Modal.info({
              title: "Full Stack project",
              content: (
                <>
                  <div>
                    <h2 className="font-semibold">E-commerce website</h2>
                    <p className="text-sm text-gray-700">
                    Developed a full-stack e-commerce website using the MERN stack, incorporating Easebuzz for secure and reliable payment integration. Enhanced user engagement with AOS (Animate on Scroll) for smooth and visually appealing animations, delivering a seamless shopping experience.
                    </p>
                    <h2 className="font-semibold">Tools Used:</h2>
                    <ul className="text-sm" style={{ listStyleType: "disc" }}>
                      <li> <span className="font-bold"> Frontend Development:</span> HTML, CSS, JavaScript, React.js</li>
                      <li> <span className="font-bold">Backend Development: </span> Node.js, Express.js</li>
                      <li> <span className="font-bold">Database : </span> MongoDB</li>
                      <li> <span className="font-bold">Payment Integration:</span>Easebuzz</li>
                      <li> <span className="font-bold">Animation: </span> AOS (Animate on Scroll)</li>
                      <li> <span className="font-bold">Authentication & Security: </span> JWT Tokens, Cookies</li>
                      <li> <span className="font-bold">Styling & Design: </span> Tailwind CSS, Antd, Bootstrap</li>
                      <li> <span className="font-bold">Development Environment: </span> VS Code</li>
                      <li> <span className="font-bold">Hosting: </span> Hostinger</li>
                    </ul>
                  </div>
                  <a 
                    target="_blank"
                    href="https://github.com/mdnriyas17/dress_website_new"
                    className="flex items-center gap-2 text-sm mt-5"
                  >
                    Source code
                    <img src={send_icon} alt="" className="w-4" />
                  </a>

                  <a
                    target="_blank"
                    href="https://ecommerce.npngtech.in/"
                    className="flex items-center gap-2 text-sm mt-5"
                  >
                    Live Url <img src={urlicon} alt="" className="w-5" />
                  </a>
                </>
              )
          })} 
        }>
            <div>
              <h2 className="font-semibold">E-commerce website</h2>
              <p className="text-sm text-gray-700">Full Stack Development</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Work;
