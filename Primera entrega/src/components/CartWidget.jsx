import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { totalUnits } = useCart();

  return (
    <Link to="/cart" className="relative text-xl">
      🛒
      {totalUnits > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-2">
          {totalUnits}
        </span>
      )}
    </Link>
  );
}