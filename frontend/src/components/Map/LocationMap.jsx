
import { useState } from 'react';
import { ImLocation } from "react-icons/im";

export default function LocationMap() {
  const [activeTab, setActiveTab] = useState('Nigeria');
  
  const locations = [
    {
      id: 'Nigeria',
      name: 'NIGERIA',
      address: '14, McEwen Street, Yaba, Lagos, Nigeria',
      color: 'green',
      bgColor: 'bg-green-600',
      borderColor: 'border-green-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1435352660737!2d3.377115074480412!3d6.503507523396403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c50cdb64a31%3A0xe788b472d69c4882!2sLifeBank%20Nigeria!5e0!3m2!1sen!2sng!4v1746574236525!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
      id: 'Kenya',
      name: 'KENYA',
      address: 'Argwings Kodhek Groove, Nairobi, Kenya',
      color: 'red',
      bgColor: 'bg-red-600',
      borderColor: 'border-red-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798945922463!2d36.79532007448294!3d-1.2952010356349102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10bdfc5b9e07%3A0xaa6285ccf17ef851!2sArgwings%20Kodhek%20Groove%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sng!4v1746574395878!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
      id: 'Ethiopia',
      name: 'ETHIOPIA',
      address: 'Nega city mall, Office No. 202 Kazanchis, Addis Ababa, Ethiopia',
      color: 'yellow',
      bgColor: 'bg-yellow-400',
      borderColor: 'border-yellow-400',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.516158465581!2d38.7631875744988!3d9.016589189184183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8597cafe4815%3A0x966b6f65cc316778!2zTmVnYSBDaXR5IE1hbGwgfCBLYXphbmNoaXMgfCDhipDhjIsg4Yiy4YmyIOGInuGIjSB8IOGKq-GIs-GKleGJveGItQ!5e0!3m2!1sen!2sng!4v1746574448606!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Find the active location
  const activeLocation = locations.find(loc => loc.id === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap border-b mb-8">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => handleTabClick(location.id)}
            className={`py-3 px-6 font-medium text-sm sm:text-base transition-colors duration-200 mr-1 sm:mr-4 focus:outline-none
              ${activeTab === location.id 
                ? `${location.id === 'Nigeria' ? 'bg-green-600 text-white' 
                  : location.id === 'Kenya' ? 'bg-red-600 text-white' 
                  : 'bg-yellow-400 text-black'}`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {location.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map Display */}
        <div className="w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
          <iframe 
            src={activeLocation.mapUrl} 
            alt={`Map of ${activeLocation.name}`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Location Details */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 ${activeLocation.bgColor} flex items-center justify-center mr-4`}>
              <ImLocation size={24} color="white" />
            </div>
            <h2 className="text-2xl font-bold">{activeLocation.name}</h2>
          </div>
          
          <div className={`w-full h-1 ${activeLocation.bgColor} mb-6`}></div>
          
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Address:</strong> {activeLocation.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}