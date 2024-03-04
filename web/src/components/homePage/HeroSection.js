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
            <h1 className="hero__heading">Stepping Stones Internet Cafe</h1>
            <ParagraphText className="hero__text">
              Your Gateway to Connectivity and Productivity. Discover high-speed
              internet, exquisite customer service, printing solutions,
              collaborative spaces, and expert technical support
            </ParagraphText>
            <SectionTitle>Our Expertise</SectionTitle>
            <ParagraphText className="hero__text">
              "Welcome to Stepping Stones Internet Cafe, your gateway to
              seamless digital connectivity and productivity. Explore our
              featured services designed to enhance your online experience.
              Discover a diverse range of offerings tailored to meet your needs,
              whether for work, study, or leisure. Step into a world of
              convenience and innovation with Stepping Stones Internet Cafe."
            </ParagraphText>
            <ParagraphText>Where Every Click, Drives You Forward</ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore Our Services
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/VR.jpg"
              alt="stepping stones hero image"
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
