import { FaFlag } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { motion } from "framer-motion";

export default function OfficeLocations() {
  const locations = [
    {
      name: "HEADQUARTERS",
      address: "14, McEwen Street, Yaba, Lagos, Nigeria",
      textColor: "text-green-600",
      bgColor: "bg-green-600"
    },
    {
      name: "KENYA",
      address: "Argwings Kodhek Groove, Nairobi, Kenya",
      textColor: "text-red-600",
      bgColor: "bg-red-600"
    },
    {
      name: "ETHIOPIA",
      address: "Nega city mall, Office No. 202 Kazanchis, Addis Ababa, Ethiopia",
      textColor: "text-yellow-400",
      bgColor: "bg-yellow-400"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {locations.map((location, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Square with flag icon */}
            <div className={`w-14 h-14 ${location.bgColor} flex items-center justify-center mb-4`}>
              <FaFlag size={24} color="white" />
            </div>

            {/* Location name */}
            <div className="flex items-center mb-2">
              <ImLocation className={`${location.textColor} mr-2`} />
              <h3 className="font-bold">{location.name}</h3>
            </div>

            {/* Divider line */}
            <div className={`w-full h-1 ${location.bgColor} mb-4`}></div>

            {/* Address */}
            <p className="text-gray-800">{location.address}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
