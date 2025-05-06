import React from "react";
import { motion } from "framer-motion";
import Safe from "../../assets/Images/safer.png";
import Reliable from "../../assets/Images/reliable.png";
import faster from "../../assets/Images/faster.png";

const FeatureGrids = () => {
  const features = [
    {
      icon: Safe,
      title: "Safer",
      description:
        "All our products are sourced from accredited partners who comply with global standards in production, storage, and packaging. Our WHO-recommended cold chain system and blockchain-powered records ensure the safety of every product from pickup to delivery.",
    },
    {
      icon: Reliable,
      title: "Reliable",
      description:
        "Our operations run for 24 hours every day of the year. Our applications, call centre, USSD, and delivery service are available round the clock, giving you access to quality medical supplies whenever you need them.",
    },
    {
      icon: faster,
      title: "Faster",
      description:
        "Our multimodal distribution network (drones, boats, bikes, and tricycles) ensures we deliver to your hospital in under 45 minutes. Our range of logistics solutions helps us get life-saving medical supplies to you quickly irrespective of the location.",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="bg-white py-4 px-[2vw] md:py-8">
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col p-6 shadow-lg rounded-lg bg-white"
            variants={cardVariants}
          >
            <div className="w-20 h-20 mb-2">
              <img
                src={feature.icon}
                alt={feature.title}
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-red-600 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureGrids;
