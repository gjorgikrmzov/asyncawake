import { DotsPattern } from "@/backgrounds/Squares/DotPattern";
import FaqList from "@/components/faq-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageQuestion } from "iconsax-react";
const Faq = () => {
  return (
    <div className="relative">
      {/* <head>
        <title>FAQ: Async Awake</title>
        <meta
          name="description"
          content="Async Awake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head> */}

      <Header />

      <div className="flex px-6 md:px-0 relative pb-30  flex-col items-center">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
              "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.6,
          }}
          className="flex justify-center items-center flex-col pt-30"
        >
          <SectionLabel text="FAQ" icon={MessageQuestion} />

          <h1 className="mt-6 p-1.5  text-center md:font-bold font-medium  text-[#292929] text-5xl leading-12 md:leading-none lg:text-7xl ">
            Frequently <br />
            Asked Questions
          </h1>
        </motion.div>

        <FaqList />
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
