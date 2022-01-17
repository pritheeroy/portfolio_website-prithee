import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! My name's Prithee. <br />
        Welcome to my personal portfolio
      </SectionTitle>
      <SectionText>
        I'm a software engineer based in Toronto, Canada. I have profound passion in full-stack software development, DevOps, deep learning, artificial intelligence, and everything in between.
      </SectionText>
      <Button onClick={() => window.location = "mailto:prithee.roy@mail.utoronto.ca"}>Say Hello</Button>
    </LeftSection>
  </Section>
);

export default Hero;