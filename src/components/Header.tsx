import { PrimaryButton, SecondaryButton } from "./Buttons";
import LogoDesign from "./LogoDesign";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="w-full ">
      <nav className="h-16 container bg-black/25 backdrop backdrop-blur-md ring-1 ring-gray-800 grid grid-cols-[0.5fr_1fr_0.5fr] rounded-2xl  my-4 mx-auto justify-between py-4 px-8 ">
        <LogoDesign />
        <MainNav />
        <div className="flex justify-end items-center gap-4 -mt-1">
          <PrimaryButton>Log In</PrimaryButton>
          <SecondaryButton>Schedule a Call</SecondaryButton>
        </div>
      </nav>
    </header>
  );
}
