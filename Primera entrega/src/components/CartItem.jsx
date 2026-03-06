import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div className="border p-3 my-2">
      <h4>{item.title}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio: ${item.price}</p>

      <button onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
  );
}