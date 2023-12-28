import React from 'react';
import ActionButtonStyles from '../../styles/buttons/ActionButtonStyles';

// remove rest here to see its effect and also why we need it, and the effect of 2 func params in react
function ActionButton({ children, ...rest }) {
  return (
    <ActionButtonStyles
      className="mobileMenuBtn"
      role="button"
      tabIndex={0}
      {...rest}
    >
      {children}
    </ActionButtonStyles>
  );
}

export default ActionButton;
