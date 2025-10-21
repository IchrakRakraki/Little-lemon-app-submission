import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    font-family: ${({ theme }) => theme.font.primary};
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-optical-sizing: auto;
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  section:not(#hero){
    padding: 5rem 0 6rem;
  }

  #bookingRsvDetails, #bookingContactDetails {
    padding: 0 ;
  }

  footer {
    padding: 5rem 0
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.font.secondary};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 1;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.mdPlus};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    max-width: 35ch;
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
  }

  ul {
    list-style: none;
  }

  img{
    object-fit: cover;
  }
`;
