import { FiGrid, FiAlignJustify, FiBriefcase, FiCoffee } from 'react-icons/fi';

export const navigationOptions = [
  {
    to: '/',
    name: 'DASHBOARD',
    icon: FiGrid,
    active: false,
  },
  {
    to: '/categories',
    name: 'CATEGORIES',
    icon: FiBriefcase,
    active: true,
  },
  {
    to: '/products',
    name: 'PRODUCTS',
    icon: FiAlignJustify,
    active: false,
  },
];
