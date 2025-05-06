import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const CallToAction = () => {
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
    <section className="bg-gray-50 text-gray-900 py-16">
      {/* Section Header */}
      <h2 className="text-center text-[7vw] font-bold mb-2 md:mb-4 md:text-4xl">
        We Are Available Anytime!
      </h2>

      {/* Subtext */}
      <p className="text-center text-base mb-6">
        Have questions? Give us a call at{" "}
        <a href="tel:0700-LIFEBANK" className="hover:underline">
          (0700-LIFEBANK)
        </a>
      </p>

      {/* Button */}
      <div className="flex justify-center">
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
      </div>
    </section>
  );
};

export default CallToAction;
