import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          We have built our legacy on being a guiding light through Earth's
          depths, through the strategic, intuitive and calibrated illumination
          of the underground darkness, with the ultimate aim of unveiling
          Africa's mineral wealth. Balancing extraction with environmental
          stewardship, we foster sustainability through technology, community,
          and responsibility. With 20 years of expertise in Southern Africa,
          East Africa, and the DRC, we provide mining solutions and uphold
          environmental best practices. Our motto: Bringing Solutions and
          Enlightenment to your BUSINESS
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          132 2nd Street Ext Belgravia, Harare, Zimbabwe | 132 Blue Stream
          Estate, Pretorious Park, Pretoria East, South Africa
        </ParagraphText>
        <ParagraphText className="copyright">
          © Mwenje Minerals and Environment (PTY) LTD |{' '}
          {new Date().getFullYear()}| All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
