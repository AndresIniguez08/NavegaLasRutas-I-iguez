import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-6xl p-4">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Tu carrito está vacío
        </h2>
        <Link to="/" className="text-blue-600 underline">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-4">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Carrito</h2>

      <div className="mb-6 space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">
          Total: ${totalPrice}
        </h3>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={clearCart}
            className="rounded-md border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Vaciar carrito
          </button>

          <Link
            to="/checkout"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </main>
  );
}