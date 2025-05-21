import { AnimatePresence, motion } from "framer-motion";
import {
  Add,
  HambergerMenu,
  Home2,
  MessageQuestion,
  RecordCircle,
  Sms,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuToggled, setMenuToggled] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const smoothEase = [0.4, 0, 0.1, 1];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150); // adjust threshold here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = {
    initial: { y: "100%" },
    animate: { y: 0 },
  };

  const handleToggleMenu = () => {
    setMenuToggled((prev) => !prev);
  };

  const currentPathName = usePathname();

  const Urls = [
    {
      name: "Home",
      icon: (
        <Home2
          variant={currentPathName === "/" ? "Bold" : "TwoTone"}
          size={24}
          color="#0d0d0e"
        />
      ),
      url: "/",
    },
    {
      name: "FAQ",
      icon: (
        <MessageQuestion
          variant={currentPathName === "/faq/" ? "Bold" : "TwoTone"}
          size={24}
          color="#0d0d0e"
        />
      ),
      url: "/faq/",
    },
    {
      name: "Contact",
      icon: (
        <Sms
          variant={currentPathName === "/contact/" ? "Bold" : "TwoTone"}
          size={24}
          color="#0d0d0e"
        />
      ),
      url: "/contact/",
    },
  ];

  return (
    <div
      className={`z-[999] sticky  top-0 transition-all duration-300 ${
        scrolled
          ? "bg-clip-padding md:top-5 md:mx-5 md:rounded-4xl  backdrop-filter backdrop-blur-md bg-opacity-50"
          : ""
      }`}
    >
      <div
        className={` py-6 w-full px-6 md:px-10 justify-between items-center flex  
        `}
      >
        <div className="w-1/5 z-[999] justify-start flex">
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 1.1 }}>
            <Link href="/">
              <Image
                alt="asyncawake"
                className={`w-8 md:w-9 h-8 md:h-9 delay-300 transition-all cursor-pointer ${
                  menuToggled && ""
                }`}
                src={require("../../assets/images/logo.png")}
              />
            </Link>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center gap-x-6">
          <Link
            href="/"
            className={`
    hover:text-[#0d0d0e] 
    font-medium
    cursor-pointer 
    flex 
    gap-x-1 
    items-center 
    text-[17px] 
    text-[#0d0d0e]/90 
    relative
    after:content-['*'] 
    after:absolute 
    after:text-center
    after:text-3xl
    after:font-medium
    after:bottom-[2px]
    after:h-0.5

    after:left-1/2 
    after:-translate-x-1/2 
    after:text-[#5e27f6]
    after:transition-all 
    after:duration-200
    ${
      currentPathName === "/"
        ? "after:text-[$5e27f6]"
        : "after:scale-0 hover:after:scale-100  after:duration-200 after:transition-all"
    }
  `}
          >
            Home
          </Link>

          <Link
            href="/faq"
            className={`
    hover:text-[#0d0d0e] 
    font-medium
    cursor-pointer 
    flex 
    gap-x-1 
    items-center 
    text-[17px] 
    text-[#0d0d0e]/90 
    relative
    after:content-['*'] 
    after:absolute 
    after:text-center
    after:text-3xl
    after:font-medium
    after:bottom-[2px]
    after:h-0.5

    after:left-1/2 
    after:-translate-x-1/2 
    after:text-[#5e27f6]
    after:transition-all 
    after:duration-200
    ${
      currentPathName === "/faq/"
        ? "after:text-[$5e27f6]"
        : "after:scale-0 hover:after:scale-100  after:duration-200 after:transition-all"
    }
  `}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className={`
    hover:text-[#0d0d0e] 
    font-medium
    cursor-pointer 
    flex 
    gap-x-1 
    items-center 
    text-[17px] 
    text-[#0d0d0e]/90 
    relative
    after:content-['*'] 
    after:absolute 
    after:text-center
    after:text-3xl
    after:font-medium
    after:bottom-[2px]
    after:h-0.5

    after:left-1/2 
    after:-translate-x-1/2 
    after:text-[#5e27f6]
    after:transition-all 
    after:duration-200
    ${
      currentPathName === "/contact/"
        ? "after:text-[$5e27f6]"
        : "after:scale-0 hover:after:scale-100  after:duration-200 after:transition-all"
    }
  `}
          >
            Contact
          </Link>
        </div>

        <div className=" w-1/5 flex justify-end">
          <motion.div whileHover={{ scale: 1.13 }} whileTap={{ scale: 1.1 }}>
            <Link href="/apply">
              <div
                className={`hidden  text-black md:flex px-4 cursor-pointer md:px-6 py-2 md:py-3 rounded-full transition-all bg-[#0d0d0e]`}
              >
                <p className={`text-sm text-white md:text-md`}>Apply Now</p>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="flex md:hidden z-[999]">
          <motion.div
            onClick={handleToggleMenu}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.1 }}
          >
            <p
              className={`text-lg font-medium text-black delay-300 transition-colors`}
            >
              {menuToggled ? "Close" : "Menu"}
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {menuToggled && (
          <motion.div className="flex flex-col fixed w-screen h-screen top-0 left-0">
            {menuToggled && (
              <motion.div
                exit={{
                  scaleY: 0,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }}
                className="z-[500] origin-top overflow-x-hidden bg-[#fff] fixed w-screen h-screen"
              ></motion.div>
            )}

            <div className="z-[999] overflow-x-hidden mt-30 flex flex-col gap-y-5">
              {Urls.map((url, index) => (
                <>
                  <div className="px-6  overflow-hidden  flex flex-col">
                    {menuToggled && (
                      <Link
                        href={url?.url}
                        className="overflow-hidden duration-200 transition-all cursor-pointer capitalize font-normal text-[#0d0d0e]/90 text-4xl"
                      >
                        <motion.div
                          variants={navLinks}
                          initial="initial"
                          animate="animate"
                          exit={{
                            y: "100%",
                            transition: {
                              delay: 0,
                            },
                          }}
                          className="flex items-center gap-x-3 flex-row font-medium uppercase"
                          transition={{
                            delay: index * 0.15,
                            duration: 0.5,
                            ease: [0.6, 0.01, -0.05, 0.95],
                          }}
                        >
                          <sub
                            className={`leading-0 text-5xl font-medium ${
                              currentPathName === url.url
                                ? "text-[#5e27f6]"
                                : "text-[#000]/70"
                            }`}
                          >
                            *
                          </sub>
                          {url?.name}
                        </motion.div>
                      </Link>
                    )}
                  </div>
                </>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
