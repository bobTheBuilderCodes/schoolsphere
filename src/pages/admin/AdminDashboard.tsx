import { useParams } from "react-router-dom";
import { useState } from "react";
import StatsCard from "../../components/Card";

const AdminDashboard: React.FC = () => {
  const { adminId } = useParams();

  const style = {
    height: "90vh",
    // marginTop: "10px",
  };

  return (
    <div className="flex bg-gray-100 p-2">
      <div>
        {/* Cards */}
        <div className="flex ">
          <div className="  p-2">
            <StatsCard />
          </div>{" "}
          <div className="  p-2">
            <StatsCard />
          </div>{" "}
          <div className=" p-2">
            <StatsCard />
          </div>
        </div>
        {/* Graph */}
        <div className="flex h-2/5 m-3 mb-4 rounded-lg  justify-between">
          <div className="w-2/3 bg-white rounded-lg">1</div>
          <div className="bg-white rounded-lg w-[32%]">2</div>
        </div>
        <div className="flex h-[36%] flex-1 m-3 rounded-lg  ">
          <div className="w-1/3 rounded-lg bg-white">22</div>
          <div className="w-2/3 rounded-lg bg-white ml-3">23</div>
        </div>
      </div>
      {/* Second part */}
      <div className=" flex flex-1 ">
        <div className="p-2 w-[100%]">
          <div
            className={"cardStyle "}
            style={{ ...style, width: "100%", maxHeight: "86vh" }}
          ></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
