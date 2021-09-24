import React from "react";

import Icon from "./svg/Belf.svg";

import SvgIcon from "./SvgIcon";

import { Fill, Size } from "./type";

type props = {
  size: Size;
  fill: Fill;
};

const defaultProps: props = {
  size: "xSmall",
  fill: "brandMain",
};

export default function BelfIcon({ size, fill }: props) {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

BelfIcon.defaultProps = defaultProps;
