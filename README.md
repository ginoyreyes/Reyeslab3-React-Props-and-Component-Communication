# CvSU Mini Store - Lab 4 Guide Questions

### 1. Why use `searchText` and `debouncedSearch` instead of just one state?
- **`searchText`** updates right away so typing in the input box feels smooth and instant.
- **`debouncedSearch`** waits 300ms after you pause typing before updating, so the product list does not re-filter on every single keystroke.

### 2. What would happen without a cleanup function in the debounce effect?
- Old `setTimeout` timers from earlier keystrokes would stay active.
- Those leftover timers could fire late and update `debouncedSearch` with outdated or unexpected text.

### 3. What is the dependency array for, and what happens with `[]` or no array?
- It tells React which values should trigger the effect to run again.
- **`[]` (empty array):** Runs only once when the component first mounts.
- **No dependency array:** Runs after every single render.

### 4. Why should we avoid sorting the `products` array directly?
- `.sort()` changes an array in place (it mutates it).
- Sorting `products` directly would permanently change the original order and can cause bugs when resetting filters or viewing default order.

### 5. Should the filtered list be in its own state or calculated during render?
- Calculating it during render from existing state (`debouncedSearch`, `category`, `sortOrder`) is simpler and safer.
- It avoids extra state variables that can go out of sync and keeps state as a single source of truth.
