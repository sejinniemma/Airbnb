// BookingConfirmation.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { listing_id, clientName } = location.state || {};

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' gutterBottom>
        Booking Confirmation
      </Typography>
      <Typography variant='h6'>Thank you, {clientName}!</Typography>
      <Typography>
        Your booking for Listing ID: {listing_id} has been confirmed.
      </Typography>
      <Button variant='contained' color='primary' onClick={() => navigate('/')}>
        Go to Homepage
      </Button>
    </Container>
  );
};

export default Confirmation;
