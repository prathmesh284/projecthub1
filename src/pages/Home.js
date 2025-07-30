import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import logo from "../assets/energy.png";
import { useParams } from "react-router-dom";

function Home() {
  const { email } = useParams();

  return (
    <div className="App h-screen w-screen overflow-hidden">
      {/* <header className="bg-gray-900 h-16 text-cyan-500 flex justify-between border-spacing-1">
        <div className="flex-initial flex justify-start items-center px-10">
            <img className="h-10 w-10 " src={logo} alt="" />
            <p className="p-3 text-3xl font-bold justify-center items-center" style={{padding:450}}>ProjectHub</p>
            <navbar className="flex-initial flex p-2 font-bold mt-8">
                <h4 className="w-20 h-20 flex-initial">Hello! {email}</h4>
            </navbar>
        </div>
      </header> */}
      <header className="bg-gray-900 h-16 text-cyan-500 flex items-center justify-between px-10">
        {/* Left: Logo and title */}
        <div className="flex items-center space-x-96">
          <img className="h-10 w-10" src={logo} alt="Logo" />
          <p className="text-2xl font-bold px-56">ProjectHub</p>
        </div>

        {/* Right: User greeting */}
        <div className="text-lg font-semibold ml-16">Hello! {email}</div>
      </header>

      <div className="h-1 w-full bg-cyan-800"></div>
      <div className="w-full h-full flex">
        <SideBar />
        <div className="ml-10" style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
