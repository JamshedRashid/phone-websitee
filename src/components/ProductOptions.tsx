"use client";

import { useState } from "react";
import type { Product } from "../data/products";

type ProductOptionsProps = {
  product: Product;
};

export default function ProductOptions({
  product,
}: ProductOptionsProps) {
  const variants = product.variants ?? [];
  const [selectedId, setSelectedId] = useState(
    variants.find((variant) => variant.available)?.id ??
      variants[0]?.id ??
      ""
  );

  const selectedVariant = variants.find(
    (variant) => variant.id === selectedId
  );

  const colors = Array.from(
    new Set(variants.map((variant) => variant.color))
  );

  const storageOptions = variants.filter(
    (variant) => variant.color === selectedVariant?.color
  );

  function selectColor(color: string) {
    const matchingVariants = variants.filter(
      (variant) => variant.color === color
    );

    const nextVariant =
      matchingVariants.find((variant) => variant.available) ??
      matchingVariants[0];

    if (nextVariant) setSelectedId(nextVariant.id);
  }

  const price = selectedVariant?.priceBdt ?? product.priceBdt;
  const available = selectedVariant?.available ?? product.available;

  return (
    <div className="mt-10">
      {variants.length > 0 && (
        <div className="space-y-7">
          <div>
            <p className="mb-3 text-sm font-medium">Colour</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => selectColor(color)}
                  aria-pressed={selectedVariant?.color === color}
                  className={`rounded-full border px-5 py-2.5 text-sm transition ${
                    selectedVariant?.color === color
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white/65 hover:border-black/40"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium">Storage</p>
            <div className="flex flex-wrap gap-2">
              {storageOptions.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedId(variant.id)}
                  aria-pressed={selectedId === variant.id}
                  disabled={!variant.available}
                  className={`rounded-full border px-5 py-2.5 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 ${
                    selectedId === variant.id
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white/65 hover:border-black/40"
                  }`}
                >
                  {variant.storage}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <p className="mt-8 text-3xl font-semibold">
        ৳{price.toLocaleString("en-BD")}
      </p>

      {product.bookingAmountBdt !== undefined && (
        <p className="mt-2 text-sm text-black/55">
          Booking amount: ৳
          {product.bookingAmountBdt.toLocaleString("en-BD")}
        </p>
      )}

      <p className="mt-4 text-sm text-black/55">
        {available
          ? "Availability confirmed"
          : "Currently unavailable"}
      </p>
    </div>
  );
}