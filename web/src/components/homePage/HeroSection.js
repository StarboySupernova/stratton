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
            <SectionTitle>Our Mission</SectionTitle>
            <ParagraphText>
              Providing breakthrough innovative value-driven mining solutions,
              intelligent service in mining development and in the penetration
              of the mining and mineral industry.
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

          <div className="right">
            <h1 className="hero__heading">Our Mission</h1>
            <ParagraphText>
              Providing breakthrough innovative value-driven mining solutions,
              intelligent service in mining development and in the penetration
              of the mining and mineral industry.
            </ParagraphText>
            <SectionTitle>Business Description</SectionTitle>
            <ParagraphText className="hero__text">
              Mwenje Minerals is an important arm in the Mining Industry in
              Africa, in that we provide state of the art expertise in providing
              a potential mine owner with advice, guidance, and technical
              service on how to set up a mine and as well make his or or her
              idea come to realisation. Functioning as a consultancy firm, we
              are adept at market trends analysis and industry policies,
              providing guidance on establishing and realizing mining ideas. The
              advice on business development in mining, mineral processing,
              marketing, and trade.
            </ParagraphText>
            <Button to="/restaurants" tag={Link} className="hero__button">
              Company Background
            </Button>
          </div>
          <div className="left">
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
