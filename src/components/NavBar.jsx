import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import MenuItems from "./MenuItems";
import classNames from "classnames";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    "secção 1",
    "secção 2",
    "secção 3",
    "secção 4",
  ]);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const renderMenuItems = (styleOption) =>
    menuItems.map((item, index) => (
      <MenuItems key={index} name={item} style_option={styleOption} />
    ));

  const navbarClass =
    "z-10 fixed w-full h-14 flex items-center justify-between bg-black text-white px-3 py-1";
  const logoClass = "text-xl text-center font-bold";
  const iconsContainerClass = "flex gap-4 items-center justify-center";
  const menuIconClass = "md:hidden";
  const mobileMenuClass = classNames(
    "z-0 absolute w-screen h-52 flex flex-col gap-3 items-center justify-center bg-black transition-all duration-100 ease-in",
    {
      "mt-[17%]": open,
      "mt-[-30%] invisible": !open,
    },
  );

  return (
    <div>
      <nav className={navbarClass}>
        <span className={logoClass}>Store</span>
        <div className={iconsContainerClass}>
          <FaShoppingCart size={19} />
          <BiMenu
            color="white"
            size={28}
            onClick={toggleMenu}
            className={menuIconClass}
          />
          {renderMenuItems(false)}
        </div>
      </nav>
      <div className={mobileMenuClass}>{renderMenuItems(true)}</div>
    </div>
  );
};

export default Navbar;
