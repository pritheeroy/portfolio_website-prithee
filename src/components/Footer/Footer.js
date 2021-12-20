import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Navbar/NavbarStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:647-803-5266">647-803-5266</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:prithee.roy@mail.utoronto.ca">
          prithee.roy@mail.utoronto.ca
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Thank you for visiting my portfolio :) Feel free to contact me!</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="mailto:prithee.roy@mail.utoronto.ca">
        <AiFillMail size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/pritheeroy">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/pritheeroy/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
