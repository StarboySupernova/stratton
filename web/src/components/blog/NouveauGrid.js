import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import NouveauItem from './NouveauItem';

function NouveauGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <NouveauItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            image={{
              imageData: blog.coverImage.asset.gatsbyImageData,
              altText: blog.coverImage.alt,
            }}
            publishedAt={blog.publishedAt}
          />
        ))}
    </BlogGridStyles>
  );
}

export default NouveauGrid;
