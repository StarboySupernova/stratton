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
      <SEO title="Services" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Services"
            description="Elevate your projects with Mwenje Minerals and Environment, your go-to partner for comprehensive and expert geophysical solutions across diverse environments in Sub-Saharan Africa, ensuring success at every stage of development."
          />
          <ServiceGrid services={services} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/services"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Services;
