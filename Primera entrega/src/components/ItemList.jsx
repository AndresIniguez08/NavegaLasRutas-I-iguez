import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {items.map((prod) => (
        <Item key={prod.id} item={prod} />
      ))}
    </section>
  );
};

export default ItemList;
