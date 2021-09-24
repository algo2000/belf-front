import React from "react";

import styled from "styled-components";

import BelfLogo from "../BelfLogo/BelfLogo";
import SearchInput from "../Input/SearchInput/SearchInput";

const Test = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.main};
  padding: 16px 32px;
  height: 63px;
`;

export default function Header() {
  return (
    <Test>
      <BelfLogo />
      <SearchInput />
    </Test>
  );
}
