import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const MsdHero = () => {
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

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Content Container */}
      <div className="relative z-20 px-[4vw] py-16 md:py-24 lg:py-32">
        <motion.div
          className="flex flex-col container mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content */}
          <div className="text-white">
            <motion.button
              variants={itemVariants}
              className="font-bold text-base uppercase flex items-center gap-1 mb-[3vw] md:mb-[1vw]"
              onClick={() => (window.location.href = "/impact/#partnerships")}
            >
              <IoIosArrowRoundBack size={32} />
              Back to partnerships
            </motion.button>

            <motion.p
              variants={itemVariants}
              className="text-3xl opacity-90 mb-5 leading-[1.5] md:text-[3vw]"
            >
              Tackling the challenge of Postpartum Hemorrhage in Africa through
              innovative technology
            </motion.p>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 flex justify-center items-center gap-1 text-white font-medium px-6 py-2 rounded-full transition duration-300"
              onClick={() => (window.location.href = "/schedule")}
            >
              Become a partner
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
        </motion.div>
      </div>
    </section>
  );
};

export default MsdHero;
