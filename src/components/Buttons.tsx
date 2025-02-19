interface props{
  children: React.ReactNode;
  className?: string;
}
export function PrimaryButton({children}: props) {
  return (
    <button className="ring-1 px-4 py-2 min-w-32 rounded-full ring-color2 shadow-red-900 relative overflow-hidden">
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
export function SecondaryButton({children}: props) {
  return (
    <button className="ring-1 px-6 py-2 rounded-full ring-color2 bg-color3 relative overflow-hidden  ">
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
export function SecondaryButton2({children, className}: props) {
  return (
    <button className={`px-8 py-3 rounded-full bg-color3 relative overflow-hidden ${className}`}>
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
export function PrimaryButton2({children}: props) {
  return (
    <button className="px-4 py-2 min-w-32 rounded-full shadow-red-900 relative overflow-hidden">
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
