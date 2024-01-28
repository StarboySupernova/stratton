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
            <h1 className="hero__heading">
              MWENJE GEOLOGY AND ENVIRONMENTAL CONSULTANTS
            </h1>
            <ParagraphText className="hero__text">
              Bringing Africa's mineral wealth to your enlightenment. We bring
              mining and environmental best practices, compliance and solutions
              to your business. Africa has been our domain for the past 20
              years, with a vast field of experience working in all of Southern
              Africa, East africa and the D.R.C.
            </ParagraphText>
            <SectionTitle>Our Expertise</SectionTitle>
            <ParagraphText className="hero__text">
              Mwenje Geology and Environmental Consultants has always been one
              leading geophysical contracting companies in Africa and is well
              equipped to carry the out a wide range of geophysical methods.
            </ParagraphText>
            <ParagraphText>
              The firm has built & gained practical "hands on" experience
              environments across different countries and developmental stages.
              Mwenje Geology and Environmental Consultants, since being
              established in Africa, has accomplished over 500 significant
              geophysical projects in Sub-Saharan Africa. Notable locations
              Botswana, Zambia, Mozambique, Malawi, Uganda, Tanzania, DRC,
              Zimbabwe, Kenya, and Mauritius.
            </ParagraphText>
            <Button to="/restaurants" tag={Link} className="hero__button">
              Explore Our Services
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/tunnel.jpg"
              alt="mwenje"
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
