import React from "react";
import Factory from "../../../assets/Images/skoll card.png";
import quip from "../../../assets/Images/the tech quip 1.png";
import itImg from "../../../assets/Images/skoll card 2.png";

export default function SkollCards() {
  return (
    <section className="w-full bg-white pt-8 px-[4vw] lg:py-16">
      <div className="w-full">
        <div className="flex flex-col items-center lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={Factory}
              alt="two factory workers smiling at the camera"
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
                How can we harness the massive population of young people in
                Africa to ensure medical equipment is accessible to all?
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
                The partnership aims to improve healthcare facilities' access to
                medical equipment in Africa by implementing the Quip platform.
                This technology enables comprehensive management, including
                diagnosis, maintenance, repair, and replacement of equipment,
                ensuring efficient and effective healthcare service delivery
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
                  The Tech - Quip
                </h2>
                <div className="h-1 bg-red-600 w-24 ml-3"></div>
              </div>
              <p className="text-lg text-gray-700">
                An asset management platform that allows Care Centers to
                Diagnose, Maintain, Repair, and Replace their medical equipment
                on one tech platform, exemplifies its effectiveness and impact
                in the healthcare sector, driving growth and providing value to
                customers.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={quip}
              alt="A doctor making an order with his phone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[10vw] lg:mt-[5vw] lg:flex-row">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <img
              src={itImg}
              alt="Two technicians inspecting server connections"
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
                The Skoll Foundation's collaboration harnessed over 64 freelance
                biomedical engineers, partnered with 6 equipment vendors, and
                engaged 7 hospitals on the Quip platform.
              </p>
              <p className="text-lg mt-[2vw] text-gray-700">
                This initiative leveraged the young population's potential,
                significantly improving healthcare infrastructure and access in
                multiple African regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
