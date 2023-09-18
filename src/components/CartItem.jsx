import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = ({ img, productName }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex pb-5 border-b-2 gap-x-5 items-start">
      <img
        src={img}
        alt={productName}
        className="flex-1 rounded-xl w-[40%] h-[85px] object-cover"
      />
      <div className="flex flex-col w-[60%] gap-y-4">
        <div>
          <h6 className="font-bold">{productName}</h6>
          <p className="text-sm text-gray-400">Product type</p>
        </div>
        <div className="flex items-center gap-x-3">
          <p className="font-semibold">$250</p>
          <div className="flex border-green-400 border rounded-md w-[60%] items-center text-center h-[40px] text-green-400">
            <button
              className="border-green-400 border-r-1 h-full w-1/3"
              onClick={() => setCount((prevCount) => prevCount - 1)}
            >
              <AiOutlineMinus className="mx-auto" />
            </button>
            <p className="w-1/3">{count}</p>
            <button
              className="border-green-400 border-l-1 h-full w-1/3"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              <AiOutlinePlus className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
