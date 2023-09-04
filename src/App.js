import NavBar from "./components/navbar/NavBar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
