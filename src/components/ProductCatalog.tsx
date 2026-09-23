"use client";

import { useState } from "react";
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

type ProductCatalogProps = {
  products: Product[];
};

export default function ProductCatalog({
  products,
}: ProductCatalogProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");

  const categories = [
    "All categories",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const visibleProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      product.description
        .toLowerCase()
        .includes(search.toLowerCase().trim());

    const matchesCategory =
      category === "All categories" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="mt-10 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products"
            className="h-14 w-full rounded-2xl border border-white/80 bg-white/70 px-5 text-sm outline-none backdrop-blur-xl placeholder:text-black/40 focus:border-black/40"
          />
        </label>

        <label className="block">
          <span className="sr-only">Filter by category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-14 w-full rounded-2xl border border-white/80 bg-white/70 px-5 text-sm outline-none backdrop-blur-xl focus:border-black/40 sm:min-w-48"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      {products.length === 0 ? (
        <div className="mt-12 rounded-[2rem] border border-white/80 bg-white/60 p-8 backdrop-blur-xl md:p-12">
          <h2 className="text-2xl font-semibold">
            Product details coming soon
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-black/55">
            This collection will appear here once product images,
            prices, and availability are confirmed.
          </p>
        </div>
      ) : visibleProducts.length === 0 ? (
        <div className="mt-12 rounded-[2rem] border border-white/80 bg-white/60 p-8 backdrop-blur-xl">
          <h2 className="text-xl font-semibold">No matching products</h2>
          <p className="mt-2 text-black/55">
            Try another search or category.
          </p>
        </div>
      ) : (
        <>
          <p className="mt-8 text-sm text-black/50">
            Showing {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "product" : "products"}
          </p>

          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                href={`/products/${product.id}`}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                category={product.category}
                name={product.name}
                description={product.description}
                priceLabel={`৳${product.priceBdt.toLocaleString("en-BD")}`}
                badge={
                  product.available
                    ? undefined
                    : "Currently unavailable"
                }
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}