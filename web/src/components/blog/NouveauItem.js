import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import {
  BackgroundBlogDiv,
  BlogItemStyles,
  ContainerDiv,
} from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';

function NouveauItem({ path, title, image, categories, publishedAt }) {
  return (
    <ContainerDiv>
      <BackgroundBlogDiv />
      <BlogItemStyles>
        <Link to={`/spotlight/${path}`}>
          <GatsbyImage
            image={image.imageData}
            alt={image.altText}
            className="img"
          />
        </Link>
        <Link to={`/spotlight/${path}`}>
          <Title className="title">{title}</Title>
        </Link>
        {publishedAt && (
          <ParagraphText className="publishedAt">
            {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
          </ParagraphText>
        )}
        <ParagraphText className="categoriesText">
          {categories.map((item, index) => (
            <span key={item.slug.current}>
              <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
              {index < categories.length - 1 ? ', ' : ''}
            </span>
          ))}
        </ParagraphText>
      </BlogItemStyles>
    </ContainerDiv>
  );
}

export default NouveauItem;
