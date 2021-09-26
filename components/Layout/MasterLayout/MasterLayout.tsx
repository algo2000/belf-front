import Head from "next/head";
import { ReactNode } from "react";

import Header from "../../Header/Header";

type props = {
  children?: ReactNode;
};

export default function MasterLayout({ children }: props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable-no, maximum-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
