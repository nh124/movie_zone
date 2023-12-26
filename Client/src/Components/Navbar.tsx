import { useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="w-full  h-[50px] bg-sky-900/50 font-white flex justify-center relative">
      <div className="flex fle-row justify-between items-center w-full  xl:w-[1920px] relative">
        <div className="flex flex-row items-center w-auto text-xl font-bold text-cyan-50 z-10">
          <div className="sm:w-[20%] w-[30%] px-3 py-3">
            <img className="w-full h-full object-cover" src={logo} alt="logo" />
          </div>
          <span>MovieZone</span>
        </div>
        <ul className="flex flex-row justify-center items-center gap-5 px-4 h-[70%] z-10">
          <div className="flex flex-row w-auto overflow-hidden h-full justify-start items-center relative">
            <button onClick={() => setShowSearch(!showSearch)}>
              {showSearch ? (
                <IoCloseOutline size={25} color="white" />
              ) : (
                <CiSearch size={25} color="white" />
              )}
            </button>
          </div>
          <button className="px-1 py-1 bg-blue-300 rounded-md h-full flex justify-center items-center w-[70px]">
            Sign In
          </button>
        </ul>
        <div
          className={`w-full h-[50px] bg-sky-900 absolute ${
            showSearch ? "translate-y-[53px] z-30" : "translate-y-[0px] -z-10"
          } flex justify-center items-center px-3 py-3`}
        >
          <form action="" className="w-full h-full">
            <input
              type="text"
              className="w-full h-full 
          px-3 py-2 bg-gray-700 text-white border border-gray-400 rounded-md focus:outline-none focus:border-blue-3"
              placeholder="Search a movie"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
