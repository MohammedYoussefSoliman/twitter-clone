import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  return (
    <div>
      <Image
        height="50"
        width="50"
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        alt="twitter_logo"
      ></Image>
      <div>
        <SidebarMenuItem />
      </div>
    </div>
  );
}
