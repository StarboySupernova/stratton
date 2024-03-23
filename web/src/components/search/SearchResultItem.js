import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { SearchResultItemStyles } from '../../styles/search/SearchResultItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';

import { SearchModalContext } from '../../contexts/searchModalContext';

function BlogSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/spotlight/${blog.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <GatsbyImage
        image={blog.coverImage.asset.gatsbyImageData}
        alt={blog.coverImage.alt}
        className="img"
      />
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="categoriesText">
          {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategorySearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles>
  );
}

function AuthorSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/team/${author.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <GatsbyImage
        image={author.profileImage.asset.gatsbyImageData}
        alt={author.profileImage.alt}
        className="authorProfileImg"
      />
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}
function ServiceSearchResultItem({ service }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/tech/${service.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{service.title}</Title>
    </SearchResultItemStyles>
  );
}
export {
  CategorySearchResultItem,
  BlogSearchResultItem,
  AuthorSearchResultItem,
  ServiceSearchResultItem,
};
