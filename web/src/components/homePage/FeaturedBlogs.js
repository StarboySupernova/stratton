import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            id
            title
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Delve into the culinary arts at your leisure, with our curated picks of
        the day
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;

/* Patricia holds a Masters degree in Environmental Management and Society from University of Pretoria , an Occupational Health and Safety training from NOSSA and a certificate in Incident Investigation& Audit – Environmental law from Ministry of Environment and Tourism . She is a determined, hard-working and analytically minded Environmental analyst. In her Master’s degree she is Specializing in Environmental law .In that regard she has proficiency in policy analysis implementation, application and compliance. She has been resourceful in Auditing projects requiring ISO140001; ISO9000; ISO18000 Environmental Health and safety policy compliance. Her professional experience in the past 10 years includes being a Business developer, Environmental Consultant, Occupational Health and Safety officer, Public Relations Officer, Events management at various consultancies that dealt a lot with Policies and Governance ,Engineering, Construction, Mining and Non-governmental Charitable Hospitality Organisations to name a few.

Patricia is not only well acquainted in Environmental Management processes in compliance to internationally best management Practices including the Equator Principles,World Bank, IFC Performance Standards and Environmental, Health and Safety Guidelines but assesses audits compliance avoiding any liability to the organisation .She has10 years of experience in the GIS, Environmental and Social Impact Assessments Occupational Health and safety and has been involved in formal environmental authorization processes for the residential, commercial, industrial and mining sectors,including World Bank Category ‘A’ environmental impact assessments She has also been active in Projects that require Community liaison and Public Participation in various projects in Southern East and West Africa. Patricia has the drive the business acumen and natural strategies to drive any company’s goals to realisation */
// categories
// Mwenje Environment
// Mwenje Geology
// Mwenje Health and Safety
// Mwenje Community
// services shall be new schemas in sanity

// principles
/// Equator Principles,World Bank, IFC Performance Standards and Environmental, Health and Safety Guidelines, audit assessment,  GIS, Environmental and Social Impact Assessments Occupational Health and safety
/// Community liaison and Public Participation

/// colors
/// #1ff4b4, #2c313e, #cbdd46
