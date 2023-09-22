import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import TypeBar from "../components/TypeBar";
import { observer } from "mobx-react-lite";
import BrandBar from "../components/BrandBar";
import DeviceCard from "../components/DeviceCard";
import { useEffect } from "react";
import { fetchDevice } from "../http/deviceAPI";

const Shop = observer(() => {
  const { deviceStore } = useContext(Context);

  useEffect(() => {
    fetchDevice().then((res) => deviceStore.setDevices(res.rows));
  }, []);


  return (
    <div className="min-h-screen bg-purple">
      <div className="container mx-auto flex ">
        <TypeBar />
        <div className="w-[80%] px-[24px] py-[10px]">
          <BrandBar />
          <h2 className="text-[22px] text-light font-[600] mt-[10px]">
            Type: {deviceStore.selectedType.name}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-[24px] mt-[24px]">
            {deviceStore.devices.map((device) => (
              <DeviceCard device={device} key={device.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Shop;
