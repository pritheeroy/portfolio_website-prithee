import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxText2 } from './ExperienceStyles';

const data = [
  { role: 'Python Automation Engineer', employer: 'University of Toronto', date: 'SEPT 2021 - PRESENT', description: ["Implemented Python scripts using Pandas to parse MS Excel sheets and extract data and load it into SharePoint.", "Wrote and performed unit and functional tests to ensure all data was entered correctly.", "Arranged and organized meetings with 50+ colleagues through MS Teams to upgrade and install new software.", "» Monitored and responded to incoming requests related to IT issues, maintained computer systems and acted as support."]},
  { role: 'Junior Project Manager', employer: 'Votorantim', date: 'JUL 2021 - SEPT 2021', description: ["Spearheaded a $500k nationwide PC replacement project and expedited the projected completion date by 25%.", "Designed and implemented Microsoft Powershell scripts to automate data collection and aggregation.", "Reimaged 100+ PCs and added newly re-imaged PCs to the backend active directory with updated information.", "» Created reports in Microsoft Power BI to display weekly PC replacement results in a visually informative manner."]},
  { role: 'Deputy Returning Officer', employer: 'Elections Canada', date: 'SEPT 2019 - DEC 2019', description: ["Analyzed the specific needs of voters via a survey to develop data driven approaches in getting them registered more efficiently resulting in a 25% increase in overall efficiency.", "Implemented sorting algorithms to swiftly sort and count mismatched ballots; ballot margin of error decreased from 15% to 2%.", "Fostered strong relationships with voters in a short amount of time to elevate electoral duty awareness through their respective communities."]}
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