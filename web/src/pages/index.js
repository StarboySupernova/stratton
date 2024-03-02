import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';
import { StripeContent, StripeElement } from '../templates/stripe-element';

const IndexPage = () => (
  <>
    <SEO title="Mwenje Minerals" />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
    </div>
    <StripeContent>
      {/* <StripeElement className="livestream-wave4-01" /> */}
      <StaticImage
        className="livestream-wave4"
        src="../../images/livestream-wave4.svg"
      />
      <StaticImage
        className="livestream-wave4-02"
        src="../../images/livestream-wave4.svg"
      />
      <StripeElement>Text </StripeElement>
    </StripeContent>
  </>
);

export default IndexPage;
