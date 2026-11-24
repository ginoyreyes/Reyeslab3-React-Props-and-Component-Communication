
import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // Search states
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Filter and sorting states
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Cart state
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState("");

  // 1. Debounce effect (300 milliseconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  // 2. Filter products by keyword and category
  const filteredProducts = products
    .filter((product) =>
      product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    )
    .filter((product) =>
      category === "All" || product.category === category
    );

  // 3. Sort products without modifying the original array
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") {
      return a.price - b.price;
    }

    if (sortOrder === "high-low") {
      return b.price - a.price;
    }

    return 0;
  });

  // 4. Update browser tab title
  useEffect(() => {
    document.title = `CvSU Mini Store (${sortedProducts.length} results)`;
  }, [sortedProducts.length]);

  // 5. Add product to cart
  function handleAddToCart(product) {
    setCart((previousCart) => [...previousCart, product]);
    setCartMessage(`${product.title} added to cart!`);
  }

  // 6. Clear all filters
  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
    setCartMessage("");
  }

  return (
    <div className="store-container">
      {/* Header */}
      <header className="store-header">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div>
              <h1 className="store-title">CvSU Mini Store</h1>
              <p className="store-subtitle">
                Find the products you need
              </p>
            </div>

            <div className="cart-display">
              <span className="cart-icon">🛒</span>
              <span>Cart: {cart.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-4">
        {/* Search and filters */}
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          category={category}
          setCategory={setCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onClear={handleClearFilters}
        />

        {/* Cart feedback */}
        {cartMessage && (
          <div className="alert alert-success" role="status">
            {cartMessage}
          </div>
        )}

        {/* Result count */}
        <div className="result-info">
          <h5>
            Showing {sortedProducts.length} of {products.length} products
          </h5>
        </div>

        {/* Product list or empty state */}
        {sortedProducts.length > 0 ? (
          <div className="row g-4">
            {sortedProducts.map((product) => (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                key={product.id}
              >
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try a different keyword or category.</p>

            <button
              className="btn btn-primary mt-2"
              onClick={handleClearFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="store-footer">
        <p>DCIT26 - React Laboratory Exercise 4</p>
        <p>useState and useEffect | Live Search and Filter</p>
      </footer>
    </div>
  );
}

export default App;
