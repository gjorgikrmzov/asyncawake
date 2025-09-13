import { DotsPattern } from "@/backgrounds/Squares/DotPattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase } from "iconsax-react";
import Link from "next/link";
import { memo } from "react";
import FaqList from "@/components/faq-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { EnhancedHero } from "@/components/enhanced-hero";
import { EnhancedFeatures } from "@/components/enhanced-features";
import { EnhancedSolutions } from "@/components/enhanced-solutions";
import { EnhancedProcess } from "@/components/enhanced-process";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/section-label";
import { MessageQuestion } from "iconsax-react";

const Home: React.FC = memo(() => {

  const InfiniteScrollText: React.FC = () => {
    const words: string[] = [
      "AI Chat Agent",
      "Customer Inquiries",
      "Automation",
      "Boost Efficiency",
    ];

    const wordsOpposite: string[] = [
      "Boost Efficiency",
      "Automation",
      "Customer Inquiries",
      "AI Chat Agent",
    ];

    return (
      <div className="w-full overflow-hidden -mt-1 md:-mt-4">
        <div className="flex flex-col">
          {/* Top row: scrolls left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span
                key={`bottom-${i}`}
                className=" text-[50px] leading-11 md:leading-none flex flex-row items-center lg:text-7xl md:font-bold font-medium  text-[#292929]"
              >
                <h1 className="from-[#000]/90 p-1.5 via-[#292929]/80 to-[#292929]/70 ">
                  {words[(i + 1) % words.length]}
                </h1>
                <sub className="mx-2.5 md:mx-5 text-6xl leading-0  md:text-[100px] text-[#5E27F6]">
                  *
                </sub>
              </span>
            ))}
          </div>
          {/* Bottom row: scrolls right, offset by one word */}
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span
                key={`bottom-${i}`}
                className=" text-[50px] leading-11 md:leading-none flex flex-row items-center lg:text-7xl md:font-bold font-medium  text-[#292929]"
              >
                <h1 className="from-[#000]/90 p-1.5 via-[#292929]/80 to-[#292929]/70 ">
                  {wordsOpposite[(i + 1) % wordsOpposite.length]}
                </h1>
                <sub className="mx-2.5 md:mx-5 text-6xl  leading-0  md:text-[100px] text-[#5E27F6]">
                  *
                </sub>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <div className="absolute z-0 left-0  w-full h-full md:h-hull">
        <DotsPattern
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
            "lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* <head>
        <title>Home: Async Awake</title>
        <meta
          name="description"
          content="Async Awake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head> */}

      <Header />

      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Animated Text Scroll */}
      <InfiniteScrollText />

      {/* Enhanced Features Section */}
      <EnhancedFeatures />

      {/* Enhanced Solutions Section */}
      <div id="solutions">
        <EnhancedSolutions />
      </div>
      
      {/* Enhanced Process Section */}
      <EnhancedProcess />
      
      {/* FAQ Section */}
      <div className="h-full relative py-30 flex flex-col justify-center items-center px-6 md:px-10">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "lg:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge variant="gradient" className="mb-6 px-4 py-2">
              <MessageQuestion size={16} className="mr-2" />
              FAQ
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-[#292929] mb-6">
              Frequently
              <br />
              <span className="bg-gradient-to-r from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-clip-text text-transparent">
                Asked Questions
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <FaqList />
      </div>

      {/* CTA Section */}
      <div className="h-full  flex relative flex-col justify-center items-center py-30">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              "lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-34 h-34 rounded-full bg-gradient-to-r from-[#5E27F6]/20 to-[#7A42FF]/20 backdrop-blur-2xl flex justify-center items-center mb-8"
          >
            <Briefcase variant="Bulk" size={46} color="#292929" />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-bold text-[#292929] text-center mb-10">
            Let's Work
            <br />
            <span className="bg-gradient-to-r from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-clip-text text-transparent">
              Together!
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/apply">
              <ShinyButton className="bg-[#292929] px-8 py-4 text-lg font-medium rounded-full">
                <span className="text-white">Apply Now</span>
              </ShinyButton>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
});
Home.displayName = "Home";

export default Home;
