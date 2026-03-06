import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="¡Bienvenido a Fox Stickers! Elegí tus favoritos." />
          }
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        {/* NUEVAS RUTAS */}
        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<CheckoutForm />} />

        <Route
          path="*"
          element={<h2 className="p-4">404 - Página no encontrada</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;

