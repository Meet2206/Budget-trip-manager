import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TravelSection from './components/TravelSection';
import ItinerarySection from './components/ItinerarySection';
import StaySection from './components/StaySection';
import BudgetSection from './components/BudgetSection';
import Footer from './components/Footer';

// Data imports
import { travelOptions } from './data/travelData';
import { itineraryData } from './data/itineraryData';
import { stayOptions } from './data/stayData';
import { budgetItems, totalBudget } from './data/budgetData';

function App() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Effect to add or remove dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Update title
  useEffect(() => {
    document.title = 'Rajasthan Adventure - Travel Itinerary';
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <TravelSection travelOptions={travelOptions} />
      <ItinerarySection itineraryData={itineraryData} />
      <StaySection stayOptions={stayOptions} />
      <BudgetSection budgetItems={budgetItems} totalBudget={totalBudget} />
      <Footer />
    </div>
  );
}

export default App;