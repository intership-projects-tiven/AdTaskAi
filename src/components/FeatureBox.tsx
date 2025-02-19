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
        className={`flex flex-col radialGradient2 justify-end h-full  p-4 rounded-lg`}
      >
        <div>{children}</div>
        <div>
          <h2 className="font-bold">{heading}</h2>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>
    </LightBorder>
  );
}

export default FeatureBox;
