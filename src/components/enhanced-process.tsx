"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Convertshape, RecordCircle } from "iconsax-react";
import { useRef } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We analyze your needs and design a custom solution that fits your business perfectly.",
    duration: "1-2 days",
    color: "from-[#4B1ECB] to-[#5E27F6]",
  },
  {
    number: "02",
    title: "Develop",
    description: "Our team builds and tests your AI assistant with your specific requirements in mind.",
    duration: "1-2 weeks",
    color: "from-[#5E27F6] to-[#7A42FF]",
  },
  {
    number: "03",
    title: "Deploy",
    description: "We launch your solution and provide ongoing support to ensure optimal performance.",
    duration: "1-3 days",
    color: "from-[#7A42FF] to-[#9B59FF]",
  },
];

export const EnhancedProcess: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const progressValue = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-[#4B1ECB]/5 via-transparent to-[#7A42FF]/5"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <Badge variant="gradient" className="mb-6 px-4 py-2">
              <Convertshape size={16} className="mr-2" />
              Our Approach
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-[#292929] mb-6">
              Integration
              <br />
              <span className="bg-gradient-to-r from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#292929]/85 font-medium max-w-4xl mx-auto mb-12">
              Book a free consult, we build the solution,{" "}
              <br className="hidden md:block" />
              then launch it. No fluff—just done-for-you.
            </p>
            
            {/* Progress bar */}
            <motion.div className="max-w-md mx-auto">
              <Progress value={progressValue} className="h-2 mb-4" />
              <p className="text-sm text-[#292929]/60 font-medium">Scroll to see the process</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] rounded-full transform -translate-y-1/2" />
            
            <div className="flex justify-between items-center relative">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.3}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="flex flex-col items-center max-w-xs"
                  >
                    {/* Step circle */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl mb-6 relative z-10`}
                    >
                      <span className="text-white font-bold text-xl">{step.number}</span>
                      <RecordCircle
                        variant="Bulk"
                        size={20}
                        color="white"
                        className="absolute -bottom-2 -right-2"
                      />
                    </motion.div>
                    
                    {/* Step content */}
                    <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#292929]/10 hover:border-[#5E27F6]/30 transition-all duration-300">
                      <h3 className="text-xl font-bold text-[#292929] mb-3">{step.title}</h3>
                      <p className="text-[#292929]/70 font-medium mb-4 leading-relaxed">{step.description}</p>
                      <Badge variant="outline" className="text-[#5E27F6] border-[#5E27F6]/30">
                        {step.duration}
                      </Badge>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg flex-shrink-0 relative`}
                >
                  <span className="text-white font-bold text-lg">{step.number}</span>
                  <RecordCircle
                    variant="Bulk"
                    size={16}
                    color="white"
                    className="absolute -bottom-1 -right-1"
                  />
                </motion.div>
                
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#292929]/10">
                  <h3 className="text-xl font-bold text-[#292929] mb-3">{step.title}</h3>
                  <p className="text-[#292929]/70 font-medium mb-4">{step.description}</p>
                  <Badge variant="outline" className="text-[#5E27F6] border-[#5E27F6]/30">
                    {step.duration}
                  </Badge>
                </div>
                
                {/* Connecting line for mobile */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-8 bg-gradient-to-b from-[#5E27F6] to-[#7A42FF]" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};