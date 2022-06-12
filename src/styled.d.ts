import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      white: string;
      whiteSmoke: string;
      matterhorn: string;
    };
  }
}
