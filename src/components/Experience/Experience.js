import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, BoxText2 } from "./ExperienceStyles";

const data = [
  {
    role: "Machine Learning Engineer Intern",
    employer: "Borealis AI",
    date: "JAN 2023 - PRESENT",
    description: [
      "Machine Learning Engineer Intern at Borealis AI,a research institute at RBC,building machine learning‐based software solutions for solving important problems as well as optimizing algorithms and prototypical solutions for efficient implementation.",
    ],
  },
  {
    role: "Automation Developer Intern",
    employer: "University of Toronto",
    date: "SEPT 2021 - FEB 2022",
    description: [
      "Developed Python scripts using Pandas to parse 100+ MS Excel sheets and extract data and load it into SharePoint.",
      " Setup continuous integration using Jenkins and engineered pipelines containing Bash shell scripts to automate infrastructure provisioning, increasing overall efficiency by 75%.",
      "Wrote and performed unit and functional tests using Pytest to ensure all data was entered correctly.",
      "» Updated 20+ SharePoint lists to comply with user inputted information from InfoPath forms.",
    ],
  },
];

const Experience = () => (
  <Section id="experience">
    <SectionTitle>Experience</SectionTitle>

    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.role}`}</BoxNum>
          <BoxText>
            <b>{card.employer}</b>
          </BoxText>
          <BoxText2>{card.date}</BoxText2>
          <BoxText2>» {card.description[0]}</BoxText2>
          <br />
          <BoxText2>» {card.description[1]}</BoxText2>
          <br />
          <BoxText2>» {card.description[2]}</BoxText2>
          <br />
          <BoxText2>{card.description[3]}</BoxText2>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Experience;
