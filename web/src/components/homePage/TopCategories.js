import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
// import CategoryGrid from '../category/CategoryGrid';
import ServiceGrid from '../category/ServiceGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  // const categories = data.allSanityFeatured.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <SectionTitle>Our Mission</SectionTitle>
      <ParagraphText>
        Providing breakthrough innovative value-driven mining solutions,
        intelligent service in mining development and in the penetration of the
        of the mining and mineral industry.
      </ParagraphText>
    </TopCategoriesStyles>
  );
}

export default TopCategories;

/// <ServiceGrid services={categories} />
