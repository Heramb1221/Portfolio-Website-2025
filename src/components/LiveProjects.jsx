import { useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, Clock, Code, Zap, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import QR from '../assets/QR.png';
import Notes from '../assets/Ecommerce.png';

export default function LiveProjects() {
  const { isDarkMode } = useTheme();

  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  const projects = [
    {
      id: 1,
      title: "QR-Code Based Voter Verification System",
      description: "A secure and responsive web application that uses QR code-based authentication to verify voter identity in real-time and prevent duplicate or unauthorized voting.",
      status: "In Progress",
      completion: 90,
      tech: ["React", "Express.js", "MongoDB", "Tailwind"],
      image: QR,
      color: "from-purple-500 to-pink-500",
      lightColor: "from-purple-100 to-pink-100"
    },
    {
      id: 2,
      title: "VogueVault",
      description: "A modern React-based fashion e-commerce UI showcasing popular women’s products with smooth animations and responsive design.",
      status: "Active Development",
      completion: 20,
      tech: ["React", "CSS", "Express.js", "Node.js"],
      image: Notes,
      color: "from-blue-500 to-teal-400",
      lightColor: "from-blue-100 to-teal-100"
    }
  ];

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const viewDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''} transition-colors duration-500`}>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            Live Projects
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleView}
              className="p-2 rounded-lg transition-all duration-300 bg-white hover:bg-gray-100 shadow-md dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="grid grid-cols-2 gap-1 w-6 h-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`${isGridView ? 'bg-blue-500' : 'bg-gray-400'} rounded-sm`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>

        <div className={isGridView
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4"
          : "flex flex-col gap-6 pr-4"
        }>
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => viewDetails(project)}
              className={`
                group relative cursor-pointer transition-all duration-500
                ${isGridView
                  ? 'rounded-xl overflow-hidden'
                  : 'rounded-xl overflow-hidden flex flex-col md:flex-row'
                }
                bg-white hover:bg-white shadow-xl hover:shadow-2xl ${isDarkMode ? 'dark:bg-gray-800 dark:hover:bg-gray-750 dark:shadow-lg dark:hover:shadow-xl' : 'shadow-md hover:shadow-lg'}
                ${hoveredId === project.id
                  ? 'transform translate-y-0 scale-105 z-10'
                  : 'scale-100 z-0'
                }
              `}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? project.color : project.lightColor} opacity-20 rounded-xl transition-opacity duration-300 
                  ${hoveredId === project.id ? 'opacity-30' : 'opacity-10'}`
                }
              />

              <div className={`${isGridView ? 'w-full' : 'md:w-2/5'} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? project.color : project.lightColor} opacity-80`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className={`
                    w-full h-48 object-cover mix-blend-overlay transition-transform duration-700
                    ${hoveredId === project.id ? 'scale-110' : 'scale-100'}
                  `}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                <div className="absolute top-3 right-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-80 text-gray-800 dark:bg-gray-900 dark:bg-opacity-50 dark:text-white`}>
                    {project.status}
                  </div>
                </div>
              </div>

              <div className={`p-6 ${isGridView ? '' : 'md:w-3/5'} relative z-10`}>
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {project.title}
                </h3>

                <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>Progress</span>
                    </span>
                    <span>{project.completion}%</span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${isDarkMode ? project.color : project.lightColor} transition-all duration-1000 ease-out`}
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-1 text-xs font-medium mb-2">
                    <Code size={14} />
                    <span>Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full backdrop-blur-sm ${isDarkMode ? 'bg-gray-700 dark:bg-opacity-70 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className={`
                    group/btn flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium
                    text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200
                  `}
                >
                  <span>View Details</span>
                  <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

              <div
                className={`
                  absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 
                  group-hover:opacity-10 transition-opacity duration-700 pointer-events-none
                `}
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'glare 3s linear infinite',
                  animationDelay: `${project.id * 0.2}s`
                }}
              />

              <style jsx>{`
                @keyframes glare {
                  0% { background-position: -100% -100%; }
                  100% { background-position: 200% 200%; }
                }
              `}</style>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(0,0,0,0.4) dark:rgba(0,0,0,0.7)'
            }}
          >
            <div
              className={`
                w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500
                ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}
              `}
              style={{
                animation: 'modalAppear 0.4s ease-out'
              }}
            >
              <div className="relative h-64 sm:h-80">
                <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? selectedProject.color : selectedProject.lightColor} opacity-90`} />
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover mix-blend-overlay" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">
                  <span className={`inline-block px-3 py-1 mb-4 rounded-full text-sm ${isDarkMode ? 'bg-gray-900 dark:bg-opacity-50 text-white' : 'bg-white bg-opacity-70 text-gray-800'}`}>
                    {selectedProject.status}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>

                <button
                  onClick={closeDetails}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Clock size={18} />
                      Project Progress
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span>Completion Status</span>
                        <span>{selectedProject.completion}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${isDarkMode ? selectedProject.color : selectedProject.lightColor} transition-all duration-1000 ease-out`}
                          style={{ width: `${selectedProject.completion}%` }}
                        />
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap size={16} className={`text-yellow-600 ${isDarkMode ? 'dark:text-yellow-400' : ''}`} />
                        <span className="font-medium">Project Highlights</span>
                      </div>
                      <ul className={`list-disc list-inside text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
                        <li>Advanced implementation with cutting-edge tech</li>
                        <li>Focused on performance and scalability</li>
                        <li>Intuitive user experience design</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Code size={18} />
                      Technology Stack
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg flex items-center ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                        >
                          <div className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${isDarkMode ? selectedProject.color : selectedProject.lightColor}`} />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className={`
                      py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all duration-300
                      bg-gradient-to-r ${isDarkMode ? selectedProject.color : selectedProject.lightColor} text-white shadow-lg hover:shadow-xl
                      hover:scale-105
                    `}
                  >
                    <span>View Complete Project</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <style jsx>{`
                @keyframes modalAppear {
                  from { opacity: 0; transform: scale(0.95); }
                  to { opacity: 1; transform: scale(1); }
                }
              `}</style>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}