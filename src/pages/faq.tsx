import FaqList from "@/components/faq-list";
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
          <div className="bg-[#fff]/10 border-2 flex gap-x-2 items-center border-white/20 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <p className="text-white">FAQ</p>
            <MessageQuestion
              variant="Bulk"
              className="relative bottom-[1px]"
              size={18}
              color="#fff"
            />
          </div>
          <h1 className=" mt-6 text-white text-center text-6xl lg:text-7xl font-medium">
            Frequently Asked <br />
            Questions
          </h1>
        </div>
        <FaqList />
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
