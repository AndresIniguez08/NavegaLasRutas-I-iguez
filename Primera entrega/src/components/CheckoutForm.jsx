import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // con esto evito que se recargue la página al enviar el formulario

    setError("");

    if (cart.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Completá todos los campos.");
      return;
    }

    const order = {
      buyer: formData,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
      date: new Date(),
    };

    console.log("Orden generada:", order);

    // id simulado por ahora
    const fakeOrderId = `ORDER-${Date.now()}`;
    setOrderId(fakeOrderId);

    clearCart();
  };

  if (orderId) {
    return (
      <main className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">¡Compra realizada con éxito!</h2>
        <p className="mb-2">Tu número de orden es:</p>
        <p className="text-lg font-semibold text-green-700 mb-4">{orderId}</p>

        <Link to="/" className="text-blue-600 underline">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {error && (
        <p className="mb-4 rounded-md bg-red-100 px-3 py-2 text-red-700">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="max-w-md space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2"
        />

        <button
          type="submit"
          className="rounded-lg bg-gray-900 px-4 py-2 text-white"
        >
          Confirmar compra
        </button>
      </form>
    </main>
  );
}