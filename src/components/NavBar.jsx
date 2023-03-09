import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState([
    { nome: "teste1" },
    { nome: "teste2" },
    { nome: "teste3" },
    { nome: "teste4" },
  ]);

  return (
    <nav className="fixed w-full h-14 flex items-center justify-between bg-black text-white px-3 py-1">
      <span className=" text-xl text-center font-bold">Store</span>
      <div className="flex gap-4 items-center justify-center">
        <FaShoppingCart size={19} />
        <BiMenu color="white" size={28} className=" md:hidden"></BiMenu>
        {menuItem.map((item, index) => (
          <button
            className="text-md text-center font-semibold hidden md:block"
            key={index}
          >
            {item.nome}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
