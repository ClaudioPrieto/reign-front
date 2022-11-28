import React, { FC } from "react";

const Banner: FC = () => {

  return (
      <div className="flex flex-col mt-4">
        <p className="mx-auto text-5xl">
          💊
        </p>
        <p className="mx-auto text-xl mt-[21px] font-medium">
          Revisa tus compras
        </p>
        <p className="mx-auto text-base mt-0.5 mb-[23px]">
          Agrega al carro si necesitas reponer
        </p>
      </div>
  );
}

export default Banner;
