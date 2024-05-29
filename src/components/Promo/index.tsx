import "./index.css";

import menu1 from "../../assets/banner.jpg";

const MENUS = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum. Ut consequat semper viverra nam libero justo laoreet.",
    image: menu1,
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis. Diam in arcu cursus euismod quis.",
    image: menu1,
  },
  {
    name: "Lemon Dessert",
    price: "$7.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Nam libero justo laoreet sit amet.",
    image: menu1,
  },
];

function Promo() {
  return (
    <section className="promo-section container mx-auto w-full">
      <div className="w-full">
        <div className="w-full flex flex-wrap items-center justify-center sm:justify-between text-center mb-8">
          <h1 className="mb-4 sm:mb-0">This weeks specials!</h1>
          <div>
            <button>Online Menu</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-fr gap-6 sm:gap-4 text-center sm:text-left">
          {MENUS.map((menu) => (
            <div key={menu.name} className="">
              <div>
                <img
                  className="rounded-t-lg w-full h-[320px] sm:h-[272px] object-cover"
                  src={menu.image}
                  alt={menu.name}
                />{" "}
              </div>
              <div className="bg-gray-200 p-8 rounded-b-lg">
                <div className="flex justify-between mb-8">
                  <h3>{menu.name}</h3>
                  <h4 className="font-bold text-orange-400">{menu.price}</h4>
                </div>
                <p className="mb-8">{menu.description}</p>
                <a href="/" className="font-bold">
                  Order a delivery
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Promo;
