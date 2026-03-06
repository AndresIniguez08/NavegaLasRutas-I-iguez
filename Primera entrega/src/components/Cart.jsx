import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-6">
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2>Carrito</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${totalPrice}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>

      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
}