import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: { light: string; dark: string };
      secondary: { light: string; dark: string };
      highlight: { light: string; dark: string };
      text: string;
      background: string;
    };
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fonts: {
      primary: string;
      secondary: string;
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
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    boxShadow: { img: string };
  }
}
