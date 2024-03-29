import React from "react";
import { DiPython, DiReact, DiAndroid } from "react-icons/di";
import { SiDocker } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Img,
} from "./AboutMeStyles";

const AboutMe = () => (
  <Section id="about-me">
    <SectionDivider divider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      <Img src="/images/profilepic.jpg" />I am a <b>Computer Science</b> student
      at the <b>University of Toronto</b>, specializing in Machine Learning and
      Artificial Intelligence.
      <br />
      <br />
      I'm passionate about solving complex problems using data, hence my
      interest in Machine Learning. Currently, I am spending lots of time
      researching more about deep learning, neural networks, as well as DevOps,
      Site Reliability, and Infrastructure engineering. In my spare time, I like
      to listen to music and watch anime.
      <br /> <br />
      Here are some languages and technologies I have experience with:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Java, R, <br />
            SQL, Ruby, <br />
            Bash, C, <br />
            MongoDB, SQLite <br />
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
            Javascript (React.js), <br />
            HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Linux, Git, Github <br />
            Jenkins, Ansible, <br />
            Docker, Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Android, Tkinter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default AboutMe;
