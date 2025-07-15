import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
    const menu = [
        {id:0,name:"Home",link:"/home/home"},
        {id:1,name:"Projects",link:"/home/projects"}, 
        {id:2,name:"Ideas",link:"/home/ideas"},
        {id:3,name:"Suggestions",link:"/home/suggestions"}, 
        {id:4,name:"My Profile",link:"/home/profile"}, 
    ];

  return (
    <div className="h-screen min-w-48 bg-gray-900 overflow-y-hidden">
      <div className="flex flex-col">
        {menu.map((item, index) => (
          <div
            key={index}
            className="p-4 text-cyan-400 text-center border-x-2 border-b-2 border-cyan-800 hover:bg-gray-800 cursor-pointer"
          >
            <Link to={item.link} className="">{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
