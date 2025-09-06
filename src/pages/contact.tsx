"use client";

import { DotsPattern } from "@/backgrounds/Squares/DotPattern";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send2, Sms, TickCircle } from "iconsax-react";
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

  // 1a1a1a black
  // F8F8F8 gray

  return (
    <>
      <div className=" relative">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        {/* <head>
          <title>Contact: Async Awake</title>
          <meta
            name="description"
            content="Async Awake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
          />
        </head> */}

        <Header />
        <div className="w-full overflow-x-hidden relative flex h-full flex-col lg:flex-row py-10 px-6 lg:px-0 lg:py-20 items-start justify-around ">
          <div className="w-full z-50 lg:w-fit">
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
                className="text-6xl md:text-8xl  leading-16 md:leading-22 md:font-bold font-medium ml-1"
              >
                Let&apos;s work <br />
                together!
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ease: [0.6, 0.01, 0.05, 0.95],
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="mt-10 text-md md:text-lg font-medium text-[#292929]/85"
              >
                Let us help you become even greater at what you do.{" "}
                <br className="hidden md:flex" />
                Fill out the following form and we will get back to you in the
                next 24 hours.
              </motion.p>
            </div>

            <form className="z-[30] mt-12 w-full flex flex-col gap-y-8">
              <div className="flex items-start gap-x-4 group">
                <div className="flex justify-center items-center w-11 h-7 bg-[#f8f8f8] font-medium text-sm rounded-full group-focus-within:bg-[#292929] group-focus-within:text-[#EFEFEF] transition-all">
                  <p>01</p>
                </div>
                <div className="flex flex-col w-full gap-y-3">
                  <label htmlFor="fullName" className="font-medium text-md">
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
                    className="outline-none border-b-2 placeholder:text-[#292929]/80 border-[#292929]/40 focus-within:border-[#292929] transition-all py-4 text-[#292929] px-3 font-medium"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="flex items-start gap-x-4 group">
                <div className="flex justify-center items-center w-11 h-7 bg-[#f8f8f8] font-medium text-sm rounded-full group-focus-within:bg-[#292929] group-focus-within:text-[#EFEFEF] transition-all">
                  <p>02</p>
                </div>
                <div className="flex flex-col w-full gap-y-3">
                  <label htmlFor="fullName" className="font-medium text-md">
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
                    className="outline-none  border-b-2 caret-black/80 placeholder:text-[#292929]/80 border-[#292929]/40 focus-within:border-[#292929] transition-all py-4 text-[#292929] px-3 font-medium"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="flex items-start gap-x-4 group">
                <div className="flex justify-center items-center w-11 h-7 bg-[#f8f8f8] font-medium text-sm rounded-full group-focus-within:bg-[#292929] group-focus-within:text-[#EFEFEF] transition-all">
                  <p>03</p>
                </div>
                <div className="flex flex-col w-full gap-y-3">
                  <label htmlFor="fullName" className="font-medium text-md">
                    Let's connect<span className=" text-red-600">*</span>
                  </label>
                  <textarea
                    required={true}
                    value={userInput.message}
                    onChange={handleChange}
                    name="message"
                    id=""
                    rows={3}
                    className="resize-none outline-none w-full  border-b-2 caret-black/80 placeholder:text-[#292929]/80 border-[#292929]/40 focus-within:border-[#292929] transition-all py-4 text-[#292929] px-3 font-medium"
                    placeholder="Provide Detailed Information.."
                  ></textarea>
                </div>
              </div>

              {loading ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:self-start self-center bg-[#292929] items-center gap-x-2 w-full md:w-fit  rounded-full flex px-10 py-4 font-medium text-[#EFEFEF] justify-center"
                >
                  Sending{" "}
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-[#EFEFEF]/15 animate-spin  fill-[#5e27f6]"
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
                      className="md:self-start self-center bg-[#000] items-center gap-x-2 w-full md:w-fit  rounded-full flex px-10 py-4 font-medium text-[#EFEFEF] justify-center"
                    >
                      <TickCircle variant="Bold" size={22} color="#EFEFEF" />
                      <p className="text-white font-medium">Message Sent!</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      onClick={handleSubmit}
                      className="md:self-start cursor-pointer self-center bg-[#000] w-full md:w-fit  rounded-full flex px-10 py-4 font-medium text-[#EFEFEF] justify-center"
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
            <div className="">
              <h2 className="text-[#292929]/80 text-xl font-medium">
                Email Contact
              </h2>
              <a
                href="mailto:krmzov@asyncawake.agency"
                className="hover:underline font-medium  flex items-center gap-x-2 text-[#292929] mt-4"
              >
                <Sms variant="Linear" size={18} color="#000" />
                krmzov@asyncawake.agency
              </a>
              <a
                href="mailto:ilija@asyncawake.agency"
                className="hover:underline  gap-x-2 flex items-center  font-medium text-[#292929] mt-0.5"
              >
              <Sms variant="Linear" size={18} color="#000" />

                ilija@asyncawake.agency
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
