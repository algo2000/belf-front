import React from "react";

import styled from "styled-components";
import SearchIcon from "../../../icons/SearchIcon";

export const Field = styled.div`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  padding: 5px 10px;
  height: 30px;
  /* width: 300px; */
  margin-left: 40px;

  display: inline-grid;
  grid-template-columns: 20px 300px;
`;

const InputStyle = styled.input`
  margin-left: 6px;
  height: 20px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.fontColor.sub};

  :focus {
    border: none;
    outline: none;
  }
`;

export default function SearchInput() {
  return (
    <Field>
      <SearchIcon />
      <InputStyle placeholder="검색" />
    </Field>
  );
}
