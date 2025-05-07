import React from "react";
import BgImg from "../../assets/Images/front-view-medical-control-covid19-concept.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiImpactPoint } from "react-icons/gi";
import { motion } from "framer-motion";

const ImpactHero = () => {
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
        className="absolute inset-0 bg-black bg-opacity-50 z-10"
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
            <motion.p
              variants={itemVariants}
              className="flex items-center gap-2 font-bold uppercase mb-[1vw]"
            >
              <GiImpactPoint size={24} />
              impact
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl leading-normal font-bold mb-4 md:text-5xl lg:text-6xl"
            >
              Transforming Access to Critical Healthcare in Africa
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base opacity-90 mb-5 md:text-lg"
            >
              Born from a commitment to address healthcare challenges, LifeBank
              ensures equitable access to vital medical supplies, leaving no one
              behind
            </motion.p>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 flex justify-center items-center gap-1 text-white font-medium px-6 py-2 rounded-full transition duration-300"
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
            <motion.p
              variants={itemVariants}
              className="text-base opacity-90 mt-3 md:text-lg"
            >
              For inquiries or collaboration opportunities, contact us at{" "}
              <a
                href="mailto:temie@lifebank.ng"
                className="text-white underline"
              >
                temie@lifebank.ng
              </a>{" "}
              or{" "}
              <a
                href="mailto:partnership@lifebank.ng"
                className="text-white underline"
              >
                partnership@lifebank.ng
              </a>
              , and let's make a lasting impact in healthcare together.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactHero;
