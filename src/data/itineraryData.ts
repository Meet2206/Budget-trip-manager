import { DayItinerary } from '../types';

export const itineraryData: DayItinerary[] = [
  {
    id: 'day1',
    day: 1,
    date: 'May 28',
    title: 'Vadodara → Nathdwara → Udaipur',
    activities: [
      {
        id: 'd1a1',
        time: '7:20 PM (28 May)',
        description: 'Depart from Vadodara by Okha-Nathdwara Express',
        highlight: true
      },
      {
        id: 'd1a2',
        time: '6:25 AM (29 May)',
        description: 'Arrive at Nathdwara'
      },
      {
        id: 'd1a3',
        time: '7:30 AM or 9:15 AM',
        description: 'Visit Shreenathji Temple',
        cost: 'Free Entry'
      },
      {
        id: 'd1a4',
        description: 'Explore Nathdwara Market'
      },
      {
        id: 'd1a5',
        time: 'Around 4:00 PM',
        description: 'Travel to Udaipur'
      }
    ]
  },
  {
    id: 'day2',
    day: 2,
    date: 'May 29',
    title: 'Udaipur Sightseeing',
    activities: [
      {
        id: 'd2a1',
        description: 'City Palace',
        cost: '₹300'
      },
      {
        id: 'd2a2',
        description: 'Jagdish Temple',
        cost: 'Free'
      },
      {
        id: 'd2a3',
        description: 'Lake Pichola boat ride',
        cost: '₹200–400'
      },
      {
        id: 'd2a4',
        description: 'Bagore ki Haveli',
        cost: '₹60–150'
      }
    ]
  },
  {
    id: 'day3',
    day: 3,
    date: 'May 30',
    title: 'Around Udaipur',
    activities: [
      {
        id: 'd3a1',
        description: 'Sajjangarh Fort',
        cost: '₹130 total'
      },
      {
        id: 'd3a2',
        description: 'Fateh Sagar Lake'
      },
      {
        id: 'd3a3',
        description: 'Nehru Garden'
      }
    ]
  },
  {
    id: 'day4',
    day: 4,
    date: 'May 31',
    title: 'Udaipur → Chittorgarh',
    activities: [
      {
        id: 'd4a1',
        description: 'Morning option: Bandra-Udaipur Express (10:30 AM)',
        highlight: true
      },
      {
        id: 'd4a2',
        description: 'Evening option: Mewar Express (6:45 PM)',
        highlight: true
      },
      {
        id: 'd4a3',
        description: 'Check into Chittorgarh budget stay'
      }
    ]
  },
  {
    id: 'day5',
    day: 5,
    date: 'June 1',
    title: 'Chittorgarh Fort Exploration',
    activities: [
      {
        id: 'd5a1',
        description: 'Fort Entry',
        cost: '₹40'
      },
      {
        id: 'd5a2',
        description: 'Visit Vijay Stambh'
      },
      {
        id: 'd5a3',
        description: 'Explore Padmini Palace'
      },
      {
        id: 'd5a4',
        description: 'Tour other fort attractions'
      }
    ]
  },
  {
    id: 'day6',
    day: 6,
    date: 'June 2',
    title: 'Relax + Return',
    activities: [
      {
        id: 'd6a1',
        description: 'Morning leisure time in Chittorgarh'
      },
      {
        id: 'd6a2',
        time: '7:00 PM',
        description: 'Depart from Chittorgarh by Mys Humsafar Express',
        highlight: true
      },
      {
        id: 'd6a3',
        time: '11:30 PM',
        description: 'Arrive at Vadodara'
      }
    ]
  }
];