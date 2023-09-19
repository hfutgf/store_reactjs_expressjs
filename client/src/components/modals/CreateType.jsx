import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { createType } from "../../http/deviceAPI";
import { useState } from "react";

const CreateType = observer(() => {
  const { deviceStore } = useContext(Context);

  const [type, setType] = useState("");

  const submit = (e) => {
    e.preventDefault();
    createType(type);
    deviceStore.setTypeModal(false);
  };

  const tM = JSON.parse(localStorage.getItem("typeModal"));

  return (
    <div
      className={`w-full min-h-screen fixed transition-all ease-in-out delay-100  ${
        tM ? "translate-x-[0%] " : "translate-x-[-300%]  "
      } flex items-center justify-center top-0`}
    >
      <div className="w-[800px] bg-light rounded-[10px] p-[20px]  ">
        <div className="flex justify-between ">
          <h1 className="text-dark text-[30px] font-[600] ">Create Type</h1>
          <div
            className="relative p-[10px] px-[20px] cursor-pointer "
            onClick={() => deviceStore.setTypeModal(false)}
          >
            <span className="w-[20px] h-[3px] bg-dark rotate-[45deg] absolute "></span>
            <span className="w-[20px] h-[3px] bg-dark rotate-[135deg] absolute"></span>
          </div>
        </div>
        <form onSubmit={submit} className="mt-[50px]">
          <label
            htmlFor="createbrand"
            className="text-[20px] font-[600] text-dark "
          >
            Name:
            <input
              value={type}
              onChange={(e) => setType(e.target.value)}
              type="text"
              className="w-full py-[10px] border-[1px] border-solid border-dark rounded-[5px] px-[20px]"
              id="createbrand"
            />
          </label>
          <button
            type="submit"
            className="py-[10px] px-[20px] rounded-[10px] bg-bluelight text-light text-[20px] font-[600] mt-[30px] w-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
});

export default CreateType;
