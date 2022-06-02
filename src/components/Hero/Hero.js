import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> 
        Raffaele Balsamo's <br /> Portfolio
      </SectionTitle>
         <SectionText>
           My purpose is to do important and useful things that matter, for people and the society. To increase my knowledge and use my skills to implement simple and fascinating design.
         </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;