import React from "react";
import { motion } from "framer-motion";
import careImg from "../../assets/Images/care-job-scene-with-patient-being-cared.jpg";
import transport from "../../assets/Images/african-american-female-paramedic-face-protective-medical-mask-standing-front-ambulance-car.jpg";
import innovation from "../../assets/Images/african-woman-biochemist-researcher-checking-manifestations.jpg";
import processing from "../../assets/Images/transport.jpg";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const ImpactGrid = () => {
  const gridItems = [
    {
      title: "Digital Marketplace",
      subtext:
        "Nerve, LifeBank's digital marketplace, streamlines hospitals' supply procurement with fast ordering and real-time tracking.",
    },
    {
      title: "Agile Distribution",
      subtext:
        "Our system delivers critical supplies via bikes, trucks, vans, and drones, streamlining the supply chain through our marketplace.",
    },
    {
      title: "Innovation Studio",
      subtext:
        "Innovation is our DNA, seen in SmartBag delivering a blockchain blood tracking solution through a user-friendly USSD platform.",
    },
    {
      title: "Affordable Healthcare",
      subtext:
        "Our unique cross-subsidization model ensures lower-cadre hospitals can afford vital supplies, promoting widespread access.",
    },
  ];

  return (
    <motion.section
      className="py-16 px-[4vw] container mx-auto flex flex-col gap-[4vw] lg:flex-row md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Left Section */}
      <motion.div className="w-full flex flex-col lg:w-1/2">
        <motion.h1
          variants={itemVariants}
          className="text-2xl leading-[1.5] font-bold mb-4 md:text-3xl lg:text-4xl"
        >
          Revolutionizing Africa's Medical Supply Chains for a Sustainable
          Future
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base opacity-90 mb-5 md:text-lg"
        >
          At LifeBank, we integrate cutting-edge technology, sustainable
          transport, digital solutions, and precise AI for affordable and
          accessible healthcare.
        </motion.p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-base font-extrabold md:text-lg">
                {item.title}
              </h2>
              <p>{item.subtext}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full grid grid-cols-1 lg:w-1/2"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <motion.div className="w-full h-full" variants={itemVariants}>
          <img
            src={careImg}
            alt="care-job-scene-with-patient-being-cared"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex">
          {[innovation, transport, processing].map((src, idx) => (
            <motion.div
              key={idx}
              className={`w-1/3 h-full ${idx < 2 ? "border-r-4 border-white" : ""}`}
              variants={itemVariants}
            >
              <img
                src={src}
                alt={`impact-img-${idx}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ImpactGrid;
