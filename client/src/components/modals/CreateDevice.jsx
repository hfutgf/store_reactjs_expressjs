import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { useState } from "react";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { useEffect } from "react";
import Characteristics from "./Characteristics";

const CreateDevice = observer(() => {
  const { deviceStore } = useContext(Context);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [img, setImg] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((res) => deviceStore.setTypes(res));
    fetchBrands().then((res) => deviceStore.setBrands(res));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", id: Date.now() }]);
  };

  const changeBrand = (value) => {
    const brand = deviceStore.brands.find((i) => i.name === value);
    deviceStore.setSelectedBrand(brand);
  };

  const changeType = (value) => {
    const type = deviceStore.types.find((i) => i.name === value);
    deviceStore.setSelectedType(type);
  };

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", img?.[0]);
    formData.append("brandId", deviceStore.selectedBrand.id);
    formData.append("typeId", deviceStore.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData)
      .then((data) => {
        if (data) {
          alert("Successfully");
          deviceStore.setDeviceModal(false);
        }
      })
      .catch((e) => console.log(e));
  };

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
        <form onSubmit={submit} className="mt-[50px] flex flex-col gap-[20px]">
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
              onChange={(e) => {
                setPrice(Number(e.target.value));
              }}
              id="price"
              type="number"
              className="w-full py-[10px] border-[1px] border-solid border-dark rounded-[5px] px-[20px]"
            />
          </label>
          <div className="mt-[10px]">
            <label
              htmlFor="img"
              className="text-[20px] font-[600] p-[10px] w-[20%] bg-bluelight text-light text-center rounded-[10px] cursor-pointer"
            >
              Selected IMG
              <input
                id="img"
                type="file"
                className=" hidden "
                onChange={(e) => setImg(e.target.files)}
              />
            </label>
            <span
              className={`p-[5px] rounded-[5px] text-light ml-[5px] ${
                img ? "bg-green" : "bg-red"
              } `}
            >
              {img ? "Selected" : "Not selected"}
            </span>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="w-[50%] flex flex-col gap-[5px]">
              <span className="text-[16px] text-dark font-[600]">Brand:</span>
              <select
                onChange={(e) => changeBrand(e.target.value)}
                className="border-[1px] border-dark bolrder-solid w-[60%] rounded-[3px] font-[600] text-[16px] outline-none"
              >
                <option value="notselected">
                  {deviceStore.selectedBrand.name || "Selected Brand"}
                </option>
                {deviceStore.brands.map((brand) => (
                  <option key={brand.id} value={`${brand.name}`}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[50%] flex flex-col gap-[5px]">
              <span className="text-[16px] text-dark font-[600]">Type:</span>
              <select
                onChange={(e) => changeType(e.target.value)}
                className="border-[1px] border-dark bolrder-solid w-[60%] rounded-[3px] font-[600] text-[16px] outline-none"
              >
                <option value="notselected">
                  {deviceStore.selectedType.name || "Selected Brand"}
                </option>
                {deviceStore.types.map((type) => (
                  <option key={type.id} value={`${type.name}`}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Characteristics addInfo={addInfo} info={info} setInfo={setInfo} />
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
