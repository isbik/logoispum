import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

interface Props {}

const Header = (props: Props) => {
  return (
    <header className="my-8 flex items-center container mx-auto px-4">
      <div className="flex-grow">
        <Image src={logo} alt="logo"></Image>
      </div>

      <nav className="mr-12">
        <ul className="hidden sm:flex gap-12">
          <li>
            <a className="uppercase font-semibold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="uppercase font-semibold" href="/">
              Properties
            </a>
          </li>
          <li>
            <a className="uppercase font-semibold" href="/">
              Agents
            </a>
          </li>
          <li>
            <a className="uppercase font-semibold" href="/">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <button className="font-bold text-blue-400 border-blue-400 border rounded-lg px-8 py-2">
        LOG IN
      </button>
    </header>
  );
};

export default Header;
