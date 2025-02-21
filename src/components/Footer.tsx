import { EmailIcon, LocationIcon } from "./icons";
import LogoDesignMain from "./LogoDesignMain";

function Footer() {
  return (
    <footer className="border-t-[1px] border-color10 p-4 bg-black/25 backdrop backdrop-blur-md">
      <div className="container mx-auto grid grid-cols-[1fr_0.5fr_0.5fr] p-8">
        <div>
          <div>
            <LogoDesignMain />
          </div>
          <div className="text-xs grid grid-cols-[32px_1fr] gap-y-4 gap-x-1 place-content-center items-center text-color14">
            <div className="flex items-center justify-center">
              <EmailIcon />
            </div>
            <a href="mailto:contact@adtask.ai" className="underline">
              contact@adtask.ai
            </a>
            <div className="flex items-center justify-center">
              <LocationIcon />
            </div>
            <p>San Francisco Bay Area</p>
          </div>
        </div>
        <ul className="flex flex-col gap-5 text-center">
          <li className="font-semibold">Utilities</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Tools</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <ul className="flex flex-col gap-5 text-center">
          <li className="font-semibold">Socials</li>
          <li><a href="">X</a></li>
          <li><a href="">LinkedIn</a></li>
          <li><a href="">instagram</a></li>
          <li><a href="">Facebook</a></li>
        </ul>
      </div>
      <p className="text-xs text-center">All right reserved &copy; 2025 adTask</p>
    </footer>
  );
}

export default Footer;
