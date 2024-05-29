import "./index.css";

import Layout from "../../components/Layout";
import Promo from "../../components/Promo";

function App() {
  const subminHandler = () => {
    alert("Booking has been submitted");
  };

  return (
    <Layout>
      <main>
        <section className="booking-section container mx-auto">
          <h1 className="text-center mb-8">Reserve a Table</h1>
          <form className="rounded-lg">
            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Date:
              </label>
              <input
                name="date"
                id="date"
                type="date"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="90210"
                required
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Time:
              </label>
              <select
                name="time"
                id="time"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Select time</option>
                <option value="5">5 PM</option>
                <option value="6">6 PM</option>
                <option value="7">7 PM</option>
                <option value="8">8 PM</option>
                <option value="9">9 PM</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="guest"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Number of Guests:
              </label>
              <input
                name="guest"
                id="guest"
                type="number"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="90210"
                required
              />
            </div>
            <div>
              <label
                htmlFor="occasion"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Occasion:
              </label>
              <select
                name="occasion"
                id="occasion"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Select an option</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
            <button type="submit" onClick={subminHandler}>
              Reserve
            </button>
          </form>
        </section>
        <Promo />
      </main>
    </Layout>
  );
}

export default App;
