import React, { memo, useEffect, useMemo, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

const FaqList = () => {
  const MotionInView = memo(({ children, variants, custom, ...props }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation();

    useEffect(() => {
      controls.start(isInView ? "animate" : "initial");
    }, [isInView, controls]);

    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={variants}
        custom={custom}
        {...props}
      >
        {children}
      </motion.div>
    );
  });
  MotionInView.displayName = "MotionInView";

  const faqItems = useMemo(
    () => [
      {
        question: "What kind of tasks can the Chat Agent take off my plate?",
        answer:
          "It answers questions, helps customers, books appointments, handles internal stuff—without taking a break. You get more done without hiring more people.",
      },
      {
        question: "Is an Chat Agent expensive to implement?",
        answer:
          "Costs vary based on how complex the Chat Agent is. We can start small with a lightweight setup at a lower cost, then scale up as your needs grow. You're in control the whole way.",
      },
      {
        question: "Will i need to train the Chat Agent myself?",
        answer:
          "No, you won’t need to train the bot yourself. You provide the necessary details, and we handle the entire setup process, ensuring the bot is configured correctly and runs smoothly to meet your needs without any extra effort on your part.",
      },
      {
        question: "Is it secure to let an Chat Agent handle sensitive info?",
        answer:
          "Absolutely. We set up strict access rules and follow best security practices to keep your data safe.",
      },
      {
        question: "Will it blend into how I already work?",
        answer:
          "Yes. We connect it with your existing tools like Slack, email, CRMs, and more—no need to change your workflow.",
      },
      {
        question: "What kind of ongoing support do I get after setup?",
        answer:
          "We don’t just hand you the keys—we provide continuous guidance, monitoring, and updates to keep your Chat Agent running smoothly.",
      },
      {
        question: "Didn’t see your question here?",
        answer:
          "No worries—just ask our Chat Agent in the bottom-right corner of the page. It’s always available to help with anything we didn’t cover here.",
      },
    ],
    []
  );

  const smoothEase = [0.6, 0.01, 0.05, 0.95];
  // Memoized variants for animations
  const fadeInUpVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 100 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [smoothEase], delay: 0.15 },
      },
    }),
    [smoothEase]
  );

  return (
    <MotionInView className="w-full md:w-2/3 mt-20" variants={fadeInUpVariants}>
      <Accordion type="single" collapsible className="w-full ">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-md md:text-xl cursor-pointer py-6">
              <span className="flex font-semibold items-center gap-x-4">
                <p className=" from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r bg-clip-text text-transparent">
                  0{index + 1}.
                </p>
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-md font-medium md:text-lg">
              - {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MotionInView>
  );
};

export default FaqList;
