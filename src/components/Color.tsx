type colorData = string;

const Color = (props: { color: string }) => {
  return (
    <div
      className="w-10 h-10 m-2 cursor-pointer border-2 border-gray-200 rounded-lg"
      style={{ backgroundColor: props.color }}
    ></div>
  );
};

export default Color;
