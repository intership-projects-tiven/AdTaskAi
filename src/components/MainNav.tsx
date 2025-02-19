import { ArrowDown } from "./icons";

function MainNav() {
  return (
      <ul className="flex gap-4 justify-center items-center">
        <li className="flex gap-1">
          Products
          <span>
            <ArrowDown />
          </span>
        </li>
        <li className="flex gap-1">
          tools
          <span>
            <ArrowDown />
          </span>
        </li>
        <li className="flex gap-1">contact Us </li>
      </ul>
  );
}

export default MainNav;
