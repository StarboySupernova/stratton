import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
import { SectionTitle } from '../typography/Title';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Stratton Ashworth</h1>
            <ParagraphText className="hero__text">
              macOS App Development • iOS/iPad Development • Android App
              Development • React Progressive Web Apps • Static Web Development
            </ParagraphText>
            <SectionTitle>Our Acumen</SectionTitle>
            <ParagraphText className="hero__text">
              "Embark on a journey of innovation with our expert development
              services. From crafting seamless iOS experiences through SwiftUI &
              UIKit to unleashing the power of Android app development with
              JetPack Compose, and revolutionizing the web with React, we bring
              your ideas to life. Elevate your digital presence with our skilled
              team, ensuring cutting-edge solutions for every platform.
              Transform your vision into reality – join us in shaping the future
              of app and web development."
            </ParagraphText>
            <ParagraphText>Exploring the Frontiers of Innovation</ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Discover
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/VisionPro.jpeg"
              alt="stratton ashworth hero image"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
