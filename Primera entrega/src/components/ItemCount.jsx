import { useState } from "react";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(
    Math.min(Math.max(initial, 1), stock || 1),
  );

  const dec = () => setCount((c) => Math.max(1, c - 1));
  const inc = () => setCount((c) => Math.min(stock, c + 1));

  return (
    <div className="flex items-center gap-3">
      <button
        className="px-3 py-1 border rounded-lg"
        onClick={dec}
        disabled={stock === 0}
      >
        -
      </button>

      <span className="min-w-6 text-center">{count}</span>

      <button
        className="px-3 py-1 border rounded-lg"
        onClick={inc}
        disabled={stock === 0}
      >
        +
      </button>

      <button
        className="px-4 py-1 rounded-lg bg-gray-900 text-white"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar
      </button>

      {stock === 0 && <small className="text-red-600">Sin stock</small>}
    </div>
  );
}
