import React from "react";

import styled from "styled-components";

import Avatar, { AvatarBox } from "../Avatar/Avatar";

import FollowButton from "../Button/FollowButton/FollowButton";

const Card = styled.div`
  padding: 20px;
  height: 160px;
  margin-top: 40px;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.common.fontSize.s800}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
  margin-top: 10px;
`;

const Introduction = styled.p`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.sub};
  margin-top: 16px;
`;

const ProfileArea = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    ${Card} {
      margin-top: 20px;
    }
    ${AvatarBox} {
      margin: auto;
    }
  }
`;

const FollowBox = styled.div`
  height: 36px;
  margin-top: 20px;
  > div {
    margin-right: 10px;
  }
`;

export default function Profile() {
  return (
    <ProfileArea>
      <Avatar />
      <Card>
        <UserName>JP3Pe</UserName>
        <Introduction>Book Bug</Introduction>
        <FollowBox>
          <FollowButton type="belf" count={10} />
          <FollowButton type="like" count={100} />
        </FollowBox>
      </Card>
    </ProfileArea>
  );
}
