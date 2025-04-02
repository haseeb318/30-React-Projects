import React from 'react';
import { Box, Card, CardContent, List, ListItem, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS

// Pricing plan data
const pricingPlans = [
  {
    title: 'Single',
    description: 'Ideal solution for beginners.',
    originalPrice: 1390,
    discountedPrice: 290,
    renewalPrice: 690,
    features: [
      '1 website',
      'Managed WordPress Hosting',
      '50 GB SSD storage',
      'Hostinger Website Builder',
      'Free automatic website migration',
    ],
  },
  {
    title: 'Premium',
    description: 'Perfect for personal websites.',
    originalPrice: 1990,
    discountedPrice: 490,
    renewalPrice: 990,
    features: [
      'Up to 100 websites',
      'Managed WordPress Hosting',
      '100 GB SSD storage',
      'Free Email',
      'Free Domain (for 1 year)',
    ],
  },
  {
    title: 'Business',
    description: 'Optimized for small businesses.',
    originalPrice: 2590,
    discountedPrice: 790,
    renewalPrice: 1290,
    features: [
      'Up to 100 websites',
      'Managed WordPress Hosting',
      '200 GB SSD storage',
      'Free Daily Backups',
      'Free CDN',
    ],
  },
  {
    title: 'Enterprise',
    description: 'For large scale websites.',
    originalPrice: 3990,
    discountedPrice: 1490,
    renewalPrice: 1990,
    features: [
      'Unlimited websites',
      'Priority Support',
      'Unlimited SSD storage',
      'Free SSL (for all websites)',
      'Dedicated IP address',
    ],
  },
];

const PricePlan = () => {
  const isMobile = useMediaQuery('(max-width: 900px)'); // Check if the screen is mobile size

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Heading of Price Plan */}
      <Grid>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { md: '2rem', xs: '1.5rem' },
            fontWeight: 'bold',
            color: '#2F1C64',
            paddingX: 6,
            paddingTop: 5,
           
          }}
        >
          Pick your perfect plan
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', paddingY: 6, color: '#2F1C64', fontSize: '1rem' }}
        >
          Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free.
        </Typography>
      </Grid>

      {/* Responsive View - Carousel for Mobile, Grid for Desktop */}
      {isMobile ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          emulateTouch
        >
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              sx={{
                width: '90%',
                height: '700px',
                background: '#FAFBFF',
                border: plan.title === 'Premium'?'2px solid #8C85FF':'2px solid #dee5fc',
                borderRadius: 3,
                paddingY: plan.title === 'Premium'?0:6,
                paddingX: plan.title === 'Premium'?0:2,
                color: '#2F1C64',
                margin: '0 auto',
              }}
            >
              {/* adding  Most popular heading in premium plan  */}
              {plan.title === "Premium"? <Typography sx={{backgroundColor:"#8C85FF",
                color:"white", textAlign:'center', height: "2rem" ,paddingY:1, fontSize:"14px"
              }}>MOST POPULAR</Typography>:""}
              
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    paddingBottom: 1,
                    paddingTop:plan.title === 'Premium' ? 2:0,
                    textAlign: 'left',
                    color: plan.title === 'Premium' ? '#673de6' : '#2F1C64', // Dynamic color for Premium
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography variant="body2" sx={{ paddingBottom: 4, textAlign: 'left' }}>
                  {plan.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: 'line-through', color: 'gray', textAlign: 'left' }}
                >
                  Rs. {plan.originalPrice}
                </Typography>
                <Typography sx={{ paddingY: 1, textAlign: 'left', fontSize: '1.5rem' }}>
                  Rs{' '}
                  <span style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'left' }}>
                    {plan.discountedPrice}
                  </span>
                  /mo
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: plan.title === 'Premium' ? '#673de6' : '#673de6', // Blue button for Premium
                    backgroundColor: plan.title === 'Premium' ? '#673de6' : 'transparent', // Blue background for Premium
                    color: plan.title === 'Premium' ? 'white' : '#673de6',
                    width: '100%',
                    paddingY: 1,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    marginTop: 4,
                    marginBottom: 2,
                    border: 2,
                  }}
                >
                  Choose Plan
                </Button>
                <Typography sx={{ fontSize: '14px', marginBottom: 4, color: 'gray', textAlign: 'left' }}>
                  Rs. {plan.renewalPrice}/mo when you renew
                </Typography>
                <hr />
                <List>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex}>
                      <Typography component="span" sx={{ color: 'green', marginRight: 1, fontSize: '14px' }}>
                        ✔
                      </Typography>
                      {feature}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {pricingPlans.map((plan, index) => (
            
            <Card
              key={index}
              sx={{
                width: '20%',
                height: 'auto',
                background: '#FAFBFF',
                border: plan.title === 'Premium'?'2px solid #8C85FF':'2px solid #dee5fc',
                borderRadius: 3,
                paddingY: plan.title === 'Premium'?0:6,
                paddingX: plan.title === 'Premium'?0:2,
                color: '#2F1C64',
                marginY:plan.title === 'Premium'?0:4
              }}
            >
               {/* adding  Most popular heading in premium plan  */}
              {plan.title === "Premium"? <Typography sx={{
                backgroundColor:"#8C85FF",
                color:"white", textAlign:'center', 
                height: "1.2rem" ,paddingY:1, fontSize:"14px"
              }}>MOST POPULAR</Typography>:""}

              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    paddingTop:plan.title === 'Premium' ? 6:0,
                    paddingBottom: 1,
                    color: plan.title === 'Premium' ? '#673de6' : '#2F1C64', // Dynamic color for Premium
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography variant="body2" sx={{ paddingBottom: 4 }}>
                  {plan.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: 'line-through', color: 'gray' }}
                >
                  Rs. {plan.originalPrice}
                </Typography>
                <Typography sx={{ paddingY: 1, fontSize: '1.5rem' }}>
                  Rs{' '}
                  <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                    {plan.discountedPrice}
                  </span>
                  /mo
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: plan.title === 'Premium' ? '#673de6' : '#673de6', // Blue button for Premium
                    backgroundColor: plan.title === 'Premium' ? '#673de6' : 'transparent', // Blue background for Premium
                    color: plan.title === 'Premium' ? 'white' : '#673de6',
                    width: '100%',
                    paddingY: 1,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    marginTop: 4,
                    marginBottom: 2,
                    border: 2,
                  }}
                >
                  Choose Plan
                </Button>
                <Typography sx={{ fontSize: '14px', marginBottom: 4, color: 'gray' }}>
                  Rs. {plan.renewalPrice}/mo when you renew
                </Typography>
                <hr />
                <List sx={{ marginY: 5  }}>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} >
                      <Typography component="span" sx={{ color: 'green', fontSize: '14px' ,paddingX:2}}>
                        ✔
                      </Typography>
                      {feature}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default PricePlan;
