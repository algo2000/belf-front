import { useRecoilState } from "recoil";

import styled from "styled-components";

import { themeState } from "../../states/themeState";

const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.brandColor.main};
  color: ${({ theme }) => theme.fontColor.main};
`;

export default function TestButton() {
  const [theme, setTheme] = useRecoilState(themeState);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return <ButtonStyle onClick={themeToggler}>Test</ButtonStyle>;
}
