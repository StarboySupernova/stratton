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
      // Check if children is not null and is an object
      if (!children || typeof children !== 'object') {
        // Handle the case where children is not an object or is null, for example, render an empty block
        return null;
      }

      // Extract text content from JSON structure
      const extractTextContent = (data) => {
        if (Array.isArray(data)) {
          return data.map((item) => extractTextContent(item)).join(' ');
        }
        if (typeof data === 'object' && data !== null) {
          // Filter out keys that correspond to node names
          const filteredValues = Object.values(data).filter(
            (value) => typeof value !== 'object' || !('_type' in value)
          );
          return filteredValues
            .map((value) => extractTextContent(value))
            .join(' ');
        }
        if (typeof data === 'string') {
          return data;
        }
        return '';
      };

      // Extract text content from children
      const fullText = extractTextContent(children);

      // Split the full text into words
      const words = fullText.split(' ');

      // Check if the number of words exceeds the limit
      if (words.length > 40) {
        // Slice the array to get the first 40 words and join them back into a string
        const truncatedText = words.slice(0, 40).join(' ');

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
