import React from "react";
import LightBorder from "./LightBorder";

interface props {
  heading: string;
  children: React.ReactNode;
  description: string;
  className: string;
}
function FeatureBox({ heading, children, description, className }: props) {
  return (
    <LightBorder className={`${className}`}>
      <div
        className={`flex flex-col bg-[#1d1d1d4d] justify-end h-full  p-4 rounded-lg relative overflow-hidden`}
      >
        <p className="effect4 absolute -top-64 -left-56 z-10 w-full h-full scale-x-[30%] scale-y-[75%]">
          ●
        </p>
        <p className="effect2 absolute -left-28 top-16 z-10 w-full h-full scale-x-[80%] scale-y-115">
          ▲
        </p>
        <div className="z-20">{children}</div>
        <div>
          <h2 className="font-bold">{heading}</h2>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>
    </LightBorder>
  );
}

export default FeatureBox;
