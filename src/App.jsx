import { useEffect, useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const normalizedQuery = debouncedSearch.trim().toLowerCase();

  const filteredList = products.filter((product) => {
    const matchesTitle = product.title.toLowerCase().includes(normalizedQuery);
    const matchesCategory = category === "All" || product.category === category;
    return matchesTitle && matchesCategory;
  });

  const displayedProducts = [...filteredList].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    return 0;
  });

  useEffect(() => {
    document.title = `CvSU Mini Store (${displayedProducts.length} results)`;
  }, [displayedProducts.length]);

  function handleAddToCart(productTitle) {
    setCartCount((prev) => prev + 1);
    setLastAdded(productTitle);
  }

  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
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

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        onClearFilters={handleClearFilters}
      />

      <p className="results-summary">
        Showing {displayedProducts.length} of {products.length} products
      </p>

      {displayedProducts.length === 0 ? (
        <div className="empty-state">
          <p>No products found. Try a different keyword or category.</p>
        </div>
      ) : (
        <section className="product-grid">
          {displayedProducts.map((item) => (
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
      )}
    </main>
  );
}

export default App;
