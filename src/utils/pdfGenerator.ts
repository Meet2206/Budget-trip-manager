import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export const generatePDF = (type: 'budget' | 'itinerary') => {
  const doc = new jsPDF();
  
  // Add title with styling
  doc.setFillColor(249, 115, 22); // Orange background
  doc.rect(0, 0, doc.internal.pageSize.width, 40, 'F');
  
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text(type === 'budget' ? 'Budget Summary' : 'Travel Itinerary', 105, 25, { align: 'center' });
  
  // Add decorative elements
  doc.setDrawColor(249, 115, 22);
  doc.setLineWidth(2);
  doc.line(20, 45, doc.internal.pageSize.width - 20, 45);
  
  if (type === 'budget') {
    generateBudgetPDF(doc);
  } else {
    generateItineraryPDF(doc);
  }
  
  // Save the PDF
  doc.save(`rajasthan-adventure-${type}.pdf`);
};

const generateBudgetPDF = (doc: jsPDF) => {
  const budgetData = [
    ['Travel', '₹800–1,000'],
    ['Accommodation (4 nights)', '₹1,600'],
    ['Entry Fees & Activities', '₹400–600'],
    ['Misc. (Transport/Snacks)', '₹200–300'],
    ['Total', '₹2,500–3,000']
  ];

  doc.autoTable({
    startY: 60,
    head: [['Expense Category', 'Cost Per Person']],
    body: budgetData,
    theme: 'grid',
    headStyles: { 
      fillColor: [249, 115, 22],
      textColor: 255,
      fontSize: 12,
      fontStyle: 'bold'
    },
    styles: { 
      halign: 'center',
      fontSize: 11,
      cellPadding: 5
    },
    alternateRowStyles: {
      fillColor: [255, 237, 213]
    }
  });
};

const generateItineraryPDF = (doc: jsPDF) => {
  const itineraryData = [
    ['Day 1', 'Vadodara → Nathdwara → Udaipur'],
    ['Day 2', 'Udaipur Sightseeing'],
    ['Day 3', 'Around Udaipur'],
    ['Day 4', 'Udaipur → Chittorgarh'],
    ['Day 5', 'Chittorgarh Fort Exploration'],
    ['Day 6', 'Relax + Return']
  ];

  doc.autoTable({
    startY: 60,
    head: [['Day', 'Activities']],
    body: itineraryData,
    theme: 'grid',
    headStyles: { 
      fillColor: [249, 115, 22],
      textColor: 255,
      fontSize: 12,
      fontStyle: 'bold'
    },
    styles: { 
      halign: 'left',
      fontSize: 11,
      cellPadding: 5
    },
    alternateRowStyles: {
      fillColor: [255, 237, 213]
    }
  });
};