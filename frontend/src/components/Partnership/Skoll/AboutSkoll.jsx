import React from "react";

const AboutSkoll = () => {
  return (
    <section className="px-[4vw] py-8 bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto gap-6 lg:flex-row">
        {/* Left Column */}
        <div className="flex flex-col gap-3 border-r-2 border-gray-200 pr-6 lg:gap-0">
          <p className="text-3xl font-bold leading-[1.5] text-gray-900 lg:text-4xl">
            About Skoll
          </p>
          <p className="text-3xl font-bold leading-[1.5] text-gray-900 lg:text-4xl">
            Foundation
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-700 text-base leading-[1.5]">
          The Skoll Foundation, founded in 1999 by Jeff Skoll, supports social
          entrepreneurs driving impactful change globally. It invests in
          initiatives promoting sustainability, social justice, and systemic
          improvements.
        </div>
      </div>
    </section>
  );
};

export default AboutSkoll;
