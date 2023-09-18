import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import classNames from "classnames";
import { ordersData } from "../data/dummy";
import { Button } from "../components";
import CartItem from "./CartItem";
const Cart = () => {
  const { animationEffect, handleAnimationClick, currentColor } =
    useStateContext();
  const cartClass = classNames(
    "float-right h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-full md:w-400",
    { "animate-translationAnimation": animationEffect }
  );
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className={cartClass}>
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={handleAnimationClick}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex flex-col gap-y-4 w-[90%] mx-auto p-4">
          {ordersData
            .filter((element, index) => index < 3)
            .map((item, index) => (
              <CartItem
                key={index}
                img={item.ProductImage}
                productName={item.OrderItems}
              />
            ))}
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="flex justify-between text-sm">
                <h4 className="text-gray-400">Sub Total</h4>
                <p>$80</p>
              </div>
              <div className="flex justify-between text-sm">
                <h4 className="text-gray-400">Total</h4>
                <p>$100</p>
              </div>
            </div>
            <Button
              text="Place Order"
              size="lg"
              color="white"
              borderRadius="10px"
              bgColor={currentColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
