import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full backdrop-blur-sm z-50 ${
        isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center relative overflow-hidden ${
              isDarkMode
                ? 'bg-gradient-to-br from-blue-600 to-purple-700'
                : 'bg-gradient-to-br from-blue-500 to-purple-600'
            }`}
          >
            <span className="text-xl font-bold text-white">H</span>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
          </div>
          <span
            className={`ml-2 font-bold text-xl ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Heramb Chaudhari's Portfolio
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['About Me', 'Projects', 'Skills', 'Testimonials', 'Contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(' ', '-'))
                }
                className={`relative font-medium transition-colors duration-300 group ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                  }`}
                ></span>
              </button>
            )
          )}
        </div>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            isDarkMode
              ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700'
              : 'bg-gray-200 text-blue-800 hover:bg-gray-300'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        <div className="md:hidden">
          <button
            className={`p-2 rounded-md ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}