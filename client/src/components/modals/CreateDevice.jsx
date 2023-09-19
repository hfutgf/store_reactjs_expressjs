import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { useState } from "react";

const CreateDevice = observer(() => {
  const { deviceStore } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");



  return (
    <div
      className={`w-full min-h-screen fixed transition-all ease-in-out delay-100  ${
        deviceStore.deviceModal ? "translate-x-[0%] " : "translate-x-[-300%]  "
      } flex items-center justify-center top-0`}
    >
      <div className="w-[800px] bg-light rounded-[10px] p-[20px]  ">
        <div className="flex justify-between ">
          <h1 className="text-dark text-[30px] font-[600] ">Create Device</h1>
          <div
            className="relative p-[10px] px-[20px] cursor-pointer "
            onClick={() => deviceStore.setDeviceModal(false)}
          >
            <span className="w-[20px] h-[3px] bg-dark rotate-[45deg] absolute "></span>
            <span className="w-[20px] h-[3px] bg-dark rotate-[135deg] absolute"></span>
          </div>
        </div>
        <form className="mt-[50px] flex flex-col gap-[20px]">
          <label
            htmlFor="createbrand"
            className="text-[20px] font-[600] text-dark "
          >
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full py-[10px] border-[1px] border-solid border-dark rounded-[5px] px-[20px]"
              id="createbrand"
            />
          </label>
          <label htmlFor="price" className="text-[20px] font-[600] text-dark ">
            Price
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              type="text"
              className="w-full py-[10px] border-[1px] border-solid border-dark rounded-[5px] px-[20px]"
            />
          </label>
          <label
            htmlFor="img"
            className="text-[20px] font-[600] text-dark w-[50%] "
          >
            Image
            <input
              id="img"
              type="file"
              className="w-full py-[10px]  px-[20px]"
            />
          </label>
          <div className="flex items-center gap-[20px]">
            <div className="w-[50%] flex flex-col gap-[5px]">
              <span className="text-[16px] text-dark font-[600]">Brand:</span>
              <select
                onChange={(e) => setBrand(e.target.value)}
                className="border-[1px] border-dark bolrder-solid w-[60%] rounded-[3px] font-[600] text-[16px] outline-none"
              >
                <option value="notselected">Not selected</option>
                {deviceStore.brands.map((brand) => (
                  <option key={brand.id} value={`${brand.name.toLowerCase()}`}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[50%] flex flex-col gap-[5px]">
              <span className="text-[16px] text-dark font-[600]">Type:</span>
              <select
                onChange={(e) => setType(e.target.value)}
                className="border-[1px] border-dark bolrder-solid w-[60%] rounded-[3px] font-[600] text-[16px] outline-none"
              >
                <option value="notselected">Not selected</option>
                {deviceStore.types.map((type) => (
                  <option key={type.id} value={`${type.name.toLowerCase()}`}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
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

export default CreateDevice;
