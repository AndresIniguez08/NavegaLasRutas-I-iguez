import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <article className="border rounded-lg p-3 bg-white shadow-sm">
      <img
        src={item.pictureUrl}
        alt={item.title}
        className="w-full rounded mb-2"
      />
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600">${item.price}</p>

      <Link to={`/item/${item.id}`} className="text-sm text-blue-600 underline">
        Ver detalle
      </Link>
    </article>
  );
};

export default Item;
