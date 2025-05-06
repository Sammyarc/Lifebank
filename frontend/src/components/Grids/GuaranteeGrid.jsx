import React from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GuaranteeGrid() {
  const guarantees = [
    "Safe Blood",
    "Cold Chain Infrastructure",
    "24/7 Delivery",
    "Multimodal Distribution",
    "24/7 Customer Support",
  ];

  return (
    <section className="bg-white py-16 px-[4vw]">
      <div className="max-w-6xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12"
        >
          Lifebank Guarantees:
        </motion.h2>

        {/* Animated Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-gray-600 pb-6 mx-[1vw]"
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <IoCheckmarkOutline className="h-5 w-5 text-black" />
                </div>
                <span className="text-lg md:text-xl font-medium text-black">
                  {guarantee}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
