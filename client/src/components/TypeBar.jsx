import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const TypeBar = observer(() => {
  const { deviceStore } = useContext(Context);
  return (
    <ul className="w-[20%] border-[1px] border-solid border-light rounded-[3px] p-[12px] flex flex-col items-start gap-[5px]">
      {deviceStore.types.map((type, i) => (
        <li
          onClick={() => deviceStore.setSelectedType(type)}
          key={i}
          className={`text-light text-[20px] font-[600]  cursor-pointer ${
            type.id === deviceStore.selectedType.id ? "underline" : ""
          } hover:underline`}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
});

export default TypeBar;
