import { graphql } from 'gatsby';
import React from 'react';
import AuthorGrid from '../components/author/AuthorGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Stratton Ashworth Team" />
      <div className="container">
        <PageHeader
          title="Stratton Ashworth"
          description="Our dedicated, highly trained staff with years of deep, relevant experience whose sole task is to seamlessly bring your project to fruition"
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/team"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;

/* Address

1954 intakaza & Edmond Shezi str Mayibuye
Commercia
Midrand
1685
South Africa
076 150 1409

write google review - https://search.google.com/local/writereview?placeid=ChIJ67iW6-ptlR4RtTWSXggOE0A
read google reviews - https://search.google.com/local/reviews?placeid=ChIJ67iW6-ptlR4RtTWSXggOE0A


*/
