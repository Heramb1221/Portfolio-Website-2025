import { useState, useEffect, useRef } from "react";
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDarkMode: isDark } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } = backgroundRef.current.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  const gradientX = mousePosition.x * 100;
  const gradientY = mousePosition.y * 100;

  return (
    <div id="about-me"
      ref={backgroundRef}
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'text-gray-100' : 'text-gray-800'
      }`}
      style={{
        background: isDark
          ? `radial-gradient(circle at ${gradientX}% ${gradientY}%, #1f2937 0%, #111827 50%, #0f172a 100%)`
          : `radial-gradient(circle at ${gradientX}% ${gradientY}%, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)`
      }}
    >

      <div className="container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-center pt-16">
        <div className="w-full md:w-1/2 md:pr-8">
          <div className="overflow-hidden">
            <h2 className={`text-2xl ${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium transform translate-y-0 animate-fadeIn`}>
              Hello, I'm
            </h2>
          </div>

          <h1 className={`text-5xl md:text-6xl font-bold mt-2 mb-4 bg-clip-text text-transparent ${
            isDark 
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
          }`}>
            Heramb Chaudhari
          </h1>

          <div className="h-8 mb-6">
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } typing-text overflow-hidden whitespace-nowrap border-r-2 border-blue-500`}>
              Full Stack Developer
            </p>
          </div>

          <p className={`text-lg mb-8 max-w-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I craft exceptional digital experiences with clean code and creative solutions. Passionate about building responsive and intuitive applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                isDark
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                isDark
                  ? 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20'
                  : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${
              isDark ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'
            } flex items-center justify-center`}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-3/4">
                <path
                  fill={isDark ? "#3b82f6" : "#2563eb"}
                  d="M47.7,-57.2C59.5,-45.8,65.9,-29,69.3,-11.3C72.7,6.4,73.2,25,64.7,38.1C56.3,51.2,38.9,58.8,21.2,65.9C3.5,73,-14.6,79.6,-30.7,75.3C-46.8,71,-61,55.9,-70.2,37.7C-79.5,19.5,-83.9,-1.8,-77.8,-19.2C-71.8,-36.6,-55.2,-50.2,-38.4,-59.5C-21.6,-68.8,-4.6,-74,11.2,-86.9C27.1,-99.8,35.9,-68.6,47.7,-57.2Z" 
                  transform="translate(100 100)"
                />
              </svg>

              <div className={`absolute -top-4 -left-4 text-4xl font-mono font-bold ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>{"{"}</div>
              <div className={`absolute -bottom-4 -right-4 text-4xl font-mono font-bold ${isDark ? 'text-purple-500' : 'text-purple-600'}`}>{"}"}</div>
            </div>

            <div className={`absolute top-5 right-0 w-12 h-12 rounded-lg ${
              isDark ? 'bg-blue-500/20' : 'bg-blue-200'
            } animate-float`}>
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>

            <div className={`absolute bottom-10 left-0 w-10 h-10 rounded-full ${
              isDark ? 'bg-purple-500/20' : 'bg-purple-200'
            } animate-float2`}>
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
            </div>

            <div className={`absolute top-1/2 right-5 w-8 h-8 rounded-md ${
              isDark ? 'bg-pink-500/20' : 'bg-pink-200'
            } animate-float3`}>
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: ${isDark ? '#3b82f6' : '#2563eb'} }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float3 {
          animation: float3 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .typing-text {
          width: 0;
          animation: typing 3s steps(30) 1s forwards, blink 0.7s step-end infinite alternate;
        }
      `}</style>
    </div>
  );
}