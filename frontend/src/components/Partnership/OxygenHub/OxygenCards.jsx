
import React from "react";
import Mask from "../../../assets/Images/african-american-female-patient-with-oxygen-mask-2023-11-27-05-18-55-utc 1.png";
import Chart from "../../../assets/Images/ahaa 1.png";
import Factory from "../../../assets/Images/Airco - Life bank-81 (1) 1.png";

export default function OxygenCards() {
  return (
    <section className="w-full bg-white pt-8 px-[4vw] lg:py-16">
      <div className="w-full">
        <div className="flex flex-col items-center lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={Mask}
              alt="african-american-female-patient-with-oxygen-mask"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="flex-1 mt-3 p-2 lg:p-8 lg:mt-0">
            {/* Question Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  The Question
                </h2>
                <div className="h-1 bg-red-600 w-24 ml-3"></div>
              </div>
              <p className="text-lg text-gray-700">
              How can we establish a robust system to prevent hospitals from facing shortages of medical oxygen, ensuring a continuous and reliable supply?
              </p>
            </div>

            {/* Solution Section */}
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  The Solution
                </h2>
                <div className="h-1 bg-red-600 w-24 ml-3"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700">
              LifeBank, collaborating with the Oxygen Hub, pioneers a solution that reshapes healthcare delivery. This integrated approach guarantees a consistent and accessible supply of medical oxygen, revitalizing emergency healthcare services and marking a significant stride in patient care and outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center mt-[10vw] lg:mt-[5vw] lg:flex-row">
          {/* Content Column */}
          <div className="flex-1 mt-3 p-2 lg:p-8 lg:mt-0">
            {/* Question Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                The Tech - Nerve & AirX
                </h2>
                <div className="h-1 bg-red-600 w-24 ml-3"></div>
              </div>
              <p className="text-lg text-gray-700">
                Nerve is a digital marketplace for hospitals to order critical supplies promptly, ensuring optimal delivery. AirX utilizes data science and machine learning to predict and manage oxygen demand in healthcare facilities.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={Factory}
              alt="Life bank"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[10vw] lg:mt-[5vw] lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={Chart}
              alt="Laptop screen showing impact"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content Column */}
          <div className="flex-1 mt-3 p-2 lg:p-8 lg:mt-0">
            {/* Question Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  The Impact
                </h2>
                <div className="h-1 bg-red-600 w-24 ml-3"></div>
              </div>
              <p className="text-lg text-gray-700">
              In collaboration with the Oxygen Hub, LifeBank implemented an innovative solution: establishing an oxygen plant, integrating an efficient request platform for hospitals, and deploying a predictive tool for proactive deliveries.
              </p>
              <p className="text-lg mt-[2vw] text-gray-700">
              This approach has significantly improved medical oxygen reliability in Nigeria's North Central Region, delivering over 150,000 M³ and enhancing emergency healthcare services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
