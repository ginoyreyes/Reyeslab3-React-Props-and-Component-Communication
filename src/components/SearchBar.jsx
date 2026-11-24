
function SearchBar({
  searchText,
  setSearchText,
  category,
  setCategory,
  sortOrder,
  setSortOrder,
  onClear,
}) {
  return (
    <div className="search-bar">
      {/* Search keyword */}
      <div className="search-input">
        <label className="form-label">Search Product</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Category filter */}
      <div className="filter-input">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Price sorting */}
      <div className="filter-input">
        <label className="form-label">Sort By</label>
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Clear filters */}
      <div className="clear-button">
        <label className="form-label invisible">Clear</label>
        <button
          className="btn btn-outline-danger w-100"
          onClick={onClear}
        >
          <i className="bi bi-arrow-counterclockwise me-1"></i>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
