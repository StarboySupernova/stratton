import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';

const servicePortableTextComponents = {
  block: {
    normal: ({ children }) => {
      // Check if children is an array
      if (!Array.isArray(children)) {
        // Handle the case where children is not an array, for example, render an empty block
        return null;
      }

      // Concatenate the text content of all blocks
      const fullText = children
        .map((block) => {
          // Check if the block has text content
          if (
            block._type === 'block' &&
            block.children &&
            Array.isArray(block.children)
          ) {
            // Concatenate the text content of the block
            return block.children.map((child) => child.text).join(' ');
          }
          return '';
        })
        .join(' ');

      // Split the full text into words
      const words = fullText.split(' ');

      // Check if the number of words exceeds the limit
      if (words.length > 60) {
        // Slice the array to get the first 60 words and join them back into a string
        const truncatedText = words.slice(0, 60).join(' ');

        // Add an ellipsis to the truncated text
        return (
          <>
            <ParagraphText>{truncatedText}</ParagraphText>
            <span>...</span>
          </>
        );
      }

      // If the number of words is within the limit, render the full text
      return <ParagraphText>{fullText}</ParagraphText>;
    },
    h1: ({ children }) => <Title>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme} className="bodyCode">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        language={value.code.language}
        className="bodyCode"
      >
        {String(value.code.code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        width,
        height,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="bodyImage"
        />
      );
    },
  },
};

function ServicePortableText({ value }) {
  return (
    <PortableText value={value} components={servicePortableTextComponents} />
  );
}

export default ServicePortableText;
