"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Flash, DollarCircle, ColorSwatch, Messages1, Star1 } from "iconsax-react";
import { useRef } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { ParallaxSection } from "./parallax-section";
import { SectionLabel } from "./section-label";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const features = [
  {
    icon: Flash,
    title: "Save Time",
    description: "Automate tasks so your team can focus on what matters most",
    color: "from-[#FF6B6B] to-[#FF8E8E]",
    stats: "8+ hours saved weekly",
  },
  {
    icon: DollarCircle,
    title: "Lower Costs",
    description: "Reduce expenses by replacing manual work with automation",
    color: "from-[#4ECDC4] to-[#6EDDD6]",
    stats: "Up to 60% cost reduction",
  },
  {
    icon: ColorSwatch,
    title: "Get Personal",
    description: "Deliver tailored conversations that match your brand and customers",
    color: "from-[#45B7D1] to-[#67C9E3]",
    stats: "100% brand aligned",
  },
  {
    icon: Messages1,
    title: "Instant Replies",
    description: "Answer questions 24/7 with a chat agent that never rests",
    color: "from-[#96CEB4] to-[#B8E6C1]",
    stats: "24/7 availability",
  },
];

export const EnhancedFeatures: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-[#5E27F6]/5 via-transparent to-[#7A42FF]/5"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <Badge variant="gradient" className="mb-6 px-4 py-2">
              <Star1 size={16} className="mr-2" />
              Benefits
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-[#292929] mb-6">
              The Benefits
              <br />
              <span className="bg-gradient-to-r from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-clip-text text-transparent">
                Of Automation
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#292929]/85 font-medium max-w-4xl mx-auto">
              Virtual Assistants handle the work for you while{" "}
              <br className="hidden md:block" />
              you & your team focus on what's important.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5E27F6]/10 to-[#7A42FF]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/80 backdrop-blur-sm border border-[#292929]/10 rounded-3xl p-8 hover:border-[#5E27F6]/30 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <feature.icon size={32} color="white" variant="Bold" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-[#292929] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-[#292929]/70 font-medium mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <Badge variant="outline" className="text-[#5E27F6] border-[#5E27F6]/30">
                        {feature.stats}
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};