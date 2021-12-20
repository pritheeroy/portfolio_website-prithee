import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Img} from './AboutMeStyles';

const AboutMe = () =>  (
  <Section id="about-me">
    <SectionDivider divider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
    <Img src="/images/profilepic.jpg"/>
    I am a <b>Computer Science</b> and <b>Statistics</b> student at the <b>University of Toronto</b>, specializing in Machine Learning and Artificial Intelligence. I am currently working in the Faculty of Nursing at the <b>University of Toronto</b> as a <b>Python Automation Engineer</b>.
    <br/><br/>  
    I'm passionate about solving complex problems using data, hence my interest in Machine Learning. Currently, I am spending lots of time researching more about deep learning and neural nets. In my spare time, I like to listen to music and watch anime.
    <br/> <br/>  
    Here are some technologies I have experience with:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python,
            Java,
            R, <br />
            Ruby, 
            Node.js,
            C, <br />
            MongoDB, SQL, <br />
            SQLite, PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Javascript (React.js, Angular.js), <br />
            HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Android, 
            Tkinter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
  
);

export default AboutMe;