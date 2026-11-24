import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <div className={`product-card $DIL1`}>
      {/* Special badge passed through children */}
      {children && <div className="product-badge">{children}</div>}

      <div className="product-icon">
        🛍️
      </div>

      <h3>{title}</h3>

      <p className="product-category">{category}</p>

      <p className="product-price">
        ₱{price.toLocaleString("en-PH", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>

      {/* Conditional rendering for stock status */}
      {inStock ? (
        <span className="stock-status available">
          ● In Stock
        </span>
      ) : (
        <span className="stock-status unavailable">
          ● Out of Stock
        </span>
      )}

      {/* Button is disabled when out of stock */}
      <button
        className="add-to-cart-btn"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}

export default ProductCard; 