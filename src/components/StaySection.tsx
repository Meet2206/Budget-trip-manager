import React from 'react';
import { StayOption } from '../types';
import { MapPin, CheckCircle, ExternalLink } from 'lucide-react';

interface StaySectionProps {
  stayOptions: StayOption[];
}

const StaySection: React.FC<StaySectionProps> = ({ stayOptions }) => {
  return (
    <section id="stays" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Stay Options in Udaipur
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comfortable and budget-friendly accommodation options for our stay in Udaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stayOptions.map((stay) => (
            <div
              key={stay.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                  {stay.price}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {stay.name}
                  </h3>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <MapPin size={16} className="mr-1 text-amber-500" />
                  <span className="text-sm">{stay.location}</span>
                </div>

                <ul className="mb-4 space-y-2">
                  {stay.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={stay.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                >
                  Book on Booking.com
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaySection;