import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Testimonials() {
  const { isDarkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    designation: '',
    company: '',
    position: '',
    image: '/api/placeholder/100/100',
    content: '',
    stars: 5,
    date: new Date().toLocaleDateString(),
  });

  const testimonials = [
    {
      id: 1,
      name: 'Kaushik Sinha',
      designation: 'Friend',
      company: '',
      position: 'Student',
      image: '/api/placeholder/100/100',
      content: 'The website created by my friend Heramb is amazing and really user friendly also he has a great understanding of his technical skills',
      stars: 5,
      date: 'March 2025',
    },
    {
      id: 2,
      name: 'Utsavi bagri',
      designation: 'colleague',
      company: '',
      position: 'STudent',
      image: '/api/placeholder/100/100',
      content: 'Very nice user experience! I would use a website like this',
      stars: 5,
      date: 'January 2025',
    },
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, handleNext]);

  const getEmoji = (designation) => {
    switch (designation) {
      case 'client':
        return '💼';
      case 'colleague':
        return '🤝';
      default:
        return '👤';
    }
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < count ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Testimonial:', newTestimonial);
    setIsFormOpen(false);
    setNewTestimonial({
      name: '',
      designation: '',
      company: '',
      position: '',
      image: '/api/placeholder/100/100',
      content: '',
      stars: 5,
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <section id="testimonials" className={`py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Testimonials
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here's what clients and colleagues have to say about working with us.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-10 left-4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10"></div>
          <div className="absolute bottom-10 right-4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>

          <div
            className={`relative overflow-hidden rounded-2xl shadow-xl backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-800/90 shadow-gray-900/50' : 'bg-white/90 shadow-gray-200'
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600">
              <div
                className="h-full bg-white/30"
                style={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  transition: isPaused ? 'none' : 'width 6s linear',
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 p-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-50 scale-110"></div>
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold flex items-center gap-2">
                  {testimonials[activeIndex].name} <span role="img" aria-label="designation">{getEmoji(testimonials[activeIndex].designation)}</span>
                </h3>
                <p className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {testimonials[activeIndex].position}
                </p>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                  {testimonials[activeIndex].company}
                </p>
                <div className="flex mt-3">{renderStars(testimonials[activeIndex].stars)}</div>
                <p className={`mt-2 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {testimonials[activeIndex].date}
                </p>
              </div>

              <div className="md:col-span-2 flex flex-col justify-center">
                <p className="text-lg leading-relaxed">
                  “{testimonials[activeIndex].content}”
                </p>
                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrev} className="text-blue-500 hover:text-blue-700 font-medium">← Prev</button>
                  <button onClick={handleNext} className="text-purple-500 hover:text-purple-700 font-medium">Next →</button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              {isFormOpen ? 'Close Form' : 'Add Testimonial'}
            </button>
          </div>

          {isFormOpen && (
            <form onSubmit={handleSubmit} className="mt-6 max-w-2xl mx-auto space-y-4">
              <input type="text" name="name" value={newTestimonial.name} onChange={handleInputChange} placeholder="Your Name" required className="w-full p-2 rounded border" />
              <input type="text" name="designation" value={newTestimonial.designation} onChange={handleInputChange} placeholder="Designation (client/colleague)" className="w-full p-2 rounded border" />
              <input type="text" name="company" value={newTestimonial.company} onChange={handleInputChange} placeholder="Company" className="w-full p-2 rounded border" />
              <input type="text" name="position" value={newTestimonial.position} onChange={handleInputChange} placeholder="Position" className="w-full p-2 rounded border" />
              <textarea name="content" value={newTestimonial.content} onChange={handleInputChange} placeholder="Your Testimonial" required className="w-full p-2 rounded border"></textarea>
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
