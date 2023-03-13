import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState([
    { nome: "teste1" },
    { nome: "teste2" },
    { nome: "teste3" },
    { nome: "teste4" },
  ]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className=" z-10 fixed w-full h-14 flex items-center justify-between bg-black text-white px-3 py-1">
        <span className=" text-xl text-center font-bold">Store</span>
        <div className="flex gap-4 items-center justify-center">
          <FaShoppingCart size={19} />
          <BiMenu
            color="white"
            size={28}
            onClick={handleOpen}
            className=" md:hidden"
          ></BiMenu>
          {menuItem.map((item, index) => (
            <MenuItems key={index} name={item.nome} style_option={false} />
          ))}
        </div>
      </nav>
      <div
        className={` z-0 absolute w-screen h-52 flex flex-col gap-3 items-center justify-center bg-black transition-all duration-100 ease-in ${
          open ? "mt-[17%]" : "mt-[-30%] invisible"
        }`}
      >
        {menuItem.map((item, index) => (
          <MenuItems key={index} name={item.nome} style_option={true} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
