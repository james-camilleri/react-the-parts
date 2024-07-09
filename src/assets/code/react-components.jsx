export default function App() {
  return <FilterableProductTable products={PRODUCTS} />
}

// Functional component.
function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
