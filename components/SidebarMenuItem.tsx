import React from "react";

type Props ={
  Icon: React.ComponentType<any>;
  active: boolean;
  text: string;
}

export default function SidebarMenuItem({Icon, active, text}:Props) {
  return <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
    <Icon className="h-7" />
    <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
  </div>;
}
