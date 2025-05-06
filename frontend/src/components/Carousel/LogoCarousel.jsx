import React, { useEffect } from 'react'
import StNicholas from "../../assets/Images/st nicholas.png"
import MamaLucy from "../../assets/Images/mama lucy.jpg"
import Lagoon from "../../assets/Images/lagoon.jpg"
import Reddington from "../../assets/Images/reddington.png"
import Arsho from "../../assets/Images/arsho.png"


const LogoCarousel = () => {
    const logos = [
        { name: "St.Nicholas Hospital", logo: StNicholas },
        { name: "Mama Lucy Kibaki Hospital", logo: MamaLucy },
        { name: "Arsho Hospital", logo: Arsho },
        { name: "Reddington Hospital", logo: Reddington },
        { name: "Lagoon Hospital", logo: Lagoon },
    ];
    
     // Animation effect for the infinite scroll
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    
    // Add data-animated="true" once JS is loaded
    scrollers.forEach((scroller) => {
      // Add data-animated="true" attribute to enable animation
      scroller.setAttribute("data-animated", true);
      
      // Clone the content for a seamless infinite effect
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
      
      // Duplicate the content for a seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }, []);
    
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 md:text-center">
          Trusted by hospitals in Nigeria, <span className='text-red-600'>Ethiopia</span> and Kenya
        </h2>
        
        {/* Logo scroller */}
        <div className="scroller relative mx-auto max-w-full overflow-hidden" data-speed="slow">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling content */}
          <div 
            className="scroller__inner flex flex-nowrap items-center gap-6"
            style={{
              // CSS for animation - will be controlled by the useEffect hook
              animation: "scroll 10s linear infinite"
            }}
          >
            {logos.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center min-w-[160px] h-16 bg-white p-4 rounded-lg shadow-sm"
              >
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`}
                  className="max-h-full w-[30vw] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel