import React from "react";

interface props {
  className: string;
  children?: React.ReactNode;
}
function LightBorder({ className, children }: props) {
  return (
    <div
      className={`p-[1px] bg-gradient-to-r from-color8 to-color9 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default LightBorder;
