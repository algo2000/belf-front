import { css } from "styled-components";

export enum IconSize {
  xSmall = 20,
  small = 30,
  medium = 40,
  large = 50,
  xLarge = 60,
}

export const IconFill = (fill: Fill) => {
  switch (fill) {
    case "fontMain":
      return css`
        ${({ theme }) => theme.fontColor.main};
      `;
    case "fontSub":
      return css`
        ${({ theme }) => theme.fontColor.sub};
      `;
    case "fontSub2":
      return css`
        ${({ theme }) => theme.fontColor.sub2};
      `;
    case "brandMain":
      return css`
        ${({ theme }) => theme.brandColor.main};
      `;
    case "activateError":
      return css`
        ${({ theme }) => theme.activateColor.error};
      `;
  }
};

export type Size = "xSmall" | "small" | "medium" | "large" | "xLarge";

export type Fill =
  | "fontMain"
  | "fontSub"
  | "fontSub2"
  | "brandMain"
  | "activateError";
