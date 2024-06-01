"use client";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Header from "./header";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterProducts(query, activeCategory);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterProducts(searchQuery, category);
  };

  const filterProducts = (query, category) => {
    const filtered = products.filter((product) => {
      const isMatchingCategory =
        category === "" || product.category === category;
      const isMatchingQuery =
        query === "" ||
        product.title.toLowerCase().includes(query.toLowerCase());
      return isMatchingCategory && isMatchingQuery;
    });
    setFilteredProducts(filtered);
  };

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductDetails(product)}
              className="cursor-pointer h-full"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={handleCloseDetails}
          />
        )}
      </div>
    </>
  );
}
