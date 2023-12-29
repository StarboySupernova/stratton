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
          Duke's flagship product is a cutting-edge iOS application designed to
          streamline the process of making reservations and ordering at
          restaurants. Unlike traditional reservation apps, Duke goes beyond the
          functional aspect and focuses on enhancing the overall dining
          experience. Our software leverages advanced algorithms and user
          preferences to recommend personalized dining options, curating
          unforgettable moments for our clients.
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
          © Duke Atlas (PTY) LTD | Est. 2022 | {new Date().getFullYear()}. All
          rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
