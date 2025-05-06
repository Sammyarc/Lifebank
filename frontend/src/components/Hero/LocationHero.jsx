import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LocationHero = () => {
  return (
    <section className="bg-black px-[2vw] py-[8vw]">
      <div className="container mx-auto space-y-4 md:space-y-6">
        <motion.h1
          className="text-3xl leading-[1.5] text-white font-bold md:text-center md:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          <span className="text-red-600">Trusted</span> by over 1,400 Hospitals in 3 Countries
        </motion.h1>

        <motion.p
          className="text-base text-white md:text-center md:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeInUp}
        >
          We are constantly expanding our reach in our quest to improve healthcare delivery in Africa using our proprietary technology.
        </motion.p>
      </div>
    </section>
  );
};

export default LocationHero;
