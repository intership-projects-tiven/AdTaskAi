import { CornerIcon } from "./icons";

function GridItem() {
  return (
    <div className=" w-[21.125rem] h-[18.25rem] p-5 relative">
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
          <div className="h-[2px] bg-gradient-to-r from-black via-color14  to-black"></div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
        <div className="  h-[22px] w-[370px] flex flex-col justify-center">
          <div className="h-[2px] bg-gradient-to-r from-black via-color14 to-black"></div>
        </div>
      </div>
      {/* vertical lines  */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-10">
        <div className="  h-[320px] w-[18px] flex justify-center">
          <div className="bg-red-200 h-full w-[2px] bg-gradient-to-b from-black via-color14 to-black "></div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-10">
        <div className="h-[320px] w-[17.4px] flex justify-center">
          <div className="bg-red-200 h-full w-[2px] bg-gradient-to-b from-black via-color14 to-black"></div>
        </div>
      </div>
      <h3>Smart Ad Targeting</h3>
      <p>
        AI-powered audience segmentation ensures your ads reach the right
        people, delivering higher ROI and maximum conversion rates.
      </p>
    </div>
  );
}

export default GridItem;
