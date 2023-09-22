import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { useState } from "react";
import { createBrand } from "../../http/deviceAPI";

const CreateBranad = observer(() => {
  const [brand, setBrand] = useState("");

  const { deviceStore } = useContext(Context);

  const submit = (e) => {
    e.preventDefault();
    createBrand(brand);
    deviceStore.setBrandModal(false);
  };

  return (
    <div
      className={`w-full min-h-screen fixed transition-all ease-in-out delay-100  ${
        deviceStore.brandModal ? "translate-x-[0%] " : "translate-x-[-300%]  "
      } flex items-center justify-center top-0`}
    >
      <div className="w-[800px] bg-light rounded-[10px] p-[20px]  ">
        <div className="flex justify-between ">
          <h1 className="text-dark text-[30px] font-[600] ">Create Brand</h1>
          <div
            className="relative p-[10px] px-[20px] cursor-pointer "
            onClick={() => deviceStore.setBrandModal(false)}
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
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
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

export default CreateBranad;
