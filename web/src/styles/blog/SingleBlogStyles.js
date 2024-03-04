import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 700px;
  margin: 0 auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        padding: 4px;
        text-decoration: underline;
        background: linear-gradient(
          180deg,
          rgba(24, 32, 79, 0.4) 0%,
          rgba(24, 32, 79, 0.25) 100%
        );
        border: 0.5px solid rgba(0, 0, 0, 0.3);
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(20px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 30px;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
`;
