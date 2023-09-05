import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import Star from "../assets/star.png";

const Device = observer(() => {
  const { deviceStore } = useContext(Context);
 
  return (
    <div className="bg-purple min-h-screen ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3">
          <div className="overflow-hidden p-[20px]">
            <img
              src={deviceStore.changeDevice.img}
              alt="device-img"
              height={400}
              className="rounded-[10px]"
            />
          </div>
          <div className="flex justify-center items-center relative">
            <img src={Star} alt="star-img" />
            <span className="text-[100px] text-light font-[700] absolute top-auto bottom-auto right-auto left-auto">
              {deviceStore.changeDevice.rating}
            </span>
          </div>
          <div className="">
            <h4 className="text-[50px] text-light font-[600]">
              Price: {deviceStore.changeDevice.price} $
            </h4>
          </div>
        </div>
        <div className="mt-[20px] ">
          <h2 className="text-light text-[32px] font-[600]">
            Characteristics:
          </h2>
          <ul className="flex flex-col w-full" >
            <li className="">Lorem ipsum dolor sit amet.</li>
            <li className="">Lorem ipsum dolor sit amet.</li>
            <li className="">Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Device;
