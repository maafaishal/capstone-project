import { useState } from "react";
import { Link } from "react-router-dom";

import logoAsset from "../../assets/logo.svg";
import burgerImg from "../../assets/burger.svg";
import crossImg from "../../assets/cross.svg";

import "./index.css";

const MENUS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/",
  },
  {
    name: "Menu",
    url: "/",
  },
  {
    name: "Reservation",
    url: "/reservation",
  },
  {
    name: "Order Online",
    url: "/",
  },
  {
    name: "Login",
    url: "/",
  },
];

function Header() {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center px-7 py-4">
        <Link to="/">
          <img src={logoAsset} alt="logo" />
        </Link>
        <nav className="hidden md:flex">
          <ul>
            {MENUS.map((menu) => (
              <li key={menu.name}>
                <Link to={menu.url}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <img
          className="block md:hidden h-8"
          src={burgerImg}
          alt="burger menu"
          onClick={() => setDisplayDrawer(true)}
        />
      </div>
      <div
        className={`${
          displayDrawer ? "fixed" : "hidden"
        } top-0 left-0 z-40  w-screen h-screen`}
        style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
      >
        <img
          className={`absolute right-[28px] top-[28px] h-8 opacity-100`}
          src={crossImg}
          alt="cross menu"
          onClick={() => setDisplayDrawer(false)}
        />
      </div>
      <div
        id="drawer-example"
        className={`${
          displayDrawer ? "" : "-translate-x-full"
        } fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800`}
        aria-labelledby="drawer-label"
      >
        <ul>
          {MENUS.map((menu) => (
            <li key={menu.name} className="mb-4">
              <Link
                to={menu.url}
                className="text-3xl text-white"
                onClick={() => setDisplayDrawer(false)}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
