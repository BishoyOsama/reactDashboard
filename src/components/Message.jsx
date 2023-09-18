import React from "react";

const Message = ({ messageImg, messageName }) => {
  return (
    <div className="flex border-b-1 p-4 items-center gap-x-5 hover:bg-gray-200 cursor-pointer">
      <img src={messageImg} alt={messageName} className="w-1/4 rounded-full"/>
      <div className="flex flex-col gap-y-1">
        <h2 className="font-semibold text-xl">{messageName}</h2>
        <p className="text-xs text-gray-400">Hello love</p>
        <p className="text-xs text-gray-400">11:23 PM</p>
      </div>
    </div>
  );
};

export default Message;
