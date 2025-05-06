import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import Logo from "../../assets/logo/logo_white.png";
import GooglePlayBadge from "../../assets/Icons/play store label.svg";
import AppStoreBadge from "../../assets/Icons/apple store label.svg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="w-[35vw] h-[10vw] md:w-[10vw] md:h-[5vw]">
          <img
            src={Logo}
            alt="Profoma Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-3 text-base md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <Link to={"/careers"} className="hover:underline">
            Careers
          </Link>
          <Link to={"/team"} className="hover:underline">
            Our Team
          </Link>
          <Link to={"/locations"} className="hover:underline">
            Locations
          </Link>
          <a href="#" className="hover:underline">
            Our Impact
          </a>
          <Link to={"/contact"} className="hover:underline">
            Contact Us
          </Link>
        </nav>

        {/* App Store Badges */}
        <div className="flex flex-col space-y-4 md:space-x-4 md:items-center md:space-y-0 md:flex-row">
          <div className="w-[35vw] h-[12vw] md:w-[10vw] md:h-[8vw]">
            <img
              src={GooglePlayBadge}
              alt="Get it on Google Play"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.lifebankdevs.nerve&hl=en&gl=ZA",
                  "_blank"
                )
              }
            />
          </div>

          <div className="w-[35vw] h-[12vw] md:w-[10vw] md:h-[8vw]">
            <img
              src={AppStoreBadge}
              alt="Download on the App Store"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() =>
                window.open("https://apps.apple.com/ng/app/nerve-by-lifebank/id6451122858", "_blank")
              }
            />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col space-y-4 text-base md:items-center md:justify-between md:space-y-0 md:flex-row">
        {/* Copyright */}
        <div>&copy; 2025 LifeBank</div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/lifebankcares/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://x.com/LifeBankCares"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/lifebankcares/?originalSubdomain=ng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://www.instagram.com/lifebankcares/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
