import { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Tag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Olympics from '../assets/Olympics.png';
import Notes from '../assets/Notes.png';
import G2048 from '../assets/G2048.png';
import Movie from '../assets/Movie.png';
import Coffee from '../assets/Coffee.png';
import Pacman from '../assets/Pacman.png';
import Pong from '../assets/Pong.png';
import Social from '../assets/Social.png';


export default function CompletedProjects() {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isGridView, setIsGridView] = useState(true);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Olympics Analysis",
      description: "his project is a comprehensive Python and data science fundamentals assessment, testing core concepts in programming, data handling, and basic analysis using Python and libraries like NumPy and Pandas.",
      category: "python",
      tech: ["Numpy", "Pandas", "Streamlit","Matplotlib", "Jupiter"],
      image: Olympics,
      liveUrl: "https://olympic-data-analysis-jvp2zcezcpsbbftgnkbmjh.streamlit.app/",
      githubUrl: "https://github.com/Heramb1221/Olympic-Data-Analysis",
      color: "from-blue-600 to-indigo-600",
      lightColor: "from-blue-100 to-indigo-100",
      features: [
        "The project covers a broad range of fundamental Python concepts including data types, control structures, functions, classes, and exception handling to test core programming skills.",
        "Utilizes essential data science libraries like NumPy, Pandas, and Matplotlib, ensuring learners gain practical exposure to data manipulation, visualization, and analysis techniques.",
      ]
    },
    {
      id: 2,
      title: "Amanuensis",
      description: "Developed a full-stack MERN-based note-taking web app with CRUD functionality and modern responsive UI.",
      category: "web",
      tech: ["React", "Redux", "Express.js", "MongoDB"],
      image: Notes,
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/Amanuensis",
      color: "from-cyan-500 to-blue-500",
      lightColor: "from-cyan-100 to-blue-100",
      features: [
        "Users can create, edit, and delete notes in real-time using a clean and intuitive interface.",
        "Notes are securely stored in MongoDB, enabling persistent data access across sessions.",
        "Responsive frontend built with React and Tailwind CSS, ensuring smooth experience across devices.",
        "RESTful API integration using Express and Node.js for seamless frontend-backend communication."
      ]
    },
    {
      id: 3,
      title: "2048-Game",
      description: "A basic take on the famous 2048 game, implemented using JavaScript.",
      category: "web",
      tech: ["JavaScript", "HTML", "CSS"],
      image: G2048,
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/2048-Game",
      color: "from-emerald-500 to-green-500",
      lightColor: "from-emerald-100 to-green-100",
      features: [
        "Responsive Grid-Based UI with Smooth Animations",
      ]
    },
    {
      id: 4,
      title: "Hangman-using-Python",
      description: "A Console based Hangman game where you need to guess hte movies correctly in limited opportunities",
      category: "python",
      tech: ["python"],
      image: "",
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/Hangman-using-Python",
      color: "from-orange-500 to-red-500",
      lightColor: "from-orange-100 to-red-100",
      features: [
        "Interactive Console-Based Gameplay",
        "Error Handling & Input Validation",
        "Win/Lose Logic with Replay Option",
      ]
    },
    {
      id: 5,
      title: "Pac-Man",
      description: "A classic game of Pac-Man",
      category: "web",
      tech: ["JavaScript", "HTML", "CSS"],
      image: Pacman,
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/Pac-Man",
      color: "from-purple-500 to-violet-500",
      lightColor: "from-purple-100 to-violet-100",
      features: [
        "Classic Maze Navigation with Smooth Controls",
        "Point System and Level Progression",
      ]
    },
    {
      id: 6,
      title: "Social media dashboard",
      description: "A Frontend Mentor Challenge",
      category: "web",
      tech: ["React", "SCSS"],
      image: Social,
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/FEM-Social-media-dashboard",
      color: "from-yellow-500 to-amber-500",
      lightColor: "from-yellow-100 to-amber-100",
      features: [
        "User Engagement Tracker",
        "Social Media Integration",
      ]
    },
    {
      id: 7,
      title: "Coffee Webiste",
      description: "A coffee restraunt website with modern design",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript"],
      image: Coffee,
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/Coffee-Webiste",
      color: "from-blue-600 to-indigo-600",
      lightColor: "from-yellow-100 to-amber-100",
      features: [
        "Virtual Coffee Shop"
      ]
    },
    {
      id: 8,
      title: "Pong Game using Python",
      description: "A retro pong game with some twist.",
      category: "python",
      tech: ["Pygame", "Python"],
      image: Pong,
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/Pong-Game-using-Python",
      color: "from-yellow-500 to-amber-500",
      lightColor: "from-yellow-100 to-amber-100",
      features: [
        "Virtual Coffee Shop"
      ]
    },
    {
      id: 9,
      title: "Responsive Movie Website",
      description: "A movie website with responsive design",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript"],
      image: Movie,
      liveUrl: "#",
      githubUrl: "https://github.com/Heramb1221/Responsive-Movie-Website",
      color: "from-emerald-500 to-green-500",
      lightColor: "from-yellow-100 to-amber-100",
      features: [
        "Virtual Coffee Shop"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'python', label: 'Python' },
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

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div id="projects" className={`min-h-screen py-16 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Completed Projects
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A collection of my best work across web and mobile development. Each project represents a unique challenge solved with modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className={`p-1 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <div className="flex">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? `bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md` 
                      : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={toggleView}
            className={`p-3 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-md`}
          >
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`${isGridView ? 'bg-blue-500' : 'bg-gray-400'} rounded-sm`}
                />
              ))}
            </div>
          </button>
        </div>

        <div className={isGridView
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "flex flex-col gap-6"
        }>
          {filteredProjects.map((project) => (
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
                ${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-white'} shadow-xl hover:shadow-2xl
                ${hoveredId === project.id
                  ? 'transform scale-105 z-10'
                  : 'scale-100 z-0'
                }
              `}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? project.color : project.lightColor} opacity-20 rounded-xl transition-opacity duration-300 
                  ${hoveredId === project.id ? 'opacity-30' : 'opacity-10'}`
                }
              />

              <div className={`${isGridView ? 'w-full' : 'md:w-2/5'} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
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
                    {project.category === 'web' ? 'Web App' : 'Mobile App'}
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
                  <div className="flex items-center gap-1 text-xs font-medium mb-2">
                    <Code size={14} />
                    <span>Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full backdrop-blur-sm ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className={`text-xs px-2 py-1 rounded-full backdrop-blur-sm ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <button
                    className={`
                      flex items-center gap-1 text-sm font-medium
                      text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300
                      transition-colors duration-300
                    `}
                  >
                    <span>Details</span>
                    <Eye size={16} />
                  </button>
                </div>
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
            onClick={closeDetails}
            style={{
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(0,0,0,0.4)'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`
                w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500
                ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}
              `}
              style={{
                animation: 'modalAppear 0.4s ease-out'
              }}
            >
              <div className="relative h-64 sm:h-80">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-90`} />
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover mix-blend-overlay" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">
                  <span className={`inline-block px-3 py-1 mb-4 rounded-full text-sm bg-black/30 text-white`}>
                    {selectedProject.category === 'web' ? 'Web Application' : 'Mobile Application'}
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
                      <Tag size={18} />
                      Key Features
                    </h3>
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                      <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
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
                          <div className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${selectedProject.color}`} />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300
                      ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}
                      shadow-lg hover:shadow-xl
                    `}
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300
                      bg-gradient-to-r ${selectedProject.color} text-white
                      shadow-lg hover:shadow-xl hover:scale-105
                    `}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
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