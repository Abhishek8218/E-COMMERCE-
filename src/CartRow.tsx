

import { ChangeEvent, FC } from "react";
import { CiCircleRemove } from "react-icons/ci";

type CartRowProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
  quantity: number;
  onQuantityChange: Function;
  onRemove: Function;
};

const CartRow: FC<CartRowProps> = ({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(product.id);
  }

  function handleMouseEnter() {
    console.log("handleMouseEnter called");
  }

  return (
    <div className="flex flex-col px-2 py-2 font-bold border md:justify-between text-md text-gray-light border-gray-default md:px-4 md:items-center md:space-x-4 md:flex-row">
      <div className="flex justify-between py-2 mx-2 border md:block border-gray-default md:border-none">
        <span></span>
        <span className="flex items-center w-10 h-10">
          <CiCircleRemove
            className="text-2xl"
            onClick={handleCrossClick}
            onMouseEnter={handleMouseEnter}
          />
        </span>
      </div>
      <div className="flex items-center justify-center py-2 mx-2 border md:py-0 md:border-none sm:hidden md:block border-gray-default border-y-none md:mx-auto md:w-20 md:h-20">
        <img
          className="w-16 h-16 md:object-cover md:w-full md:h-full "
          src={product.thumbnail}
        />
      </div>
      <div className="flex justify-between px-2 py-2 mx-2 border md:block md:border-none border-gray-default">
        <div className="font-bold text-gray-light md:hidden">Product</div>
        <div className="md:grow text-primary-default">{product.title}</div>
      </div>
      <div className="flex justify-between px-2 py-2 mx-2 border md:px-none md:flex-none md:py-none mx:mx-none md:block md:border-none border-gray-default">
        <div className="font-bold md:hidden">Price</div>
        <div className="w-12 md:pl-40 md:w-20">${product.price}</div>
      </div>
      <div className="flex justify-between px-2 py-2 mx-2 border md:flex-none md:py-none md:mx-none md:border-none border-gray-default">
        <div className="font-bold md:hidden">Quantity</div>
        <div className="w-12 md:w-32">
          <input
            type="number"
            className="p-1 border rounded-md border-gray-default w-12 md:p-1 md:mx-2"
            value={quantity}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-between px-2 py-2 mx-2 border md:mx-none md:py-none md:border-none border-gray-default">
        <span className="font-bold md:hidden">Subtotal</span>
        <span className="w-12 md:w-20">${product.price * quantity}</span>
      </div>
    </div>
  );
};

export default CartRow;