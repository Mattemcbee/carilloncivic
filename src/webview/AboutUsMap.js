// AboutUsMap.js
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import CardTemplate from './AboutUsTest';
import ABOUT from '../text/AboutText.js';

const AboutUsMap = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    // Function to check if the element is in the viewport
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-section');

      sections.forEach((section, index) => {
        if (isInViewport(section)) {
          if (!visibleSections.includes(index)) {
            setVisibleSections((prevVisibleSections) => [...prevVisibleSections, index]);
          }
        } else {
          if (visibleSections.includes(index)) {
            setVisibleSections((prevVisibleSections) =>
              prevVisibleSections.filter((item) => item !== index)
            );
          }
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  return (
    <Row id="about-us-map" 
    // style={{backgroundColor:'red'}}
    >
    <Col xs='12'>
      {ABOUT.map((about, index) => (
        <div
          key={index}
          className={`fade-section ${visibleSections.includes(index) ? 'is-visible' : ''}`}
        >
          <CardTemplate about={about} index={index} />
        </div>
      ))}
      </Col >
    </Row >
  );
};

export default AboutUsMap;
