import { graphql } from 'gatsby';
import React from 'react';
import ReviewGrid from '../components/review/ReviewGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

export const ReviewsQuery = graphql`
  query reviewListQuery {
    allSanityReview(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        id
        user
        restaurant {
          title
        }
        slug {
          current
        }
        publishedAt(formatString: "ddd DD-MMM-YY")
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
        <ReviewGrid reviews={reviews} />
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
