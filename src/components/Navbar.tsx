import React from "react";
import Icon from "./Icon";

const Navbar = () => {

  return (
    <nav className="w-full shadow h-16 bg-[#0277BD]">
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center">
            <button className="text-white">
              <Icon iconType="burger-menu"/>
            </button>
            <p className="text-white text-xl">Mi Pastillero</p>
          </div>
          <div className="flex items-center">
            <button className="text-white">
              <Icon iconType="search"/>
            </button>
            <button className="text-white">
              <Icon iconType="shopping-cart"/>
            </button>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
