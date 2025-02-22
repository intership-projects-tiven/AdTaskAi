import { NavPrimaryButton, NavSecondaryButton } from "./Buttons";
import { MenuIcon } from "./icons";
import LogoDesign from "./LogoDesign";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="w-full ">
      <nav className="h-16 container bg-black/25 backdrop backdrop-blur-md ring-1 ring-gray-800 grid md:grid-cols-[0.5fr_1fr_0.5fr] grid-cols-2 md:rounded-2xl  md:my-4 mx-auto justify-between py-4 px-8 ">
        <LogoDesign />
        <MainNav />
        <div className="md:flex justify-end items-center gap-4 -mt-1 hidden">
          <NavSecondaryButton className="lg:min-w-40 min-w-20">Log In</NavSecondaryButton>
          <div className="block md:hidden">
            <NavPrimaryButton className="lg:min-w-40 min-w-20">Schedule a Call</NavPrimaryButton>
          </div>
          <div className="block ">
            <NavPrimaryButton className="min-w-10 ">🎤</NavPrimaryButton>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 -mt-1 md:hidden">
          <MenuIcon/>
        </div>
      </nav>
    </header>
  );
}
