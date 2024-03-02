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
  // const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Discover our areas of expertise, and in-depth project curation and
        deployment
      </ParagraphText>
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;

/// colors
/// #1ff4b4 - light green, #2c313e - dark bluish, #cbdd46 - gold <BlogGrid blogs={featuredBlogs} />
