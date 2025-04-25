import React, { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FaqList = () => {
  const faqItems = useMemo(
    () => [
      {
        question: "What does an Assistant actually do?",
        answer:
          "It answers questions, helps customers, books appointments, handles internal stuff—without taking a break. You get more done without hiring more people.",
      },
      {
        question: "Is an Assistant expensive to implement?",
        answer:
          "Costs vary based on how complex the assistant is. We can start small with a lightweight setup at a lower cost, then scale up as your needs grow. You're in control the whole way.",
      },
      {
        question: "Will I need to train the assistant myself?",
        answer:
          "No training needed on your end. You give us the info—we do the setup and make sure it works right.",
      },
      {
        question: "Didn’t see your question here?",
        answer:
          "No worries—just ask our Assistant in the bottom-right corner of the page. It’s always available to help with anything we didn’t cover here.",
      },
    ],
    []
  );

  return (
    <Accordion type="single" collapsible className="mt-20 w-full md:w-2/3">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-md md:text-xl cursor-pointer py-6">
            <span className="flex items-center gap-x-4">
              <p className="font-normal text-[#5E27F6]">0{index + 1}</p>
              {item.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-[16px] text-white/85">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
