import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import MissionHeroSection from '../components/homePage/MissionHeroSection';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Mwenje Geology" />
    <HeroSection />
    <div className="container">
      <TopCategories />
      <FeaturedBlogs />
    </div>
    <MissionHeroSection />
  </>
);

export default IndexPage;
