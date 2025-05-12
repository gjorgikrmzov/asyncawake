import { Instagram, Sms } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const scrollToSection = () => {
    const section = document.getElementById("aiChatBot");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const currentPathName = usePathname();

  return (
    <footer className="bg-none mt-30  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid for logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-extrabold text-black">
                async
                <span className="text-[#5E27F6] text-4xl font-black leading-0">.</span>
                awake
              </span>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-black">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-black/60 hover:text-black font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black/60 hover:text-black font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-black">Services</h3>
            <ul className="mt-4 space-y-2">
              {currentPathName === "/" && (
                <li onClick={scrollToSection}>
                  <a className="cursor-pointer  text-black/60 hover:text-black font-medium">
                    Solutions
                  </a>
                </li>
              )}
              <li>
                <Link
                  href="/apply"
                  className="text-black/60 hover:text-black font-medium"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-black/60 hover:text-black font-medium">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-black">Legals</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/legals/privacy-policy"
                  className="text-black/60 hover:text-black font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legals/terms-of-services"
                  className="text-black/60 hover:text-black font-medium"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-black/10" />

        {/* Social Icons and Copyright */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex space-x-6 justify-center md:flex-row flex-col md:space-y-0 space-y-2 sm:justify-start">
            {/* <a
              href="https://www.instagram.com/asyncawakecom/"
              target="_blank"
              className="text-black flex items-center gap-x-2 hover:underline"
            >
              <Instagram variant="Linear" size={18} color="#000" />
              <p>Instagram</p>
            </a> */}

            <a
              href="mailto:contact@asyncawake.com"
              className="text-black font-medium  flex items-center gap-x-2 hover:underline"
            >
              <Sms variant="Linear" size={18} color="#000" />
              <p>contact@asyncawake.com</p>
            </a>
          </div>

          <p className="mt-8 text-center font-medium text-sm text-black/60 sm:mt-0">
            © {new Date().getFullYear()} AsyncAwake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
