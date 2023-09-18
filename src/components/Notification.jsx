import { employeesData } from "../data/dummy";
import { Button } from "../components";
import Message from "./Message";
import { useStateContext } from "../contexts/ContextProvider";
import classNames from "classnames";

const Notification = () => {
  const { currentColor, initialState } = useStateContext();
  const notificationClass = classNames(
    "fixed top-14 bg-gray-100 inset-x-0 xl:left-[78rem] top-16 w-[90%] md:w-[60%] xl:w-[21%] mx-auto xl:mx-0 rounded-lg z-50 flex flex-col p-6 max-h-[600px] overflow-y-auto dark:bg-main-dark-bg ",
    { "animate-opacityAnimation": initialState.notification }
  );
  return (
    <div className={notificationClass}>
      <div className="flex gap-x-3">
        <h2 className="font-semibold dark:text-white">Notifications</h2>
        <p
          style={{ backgroundColor: currentColor }}
          className="rounded-md px-2 text-white text-[0.8rem] py-1"
        >
          4 new
        </p>
      </div>
      <div className="w-full mx-auto mb-4 mt-1">
        {employeesData
          .filter((element, index) => index >= 4 && index <= 9)
          .map((item, index) => (
            <Message
              key={index}
              messageImg={item.EmployeeImage}
              messageName={item.Name}
            />
          ))}
      </div>
      <Button
        text="See all notifications"
        borderRadius="10px"
        bgColor={currentColor}
        color="white"
      />
    </div>
  );
};

export default Notification;
