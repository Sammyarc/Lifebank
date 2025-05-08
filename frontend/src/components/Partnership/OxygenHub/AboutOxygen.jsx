import React from "react";

const AboutOxygen = () => {
  return (
    <section className="px-[4vw] py-8 bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto gap-6 lg:flex-row">
        {/* Left Column */}
        <div className="flex flex-row gap-3 border-r-2 border-gray-200 pr-6 lg:flex-col lg:gap-0">
          <p className="text-3xl font-bold leading-[1.5] text-gray-900 lg:text-4xl">
            About
          </p>
          <p className="text-3xl font-bold leading-[1.5] text-gray-900 lg:text-4xl">
            Oxygen
          </p>
          <p className="text-3xl font-bold leading-[1.5] text-gray-900 lg:text-4xl">
            Hub
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-700 text-base leading-[1.5]">
          Tackling Africa's medical oxygen crisis, Oxygen Hub empowers local
          entrepreneurs to operate and own a network of oxygen production
          plants. Through this initiative, they ensure sustainable and
          affordable oxygen access, saving lives and improving healthcare
          outcomes across the continent
        </div>
      </div>
    </section>
  );
};

export default AboutOxygen;
