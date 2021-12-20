import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './NavbarStyles';

const Navbar = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: 20}}>
          <DiCssdeck size="3rem" /> <Span>Prithee Roy</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href='#about-me'>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    <li>
        <Link href='#experience'>
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    
    </Div2>
    <Div3>
    <SocialIcons href="mailto:prithee.roy@mail.utoronto.ca">
        <AiFillMail size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/pritheeroy">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/pritheeroy/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Navbar;
