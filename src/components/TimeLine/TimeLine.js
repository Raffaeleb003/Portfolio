import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
   <Section id='about'>
     <SectionTitle>About Me</SectionTitle>
     <SectionText>Hi there!👋 I'm Raffaele Balsamo, Front-End developer based in Berlin. <br />
     I'm a quite confident, naturally curious guy who is perpetually working on improving
     his knowledge about the design and coding beautifully simple things.
     <br />
     <br />
     I don't like to define myself by the work I've done, I define myself by the work I want to do, 
     so persistence together with the desire to keep learning new things is a fundamental part of my career as a developer. 💪
     <br />
     <br />
     Keep challenging myself doing interesting useful things that matter for the people
     and the pursuit of the development of new knowledge in a various number of areas over the course of my life and career, are the fuel that moves the engine. 🚀</SectionText>
   </Section>
  );
};

export default Timeline;
