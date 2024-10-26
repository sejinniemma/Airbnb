// Booking.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Stack } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const Booking = () => {
  const { listingId } = useParams(); // Extract listingId from URL params
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to save the booking data goes here
    // Example: API call to save booking data

    // Redirect to confirmation page after submission
    navigate('/booking-confirmation', { state: { listingId, clientName } });
  };

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: "url('/images/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        maxWidth='sm'
        sx={{
          bgcolor: ' rgba(255, 255, 255, 0.7)',
          p: 2,
          borderRadius: '20px',
        }}
      >
        <Typography
          sx={{ fontFamily: 'Pretendard-Medium', fontSize: '40px' }}
          gutterBottom
        >
          Booking for Listing ID: {listingId}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label='Start Date'
              type='date'
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label='End Date'
              type='date'
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label='Client Name'
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <TextField
              label='Email Address'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label='Daytime Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              label='Mobile Number'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <TextField
              label='Postal Address'
              value={postalAddress}
              onChange={(e) => setPostalAddress(e.target.value)}
            />
            <TextField
              label='Home Address'
              value={homeAddress}
              onChange={(e) => setHomeAddress(e.target.value)}
            />
            <Button type='submit' variant='contained' color='primary'>
              Confirm Booking
            </Button>
          </Stack>
        </form>
      </Container>
    </Stack>
  );
};

export default Booking;
