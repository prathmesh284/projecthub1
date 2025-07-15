import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import logo from "../assets/energy.png";
function Home() {
    return (
            <div className="App h-screen w-screen overflow-hidden">
                <header className="bg-gray-900 h-16 text-cyan-500 flex justify-between border-spacing-1"> 
                    {/* <div className="flex-initial p-20"> </div> */}
                    <div className="flex-initial flex justify-start items-center space-x-96 px-10">
                        <img className="h-10 max-w-40" src={logo} alt=""></img>
                        <p className="p-3 text-3xl font-bold px-48">ProjectHub</p>    
                    </div>
                    <navbar className="flex-initial flex p-2 font-bold">
                        <h4 className="w-20 h-20 flex-initial">Hello! Pratham</h4>
                    </navbar>
                </header>
                <div className="h-1 w-full bg-cyan-800"></div>
                <div className="w-full h-full flex">
                    <SideBar/>
                    <div className="">
                        <Outlet /> 
                    </div>
                </div>
            </div>
    );
}

export default Home;
