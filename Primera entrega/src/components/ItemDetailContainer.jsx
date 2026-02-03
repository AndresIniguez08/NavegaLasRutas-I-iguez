import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/productsService";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((res) => setItem(res ?? null))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <main className="p-4">Cargando detalle...</main>;
  if (!item) return <main className="p-4">Producto no encontrado.</main>;

  return (
    <main className="max-w-6xl mx-auto p-4">
      <ItemDetail item={item} />
    </main>
  );
}
