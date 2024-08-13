import React from "react";
import { FaStar } from "react-icons/fa";

const FoodCart = () => {
  return (
    <div className=" flex flex-wrap p-0 gap-10 mt-10">
      <div className=" w-[250px] bg-white p-5 flex flex-col rounded-lg">
        <img
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
          alt=""
        />
        <div className="mx-6 font-bold flex text-sm justify-between mt-5">
          <h2>Onion Pizza</h2>
          <span className="text-green-500">₹150</span>
        </div>
        <p className="font-normal text-sm mx-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="font-semibold flex justify-between mt-3">
          <span className=" mx-6 mt-3 font-semibold flex items-center">
            <FaStar /> 4.5
          </span>
          <button className="text-white rounded bg-green-500  hover:bg-green-600 px-2 active:bg-black">
            Add Cart
          </button>
        </div>
      </div>

      <div className=" w-[250px] bg-white p-5 flex flex-col rounded-lg">
        <img
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          src="https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png"
          alt=""
        />
        <div className="mx-6 font-bold flex text-sm justify-between mt-5">
          <h2>Margherita Pizza</h2>
          <span className="text-green-500">₹130</span>
        </div>
        <p className="font-normal text-sm mx-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="font-semibold flex justify-between mt-3">
          <span className=" mx-6 mt-3 font-semibold flex items-center">
            <FaStar /> 4.3
          </span>
          <button className="text-white rounded bg-green-500  hover:bg-green-600 px-2 active:bg-black">
            Add Cart
          </button>
        </div>
      </div>

      <div className=" w-[250px] bg-white p-5 flex flex-col rounded-lg">
        <img
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          src="https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png"
          alt=""
        />
        <div className="mx-6 font-bold flex text-sm justify-between mt-5">
          <h2>Pepperoni Pizza</h2>
          <span className="text-green-500">₹160</span>
        </div>
        <p className="font-normal text-sm mx-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="font-semibold flex justify-between mt-3">
          <span className=" mx-6 mt-3 font-semibold flex items-center">
            <FaStar /> 4.0
          </span>
          <button className="text-white rounded bg-green-500  hover:bg-green-600 px-2 active:bg-black">
            Add Cart
          </button>
        </div>
      </div>

      <div className=" w-[250px] bg-white p-5 flex flex-col rounded-lg">
        <img
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          src="https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png"
          alt=""
        />
        <div className="mx-6 font-bold flex text-sm justify-between mt-5">
          <h2>Mushroom and Spinach Pizza</h2>
          <span className="text-green-500">₹140</span>
        </div>
        <p className="font-normal text-sm mx-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="font-semibold flex justify-between mt-3">
          <span className=" mx-6 mt-3 font-semibold flex items-center">
            <FaStar /> 3.3
          </span>
          <button className="text-white rounded bg-green-500  hover:bg-green-600 px-2 active:bg-black">
            Add Cart
          </button>
        </div>
      </div>

      <div className=" w-[250px] bg-white p-5 flex flex-col rounded-lg">
        <img
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          src="https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png"
          alt=""
        />
        <div className="mx-6 font-bold flex text-sm justify-between mt-5">
          <h2>Cheez Pizza</h2>
          <span className="text-green-500">₹170</span>
        </div>
        <p className="font-normal text-sm mx-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="font-semibold flex justify-between mt-3">
          <span className=" mx-6 mt-3 font-semibold flex items-center">
            <FaStar /> 5.1
          </span>
          <button className="text-white rounded bg-green-500  hover:bg-green-600 px-2 active:bg-black">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCart;
