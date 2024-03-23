import styled from 'styled-components';

export const Wrapper = styled.span`
  /* Wrapper */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 322px;
  height: 36px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Icon = styled.span`
  /* Icon */

  width: 36px;
  height: 36px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Circle = styled.span`
  /* Circle */

  position: absolute;
  width: 36px;
  height: 36px;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`;

export const Pricing1 = styled.span`
  /* pricing */

  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`;

export const Pricing2 = styled.span`
  /* pricing */

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;
