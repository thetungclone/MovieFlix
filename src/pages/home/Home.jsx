import React from "react";
import "./Home.scss";
import HeroBanner from "./herobanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: 37 }}></div>

      <Trending />
      <div style={{ height: 30 }}></div>

      <Popular />
      <div style={{ height: 30 }}></div>

      <TopRated />
      <div style={{ height: 50 }}></div>
    </div>
  );
};

export default Home;
