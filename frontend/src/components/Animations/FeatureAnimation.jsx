import React, { useEffect, useState } from "react";

const FeatureAnimation = () => {
  const options = ["is safer", "is faster", "is reliable"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
        setIsAnimating(false);
      }, 500); // Half a second for the fade out/in transition
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex px-[4vw] my-[4vw] md:my-[2vw] md:justify-center md:px-0">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex gap-2 flex-row items-center md:gap-4">
          Lifebank
          <div className="border-2 border-red-600 px-3 py-1 inline-block relative overflow-hidden h-12 w-48 md:w-60 md:h-16 md:ml-2">
            <div
              className={`absolute transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "opacity-0 translate-y-full"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-red-500">{options[currentIndex]}</span>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default FeatureAnimation;
