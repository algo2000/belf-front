import styled from "styled-components";

export const AvatarBox = styled.div`
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 300 / 300;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 768px) {
    max-width: 160px;
    aspect-ratio: auto 160 / 160;
  }
`;

export default function Avatar() {
  return (
    <AvatarBox>
      <img src="https://avatars.githubusercontent.com/u/51093294?v=4" />
    </AvatarBox>
  );
}
