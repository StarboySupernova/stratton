import React from 'react';
import { graphql } from 'gatsby';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import ServiceGrid from '../components/category/ServiceGrid';
import Pagination from '../components/Pagination';

export const ServiceListQuery = graphql`
  query servicesQuery($limit: Int!, $offset: Int!) {
    allSanityService(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Services({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const services = data.allSanityService.nodes;

  return (
    <>
      <SEO title="Tech Stack" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Our Tech Stack"
            description="Elevate your online journey with us. Connect, create, and thrive in a digital world. Your success, our priority."
          />
          <ServiceGrid services={services} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/tech"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Services;
