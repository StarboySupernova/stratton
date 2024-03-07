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
        "Thank you for choosing R-Speed Motors, where your automotive journey is our top priority. Experience excellence in car repair services, meticulous diagnostics, and collaborative solutions. Elevate your driving experience with skilled mechanics, advanced technology, and comprehensive vehicle care. Connect with us for seamless automotive solutions, and explore the road with confidence. Your satisfaction is at the core of our service. Choose R-Speed Motors – Your pathway to a reliable and well-maintained vehicles."
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
          © R-Speed Motors (PTY) LTD |{' '}
          {new Date().getFullYear()}| All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
