import React from "react";
import coldbank from "../../assets/Images/coldbank.png";
import airX from "../../assets/Images/airX.png";
import skybank from "../../assets/Images/skybank.png";
import quip from "../../assets/Images/quip.png";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const InnovationsGrid = () => {
  const gridItems = [
    {
      heading: "ColdBank",
      subtext:
        "ColdBank provides uninterrupted cold storage and transportation of temperature-sensitive medical products (vaccines, insulins, etc.) from pick-up to delivery. Using remote digital temperature tracking devices, temperature data can be monitored in real-time and accessed after delivery.",
      btnText: "Explore ColdBank",
      imgUrl: coldbank,
    },
    {
      heading: "QUIP",
      subtext:
        "Quip is a free equipment maintenance application for hospitals. With Quip, hospitals can take inventory of their equipment, get quotes for repairs, schedule maintenance dates, and place orders for replacement parts.",
      btnText: "Explore QUIP",
      imgUrl: quip,
    },
    {
      heading: "SkyBank",
      subtext:
        "SkyBank utilises drones to deliver essential medical products to rural/inaccessible areas. It provides an innovative delivery route in areas where lack of infrastructure has historically prevented access to quality healthcare and life-saving medical products.",
      btnText: "Explore SkyBank",
      imgUrl: skybank,
    },
    {
      heading: "AirX",
      subtext:
        "AirX is a forecasting and prediction tool revolutionizing oxygen supply management through advanced data science and analytics. It ensures healthcare facilities in Africa have uninterrupted access to vital oxygen supplies.",
      btnText: "Explore AirX",
      imgUrl: airX,
    },
    {
      heading: "SmartMedi",
      subtext:
        "SmartMedi is a supply chain management tool aimed at reducing postpartum haemorrhage in Africa by improving access to PPH prevention drugs. It uses blockchain technology to scan, tag, and track drugs from source to healthcare centers.",
      btnText: "Explore SmartMedi",
      imgUrl: coldbank,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
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
    <section className="bg-black py-16 px-[4vw]">
      <div className="container mx-auto max-w-6xl">
        {gridItems.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8 md:gap-16`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Text Content */}
            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {item.heading}
              </h2>
              <p className="text-lg text-white leading-relaxed">
                {item.subtext}
              </p>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 mt-[6vw] flex justify-center items-center gap-1 text-white font-medium px-6 py-2 rounded-full transition duration-300 md:mt-[1.5vw]"
              >
                {item.btnText}
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
            </motion.div>

            {/* Illustration */}
            <motion.div variants={imageAnim} className="w-full md:w-1/2">
              <img
                src={item.imgUrl}
                alt={item.heading}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InnovationsGrid;
