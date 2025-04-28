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
    <footer className="bg-none mt-30 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid for logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">
                async
                <span className="text-[#5E27F6] text-4xl leading-0">.</span>
                awake
              </span>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium text-white">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-medium text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {currentPathName === "/" && (
                <li onClick={scrollToSection}>
                  <a className="cursor-pointer  text-white/60 hover:text-white">
                    Our Solutions
                  </a>
                </li>
              )}
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white"
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-white">Legals</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/legals/privacy-policy"
                  className="text-white/60 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legals/terms-of-services"
                  className="text-white/60 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/10" />

        {/* Social Icons and Copyright */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex space-x-6 justify-center md:flex-row flex-col md:space-y-0 space-y-2 sm:justify-start">
            <a
              href="https://www.instagram.com/asyncawakecom/"
              target="_blank"
              className="text-white flex items-center gap-x-2 hover:underline"
            >
              <Instagram variant="Linear" size={18} color="#fff" />
              <p>Instagram</p>
            </a>

            <a
              href="mailto:contact@asyncawake.com"
              className="text-white flex items-center gap-x-2 hover:underline"
            >
              <Sms variant="Linear" size={18} color="#fff" />
              <p>contact@asyncawake.com</p>
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-white/60 sm:mt-0">
            © {new Date().getFullYear()} AsyncAwake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
