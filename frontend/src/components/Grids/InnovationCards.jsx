import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InnovateImg from "../../assets/Images/jonathan-borba.jpg";
import PatientImg from "../../assets/Images/alexander-ugolkov.jpg";

export default function InnovationCards() {
  const [expandedCards, setExpandedCards] = useState({
    motive: false,
    impact: false,
  });

  const toggleCard = (card) => {
    setExpandedCards((prev) => ({
      ...prev,
      [card]: !prev[card],
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Motive Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <div className="h-1 bg-red-600 w-full"></div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start justify-between gap-[1vw]">
                <div className="mb-6 md:mb-0 md:w-3/5">
                  <h3 className="text-red-600 font-bold mb-2">OUR MOTIVE</h3>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Why We Innovate
                  </h2>

                  <div className="text-gray-700">
                    <AnimatePresence mode="wait">
                      {expandedCards.motive ? (
                        <motion.p
                          key="motive-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          By constantly working with healthcare institutions, we
                          have gained a unique understanding of the problems
                          that negatively impact the efficiency of healthcare
                          systems in the countries we operate in. Our
                          innovations are targeted at providing technology-led
                          solutions to these problems. Solutions that enable
                          hospitals and other healthcare providers to deliver
                          quality healthcare to the last mile.
                        </motion.p>
                      ) : (
                        <motion.p
                          key="motive-short"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          By constantly working with healthcare institutions, we
                          have gained a unique understanding of the problems
                          that negatively impact the efficiency of hea...
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => toggleCard("motive")}
                    className="mt-4 text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    Read {expandedCards.motive ? "Less" : "More"}
                  </button>
                </div>

                <div className="w-full flex justify-center md:w-2/5">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full h-48 rounded-lg md:h-[18vw]"
                  >
                    <img
                      src={InnovateImg}
                      alt="Why We Innovate"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Impact Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <div className="h-1 bg-red-600 w-full"></div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start justify-between gap-[1vw]">
                <div className="mb-6 md:mb-0 md:w-3/5">
                  <h3 className="text-red-600 font-bold mb-2">OUR IMPACT</h3>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    What Our Innovation Does
                  </h2>

                  <div className="text-gray-700">
                    <AnimatePresence mode="wait">
                      {expandedCards.impact ? (
                        <motion.p
                          key="impact-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          Our innovations ensure that hospitals can improve
                          their efficiency and operate faster and safer. From
                          blockchain-powered records to drone technology,
                          contactless distribution and access to biomedical
                          engineering talent, we are constantly leveraging
                          technology to improve processes and enhance the
                          quality of healthcare hospitals can offer to patients.
                        </motion.p>
                      ) : (
                        <motion.p
                          key="impact-short"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          Our innovations ensure that hospitals can improve
                          their efficiency and operate faster and safer. From
                          blockchain-powered records...
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => toggleCard("impact")}
                    className="mt-4 text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    Read {expandedCards.impact ? "Less" : "More"}
                  </button>
                </div>

                <div className="w-full flex justify-center md:w-2/5">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full h-48 rounded-lg md:h-[18vw]"
                  >
                    <img
                      src={PatientImg}
                      alt="Impact of Innovation"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
