
import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function BloodFaQs() {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState({
    'blood-safety': true,
    'blood-return': false
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
      id: 'blood-safety',
      question: 'How am I sure the blood is safe?',
      answer: 'We guarantee the delivery of safe blood by partnering with only accredited blood banks that comply with WHO standards in blood collection and storage.'
    },
    {
      id: 'blood-return',
      question: 'Can I return blood If I don\'t use it?',
      answer: 'If it exceeds 24 hours, the possibility of a return will depend exclusively on the policy of the blood bank that supplied the blood.'
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