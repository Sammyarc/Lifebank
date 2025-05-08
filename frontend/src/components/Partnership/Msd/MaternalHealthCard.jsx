import React from "react";
import MaternalImg from "../../../assets/Images/african-american-medic-analyzing-x-ray-scan-diagnosis.jpg";
import worker from "../../../assets/Images/HOSPITAL WORKER NERVE APP (2) 1.png";
import mother from "../../../assets/Images/mother-spending-time-with-her-beloved-child.jpg";

export default function MaternalHealthCard() {
  return (
    <section className="w-full bg-white pt-8 px-[4vw] lg:py-16">
      <div className="w-full">
        <div className="flex flex-col items-center lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={MaternalImg}
              alt="african-american-medic-analyzing-x-ray-scan-diagnosis"
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
                How can we reach the last mile with critical blood and
                uterotonics?
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
                The partnership aims to solve last-mile delivery challenges for
                critical blood and uterotonics, enhancing healthcare
                accessibility. This involves efficient supply delivery,
                distributing Heat Stable Carbetocin doses, training healthcare
                workers, and influencing procurement behaviors for improved
                maternal health outcomes in African communities.
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
                  The Tech - SmartMedi & Nerve
                </h2>
                <div className="h-1 bg-red-600 w-24 ml-3"></div>
              </div>
              <p className="text-lg text-gray-700">
                <b className="text-xl">SmartMedi</b> - the backbone of Smart
                Access, uses cutting-edge blockchain to empower stakeholders,
                ensuring transparent and efficient medicine tracking in the
                supply chain
              </p>
              <p className="text-lg mt-[2vw] text-gray-700">
                <b className="text-xl">Nerve</b> - A digital marketplace for
                hospitals to order all critical supplies on time and get it
                delivered to them in the right condition
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={worker}
              alt="hospital worker nerve app"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[10vw] lg:mt-[5vw] lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={mother}
              alt="mother-spending-time-with-her-beloved-child"
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
                Addressing critical last-mile blood delivery, we supplied over
                30,000 units to hospitals in Nigeria and Kenya, meeting urgent
                demands and enhancing accessibility. Simultaneously, our
                maternal health projects focused on uterotonics, training 1,250
                healthcare workers and distributing 4,000 doses of Heat Stable
                Carbetocin in four states.
              </p>
              <p className="text-lg mt-[2vw] text-gray-700">
                Collaborating with State Governments, we're reshaping
                procurement behaviors for healthcare facilities, significantly
                contributing to improved maternal health outcomes and
                reinforcing our commitment to addressing essential healthcare
                needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
