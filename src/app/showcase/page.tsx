import Link from "next/link";
import ShowcasePhoneCard from "../../components/ShowcasePhoneCard";
import SiteHeader from "../../components/SiteHeader";
import { showcasePhones } from "../../data/showcasePhones";

const brands = ["Apple", "Samsung", "Google"] as const;

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#111111]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
            Device showcase
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Explore the phones.
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-black/55">
            A design showcase of selected phones. These are demo listings:
            prices, stock, and store availability have not been confirmed.
            Follow each card’s link for the manufacturer’s specifications.
          </p>

          <Link
            href="/products#phones"
            className="mt-8 inline-flex rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium transition hover:bg-white"
          >
            Search and filter phones ↗
          </Link>
        </div>

        {brands.map((brand) => {
          const phones = showcasePhones.filter(
            (phone) => phone.brand === brand,
          );

          if (phones.length === 0) return null;

          return (
            <section key={brand} className="pb-20">
              <h2 className="mb-8 border-t border-black/10 pt-8 text-2xl font-semibold tracking-tight">
                {brand}
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {phones.map((phone) => (
                  <ShowcasePhoneCard key={phone.id} phone={phone} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}