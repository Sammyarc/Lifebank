
import React from "react";
import BgImg from "../../assets/Images/national-cancer-institute.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsFillDropletFill } from "react-icons/bs";
import { motion } from "framer-motion";

const InnovationHero = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="relative w-full bg-gray-400 overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      ></motion.div>

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black bg-opacity-70 z-10"
      ></motion.div>

      {/* Content Container */}
      <div className="relative z-20 px-[4vw] py-16 md:py-24 lg:py-32">
        <motion.div
          className="flex flex-col max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content */}
          <div className="text-white">
            <motion.span
              variants={itemVariants}
              className="border border-red-500 text-red-500 p-[0.5vw] font-bold uppercase"
            >
              innovations
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl leading-normal font-bold my-4 md:text-5xl lg:text-6xl"
            >
              Powering Healthcare Through Innovation
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base opacity-90 mb-5 md:text-lg"
            >
              At LifeBank, a crucial part of our mission is building innovations that enable hospitals and care centres to deliver quality healthcare.
            </motion.p>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 flex justify-center items-center gap-1 text-white font-medium px-6 py-2 rounded-full transition duration-300"
            >
              Order Now
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
            <motion.p
              variants={fadeIn}
              className="text-base opacity-90 mt-3 md:text-lg"
            >
              Or give us a call at{" "}
              <motion.a href="tel:0700-LIFEBANK" className="hover:underline">
                (0700-LIFEBANK)
              </motion.a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovationHero;
