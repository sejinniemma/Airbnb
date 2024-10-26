import React, { useEffect, useState } from 'react';
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FaAirbnb } from 'react-icons/fa';
import { useTheme } from '@emotion/react';
import Slick from '../components/Slick';
import axios from 'axios';
// Property types for the dropdown
const propertyTypes = ['Apartment', 'House', 'Villa', 'Studio', 'Penthouse'];

export default function Main() {
  const theme = useTheme();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [listings, setListings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = listings.filter((property) => {
      return (
        property.address?.street
          .toLowerCase()
          .includes(location.toLowerCase()) &&
        (propertyType === '' || property.property_type === propertyType) &&
        (bedrooms === '' || property.bedrooms === Number(bedrooms))
      );
    });
    setListings(filtered);
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:5001/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  console.log(`listings =>`, listings && listings);
  return (
    <Container maxWidth='lg'>
      <Stack alignItems='center' justifyContent='center' flexDirection='row'>
        <FaAirbnb
          style={{
            fontFamily: 'Pretendard-Medium',
            fontSize: '50px',
            marginRight: '10px',
            color: theme.palette.primary.main,
          }}
        />
        <Typography
          sx={{ fontFamily: 'Pretendard-Medium', fontSize: 45, mt: 1 }}
        >
          Airbnb
        </Typography>
      </Stack>

      <Slick />
      <form onSubmit={handleSubmit}>
        <TextField
          label='Location'
          variant='outlined'
          fullWidth
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          margin='normal'
        />

        <TextField
          label='Type of Property'
          variant='outlined'
          select
          fullWidth
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          margin='normal'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {propertyTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label='Number of Bedrooms'
          variant='outlined'
          select
          fullWidth
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          margin='normal'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {[1, 2, 3, 4, 5].map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </TextField>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ mt: 2 }}
        >
          Search
        </Button>
      </form>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {listings &&
          listings.map((property, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant='h6'>
                    <Link
                      to={`/bookings/${property._id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontFamily: 'Pretendard',
                      }}
                    >
                      {property?.address?.street}
                    </Link>
                  </Typography>
                  <Typography
                    color='textSecondary'
                    sx={{ fontFamily: 'Pretendard' }}
                  >
                    {property.summary}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Pretendard-Medium' }}>
                    Daily Price: ${property?.price['$numberDecimal']}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Pretendard-Medium' }}>
                    Rating: {property?.review_scores?.review_scores_rating}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

const initialProperties = [
  {
    id: 1,
    name: 'Cozy Apartment in Barcelona',
    summary: 'A lovely apartment located in the heart of the city.',
    dailyPrice: 120,
    review_scores: { review_scores_rating: 4.8 },
    location: 'Barcelona',
    type: 'Apartment',
    bedrooms: 3,
    listing_id: '10083468',
  },
  {
    id: 2,
    name: 'Modern House in Barcelona',
    summary: 'A modern house with all amenities.',
    dailyPrice: 250,
    review_scores: { review_scores_rating: 4.9 },
    location: 'Barcelona',
    type: 'House',
    bedrooms: 2,
    listing_id: '10083469',
  },
  {
    id: 3,
    name: 'Charming Apartment in Madrid',
    summary: 'A charming apartment in a vibrant neighborhood.',
    dailyPrice: 90,
    review_scores: { review_scores_rating: 4.5 },
    location: 'Madrid',
    type: 'Apartment',
    bedrooms: 1,
    listing_id: '10083470',
  },
  {
    id: 4,
    name: 'Luxury Villa in Barcelona',
    summary: 'A luxury villa with stunning views.',
    dailyPrice: 450,
    review_scores: { review_scores_rating: 5.0 },
    location: 'Barcelona',
    type: 'Villa',
    bedrooms: 4,
    listing_id: '10083471',
  },
  {
    id: 5,
    name: 'Stylish Apartment in Madrid',
    summary: 'A stylish apartment close to the city center.',
    dailyPrice: 150,
    review_scores: { review_scores_rating: 4.6 },
    location: 'Madrid',
    type: 'Apartment',
    bedrooms: 3,
    listing_id: '10083472',
  },
];
