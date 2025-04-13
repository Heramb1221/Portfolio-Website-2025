import { useState, useEffect, useRef } from 'react';
import { Layers, Palette, Monitor, Database, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SkillsShowcase() {
  const { isDarkMode, toggleTheme } = useTheme();
  const containerRef = useRef(null);
  const cloudRef = useRef(null);
  const cardsRef = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-100, 100], [5, -5]);
  const rotateY = useTransform(springX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    if (cloudRef.current) {
      const rect = cloudRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = `cardAppear 0.8s ease-out forwards ${
              index * 0.15
            }s`;
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Monitor size={24} />,
      skills: [
        { name: 'React.js', iconUrl: 'react/react-original.svg' },
        { name: 'JavaScript', iconUrl: 'javascript/javascript-original.svg' },
        { name: 'TypeScript', iconUrl: 'typescript/typescript-original.svg' },
        { name: 'Next.js', iconUrl: 'nextjs/nextjs-original.svg' },
        { name: 'CSS3', iconUrl: 'css3/css3-original.svg' },
        { name: 'Tailwind CSS', iconUrl: 'tailwindcss/tailwindcss-plain.svg' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Database size={24} />,
      skills: [
        { name: 'Node.js', iconUrl: 'nodejs/nodejs-original.svg' },
        { name: 'Express.js', iconUrl: 'express/express-original.svg' },
        { name: 'MongoDB', iconUrl: 'mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', iconUrl: 'postgresql/postgresql-original.svg' },
      ],
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      skills: [{ name: 'Figma', iconUrl: 'figma/figma-original.svg' }],
    },
  ];

  return (
    <div
      id="skills"
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'
      }`}
    >
      <div ref={containerRef} className="container mx-auto px-4 py-16">
        <motion.div
          ref={cloudRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            perspective: 1000,
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transition: 'transform 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
          }}
          className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-xl"
        >
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg'
                : 'bg-gradient-to-br from-white to-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-lg'
            }`}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3
              className={`text-xl font-semibold ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Interactive Skill Showcase
            </h3>
          </div>
          {skillCategories.flatMap((category) =>
            category.skills.map((skill, index) => (
              <motion.div
                key={`${category.id}-${index}`}
                className="absolute rounded-full flex items-center justify-center shadow-md"
                style={{
                  width: `${Math.max(45, 55)}px`,
                  height: `${Math.max(45, 55)}px`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animation: `float ${4 + Math.random() * 3}s ease-in-out infinite, rotate ${
                    6 + Math.random() * 4
                  }s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  zIndex: Math.floor(Math.random() * 10),
                  backgroundColor: `hsl(${Math.random() * 360}, 40%, ${
                    isDarkMode ? 25 : 95
                  }%)`,
                  color: isDarkMode ? 'white' : 'black',
                  scale: isHovered ? 1.05 : 1,
                  transition: 'scale 0.3s ease-out',
                }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconUrl}`}
                  alt={skill.name}
                  className="h-6 w-6 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://cdn.simpleicons.org/${skill.name
                      .toLowerCase()
                      .replace(/\s+/g, '')}`;
                  }}
                />
              </motion.div>
            ))
          )}
        </motion.div>

        <div className="flex justify-between items-center mb-12">
          <h1
            className={`text-4xl font-bold relative ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Professional Skills
            <div
              className={`h-1 w-24 mt-2 rounded-full bg-gradient-to-r ${
                isDarkMode ? 'from-blue-500 to-purple-500' : 'from-blue-600 to-purple-600'
              }`}
            ></div>
          </h1>
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              ref={(el) => (cardsRef.current[skillCategories.indexOf(category)] = el)}
              className={`rounded-xl overflow-hidden transition-all duration-500 ${
                isDarkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg border border-gray-200'
              } skill-card`}
            >
              <div className={`p-6 cursor-pointer`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center h-12 w-12 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                  >
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-gray-700 hover:bg-gray-650 border border-gray-600'
                          : 'bg-white hover:bg-gray-100 border border-gray-200'
                      } p-4 flex items-center gap-4 skill-item`}
                    >
                      <div
                        className={`relative flex-shrink-0 h-16 w-16 rounded-xl overflow-hidden flex items-center justify-center ${
                          isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}
                      >
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/10" />
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconUrl}`}
                          alt={skill.name}
                          className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://cdn.simpleicons.org/${skill.name
                              .toLowerCase()
                              .replace(/\s+/g, '')}`;
                          }}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-card {
          animation: cardAppear 0.8s ease-out forwards;
        }

        .skill-item {
          animation: cardAppear 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}