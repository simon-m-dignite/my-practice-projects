import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="lg:py-2 lg:px-10 md:shadow-sm fixed bg-white w-full">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <div
          className={
            showNav
              ? "flex justify-between items-center p-4"
              : "flex justify-between items-center p-4 shadow-md md:shadow-none"
          }
        >
          <div>
            <span className="logo font-bold text-2xl">Monoline.</span>
          </div>
          {/* toggle button */}
          <div className="block sm:hidden">
            {showNav ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleShowNav}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleShowNav}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </>
            )}
          </div>
        </div>
        {/* nav links */}
        <nav
          className={
            showNav
              ? "block mt-4 bg-white shadow-lg px-4 pb-6"
              : "hidden sm:block"
          }
        >
          <a
            href=""
            className="block md:inline my-4 md:my-0 md:mx-4 font-medium"
          >
            Why Monoline
          </a>
          <a
            href=""
            className="block md:inline my-4 md:my-0 md:mx-4 font-medium"
          >
            Products
          </a>
          <a
            href=""
            className="block md:inline my-4 md:my-0 md:mx-4 font-medium"
          >
            Company
          </a>
          <a
            href=""
            className="block md:inline my-4 md:my-0 md:mx-4 font-medium"
          >
            Resources
          </a>
        </nav>
      </div>
    </header>
  );
}
