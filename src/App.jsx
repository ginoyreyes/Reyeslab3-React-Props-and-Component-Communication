import { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Callback function passed to child components
  function handleAddToCart(productTitle) {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>🛒 CvSU Mini Store</h1>
          <p>Simple shopping. Great products.</p>
        </div>
      </header>

      <main className="container">
        {/* Cart message */}
        <div className="cart-message">
          {cartCount === 0 ? (
            <h3>Your cart is empty.</h3>
          ) : (
            <h3>
              Items added to cart: {cartCount} 
              <span className="last-added">
                {" "} (Last added: {lastAdded})
              </span>
            </h3>
          )}
        </div>

        {/* Products */}
        <section className="products-section">
          <h2>Our Products</h2>
          <p className="section-description">
            Browse our available products below.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {/* Children badges on selected products */}
                {product.id === 1 && <span>New</span>}
                {product.id === 5 && <span>Best Seller</span>}
              </ProductCard>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>DCIT26 • React Props & Component Communication</p>
        <p>Laboratory Exercise 3</p>
      </footer>
    </div>
  );
}

export default App;