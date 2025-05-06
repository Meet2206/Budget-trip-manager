import React from 'react';
import { BudgetItem } from '../types';
import { Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

interface BudgetSectionProps {
  budgetItems: BudgetItem[];
  totalBudget: string;
}

const BudgetSection: React.FC<BudgetSectionProps> = ({ budgetItems, totalBudget }) => {
  const handleDownloadPDF = () => {
    generatePDF('budget');
  };

  return (
    <section id="budget" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Budget Summary
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A breakdown of estimated expenses for our 6-day Rajasthan adventure.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="bg-amber-500 p-4">
              <h3 className="text-xl font-semibold text-white text-center">
                Cost Overview (Per Person)
              </h3>
            </div>
            
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Expense Category
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Cost Per Person
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {budgetItems.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {item.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-800 dark:text-gray-200">
                          {item.costPerPerson}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-amber-50 dark:bg-amber-900/20">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-white">
                        Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right text-amber-600 dark:text-amber-400">
                        {totalBudget} ✅
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <button 
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  Download Budget PDF
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-amber-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-amber-500">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Budget Notes:</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 pl-6 list-disc">
              <li>Budget is estimated for a group of 4 travelers</li>
              <li>Accommodation costs are based on sharing rooms</li>
              <li>Food expenses can vary based on preferences</li>
              <li>Keep additional ₹500 as emergency funds</li>
              <li>Most temples and some attractions have free entry</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;