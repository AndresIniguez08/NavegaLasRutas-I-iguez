import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
  const cartCount = 3; // valor fijo por pedido del ejemplo, esto deberia ser dinamico segun el estado del carrito

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
