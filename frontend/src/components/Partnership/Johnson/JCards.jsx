import React from "react";
import Closeup from "../../../assets/Images/closeup.png";
import Safety from "../../../assets/Images/safety.png";
import App from "../../../assets/Images/app.png";

export default function JCards() {
  return (
    <section className="w-full bg-white pt-8 px-[4vw] lg:py-16">
      <div className="w-full">
        <div className="flex flex-col items-center lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={Closeup}
              alt="A person donating blood"
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
                How can we assess the efficacy and safety of blood transfusions
                in Nigeria to enhance the quality of healthcare services and
                reduce the risk of Transfusion-Transmitted Infections?
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
                The Partnership envisions a future driven by advanced solutions,
                ensuring secure and transparent blood screening and supply
                chains. This collaborative initiative, grounded in research &
                innovation, is dedicated to delivering enhanced health outcomes,
                especially for vulnerable populations
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
                  The Tech - SmartSystem
                </h2>
                <div className="h-1 bg-red-600 w-24 ml-3"></div>
              </div>
              <p className="text-lg text-gray-700">
                SmartSystem (SmartBag - A blockchain-powered blood safety tool
                to transform blood screening and tracking. The innovation brings
                transparency and accountability to the blood system, which is
                plagued by a consistent opacity in compliance with screening
                rules).
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={App}
              alt="A picture showing the dashboard of smart system app"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[10vw] lg:mt-[5vw] lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={Safety}
              alt="A middle aged man carrying a box of supplies"
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
                Research conducted in partnership with Johnson & Johnson
                confirms SmartBag's efficacy in enhancing the safety of the
                blood ecosystem. Utilizing SmartBag technology for recording and
                storing screening data resulted in a significant reduction in
                Transfusion-Transmitted Infections during the blood screening
                process.
              </p>
              <p className="text-lg mt-[2vw] text-gray-700">
                This innovation ensures a secure and steady supply of safe
                blood, benefiting vulnerable populations, including mothers,
                children, and critically ill patients, for improved health
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
