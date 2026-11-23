import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  function handleAddToCart(productTitle) {
    setCartCount((prev) => prev + 1);
    setLastAdded(productTitle);
  }

  return (
    <main className="store-container">
      <header className="store-header">
        <h1>CvSU Mini Store</h1>
        <p className="cart-banner">
          {cartCount === 0
            ? "Your cart is empty."
            : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
        </p>
      </header>

      <section className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            inStock={item.inStock}
            onAddToCart={handleAddToCart}
          >
            {item.id === 1 && <span className="badge badge-sale">Sale</span>}
            {item.id === 5 && <span className="badge badge-new">New</span>}
          </ProductCard>
        ))}
      </section>
    </main>
  );
}

export default App;
