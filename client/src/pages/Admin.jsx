import React from "react";
import CreateBrand from "../components/modals/CreateBrand";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../main";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = observer(() => {
  const { deviceStore } = useContext(Context);

  return (
    <div className="min-h-screen bg-purple  ">
      <div className="container mx-auto flex items-center justify-around relative ">
        <button
          onClick={() => deviceStore.setBrandModal(true)}
          className="text-light text-[32px] font-[600] border-[1px] border-light rounded-[10px]  py-[10px] px-[20px] transition-all duration-200 ease-in-out hover:bg-bluelight"
        >
          Brand
        </button>
        <button
          onClick={() => deviceStore.setTypeModal(true)}
          className="text-light text-[32px] font-[600] border-[1px] border-light rounded-[10px]  py-[10px] px-[20px] transition-all duration-200 ease-in-out hover:bg-bluelight"
        >
          Type
        </button>
        <button
          onClick={() => deviceStore.setDeviceModal(true)}
          className="text-light text-[32px] font-[600] border-[1px] border-light rounded-[10px]  py-[10px] px-[20px] transition-all duration-200 ease-in-out hover:bg-bluelight"
        >
          Device
        </button>
        <CreateBrand />
        <CreateType />
        <CreateDevice />
      </div>
    </div>
  );
});

export default Admin;
