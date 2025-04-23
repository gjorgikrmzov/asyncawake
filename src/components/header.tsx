import { AnimatePresence, motion } from "framer-motion";
import { Add, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <div
      className={`z-[999] sticky  top-0 transition-all duration-300 ${
        scrolled
          ? "bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50"
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
                  !menuToggled && "invert brightness-0"
                }`}
                src={require("../../assets/images/logo.png")}
              />
            </Link>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center gap-x-6">
          <Link
            href={"/"}
            className={`hover:text-white text-md cursor-pointer transition-all text-white/80`}
          >
            Home
          </Link>

          <Link
            href={"/contact"}
            className={`hover:text-white text-md cursor-pointer transition-all text-white/80`}
          >
            Contact
          </Link>
        </div>

        <div className=" w-1/5 flex justify-end">
          <motion.div whileHover={{ scale: 1.13 }} whileTap={{ scale: 1.1 }}>
            <Link href="/contact">
              <div
                className={`hidden  text-black md:flex px-4 cursor-pointer md:px-6 py-2 md:py-3 rounded-full transition-all bg-[#ffffff]`}
              >
                <p className={`text-sm md:text-md`}>Book a Call</p>
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
              className={`${
                menuToggled ? "text-black" : "text-white"
              }  text-lg  delay-300 transition-colors`}
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
                transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }}
                className="z-[500] origin-top bg-[#ffffff] fixed w-screen h-screen"
              ></motion.div>
            )}

            <div className="z-[999] px-6">
              <div className=" ml-1 overflow-hidden mt-30 flex flex-col">
                {menuToggled && (
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
                    transition={{
                      delay: 0.5,
                      duration: 0.7,
                      ease: [0.6, 0.01, -0.05, 0.95],
                    }}
                  >
                    <Link
                      href="/"
                      className=" uppercase overflow-hidden duration-200 transition-all cursor-pointer font-normal text-[#000] text-4xl"
                    >
                      home
                    </Link>
                  </motion.div>
                )}
              </div>

              <div className=" ml-1 overflow-hidden mt-4 flex flex-col">
                {menuToggled && (
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
                    transition={{
                      delay: 0.6,
                      duration: 0.7,
                      ease: [0.6, 0.01, -0.05, 0.95],
                    }}
                  >
                    <Link
                      href="/contact"
                      className=" uppercase overflow-hidden duration-200 transition-all cursor-pointer font-normal text-[#000] text-4xl"
                    >
                      contact
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
