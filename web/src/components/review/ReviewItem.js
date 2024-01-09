import React from 'react';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import ParagraphText from '../typography/ParagraphText';
import MyPortableText from '../MyPortableText';

function ReviewItem({ name, slug, restaurant, excerpt, publishedAt }) {
  return (
    <AuthorItemStyles className="author-item" to={slug.current}>
      <CategoryItemStyles>
        <Title className="title">{name}</Title>
        <ParagraphText>{restaurant.title}</ParagraphText>
        <div className="text">
          <MyPortableText value={excerpt} />
        </div>
        <ParagraphText>{publishedAt}</ParagraphText>
      </CategoryItemStyles>
    </AuthorItemStyles>
  );
}

export default ReviewItem;
