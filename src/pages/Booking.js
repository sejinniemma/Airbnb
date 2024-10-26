// Booking.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Stack } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const { listing_id } = useParams(); // Extract listing_id from URL params
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [arrival_date, setArrival_date] = useState('');
  const [departure_date, setDeparture_date] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5001/bookings',
        {
          listing_id,
          arrival_date,
          departure_date,
          name,
          phone,
          mobile,
          postalAddress,
          homeAddress,
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // 요청이 성공적일 때 처리
      if (response.status === 201) {
        console.log('Booking saved:', response.data);
        navigate('/booking-confirmation', {
          state: { listing_id, clientName: name },
        });
      } else {
        console.error('Failed to save booking');
        alert('Failed to save booking');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
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
          Booking for Listing ID: {listing_id}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label='Start Date'
              type='date'
              required
              value={arrival_date}
              onChange={(e) => setArrival_date(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label='End Date'
              type='date'
              required
              value={departure_date}
              onChange={(e) => setDeparture_date(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label='Client Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
