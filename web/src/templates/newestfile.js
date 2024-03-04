import styled from 'styled-components';

export const Group = styled.span`
  /* Group */

  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 20.83%;
  bottom: 20.83%;
`;

export const Vector1 = styled.span`
  /* Vector */

  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 20.83%;
  bottom: 20.83%;

  background: rgba(255, 255, 255, 0.3);
  border-radius: 15%;
`;

export const Vector2 = styled.span`
  /* Vector */

  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 37.5%;
  bottom: 58.33%;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
`;

export const CardNumber = styled.p`
  /* Card number MM / YY CVC */

  width: 270px;
  height: 19px;

  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  /* or 19px */
  text-align: center;

  /* Text 2 (dark) */
  color: rgba(255, 255, 255, 0.7);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
