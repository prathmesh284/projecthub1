// import React from "react";
// import { Link } from "react-router-dom";

// export default function AdminSideBar() {
//     const menu = [
//         // {id:0,name:"AdminHome",link:"/admin/"},
//         // {id:0,name:"BlankPage",link:"/admin/home/blank"}, 
//         {id:0,name:"AdminAddProjects",link:"/admin/home/projects"},
//     ];

//   return (
//     <div className="h-screen min-w-48 bg-gray-900 overflow-y-hidden">
//       <div className="flex flex-col">
//         {menu.map((item, index) => (
//           <div
//             key={index}
//             className="p-4 text-cyan-400 text-center border-x-2 border-b-2 border-cyan-800 hover:bg-gray-800 cursor-pointer"
//           >
//             <Link to={item.link} className="">{item.name}</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminSideBar() {
  const navigate = useNavigate();

  const menu = [
    { id: 0, name: "AdminAddProjects", link: "/admin/home/projects" },
  ];

  const handleLogout = () => {
    // Clear session/auth here
    navigate("/admin");
  };

  return (
    <div className="w-56 bg-gray-900 flex flex-col justify-between" style={{ height: "calc(100vh - 65px)" }}>
      {/* Menu List */}
      <div>
        {menu.map((item, index) => (
          <div
            key={index}
            className="p-4 text-cyan-400 text-center border-x-2 border-b-2 border-cyan-800 hover:bg-gray-800 cursor-pointer"
          >
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>

      {/* Logout Button at Bottom */}
      <div className="p-4 border-t-2 border-cyan-800">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
