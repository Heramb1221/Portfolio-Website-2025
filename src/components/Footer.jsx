import {
    IconBrandFacebook,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandYoutube,
    IconBrandLeetcode,
  } from "@tabler/icons-react";
  import { useTheme } from "../context/ThemeContext";
  
  export default function Footer() {
    const { isDarkMode } = useTheme();
  
    return (
      <footer
        className={`py-8 transition-colors duration-500 ${
          isDarkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://leetcode.com/u/Heramb1221/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "hover:text-blue-400 text-gray-300"
                  : "hover:text-blue-600 text-gray-700"
              }`}
              aria-label="Leetcode"
            >
              <IconBrandLeetcode size={24} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCkWY7dPsAUxBaN2U1y8_6UA"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "hover:text-blue-400 text-gray-300"
                  : "hover:text-blue-600 text-gray-700"
              }`}
              aria-label="Youtube"
            >
              <IconBrandYoutube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/heramb-chaudhari/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "hover:text-blue-400 text-gray-300"
                  : "hover:text-blue-600 text-gray-700"
              }`}
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Heramb1221"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "hover:text-gray-400 text-gray-300"
                  : "hover:text-gray-900 text-gray-700"
              }`}
              aria-label="Github"
            >
              <IconBrandGithub size={24} />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Heramb Chaudhari. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }