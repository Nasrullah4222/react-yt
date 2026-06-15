import LeftContent from "./leftContent";
import RightContent from "./rightContent";

const Page1Content = (props) => {
  return (
    <div className="pb-20 pt-6 flex items-center justify-between h-[90vh] px-22">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
