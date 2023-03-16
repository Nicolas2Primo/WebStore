import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ name, className }) => {
  const combinedClassName = `text-md text-center font-semibold ${className}`;

  return (
    <Link to={`/${name.toLowerCase()}`} className={combinedClassName}>
      {name}
    </Link>
  );
};

export default MenuItems;
