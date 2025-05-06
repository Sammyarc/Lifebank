import React from "react";
import { motion } from "framer-motion";
import Housing from "../../assets/Icons/housing.png";
import Health from "../../assets/Icons/health.png";
import Focused from "../../assets/Icons/focused.png";
import Growth from "../../assets/Icons/accelerated.png";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function BenefitSection() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.h1
          className="text-4xl font-bold mb-6 md:mb-16 md:text-5xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Benefits
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-8">
          {[
            {
              img: Housing,
              alt: "Housing icon",
              title: "Housing Assistance",
              text: "Funds to help you settle down in a new city and begin your LifeBank journey.",
            },
            {
              img: Health,
              alt: "Health icon",
              title: "Health Insurance",
              text: "Health coverage for you and your loved ones under an accredited health insurance provider.",
            },
            {
              img: Focused,
              alt: "Focused team icon",
              title: "Focused caring team members.",
              text: "Team members to make you feel welcome and help you do your best work.",
            },
            {
              img: Health,
              alt: "Life insurance icon",
              title: "Life Insurance",
              text: "A Life insurance package to cater to your loved ones in case of any eventuality.",
            },
            {
              img: Growth,
              alt: "Accelerated growth icon",
              title: "Accelerated growth",
              text: "Support as you take on more responsibility, switch roles, or transition into a leadership position.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="w-[20vw] h-[20vw] md:w-[5vw] md:h-[5vw]">
                <img
                  src={benefit.img}
                  alt={benefit.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-left md:text-xl">
                {benefit.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-left">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
