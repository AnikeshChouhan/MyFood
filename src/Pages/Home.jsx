import React from "react";
import { Navbar } from "../Component/Navbar";
import CatogaryMenu from "../Component/CatogaryMenu";
import { FoodItem } from "../Component/FoodItem";

const Home = () => {
  return (
    <>
      <Navbar />
      <CatogaryMenu />
      <FoodItem />
    </>
  );
};

export default Home;
