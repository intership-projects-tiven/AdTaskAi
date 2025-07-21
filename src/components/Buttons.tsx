import TwinklingStars from "./TwinklingStars";

interface props {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className }: props) {
  return (
    <div className="rounded-full p-1">
      <button
        className={`relative min-w-40 overflow-hidden rounded-full bg-color3 py-2 ${className} `}
      >
        {children}
        <div className="absolute top-0">
          <TwinklingStars />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          <div className="glow mx-auto rounded-lg"></div>
        </div>
      </button>
    </div>
  );
}

export function SecondaryButton({ children, className }: props) {
  return (
    <button
      className={`relative min-w-40 overflow-hidden rounded-full py-2 shadow-red-900 ring-1 ring-color2 ${className}`}
    >
      {children}
      <div className="absolute top-0">
        <TwinklingStars />
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
export function NavPrimaryButton({ children, className }: props) {
  return (
    <button
      className={`relative overflow-hidden rounded-full bg-color3 py-2 ring-1 ring-color2 ${className}`}
    >
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
export function NavSecondaryButton({ children, className }: props) {
  return (
    <button
      className={`relative min-w-40 overflow-hidden rounded-full py-2 shadow-red-900 ring-1 ring-color2 ${className}`}
    >
      {children}

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
