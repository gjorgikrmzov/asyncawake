import FaqList from "@/components/faq-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { MessageQuestion } from "iconsax-react";
import { motion } from "framer-motion";
const Faq = () => {
  return (
    <div className="relative">
      <head>
        <title>FAQ: AsyncAwake</title>
        <meta
          name="description"
          content="AsyncAwake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head>

      <Header />

      <div className="flex px-6 md:px-0  flex-col items-center">
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
          <div className="backdrop-blur-2xl flex gap-x-2 items-center bg-[#5E27F6]/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <p className="text-[#5E27F6] font-medium">FAQ</p>
            <MessageQuestion
              variant="Bulk"
              size={18}
              className="relative  bottom-[1px]"
              color="#5E27F6"
            />
          </div>

          <h1 className="mt-6 from-[#000]/90 p-1.5 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent text-center font-bold  text-5xl lg:text-7xl ">
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
