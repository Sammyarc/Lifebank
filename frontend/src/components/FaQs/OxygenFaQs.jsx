
import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function OxygenFaQs() {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState({
    'purity': true,
      'size': false,
      'pressure': false,
    'cylinders': false,
  });

  // Toggle FAQ item open/closed
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ data
  const faqItems = [
    {
      id: 'purity',
      question: 'What is the purity of your oxygen?',
      answer: 'We maintain a purity level of 93% by partnering with oxygen plants that provide high-quality medical oxygen. We also recently launched Airco, our oxygen production plant powered by technology that allows us to predict oxygen demand.'
    },
    {
      id: 'size',
      question: 'In what sizes do you deliver cylinders?',
      answer: 'We currently deliver oxygen in 2㎥, 6㎥ , and 7㎥ cylinders. Special delivery options are available on-demand.'
      },
      {
        id: 'pressure',
        question: 'What is the pressure of your gas?',
        answer: '150 bar'
      },
      {
        id: 'cylinders',
        question: 'Do you sell cylinders and accessories?',
        answer: 'Yes. These are available upon request by customers.'
      },
  ];

  return (
    <div className="grid grid-cols-1 gap-[1vw] container mx-auto px-[4vw] py-12 md:py-16 md:grid-cols-2">
      <h1 className="text-3xl font-bold leading-[1.5] mb-6 md:mb-8 md:text-5xl">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-md">
            <button 
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems[item.id]}
            >
              <span className="text-base font-medium md:text-lg">{item.question}</span>
              <span className="ml-2 flex-shrink-0">
                {openItems[item.id] ? 
                  <IoChevronUp className="h-5 w-5 text-gray-500" /> : 
                  <IoChevronDown className="h-5 w-5 text-gray-500" />
                }
              </span>
            </button>
            
            {openItems[item.id] && (
              <div className="p-4 pt-0 md:pt-0 text-sm md:text-base text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}