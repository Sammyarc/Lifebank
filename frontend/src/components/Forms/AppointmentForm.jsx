import { useEffect, useRef, useState } from "react";
import partnerImg from "../../assets/Images/happy-joyful-diverse-business-partners-greeting-each-other.jpg";
import { GoChevronDown } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    role: "",
    country: "",
    purpose: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setFormData((prev) => ({
        ...prev,
        date: now.toISOString().split("T")[0],
        time: now.toTimeString().slice(0, 5),
      }));
    };

    updateDateTime(); // Set once on mount

    const interval = setInterval(updateDateTime, 1000 * 60); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleClick = () => {
    // toggle the dropdown state manually
    setIsOpen((prev) => !prev);
  };

  const handleBlur = (e) => {
    // Close the icon rotation if focus moves outside the component
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Required fields validation
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Would normally submit form data to backend here
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {isSubmitted ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mx-auto h-12 w-12 text-green-500 flex justify-center items-center">
              <svg
                className="h-full w-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Appointment Booked Successfully!
            </h2>
            <p className="mt-2 text-gray-600">
              We look forward to speaking with you on {formData.date} at{" "}
              {formData.time}.
            </p>
            <button
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              onClick={() => setIsSubmitted(false)}
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2">
              <h1 className="text-3xl font-bold mb-2">Schedule a Quick Chat</h1>
              <p className="text-gray-600 mb-8">
                Explore Partnership Opportunities with LifeBank
              </p>

              <div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-gray-600"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-gray-600"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-gray-600"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="organisation"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                        errors.organisation
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-gray-600"
                      }`}
                    />
                    {errors.organisation && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.organisation}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                        errors.role
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-gray-600"
                      }`}
                    />
                    {errors.role && (
                      <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                        errors.country
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-gray-600"
                      }`}
                    />
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.country}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="purpose"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Purpose of Discussion
                    </label>
                    <div className="relative">
                      <select
                        id="purpose"
                        name="purpose"
                        ref={selectRef}
                        value={formData.purpose}
                        onChange={handleChange}
                        onClick={handleClick}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-md appearance-none focus:outline-none focus:ring-1 ${
                          errors.purpose
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:ring-gray-600"
                        }`}
                      >
                        <option value="" disabled>
                          Select a purpose
                        </option>
                        <option value="investment">Investment</option>
                        <option value="partnership">Partnership</option>
                        <option value="funding">Funding</option>
                        <option value="others">Others</option>
                      </select>

                      {/* Icon with rotation */}
                      <GoChevronDown
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 pointer-events-none text-gray-600 ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>

                    {errors.purpose && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.purpose}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                        errors.date
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-gray-600"
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                        errors.time
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-gray-600"
                      }`}
                    />
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-700 hover:bg-red-800 flex justify-center items-center gap-1 text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out"
                >
                  Book Appointment
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
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 h-full">
              <img
                src={partnerImg}
                alt="LifeBank Partnership"
                className="max-w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
