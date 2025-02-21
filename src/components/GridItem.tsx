import React from "react";
import { CornerIcon } from "./icons";
interface props {
  children: React.ReactNode;
}
function GridItem({ children }: props) {
  return (
    <div className=" w-[21.125rem] min-[]:h-[18.25rem] p-3 relative">
      <div className="absolute -top-10 -left-10">
        <CornerIcon />
      </div>
      <div className="absolute -top-10 -right-10">
        <CornerIcon />
      </div>
      <div className="absolute -bottom-10 -left-10">
        <CornerIcon />
      </div>
      <div className="absolute -bottom-10 -right-10 flex justify-center items-center">
        <CornerIcon />
      </div>
      {/* horizontal lines  */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="  h-[26px] w-[370px] flex flex-col justify-center">
          <div className="h-[2px] bg-gradient-to-r from-black via-color14  to-black before:content-[''] before:bg-white before:absolute before:w-[50px] before:h-[3px] before:left-1/2 before:-translate-x-1/2 glow2 "></div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
        <div className="  h-[22px] w-[370px] flex flex-col justify-center">
          <div className="h-[2px] bg-gradient-to-r from-black via-color14 to-black"></div>
        </div>
      </div>
      {/* vertical lines  */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-10">
        <div className="  h-[320px] w-[16px] flex justify-center">
          <div className="bg-red-200 h-full w-[2px] bg-gradient-to-b from-black via-color14 to-black "></div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-10">
        <div className="h-[320px] w-[16px] flex justify-center">
          <div className="bg-red-200 h-full w-[2px] bg-gradient-to-b from-black via-color14 to-black"></div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default GridItem;
