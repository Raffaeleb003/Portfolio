import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> 
        Raffaele Balsamo's Portfolio
      </SectionTitle>
         <SectionText>
           My purpose is to do important things that matter, for people and the planet, to increase my knowledge and use my skills to implement simple and fascinating design.
         </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;