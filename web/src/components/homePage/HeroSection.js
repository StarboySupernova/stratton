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
            <h1 className="hero__heading">R-Speed Motors</h1>
            <ParagraphText className="hero__text">
            "Your Pathway to Automotive Excellence. Explore swift and reliable car repair services, exceptional customer care, diagnostic solutions, collaborative expertise, and proficient technical support at R-Speed Motors."
            </ParagraphText>
            <SectionTitle>Our Expertise</SectionTitle>
            <ParagraphText className="hero__text">
            "Step into the world of precision automotive services, your pathway to
              seamless car care and optimal vehicle performance. Explore our
              featured services crafted to elevate your automotive experience.
              Uncover a comprehensive array of offerings customized to address your
              vehicle's needs, be it for maintenance, repairs, or enhancements. Immerse yourself in a realm of
              reliability and expertise."
            </ParagraphText>
            <ParagraphText>Where Every Tune-Up, Drives You Forward</ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore Our Services
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/VR.jpg"
              alt="R-Speed Motors hero image"
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
