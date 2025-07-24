// src/components/About.jsx
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { AcademicCapIcon, BuildingLibraryIcon,ArrowRightIcon  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import developerAnimation from "../assets/developer.json";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-slate-50 dark:bg-[#111827] flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Lottie Animation */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Player
          autoplay
          loop
          src={developerAnimation}
          className="w-[300px] md:w-[400px]"
        />
      </motion.div>

      {/* About Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Hi, I’m <span className="font-semibold text-purple-600 dark:text-purple-400">Arpit Pandey</span>, a
          <span className="font-semibold"> Full-Stack Developer</span> and
          <span className="font-semibold"> Tech Enthusiast</span>. I love building
          user-friendly web applications with technologies like{" "}
          <span className="text-blue-500 font-semibold">React</span>,{" "}
          <span className="text-blue-500 font-semibold">Express</span>,{" "}
          <span className="text-green-600 font-semibold">Node.js</span>, and{" "}
          <span className="text-green-500 font-semibold">MongoDB</span>.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">I have good command in  <span className="text-blue-500 font-semibold">JavaScript</span>,{" "} and  <span className="text-blue-500 font-semibold">C++</span>,{" "}.
         Other than that I like solving questions of <span className="text-blue-500 font-semibold">Dsa</span>,{" "} in <span className="text-green-500 font-semibold"> C++</span>. Also learning <span className="text-teal-500 font-semibold">Python</span> to make Ai integrated projects in future.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I'm always learning new tools, polishing my skills, and looking forward to learn more and more. 
          Let’s build something awesome together!
        </p>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Education
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <AcademicCapIcon className="w-6 h-6 text-purple-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Bachelor of Technology in <span className="font-medium">Computer Science</span> from <span className="font-medium">Gyan Ganga College of Technology, </span>Jabalpur(M.P)
              </p> 
               <ArrowRightIcon  className="w-6 h-6 text-purple-500 mt-1" /><p>2021-2025</p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowRightIcon  className="w-6 h-6 text-purple-500 mt-1" /><p>C.G.P.A. - 7.92</p>
              
            </div>
            <div className="flex items-start gap-4">
              <BuildingLibraryIcon className="w-6 h-6 text-teal-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Completed schooling from{" "}
                <span className="font-medium">Mispa Mission Heigher Secondary School</span>, Sihora (M.P)
              </p>
            </div>
            <div className="flex items-start gap-4">
              <ArrowRightIcon  className="w-6 h-6 text-teal-500 mt-1" /><p>Percentage in class 12th - 84.4%</p>
              <ArrowRightIcon  className="w-6 h-6 text-teal-500 mt-1" /><p>Percentage in class 10th - 86.6%</p>
              
            </div>
          </div>
          
        </div>

         <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Extra Curricular
          </h3>
          <div className="space-y-4">
           
            <div className="flex items-start gap-4">
              <ArrowRightIcon  className="w-6 h-6 text-blue-500 mt-1" /><p>Smart India Hackathon (SIH) — Participated twice and selected in internal hackathon rounds at institute level.
            </p>
              
            </div>
             <div className="space-y-4">
            <div className="flex items-start gap-4">
            <div className="flex items-start gap-4">
              <ArrowRightIcon  className="w-6 h-6 text-green-500 mt-1" /><p>National Cadet Corps (NCC) — Completed 2 years of training and earned ’B’ Certificate.</p>
            </div>
              <ArrowRightIcon  className="w-6 h-6 text-blue-500 mt-1" /><p>Hobbies: Playing Football , watching Cricket.
            </p>
              
            
            </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default About;
