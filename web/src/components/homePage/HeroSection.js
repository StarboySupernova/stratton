import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Heightening culinary experiences with technology
            </h1>
            <ParagraphText className="hero__text">
              We actively leverage cutting edge solutions to compliment and
              augment your culinary moments, from client to Restaurateur
            </ParagraphText>
            {/* tag here meaning we should render this as a gatsby link */}
            <Button to="/restaurants" tag={Link} className="hero__button">
              Explore Restaurants
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/vr-guy.jpg" // this image works just fine with Duke
              alt="vr guy"
              placeholder="blurred" // this property ensures that the image is blurred first before loading
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
