import React, { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FaqList = () => {
  const faqItems = useMemo(
    () => [
      {
        question: "What kind of tasks can the Assistant Bot take off my plate?",
        answer:
          "It answers questions, helps customers, books appointments, handles internal stuff—without taking a break. You get more done without hiring more people.",
      },
      {
        question: "Is an Assistant Bot expensive to implement?",
        answer:
          "Costs vary based on how complex the assistant bot is. We can start small with a lightweight setup at a lower cost, then scale up as your needs grow. You're in control the whole way.",
      },
      {
        question: "Will i need to train the Assistant Bot myself?",
        answer:
          "No, you won’t need to train the bot yourself. You provide the necessary details, and we handle the entire setup process, ensuring the bot is configured correctly and runs smoothly to meet your needs without any extra effort on your part.",
      },
      {
        question: "Is it secure to let an Assistant Bot handle sensitive info?",
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
          "We don’t just hand you the keys—we provide continuous guidance, monitoring, and updates to keep your assistant bot running smoothly.",
      },
      {
        question: "Didn’t see your question here?",
        answer:
          "No worries—just ask our Assistant Bot in the bottom-right corner of the page. It’s always available to help with anything we didn’t cover here.",
      },
    ],
    []
  );

  return (
    <Accordion type="single" collapsible className="mt-20 w-full md:w-2/3">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-md md:text-xl cursor-pointer py-6">
            <span className="flex font-semibold items-center gap-x-4">
              <p className=" text-[#5E27F6]">0{index + 1}.</p>
              {item.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-md font-medium md:text-lg">
            - {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
