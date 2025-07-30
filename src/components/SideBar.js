// import React from "react";
// import { Link } from "react-router-dom";

// export default function SideBar() {
//     const menu = [
//         {id:0,name:"Home",link:"/home/home"},
//         {id:1,name:"Projects",link:"/home/projects"}, 
//         {id:2,name:"Ideas",link:"/home/ideas"},
//         {id:3,name:"Suggestions",link:"/home/suggestions"}, 
//         {id:4,name:"My Profile",link:"/home/profile"}, 
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
import { useParams } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function SideBar() {
  const { email } = useParams();

  const navigate = useNavigate();

  const menu = [
    { id: 0, name: "Home", link: `/home/${email}/home` },
    { id: 1, name: "Projects", link: `/home/${email}/projects` },
    { id: 2, name: "Ideas", link: `/home/${email}/ideas` },
    { id: 3, name: "Suggestions", link: `/home/${email}/suggestions` },
    { id: 4, name: "My Profile", link: `/home/${email}/profile` },
  ];

  const handleLogout = () => {
    // navigate("/");
    const auth = getAuth(); // Get Firebase auth instance
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        alert("Failed to log out. Please try again.");
    });
  };

  return (
    <div
      className="w-56 bg-gray-900 flex flex-col justify-between"
      style={{ height: "calc(100vh - 75px)" }}
    >
      {/* Menu Items */}
      <div>
        {menu.map((item) => (
          <div
            key={item.id}
            className="p-4 text-cyan-400 text-center border-x-2 border-b-2 border-cyan-800 hover:bg-gray-800 cursor-pointer"
          >
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t-2 border-cyan-800">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
