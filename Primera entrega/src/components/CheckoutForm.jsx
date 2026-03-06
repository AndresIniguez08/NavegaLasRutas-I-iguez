export default function CheckoutForm() {
  return (
    <div className="p-6">
      <h2>Checkout</h2>

      <form className="flex flex-col gap-3 max-w-sm">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Teléfono" required />

        <button type="submit">
          Confirmar compra
        </button>
      </form>
    </div>
  );
}