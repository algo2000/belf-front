import React from "react";

import styled from "styled-components";

import BelfLogo, { Logo as BelfIconStyle } from "../BelfLogo/BelfLogo";
import SearchInput, {
  Field as SearchInputStyle,
} from "../Input/SearchInput/SearchInput";
import ThemeChangeButton from "../Button/ThemeChangeButton/ThemeChangeButton";

const HeaderBox = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.main};
  padding: 16px 20px;
  height: 63px;

  > div {
    float: left;
  }

  @media only screen and (max-width: 768px) {
    height: 103px;
    ${BelfIconStyle} {
      display: block;
      float: none;
    }
    ${SearchInputStyle} {
      display: grid;
      margin: 10px 0px 0px 0px;
      float: none;
      grid-template-columns: 20px 1fr;
    }
  }
`;

export default function Header() {
  return (
    <HeaderBox>
      <BelfLogo />
      <SearchInput />
      {/* <ThemeChangeButton /> */}
    </HeaderBox>
  );
}
