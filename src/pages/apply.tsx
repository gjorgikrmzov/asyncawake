"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowDown2, TickCircle } from "iconsax-react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const Apply = () => {
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);

  const services = [
    "AI Assistant Bot",
    "AI Automation",
    "Voice Agent",
    "Other",
  ];

  const [userInput, setUserInput] = useState({
    companyName: "",
    businessEmail: "",
    websiteUrl: "",
    serviceType: "",
    preferredTime: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const trimmedFields = {
      companyName: userInput.companyName.trim(),
      businessEmail: userInput.businessEmail.trim(),
      websiteUrl: userInput.websiteUrl.trim(),
      serviceType: userInput.serviceType.trim(),
      preferredTime: userInput.preferredTime.trim(),
      message: userInput.message.trim(),
    };

    if (
      !trimmedFields.companyName ||
      !trimmedFields.businessEmail ||
      !trimmedFields.serviceType ||
      !trimmedFields.message
    ) {
      return;
    }

    setloading(true);
    const serviceID = "service_e4eome9";
    const templateID = "template_rhe358b";
    const userID = "22Inl06SRIa7nkvbZ";

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        trimmedFields,
        userID
      );

      if (res.status === 200) {
        setloading(false);
        setTimeout(() => setsuccess(true), 50);
        setUserInput({
          companyName: "",
          businessEmail: "",
          websiteUrl: "",
          serviceType: "",
          preferredTime: "",
          message: "",
        });
      }
    } catch (error) {
      setsuccess(false);
    } finally {
      setloading(false);
    }
  };

  // 0d0d0e black
  // F9F9F9 gray

  return (
    <div className="relative">
      <head>
        <title>Apply Now - AsyncAwake</title>
        <meta
          name="description"
          content="AsyncAwake: AI agency crafting smart assistant-bot and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head>

      <Header />
      <div className="w-full overflow-x-hidden relative flex h-full flex-col lg:flex-row py-10 px-6 lg:px-0 lg:py-20 items-start justify-around">
        <div className="w-full lg:w-fit">
          <div className="flex flex-col w-full lg:w-fit gap-y-2">
            <motion.h4
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.6 }}
              className="text-5xl md:text-7xl text-[#0d0d0e] font-semibold ml-1"
            >
              Apply Now
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.6,
                delay: 0.1,
              }}
              className="mt-10 text-[#0d0d0e]/90 font-medium"
            >
              Fill out the form below and we will reach out
              <br className="hidden md:flex" />
              within 24 hours to schedule a call.
            </motion.p>
          </div>
        </div>

        <div className="md:w-1/3 w-full mt-12 md:mt-0 flex-col justify-center items-start flex">
          <form className="z-[30] w-full flex flex-col gap-y-8">
            {/* Company Name */}
            <div className="flex items-start gap-x-4 group focus-within:[&_.number-badge]:bg-[#0d0d0e]  focus-within:[&_.number-badge]:text-white">
              <div className="number-badge flex justify-center items-center w-11 h-7 bg-[#F9F9F9] font-medium text-sm rounded-full transition-colors">
                <p>01</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label className="font-medium text-md">
                  Your company name<span className="text-red-600">*</span>
                </label>
                <input
                  required
                  value={userInput.companyName}
                  onChange={handleChange}
                  name="companyName"
                  type="text"
                  autoComplete="off"
                  className="outline-none border-b-2 placeholder:text-[#0d0d0e]/80 border-[#000]/60 focus-within:border-[#000] transition-all py-4 text-[#0d0d0e] px-3 font-medium"
                  placeholder="Company Name"
                />
              </div>
            </div>

            {/* Business Email */}
            <div className="flex items-start gap-x-4 group focus-within:[&_.number-badge]:bg-[#0d0d0e]  focus-within:[&_.number-badge]:text-white">
              <div className="number-badge flex justify-center items-center w-11 h-7 bg-[#F9F9F9] font-medium text-sm rounded-full transition-colors">
                <p>02</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label className="font-medium text-md">
                  What's your business email?
                  <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  value={userInput.businessEmail}
                  onChange={handleChange}
                  name="businessEmail"
                  type="email"
                  autoComplete="off"
                  className="outline-none border-b-2 caret-black/80 placeholder:text-[#0d0d0e]/80 border-[#000]/60 focus-within:border-[#000] transition-all py-4 text-[#0d0d0e] px-3 font-medium"
                  placeholder="Business Email"
                />
              </div>
            </div>

            {/* Website URL */}
            <div className="flex items-start gap-x-4 group focus-within:[&_.number-badge]:bg-[#0d0d0e]  focus-within:[&_.number-badge]:text-white">
              <div className="number-badge flex justify-center items-center w-11 h-7 bg-[#F9F9F9] font-medium text-sm rounded-full transition-colors">
                <p>03</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label className="font-medium text-md">
                  What's your website URL?
                  <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  value={userInput.websiteUrl}
                  onChange={handleChange}
                  name="websiteUrl"
                  type="text"
                  autoComplete="off"
                  className="outline-none border-b-2 caret-black/80 placeholder:text-[#0d0d0e]/80 border-[#000]/60 focus-within:border-[#000] transition-all py-4 text-[#0d0d0e] px-3 font-medium"
                  placeholder="Link To Your Website"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="flex items-start gap-x-4 group focus-within:[&_.number-badge]:bg-[#0d0d0e]  focus-within:[&_.number-badge]:text-white">
              <div className="number-badge flex justify-center items-center w-11 h-7 bg-[#F9F9F9] font-medium text-sm rounded-full transition-colors">
                <p>04</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label className="font-medium text-md">
                  What service are you interested in?
                  <span className="text-red-600">*</span>
                </label>
                <Listbox
                  value={userInput.serviceType}
                  onChange={(value) =>
                    handleChange({ target: { name: "serviceType", value } })
                  }
                >
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-pointer bg-transparent border-b-2 border-[#000]/60 text-left py-4 px-3 text-[#0d0d0e] font-medium outline-none transition-all focus-within:border-[#000]">
                      <span>{userInput.serviceType || "Select a service"}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ArrowDown2 size={16} color="#000" variant="Linear" />
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#F9F9F9] text-[#0d0d0e] py-1 ring-1 ring-black/5 focus:outline-none">
                      {services.map((service) => (
                        <Listbox.Option
                          key={service}
                          value={service}
                          className={({ active }) =>
                            `cursor-pointer font-medium select-none relative py-3 px-4 ${
                              active
                                ? "bg-white text-black"
                                : "text-[#0d0d0e]/80"
                            }`
                          }
                        >
                          {service}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>

            {/* Preferred Time */}
            <div className="flex items-start gap-x-4 group focus-within:[&_.number-badge]:bg-[#0d0d0e]  focus-within:[&_.number-badge]:text-white">
              <div className="number-badge flex justify-center items-center w-11 h-7 bg-[#F9F9F9] font-medium text-sm rounded-full transition-colors">
                <p>05</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label className="font-medium text-md">
                  Preferred time for call
                </label>
                <input
                  value={userInput.preferredTime}
                  onChange={handleChange}
                  name="preferredTime"
                  type="text"
                  autoComplete="off"
                  className="outline-none border-b-2 caret-black/80 placeholder:text-[#0d0d0e]/80 border-[#000]/60 focus-within:border-[#000] transition-all py-4 text-[#0d0d0e] px-3 font-medium"
                  placeholder="E.g. 3PM GMT+0"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex items-start gap-x-4 group focus-within:[&_.number-badge]:bg-[#0d0d0e]  focus-within:[&_.number-badge]:text-white">
              <div className="number-badge flex justify-center items-center w-11 h-7 bg-[#F9F9F9] font-medium text-sm rounded-full transition-colors">
                <p>06</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label className="font-medium text-md">
                  Your message<span className="text-red-600">*</span>
                </label>
                <textarea
                  required
                  value={userInput.message}
                  onChange={handleChange}
                  name="message"
                  rows={3}
                  className="resize-none outline-none border-b-2 caret-black/80 placeholder:text-[#0d0d0e]/80 border-[#000]/60 focus-within:border-[#000] transition-all py-4 text-[#0d0d0e] px-3 font-medium"
                  placeholder="Provide Detailed Information..."
                />
              </div>
            </div>

            {/* Submit Button */}
            {loading ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:self-start self-center bg-[#000] items-center gap-x-2 w-full md:w-fit rounded-full flex px-10 py-4 font-medium text-[#fff] justify-center"
              >
                Sending...
                <svg
                  className="w-4 h-4 text-[#fff]/15 animate-spin  fill-[#5e27f6]"
                  viewBox="0 0 100 101"
                  fill="none"
                >
                  <path d="M100 50.5908C100..." fill="currentColor" />
                  <path d="M93.9676 39.0409C96..." fill="currentFill" />
                </svg>
              </motion.div>
            ) : success ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:self-start self-center bg-[#000] items-center gap-x-2 w-full md:w-fit rounded-full flex px-10 py-4 font-medium text-[#fff] justify-center"
              >
                <TickCircle variant="Bold" size={22} color="#fff" />
                <p className="text-[#fff] font-medium">Request Sent!</p>
              </motion.div>
            ) : (
              <motion.div
                onClick={handleSubmit}
                className="md:self-start cursor-pointer self-center bg-[#000] w-full md:w-fit rounded-full flex px-10 py-4 font-medium text-[#fff] justify-center"
                whileHover={{ scale: 1.125 }}
                whileTap={{ scale: 1.1 }}
              >
                <p>Send Request</p>
              </motion.div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
