import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const BrandBar = observer(() => {
  const { deviceStore } = useContext(Context);
  return (
    <ul className="flex items-center flex-wrap">
      {deviceStore.brands.map((brand) => (
        <li
          onClick={() => deviceStore.setSelectedBrand(brand)}
          key={brand.id}
          className={`p-[10px] border-t-[1px] border-b-[1px] border-l-[.5px] border-r-[.5px] border-solid border-light  text-light text-[18px] font-[600] cursor-pointer ${
            brand.id === deviceStore.selectedBrand.id
              ? "border-bluelight"
              : ""
          } `}
        >
          {brand.name}
        </li>
      ))}
    </ul>
  );
});

export default BrandBar;
