import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
import { SectionTitle } from '../typography/Title';
import { StripeContent, StripeElement } from '../../templates/stripe-element';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">MWENJE MINERALS AND ENVIRONMENT</h1>
            <ParagraphText className="hero__text">
              Bringing Africa's mineral wealth to your enlightenment. We bring
              mining and environmental best practices, compliance and solutions
              to your business. Africa has been our domain for the past 20
              years, with a vast field of experience working in all of Southern
              Africa, East africa and the D.R.C.
            </ParagraphText>
            <SectionTitle>Our Expertise</SectionTitle>
            <ParagraphText className="hero__text">
              "Mwenje Minerals and Environment stands out as a premier
              geophysical contracting company in Africa, renowned for its
              extensive capabilities in conducting a diverse array of
              geophysical methods. With top-tier equipment and expertise, we
              excel in executing a wide range of projects."
            </ParagraphText>
            <ParagraphText>
              The firm has built & gained practical "hands on" experience
              environments across different countries and developmental stages.
              Mwenje Minerals and Environmental Consultants, since being
              established in Africa, has accomplished over 500 significant
              geophysical projects in Sub-Saharan Africa. Notable locations
              Botswana, Zambia, Mozambique, Malawi, Uganda, Tanzania, DRC,
              Zimbabwe, Kenya, and Mauritius.
            </ParagraphText>
            <Button to="/projects" tag={Link} className="hero__button">
              Explore Our Services
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/VR.jpg"
              alt="mwenje"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
      <StripeElement>
        {/* <StripeContent>
          <StaticImage
            className="livestream-wave4"
            src="../../images/livestream-wave4.svg"
          />
          <StaticImage
            className="livestream-wave4-02"
            src="../../images/livestream-wave4.svg"
          />
        </StripeContent> */}
      </StripeElement>
    </HeroSectionStyles>
  );
}

export default HeroSection;
