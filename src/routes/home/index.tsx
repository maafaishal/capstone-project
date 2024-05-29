import { Link } from "react-router-dom";

import "./index.css";

import Layout from "../../components/Layout";
import Promo from "../../components/Promo";

import bannerImg from "../../assets/banner.jpg";

function App() {
  return (
    <Layout>
      <main>
        <section className="section-1 flex flex-wrap justify-center">
          <div className="container mx-auto flex flex-wrap justify-center sm:justify-between text-center sm:text-left">
            <div className="mb-8 sm:mb-0">
              <h1 className="mb-8">Little Lemon</h1>
              <h2 className="mb-4">Chicago</h2>
              <p className="w-full sm:w-[320px]">
                We are a family owned Mediterraneran restaurant, focused on
                traditional recipes servred with a modern twist.
              </p>
              <Link to="/reservation">
                <button>Reserve Table</button>
              </Link>
            </div>
            <div>
              <img src={bannerImg} alt="banner" />
            </div>
          </div>
        </section>
        <Promo />
      </main>
    </Layout>
  );
}

export default App;
