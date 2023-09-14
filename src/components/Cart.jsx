import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import classNames from "classnames";
const Cart = () => {
  const { handleClick, animationEffect, handleAnimationClick } = useStateContext();
  const cartClass = classNames(
    "float-right h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-[280px] md:w-400",
    { "animate-translationAnimation": animationEffect }
  );
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className={cartClass}>
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Cart</p>
          <button
            type="button"
            onClick={handleAnimationClick}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
