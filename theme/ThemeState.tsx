import React, { ReactNode } from "react";

import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";

import { themeState } from "../states/themeState";

import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { GlobalStyle } from "./GlobalStyle";

type props = {
  children?: ReactNode;
};

export default function ThemeState({ children }: props) {
  const [theme] = useRecoilState(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
