function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = `₱${Number(price).toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <article className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
      {children && <div className="badge-slot">{children}</div>}
      <span className="category-tag">{category}</span>
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{formattedPrice}</p>

      <p className={`stock-status ${inStock ? "in-stock" : "out-of-stock-text"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        type="button"
        className="add-btn"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </article>
  );
}

export default ProductCard;
