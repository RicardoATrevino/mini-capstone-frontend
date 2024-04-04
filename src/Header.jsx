import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="bg-gray-800 text-gray-300 p-4">
        <a>WEB DEV REACT TAILWIND CSS</a>
        <a className="rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white" href="#">
          Home
        </a>
        <a className="rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white" href="#">
          Link
        </a>
      </nav>
    </header>
  );
}
