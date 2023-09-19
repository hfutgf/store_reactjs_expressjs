import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/constants";
import { useContext } from "react";
import { Context } from "../main";

const DeviceCard = observer(({ device }) => {
  const { deviceStore } = useContext(Context);
  return (
    <Link
      onClick={() => deviceStore.setChangeDevice(device.id)}
      to={DEVICE_ROUTE + `/${device.id}`}
      className="max-w-[200px] min-w-[200px] min-h-[320px] max-h-[320px] border-[1px] border-solid border-light rounded-[5px] flex  flex-col overflow-hidden"
    >
      <img
        src={device.img}
        alt="img"
        width={200}
        height={210}
        className="w-[200px] h-[210px]"
      />
      <h3 className="text-[16px] text-light font-[600] mt-[15px] px-[5px] ">
        {device.name}
      </h3>
      <p className=" px-[5px] text-[14px] text-light font-[500]">
        {device.price} $
      </p>
      <div className="flex items-center mt-[10px]  px-[5px]">
        <button className="px-[15px] py-[4px] rounded-[10px]  text-light bg-bluelight font-[600] text-[16px] ml-[10px] mr-[30px] transition-all delay-100 ease-in-out hover:bg-opacity-70">
          Buy
        </button>
        <span className="text-[16px] font-[600] text-yellow ml-[50px]">
          {device.rating} ★
        </span>
      </div>
    </Link>
  );
});

export default DeviceCard;
