import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ name, style_option }) => {
  const className = `text-md text-center font-semibold ${
    style_option ? "text-white" : "hidden md:block"
  }`;

  return (
    <Link to={`/${name.toLowerCase()}`} className={className}>
      {name}
    </Link>
  );
};

export default MenuItems;
