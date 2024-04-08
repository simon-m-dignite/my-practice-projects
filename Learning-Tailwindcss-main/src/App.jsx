import { IoPlayOutline } from "react-icons/io5";
import "./App.css";
import FeaturesCard from "./components/FeaturesCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TestimonialCard from "./components/TestimonialCard";
import InternationalPaymentsCard from "./components/InternationalPaymentsCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full lg:px-14 flex flex-col md:flex-row pt-8 md:py-14">
        <div className="w-full md:w-2/4 px-8 md:pr-28">
          <div className="shadow py-10 px-10 p-10 rounded-lg">
            <div className="bg-slate-100 p-4 rounded-lg mb-4">
              <p className="text-xs mb-1">Send Amount</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold">$15,00.00</p>
                <div className="relative inline-block text-left">
                  <div>
                    <button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-600">
                      USD
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg mb-4">
              <p className="text-xs mb-1">Send Amount</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold">$15,00.00</p>
                <div className="relative inline-block text-left">
                  <div>
                    <button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-600">
                      EUR
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-2 bg-indigo-700 rounded-lg text-white hover:bg-indigo-600">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/4 flex flex-col gap-6 justify-center items-start px-4 md:px-0 pt-10 md:pt-0">
          <div className="bg-slate-100 w-auto px-3 py-2 rounded-md">
            <span className="font-semibold text-lime-800 text-sm">
              Why Monline.
            </span>
          </div>
          <h2 className="text-5xl font-semibold">
            Make Payment But Without The Hassle
          </h2>
          <p className="font-normal text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            illo officia praesentium at labore amet. Perspiciatis illo, nam
            eveniet nobis obcaecati adipisci eum rerum placeat assumenda
            officiis? Suscipit, tenetur tempora!
          </p>
        </div>
      </div>

      <div className="w-full py-8 md:py-14 flex flex-col md:flex-row justify-center items-center gap-6 md:px-14 px-4 md:px-0">
        <div className="rounded-3xl h-56 w-full md:w-1/3 flex flex-col justify-center items-start gap-3 px-5 border-2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center p-4 bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-indigo-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl">End Late Payments</h3>
          <p className="text-slate-600 font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            facere quibusdam mollitia quisquam voluptatem odit?
          </p>
        </div>
        <div className="rounded-3xl h-56 w-full md:w-1/3 flex flex-col justify-center items-start gap-3 px-5 border-2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center p-4 bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-indigo-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl">Admin Automation</h3>
          <p className="text-slate-600 font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            facere quibusdam mollitia quisquam voluptatem odit?
          </p>
        </div>
        <div className="rounded-3xl h-56 w-full md:w-1/3 flex flex-col justify-center items-start gap-3 px-5 border-2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center p-4 bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-indigo-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-xl">Forget Expensive Fees</h3>
          <p className="text-slate-600 font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            facere quibusdam mollitia quisquam voluptatem odit?
          </p>
        </div>
      </div>

      {/* features */}
      <div className="w-full md:px-14 text-center py-16">
        <div className="bg-slate-100 w-24 mx-auto px-3 py-2 rounded-md mb-6">
          <span className="font-semibold text-lime-800 text-sm">Features</span>
        </div>
        <h2 className="text-4xl font-semibold mb-4">
          All The Features You Need In One Place
        </h2>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab,
          tenetur deserunt ullam dolorem exercitationem!
        </p>
        {/* cards */}
        <div className="px-4 md:px-1 flex flex-col md:flex-row items-center gap-12 py-14">
          <FeaturesCard
            heading={"Instant One-Off Payments Quickly and Easy"}
            childCardColor={"bg-emerald-950"}
          />
          <FeaturesCard
            heading={"Automatically Recurring Payments"}
            childCardColor={"bg-cyan-600"}
          />
        </div>
      </div>

      {/* money payments */}
      <InternationalPaymentsCard />

      {/* Testiomials */}
      <div className="w-full py-6 md:px-24 text-center">
        <div className="py-8">
          <div className="bg-slate-100 w-28 mx-auto px-3 py-2 rounded-md mb-6">
            <span className="font-semibold text-lime-800 text-sm">
              Testiomials
            </span>
          </div>
          <h2 className="text-5xl font-semibold mb-6">
            What Our Customers <br /> Are Saying
          </h2>
          <p className="text-slate-500 text-sm font-medium mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            adipisci deserunt soluta, veniam omnis quis <br /> perferendis
            tempora error impedit illo saepe. Eaque.
          </p>
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 py-8 px-4 md:px-0">
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="w-full py-12 md:px-14">
        <div className="flex flex-col md:flex-row gap-4 px-4 md:px-0">
          <div className="w-full md:w-2/4 px-0 py-6">
            <div className="bg-slate-100 w-28 px-3 py-2 rounded-md mb-6">
              <span className="font-semibold text-lime-800 text-sm">
                Our Mission
              </span>
            </div>
            <h2 className="text-5xl font-semibold mb-6 leading-los">
              Meet Money <br /> Without Borders
            </h2>
            <p className="text-slate-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              doloremque assumenda quaerat molestiae necessitatibus aspernatur,
              labore odio id magni ea vel repellat libero est quis adipisci
              provident? Quibusdam, porro illo!
            </p>
            <button className="bg-indigo-700 text-white font-medium px-4 py-2 border-2 border-indigo-700 rounded-md hover:bg-indigo-600">
              Learn Our Mission
            </button>
          </div>
          <div className="w-full md:w-2/4 px-4 py-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1682284079685-657fb4f33de5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* ready to get started */}
      <div className="w-full py-8 md:px-14">
        <div className="bg-slate-100 w-full py-14 text-center rounded-xl">
          <h1 className="text-5xl mb-9 font-semibold">
            Ready To Get Started <br />
            for Better Payments
          </h1>
          <div className="w-full flex justify-center items-center gap-6">
            <button className="bg-indigo-700 text-white font-medium px-7 py-3 border-2 border-indigo-700 rounded-md hover:bg-indigo-600">
              Get Started
            </button>
            <button className="px-4 py-3 rounded-md font-medium border-2 border-white bg-white hover:bg-indigo-700 hover:border-indigo-600 hover:text-white flex items-center gap-x-1">
              <IoPlayOutline className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
