import { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from "framer-motion";
import Msd from "../../assets/Images/msd.png"
import Oxygen from "../../assets/Images/oxygen_hub.png"
import Skoll from "../../assets/Images/skoll.png"
import Johnson from "../../assets/Images/johnson.png"
import postpartum from "../../assets/Images/person-massaging-her-feet.jpg"
import OxygenPlant from "../../assets/Images/oxygen hub plant.jpg"
import youth from "../../assets/Images/low-angle-view-african-american-woman-with-armcrossing-gesture-participating-protest-human-rights.jpg"
import Lab from "../../assets/Images/african-american-woman-scientist-holding-test-tube-laboratory.jpg"
import { Link } from 'react-router-dom';

export default function HealthcarePartnerships() {
  // Partnership data array for mapping
  const [partnerships] = useState([
    {
      id: 1,
      image: postpartum,
      imageAlt: "person-massaging-her-feet",
      logo: Msd,
      logoAlt: "MSD Logo",
      title: "MSD partnership to reduce\nPostpartum Hemorrhage in Africa",
      link: "/impact/msd"
    },
    {
      id: 2,
      image: OxygenPlant,
      imageAlt: "Oxygen hub plant",
      logo: Oxygen,
      logoAlt: "Oxygen Hub Logo",
      title: "Breathing Life into Healthcare:\nLifeBank's Oxygen Hub Partnership",
      link: "/impact/oxygen"
    },
    {
      id: 3,
      image: youth,
      imageAlt: "Youth Empowerment",
      logo: Skoll,
      logoAlt: "Partner Logo",
      title: "Youth Empowerment for Better Healthcare Equipment Access",
      link: "/impact/skoll"
    },
    {
      id: 4,
      image: Lab,
      imageAlt: "Laboratory assistant",
      logo: Johnson,
      logoAlt: "Tech Partner Logo",
      title: "Transforming Blood Safety: SmartSystem's Blockchain Innovation",
      link: "/impact/johnson"
    }
  ]);

  return (
    <section className="max-w-6xl mx-auto px-[4vw] py-12 overflow-hidden" id='partnerships'>
          {/* Main Heading */}
          <h1
          className="text-3xl leading-[1.5] font-bold mb-4 md:text-center md:text-3xl lg:text-4xl"
        >
         Partnership Case Study
          </h1>
          
      <p className="text-base text-gray-800 mb-12 md:text-xl md:text-center">
        Solving Critical Healthcare Challenges Across Africa Through Strategic Partnerships
      </p>
      
      {/* Partnership Cards Container */}
      <div className="grid grid-cols-1 space-y-[20vw] md:gap-[8vw] md:grid-cols-2 md:space-y-0">
        
        {/* Map through partnerships array */}
        {partnerships.map((partnership) => (
          <div key={partnership.id} className="relative">
            {/* Gray Background Offset */}
            <div className="absolute bg-gray-200 w-full h-full top-6 left-6 -z-10"></div>
            
            {/* Card Content */}
            <div className="bg-white shadow-sm h-full flex flex-col">
              {/* Image Section */}
              <div className="w-full h-48 md:h-[20vw]">
                <img 
                  src={partnership.image} 
                  alt={partnership.imageAlt} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content */}
              <div className="p-4 md:p-6 text-center flex flex-col flex-grow justify-between">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <img 
                    src={partnership.logo} 
                    alt={partnership.logoAlt} 
                    className="h-16 w-36 md:h-20 md:w-32"
                  />
                </div>
                
                {/* Title - use whitespace-pre-line to handle the newlines in the title */}
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium mb-4 whitespace-pre-line">
                  {partnership.title}
                </h3>
                
                {/* Read More Button */}
                <div className="flex justify-center mt-auto">
                  <Link to={partnership.link} 
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                  >
                    Read More
                    <span className="ml-2 border border-red-600 rounded-full p-1">
                    <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <IoIosArrowRoundForward size={20} />
              </motion.div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}