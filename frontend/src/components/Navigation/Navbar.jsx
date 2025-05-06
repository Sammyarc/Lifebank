import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#b91c1c", // darker red on hover
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-white w-full py-[0.5vw] px-[2vw] shadow-sm md:py-[0.1vw]">
      <div className="px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="w-[25vw] h-[10vw] md:w-[10vw] md:h-[5vw]">
          <a href="/">
            <img
              src={logo}
              alt="Profoma Logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button
              className="flex items-center gap-1 text-red-600 font-Roboto font-medium"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              PRODUCTS
              <IoChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Products Dropdown */}
            {productsOpen && (
              <div className="absolute mt-3 left-0 bg-white w-64 shadow-lg rounded-lg z-50 animate-moveUp">
                <div className="py-2">
                  <Link
                    to={"/products/blood"}
                    className="block px-4 py-2 font-Roboto text-red-600 hover:bg-gray-50"
                  >
                    Blood
                  </Link>
                  <Link
                    to={"/products/oxygen"}
                    className="block px-4 py-2 text-red-600 hover:bg-gray-50"
                  >
                    Oxygen
                  </Link>
                  <Link
                    to={"/products/stockbank"}
                    className="block px-4 py-2 text-red-600 hover:bg-gray-50"
                  >
                    Medical Consumables
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to={"/innovations"} className="text-red-600 font-medium">
            INNOVATIONS
          </Link>
          <a href="https://lifebankcares.medium.com/" className="text-red-600 font-medium">
            BLOG
          </a>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 flex justify-center items-center gap-1 text-white px-6 py-2 rounded-full font-medium"
          >
            ORDER NOW
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <IoIosArrowRoundForward size={32} />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-red-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H23M1 9H23M1 17H23"
                stroke="#CB0000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:hidden bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? "transform-none" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-2 h-full overflow-y-auto">
            <div className="flex justify-between items-center px-4 py-2">
              <div className="w-[25vw] h-[10vw] md:w-[10vw] md:h-[5vw]">
                <img
                  src={logo}
                  alt="Profoma Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-red-600 p-2"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            <div className="px-4 py-3 font-medium text-red-600">PRODUCTS</div>
            <Link
              to={"/products/blood"}
              className="block px-8 py-2 text-red-600"
            >
              Blood
            </Link>
            <Link
              to={"/products/oxygen"}
              className="block px-8 py-2 text-red-600"
            >
              Oxygen
            </Link>
            <Link
              to={"/products/stockbank"}
              className="block px-8 py-2 text-red-600"
            >
              Medical Consumables
            </Link>

            <div className="border-t border-gray-200 my-2"></div>

            <Link to={"/innovations"} className="block px-4 py-2 text-red-600 font-medium">
              INNOVATIONS
            </Link>
            <a href="https://lifebankcares.medium.com/" className="block px-4 py-2 text-red-600 font-medium">
              BLOG
            </a>

            <div className="px-4 py-4">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 flex justify-center items-center gap-1 text-white px-6 py-2 rounded-full font-medium w-full"
              >
                ORDER NOW
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <IoIosArrowRoundForward size={32} />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
