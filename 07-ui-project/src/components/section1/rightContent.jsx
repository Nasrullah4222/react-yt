import RightCard from "./RightCard";
const rightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full w-3/5 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl"
    >
      {props.users.map(function (elm, idx) {
        return (
          <RightCard
            img={elm.img}
            tag={elm.tag}
            key={idx}
            id={idx}
            color={elm.color}
          />
        );
      })}
    </div>
  );
};

export default rightContent;
