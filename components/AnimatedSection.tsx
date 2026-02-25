'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = {
    fade: 'opacity-0 group-[.visible]:opacity-100',
    'slide-up': 'opacity-0 translate-y-10 group-[.visible]:opacity-100 group-[.visible]:translate-y-0',
    'slide-left': 'opacity-0 -translate-x-10 group-[.visible]:opacity-100 group-[.visible]:translate-x-0',
    'slide-right': 'opacity-0 translate-x-10 group-[.visible]:opacity-100 group-[.visible]:translate-x-0',
    scale: 'opacity-0 scale-95 group-[.visible]:opacity-100 group-[.visible]:scale-100',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${animationClass[animation]} ${className} ${
        isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
