import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    lineHeight: {
      small: string;
      medium: string;
      large: string;
      largeInter: string;
      large: string;
      extra: string;
    };
    fonts: {
      sizes: {
        verySmall: string;
        small: string;
        medium: string;
        mediumInter: string;
        large: string;
        largeInter: string;
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
      darkCyan: string;
      lightCyan: string;
      persian: string;
      silver: string;
      black: string;
    };
  }
}
