import React from "react";

import MasterLayout from "../components/Layout/MasterLayout/MasterLayout";
import UserLayout from "../components/Layout/UserLayout/UserLayout";
import Profile from "../components/Profile/Profile";

export default function Home() {
  return (
    <>
      <MasterLayout>
        <UserLayout>
          <div>
            <Profile />
          </div>
          <div>test</div>
        </UserLayout>
      </MasterLayout>
    </>
  );
}
