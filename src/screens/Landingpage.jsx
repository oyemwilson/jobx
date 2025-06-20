import React, { useState, useEffect, useRef } from 'react';
import Herobanner from '../sections/homepage/Herobanner';
import Categories from '../sections/homepage/Categories';
import css from '../css/landingpage/landingpage.css';
import { Container } from 'react-bootstrap';
import Featureone from '../sections/homepage/Featureone';
import HowItWorks from '../sections/homepage/HowItWorks';
import Expertone from '../sections/homepage/Expertone';
import Fancybanner from '../sections/homepage/Fancybanner';
import Collaborations from '../sections/homepage/Collaborations';
import Partnerlogo from '../sections/homepage/Partnerlogo';
import Matched from '../sections/homepage/Matched';
import Numberone from '../sections/homepage/Numberone';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../config/api';

// Full-screen spinner CSS with greenish background
const spinnerStyles = `
  .spinner-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(7, 97, 7, 0.34);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  .spinner {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Landingpage = () => {
  const [isHeroLoading, setIsHeroLoading] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    // Inject spinner styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = spinnerStyles;
    document.head.appendChild(styleSheet);

    // Check images in Herobanner only
    const checkHeroImagesLoaded = () => {
      const images = heroRef.current?.querySelectorAll('img') || [];
      let loadedCount = 0;
      const totalImages = images.length;

      if (totalImages === 0) {
        setIsHeroLoading(false);
        return;
      }

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
          if (loadedCount === totalImages) {
            setIsHeroLoading(false);
          }
        } else {
          img.addEventListener('load', () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              setIsHeroLoading(false);
            }
          }, { once: true });
          img.addEventListener('error', () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              setIsHeroLoading(false);
            }
          }, { once: true });
        }
      });
    };

    checkHeroImagesLoaded();

    // Fallback to hide loader after 5 seconds
    const timer = setTimeout(() => {
      setIsHeroLoading(false);
    }, 5000);

    return () => {
      document.head.removeChild(styleSheet);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isHeroLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      <div className="hero-bg" style={{ position: 'relative' }}>
        <div ref={heroRef}>
          <Herobanner />
        </div>
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
  );
};

export default Landingpage;