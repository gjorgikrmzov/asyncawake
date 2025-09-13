"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Messages1, Setting2, VoiceSquare, LampCharge } from "iconsax-react";
import Link from "next/link";
import { useRef } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";
import { ShinyButton } from "./magicui/shiny-button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const solutions = [
  {
    id: "chat-agent",
    icon: Messages1,
    title: "AI Chat Agent",
    description: "Engage customers 24/7 with conversational chat agent that improves support and converts leads",
    features: ["24/7 Customer Support", "Lead Qualification", "Multi-language Support", "CRM Integration"],
    color: "from-[#4B1ECB] to-[#5E27F6]",
  },
  {
    id: "automation",
    icon: Setting2,
    title: "AI Automation",
    description: "Automate the boring stuff like email outreach, cut costs, and speed up operations—without burning out your team",
    features: ["Workflow Automation", "Email Marketing", "Data Processing", "Task Scheduling"],
    color: "from-[#5E27F6] to-[#7A42FF]",
  },
  {
    id: "voice-agent",
    icon: VoiceSquare,
    title: "Voice Agent",
    description: "Deliver round-the-clock support with a voice agent that boosts customer engagement and streamlines service",
    features: ["Voice Recognition", "Natural Conversations", "Call Routing", "Analytics Dashboard"],
    color: "from-[#7A42FF] to-[#9B59FF]",
  },
];

export const EnhancedSolutions: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-tl from-[#5E27F6]/5 via-transparent to-[#4B1ECB]/5"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Sticky header */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <Badge variant="gradient" className="mb-6 px-4 py-2">
                <LampCharge size={16} className="mr-2" />
                Solutions
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-[#292929] mb-8 leading-tight">
                Cut Costs,
                <br />
                <span className="bg-gradient-to-r from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-clip-text text-transparent">
                  Less Busywork
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-[#292929]/85 font-medium mb-8">
                From answering customer questions to automating internal tasks, our solutions help you do more with less.
              </p>
            </ScrollReveal>
          </div>

          {/* Right side - Solutions */}
          <div className="space-y-8">
            <Tabs defaultValue="chat-agent" className="w-full">
              <ScrollReveal>
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#f8f8f8] p-1 rounded-2xl">
                  {solutions.map((solution) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                      <solution.icon size={20} className="mr-2" />
                      <span className="hidden sm:inline">{solution.title.split(' ')[1]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollReveal>

              {solutions.map((solution, index) => (
                <TabsContent key={solution.id} value={solution.id}>
                  <ScrollReveal delay={0.2}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5E27F6]/10 to-[#7A42FF]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative bg-white/90 backdrop-blur-sm border border-[#292929]/10 rounded-3xl p-8 hover:border-[#5E27F6]/30 transition-all duration-500">
                        <div className="flex items-start gap-6 mb-6">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center shadow-lg`}
                          >
                            <solution.icon size={28} color="white" variant="Bold" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold text-[#292929] mb-3">
                              {solution.title}
                            </h3>
                            <p className="text-lg text-[#292929]/70 font-medium leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {solution.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#5E27F6] to-[#7A42FF]" />
                              <span className="text-sm font-medium text-[#292929]/80">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href="/apply" className="flex-1">
                            <ShinyButton className="w-full bg-[#292929] px-6 py-3 rounded-full">
                              <span className="text-white font-medium">Apply Now</span>
                            </ShinyButton>
                          </Link>
                          
                          <Link href="/faq" className="flex-1">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-6 py-3 text-[#292929] border-2 border-[#292929]/20 rounded-full hover:border-[#5E27F6] hover:text-[#5E27F6] transition-all duration-300 font-medium"
                            >
                              Questions?
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};