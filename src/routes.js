import React from 'react';
import Main from './pages/Main';
import Booking from './pages/Booking';
import Confirmation from './components/Confirmation';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/bookings/:listing_id',
    element: <Booking />,
  },
  {
    path: '/booking-confirmation',
    element: <Confirmation />,
  },
];

export default routes;
