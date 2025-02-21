import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { horizontalLoop } from "../helper/animation";
import gsap from "gsap";
function MovingLogo() {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      const loop = horizontalLoop(boxes, {
        paused: true,
        repeat: -1,
      });
      loop.play();
    },
    { scope: scope }
  );
  return (
    <div className="overflow-hidden grid grid-cols-1" ref={scope}>
      <div className="flex  items-center gap-4 p-4 justify-between my-32 w-[200%] mx-auto ">
        <img
          src="./1.png"
          alt="w image"
          className="h-16 grayscale opacity-50  box"
        />
        <img
          src="./3.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./4.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./5.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./6.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./7.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./8.png"
          alt="w image"
          className="h-8 grayscale opacity-50 box "
        />
        <img
          src="./1.png"
          alt="w image"
          className="h-16 grayscale opacity-50  box"
        />
        <img
          src="./3.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./4.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./5.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./6.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./7.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <img
          src="./8.png"
          alt="w image"
          className="h-8 grayscale opacity-50 box "
        />
      </div>
    </div>
  );
}

export default MovingLogo;
