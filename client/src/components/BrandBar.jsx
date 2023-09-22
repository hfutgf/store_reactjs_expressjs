import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { fetchBrands } from "../http/deviceAPI";
import { useState } from "react";

const BrandBar = observer(() => {
  const { deviceStore } = useContext(Context);
  const [brand, setBrand] = useState({});
  useEffect(() => {
    fetchBrands().then((res) => deviceStore.setBrands(res));
  }, []);

  const lSBrand = JSON.parse(localStorage.getItem("selectedBrand"));
  const clickBrand = (brand) => {
    deviceStore.setSelectedBrand(brand);
    const b = localStorage.setItem(
      "selectedBrand",
      JSON.stringify(deviceStore.selectedBrand)
    );
    setBrand(lSBrand);
  };

  return (
    <ul className="flex items-center flex-wrap">
      {deviceStore.brands.map((brand) => (
        <li
          onClick={() => clickBrand(brand)}
          key={brand.id}
          className={`p-[10px] border-t-[1px] border-b-[1px] border-l-[.5px] border-r-[.5px] border-solid border-light  text-light text-[18px] font-[600] cursor-pointer ${
            brand.id === lSBrand.id ? "bg-bluelight" : " "
          } `}
        >
          {brand.name}
        </li>
      ))}
    </ul>
  );
});

export default BrandBar;
