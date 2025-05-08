
import React from "react";

const AboutJohnson = () => {
  return (
    <section className="px-[4vw] py-8 bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto gap-6 lg:flex-row">
        {/* Left Column */}
        <div className="flex flex-row gap-3 border-r-2 border-gray-200 pr-6 lg:gap-0">
          <p className="text-3xl font-bold leading-[1.5] text-gray-900 lg:text-4xl">
            About
          </p>
          <p className="text-3xl font-bold leading-[1.5] text-gray-900 lg:text-4xl">
            J&J
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-700 text-base leading-[1.5]">
        Johnson & Johnson, founded in 1886, is a global healthcare company leading in pharmaceuticals, medical devices, and consumer health. Renowned for its commitment to innovation and well-being, it is a significant contributor to healthcare advancements and research.
        </div>
      </div>
    </section>
  );
};

export default AboutJohnson;
