import FaqList from "@/components/faq-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { MessageQuestion } from "iconsax-react";

const Faq = () => {
  return (
    <div className="relative">
      <head>
        <title>FAQ - AsyncAwake</title>
        <meta
          name="description"
          content="AsyncAwake: AI agency crafting smart assistant-bot and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head>

      <Header />

      <div className="flex px-6 md:px-0  flex-col items-center">
        <div className="flex justify-center items-center flex-col pt-30">
        <div className="backdrop-blur-2xl flex gap-x-2 items-center bg-[#5e27f6]/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
        <p className="text-[#5e27f6] font-medium">FAQ</p>
            <MessageQuestion
              variant="Bulk"
              size={18}
              className="relative  bottom-[1px]"
              color="#5E27F6"
            />
          </div>
          
          <h1 className="mt-6 text-[#0d0d0e] text-center text-[42px] leading-12 lg:leading-20 lg:text-7xl font-semibold">
            Frequently <br />
            Asked Questions
          </h1>
        </div>
        <FaqList />
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
