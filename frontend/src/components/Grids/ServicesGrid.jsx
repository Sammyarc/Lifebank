import React from "react";
import { motion } from "framer-motion";
import { IoChevronForwardSharp } from "react-icons/io5";
import LifeBankIcon from "../../assets/Icons/blood-icon.png";
import AirBankIcon from "../../assets/Icons/oxygen-icon.png";
import StockBankIcon from "../../assets/Icons/stockbank-icon.png";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      icon: LifeBankIcon,
      title: "LifeBank",
      label: "Blood",
      borderColor: "border-red-600",
      link: "/products/blood",
      description:
        "On-demand delivery of blood and blood products to healthcare facilities using WHO-recommended cold chain infrastructure. We enable hospitals to improve the quality of healthcare they offer to patients by ensuring 24/7 availability of blood and blood products.",
    },
    {
      icon: AirBankIcon,
      title: "Airbank",
      label: "Oxygen",
      borderColor: "border-blue-600",
      link: "/products/oxygen",
      description:
        "Expedited delivery of high purity (93%–95%) oxygen used for the treatment of conditions such as hypoxaemia (low blood oxygen) and maintaining patient blood oxygen levels under surgical anaesthesia.",
    },
    {
      icon: StockBankIcon,
      title: "Stockbank",
      label: "Medical Consumables",
      borderColor: "border-green-700",
      link: "/products/stockbank",
      description:
        "24/7 access to high-quality medical consumables delivered on time and in the right condition. All products are sourced from a network of distributors that guarantee great quality and the best prices.",
    },
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="bg-black text-white py-16 px-[4vw]">
      <h2 className="text-3xl font-bold mb-12 md:text-center md:text-4xl">
        We Transform Your Procurement Process
      </h2>

      <motion.div
        className="flex flex-col md:flex-row gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex-1 space-y-4"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-24 h-24 md:w-[6vw] md:h-[6vw]"
            />
            <h3 className="uppercase text-base font-semibold">
              {service.label}
            </h3>
            <div className={`border-b-4 ${service.borderColor}`} />
            <h4 className="text-2xl font-bold">{service.title}</h4>
            <p className="text-base leading-relaxed">{service.description}</p>
            <Link to={service.link}>
              <button className="flex items-center mt-[1vw] hover:underline space-x-1 text-base font-medium">
                <span>View More</span>
                <IoChevronForwardSharp />
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
