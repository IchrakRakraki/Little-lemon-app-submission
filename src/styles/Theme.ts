import { css } from "styled-components";

export const theme = {
  color: {
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
    mutedText: "#6E6F6E",
    background: "#FFFFFF",
  },
  font: {
    primary: "'Karla', sans-serif",
    secondary: "'Markazi Text', serif",
  },
  fontSize: {
    xxs: "0.75rem",
    xs: "1rem",
    sm: "1.125rem",
    md: "1.25rem",
    mdPlus: "1.5rem",
    lg: "2.5rem",
    xl: "4rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
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
  breakpoint: {
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
    @media (min-width: ${theme.breakpoint.sm}) {
      ${css(...args)}
    }
  `,
  md: (...args: any) => css`
    @media (min-width: ${theme.breakpoint.md}) {
      ${css(...args)}
    }
  `,
  lg: (...args: any) => css`
    @media (min-width: ${theme.breakpoint.lg}) {
      ${css(...args)}
    }
  `,
  xl: (...args: any) => css`
    @media (min-width: ${theme.breakpoint.xl}) {
      ${css(...args)}
    }
  `,
};
