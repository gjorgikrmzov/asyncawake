import Magnet from "@/animations/Magnet/Magnet";
import SpotlightCard from "@/animations/SpotlightCard/SpotlightCard";
import Squares from "@/backgrounds/Squares/Squares";
import FaqList from "@/components/faq-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import {
  Add,
  ArrowDown,
  Award,
  Briefcase,
  CallCalling,
  ColorSwatch,
  Convertshape,
  Data2,
  DollarCircle,
  Flash,
  I24Support,
  KeySquare,
  LampCharge,
  MessageQuestion,
  Messages1,
  RecordCircle,
  Sms,
  TrendUp,
  VoiceSquare,
} from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

// Memoized MotionInView component
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

// Memoized FeatureCard component for "Why Choose AI" section
const FeatureCard = memo(({ icon: Icon, title, description }: any) => (
  <div className="flex-col w-full lg:w-fit flex justify-start items-start">
    <MotionInView
      variants={{
        initial: { scale: 0, opacity: 0, rotate: -360 },
        animate: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { type: "spring" },
        },
      }}
    >
      <Icon variant="Bulk" size={56} color="#5E27F6" />
    </MotionInView>
    <div className="mt-6 flex-col">
      <h1 className="font-medium text-[26px] text-[#ffffff]">{title}</h1>
      <p className="font-medium text-[#ffffff]/80 mt-2 md:mt-4">
        {description}
      </p>
    </div>
  </div>
));
FeatureCard.displayName = "FeatureCard";

// Memoized SolutionCard component for "AI-Powered Efficiency" section
const SolutionCard = memo(
  ({ index, icon: Icon, title, description, onViewDetails, solution }: any) => (
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
      <SpotlightCard
        className="p-6 bg-gradient-to-tr from-[#070707] via-[#070707]/40 to-[rgba(192, 192, 192, 0.3)] rounded-4xl h-full"
        spotlightColor="rgba(192, 192, 192, 0.3)"
      >
        <div className="flex flex-col h-full">
          <Icon variant="TwoTone" size={50} color="#5e27f6" />
          <div className="mt-10 flex-grow">
            <h2 className="text-xl text-white font-medium">{title}</h2>
            <p className="mt-2 text-white/80">{description}</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.1 }}
            className="w-fit mt-6"
            onClick={() => onViewDetails(solution)}
          >
            <div className="bg-white px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
              <p className="text-[#070707] text-sm md:text-md">View Details</p>
            </div>
          </motion.div>
        </div>
      </SpotlightCard>
    </MotionInView>
  )
);
SolutionCard.displayName = "SolutionCard";

export default function Home() {
  const router = useRouter();
  const smoothEase = [0.6, 0.01, 0.05, 0.95];
  const [selectedSolution, setSelectedSolution] = useState<any>(null);

  // Ensure scroll is enabled after closing the overlay
  useEffect(() => {
    // Force scroll restoration when selectedSolution changes to null
    if (!selectedSolution) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      // Force a reflow to ensure scroll is restored
      window.scrollTo(0, window.scrollY);
    }
  }, [selectedSolution]);

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

  // Memoized scroll velocity texts
  const scrollTexts = useMemo(
    () => [
      "Automation ‧ Assistant-Bots ‧ Customer Support ‧ Boost Efficiency",
      "Assistant-Bots ‧ Automation ‧ Customer Support ‧ Boost Efficiency",
    ],
    []
  );

  // Memoized feature data for "Why Choose AI"
  const features = useMemo(
    () => [
      {
        icon: Flash,
        title: "Boost Efficiency",
        description: "Automate tasks so your team focuses on high-value work",
      },
      {
        icon: DollarCircle,
        title: "Cost Savings",
        description: "Reduce operational expenses with scalable solutions.",
      },
      {
        icon: ColorSwatch,
        title: "Personalized",
        description: "Tailor conversations to your business and customer needs",
      },
      {
        icon: I24Support,
        title: "Customer Support",
        description: "Handle inquiries anytime with intelligent assistant-bot",
      },
    ],
    []
  );

  // Memoized solution data for "AI-Powered Efficiency" with additional fields
  const solutions = useMemo(
    () => [
      {
        icon: Messages1,
        title: "AI Assistant Bot",
        description:
          "Engage customers 24/7 with intelligent, conversational AI that improves support and boosts sales.",
        features: [
          "24/7 customer engagement",
          "Natural language processing",
          "Customizable responses",
        ],
        benefits: [
          "Improved customer satisfaction",
          "Reduced response times",
          "Increased sales conversions",
        ],
        useCases: ["E-commerce support", "Booking systems", "FAQ automation"],
      },
      {
        icon: TrendUp,
        title: "AI Automation",
        description:
          "Automate the boring stuff, cut costs, and speed up operations—without burning out your team.",
        features: [
          "Task automation",
          "Workflow integration",
          "Real-time analytics",
        ],
        benefits: [
          "Lower operational costs",
          "Enhanced productivity",
          "Error reduction",
        ],
        useCases: [
          "Data entry automation",
          "Inventory management",
          "Report generation",
        ],
      },
      {
        icon: VoiceSquare,
        title: "Voice Agent",
        description:
          "Provide seamless, 24/7 customer support with intelligent voice Assistant that enhances engagement and efficiency.",
        features: [
          "Voice recognition",
          "Multi-language support",
          "Interactive voice response",
        ],
        benefits: [
          "Enhanced customer experience",
          "Scalable support",
          "Reduced call center costs",
        ],
        useCases: [
          "Call center automation",
          "Appointment scheduling",
          "Customer feedback collection",
        ],
      },
    ],
    []
  );

  // Memoized FAQ items

  // Memoized event handlers
  const handleRequestDemo = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const handleViewDetails = useCallback((solution: any) => {
    setSelectedSolution(solution);
  }, []);

  const heroH1 = {
    initial: { y: "100%" },
    animate: { y: 0 },
  };

  const InfiniteScrollText = () => {
    const words = [
      "AI Assistant-Bot",
      "Customer Support",
      "Automation",
      "Boost Efficiency",
    ];

    const wordsOpposite = [
      "Boost Efficiency",
      "Automation",
      "Customer Support",
      "AI Assistant-Bot",
    ];

    return (
      <div className={`w-full overflow-hidden pb-2`}>
        <div className="flex flex-col space-y-2">
          {/* Top row: scrolls left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span
                key={`bottom-${i}`}
                className=" text-4xl flex flex-row items-center lg:text-7xl font-medium text-white"
              >
                {words[(i + 1) % words.length]}
                <RecordCircle
                  className="mx-3 md:mx-6 w-4 md:w-8"
                  variant="Bulk"
                  color="#5E27F6"
                />
              </span>
            ))}
          </div>
          {/* Bottom row: scrolls right, offset by one word */}
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span
                key={`bottom-${i}`}
                className=" text-4xl flex flex-row items-center lg:text-7xl font-medium text-white"
              >
                {wordsOpposite[(i + 1) % wordsOpposite.length]}
                <RecordCircle
                  className="mx-3 md:mx-6 w-4 md:w-8"
                  variant="Bulk"
                  color="#5E27F6"
                />
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
        <title>Home - AsyncAwake</title>
        <meta
          name="description"
          content="AsyncAwake: AI agency crafting smart assistant-bot and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head>

      <Header />

      <div className="absolute z-0 left-0 top-0 w-full h-screen md:h-[100vh]">
        <Squares
          speed={0}
          squareSize={60}
          direction="down"
          borderColor={"#ffffff" + "2A"}
          hoverFillColor="transparent"
        />
      </div>

      <div className="z-10 h-[100svh] md:h-full py-0 md:py-28 justify-between flex flex-col">
        <div></div>

        <div className="justify-center flex-col items-center flex">
          <div className="z-[50] bg-[#fff]/10 border-2 backdrop-blur-2xl flex gap-x-2 items-center border-white/20 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <p className="text-white">AI-Powered Services</p>
            <Data2 variant="Bulk" size={18} color="#fff" />
          </div>

          <div className="flex-col z-1 flex items-center justify-center">
            <div className="hidden md:flex overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden mt-6 z-0 text-center text-white leading-14 lg:leading-16 text-5xl lg:text-6xl font-medium"
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
                className="overflow-hidden mt-6 z-0 leading-13.5 text-center text-white  text-5xl font-medium"
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
                className="overflow-hidden z-0 leading-13.5 text-center text-5xl font-medium"
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
                className="overflow-hidden z-0 leading-13.5 text-center text-5xl font-medium"
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
                className="overflow-hidden z-0 leading-13.5 text-center text-5xl font-medium"
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
                  className=" z-0 text-center text-white pb-6  leading-14 lg:leading-16 text-5xl lg:text-6xl font-medium"
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
                  className="z-0 text-center text-white pb-6 leading-14 lg:leading-16 text-5xl lg:text-6xl font-medium"
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

          <p className="mx-6 md:px-0 text-center text-lg md:text-lg lg:text-xl text-white/80 ">
            We build smart assistants that answer questions, automate tasks,{" "}
            <br className="hidden sm:flex" />
            and free up your team’s time.
          </p>

          <Magnet padding={50} className="mt-8 md:mt-10" magnetStrength={40}>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
              >
                <div className="bg-white px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                  <p className="text-[#070707] font-medium text-sm md:text-md">
                    Get Started
                  </p>
                </div>
              </motion.div>
            </Link>
          </Magnet>
        </div>

        <div></div>
        <div></div>
      </div>

      <InfiniteScrollText />

      <div className="h-full py-30">
        <MotionInView variants={fadeInUpVariants}>
          <h1 className="relative text-center justify-center flex flex-col items-center gap-x-3 md:gap-x-4 text-white text-[42px] leading-12 lg:leading-18 lg:text-7xl font-medium">
            <span className="gap-x-3 md:gap-x-4 flex">
              The
              <span className="relative inline-block">
                Benefits
                <svg
                  className="absolute -bottom-1.5 md:-bottom-3.5 left-1/2 -translate-x-1/2 w-full"
                  viewBox="0 0 100 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8 Q50 2, 95 8"
                    stroke="#5E27F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
              </span>
            </span>

            <span className="flex relative flex-row items-center mt-2 md:mt-3 gap-x-3 md:gap-x-4">
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
                  className="rotate-12 w-12 md:w-20"
                  variant="Bulk"
                />
              </MotionInView>
            </span>
          </h1>
        </MotionInView>

        <MotionInView
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: smoothEase, delay: 0.1 },
            },
          }}
        >
          <p className="text-center mx-6 text-md md:text-lg mt-10 text-white/80">
            Virtual Assistants handle the work for you while you & your team
            <br className="hidden md:block" />
            focus on what's important.
          </p>
        </MotionInView>

        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] bg-[#fff]/10 h-[1px] mt-20"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 items-center px-6 lg:px-20 gap-x-24 justify-evenly mt-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div
        id="aiChatBot"
        className="h-full flex flex-col justify-center py-30 px-6 md:px-10"
      >
        <div className="flex items-start lg:items-center flex-col lg:flex-row justify-evenly">
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
              <div className="bg-[#fff]/10 border-2 flex gap-x-2 items-center border-white/20 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                <p className="text-white">SOLUTIONS</p>
                <LampCharge
                  variant="Bulk"
                  className="relative bottom-[1px]"
                  size={18}
                  color="#fff"
                />
              </div>

              <h1 className="text-[42px] mt-6 leading-12 lg:leading-18 lg:text-7xl">
                Services & <br className="hidden md:flex" /> Growth
              </h1>
            </div>
          </MotionInView>

          <div>
            <MotionInView
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { duration: 0.5, ease: smoothEase, delay: 0.15 },
                },
              }}
            >
              <p className="text-md mt-10 lg:mt-0 text-white/90">
                From answering customer questions to automating
                <br className="hidden lg:flex" />
                internal tasks—our assistants help you do more with less.
              </p>
            </MotionInView>

            <MotionInView
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { duration: 0.5, ease: smoothEase, delay: 0.2 },
                },
              }}
            >
              <div className="flex items-center mt-6 gap-x-4">
                <Magnet padding={50} magnetStrength={40}>
                  <motion.div
                    onClick={handleRequestDemo}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <div className="bg-none px-4 border-2 border-white/20 hover:bg-white/10 transition-all cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                      <p className="text-white text-sm md:text-md">
                        Book a Call
                      </p>
                    </div>
                  </motion.div>
                </Magnet>
              </div>
            </MotionInView>
          </div>
        </div>

        <div className="mt-20 lg:gap-x-8 gap-y-8 h-full self-center flex lg:w-[90%] w-full flex-col lg:flex-row justify-center">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              index={index}
              {...solution}
              solution={solution}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedSolution && (
            <motion.div className="flex w-screen fixed left-0 px-6 z-[999] lg:px-0 top-0 h-[100dvh] justify-center py-6 lg:py-16 items-center pointer-events-auto">
              <motion.div
                key="solution-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0.1,
                  transition: {
                    delay: 0,
                  },
                }}
                transition={{
                  delay: 0.1,
                }}
                onClick={() => setSelectedSolution(null)}
                className="w-full top-0 left-0 absolute h-full bg-white/5 backdrop-blur-lg pointer-events-auto"
              ></motion.div>

              <motion.div
                key="modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    duration: 0.4,
                  },
                }}
                transition={{
                  damping: 15,
                  stiffness: 300,
                  type: "spring",
                }}
                className="h-[90%] z-10 flex flex-col justify-start lg:justify-between w-full lg:w-2/3 rounded-4xl bg-gradient-to-tr from-[#070707]/90 via-[#121212]/85 to-[#151515]/80 p-8 md:p-10 overflow-y-auto pointer-events-auto"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-[#FFF] font-medium flex text-2xl items-center gap-x-2">
                    {selectedSolution?.title}
                  </h1>

                  <Add
                    onClick={() => setSelectedSolution(null)}
                    size={32}
                    color="#fff"
                    variant="Linear"
                    className="rotate-45 cursor-pointer"
                  />
                </div>

                <div className="flex h-fit lg:flex-row mt-10 gap-x-12 flex-col justify-between items-start">
                  <div className="flex lg:w-fit w-full flex-col">
                    <div className="w-full">
                      <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.1,
                        }}
                        className="text-[#FFF]/80 font-medium text-md items-center gap-x-2"
                      >
                        Description
                      </motion.h1>

                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                        }}
                        className="mt-2 text-white text-lg"
                      >
                        {selectedSolution?.description}
                      </motion.p>
                    </div>

                    <div className="flex w-fit mt-10 lg:mt-20 flex-col lg:gap-x-8 lg:flex-row">
                      {selectedSolution?.features && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.3,
                          }}
                          className="mb-6 lg:mb-0"
                        >
                          <div className="text-xl flex flex-row items-center gap-x-2 font-medium text-white">
                            <KeySquare
                              variant="Bulk"
                              size={22}
                              className="bottom-1"
                              color="#5E27F6"
                            />
                            <h3>Key Features</h3>
                          </div>
                          <ul className="list-disc gap-y-1 flex flex-col pl-5 mt-2 text-white/80">
                            {selectedSolution.features.map(
                              (feature: string, idx: number) => (
                                <li className="text-md" key={idx}>
                                  {feature}
                                </li>
                              )
                            )}
                          </ul>
                        </motion.div>
                      )}

                      {selectedSolution?.benefits && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.4,
                          }}
                        >
                          <div className="text-xl flex flex-row items-center gap-x-2 font-medium text-white">
                            <Award variant="Bulk" size={22} color="#5E27F6" />
                            <h3>Benefits</h3>
                          </div>
                          <ul className="list-disc gap-y-1 flex flex-col pl-5 mt-2 text-white/80">
                            {selectedSolution.benefits.map(
                              (benefit: string, idx: number) => (
                                <li className="text-md" key={idx}>
                                  {benefit}
                                </li>
                              )
                            )}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="h-full self-center w-full lg:w-2/3">
                    <div className="hidden lg:flex flex-col">
                      <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.45,
                        }}
                        className="flex flex-row items-center gap-x-2 text-white text-2xl font-medium"
                      >
                        <span>Interested? Apply Now</span>
                        <ArrowDown variant="Bold" size={30} color="#5E27F6" />
                      </motion.h1>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.5,
                        }}
                        className="mt-3 text-white/90"
                      >
                        You can apply either for a consultation or request a
                        demo tailored to your needs.
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.55,
                      }}
                      className="flex mt-6 w-full flex-col lg:flex-row items-center gap-x-2"
                    >
                      <Link className="w-full lg:w-fit" href="/contact">
                        <motion.div
                          className="w-full lg:w-fit"
                          whileHover={{ scale: 1.101 }}
                          whileTap={{ scale: 1.1 }}
                        >
                          <div className="text-[#070707] justify-center bg-white w-full lg:w-fit flex items-center gap-x-3 border-2 px-3 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                            Consultation
                          </div>
                        </motion.div>
                      </Link>

                      <Link className="w-full lg:w-fit" href="/contact">
                        <motion.div
                          className="w-full lg:w-fit"
                          whileHover={{ scale: 1.101 }}
                          whileTap={{ scale: 1.1 }}
                        >
                          <div className="text-[#070707] justify-center bg-white w-full lg:w-fit flex items-center gap-x-3 border-2 px-3 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                            Request Demo
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                <div></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="h-full py-30 flex flex-col justify-center items-center px-6 md:px-10">
        <MotionInView
          className="flex items-center flex-col"
          variants={fadeInUpVariants}
        >
          <div className="bg-[#fff]/10 border-2 backdrop-blur-2xl flex gap-x-2 items-center border-white/20 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <p className="text-white">FAQ</p>
            <MessageQuestion
              variant="Bulk"
              className="relative bottom-[1px]"
              size={18}
              color="#fff"
            />
          </div>
          <h1 className="mt-6 text-white text-center text-[42px] leading-12 lg:leading-20 lg:text-7xl font-medium">
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
            <div className="bg-[#fff]/10 border-2 backdrop-blur-2xl flex gap-x-2 items-center border-white/20 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
              <p className="text-white">OUR APPROACH</p>
              <Convertshape
                variant="Bulk"
                className="relative bottom-[1px]"
                size={18}
                color="#fff"
              />
            </div>
            <h1 className="mt-6 text-white text-center text-[42px] leading-12 lg:leading-18 lg:text-7xl font-medium">
              Implementation <br />
              Process
            </h1>
          </MotionInView>

          <MotionInView
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: smoothEase, delay: 0.2 },
              },
            }}
          >
            <p className="text-center mx-6 text-md md:text-lg mt-10 text-white/80">
              Book a free consult, we build the solution, then launch it.{" "}
              <br className="hidden md:flex" />
              No fluff—just done-for-you.
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
            <div>
              <div className="flex gap-x-4 items-start">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-10 h-10 text-lg justify-center items-center flex rounded-full text-[#070707] bg-[#fff] font-semibold">
                    <span>1</span>
                  </div>
                  <div className="h-24 w-[2px] bg-[#5e27f6]"></div>
                </div>
                <div className="text-white text-lg">Consultation</div>
              </div>
            </div>

            <div>
              <div className="flex gap-x-4 items-start">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-10 h-10 text-lg justify-center items-center flex rounded-full text-[#070707] bg-[#fff] font-semibold">
                    <span>2</span>
                  </div>
                  <div className="h-24 w-[2px] bg-[#5e27f6]"></div>
                </div>
                <div className="text-white text-lg">Develop</div>
              </div>
            </div>

            <div>
              <div className="flex gap-x-4 items-start">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-10 h-10 text-lg justify-center items-center flex rounded-full text-[#070707] bg-[#fff] font-semibold">
                    <span>3</span>
                  </div>
                </div>
                <div className="text-white text-lg">Deploy</div>
              </div>
            </div>
          </div>
        </MotionInView>

        <MotionInView
          variants={{
            initial: { opacity: 0, y: 80 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: smoothEase, delay: 0.3 },
            },
          }}
        >
          <div className="mt-20 hidden md:flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex relative items-center">
                <div className="flex relative flex-col items-center justify-center">
                  <div className="w-10 h-10 text-[#070707]/80 text-lg justify-center items-center flex rounded-full bg-[#fff] font-semibold">
                    <span>1</span>
                  </div>
                  <div className="absolute -bottom-10 text-white">
                    Consultation
                  </div>
                </div>
                <div className="w-24 mx-2 h-[2px] bg-[#5e27f6]"></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex relative items-center">
                <div className="flex relative flex-col items-center justify-center">
                  <div className="w-10 h-10 text-[#070707]/80 text-lg justify-center items-center flex rounded-full bg-[#fff] font-semibold">
                    <span>2</span>
                  </div>
                  <div className="absolute -bottom-10 text-white">Develop</div>
                </div>
                <div className="w-24 mx-2 h-[2px] bg-[#5e27f6]"></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex relative items-center">
                <div className="flex relative flex-col items-center justify-center">
                  <div className="w-10 h-10 text-[#070707]/80 text-lg justify-center items-center flex rounded-full bg-[#fff] font-semibold">
                    <span>3</span>
                  </div>
                  <div className="absolute -bottom-10 text-white">Deploy</div>
                </div>
              </div>
            </div>
          </div>
        </MotionInView>
      </div>

      <div className="h-full flex flex-col justify-center items-center pt-30">
        <MotionInView className="w-min" variants={scaleRotateVariants}>
          <div className="w-34 h-34 rounded-full bg-[#fff] backdrop-blur-2xl flex justify-center items-center">
            <Briefcase variant="Bulk" size={46} color={"#070707"} />
          </div>
        </MotionInView>

        <MotionInView variants={fadeInUpVariants}>
          <h1 className="mt-8 mb-10 text-4xl md:text-6xl text-white text-center font-medium">
            Book a call, <br />
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
            <Link href="/contact">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: smoothEase, delay: 0.3 },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <div className="text-[#070707] bg-white w-fit flex items-center gap-x-3 border-2 px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                  <CallCalling variant="TwoTone" color={"#000"} size={20} />
                  Book
                </div>
              </motion.div>
            </Link>

            <motion.a
              href="mailto:contact@asyncawake.com"
              target="_blank"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: smoothEase, delay: 0.3 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="text-[#070707] bg-white w-fit flex items-center gap-x-3 border-2 px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                <Sms variant="TwoTone" color={"#000"} size={20} />
                Email
              </div>
            </motion.a>
          </div>
        </MotionInView>
      </div>

      <Footer />
    </div>
  );
}
