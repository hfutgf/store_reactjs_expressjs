import { observer } from "mobx-react-lite";
import React from "react";

const Characteristics = observer(({ info, addInfo, setInfo }) => {
  const changeInfo = (key, value, id) => {
    setInfo(info.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
  };

  const btnDelClick = (id) => {
    const infos = info.filter((v) => v.id !== id);
    setInfo(infos);
  };
  return (
    <div className="flex flex-col gap-[20px] mt-[20px]">
      <div className="flex items-center justify-between">
        <h3 className="text-dark text-[20px] font-[600]">Characteristics:</h3>
        <button
          type="button"
          onClick={() => addInfo()}
          className="bg-green p-[10px] text-light text-[20px] fonr-[600] rounded-[5px] select-none"
        >
          Add column
        </button>
      </div>
      <div className="flex flex-col gap-[10px]">
        {info.map((item) => (
          <div key={item.id} className="flex items-center gap-[20px]">
            <input
              value={item.title}
              onChange={(e) => changeInfo("title", e.target.value, item.id)}
              className="border-[1px] border-solid border-[#444] rounded-[5px] p-[10px] outline-none "
              type="text"
              placeholder="Name"
            />
            <input
              value={item.description}
              onChange={(e) =>
                changeInfo("description", e.target.value, item.id)
              }
              type="text"
              placeholder="Value"
              className="border-[1px] border-solid border-[#444] rounded-[5px] p-[10px] outline-none "
            />
            <button
              type="button"
              onClick={() => btnDelClick(item.id)}
              className="p-[10px] rounded-[5px] bg-red text-light "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Characteristics;
