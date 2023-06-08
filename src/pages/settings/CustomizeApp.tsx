import { Progress, Slider, Typography } from "antd";
import React from "react";
import Color from "../../components/Color";

const CustomizeApp = () => {
  const colors = [
    {
      id: 1,
      color: "brown",
    },
    {
      id: 1,
      color: "indigo",
    },
    {
      id: 1,
      color: "rebeccapurple",
    },
    {
      id: 1,
      color: "magenta",
    },
    {
      id: 1,
      color: "green",
    },
    {
      id: 1,
      color: "black",
    },
    {
      id: 1,
      color: "maroon",
    },
    {
      id: 1,
      color: "blue",
    },
  ];
  return (
    <div className="flex h-[90vh] bg-gray-100">
      <div className="w-3/4">1</div>
      {/* Second div */}
      <div className="border-l-2 p-4 border-gray-200 w-1/4">
        <div>
          <Typography.Title
            level={4}
            className="text-center pb-6 border-b-2 border-gray-200"
          >
            Let's Customize the App 🚀
          </Typography.Title>
        </div>
        <div>
          <Typography.Title level={5} className="m-4">
            Colors
          </Typography.Title>
          <div className="flex justify-around flex-wrap">
            {colors.map(({ color }) => (
              <div>
                <Color color={color} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Typography.Title level={5} className="m-4">
            Base Font-size
          </Typography.Title>
          <div className="flex justify-around flex-wrap">
            <Slider defaultValue={2} autoFocus={true} min={10} max={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeApp;
