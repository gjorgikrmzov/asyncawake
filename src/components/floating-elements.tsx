"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  amplitude?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 3,
  delay = 0,
  amplitude = 20,
}) => {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingIcons: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <FloatingElement duration={4} delay={0} amplitude={15}>
        <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-[#5E27F6]/20 to-[#7A42FF]/20 rounded-full blur-sm" />
      </FloatingElement>
      
      <FloatingElement duration={5} delay={1} amplitude={25}>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-[#4B1ECB]/30 to-[#5E27F6]/30 rotate-45 blur-sm" />
      </FloatingElement>
      
      <FloatingElement duration={3.5} delay={2} amplitude={18}>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-gradient-to-r from-[#7A42FF]/25 to-[#5E27F6]/25 rounded-full blur-sm" />
      </FloatingElement>
      
      <FloatingElement duration={6} delay={0.5} amplitude={22}>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-[#5E27F6]/20 rounded-full blur-sm" />
      </FloatingElement>
    </div>
  );
};