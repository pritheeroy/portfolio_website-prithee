import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxText2 } from './ExperienceStyles';

const data = [
  { role: 'Software Engineer Intern', employer: 'Manulife', date: 'JUL 2021 - SEPT 2021', description: ["Collaborated with a team of quantitative analysts to maintain and support development of quantitative investment strategy system (QISS) in Java (Spring Boot Framework) to support asset management.", "Developed 10+ features for QISS microsite, using Java and React.js, which increased quantitive analyst efficiency by 25%.", "Wrote SQL scripts for data reconciliation project to validate migrated data and created template used by 10+ engineers.", "» Tested 100+ API endpoints using Postman as a part of the annual penetration test.", "» Authored technical documentation to streamline on-boarding process, increasing productivity by 30% on average."]},
  { role: 'IT Automation Developer', employer: 'University of Toronto', date: 'SEPT 2021 - FEB 2022', description: ["Implemented Python scripts using Pandas to parse MS Excel sheets and extract data and load it into SharePoint.", " Setup continuous integration using Jenkins and developed pipelines containing Bash shell scripts to automate infrastructure provisioning.", "Wrote and performed unit and functional tests using Pytest to ensure all data was entered correctly.", "» Arranged and organized meetings with 50+ colleagues through MS Teams to upgrade and install new software."]},
  { role: 'IT Project Manager', employer: 'Votorantim', date: 'JUL 2021 - SEPT 2021', description: ["Spearheaded a $500k nationwide PC replacement project and expedited the projected completion date by 25%.", "Designed and executed Microsoft Powershell scripts to automate data collection and aggregation.", "Reimaged 100+ PCs and executed Microsoft Powershell scripts to add the PCs to the active directory.", "» Produced reports in Microsoft Power BI to display weekly PC replacement results to 35+ colleagues."]}
];

const Experience = () => (
  <Section id="experience">
    <SectionTitle>Experience</SectionTitle>
    
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.role}`}</BoxNum>
          <BoxText><b>{card.employer}</b></BoxText>
          <BoxText2>{card.date}</BoxText2>
          <BoxText2>» {card.description[0]}</BoxText2>
          <br/>
          <BoxText2>» {card.description[1]}</BoxText2>
          <br/>
          <BoxText2>» {card.description[2]}</BoxText2>
          <br/>
          <BoxText2>{card.description[3]}</BoxText2>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Experience;