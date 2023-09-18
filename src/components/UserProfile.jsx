import { earningData } from "../data/dummy";
import avatar from "../data/avatar.jpg";
import { Button } from "../components";
import Message from "./Message";
import { useStateContext } from "../contexts/ContextProvider";
import classNames from "classnames";

const UserProfile = () => {
  const { currentColor, initialState } = useStateContext();
  const userProfileClass = classNames(
    "fixed top-14 bg-gray-100 inset-x-0 xl:left-[85rem] top-16 w-[90%] md:w-[60%] xl:w-[21%] mx-auto xl:mx-0 rounded-lg z-50 flex flex-col p-6 max-h-[600px] overflow-y-auto ",
    { "animate-opacityAnimation": initialState.userProfile }
  );
  return (
    <div className={userProfileClass}>
      <div className="flex gap-x-3">
        <h2 className="font-semibold">User Profile</h2>
      </div>
      <div className="w-full mx-auto mb-4 mt-1">
        <div className="flex items-center gap-x-3">
          <img src={avatar} alt="user avatar" className="rounded-full w-1/3"/>
          <p>Alex Lisandro</p>
        </div>
      </div>
      <Button
        text="Log Out"
        borderRadius="10px"
        bgColor={currentColor}
        color="white"
      />
    </div>
  );
};

export default UserProfile;
