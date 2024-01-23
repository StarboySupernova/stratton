import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';
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
  const categories = data.allSanityFeatured.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <SectionTitle>Our Expertise</SectionTitle>
      <ParagraphText className="info">
        Mwenje Geology and Environmental Consultants has always been one of the
        leading geophysical contracting companies in Africa and is well equipped
        to carry the out a wide range of geophysical methods. The company has
        built a “hands on” experience of working in very diverse environments in
        different countries and at different stages of development. Since its
        establishment in Africa, Mwenje Geology and Environmental Consultants
        has successfully completed more than 500 major geophysical projects in
        Sub-Saharan Africa, notably Botswana, Zambia, Mozambique, Malawi,
        Uganda, Tanzania, DRC, Zimbabwe, Kenya and Mauritius.
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
