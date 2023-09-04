import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <NavBar />
      <Home />
      <Products />
    </div>
  );
}

export default App;
