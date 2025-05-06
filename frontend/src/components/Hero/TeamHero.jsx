
import React from "react";
import BgImg from "../../assets/Images/team building 2.jpg";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

const TeamHero = () => {
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
          className="flex flex-col"
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
              <GoDotFill size={24} className="text-red-500 pulse-dot drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
              meet the team
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-2xl opacity-90 leading-[1.5] md:text-[3vw]"
            >
              Our leaders combine decades of experience in Healthcare, Technology, and Logistics to drive LifeBank's growth in emerging markets.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamHero;
