import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    lineHeight: {
      small: string;
      medium: string;
      large: string;
      extra: string;
    };
    fonts: {
      sizes: {
        small: string;
        medium: string;
        large: string;
        extra: string;
      };
      weight: {
        small: number;
        medium: number;
        large: number;
      };
    };
    colors: {
      white: string;
      whiteSmoke: string;
      matterhorn: string;
    };
  }
}
