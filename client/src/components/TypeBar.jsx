import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { fetchTypes } from "../http/deviceAPI";
import { useState } from "react";

const TypeBar = observer(() => {
  const [render, setRender] = useState(0);

  const lSType = JSON.parse(localStorage.getItem("selectedType"));

  const { deviceStore } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((res) => deviceStore.setTypes(res));
  }, []);

  const clickType = (type) => {
    deviceStore.setSelectedType(type);
    setRender((v) => v++);
    localStorage.setItem(
      "selectedType",
      JSON.stringify(deviceStore.selectedType)
    );
  };
  
  return (
    <ul className="w-[20%] border-[1px] border-solid border-light rounded-[3px] p-[12px] flex flex-col items-start gap-[5px]">
      {deviceStore.types.map((type, i) => (
        <li
          onClick={() => clickType(type)}
          key={i}
          className={`text-light text-[20px] font-[600]  cursor-pointer ${
            type.id === lSType.id ? "underline" : ""
          } hover:underline`}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
});

export default TypeBar;
