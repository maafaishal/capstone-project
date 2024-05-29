import { Link } from "react-router-dom";

import smallLogo from "../../assets/small_logo.png";

import "./index.css";

const LINKS = [
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

function Footer() {
  return (
    <footer className="container mx-auto grid grid-cols-1 sm:grid-cols-4 text-center sm:text-left">
      <section className="pb-8 sm:px-4">
        <img src={smallLogo} alt="small logo" className="mx-auto" />
      </section>
      <section className="pb-8 sm:px-4">
        <h3>Important Links</h3>
        <ul>
          {LINKS.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.url}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="pb-8 sm:px-4">
        <h3>Contact</h3>
        <ul>
          <li>Address: 123 Jakarta, Indonesia</li>
          <li>Phone: +62 123 456 789</li>
          <li>Email: little@lemon.com</li>
        </ul>
      </section>
      <section className="pb-8 sm:px-4">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="/#">Facebook</a>
          </li>
          <li>
            <a href="/#">Instagram</a>
          </li>
          <li>
            <a href="/#">Twitter (X)</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
