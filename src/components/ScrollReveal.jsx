import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getClass = () => {
    if (direction === 'up') return 'reveal';
    if (direction === 'left') return 'reveal-left';
    if (direction === 'right') return 'reveal-right';
    return 'reveal';
  };

  return (
    <div ref={ref} className={`${getClass()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;