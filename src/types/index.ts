export interface TravelOption {
  id: string;
  from: string;
  to: string;
  name: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  type: 'train' | 'bus' | 'car';
  class?: string;
  cost: string | number;
  isAlternative?: boolean;
}

export interface DayItinerary {
  id: string;
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  time?: string;
  description: string;
  cost?: string;
  highlight?: boolean;
}

export interface StayOption {
  id: string;
  name: string;
  location: string;
  price: string;
  features: string[];
  image: string;
  bookingUrl: string;
}

export interface BudgetItem {
  category: string;
  costPerPerson: string;
}