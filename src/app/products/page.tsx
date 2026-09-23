"use client";

import { useMemo, useState } from "react";
import ProductCatalog from "../../components/ProductCatalog";
import ShowcasePhoneCard from "../../components/ShowcasePhoneCard";
import SiteHeader from "../../components/SiteHeader";
import { products } from "../../data/products";
import { showcasePhones } from "../../data/showcasePhones";

const brands = ["All", "Apple", "Samsung", "Google"] as const;
type BrandFilter = (typeof brands)[number];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<BrandFilter>("All");

  const visiblePhones = useMemo(() => {
    const term = search.trim().toLowerCase();

    return showcasePhones.filter((phone) => {
      const matchesBrand =
        selectedBrand === "All" || phone.brand === selectedBrand;

      const searchableText = [
        phone.brand,
        phone.name,
        phone.summary,
        ...phone.highlights,
      ]
        .join(" ")
        .toLowerCase();

      return matchesBrand && searchableText.includes(term);
    });
  }, [search, selectedBrand]);

  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#111111]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
            Explore the collection
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            Find your next device.
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-black/55">
            Browse the phone showcase below. Store prices and availability
            will appear only when product details are confirmed.
          </p>
        </div>

        <section id="phones" className="scroll-mt-32 pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-black/10 pt-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
                Device showcase · Demo listings
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Phones
              </h2>
            </div>

            <span className="text-sm text-black/45">
              {visiblePhones.length} of {showcasePhones.length} phones
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-black/55">
            These cards let you explore models and specifications. They do
            not indicate that NOVA has these phones in stock or for sale.
          </p>

          <div className="mt-8">
            <label htmlFor="phone-search" className="sr-only">
              Search showcase phones
            </label>

            <input
              id="phone-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search phones, brands, or features"
              className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-black/35 focus:border-black/40 focus:ring-2 focus:ring-black/5"
            />
          </div>

          <div
            role="group"
            aria-label="Filter phones by brand"
            className="mt-5 flex flex-wrap gap-2"
          >
            {brands.map((brand) => {
              const active = selectedBrand === brand;

              return (
                <button
                  key={brand}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedBrand(brand)}
                  className={`rounded-full px-5 py-2.5 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    active
                      ? "bg-black text-white"
                      : "border border-black/10 bg-white text-black/65 hover:border-black/25 hover:text-black"
                  }`}
                >
                  {brand === "All" ? "All brands" : brand}
                </button>
              );
            })}
          </div>

          {visiblePhones.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visiblePhones.map((phone) => (
                <ShowcasePhoneCard key={phone.id} phone={phone} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-white bg-white/75 px-6 py-16 text-center">
              <h3 className="text-xl font-semibold">No matching phones</h3>

              <p className="mt-2 text-sm text-black/50">
                Try another search or choose a different brand.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedBrand("All");
                }}
                className="mt-6 rounded-full bg-black px-5 py-2.5 text-sm text-white transition hover:bg-black/80"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section
          id="store-products"
          className="scroll-mt-32 border-t border-black/10 py-16 md:py-24"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            Confirmed inventory
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Store products
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-black/55">
            Products with confirmed images, prices, and availability will
            appear here when they are added.
          </p>

          <div className="mt-10">
            <ProductCatalog products={products} />
          </div>
        </section>
      </div>
    </main>
  );
}