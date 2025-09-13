"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Flash } from "iconsax-react";
import Link from "next/link";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { ShinyButton } from "./magicui/shiny-button";
import { SectionLabel } from "./section-label";
import { ScrollReveal } from "./scroll-reveal";
import { FloatingIcons } from "./floating-elements";
import ShinyText from "../../animations/ShinyText/ShinyText";

export const EnhancedHero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden"
    >
      <FloatingIcons />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5E27F6]/5 via-transparent to-[#7A42FF]/5 animate-pulse" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        <ScrollReveal delay={0.1}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <Badge variant="gradient" className="mb-6 px-4 py-2 text-sm font-medium">
              <Flash size={16} className="mr-2" />
              Skip the Busywork
            </Badge>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#292929] leading-tight mb-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            Save{" "}
            <ShinyText speedInMs={3000} className="bg-gradient-to-r from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-clip-text text-transparent">
              Over 8 Hours
            </ShinyText>{" "}
            a Week
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#292929] mb-8"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            By Automating Your Busywork
          </motion.h2>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <motion.p 
            className="text-xl md:text-2xl text-[#292929]/85 font-medium mb-10 max-w-4xl leading-relaxed"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            We build smart assistants that answer questions, automate tasks,{" "}
            <br className="hidden sm:block" />
            and free up your team's time for what truly matters.
          </motion.p>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link href="/apply">
              <ShinyButton className="bg-[#292929] px-8 py-4 text-lg font-medium rounded-full">
                <span className="text-white">Apply Now</span>
              </ShinyButton>
            </Link>
            
            <Link href="/faq">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-medium text-[#292929] border-2 border-[#292929]/20 rounded-full hover:border-[#5E27F6] hover:text-[#5E27F6] transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </ScrollReveal>

        {/* Stats section */}
        <ScrollReveal delay={1.0}>
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5E27F6] mb-2">8+</div>
              <div className="text-sm text-[#292929]/70 font-medium">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5E27F6] mb-2">24/7</div>
              <div className="text-sm text-[#292929]/70 font-medium">AI Assistance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5E27F6] mb-2">90%</div>
              <div className="text-sm text-[#292929]/70 font-medium">Efficiency Boost</div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
};