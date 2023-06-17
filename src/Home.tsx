import React from "react";
import { Carousel } from "antd";
import StatsCard from "./components/Card";
// import banner1 from ''

const contentStyle: React.CSSProperties = {
  // height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => (
  <div className=" h-[90vh] flex">
    <div className="h-[100%] w-3/4">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Adverstisement</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Advertisement</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Advertisement</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Advertisement</h3>
        </div>
      </Carousel>
      <div className="flex flex-1">
        {" "}
        <div className="w-2/3 bg-red-400 h-[100%]">Upcoming School Events</div>
        <div className="w-1/3 bg-red-800">News and Updates</div>
      </div>
    </div>
    <div className="flex p-4 w-1/4 bg-green-400">
      <div className="w-2/3 ">Announcement Area</div>
    </div>
  </div>
);

export default Home;
