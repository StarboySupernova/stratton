import React from 'react';
import { Link } from 'gatsby';
import { Title } from '../typography/Title';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import ParagraphText from '../typography/ParagraphText';
import MyPortableText from '../MyPortableText';

function ReviewItem({ name, restaurant, publishedAt, excerpt }) {
  // Replace spaces with dashes in the restaurant title
  const restaurantTitleWithDash = restaurant.title
    .replace(/\s+/g, '-')
    .toLowerCase();
  return (
    <CategoryItemStyles>
      <Title className="title">{name}</Title>
      <ParagraphText>
        <Link to={`/restaurants/${restaurantTitleWithDash}`}>
          {restaurant.title}
        </Link>
      </ParagraphText>
      <div className="text">
        <MyPortableText value={excerpt} />
      </div>
      <ParagraphText>{publishedAt}</ParagraphText>
    </CategoryItemStyles>
  );
}

export default ReviewItem;
