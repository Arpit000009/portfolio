// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import leetcode from "../assets/leetcode.png"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1f2937] text-gray-700 dark:text-gray-300 px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">
            Arpit Pandey | Full-Stack Developer & Tech Enthusiast
          </h2>
          <h3 className="text-lg ">
            arpitpandey000009@gmail.com
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4">
          {["home", "projects", "skills", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-60}
              className="cursor-pointer hover:text-purple-500 transition-colors text-sm capitalize"
            >
              {section}
            </ScrollLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Arpit000009"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arpit-pandey-b7814027b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
  href="https://leetcode.com/u/arpitpandey_cse21/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-yellow-500 transition-colors"
>
  <img
    src={leetcode} // local import like: import leetcode from './assets/leetcode.png';
    alt="LeetCode"
    className="w-6 h-6 object-contain hover:scale-110 transition-transform duration-300"
  />
</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
