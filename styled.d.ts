import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: { light: string; dark: string };
      secondary: { light: string; dark: string };
      highlight: { light: string; dark: string };
      text: string;
      mutedText: string;
      background: string;
      error: string;
    };
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      mdPlus: string;
      lg: string;
      xl: string;
    };
    font: {
      primary: string;
      secondary: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    borderRadius: {
      sm: string;
      md: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    boxShadow: { img: string };
  }
}
