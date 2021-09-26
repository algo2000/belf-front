import { ReactNode } from "react";

import styled from "styled-components";

const Layout = styled.div`
  max-width: 1280px;
  margin: auto;
  display: grid;

  padding: 60px 70px 60px 20px;

  grid-template-columns: 300px 820fr;
  grid-column-gap: 70px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 40px;
    padding: 60px 20px;
  }
`;

type props = {
  children?: ReactNode;
};

export default function UserLayout({ children }: props) {
  return <Layout>{children}</Layout>;
}
