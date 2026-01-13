import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Fox Stickers! Elegí tus favoritos." />
    </div>
  );
}

export default App;
