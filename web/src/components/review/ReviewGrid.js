import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ReviewItem from './ReviewItem';

function ReviewGrid({ reviews }) {
  return (
    <CategoryGridStyles>
      {reviews.map((item) => (
        <ReviewItem
          key={item.id}
          name={item.user}
          restaurant={item.restaurant}
          publishedAt={item.publishedAt}
          excerpt={item._rawExcerpt}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ReviewGrid;
