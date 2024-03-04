import styled from 'styled-components';

export const FormButton = styled.button`
  /* Form Button */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 123px;
  gap: 10px;

  width: 250px;
  height: 44px;

  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border-radius: 30px;

  /* Inside auto layout */
  flex: none;
  order: 3;
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

export const Hunnid = styled.p`
  /* 120 */

  width: 136px;
  height: 95px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 95px;

  /* Text (dark) */
  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Annual = styled.p`
  /* per year, billed annually */

  width: 167px;
  height: 19px;

  /* Caption */
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  /* or 19px */

  /* Text 2 (dark) */
  color: rgba(255, 255, 255, 0.7);

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const EmailInput = styled.span`
  /* Email Input */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  gap: 4px;

  width: 400px;
  height: 44px;

  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Wrapper = styled.div`
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
