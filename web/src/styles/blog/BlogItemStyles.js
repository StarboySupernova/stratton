import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-block;
  border-radius: 12px;
  .img {
    height: 250px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .publishedAt {
    margin-bottom: 0.3rem;
    color: var(--darkBlue);
  }
  &:hover {
    .img [data-main-image] {
      transform: scale(1.05);
    }
  }
  .categoriesText {
    a {
      color: var(--white);
      &:hover {
        text-decoration: underline;
      }
      padding: 4px;
      background: linear-gradient(
        180deg,
        rgba(24, 32, 79, 0.4) 0%,
        rgba(24, 32, 79, 0.25) 100%
      );
      border: 0.5px solid var(--white);
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(20px);
      /* Note: backdrop-filter has minimal browser support */
      border-radius: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      margin-bottom: 0.5rem;
    }
  }
`;

export const NouveauItemStyles = styled.div`
  display: inline-block;
  border-radius: 12px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 60px 0px 60px 60px;
  .img {
    height: 250px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .publishedAt {
    margin-bottom: 0.3rem;
    color: var(--darkBlue);
  }
  &:hover {
    .img [data-main-image] {
      transform: scale(1.05);
    }
  }
  .categoriesText {
    a {
      color: var(--white);
      &:hover {
        text-decoration: underline;
      }
      padding: 4px;
      background: linear-gradient(
        180deg,
        rgba(24, 32, 79, 0.4) 0%,
        rgba(24, 32, 79, 0.25) 100%
      );
      border: 0.5px solid var(--white);
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(20px);
      /* Note: backdrop-filter has minimal browser support */
      border-radius: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      margin-bottom: 0.5rem;
    }
  }
`;

export const ContainerDiv = styled.div`
  position: relative;
  height: 100%;
  overflow: visible;
`;

export const BackgroundBlogDiv = styled.div`
  background: linear-gradient(180deg, #75a698 11.94%, #23333f 80.98%);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 60px 0px 60px 60px;
  transform: matrix(0.99, 0.14, -0.11, 0.99, 0, 0);
  position: absolute;
  width: 360px;
  height: 423px;
  right: 20px;
  z-index: -10;
`;
