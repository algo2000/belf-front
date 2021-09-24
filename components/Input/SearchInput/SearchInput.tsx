import React from "react";

import styled from "styled-components";
import SearchIcon from "../../../icons/SearchIcon";

const Field = styled.div`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  padding: 5px 10px;
  height: 30px;
  width: 300px;
  display: inline-block;
  margin-left: 40px;
  vertical-align: top;
`;

const InputStyle = styled.input`
  margin-left: 6px;
  height: 20px;
  background-color: transparent;
  border: none;
  vertical-align: top;
  color: ${({ theme }) => theme.fontColor.sub};
  width: 254px;

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
