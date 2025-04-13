import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CustomScroll = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const scrollIndicatorScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  useEffect(() => {
    const handleScroll = () => {
      // Add more sophisticated scroll-based animations or logic here.
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        overflowY: 'auto',
        height: '100vh', // Or adjust as needed
        position: 'relative',
        scrollbarWidth: 'none', // Hide default scrollbar
        msOverflowStyle: 'none', // Hide default scrollbar (IE)
      }}
    >
      {children}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none; /* Hide default scrollbar */
          }
        `}
      </style>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          right: '10px',
          width: '8px',
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          style={{
            width: '100%',
            background: 'linear-gradient(to bottom, #6366f1, #8b5cf6)',
            position: 'absolute',
            top: 0,
            transformOrigin: 'top',
            height: '100%',
            scaleY: scrollIndicatorScale,
          }}
        />
      </motion.div>
    </div>
  );
};

export default CustomScroll;