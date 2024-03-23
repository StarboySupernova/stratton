import styled from 'styled-components';

export const StripeElement = styled.div`
  /* Info */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 20px;

  position: absolute;
  width: 460px;
  height: 615.5px;
  left: calc(50% - 460px / 2);
  top: calc(50% - 615.5px / 2 - 0.25px);

  background: rgba(50, 61, 109, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;

export const StripeContent = styled.div`
  position: relative;
  width: 1440px;
  height: 620px;
  background: #1f1f47;

  .livestream-wave4 {
    position: absolute; // Change to absolute positioning
    width: 1440px;
    height: 200px;
    left: calc(50% - 1440px / 2 + 1440px);
    top: 203px;
    background: linear-gradient(333.35deg, #ff7777 58.7%, #ef234c 69.36%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 3; // Set z-index for stacking order
  }

  .livestream-wave4-01,
  .livestream-wave-02,
  .Background {
    position: absolute; // Change to absolute positioning
    width: 1529px;
    height: 200px;
    left: -5px;
    top: -123px;
    z-index: 2; // Set z-index for stacking order
  }

  .Background {
    /* Additional styling for the background class */
    /* background: #yourBackgroundColor;  // Replace with your desired background color */
    z-index: 1; // Set z-index for the background to be the bottom layer
  }
`;

export const Content = styled.span`
  /* Content */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 23px;

  width: 400px;
  height: 385px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Frame577 = styled.span`
  /* Frame 577 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 140px;
  height: 132px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Pro = styled.p`
  /* PRO */

  width: 26px;
  height: 19px;

  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  /* or 19px */
  text-transform: uppercase;

  /* Text 2 (dark) */
  color: rgba(255, 255, 255, 0.7);

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Frame576 = styled.span`
  /* Frame 576 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 140px;
  height: 94px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const DollarSign = styled.p`
  /* $ */

  width: 20px;
  height: 47px;

  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */

  /* Text (dark) */
  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;
