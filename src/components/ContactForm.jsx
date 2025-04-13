import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const [inputFocused, setInputFocused] = useState({ name: false, email: false, message: false });

  const handleFocus = (field) => setInputFocused({ ...inputFocused, [field]: true });
  const handleBlur = (field) => setInputFocused({ ...inputFocused, [field]: false });

  const sectionStyles = `py-20 transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-black to-gray-900 text-white' : 'bg-white text-gray-800'}`;
  const inputStyles = `w-full rounded-lg px-5 py-4 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'}`;
  const labelBaseStyles = `absolute left-5 transition-all duration-300 pointer-events-none`;
  const labelFocusedStyles = `-top-3 text-xs px-1 bg-white dark:bg-gray-900 text-blue-500`;
  const labelNormalStyles = `top-4 text-base text-gray-500 ${isDarkMode ? 'dark:text-gray-400' : ''}`;

  return (
    <section className={sectionStyles} id="contact">
      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Contact Me
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-center mb-10 text-lg max-w-xl mx-auto">
          I’d love to hear from you. Whether it’s a project, feedback, or just a friendly hello, feel free to reach out.
        </motion.p>

        <form className="space-y-8 relative z-10">
          {['name', 'email', 'message'].map((field, idx) => (
            <motion.div key={field} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.1 }} className="relative">
              <label
                htmlFor={field}
                className={`${labelBaseStyles} ${inputFocused[field] ? labelFocusedStyles : labelNormalStyles}`}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  rows="4"
                  onFocus={() => handleFocus(field)}
                  onBlur={() => handleBlur(field)}
                  className={inputStyles}
                  placeholder=" "
                  readOnly
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  onFocus={() => handleFocus(field)}
                  onBlur={() => handleBlur(field)}
                  className={inputStyles}
                  placeholder=" "
                  readOnly
                />
              )}
            </motion.div>
          ))}

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            type="button"
            disabled
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-md cursor-not-allowed hover:opacity-90 transition-all"
          >
            Send Message
          </motion.button>
        </form>

        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1, 0.9] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 left-0 w-48 h-48 bg-purple-400 opacity-20 blur-2xl rounded-full"></motion.div>
          <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1, 0.9] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 opacity-20 blur-2xl rounded-full"></motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;