import React from "react";
import { motion } from "framer-motion";
import Care from "../../assets/Icons/care.png";
import Relentless from "../../assets/Icons/relentless.png";
import Growth from "../../assets/Icons/growth.png";
import Merit from "../../assets/Icons/merit.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function CultureSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <motion.h1
        className="text-4xl font-bold mb-6 md:mb-16 md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Culture
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-8">
        {[ // Card data array
          {
            icon: Care,
            alt: "A red heart image",
            title: "Serve",
            desc: "We prioritize delivering an exceptional experience for every customer, every time. Our mission is to consistently add value—because to serve is to care."
          },
          {
            icon: Relentless,
            alt: "A strong arm",
            title: "Respect",
            desc: "We believe in respectful collaboration and value those who know how to disagree constructively. Our team is made up of focused, service-driven professionals—no drama, just impact."
          },
          {
            icon: Growth,
            alt: "A chart showing growth",
            title: "Ownership",
            desc: "Everyone at LifeBank takes responsibility for their work and growth. We act with accountability—because when you take full ownership, you're building something that could one day bear your name!"
          },
          {
            icon: Merit,
            alt: "An award of excellence",
            title: "Excellence",
            desc: "We strive for speed and precision in everything we do. Excellence here means moving fast and getting it right—Fast and Flawless is how we operate at LifeBank."
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="flex flex-col items-start"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <div className="w-[20vw] h-[20vw] md:w-[5vw] md:h-[5vw]">
              <img
                src={item.icon}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-left md:text-xl">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-left">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
