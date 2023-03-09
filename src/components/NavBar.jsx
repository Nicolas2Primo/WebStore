import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-14 flex items-center justify-between bg-black text-white px-3 py-1">
      <span className=" text-xl text-center font-bold">Store</span>
      <BiMenu color="white" size={28}></BiMenu>
    </nav>
  );
};

export default Navbar;
