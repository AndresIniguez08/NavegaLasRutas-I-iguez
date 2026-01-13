import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartWidget = () => {
  const cartCount = 3; // valor hardcodeado

  return (
    <div className="relative">
      <ShoppingCartIcon className="h-6 w-6 text-gray-800 cursor-pointer" />
      <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-semibold rounded-full px-1.5">
        {cartCount}
      </span>
    </div>
  );
};

export default CartWidget;
