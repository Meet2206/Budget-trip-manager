import React from 'react';
import { TravelOption } from '../types';
import { Train, Bus } from 'lucide-react';

interface TravelSectionProps {
  travelOptions: TravelOption[];
}

const TravelSection: React.FC<TravelSectionProps> = ({ travelOptions }) => {
  // Group travel options by route
  const routeMap = new Map<string, TravelOption[]>();
  
  travelOptions.forEach(option => {
    const routeKey = `${option.from}-${option.to}`;
    if (!routeMap.has(routeKey)) {
      routeMap.set(routeKey, []);
    }
    routeMap.get(routeKey)?.push(option);
  });

  // Convert map to array for rendering
  const routes = Array.from(routeMap).map(([key, options]) => ({
    route: key,
    options: options
  }));

  return (
    <section id="travel" className="py-16 bg-amber-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Travel Itinerary</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our journey through Rajasthan's cultural treasures with the most convenient and budget-friendly transport options.
          </p>
        </div>

        <div className="space-y-8">
          {routes.map(({ route, options }) => {
            const [from, to] = route.split('-');
            const mainOption = options.find(opt => !opt.isAlternative) || options[0];
            const alternativeOptions = options.filter(opt => opt.isAlternative);

            return (
              <div 
                key={route} 
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-amber-500 transition-transform duration-300 hover:translate-y-[-4px]"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-0">
                    {from} → {to}
                  </h3>
                </div>

                {/* Main option */}
                <div className="bg-amber-100 dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    {mainOption.type === 'train' ? (
                      <Train className="mr-2 text-amber-600 dark:text-amber-400" size={20} />
                    ) : (
                      <Bus className="mr-2 text-amber-600 dark:text-amber-400" size={20} />
                    )}
                    <span className="font-medium text-gray-800 dark:text-gray-100">{mainOption.name}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Date & Time</div>
                      <div className="text-gray-800 dark:text-gray-100">
                        {mainOption.date}, {mainOption.departureTime} → {mainOption.arrivalTime}
                      </div>
                    </div>
                    
                    {mainOption.class && (
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Class</div>
                        <div className="text-gray-800 dark:text-gray-100">{mainOption.class}</div>
                      </div>
                    )}
                    
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Cost</div>
                      <div className="text-gray-800 dark:text-gray-100">{mainOption.cost}</div>
                    </div>
                  </div>
                </div>

                {/* Alternative options */}
                {alternativeOptions.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="h-px bg-gray-300 dark:bg-gray-500 flex-grow mr-3"></div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">OR</span>
                      <div className="h-px bg-gray-300 dark:bg-gray-500 flex-grow ml-3"></div>
                    </div>
                    
                    {alternativeOptions.map(option => (
                      <div key={option.id} className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          {option.type === 'train' ? (
                            <Train className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
                          ) : (
                            <Bus className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
                          )}
                          <span className="font-medium text-gray-700 dark:text-gray-200">{option.name}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Date & Time</div>
                            <div className="text-gray-700 dark:text-gray-200">
                              {option.date}, {option.departureTime} → {option.arrivalTime}
                            </div>
                          </div>
                          
                          {option.class && (
                            <div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Class</div>
                              <div className="text-gray-700 dark:text-gray-200">{option.class}</div>
                            </div>
                          )}
                          
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Cost</div>
                            <div className="text-gray-700 dark:text-gray-200">{option.cost}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelSection;