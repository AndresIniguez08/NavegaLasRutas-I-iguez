import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <article className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm">
      <img
        src={item.pictureUrl}
        alt={item.title}
        className="h-20 w-20 rounded-md object-cover border"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
        <p className="text-sm text-gray-600">Precio unitario: ${item.price}</p>
        <p className="font-medium text-gray-900">
          Subtotal: ${item.price * item.quantity}
        </p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
      >
        Eliminar
      </button>
    </article>
  );
}