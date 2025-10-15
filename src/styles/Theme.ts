import { css } from "styled-components";

export const theme = {
  colors: {
    primary: {
      light: "#F4CE14",
      dark: "#495E57",
    },
    secondary: {
      light: "#FDF4EE",
      dark: "#EE9972",
    },
    highlight: {
      light: "#EDEFEE",
      dark: "#333333",
    },
    text: "#333333",
    background: "#FFFFFF",
  },
  fonts: {
    primary: "'Karla', sans-serif",
    secondary: "'Markazi Text', serif",
  },
  fontSizes: {
    xxs: "0.75rem",
    xs: "1rem",
    sm: "1.125rem",
    md: "1.25rem",
    lg: "2.5rem",
    xl: "4rem",
  },
  borderRadius: {
    sm: "8px",
    md: "16px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
  },
  boxShadow: {
    img: "2px 4px 10.5px 0 rgba(0, 0, 0, 0.1)",
  },
};

export const media = {
  sm: (...args: any) => css`
    @media (min-width: ${theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  md: (...args: any) => css`
    @media (min-width: ${theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  lg: (...args: any) => css`
    @media (min-width: ${theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  xl: (...args: any) => css`
    @media (min-width: ${theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
};
