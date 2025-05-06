import { TravelOption } from '../types';

export const travelOptions: TravelOption[] = [
  {
    id: 't1',
    from: 'Vadodara',
    to: 'Nathdwara',
    name: 'Okha-Nathdwara Express',
    date: '28 May',
    departureTime: '7:20 PM',
    arrivalTime: '6:25 AM',
    type: 'train',
    class: 'Sleeper Class',
    cost: '₹315'
  },
  {
    id: 't2',
    from: 'Nathdwara',
    to: 'Udaipur',
    name: 'Shrinath Solitaire Bus',
    date: '29 May',
    departureTime: '2:30 PM',
    arrivalTime: '3:25 PM',
    type: 'bus',
    class: 'Volvo A/C Seater',
    cost: '₹100–150'
  },
  {
    id: 't3',
    from: 'Nathdwara',
    to: 'Udaipur',
    name: 'Shrinath Solitaire',
    date: '29 May',
    departureTime: '10:30 PM',
    arrivalTime: '11:30 PM',
    type: 'bus',
    class: 'A/C Sleeper',
    cost: '₹100–150',
    isAlternative: true
  },
  {
    id: 't4',
    from: 'Udaipur',
    to: 'Chittorgarh',
    name: 'Bandra-Udaipur Express',
    date: '31 May',
    departureTime: '10:30 AM',
    arrivalTime: '12:30 PM',
    type: 'train',
    cost: '₹110'
  },
  {
    id: 't5',
    from: 'Udaipur',
    to: 'Chittorgarh',
    name: 'Mewar Express',
    date: '31 May',
    departureTime: '6:45 PM',
    arrivalTime: '8:45 PM',
    type: 'train',
    cost: '₹110',
    isAlternative: true
  },
  {
    id: 't6',
    from: 'Chittorgarh',
    to: 'Vadodara',
    name: 'Mys Humsafar Express',
    date: '2 June',
    departureTime: '7:00 PM',
    arrivalTime: '11:30 PM',
    type: 'train',
    cost: '₹315'
  }
];