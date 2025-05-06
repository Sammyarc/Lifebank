import React, { useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div>
      {bannerVisible && (
        <div className="bg-black text-white relative">
          <div className="container mx-auto px-4 py-4 flex items-center justify-center">
            <p className="flex flex-col md:items-center md:flex-row md:text-center">
              Introducing Nerve, the fastest way to order medical supplies in
              Africa.
              <a
                href="#"
                className="flex items-center mt-2 text-white hover:underline md:mt-0 md:ml-2"
              >
                Find out more <IoChevronForwardSharp  size={16} className="ml-1" />
              </a>
            </p>
            <button
              className="absolute right-4 text-white"
              onClick={() => setBannerVisible(false)}
            >
              <AiOutlineClose size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
