import { graphql } from 'gatsby';
import React from 'react';
import AuthorGrid from '../components/author/AuthorGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

export const ReviewsQuery = graphql`
  query reviewListQuery($limit: Int!, $offset: Int!) {
    allSanityReview(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        user
        restaurant {
          title
        }
        slug {
          current
        }
        publishedAt
        _rawExcerpt
      }
    }
  }
`;

function ReviewList({ data, pageContext }) {
  const reviews = data.allSanityReview.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Reviews" />
      <div className="container">
        <PageHeader title="Reviews" description="What other food lovers say" />
        <AuthorGrid authors={reviews} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/reviews"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default ReviewList;
