
# Laboratory Exercise 4
## React useState and useEffect

### Guide Questions

**1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?**

We use searchText to store what the user is currently typing, while debouncedSearch stores the search value after the user stops typing for 300 milliseconds. This prevents the list from updating on every keystroke.

**2. What would happen if the debounce effect did not return a cleanup function?**

Without a cleanup function, previous timers would not be canceled. Multiple timers could finish and update the search value unnecessarily.

**3. What is the purpose of the dependency array? What happens if it is empty ([]) or left out completely?**

The dependency array tells React when an effect should run. If it contains searchText, the effect runs whenever searchText changes. If it is empty, it runs only on the initial mount. If it is omitted, it runs after every render.

**4. Why should we avoid sorting the original products array directly?**

We should avoid sorting the original array because it changes the original data. Making a copy before sorting prevents unexpected changes in the product list.

**5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.**

The filtered product list is better calculated from the existing state during rendering because it is derived from the search text, category, sorting order, and original products. This avoids duplicate state and unnecessary updates.
