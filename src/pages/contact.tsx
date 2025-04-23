"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send2, TickCircle } from "iconsax-react";
import { useState } from "react";

const Contact = () => {
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
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
    const trimmedName = userInput.name.trim();
    const trimmedMail = userInput.email.trim();
    const trimmedMessage = userInput.message.trim();

    if (!trimmedName || !trimmedMail || !trimmedMessage) {
      return;
    }

    setloading(true);
    const serviceID = "service_e4eome9";
    const templateID = "template_fkh1sri";
    const userID = "22Inl06SRIa7nkvbZ";

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        setloading(false);

        setTimeout(() => {
          setsuccess(true);
        }, 50);

        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setsuccess(false);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className=" relative">
      <head>
        <title>Contact - AsyncAwake</title>
        <meta
          name="description"
          content="AsyncAwake: AI agency crafting smart assistant-bot and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head>

      <Header />
      <div className="w-full overflow-x-hidden relative flex h-full flex-col lg:flex-row py-10 px-6 lg:px-0 lg:py-20 items-start justify-around ">
        <div className="w-full lg:w-fit">
          <div className="flex flex-col w-full lg:w-fit gap-y-2">
            <motion.h4
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
              className="text-6xl md:text-8xl leading-16 md:leading-22 text-[#fff] font-regular ml-1"
            >
              Let&apos;s work <br />
              together!
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 0.6,
                delay: 0.1,
              }}
              className="mt-10 text-white/90"
            >
              Let us help you become even greater at what you do.{" "}
              <br className="hidden md:flex" />
              Fill out the following form and we will get back to you in the
              next 24 hours.
            </motion.p>
          </div>

          <form className="z-[30] mt-12 w-full flex flex-col gap-y-8">
            <div className="flex items-start gap-x-4 group">
              <div className="flex justify-center items-center w-11 h-7 bg-white/20 font-medium text-sm rounded-full group-focus-within:bg-[#fff] group-focus-within:text-black transition-all">
                <p>01</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label htmlFor="fullName" className="font-regular text-md">
                  What's your name?
                  <span className="text-red-600">*</span>
                </label>
                <input
                  required={true}
                  value={userInput.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  autoComplete="off"
                  className="outline-none border-b-2 placeholder:text-white/80 border-[#fff]/60 focus-within:border-white transition-all py-4 text-[#fff] px-3 font-regular"
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="flex items-start gap-x-4 group">
              <div className="flex justify-center items-center w-11 h-7 bg-white/20 font-medium text-sm rounded-full group-focus-within:bg-[#fff] group-focus-within:text-black transition-all">
                <p>02</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label htmlFor="fullName" className="font-regular text-md">
                  What&apos;s your email address?
                  <span className=" text-red-600">*</span>
                </label>
                <input
                  required={true}
                  value={userInput.email}
                  onChange={handleChange}
                  name="email"
                  type="text"
                  autoComplete="off"
                  className="outline-none  border-b-2 caret-white placeholder:text-white/80 border-[#fff]/60 focus-within:border-white transition-all py-4 text-[#fff] px-3 font-regular"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="flex items-start gap-x-4 group">
              <div className="flex justify-center items-center w-11 h-7 bg-white/20 font-medium text-sm rounded-full group-focus-within:bg-[#fff] group-focus-within:text-black transition-all">
                <p>03</p>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <label htmlFor="fullName" className="font-regular text-md">
                  Let's connect<span className=" text-red-600">*</span>
                </label>
                <textarea
                  required={true}
                  value={userInput.message}
                  onChange={handleChange}
                  name="message"
                  id=""
                  rows={3}
                  className="resize-none outline-none w-full  border-b-2 caret-white placeholder:text-white/80 border-[#fff]/60 focus-within:border-white transition-all py-4 text-[#fff] px-3 font-regular"
                  placeholder="Provide Detailed Information.."
                ></textarea>
              </div>
            </div>

            {loading ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:self-start self-center bg-[#fff] items-center gap-x-2 w-full md:w-fit  rounded-full flex px-10 py-4 font-regular text-[#000] justify-center"
              >
                Sending{" "}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-[#000]/15 animate-spin  fill-[#5e27f6]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </motion.div>
            ) : (
              <>
                {!loading && success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:self-start self-center bg-[#fff] items-center gap-x-2 w-full md:w-fit  rounded-full flex px-10 py-4 font-regular text-[#000] justify-center"
                  >
                    <TickCircle variant="Bold" size={22} color="#000" />
                    <p className="text-black font-medium">Message Sent!</p>
                  </motion.div>
                ) : (
                  <motion.div
                    onClick={handleSubmit}
                    className="md:self-start cursor-pointer self-center bg-[#fff] w-full md:w-fit  rounded-full flex px-10 py-4 font-regular text-[#000] justify-center"
                    whileHover={{ scale: 1.125 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <p>Send Message</p>
                  </motion.div>
                )}
              </>
            )}
          </form>
        </div>

        <div className="h-fit flex-col justify-center items-start flex">
          <motion.div
            initial={{
              rotate: -180,
            }}
            className="hidden lg:flex "
            animate={{
              rotate: 0,
              transition: {
                type: "spring",
              },
            }}
            whileHover={{
              rotate: 180,
              transition: {
                type: "spring",
              },
            }}
          >
            <Send2
              variant="Bold"
              color="#fff"
              className="flex self-center place-self-center justify-self-center justify-center items-center"
              size={120}
            />
          </motion.div>

          <div className="mt-20">
            <h2 className="text-white/80 text-xl">Call Us</h2>
            <p className="text-white mt-4">+389 77 758 066</p>
            <p className="text-white mt-0.5">+389 79 239 880</p>
          </div>

          <div className="mt-20">
            <h2 className="text-white/80 text-xl">Email</h2>
            <a
              href="mailto:contact@asyncawake.com"
              className="hover:underline block text-white mt-4"
            >
              contact@asyncawake.com
            </a>
            <a
              href="mailto:agency@asyncawake.com"
              className="hover:underline block text-white mt-0.5"
            >
              agency@asyncawake.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
