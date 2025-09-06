import { DotsPattern } from "@/backgrounds/Squares/DotPattern";
import FaqList from "@/components/faq-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
  Briefcase,
  ColorSwatch,
  Convertshape,
  DollarCircle,
  Flash,
  LampCharge,
  MessageQuestion,
  Messages1,
  RecordCircle,
  Setting2,
  Star1,
  VoiceSquare,
} from "iconsax-react";
import Link from "next/link";
import { memo, useEffect, useMemo, useRef } from "react";
import ShinyText from "../../animations/ShinyText/ShinyText";

type IconType = typeof Flash;

// MotionInView component
interface MotionInViewProps {
  children?: React.ReactNode;
  variants?: Variants;
  custom?: any;
  className?: string;
}

const MotionInView: React.FC<
  MotionInViewProps & React.ComponentPropsWithoutRef<typeof motion.div>
> = memo(({ children, variants, custom, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
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

// FeatureCard component
interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  index: number;
  numberLabel: string;
}

const FeatureCard: React.FC<FeatureCardProps> = memo(
  ({ icon: Icon, title, description, index }) => {
    const isEven = index % 2 === 0;

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
              className="w-20 h-20 lg:w-40 lg:h-40 "
              color="#292929"
              strokeWidth={0.05}
              variant="Broken"
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
          className="flex-col w-full"
        >
          <h1 className=" font-medium  relative w-full flex items-center  text-3xl lg:text-5xl text-[#292929]">
            {title}
          </h1>

          <p className="text-md lg:text-xl font-medium  text-[#292929]/70 mt-3 ">
            {description}
          </p>
        </MotionInView>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// SolutionCard component
interface SolutionCardProps {
  index: number;
  icon: IconType;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = memo(
  ({ index, icon: Icon, title, description }) => (
    <MotionInView
      className="w-full flex flex-col md:flex-row items-start md:items-center justify-between"
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
      {/* Left: Content Block */}
      <div className="flex items-start gap-x-8">
        {/* Optional Icon or Number */}

        {/* Text Block - Shrinks to fit content */}
        <div className="flex flex-col">
          <div className="flex items-center gap-x-4">
            <h2 className="text-3xl md:text-5xl font-medium text-[#292929] leading-tight">
              <span className="md:pb-1 flex items-center gap-x-3">
                <sub className=" text-[#5E27F6] flex text-6xl md:text-7xl leading-0 font-semibold">
                  *
                </sub>
                {title}
              </span>
            </h2>
          </div>
          <p className="mt-4 w-[80%] text-md md:text-xl text-[#292929]/70 font-medium max-w-xl">
            {description}
          </p>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="mt-10 self-end md:self-center md:mt-0 flex  flex-col items-start md:items-end gap-y-3">
        <Link href="/apply" className="w-full">
          <ShinyButton className="w-full bg-[#292929] flex items-center px-4 md:px-6 py-3 md:py-3 rounded-full cursor-pointer">
            <p className="text-white capitalize font-medium text-sm md:text-md">
              Apply Now
            </p>
          </ShinyButton>
        </Link>

        <Link href="/faq" className="w-full">
          <ShinyButton className="bg-[#f8f8f8] border-black/10 w-full flex items-center px-4 md:px-6 py-3 md:py-3 rounded-full cursor-pointer">
            <p className="text-[#000] capitalize  font-medium text-sm md:text-md">
              Questions?
            </p>
          </ShinyButton>
        </Link>
      </div>
    </MotionInView>
  )
);
SolutionCard.displayName = "SolutionCard";

// Interfaces for features and solutions
interface Feature {
  icon: IconType;
  title: string;
  numberLabel: string;
  description: string;
}

interface Solution {
  icon: IconType;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const smoothEase: [number, number, number, number] = [0.6, 0.01, 0.05, 0.95];

  // Memoized variants for animations
  const fadeInUpVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 100 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: smoothEase },
      },
    }),
    [smoothEase]
  );

  const scaleRotateVariants: any = useMemo(
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
  const features: Feature[] = useMemo(
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

  const solutions: Solution[] = useMemo(
    () => [
      {
        icon: Messages1,
        title: "AI Chat Agent",
        description:
          "Engage customers 24/7 with conversational chat agent that improves support and converts leads",
      },
      {
        icon: Setting2,
        title: "AI Automation",
        description:
          "Automate the boring stuff like email outreach, cut costs, and speed up operations—without burning out your team",
      },
      {
        icon: VoiceSquare,
        title: "Voice Agent",
        description:
          "Deliver round-the-clock support with a voice agent that boosts customer engagement and streamlines service",
      },
    ],
    []
  );

  const heroH1: Variants = {
    initial: { y: "100%" },
    animate: { y: 0 },
  };

  const InfiniteScrollText: React.FC = () => {
    const words: string[] = [
      "AI Chat Agent",
      "Customer Inquiries",
      "Automation",
      "Boost Efficiency",
    ];

    const wordsOpposite: string[] = [
      "Boost Efficiency",
      "Automation",
      "Customer Inquiries",
      "AI Chat Agent",
    ];

    return (
      <div className="w-full overflow-hidden -mt-1 md:-mt-4">
        <div className="flex flex-col">
          {/* Top row: scrolls left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <span
                key={`bottom-${i}`}
                className=" text-[50px] leading-11 md:leading-none flex flex-row items-center lg:text-7xl md:font-bold font-medium  text-[#292929]"
              >
                <h1 className="from-[#000]/90 p-1.5 via-[#292929]/80 to-[#292929]/70 ">
                  {words[(i + 1) % words.length]}
                </h1>
                <sub className="mx-2.5 md:mx-5 text-6xl leading-0  md:text-[100px] text-[#5E27F6]">
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
                className=" text-[50px] leading-11 md:leading-none flex flex-row items-center lg:text-7xl md:font-bold font-medium  text-[#292929]"
              >
                <h1 className="from-[#000]/90 p-1.5 via-[#292929]/80 to-[#292929]/70 ">
                  {wordsOpposite[(i + 1) % wordsOpposite.length]}
                </h1>
                <sub className="mx-2.5 md:mx-5 text-6xl  leading-0  md:text-[100px] text-[#5E27F6]">
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
      <div className="absolute z-0 left-0  w-full h-full md:h-hull">
        <DotsPattern
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
            "lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* <head>
        <title>Home: Async Awake</title>
        <meta
          name="description"
          content="Async Awake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
        />
      </head> */}

      <Header />

      <div className="z-10 h-[90svh] md:h-[90vh] relative justify-between flex flex-col">
        <div className=""></div>

        <div className="justify-center w-fit self-center relative flex-col items-center flex">
          <SectionLabel text="Skip the Busywork" icon={Flash} />

          <div className="flex-col mt-6 z-1 flex items-center justify-center">
            <div className="hidden md:flex overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden relative mt-0 z-0 text-[#292929]  text-center  leading-14 lg:leading-20 text-5xl lg:text-[78px] font-bold  "
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                Save <ShinyText speedInMs={5000} className="pr-0.5">Over 8 Hours</ShinyText> a Week
                {/* <span className="text-[#797979]"></span> */}
              </motion.h1>
            </div>

            <div className="flex md:hidden overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden z-0  text-[#292929]  text-center text-5xl font-medium   "
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                Save <ShinyText speedInMs={5000}>Over 8</ShinyText>
              </motion.h1>
            </div>

            <div className="flex md:hidden overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden z-0 mt-1  text-[#292929] text-center text-5xl font-medium  "
                variants={heroH1}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
              >
                <ShinyText speedInMs={5000}>Hours</ShinyText> a Week
              </motion.h1>
            </div>

            <div className="flex md:hidden overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden z-0 pb-1 mt-1  text-[#292929] text-center text-5xl font-medium  "
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

            <div className="flex md:hidden   overflow-hidden z-1">
              <motion.h1
                initial="initial"
                animate="animate"
                className="overflow-hidden z-0 pb-1 mt-1  text-[#292929] text-center text-5xl font-medium"
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

            <div className="flex md:flex-row  flex-col justify-center gap-x-4 items-center">
              <div className="hidden md:flex  overflow-hidden z-1">
                <motion.h1
                  initial="initial"
                  animate="animate"
                  className=" z-0 text-center  pb-2  text-[#292929] lg:leading-20 text-5xl lg:text-[78px] font-bold  "
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
                  className="z-0 text-center  pb-2   text-[#292929]  lg:leading-20 text-5xl lg:text-[78px] font-bold  "
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

          <p className="mx-6 md:px-0 mt-6 md:mt-10 text-center text-xl font-medium   md:text-xl lg:text-2xl text-[#292929]/85 ">
            We build smart assistants that answer questions, automate tasks,{" "}
            <br className="hidden sm:flex" />
            and free up your team’s time.
          </p>

          <Link href="/apply">
            <ShinyButton className="mt-8 md:mt-10 bg-[#292929] px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
              <p className="text-[#EFEFEF] capitalize font-medium text-sm md:text-md">
                Apply Now
              </p>
            </ShinyButton>
          </Link>
        </div>

        <div></div>
      </div>

      <InfiniteScrollText />

      <div className="h-full relative pt-50 pb-30">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
              "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
              "lg:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <MotionInView
          className="flex flex-col justify-center items-center"
          variants={fadeInUpVariants}
        >
          <SectionLabel text="Benefits" icon={Star1} />
          <h1 className="relative mt-6 text-center justify-center flex flex-col items-center gap-x-3 md:gap-x-4  text-5xl leading-12 md:leading-none lg:text-7xl md:font-bold font-medium   text-[#292929] ">
            <span className="gap-x-3 text-[#292929]  md:gap-x-4 flex">
              The Benefits
            </span>

            <span className="flex text-[#292929]   relative flex-row items-center  gap-x-3 md:gap-x-4">
              Of Automation
              <MotionInView
                variants={{
                  initial: { scale: 0, y: 20, opacity: 0 },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  },
                }}
                className="hidden  md:flex md:top-0  -top-25 -right-5.5"
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
          <p className="text-2xl mx-8  md:text-4xl  mt-10 text-center font-medium text-[#292929]/85  ">
            Virtual Assistants handle the work for you while{" "}
            <br className="hidden md:block" />
            you & your team focus on what's important.
          </p>
        </MotionInView>

        <div className="w-full flex justify-center items-center"></div>

        <div className="flex flex-col lg:gap-y-10 gap-y-16 px-6 items-center xl:mx-60 mt-40">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>

      <div
        id="solutions"
        className="h-full relative md:gap-x-20 flex flex-col md:flex-row  py-30  px-6 md:px-30"
      >
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
"[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]",
            "lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"            )}
          />
        </div>

        <div className="flex h-min shrink-0  md:sticky top-0 md:top-40 items-start flex-col xl:flex-row  justify-between md:items-center ">
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
            <div className="flex  flex-col items-start">
              <SectionLabel text="Solutions" icon={LampCharge} />

              <div className=" text-[#292929]  pb-1.5 md:font-bold font-medium  text-5xl leading-12 md:leading-none lg:text-7xl mt-6">
                Cut Costs, <br />
                Less Busywork
              </div>

              <MotionInView
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: smoothEase, delay: 0.1 },
                  },
                }}
                className="hidden md:flex"
              >
                {/* <p className="text-2xl  md:text-4xl  mt-10  font-medium text-[#292929]/85  ">
                  from answering customer questions to{" "}
                  <br className="hidden lg:flex" />
                  automating internal tasks our{" "}
                  <br className="hidden lg:flex" />
                  solutions help you do more with less.
                </p> */}
              </MotionInView>
            </div>
          </MotionInView>

          <div className="flex md:hidden">
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
              <p className="text-2xl  md:text-4xl  mt-10 md:mt-0 font-medium text-[#292929]/85  ">
                from answering customer questions to{" "}
                <br className="hidden lg:flex" />
                automating internal tasks our <br className="hidden lg:flex" />
                solutions help you do more with less.
              </p>
            </MotionInView>
          </div>
        </div>

        <div className="mt-20 z-50 md:mt-0  gap-y-10 lg:gap-y-20 h-full self-center flex  w-full flex-col  justify-center">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} index={index} {...solution} />
          ))}
        </div>
      </div>

      <div className="h-full relative py-30 flex flex-col justify-center items-center px-6 md:px-10">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "lg:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"            )}
          />
        </div>

        <MotionInView
          className="flex items-center flex-col"
          variants={fadeInUpVariants}
        >
          <SectionLabel text="FAQ" icon={MessageQuestion} />
          <h1 className="mt-6  text-center px-1  md:font-bold font-medium  text-5xl leading-12 md:leading-none lg:text-7xl text-[#292929] ">
            Frequently <br />
            Asked Questions
          </h1>
        </MotionInView>

        <FaqList />
      </div>

      <div className="h-full relative py-30 flex flex-col justify-center items-center px-6 md:px-10">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "lg:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"            )}
          />
        </div>

        <div>
          <MotionInView
            className="flex items-center flex-col"
            variants={fadeInUpVariants}
          >
            <SectionLabel text="Our Approach" icon={Convertshape} />
            <h1 className="mt-6 text-[#292929]  text-center md:font-bold font-medium text-5xl leading-12 md:leading-none lg:text-7xl">
              Integration <br />
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
            <p className="text-center mx-6 font-medium text-2xl md:text-4xl mt-10 text-[#292929]/85 ">
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
                    className="w-22 relative h-22 text-3xl justify-center items-center flex rounded-4xl bg-[#f8f8f8] "
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -right-2"
                    />

                    <span className="font-medium text-[#292929]">01</span>
                  </MotionInView>
                  <div>
                    <div className="text-[#292929] font-medium text-xl">
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
                  className="h-24 w-[3px] rounded- origin-top my-3 relative left-12 from-[#4B1ECB] via-[#5E27F6] to-[#7A42FF] bg-gradient-to-r"
                />
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
                    className="w-22 relative h-22 text-3xl justify-center items-center flex rounded-4xl bg-[#f8f8f8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -right-2"
                    />

                    <span className="font-medium text-[#292929]">02</span>
                  </MotionInView>

                  <div>
                    <div className="text-[#292929] font-medium text-xl">
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
                />
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
                    className="w-22 relative h-22 text-3xl justify-center items-center flex rounded-4xl bg-[#f8f8f8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -right-2"
                    />

                    <span className="font-medium text-[#292929]">03</span>
                  </MotionInView>

                  <div>
                    <div className="text-[#292929] font-medium text-xl">
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
                    className="w-24 h-24 relative text-[#292929] text-3xl justify-center font-medium items-center flex rounded-4xl bg-[#f8f8f8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -bottom-2"
                    />
                    <span className="font-medium text-[#292929]">01</span>
                  </MotionInView>
                  <div className="absolute font-medium -bottom-14 text-[#292929] text-xl">
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
                />
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
                    className="w-24 h-24 relative text-[#292929] text-3xl justify-center font-medium items-center flex rounded-4xl bg-[#f8f8f8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -bottom-2"
                    />

                    <span className="font-medium text-[#292929]">02</span>
                  </MotionInView>
                  <div className="absolute font-medium -bottom-14 text-[#292929] text-xl">
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
                />
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
                    className="w-24 relative h-24 text-[#292929] text-3xl justify-center font-medium items-center flex rounded-4xl bg-[#f8f8f8]"
                  >
                    <RecordCircle
                      variant="Bulk"
                      size={18}
                      color="#5E27F6"
                      className="absolute self-center -bottom-2"
                    />

                    <span className="font-medium text-[#292929]">03</span>
                  </MotionInView>
                  <div className="absolute -bottom-14 font-medium text-[#292929] text-xl">
                    Deploy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full  flex relative flex-col justify-center items-center py-30">
        <div className="absolute z-0 left-0 top-0 w-full h-full md:h-hull">
          <DotsPattern
            className={cn(
"[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "lg:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"            )}
          />
        </div>

        <MotionInView className="w-min " variants={scaleRotateVariants}>
          <div className="w-34 h-34 rounded-full bg-[#f8f8f8] backdrop-blur-2xl flex justify-center items-center">
            <Briefcase variant="Bulk" size={46} color={"#292929"} />
          </div>
        </MotionInView>

        <MotionInView variants={fadeInUpVariants}>
          <h1 className="mt-8 mb-10 text-5xl text-[#292929] lg:text-7xl md:font-bold font-medium text-center">
            Let’s Work <br />
            Together!
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
          className="z-10"
        >
          <div className="flex  items-center gap-x-4">
            <Link href="/apply">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: smoothEase, delay: 0.3 },
                }}
              >
                <ShinyButton className=" text-[#EFEFEF] bg-[#292929] w-fit flex items-center  px-4 cursor-pointer md:px-6 py-3 md:py-3 rounded-full">
                  <p className="text-white capitalize">Apply Now</p>
                </ShinyButton>
              </motion.div>
            </Link>
          </div>
        </MotionInView>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
