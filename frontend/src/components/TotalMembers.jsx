import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const TotalMembers = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center py-8 md:py-12">
        {[{ number: "142", text: "team members" }, { number: "3", text: "nationalities" }].map((item, i) => (
          <motion.p
            key={i}
            className="text-[7.5vw] font-bold md:text-[5vw]"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <span className="text-red-600">{item.number}</span> {item.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default TotalMembers;
