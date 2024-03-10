import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import MyPortableText from '../components/MyPortableText';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { SingleCategoryStyles } from '../styles/category/SingleCategoryStyles';

export const query = graphql`
  query SingleService($id: String!) {
    sanityService(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`;

function SingleService({ data }) {
  const service = data.sanityService;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Stratton Ashworth - ${service.title}`} />
          <PageHeader title={service.title} className="pageHeader">
            <MyPortableText value={service._rawDescription} />
            <GatsbyImage
              image={service.coverImage.asset.gatsbyImageData}
              alt={service.coverImage.alt}
              className="coverImage"
            />
          </PageHeader>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleService;
