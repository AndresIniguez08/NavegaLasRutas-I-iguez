import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/productsService";

import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const request = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    request.then((res) => setProducts(res)).finally(() => setLoading(false));
  }, [categoryId]); // 👈 requisito de la consigna

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      {greeting && !categoryId && (
        <h1 className="text-xl font-semibold mb-4">{greeting}</h1>
      )}

      {categoryId && (
        <h2 className="text-lg font-semibold mb-4">Categoría: {categoryId}</h2>
      )}

      {loading ? <p>Cargando productos...</p> : <ItemList items={products} />}
    </main>
  );
};

export default ItemListContainer;
