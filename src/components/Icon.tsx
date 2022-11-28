import React from "react";

export interface IconProps {
    className?: string
    iconType: string
    hasSign?: boolean
}

const Icon = ({className, iconType, hasSign = false}: IconProps) => {

  return (
      <div className="relative">
        {iconType === 'burger-menu' && 
          <img src='burger-menu.svg' alt="burger-menu"/>
        }
        {iconType === 'shopping-cart' && 
          <img src='shopping-cart.svg' alt="shopping-cart" className="p-3"/>
        }
        {iconType === 'black-shopping-cart' && 
          <img src='black-shopping-cart.svg' alt="black-shopping-cart" className="p-3"/>
        }
        {iconType === 'search' && 
          <img src='search.svg' alt="search" className=""/>
        }
        {hasSign && <img src='add-circle.svg' alt="add-circle" className="absolute top-3 right-3"/>}
      </div>
  );
}

export default Icon;
