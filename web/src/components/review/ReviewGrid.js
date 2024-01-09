import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import ReviewItem from './ReviewItem';

function ReviewGrid({ reviews }) {
  return (
    <AuthorGridStyles>
      {reviews.map((item) => (
        <ReviewItem
          key={item.id}
          name={item.user}
          restaurant={item.restaurant}
          slug={item.slug}
          publishedAt={item.publishedAt}
          excerpt={item._rawExcerpt}
        />
      ))}
    </AuthorGridStyles>
  );
}

export default ReviewGrid;
