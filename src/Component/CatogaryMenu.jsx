import React from "react";

const CatogaryMenu = () => {
  return (
    <div className="mx-6 px-6">
      <h3 className="font-semibold font-serif mb-5">Find the best food</h3>

      <div className="flex gap-3 font-serif overflow-x-scroll scroll-smooth sm:overflow-hidden ">
        <button className="px-3 py-2 border rounded-md bg-green-400 active:bg-red-500 ">
          All
        </button>

        <button className="px-3 py-2 boeder rounded-md  bg-green-400 hover:bg-red-500 ">
          Lunch
        </button>

        <button className="px-3 py-2 boeder rounded-md  bg-green-400  hover:bg-red-500 ">
          BreakFast
        </button>

        <button className="px-3 py-2 boeder rounded-md  bg-green-400 hover:bg-red-500  ">
          Dinner
        </button>

        <button className="px-3 py-2 boeder rounded-md bg-green-400 hover:bg-red-500  ">
          Snacks
        </button>
      </div>
    </div>
  );
};
export default CatogaryMenu;
