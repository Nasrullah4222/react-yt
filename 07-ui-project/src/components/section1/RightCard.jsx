import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 overflow-hidden relative shrink-0 rounded-4xl">
      <img src={props.img} alt="" className="h-full w-full object-cover" />
      <RightCardContent tag={props.tag} id={props.id} color={props.color} />
    </div>
  );
};

export default RightCard;
