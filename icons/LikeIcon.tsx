import React from "react";

import Icon from "./svg/Like.svg";

import SvgIcon from "./SvgIcon";

import { Fill, Size } from "./type";

type props = {
  size: Size;
  fill: Fill;
};

const defaultProps: props = {
  size: "xSmall",
  fill: "activateError",
};

export default function LikeIcon({ size, fill }: props) {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

LikeIcon.defaultProps = defaultProps;
