import React, { useEffect } from "react";
import StNicholas from "../../assets/Images/st nicholas.png";
import MamaLucy from "../../assets/Images/mama lucy.jpg";
import Lagoon from "../../assets/Images/lagoon.jpg";
import Reddington from "../../assets/Images/reddington.png";
import Arsho from "../../assets/Images/arsho.png";

const LogoCarousel = () => {

  return (
    <section className="py-8 bg-gray-50 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 md:text-center">
          Trusted by hospitals in Nigeria,{" "}
          <span className="text-red-600">Ethiopia</span> and Kenya
        </h2>

        <div class="brand-container">
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div class="brand-flex animate-scroll">
            <div class="brand-logo rounded-lg">
              <img src={StNicholas} alt="St.Nicholas Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={MamaLucy} alt="Mama Lucy Kibaki Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={Arsho} alt="Arsho Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={Reddington} alt="Reddington Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={Lagoon} alt="Lagoon Hospital logo" />
            </div>
          </div>
          <div class="brand-flex animate-scroll">
            <div class="brand-logo rounded-lg">
              <img src={StNicholas} alt="St.Nicholas Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={MamaLucy} alt="Mama Lucy Kibaki Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={Arsho} alt="Arsho Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={Reddington} alt="Reddington Hospital logo" />
            </div>
            <div class="brand-logo rounded-lg">
              <img src={Lagoon} alt="Lagoon Hospital logo" />
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
