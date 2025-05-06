import React, { useState } from 'react';
import { DayItinerary } from '../types';
import { ChevronDown, ChevronUp, Clock, Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

interface ItinerarySectionProps {
  itineraryData: DayItinerary[];
}

const ItinerarySection: React.FC<ItinerarySectionProps> = ({ itineraryData }) => {
  const [expandedDays, setExpandedDays] = useState<{ [key: string]: boolean }>(() => {
    const initial: { [key: string]: boolean } = {};
    if (itineraryData.length > 0) {
      initial[itineraryData[0].id] = true;
    }
    return initial;
  });

  const toggleDay = (dayId: string) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayId]: !prev[dayId]
    }));
  };

  const handleDownloadPDF = () => {
    generatePDF('itinerary');
  };

  return (
    <section id="itinerary" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Day-Wise Itinerary
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A detailed plan for each day of our journey through Rajasthan's cultural heritage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {itineraryData.map((day) => (
              <div
                key={day.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleDay(day.id)}
                  className="w-full flex justify-between items-center p-4 cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      {day.day}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {day.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {day.date}
                      </p>
                    </div>
                  </div>
                  {expandedDays[day.id] ? (
                    <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
                  )}
                </button>

                {expandedDays[day.id] && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <ul className="space-y-4">
                      {day.activities.map((activity) => (
                        <li 
                          key={activity.id}
                          className={`flex items-start ${
                            activity.highlight 
                              ? 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 pl-3 py-2 rounded-r' 
                              : ''
                          }`}
                        >
                          <div className="mt-0.5 mr-3 flex-shrink-0">
                            {activity.time && (
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock size={16} className="mr-1" />
                                <span>{activity.time}</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="text-gray-800 dark:text-gray-200">
                              {activity.description}
                            </p>
                            {activity.cost && (
                              <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
                                {activity.cost}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={handleDownloadPDF}
              className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Download Itinerary PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;