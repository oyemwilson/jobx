import React from 'react'
import Herobanner from '../sections/homepage/Herobanner'
import Categories from '../sections/homepage/Categories'
import css from '../css/landingpage/landingpage.css'
import { Container } from 'react-bootstrap'
import Featureone from '../sections/homepage/Featureone'
import HowItWorks from '../sections/homepage/HowItWorks'
import Expertone from '../sections/homepage/Expertone'
import Fancybanner from '../sections/homepage/Fancybanner'
import Collaborations from '../sections/homepage/Collaborations'
import Partnerlogo from '../sections/homepage/Partnerlogo'
import Matched from '../sections/homepage/Matched'
import Numberone from '../sections/homepage/Numberone'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { API_BASE_URL } from '../config/api'

const Landingpage = () => {

  // useEffect(() => {
  //   fetch('https://your-hosted-api.com/health')
  //     .then(response => {
  //       console.log('Raw response:', response);
  //       return response.text(); // Get raw response instead of JSON
  //     })
  //     .then(data => console.log('Response data:', data))
  //     .catch(err => console.error('API Error:', err));
  // }, []);
  
  // useEffect(() => {
  //   const testLogin = async () => {
  //     const credentials = {
  //       email: 'john@example.com', // Replace with a valid email
  //       password: '123456',  // Replace with a valid password
  //     };

  //     try {
  //       const response = await fetch(`${API_BASE_URL}/api/users/login`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(credentials),
  //       });

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || 'Login failed');
  //       }

  //       const data = await response.json();
  //       console.log('Login successful:', data);
  //     } catch (err) {
  //       console.error('Login error:', err.message);
  //     }
  //   };

  //   testLogin();
  // }, []);
  
  return (
    <>
      <div className='hero-bg'>
        <Herobanner />
      </div>
      <Categories />
      <Featureone />
      <HowItWorks />
      <Expertone />
      <Fancybanner />
      <Partnerlogo />
      <Collaborations />
      <Numberone />
      <Matched />
    </>
  )
}

export default Landingpage