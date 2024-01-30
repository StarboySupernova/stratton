import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function MissionHeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="container">
          <div className="left">
            <h1 className="hero__heading">Our Mission</h1>
            <ParagraphText>
              Providing breakthrough innovative value-driven mining solutions,
              intelligent service in mining development and in the penetration
              of the mining and mineral industry.
            </ParagraphText>
            <SectionTitle>Business Description</SectionTitle>
            <ParagraphText className="hero__text">
              Mwenje Minerals & Environment is an important arm in the Mining
              Industry in Africa, in that we provide state of the art expertise
              a potential mine owner with advice, guidance, and technical
              service on how to set up a mine and as well make his or or her
              idea come to realisation. Functioning as a consultancy firm, we
              are adept at market trends analysis and industry policies,
              providing guidance on establishing and realizing mining ideas. The
              advice on business development in mining, mineral processing,
              marketing, and trade.
            </ParagraphText>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/guys.jpg"
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

export default MissionHeroSection;
