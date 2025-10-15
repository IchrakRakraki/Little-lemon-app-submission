import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  section:not(:first-child), footer{
    margin-top: 5rem;
    padding: 2rem 0;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 0.8;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.lg}
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.md}
  }

  p {
    max-width: 35ch;
    margin: ${({ theme }) => theme.spacing.md} 0;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    list-style: none;
  }
`;
