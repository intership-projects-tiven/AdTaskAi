import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function MovingLogo() {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(() => {

      }, {scope: scope})
  return (
    <div className="overflow-hidden grid grid-cols-1"  ref={scope}>
        <div className="slider-track grid grid-cols-7 items-center gap-4 justify-between my-32 place-items-center">
          <img src="./1.png" alt="w image" className="h-16 grayscale opacity-50  " />
          <img src="./3.png" alt="w image" className="h-16 grayscale opacity-50 slider-track " />
          <img src="./4.png" alt="w image" className="h-16 grayscale opacity-50 slider-track " />
          <img src="./5.png" alt="w image" className="h-16 grayscale opacity-50 slider-track " />
          <img src="./6.png" alt="w image" className="h-16 grayscale opacity-50 slider-track " />
          <img src="./7.png" alt="w image" className="h-16 grayscale opacity-50 slider-track " />
          <img src="./8.png" alt="w image" className="h-8 grayscale opacity-50 slider-track " />
        </div>
      </div>
  );
}

export default MovingLogo;
