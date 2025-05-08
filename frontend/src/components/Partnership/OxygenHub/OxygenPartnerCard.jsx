
import React from "react";
import { motion } from "framer-motion";
import oxygenLogo from "../../../assets/Images/oxygen_hub.png";
import Hub from "../../../assets/Images/hub.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const OxygenPartnerCard = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 w-full"
    >
      {/* Left Side - Image */}
      <motion.div
        variants={childVariants}
        className="w-full lg:w-2/3 p-4"
      >
        <img
          src={Hub}
          alt="Image of lifeBank delivery timeline"
          className="w-full rounded-lg shadow-md"
        />
      </motion.div>

      {/* Right Side - Partner Details */}
      <motion.div
        variants={childVariants}
        className="w-full lg:w-1/3 p-4 mx-[3vw] text-center lg:text-left"
      >
        <motion.img
          src={oxygenLogo}
          alt="OxygenHub Logo"
          className="h-24 mx-auto mb-4 lg:mx-0 lg:h-36"
          variants={childVariants}
        />

        <div className="flex flex-row justify-center gap-2 lg:flex-col lg:justify-normal">
          <motion.div
            variants={childVariants}
            className="p-4 mt-5 mx-2 border-l-2 border-gray-300 lg:mx-5 lg:p-4"
          >
            <h3 className="text-lg font-bold text-red-600">Project Partner</h3>
            <p className="text-gray-700">Oxygen Hub</p>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="p-4 mt-5 mx-2 border-l-2 border-gray-300 lg:mx-5 lg:p-4"
          >
            <p className="text-gray-400 text-sm">2021</p>
            <p className="text-gray-600 font-semibold text-sm">Year</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default OxygenPartnerCard;
