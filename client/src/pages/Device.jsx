import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import Star from "../assets/star.png";
import { useEffect } from "react";
import { fetchDevice, fetchOneDevice } from "../http/deviceAPI";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Device = observer(() => {
  const [device, setDevice] = useState({ info: [] });
  const { deviceStore } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((res) => deviceStore.setDevice(res));
  }, []);

  return (
    <div className="bg-purple min-h-screen ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3">
          <div className="overflow-hidden p-[20px]">
            <img
              src={import.meta.env.VITE_API_KEY + "/" + deviceStore.device.img}
              alt="device-img"
              height={400}
              className="rounded-[10px]"
            />
          </div>
          <div className="flex justify-center items-center relative">
            <img src={Star} alt="star-img" />
            <span className="text-[100px] text-light font-[700] absolute top-auto bottom-auto right-auto left-auto">
              {deviceStore.device.rating}
            </span>
          </div>
          <div className="">
            <h4 className="text-[50px] text-light font-[600]">
              Price: {deviceStore.device.price} $
            </h4>
            <button className="py-[10px] w-[50%] bg-bluelight text-light text-[32px] font-[600] rounded-[10px] mt-[30px]">
              Add to Basket
            </button>
          </div>
        </div>
        <div className="mt-[20px] ">
          <h2 className="text-light text-[32px] font-[600]">
            Characteristics:
          </h2>
          <ul className="flex flex-col w-full">
            {device.info.map((character) => (
              <li
                key={character.id}
                className="text-[20px] text-light font-[600] "
              >
                {character.character}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Device;
