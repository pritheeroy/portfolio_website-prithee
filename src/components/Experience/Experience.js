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
      "Machine Learning Engineer Intern on the ML Infrastructure team at Borealis AI, a research institute at RBC, working on build-ing machine learning-based software solutions for solving important problems as well as optimizing algorithms and prototypical solutions for efficient implementation.",
      "Working with the following languages/technologies: Python, AWS, Bash, Jenkins, Docker, Kubernetes, Kubeflow, OpenShift, UrbanCode Deploy, Kibana, SLURM",
    ],
  },
  {
    role: "Software Engineer Intern",
    employer: "Manulife",
    date: "MAY 2022 - AUG 2022",
    description: [
      "Collaborated with a team of quantitative analysts to maintain and support development of quantitative investment strategy system (QISS) in Java (Spring Boot Framework) to support asset management.",
      "Developed 10+ features for QISS microsite, using Java and React.js, which increased quantitive analyst efficiency by 25%.",
      "Wrote SQL scripts for data reconciliation project to validate migrated data and created template used by 10+ engineers.",
      "» Tested 100+ API endpoints using Postman as a part of the annual penetration test.",
      "» Authored technical documentation to streamline on-boarding process, increasing productivity by 30% on average.",
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
