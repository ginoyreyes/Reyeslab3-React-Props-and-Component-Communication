function SearchBar({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
  onClearFilters,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search products by keyword..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search products by keyword"
      />

      <select
        className="filter-select"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="School Supplies">School Supplies</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select
        className="filter-select"
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value)}
        aria-label="Sort products"
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>

      <button
        type="button"
        className="clear-btn"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}

export default SearchBar;
