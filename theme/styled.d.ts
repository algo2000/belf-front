import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontColor: {
      main: string;
      sub: string;
      sub2: string;
    };

    brandColor: {
      main: string;
    };

    activateColor: {
      error: string;
    };

    backgroundColor: {
      bg: string;
      card: string;
    };

    lineColor: {
      main: string;
    };
  }
}

export default darkTheme;
