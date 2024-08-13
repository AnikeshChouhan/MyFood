import React from "react";

export const Navbar = () => {
  return (
    <nav
      className=" flex justify-between flex-col 
    sm:flex-row py-3 mx-6 mb-10 bg-red-400 px-6 font-serif "
    >
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">MyFoods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="search here "
          id=""
          autoComplete="off"
          className="w-full lg:w-80 text-sm p-4 ps-5 border text-gray-900 rounded-lg border-gray-300 bg-gray-50 dark:focus:border-blue-500  focus:border-blue-500 hover:bg-lime-300"
        />
      </div>
    </nav>
  );
};
