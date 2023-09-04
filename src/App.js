import NavBar from "./components/navbar/NavBar";
import About from "./pages/about/About";
// import CartView from "./pages/cart/CartView";
import Home from "./pages/home/Home";
// import Products from "./pages/products/Products";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <NavBar />
      <Home />
      {/* <Products />
      <CartView /> */}
      <About />
    </div>
  );
}

export default App;
