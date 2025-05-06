import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? darkMode
            ? 'bg-gray-900 shadow-md'
            : 'bg-white shadow-md'
          : darkMode
          ? 'bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Rajasthan Adventure
          </h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className={`flex space-x-6 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
              <li>
                <button
                  onClick={() => scrollToSection('travel')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('itinerary')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Itinerary
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stays')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Stays
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('budget')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Budget
                </button>
              </li>
            </ul>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-amber-100 dark:bg-gray-700 text-amber-600 dark:text-amber-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden mt-4 pt-4 border-t ${darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-800'}`}>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('travel')}
                  className="block w-full text-left py-2 hover:text-amber-600 transition-colors"
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('itinerary')}
                  className="block w-full text-left py-2 hover:text-amber-600 transition-colors"
                >
                  Itinerary
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stays')}
                  className="block w-full text-left py-2 hover:text-amber-600 transition-colors"
                >
                  Stays
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('budget')}
                  className="block w-full text-left py-2 hover:text-amber-600 transition-colors"
                >
                  Budget
                </button>
              </li>
              <li className="flex items-center justify-between">
                <span>Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-amber-100 dark:bg-gray-700 text-amber-600 dark:text-amber-300"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;