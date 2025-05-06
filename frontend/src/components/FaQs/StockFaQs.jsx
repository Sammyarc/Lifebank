
import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function StockFaQs() {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState({
    'product': true,
    'price': false
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
      id: 'product',
      question: 'Not all the products I want are available. What do I do?',
      answer: 'We are constantly increasing the list of products we supply. You can shop from our current list of products now and let us know what you will like to see in the future.'
    },
    {
      id: 'price',
      question: 'How am I sure I am getting the best prices?',
      answer: 'We collectively bargain with a network of manufacturers to get the best prices for you. You are assured of the best prices and great quality.'
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