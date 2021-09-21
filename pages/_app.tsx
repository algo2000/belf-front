import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import ThemeState from "../theme/themeState";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeState>
        <Component {...pageProps} />
      </ThemeState>
    </RecoilRoot>
  );
}
