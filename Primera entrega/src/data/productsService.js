import { products } from "./products";

const withDelay = (value, ms = 800) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

export const getProducts = () => withDelay(products);

export const getProductsByCategory = (categoryId) =>
  withDelay(products.filter((p) => p.category === categoryId));

export const getProductById = (itemId) =>
  withDelay(products.find((p) => p.id === itemId));
