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
          Thank you for choosing us at Stratton Ashworth, where your digital
          journey is our utmost priority. Experience excellence in iOS
          development, Android app development, and web development with React.
          Elevate your digital presence with our skilled team, cutting-edge
          technology, and collaborative solutions. Connect with us for seamless
          app and web solutions, and explore the digital landscape with
          confidence. Your satisfaction is at the heart of our service. Choose
          Stratton Ashworth – Your pathway to innovative and top-tier digital
          solutions
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
          4 Spoor Ave, Kempton Park West, Kempton Park, 1619, South Africa
        </ParagraphText>
        <ParagraphText className="copyright">
          © Stratton Ashworth (PTY) LTD | {new Date().getFullYear()}| All rights
          reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
