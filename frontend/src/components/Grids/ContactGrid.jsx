import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ContactGrid() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
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
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl">
        Connect With Us
      </h2>
      <p className="text-gray-600 mb-8">
        We would love to respond to your queries, feel free to get in touch with
        us
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <h3 className="text-red-600 font-medium mb-4">Send your request</h3>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-800 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-800 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 123 4567 890"
                  className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@gmail.com"
                  className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-800 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Make a request"
                  className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 focus:outline-none focus:border-gray-500"
              ></textarea>
            </div>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-red-600 flex justify-center items-center gap-1 text-white py-2 px-7 rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              SEND
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
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-200 p-8 md:w-1/3">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Reach Us</h3>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-800 mb-1">Email:</p>
              <p className="text-gray-700">hello@lifebank.ng</p>
            </div>

            <div>
              <p className="font-bold text-gray-800 mb-1">Phone:</p>
              <p className="text-gray-700">0700-LIFEBANK</p>
            </div>

            <div>
              <p className="font-bold text-gray-800 mb-1">Address:</p>
              <p className="text-gray-700">14, Mcwen Street, Yaba.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
