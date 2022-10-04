import Image from "next/image";
import React from "react";
import {HomeIcon} from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
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
        <SidebarMenuItem Icon={HomeIcon} text="home" active />
        <SidebarMenuItem Icon={HashtagIcon} text="explore" />
        <SidebarMenuItem Icon={BellIcon} text="notifications" />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem Icon={BookmarkIcon} text="bookmarks" />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}  />
        <SidebarMenuItem text="Profile" Icon={UserIcon}  />
        <SidebarMenuItem Icon={EllipsisHorizontalCircleIcon} text="more" />
      </div>
      <button>more</button>
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQE3cP9jLiim6Q/profile-displayphoto-shrink_800_800/0/1574020802452?e=1670457600&v=beta&t=y7k1S753FLF8SUQrJT0yR7ZLObpQ71lBRclt-U98fS4"
              alt="user-img"
            />
            <div>
              <h4 className="font-bold">Mohammed Soliman</h4>
              <p className="text-gray-500">@soliman</p>
            </div>
            <EllipsisHorizontalIcon className="h-7" />
          </div>
    </div>
  );
}
