import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-bold h-10 w-10 rounded-full flex justify-center py-1">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-white mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            corrupti dolore repudiandae modi tempore unde!
          </p>
          <div className="flex justify-between">
            <button
              style={{ backgroundColor: props.color }}
              className=" text-white font-medium px-7 py-2 rounded-full"
            >
              {props.tag}
            </button>
            <button
              style={{ backgroundColor: props.color }}
              className=" text-white font-medium px-6 py-0.5 rounded-full"
            >
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
