const ItemListContainer = ({ greeting }) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold text-gray-900">{greeting}</h2>

      <p className="mt-2 text-sm text-gray-600">
        Próximamente vas a ver acá el catálogo de productos.
      </p>
    </main>
  );
};

export default ItemListContainer;
