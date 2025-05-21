import Magnet from "@/animations/Magnet/Magnet";
import Squares from "@/backgrounds/Squares/Squares";
import FaqList from "@/components/faq-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Briefcase,
  ColorSwatch,
  Convertshape,
  DollarCircle,
  ExportSquare,
  Flash,
  LampCharge,
  MessageQuestion,
  Messages1,
  NoteAdd,
  RecordCircle,
  Setting2,
  Star1,
  VoiceSquare,
} from "iconsax-react";
import Link from "next/link";
import { memo, useEffect, useMemo, useRef } from "react";

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

const FeatureCard = memo(({ icon: Icon, title, description, index }: any) => {
  const isEven = index % 2 == 0;

  return (
    <div
      className={`flex-row w-full lg:w-1/2 ${
        isEven ? " self-start" : "self-end"
      } gap-x-7 lg:gap-x-10 relative flex group justify-start items-center`}
    >
      <div className="items-start">
        <MotionInView
          variants={{
            initial: { scale: 0, y: 20, opacity: 0 },
            animate: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}
        >
          <Icon
            className="w-20 h-20 lg:w-40 lg:h-40"
            color="#5E27F6"
            variant="Bulk"
          />
        </MotionInView>
      </div>

      <MotionInView
        variants={{
          initial: { y: 80, opacity: 0 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
            },
          },
        }}
        className="flex-col"
      >
        <h1 className=" font-medium tracking-tighter flex items-center gap-x-1 text-3xl lg:text-5xl text-[#0d0d0e]">
          {title}
        </h1>

        <p className="text-md lg:text-xl font-medium  text-[#0d0d0e]/70 mt-3 ">
          {description}
        </p>
      </MotionInView>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

const SolutionCard = memo(({ index, icon: Icon, title, description }: any) => (
  <>
    <MotionInView
      className="w-full"
      variants={{
        initial: { opacity: 0, y: 60 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.4, 0, 0.1, 1],
          },
        },
      }}
    >
      <div className="md:py-18 px-4 p-8 group  relative flex-col md:flex-row justify-between items-start md:items-center flex overflow-hidden h-full">
        <div className="flex  justify-start items-center gap-x-8 h-full">
          <h1
            className="hidden border border-transparent md:flex text-8xl 
          font-bold from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r bg-clip-text text-transparent"
          >
            0{index + 1}
          </h1>

          <div className="flex-grow">
            <div className="flex items-center gap-x-4">
              <h2 className="text-4xl md:text-5xl  gap-x-2 flex items-start leading-14  from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-b bg-clip-text text-transparent font-medium ">
                <div className="flex group-hover:font-bold transition-all duration-200 items-center  gap-x-3">
                  <h1
                    className="text-4xl flex md:hidden
          font-bold from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r bg-clip-text text-transparent"
                  >
                    0{index + 1}
                  </h1>
                  {title}{" "}
                </div>
              </h2>
            </div>
            <p className="mt-4 md:w-2/3 text-md md:text-xl text-[#0d0d0e]/90 font-medium">
              {description}
            </p>
          </div>
        </div>

        <div className="self-end mt-10 md:mt-0 md:self-center">
          <Link href="/apply">
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 1.1 }}>
              <div className="bg-[#0d0d0e] px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                <p className="text-[#fff] font-medium text-sm md:text-md">
                  Apply For Consultation
                </p>
              </div>
            </motion.div>
          </Link>

          <Link href="/faq" className="mt-6 md:mt-0 self-end md:self-center">
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 1.1 }}>
              <div className="bg-[#F8F8F8] flex justify-center gap-x-2 items-center mt-2 px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                <p className="text-[#000] font-medium text-sm md:text-md">
                  Have a question?
                </p>
                <ExportSquare variant="TwoTone" size={15} color="#000" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </MotionInView>

    <MotionInView
      variants={{
        initial: { width: 0 },
        animate: {
          width: "100%",
          transition: {
            ease: [0.4, 0, 0.1, 1],
            duration: 0.7,
          },
        },
      }}
      className="origin-left w-full border-t-[2px] border-[#f0f0f0]"
    ></MotionInView>
  </>
));
SolutionCard.displayName = "SolutionCard";

export default function Home() {
  const smoothEase = [0.6, 0.01, 0.05, 0.95];
  // Memoized variants for animations
  const fadeInUpVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 100 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [smoothEase] },
      },
    }),
    [smoothEase]
  );

  const scaleRotateVariants = useMemo(
    () => ({
      initial: { scale: 0, opacity: 0, rotate: -360 },
      animate: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: "spring" },
      },
    }),
    []
  );

  // Memoized feature data for "Why Choose AI"
  const features = useMemo(
    () => [
      {
        icon: Flash,
        title: "Save Time",
        numberLabel: "01",
        description:
          "Automate tasks so your team can focus on what matters most",
      },
      {
        icon: DollarCircle,
        title: "Lower Costs",
        numberLabel: "02",
        description: "Reduce expenses by replacing manual work with automation",
      },
      {
        icon: ColorSwatch,
        title: "Get Personal",
        numberLabel: "03",
        description:
          "Deliver tailored conversations that match your brand and customers",
      },
      {
        icon: Messages1,
        title: "Instant Replies",
        numberLabel: "04",
        description: "Answer questions 24/7 with a chat agent that never rests",
      },
    ],
    []
  );

  // Memoized solution data for "AI-Powered Efficiency" with additional fields
  const solutions = useMemo(
    () => [
      {
        icon: Messages1,
        title: "AI Chat Agent",
        description:
          "Engage customers 24/7 with conversational chat agent that improves support and boosts sales",
      },
      {
        icon: Setting2,
        title: "AI Automation",
        description:
          "Automate the boring stuff, cut costs, and speed up operations—without burning out your team",
      },
      {
        icon: VoiceSquare,
        title: "Voice Agent",
        description:
          "24/7 support with an intelligent voice agent that improves engagement and efficiency",
      },
    ],
    []
  );

  const heroH1 = {
    initial: { y: "100%" },
    animate: { y: 0 },
  };

  const InfiniteScrollText = () => {
    const words = [
      "AI Chat Agent",
      "Customer Inquiries",
      "Automation",
      "Boost Efficiency",
    ];

    const wordsOpposite = [
      "Boost Efficiency",
      "Automation",
      "Customer Inquiries",
      "AI Chat Agent",
    ];

    return (
      <div className={`w-full overflow-hidden pb-2`}>
        <div className="flex flex-col space-y-1">
          {/* Top row: scrolls left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span
                key={`bottom-${i}`}
                className=" text-5xl flex flex-row items-center lg:text-7xl font-bold tracking-tighter text-[#0d0d0e]"
              >
                <h1 className="from-[#000]/90 p-1.5 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent">
                  {words[(i + 1) % words.length]}
                </h1>
                <sub className="mx-3 md:mx-5 text-7xl leading-0  md:text-[80px] text-[#5E27F6]">
                  *
                </sub>
              </span>
            ))}
          </div>
          {/* Bottom row: scrolls right, offset by one word */}
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span
                key={`bottom-${i}`}
                className=" text-5xl flex flex-row items-center lg:text-7xl font-bold tracking-tighter text-[#0d0d0e]"
              >
                <h1 className="from-[#000]/90 p-1.5 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent">
                  {wordsOpposite[(i + 1) % wordsOpposite.length]}
                </h1>
                <sub className="mx-3 md:mx-5 text-7xl  leading-0  md:text-[80px] text-[#5E27F6]">
                  *
                </sub>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <head>
        <title>Home: AsyncAwake</title>
        <meta
          name="description"
          content="AsyncAwake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head>

      <Header />

      <div className="absolute z-0 left-0 top-0 w-full h-screen md:h-hull">
        <Squares
          speed={0}
          squareSize={60}
          direction="down"
          borderColor={"#0d0d0e" + "1A"}
          hoverFillColor="transparent"
        />
      </div>

      <div className="z-10 h-[100svh] md:h-[90vh] relative justify-between flex flex-col">
        <div className=""></div>

        <div className="justify-center w-fit self-center relative flex-col items-center flex">
          <div className="backdrop-blur-2xl flex gap-x-2 items-center bg-[#5E27F6]/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <p className="text-[#5E27F6] font-medium">Skip the Busywork</p>
            <Flash variant="Bulk" size={18} color="#5E27F6" />
          </div>

          <div className="flex-col z-1 flex items-center justify-center">
            <div className="hidden md:flex overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden mt-6 z-0 tracking-tighter text-center text-[#0d0d0e] leading-14 lg:leading-20 text-5xl lg:text-[80px] font-bold"
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                Save 8+ Hours a Week
              </motion.h1>
            </div>

            <div className="flex md:hidden overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden mt-6 z-0 leading-12.5 text-center text-[#0d0d0e]  text-5xl font-bold tracking-tighter"
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                Save 8+
              </motion.h1>
            </div>

            <div className="flex md:hidden overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden z-0 leading-12.5 text-center text-5xl font-bold tracking-tighter"
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                Hours a Week
              </motion.h1>
            </div>

            <div className="flex md:hidden overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden z-0 leading-14 text-center text-5xl font-bold tracking-tighter"
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                By Automating
              </motion.h1>
            </div>

            <div className="flex md:hidden  mb-6 overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden z-0 leading-14 text-center text-5xl font-bold tracking-tighter"
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                Your Busywork
              </motion.h1>
            </div>

            <div className="flex md:flex-row flex-col justify-center gap-x-4 items-center">
              <div className="hidden md:flex overflow-hidden z-1">
                <motion.h1
                  initial="initial"
                  animate="animate"
                  className=" z-0 text-center tracking-tighter text-[#0d0d0e] pb-6  leading-14 lg:leading-26 text-5xl lg:text-[80px] font-bold"
                  variants={heroH1}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.6, 0.01, -0.05, 0.95],
                  }}
                >
                  By Automating
                </motion.h1>
              </div>

              <div className="hidden md:flex overflow-hidden z-1">
                <motion.h1
                  initial="initial"
                  animate="animate"
                  className="z-0 text-center text-[#0d0d0e] tracking-tighter pb-6 leading-14 lg:leading-20 text-5xl lg:text-[80px] font-bold"
                  variants={heroH1}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.6, 0.01, -0.05, 0.95],
                  }}
                >
                  Your Busywork
                </motion.h1>
              </div>
            </div>
          </div>

          <p className="mx-6 md:px-0 text-center font-medium  text-xl md:text-xl lg:text-2xl text-[#0d0d0e]/80 ">
            We build smart assistants that answer questions, automate tasks,{" "}
            <br className="hidden sm:flex" />
            and free up your team’s time.
          </p>

          <Magnet padding={50} className="mt-8 md:mt-10" magnetStrength={40}>
            <Link href="/apply">
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
              >
                <div className="bg-[#0d0d0e] px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                  <p className="text-[#fff] font-medium text-sm md:text-md">
                    Apply Now
                  </p>
                </div>
              </motion.div>
            </Link>
          </Magnet>
        </div>

        <div></div>
        <div className="flex md:hidden"></div>
      </div>

      <InfiniteScrollText />

      <div className="h-full pt-50 pb-30">
        <MotionInView
          className="flex flex-col justify-center items-center"
          variants={fadeInUpVariants}
        >
          <div className="backdrop-blur-2xl flex gap-x-2 items-center  bg-[#5E27F6]/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <p className="text-[#5E27F6] font-medium">Benefits</p>
            <Star1
              variant="Bulk"
              size={18}
              className="relative  bottom-[1px]"
              color="#5E27F6"
            />
          </div>
          <h1 className="relative mt-6 text-center justify-center flex flex-col items-center gap-x-3 md:gap-x-4  text-5xl lg:text-7xl font-bold tracking-tighter  from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent">
            <span className="gap-x-3 from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent md:gap-x-4 flex">
              The
              <span className="relative from-[#000]/90 pr-0.5 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent inline-block">
                Benefits
                <svg
                  className="absolute stroke-[2.5px] md:stroke-[2px]  -bottom-2.5 md:-bottom-3.5 left-1/2 -translate-x-1/2 w-full"
                  viewBox="0 0 100 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8 Q50 2, 95 8"
                    stroke="#5E27F6"
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
              </span>
            </span>

            <span className="flex from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent relative flex-row items-center mt-2 md:mt-3 gap-x-3 md:gap-x-4">
              Of Automation
              <MotionInView
                variants={{
                  initial: { scale: 0 },
                  animate: {
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: smoothEase,
                    },
                  },
                }}
                className="absolute md:relative md:top-0 -top-28 -right-4"
              >
                <MessageQuestion
                  color="#5E27F6"
                  className="rotate-12 w-14 md:w-20"
                  variant="Bulk"
                />
              </MotionInView>
            </span>
          </h1>
        </MotionInView>

        <MotionInView
          variants={{
            initial: { opacity: 0, y: 40 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: smoothEase, delay: 0.1 },
            },
          }}
        >
          <p className="text-3xl mx-8  md:text-4xl  mt-10 text-center font-medium from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-b bg-clip-text text-transparent ">
            Virtual Assistants handle the work for you while{" "}
            <br className="hidden md:block" />
            you & your team focus on what's important.
          </p>
        </MotionInView>

        <div className="w-full flex justify-center items-center"></div>

        <div className="flex flex-col lg:gap-y-10 gap-y-16 px-6 items-center xl:px-60 mt-40">
          {features.map((feature, index) => (
            <FeatureCard index={index} {...feature} />
          ))}
        </div>
      </div>

      <div
        id="solutions"
        className="h-full flex flex-col justify-center py-30 px-6 md:px-10"
      >
        <div className="flex items-start  flex-col md:flex-row justify-evenly md:items-center ">
          <MotionInView
            variants={{
              initial: { opacity: 0, y: 80 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: smoothEase },
              },
            }}
          >
            <div className="flex flex-col items-start">
              <div className="backdrop-blur-2xl flex gap-x-2 items-center bg-[#5E27F6]/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                <p className="text-[#5E27F6] font-medium">Solutions</p>
                <LampCharge
                  variant="Bulk"
                  className="relative bottom-[1px]"
                  size={18}
                  color="#5E27F6"
                />
              </div>

              <div className=" from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent pb-1.5 font-bold  text-5xl lg:text-7xl mt-6">
                Cut Costs, <br />
                Less Busywork
              </div>
            </div>
          </MotionInView>

          <div>
            <MotionInView
              variants={{
                initial: { opacity: 0, y: 40 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: smoothEase, delay: 0.1 },
                },
              }}
            >
              <p className="text-3xl  md:text-4xl  mt-10 md:mt-0 font-medium from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-b bg-clip-text text-transparent ">
                from answering customer questions to{" "}
                <br className="hidden lg:flex" />
                automating internal tasks our <br className="hidden lg:flex" />
                solutions help you do more with less.
              </p>
            </MotionInView>
          </div>
        </div>

        <div className="mt-20 md:px-10 gap-y-4 h-full self-center flex  w-full flex-col  justify-center">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              index={index}
              {...solution}
              solution={solution}
            />
          ))}
        </div>
      </div>

      <div className="h-full py-30 flex flex-col justify-center items-center px-6 md:px-10">
        <MotionInView
          className="flex items-center flex-col"
          variants={fadeInUpVariants}
        >
          <div className="backdrop-blur-2xl flex gap-x-2 items-center bg-[#5E27F6]/10  px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <p className="text-[#5E27F6] font-medium">FAQ</p>
            <MessageQuestion
              variant="Bulk"
              size={18}
              className="relative  bottom-[1px]"
              color="#5E27F6"
            />
          </div>
          <h1 className="mt-6  text-center px-1  font-bold  text-5xl lg:text-7xl from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent">
            Frequently <br />
            Asked Questions
          </h1>
        </MotionInView>

        <FaqList />
      </div>

      <div className="h-full py-30 flex flex-col justify-center items-center px-6 md:px-10">
        <div>
          <MotionInView
            className="flex items-center flex-col"
            variants={fadeInUpVariants}
          >
            <div className="backdrop-blur-2xl flex gap-x-2 items-center bg-[#5E27F6]/10  px-3 md:px-4 py-1 md:py-1.5 rounded-full">
              <p className="text-[#5E27F6] font-medium">Our Approach</p>
              <Convertshape
                variant="Bulk"
                className="relative bottom-[1px]"
                size={18}
                color="#5E27F6"
              />
            </div>
            <h1 className="mt-6 from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent text-center font-bold  text-5xl lg:text-7xl">
              Implementation <br />
              Process
            </h1>
          </MotionInView>

          <MotionInView
            variants={{
              initial: { opacity: 0, y: 40 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: smoothEase, delay: 0.1 },
              },
            }}
          >
            <p className="text-center mx-6 font-medium text-3xl md:text-4xl mt-10 from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-b bg-clip-text text-transparent">
              Book a free consult, we build the solution,{" "}
              <br className="hidden md:flex" />
              then launch it. No fluff—just done-for-you.
            </p>
          </MotionInView>
        </div>

        <MotionInView
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { duration: 0.5, ease: smoothEase, delay: 0.1 },
            },
          }}
        >
          <div className="mt-20 flex md:hidden flex-col">
            <div className="flex  items-start">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-6">
                  <MotionInView
                    variants={{
                      initial: {
                        scale: 0,
                      },
                      animate: {
                        scale: 1,
                        transition: { ease: smoothEase, duration: 0.5 },
                      },
                    }}
                    className="w-24 relative h-24 text-3xl justify-center items-center flex rounded-4xl bg-[#F8F8F8] "
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -right-2"
                    />

                    <span>01</span>
                  </MotionInView>
                  <div>
                    <div className="text-[#0d0d0e] font-medium text-2xl">
                      Consultation
                    </div>
                  </div>
                </div>

                <MotionInView
                  variants={{
                    initial: {
                      scaleY: 0,
                    },
                    animate: {
                      scaleY: 1,
                      transition: {
                        delay: 0.1,
                        ease: smoothEase,
                        duration: 0.5,
                      },
                    },
                  }}
                  className="h-24 w-[3px] rounded-2xl origin-top my-3 relative left-12 from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r"
                ></MotionInView>
              </div>
            </div>

            <div className="flex  items-start">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-6">
                  <MotionInView
                    variants={{
                      initial: {
                        scale: 0,
                      },
                      animate: {
                        scale: 1,
                        transition: { ease: smoothEase, duration: 0.5 },
                      },
                    }}
                    className="w-24 relative h-24 text-3xl justify-center items-center flex rounded-4xl bg-[#F8F8F8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -right-2"
                    />

                    <span>02</span>
                  </MotionInView>

                  <div>
                    <div className="text-[#0d0d0e] font-medium text-2xl   ">
                      Develop
                    </div>
                  </div>
                </div>

                <MotionInView
                  variants={{
                    initial: {
                      scaleY: 0,
                    },
                    animate: {
                      scaleY: 1,
                      transition: {
                        delay: 0.1,
                        ease: smoothEase,
                        duration: 0.5,
                      },
                    },
                  }}
                  className="h-24 w-[3px] my-3 rounded-2xl relative origin-top left-12 from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r"
                ></MotionInView>
              </div>
            </div>

            <div className="flex  items-start">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-6">
                  <MotionInView
                    variants={{
                      initial: {
                        scale: 0,
                      },
                      animate: {
                        scale: 1,
                        transition: { ease: smoothEase, duration: 0.5 },
                      },
                    }}
                    className="w-24 relative h-24 text-3xl justify-center items-center flex rounded-4xl bg-[#F8F8F8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -right-2"
                    />

                    <span>03</span>
                  </MotionInView>

                  <div>
                    <div className="text-[#0d0d0e] font-medium text-2xl   ">
                      Deploy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionInView>

        <div>
          <div className="mt-30 hidden md:flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex relative items-center">
                <div className="flex relative flex-col items-center justify-center">
                  <MotionInView
                    variants={{
                      initial: {
                        scale: 0,
                      },
                      animate: {
                        scale: 1,
                        transition: { ease: smoothEase, duration: 0.5 },
                      },
                    }}
                    className="w-24 h-24 relative text-[#0d0d0e] text-3xl justify-center font-medium items-center flex rounded-4xl bg-[#F8F8F8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -bottom-2"
                    />
                    <span>01</span>
                  </MotionInView>
                  <div className="absolute font-medium -bottom-14 text-[#0d0d0e] text-xl">
                    Consultation
                  </div>
                </div>

                <MotionInView
                  variants={{
                    initial: {
                      scaleX: 0,
                    },
                    animate: {
                      scaleX: 1,
                      transition: {
                        delay: 0.1,
                        ease: smoothEase,
                        duration: 0.5,
                      },
                    },
                  }}
                  className="w-24 origin-left mx-2 h-[3px] rounded-2xl from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r"
                ></MotionInView>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex relative items-center">
                <div className="flex relative flex-col items-center justify-center">
                  <MotionInView
                    variants={{
                      initial: {
                        scale: 0,
                      },
                      animate: {
                        scale: 1,
                        transition: {
                          delay: 0.2,
                          ease: smoothEase,
                          duration: 0.5,
                        },
                      },
                    }}
                    className="w-24 h-24 relative text-[#0d0d0e] text-3xl justify-center font-medium items-center flex rounded-4xl bg-[#F8F8F8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -bottom-2"
                    />

                    <span>02</span>
                  </MotionInView>
                  <div className="absolute font-medium -bottom-14 text-[#0d0d0e] text-xl">
                    Develop
                  </div>
                </div>
                <MotionInView
                  variants={{
                    initial: {
                      scaleX: 0,
                    },
                    animate: {
                      scaleX: 1,
                      transition: {
                        delay: 0.3,
                        ease: smoothEase,
                        duration: 0.5,
                      },
                    },
                  }}
                  className="w-24 mx-2 h-[3px] rounded-2xl origin-left from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r"
                ></MotionInView>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex relative items-center">
                <div className="flex relative flex-col items-center justify-center">
                  <MotionInView
                    variants={{
                      initial: {
                        scale: 0,
                      },
                      animate: {
                        scale: 1,
                        transition: {
                          delay: 0.4,
                          ease: smoothEase,
                          duration: 0.5,
                        },
                      },
                    }}
                    className="w-24 relative h-24 text-[#0d0d0e] text-3xl justify-center font-medium items-center flex rounded-4xl bg-[#F8F8F8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -bottom-2"
                    />

                    <span>03</span>
                  </MotionInView>
                  <div className="absolute -bottom-14 font-medium text-[#0d0d0e] text-xl">
                    Deploy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-center items-center pt-30">
        <MotionInView className="w-min" variants={scaleRotateVariants}>
          <div className="w-34 h-34 rounded-full bg-[#F8F8F8] backdrop-blur-2xl flex justify-center items-center">
            <Briefcase variant="Bulk" size={46} color={"#0d0d0e"} />
          </div>
        </MotionInView>

        <MotionInView variants={fadeInUpVariants}>
          <h1 className="mt-8 mb-10 text-4xl from-[#000]/90 via-[#0d0d0e]/80 to-[#0d0d0e]/70 bg-gradient-to-br bg-clip-text text-transparent  lg:text-7xl font-bold text-center">
            Apply Now, <br />
            let’s collaborate!
          </h1>
        </MotionInView>

        <MotionInView
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: smoothEase },
            },
          }}
        >
          <div className="flex items-center gap-x-4">
            <Link href="/apply">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: smoothEase, delay: 0.3 },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <div className="text-[#fff] bg-[#0d0d0e] w-fit flex items-center gap-x-2 border-2 px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                  <NoteAdd variant="TwoTone" color={"#fff"} size={20} />
                  Apply Now
                </div>
              </motion.div>
            </Link>
          </div>
        </MotionInView>
      </div>

      <Footer />
    </div>
  );
}
