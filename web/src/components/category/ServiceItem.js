import React from 'react';
import ServicePortableText from '../ServicePortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function ServiceItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <ServicePortableText value={description} />
      </div>
      <Button to={`/services/${slug.current}`} variant={buttonTypes.outline}>
        More
      </Button>
    </CategoryItemStyles>
  );
}

export default ServiceItem;
