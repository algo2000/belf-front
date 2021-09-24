import React from "react";

import styled from "styled-components";

import BelfIcon from "../../icons/BelfIcon";

const Logo = styled.div`
  display: inline-block;
  height: 30px;
  line-height: 30px;

  cursor: pointer;
`;

const LogoText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  margin-left: 6px;
  vertical-align: super;
`;

export default function BelfLogo() {
  return (
    <Logo>
      <BelfIcon size="small" fill="brandMain" />
      <LogoText>Belf</LogoText>
    </Logo>
  );
}
