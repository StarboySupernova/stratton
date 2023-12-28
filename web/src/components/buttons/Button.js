import React from 'react';
import { buttonTypes } from '../../constants/buttonTypes';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';

function Button({ children, tag, variant = buttonTypes.primary, ...props }) {
  return (
    // tag allows us to render the component as either a tag we will specify. More explanation is needed // possibly because ButtonStyles is a styled components Link underneath??
    <ButtonStyles as={tag} {...props} variant={variant}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
