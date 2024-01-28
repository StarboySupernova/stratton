import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ServiceItem from './ServiceItem';

function ServiceGrid({ services }) {
  return (
    <CategoryGridStyles>
      {services.map((item) => (
        <ServiceItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ServiceGrid;
