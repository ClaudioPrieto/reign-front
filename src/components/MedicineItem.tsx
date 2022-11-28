import React from "react";
import Icon from "./Icon";


export interface MedicineItemProps {
    name: string
    concentration: string
    imagesUrl?: string
}

const MedicineItem = ({
  name,
  concentration,
  imagesUrl, 
}: MedicineItemProps) => {

  return (
      <div className="flex ml-1">
        <div className="m-4">
          <img src={imagesUrl} alt='' className="w-[62px] h-[62px] object-contain"/>  
        </div>
        <div className="flex flex-col mt-2">
          <p className="font-semibold text-[15px]">{ name }</p>
          <p className="text-[13px]">{ concentration }</p>
          <p className="text-[13px] underline">Quedan 5 comprimidos</p>
          <p className="text-[12px] underline">Para 5 dias</p>
        </div>
        <div className="m-auto">
          <Icon iconType="black-shopping-cart" hasSign/>
        </div>
      </div>
  );
}

export default MedicineItem;
