import React from "react";
import { motion } from "framer-motion";
import Transport from "../assets/Images/transport.jpg";
import CallService from "../assets/Images/call representatve.jpg";
import BloodBag from "../assets/Images/blood donation 3.jpg";
import FirstOrnament from "../assets/Icons/Ornament 11.svg";
import SecondOrnament from "../assets/Icons/Ornament 31.svg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const MultiContent = () => {
  const contentData = [
    {
      title: "Multi-Modal Distribution",
      text: "Utilizing drones, tricycles, bikes and trucks; we deliver hospital supplies right to your doorstep. We use the best mobility solution for each scenario to ensure delivery on time and in the right condition.",
      image: Transport,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      title: "24/7 Delivery",
      text: "We are open 24 hours every day of the year, accepting and fulfilling orders across various channels wherever you are and whatever you need. By ensuring 24/7 availability and accessibility of our products, we enable hospitals to improve the quality of healthcare they offer to patients.",
      image: CallService,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      title: "Quality Products",
      text: "We work with over 150 accredited blood banks to provide safe blood and safe blood products. Our order and inventory system ensures that every product supplied is trackable and the safety records of blood and blood products are available to patients and health providers.",
      image: BloodBag,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 px-[4vw]">
      <div className="container mx-auto max-w-6xl space-y-[20vw] md:space-y-[5vw]">
        {contentData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center justify-between gap-8 space-y-[5vw] md:gap-16`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Text Content */}
            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {item.title}
              </h2>
              <p className="text-lg text-white leading-relaxed">
                {item.text}
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div variants={imageAnim} className="w-full md:w-1/2 relative">
              <img
                src={item.topOrnament}
                className="absolute -top-10 left-0 md:-left-10 w-16 md:w-24 z-0"
                alt="Top Left Ornament"
              />
              <img
                src={item.bottomOrnament}
                className="absolute -bottom-5 right-0 md:-right-10 w-16 md:w-24 z-0"
                alt="Bottom Right Ornament"
              />
              <img
                src={item.image}
                className="w-full h-full object-cover relative z-10"
                alt={item.title}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MultiContent;
